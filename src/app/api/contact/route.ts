import { NextResponse } from "next/server";
import { Resend } from 'resend';
import { z } from "zod";

// Rate limiting map
const rateLimitMap = new Map<string, { count: number; timestamp: number }>();
const RATE_LIMIT_DURATION = 3600000; // 1 hour in milliseconds
const MAX_REQUESTS = 5; // Maximum requests per hour

// Form schema with honeypot
const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(5),
  message: z.string().min(10),
  _honeypot: z.string().length(0).optional(), // Honeypot field
});

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    // Get IP address for rate limiting
    const ip = req.headers.get('x-forwarded-for') || 'unknown';
    
    // Check rate limit
    const now = Date.now();
    const userLimit = rateLimitMap.get(ip);
    
    if (userLimit) {
      if (now - userLimit.timestamp < RATE_LIMIT_DURATION) {
        if (userLimit.count >= MAX_REQUESTS) {
          return NextResponse.json(
            { error: "Çok fazla istek gönderdiniz. Lütfen daha sonra tekrar deneyin." },
            { status: 429 }
          );
        }
        userLimit.count++;
      } else {
        rateLimitMap.set(ip, { count: 1, timestamp: now });
      }
    } else {
      rateLimitMap.set(ip, { count: 1, timestamp: now });
    }

    const body = await req.json();
    
    // Check honeypot
    if (body._honeypot) {
      return NextResponse.json({ message: "Form başarıyla gönderildi" }, { status: 200 });
    }

    const validatedData = contactSchema.parse(body);

    const result = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'lafonten1999@gmail.com',
      subject: `İletişim Formu: ${validatedData.subject}`,
      html: `
        <h2>Yeni İletişim Formu Mesajı</h2>
        <p><strong>İsim:</strong> ${validatedData.name}</p>
        <p><strong>E-posta:</strong> ${validatedData.email}</p>
        <p><strong>Konu:</strong> ${validatedData.subject}</p>
        <p><strong>Mesaj:</strong></p>
        <p>${validatedData.message.replace(/\n/g, "<br>")}</p>
      `
    });

    return NextResponse.json(
      { message: "Mesajınız başarıyla gönderildi" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Geçersiz form verileri" },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: "Bir hata oluştu. Lütfen daha sonra tekrar deneyin." },
      { status: 500 }
    );
  }
}