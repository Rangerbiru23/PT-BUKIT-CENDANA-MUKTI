'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin, ChevronRight, Leaf, Users, TrendingUp, Award, Tractor, Package, BarChart3, Lightbulb, Shield } from 'lucide-react';
import Link from 'next/link';

export default function ServicesPage() {
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
              <Link href="/" className="text-gray-700 hover:text-green-600 font-medium transition-colors">Beranda</Link>
              <Link href="/about" className="text-gray-700 hover:text-green-600 font-medium transition-colors">Tentang</Link>
              <Link href="/services" className="text-green-800 hover:text-green-600 font-medium transition-colors">Layanan</Link>
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
                <Link href="/" className="text-gray-700 hover:text-green-600 font-medium">Beranda</Link>
                <Link href="/about" className="text-gray-700 hover:text-green-600 font-medium">Tentang</Link>
                <Link href="/services" className="text-green-800 hover:text-green-600 font-medium">Layanan</Link>
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
      <section className="relative pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-green-800 mb-6">
              Layanan <span className="text-yellow-600">Pertanian Jagung</span>
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Solusi komprehensif untuk kebutuhan pertanian jagung Anda, mulai dari budidaya hingga distribusi dengan kualitas premium.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-800 mb-4">Layanan Utama Kami</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              PT BUKIT CENDANA MUKTI menyediakan layanan pertanian jagung terpadu untuk memenuhi kebutuhan industri Anda
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-green-200">
              <div className="bg-green-600 w-20 h-20 rounded-full flex items-center justify-center mb-6">
                <Tractor className="text-white" size={40} />
              </div>
              <h3 className="text-2xl font-bold text-green-800 mb-4">Budidaya Jagung Modern</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Praktik budidaya jagung dengan teknologi pertanian modern, penggunaan benih unggul, dan manajemen lahan optimal untuk menghasilkan produk berkualitas premium.
              </p>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  Benih jagung hibrida unggul
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  Teknologi pertanian presisi
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  Manajemen air dan nutrisi optimal
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  Pengendalian hama terpadu
                </li>
              </ul>
              <button className="w-full bg-green-700 text-white py-3 rounded-lg font-semibold hover:bg-green-800 transition-colors">
                Pelajari Lebih Lanjut
              </button>
            </div>
            
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-yellow-200">
              <div className="bg-yellow-600 w-20 h-20 rounded-full flex items-center justify-center mb-6">
                <Package className="text-white" size={40} />
              </div>
              <h3 className="text-2xl font-bold text-green-800 mb-4">Distribusi & Logistik</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Jaringan distribusi luas dengan sistem logistik modern memastikan pengiriman produk jagung tepat waktu dengan kualitas terjaga ke seluruh Indonesia.
              </p>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">✓</span>
                  Jaringan distribusi nasional
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">✓</span>
                  Sistem tracking real-time
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">✓</span>
                  Gudang dengan standar kualitas
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">✓</span>
                  Pengiriman tepat waktu
                </li>
              </ul>
              <button className="w-full bg-yellow-600 text-white py-3 rounded-lg font-semibold hover:bg-yellow-700 transition-colors">
                Pelajari Lebih Lanjut
              </button>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-green-200">
              <div className="bg-green-600 w-20 h-20 rounded-full flex items-center justify-center mb-6">
                <Lightbulb className="text-white" size={40} />
              </div>
              <h3 className="text-2xl font-bold text-green-800 mb-4">Konsultasi Pertanian</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Tim ahli pertanian kami siap memberikan konsultasi komprehensif untuk optimalisasi hasil panen dan efisiensi operasional pertanian Anda.
              </p>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  Analisis lahan dan tanah
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  Perencanaan tanam optimal
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  Manajemen risiko pertanian
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  Transfer teknologi
                </li>
              </ul>
              <button className="w-full bg-green-700 text-white py-3 rounded-lg font-semibold hover:bg-green-800 transition-colors">
                Pelajari Lebih Lanjut
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 px-4 bg-gradient-to-r from-green-50 to-yellow-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-800 mb-4">Layanan Pendukung</h2>
            <p className="text-xl text-gray-600">
              Solusi lengkap untuk mendukung kesuksesan pertanian jagung Anda
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <BarChart3 className="text-blue-700" size={28} />
              </div>
              <h3 className="text-lg font-bold text-green-800 mb-2">Analisis Pasar</h3>
              <p className="text-gray-600 text-sm">
                Informasi harga dan tren pasar jagung real-time untuk pengambilan keputusan strategis.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Shield className="text-purple-700" size={28} />
              </div>
              <h3 className="text-lg font-bold text-green-800 mb-2">Sertifikasi Produk</h3>
              <p className="text-gray-600 text-sm">
                Bantuan proses sertifikasi untuk memastikan produk memenuhi standar kualitas internasional.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <TrendingUp className="text-orange-700" size={28} />
              </div>
              <h3 className="text-lg font-bold text-green-800 mb-2">Pelatihan Petani</h3>
              <p className="text-gray-600 text-sm">
                Program pelatihan dan transfer pengetahuan untuk meningkatkan kapasitas petani lokal.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Leaf className="text-red-700" size={28} />
              </div>
              <h3 className="text-lg font-bold text-green-800 mb-2">Pertanian Berkelanjutan</h3>
              <p className="text-gray-600 text-sm">
                Konsultasi dan implementasi praktik pertanian yang ramah lingkungan dan berkelanjutan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-800 mb-4">Proses Kerja Kami</h2>
            <p className="text-xl text-gray-600">
              Langkah demi langkah menuju hasil pertanian jagung berkualitas premium
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-3">Perencanaan</h3>
              <p className="text-gray-600">
                Analisis lahan, pemilihan benih unggul, dan perencanaan tanam yang optimal untuk hasil maksimal.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-yellow-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-3">Persiapan Lahan</h3>
              <p className="text-gray-600">
                Pengolahan tanah, pemupukan awal, dan persiapan infrastruktur pertanian modern.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-3">Budidaya</h3>
              <p className="text-gray-600">
                Penanaman, perawatan, pengendalian hama, dan monitoring pertumbuhan dengan teknologi presisi.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-yellow-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                4
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-3">Panen & Distribusi</h3>
              <p className="text-gray-600">
                Panen tepat waktu, pengolahan pasca panen, dan distribusi cepat ke pelanggan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-20 px-4 bg-gradient-to-r from-green-700 to-green-600 text-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Jaminan Kualitas Premium</h2>
              <p className="text-green-100 mb-8 leading-relaxed">
                Setiap produk jagung dari PT BUKIT CENDANA MUKTI melalui proses quality control yang ketat untuk memastikan hanya produk terbaik yang sampai ke tangan Anda.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-yellow-500 w-8 h-8 rounded-full flex items-center justify-center">
                    <span className="text-green-900 font-bold">✓</span>
                  </div>
                  <span className="text-green-100">Sertifikasi ISO 9001 untuk manajemen mutu</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-yellow-500 w-8 h-8 rounded-full flex items-center justify-center">
                    <span className="text-green-900 font-bold">✓</span>
                  </div>
                  <span className="text-green-100">Laboratorium testing modern</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-yellow-500 w-8 h-8 rounded-full flex items-center justify-center">
                    <span className="text-green-900 font-bold">✓</span>
                  </div>
                  <span className="text-green-100">Traceability system lengkap</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-yellow-500 w-8 h-8 rounded-full flex items-center justify-center">
                    <span className="text-green-900 font-bold">✓</span>
                  </div>
                  <span className="text-green-100">Audit kualitas rutin</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur p-6 rounded-xl text-center">
                <div className="text-4xl font-bold text-yellow-400 mb-2">99%</div>
                <div className="text-green-100">Kepuasan Klien</div>
              </div>
              <div className="bg-white/10 backdrop-blur p-6 rounded-xl text-center">
                <div className="text-4xl font-bold text-yellow-400 mb-2">24/7</div>
                <div className="text-green-100">Support</div>
              </div>
              <div className="bg-white/10 backdrop-blur p-6 rounded-xl text-center">
                <div className="text-4xl font-bold text-yellow-400 mb-2">A+</div>
                <div className="text-green-100">Grade Quality</div>
              </div>
              <div className="bg-white/10 backdrop-blur p-6 rounded-xl text-center">
                <div className="text-4xl font-bold text-yellow-400 mb-2">0</div>
                <div className="text-green-100">Complaint Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-yellow-500 to-yellow-400">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-green-900 mb-6">
            Siap Meningkatkan Produktivitas Pertanian Anda?
          </h2>
          <p className="text-xl text-green-800 mb-8 max-w-2xl mx-auto">
            Hubungi tim ahli kami untuk konsultasi gratis dan temukan solusi pertanian jagung terbaik untuk kebutuhan Anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-green-800 text-white px-8 py-4 rounded-full font-bold hover:bg-green-900 transition-all transform hover:scale-105">
              Konsultasi Gratis
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