'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin, FileText, Shield, AlertCircle, CheckCircle, Gavel } from 'lucide-react';
import Link from 'next/link';

export default function TermsPage() {
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
                <Link href="/" className="text-gray-700 hover:text-green-600 font-medium">Beranda</Link>
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
      <section className="relative pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <div className="bg-green-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
              <FileText className="text-green-700" size={48} />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-green-800 mb-6">
              Syarat & <span className="text-yellow-600">Ketentuan</span>
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Syarat dan ketentuan penggunaan website dan layanan PT BUKIT CENDANA MUKTI untuk memastikan pengalaman yang aman dan menyenangkan.
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              <div className="mb-8">
                <p className="text-gray-600 leading-relaxed">
                  Selamat datang di website PT BUKIT CENDANA MUKTI. Syarat dan Ketentuan ini mengatur penggunaan website kami dan layanan yang tersedia. Dengan mengakses atau menggunakan website kami, Anda setuju untuk terikat oleh syarat dan ketentuan ini.
                </p>
                <p className="text-gray-600 leading-relaxed mt-4">
                  Jika Anda tidak setuju dengan bagian mana pun dari syarat dan ketentuan ini, harap jangan gunakan website atau layanan kami.
                </p>
              </div>

              {/* General Terms */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-green-800 mb-4 flex items-center">
                  <Gavel className="text-green-700 mr-3" size={28} />
                  Ketentuan Umum
                </h2>
                <div className="bg-green-50 p-6 rounded-xl mb-6">
                  <h3 className="font-semibold text-green-800 mb-3">Definisi:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span><strong>"Website"</strong> merujuk pada situs web resmi PT BUKIT CENDANA MUKTI</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span><strong>"Perusahaan"</strong> merujuk pada PT BUKIT CENDANA MUKTI</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span><strong>"Pengguna"</strong> merujuk pada individu atau entitas yang menggunakan website kami</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span><strong>"Layanan"</strong> merujuk pada produk dan jasa yang kami sediakan</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Acceptance of Terms */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-green-800 mb-4">Penerimaan Syarat</h2>
                <div className="bg-yellow-50 p-6 rounded-xl">
                  <p className="text-gray-700 mb-4">
                    Dengan menggunakan website kami, Anda menyatakan bahwa:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-2">✓</span>
                      <span>Anda telah membaca, memahami, dan menyetujui syarat dan ketentuan ini</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-2">✓</span>
                      <span>Anda berusia minimal 18 tahun atau memiliki izin orang tua/wali</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-2">✓</span>
                      <span>Anda memiliki kapasitas hukum untuk mengikatkan diri pada perjanjian ini</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-2">✓</span>
                      <span>Informasi yang Anda berikan akurat dan lengkap</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Use of Website */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-green-800 mb-4 flex items-center">
                  <CheckCircle className="text-green-700 mr-3" size={28} />
                  Penggunaan Website
                </h2>
                <div className="bg-green-50 p-6 rounded-xl">
                  <h3 className="font-semibold text-green-800 mb-3">Yang Diperbolehkan:</h3>
                  <ul className="space-y-2 text-gray-700 mb-4">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Mengakses dan menggunakan website untuk tujuan pribadi atau bisnis yang sah</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Mengunduh materi untuk penggunaan non-komersial</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Menghubungi kami untuk pertanyaan tentang produk dan layanan</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Berbagi konten dengan menyertakan sumber yang jelas</span>
                    </li>
                  </ul>
                  
                  <h3 className="font-semibold text-red-800 mb-3">Yang Dilarang:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">✗</span>
                      <span>Menggunakan website untuk aktivitas ilegal atau tidak sah</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">✗</span>
                      <span>Mencoba merusak atau mengganggu kinerja website</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">✗</span>
                      <span>Menyalin, mendistribusikan, atau memodifikasi konten tanpa izin</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">✗</span>
                      <span>Mengirimkan virus, malware, atau kode berbahaya</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">✗</span>
                      <span>Mengumpulkan data pengguna lain tanpa izin</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Products and Services */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-green-800 mb-4">Produk dan Layanan</h2>
                <div className="bg-yellow-50 p-6 rounded-xl">
                  <h3 className="font-semibold text-green-800 mb-3">Ketentuan Produk:</h3>
                  <ul className="space-y-2 text-gray-700 mb-4">
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-2">•</span>
                      <span>Semua produk jagung yang kami jual memenuhi standar kualitas yang ditetapkan</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-2">•</span>
                      <span>Harga dapat berubah sewaktu-waktu tanpa pemberitahuan sebelumnya</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-2">•</span>
                      <span>Ketersediaan produk tergantung pada musim panen</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-2">•</span>
                      <span>Minimum order berlaku untuk beberapa jenis produk</span>
                    </li>
                  </ul>
                  
                  <h3 className="font-semibold text-green-800 mb-3">Ketentuan Layanan:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-2">•</span>
                      <span>Konsultasi pertanian memerlukan janji temu sebelumnya</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-2">•</span>
                      <span>Layanan distribusi tersedia untuk wilayah tertentu</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-2">•</span>
                      <span>Biaya pengiriman ditanggung oleh pembeli</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Payment Terms */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-green-800 mb-4">Ketentuan Pembayaran</h2>
                <div className="bg-green-50 p-6 rounded-xl">
                  <h3 className="font-semibold text-green-800 mb-3">Metode Pembayaran:</h3>
                  <ul className="space-y-2 text-gray-700 mb-4">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span>Transfer bank ke rekening resmi PT BUKIT CENDANA MUKTI</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span>Pembayaran tunai di kantor (untuk transaksi tertentu)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span>Payment gateway untuk transaksi online</span>
                    </li>
                  </ul>
                  
                  <h3 className="font-semibold text-green-800 mb-3">Syarat Pembayaran:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span>Pembayaran penuh sebelum pengiriman untuk pelanggan baru</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span>Syarat kredit tersedia untuk pelanggan yang memenuhi kriteria</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span>Denda keterlambatan berlaku untuk pembayaran terlambat</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Intellectual Property */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-green-800 mb-4">Hak Kekayaan Intelektual</h2>
                <div className="bg-yellow-50 p-6 rounded-xl">
                  <p className="text-gray-700 mb-4">
                    Semua konten di website ini, termasuk namun tidak terbatas pada:
                  </p>
                  <ul className="space-y-2 text-gray-700 mb-4">
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-2">•</span>
                      <span>Teks, gambar, grafik, dan video</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-2">•</span>
                      <span>Logo, merek dagang, dan desain</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-2">•</span>
                      <span>Software dan kode sumber</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-2">•</span>
                      <span>Database dan informasi produk</span>
                    </li>
                  </ul>
                  <p className="text-gray-700">
                    adalah milik PT BUKIT CENDANA MUKTI atau pemberi lisensi kami dan dilindungi oleh hukum hak cipta dan merek dagang.
                  </p>
                </div>
              </div>

              {/* Limitation of Liability */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-green-800 mb-4 flex items-center">
                  <AlertCircle className="text-yellow-600 mr-3" size={28} />
                  Pembatasan Tanggung Jawab
                </h2>
                <div className="bg-red-50 p-6 rounded-xl">
                  <p className="text-gray-700 mb-4">
                    PT BUKIT CENDANA MUKTI tidak bertanggung jawab atas:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      <span>Kerugian tidak langsung, insidental, atau konsekuensial</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      <span>Kehilangan data atau kerusakan sistem</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      <span>Keterlambatan pengiriman di luar kendali kami</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      <span>Ketersediaan website yang terganggu</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      <span>Konten dari pihak ketiga yang terhubung dengan website kami</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Privacy and Data Protection */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-green-800 mb-4 flex items-center">
                  <Shield className="text-green-700 mr-3" size={28} />
                  Privasi dan Perlindungan Data
                </h2>
                <div className="bg-green-50 p-6 rounded-xl">
                  <p className="text-gray-700 mb-4">
                    Kami berkomitmen untuk melindungi privasi Anda. Penggunaan data pribadi Anda diatur oleh:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span>Kebijakan Privasi kami yang tersedia di website</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span>Peraturan perlindungan data yang berlaku di Indonesia</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span>Standar industri untuk keamanan data</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Termination */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-green-800 mb-4">Pengakhiran Penggunaan</h2>
                <div className="bg-yellow-50 p-6 rounded-xl">
                  <p className="text-gray-700 mb-4">
                    PT BUKIT CENDANA MUKTI berhak untuk:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-2">•</span>
                      <span>Menghentikan akses Anda ke website jika melanggar syarat dan ketentuan</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-2">•</span>
                      <span>Memblokir alamat IP yang mencoba merusak website</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-2">•</span>
                      <span>Menghapus konten yang melanggar hukum atau hak cipta</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Governing Law */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-green-800 mb-4">Hukum yang Berlaku</h2>
                <div className="bg-green-50 p-6 rounded-xl">
                  <p className="text-gray-700 mb-4">
                    Syarat dan ketentuan ini diatur oleh:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span>Hukum Republik Indonesia</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span>Peraturan perundang-undangan yang berlaku</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span>Sengketa akan diselesaikan melalui peradilan yang berwenang</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Changes to Terms */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-green-800 mb-4">Perubahan Syarat dan Ketentuan</h2>
                <p className="text-gray-700 mb-4">
                  PT BUKIT CENDANA MUKTI berhak untuk mengubah syarat dan ketentuan ini kapan saja. Perubahan akan:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Diinformasikan melalui website</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Berlaku efektif setelah dipublikasikan</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Pengguna dianggap menyetujui perubahan dengan terus menggunakan website</span>
                  </li>
                </ul>
              </div>

              {/* Contact Information */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-green-800 mb-4">Hubungi Kami</h2>
                <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-6 rounded-xl">
                  <p className="text-green-100 mb-4">
                    Jika Anda memiliki pertanyaan tentang Syarat dan Ketentuan ini, silakan hubungi kami:
                  </p>
                  <div className="space-y-2">
                    <p><strong>Email:</strong> legal@bukitcendanamukti.co.id</p>
                    <p><strong>Telepon:</strong> 085285703526</p>
                    <p><strong>Alamat:</strong> JL. RAYA LASEM, TUYUHAN JAPE REJO, Kec. Pancur, Kab. Rembang, Jawa Tengah</p>
                  </div>
                </div>
              </div>

              {/* Last Updated */}
              <div className="text-center text-gray-500 text-sm">
                <p>Syarat dan Ketentuan ini berlaku efektif sejak: 1 Januari 2024</p>
                <p className="mt-2">Terakhir diperbarui: 1 Januari 2024</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-yellow-500 to-yellow-400">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-green-900 mb-6">
            Pertanyaan Tentang Syarat & Ketentuan?
          </h2>
          <p className="text-xl text-green-800 mb-8 max-w-2xl mx-auto">
            Tim legal kami siap membantu menjelaskan setiap ketentuan yang mungkin perlu dipahami lebih lanjut.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-green-800 text-white px-8 py-4 rounded-full font-bold hover:bg-green-900 transition-all transform hover:scale-105">
              Hubungi Kami
            </a>
            <a href="/privacy" className="border-2 border-green-800 text-green-800 px-8 py-4 rounded-full font-bold hover:bg-green-800 hover:text-white transition-all">
              Lihat Kebijakan Privasi
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