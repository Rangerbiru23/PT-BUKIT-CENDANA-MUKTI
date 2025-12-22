'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin, ChevronRight, Users, Target, Award, History, Leaf } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
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
              <Link href="/about" className="text-green-800 hover:text-green-600 font-medium transition-colors">Tentang</Link>
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
                <Link href="/about" className="text-green-800 hover:text-green-600 font-medium">Tentang</Link>
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
            <h1 className="text-5xl md:text-6xl font-bold text-green-800 mb-6">
              Tentang <span className="text-yellow-600">PT BUKIT CENDANA MUKTI</span>
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Perusahaan pertanian jagung terkemuka yang berkomitmen untuk menghasilkan produk berkualitas premium dengan praktik berkelanjutan dan teknologi modern.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-green-800 mb-6">Sejarah Kami</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  PT BUKIT CENDANA MUKTI didirikan pada tahun 2009 dengan visi untuk menjadi perusahaan pertanian jagung terkemuka di Indonesia. Berawal dari lahan seluas 100 hektar di Rembang, Jawa Tengah, kami telah berkembang pesat menjadi perusahaan dengan 5000+ hektar lahan pertanian.
                </p>
                <p>
                  Selama lebih dari 15 tahun, kami telah membangun reputasi sebagai produsen jagung berkualitas premium yang menjadi andalan industri pangan dan pakan ternak di seluruh Indonesia. Komitmen kami terhadap kualitas dan keberlanjutan telah membuat kami menjadi mitra terpercaya bagi ratusan klien.
                </p>
                <p>
                  Dengan dukungan tim profesional dan teknologi pertanian modern, kami terus berinovasi untuk meningkatkan produktivitas dan kualitas produk, serta mendukung ketahanan pangan nasional.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/team-meeting.jpg" 
                alt="Our Team" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-yellow-500 text-green-900 p-6 rounded-xl shadow-xl">
                <div className="text-3xl font-bold">2009</div>
                <div className="text-sm font-medium">Tahun Berdiri</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 bg-gradient-to-r from-green-50 to-yellow-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-800 mb-4">Visi & Misi</h2>
            <p className="text-xl text-gray-600">
              Panduan kami dalam mencapai kesuksesan dan memberikan nilai terbaik
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Target className="text-green-700" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-green-800 mb-4">Visi</h3>
              <p className="text-gray-700 leading-relaxed">
                Menjadi perusahaan pertanian jagung terkemuka di Asia Tenggara yang menghasilkan produk berkualitas premium dengan praktik pertanian berkelanjutan dan mendukung ketahanan pangan global.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Award className="text-yellow-700" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-green-800 mb-4">Misi</h3>
              <ul className="text-gray-700 space-y-3">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  Menghasilkan jagung berkualitas premium dengan standar internasional
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  Menerapkan praktik pertanian berkelanjutan yang ramah lingkungan
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  Meningkatkan kesejahteraan petani dan masyarakat sekitar
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  Mendukung ketahanan pangan nasional melalui produksi yang berkelanjutan
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-800 mb-4">Nilai-Nilai Inti</h2>
            <p className="text-xl text-gray-600">
              Prinsip yang memandu setiap keputusan dan tindakan kami
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Leaf className="text-green-700" size={36} />
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-3">Keberlanjutan</h3>
              <p className="text-gray-600">
                Praktik pertanian yang menjaga keseimbangan ekosistem untuk generasi mendatang
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-yellow-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="text-yellow-700" size={36} />
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-3">Kualitas Premium</h3>
              <p className="text-gray-600">
                Standar kualitas tertinggi untuk setiap produk yang kami hasilkan
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="text-green-700" size={36} />
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-3">Integritas</h3>
              <p className="text-gray-600">
                Kejujuran dan transparansi dalam setiap aspek bisnis kami
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-yellow-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="text-yellow-700" size={36} />
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-3">Inovasi</h3>
              <p className="text-gray-600">
                Terus berinovasi dengan teknologi pertanian modern untuk hasil optimal
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Statistics */}
      <section className="py-20 px-4 bg-gradient-to-r from-green-700 to-green-600 text-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Pencapaian Kami</h2>
            <p className="text-xl text-green-100">
              Angka yang berbicara tentang dedikasi dan komitmen kami
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold mb-2 text-yellow-400">5000+</div>
              <div className="text-green-100 text-lg">Hektar Lahan</div>
              <div className="text-green-200 text-sm mt-2"> tersebar di Jawa Tengah</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold mb-2 text-yellow-400">50K+</div>
              <div className="text-green-100 text-lg">Ton/Tahun</div>
              <div className="text-green-200 text-sm mt-2"> kapasitas produksi</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold mb-2 text-yellow-400">200+</div>
              <div className="text-green-100 text-lg">Karyawan</div>
              <div className="text-green-200 text-sm mt-2"> profesional berpengalaman</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold mb-2 text-yellow-400">15+</div>
              <div className="text-green-100 text-lg">Tahun</div>
              <div className="text-green-200 text-sm mt-2"> pengalaman industri</div>
            </div>
          </div>
        </div>
      </section>

      {/* Management Team */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-800 mb-4">Tim Manajemen</h2>
            <p className="text-xl text-gray-600">
              Pemimpin berpengalaman yang memandu kesuksesan perusahaan
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-br from-green-100 to-yellow-100 w-32 h-32 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Users className="text-green-700" size={48} />
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-2">Direktur Utama</h3>
              <p className="text-gray-600 mb-4">Pemimpin dengan visi strategis dan pengalaman lebih dari 20 tahun di industri pertanian.</p>
              <div className="text-sm text-gray-500">
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">Strategic Leadership</span>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-br from-yellow-100 to-green-100 w-32 h-32 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Users className="text-yellow-700" size={48} />
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-2">Direktur Operasional</h3>
              <p className="text-gray-600 mb-4">Ahli dalam manajemen operasional pertanian modern dan optimalisasi produksi.</p>
              <div className="text-sm text-gray-500">
                <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full">Operations Excellence</span>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-br from-green-100 to-yellow-100 w-32 h-32 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Users className="text-green-700" size={48} />
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-2">Direktur Keuangan</h3>
              <p className="text-gray-600 mb-4">Profesional dengan keahlian dalam manajemen keuangan dan investasi pertanian.</p>
              <div className="text-sm text-gray-500">
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">Financial Management</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-yellow-500 to-yellow-400">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-green-900 mb-6">
            Bergabung dengan Perusahaan Terkemuka
          </h2>
          <p className="text-xl text-green-800 mb-8 max-w-2xl mx-auto">
            Mari bersama membangun industri pertanian jagung yang lebih baik dan berkelanjutan untuk Indonesia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-green-800 text-white px-8 py-4 rounded-full font-bold hover:bg-green-900 transition-all transform hover:scale-105">
              Hubungi Kami
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