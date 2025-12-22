'use client';

import { Phone, Mail, MapPin } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-green-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center space-x-3 mb-4">
              <img src="/logo.png" alt="PT BUKIT CENDANA MUKTI" className="h-10 w-auto" />
              <div>
                <h3 className="text-xl font-bold">PT BUKIT CENDANA MUKTI</h3>
                <p className="text-xs text-green-300">Premium Corn Agriculture</p>
              </div>
            </Link>
            <p className="text-green-300">
              Pionir pertanian jagung premium di Indonesia dengan komitmen kualitas dan keberlanjutan.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-yellow-400">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-green-300 hover:text-white transition-colors">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-green-300 hover:text-white transition-colors">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-green-300 hover:text-white transition-colors">
                  Layanan
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-green-300 hover:text-white transition-colors">
                  Kontak
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-yellow-400">Layanan</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-green-300 hover:text-white transition-colors">
                  Budidaya Jagung
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-green-300 hover:text-white transition-colors">
                  Konsultasi Pertanian
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-green-300 hover:text-white transition-colors">
                  Distribusi & Logistik
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-green-300 hover:text-white transition-colors">
                  Pengolahan Hasil
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-yellow-400">Kontak</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span className="text-green-300 text-sm">
                  JL. RAYA LASEM, TUYUHAN JAPE REJO, Kec. Pancur, Kab. Rembang, Jawa Tengah
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} />
                <span className="text-green-300">085285703526</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <span className="text-green-300">info@bukitcendanamukti.co.id</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-green-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-green-400 text-sm">
              © 2024 PT BUKIT CENDANA MUKTI. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-green-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-green-400 hover:text-white transition-colors">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}