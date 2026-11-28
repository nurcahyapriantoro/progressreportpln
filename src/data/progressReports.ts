import { BiDailyReport } from '../types/project';

export const INITIAL_PROGRESS_REPORTS: BiDailyReport[] = [
  // =========================================================================
  // 1. LAPORAN HARIAN 01 NOVEMBER 2026
  // =========================================================================
  {
    id: 'report-2026-11-01',
    cycleNumber: 1,
    dateStr: '2026-11-01',
    displayDate: '01 November 2026',
    shortDate: '01 Nov',
    isCompleted: true,
    isLatestActive: false,
    location: 'Workshop Fabrikasi Depok & Site PLN UPDL Palembang',
    pipelineStage: 'workshop_depok',
    pipelineStageLabel: '1. Fabrikasi Modul Knock-Down (Depok)',
    cumulativeProgress: 3.0,
    progressDelta: 3.0,
    civilProgress: 3.0,
    iotProgress: 3.0,
    status: 'COMPLETED',
    weather: {
      morning: 'Cerah',
      afternoon: 'Cerah'
    },
    manpowerCount: 1,
    manpowerRole: '1 Pekerja Lapangan (Penerimaan & Drop Material)',
    executiveSummary: 'Kickoff pelaksanaan proyek: drop material profil pipa hollow galvanis ke workshop perakitan Depok (Paket Sipil 1.1), penerapan awal SMK3 keselamatan kerja, finalisasi Shop Drawing Greenhouse Galvanis 8x25m, serta penyiapan area fabrikasi modular knock-down.',
    photos: [
      {
        id: 'photo-01-01',
        url: '/progress/2026-11-01/Picture1.png',
        caption: 'Drop Material Pipa Hollow Galvanis di Workshop Depok',
        narrative: 'Penerimaan dan penataan bahan baku pipa hollow galvanis struktural di workshop perakitan Depok sebagai kesiapan awal pemotongan tiang dan busur atap.'
      },
      {
        id: 'photo-01-02',
        url: '/progress/2026-11-01/Picture2.png',
        caption: 'Verifikasi Fisik & Spesifikasi Bahan Baku Baja',
        narrative: 'Pengecekan dimensi penampang profil hollow galvanis dan ketebalan dinding baja untuk memastikan kesesuaian gambar shop drawing struktur greenhouse 8x25m.'
      }
    ],
    nextSteps: [
      'Pemotongan bahan profil hollow galvanis tiang utama sesuai daftar potong struktural.',
      'Penyetelan mal lengkungan atap arch roof dan penyiapan area perakitan modular.',
      'Koordinasi persiapan tapak pembersihan lahan di area PLN UPDL Palembang.'
    ]
  },

  // =========================================================================
  // 2. LAPORAN HARIAN 02 NOVEMBER 2026
  // =========================================================================
  {
    id: 'report-2026-11-02',
    cycleNumber: 2,
    dateStr: '2026-11-02',
    displayDate: '02 November 2026',
    shortDate: '02 Nov',
    isCompleted: true,
    isLatestActive: false,
    location: 'Workshop Fabrikasi Depok',
    pipelineStage: 'workshop_depok',
    pipelineStageLabel: '1. Fabrikasi Modul Knock-Down (Depok)',
    cumulativeProgress: 4.8,
    progressDelta: 1.8,
    civilProgress: 5.0,
    iotProgress: 4.5,
    status: 'COMPLETED',
    weather: {
      morning: 'Cerah',
      afternoon: 'Cerah'
    },
    manpowerCount: 4,
    manpowerRole: '4 Tenaga Kerja Fabrikasi & Pemotongan',
    executiveSummary: 'Pekerjaan pemotongan bahan rangka tiang utama hollow galvanis 40x60 (Paket Sipil 5.1). Tim fabrikasi memotong profil tiang untuk 18 titik tiang utama dengan presisi tinggi dan sudut siku terstandar sesuai shop drawing struktur.',
    photos: [
      {
        id: 'photo-02-01',
        url: '/progress/2026-11-02/Picture1.png',
        caption: 'Pemotongan Presisi Profil Tiang Hollow 40x60',
        narrative: 'Pemotongan dingin menggunakan mesin cutting wheel untuk menghasilkan sudut potongan tegak lurus pada 18 batang tiang utama rangka greenhouse.'
      },
      {
        id: 'photo-02-02',
        url: '/progress/2026-11-02/Picture2.png',
        caption: 'Penataan & Pengelompokan Batang Tiang Modular',
        narrative: 'Hasil potongan profil tiang galvanis dikelompokkan dan ditandai (marking) untuk mempermudah proses assembling sistem knock-down.'
      }
    ],
    nextSteps: [
      'Pemotongan bahan kerangka atap lengkung bentang 8m.',
      'Persiapan mal lengkungan atap di bidang kerja datar.',
      'Penyiapan peralatan bending/rol pipa.'
    ]
  },

  // =========================================================================
  // 3. LAPORAN HARIAN 03 NOVEMBER 2026
  // =========================================================================
  {
    id: 'report-2026-11-03',
    cycleNumber: 3,
    dateStr: '2026-11-03',
    displayDate: '03 November 2026',
    shortDate: '03 Nov',
    isCompleted: true,
    isLatestActive: false,
    location: 'Workshop Fabrikasi Depok',
    pipelineStage: 'workshop_depok',
    pipelineStageLabel: '1. Fabrikasi Modul Knock-Down (Depok)',
    cumulativeProgress: 6.5,
    progressDelta: 1.7,
    civilProgress: 6.8,
    iotProgress: 6.2,
    status: 'COMPLETED',
    weather: {
      morning: 'Cerah',
      afternoon: 'Hujan'
    },
    manpowerCount: 4,
    manpowerRole: '4 Tenaga Kerja Fabrikasi & Perakitan',
    executiveSummary: 'Proses pemotongan bahan kerangka lengkungan atap bentang 8 meter (Paket Sipil 5.2). Setting mal geometri bentang 8 meter dan pengelasan titik (tack weld) sambungan siku rangka modular sebelum proses rol bending.',
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
      'Bending kerangka atap arch roof menggunakan mesin rol pipa.',
      'Penyetelan radius lengkung kubah atap.',
      'Pemeriksaan dimensi kelengkungan bentang 8m.'
    ]
  },

  // =========================================================================
  // 4. LAPORAN HARIAN 04 NOVEMBER 2026
  // =========================================================================
  {
    id: 'report-2026-11-04',
    cycleNumber: 4,
    dateStr: '2026-11-04',
    displayDate: '04 November 2026',
    shortDate: '04 Nov',
    isCompleted: true,
    isLatestActive: false,
    location: 'Workshop Fabrikasi Depok',
    pipelineStage: 'workshop_depok',
    pipelineStageLabel: '1. Fabrikasi Modul Knock-Down (Depok)',
    cumulativeProgress: 8.2,
    progressDelta: 1.7,
    civilProgress: 8.5,
    iotProgress: 8.0,
    status: 'COMPLETED',
    weather: {
      morning: 'Cerah',
      afternoon: 'Cerah'
    },
    manpowerCount: 4,
    manpowerRole: '4 Tenaga Kerja Bending & Fabrikasi',
    executiveSummary: 'Pekerjaan bending kerangka atap arch roof (Paket Sipil 5.2). Pipa hollow galvanis diproses roll bending bertahap untuk membentuk lengkungan busur kubah atap bentang 8 meter dengan radius seragam dan bebas deformasi penampang.',
    photos: [
      {
        id: 'photo-04-01',
        url: '/progress/2026-11-04/Picture3.png',
        caption: 'Proses Roll Bending Busur Atap Galvanis',
        narrative: 'Pengerjaan pembengkokan bertahap profil pipa galvanis menggunakan mesin rol presisi guna mencapai radius lengkung kubah atap sesuai gambar kerja.'
      },
      {
        id: 'photo-04-02',
        url: '/progress/2026-11-04/Picture4.png',
        caption: 'Pengecekan Radius & Geometri Lengkung Busur',
        narrative: 'Pengukuran jarak busur dan anak panah busur lengkung atap terhadap mal bentangan 8 meter untuk menjamin keseragaman seluruh modul atap.'
      },
      {
        id: 'photo-04-03',
        url: '/progress/2026-11-04/Picture5.png',
        caption: 'Penataan Hasil Bending Modul Kuda-Kuda Atap',
        narrative: 'Hasil rol busur kubah atap ditempatkan pada dudukan khusus agar kelurusan tetap terjaga sebelum perakitan pengaku diagonal.'
      }
    ],
    nextSteps: [
      'Penyelesaian bending seluruh modul busur atap.',
      'Penyiapan 18 angkur behel tiang utama.',
      'Konsolidasi tandon dan utilitas nutrisi.'
    ]
  },

  // =========================================================================
  // 5. LAPORAN HARIAN 05 NOVEMBER 2026
  // =========================================================================
  {
    id: 'report-2026-11-05',
    cycleNumber: 5,
    dateStr: '2026-11-05',
    displayDate: '05 November 2026',
    shortDate: '05 Nov',
    isCompleted: true,
    isLatestActive: false,
    location: 'Workshop Fabrikasi Depok (Pra-Pengiriman Palembang)',
    pipelineStage: 'workshop_depok',
    pipelineStageLabel: '1. Fabrikasi Modul Knock-Down (Depok)',
    cumulativeProgress: 10.0,
    progressDelta: 1.8,
    civilProgress: 10.0,
    iotProgress: 10.0,
    status: 'COMPLETED',
    weather: {
      morning: 'Cerah',
      afternoon: 'Hujan'
    },
    manpowerCount: 4,
    manpowerRole: '4 Tenaga Kerja Fabrikasi & Konsolidasi',
    executiveSummary: 'Penyelesaian tahap bending kerangka atap (Paket Sipil 5.2), perakitan modul lengkungan atap arch roof sistem knock-down, penyiapan 18 angkur behel tiang utama (Paket Sipil 3.5), perakitan awal rangka meja NFT beralas wiremesh galvanis (Paket IoT 15.1), serta konsolidasi tandon air nutrisi (Paket IoT 12.4).',
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
      'Adjusting ukuran atap dan kalibrasi toleransi geometri bentang 8m.',
      'Pemotongan bahan profil baja ringan untuk meja NFT.',
      'Penyambungan kerangka meja modul tanam NFT.'
    ]
  },

  // =========================================================================
  // 6. LAPORAN HARIAN 06 NOVEMBER 2026
  // =========================================================================
  {
    id: 'report-2026-11-06',
    cycleNumber: 6,
    dateStr: '2026-11-06',
    displayDate: '06 November 2026',
    shortDate: '06 Nov',
    isCompleted: true,
    isLatestActive: false,
    location: 'Workshop Fabrikasi Depok',
    pipelineStage: 'workshop_depok',
    pipelineStageLabel: '1. Fabrikasi Modul Knock-Down (Depok)',
    cumulativeProgress: 12.0,
    progressDelta: 2.0,
    civilProgress: 12.4,
    iotProgress: 11.6,
    status: 'COMPLETED',
    weather: {
      morning: 'Cerah',
      afternoon: 'Cerah'
    },
    manpowerCount: 4,
    manpowerRole: '4 Tenaga Kerja Perakitan & Kalibrasi Atap',
    executiveSummary: 'Pekerjaan adjusting ukuran dan kalibrasi geometri kubah atap lengkung (Paket Sipil 5.2). Melakukan simulasi pemasangan antar-modul busur lengkung knock-down untuk memastikan toleransi sambungan baut/konektor pas dan simetris sebelum dipaketkan.',
    photos: [
      {
        id: 'photo-06-01',
        url: '/progress/2026-11-06/Picture6.png',
        caption: 'Adjusting Ukuran & Geometri Busur Lengkung Atap',
        narrative: 'Pengecekan kelengkungan dan penyesuaian dimensi antar-modul busur atap bentang 8 meter agar presisi saat ereksi di site PLN UPDL Indralaya.'
      },
      {
        id: 'photo-06-02',
        url: '/progress/2026-11-06/Picture7.png',
        caption: 'Perakitan Modul Uji Coba Knock-Down Atap',
        narrative: 'Uji rakit sambungan busur atap di area terbuka workshop Depok untuk memastikan kemudahan dan kecepatan perakitan di lokasi Palembang.'
      }
    ],
    nextSteps: [
      'Pemotongan bahan kerangka baja ringan meja NFT hidroponik.',
      'Penyambungan struktur meja tanam NFT.',
      'Persiapan pengepakan komponen rangka.'
    ]
  },

  // =========================================================================
  // 7. LAPORAN HARIAN 07 NOVEMBER 2026
  // =========================================================================
  {
    id: 'report-2026-11-07',
    cycleNumber: 7,
    dateStr: '2026-11-07',
    displayDate: '07 November 2026',
    shortDate: '07 Nov',
    isCompleted: true,
    isLatestActive: false,
    location: 'Workshop Fabrikasi Depok',
    pipelineStage: 'workshop_depok',
    pipelineStageLabel: '1. Fabrikasi Modul Knock-Down (Depok)',
    cumulativeProgress: 14.0,
    progressDelta: 2.0,
    civilProgress: 14.2,
    iotProgress: 13.8,
    status: 'COMPLETED',
    weather: {
      morning: 'Cerah',
      afternoon: 'Cerah'
    },
    manpowerCount: 4,
    manpowerRole: '4 Tenaga Kerja Fabrikasi Baja Ringan NFT',
    executiveSummary: 'Pekerjaan pemotongan kerangka baja ringan meja tanam NFT hidroponik (Paket IoT 15.1). Pemotongan presisi kanal C dan reng baja ringan galvanis sebagai rangka utama dudukan talang gully hidroponik seluas 100 m².',
    photos: [
      {
        id: 'photo-07-01',
        url: '/progress/2026-11-07/Picture8.jpg',
        caption: 'Pemotongan Profil Kanal C Baja Ringan Meja NFT',
        narrative: 'Pemotongan material baja ringan tahan karat sesuai ukuran modul meja hidroponik dengan kemiringan elevasi 1-2% untuk sirkulasi nutrisi NFT.'
      },
      {
        id: 'photo-07-02',
        url: '/progress/2026-11-07/Picture9.jpg',
        caption: 'Pengelompokan Komponen Rangka Baja Ringan Meja Tanam',
        narrative: 'Komponen kaki dan palang meja tanam disusun dan diikat berdasarkan modul unit agar mobilisasi dan perakitan di tapak berjalan efisien.'
      }
    ],
    nextSteps: [
      'Penyambungan & perakitan modul rangka meja NFT.',
      'Konsolidasi tandon dan utilitas nutrisi.',
      'Pengecekan checklist material pra-loading.'
    ]
  },

  // =========================================================================
  // 8. LAPORAN HARIAN 08 NOVEMBER 2026
  // =========================================================================
  {
    id: 'report-2026-11-08',
    cycleNumber: 8,
    dateStr: '2026-11-08',
    displayDate: '08 November 2026',
    shortDate: '08 Nov',
    isCompleted: true,
    isLatestActive: false,
    location: 'Workshop Fabrikasi Depok (Persiapan Loading Ekspedisi)',
    pipelineStage: 'workshop_depok',
    pipelineStageLabel: '1. Fabrikasi Modul Knock-Down (Depok)',
    cumulativeProgress: 16.2,
    progressDelta: 2.2,
    civilProgress: 16.0,
    iotProgress: 16.4,
    status: 'COMPLETED',
    weather: {
      morning: 'Cerah',
      afternoon: 'Cerah'
    },
    manpowerCount: 4,
    manpowerRole: '4 Tenaga Kerja Assembling NFT & QC Modul',
    executiveSummary: 'Penyambungan dan perakitan modul meja tanam hidroponik NFT (Paket IoT 15.1) telah berjalan optimal. Struktur knock-down greenhouse dan meja tanam siap memasuki tahap final QC dan packing. Dilengkapi persiapan operasional pengadaan material lokal di Palembang serta koordinasi jadwal kedatangan tim ke Indralaya.',
    photos: [
      {
        id: 'photo-08-01',
        url: '/progress/2026-11-08/Picture10.png',
        caption: 'Penyambungan Struktur Rangka Meja Hidroponik NFT',
        narrative: 'Perakitan sambungan modul meja tanam NFT menggunakan baut roofing dan bracing pengaku agar kokoh menopang talang gully dan debit air nutrisi.'
      }
    ],
    nextSteps: [
      'Jadwal muat (loading) material rangka & modul meja ke truk ekspedisi di Depok: 10 November 2026.',
      'Armada ekspedisi bergerak menuju lokasi PLN ULP Indralaya (estimasi sampai: Kamis, 12 November 2026).',
      'Briefing pekerja tiap pagi jam 09.00 WIB dimulai hari Jumat, 13 November 2026.',
      'Pembelian material approval lokal di Palembang: 1. Pasir, 2. Semen, 3. Hebel, 4. Kayu bowplank.',
      'Menunggu persetujuan working permit (SMK3) dan persetujuan dropping material saat armada tiba di site Indralaya.'
    ],
    localPurchases: [
      'Pasir Pasang & Cor',
      'Semen PC Portland',
      'Bata Ringan (Hebel t:10cm)',
      'Kayu Bowplank & Kaso'
    ],
    logisticsNotes: 'Material greenhouse dijadwalkan muat 10 Nov dan diperkirakan tiba di lokasi PLN ULP Indralaya Palembang pada hari Kamis, 12 November 2026.',
    approvalNotes: 'Menunggu approval working permit (Izin Kerja SMK3 PLN) dan approval dropping material saat armada tiba di tapak kerja Indralaya Palembang.'
  },

  // =========================================================================
  // 9. LAPORAN HARIAN 10 NOVEMBER 2026
  // =========================================================================
  {
    id: 'report-2026-11-10',
    cycleNumber: 9,
    dateStr: '2026-11-10',
    displayDate: '10 November 2026',
    shortDate: '10 Nov',
    isCompleted: true,
    isLatestActive: false,
    location: 'Workshop Depok (Muat Ekspedisi) & On-Transit ke Palembang',
    pipelineStage: 'qc_packing',
    pipelineStageLabel: '2. QC, Packing & Muat Ekspedisi',
    cumulativeProgress: 32.0,
    progressDelta: 15.8,
    civilProgress: 35.0,
    iotProgress: 29.0,
    status: 'ON-SCHEDULE',
    weather: {
      morning: 'Cerah Berawan',
      afternoon: 'Cerah'
    },
    manpowerCount: 4,
    manpowerRole: '4 Tenaga Kerja Loading & QC Ekspedisi',
    executiveSummary: 'Alhamdulillah hari ini (Selasa, 10 November 2026) seluruh material greenhouse, modul lengkungan atap, rangka meja hidroponik, perpipaan, dan peralatan kerja telah selesai dimuat (loading) ke armada ekspedisi di Depok. Material dalam perjalanan menuju lokasi PLN ULP Indralaya / UPDL Palembang dengan estimasi sampai pada hari Kamis, 12 November 2026. Briefing pekerja tiap pagi jam 09.00 WIB akan dimulai pada hari Jumat, 13 November 2026.',
    photos: [
      {
        id: 'photo-10-01',
        url: '/progress/2026-11-10/1.jpeg',
        caption: 'Pemuatan (Loading) Material Greenhouse ke Armada Truk Ekspedisi',
        narrative: 'Material struktur modul hollow galvanis, rangka atap lengkung, rangka meja NFT, tandon air, serta perpipaan telah selesai dimuat dan ditata rapi ke dalam armada truk ekspedisi di Depok untuk perjalanan menuju Palembang/Indralaya.'
      }
    ],
    nextSteps: [
      'Armada ekspedisi melakukan perjalanan rute Depok – Pelabuhan Merak – Bakauheni – Palembang/Indralaya (Estimasi tiba: Kamis, 12 November 2026).',
      'Persiapan kedatangan tim dan pembongkaran (unloading) dropping material di site PLN ULP Indralaya.',
      'Pelaksanaan briefing pekerja setiap pagi jam 09.00 WIB mulai hari Jumat, 13 November 2026.',
      'Menunggu approval working permit (Izin Kerja SMK3 PLN) dan approval dropping material saat tiba di lokasi.',
      'Pengadaan material lokal di Palembang: 1. Pasir, 2. Semen, 3. Hebel, 4. Kayu bowplank.'
    ],
    localPurchases: [
      'Pasir Pasang & Cor',
      'Semen PC Portland',
      'Bata Ringan (Hebel t:10cm)',
      'Kayu Bowplank & Kaso'
    ],
    logisticsNotes: 'Material greenhouse telah selesai dimuat hari ini di Depok dan sedang dalam perjalanan ekspedisi dengan estimasi sampai di lokasi PLN ULP Indralaya pada hari Kamis, 12 November 2026.',
    approvalNotes: 'Menunggu approval working permit (Izin Kerja SMK3 PLN) dan persetujuan dropping material saat armada tiba di tapak kerja Indralaya.',
    briefingSchedule: 'Briefing pekerja rutin dilaksanakan setiap pagi pukul 09.00 WIB mulai hari Jumat, 13 November 2026 di lokasi kerja.'
  },

  // =========================================================================
  // 10. LAPORAN DUA HARIAN 12 NOVEMBER 2026 (WORKING PERMIT & ARMADA TIBA)
  // =========================================================================
  {
    id: 'report-2026-11-12',
    cycleNumber: 10,
    dateStr: '2026-11-12',
    displayDate: '12 November 2026',
    shortDate: '12 Nov',
    isCompleted: true,
    isLatestActive: false,
    location: 'Site PLN ULP Indralaya / UPDL Palembang',
    pipelineStage: 'ekspedisi',
    pipelineStageLabel: '3. Kedatangan & Dropping Material Indralaya',
    cumulativeProgress: 36.0,
    progressDelta: 4.0,
    civilProgress: 38.0,
    iotProgress: 34.0,
    status: 'ON-SCHEDULE',
    weather: {
      morning: 'Cerah Berawan',
      afternoon: 'Cerah'
    },
    manpowerCount: 4,
    manpowerRole: '4 Personel (Tim Mobilisasi & Pengurusan Administrasi K3)',
    executiveSummary: 'Approval Working Permit SMK3 PLN No. 0018/70201000/XI/2026 resmi disetujui secara digital oleh MUP UPDL Palembang (Ibu Sri Wigati) pada pukul 09.03 WIB dengan izin operasional kerja lembur 08.00–22.00 WIB (12–25 Nov 2026) untuk mengejar target capaian pertama pada 20 November 2026. Armada truk ekspedisi MODENZ pembawa modul greenhouse dan hidroponik telah tiba di kompleks PLN UPDL Palembang / Udiklat Indralaya dengan aman dan siap untuk pembongkaran (unloading).',
    photos: [],
    nextSteps: [
      'Briefing K3 harian pukul 09.00 WIB mulai Jumat, 13 November 2026 di lokasi pengerjaan.',
      'Pembongkaran (unloading/discharge) modul struktur dan instalasi hidroponik dari armada truk MODENZ.',
      'Koordinasi penentuan titik tapak fixed bersama Manager UPDL Palembang (Ibu Sri Wigati).',
      'Pengukuran tapak 8x25m dan perakitan awal modul meja NFT di area staging.'
    ],
    localPurchases: [
      'Pasir Pasang & Cor',
      'Semen PC Portland',
      'Bata Ringan (Hebel)',
      'Kayu Bowplank & Kaso'
    ],
    logisticsNotes: 'Armada ekspedisi boks MODENZ telah tiba dengan selamat di kompleks PLN UPDL Palembang / Indralaya. Seluruh material dalam kondisi aman dan siap unloading.',
    approvalNotes: 'Working Permit No. 0018/70201000/XI/2026 SPK No. 0021.PJ/HKM.02.01/F29120000/2026 RESMI APPROVED (12 Nov 2026 09.03 WIB oleh MUP Ibu Sri Wigati). Disetujui jam kerja lembur 08.00–22.00 WIB menuju target 20 Nov 2026.',
    briefingSchedule: 'Briefing pekerja rutin dilaksanakan setiap pagi pukul 09.00 WIB mulai hari Jumat, 13 November 2026 di lokasi kerja Indralaya.'
  },

  // =========================================================================
  // 11. LAPORAN DUA HARIAN 13 NOVEMBER 2026
  // =========================================================================
  {
    id: 'report-2026-11-13',
    cycleNumber: 11,
    dateStr: '2026-11-13',
    displayDate: '13 November 2026',
    shortDate: '13 Nov',
    isCompleted: true,
    isLatestActive: false,
    location: 'Site PLN UPDL Palembang / Udiklat Indralaya',
    pipelineStage: 'erection_palembang',
    pipelineStageLabel: '4. Erection Struktur & Pekerjaan Lapangan',
    cumulativeProgress: 44.0,
    progressDelta: 8.0,
    civilProgress: 45.0,
    iotProgress: 43.0,
    status: 'ON-SCHEDULE',
    weather: {
      morning: 'Cerah Berawan',
      afternoon: 'Mendung'
    },
    manpowerCount: 6,
    manpowerRole: '6 Personel Lapangan (Tim Erection, Pengukuran & Perakitan Hidroponik)',
    executiveSummary: 'Pelaksanaan briefing K3 perdana pada pukul 09.00 WIB di lokasi PLN Udiklat Indralaya, dilanjutkan pembongkaran (discharge/unloading) material dari armada truk MODENZ ke area staging. Dilakukan koordinasi dan penentuan titik fixed pembangunan greenhouse bersama Manager UPDL Palembang (Ibu Sri Wigati), pengukuran tapak 8x25m sesuai gambar kerja awal, penataan material lokal (semen zak dan kayu bowplank berterpal), serta percepatan perakitan modul rangka meja tanam hidroponik NFT berjajar di tapak kerja memanfaatkan izin kerja lembur 08.00–22.00 WIB.',
    photos: [
      {
        id: 'photo-13-01',
        url: '/progress/2026-11-13/1-truk-sampai-indralaya.jpeg',
        caption: 'Armada Truk Ekspedisi Tiba di Kompleks PLN Udiklat Indralaya',
        narrative: 'Armada truk boks biru MODENZ yang mengangkut seluruh modul pabrikasi knock-down rangka greenhouse dan perlengkapan hidroponik telah tiba dengan selamat dan terparkir di area PLN UPDL Palembang / Indralaya.'
      },
      {
        id: 'photo-13-02',
        url: '/progress/2026-11-13/2-staging-material-dilokasi.jpeg',
        caption: 'Area Staging Material & Logistik Lapangan Pasca-Bongkar Muat',
        narrative: 'Penataan material di area terbuka tapak kerja: tumpukan semen zak terlindung terpal biru, modul rangka portal baja galvanis berdiri, tumpukan pipa hollow, talang gully NFT, palet, dan kayu kaso/bowplank dengan pengawasan personel ber-APD K3 lengkap.'
      },
      {
        id: 'photo-13-03',
        url: '/progress/2026-11-13/3-barisan-modul-meja-nft.jpeg',
        caption: 'Barisan Modul Rangka Meja Tanam NFT Hasil Sub-Assembly di Site',
        narrative: 'Modul-modul rangka meja hidroponik NFT yang telah selesai dirakit awal ditata berjajar rapi di atas lahan tapak kerja berlatar gedung PLN, membuktikan akselerasi fabrikasi lapangan berjalan cepat.'
      },
      {
        id: 'photo-13-04',
        url: '/progress/2026-11-13/4-perakitan-meja-hidroponik.jpeg',
        caption: 'Perakitan & Fastening Modul Meja Hidroponik di Tapak Kerja',
        narrative: 'Dua orang personel teknis ber-APD lengkap (helm kuning, rompi reflektif, sarung tangan, safety boots) aktif melakukan perakitan, penyetelan, dan pengencangan baut rangka meja NFT di area staging Indralaya.'
      },
      {
        id: 'photo-13-05',
        url: '/progress/2026-11-13/5-koordinasi-mup-pln-bu-sri.jpeg',
        caption: 'Penentuan Titik Koordinat Greenhouse Bersama MUP PLN (Ibu Sri Wigati)',
        narrative: 'Koordinasi langsung di lapangan antara Manager PLN UPDL Palembang (Ibu Sri Wigati) dengan perwakilan kontraktor dan 4 pekerja ber-APD lengkap untuk mengunci titik tapak fixed dan batas elevasi greenhouse 8x25m.'
      },
      {
        id: 'photo-13-06',
        url: '/progress/2026-11-13/6-pengukuran-tapak-greenhouse.jpeg',
        caption: 'Pengukuran Tapak & Setting Out Bangunan Sesuai Desain Awal',
        narrative: 'Pekerja lapangan melakukan pengukuran presisi, penarikan garis benang ukur, dan setting out luasan tapak greenhouse 8x25m sesuai rancangan shop drawing awal di bawah kondisi cuaca sore yang sejuk berawan.'
      }
    ],
    nextSteps: [
      'Pekerjaan galian tanah pondasi setempat dan pemasangan bowplank batas tapak tiang (Paket Sipil 1.2 & 1.3).',
      'Perakitan lanjutan dan pengelasan modul rangka atap arch roof di tapak Palembang.',
      'Pengecoran angkur kolom 18 titik tiang penyangga utama.',
      'Pelaksanaan kerja lembur terarah pukul 17.00–22.00 WIB untuk akselerasi struktur target 20 Nov 2026.'
    ],
    localPurchases: [
      'Pasir Pasang & Cor',
      'Semen PC Portland (Tersedia di Site)',
      'Bata Ringan Hebel',
      'Kayu Bowplank & Kaso (Tersedia di Site)'
    ],
    logisticsNotes: 'Material telah seluruhnya diturunkan (unloaded) di site Indralaya. Material lokal semen dan kayu kaso bowplank telah siap di area staging.',
    approvalNotes: 'Working Permit Inspekta No. 0018/70201000/XI/2026 AKTIF. Penentuan titik koordinat greenhouse telah disetujui bersama Ibu Sri Wigati (Manager UPDL Palembang). Jadwal lembur 08.00–22.00 WIB berjalan kondusif.',
    briefingSchedule: 'Briefing K3 harian pukul 09.00 WIB berjalan rutin setiap pagi. Pelaksanaan jam kerja intensif hingga pukul 22.00 WIB dimonitor oleh pengawas lapangan.'
  },

  // =========================================================================
  // 12. LAPORAN HARIAN 14 NOVEMBER 2026 (GALIAN PONDASI & PENGELASAN RANGKA)
  // =========================================================================
  {
    id: 'report-2026-11-14',
    cycleNumber: 12,
    dateStr: '2026-11-14',
    displayDate: '14 November 2026',
    shortDate: '14 Nov',
    isCompleted: true,
    isLatestActive: false,
    location: 'Site PLN UPDL Palembang / Udiklat Indralaya',
    pipelineStage: 'erection_palembang',
    pipelineStageLabel: '4. Erection Struktur & Sipil Palembang',
    cumulativeProgress: 47.3,
    progressDelta: 3.3,
    civilProgress: 49.5,
    iotProgress: 45.0,
    status: 'ON-SCHEDULE',
    weather: {
      morning: 'Hujan (08.00–12.00)',
      afternoon: 'Cerah (13.30–17.00)'
    },
    manpowerCount: 4,
    manpowerRole: '4 Pekerja Lapangan (Pengelasan Rangka & Penggalian Pondasi)',
    executiveSummary: 'Kendati cuaca pagi (08.00–12.00 WIB) turun hujan, pekerjaan lapangan tetap dioptimalkan begitu cuaca cerah pada siang hingga sore hari (13.30–17.00 WIB). Tim melaksanakan dua pekerjaan utama secara paralel: penggalian lubang pondasi setempat tepat pada jalur benang ukur bouwplank (Paket Sipil 3.1) serta pengelasan modul rangka memanjang/kremona dan busur kuda-kuda atap arch roof bentang 8 meter (Paket Sipil 5.1 & 5.2).',
    photos: [
      {
        id: 'photo-14-01',
        url: '/progress/2026-11-14/1-galian-pondasi-jalur-bouwplank.jpeg',
        caption: 'Penggalian Lubang Pondasi pada Jalur Benang Ukur Bouwplank',
        narrative: 'Lubang galian pondasi titik kolom utama telah digali mengikuti tarikan benang ukur dan patok kayu kaso (Paket Sipil 3.1) di samping tenda kerja berterpal biru.'
      },
      {
        id: 'photo-14-02',
        url: '/progress/2026-11-14/2-detail-lubang-pondasi-sudut-tapak.jpeg',
        caption: 'Detail Galian Titik Sudut Tapak & Penjajaran Rangka Meja NFT',
        narrative: 'Titik galian pondasi berada presisi di persilangan siku benang ukur tapak 8x25m; tampak barisan modul rangka meja hidroponik NFT (Paket 15.1) di latar kanan.'
      },
      {
        id: 'photo-14-03',
        url: '/progress/2026-11-14/3-pengelasan-rangka-kremona-galvanis.jpeg',
        caption: 'Hasil Pengelasan Modul Rangka Kremona Pipa Hollow Galvanis',
        narrative: 'Perakitan dan pengelasan rangka pengaku memanjang/kremona (Paket Sipil 5.1 & 5.2) dari pipa hollow galvanis untuk menopang kekakuan bentang struktur greenhouse.'
      },
      {
        id: 'photo-14-04',
        url: '/progress/2026-11-14/4-pengelasan-busur-atap-arch-roof.jpeg',
        caption: 'Pengelasan Kuda-Kuda Lengkung Atap (Arch Roof) di Atas Mal Kerja',
        narrative: 'Pengelasan modul lengkungan atap arch roof bentang 8m menggunakan mesin las inverter portabel di atas mal tripleks guna menjamin keseragaman radius kubah.'
      }
    ],
    nextSteps: [
      'Lanjutan pengelasan modul kuda-kuda atap arch roof dan kremona (Paket Sipil 5.2).',
      'Pemasangan angkur besi kolom dan pengecoran pondasi tiang utama (Paket Sipil 3.3–3.5).',
      'Briefing rutin K3 pukul 09.00 WIB dan pemanfaatan waktu lembur sesuai Working Permit #0018.'
    ],
    approvalNotes: 'Working Permit No. 0018/70201000/XI/2026 AKTIF. Penyesuaian jadwal kerja akibat hujan pagi terkompensasi optimal pada sesi siang–sore hari.',
    briefingSchedule: 'Briefing K3 dilaksanakan sebelum pekerjaan lapang dan monitoring kondisi hujan sebelum pengelasan.'
  },

  // =========================================================================
  // 13. LAPORAN HARIAN 15 NOVEMBER 2026 (PENGECORAN PONDASI & PENGELASAN RANGKA)
  // =========================================================================
  {
    id: 'report-2026-11-15',
    cycleNumber: 13,
    dateStr: '2026-11-15',
    displayDate: '15 November 2026',
    shortDate: '15 Nov',
    isCompleted: true,
    isLatestActive: false,
    location: 'Site PLN UPDL Palembang / Udiklat Indralaya',
    pipelineStage: 'erection_palembang',
    pipelineStageLabel: '4. Erection Struktur & Sipil Palembang',
    cumulativeProgress: 51.5,
    progressDelta: 4.2,
    civilProgress: 55.0,
    iotProgress: 48.0,
    status: 'ON-SCHEDULE',
    weather: {
      morning: 'Cerah (08.00–12.00)',
      afternoon: 'Hujan (13.30–17.00)'
    },
    manpowerCount: 4,
    manpowerRole: '4 Pekerja Lapangan (Pengelasan Rangka & Pengecoran Pondasi)',
    executiveSummary: 'Memanfaatkan cuaca pagi yang cerah (08.00–12.00 WIB), 4 pekerja melakukan pengecoran pondasi sekaligus penanaman stek kolom hollow galvanis lurus benang ukur (Paket Sipil 3.3, 3.4, 3.5) serta memperbanyak stok las kuda-kuda atap arch roof hingga 8–10 unit siap pasang (Paket Sipil 5.2). Saat hujan turun pada sore hari (13.30–17.00 WIB), seluruh titik cor beton baru langsung diproteksi dengan terpal/karton agar mutu beton tetap terjaga.',
    photos: [
      {
        id: 'photo-15-01',
        url: '/progress/2026-11-15/1-pengecoran-pondasi-dan-stek-tiang.jpeg',
        caption: 'Pengecoran Pondasi & Penanaman Stek Tiang Kolom Galvanis',
        narrative: 'Titik pondasi kolom yang telah dicor beton dan ditanami stek hollow galvanis presisi di jalur benang ukur (Paket Sipil 3.4 & 3.5), ditutup lembaran pelindung dari rintik hujan sore.'
      },
      {
        id: 'photo-15-02',
        url: '/progress/2026-11-15/2-proteksi-cor-pondasi-saat-hujan.jpeg',
        caption: 'Proteksi Titik Cor Pondasi Baru Terhadap Hujan Sore',
        narrative: 'Deretan pondasi cor di depan gedung PLN UPDL Palembang dilindungi plastik/terpal hitam agar ikatan semen beton tetap kuat meskipun hujan turun pada pukul 13.30–17.00 WIB.'
      },
      {
        id: 'photo-15-03',
        url: '/progress/2026-11-15/3-kelurusan-jalur-angkur-pondasi.jpeg',
        caption: 'Verifikasi Kelurusan Barisan Stek Tiang pada Benang As Bangunan',
        narrative: 'Pemeriksaan kelurusan (alignment) deretan stek tiang yang sudah tertanam cor pada garis benang as bangunan untuk memastikan kesikuan struktur sebelum erection.'
      },
      {
        id: 'photo-15-04',
        url: '/progress/2026-11-15/4-tumpukan-kuda-kuda-atap-selesai-las.jpeg',
        caption: 'Tumpukan Modul Kuda-Kuda Lengkung Atap Selesai Pengelasan',
        narrative: 'Progress signifikan fabrikasi baja di site (Paket Sipil 5.2): tumpukan busur rangka atap arch roof terus bertambah dan tersusun rapi siap tahap pemasangan.'
      }
    ],
    nextSteps: [
      'Pengecoran pondasi lanjutan titik tiang tersisa lengkap dengan angkur silang (Paket Sipil 3.5).',
      'Pengelasan rangka lanjutan hingga seluruh modul struktur atap siap dinaikkan.',
      'Persiapan material talang gully NFT dan galian bak penampungan tandon nutrisi.'
    ],
    approvalNotes: 'Working Permit No. 0018/70201000/XI/2026 AKTIF. Proteksi mutu pengecoran selama hujan sore dilaksanakan sesuai standar pengawasan lapangan.',
    briefingSchedule: 'Briefing K3 rutin setiap pagi pukul 09.00 WIB dilaksanakan di area kerja Indralaya.'
  },

  // =========================================================================
  // 14. LAPORAN HARIAN 16 NOVEMBER 2026
  // =========================================================================
  {
    id: 'report-2026-11-16',
    cycleNumber: 14,
    dateStr: '2026-11-16',
    displayDate: '16 November 2026',
    shortDate: '16 Nov',
    isCompleted: true,
    isLatestActive: false,
    location: 'Site PLN UPDL Palembang / Udiklat Indralaya',
    pipelineStage: 'erection_palembang',
    pipelineStageLabel: '4. Erection Struktur & Sipil Palembang',
    cumulativeProgress: 58.0,
    progressDelta: 6.5,
    civilProgress: 61.5,
    iotProgress: 54.5,
    status: 'ON-SCHEDULE',
    weather: {
      morning: 'Cerah (08.00–12.00)',
      afternoon: 'Hujan (13.30–17.00)'
    },
    manpowerCount: 4,
    manpowerRole: '4 Pekerja Lapangan (Pengelasan Rangka, Pengecoran Pondasi, Pabrikasi Talang & Galian NFT)',
    executiveSummary: 'Hari ini (Senin, 16 November 2026) diawali apel & briefing K3 pagi pukul 08.18 WIB dengan APD lengkap. Selama cuaca pagi cerah, 4 pekerja mengeksekusi paralel pengelasan kuda-kuda atap arch roof hingga menumpuk siap erection (Paket Sipil 5.2) serta pemasangan angkur besi silang dan pengecoran pondasi kolom ber-waterpass presisi (Paket Sipil 3.4, 3.5 & 5.3). Menjelang sore, tim juga mengakselerasi Lingkup Hidroponik (Paket 15.1–15.3) melalui pabrikasi pelubangan talang gully NFT dengan hole-saw serta penggalian bak penampungan tandon NFT lengkap dengan susunan bata ringan Hebel.',
    photos: [
      {
        id: 'photo-16-01',
        url: '/progress/2026-11-16/1-briefing-pagi-k3-tim-lapangan.jpeg',
        caption: 'Apel & Briefing K3 Pagi Tim Lapangan (08.18 WIB)',
        narrative: 'Pengawas lapangan berhelm putih memimpin briefing keselamatan kerja (SMK3 - Paket 1.3) bersama pekerja lapangan ber-APD lengkap (helm kuning, rompi reflektif, sepatu boots) sebelum pekerjaan dimulai.'
      },
      {
        id: 'photo-16-02',
        url: '/progress/2026-11-16/2-detail-angkur-besi-silang-pondasi.jpeg',
        caption: 'Detail Angkur Besi Silang Kolom di Dalam Lubang Pondasi',
        narrative: 'Pemasangan tulangan angkur silang besi behel yang dilas pada pangkal kaki kolom hollow tepat di persilangan benang as bangunan (Paket Sipil 3.5 & 5.3) untuk daya cengkeram beton maksimal.'
      },
      {
        id: 'photo-16-03',
        url: '/progress/2026-11-16/3-leveling-waterpass-dan-cor-pondasi.jpeg',
        caption: 'Leveling Waterpass & Pengecoran Pondasi Kolom Utama',
        narrative: 'Dua pekerja menyetel ketegakan vertikal stek kolom menggunakan alat ukur waterpass sementara personel lain mengangkut adukan beton cor pada pagi hari yang cerah (Paket Sipil 3.4).'
      },
      {
        id: 'photo-16-04',
        url: '/progress/2026-11-16/4-pengelasan-rangka-dan-setting-kolom.jpeg',
        caption: 'Kerja Paralel Pengelasan Kuda-Kuda Atap & Pengecoran Kolom',
        narrative: 'Sinergi tim di tapak kerja: satu pekerja mengelas penyempurnaan tumpukan rangka kuda-kuda lengkung atap di kiri (Paket 5.2), sementara dua pekerja menuntaskan cor kolom di kanan.'
      },
      {
        id: 'photo-16-05',
        url: '/progress/2026-11-16/5-pabrikasi-pelubangan-talang-nft.jpeg',
        caption: 'Pabrikasi Pelubangan Titik Tanam Talang Gully NFT (Hole-Saw)',
        narrative: 'Pekerja melubangi penutup talang gully PVC putih hidroponik NFT satu per satu menggunakan bor hole-saw di atas rangka meja tanam di site (Paket IoT & Hidroponik 15.1).'
      },
      {
        id: 'photo-16-06',
        url: '/progress/2026-11-16/6-galian-bak-tandon-nft-dan-hebel.jpeg',
        caption: 'Galian Bak Penampungan Tandon NFT & Penataan Bata Hebel',
        narrative: 'Penggalian lubang bak tandon nutrisi hidroponik NFT disertai pemasangan awal bata ringan Hebel di tepian galian serta stok palet Hebel di lokasi (Paket IoT & Hidroponik 15.2 & 15.3).'
      },
      {
        id: 'photo-16-07',
        url: '/progress/2026-11-16/7-hasil-akhir-cor-pedestal-pondasi.jpeg',
        caption: 'Hasil Akhir Cor Pedestal Pondasi Kolom yang Sudah Dirapikan',
        narrative: 'Dua titik pondasi kolom utama telah selesai dicor dengan permukaan pedestal halus dan stek tiang berdiri tegak lurus mengikuti garis benang as bangunan (Paket Sipil 3.4 & 5.1).'
      },
      {
        id: 'photo-16-08',
        url: '/progress/2026-11-16/8-tumpukan-busur-atap-siap-erection.jpeg',
        caption: 'Tumpukan Penuh Kuda-Kuda Lengkung Atap Siap Dinaikkan',
        narrative: 'Tumpukan modul kuda-kuda atap arch roof telah terkumpul lengkap hasil pengelasan di lapangan dan siap memasuki tahap penaikan rangka (Paket Sipil 5.2).'
      },
      {
        id: 'photo-16-09',
        url: '/progress/2026-11-16/9-penataan-mal-rangka-dan-jalur-kolom.jpeg',
        caption: 'Area Kerja Mal Perakitan Rangka & Barisan Pondasi Kolom',
        narrative: 'Penataan papan mal kerja di samping deretan pondasi kolom yang sudah dicor rapi serta stok rangka atap yang telah selesai difabrikasi di sisi kiri.'
      },
      {
        id: 'photo-16-10',
        url: '/progress/2026-11-16/10-koordinasi-pagi-pengawas-dan-pekerja.jpeg',
        caption: 'Koordinasi Target Harian Pengawas K3 & Tim Pelaksana',
        narrative: 'Pengarahan target pengelasan rangka, pengecoran pondasi, dan langkah keselamatan kerja di depan tenda logistik sebelum aktivitas pagi dimulai.'
      }
    ],
    nextSteps: [
      'Pengelasan rangka lanjutan dan naikkan rangka (erection 18 tiang utama & kuda-kuda arch roof).',
      'Pabrikasi talang lanjutan (pelubangan gully NFT & persiapan talang air drainase atap).',
      'Penyelesaian galian NFT serta pemasangan dinding bata ringan dudukan bak tandon nutrisi.'
    ],
    localPurchases: [
      'Pasir Pasang & Cor (Tersedia di Site)',
      'Semen PC Portland (Tersedia di Site)',
      'Bata Ringan Hebel (Tersedia di Site)',
      'Kayu Bowplank & Kaso (Tersedia di Site)'
    ],
    logisticsNotes: 'Stok material lokal (semen, pasir, bata ringan Hebel, kayu bowplank) dan seluruh modul rangka kuda-kuda atap serta pipa gully telah berada lengkap di area staging site Indralaya.',
    approvalNotes: 'Working Permit Inspekta No. 0018/70201000/XI/2026 AKTIF s/d 25 Nov 2026 dengan izin lembur 08.00–22.00 WIB menuju target capaian pertama 20 Nov 2026.',
    briefingSchedule: 'Apel & Briefing K3 pagi hari rutin dilaksanakan pengawas dan seluruh pekerja ber-APD lengkap sebelum pekerjaan dimulai.'
  },

  // =========================================================================
  // 15. LAPORAN HARIAN 17 NOVEMBER 2026
  // =========================================================================
  {
    id: 'report-2026-11-17',
    cycleNumber: 15,
    dateStr: '2026-11-17',
    displayDate: '17 November 2026',
    shortDate: '17 Nov',
    isCompleted: true,
    isLatestActive: false,
    location: 'Site PLN UPDL Palembang / Udiklat Indralaya',
    pipelineStage: 'erection_palembang',
    pipelineStageLabel: '4. Erection Struktur & Sipil Palembang',
    cumulativeProgress: 68.0,
    progressDelta: 10.0,
    civilProgress: 72.0,
    iotProgress: 64.0,
    status: 'ON-SCHEDULE',
    weather: {
      morning: 'Cerah (08.00–12.00)',
      afternoon: 'Cerah (13.30–17.00)'
    },
    manpowerCount: 4,
    manpowerRole: '4 Pekerja Lapangan (Pengelasan Rangka & Menaikkan Rangka Utama 8x25m)',
    executiveSummary: 'Hari ini (Selasa, 17 November 2026) dalam kondisi cuaca cerah sepanjang hari (pagi hingga sore), 4 pekerja lapangan mengeksekusi milestone struktural utama: pengelasan penguatan sambungan rangka (Paket Sipil 5.2 & 5.3) dilanjutkan penaikan penuh (erection) seluruh 9 portal—terdiri atas 18 tiang utama dan busur kuda-kuda lengkung atap arch roof bentang 8×25m—di atas pondasi angkur hingga berdiri utuh pada pukul 17.43 WIB (Lingkup Sipil mencapai target Kurva-S 72,0%). Bersamaan dengan itu, dikerjakan pula pemotongan plat/talang galvanis, penyelesaian pelubangan stok talang gully NFT (Paket 15.1), serta pendalaman galian dan dinding bata ringan bak tandon NFT (Paket 15.2 & 15.3).',
    photos: [
      {
        id: 'photo-17-01',
        url: '/progress/2026-11-17/1-apel-pagi-k3-persiapan-naik-rangka.jpeg',
        caption: 'Apel Pagi K3 & Persiapan Penaikan Rangka Utama (09.15 WIB)',
        narrative: 'Pengawas lapangan berhelm putih memimpin briefing K3 pagi (Paket Sipil 1.3) bersama 4 pekerja ber-APD lengkap di samping barisan stek pondasi kolom sebelum pengelasan dan pengangkatan portal.'
      },
      {
        id: 'photo-17-02',
        url: '/progress/2026-11-17/2-pengelasan-sambungan-kuda-kuda-atap.jpeg',
        caption: 'Pengelasan Penguatan Sambungan Modul Kuda-Kuda Atap',
        narrative: 'Pekerja ber-APD lengkap (helm, rompi reflektif, sarung tangan las, sepatu safety boot) melakukan pengelasan penguatan titik sambung sudut modul kuda-kuda lengkung sebelum diangkat.'
      },
      {
        id: 'photo-17-03',
        url: '/progress/2026-11-17/3-pemotongan-plat-dan-talang-galvanis.jpeg',
        caption: 'Pemotongan Lembaran Plat & Talang Seng Galvanis',
        narrative: 'Pemotongan lembaran plat/talang galvanis menggunakan gerinda tangan di tapak kerja sebagai persiapan sambungan dan kelengkapan komponen talang struktur atap (Paket Sipil 5.3 & 5.4).'
      },
      {
        id: 'photo-17-04',
        url: '/progress/2026-11-17/4-fabrikasi-plat-dan-kesiapan-stek-kolom.jpeg',
        caption: 'Fabrikasi Plat Galvanis & Kesiapan Barisan Stek Pondasi Kolom',
        narrative: 'Aktivitas kerja paralel di tapak Indralaya: pemotongan plat galvanis di area depan, barisan stek kolom pondasi yang telah mengeras di tengah, dan modul meja tanam NFT di latar belakang.'
      },
      {
        id: 'photo-17-05',
        url: '/progress/2026-11-17/5-pendalaman-galian-bak-tandon-nft.jpeg',
        caption: 'Pendalaman Galian Lubang Bak Penampungan Tandon NFT',
        narrative: 'Pekerja berada di dalam lubang galian untuk memperdalam ruang bak penampungan nutrisi sirkulasi hidroponik NFT sesuai elevasi kedalaman desain (Paket IoT & Hidroponik 15.2).'
      },
      {
        id: 'photo-17-06',
        url: '/progress/2026-11-17/6-perapihan-dinding-galian-tandon-dan-hebel.jpeg',
        caption: 'Perapihan Dinding Galian Tandon & Pasangan Bata Hebel',
        narrative: 'Perapihan kesikuan dinding galian bak tandon NFT mengikuti garis benang ukur dan pembatas pasangan bata ringan Hebel pada sisi luar galian (Paket 15.2 & 15.3).'
      },
      {
        id: 'photo-17-07',
        url: '/progress/2026-11-17/7-penataan-gully-nft-dan-pipa-distribusi.jpeg',
        caption: 'Penataan Talang Gully NFT & Pipa Distribusi Nutrisi di Atas Meja',
        narrative: 'Tumpukan talang gully NFT dan pipa PVC jalur distribusi nutrisi (Paket 12.4 & 15.1) ditata di atas rangka meja tanam galvanis siap tahap perakitan hidroponik.'
      },
      {
        id: 'photo-17-08',
        url: '/progress/2026-11-17/8-persiapan-penaikan-portal-kuda-kuda-pertama.jpeg',
        caption: 'Persiapan Pengangkatan Portal Kuda-Kuda Pertama (10.37 WIB)',
        narrative: 'Keempat pekerja memposisikan modul portal tiang utama dan lengkungan atap pertama sejajar dengan titik stek pondasi kolom sebelum didirikan bersama-sama.'
      },
      {
        id: 'photo-17-09',
        url: '/progress/2026-11-17/9-berdirinya-portal-kuda-kuda-pertama.jpeg',
        caption: 'Portal Pertama Tiang Utama & Kuda-Kuda Arch Roof Berdiri Tegak',
        narrative: 'Portal pertama struktur tiang dan kuda-kuda atap lengkung berventilasi atas (Paket Sipil 5.1 & 5.2) berhasil berdiri kokoh di atas pondasi pada pukul 10.40 WIB.'
      },
      {
        id: 'photo-17-10',
        url: '/progress/2026-11-17/10-pengangkatan-portal-kuda-kuda-kedua.jpeg',
        caption: 'Penaikan Portal Kuda-Kuda Kedua Secara Terkoordinasi (10.54 WIB)',
        narrative: 'Tim lapangan beranggotakan 4 pekerja mengangkat dan menyetel portal kedua di belakang portal pertama di tengah kondisi cuaca siang hari yang cerah terik.'
      },
      {
        id: 'photo-17-11',
        url: '/progress/2026-11-17/11-dua-portal-kuda-kuda-berdiri-terhubung.jpeg',
        caption: 'Dua Portal Pertama Terpasang & Terkunci Balok Penghubung (11.02 WIB)',
        narrative: 'Portal kuda-kuda ke-1 dan ke-2 telah berdiri tegak dan mulai diikat dengan batang penghubung memanjang (gording/kremona atas) agar kaku sebelum melanjutkan portal berikutnya.'
      },
      {
        id: 'photo-17-12',
        url: '/progress/2026-11-17/12-seluruh-portal-rangka-greenhouse-berdiri-penuh.jpeg',
        caption: 'Seluruh 9 Portal Rangka Greenhouse 8x25m Berdiri Penuh (17.43 WIB)',
        narrative: 'Pencapaian utama hari ini: seluruh 9 bentang portal (18 tiang utama & kuda-kuda atap arch roof bentang 8×25m) telah selesai dinaikkan dan berdiri utuh membentuk siluet penuh bangunan greenhouse.'
      },
      {
        id: 'photo-17-13',
        url: '/progress/2026-11-17/13-struktur-kolom-kremona-dan-ikatan-angin.jpeg',
        caption: 'Detail Barisan Kolom, Balok Kremona Atas & Ikatan Angin',
        narrative: 'Tampak memanjang struktur kolom hollow galvanis 40×60 beserta rangka pengaku kremona atas dan ikatan angin diagonal yang mengunci stabilitas kerangka bangunan (Paket Sipil 5.1 & 5.2).'
      },
      {
        id: 'photo-17-14',
        url: '/progress/2026-11-17/14-stok-talang-gully-nft-selesai-dilubangi.jpeg',
        caption: 'Stok Talang Gully NFT Selesai Dilubangi Presisi Siap Pasang',
        narrative: 'Jajaran talang gully NFT PVC putih telah selesai dilubangi secara seragam menggunakan hole-saw dan tersusun rapi di atas meja tanam menanti pemasangan jalur irigasi nutrisi (Paket 15.1).'
      },
      {
        id: 'photo-17-15',
        url: '/progress/2026-11-17/15-progres-akhir-galian-bak-tandon-nft-sore.jpeg',
        caption: 'Progres Akhir Galian Bak Tandon NFT & Dinding Hebel Sore Hari',
        narrative: 'Pekerja merampungkan penggalian dan perapihan dasar bak tandon nutrisi NFT yang telah dibatasi keliling bata ringan Hebel di bawah tenda kerja (Paket 15.2 & 15.3).'
      }
    ],
    nextSteps: [
      'Pengelasan sambungan atas rangka atap arch roof, gording memanjang, dan penguatan titik kuda-kuda (Paket Sipil 5.1 & 5.2).',
      'Instalasi sistem hidroponik meja NFT, penataan talang gully & pemipaan manifold distribusi nutrisi (Paket 12.4 & 15.1).',
      'Penyelesaian galian NFT serta pemasangan dinding bata ringan dan rabatan dasar bak penampungan tandon nutrisi (Paket 15.2–15.4).'
    ],
    localPurchases: [
      'Pasir Pasang & Cor (Tersedia di Site)',
      'Semen PC Portland (Tersedia di Site)',
      'Bata Ringan Hebel (Tersedia di Site)',
      'Kayu Bowplank & Kaso (Tersedia di Site)'
    ],
    logisticsNotes: 'Seluruh 9 portal rangka utama sudah berdiri di tapak kerja; stok talang gully NFT, pipa PVC, dan bata ringan Hebel siap untuk tahap instalasi lanjutan besok.',
    approvalNotes: 'Working Permit Inspekta No. 0018/70201000/XI/2026 AKTIF. Erection kerangka bangunan 8×25m terlaksana aman (zero accident) sesuai rencana target Kurva-S Sipil 72,0%.',
    briefingSchedule: 'Apel & Briefing K3 pagi hari rutin dilaksanakan dengan APD lengkap sebelum pekerjaan penaikan rangka dan pengelasan dimulai.'
  },

  // =========================================================================
  // 16. LAPORAN HARIAN 18 NOVEMBER 2026
  // =========================================================================
  {
    id: 'report-2026-11-18',
    cycleNumber: 16,
    dateStr: '2026-11-18',
    displayDate: '18 November 2026',
    shortDate: '18 Nov',
    isCompleted: true,
    isLatestActive: false,
    location: 'Site PLN UPDL Palembang / Udiklat Indralaya & Sistem Web IoT',
    pipelineStage: 'erection_palembang',
    pipelineStageLabel: '4. Pengelasan Atas, Galian NFT & Kesiapan Web IoT',
    cumulativeProgress: 75.0,
    progressDelta: 7.0,
    civilProgress: 75.5,
    iotProgress: 74.5,
    status: 'ON-SCHEDULE',
    weather: {
      morning: 'Cerah (08.00–12.00)',
      afternoon: 'Hujan (13.30–17.00)'
    },
    manpowerCount: 4,
    manpowerRole: '4 Pekerja Lapangan (Pengelasan Rangka Atas, Galian NFT & Integrasi Web IoT)',
    executiveSummary: 'Hari ini (Rabu, 18 November 2026) tim mengawali aktivitas dengan apel K3 pukul 08.30 WIB di bawah rangka 9 portal yang telah berdiri. Selama cuaca pagi cerah, pekerja melanjutkan pengelasan sambungan puncak tiang, kuda-kuda atap & gording menggunakan scaffolding (Paket Sipil 5.1, 5.2 & 1.5), fabrikasi talang air seng/galvanis (Paket 5.4), serta pendalaman penuh lubang galian bak tandon NFT + pembatas bata Hebel dan finishing lubang talang gully NFT (Paket 15.1–15.3). Dari sisi IoT, platform monitoring & kontrol berbasis web resmi https://smartfarmpln.com/login (unit greenhouse palembang) telah aktif Online membaca sensor pH Air, Temperatur Air, PPM, Cahaya, serta Kelembapan dan kini berstatus siap pasang di lokasi (Paket 13.1–13.5).',
    photos: [
      {
        id: 'photo-18-01',
        url: '/progress/2026-11-18/1-apel-pagi-k3-di-bawah-rangka-portal.jpeg',
        caption: 'Apel & Briefing K3 Pagi di Bawah Rangka Portal Greenhouse (08.30 WIB)',
        narrative: 'Pengawas lapangan berhelm putih memimpin pengarahan K3 pagi (Paket Sipil 1.3) bersama pekerja ber-APD lengkap di bawah struktur 9 portal rangka utama greenhouse.'
      },
      {
        id: 'photo-18-02',
        url: '/progress/2026-11-18/2-pengelasan-sambungan-atas-kuda-kuda-scaffolding.jpeg',
        caption: 'Pengelasan Sambungan Atas Kuda-Kuda & Gording di Atas Scaffolding',
        narrative: 'Pekerja berdiri di atas scaffolding kerja (Paket 1.5) untuk mengelas penuh sambungan puncak kolom, rangka atap arch roof, dan balok gording memanjang saat cuaca pagi cerah (Paket 5.1 & 5.2).'
      },
      {
        id: 'photo-18-03',
        url: '/progress/2026-11-18/3-fabrikasi-dan-penyetelan-talang-air-galvanis.jpeg',
        caption: 'Fabrikasi & Penyetelan Lembaran Talang Air Seng Galvanis',
        narrative: 'Perakitan serta pengeboran lembaran talang air seng/plat galvanis bersama rangka hollow penopang di lapangan menggunakan mesin bor tangan (Paket Sipil 5.4).'
      },
      {
        id: 'photo-18-04',
        url: '/progress/2026-11-18/4-pendalaman-dan-perapihan-galian-tandon-nft.jpeg',
        caption: 'Pendalaman & Perapihan Lubang Galian Bak Tandon NFT',
        narrative: 'Pekerja merapikan dinding lubang galian bak penampungan nutrisi NFT sedalam ~1 meter yang telah dikelilingi pasangan pembatas bata ringan Hebel (Paket IoT & Hidroponik 15.2 & 15.3).'
      },
      {
        id: 'photo-18-05',
        url: '/progress/2026-11-18/5-finishing-lubang-tanam-talang-gully-nft.jpeg',
        caption: 'Finishing & Penghalusan Lubang Tanam Talang Gully NFT',
        narrative: 'Penghalusan tepian lubang tanam (deburring) pada deretan talang gully PVC putih NFT di atas meja tanam galvanis berlatar gedung PLN UPDL Palembang agar siap instalasi netpot (Paket 15.1).'
      },
      {
        id: 'photo-18-06',
        url: '/progress/2026-11-18/6-dashboard-live-monitoring-web-iot-smartfarmpln.jpeg',
        caption: 'Dashboard Live Web IoT smartfarmpln.com (Unit Greenhouse Palembang)',
        narrative: 'Sistem Smart IoT BRAIN berbasis web (Paket 13.1–13.5) telah Online pada unit greenhouse palembang: membaca parameter pH Air, Temperatur Air (25.00°C), PPM, Cahaya, Kelembapan (69.07%), tren grafik, dan kendali aktuator—siap pasang di site.'
      },
      {
        id: 'photo-18-07',
        url: '/progress/2026-11-18/7-portal-login-web-iot-smartfarmpln-pln-brain-ipb.jpeg',
        caption: 'Antarmuka Login Platform Web IoT https://smartfarmpln.com/login',
        narrative: 'Halaman portal resmi PLN SmartFarming (In partnership with PLN & BRAIN IPB University) yang menyediakan Real-time Sensor Monitoring & Automated Control Systems siap diakses oleh pengelola.'
      },
      {
        id: 'photo-18-08',
        url: '/progress/2026-11-18/8-struktur-atas-kuda-kuda-dan-gording-petang.jpeg',
        caption: 'Tampak Struktur Atas Kuda-Kuda & Gording Menjelang Petang (18.03 WIB)',
        narrative: 'Detail rangka atap lengkung arch roof, ventilasi puncak jack roof, dan batang penghubung memanjang yang telah terikat kuat pada sore/petang hari pasca-hujan.'
      },
      {
        id: 'photo-18-09',
        url: '/progress/2026-11-18/9-kondisi-lubang-galian-tandon-nft-dan-hebel-sore.jpeg',
        caption: 'Kondisi Lubang Galian Bak Tandon NFT & Bingkai Hebel Sore Hari',
        narrative: 'Tampak atas galian bak tandon NFT yang telah mencapai kedalaman optimal dengan bingkai bata ringan Hebel tersusun rapi di sekeliling bibir galian (Paket 15.2 & 15.3).'
      },
      {
        id: 'photo-18-10',
        url: '/progress/2026-11-18/10-jalur-benang-ukur-dan-material-hebel-terproteksi.jpeg',
        caption: 'Penataan Jalur Benang Ukur & Material Hebel Terproteksi Terpal',
        narrative: 'Pengamanan stok material bata ringan dan penarikan benang ukur kelurusan batas pasangan dinding keliling di tepi tapak bangunan (Paket Sipil 3.6).'
      },
      {
        id: 'photo-18-11',
        url: '/progress/2026-11-18/11-pemeriksaan-jalur-galian-samping-lembur-petang.jpeg',
        caption: 'Pemeriksaan Jalur Benang As Bangunan Sesi Petang (18.04 WIB)',
        narrative: 'Pengecekan garis benang as pondasi dan kelurusan sisi samping greenhouse pada sesi petang guna memastikan kesiapan lanjutan pekerjaan sipil esok hari.'
      }
    ],
    nextSteps: [
      'Pengelasan sambungan atas lanjutan pada rangka kuda-kuda arch roof, gording, dan kremona (Paket Sipil 5.1 & 5.2).',
      'Instalasi sistem hidroponik meja NFT, perpipaan distribusi nutrisi, dan persiapan pemasangan modul perangkat Web IoT smartfarmpln.com (Paket 12, 13 & 15).',
      'Pabrikasi dan pemasangan rangka pintu masuk utama, pintu ruang sterilisasi, dan pintu akses belakang kolam (Paket Sipil 7.1–7.3).'
    ],
    localPurchases: [
      'Pasir Pasang & Cor (Tersedia di Site)',
      'Semen PC Portland (Tersedia di Site)',
      'Bata Ringan Hebel (Tersedia di Site)',
      'Kayu Bowplank & Kaso (Tersedia di Site)'
    ],
    logisticsNotes: 'Seluruh material struktur atas, talang galvanis, talang gully NFT, serta perangkat panel/sensor Web IoT (smartfarmpln.com) telah siap untuk tahap instalasi dan integrasi di site.',
    approvalNotes: 'Working Permit Inspekta No. 0018/70201000/XI/2026 AKTIF. Aplikasi Web IoT https://smartfarmpln.com/login sudah aktif Online (tinggal pasang fisik sensor & panel di lokasi).',
    briefingSchedule: 'Apel & Briefing K3 pagi dilaksanakan rutin pukul 08.30 WIB sebelum pekerjaan pengelasan ketinggian di atas scaffolding dimulai.'
  },

  // =========================================================================
  // 17. LAPORAN HARIAN 19 NOVEMBER 2026 (PERATAAN TANAH, PONDASI PINTU & SEMAI)
  // =========================================================================
  {
    id: 'report-2026-11-19',
    cycleNumber: 17,
    dateStr: '2026-11-19',
    displayDate: '19 November 2026',
    shortDate: '19 Nov',
    isCompleted: true,
    isLatestActive: false,
    location: 'Site PLN UPDL Palembang / Udiklat Indralaya',
    pipelineStage: 'erection_palembang',
    pipelineStageLabel: '4. Perataan Tapak, Pondasi Pintu & Pembibitan',
    cumulativeProgress: 77.5,
    progressDelta: 2.5,
    civilProgress: 78.0,
    iotProgress: 77.0,
    status: 'ON-SCHEDULE',
    weather: {
      morning: 'Cerah Berawan',
      afternoon: 'Cerah'
    },
    manpowerCount: 4,
    manpowerRole: '4 Pekerja Lapangan (Perataan Tanah, Galian Pondasi Pintu & Penyemaian Pakcoy)',
    executiveSummary: 'Kegiatan Kamis, 19 November 2026 dibuka dengan briefing dan yel-yel K3 pagi pukul 08.32 WIB di bawah struktur rangka portal 8×25m (Paket 1.3). Tim menuntaskan perataan tanah area lantai dalam greenhouse menggunakan cangkul dan angkong dari tanah galian tandon NFT (Paket Sipil 2.1 & 3.2), menggali lubang pondasi akses pintu di jalur benang ukur (Paket 3.1 & 7.1–7.3), serta melaksanakan penyemaian awal ratusan kubus media tanam rockwool benih Pakcoy Nauli F1 pada baki talang PVC untuk kesiapan budidaya hidroponik (Paket 15.1).',
    photos: [
      {
        id: 'photo-19-01',
        url: '/progress/2026-11-19/1-briefing-pagi-k3-di-bawah-rangka.jpeg',
        caption: 'Briefing & Yel-Yel Keselamatan K3 Pagi di Bawah Rangka (08.32 WIB)',
        narrative: 'Pengawas lapangan (helm putih) memimpin pengarahan teknis dan keselamatan kerja pagi bersama 4 pekerja lapangan ber-APD lengkap sebelum pekerjaan tanah dan pembibitan dimulai.'
      },
      {
        id: 'photo-19-02',
        url: '/progress/2026-11-19/2-perataan-tanah-cangkul-dan-angkong.jpeg',
        caption: 'Perataan Tanah Lantai Greenhouse dengan Cangkul & Angkong (08.58 WIB)',
        narrative: 'Pekerja meratakan permukaan tanah bagian dalam area greenhouse menggunakan cangkul dan gerobak dorong angkong berlatar meja tanam NFT dan gedung PLN UPDL Palembang (Paket Sipil 2.1).'
      },
      {
        id: 'photo-19-03',
        url: '/progress/2026-11-19/3-panorama-perataan-tanah-tapak-8x25m.jpeg',
        caption: 'Panorama Perataan Lahan Tapak 8×25m & Kesiapan Scaffolding',
        narrative: 'Tampak keseluruhan bentang 9 portal struktur atap arch roof dan scaffolding kerja dengan aktivitas perataan tanah lantai oleh tim di area tengah tapak bangunan.'
      },
      {
        id: 'photo-19-04',
        url: '/progress/2026-11-19/4-galian-tandon-nft-dan-pemindahan-tanah.jpeg',
        caption: 'Penyelesaian Lubang Galian Tandon NFT & Pemindahan Tanah Urug',
        narrative: 'Lubang galian bak tandon NFT telah tegak rapi mencapai kedalaman desain (Paket 15.2); gundukan tanah galiannya dimanfaatkan dan dipindahkan memakai angkong untuk menimbun area lantai yang rendah.'
      },
      {
        id: 'photo-19-05',
        url: '/progress/2026-11-19/5-galian-lubang-pondasi-pintu-jalur-benang.jpeg',
        caption: 'Galian Lubang Pondasi Pintu Presisi di Jalur Benang Ukur (09.47 WIB)',
        narrative: 'Dua titik galian lubang pondasi kusen pintu berbentuk persegi telah selesai digali tepat mengikuti tarikan garis benang as bangunan beserta penyiapan bata Hebel (Paket Sipil 3.1 & 7.1–7.3).'
      },
      {
        id: 'photo-19-06',
        url: '/progress/2026-11-19/6-penyemaian-bibit-pakcoy-nauli-f1-rockwool.jpeg',
        caption: 'Penyemaian Bibit Pakcoy Nauli F1 pada Media Rockwool Hidroponik',
        narrative: 'Penyemaian benih unggul Pakcoy Nauli F1 pada ratusan kubus media rockwool lembab di atas baki talang PVC guna memastikan bibit siap tanam bersamaan dengan selesainya sistem NFT (Paket 15.1).'
      }
    ],
    nextSteps: [
      'Pengecoran rabatan dasar dinding dan pemasangan bata ringan Hebel ruang kontrol & dinding keliling.',
      'Pemasangan besi dudukan/penjepit plastik UV pada rangka atap arch roof.',
      'Pemeliharaan rutin semaian Pakcoy Nauli F1 serta penyelesaian instalasi hidroponik & Web IoT.'
    ],
    localPurchases: [
      'Pasir Pasang & Cor (Tersedia di Site)',
      'Semen PC Portland (Tersedia di Site)',
      'Bata Ringan Hebel (Tersedia di Site)',
      'Kayu Bowplank & Kaso (Tersedia di Site)'
    ],
    logisticsNotes: 'Bibit Pakcoy Nauli F1 telah mulai disemai pada media rockwool; stok bata Hebel, semen, dan besi dudukan atap siap di site.',
    approvalNotes: 'Working Permit Inspekta No. 0018/70201000/XI/2026 AKTIF. Seluruh aktivitas K3 pagi berjalan tertib.',
    briefingSchedule: 'Briefing K3 rutin pukul 08.30 WIB dilaksanakan bersama pengawas dan tim lapangan sebelum pekerjaan dimulai.'
  },

  // =========================================================================
  // 18. LAPORAN HARIAN 20 NOVEMBER 2026
  // =========================================================================
  {
    id: 'report-2026-11-20',
    cycleNumber: 18,
    dateStr: '2026-11-20',
    displayDate: '20 November 2026',
    shortDate: '20 Nov',
    isCompleted: true,
    isLatestActive: false,
    location: 'Site PLN UPDL Palembang / Udiklat Indralaya',
    pipelineStage: 'erection_palembang',
    pipelineStageLabel: '4. Pasang Besi Dudukan Plastik UV & Dinding Hebel Ruang Kontrol',
    cumulativeProgress: 78.2,
    progressDelta: 0.7,
    civilProgress: 79.2,
    iotProgress: 77.2,
    status: 'ON-SCHEDULE',
    weather: {
      morning: 'Cerah Berawan',
      afternoon: 'Cerah'
    },
    manpowerCount: 5,
    manpowerRole: '5 Pekerja Lapangan (Teknisi Atap Full Body Harness & Tukang Pasangan Hebel)',
    executiveSummary: 'Hari ini (Jumat, 20 November 2026) diawali apel pagi K3 pukul 08.18 WIB bersama 5 pekerja lapangan ber-APD lengkap termasuk teknisi ketinggian ber-full body harness (Paket 1.3). Pekerjaan difokuskan pada dua capaian utama: pemasangan besi hollow dudukan plastik UV pada struktur atas arch roof (Paket Sipil 5.2 & persiapan Paket 6.1) serta pengecoran rabatan lantai dasar dan pemasangan dinding bata ringan Hebel setinggi 3 lapis (~60 cm) pada ruang kontrol dan sisi samping bangunan (Paket Sipil 3.4, 3.6 & Paket 8). Lingkup Sipil naik secara bertahap menjadi 79,2% dan kesiapan ruang kontrol mendukung instalasi panel Web IoT smartfarmpln.com.',
    photos: [
      {
        id: 'photo-20-01',
        url: '/progress/2026-11-20/1-apel-pagi-k3-5-pekerja-full-apd-harness.jpeg',
        caption: 'Apel Pagi K3 5 Pekerja Lengkap dengan Full Body Harness (08.18 WIB)',
        narrative: 'Pengawas K3 memimpin apel pagi pukul 08.18 WIB bersama 5 pekerja ber-APD lengkap, termasuk 1 teknisi ketinggian yang mengenakan full body harness sebelum naik ke rangka atap (Paket 1.3).'
      },
      {
        id: 'photo-20-02',
        url: '/progress/2026-11-20/2-pasang-besi-dudukan-plastik-uv-body-harness.jpeg',
        caption: 'Pemasangan Besi Dudukan Plastik UV di Atap dengan Body Harness (08.56 WIB)',
        narrative: 'Teknisi berkait full body harness berada aman di rangka kuda-kuda atas melakukan penyetelan & pemasangan profil besi dudukan/pengikat plastik UV atap arch roof di cuaca pagi cerah (Paket 5.2 & 6.1).'
      },
      {
        id: 'photo-20-03',
        url: '/progress/2026-11-20/3-cor-rabatan-dasar-dinding-hebel.jpeg',
        caption: 'Pengecoran Rabatan Beton Dasar Landasan Dinding Keliling (08.45 WIB)',
        narrative: 'Pekerja menuangkan adukan beton cor pada bekisting memanjang di jalur benang ukur sebagai landasan rabatan pondasi dinding bata ringan Hebel agar rata dan kokoh (Paket Sipil 3.4).'
      },
      {
        id: 'photo-20-04',
        url: '/progress/2026-11-20/4-pemasangan-bata-hebel-mortar-perekat.jpeg',
        caption: 'Pemasangan Blok Bata Ringan Hebel dengan Mortar Perekat (08.24 WIB)',
        narrative: 'Tukang pasangan batu meletakkan blok bata ringan Hebel di atas pondasi rabatan beton memakai adukan mortar perekat tipis presisi mengikuti tarikan benang kelurusan (Paket Sipil 3.6).'
      },
      {
        id: 'photo-20-05',
        url: '/progress/2026-11-20/5-dinding-hebel-ruang-kontrol-3-lapis.jpeg',
        caption: 'Pasangan Dinding Hebel Ruang Kontrol Setinggi 3 Lapis / 60 cm (09.34 WIB)',
        narrative: 'Sudut dinding bata ringan Hebel area ruang kontrol telah naik 3 lapis penuh (~60 cm) lengkap dengan pemotongan rapi menggunakan gergaji hebel dan penarikan benang siku (Paket 3.6 & 8).'
      },
      {
        id: 'photo-20-06',
        url: '/progress/2026-11-20/6-panorama-hebel-ruang-kontrol-dan-besi-atap.jpeg',
        caption: 'Panorama Dinding Hebel 3 Lapis Ruang Kontrol & Rangka Atap (10.36 WIB)',
        narrative: 'Tampak depan memperlihatkan dinding bata Hebel ruang kontrol 3 lapis yang tersusun rapi menyatu dengan dinding samping kiri serta jajaran besi dudukan plastik UV pada struktur atap atas.'
      },
      {
        id: 'photo-20-07',
        url: '/progress/2026-11-20/7-sudut-hebel-ruang-kontrol-dan-perataan-tanah.jpeg',
        caption: 'Detail Sudut Dinding Hebel Ruang Kontrol & Perataan Area Dalam (10.34 WIB)',
        narrative: 'Kerapian sudut sambungan dinding Hebel 3 lapis area ruang kontrol di sisi dalam berdekatan dengan scaffolding dan zona perataan tanah menuju area meja NFT.'
      },
      {
        id: 'photo-20-08',
        url: '/progress/2026-11-20/8-barisan-awal-dinding-hebel-sisi-samping.jpeg',
        caption: 'Pemasangan Barisan Awal Dinding Hebel Sepanjang Kolom Samping (08.21 WIB)',
        narrative: 'Deretan pasangan bata ringan Hebel memanjang lurus di antara tiang-tiang kolom utama sisi kiri greenhouse berdekatan dengan tenda logistik material.'
      },
      {
        id: 'photo-20-09',
        url: '/progress/2026-11-20/9-tampak-memanjang-rangka-dan-scaffolding-pagi.jpeg',
        caption: 'Perspektif Memanjang Seluruh Struktur Portal & Scaffolding Kerja (08.21 WIB)',
        narrative: 'Pandangan keseluruhan interior 9 portal rangka galvanis, scaffolding akses kerja atap, serta pergerakan 5 personel yang mengeksekusi pekerjaan sipil dan persiapan atap secara bersamaan.'
      }
    ],
    nextSteps: [
      'Lanjutan pemasangan besi dudukan plastik UV & penutupan atap Plastik UV 200 micron serta dinding Insect Net Mesh 50 (Paket Sipil 6.1 & 6.2).',
      'Penyelesaian sisa dinding bata Hebel keliling t:60cm, plester/acian, serta pemasangan pintu utama & ruang sterilisasi (Paket Sipil 3.6–3.8 & 7).',
      'Instalasi sistem hidroponik NFT, tandon nutrisi, serta pemasangan fisik panel & sensor Web IoT smartfarmpln.com di ruang kontrol (Paket 12, 13 & 15).'
    ],
    localPurchases: [
      'Pasir Pasang & Cor (Tersedia di Site)',
      'Semen PC Portland & Mortar Perekat Hebel (Tersedia di Site)',
      'Bata Ringan Hebel (Terpasang pada Ruang Kontrol & Keliling)',
      'Kayu Bowplank & Bekisting Rabatan'
    ],
    logisticsNotes: 'Pemasangan bata Hebel ruang kontrol & sisi samping berjalan cepat; besi dudukan plastik UV terpasang untuk menyambut pemasangan atap plastik UV 200 micron.',
    approvalNotes: 'Working Permit Inspekta No. 0018/70201000/XI/2026 AKTIF. Pekerjaan ketinggian di atas atap dipastikan mematuhi standar safety dengan penggunaan Full Body Harness.',
    briefingSchedule: 'Apel K3 pukul 08.18 WIB dilaksanakan bersama 5 pekerja lapangan termasuk pengecekan APD ketinggian (body harness & helm).'
  },

  // =========================================================================
  // 19. LAPORAN HARIAN 21 NOVEMBER 2026 (PLESTER HEBEL, INSECT NET & TANDON NFT)
  // =========================================================================
  {
    id: 'report-2026-11-21',
    cycleNumber: 19,
    dateStr: '2026-11-21',
    displayDate: '21 November 2026',
    shortDate: '21 Nov',
    isCompleted: true,
    isLatestActive: false,
    location: 'Site PLN UPDL Palembang / Udiklat Indralaya',
    pipelineStage: 'erection_palembang',
    pipelineStageLabel: '4. Plester Hebel, Pasang Insect Net & Tandon NFT',
    cumulativeProgress: 79.0,
    progressDelta: 0.8,
    civilProgress: 80.5,
    iotProgress: 77.5,
    status: 'ON-SCHEDULE',
    weather: {
      morning: 'Cerah Berawan',
      afternoon: 'Cerah'
    },
    manpowerCount: 5,
    manpowerRole: '5 Pekerja Lapangan (Plester Dinding Hebel, Pasangan Hebel & Instalasi Insect Net)',
    executiveSummary: 'Kegiatan Sabtu, 21 November 2026 diawali apel K3 pagi bersama 5 pekerja lapangan (Paket 1.3). Tim mengeksekusi tiga pekerjaan utama: plesteran halus dinding bata ringan Hebel tampak depan & ruang kontrol (Paket Sipil 3.7), lanjutan pemasangan bata Hebel keliling (Paket 3.6), serta pemasangan profil kanal penjepit dan persiapan kawat pegas (spring clip) untuk pemasangan kain insect net Mesh 50 (Paket 6.2). Secara paralel pada Lingkup Hidroponik, tandon air nutrisi utama NFT telah terpasang masuk ke lubang bak galian (Paket 15.5) disertai penempatan tandon kedua dan pemilahan selang PE irigasi drip (Paket 14.1 & 14.3).',
    photos: [
      {
        id: 'photo-21-01',
        url: '/progress/2026-11-21/1-apel-pagi-k3-5-pekerja-21nov.jpeg',
        caption: 'Apel & Briefing K3 Pagi 5 Pekerja Lapangan (09.19 WIB)',
        narrative: 'Pengawas lapangan memimpin briefing keselamatan kerja (SMK3 - Paket 1.3) bersama 5 pekerja ber-APD lengkap di area rangka greenhouse berlatar gedung PLN UPDL Palembang.'
      },
      {
        id: 'photo-21-02',
        url: '/progress/2026-11-21/2-plester-dinding-hebel-depan-dan-samping.jpeg',
        caption: 'Plesteran Halus Dinding Hebel Depan & Lanjutan Pasangan Hebel (08.33 WIB)',
        narrative: 'Dinding bata ringan Hebel tampak depan area ruang kontrol telah mulai diplester semen halus (Paket Sipil 3.7) sementara tim di dalam melanjutkan pemasangan blok Hebel dinding sisi (Paket 3.6).'
      },
      {
        id: 'photo-21-03',
        url: '/progress/2026-11-21/3-tandon-nft-tertanam-plester-dan-hebel.jpeg',
        caption: 'Tandon Air Nutrisi Utama Tertanam di Bak NFT, Plesteran & Hebel (08.33 WIB)',
        narrative: 'Tandon air nutrisi utama berwarna oranye telah terpasang masuk ke dalam lubang bak penampungan NFT di balik dinding Hebel yang sudah diplester rapi (Paket 15.5 & Sipil 3.7).'
      },
      {
        id: 'photo-21-04',
        url: '/progress/2026-11-21/4-profil-kanal-insect-net-ruang-kontrol-dan-tandon.jpeg',
        caption: 'Profil Kanal Penjepit Insect Net Ruang Kontrol & 2 Unit Tandon Air (08.34 WIB)',
        narrative: 'Terpasang profil kanal aluminium penjepit kain insect net sepanjang bibir atas dinding ruang kontrol (Paket 6.2 & 8.1) beserta 2 unit tandon nutrisi utama NFT dan Drip yang sudah siap di lokasi.'
      },
      {
        id: 'photo-21-05',
        url: '/progress/2026-11-21/5-persiapan-kawat-klip-insect-net-dan-selang-drip.jpeg',
        caption: 'Pemilahan Kawat Spring Clip Insect Net & Selang PE Irigasi Drip (08.35 WIB)',
        narrative: 'Teknisi lapangan menyortir gulungan kawat pegas zigzag pengunci kain insect net/plastik UV (Paket 6.1 & 6.2) serta selang distribusi PE hitam sistem irigasi tetes/drip (Paket 14.1).'
      },
      {
        id: 'photo-21-06',
        url: '/progress/2026-11-21/6-fabrikasi-talang-galvanis-area-tengah.jpeg',
        caption: 'Fabrikasi & Penyetelan Talang Air Galvanis Area Tengah (08.33 WIB)',
        narrative: 'Pekerja memotong dan menyetel tekukan lembaran talang air seng galvanis (Paket Sipil 5.4) di area tengah greenhouse sembari persiapan pemasangan ke posisi rangka atap.'
      },
      {
        id: 'photo-21-07',
        url: '/progress/2026-11-21/7-koordinasi-pembagian-tugas-pagi-k3.jpeg',
        caption: 'Koordinasi Pembagian Tugas Tim Plester, Hebel & Insect Net (09.19 WIB)',
        narrative: 'Pengawas membagi zona kerja kepada seluruh 5 personel agar pengerjaan plesteran dinding, pasangan bata Hebel, fabrikasi talang, dan pemasangan insect net berjalan paralel tanpa hambatan.'
      }
    ],
    nextSteps: [
      'Lanjutan pemasangan kain insect net Mesh 50 pada rangka keliling dinding dan ruang kontrol (Paket Sipil 6.2 & 8.1).',
      'Penutupan atap Plastik UV 200 micron pada rangka lengkung arch roof (Paket Sipil 6.1).',
      'Penyelesaian plester/acian dinding hebel & pemasangan pipa distribusi hidroponik dari 2 tandon nutrisi (Paket 3.7–3.8 & 12.4).'
    ],
    localPurchases: [
      'Pasir Pasang & Semen PC untuk Plesteran (Terpasang di Site)',
      'Bata Ringan Hebel & Mortar Perekat (Terpasang)',
      'Kawat Spring Clip & Profil Kanal Insect Net',
      'Selang PE Hitam Irigasi Drip & 2 Unit Tandon'
    ],
    logisticsNotes: '2 unit tandon nutrisi kapasitas besar (NFT tertanam & Drip) beserta selang PE drip, profil kanal, dan kawat spring clip insect net telah berada di site.',
    approvalNotes: 'Working Permit Inspekta No. 0018/70201000/XI/2026 AKTIF. Seluruh pekerja menggunakan APD lengkap selama aktivitas plesteran, fabrikasi & persiapan dinding insect net.',
    briefingSchedule: 'Apel & Briefing K3 pagi rutin pukul 08.30–09.19 WIB untuk pembagian tugas 5 personel.'
  },

  // =========================================================================
  // 20. LAPORAN HARIAN 22 NOVEMBER 2026
  // =========================================================================
  {
    id: 'report-2026-11-22',
    cycleNumber: 20,
    dateStr: '2026-11-22',
    displayDate: '22 November 2026',
    shortDate: '22 Nov',
    isCompleted: true,
    isLatestActive: false,
    location: 'Site PLN UPDL Palembang / Udiklat Indralaya',
    pipelineStage: 'erection_palembang',
    pipelineStageLabel: '4. Erection Palembang (Plastik UV, Hebel & Sistem Hidroponik)',
    cumulativeProgress: 80.0,
    progressDelta: 1.0,
    civilProgress: 81.5,
    iotProgress: 78.5,
    status: 'ON-SCHEDULE',
    weather: {
      morning: 'Cerah (08.00–12.00)',
      afternoon: 'Cerah (13.30–17.00)'
    },
    manpowerCount: 10,
    manpowerRole: '10 Pekerja Lapangan (Pemasangan Plastik UV Atap & Sistem Hidroponik)',
    executiveSummary: 'Hari ini (Minggu, 22 November 2026) dalam kondisi cuaca cerah sepanjang hari (08.00–17.00 WIB), sebanyak 10 pekerja lapangan mengeksekusi pemasangan lembaran atap Plastik UV 200 micron pada satu sisi bentang kuda-kuda arch roof menggunakan penguncian kawat spring clip (Paket Sipil 6.1), disertai pemasangan talang air galvanis memanjang di bahu rangka, penyelesaian plesteran dinding samping, pemasangan dinding bata ringan Hebel sisi belakang dengan bukaan pintu kolam, serta pemasangan sistem hidroponik dan penempatan lengkap 2 unit tandon nutrisi berkapasitas besar (Paket 12, 14 & 15).',
    photos: [
      {
        id: 'photo-22-01',
        url: '/progress/2026-11-22/1-pemasangan-plastik-uv-atap-hebel-dan-2-tandon.jpeg',
        caption: 'Pemasangan Awal Plastik UV Atap 200 Micron, Lanjutan Hebel & 2 Tandon Nutrisi',
        narrative: 'Lembaran Plastik UV 200 micron mulai terbentang di puncak kuda-kuda atap sebelah kanan (Paket 6.1), teknisi mengunci dudukan profil di ketinggian, pekerja di bawah menata stok bata Hebel (Paket 3.6), dan 2 tandon nutrisi oranye terposisi di sisi greenhouse.'
      },
      {
        id: 'photo-22-02',
        url: '/progress/2026-11-22/2-bentangan-penuh-plastik-uv-atap-sisi-kiri-dan-tim-kerja.jpeg',
        caption: 'Bentangan Penuh Plastik UV Atap Sisi Kiri & Instalasi Hidroponik (15.45 WIB)',
        narrative: 'Perspektif bagian dalam greenhouse 8×25m menunjukkan seluruh bentang atap sisi kiri sudah tertutup Plastik UV 200 micron, sementara tim di lantai kerja mengeksekusi instalasi sistem hidroponik berlatar 2 tandon nutrisi.'
      },
      {
        id: 'photo-22-03',
        url: '/progress/2026-11-22/3-detail-penguncian-plastik-uv-kawat-spring-clip.jpeg',
        caption: 'Detail Tarikan & Penguncian Plastik UV Atap dengan Spring Clip (15.46 WIB)',
        narrative: 'Tampak dekat dari sisi bawah atap memperlihatkan lembaran Plastik UV 200 micron terpasang rata, kencang, dan terkunci kawat pegas spring clip sepanjang alur profil kanal atap lengkung (Paket Sipil 6.1).'
      },
      {
        id: 'photo-22-04',
        url: '/progress/2026-11-22/4-talang-galvanis-terpasang-plester-dinding-dan-teknisi-atap.jpeg',
        caption: 'Talang Galvanis Terpasang, Plester Dinding Samping & Teknisi Atap (15.46 WIB)',
        narrative: 'Talang air seng galvanis memanjang telah terpasang pada dudukan bahu rangka (Paket 5.4), teknisi atap melanjutkan penguncian sisi kanan atas, dan pekerja di bawah merampungkan plesteran dinding samping (Paket 3.7).'
      },
      {
        id: 'photo-22-05',
        url: '/progress/2026-11-22/5-dinding-hebel-belakang-dan-bukaan-pintu-akses-kolam.jpeg',
        caption: 'Dinding Hebel Belakang 3 Lapis & Bukaan Pintu Akses Kolam (15.46 WIB)',
        narrative: 'Pemasangan bata ringan Hebel setinggi 3 lapis (~60 cm) pada sisi belakang telah membentuk bukaan rangka pintu akses menuju area kolam belakang diiringi perapihan lantai tanah dalam (Paket 3.6 & 7.3).'
      }
    ],
    nextSteps: [
      'Pemasangan plastik lanjutan: penuntasan bentangan Plastik UV 200 micron pada sisi atap tersisa serta penutupan dinding Insect Net Mesh 50 (Paket Sipil 6.1 & 6.2).',
      'Pemasangan bata lanjutan: penyelesaian sisa pasangan bata ringan Hebel keliling, plester/acian, serta pemasangan pintu akses (Paket Sipil 3.6–3.8 & 7.1–7.3).',
      'Lanjutan instalasi sistem hidroponik NFT/Drip dari 2 tandon nutrisi serta integrasi fisik panel & sensor Web IoT smartfarmpln.com (Paket 12–15).'
    ],
    localPurchases: [
      'Pasir Pasang, Semen PC & Mortar (Terpakai Aktif di Site)',
      'Bata Ringan Hebel (Terpasang Sisi Samping, Kontrol & Belakang)',
      'Plastik UV 200 Micron & Kawat Spring Clip (Terpasang Sisi Kiri)',
      '2 Unit Tandon Nutrisi Kapasitas Besar (Siap Instalasi Hidroponik)'
    ],
    logisticsNotes: 'Plastik UV 200 micron telah terpasang menutup satu sisi penuh atap; talang air galvanis terpasang di bahu rangka; 2 tandon nutrisi siap dihubungkan ke jaringan pipa hidroponik.',
    approvalNotes: 'Working Permit Inspekta No. 0018/70201000/XI/2026 AKTIF. Pelaksanaan kerja lapangan oleh 10 personel dalam cuaca cerah berjalan lancar dan aman.',
    briefingSchedule: 'Koordinasi 10 personel dibagi pada dua tim paralel: tim atap/sipil (plastik UV, talang & plester/hebel) serta tim instalasi sistem hidroponik.'
  },

  // =========================================================================
  // 21. LAPORAN HARIAN 23 NOVEMBER 2026
  // =========================================================================
  {
    id: 'report-2026-11-23',
    cycleNumber: 21,
    dateStr: '2026-11-23',
    displayDate: '23 November 2026',
    shortDate: '23 Nov',
    isCompleted: true,
    isLatestActive: false,
    location: 'Site PLN UPDL Palembang / Udiklat Indralaya',
    pipelineStage: 'erection_palembang',
    pipelineStageLabel: '4. Erection Palembang (Plastik UV, Rangka Pintu & Rakitan Drip)',
    cumulativeProgress: 82.0,
    progressDelta: 2.0,
    civilProgress: 83.5,
    iotProgress: 80.5,
    status: 'ON-SCHEDULE',
    weather: {
      morning: 'Cerah (08.00–12.00)',
      afternoon: 'Cerah Berawan (13.30–17.00)'
    },
    manpowerCount: 6,
    manpowerRole: '2 Pengawas HSE & 4 Pekerja Lapangan (Atap UV, Rangka Pintu & Irigasi Drip)',
    executiveSummary: 'Hari ini (Senin, 23 November 2026) diawali dengan apel dan briefing K3 pagi lengkap APD bersama 2 pengawas HSE dan 4 pekerja lapangan (08.59 WIB). Pekerjaan fisik melanjutkan perluasan pemasangan atap Plastik UV 200 micron pada bentang sisi kanan dan atas rangka arch roof dengan penguncian profil serta talang galvanis (Paket Sipil 6.1 & 5.4), penyetelan dan pengikatan rangka hollow kusen pintu di atas dinding hebel yang telah diplester (Paket 7.1–7.3), penataan meja talang hidroponik NFT putih yang telah terakit di sisi luar, serta pra-perakitan manifold selang PE hitam lengkap grommet hijau, selang mikro putih, dan stick drip irigasi fertigasi (Paket 12–15).',
    photos: [
      {
        id: 'photo-23-01',
        url: '/progress/2026-11-23/1-pemasangan-plastik-uv-atap-kanan-scaffolding-tandon.jpeg',
        caption: 'Lanjutan Pemasangan Plastik UV Atap Sisi Kanan, Scaffolding & Tandon (08.19 WIB)',
        narrative: 'Dokumentasi pagi menunjukkan lembaran Plastik UV 200 micron mulai menutup bentang atap sisi kanan melengkapi sisi kiri, sementara scaffolding kerja berdiri di atas zona dinding hebel terplester dan tandon nutrisi oranye terposisi di sudut kanan.'
      },
      {
        id: 'photo-23-02',
        url: '/progress/2026-11-23/2-pemasangan-rangka-hollow-pintu-di-atas-dinding-hebel.jpeg',
        caption: 'Penyetelan & Penguncian Rangka Hollow Pintu di Atas Dinding Hebel (08.57 WIB)',
        narrative: 'Dua pekerja ber-APD lengkap menyetel ketegakan kusen rangka hollow galvanis menggunakan alat ukur waterpass/siku serta mengunci baut sambungan dasar tepat di atas ambang dinding hebel yang sudah diplester rapi (Paket Sipil 7.1–7.3).'
      },
      {
        id: 'photo-23-03',
        url: '/progress/2026-11-23/3-bentangan-plastik-uv-dua-sisi-talang-dan-meja-nft.jpeg',
        caption: 'Bentangan Plastik UV Dua Sisi Atap, Talang Galvanis & Rangkaian Meja NFT (08.57 WIB)',
        narrative: 'Tampak interior memperlihatkan Plastik UV 200 micron terbentang kencang di kedua sisi lengkung atap dengan talang air galvanis terpasang di bahu kiri, sementara jajaran meja hidroponik NFT putih telah selesai dirakit di sisi luar siap masuk ke area tanam.'
      },
      {
        id: 'photo-23-04',
        url: '/progress/2026-11-23/4-briefing-k3-pagi-pengawas-dan-pekerja-lengkap-apd.jpeg',
        caption: 'Briefing K3 Pagi (Tool Box Meeting) Pengawas & Tim Lapangan (08.59 WIB)',
        narrative: 'Dua pengawas lapangan memimpin briefing keselamatan kerja (SMK3) bersama empat pekerja lapangan mengenakan helm kuning, rompi visibilitas tinggi, sepatu boot karet, dan sarung tangan sebelum eksekusi kerja ketinggian dan fabrikasi.'
      },
      {
        id: 'photo-23-05',
        url: '/progress/2026-11-23/5-perakitan-manifold-selang-pe-dan-stick-drip-fertigasi.jpeg',
        caption: 'Pra-Perakitan Manifold Selang PE, Grommet & Stick Drip Irigasi (09.18 WIB)',
        narrative: 'Jalur pipa induk selang PE hitam selesai dilubangi dan dipasangi konektor grommet hijau, selang kapiler distribusi putih, serta stick emitter tetes (drip stick) sebagai bagian persiapan instalasi sistem fertigasi presisi (Paket 12–13).'
      }
    ],
    nextSteps: [
      'Penuntasan penutupan atap Plastik UV 200 micron bagian tengah atas dan pemasangan dinding Insect Net Mesh 50 keliling serta ruang kontrol (Paket Sipil 6.1, 6.2 & 8.1).',
      'Pemasangan lantai weedmat anti gulma dan hamparan rumput sintetis setelah perapihan tanah dalam rampung (Paket Sipil 4.1–4.2).',
      'Pemasukan meja NFT terakit ke dalam greenhouse serta penyambungan jalur pipa PE & stick drip ke 2 tandon nutrisi dan panel Smart IoT (Paket 12–15).'
    ],
    localPurchases: [
      'Material Plester & Bata Ringan Hebel (Terpasang & Terplester di Site)',
      'Plastik UV 200 Micron, Kawat Spring Clip & Rangka Pintu Hollow Galvanis',
      'Set Selang PE Hitam, Grommet Hijau, Selang Mikro & Stick Drip Fertigasi',
      '2 Unit Tandon Nutrisi & Rangkaian Meja Gully NFT Putih'
    ],
    logisticsNotes: 'Meja hidroponik NFT putih telah terakit di sisi luar siap dimobilisasi masuk; rakitan selang PE dan stick drip fertigasi telah dirangkai di site.',
    approvalNotes: 'Working Permit Inspekta No. 0018/70201000/XI/2026 AKTIF. Briefing K3 dan pengawasan APD dilaksanakan pukul 08.59 WIB sebelum pekerjaan berlangsung.',
    briefingSchedule: 'Tool Box Meeting (TBM) pagi pukul 08.59 WIB dipimpin 2 pengawas HSE bersama tim kerja lapangan.'
  },

  // =========================================================================
  // 22. LAPORAN HARIAN 24 NOVEMBER 2026
  // =========================================================================
  {
    id: 'report-2026-11-24',
    cycleNumber: 22,
    dateStr: '2026-11-24',
    displayDate: '24 November 2026',
    shortDate: '24 Nov',
    isCompleted: true,
    isLatestActive: false,
    location: 'Site PLN UPDL Palembang / Udiklat Indralaya',
    pipelineStage: 'iot_bast',
    pipelineStageLabel: '5. Pemasangan Plastik Greenhouse & Instalasi Hidroponik',
    cumulativeProgress: 85.0,
    progressDelta: 3.0,
    civilProgress: 85.0,
    iotProgress: 85.0,
    status: 'ON-SCHEDULE',
    weather: {
      morning: 'Cerah (08.00–12.00)',
      afternoon: 'Hujan (13.30–17.00)'
    },
    manpowerCount: 8,
    manpowerRole: '8 Orang (Pemasangan Plastik UV, Insect Net & Sistem Hidroponik)',
    executiveSummary: 'Kegiatan pekerjaan Selasa, 24 November 2026 dilaksanakan dengan melibatkan 8 tenaga kerja lapangan (2 pengawas HSE & 6 pekerja). Kondisi cuaca cerah pada pagi hari (08.00–12.00 WIB) dan turun hujan pada sore hari (13.30–17.00 WIB). Kegiatan difokuskan pada penuntasan atap Plastik UV 200 micron model sawtooth pada struktur greenhouse, pemasangan 4 unit kipas sirkulasi udara (drum fan) di rangka atas, penutupan dinding Insect Net Mesh 50 keliling beserta daun pintu akses, penanaman pipa PVC distribusi hidroponik, serta pemasukan meja & bibit hidroponik NFT pertama (Paket 6, 7, 10, 12 & 15). Pada sore hari pukul 18.14 WIB, Working Permit perpanjangan No. 0030/70201000/XI/2026 resmi disetujui digital oleh MUP UPDL Palembang (berlaku 25 Nov–08 Des 2026).',
    photos: [
      {
        id: 'photo-24-01',
        url: '/progress/2026-11-24/1-apel-pagi-k3-8-personel-lengkap-apd.jpeg',
        caption: 'Apel & Briefing K3 Pagi 8 Personel Lengkap APD (08.05 WIB)',
        narrative: 'Dua pengawas lapangan memimpin apel pagi K3 bersama enam pekerja berhelm proyek, rompi visibilitas tinggi, dan sepatu boot keselamatan di jalur akses tapak sebelum memulai pekerjaan pemasangan plastik UV, insect net, dan sistem hidroponik.'
      },
      {
        id: 'photo-24-02',
        url: '/progress/2026-11-24/2-kipas-sirkulasi-terpasang-insect-net-dan-meja-nft-bibit.jpeg',
        caption: '4 Unit Kipas Sirkulasi Terpasang, Insect Net Samping & Meja NFT Pertama (08.16 WIB)',
        narrative: 'Tampak interior memperlihatkan 4 unit kipas sirkulasi udara (drum fan) sudah terpasang di rangka lengkung atas, dinding sisi kanan tertutup lembaran selubung, dan 2 set meja talang NFT berisi bibit pakcoy sudah tertata di sisi dalam.'
      },
      {
        id: 'photo-24-03',
        url: '/progress/2026-11-24/3-tampak-samping-atap-plastik-uv-penuh-dan-meja-nft-siap-masuk.jpeg',
        caption: 'Tampak Samping Atap Plastik UV Penuh & Jajaran Meja NFT Siap Masuk (08.22 WIB)',
        narrative: 'Seluruh bentang atap sawtooth sisi memanjang 25 meter sudah tertutup lembaran Plastik UV 200 micron secara rapat, sementara rangkaian meja gully NFT putih berjajar di halaman samping siap dimobilisasi masuk.'
      },
      {
        id: 'photo-24-04',
        url: '/progress/2026-11-24/4-tampak-depan-plastik-uv-lengkap-2-tandon-dan-insect-net-kiri.jpeg',
        caption: 'Tampak Depan Atap Plastik UV Lengkap & 2 Unit Tandon Nutrisi (08.23 WIB)',
        narrative: 'Atap plastik UV lengkung dua bentang dan gable atas tampak tertutup lengkap dari fasad depan, dengan kedua tandon nutrisi oranye terposisi di kanan-kiri dinding Hebel yang sudah terplester rapi.'
      },
      {
        id: 'photo-24-05',
        url: '/progress/2026-11-24/5-jalur-pipa-pvc-hidroponik-galian-lantai-dan-plester-sore.jpeg',
        caption: 'Penanaman Jalur Pipa PVC Hidroponik & Perapihan Plester Sore (16.06 WIB)',
        narrative: 'Dua lajur pipa PVC putih distribusi nutrisi hidroponik mulai ditanam memanjang pada galian lantai dalam greenhouse, bersamaan dengan perapihan acian/plesteran dinding sisi kanan.'
      },
      {
        id: 'photo-24-06',
        url: '/progress/2026-11-24/6-dinding-insect-net-terpasang-rapat-dan-pipa-distribusi-hidroponik.jpeg',
        caption: 'Dinding Insect Net Mesh 50 Terpasang Rapat Sisi Samping (16.06 WIB)',
        narrative: 'Lembaran kain Insect Net Mesh 50 telah terkunci rapat sepanjang bentang rangka dinding samping kanan-kiri dari ambang dinding Hebel hingga talang atas, melindungi area tanam meja NFT.'
      },
      {
        id: 'photo-24-07',
        url: '/progress/2026-11-24/7-dinding-insect-net-depan-rangka-pintu-dan-rangka-meja-nft.jpeg',
        caption: 'Penutupan Insect Net Dinding Gable, Rangka Pintu & Rangka Meja Dalam (16.06 WIB)',
        narrative: 'Tampak dalam menuju fasad pintu memperlihatkan penutupan insect net dari dasar hingga puncak lengkung atap, rangka kusen pintu terpasang tegak, dan jajaran rangka meja hidroponik mulai dirakit di lantai dalam.'
      },
      {
        id: 'photo-24-08',
        url: '/progress/2026-11-24/8-tampak-depan-sore-greenhouse-tertutup-uv-insect-net-dan-pintu.jpeg',
        caption: 'Tampak Depan Sore: Selubung Plastik UV, Insect Net & Daun Pintu Terpasang (17.48 WIB)',
        narrative: 'Pandangan depan pada pukul 17.48 WIB menunjukkan seluruh bidang depan greenhouse telah tertutup Plastik UV dan Insect Net lengkap dengan daun pintu akses dan tandon nutrisi di depan dinding.'
      },
      {
        id: 'photo-24-09',
        url: '/progress/2026-11-24/9-detail-fasad-depan-greenhouse-sore-insect-net-dan-tandon.jpeg',
        caption: 'Detail Fasad Depan Greenhouse Pasca Pemasangan Insect Net Penuh (17.48 WIB)',
        narrative: 'Verifikasi kelurusan tarikan kawat pengunci dan kerapatan sambungan plastik UV serta insect net pada fasad utama sebelum tim mengakhiri pekerjaan hari Selasa.'
      }
    ],
    nextSteps: [
      'Melanjutkan instalasi sistem hidroponik greenhouse (jaringan pipa PVC bawah tanah, rakitan meja NFT & irigasi drip).',
      'Melanjutkan pengerjaan rangka kanopi belakang greenhouse area 3 unit kolam.',
      'Penyelesaian sekat insect net pintu/ruang kontrol dan persiapan hamparan lantai weedmat.'
    ],
    localPurchases: [
      'Plastik UV 200 Micron & Insect Net Mesh 50 (Terpasang Penuh Atap & Dinding)',
      '4 Unit Kipas Sirkulasi Drum Fan (Terpasang di Rangka Atap)',
      'Pipa PVC Distribusi Hidroponik, Meja NFT & 2 Unit Tandon Nutrisi',
      'Material Plester/Acian & Profil Hollow Rangka Pintu'
    ],
    logisticsNotes: 'Plastik UV atap dan dinding Insect Net Mesh 50 terpasang hampir menyeluruh; 4 drum fan sirkulasi dan 2 meja NFT pertama sudah berada di posisi dalam greenhouse.',
    approvalNotes: 'Working Permit Perpanjangan Inspekta No. 0030/70201000/XI/2026 RESMI APPROVED secara digital (24 Nov 2026 18.14 WIB oleh MUP Ibu Sri Wigati, berlaku 25 Nov–08 Des 2026 pukul 08.00–22.00 WIB, 18 personel terdaftar).',
    briefingSchedule: 'Apel & Briefing K3 pagi pukul 08.05 WIB diikuti 8 personel (2 pengawas HSE & 6 pekerja lapangan lengkap APD).'
  },

  // =========================================================================
  // 23. LAPORAN HARIAN 25 NOVEMBER 2026
  // =========================================================================
  {
    id: 'report-2026-11-25',
    cycleNumber: 23,
    dateStr: '2026-11-25',
    displayDate: '25 November 2026',
    shortDate: '25 Nov',
    isCompleted: true,
    isLatestActive: false,
    location: 'Site PLN UPDL Palembang / Udiklat Indralaya',
    pipelineStage: 'iot_bast',
    pipelineStageLabel: '5. Perpipaan Hidroponik Bawah Tanah & Insect Net Pintu/Ruang Kontrol',
    cumulativeProgress: 87.5,
    progressDelta: 2.5,
    civilProgress: 88.0,
    iotProgress: 87.0,
    status: 'ON-SCHEDULE',
    weather: {
      morning: 'Cerah (08.00–12.00)',
      afternoon: 'Cerah Berawan (13.30–17.00)'
    },
    manpowerCount: 8,
    manpowerRole: '1 Pengawas HSE & 7 Pekerja Lapangan (Perpipaan Hidroponik & Insect Net Pintu)',
    executiveSummary: 'Hari pertama berlakunya Working Permit perpanjangan No. 0030/70201000/XI/2026 (Rabu, 25 November 2026) diawali apel & briefing K3 pagi pukul 08.08 WIB oleh 8 personel (1 pengawas HSE & 7 pekerja). Tim memfokuskan pekerjaan pada penanaman jaringan pipa PVC putih distribusi dan cabang melintang di galian tanah dalam greenhouse (Paket 12 & 15), penguncian kain Insect Net Mesh 50 pada daun pintu utama dan rangka sekat ruang kontrol (Paket 7.1–7.2 & 8.1), perapihan selubung sisi samping bawah, serta persiapan selang irigasi drip dan rangkaian meja NFT putih di halaman luar.',
    photos: [
      {
        id: 'photo-25-01',
        url: '/progress/2026-11-25/1-tampak-depan-pagi-selubung-uv-insect-net-dan-pintu-utama.jpeg',
        caption: 'Tampak Depan Pagi: Selubung UV, Insect Net & Pintu Utama Terpasang (08.02 WIB)',
        narrative: 'Fasad depan greenhouse dalam kondisi cuaca pagi cerah sudah tertutup penuh Plastik UV atap dan Insect Net, disertai tandon nutrisi oranye serta pekerja melakukan finishing pintu masuk utama.'
      },
      {
        id: 'photo-25-02',
        url: '/progress/2026-11-25/2-panorama-samping-greenhouse-4-kipas-dan-meja-nft-luar.jpeg',
        caption: 'Panorama Samping Greenhouse, 4 Kipas Sirkulasi & Jajaran Meja NFT (08.03 WIB)',
        narrative: 'Tampak samping memanjang 25 meter memperlihatkan kerangka atap sawtooth tertutup Plastik UV penuh, 4 kipas sirkulasi tergantung simetris di dalam, dan deretan meja talang NFT siap masuk di halaman samping.'
      },
      {
        id: 'photo-25-03',
        url: '/progress/2026-11-25/3-tampak-belakang-rangka-bukaan-belakang-dan-meja-hidroponik-dalam.jpeg',
        caption: 'Tampak Belakang Greenhouse, Rangka Gable & Aktivitas Dalam (08.05 WIB)',
        narrative: 'Pandangan dari arah belakang memperlihatkan rangka baja area kolam belakang siap pemasangan kanopi, sementara di bagian dalam pekerja menata rangka meja hidroponik di antara bukaan pintu belakang.'
      },
      {
        id: 'photo-25-04',
        url: '/progress/2026-11-25/4-dinding-insect-net-samping-penuh-dan-rakitan-selang-drip.jpeg',
        caption: 'Dinding Insect Net Samping Penuh & Gulungan Manifold Selang Drip (08.05 WIB)',
        narrative: 'Dinding samping memanjang sudah terpasang kain Insect Net rapat hingga ambang plester dinding Hebel, sementara di sisi luar tampak gulungan rakitan selang PE drip siap diposisikan ke zona polybag.'
      },
      {
        id: 'photo-25-05',
        url: '/progress/2026-11-25/5-apel-pagi-k3-dalam-greenhouse-8-personel-working-permit-0030.jpeg',
        caption: 'Apel K3 Pagi di Dalam Greenhouse (8 Personel • WP #0030 Berlaku) (08.08 WIB)',
        narrative: 'Briefing keselamatan kerja pagi dipimpin 1 pengawas HSE berhelm putih bersama 7 pekerja berhelm biru/kuning, rompi reflektif, dan boot K3 di atas area jalur pipa sebelum pembagian zona kerja.'
      },
      {
        id: 'photo-25-06',
        url: '/progress/2026-11-25/6-briefing-pembagian-tugas-perpipaan-dan-pintu-insect-net.jpeg',
        caption: 'Briefing Teknis Pembagian Tugas Perpipaan & Penutupan Pintu Net (08.08 WIB)',
        narrative: 'Pengawas menyampaikan arahan urutan kerja harian terkait penyambungan pipa PVC hidroponik bawah tanah, pemasangan talang pembuangan, serta penguncian kain insect net pada bingkai pintu.'
      },
      {
        id: 'photo-25-07',
        url: '/progress/2026-11-25/7-pemasangan-jaringan-pipa-pvc-bawah-tanah-distribusi-hidroponik.jpeg',
        caption: 'Pemasangan Jaringan Pipa PVC Bawah Tanah Distribusi Hidroponik (08.08 WIB)',
        narrative: 'Tim menyambung dan meluruskan dua jalur utama pipa PVC memanjang beserta cabang T melintang di dalam parit galian lantai greenhouse untuk koneksi sirkulasi hidroponik sebelum ditimbun dan dilapisi weedmat.'
      },
      {
        id: 'photo-25-08',
        url: '/progress/2026-11-25/8-pemasangan-kain-insect-net-pintu-dan-sekat-ruang-kontrol.jpeg',
        caption: 'Pemasangan Kain Insect Net pada Bingkai Pintu & Sekat Ruang Kontrol (08.08 WIB)',
        narrative: 'Tiga pekerja memasang dan mengunci kain Insect Net Mesh 50 pada bingkai pintu akses serta rangka partisi ruang kontrol menggunakan profil kanal dan kawat pegas.'
      }
    ],
    nextSteps: [
      'Penghamparkan lantai weedmat anti gulma menyeluruh di atas jalur pipa tertanam dan penataan rangka serta talang NFT (Paket 4.2 & 15).',
      'Ereksi rangka baja hollow kanopi belakang area kolam D2.',
      'Pemasangan box panel kontrol listrik/IoT, pompa pendorong, serta penyambungan perpipaan 2 tandon nutrisi di ruang kontrol (Paket 9 & 14).'
    ],
    localPurchases: [
      'Pipa PVC, Fitting Tee/Elbow & Lem Pipa Jaringan Hidroponik',
      'Kawat Spring Clip & Kain Insect Net Mesh 50 Pintu/Ruang Kontrol',
      'Gulungan Weedmat Lantai Anti Gulma Siap Pasang',
      'Selang PE Manifold Drip & Meja Gully NFT Putih'
    ],
    logisticsNotes: 'Jaringan pipa PVC utama bawah tanah telah tertata di galian dalam greenhouse; seluruh meja NFT dan komponen ruang kontrol siap dirakit pada tahap akhir.',
    approvalNotes: 'Working Permit Perpanjangan Inspekta No. 0030/70201000/XI/2026 AKTIF mulai 25 Nov 2026 08.00 WIB s.d. 08 Des 2026 22.00 WIB (18 personel terdaftar, disetujui digital MUP Ibu Sri Wigati 24 Nov 2026 18.14 WIB).',
    briefingSchedule: 'Apel & Briefing K3 pagi pukul 08.08 WIB di dalam greenhouse dipimpin 1 pengawas HSE bersama 7 pekerja lapangan.'
  },

  // =========================================================================
  // 24. LAPORAN HARIAN 26 NOVEMBER 2026
  // =========================================================================
  {
    id: 'report-2026-11-26',
    cycleNumber: 24,
    dateStr: '2026-11-26',
    displayDate: '26 November 2026',
    shortDate: '26 Nov',
    isCompleted: true,
    isLatestActive: false,
    location: 'Site PLN UPDL Palembang / Udiklat Indralaya',
    pipelineStage: 'iot_bast',
    pipelineStageLabel: '5. Panel Kontrol IoT, Pompa Tandon, Lantai Weedmat & Kanopi Belakang',
    cumulativeProgress: 91.5,
    progressDelta: 4.0,
    civilProgress: 91.5,
    iotProgress: 91.5,
    status: 'ON-SCHEDULE',
    weather: {
      morning: 'Berawan / Pasca Hujan (08.00–12.00)',
      afternoon: 'Cerah Berawan (13.30–17.00)'
    },
    manpowerCount: 10,
    manpowerRole: '2 Pengawas HSE & 8 Pekerja Lapangan (Weedmat, Kanopi Belakang, Panel IoT & Pompa)',
    executiveSummary: 'Kamis, 26 November 2026 mencatat lompatan progres signifikan menuju tahap integrasi akhir bersama 10 personel aktif (2 pengawas HSE & 8 pekerja lapangan, briefing K3 08.58 WIB) di bawah Working Permit No. 0030/70201000/XI/2026. Seluruh lantai dalam greenhouse 8×25m telah terhampar rapi Lantai Weedmat Anti Gulma (Paket Sipil 4.2) lengkap riser pipa vertikal hidroponik, dinding insect net keliling 4 sisi tertutup penuh, dan rangka meja beserta tumpukan talang gully NFT putih telah masuk ke dalam ruangan. Di area belakang, rangka hollow galvanis kanopi pelindung kolam telah berdiri. Di dalam ruang kontrol, box panel distribusi listrik & Smart IoT sudah terpasang pada rangka dinding, disusul instalasi pompa pendorong, katup ball valve & jaringan pipa ke tandon nutrisi 1200L serta penyambungan pipa return ke tandon NFT tertanam bawah lantai (Paket 9, 12, 14 & 15).',
    photos: [
      {
        id: 'photo-26-01',
        url: '/progress/2026-11-26/1-hamparan-weedmat-lantai-penuh-rangka-meja-dan-talang-nft.jpeg',
        caption: 'Hamparan Penuh Lantai Weedmat, Riser Pipa & Talang NFT di Dalam GH (08.23 WIB)',
        narrative: 'Seluruh area lantai dalam greenhouse 8×25m sudah tertutup rapi karpet weedmat anti gulma dengan titik riser pipa nutrisi muncul presisi; rangka meja hidroponik berdiri sejajar di sisi kiri dan tumpukan talang gully NFT putih siap dipasang di atasnya.'
      },
      {
        id: 'photo-26-02',
        url: '/progress/2026-11-26/2-ereksi-rangka-kanopi-belakang-area-kolam-dengan-scaffolding.jpeg',
        caption: 'Ereksi Rangka Baja Hollow Kanopi Belakang Area Kolam D2 (08.24 WIB)',
        narrative: 'Dua pekerja menggunakan scaffolding menyetel dan mengunci balok gording rangka atap baja hollow galvanis untuk kanopi pelindung area kolam budidaya di bagian belakang greenhouse.'
      },
      {
        id: 'photo-26-03',
        url: '/progress/2026-11-26/3-instalasi-panel-kontrol-iot-pompa-dan-tandon-nutrisi-ruang-kontrol.jpeg',
        caption: 'Instalasi Panel Kontrol IoT, Pompa Pendorong & Tandon 1200L Ruang Kontrol (08.28 WIB)',
        narrative: 'Di dalam ruang kontrol berlantai weedmat, box panel kontrol listrik/IoT dilengkapi tombol indikator dan sakelar kunci sudah terpasang pada rangka dinding, berdampingan dengan instalasi pompa pendorong air hijau, rangkaian pipa PVC & katup ball valve yang terhubung ke tandon nutrisi Grand 1200L.'
      },
      {
        id: 'photo-26-04',
        url: '/progress/2026-11-26/4-koneksi-pipa-return-tandon-nutrisi-nft-tertanam-bawah-lantai.jpeg',
        caption: 'Koneksi Pipa Return ke Tandon Nutrisi NFT Tertanam Bawah Lantai (08.53 WIB)',
        narrative: 'Detail bak tanam tandon nutrisi oranye bawah lantai ruang kontrol memperlihatkan sambungan pipa return PVC yang menembus rapi dinding bata ringan Hebel terpasang menuju lubang masuk tandon.'
      },
      {
        id: 'photo-26-05',
        url: '/progress/2026-11-26/5-briefing-k3-pagi-10-personel-working-permit-0030-aktif.jpeg',
        caption: 'Briefing K3 Pagi 10 Personel Lengkap APD di Bawah WP #0030 (08.58 WIB)',
        narrative: 'Dua pengawas lapangan berhelm putih memimpin briefing keselamatan kerja (SMK3) bersama delapan pekerja lapangan mengenakan helm biru/kuning, rompi reflektif, dan sepatu boot keselamatan sebelum melanjutkan penyambungan instalasi ruang kontrol, meja NFT, dan kanopi.'
      }
    ],
    nextSteps: [
      'Penataan lengkap seluruh talang gully NFT di atas rangka meja, pemasangan jalur drip & polybag, serta penyambungan kelistrikan panel Smart IoT dan sensor (Paket 9 & 12–15).',
      'Penutupan atap plastik UV kanopi belakang, penempatan 3 kolam D2, finishing pengecatan dinding hebel & pemasangan rumput sintetis (Paket 3.9 & 4.1).',
      'Uji fungsi sirkulasi pompa, otomasi dashboard IoT smartfarmpln.com, serta persiapan BAST utama 28 Nov 2026 (dilanjutkan pekerjaan paving block tambahan di bawah WP #0030 s.d. 08 Des 2026).'
    ],
    localPurchases: [
      'Weedmat Hitam Anti Gulma (Terpasang Penuh Lantai Greenhouse & Ruang Kontrol)',
      'Box Panel Kontrol Listrik/IoT, Pompa Pendorong, Ball Valve & Tandon Grand 1200L',
      'Rangka Hollow Galvanis Kanopi Belakang & Sekrup Baja Ringan',
      'Set Tandon NFT Tertanam, Pipa Return PVC & Talang Gully NFT Putih'
    ],
    logisticsNotes: 'Seluruh weedmat lantai, box panel kontrol IoT, pompa pendorong, tandon nutrisi ruang kontrol, dan komponen meja NFT sudah terpasang dan memasuki tahap interkoneksi akhir.',
    approvalNotes: 'Working Permit Perpanjangan Inspekta No. 0030/70201000/XI/2026 AKTIF (berlaku 25 Nov–08 Des 2026 pukul 08.00–22.00 WIB, 18 personel terdaftar, disetujui digital MUP Ibu Sri Wigati 24 Nov 2026 18.14 WIB).',
    briefingSchedule: 'Apel & Briefing K3 pagi pukul 08.58 WIB dipimpin 2 pengawas HSE bersama 8 pekerja lapangan lengkap APD.'
  },

  // =========================================================================
  // 25. LAPORAN HARIAN 27 NOVEMBER 2026
  // =========================================================================
  {
    id: 'report-2026-11-27',
    cycleNumber: 25,
    dateStr: '2026-11-27',
    displayDate: '27 November 2026',
    shortDate: '27 Nov',
    isCompleted: true,
    isLatestActive: false,
    location: 'Site PLN UPDL Palembang / Udiklat Indralaya',
    pipelineStage: 'iot_bast',
    pipelineStageLabel: '5. Survey Toren Air, Kunjungan GSD, Koordinasi PLN & Finishing',
    cumulativeProgress: 94.8,
    progressDelta: 3.3,
    civilProgress: 95.0,
    iotProgress: 94.6,
    status: 'ON-SCHEDULE',
    weather: {
      morning: 'Cerah (08.00–12.00)',
      afternoon: 'Cerah Berawan (13.30–17.00)'
    },
    manpowerCount: 7,
    manpowerRole: '2 Pengawas HSE & 5 Pekerja Lapangan (Finishing Cat, Kanopi UV, Vertikultur & Koordinasi)',
    executiveSummary: 'Jumat, 27 November 2026 mencatat kegiatan koordinasi strategis sekaligus penyelesaian fisik utama bersama 7 personel (apel K3 pukul 08.53 WIB). Dilaksanakan survey dan pematokan titik penempatan toren air di luar greenhouse serta inspeksi fasilitas bersama Bu Henyta (PLN UPDL Palembang) pada pukul 09.42–09.46 WIB, dilanjutkan kunjungan lapangan Pak Dicky dan Pak Sahudin (PT Graha Sarana Duta / GSD) pukul 14.37–14.40 WIB untuk meninjau tanaman NFT, 3 menara vertikultur, dan zona drip, serta koordinasi sore bersama Bu Henyta (PLN), Pak Dicky, dan Pak Sahudin (GSD) pukul 15.15 WIB terkait persiapan paving block tambahan. Secara fisik, atap Plastik UV kanopi belakang sudah terpasang penuh, dinding keliling telah dicat putih rapi (Paket 3.9), 3 menara vertikultur & seluruh meja NFT terpasang, tatakan Hebel jalur drip tertata, router Wi-Fi IoT terpasang di atas panel kontrol, dan gulungan rumput sintetis serta material paving block tiba di site.',
    photos: [
      {
        id: 'photo-27-01',
        url: '/progress/2026-11-27/1-kanopi-belakang-plastik-uv-penuh-dan-dinding-putih.jpeg',
        caption: 'Atap Plastik UV Kanopi Belakang Penuh & Dinding Cat Putih (08.07 WIB)',
        narrative: 'Tampak belakang greenhouse memperlihatkan atap kanopi area kolam sudah tertutup penuh Plastik UV 200 micron di atas rangka baja hollow, sementara dinding keliling telah dicat putih rapi.'
      },
      {
        id: 'photo-27-02',
        url: '/progress/2026-11-27/2-tiga-menara-vertikultur-dan-meja-hidroponik-nft.jpeg',
        caption: 'Instalasi 3 Menara Vertikultur & Meja Hidroponik NFT (08.08 WIB)',
        narrative: 'Tiga unit menara vertikultur berlubang tanam lengkap wadah penampung bawah sudah terpasang sejajar di sisi kiri dalam greenhouse berdampingan dengan meja gully NFT.'
      },
      {
        id: 'photo-27-03',
        url: '/progress/2026-11-27/3-interior-meja-nft-tatakan-hebel-dan-jalur-selang-drip.jpeg',
        caption: 'Penataan Meja NFT, Tatakan Hebel & Jalur Selang Drip (08.08 WIB)',
        narrative: 'Seluruh meja NFT di sisi kiri dan dua lajur panjang tatakan bata ringan Hebel beserta selang mikro drip di sisi kanan sudah tertata rapi di atas hamparan lantai weedmat.'
      },
      {
        id: 'photo-27-04',
        url: '/progress/2026-11-27/4-ruang-kontrol-panel-iot-router-wifi-dan-gulungan-rumput-sintetis.jpeg',
        caption: 'Ruang Kontrol Panel IoT, Router Wi-Fi & Gulungan Rumput Sintetis (08.34 WIB)',
        narrative: 'Di ruang kontrol yang sudah dicat putih, box panel IoT terpasang lengkap dengan router Wi-Fi di atasnya; terlihat teknisi merapikan kabel serta tiga gulungan karpet rumput sintetis siap gelar.'
      },
      {
        id: 'photo-27-05',
        url: '/progress/2026-11-27/5-apel-pagi-k3-7-personel-lengkap-apd.jpeg',
        caption: 'Apel & Briefing K3 Pagi 7 Personel Lengkap APD (08.53 WIB)',
        narrative: 'Dua pengawas HSE berhelm putih memimpin apel pagi keselamatan kerja bersama lima pekerja ber-APD lengkap di jalur paving sebelum memulai aktivitas lapangan.'
      },
      {
        id: 'photo-27-06',
        url: '/progress/2026-11-27/6-survey-titik-penempatan-toren-air-bersama-bu-henyta-pln.jpeg',
        caption: 'Survey Titik Penempatan Toren Air Bersama Bu Henyta PLN (09.42 WIB)',
        narrative: 'Koordinasi lapangan bersama Bu Henyta (PT PLN UPDL Palembang) di sisi samping greenhouse untuk menentukan posisi pondasi toren air suplai yang aman dan efektif.'
      },
      {
        id: 'photo-27-07',
        url: '/progress/2026-11-27/7-pematokan-titik-toren-air-disaksikan-bu-henyta-pln.jpeg',
        caption: 'Pematokan Titik Toren Air Disaksikan Bu Henyta PLN (09.42 WIB)',
        narrative: 'Pekerja menancapkan patok penanda koordinat titik penempatan toren air di luar area greenhouse dengan disaksikan langsung oleh perwakilan PLN dan pengawas lapangan.'
      },
      {
        id: 'photo-27-08',
        url: '/progress/2026-11-27/8-peninjauan-jalur-drip-dan-meja-nft-bersama-bu-henyta-pln.jpeg',
        caption: 'Peninjauan Jalur Drip & Meja NFT Bersama Bu Henyta PLN (09.46 WIB)',
        narrative: 'Bu Henyta meninjau langsung progres penataan tatakan Hebel jalur irigasi drip, selang kapiler, dan deretan talang gully NFT di bagian dalam greenhouse.'
      },
      {
        id: 'photo-27-09',
        url: '/progress/2026-11-27/9-kunjungan-pak-dicky-dan-pak-sahudin-gsd-tinjau-tanaman-nft.jpeg',
        caption: 'Kunjungan Pak Dicky & Pak Sahudin GSD Tinjau Tanaman NFT (14.37 WIB)',
        narrative: 'Pak Dicky dan Pak Sahudin (PT Graha Sarana Duta / GSD) meninjau pertumbuhan tanaman selada hijau dan bayam merah di meja hidroponik NFT bersama pengawas lapangan.'
      },
      {
        id: 'photo-27-10',
        url: '/progress/2026-11-27/10-kunjungan-pak-dicky-dan-pak-sahudin-gsd-area-vertikultur-dan-polybag.jpeg',
        caption: 'Kunjungan Pak Dicky & Pak Sahudin GSD Area Vertikultur & Polybag (14.40 WIB)',
        narrative: 'Rombongan GSD meninjau instalasi tiga menara vertikultur, meja semai rockwool, serta persiapan tumpukan polybag putih yang akan dipasang pada jalur irigasi drip.'
      },
      {
        id: 'photo-27-11',
        url: '/progress/2026-11-27/11-koordinasi-sore-bu-henyta-pln-pak-dicky-dan-pak-sahudin-gsd.jpeg',
        caption: 'Koordinasi Sore Bersama Bu Henyta PLN, Pak Dicky & Pak Sahudin GSD (15.15 WIB)',
        narrative: 'Pertemuan koordinasi sore di depan greenhouse antara Bu Henyta (PLN), Pak Dicky & Pak Sahudin (GSD), dan pengawas proyek membahas penyelesaian finishing serta rencana pekerjaan tambahan.'
      },
      {
        id: 'photo-27-12',
        url: '/progress/2026-11-27/12-diskusi-teknis-pln-dan-gsd-area-material-paving-block.jpeg',
        caption: 'Diskusi Teknis PLN & GSD di Dekat Material Paving Block (15.15 WIB)',
        narrative: 'Koordinasi berlanjut di area depan dengan latar tumpukan material paving block tambahan dan rangka kanopi/kolam untuk menyelaraskan jadwal kerja di bawah WP #0030.'
      }
    ],
    nextSteps: [
      'Penuntasan pemasangan 4 lajur penuh polybag putih media tanam cocopeat beserta stick drip irigasi tetes (Paket 12).',
      'Pemasangan karpet rumput sintetis eksekutif, pipa turun drainase talang 3 inch & lampu penerangan LED (Paket 4.1, 5.5 & 9.1).',
      'Uji sirkulasi pompa menara vertikultur, meja semai rockwool & sistem Smart IoT menuju penyelesaian akhir.'
    ],
    localPurchases: [
      'Cat Dinding Eksterior/Interior Putih (Terpasang Keliling)',
      '3 Unit Menara Vertikultur & Tray Meja Semai Rockwool',
      'Gulungan Rumput Sintetis Eksekutif & Material Paving Block Tambahan',
      'Router Wi-Fi IoT & Perlengkapan Panel Kontrol Ruang Kontrol'
    ],
    logisticsNotes: 'Material rumput sintetis dan tumpukan paving block tambahan telah tiba di lokasi; titik penempatan toren air sudah disurvei dan dipatok bersama PLN.',
    approvalNotes: 'Working Permit Perpanjangan Inspekta No. 0030/70201000/XI/2026 AKTIF (25 Nov–08 Des 2026, 08.00–22.00 WIB). Koordinasi lapangan & survey titik toren air dilaksanakan bersama Bu Henyta (PLN) serta kunjungan Pak Dicky & Pak Sahudin (GSD).',
    briefingSchedule: 'Apel & Briefing K3 pagi pukul 08.53 WIB (7 personel), survey & koordinasi PLN pukul 09.42 WIB, kunjungan GSD pukul 14.37 WIB, dan koordinasi bersama PLN–GSD pukul 15.15 WIB.'
  },

  // =========================================================================
  // 26. LAPORAN HARIAN 28 NOVEMBER 2026 (TERBARU & AKTIF)
  // =========================================================================
  {
    id: 'report-2026-11-28',
    cycleNumber: 26,
    dateStr: '2026-11-28',
    displayDate: '28 November 2026',
    shortDate: '28 Nov',
    isCompleted: true,
    isLatestActive: true,
    location: 'Site PLN UPDL Palembang / Udiklat Indralaya',
    pipelineStage: 'iot_bast',
    pipelineStageLabel: '5. Finishing Polybag Drip Penuh, Rumput Sintetis, Drainase & Uji Hidroponik',
    cumulativeProgress: 97.8,
    progressDelta: 3.0,
    civilProgress: 97.5,
    iotProgress: 98.1,
    status: 'ON-SCHEDULE',
    weather: {
      morning: 'Cerah Berawan (08.00–12.00)',
      afternoon: 'Cerah Berawan (13.30–17.00)'
    },
    manpowerCount: 6,
    manpowerRole: '2 Pengawas HSE & 4 Pekerja Lapangan (Rumput Sintetis, Drip Polybag, Drainase & Uji Sistem)',
    executiveSummary: 'Sabtu, 28 November 2026 mencapai progres kumulatif realistis 97,8% (Sipil 97,5% | IoT & Hidroponik 98,1%) bersama 6 personel lapangan (apel K3 pukul 08.52 WIB) di bawah Working Permit No. 0030/70201000/XI/2026. Instalasi seluruh 4 lajur panjang polybag putih 40×40 cm berisi media tanam cocopeat di atas tatakan Hebel lengkap ratusan selang kapiler & stick drip irigasi tetes telah rampung penuh (Paket 12), pipa turun drainase talang air PVC 3 inch dipasang di sudut depan (Paket 5.5–5.6), hamparan rumput sintetis eksekutif dipasang di lorong meja NFT yang telah berisi tanaman selada hijau & bayam merah (Paket 4.1 & 15), 3 menara vertikultur dan meja semai rockwool diuji sirkulasinya, media tanam di bawah kanopi belakang UV disiapkan, serta unit lampu LED Hannochs 10W siap dipasang (Paket 9.1). Sisa 2,2% mencakup penuntasan bentangan rumput sintetis, pemasangan titik lampu/panel akhir, penempatan kolam D2, serta kalibrasi akhir & pekerjaan paving block tambahan pasca 28 Nov di bawah WP #0030 (s.d. 08 Des 2026).',
    photos: [
      {
        id: 'photo-28-01',
        url: '/progress/2026-11-28/1-pemasangan-pipa-turun-drainase-talang-air-pvc-3-inch.jpeg',
        caption: 'Pemasangan Pipa Turun Drainase Talang Air PVC 3 Inch (08.20 WIB)',
        narrative: 'Pekerja memasang pipa turun drainase PVC 3 inch di sudut kanan luar greenhouse menuju sambungan talang air galvanis atap (Paket 5.5–5.6) agar aliran air hujan tersalurkan aman.'
      },
      {
        id: 'photo-28-02',
        url: '/progress/2026-11-28/2-tampak-pintu-utama-ruang-kontrol-panel-iot-dan-jalur-tanam.jpeg',
        caption: 'Tampak Pintu Utama, Ruang Kontrol Panel IoT & Jalur Tanam (08.21 WIB)',
        narrative: 'Pandangan lurus dari pintu masuk utama memperlihatkan ruang kontrol dengan panel Smart IoT di sisi kiri dan koridor tanam lengkap meja NFT serta jalur polybag drip yang sudah tertata rapi.'
      },
      {
        id: 'photo-28-03',
        url: '/progress/2026-11-28/3-persiapan-media-tanam-di-bawah-kanopi-belakang-uv-penuh.jpeg',
        caption: 'Persiapan Media Tanam di Pintu Akses Belakang & Kanopi UV (08.25 WIB)',
        narrative: 'Pekerja menyiapkan ember media tanam dan perlengkapan budidaya di area pintu belakang dengan latar atap kanopi belakang Plastik UV yang telah tertutup rapi.'
      },
      {
        id: 'photo-28-04',
        url: '/progress/2026-11-28/4-uji-sirkulasi-menara-vertikultur-dan-meja-semai-rockwool.jpeg',
        caption: 'Uji Sirkulasi Menara Vertikultur & Meja Semai Rockwool (08.28 WIB)',
        narrative: 'Teknisi bersama pengawas melakukan pengecekan kabel dan uji sirkulasi air pada 3 menara vertikultur serta meja semai berisi puluhan blok rockwool dengan bibit sayuran yang mulai tumbuh.'
      },
      {
        id: 'photo-28-05',
        url: '/progress/2026-11-28/5-apel-pagi-k3-6-personel-lengkap-apd-di-area-masuk.jpeg',
        caption: 'Apel Pagi K3 6 Personel Lengkap APD di Area Masuk (08.52 WIB)',
        narrative: 'Dua pengawas HSE berhelm putih dan empat pekerja lapangan berhelm proyek, rompi reflektif, serta sepatu boot keselamatan melaksanakan apel dan penghormatan K3 sebelum pekerjaan finishing.'
      },
      {
        id: 'photo-28-06',
        url: '/progress/2026-11-28/6-briefing-koordinasi-finishing-harian-tim-lapangan.jpeg',
        caption: 'Briefing Koordinasi Pekerjaan Finishing Harian Tim Lapangan (08.52 WIB)',
        narrative: 'Pengawas menyampaikan pembagian fokus kerja akhir meliputi penggelaran rumput sintetis lorong, pengecekan irigasi drip, penyambungan drainase talang, dan persiapan instalasi lampu LED.'
      },
      {
        id: 'photo-28-07',
        url: '/progress/2026-11-28/7-pemasangan-rumput-sintetis-eksekutif-lorong-meja-nft.jpeg',
        caption: 'Pemasangan Rumput Sintetis Eksekutif pada Lorong Meja NFT (09.12 WIB)',
        narrative: 'Pekerja menggelar dan merapikan karpet rumput sintetis hijau di bawah serta di sepanjang lorong meja NFT yang telah berisi tanaman selada hijau dan bayam merah (Paket Sipil 4.1).'
      },
      {
        id: 'photo-28-08',
        url: '/progress/2026-11-28/8-instalasi-penuh-4-lajur-polybag-stick-drip-dan-lampu-led.jpeg',
        caption: 'Instalasi Penuh 4 Lajur Polybag Drip & Kesiapan Lampu LED 10W (09.36 WIB)',
        narrative: 'Empat lajur panjang polybag putih 40×40 cm berisi media tanam di atas tatakan Hebel telah terpasang penuh lengkap stick drip di setiap polybag, disertai unit lampu LED Hannochs 10W siap pasang.'
      }
    ],
    nextSteps: [
      'Penuntasan hamparan rumput sintetis seluruh lorong & pemasangan titik lampu penerangan LED 10W beserta pengujian kelistrikan panel (Paket 4.1 & 9.1–9.4).',
      'Penempatan 3 unit kolam D2 di bawah kanopi belakang UV & uji kalibrasi menyeluruh sensor/otomasi Web IoT smartfarmpln.com.',
      'Pelaksanaan pengerjaan paving block tambahan & instalasi toren air sesuai titik survey di bawah Working Permit #0030 (berlaku s.d. 08 Des 2026) menuju BAST 100%.'
    ],
    localPurchases: [
      'Polybag 40×40 cm & Media Tanam Cocopeat (Terpasang Penuh 4 Lajur)',
      'Karpet Rumput Sintetis Eksekutif (Terpasang di Lorong Meja NFT)',
      'Pipa PVC 3 Inch Drainase Talang & Fitting',
      'Lampu LED Hannochs Genius 10W & Nutrisi Hidroponik Siap Pakai'
    ],
    logisticsNotes: 'Seluruh 4 lajur polybag drip, meja NFT lengkap sayuran, menara vertikultur, dan komponen lampu LED berada di site; material paving block tambahan sudah siap di depan greenhouse.',
    approvalNotes: 'Working Permit Perpanjangan Inspekta No. 0030/70201000/XI/2026 AKTIF (berlaku 25 Nov–08 Des 2026 pukul 08.00–22.00 WIB, 18 personel terdaftar) untuk menuntaskan finishing akhir & pekerjaan paving block tambahan.',
    briefingSchedule: 'Apel & Briefing K3 pagi pukul 08.52 WIB diikuti 6 personel (2 pengawas HSE & 4 pekerja lapangan) untuk koordinasi finishing rumput sintetis, drainase, dan uji hidroponik.'
  }
];
