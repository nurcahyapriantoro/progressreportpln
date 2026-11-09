import { WorkPackageCategory, SCurveDataPoint } from '../types/project';

// Weight ratios based on Excel data:
// Civil: Rp 157,000,000 / Rp 313,000,000 = 50.1597% (~50.16%)
// IoT & Hydroponics: Rp 156,000,000 / Rp 313,000,000 = 49.8403% (~49.84%)
export const CIVIL_WEIGHT_RATIO = 0.5016;
export const IOT_WEIGHT_RATIO = 0.4984;

export const WORK_PACKAGES: WorkPackageCategory[] = [
  // --- LINGKUP SIPIL (1 - 10) ---
  {
    id: 'pkg-1',
    categoryNo: 1,
    name: 'Pek. Persiapan',
    scope: 'sipil',
    totalWeightPct: 8.58,
    overallProjectWeightPct: 4.30,
    subItems: [
      { id: '1.1', no: '1.1', description: 'Mobilisasi Material, Pekerja dan Alat Kerja', volume: 1, unit: 'ls', weightPct: 7.02, durationDays: 1, startDay: 1, endDay: 1 },
      { id: '1.2', no: '1.2', description: 'Pek. Pembersihan Lahan & Keamanan', volume: 232, unit: 'm²', weightPct: 0.74, durationDays: 1, startDay: 1, endDay: 1 },
      { id: '1.3', no: '1.3', description: 'Penerapan SMK3 & Keselamatan Kerja', volume: 1, unit: 'set', weightPct: 0.31, durationDays: 1, startDay: 1, endDay: 1 },
      { id: '1.4', no: '1.4', description: 'Gambar Shopdrawing & As-Built Drawing', volume: 1, unit: 'set', weightPct: 0.31, durationDays: 1, startDay: 1, endDay: 1 },
      { id: '1.5', no: '1.5', description: 'Sewa Scaffolding Kerja', volume: 6, unit: 'set', weightPct: 0.21, durationDays: 1, startDay: 1, endDay: 1 },
    ]
  },
  {
    id: 'pkg-2',
    categoryNo: 2,
    name: 'Pek. Tanah',
    scope: 'sipil',
    totalWeightPct: 1.40,
    overallProjectWeightPct: 0.70,
    subItems: [
      { id: '2.1', no: '2.1', description: 'Pek. Perataan Lahan Tapak Greenhouse', volume: 232, unit: 'm²', weightPct: 1.40, durationDays: 1, startDay: 2, endDay: 2 }
    ]
  },
  {
    id: 'pkg-3',
    categoryNo: 3,
    name: 'Pek. Pondasi Tiang & Dinding',
    scope: 'sipil',
    totalWeightPct: 17.19,
    overallProjectWeightPct: 8.62,
    subItems: [
      { id: '3.1', no: '3.1', description: 'Penggalian Tanah Biasa', volume: 0.93, unit: 'm³', weightPct: 0.09, durationDays: 1, startDay: 2, endDay: 2 },
      { id: '3.2', no: '3.2', description: 'Urug Tanah Kembali', volume: 0.28, unit: 'm³', weightPct: 0.01, durationDays: 1, startDay: 3, endDay: 3 },
      { id: '3.3', no: '3.3', description: 'Pemasangan Pondasi Batu Kali', volume: 0.81, unit: 'm³', weightPct: 0.74, durationDays: 2, startDay: 3, endDay: 4 },
      { id: '3.4', no: '3.4', description: 'Rabatan Lantai untuk Pedestal / Dasar Dinding', volume: 1.20, unit: 'm³', weightPct: 1.14, durationDays: 2, startDay: 3, endDay: 4 },
      { id: '3.5', no: '3.5', description: 'Pemasangan Angkur Join Besi Utama', volume: 18, unit: 'titik', weightPct: 1.65, durationDays: 1, startDay: 3, endDay: 3 },
      { id: '3.6', no: '3.6', description: 'Pemasangan Dinding Bata Ringan (t: 60 cm)', volume: 48, unit: 'm²', weightPct: 4.69, durationDays: 3, startDay: 4, endDay: 6 },
      { id: '3.7', no: '3.7', description: 'Plester Dinding Keliling', volume: 96, unit: 'm²', weightPct: 3.52, durationDays: 3, startDay: 5, endDay: 7 },
      { id: '3.8', no: '3.8', description: 'Acian Dinding', volume: 96, unit: 'm²', weightPct: 1.77, durationDays: 3, startDay: 6, endDay: 8 },
      { id: '3.9', no: '3.9', description: 'Pengecatan Dinding Eksterior', volume: 96, unit: 'm²', weightPct: 3.58, durationDays: 1, startDay: 8, endDay: 8 },
    ]
  },
  {
    id: 'pkg-4',
    categoryNo: 4,
    name: 'Pek. Lantai',
    scope: 'sipil',
    totalWeightPct: 11.46,
    overallProjectWeightPct: 5.75,
    subItems: [
      { id: '4.1', no: '4.1', description: 'Pemasangan Rumput Sintetis Eksekutif', volume: 125, unit: 'm²', weightPct: 7.64, durationDays: 1, startDay: 13, endDay: 13 },
      { id: '4.2', no: '4.2', description: 'Pemasangan Lantai Weedmat Anti Gulma', volume: 125, unit: 'm²', weightPct: 3.82, durationDays: 1, startDay: 13, endDay: 13 },
    ]
  },
  {
    id: 'pkg-5',
    categoryNo: 5,
    name: 'Pek. Kerangka Bangunan',
    scope: 'sipil',
    totalWeightPct: 31.16,
    overallProjectWeightPct: 15.63,
    subItems: [
      { id: '5.1', no: '5.1', description: 'Pek. Kerangka Tiang Utama Hollow Galvanis 40x60', volume: 18, unit: 'tiang', weightPct: 4.12, durationDays: 5, startDay: 2, endDay: 6 },
      { id: '5.2', no: '5.2', description: 'Pek. Kerangka Lengkungan Atap Arch Roof Galvanis', volume: 200, unit: 'm²', weightPct: 22.04, durationDays: 7, startDay: 2, endDay: 8 },
      { id: '5.3', no: '5.3', description: 'Angkur Join Besi Konektor', volume: 1, unit: 'ls', weightPct: 0.91, durationDays: 1, startDay: 2, endDay: 2 },
      { id: '5.4', no: '5.4', description: 'Pek. Talang Air Seng/Galvanis', volume: 50, unit: 'm', weightPct: 3.20, durationDays: 2, startDay: 9, endDay: 10 },
      { id: '5.5', no: '5.5', description: 'Pek. Pipa Turun Drainase Talang', volume: 8, unit: 'm', weightPct: 0.59, durationDays: 1, startDay: 10, endDay: 10 },
      { id: '5.6', no: '5.6', description: 'Knee dan Join Pipa Talang', volume: 1, unit: 'ls', weightPct: 0.30, durationDays: 1, startDay: 10, endDay: 10 },
    ]
  },
  {
    id: 'pkg-6',
    categoryNo: 6,
    name: 'Pek. Penutup Atap & Dinding Insect Net',
    scope: 'sipil',
    totalWeightPct: 18.28,
    overallProjectWeightPct: 9.17,
    subItems: [
      { id: '6.1', no: '6.1', description: 'Pemasangan Plastik UV Atap 200 Micron', volume: 200, unit: 'm²', weightPct: 13.44, durationDays: 2, startDay: 11, endDay: 12 },
      { id: '6.2', no: '6.2', description: 'Pemasangan Dinding Insect Net Mesh 50', volume: 197.2, unit: 'm²', weightPct: 4.84, durationDays: 2, startDay: 11, endDay: 12 },
    ]
  },
  {
    id: 'pkg-7',
    categoryNo: 7,
    name: 'Pek. Pintu',
    scope: 'sipil',
    totalWeightPct: 2.75,
    overallProjectWeightPct: 1.38,
    subItems: [
      { id: '7.1', no: '7.1', description: 'Pintu Masuk Luar Utama', volume: 1, unit: 'unit', weightPct: 0.92, durationDays: 1, startDay: 9, endDay: 9 },
      { id: '7.2', no: '7.2', description: 'Pintu Ruang Sterilisasi', volume: 1, unit: 'unit', weightPct: 0.92, durationDays: 1, startDay: 9, endDay: 9 },
      { id: '7.3', no: '7.3', description: 'Pintu Akses ke Arah Kolam Belakang', volume: 1, unit: 'unit', weightPct: 0.92, durationDays: 1, startDay: 9, endDay: 9 },
    ]
  },
  {
    id: 'pkg-8',
    categoryNo: 8,
    name: 'Pek. Dinding Ruang Kontrol',
    scope: 'sipil',
    totalWeightPct: 1.83,
    overallProjectWeightPct: 0.92,
    subItems: [
      { id: '8.1', no: '8.1', description: 'Pemasangan Dinding Insect Net Khusus Ruang Kontrol', volume: 74.8, unit: 'm²', weightPct: 1.83, durationDays: 1, startDay: 13, endDay: 13 }
    ]
  },
  {
    id: 'pkg-9',
    categoryNo: 9,
    name: 'Instalasi Lampu & Kelistrikan',
    scope: 'sipil',
    totalWeightPct: 4.10,
    overallProjectWeightPct: 2.06,
    subItems: [
      { id: '9.1', no: '9.1', description: 'Pemasangan Titik Lampu Penerangan', volume: 5, unit: 'unit', weightPct: 0.29, durationDays: 1, startDay: 14, endDay: 14 },
      { id: '9.2', no: '9.2', description: 'Saklar Lampu', volume: 3, unit: 'unit', weightPct: 0.12, durationDays: 1, startDay: 14, endDay: 14 },
      { id: '9.3', no: '9.3', description: 'Panel Distribusi Listrik', volume: 1, unit: 'unit', weightPct: 3.36, durationDays: 1, startDay: 14, endDay: 14 },
      { id: '9.4', no: '9.4', description: 'Instalasi Jalur Kabel Kelistrikan', volume: 5, unit: 'titik', weightPct: 0.34, durationDays: 1, startDay: 14, endDay: 14 },
    ]
  },
  {
    id: 'pkg-10',
    categoryNo: 10,
    name: 'Instalasi Kipas Sirkulasi',
    scope: 'sipil',
    totalWeightPct: 3.24,
    overallProjectWeightPct: 1.63,
    subItems: [
      { id: '10.1', no: '10.1', description: 'Kipas Sirkulasi Udara Drum Fan', volume: 4, unit: 'unit', weightPct: 2.93, durationDays: 1, startDay: 15, endDay: 15 },
      { id: '10.2', no: '10.2', description: 'Saklar Kipas', volume: 1, unit: 'unit', weightPct: 0.04, durationDays: 1, startDay: 15, endDay: 15 },
      { id: '10.3', no: '10.3', description: 'Instalasi Pemasangan Kipas Drum Fan', volume: 4, unit: 'unit', weightPct: 0.27, durationDays: 2, startDay: 15, endDay: 16 },
    ]
  },

  // --- LINGKUP IOT & HIDROPONIK (11 - 17) ---
  {
    id: 'pkg-11',
    categoryNo: 11,
    name: 'Mobilisasi Khusus IoT & Hidroponik',
    scope: 'iot_hidroponik',
    totalWeightPct: 6.41,
    overallProjectWeightPct: 3.19,
    subItems: [
      { id: '11.1', no: '11.1', description: 'Mobilisasi Khusus Material, Tenaga Ahli, & Alat Kerja IoT-Hidroponik', volume: 1, unit: 'set', weightPct: 6.41, durationDays: 1, startDay: 1, endDay: 1 }
    ]
  },
  {
    id: 'pkg-12',
    categoryNo: 12,
    name: 'Pek. Perpipaan & Pompa Sirkulasi',
    scope: 'iot_hidroponik',
    totalWeightPct: 8.94,
    overallProjectWeightPct: 4.46,
    subItems: [
      { id: '12.1', no: '12.1', description: 'Pompa Pendorong & Fitting Jalur Drip', volume: 1, unit: 'set', weightPct: 1.92, durationDays: 3, startDay: 1, endDay: 3 },
      { id: '12.2', no: '12.2', description: 'Pompa Pendorong & Fitting Jalur NFT', volume: 1, unit: 'set', weightPct: 1.92, durationDays: 4, startDay: 1, endDay: 4 },
      { id: '12.3', no: '12.3', description: 'Pompa & Fitting Jalur Vertical Farming', volume: 1, unit: 'set', weightPct: 0.61, durationDays: 1, startDay: 1, endDay: 1 },
      { id: '12.4', no: '12.4', description: 'Instalasi Jalur Pemipaan Distribusi Nutrisi', volume: 2, unit: 'set', weightPct: 4.49, durationDays: 5, startDay: 1, endDay: 5 },
    ]
  },
  {
    id: 'pkg-13',
    categoryNo: 13,
    name: 'Pek. Panel & Smart IoT BRAIN',
    scope: 'iot_hidroponik',
    totalWeightPct: 38.54,
    overallProjectWeightPct: 19.21,
    subItems: [
      { id: '13.1', no: '13.1', description: 'Sensor Mikroklimat (Suhu, Kelembapan, Intensitas Cahaya)', volume: 1, unit: 'set', weightPct: 4.81, durationDays: 2, startDay: 4, endDay: 5 },
      { id: '13.2', no: '13.2', description: 'Sensor Nutrisi Otomatis (PPM / EC & pH)', volume: 1, unit: 'set', weightPct: 16.03, durationDays: 4, startDay: 4, endDay: 7 },
      { id: '13.3', no: '13.3', description: 'Mounting & Monitor Display 24 Inch Touchscreen Ruang Kontrol', volume: 1, unit: 'set', weightPct: 10.33, durationDays: 3, startDay: 4, endDay: 6 },
      { id: '13.4', no: '13.4', description: 'Prosesor Komputasi Kontroler Core i3 / 128 GB SSD', volume: 1, unit: 'set', weightPct: 2.56, durationDays: 1, startDay: 6, endDay: 6 },
      { id: '13.5', no: '13.5', description: 'Panel Kontrol Listrik Dual Mode (Manual & Smart IoT)', volume: 1, unit: 'set', weightPct: 4.81, durationDays: 3, startDay: 6, endDay: 8 },
    ]
  },
  {
    id: 'pkg-14',
    categoryNo: 14,
    name: 'Pek. Sistem Irigasi Drip (Tetes)',
    scope: 'iot_hidroponik',
    totalWeightPct: 15.65,
    overallProjectWeightPct: 7.80,
    subItems: [
      { id: '14.1', no: '14.1', description: 'Sistem Drip Irrigation Komplit & Stick Drip', volume: 100, unit: 'm²', weightPct: 11.86, durationDays: 2, startDay: 6, endDay: 7 },
      { id: '14.2', no: '14.2', description: 'Tatakan Hebel & Polybag Tanam Ukuran 40x40', volume: 15, unit: 'm', weightPct: 1.54, durationDays: 2, startDay: 6, endDay: 7 },
      { id: '14.3', no: '14.3', description: 'Tandon Air Khusus Irigasi Drip', volume: 1, unit: 'set', weightPct: 2.24, durationDays: 1, startDay: 7, endDay: 7 },
    ]
  },
  {
    id: 'pkg-15',
    categoryNo: 15,
    name: 'Pek. Sistem Hidroponik NFT',
    scope: 'iot_hidroponik',
    totalWeightPct: 17.73,
    overallProjectWeightPct: 8.84,
    subItems: [
      { id: '15.1', no: '15.1', description: 'Modul Meja Tanam & Talang Gully NFT', volume: 100, unit: 'm²', weightPct: 11.86, durationDays: 4, startDay: 6, endDay: 9 },
      { id: '15.2', no: '15.2', description: 'Galian Bak Penampungan Air Tandon NFT', volume: 1, unit: 'set', weightPct: 2.24, durationDays: 2, startDay: 6, endDay: 7 },
      { id: '15.3', no: '15.3', description: 'Dinding Bata Ringan Dudukan Tandon NFT', volume: 10.5, unit: 'm²', weightPct: 1.08, durationDays: 1, startDay: 8, endDay: 8 },
      { id: '15.4', no: '15.4', description: 'Rabatan Dasar Lantai Tandon NFT', volume: 0.30, unit: 'm³', weightPct: 0.30, durationDays: 1, startDay: 8, endDay: 8 },
      { id: '15.5', no: '15.5', description: 'Tandon Air Utama Sirkulasi NFT', volume: 1, unit: 'set', weightPct: 2.24, durationDays: 1, startDay: 8, endDay: 8 },
    ]
  },
  {
    id: 'pkg-16',
    categoryNo: 16,
    name: 'Pek. Vertical Farming Hidroponik',
    scope: 'iot_hidroponik',
    totalWeightPct: 3.91,
    overallProjectWeightPct: 1.95,
    subItems: [
      { id: '16.1', no: '16.1', description: 'Modul Menara Vertikal Farming Hidroponik (3 Tower)', volume: 1, unit: 'set', weightPct: 1.60, durationDays: 2, startDay: 9, endDay: 10 },
      { id: '16.2', no: '16.2', description: 'Tandon Air Nutrisi Vertikal Farming', volume: 1, unit: 'set', weightPct: 0.54, durationDays: 1, startDay: 9, endDay: 9 },
      { id: '16.3', no: '16.3', description: 'Pemipaan, Fitting & Nozzle Vertikal Farming', volume: 1, unit: 'set', weightPct: 0.16, durationDays: 1, startDay: 9, endDay: 9 },
      { id: '16.4', no: '16.4', description: 'Assembling & Uji Aliran Vertikal Farming', volume: 1, unit: 'set', weightPct: 1.60, durationDays: 1, startDay: 9, endDay: 9 },
    ]
  },
  {
    id: 'pkg-17',
    categoryNo: 17,
    name: 'Pek. Kolam Bulat & Kanopi Pelindung',
    scope: 'iot_hidroponik',
    totalWeightPct: 8.83,
    overallProjectWeightPct: 4.40,
    subItems: [
      { id: '17.1', no: '17.1', description: 'Penggalian Tanah Kolam Bulat D2', volume: 0.16, unit: 'm³', weightPct: 0.02, durationDays: 1, startDay: 10, endDay: 10 },
      { id: '17.2', no: '17.2', description: 'Urug Kembali & Pemadatan', volume: 0.05, unit: 'm³', weightPct: 0.01, durationDays: 1, startDay: 10, endDay: 10 },
      { id: '17.3', no: '17.3', description: 'Pondasi Batu Kali Kolam & Dudukan Kanopi', volume: 0.14, unit: 'm³', weightPct: 0.13, durationDays: 1, startDay: 10, endDay: 10 },
      { id: '17.4', no: '17.4', description: 'Rabatan Pedestal Tiang Kanopi Kolam', volume: 0.03, unit: 'm³', weightPct: 0.03, durationDays: 1, startDay: 10, endDay: 10 },
      { id: '17.5', no: '17.5', description: 'Kerangka Tiang Utama Kanopi Kolam (3 Tiang)', volume: 3, unit: 'tiang', weightPct: 0.72, durationDays: 1, startDay: 10, endDay: 10 },
      { id: '17.6', no: '17.6', description: 'Rangka Lengkung Kanopi Kolam', volume: 32, unit: 'm²', weightPct: 5.67, durationDays: 2, startDay: 11, endDay: 12 },
      { id: '17.7', no: '17.7', description: 'Plastik UV Atap Kanopi Kolam', volume: 32, unit: 'm²', weightPct: 2.26, durationDays: 1, startDay: 12, endDay: 12 },
    ]
  }
];

// 15 Bi-daily reporting intervals from 01 Nov 2026 to 28 Nov 2026
// Mapped cumulative plans aligning with Excel S-Curve planned progressions
export const SCURVE_DATA: SCurveDataPoint[] = [
  {
    date: '2026-11-01',
    label: '01 Nov',
    dayIndex: 1,
    planCivilCumulative: 8.58,
    actualCivilCumulative: 3.00,
    planIotCumulative: 6.41,
    actualIotCumulative: 3.00,
    planCombinedCumulative: 7.50,
    actualCombinedCumulative: 3.00
  },
  {
    date: '2026-11-03',
    label: '03 Nov',
    dayIndex: 3,
    planCivilCumulative: 18.25,
    actualCivilCumulative: 6.50,
    planIotCumulative: 11.06,
    actualIotCumulative: 6.50,
    planCombinedCumulative: 14.67,
    actualCombinedCumulative: 6.50
  },
  {
    date: '2026-11-05',
    label: '05 Nov',
    dayIndex: 5,
    planCivilCumulative: 24.77,
    actualCivilCumulative: 10.00,
    planIotCumulative: 13.08,
    actualIotCumulative: 10.00,
    planCombinedCumulative: 18.94,
    actualCombinedCumulative: 10.00
  },
  {
    date: '2026-11-07',
    label: '07 Nov',
    dayIndex: 7,
    planCivilCumulative: 34.72,
    actualCivilCumulative: 14.20,
    planIotCumulative: 24.31,
    actualIotCumulative: 13.80,
    planCombinedCumulative: 29.53,
    actualCombinedCumulative: 14.00
  },
  {
    date: '2026-11-09',
    label: '09 Nov',
    dayIndex: 9,
    planCivilCumulative: 42.02,
    actualCivilCumulative: null,
    planIotCumulative: 35.06,
    actualIotCumulative: null,
    planCombinedCumulative: 38.55,
    actualCombinedCumulative: null
  },
  {
    date: '2026-11-11',
    label: '11 Nov',
    dayIndex: 11,
    planCivilCumulative: 49.50,
    actualCivilCumulative: null,
    planIotCumulative: 48.00,
    actualIotCumulative: null,
    planCombinedCumulative: 48.75,
    actualCombinedCumulative: null
  },
  {
    date: '2026-11-13',
    label: '13 Nov',
    dayIndex: 13,
    planCivilCumulative: 56.40,
    actualCivilCumulative: null,
    planIotCumulative: 57.47,
    actualIotCumulative: null,
    planCombinedCumulative: 56.93,
    actualCombinedCumulative: null
  },
  {
    date: '2026-11-15',
    label: '15 Nov',
    dayIndex: 15,
    planCivilCumulative: 63.80,
    actualCivilCumulative: null,
    planIotCumulative: 68.20,
    actualIotCumulative: null,
    planCombinedCumulative: 65.99,
    actualCombinedCumulative: null
  },
  {
    date: '2026-11-17',
    label: '17 Nov',
    dayIndex: 17,
    planCivilCumulative: 72.00,
    actualCivilCumulative: null,
    planIotCumulative: 76.11,
    actualIotCumulative: null,
    planCombinedCumulative: 74.05,
    actualCombinedCumulative: null
  },
  {
    date: '2026-11-19',
    label: '19 Nov',
    dayIndex: 19,
    planCivilCumulative: 80.50,
    actualCivilCumulative: null,
    planIotCumulative: 84.30,
    actualIotCumulative: null,
    planCombinedCumulative: 82.39,
    actualCombinedCumulative: null
  },
  {
    date: '2026-11-21',
    label: '21 Nov',
    dayIndex: 21,
    planCivilCumulative: 88.00,
    actualCivilCumulative: null,
    planIotCumulative: 90.37,
    actualIotCumulative: null,
    planCombinedCumulative: 89.18,
    actualCombinedCumulative: null
  },
  {
    date: '2026-11-23',
    label: '23 Nov',
    dayIndex: 23,
    planCivilCumulative: 94.00,
    actualCivilCumulative: null,
    planIotCumulative: 94.50,
    actualIotCumulative: null,
    planCombinedCumulative: 94.25,
    actualCombinedCumulative: null
  },
  {
    date: '2026-11-25',
    label: '25 Nov',
    dayIndex: 25,
    planCivilCumulative: 97.50,
    actualCivilCumulative: null,
    planIotCumulative: 97.50,
    actualIotCumulative: null,
    planCombinedCumulative: 97.50,
    actualCombinedCumulative: null
  },
  {
    date: '2026-11-27',
    label: '27 Nov',
    dayIndex: 27,
    planCivilCumulative: 99.20,
    actualCivilCumulative: null,
    planIotCumulative: 99.00,
    actualIotCumulative: null,
    planCombinedCumulative: 99.10,
    actualCombinedCumulative: null
  },
  {
    date: '2026-11-28',
    label: '28 Nov',
    dayIndex: 28,
    planCivilCumulative: 100.00,
    actualCivilCumulative: null,
    planIotCumulative: 100.00,
    actualIotCumulative: null,
    planCombinedCumulative: 100.00,
    actualCombinedCumulative: null
  }
];
