'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin, Send, Clock, MessageSquare, Navigation } from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    alert('Terima kasih! Pesan Anda telah terkirim. Tim kami akan segera menghubungi Anda.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
    setIsSubmitting(false);
  };

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
              <Link href="/services" className="text-gray-700 hover:text-green-600 font-medium transition-colors">Layanan</Link>
              <Link href="/contact" className="text-green-800 hover:text-green-600 font-medium transition-colors">Kontak</Link>
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
                <Link href="/services" className="text-gray-700 hover:text-green-600 font-medium">Layanan</Link>
                <Link href="/contact" className="text-green-800 hover:text-green-600 font-medium">Kontak</Link>
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
              Hubungi <span className="text-yellow-600">PT BUKIT CENDANA MUKTI</span>
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Kami siap membantu kebutuhan pertanian jagung Anda. Tim profesional kami siap memberikan solusi terbaik untuk kesuksesan bisnis Anda.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-3xl font-bold text-green-800 mb-6">Kirim Pesan</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                    Nomor Telepon *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                    placeholder="+62 812-3456-7890"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                    Subjek *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                  >
                    <option value="">Pilih Subjek</option>
                    <option value="consultation">Konsultasi Pertanian</option>
                    <option value="partnership">Kerjasama Bisnis</option>
                    <option value="product">Informasi Produk</option>
                    <option value="complaint">Keluhan & Saran</option>
                    <option value="other">Lainnya</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                    Pesan *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Tuliskan pesan Anda di sini..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-green-700 text-white py-4 rounded-lg font-semibold hover:bg-green-800 transition-all disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Mengirim...</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Kirim Pesan</span>
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Main Contact Info */}
              <div className="bg-gradient-to-br from-green-600 to-green-700 text-white p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-6">Informasi Kontak</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-white/20 p-3 rounded-full">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Alamat Kantor</h4>
                      <p className="text-green-100">
                        JL. RAYA LASEM, TUYUHAN JAPE REJO<br />
                        Desa/Kelurahan Tuyuhan, Kec. Pancur<br />
                        Kab. Rembang, Provinsi Jawa Tengah
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="bg-white/20 p-3 rounded-full">
                      <Phone size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Telepon</h4>
                      <p className="text-green-100">085285703526</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="bg-white/20 p-3 rounded-full">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Email</h4>
                      <p className="text-green-100">info@bukitcendanamukti.co.id</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="bg-yellow-50 p-6 rounded-2xl border border-yellow-200">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-yellow-500 p-3 rounded-full">
                    <Clock className="text-white" size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-green-800">Jam Operasional</h3>
                </div>
                <div className="space-y-2 text-gray-700">
                  <div className="flex justify-between">
                    <span>Senin - Jumat</span>
                    <span className="font-semibold">08:00 - 17:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sabtu</span>
                    <span className="font-semibold">08:00 - 12:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Minggu & Hari Libur</span>
                    <span className="font-semibold text-red-600">Tutup</span>
                  </div>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="bg-green-50 p-6 rounded-2xl border border-green-200">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-green-600 p-3 rounded-full">
                    <MessageSquare className="text-white" size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-green-800">Hubungi Langsung</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Untuk respon lebih cepat, Anda dapat menghubungi kami langsung melalui telepon atau WhatsApp.
                </p>
                <div className="space-y-3">
                  <a href="tel:085285703526" className="block w-full bg-green-700 text-white py-3 rounded-lg font-semibold hover:bg-green-800 transition-all text-center">
                    <Phone size={18} className="inline mr-2" />
                    Telepon Sekarang
                  </a>
                  <a href="https://wa.me/6285285703526" target="_blank" rel="noopener noreferrer" className="block w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-all text-center">
                    <MessageSquare size={18} className="inline mr-2" />
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-green-800 mb-4">Lokasi Kami</h2>
            <p className="text-xl text-gray-600">
              Kunjungi kantor kami untuk konsultasi langsung dengan tim ahli pertanian kami
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-6">
              <div className="flex items-center space-x-3">
                <Navigation size={24} />
                <h3 className="text-xl font-bold">PT BUKIT CENDANA MUKTI</h3>
              </div>
              <p className="text-green-100 mt-2">
                JL. RAYA LASEM, TUYUHAN JAPE REJO, Kec. Pancur, Kab. Rembang, Jawa Tengah
              </p>
            </div>
            
            {/* Placeholder for actual map */}
            <div className="h-96 bg-gray-200 flex items-center justify-center">
              <div className="text-center">
                <div className="bg-green-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="text-green-700" size={40} />
                </div>
                <p className="text-gray-600 font-medium">Peta Lokasi</p>
                <p className="text-gray-500 text-sm mt-2">Klik untuk membuka di Google Maps</p>
                <a 
                  href="https://maps.google.com/?q=Rembang,Jawa+Tengah,Indonesia" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block mt-4 bg-green-700 text-white px-6 py-2 rounded-full hover:bg-green-800 transition-colors"
                >
                  Buka di Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-green-800 mb-4">Pertanyaan Umum</h2>
            <p className="text-xl text-gray-600">
              Temukan jawaban untuk pertanyaan yang sering diajukan
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="bg-green-50 p-6 rounded-xl border border-green-200">
              <h3 className="font-bold text-green-800 mb-2">Apa jenis jagung yang diproduksi?</h3>
              <p className="text-gray-700">
                Kami memproduksi berbagai jenis jagung hibrida unggul dengan kualitas premium yang sesuai untuk industri pangan dan pakan ternak.
              </p>
            </div>
            
            <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-200">
              <h3 className="font-bold text-green-800 mb-2">Bagaimana cara memesan produk?</h3>
              <p className="text-gray-700">
                Anda dapat menghubungi kami melalui telepon, WhatsApp, atau mengisi form kontak di halaman ini. Tim kami akan segera merespons pesan Anda.
              </p>
            </div>
            
            <div className="bg-green-50 p-6 rounded-xl border border-green-200">
              <h3 className="font-bold text-green-800 mb-2">Apakah melayani pengiriman ke luar kota?</h3>
              <p className="text-gray-700">
                Ya, kami melayani pengiriman ke seluruh Indonesia dengan jaringan distribusi yang luas dan sistem logistik modern.
              </p>
            </div>
            
            <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-200">
              <h3 className="font-bold text-green-800 mb-2">Apakah ada minimum order?</h3>
              <p className="text-gray-700">
                Minimum order bervariasi tergantung jenis produk dan lokasi pengiriman. Hubungi tim kami untuk informasi lebih detail.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-yellow-500 to-yellow-400">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-green-900 mb-6">
            Siap Memulai Kerjasama?
          </h2>
          <p className="text-xl text-green-800 mb-8 max-w-2xl mx-auto">
            Bergabunglah dengan ratusan klien yang telah mempercayai kualitas produk dan layanan PT BUKIT CENDANA MUKTI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:085285703526" className="bg-green-800 text-white px-8 py-4 rounded-full font-bold hover:bg-green-900 transition-all transform hover:scale-105">
              <Phone size={20} className="inline mr-2" />
              Hubungi Sekarang
            </a>
            <a href="/services" className="border-2 border-green-800 text-green-800 px-8 py-4 rounded-full font-bold hover:bg-green-800 hover:text-white transition-all">
              Lihat Layanan Kami
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