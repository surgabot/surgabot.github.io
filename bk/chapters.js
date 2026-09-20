/**
 * TABRANIJ Documentation Store
 * Contains all 15 chapters content, specs, and code samples
 */
window.TABRANIJ_CHAPTERS = {
  "index": {
    "id": "index",
    "num": "0",
    "category": "Beranda",
    "badge": "METODE GT · GRAFIK TABRANIJ",
    "title": "TABRANIJ — Ringkasan & Filosofi",
    "spec": {
      "model": "TABRANIJ (TARI + Rentang)",
      "identitas": "Julat = Atas + Neto + Bawah",
      "bias_rule": "I >= Awal ? Bullish : Bearish",
      "titik_tari": [
        "T (Tinggi)",
        "A (Awal)",
        "R (Rendah)",
        "I (Inti)"
      ],
      "rentang": [
        "A (Atas)",
        "N (Neto)",
        "B (Bawah)",
        "J (Julat)"
      ]
    },
    "python": "# TABRANIJ Core Model\nclass Tabranij:\n    def __init__(self, T, A, R, I):\n        self.T = float(T)       # Tinggi (High)\n        self.A = float(A)       # Awal (Open)\n        self.R = float(R)       # Rendah (Low)\n        self.I = float(I)       # Inti (Close / Current)\n        \n    def hitung(self):\n        atas = self.T - max(self.A, self.I)\n        bawah = min(self.A, self.I) - self.R\n        neto = abs(self.I - self.A)\n        julat = self.T - self.R\n        bias = \"BULLISH\" if self.I >= self.A else \"BEARISH\"\n        valid = round(julat, 4) == round(atas + neto + bawah, 4)\n        return {\"Atas\": atas, \"Neto\": neto, \"Bawah\": bawah, \"Julat\": julat, \"Bias\": bias, \"Valid\": valid}",
    "javascript": "// TABRANIJ Core Model (JS)\nfunction hitungTabranij(T, A, R, I) {\n  const atas = +(T - Math.max(A, I)).toFixed(4);\n  const bawah = +(Math.min(A, I) - R).toFixed(4);\n  const neto = +Math.abs(I - A).toFixed(4);\n  const julat = +(T - R).toFixed(4);\n  const bias = I >= A ? 'BULLISH' : 'BEARISH';\n  const valid = Math.abs(julat - (atas + neto + bawah)) < 1e-6;\n  return { atas, neto, bawah, julat, bias, valid };\n}",
    "pinescript": "//@version=5\nindicator(\"TABRANIJ - Metode GT\", overlay=true)\nT = high\nA = open\nR = low\nI = close\nAtas = T - math.max(A, I)\nBawah = math.min(A, I) - R\nNeto = math.abs(I - A)\nJulat = T - R\nbiasBull = I >= A\nplotshape(biasBull, title=\"Bullish\", color=color.green, style=shape.triangleup)",
    "body": "<div class=\"hero\">\n        <div class=\"badge\">METODE GT · GRAFIK TABRANIJ</div>\n        <h1>TABRANIJ</h1>\n        <p style=\"color: var(--muted); margin-bottom: 0.5rem;\">Buku Pegangan Grup Investasi & Trading · Bab 1–15</p>\n\n        <div class=\"letters\">\n          <div class=\"letter\">T</div><div class=\"letter\">A</div><div class=\"letter\">B</div><div class=\"letter\">R</div>\n          <div class=\"letter\">A</div><div class=\"letter\">N</div><div class=\"letter\">I</div><div class=\"letter\">J</div>\n        </div>\n\n        <p style=\"color: var(--muted); max-width: 480px; margin: 0 auto 1.5rem;\">\n          Sistem kode visual untuk membaca anatomi satu lilin harga secara cepat, konsisten, dan bilingual.\n        </p>\n      </div>\n\n      <div class=\"card\">\n        <h2 style=\"margin-top:0; color: var(--accent2); font-size: 1.1rem;\">Parameter TABRANIJ</h2>\n        <table>\n          <thead><tr><th>Huruf</th><th>Nama</th><th>Arti</th></tr></thead>\n          <tbody>\n            <tr><td><strong>T</strong></td><td>Tinggi</td><td>Harga tertinggi periode</td></tr>\n            <tr><td><strong>A</strong></td><td>Atas</td><td>max(Awal, Inti) — tepi atas tubuh</td></tr>\n            <tr><td><strong>B</strong></td><td>Bawah</td><td>min(Awal, Inti) — tepi bawah tubuh</td></tr>\n            <tr><td><strong>R</strong></td><td>Rendah</td><td>Harga terendah periode</td></tr>\n            <tr><td><strong>A</strong></td><td>Awal</td><td>Harga pembuka</td></tr>\n            <tr><td><strong>N</strong></td><td>Neto</td><td>|Inti − Awal| — tubuh kristal</td></tr>\n            <tr><td><strong>I</strong></td><td>Inti</td><td>Harga kini / penutupan</td></tr>\n            <tr><td><strong>J</strong></td><td>Julat</td><td>Tinggi − Rendah — seluruh tinggi</td></tr>\n          </tbody>\n        </table>\n        <p style=\"margin: 0.75rem 0 0; color: var(--muted); font-size: 0.9rem;\">\n          <strong>Identitas:</strong> Julat = Atas + Neto + Bawah &nbsp;·&nbsp; <strong>Bias:</strong> Inti ≷ Awal\n        </p>\n      </div>\n\n      <p style=\"color: var(--muted); font-size: 0.95rem;\">\n        Klik bagian di sidebar kiri untuk membuka daftar bab, lalu pilih bab yang ingin dibaca.\n        Atau mulai dari <a href=\"01-pengenalan.html\" style=\"color: var(--accent2);\">Bab 1 — Pengenalan</a>.\n      </p>\n\n      <p style=\"margin-top: 1.5rem;\">\n        <a href=\"https://surgabot.github.io/tabranij/\" style=\"color: var(--accent2); margin-right: 1.25rem;\">Lab Kristal 3D</a>\n        <a href=\"https://github.com/surgabot/bk\" style=\"color: var(--accent2);\">Repository</a>\n      </p>"
  },
  "01-pengenalan": {
    "id": "01-pengenalan",
    "num": "1",
    "category": "I · Fondasi",
    "badge": "BAB 1 · FONDASI",
    "title": "Pengenalan",
    "spec": {
      "akronim": "TARI (Tinggi · Awal · Rendah · Inti)",
      "identitas": "Julat = Atas + Neto + Bawah",
      "fokus": "Standarisasi bahasa grafik tim & eliminasi bias impulsif"
    },
    "python": "# Bab 1: Ekstraksi TARI dari Candle OHLC\ndef ekstrak_tari(candle):\n    return {\n        'T': candle['high'],\n        'A': candle['open'],\n        'R': candle['low'],\n        'I': candle['close']\n    }",
    "javascript": "// Bab 1: Ekstraksi TARI\nconst ekstrakTARI = ({ high, open, low, close }) => ({\n  T: high,\n  A: open,\n  R: low,\n  I: close\n});",
    "pinescript": "// Bab 1: Definisi TARI di Pine Script\nT = high\nA = open\nR = low\nI = close",
    "body": "<div class=\"badge\">BAB 1 · FONDASI</div>\n      <h1>Pengenalan</h1>\n\n      <h2>1.1 Untuk siapa buku ini</h2>\n      <p>Buku pegangan ini dibuat khusus untuk <strong>anggota grup investasi & trading</strong> yang memakai metode <strong>GT (Grafik Tabranij)</strong>.</p>\n      <p>Tujuannya:</p>\n      <ul>\n        <li>Menyamakan bahasa baca grafik di dalam grup</li>\n        <li>Memberi kerangka kerja konsisten lewat kode <strong>TABRANIJ</strong></li>\n        <li>Memudahkan hafalan (titik <strong>TARI</strong>, rentang Atas–Bawah–Neto–Julat)</li>\n        <li>Mengurangi keputusan impulsif dengan aturan yang jelas</li>\n      </ul>\n      <p>Bukan buku “jadi kaya cepat”. Ini buku <strong>cara kerja</strong>.</p>\n\n      <h2>1.2 Apa itu Metode GT dan TABRANIJ</h2>\n      <p><strong>GT</strong> = <strong>Grafik Tabranij</strong>.</p>\n      <p><strong>TABRANIJ</strong> adalah susunan huruf dan kode yang sudah dipikirkan agar mudah dihafal dan dipakai bersama.</p>\n      <p>Urutan huruf: <strong>T – A – B – R – A – N – I – J</strong></p>\n\n      <h3>Titik — akronim TARI</h3>\n      <table>\n        <thead><tr><th>Kode</th><th>Komponen</th><th>Keterangan</th></tr></thead>\n        <tbody>\n          <tr><td><strong>T</strong></td><td>Tinggi</td><td>Harga tertinggi pada suatu periode</td></tr>\n          <tr><td><strong>A</strong></td><td>Awal</td><td>Harga pembukaan (konstanta)</td></tr>\n          <tr><td><strong>R</strong></td><td>Rendah</td><td>Harga terendah pada suatu periode</td></tr>\n          <tr><td><strong>I</strong></td><td>Inti</td><td>Harga saat ini / penutupan (variabel)</td></tr>\n        </tbody>\n      </table>\n      <blockquote><strong>TARI</strong> = Tinggi · Awal · Rendah · Inti — empat titik wajib sebelum menghitung rentang.</blockquote>\n\n      <h3>Rentang</h3>\n      <table>\n        <thead><tr><th>Kode</th><th>Komponen</th><th>Rumus</th></tr></thead>\n        <tbody>\n          <tr><td><strong>A</strong></td><td>Atas</td><td><code>T − max(Awal, I)</code></td></tr>\n          <tr><td><strong>B</strong></td><td>Bawah</td><td><code>min(Awal, I) − R</code></td></tr>\n          <tr><td><strong>N</strong></td><td>Neto</td><td><code>|I − Awal|</code></td></tr>\n          <tr><td><strong>J</strong></td><td>Julat</td><td><code>T − R</code></td></tr>\n        </tbody>\n      </table>\n      <pre>Julat = Atas + Neto + Bawah</pre>\n\n      <h2>1.3 Cara memakai buku ini</h2>\n      <ol>\n        <li>Hafalkan TARI dan empat rentang</li>\n        <li>Latihan di tool Tabranij Pro</li>\n        <li>Lanjut Bagian II → III → checklist harian</li>\n      </ol>"
  },
  "02-konsep-gt": {
    "id": "02-konsep-gt",
    "num": "2",
    "category": "I · Fondasi",
    "badge": "BAB 2 · FONDASI",
    "title": "Konsep Metode GT",
    "spec": {
      "urutan": "1. Pasak (TARI) -> 2. Ukur (Rentang) -> 3. Cek (Identitas) -> 4. Arah (Bias)",
      "aturan_bias": "I >= Awal => Naik; I < Awal => Turun"
    },
    "python": "def tentukan_bias(I, Awal):\n    return \"NAIK / BULLISH\" if I >= Awal else \"TURUN / BEARISH\" ",
    "javascript": "const getBias = (I, Awal) => (I >= Awal ? 'BULLISH' : 'BEARISH');",
    "pinescript": "isBullish = close >= open\nisBearish = close < open",
    "body": "<div class=\"badge\">BAB 2 · FONDASI</div>\n      <h1>Konsep Metode GT</h1>\n      <h2>2.1 GT, TABRANIJ, dan TARI</h2>\n      <p><strong>GT</strong> = <strong>Grafik Tabranij</strong>. Sistem baca mengikuti kode <strong>TABRANIJ</strong>, dengan empat titik yang dihafal sebagai <strong>TARI</strong>.</p>\n      <pre>TARI = Tinggi · Awal · Rendah · Inti</pre>\n      <p>Dalam urutan TABRANIJ, huruf <strong>A</strong> muncul dua kali — <strong>Atas</strong> (rentang) dan <strong>Awal</strong> (titik). Selalu sebut lengkap.</p>\n      <h2>2.2 Titik dulu, baru rentang</h2>\n      <ol>\n        <li>Isi <strong>TARI</strong> — Tinggi, Awal, Rendah, Inti</li>\n        <li>Hitung rentang: Atas, Bawah, Neto, Julat</li>\n        <li>Cek: <code>Atas + Neto + Bawah = Julat</code></li>\n        <li>Bias dari Inti vs Awal</li>\n      </ol>\n      <h2>2.3 Bias</h2>\n      <table>\n        <thead><tr><th>Kondisi</th><th>Bias</th></tr></thead>\n        <tbody>\n          <tr><td><code>I ≥ Awal</code></td><td>Naik / Bullish</td></tr>\n          <tr><td><code>I < Awal</code></td><td>Turun / Bearish</td></tr>\n        </tbody>\n      </table>"
  },
  "03-parameter-tabranij": {
    "id": "03-parameter-tabranij",
    "num": "3",
    "category": "I · Fondasi",
    "badge": "BAB 3 · FONDASI",
    "title": "Parameter TABRANIJ",
    "spec": {
      "tabel_master": "T (Tinggi), A (Atas), B (Bawah), R (Rendah), A (Awal), N (Neto), I (Inti), J (Julat)",
      "verifikasi": "Atas + Neto + Bawah == Julat"
    },
    "python": "def verifikasi_identitas(atas, neto, bawah, julat):\n    return abs(julat - (atas + neto + bawah)) < 1e-5",
    "javascript": "function verifikasiIdentitas(atas, neto, bawah, julat) {\n  return Math.abs(julat - (atas + neto + bawah)) < 0.0001;\n}",
    "pinescript": "// Verifikasi identitas matematis\njulatValid = math.abs(Julat - (Atas + Neto + Bawah)) < 0.001",
    "body": "<div class=\"badge\">BAB 3 · FONDASI</div>\n      <h1>Parameter TABRANIJ</h1>\n      <blockquote>Definisi final: titik <strong>TARI</strong> dan empat <strong>rentang</strong>.</blockquote>\n      <h2>3.1 Asal-usul nama</h2>\n      <p><strong>TABRANIJ</strong> disusun agar mudah dihafal. Empat titik diikat sebagai <strong>TARI</strong>:</p>\n      <pre>TARI = Tinggi · Awal · Rendah · Inti</pre>\n      <h2>3.2 Tabel master</h2>\n      <h3>Titik — TARI</h3>\n      <table><thead><tr><th>Kode</th><th>Komponen</th><th>Keterangan</th></tr></thead><tbody>\n        <tr><td><strong>T</strong></td><td>Tinggi</td><td>Harga tertinggi periode</td></tr>\n        <tr><td><strong>A</strong></td><td>Awal</td><td>Harga pembukaan</td></tr>\n        <tr><td><strong>R</strong></td><td>Rendah</td><td>Harga terendah periode</td></tr>\n        <tr><td><strong>I</strong></td><td>Inti</td><td>Harga sekarang / penutupan</td></tr>\n      </tbody></table>\n      <h3>Rentang</h3>\n      <table><thead><tr><th>Kode</th><th>Komponen</th><th>Rumus</th></tr></thead><tbody>\n        <tr><td><strong>A</strong></td><td>Atas</td><td><code>T − max(Awal, I)</code></td></tr>\n        <tr><td><strong>B</strong></td><td>Bawah</td><td><code>min(Awal, I) − R</code></td></tr>\n        <tr><td><strong>N</strong></td><td>Neto</td><td><code>|I − Awal|</code></td></tr>\n        <tr><td><strong>J</strong></td><td>Julat</td><td><code>T − R</code></td></tr>\n      </tbody></table>\n      <pre>Julat = Atas + Neto + Bawah</pre>\n      <h2>3.3 Dua huruf “A”</h2>\n      <p>Selalu sebut <strong>Awal</strong> atau <strong>Atas</strong>, jangan hanya “A”.</p>\n      <h2>3.4 Urutan kerja</h2>\n      <ol><li>Catat TARI</li><li>Hitung Atas, Bawah, Neto, Julat</li><li>Verifikasi identitas</li><li>Tentukan bias (I vs Awal)</li></ol>"
  },
  "04-membaca-candle": {
    "id": "04-membaca-candle",
    "num": "4",
    "category": "II · Membaca Grafik",
    "badge": "BAB 4 · MEMBACA GRAFIK",
    "title": "Membaca Candle dengan GT",
    "spec": {
      "pola_gt": "Hammer (Bawah dominan), Marubozu (Neto dominan), Doji (Neto mendekati 0), Shooting Star (Atas dominan)"
    },
    "python": "def klasifikasi_candle(atas, neto, bawah, julat):\n    if julat == 0: return \"FLAT\"\n    if neto / julat >= 0.70: return \"MARUBOZU (MOMENTUM KUAT)\"\n    if neto / julat <= 0.10: return \"DOJI (KESEIMBANGAN)\"\n    if bawah / julat >= 0.55: return \"HAMMER / REJECTION BAWAH\"\n    if atas / julat >= 0.55: return \"SHOOTING STAR / REJECTION ATAS\"\n    return \"SPINNING TOP / NORMAL\" ",
    "javascript": "function klasifikasiCandle(atas, neto, bawah, julat) {\n  if (julat === 0) return 'FLAT';\n  const rNeto = neto / julat, rBawah = bawah / julat, rAtas = atas / julat;\n  if (rNeto >= 0.7) return 'MARUBOZU';\n  if (rNeto <= 0.1) return 'DOJI';\n  if (rBawah >= 0.55) return 'HAMMER / REJECTION BAWAH';\n  if (rAtas >= 0.55) return 'SHOOTING STAR';\n  return 'NORMAL';\n}",
    "pinescript": "isHammer = (Bawah / Julat >= 0.55) and (Neto / Julat <= 0.35)\nisStar = (Atas / Julat >= 0.55) and (Neto / Julat <= 0.35)",
    "body": "<div class=\"badge\">BAB 4 · MEMBACA GRAFIK</div>\n      <h1>Membaca Candle dengan GT</h1>\n      <blockquote>Satu candle = satu “kalimat” TABRANIJ. Baca <strong>titik</strong> dulu (TARI), lalu ukur <strong>rentang</strong>, baru simpulkan bias.</blockquote>\n      <h2>4.1 Urutan baca</h2>\n      <pre>1. TARI   → Tinggi · Awal · Rendah · Inti\n2. Rentang → Atas · Neto · Bawah · Julat\n3. Cek     → Atas + Neto + Bawah ≟ Julat\n4. Bias    → Inti ≷ Awal\n5. Bentuk  → proporsi wick vs body</pre>\n      <h2>4.2 OHLC → TARI</h2>\n      <table><thead><tr><th>OHLC</th><th>Kode GT</th></tr></thead><tbody>\n        <tr><td>High</td><td><strong>T</strong> Tinggi</td></tr>\n        <tr><td>Open</td><td><strong>Awal</strong></td></tr>\n        <tr><td>Low</td><td><strong>R</strong> Rendah</td></tr>\n        <tr><td>Close / live</td><td><strong>I</strong> Inti</td></tr>\n      </tbody></table>\n      <h2>4.3 Rumus rentang</h2>\n      <pre>Atas  = T − max(Awal, I)\nBawah = min(Awal, I) − R\nNeto  = |I − Awal|\nJulat = T − R</pre>\n      <h2>4.4 Proporsi</h2>\n      <table><thead><tr><th>Pola</th><th>Ciri</th></tr></thead><tbody>\n        <tr><td>Body dominan</td><td>Neto besar</td></tr>\n        <tr><td>Doji</td><td>Neto ≈ 0</td></tr>\n        <tr><td>Wick atas panjang</td><td>Atas besar</td></tr>\n        <tr><td>Wick bawah panjang</td><td>Bawah besar</td></tr>\n      </tbody></table>"
  },
  "05-bias-arah-struktur": {
    "id": "05-bias-arah-struktur",
    "num": "5",
    "category": "II · Membaca Grafik",
    "badge": "BAB 5 · MEMBACA GRAFIK",
    "title": "Bias, Arah, dan Struktur",
    "spec": {
      "struktur": "Struktur Mikro (Candle saat ini) vs Struktur Makro (Konteks Swing)",
      "rule": "Jangan lawan bias time frame yang lebih tinggi"
    },
    "python": "def cek_alignment_struktur(bias_h1, bias_d1):\n    return \"SELARAS / HIGH PROBABILITY\" if bias_h1 == bias_d1 else \"KONTRA-TREN / CAUTION\" ",
    "javascript": "const isAligned = (biasH1, biasD1) => biasH1 === biasD1 ? 'SELARAS' : 'DIVERGENSI';",
    "pinescript": "biasH1 = request.security(syminfo.tickerid, \"60\", close >= open)\nbiasD1 = request.security(syminfo.tickerid, \"D\", close >= open)\nisAligned = biasH1 == biasD1",
    "body": "<div class=\"badge\">BAB 5 · MEMBACA GRAFIK</div>\n      <h1>Bias, Arah, dan Struktur</h1>\n      <blockquote>Satu candle memberi <strong>bias lokal</strong>. Rangkaian + level memberi <strong>arah</strong> dan <strong>struktur</strong>.</blockquote>\n      <h2>5.1 Tiga lapisan</h2>\n      <table><thead><tr><th>Lapisan</th><th>Skala</th><th>Pertanyaan</th></tr></thead><tbody>\n        <tr><td><strong>Bias</strong></td><td>1 candle</td><td>Inti ≷ Awal?</td></tr>\n        <tr><td><strong>Arah</strong></td><td>Beberapa candle</td><td>Bias beruntun / berganti?</td></tr>\n        <tr><td><strong>Struktur</strong></td><td>Swing + level</td><td>Di mana ditolak / diterima?</td></tr>\n      </tbody></table>\n      <h2>5.2 Bias</h2>\n      <pre>I > Awal → naik\nI < Awal → turun\nI = Awal → netral</pre>\n      <h2>5.3 Arah</h2>\n      <p>Naik beruntun, turun beruntun, atau chop (naik-turun bergantian).</p>\n      <h2>5.4 Struktur</h2>\n      <ul>\n        <li><strong>Swing high</strong>: T menonjol lalu gagal lanjut</li>\n        <li><strong>Swing low</strong>: R menonjol lalu gagal lanjut</li>\n        <li>Resistance: T berulang ditolak (Atas membesar)</li>\n        <li>Support: R berulang ditolak (Bawah membesar)</li>\n      </ul>"
  },
  "06-multi-candle-timeframe": {
    "id": "06-multi-candle-timeframe",
    "num": "6",
    "category": "II · Membaca Grafik",
    "badge": "BAB 6 · MEMBACA GRAFIK",
    "title": "Multi-Candle & Timeframe",
    "spec": {
      "hirarki": "D1 (Navigasi Arah) -> H4 (Zonasi Support/Resistance) -> M15/M5 (Presisi Eksekusi TARI)"
    },
    "python": "# Matriks konfirmasi multi-timeframe\ndef multi_tf_matrix(tf_list):\n    # tf_list = [{'tf': 'D1', 'bias': 'BULLISH'}, ...]\n    bulls = sum(1 for x in tf_list if x['bias'] == 'BULLISH')\n    return {'bull_ratio': bulls / len(tf_list), 'status': 'STRONG BUY' if bulls >= 2 else 'NEUTRAL'}",
    "javascript": "function multiTfScore(tfArray) {\n  const bullishCount = tfArray.filter(t => t.bias === 'BULLISH').length;\n  return { score: `${bullishCount}/${tfArray.length}`, pass: bullishCount >= 2 };\n}",
    "pinescript": "// Multi-TF Tracker\nbullD = request.security(syminfo.tickerid, \"D\", close >= open)\nbullH4 = request.security(syminfo.tickerid, \"240\", close >= open)\nbullM15 = close >= open\nallBull = bullD and bullH4 and bullM15",
    "body": "<div class=\"badge\">BAB 6 · MEMBACA GRAFIK</div>\n      <h1>Multi-Candle & Timeframe</h1>\n      <blockquote>Satu TF = satu bahasa periode. Multi-candle & multi-TF = konteks sebelum eksekusi.</blockquote>\n      <h2>6.1 Hierarki TF</h2>\n      <table><thead><tr><th>Peran</th><th>Contoh</th><th>Fungsi</th></tr></thead><tbody>\n        <tr><td><strong>HTF</strong></td><td>H4 / D1</td><td>Arah & struktur besar</td></tr>\n        <tr><td><strong>MTF</strong></td><td>H1</td><td>Setup zona</td></tr>\n        <tr><td><strong>LTF</strong></td><td>M15 / M5</td><td>Timing entry</td></tr>\n      </tbody></table>\n      <h2>6.2 Alur kerja</h2>\n      <pre>HTF → bias + swing\nMTF → zona selaras HTF\nLTF → timing 3–5 candle\nBaru entry + risiko</pre>"
  },
  "07-entry-exit": {
    "id": "07-entry-exit",
    "num": "7",
    "category": "III · Eksekusi",
    "badge": "BAB 7 · EKSEKUSI",
    "title": "Setup Entry & Exit",
    "spec": {
      "trigger": "Rejection terkonfirmasi + break Inti",
      "sl_formula": "Stop Loss = Ekstrem Julat - (Julat * 0.08 buffer)",
      "tp_formula": "Take Profit = Entry + (2.0 * Risk)"
    },
    "python": "def kalkulasi_order(tipe, entry, T, R, julat, rrr=2.0):\n    buffer = julat * 0.08\n    if tipe == \"BUY\":\n        sl = R - buffer\n        risk = entry - sl\n        tp = entry + (risk * rrr)\n    else:\n        sl = T + buffer\n        risk = sl - entry\n        tp = entry - (risk * rrr)\n    return {\"entry\": entry, \"sl\": round(sl, 2), \"tp\": round(tp, 2), \"rrr\": f\"1:{rrr}\"}",
    "javascript": "function hitungOrder(tipe, entry, T, R, julat, rrr = 2.0) {\n  const buffer = julat * 0.08;\n  const sl = tipe === 'BUY' ? R - buffer : T + buffer;\n  const risk = Math.abs(entry - sl);\n  const tp = tipe === 'BUY' ? entry + (risk * rrr) : entry - (risk * rrr);\n  return { entry, sl: +sl.toFixed(2), tp: +tp.toFixed(2), rrr: `1:${rrr}` };\n}",
    "pinescript": "// PineScript Auto SL & TP 1:2\nbuffer = Julat * 0.08\nlongSL = R - buffer\nlongTP = close + (close - longSL) * 2.0",
    "body": "<div class=\"badge\">BAB 7 · EKSEKUSI</div>\n      <h1>Setup Entry & Exit</h1>\n      <blockquote>Entry = <strong>konteks</strong> + <strong>trigger</strong> + <strong>invalidation</strong> tertulis.</blockquote>\n      <h2>7.1 Tiga syarat</h2>\n      <ol><li>Konteks (bias + arah + struktur) jelas</li><li>Zona masuk akal</li><li>Trigger candle mengonfirmasi</li></ol>\n      <h2>7.2 Jenis setup</h2>\n      <ul>\n        <li><strong>Continuation</strong> — ikut HTF setelah pullback</li>\n        <li><strong>Reversal di level</strong> — penolakan + konfirmasi</li>\n        <li><strong>Break & hold</strong> — tembus lalu Awal bertahan di sisi break</li>\n      </ul>\n      <h2>7.3 Exit</h2>\n      <table><thead><tr><th>Jenis</th><th>Fungsi</th></tr></thead><tbody>\n        <tr><td>Invalidation (SL)</td><td>Ide batal</td></tr>\n        <tr><td>Target (TP)</td><td>Ambil untung</td></tr>\n        <tr><td>Structure exit</td><td>Konteks berubah</td></tr>\n      </tbody></table>"
  },
  "08-manajemen-risiko": {
    "id": "08-manajemen-risiko",
    "num": "8",
    "category": "III · Eksekusi",
    "badge": "BAB 8 · EKSEKUSI",
    "title": "Manajemen Risiko",
    "spec": {
      "aturan_emas": "Maksimal 1% - 2% modal per transaksi",
      "rumus_lot": "Lot = (Equity * Risk%) / (Jarak SL dlm Pips * Nilai Pip)"
    },
    "python": "def hitung_position_size(equity, risk_pct, entry_price, sl_price):\n    risk_modal = equity * (risk_pct / 100.0)\n    jarak_sl = abs(entry_price - sl_price)\n    if jarak_sl == 0: return 0\n    return round(risk_modal / jarak_sl, 4)",
    "javascript": "function positionSize(equity, riskPct, entry, sl) {\n  const maxRisk = equity * (riskPct / 100);\n  const dist = Math.abs(entry - sl);\n  return dist === 0 ? 0 : +(maxRisk / dist).toFixed(4);\n}",
    "pinescript": "// Position Sizing Calc\nriskPerTrade = strategy.equity * 0.01\nslPoints = math.abs(close - longSL)\nqty = riskPerTrade / slPoints",
    "body": "<div class=\"badge\">BAB 8 · EKSEKUSI</div>\n      <h1>Manajemen Risiko</h1>\n      <blockquote>Tanpa manajemen risiko, metode apapun hanya hiburan.</blockquote>\n      <h2>8.1 Risiko per trade</h2>\n      <p>Umum: 0.5%–1% ekuitas per trade.</p>\n      <h2>8.2 Hitung posisi</h2>\n      <pre>Size = (Ekuitas × %risiko) / (Jarak SL × nilai per point)</pre>\n      <h2>8.3 Aturan grup</h2>\n      <ul>\n        <li>SL wajib sebelum/saat entry</li>\n        <li>Jangan pindah SL menjauh</li>\n        <li>Counter-trend = size lebih kecil</li>\n        <li>Setelah 3 loss beruntun → evaluasi</li>\n      </ul>"
  },
  "09-contoh-kasus": {
    "id": "09-contoh-kasus",
    "num": "9",
    "category": "III · Eksekusi",
    "badge": "BAB 9 · EKSEKUSI",
    "title": "Contoh Kasus",
    "spec": {
      "studi_kasus": "Kasus 1: Rejection Support (Hammer) & Kasus 2: Breakout Momentum (Marubozu)"
    },
    "python": "# Format Catatan Kasus\nstudi_kasus_1 = {\n    \"pair\": \"BTCUSDT\",\n    \"tf\": \"H1\",\n    \"TARI\": {\"T\": 68500, \"A\": 65200, \"R\": 64800, \"I\": 68100},\n    \"hasil\": \"WIN +3.2R\",\n    \"catatan\": \"Konfirmasi hammer di H4 tepat di support kunci\"\n}",
    "javascript": "const tradeLog = {\n  pair: 'BTCUSDT',\n  bias: 'BULLISH',\n  entry: 65400,\n  sl: 64700,\n  tp: 66800,\n  result: 'TARGET HIT'\n};",
    "pinescript": "// Simulasi Contoh Kasus\nif (ta.crossover(close, ta.sma(close, 20)) and isHammer)\n    strategy.entry(\"GT_Buy\", strategy.long)",
    "body": "<div class=\"badge\">BAB 9 · EKSEKUSI</div>\n      <h1>Contoh Kasus</h1>\n      <p>Format standar contoh:</p>\n      <pre>Instrumen / TF konteks / TF trigger\nBias HTF + struktur\nZona\nTrigger TARI\nEntry · SL · TP1\nHasil / pelajaran</pre>\n      <p>Fokus proses, bukan satu hasil. Simpan materi visual di folder <code>contoh/</code> repository.</p>"
  },
  "10-tool-visualizer": {
    "id": "10-tool-visualizer",
    "num": "10",
    "category": "IV · Alat & Disiplin",
    "badge": "BAB 10 · ALAT & DISIPLIN",
    "title": "Tool Visualizer Tabranij Pro",
    "spec": {
      "tool": "Tabranij Pro v3.2 Extended (Lab 3D WebGL + 2D High-Def)",
      "live_feed": "Binance WebSocket Tick Feed"
    },
    "python": "# Endpoint Simulator API\ndef fetch_tabranij_feed(pair=\"BTCUSDT\"):\n    url = f\"https://api.binance.com/api/v3/klines?symbol={pair}&interval=1h&limit=1\"\n    # return processed TARI candle",
    "javascript": "// Inisialisasi WebSocket Live Feed\nconst ws = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@kline_1m');\nws.onmessage = (e) => {\n  const { k } = JSON.parse(e.data);\n  const tari = { T: +k.h, A: +k.o, R: +k.l, I: +k.c };\n  // renderTabranij(tari);\n};",
    "pinescript": "// Integrasi Visualizer Overlay\nplot(Julat, title=\"Total Julat\", color=color.blue)\nplot(Neto, title=\"Neto Body\", color=color.purple)",
    "body": "<div class=\"badge\">BAB 10 · ALAT & DISIPLIN</div>\n      <h1>Tool Visualizer Tabranij Pro</h1>\n      <p>Tool HTML untuk latihan membaca TARI dan rentang secara visual.</p>\n      <p><a href=\"https://github.com/surgabot/bk/tree/main/tools/tabranij-visualizer\" style=\"color:var(--accent2)\">Buka Tabranij Pro di repository →</a></p>\n      <p>Lab 3D: <a href=\"https://surgabot.github.io/tabranij/\" style=\"color:var(--accent2)\">surgabot.github.io/tabranij</a></p>\n      <h2>Cara pakai</h2>\n      <ol>\n        <li>Buka file HTML di browser</li>\n        <li>Atur T, Awal, R, Inti</li>\n        <li>Lihat Atas, Neto, Bawah, Julat terhitung</li>\n        <li>Latihan preset (bullish, doji, hammer…)</li>\n      </ol>"
  },
  "11-checklist-harian": {
    "id": "11-checklist-harian",
    "num": "11",
    "category": "IV · Alat & Disiplin",
    "badge": "BAB 11 · ALAT & DISIPLIN",
    "title": "Checklist Harian Grup",
    "spec": {
      "protokol": "Sebelum Buka Posisi: 1. Cek Berita/Event -> 2. Tentukan TARI HTF -> 3. Validasi RRR >= 1:2 -> 4. Posisi < 2%"
    },
    "python": "checklist = [\n    (\"Kondisi Emosi Stabil\", True),\n    (\"Tidak Ada Berita High Impact (CPI/FOMC)\", True),\n    (\"Struktur HTF & LTF Selaras\", True),\n    (\"SL Ditentukan Berdasarkan Julat\", True),\n    (\"Risk Modal <= 1.5%\", True)\n]\napakah_boleh_entry = all(status for _, status in checklist)",
    "javascript": "const checklist = {\n  emosiTenang: true,\n  riskTerhitung: true,\n  strukturValid: true,\n  siapJurnal: true\n};\nconst bolehTrading = Object.values(checklist).every(Boolean);",
    "pinescript": "// Status Checklist Banner\nvar string status = \"CHECKLIST WAJIB LENGKAP SEBELUM ENTRY\" ",
    "body": "<div class=\"badge\">BAB 11 · ALAT & DISIPLIN</div>\n      <h1>Checklist Harian Grup</h1>\n      <h2>Sebelum sesi</h2>\n      <ul><li>HTF bias & level penting dicatat</li><li>% risiko maksimal hari ini</li><li>Kondisi mental siap</li></ul>\n      <h2>Saat sesi</h2>\n      <ul><li>Setiap ide punya konteks + zona + trigger</li><li>SL & size dihitung sebelum klik</li><li>Tidak menambah posisi karena “yakin”</li></ul>\n      <h2>Setelah sesi</h2>\n      <ul><li>Jurnal diisi</li><li>Screenshot pelajaran kuat</li><li>Tutup jika target/batas loss tercapai</li></ul>"
  },
  "12-glosarium": {
    "id": "12-glosarium",
    "num": "12",
    "category": "IV · Alat & Disiplin",
    "badge": "BAB 12 · ALAT & DISIPLIN",
    "title": "Glosarium",
    "spec": {
      "istilah_inti": "TARI, Atas, Neto, Bawah, Julat, Bias, Invalidasi, RRR, Buffer"
    },
    "python": "GLOSARIUM = {\n    \"TARI\": \"Tinggi, Awal, Rendah, Inti (4 pasak utama)\",\n    \"Julat\": \"Jangkauan pergerakan harga total (High - Low)\",\n    \"Neto\": \"Rentang murni tubuh candle (|Close - Open|)\",\n    \"Bias\": \"Kecenderungan arah pasar (Inti vs Awal)\"\n}",
    "javascript": "const GLOSARIUM = {\n  TARI: 'Tinggi, Awal, Rendah, Inti',\n  Julat: 'Rentang penuh periode (T - R)',\n  Neto: 'Lebar tubuh lilin (|I - A|)'\n};",
    "pinescript": "// Kamus istilah TABRANIJ",
    "body": "<div class=\"badge\">BAB 12 · ALAT & DISIPLIN</div>\n      <h1>Glosarium</h1>\n      <table><thead><tr><th>Istilah</th><th>Arti singkat</th></tr></thead><tbody>\n        <tr><td><strong>TARI</strong></td><td>Tinggi · Awal · Rendah · Inti</td></tr>\n        <tr><td><strong>Atas</strong></td><td>Wick atas = T − max(Awal, I)</td></tr>\n        <tr><td><strong>Bawah</strong></td><td>Wick bawah = min(Awal, I) − R</td></tr>\n        <tr><td><strong>Neto</strong></td><td>Lebar body = |I − Awal|</td></tr>\n        <tr><td><strong>Julat</strong></td><td>Range penuh = T − R</td></tr>\n        <tr><td><strong>Bias</strong></td><td>Orientasi candle dari I vs Awal</td></tr>\n        <tr><td><strong>HTF / MTF / LTF</strong></td><td>Higher / Middle / Lower Timeframe</td></tr>\n        <tr><td><strong>Invalidation</strong></td><td>Level ide dibatalkan (biasanya SL)</td></tr>\n        <tr><td><strong>GT</strong></td><td>Grafik Tabranij</td></tr>\n      </tbody></table>"
  },
  "13-nasihat-investasi": {
    "id": "13-nasihat-investasi",
    "num": "13",
    "category": "V · Finansial & Kebiasaan",
    "badge": "BAB 13 · FINANSIAL",
    "title": "Nasihat Investasi",
    "spec": {
      "prinsip": "1. Lindungi Modal -> 2. Jangan Serakah -> 3. Sabar Menunggu Momentum -> 4. Kendalikan FOMO"
    },
    "python": "def hitung_drawdown(peak_equity, current_equity):\n    return (peak_equity - current_equity) / peak_equity * 100.0",
    "javascript": "const maxDrawdownLimit = 0.05; // Berhenti jika drawdown hari ini > 5%",
    "pinescript": "// Stop Trading jika Drawdown Harian Tercapai",
    "body": "<div class=\"badge\">BAB 13 · FINANSIAL</div>\n      <h1>Nasihat Investasi</h1>\n      <ul>\n        <li>Modal trading ≠ uang kebutuhan hidup jangka pendek.</li>\n        <li>Pertumbuhan pelan yang konsisten mengalahkan lonjakan spekulatif.</li>\n        <li>Jangan gantungkan seluruh identitas pada satu trade.</li>\n        <li>Belajar terus, tapi jangan ganti sistem setiap minggu.</li>\n        <li>Catat proses, bukan hanya profit.</li>\n      </ul>"
  },
  "14-jurnal-trading": {
    "id": "14-jurnal-trading",
    "num": "14",
    "category": "V · Finansial & Kebiasaan",
    "badge": "BAB 14 · FINANSIAL",
    "title": "Jurnal Trading",
    "spec": {
      "format": "Tanggal, Pair, Arah, Nilai TARI, Entry, SL, TP, Hasil (R), Catatan Psikologi"
    },
    "python": "# Template Catatan Jurnal\nlog_format = {\n    \"id\": \"GT-2026-001\",\n    \"timestamp\": \"2026-09-20T10:00:00Z\",\n    \"instrument\": \"BTCUSDT\",\n    \"tari\": {\"T\": 65000, \"A\": 64000, \"R\": 63800, \"I\": 64900},\n    \"result_r\": 2.1,\n    \"pnl_usd\": 210.00\n}",
    "javascript": "function logTrade(trade) {\n  const logs = JSON.parse(localStorage.getItem('gt_trades') || '[]');\n  logs.push({ ...trade, date: new Date().toISOString() });\n  localStorage.setItem('gt_trades', JSON.stringify(logs));\n}",
    "pinescript": "// Export Logger Setup",
    "body": "<div class=\"badge\">BAB 14 · FINANSIAL</div>\n      <h1>Jurnal Trading</h1>\n      <h2>Field minimal setiap trade</h2>\n      <ul>\n        <li>Tanggal / instrumen / TF</li>\n        <li>Setup (continuation / reversal / break-hold)</li>\n        <li>TARI trigger singkat</li>\n        <li>Entry · SL · TP</li>\n        <li>Hasil (R-multiple)</li>\n        <li>Pelajaran 1 kalimat</li>\n      </ul>\n      <p>Jurnal yang diisi jujur lebih berharga daripada indikator baru.</p>"
  },
  "15-mengelola-keuntungan": {
    "id": "15-mengelola-keuntungan",
    "num": "15",
    "category": "V · Finansial & Kebiasaan",
    "badge": "BAB 15 · FINANSIAL",
    "title": "Mengelola Keuntungan dengan Bijak",
    "spec": {
      "alokasi": "50% Rekening Nyata (Amankan), 30% Modal Bergulir, 20% Dana Darurat / Amal"
    },
    "python": "def alokasi_profit(total_profit):\n    return {\n        \"amankan_rekening_riil\": total_profit * 0.50,\n        \"compound_modal\": total_profit * 0.30,\n        \"cadangan_dan_amal\": total_profit * 0.20\n    }",
    "javascript": "function distribusiProfit(profit) {\n  return {\n    tarikBank: profit * 0.50,\n    reinvestasi: profit * 0.30,\n    danaDarurat: profit * 0.20\n  };\n}",
    "pinescript": "// Sistem Alokasi Keuntungan 50/30/20",
    "body": "<div class=\"badge\">BAB 15 · FINANSIAL</div>\n      <h1>Mengelola Keuntungan dengan Bijak</h1>\n      <ul>\n        <li>Profit tidak otomatis menjadi “uang bebas belanja”.</li>\n        <li>Pertimbangkan: tambah modal bertahap, cadangan, tujuan di luar chart.</li>\n        <li>Setelah winning streak — waspada overconfidence; turunkan size atau istirahat.</li>\n        <li>Setelah drawdown — jangan revenge; kembali ke checklist.</li>\n        <li>Keberhasilan jangka panjang = proses yang diulang.</li>\n      </ul>\n      <blockquote>Metode GT membantu membaca harga. Disiplin membantu menjaga hasilnya.</blockquote>"
  }
};
