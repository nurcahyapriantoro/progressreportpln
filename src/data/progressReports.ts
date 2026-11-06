import { BiDailyReport } from '../types/project';

export const INITIAL_PROGRESS_REPORTS: BiDailyReport[] = [
  {
    id: 'report-2026-11-01',
    cycleNumber: 1,
    dateStr: '2026-11-01',
    displayDate: '01 November 2026',
    shortDate: '01 Nov',
    isCompleted: true,
    isLatestActive: false,
    location: 'Workshop Depok & Site PLN UPDL Palembang',
    pipelineStage: 'workshop_depok',
    pipelineStageLabel: '1. Fabrikasi Modul Knock-Down (Depok)',
    cumulativeProgress: 3.0,
    progressDelta: 3.0,
    civilProgress: 3.0,
    iotProgress: 3.0,
    status: 'COMPLETED',
    executiveSummary: 'Kickoff pelaksanaan proyek, koordinasi awal SMK3, finalisasi Shop Drawing struktur Greenhouse Galvanis 8x25m, serta pengadaan material pipa hollow galvanis ke workshop perakitan Depok.',
    photos: [],
    nextSteps: [
      'Pemotongan bahan profil hollow galvanis sesuai daftar potong struktural.',
      'Penyetelan mal lengkungan atap arch roof dan penyiapan area perakitan modular.',
      'Koordinasi persiapan tapak pembersihan lahan di area PLN UPDL Palembang.'
    ]
  },
  {
    id: 'report-2026-11-03',
    cycleNumber: 2,
    dateStr: '2026-11-03',
    displayDate: '03 November 2026',
    shortDate: '03 Nov',
    isCompleted: true,
    isLatestActive: false,
    location: 'Workshop Fabrikasi Depok',
    pipelineStage: 'workshop_depok',
    pipelineStageLabel: '1. Fabrikasi Modul Knock-Down (Depok)',
    cumulativeProgress: 6.5,
    progressDelta: 3.5,
    civilProgress: 6.5,
    iotProgress: 6.5,
    status: 'COMPLETED',
    executiveSummary: 'Proses pemotongan presisi profil hollow galvanis untuk modul kuda-kuda lengkung atap, penyetelan mal geometri bentang 8 meter, dan pengelasan titik (tack weld) sambungan siku rangka modular.',
    photos: [
      {
        id: 'photo-03-01',
        url: '/progress/2026-11-03/foto-1-las-sambungan.jpg',
        caption: 'Penyetelan & Pengelasan Sudut Sambungan Hollow',
        narrative: 'Penyambungan titik (tack weld) dan pengecekan kelurusan sudut rangka hollow galvanis pada mal perakitan workshop Depok untuk memastikan presisi sistem knock-down.'
      },
      {
        id: 'photo-03-02',
        url: '/progress/2026-11-03/foto-2-mal-rangka-atap.jpg',
        caption: 'Setting Mal & Geometri Lengkungan Atap Bentang 8m',
        narrative: 'Perakitan bentangan lengkung atap Greenhouse sesuai dimensi gambar kerja 8x25 meter di atas bidang mal tanah datar sebelum proses pengelasan matang.'
      }
    ],
    nextSteps: [
      'Penyelesaian pengelasan penuh (full welding) pada seluruh modul busur atap.',
      'Pemotongan 18 tiang utama dan penyiapan angkur join behel pondasi.',
      'Pabrikasi struktur dudukan meja tanam hidroponik NFT dan konsolidasi tandon.'
    ]
  },
  {
    id: 'report-2026-11-05',
    cycleNumber: 3,
    dateStr: '2026-11-05',
    displayDate: '05 November 2026',
    shortDate: '05 Nov',
    isCompleted: true,
    isLatestActive: true,
    location: 'Workshop Fabrikasi Depok (Pra-Pengiriman Palembang)',
    pipelineStage: 'workshop_depok',
    pipelineStageLabel: '1. Fabrikasi Modul Knock-Down (Depok)',
    cumulativeProgress: 10.0,
    progressDelta: 3.5,
    civilProgress: 10.0,
    iotProgress: 10.0,
    status: 'ON-SCHEDULE',
    executiveSummary: 'Capaian signifikan pra-fabrikasi sistem knock-down di workshop Depok: modul lengkungan atap telah terangkai, penyiapan tiang utama beserta 18 angkur behel selesai, perakitan meja NFT beralas wiremesh telah berjalan, serta tandon air & profil pendukung telah terkonsolidasi siap QC.',
    photos: [
      {
        id: 'photo-05-01',
        url: '/progress/2026-11-05/foto-1-atap.jpg',
        caption: 'Fabrikasi Kerangka Lengkungan Atap (Arch Roof)',
        narrative: 'Perakitan dan pengelasan modul lengkungan atap (arch roof) dengan sistem knock-down di area kerja Depok agar presisi dan cepat saat didirikan di Palembang.'
      },
      {
        id: 'photo-05-02',
        url: '/progress/2026-11-05/foto-2-tiang.jpg',
        caption: 'Persiapan Rangka Tiang Utama & Angkur Join',
        narrative: 'Pemotongan pipa hollow galvanis untuk 18 titik tiang utama serta penyiapan besi behel angkur join sesuai ukuran struktural daya dukung beban angin.'
      },
      {
        id: 'photo-05-03',
        url: '/progress/2026-11-05/foto-3-meja-nft.jpg',
        caption: 'Perakitan Rangka Meja Hidroponik NFT',
        narrative: 'Fabrikasi struktur dudukan meja tanam hidroponik dan pemasangan alas kawat ram (wiremesh) galvanis untuk penopang talang gully tanam.'
      },
      {
        id: 'photo-05-04',
        url: '/progress/2026-11-05/foto-4-tandon.jpg',
        caption: 'Konsolidasi Tandon Air & Utilitas Nutrisi',
        narrative: 'Pengecekan fisik dan penyiapan unit tandon air utama serta wadah nutrisi sebelum dimobilisasi bersama modul rangka ke lokasi Palembang.'
      }
    ],
    nextSteps: [
      'Penyelesaian fabrikasi akhir & QC modul knock-down di workshop Depok.',
      'Jadwal muat material (loading) di workshop Depok: 10 November 2026.',
      'Koordinasi dropping tapak dengan tim PLN Indralaya (estimasi armada tiba di site Palembang: 12 – 15 November 2026).'
    ]
  },
  {
    id: 'report-2026-11-07',
    cycleNumber: 4,
    dateStr: '2026-11-07',
    displayDate: '07 November 2026',
    shortDate: '07 Nov',
    isCompleted: false,
    isLatestActive: false,
    location: 'Workshop Depok (Persiapan Muat Ekspedisi)',
    pipelineStage: 'qc_packing',
    pipelineStageLabel: '2. QC, Packing & Persiapan Muat',
    cumulativeProgress: 29.5,
    progressDelta: 11.0,
    civilProgress: 34.7,
    iotProgress: 24.3,
    status: 'ON-SCHEDULE',
    executiveSummary: 'Tahap final Quality Control (QC) modul knock-down, pelabelan kode sambungan (tagging), penerbitan surat jalan armada untuk jadwal muat 10 November 2026 di Depok, serta koordinasi titik dropping tapak bersama tim PLN Indralaya.',
    photos: [],
    nextSteps: [
      'Pemuatan (loading) modul hollow galvanis & meja tanam ke truk di Depok pada 10 November 2026.',
      'Perjalanan ekspedisi darat rute Depok–Merak–Bakauheni menuju Palembang.',
      'Koordinasi penerimaan dan pembongkaran dropping material di site PLN UPDL Indralaya/Palembang (ETA 12–15 Nov).'
    ]
  },
  {
    id: 'report-2026-11-09',
    cycleNumber: 5,
    dateStr: '2026-11-09',
    displayDate: '09 November 2026',
    shortDate: '09 Nov',
    isCompleted: false,
    isLatestActive: false,
    location: 'Workshop Depok & Rute Ekspedisi Lintas Sumatera',
    pipelineStage: 'ekspedisi',
    pipelineStageLabel: '3. Ekspedisi & Dropping Material',
    cumulativeProgress: 38.5,
    progressDelta: 9.0,
    civilProgress: 42.0,
    iotProgress: 35.0,
    status: 'ON-SCHEDULE',
    executiveSummary: 'Pemuatan (loading) material di workshop Depok per 10 November 2026 dan perjalanan armada ekspedisi logistik menuju site PLN UPDL Indralaya/Palembang dengan estimasi kedatangan 12–15 November 2026.',
    photos: [],
    nextSteps: [
      'Monitoring armada logistik selama penyeberangan feri dan perjalanan darat lintas Sumatera.',
      'Penyiapan tapak lahan dan clearing di PLN UPDL Indralaya sebelum armada tiba.',
      'Penyambutan armada, unloading dropping material, dan verifikasi checklist komponen di site.'
    ]
  },
  {
    id: 'report-2026-11-11',
    cycleNumber: 6,
    dateStr: '2026-11-11',
    displayDate: '11 November 2026',
    shortDate: '11 Nov',
    isCompleted: false,
    isLatestActive: false,
    location: 'Jalur Ekspedisi Menuju PLN UPDL Indralaya/Palembang',
    pipelineStage: 'ekspedisi',
    pipelineStageLabel: '3. Ekspedisi & Dropping Material',
    cumulativeProgress: 45.0,
    progressDelta: 6.5,
    civilProgress: 46.0,
    iotProgress: 44.0,
    status: 'ON-SCHEDULE',
    executiveSummary: 'Armada ekspedisi dalam perjalanan rute Sumatera menuju Palembang setelah pemuatan di Depok pada 10 November. Koordinasi tapak dropping intensif dilakukan bersama tim PLN Indralaya untuk penyambutan armada antara 12–15 November 2026.',
    photos: [],
    nextSteps: [
      'Penyambutan armada ekspedisi di tapak PLN UPDL Indralaya (ETA: 12–15 November 2026).',
      'Unloading material modular dan penataan komponen di area tapak kerja.',
      'Persiapan mobilisasi tim erection untuk perakitan tiang utama struktur.'
    ]
  },
  {
    id: 'report-2026-11-13',
    cycleNumber: 7,
    dateStr: '2026-11-13',
    displayDate: '13 November 2026',
    shortDate: '13 Nov',
    isCompleted: false,
    isLatestActive: false,
    location: 'PLN UPDL Palembang',
    pipelineStage: 'erection_palembang',
    pipelineStageLabel: '3. Erection & Sipil Palembang',
    cumulativeProgress: 56.9,
    progressDelta: 8.2,
    civilProgress: 56.4,
    iotProgress: 57.5,
    status: 'ON-SCHEDULE',
    executiveSummary: 'Struktur atap lengkung terpasang kokoh, pemasangan pintu (pintu utama, sterilisasi, pintu kolam), serta pengecatan dinding luar keliling.',
    photos: [],
    nextSteps: [
      'Pemasangan plastik UV 200 micron atap dan dinding insect net mesh 50.',
      'Pemasangan lantai rumput sintetis dan weedmat anti gulma.',
      'Penempatan meja NFT dan jalur irigasi drip.'
    ]
  },
  {
    id: 'report-2026-11-15',
    cycleNumber: 8,
    dateStr: '2026-11-15',
    displayDate: '15 November 2026',
    shortDate: '15 Nov',
    isCompleted: false,
    isLatestActive: false,
    location: 'PLN UPDL Palembang',
    pipelineStage: 'erection_palembang',
    pipelineStageLabel: '3. Erection & Sipil Palembang',
    cumulativeProgress: 66.0,
    progressDelta: 9.1,
    civilProgress: 63.8,
    iotProgress: 68.2,
    status: 'ON-SCHEDULE',
    executiveSummary: 'Greenhouse tertutup rapi dengan plastik UV atap dan insect net, lantai rumput sintetis terbentang, dan dinding insect net ruang kontrol IoT selesai dipasang.',
    photos: [],
    nextSteps: [
      'Pemasangan talang gully NFT 100 m² dan tatakan drip hebel 100 m².',
      'Instalasi kelistrikan penerangan dan kipas drum fan sirkulasi.',
      'Pekerjaan pondasi dan kanopi kolam bulat D2.'
    ]
  },
  {
    id: 'report-2026-11-17',
    cycleNumber: 9,
    dateStr: '2026-11-17',
    displayDate: '17 November 2026',
    shortDate: '17 Nov',
    isCompleted: false,
    isLatestActive: false,
    location: 'PLN UPDL Palembang',
    pipelineStage: 'iot_bast',
    pipelineStageLabel: '4. Integrasi Hidroponik & Smart IoT BRAIN',
    cumulativeProgress: 74.0,
    progressDelta: 8.0,
    civilProgress: 72.0,
    iotProgress: 76.1,
    status: 'ON-SCHEDULE',
    executiveSummary: 'Instalasi pemipaan manifold drip & NFT terpasang, instalasi 4 unit drum fan sirkulasi udara, serta penempatan menara vertical farming hidroponik.',
    photos: [],
    nextSteps: [
      'Pemasangan display touchscreen 24", prosesor Core i3, dan sensor suhu/RH/lux.',
      'Pemasangan sensor EC/PPM nutrisi dan panel manual-IoT.',
      'Penyelesaian kanopi kolam bulat pelindung UV.'
    ]
  },
  {
    id: 'report-2026-11-19',
    cycleNumber: 10,
    dateStr: '2026-11-19',
    displayDate: '19 November 2026',
    shortDate: '19 Nov',
    isCompleted: false,
    isLatestActive: false,
    location: 'PLN UPDL Palembang',
    pipelineStage: 'iot_bast',
    pipelineStageLabel: '4. Integrasi Hidroponik & Smart IoT BRAIN',
    cumulativeProgress: 82.4,
    progressDelta: 8.4,
    civilProgress: 80.5,
    iotProgress: 84.3,
    status: 'ON-SCHEDULE',
    executiveSummary: 'Integrasi panel listrik manual-IoT, kalibrasi sensor nutrisi PPM dan mikroklimat, serta uji pompa sirkulasi Drip, NFT, dan Vertikal Farming tanpa kebocoran.',
    photos: [],
    nextSteps: [
      'Pengujian fungsionalitas otomasi fertigasi via software BRAIN di layar 24".',
      'Pengecekan stabilitas mikroklimat dan sirkulasi drum fan.',
      'Finishing estetika lanskap rumput sintetis dan marka utilitas.'
    ]
  },
  {
    id: 'report-2026-11-21',
    cycleNumber: 11,
    dateStr: '2026-11-21',
    displayDate: '21 November 2026',
    shortDate: '21 Nov',
    isCompleted: false,
    isLatestActive: false,
    location: 'PLN UPDL Palembang',
    pipelineStage: 'iot_bast',
    pipelineStageLabel: '4. Integrasi Hidroponik & Smart IoT BRAIN',
    cumulativeProgress: 89.2,
    progressDelta: 6.8,
    civilProgress: 88.0,
    iotProgress: 90.4,
    status: 'ON-SCHEDULE',
    executiveSummary: 'Seluruh sistem mekanikal, elektrikal, perpipaan, dan kanopi kolam bulat tuntas terpasang. Sistem IoT telah membaca data suhu, intensitas lux, dan PPM secara real-time.',
    photos: [],
    nextSteps: [
      'Penyemaian bibit uji coba (melon drip & sayur daun NFT).',
      'Penyusunan Standard Operating Procedure (SOP) operasional untuk tim PLN UPDL.',
      'Pembersihan menyeluruh (general cleaning) area greenhouse.'
    ]
  },
  {
    id: 'report-2026-11-23',
    cycleNumber: 12,
    dateStr: '2026-11-23',
    displayDate: '23 November 2026',
    shortDate: '23 Nov',
    isCompleted: false,
    isLatestActive: false,
    location: 'PLN UPDL Palembang',
    pipelineStage: 'iot_bast',
    pipelineStageLabel: '5. Commissioning & Serah Terima (BAST)',
    cumulativeProgress: 94.2,
    progressDelta: 5.0,
    civilProgress: 94.0,
    iotProgress: 94.5,
    status: 'ON-SCHEDULE',
    executiveSummary: 'Tahap Commissioning Test 24 jam non-stop: uji ketahanan pompa, otomatisasi penyiraman drip, sirkulasi NFT, dan pengoperasian darurat manual panel listrik.',
    photos: [],
    nextSteps: [
      'Pelatihan operasional (transfer of knowledge) kepada staf PLN UPDL Palembang.',
      'Finalisasi dokumen As-Built Drawing dan manual panduan IoT.',
      'Persiapan inspeksi bersama tim manajemen PLN UPDL Palembang.'
    ]
  },
  {
    id: 'report-2026-11-25',
    cycleNumber: 13,
    dateStr: '2026-11-25',
    displayDate: '25 November 2026',
    shortDate: '25 Nov',
    isCompleted: false,
    isLatestActive: false,
    location: 'PLN UPDL Palembang',
    pipelineStage: 'iot_bast',
    pipelineStageLabel: '5. Commissioning & Serah Terima (BAST)',
    cumulativeProgress: 97.5,
    progressDelta: 3.3,
    civilProgress: 97.5,
    iotProgress: 97.5,
    status: 'ON-SCHEDULE',
    executiveSummary: 'Pra-inspeksi bersama manajemen PLN UPDL Palembang, seluruh catatan minor langsung ditindaklanjuti, greenhouse dalam kondisi siap panen bibit uji coba.',
    photos: [],
    nextSteps: [
      'Final touch up pengecatan dan pembersihan kaca/net.',
      'Penandatanganan Berita Acara Uji Fungsi Mekanikal & IoT.',
      'Persiapan serah terima akhir.'
    ]
  },
  {
    id: 'report-2026-11-27',
    cycleNumber: 14,
    dateStr: '2026-11-27',
    displayDate: '27 November 2026',
    shortDate: '27 Nov',
    isCompleted: false,
    isLatestActive: false,
    location: 'PLN UPDL Palembang',
    pipelineStage: 'iot_bast',
    pipelineStageLabel: '5. Commissioning & Serah Terima (BAST)',
    cumulativeProgress: 99.1,
    progressDelta: 1.6,
    civilProgress: 99.2,
    iotProgress: 99.0,
    status: 'ON-SCHEDULE',
    executiveSummary: 'Penyelesaian seluruh administrasi proyek, serah terima berkas As-Built Drawing, buku panduan operasional Smart IoT, serta persiapan peresmian serah terima (BAST).',
    photos: [],
    nextSteps: [
      'Penandatanganan BAST (Berita Acara Serah Terima) 100%.',
      'Demonstrasi sistem di hadapan General Manager PLN UPDL Palembang.'
    ]
  },
  {
    id: 'report-2026-11-28',
    cycleNumber: 15,
    dateStr: '2026-11-28',
    displayDate: '28 November 2026',
    shortDate: '28 Nov',
    isCompleted: false,
    isLatestActive: false,
    location: 'PLN UPDL Palembang',
    pipelineStage: 'iot_bast',
    pipelineStageLabel: '5. Commissioning & Serah Terima (BAST)',
    cumulativeProgress: 100.0,
    progressDelta: 0.9,
    civilProgress: 100.0,
    iotProgress: 100.0,
    status: 'COMPLETED',
    executiveSummary: 'TARGET SELESAI 100%: Serah Terima Hasil Pekerjaan (BAST) Pembangunan Smart Greenhouse PLN UPDL Palembang antara BRAIN IPB University dan PT PLN (Persero) UPDL Palembang berjalan sukses dan tepat waktu.',
    photos: [],
    nextSteps: [
      'Masa pemeliharaan dan pendampingan budidaya smart farming berkelanjutan.',
      'Monitoring berkala performa sensor IoT via cloud dashboard BRAIN IPB.'
    ]
  }
];
