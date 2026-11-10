import React, { useState } from 'react';
import { Eye, Layers, Maximize2, X, Compass, CheckCircle } from 'lucide-react';

interface DesignItem {
  id: string;
  pageNum: number;
  category: 'render_3d' | 'technical_drawing';
  title: string;
  subtitle: string;
  imageSrc: string;
  specs: string[];
}

const DESIGN_ITEMS: DesignItem[] = [
  // 7 3D Render & System Models
  {
    id: 'd-01',
    pageNum: 1,
    category: 'render_3d',
    title: 'Isometri Greenhouse',
    subtitle: 'Perspektif eksterior lengkap dengan penutup plastik UV 200 micron, dinding insect net seri 50, talang air, dan pipa pembuangan 3 inch',
    imageSrc: '/3d-design/page-01.jpg',
    specs: ['Ukuran 8x25 Meter', 'Plastik UV 200 Micron', 'Dinding Insectnet Seri 50', 'Pipa Pembuangan 3"']
  },
  {
    id: 'd-02',
    pageNum: 2,
    category: 'render_3d',
    title: 'Isometri Belakang Greenhouse & 3 Kolam D2',
    subtitle: 'Tampak area 3 unit kolam bundar D2 penampungan dan kanopi pelindung UV bagian belakang',
    imageSrc: '/3d-design/page-02.jpg',
    specs: ['3 Unit Kolam D2', 'Rangka Kanopi 4.00x8.00m', 'Atap Kanopi UV']
  },
  {
    id: 'd-03',
    pageNum: 3,
    category: 'render_3d',
    title: 'Isometri Terbuka Struktur Rangka Galvanis',
    subtitle: 'Konstruksi tiang hollow 40x60 1.8mm (±2mm), rangka hollow 40x40 1mm (±2mm), dan lantai rumput sintetis',
    imageSrc: '/3d-design/page-03.jpg',
    specs: ['Tiang Hollow 40x60 1.8mm (±2mm)', 'Rangka Hollow 40x40 1mm (±2mm)', 'Lantai Rumput Sintetis']
  },
  {
    id: 'd-04',
    pageNum: 4,
    category: 'render_3d',
    title: 'Ruang Kontrol Smart IoT & Fertigasi',
    subtitle: 'Pusat kendali display monitor touchscreen, panel listrik dual-mode, toren air drip & NFT, pompa pendorong, filter air, dan bak nutrisi A & B 100L',
    imageSrc: '/3d-design/page-04.jpg',
    specs: ['Display Monitor Touchscreen', 'Panel Listrik', 'Toren & Pompa Drip/NFT', 'Bak Nutrisi A&B 100L', 'Filter Air']
  },
  {
    id: 'd-05',
    pageNum: 5,
    category: 'render_3d',
    title: 'Sistem Irigasi Drip (Tetes)',
    subtitle: 'Jalur pipa 1" & 1/2", pipa 16mm, stopkran 16mm, stick drip presisi, polybag 40x40 cm, dan tatakan hebel',
    imageSrc: '/3d-design/page-05.jpg',
    specs: ['Pipa 1" & 1/2"', 'Pipa & Stopkran 16mm', 'Stick Drip Terkalibrasi', 'Polybag 40x40 cm', 'Tatakan Hebel']
  },
  {
    id: 'd-06',
    pageNum: 6,
    category: 'render_3d',
    title: 'Sistem Hidroponik NFT',
    subtitle: 'Modul talang gully tanam, rangka baja ringan kokoh, stopkran 1/2 inch sirkulasi nutrisi, dan rumput sintetis',
    imageSrc: '/3d-design/page-06.jpg',
    specs: ['Talang Gully NFT', 'Rangka Baja Ringan', 'Stopkran 1/2 Inch', 'Alas Rumput Sintetis']
  },
  {
    id: 'd-07',
    pageNum: 7,
    category: 'render_3d',
    title: 'Sistem Vertikal Hidroponik & Kolam',
    subtitle: 'Tiga menara vertikal farming 24 lubang, pemipaan sirkulasi nutrisi, dan integrasi kolam bioflok bulat',
    imageSrc: '/3d-design/page-07.jpg',
    specs: ['3 Menara Vertikal Farming 24 Lubang', 'Pemipaan Sirkulasi Nutrisi', 'Kolam Bulat D2']
  },

  // 5 Technical Architectural Drawings with Dimensions
  {
    id: 'd-08',
    pageNum: 8,
    category: 'technical_drawing',
    title: 'Gambar Kerja: Tampak Depan Dimensi',
    subtitle: 'Bentang lebar 8.00m, tinggi dinding 4.00m, tinggi puncak 6.20m, dinding bata t:0.60m, dan pintu steril 1.00x2.00m',
    imageSrc: '/3d-design/page-08.jpg',
    specs: ['Lebar 8.00 m', 'Tinggi Dinding 4.00 m', 'Tinggi Puncak 6.20 m', 'Dinding Bata 0.60 m', 'Pintu 1.00x2.00 m']
  },
  {
    id: 'd-09',
    pageNum: 9,
    category: 'technical_drawing',
    title: 'Gambar Kerja: Tampak Atas Dimensi',
    subtitle: 'Panjang total 25.00m + kanopi kolam 4.00m, lebar 8.00m, ruang kontrol 3.00m, dan pembagian zona tanam',
    imageSrc: '/3d-design/page-09.jpg',
    specs: ['Panjang 25.00 m', 'Kanopi Kolam Belakang 4.00 m', 'Lebar 8.00 m']
  },
  {
    id: 'd-10',
    pageNum: 10,
    category: 'technical_drawing',
    title: 'Gambar Kerja: Tampak Samping Dimensi',
    subtitle: 'Jarak antar tiang utama 3.00m (8 modul bentang 25m) serta elevasi kanopi kolam 3.77m / 3.00m',
    imageSrc: '/3d-design/page-10.jpg',
    specs: ['8 Modul Antar-Tiang @3.00m', 'Kanopi Kolam 4.00 m', 'Elevasi Kanopi 3.77 m / 3.00 m']
  },
  {
    id: 'd-11',
    pageNum: 11,
    category: 'technical_drawing',
    title: 'Gambar Kerja: Layout Denah Dalam (Jauh)',
    subtitle: 'Jarak lorong sirkulasi 0.70m, meja NFT 1.40m & 4.00m, meja drip 1.20m, serta tata letak 3 kolam belakang',
    imageSrc: '/3d-design/page-11.jpg',
    specs: ['Meja Drip 1.20 m', 'Meja NFT 1.40 m', 'Lorong Servis 0.70 m', '3 Kolam D2']
  },
  {
    id: 'd-12',
    pageNum: 12,
    category: 'technical_drawing',
    title: 'Gambar Kerja: Layout Denah Dalam (Dekat)',
    subtitle: 'Detail posisi toren drip & NFT, pompa pendorong, bak rabat tandon, jarak lubang drip 0.40m, dan jarak lubang NFT 0.20m',
    imageSrc: '/3d-design/page-12.jpg',
    specs: ['Jarak Titik Drip 0.40 m', 'Jarak Lubang NFT 0.20 m', 'Toren Drip & Toren NFT', 'Bak Rabat Tandon']
  }
];

export const Design3DShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'render_3d' | 'technical_drawing'>('all');
  const [modalItem, setModalItem] = useState<DesignItem | null>(null);

  const filteredItems = DESIGN_ITEMS.filter((item) => {
    if (activeTab === 'all') return true;
    return item.category === activeTab;
  });

  return (
    <section id="desain-3d" className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-pln-blue text-[11px] font-extrabold uppercase">
              Shop Drawing Resmi
            </span>
            <span className="text-xs text-slate-400">• PLN ULP Indralaya</span>
          </div>
          <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight mt-1 flex items-center gap-2">
            <Compass className="w-5 h-5 text-pln-blue" />
            <span>Gambar Kerja & Model 3D Greenhouse Galvanis 8x25m</span>
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            12 Halaman visualisasi arsitektur teknis, layout fertigasi, dan ruang kontrol IoT (PLN ULP Indralaya)
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex items-center p-1 bg-slate-100 rounded-xl text-xs font-bold self-start sm:self-auto">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-3 py-1.5 rounded-lg transition ${
              activeTab === 'all'
                ? 'bg-white text-pln-blue shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Semua (12)
          </button>
          <button
            onClick={() => setActiveTab('render_3d')}
            className={`px-3 py-1.5 rounded-lg transition ${
              activeTab === 'render_3d'
                ? 'bg-white text-pln-blue shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Model 3D (7)
          </button>
          <button
            onClick={() => setActiveTab('technical_drawing')}
            className={`px-3 py-1.5 rounded-lg transition ${
              activeTab === 'technical_drawing'
                ? 'bg-white text-pln-blue shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Dimensi Teknis (5)
          </button>
        </div>
      </div>

      {/* Grid of 3D Design Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            onClick={() => setModalItem(item)}
            className="group bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-card-hover hover:border-pln-cyan transition-all cursor-pointer flex flex-col"
          >
            {/* Image Preview */}
            <div className="relative aspect-[16/11] bg-slate-100 overflow-hidden">
              <img
                src={item.imageSrc}
                alt={item.title}
                className="w-full h-full object-contain p-2 group-hover:scale-102 transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute top-3 left-3 px-2 py-0.5 rounded-md bg-slate-900/80 text-white text-[10px] font-bold">
                Hal. {item.pageNum}
              </div>
              <div className="absolute top-3 right-3 px-2 py-0.5 rounded-md bg-white/90 text-slate-800 text-[10px] font-bold shadow-xs">
                {item.category === 'render_3d' ? 'Model 3D' : 'Dimensi'}
              </div>
              <div className="absolute inset-0 bg-slate-900/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-white/95 text-slate-800 flex items-center justify-center shadow-lg">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Info */}
            <div className="p-4 flex-1 flex flex-col justify-between">
              <div>
                <h4 className="text-sm font-bold text-slate-900 group-hover:text-pln-blue transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                  {item.subtitle}
                </p>
              </div>

              {/* Specs Pills */}
              <div className="mt-3 pt-3 border-t border-slate-100 flex flex-wrap gap-1.5">
                {item.specs.slice(0, 3).map((spec, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 text-[10px] font-medium"
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Lightbox */}
      {modalItem && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setModalItem(null)}
        >
          <div
            className="relative bg-white rounded-2xl max-w-5xl w-full overflow-hidden shadow-2xl animate-fade-in flex flex-col max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200">
              <div>
                <span className="text-xs font-bold text-pln-blue uppercase">
                  Gambar Kerja Halaman {modalItem.pageNum} • {modalItem.category === 'render_3d' ? 'Visualisasi 3D' : 'Dimensi Arsitektur'}
                </span>
                <h3 className="text-base sm:text-lg font-extrabold text-slate-900">
                  {modalItem.title}
                </h3>
              </div>
              <button
                onClick={() => setModalItem(null)}
                className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image */}
            <div className="flex-1 bg-slate-50 p-4 sm:p-6 overflow-auto flex items-center justify-center min-h-[300px]">
              <img
                src={modalItem.imageSrc}
                alt={modalItem.title}
                className="max-h-[65vh] w-auto object-contain rounded-lg shadow-sm border border-slate-200"
              />
            </div>

            {/* Modal Footer Description */}
            <div className="px-6 py-4 bg-white border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <p className="text-xs text-slate-600 max-w-2xl">
                {modalItem.subtitle}
              </p>
              <div className="flex flex-wrap gap-1.5 shrink-0">
                {modalItem.specs.map((s, idx) => (
                  <span key={idx} className="px-2.5 py-1 rounded-md bg-blue-50 text-pln-blue text-[11px] font-bold">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
