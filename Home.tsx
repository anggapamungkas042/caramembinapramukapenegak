import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronDown, BookOpen, Users, Zap, Target } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [expandedChapter, setExpandedChapter] = useState<number | null>(null);

  const chapters = [
    {
      id: 1,
      title: "Fondasi Filosofi Kepramukaan",
      description: "Warisan Baden Powell dan semangat Sri Sultan HB IX",
      sections: [
        "Warisan Baden Powell: Scouting is a Game",
        "Semangat Sri Sultan HB IX: Pramuka untuk Masyarakat",
        "Integrasi Filosofi: Tradisi Bertemu Inovasi"
      ]
    },
    {
      id: 2,
      title: "Memahami Generasi Penegak 2026",
      description: "Profil psikografis dan tantangan unik generasi digital",
      sections: [
        "Profil Psikografis Penegak 2026",
        "Tantangan Unik Penegak 2026",
        "Kekuatan Unik Penegak 2026"
      ]
    },
    {
      id: 3,
      title: "Strategi Pembinaan Digital-First",
      description: "Hybrid Scouting dan platform digital untuk pembinaan",
      sections: [
        "Paradigma Baru: Hybrid Scouting",
        "Platform dan Tools untuk Pembinaan Digital",
        "Gamifikasi dalam Kepramukaan Digital",
        "Metode Pembinaan: From Instruction to Facilitation"
      ]
    },
    {
      id: 4,
      title: "Kepemimpinan Ambalan di Era Disrupsi",
      description: "Mengembangkan pemimpin adaptif dan visioner",
      sections: [
        "Karakteristik Pemimpin Ambalan 2026",
        "Pengembangan Pemimpin Ambalan",
        "Sistem Ambalan yang Efektif"
      ]
    },
    {
      id: 5,
      title: "Pengalaman Sukses dari Lapangan",
      description: "Studi kasus dari pembina-pembina sukses",
      sections: [
        "Studi Kasus: SMA Negeri Balung",
        "Studi Kasus: SMK Ma'arif NU 2 Ajibarang"
      ]
    },
    {
      id: 6,
      title: "Etika Digital dan Cyber Scouting",
      description: "Menerapkan nilai-nilai kepramukaan di dunia maya",
      sections: [
        "Dasa Darma di Dunia Maya",
        "Digital Citizenship",
        "Mengatasi Tantangan Digital"
      ]
    },
    {
      id: 7,
      title: "Inovasi Kegiatan dan Proyek Berdampak",
      description: "Merancang kegiatan yang bermakna dan berdampak",
      sections: [
        "Jenis-Jenis Kegiatan Digital untuk Penegak",
        "Merancang Proyek Berdampak",
        "Contoh Proyek Berdampak"
      ]
    },
    {
      id: 8,
      title: "Mengevaluasi Kesuksesan Pembinaan",
      description: "Metrik dan evaluasi pembinaan yang efektif",
      sections: [
        "Metrik Kesuksesan Pembinaan Penegak",
        "Metode Evaluasi",
        "Continuous Improvement"
      ]
    }
  ];

  const highlights = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "50 Halaman Komprehensif",
      description: "Panduan lengkap dengan teori dan praktik"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Berbasis Pengalaman Nyata",
      description: "Studi kasus dari pembina-pembina sukses"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Era Digital 2026",
      description: "Strategi pembinaan yang relevan dengan teknologi"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Fokus pada Dampak",
      description: "Membina pemimpin yang berkontribusi nyata"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header Navigation */}
      <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-600 to-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">📖</span>
            </div>
            <div>
              <h1 className="text-lg font-bold text-slate-900">Pramuka Ebook 2026</h1>
              <p className="text-xs text-slate-500">Era Digital</p>
            </div>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#chapters" className="text-sm text-slate-600 hover:text-slate-900 transition">Daftar Isi</a>
            <a href="#highlights" className="text-sm text-slate-600 hover:text-slate-900 transition">Fitur</a>
            <a href="#about" className="text-sm text-slate-600 hover:text-slate-900 transition">Tentang</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-50 via-blue-50 to-slate-50 opacity-60"></div>
        <div className="container mx-auto px-4 py-16 md:py-24 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                ✨ Panduan Pembinaan Pramuka Penegak
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                Bagaimana Cara Sukses Membina Pramuka Penegak di Tahun 2026
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Panduan komprehensif untuk membina generasi pemimpin digital yang berkarakter kuat, berbasis filosofi Baden Powell dan semangat Sri Sultan Hamengkubuwono IX.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white px-8 py-6 text-base font-semibold rounded-lg transition-all hover:shadow-lg">
                  Baca Ebook
                </Button>
                <Button variant="outline" className="px-8 py-6 text-base font-semibold rounded-lg">
                  Unduh PDF
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663665432166/RBDoxbGLRFB3roxXHktcmr/pramuka-hero-banner-PtN262yQyYTE7FXJZWz5nb.webp"
                alt="Hero Banner"
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section id="highlights" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Mengapa Ebook Ini Penting?</h3>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Panduan praktis yang menggabungkan filosofi kepramukaan klasik dengan strategi pembinaan era digital
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {highlights.map((item, idx) => (
              <Card key={idx} className="p-6 hover:shadow-lg transition-all hover:border-emerald-300 border-slate-200">
                <div className="text-emerald-600 mb-4">{item.icon}</div>
                <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                <p className="text-sm text-slate-600">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Chapters Section */}
      <section id="chapters" className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Daftar Isi Lengkap</h3>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              8 bab komprehensif yang mencakup semua aspek pembinaan Penegak di era digital
            </p>
          </div>
          <div className="space-y-4">
            {chapters.map((chapter) => (
              <Card 
                key={chapter.id}
                className="border-slate-200 hover:border-emerald-300 transition-all cursor-pointer"
                onClick={() => setExpandedChapter(expandedChapter === chapter.id ? null : chapter.id)}
              >
                <div className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="inline-flex items-center justify-center w-8 h-8 bg-gradient-to-br from-emerald-600 to-blue-600 text-white rounded-full font-bold text-sm">
                          {chapter.id}
                        </span>
                        <h4 className="text-lg font-bold text-slate-900">{chapter.title}</h4>
                      </div>
                      <p className="text-slate-600 ml-11">{chapter.description}</p>
                    </div>
                    <ChevronDown 
                      className={`w-5 h-5 text-slate-400 transition-transform ${expandedChapter === chapter.id ? 'rotate-180' : ''}`}
                    />
                  </div>
                  {expandedChapter === chapter.id && (
                    <div className="mt-4 ml-11 pt-4 border-t border-slate-200">
                      <ul className="space-y-2">
                        {chapter.sections.map((section, idx) => (
                          <li key={idx} className="text-sm text-slate-600 flex items-start gap-2">
                            <span className="text-emerald-600 font-bold">•</span>
                            <span>{section}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Sections */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 text-center">Evolusi Kepemimpinan Pramuka</h3>
            <img 
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663665432166/RBDoxbGLRFB3roxXHktcmr/pramuka-leadership-illustration-eg4sk9E2tTXdDzwSGbHqa3.webp"
              alt="Leadership Evolution"
              className="rounded-2xl shadow-lg w-full h-auto object-cover"
            />
          </div>
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 text-center">Dampak Digital Pramuka</h3>
            <img 
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663665432166/RBDoxbGLRFB3roxXHktcmr/pramuka-digital-impact-QTa34m6zrEDPx2KdGTYVFV.webp"
              alt="Digital Impact"
              className="rounded-2xl shadow-lg w-full h-auto object-cover"
            />
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 text-center">Dasa Darma di Era Digital</h3>
            <img 
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663665432166/RBDoxbGLRFB3roxXHktcmr/pramuka-values-visual-dUs6J42msdZ38TrZFrq2.webp"
              alt="Dasa Darma"
              className="rounded-2xl shadow-lg w-full h-auto object-cover max-w-md mx-auto"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">Tentang Ebook Ini</h3>
            <div className="prose prose-slate max-w-none">
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Ebook ini adalah hasil riset mendalam tentang bagaimana membina Pramuka Penegak secara efektif di era digital 2026. Kami menggabungkan filosofi kepramukaan klasik dari Lord Baden Powell dan semangat pengabdian dari Sri Sultan Hamengkubuwono IX dengan strategi pembinaan modern yang relevan dengan teknologi dan kebutuhan generasi muda saat ini.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Panduan ini bukan hanya teori, tetapi juga praktik nyata yang telah terbukti berhasil dari berbagai pembina Pramuka di lapangan. Kami percaya bahwa dengan memahami generasi Penegak 2026, menguasai strategi pembinaan digital, dan tetap setia pada nilai-nilai kepramukaan, kita dapat membina pemimpin-pemimpin masa depan yang berkontribusi positif bagi masyarakat.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Semoga ebook ini memberikan inspirasi dan panduan praktis dalam perjalanan Anda membina Pramuka Penegak yang sukses dan bermakna.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-emerald-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Siap Membina Penegak di Era Digital?</h3>
          <p className="text-lg text-emerald-50 mb-8 max-w-2xl mx-auto">
            Dapatkan akses ke panduan lengkap dan mulai transformasi pembinaan Pramuka Anda hari ini
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-emerald-600 hover:bg-emerald-50 px-8 py-6 text-base font-semibold rounded-lg transition-all">
              Baca Sekarang
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-base font-semibold rounded-lg">
              Bagikan Ebook
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-white mb-4">Tentang</h4>
              <p className="text-sm">Panduan komprehensif untuk pembina Pramuka Penegak di era digital 2026.</p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Navigasi</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#chapters" className="hover:text-white transition">Daftar Isi</a></li>
                <li><a href="#highlights" className="hover:text-white transition">Fitur</a></li>
                <li><a href="#about" className="hover:text-white transition">Tentang</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Referensi</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Baden Powell</a></li>
                <li><a href="#" className="hover:text-white transition">Sri Sultan HB IX</a></li>
                <li><a href="#" className="hover:text-white transition">Gerakan Pramuka</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Kontak</h4>
              <p className="text-sm">Untuk pertanyaan atau feedback, silakan hubungi kami.</p>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-sm">
            <p>&copy; 2026 Pramuka Ebook. Semua hak dilindungi. Dibuat dengan ❤️ untuk pembina Pramuka.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
