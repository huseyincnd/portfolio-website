import { NextResponse } from "next/server";
import { Resend } from 'resend';
import { z } from "zod";

// Form şeması
const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(5),
  message: z.string().min(10),
});

// Resend client
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log('Form data received:', body);
    
    // Form doğrulama
    const validatedData = contactSchema.parse(body);
    console.log('Validation passed:', validatedData);

    // E-posta gönderimi
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
    
    console.log('Resend response:', result);

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

    const errorMessage = error instanceof Error ? error.message : "Bilinmeyen bir hata oluştu";
    return NextResponse.json(
      { error: "Bir hata oluştu: " + errorMessage },
      { status: 500 }
    );
  }
} 