"use client";

import { MessageCircle } from 'lucide-react';

export function WhatsAppButton() {
  const phoneNumber = "905306720570"; // Telefon numaranız
  const message = "Merhaba, web sitesi hakkında bilgi almak istiyorum."; // Varsayılan mesaj

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-4 z-50 flex items-center gap-2 px-4 py-3 bg-[#25D366] text-white rounded-full shadow-xl hover:bg-[#20BA56] transition-all duration-300 hover:scale-105 animate-bounce-gentle md:bottom-8 md:right-8 group"
      aria-label="WhatsApp ile iletişime geç"
      style={{
        boxShadow: '0 4px 20px rgba(37, 211, 102, 0.3)'
      }}
    >
      {/* WhatsApp Icon */}
      <MessageCircle className="w-6 h-6 text-white" />
      
      {/* Mobilde her zaman görünür metin */}
      <span className="text-sm font-medium whitespace-nowrap">
        WhatsApp&apos;tan Yaz
      </span>
    </button>
  );
} 