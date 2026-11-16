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
  // 14. LAPORAN HARIAN 16 NOVEMBER 2026 (TERBARU & AKTIF)
  // =========================================================================
  {
    id: 'report-2026-11-16',
    cycleNumber: 14,
    dateStr: '2026-11-16',
    displayDate: '16 November 2026',
    shortDate: '16 Nov',
    isCompleted: true,
    isLatestActive: true,
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
  // 15. FORWARD MILESTONE: 17 NOVEMBER 2026 (NAIK RANGKA & MEKANIKAL)
  // =========================================================================
  {
    id: 'report-2026-11-17',
    cycleNumber: 15,
    dateStr: '2026-11-17',
    displayDate: '17 November 2026',
    shortDate: '17 Nov',
    isCompleted: false,
    isLatestActive: false,
    location: 'Site PLN UPDL Palembang',
    pipelineStage: 'iot_bast',
    pipelineStageLabel: '5. Integrasi Hidroponik & Smart IoT BRAIN',
    cumulativeProgress: 74.0,
    progressDelta: 16.0,
    civilProgress: 72.0,
    iotProgress: 76.1,
    status: 'ON-SCHEDULE',
    executiveSummary: 'Penaikan rangka struktur utama dan busur kubah atap 8x25m, lanjutan pabrikasi talang gully NFT & penyelesaian bak tandon, instalasi pemipaan manifold drip & NFT, serta pemasangan unit drum fan sirkulasi udara.',
    photos: [],
    nextSteps: [
      'Pemasangan plastik UV atap 200 micron, dinding insect net, dan dinding bata hebel keliling.',
      'Pemasangan display touchscreen 24", prosesor Core i3, sensor suhu/RH/lux & EC/PPM nutrisi.',
      'Penyelesaian kanopi kolam bulat pelindung UV.'
    ]
  },

  // =========================================================================
  // 16. FORWARD MILESTONE: 19 NOVEMBER 2026 (INTEGRASI PANEL IOT & SENSOR)
  // =========================================================================
  {
    id: 'report-2026-11-19',
    cycleNumber: 16,
    dateStr: '2026-11-19',
    displayDate: '19 November 2026',
    shortDate: '19 Nov',
    isCompleted: false,
    isLatestActive: false,
    location: 'Site PLN UPDL Palembang',
    pipelineStage: 'iot_bast',
    pipelineStageLabel: '5. Integrasi Hidroponik & Smart IoT BRAIN',
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

  // =========================================================================
  // 17. FORWARD MILESTONE: 21 NOVEMBER 2026 (COMMISSIONING FERTIGASI)
  // =========================================================================
  {
    id: 'report-2026-11-21',
    cycleNumber: 17,
    dateStr: '2026-11-21',
    displayDate: '21 November 2026',
    shortDate: '21 Nov',
    isCompleted: false,
    isLatestActive: false,
    location: 'Site PLN UPDL Palembang',
    pipelineStage: 'iot_bast',
    pipelineStageLabel: '5. Integrasi Hidroponik & Smart IoT BRAIN',
    cumulativeProgress: 89.2,
    progressDelta: 6.8,
    civilProgress: 88.0,
    iotProgress: 90.4,
    status: 'ON-SCHEDULE',
    executiveSummary: 'Seluruh sistem mekanikal, elektrikal, perpipaan, dan kanopi kolam bulat tuntas terpasang. Sistem IoT telah membaca data suhu, intensitas lux, dan PPM secara real-time.',
    photos: [],
    nextSteps: [
      'Uji coba otomasi dosing pupuk A&B otomatis berbasis target PPM.',
      'Kalibrasi relay pompa dan aktuasi ventilasi drum fan.',
      'Penyusunan draft laporan Berita Acara Serah Terima (BAST).'
    ]
  },

  // =========================================================================
  // 18. FORWARD MILESTONE: 23 NOVEMBER 2026 (TESTING END-TO-END)
  // =========================================================================
  {
    id: 'report-2026-11-23',
    cycleNumber: 18,
    dateStr: '2026-11-23',
    displayDate: '23 November 2026',
    shortDate: '23 Nov',
    isCompleted: false,
    isLatestActive: false,
    location: 'Site PLN UPDL Palembang',
    pipelineStage: 'iot_bast',
    pipelineStageLabel: '5. Integrasi Hidroponik & Smart IoT BRAIN',
    cumulativeProgress: 94.2,
    progressDelta: 5.0,
    civilProgress: 94.0,
    iotProgress: 94.5,
    status: 'ON-SCHEDULE',
    executiveSummary: 'Uji performa 48 jam nonstop otomasi irigasi fertigasi, stabilitas koneksi cloud IoT dashboard, dan penyelesaian instalasi kolam bioflok bulat D2 beserta kanopi pelindung.',
    photos: [],
    nextSteps: [
      'Final touch-up pengecatan dan pembersihan area greenhouse.',
      'Penyusunan as-built drawing final dan manual SOP pengoperasian IoT.',
      'Persiapan serah terima parsial dan demonstrasi sistem kepada perwakilan PLN.'
    ]
  },

  // =========================================================================
  // 19. FORWARD MILESTONE: 25 NOVEMBER 2026 (TRAINING OPERATOR & SOP)
  // =========================================================================
  {
    id: 'report-2026-11-25',
    cycleNumber: 19,
    dateStr: '2026-11-25',
    displayDate: '25 November 2026',
    shortDate: '25 Nov',
    isCompleted: false,
    isLatestActive: false,
    location: 'Site PLN UPDL Palembang',
    pipelineStage: 'iot_bast',
    pipelineStageLabel: '5. Integrasi Hidroponik & Smart IoT BRAIN',
    cumulativeProgress: 97.5,
    progressDelta: 3.3,
    civilProgress: 97.0,
    iotProgress: 98.0,
    status: 'ON-SCHEDULE',
    executiveSummary: 'Pelatihan teknis pengoperasian sistem Smart Greenhouse kepada perwakilan PLN UPDL Palembang, serah terima buku panduan pemeliharaan, serta penanaman bibit perdana pada meja NFT.',
    photos: [],
    nextSteps: [
      'Inspeksi akhir bersama (joint inspection) tim teknis BRAIN IPB dan PLN.',
      'Verifikasi kelengkapan administrasi BAST I (100%).',
      'Penandatanganan Berita Acara Serah Terima pekerjaan.'
    ]
  },

  // =========================================================================
  // 20. FORWARD MILESTONE: 28 NOVEMBER 2026 (BAST 100% SELESAI)
  // =========================================================================
  {
    id: 'report-2026-11-28',
    cycleNumber: 20,
    dateStr: '2026-11-28',
    displayDate: '28 November 2026',
    shortDate: '28 Nov',
    isCompleted: false,
    isLatestActive: false,
    location: 'Site PLN UPDL Palembang',
    pipelineStage: 'iot_bast',
    pipelineStageLabel: '5. Integrasi Hidroponik & Smart IoT BRAIN',
    cumulativeProgress: 100.0,
    progressDelta: 2.5,
    civilProgress: 100.0,
    iotProgress: 100.0,
    status: 'ON-SCHEDULE',
    executiveSummary: 'Seluruh 17 paket pekerjaan Pembangunan Smart Greenhouse PLN UPDL Palembang telah rampung 100%. Fasilitas siap dimanfaatkan secara optimal untuk program pembelajaran purnabakti dan budidaya tanaman presisi tinggi.',
    photos: [],
    nextSteps: [
      'Penandatanganan resmi Berita Acara Serah Terima (BAST) 100%.',
      'Memasuki masa pemeliharaan fasilitas selama 90 hari kalender.',
      'Monitoring berkala performa sistem IoT dan fertigasi tanaman.'
    ]
  }
];
