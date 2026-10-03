# 📅 Kalender Jawa 2026 — Modern, Elegan & Responsif

Aplikasi web Kalender Jawa Tahun 2026 yang modern, elegan, profesional, dan sangat mudah digunakan (user-friendly). Dibangun menggunakan **HTML5**, **Tailwind CSS**, dan **Vanilla JavaScript (ES6+)** tanpa ketergantungan framework berat.

---

## ✨ Fitur-Fitur Utama yang Tersedia

1. **Tampilan Per Bulan yang Rapi & Indah**:
   - Navigasi bulan fleksibel: tombol Sebelumnya (`<`), Berikutnya (`>`), Dropdown Bulan (Januari s/d Desember), dan tombol cepat **"Hari Ini"**.
   - Dilengkapi padanan nama bulan dalam penanggalan Jawa (Sultan Agungan 1959-1960 Jimawal/Je).
   - Kartu statistik ringkasan bulan: total hari, jumlah hari Minggu, hari libur nasional, dan distribusi kemunculan pasaran.

2. **Tabel Responsif & Sticky Header**:
   - Header tabel tetap menempel di atas (`sticky top-0`) saat tabel di-scroll ke bawah.
   - Responsif optimal untuk layar desktop, tablet, maupun layar smartphone dengan scrollbar modern.

3. **Kolom Data Lengkap per Baris**:
   - **Tanggal**: Angka tanggal dan format DD/MM/YYYY.
   - **Hari**: Nama hari (Senin - Minggu) dan nama hari Jawa kuno (Soma, Anggara, Buda, Respati, Sukra, Tumpak, Dite).
   - **Hitungan**: Urutan kemunculan hari dalam setahun (contoh: *Senin ke-39*, *Kamis ke-1*).
   - **Pasaran**: Legi, Pahing, Pon, Wage, Kliwon dengan badge warna khas.
   - **Neptu Hari**: Nilai neptu hari masehi (Minggu=5, Senin=4, Selasa=3, Rabu=7, Kamis=8, Jumat=6, Sabtu=9).
   - **Neptu Pasaran**: Nilai neptu pasaran (Legi=5, Pahing=9, Pon=7, Wage=4, Kliwon=8).
   - **Total Neptu**: Penjumlahan Neptu Hari + Neptu Pasaran dengan badge tegas dan keterangan watak primbon.

4. **Warna Khas Setiap Pasaran**:
   - 🟢 **Legi**: Hijau lembut (`badge-legi`)
   - 🔵 **Pahing**: Biru (`badge-pahing`)
   - 🟣 **Pon**: Ungu (`badge-pon`)
   - 🟠 **Wage**: Oranye (`badge-wage`)
   - 🔴 **Kliwon**: Merah muda / Pink (`badge-kliwon`)

5. **Highlight Otomatis Hari Ini**:
   - Baris yang sesuai dengan tanggal hari ini otomatis diberi penanda khusus dengan aksen warna emas/kuning, badge `"HARI INI"`, dan border kiri tebal.

6. **Pencarian Cepat Cerdas (Smart Quick Search)**:
   - Pengguna dapat mengetik di search bar:
     - Nama tanggal: `28 September`, `17 Agustus`, `25 Des`, `01/01`
     - Hitungan hari: `Senin ke-39`, `Kamis ke-1`
     - Pasaran / Weton: `Kamis Pon`, `Jumat Kliwon`, `Wage`, `Pahing`
     - Nilai neptu: `Neptu 15`, `Neptu 18`
   - Menampilkan autocomplete suggestion secara instan.
   - Mengklik hasil pencarian langsung memindahkan tampilan ke bulan terkait, men-scroll tepat ke baris tersebut, dan memberikan efek sorot (*flash pulsing animation*).

7. **Toggle Dark Mode & Light Mode**:
   - Tombol pengalih tema (ikon matahari & bulan) dengan deteksi preferensi sistem dan penyimpanan otomatis di `localStorage`.
   - Palet warna gelap elegan bernuansa *modern royal slate & gold*.

8. **Tooltip Interaktif Filosofi Jawa & Watak Neptu**:
   - Arahkan kursor (*hover*) pada kolom **Pasaran** untuk membaca arah mata angin, elemen/unsur, warna simbolis, dan karakter filosofi pasaran.
   - Arahkan kursor (*hover*) pada kolom **Total Neptu** untuk melihat rincian rumus penjumlahan dan watak weton berdasarkan primbon (contoh: *Lakuning Srengenge*, *Satria Wibawa*, dll).

9. **Tombol Cetak (Print View Rapi)**:
   - Tombol **"Cetak"** di toolbar yang diformat khusus dengan CSS `@media print`.
   - Menyembunyikan tombol navigasi, pencarian, header web, toggle tema, dan tombol-tombol interaktif.
   - Hanya mencetak judul bulan aktif dan tabel kalender secara bersih dan teratur pada kertas A4 / Letter.

10. **Desain Card & Tipografi Modern**:
    - Tipografi menggunakan font **Poppins** dan **Inter** dari Google Fonts.
    - Card berbingkai melengkung halus (*rounded-3xl*), bayangan lembut (*shadow-xl*), dan motif batik modern (*subtle geometric background pattern*).

---

## 📂 Struktur Berkas Proyek

```text
kalender-jawa-2026/
├── index.html              # Halaman web utama
├── style.css               # Gaya kustom, badge pasaran, animasi, dan layout cetak
├── app.js                  # Logika aplikasi vanilla JS (render, search, tooltip, filter)
├── data-kalender-2026.js   # Sumber data 365 hari tahun 2026
└── README.md               # Dokumentasi & panduan
```

---

## 🔄 Cara Memasukkan / Mengganti dengan Data Anda

Aplikasi ini sudah dirancang **sangat modular** agar Anda dapat langsung menempelkan data lengkap kalender milik Anda dengan mudah. Ada 2 cara:

### Cara 1: Mengganti File `data-kalender-2026.js` (Rekomendasi untuk Developer)
Buka berkas `data-kalender-2026.js` dan ganti isi array `window.KALENDER_2026_DATA = [ ... ];` dengan data milik Anda.

### Cara 2: Melalui Tombol "Data" di Halaman Web (Tanpa Buka Kode)
1. Buka `index.html` di browser Anda.
2. Klik tombol **"Data"** di toolbar kanan atas.
3. Tempelkan (*paste*) array JSON data Anda ke dalam kolom teks yang disediakan.
4. Klik **"Terapkan & Simpan Data"**. Kalender akan langsung terbarui secara *real-time*!

### Format Objek Data JSON:
```json
[
  {
    "tanggal": 28,
    "bulan": 9,
    "tahun": 2026,
    "namaBulan": "September",
    "tanggalIso": "2026-09-28",
    "tanggalFormatted": "28/09/2026",
    "hari": "Senin",
    "hitungan": "Senin ke-39",
    "pasaran": "Pon",
    "neptuHari": 4,
    "neptuPasaran": 7,
    "totalNeptu": 11,
    "keterangan": ""
  }
]
```

---

## 🚀 Cara Menjalankan

Cukup klik ganda berkas `index.html` untuk membukanya di browser apa pun (Google Chrome, Microsoft Edge, Firefox, Safari), atau jalankan server lokal jika diinginkan:
```bash
# Menggunakan Python
python -m http.server 8080

# Lalu buka di browser:
# http://localhost:8080
```
