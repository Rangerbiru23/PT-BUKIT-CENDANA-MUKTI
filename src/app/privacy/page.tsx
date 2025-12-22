'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin, Shield, Eye, Lock, Database, UserCheck } from 'lucide-react';
import Link from 'next/link';

export default function PrivacyPage() {
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
              <Shield className="text-green-700" size={48} />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-green-800 mb-6">
              Kebijakan <span className="text-yellow-600">Privasi</span>
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              PT BUKIT CENDANA MUKTI berkomitmen untuk melindungi privasi dan keamanan data pribadi Anda sesuai dengan peraturan perundang-undangan yang berlaku.
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              <div className="mb-8">
                <p className="text-gray-600 leading-relaxed">
                  Kebijakan Privasi ini menjelaskan bagaimana PT BUKIT CENDANA MUKTI mengumpulkan, menggunakan, melindungi, dan membagikan informasi pribadi Anda ketika Anda mengunjungi website kami atau menggunakan layanan kami.
                </p>
                <p className="text-gray-600 leading-relaxed mt-4">
                  Dengan mengakses website dan menggunakan layanan kami, Anda menyetujui praktik-praktik yang dijelaskan dalam Kebijakan Privasi ini.
                </p>
              </div>

              {/* Data Collection */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-green-800 mb-4 flex items-center">
                  <Database className="text-green-700 mr-3" size={28} />
                  Pengumpulan Data Pribadi
                </h2>
                <div className="bg-green-50 p-6 rounded-xl mb-6">
                  <h3 className="font-semibold text-green-800 mb-3">Data yang Kami Kumpulkan:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span><strong>Informasi Identifikasi:</strong> Nama, alamat email, nomor telepon, alamat fisik</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span><strong>Informasi Bisnis:</strong> Nama perusahaan, jabatan, kebutuhan produk/jasa</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span><strong>Informasi Teknis:</strong> Alamat IP, jenis browser, sistem operasi, waktu akses</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span><strong>Informasi Penggunaan:</strong> Halaman yang dikunjungi, waktu yang dihabiskan, klik</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Data Usage */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-green-800 mb-4 flex items-center">
                  <Eye className="text-green-700 mr-3" size={28} />
                  Penggunaan Data Pribadi
                </h2>
                <div className="bg-yellow-50 p-6 rounded-xl">
                  <p className="text-gray-700 mb-4">
                    Kami menggunakan data pribadi Anda untuk tujuan-tujuan berikut:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-2">✓</span>
                      <span>Menyediakan layanan dan produk yang Anda minta</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-2">✓</span>
                      <span>Merespons pertanyaan dan permintaan informasi</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-2">✓</span>
                      <span>Mengirimkan informasi produk dan penawaran khusus</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-2">✓</span>
                      <span>Memproses transaksi dan pengiriman produk</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-2">✓</span>
                      <span>Meningkatkan kualitas layanan dan website kami</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-2">✓</span>
                      <span>Mematuhi kewajiban hukum dan peraturan</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Data Protection */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-green-800 mb-4 flex items-center">
                  <Lock className="text-green-700 mr-3" size={28} />
                  Perlindungan Data
                </h2>
                <div className="bg-green-50 p-6 rounded-xl">
                  <p className="text-gray-700 mb-4">
                    PT BUKIT CENDANA MUKTI berkomitmen untuk melindungi data pribadi Anda dengan:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">🔒</span>
                      <span>Enkripsi data saat transmisi dan penyimpanan</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">🔒</span>
                      <span>Akses terbatas hanya untuk authorized personnel</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">🔒</span>
                      <span>Security protocols dan firewall yang updated</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">🔒</span>
                      <span>Regular security audits dan assessments</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Data Sharing */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-green-800 mb-4">Pembagian Data Pihak Ketiga</h2>
                <p className="text-gray-700 mb-4">
                  Kami tidak menjual, menyewakan, atau membagikan data pribadi Anda kepada pihak ketiga tanpa persetujuan Anda, kecuali dalam kondisi berikut:
                </p>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-gray-600 mr-2">•</span>
                      <span>Partner logistik untuk pengiriman produk</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gray-600 mr-2">•</span>
                      <span>Penyedia layanan pembayaran yang terpercaya</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gray-600 mr-2">•</span>
                      <span>Otoritas hukum jika diwajibkan oleh peraturan</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gray-600 mr-2">•</span>
                      <span>Partner bisnis dengan persetujuan tertulis</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* User Rights */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-green-800 mb-4 flex items-center">
                  <UserCheck className="text-green-700 mr-3" size={28} />
                  Hak Anda sebagai Pengguna
                </h2>
                <div className="bg-yellow-50 p-6 rounded-xl">
                  <p className="text-gray-700 mb-4">
                    Sebagai pemilik data, Anda memiliki hak untuk:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-2">✓</span>
                      <span><strong>Mengakses</strong> data pribadi yang kami simpan tentang Anda</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-2">✓</span>
                      <span><strong>Memperbaiki</strong> data yang tidak akurat atau tidak lengkap</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-2">✓</span>
                      <span><strong>Menghapus</strong> data pribadi Anda (dengan syarat dan ketentuan)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-2">✓</span>
                      <span><strong>Membatasi</strong> pemrosesan data pribadi Anda</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-2">✓</span>
                      <span><strong>Menolak</strong> pemrosesan data untuk tujuan pemasaran</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-2">✓</span>
                      <span><strong>Memindahkan</strong> data ke penyedia layanan lain</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Cookies */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-green-800 mb-4">Kebijakan Cookies</h2>
                <div className="bg-green-50 p-6 rounded-xl">
                  <p className="text-gray-700 mb-4">
                    Website kami menggunakan cookies untuk:
                  </p>
                  <ul className="space-y-2 text-gray-700 mb-4">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span>Meningkatkan pengalaman browsing Anda</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span>Mengingat preferensi dan pengaturan</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span>Menganalisis traffic dan penggunaan website</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span>Menyediakan konten yang dipersonalisasi</span>
                    </li>
                  </ul>
                  <p className="text-gray-700">
                    Anda dapat mengatur browser untuk menolak cookies atau memberitahukan saat cookies dikirim.
                  </p>
                </div>
              </div>

              {/* Policy Updates */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-green-800 mb-4">Pembaruan Kebijakan</h2>
                <p className="text-gray-700 mb-4">
                  PT BUKIT CENDANA MUKTI dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu untuk:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Mematuhi perubahan peraturan perundang-undangan</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Menyesuaikan dengan perkembangan layanan kami</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Meningkatkan perlindungan data pengguna</span>
                  </li>
                </ul>
                <p className="text-gray-700 mt-4">
                  Perubahan akan diinformasikan melalui website atau email Anda.
                </p>
              </div>

              {/* Contact Information */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-green-800 mb-4">Hubungi Kami</h2>
                <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-6 rounded-xl">
                  <p className="text-green-100 mb-4">
                    Jika Anda memiliki pertanyaan atau keluhan tentang Kebijakan Privasi ini, silakan hubungi kami:
                  </p>
                  <div className="space-y-2">
                    <p><strong>Email:</strong> privacy@bukitcendanamukti.co.id</p>
                    <p><strong>Telepon:</strong> 085285703526</p>
                    <p><strong>Alamat:</strong> JL. RAYA LASEM, TUYUHAN JAPE REJO, Kec. Pancur, Kab. Rembang, Jawa Tengah</p>
                  </div>
                </div>
              </div>

              {/* Last Updated */}
              <div className="text-center text-gray-500 text-sm">
                <p>Kebijakan Privasi ini berlaku efektif sejak: 1 Januari 2024</p>
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
            Butuh Bantuan?
          </h2>
          <p className="text-xl text-green-800 mb-8 max-w-2xl mx-auto">
            Tim kami siap membantu menjawab pertanyaan Anda tentang kebijakan privasi dan perlindungan data.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-green-800 text-white px-8 py-4 rounded-full font-bold hover:bg-green-900 transition-all transform hover:scale-105">
              Hubungi Kami
            </a>
            <a href="/terms" className="border-2 border-green-800 text-green-800 px-8 py-4 rounded-full font-bold hover:bg-green-800 hover:text-white transition-all">
              Lihat Syarat & Ketentuan
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