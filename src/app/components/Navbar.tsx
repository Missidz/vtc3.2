"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-black shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/">
                <Image
                  src="/logo.png"
                  alt="VTC37 Logo"
                  width={120}
                  height={48}
                  style={{ objectFit: "contain" }}
                  priority
                />
              </Link>
            </div>
          </div>

          {/* Liens toujours visibles sur mobile */}
          <div className="flex items-center space-x-1 sm:space-x-2 -ml-4">
            <a
              href="https://wa.me/33666144197"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-green-400 px-1 sm:px-2 py-2 rounded-md text-xs font-medium flex items-center"
            >
              <svg
                className="w-5 h-5 mr-1"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
            <a
              href="https://snapchat.com/add/monvtc37"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-400 px-1 sm:px-2 py-2 rounded-md text-xs font-medium flex items-center"
            >
              <Image
                src="/snapchat_logo.png"
                alt="Snapchat"
                width={20}
                height={20}
                className="mr-1"
              />
              <span className="hidden sm:inline">Snapchat</span>
            </a>
            <a
              href="tel:0666144197"
              className="text-white hover:text-blue-400 px-1 sm:px-2 py-2 rounded-md text-xs font-medium flex items-center"
            >
              <svg
                className="w-5 h-5 mr-1"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20 15.5c-1.2 0-2.4-.2-3.6-.6-.3-.1-.7 0-1 .2l-2.2 2.2c-2.8-1.4-5.1-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1-.3-1.1-.5-2.3-.5-3.5 0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1 0 9.4 7.6 17 17 17 .6 0 1-.4 1-1v-3.5c0-.6-.4-1-1-1zM19 12h2c0-4.9-4-8.9-9-8.9v2c3.9 0 7 3.1 7 6.9zm-4 0h2c0-2.8-2.2-5-5-5v2c1.7 0 3 1.3 3 3z" />
              </svg>
              06 66 14 41 97
            </a>

            {/* Menu hamburger pour mobile */}
            <div className="flex items-center sm:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-gray-300 focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Menu desktop */}
          <div className="hidden sm:flex items-center space-x-4">
            <Link
              href="/tarifs"
              className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
            >
              Nos Services
            </Link>
            <Link
              href="/contact"
              className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
            >
              Contact
            </Link>
            <Link
              href="/about"
              className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
            >
              À propos
            </Link>
          </div>
        </div>

        {/* Menu mobile */}
        {isMenuOpen && (
          <div className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/tarifs"
                className="text-white hover:text-gray-300 block px-3 py-2 rounded-md text-base font-medium"
              >
                Nos Tarifs
              </Link>
              <Link
                href="/contact"
                className="text-white hover:text-gray-300 block px-3 py-2 rounded-md text-base font-medium"
              >
                Contact
              </Link>
              <Link
                href="/about"
                className="text-white hover:text-gray-300 block px-3 py-2 rounded-md text-base font-medium"
              >
                À propos
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
