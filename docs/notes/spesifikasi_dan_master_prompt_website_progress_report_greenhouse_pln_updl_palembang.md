# DOKUMEN SPESIFIKASI & MASTER PROMPT AI AGENT (VERCEL DEPLOYMENT READY)
## Website Executive Progress Report: Pembangunan Smart Greenhouse PLN UPDL Palembang
**Pelaksana Pekerjaan:** BRAIN – IPB University  
**Pemilik Pekerjaan (User):** PT PLN (Persero) UPDL Palembang & GSD  
**Nilai Total Proyek:** $\pm \text{Rp } 400.000.000$ (Lingkup Sipil, IoT & Sistem Hidroponik)  
**Target Penyelesaian Akhir:** 28 November 2026  
**Siklus Pelaporan:** Setiap 2 Hari (Dilengkapi Foto, Narasi Teknis, Kurva S, dan Export PDF 1 Lembar)  
**Platform Hosting:** **Vercel** (Static SPA / Vite + React + Tailwind CSS)

---

## 1. KONSEP & TUJUAN DESAIN EKSEKUTIF

Website ini dirancang sebagai **Static Executive Monitoring Portal** berbasis **Vercel** yang *mobile-first* (sangat cepat, ringan, dan responsif saat dibuka melalui tautan WhatsApp di smartphone oleh **Manager** maupun **General Manager PLN**).

### Prinsip Utama ("3-Second Executive Rule"):
Begitu Manager/GM PLN mengklik tautan Vercel (misal: `https://progress-gh-pln-palembang.vercel.app`) dari WhatsApp tanpa perlu login, dalam **3 detik pertama** langsung terlihat:
1. **Persentase Progres Total Saat Ini** (beserta rincian % Sipil dan % IoT-Hidroponik).
2. **Hitung Mundur (Countdown) & Target Selesai: 28 November 2026** beserta status *On-Track*.
3. **Status Posisi Pekerjaan Saat Ini** (Misal: *Tahap Pra-Fabrikasi Modul Knock-Down di Workshop Depok $\rightarrow$ Persiapan Kirim ke Palembang*).
4. **Pemilih Tanggal Laporan 2 Harian (Interactive Date Selector):** Tombol *pills* horizontal yang bisa digeser (*swipe*) untuk memilih tanggal laporan (`01 Nov`, `03 Nov`, **`05 Nov`**, `07 Nov`, ..., s.d. `28 Nov 2026`) dan melihat foto + narasi progres pada hari tersebut.

---

## 2. IDENTITAS VISUAL & TEMA WARNA (IPB UNIVERSITY x PLN)

Menggabungkan kewibawaan akademik/inovasi **IPB University (BRAIN)** dan identitas korporat **PT PLN (Persero)**:

* **Primary Brand (IPB Deep Navy Blue):** `#003366` / `#0A2540` (Digunakan pada Header utama, judul seksi, dan aksen kartu eksekutif).
* **Secondary Brand (PLN Corporate Electric Cyan):** `#00A2E9` / `#0284C7` (Digunakan pada grafik Kurva S aktual, progress bar, tombol aktif, dan badge lokasi).
* **Accent Highlight (PLN Energy Yellow & Safety Green):** `#FFD100` (Aksen *milestone* penting/target 28 Nov) & `#10B981` (Status *On-Schedule* / Selesai).
* **Background & Surface:** `#F8FAFC` (Slate White bersih) dengan kartu putih `#FFFFFF`, bayangan lembut (`shadow-sm`), dan border halus `#E2E8F0`.
* **Tipografi:** `Plus Jakarta Sans` atau `Inter` — bersih, modern, dan angka tabel bersifat *tabular-nums* agar sejajar rapi.
* **Header Triple-Logo:** Menampilkan secara berdampingan **Logo PT PLN (Persero)**, **Logo IPB University**, dan **Logo BRAIN IPB** di bagian navigasi atas serta pada hasil cetakan PDF.

---

## 3. IDE FITUR TAMBAHAN (VALUE-ADD UNTUK MANAGER & GM PLN)

1. **WhatsApp Executive Link Preview (OpenGraph Meta Tags untuk Vercel):**
   Saat link Vercel dibagikan ke Grup WhatsApp PLN & GSD, otomatis muncul kartu pratinjau (*thumbnail*) bergambar **Desain 3D Smart Greenhouse PLN UPDL Palembang** dengan judul *"Portal Monitoring Progres Smart Greenhouse PLN UPDL Palembang - BRAIN IPB"*.
2. **Logistics & Fabrication Pipeline Tracker (Depok $\rightarrow$ Palembang):**
   Mengingat saat ini (5 Nov) perakitan dilakukan secara *knock-down* di Depok, tersedia visualisasi *step-bar* 5 tahap:
   `[1. Fabrikasi Workshop Depok]` $\rightarrow$ `[2. QC & Packing Modul]` $\rightarrow$ `[3. Ekspedisi Darat/Feri]` $\rightarrow$ `[4. Erection & Sipil Palembang]` $\rightarrow$ `[5. Integrasi IoT & BAST 28 Nov]`.
3. **Galeri Perbandingan Desain 3D vs Realisasi Lapangan:**
   Seksi khusus yang menyandingkan **Gambar Render Desain 3D Greenhouse** (tampak eksterior, layout meja NFT, jalur drip melon, vertical farming, ruang kontrol IoT, dan kolam bulat berkanopi) dengan foto aktual yang sedang dikerjakan.
4. **Ringkasan Anggaran & Serapan Nilai Proyek ($\pm \text{Rp } 400\text{ Juta}$):**
   Kartu indikator nilai kontrak gabungan (Sipil + IoT & Hidroponik) beserta bobot persentase penyelesaian fisik terhadap nilai pekerjaan.
5. **Dual Kurva S Interaktif (Gabungan, Sipil, dan IoT-Hidroponik):**
   Grafik garis *Plan vs Actual* yang dapat difilter antara **Kurva S Gabungan**, **Kurva S Sipil**, dan **Kurva S IoT & Hidroponik** dengan *milestone* terkunci hingga **28 November 2026 (100%)**.
6. **Hybrid Static + Admin JSON Exporter (Khusus Hosting Statis Vercel):**
   Karena di-deploy secara statis di Vercel tanpa perlu biaya database server:
   * Di **Halaman Admin**, Anda bisa menginput foto & narasi hari terbaru, lalu langsung **Download PDF 1 Lembar** dan **Copy Teks WA** detik itu juga.
   * Tersedia tombol **"Download `reportsData.json`"** di halaman Admin sehingga Anda tinggal menimpa file JSON di GitHub/project untuk memicu *auto-deploy* Vercel dalam 15 detik agar Manager/GM PLN melihat data terbaru di web.

---

## 4. ARSITEKTUR STRUKTUR PROJECT UNTUK DEPLOYMENT VERCEL

Agar proses `git push` atau *drag-and-drop* ke **Vercel** berjalan mulus (100% *zero build error* dan gambar tampil semua di PDF), gunakan struktur direktori berikut:

```text
gh-pln-palembang-portal/
├── public/
│   ├── logos/
│   │   ├── logo-pln.png            # Logo PT PLN (Persero)
│   │   ├── logo-ipb.png            # Logo IPB University
│   │   └── logo-brain.png          # Logo BRAIN IPB
│   ├── 3d-design/
│   │   ├── render-eksterior.jpg    # Desain 3D Tampak Luar (Juga untuk OG Thumbnail WA)
│   │   ├── render-interior-nft.jpg # Desain 3D Area NFT & Drip
│   │   ├── render-iot-control.jpg  # Desain 3D Ruang Kontrol & Display 24"
│   │   └── render-kolam-kanopi.jpg # Desain 3D Kolam Bulat & Kanopi
│   └── progress/
│       ├── 2026-11-01/             # Foto progres siklus 1 Nov
│       ├── 2026-11-03/             # Foto progres siklus 3 Nov
│       └── 2026-11-05/             # Foto progres siklus 5 Nov (Workshop Depok)
│           ├── foto-1-atap.jpg
│           ├── foto-2-tiang.jpg
│           ├── foto-3-meja-nft.jpg
│           └── foto-4-tandon.jpg
├── src/
│   ├── data/
│   │   ├── progressReports.ts      # Data laporan 2 harian (01 Nov - 28 Nov 2026)
│   │   └── scurveAndTimetable.ts   # Data Kurva S Sipil, IoT-Hidroponik & 17 Lingkup RAB
│   ├── components/
│   │   ├── NavbarHeader.tsx        # Header Triple Logo (PLN - IPB - BRAIN)
│   │   ├── ExecutiveKpiCards.tsx   # 4 Kartu KPI Utama + Pipeline Depok-Palembang
│   │   ├── DateReportSelector.tsx  # Pilih Hari (Per 2 Hari) + 4 Foto + Narasi
│   │   ├── SCurveAndTimetable.tsx  # Grafik Kurva S & Tabel Time Table 28 Nov
│   │   ├── Design3DShowcase.tsx    # Galeri Desain 3D Greenhouse
│   │   ├── AdminPanelModal.tsx     # Halaman Admin (Input Laporan, Export JSON, Copy WA)
│   │   └── PdfOnePageTemplate.tsx  # Layout Cetak A4 1 Lembar Presisi untuk PLN
│   ├── App.tsx
│   └── main.tsx
├── index.html                      # Dilengkapi Meta Tag OpenGraph WhatsApp Preview
├── vercel.json                     # Konfigurasi SPA Routing & Cache Vercel
├── package.json
└── vite.config.ts
```

### Konfigurasi `vercel.json` (Wajib Ada di Root Project):
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ],
  "headers": [
    {
      "source": "/(.*).(jpg|jpeg|png|webp|svg)",
      "headers": [
        { "key": "Access-Control-Allow-Origin", "value": "*" },
        { "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }
      ]
    }
  ]
}
```
> **Catatan Penting Vercel PDF:** Header `Access-Control-Allow-Origin: *` pada `vercel.json` di atas memastikan library `html2canvas` / `html2pdf.js` di halaman Admin dapat merender foto dan logo dari folder `/public` ke dalam file PDF 1 lembar tanpa terblokir masalah CORS browser.

---

## 5. DATA ACUAN PROYEK (DITANAMKAN KE DALAM WEBSITE)

Data berikut diambil langsung dari dokumen perencanaan **RAB & Kurva S Sipil serta IoT-Hidroponik** ditambah jadwal akselerasi menuju **28 November 2026**:

### A. Lingkup Pekerjaan Sipil (Kategori 1 s.d. 10)
1. **Pek. Persiapan:** Mobilisasi material/pekerja/alat, pembersihan lahan ($232\text{ m}^2$), SMK3, *Shop Drawing & As-Built Drawing*, sewa *scaffolding* (6 set).
2. **Pek. Tanah:** Perataan lahan tapak ($232\text{ m}^2$).
3. **Pek. Pondasi Tiang & Dinding:** Galian tanah, urug kembali, pondasi batu kali, rabatan lantai pedestal, angkur join besi (18 titik), dinding bata ringan tinggi $60\text{ cm}$ ($48\text{ m}^2$), plester, acian, dan cat dinding eksterior ($96\text{ m}^2$).
4. **Pek. Lantai:** Pemasangan rumput sintetis ($125\text{ m}^2$) dan lantai *weedmat* ($125\text{ m}^2$).
5. **Pek. Kerangka Bangunan:** Kerangka tiang utama (18 tiang), kerangka lengkungan atap ($200\text{ m}^2$), angkur join besi, talang air ($50\text{ m}$), pipa turun drainase ($8\text{ m}$), *knee* & *join* pipa.
6. **Pek. Penutup Atap & Dinding:** Plastik UV atap ($200\text{ m}^2$) dan dinding *insect net* ($197,2\text{ m}^2$).
7. **Pek. Pintu:** Pintu luar (1 unit), pintu sterilisasi (1 unit), pintu ke arah kolam (1 unit).
8. **Pek. Dinding Ruang Kontrol:** Dinding *insect net* ruang kontrol ($74,8\text{ m}^2$).
9. **Instalasi Lampu & Kelistrikan:** Lampu (5 unit), saklar (3 unit), panel listrik (1 unit), beserta instalasi.
10. **Instalasi Kipas:** Kipas sirkulasi *drum fan* (4 unit), saklar kipas, beserta instalasi.

### B. Lingkup Pekerjaan IoT & Hidroponik (Kategori 11 s.d. 17)
11. **Mobilisasi Khusus:** Mobilisasi material, pekerja, dan alat kerja IoT & Hidroponik.
12. **Pek. Perpipaan & Pompa:** Pompa & fitting Drip (1 set), pompa & fitting NFT (1 set), pompa & fitting *Vertical Farming* (1 set), instalasi pemipaan (2 set).
13. **Pek. Panel & Smart IoT BRAIN:** Sensor temperatur, intensitas cahaya & kelembapan (1 set), sensor PPM nutrisi (1 set), *mounting* & *display* $24\text{ inch}$ *touchscreen* (1 set), prosesor penampil Core i3 / $128\text{ GB}$ (1 set), panel listrik manual-IoT (1 set).
14. **Pek. Irigasi Drip:** Sistem *drip irrigation* ($100\text{ m}^2$), tatakan hebel & *polybag* ($15\text{ m}$), tandon air drip (1 set).
15. **Pek. Hidroponik NFT:** Modul instalasi meja NFT ($100\text{ m}^2$), galian air tandon, dinding bata ringan tandon ($10,5\text{ m}^2$), rabatan lantai dasar tandon, tandon air NFT (1 set).
16. **Pek. Vertical Farming:** Instalasi modul *vertical farming*, tandon air, pemipaan & fitting *vertical farming*.
17. **Pek. Kolam Bulat & Kanopi Kolam:** Galian tanah, pondasi batu kali, rabatan pedestal, kerangka tiang utama kanopi (3 tiang), rangka kanopi ($32\text{ m}^2$), plastik UV atap kanopi ($32\text{ m}^2$).

---

## 6. MASTER PROMPT UNTUK AI CODING AGENT (SIAP DEPLOY KE VERCEL)

> **Cara Penggunaan:** Salin seluruh blok prompt di bawah ini dan kirimkan ke AI Coding Agent Anda (**Lovable, Bolt.new, v0 by Vercel, Cursor, atau Windsurf**) bersama lampiran gambar Desain 3D dan foto-foto progres lapangan.

```text
You are an Expert Full-Stack Web Developer and UI/UX Corporate Dashboard Designer. Build a complete, production-ready, mobile-first, static Executive Progress Report & Project Monitoring Web Application optimized for instant deployment on VERCEL (Vite + React + TypeScript + Tailwind CSS + Lucide Icons + Recharts + html2pdf.js / print-CSS).

PROJECT CONTEXT:
- PROJECT TITLE: "Pembangunan Smart Farming Greenhouse PLN UPDL Palembang"
- CLIENT / OWNER (USER): PT PLN (Persero) UPDL Palembang & GSD (Designed for direct viewing by PLN Manager and General Manager via WhatsApp link)
- EXECUTOR: BRAIN - IPB University
- TOTAL CONTRACT VALUE: ± Rp 400.000.000 (Combined Civil Construction, Smart IoT System & Hydroponics)
- START DATE: 01 November 2026
- HARD TARGET COMPLETION DATE: 28 November 2026
- REPORTING FREQUENCY: Every 2 Days (Siklus 2 Harian)

====================================================================
1. VERCEL DEPLOYMENT & TECHNICAL REQUIREMENTS
====================================================================
- Pure Static Architecture: Must build cleanly with `npm run build` (`vite build`) with zero TypeScript or bundler errors on Vercel.
- Include `vercel.json` at the root with SPA rewrite rules and CORS headers for `/public` image assets so PDF generation works seamlessly in production.
- Include WhatsApp OpenGraph Meta Tags (`og:title`, `og:description`, `og:image`, `og:type`) in `index.html` so sharing the Vercel URL on WhatsApp displays an executive preview card for PLN Managers/GM.
- Hybrid Data Persistence for Static Hosting:
  * Pre-populate `src/data/progressReports.ts` with structured 2-day reports (01 Nov, 03 Nov, 05 Nov active at Depok Workshop, up to 28 Nov target).
  * In Admin Mode, allow editing/adding reports in `localStorage` for immediate preview & 1-page PDF generation, PLUS provide an "Export Updated JSON Data" button so the admin can easily commit the updated JSON to GitHub for Vercel auto-redeployment.

====================================================================
2. DESIGN SYSTEM & BRAND IDENTITY (IPB UNIVERSITY x PLN CORPORATE)
====================================================================
- Theme: Clean, authoritative, high-trust Executive Corporate Dashboard.
- Color Palette:
  * Primary Navy (IPB University): #003366 and #0A2540
  * Secondary Electric Blue (PLN Corporate): #00A2E9 and #0284C7
  * Accent Gold/Yellow (PLN Energy): #FFD100
  * Success/On-Track Emerald: #10B981
  * Background: #F8FAFC with crisp #FFFFFF cards and subtle #E2E8F0 borders.
- Triple-Logo Header (Top Navbar & PDF Header):
  1. Logo PT PLN (Persero) - UPDL Palembang
  2. Logo IPB University
  3. Logo BRAIN IPB
  (Provide clean SVG/Image containers that load from `/logos/...` with graceful high-resolution corporate badge fallbacks if image files are not yet replaced).
- "3-Second Executive Rule" (Mobile-First): When PLN GM/Manager opens the website on their phone, the top screen immediately shows:
  * Overall Physical Progress (%)
  * Sipil vs IoT-Hidroponik Breakdown (%)
  * Target Selesai: 28 November 2026 (Countdown & Status: ON SCHEDULE)
  * Current Active Phase (Pra-Fabrikasi Workshop Depok -> Persiapan Kirim Palembang)

====================================================================
3. CORE SECTIONS & FEATURES TO BUILD
====================================================================

A. EXECUTIVE HERO & KPI SUMMARY BAR
- Project Banner with live status pill: "STATUS: ON-SCHEDULE | Target Rampung: 28 November 2026".
- 4 Executive KPI Cards:
  1. Progres Fisik Kumulatif: "18.5%" (with "+6.5% dari siklus sebelumnya" badge & progress bar).
  2. Rincian Lingkup: Pekerjaan Sipil (22.0%) & Sistem IoT + Hidroponik (15.0%).
  3. Target Penyelesaian: "28 November 2026" (Hitung mundur sisa hari & indikator kepatuhan jadwal).
  4. Total Anggaran Proyek: "± Rp 400.000.000" (Lingkup Penuh: Greenhouse 200m2, Kanopi Kolam 32m2, NFT 100m2, Drip 100m2, Vertical Farming, Smart IoT Touchscreen 24").
- 5-Stage Execution Pipeline Tracker:
  [1. Fabrikasi Knock-Down Depok (AKTIF)] -> [2. QC & Mobilisasi Ekspedisi] -> [3. Pondasi & Erection Rangka Palembang] -> [4. Instalasi Hidroponik & Smart IoT] -> [5. Commissioning & Serah Terima 28 Nov].

B. INTERACTIVE 2-DAY PROGRESS REPORT SELECTOR ("PILIH HARI LAPORAN")
- Horizontal swipeable date pill bar for all 2-day cycles:
  * 01 Nov 2026 (Laporan #01 - Kickoff & Mobilisasi Awal Material)
  * 03 Nov 2026 (Laporan #02 - Pemotongan Profil Hollow & Persiapan Modul)
  * 05 Nov 2026 (Laporan #03 - [TERBARU] Fabrikasi Rangka Atap, Tiang, Meja NFT & Tandon di Depok)
  * 07 Nov, 09 Nov, 11 Nov, 13 Nov, 15 Nov, 17 Nov, 19 Nov, 21 Nov, 23 Nov, 25 Nov, 27 Nov, 28 Nov 2026 (Target Selesai 100%).
- Clicking a date displays that cycle's complete Executive Report:
  * Metadata Header: Tanggal Laporan, Lokasi Pengerjaan ("Workshop Fabrikasi Depok - Sebelum Pengiriman ke Palembang"), Capaian Progres (%), dan Ringkasan Eksekutif.
  * 4-Photo Documentation Grid with Concise Professional Narrative (written cleanly without raw RAB item numbers):
    1. Fabrikasi Kerangka Lengkungan Atap: Perakitan dan pengelasan modul lengkungan atap (arch roof) dengan sistem knock-down di area kerja Depok agar presisi saat didirikan di Palembang.
    2. Persiapan Rangka Tiang Utama & Angkur Join: Pemotongan pipa hollow galvanis untuk 18 titik tiang utama serta penyiapan besi behel angkur join sesuai ukuran struktural.
    3. Perakitan Rangka Meja Hidroponik NFT: Pabrikasi struktur dudukan meja tanam hidroponik dan pemasangan alas kawat ram (wiremesh) galvanis.
    4. Konsolidasi Tandon Air & Utilitas Nutrisi: Pengecekan fisik dan penyiapan unit tandon air utama serta wadah nutrisi sebelum dimobilisasi ke lokasi Palembang.
  * Next Steps Box ("Rencana Kerja 2 Hari Berikutnya"):
    - Penyelesaian pengelasan akhir modul rangka dan meja tanam di workshop Depok beserta pengecekan QC.
    - Pengepakan (packing/tagging) material dan persiapan ekspedisi pengiriman dari Depok ke Palembang.
    - Persiapan pembersihan lahan dan titik pondasi di lokasi PLN UPDL Palembang.
  * Direct Action Button: "Download PDF Laporan Tanggal Ini (1 Lembar)".

C. INTERACTIVE S-CURVE (KURVA S) & MASTER TIME TABLE (TARGET 28 NOV 2026)
- Interactive Recharts S-Curve with filter tabs: [Kurva S Gabungan] | [Kurva S Sipil] | [Kurva S IoT & Hidroponik].
  * X-Axis: 2-day reporting intervals (01 Nov, 03 Nov, 05 Nov, 07 Nov, 09 Nov, 11 Nov, 13 Nov, 15 Nov, 17 Nov, 19 Nov, 21 Nov, 23 Nov, 25 Nov, 27 Nov, 28 Nov).
  * Y-Axis: 0% to 100%.
  * Series 1: "Rencana (Plan)" reaching 100% on 28 Nov 2026.
  * Series 2: "Realisasi (Actual)" plotted up to the active reporting date.
- Master Time Table & Scope Breakdown (17 Official Work Packages):
  * SIPIL (Paket 1 - 10):
    1. Pek. Persiapan (Mobilisasi, Pembersihan 232 m2, SMK3, Shop/As-Built Drawing, Sewa Scaffolding 6 set)
    2. Pek. Tanah (Perataan lahan 232 m2)
    3. Pek. Pondasi Tiang & Dinding (Galian, Batu Kali, Rabatan Pedestal, Angkur Join 18 titik, Dinding Bata Ringan t:60cm 48 m2, Plester, Acian, Cat Eksterior 96 m2)
    4. Pek. Lantai (Rumput Sintetis 125 m2 & Lantai Weedmat 125 m2)
    5. Pek. Kerangka Bangunan (Tiang Utama 18 Tiang, Kerangka Lengkungan Atap 200 m2, Angkur Join Besi, Talang 50 m, Pipa Drainase 8 m, Knee & Join)
    6. Pek. Plastik UV & Insect Net (Plastik UV Atap 200 m2 & Dinding Insect Net 197.2 m2)
    7. Pek. Pintu (Pintu Luar, Pintu Sterilisasi, Pintu ke Arah Kolam)
    8. Pek. Dinding Ruang Kontrol (Dinding Insect Net 74.8 m2)
    9. Instalasi Lampu (Lampu 5 unit, Saklar 3 unit, Panel Listrik 1 unit & Instalasi)
    10. Instalasi Kipas (Kipas Sirkulasi Drum Fan 4 unit, Saklar & Instalasi)
  * IoT & HIDROPONIK (Paket 11 - 17):
    11. Mobilisasi Khusus Material, Pekerja dan Alat Kerja IoT & Hidroponik
    12. Pek. Perpipaan & Pompa (Pompa & Fitting Drip, NFT, Vertical Farming, dan Pemipaan 2 set)
    13. Pek. Panel & Smart IoT (Sensor Temperatur/Intensitas/Kelembapan, Sensor PPM, Mounting & Display 24 inch Touchscreen, Prosesor Core i3/128GB, Panel Listrik Manual-IoT)
    14. Pek. Drip (Drip Irigasi 100 m2, Tatakan Hebel & Polybag 15 m, Tandon Air 1 set)
    15. Pek. NFT (Instalasi NFT 100 m2, Galian Tandon, Dinding Bata Ringan Tandon 10.5 m2, Rabatan Dasar Tandon, Tandon Air 1 set)
    16. Pek. Vertical Farming (Instalasi Vertical Farming, Tandon Air, Pemipaan & Fitting)
    17. Pek. Kolam Bulat & Kanopi Kolam (Galian, Pondasi Batu Kali, Pedestal, 3 Tiang Utama, Kanopi 32 m2, Plastik UV Atap 32 m2)

D. 3D DESIGN & ARCHITECTURE GALLERY
- Interactive showcase displaying the 3D Design renders of the Smart Greenhouse PLN UPDL Palembang (Tampak Perspektif Eksterior, Zona NFT & Drip Irrigation, Zona Vertical Farming & Kolam Bulat Berkanopi, serta Ruang Kontrol IoT Display 24") with modal zoom.

E. ADMIN DASHBOARD & 1-PAGE OFFICIAL PDF GENERATOR (FOR WHATSAPP TO PLN & GSD)
- Accessible via an "Admin Portal" button (PIN: "2026"):
  1. Form to select/create a 2-day date report, update physical progress %, location, upload/change 4 photos (supports file upload to Base64 or `/public` path), edit the 4 photo narratives, and edit Next Steps.
  2. "GENERATE & DOWNLOAD 1-PAGE PDF REPORT":
     - Renders an exact 1-page A4 Portrait executive layout (`210mm x 297mm`) with zero page-break overflow.
     - Official Header: Logo PLN (Left), Title "LAPORAN PROGRES DUA HARIAN PEMBANGUNAN SMART GREENHOUSE PLN UPDL PALEMBANG" (Center), Logo IPB University & BRAIN (Right).
     - Project Summary Box: Tanggal Laporan, Lokasi Kerja, Progres Kumulatif, Target Selesai (28 Nov 2026), Nilai Proyek (± Rp 400 Juta).
     - 2x2 Photo Grid with high-clarity images and concise technical narrative below each photo.
     - Next Steps list + Mini S-Curve/Timeline progress bar at the bottom + Sign-off footer ("Dilaporkan oleh: BRAIN IPB University | Ditujukan kepada: PT PLN (Persero) UPDL Palembang & GSD").
  3. "COPY NARASI WHATSAPP SINGKAT":
     - One-click button that copies a short, polite, non-wordy WhatsApp message formatted with bold/bullet points ready to be pasted into the PLN & GSD WhatsApp Group along with the 1-page PDF and Vercel web link.
```

---

## 7. LANGKAH CEPAT DEPLOY KE VERCEL SETELAH KODE JADI

1. **Masukkan Aset Foto & Desain 3D:**
   Taruh 5 foto progres Depok saat ini ke dalam folder `public/progress/2026-11-05/` dan gambar render 3D Greenhouse ke dalam folder `public/3d-design/`.
2. **Push ke GitHub / Import ke Vercel:**
   * Buka [vercel.com/new](https://vercel.com/new) dan pilih repository GitHub proyek ini.
   * Framework Preset otomatis terdeteksi sebagai **Vite** (atau **Next.js**).
   * Klik **Deploy** (tidak perlu konfigurasi *Environment Variables* rumit karena berbasis statis).
3. **Update Progres Setiap 2 Hari (Tanggal 7, 9, 11, dst.):**
   * Buka halaman `/admin` di web Anda, masukkan 4 foto terbaru & narasi, klik **Download PDF 1 Lembar** untuk dikirim ke WA PLN & GSD.
   * Klik **Export JSON** atau tambahkan foto terbaru ke folder `public/progress/` lalu `git push` — Vercel akan otomatis memperbarui website dalam $\pm 15\text{ detik}$.