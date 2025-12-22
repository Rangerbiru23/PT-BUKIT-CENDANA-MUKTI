'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin, ChevronRight, Leaf, Users, TrendingUp, Award } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <img src="/logo.png" alt="PT BUKIT CENDANA MUKTI" className="h-12 w-auto" />
              <div>
                <h1 className="text-xl font-bold text-green-800">PT BUKIT CENDANA MUKTI</h1>
                <p className="text-xs text-green-600">Premium Corn Agriculture</p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-green-800 hover:text-green-600 font-medium transition-colors">Beranda</Link>
              <Link href="/about" className="text-gray-700 hover:text-green-600 font-medium transition-colors">Tentang</Link>
              <Link href="/services" className="text-gray-700 hover:text-green-600 font-medium transition-colors">Layanan</Link>
              <Link href="/contact" className="text-gray-700 hover:text-green-600 font-medium transition-colors">Kontak</Link>
              <button className="bg-green-700 text-white px-6 py-2 rounded-full hover:bg-green-800 transition-colors">
                Hubungi Kami
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-green-800"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t border-green-100 py-4">
              <div className="flex flex-col space-y-3">
                <Link href="/" className="text-green-800 hover:text-green-600 font-medium">Beranda</Link>
                <Link href="/about" className="text-gray-700 hover:text-green-600 font-medium">Tentang</Link>
                <Link href="/services" className="text-gray-700 hover:text-green-600 font-medium">Layanan</Link>
                <Link href="/contact" className="text-gray-700 hover:text-green-600 font-medium">Kontak</Link>
                <button className="bg-green-700 text-white px-6 py-2 rounded-full hover:bg-green-800">
                  Hubungi Kami
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/hero-banner.jpg" 
            alt="Corn Fields" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-green-700/60"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            PT BUKIT CENDANA MUKTI
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-green-50">
            Pionir Pertanian Jagung Premium di Indonesia
          </p>
          <p className="text-lg mb-12 text-green-100 max-w-2xl mx-auto">
            Menghasilkan jagung berkualitas tinggi dengan teknologi pertanian modern dan praktik berkelanjutan untuk mendukung ketahanan pangan nasional.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-yellow-500 text-green-900 px-8 py-4 rounded-full font-bold hover:bg-yellow-400 transition-all transform hover:scale-105">
              Pelajari Lebih Lanjut
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-green-800 transition-all">
              Hubungi Kami
            </button>
          </div>
        </div>
      </section>

      {/* Company Profile Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-green-800 mb-6">
                Mengapa Memilih <span className="text-yellow-600">PT BUKIT CENDANA MUKTI</span>?
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Sebagai perusahaan pertanian jagung terkemuka, kami berkomitmen untuk menyediakan produk jagung berkualitas premium yang memenuhi standar tertinggi. Dengan pengalaman bertahun-tahun dan dukungan teknologi modern, kami telah menjadi mitra terpercaya untuk industri pangan dan pakan ternak.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-green-100 p-2 rounded-full">
                    <Leaf className="text-green-700" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-green-800">Praktik Pertanian Berkelanjutan</h3>
                    <p className="text-gray-600">Menggunakan metode ramah lingkungan untuk menjaga kesuburan tanah</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-green-100 p-2 rounded-full">
                    <TrendingUp className="text-green-700" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-green-800">Produktivitas Tinggi</h3>
                    <p className="text-gray-600">Hasil panen optimal dengan kualitas terjamin</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-green-100 p-2 rounded-full">
                    <Award className="text-green-700" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-green-800">Kualitas Premium</h3>
                    <p className="text-gray-600">Standar kualitas tertinggi untuk setiap produk</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/tech-agriculture.jpg" 
                alt="Modern Agriculture" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-yellow-500 text-green-900 p-6 rounded-xl shadow-xl">
                <div className="text-3xl font-bold">15+</div>
                <div className="text-sm font-medium">Tahun Pengalaman</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-gradient-to-r from-green-700 to-green-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2 text-yellow-400">5000+</div>
              <div className="text-green-100">Hektar Lahan</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2 text-yellow-400">50K+</div>
              <div className="text-green-100">Ton Produksi/Tahun</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2 text-yellow-400">200+</div>
              <div className="text-green-100">Tenaga Kerja</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2 text-yellow-400">100%</div>
              <div className="text-green-100">Kepuasan Klien</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-800 mb-4">Layanan Kami</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Solusi pertanian komprehensif untuk memenuhi kebutuhan industri jagung Anda
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-green-100">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Leaf className="text-green-700" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-green-800 mb-4">Budidaya Jagung</h3>
              <p className="text-gray-600 mb-6">
                Praktik budidaya modern dengan teknologi terkini untuk menghasilkan jagung berkualitas premium.
              </p>
              <a href="/services" className="text-green-700 font-semibold flex items-center hover:text-green-600">
                Pelajari lebih lanjut <ChevronRight size={20} />
              </a>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-green-100">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Users className="text-yellow-700" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-green-800 mb-4">Konsultasi Pertanian</h3>
              <p className="text-gray-600 mb-6">
                Tim ahli kami siap memberikan solusi dan konsultasi untuk optimalisasi hasil panen Anda.
              </p>
              <a href="/services" className="text-green-700 font-semibold flex items-center hover:text-green-600">
                Pelajari lebih lanjut <ChevronRight size={20} />
              </a>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-green-100">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="text-green-700" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-green-800 mb-4">Distribusi & Logistik</h3>
              <p className="text-gray-600 mb-6">
                Jaringan distribusi luas memastikan pengiriman produk tepat waktu dengan kualitas terjaga.
              </p>
              <a href="/services" className="text-green-700 font-semibold flex items-center hover:text-green-600">
                Pelajari lebih lanjut <ChevronRight size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-yellow-500 to-yellow-400">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-green-900 mb-6">
            Siap Bekerja Sama dengan Kami?
          </h2>
          <p className="text-xl text-green-800 mb-8 max-w-2xl mx-auto">
            Bergabunglah dengan mitra bisnis yang telah mempercayai kualitas produk jagung kami untuk kebutuhan industri mereka.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-green-800 text-white px-8 py-4 rounded-full font-bold hover:bg-green-900 transition-all transform hover:scale-105">
              Hubungi Kami Sekarang
            </a>
            <a href="/about" className="border-2 border-green-800 text-green-800 px-8 py-4 rounded-full font-bold hover:bg-green-800 hover:text-white transition-all">
              Pelajari Tentang Kami
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img src="/logo.png" alt="PT BUKIT CENDANA MUKTI" className="h-10 w-auto" />
                <div>
                  <h3 className="text-xl font-bold">PT BUKIT CENDANA MUKTI</h3>
                  <p className="text-xs text-green-300">Premium Corn Agriculture</p>
                </div>
              </div>
              <p className="text-green-300">
                Pionir pertanian jagung premium di Indonesia dengan komitmen kualitas dan keberlanjutan.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 text-yellow-400">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="/" className="text-green-300 hover:text-white transition-colors">Beranda</a></li>
                <li><a href="/about" className="text-green-300 hover:text-white transition-colors">Tentang Kami</a></li>
                <li><a href="/services" className="text-green-300 hover:text-white transition-colors">Layanan</a></li>
                <li><a href="/contact" className="text-green-300 hover:text-white transition-colors">Kontak</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 text-yellow-400">Layanan</h4>
              <ul className="space-y-2">
                <li><a href="/services" className="text-green-300 hover:text-white transition-colors">Budidaya Jagung</a></li>
                <li><a href="/services" className="text-green-300 hover:text-white transition-colors">Konsultasi Pertanian</a></li>
                <li><a href="/services" className="text-green-300 hover:text-white transition-colors">Distribusi & Logistik</a></li>
                <li><a href="/services" className="text-green-300 hover:text-white transition-colors">Pengolahan Hasil</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 text-yellow-400">Kontak</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <MapPin size={16} />
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
          
          <div className="border-t border-green-800 mt-8 pt-8 text-center">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-green-400 text-sm">
                © 2024 PT BUKIT CENDANA MUKTI. All rights reserved.
              </p>
              <div className="flex space-x-6 text-sm">
                <a href="/privacy" className="text-green-400 hover:text-white transition-colors">Privacy Policy</a>
                <a href="/terms" className="text-green-400 hover:text-white transition-colors">Terms & Conditions</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}