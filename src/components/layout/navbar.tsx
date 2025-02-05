"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navigation = [
  { name: "Ana Sayfa", href: "/" },
  { name: "Hakkımda", href: "/about" },
  { name: "Portföy", href: "/projects" },
  { name: "Paketler", href: "/packages" },
  { name: "SSS", href: "/faq" },
  { name: "Makaleler", href: "/blog" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Sol taraf */}
          <div className="flex-shrink-0 w-[140px]">
            <Link 
              href="/" 
              className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-500 hover:opacity-80 transition-opacity"
            >
              Hüseyin C.
            </Link>
          </div>
          
          {/* Desktop Navigation - Orta */}
          <div className="hidden md:flex flex-1 items-center justify-center space-x-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  pathname === item.href
                    ? "text-white bg-blue-500 shadow-lg shadow-blue-500/30"
                    : "text-gray-600 hover:text-blue-500 hover:bg-blue-50 dark:text-gray-300 dark:hover:text-blue-400 dark:hover:bg-gray-800"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Contact Button - Sağ */}
          <div className="hidden md:block w-[140px] text-right">
            <Link
              href="/contact"
              className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                pathname === "/contact"
                  ? "text-white bg-gradient-to-r from-blue-500 to-cyan-500 shadow-lg shadow-blue-500/30"
                  : "text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:opacity-90"
              }`}
            >
              İletişime Geç
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-colors"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Menüyü aç</span>
              {isOpen ? (
                <X className="block h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="block h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden absolute left-0 right-0 top-[80px] bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800 transition-all duration-300 ${
            isOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <div className="px-4 py-3 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block px-4 py-2 rounded-lg text-base font-medium transition-all duration-200 ${
                  pathname === item.href
                    ? "text-white bg-blue-500 shadow-lg shadow-blue-500/30"
                    : "text-gray-600 hover:text-blue-500 hover:bg-blue-50 dark:text-gray-300 dark:hover:text-blue-400 dark:hover:bg-gray-800"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block px-4 py-2 rounded-lg text-base font-medium text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:opacity-90 transition-all duration-200"
              onClick={() => setIsOpen(false)}
            >
              İletişime Geç
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
} 