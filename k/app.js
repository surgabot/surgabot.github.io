/**
 * KALENDER JAWA MULTI-TAHUN (2026 - 2027) - LOGIKA & INTERAKTIVITAS
 * Vanilla JavaScript ES6+
 */

// =============================================================================
// 1. DATA ENSIKLOPEDIA & METADATA JAWA
// =============================================================================
const PASARAN_METADATA = {
  Legi: {
    nama: 'Legi (Manis)',
    neptu: 5,
    warna: 'Hijau Lembut',
    arah: 'Timur',
    elemen: 'Udara / Kayu',
    simbol: 'Putih',
    makna: 'Karakter luwes, berhati ramah, ikhlas, menyenangkan dalam pergaulan, serta mendatangkan kelancaran rezeki.',
    badgeClass: 'badge-legi',
    dotClass: 'bg-emerald-500'
  },
  Pahing: {
    nama: 'Pahing (Jenar)',
    neptu: 9,
    warna: 'Biru',
    arah: 'Selatan',
    elemen: 'Api',
    simbol: 'Merah',
    makna: 'Karakter berani, tegas, berwibawa tinggi, penuh semangat juang, optimis, dan pantang menyerah.',
    badgeClass: 'badge-pahing',
    dotClass: 'bg-blue-500'
  },
  Pon: {
    nama: 'Pon (Palguna)',
    neptu: 7,
    warna: 'Ungu',
    arah: 'Barat',
    elemen: 'Sinar / Logam',
    simbol: 'Kuning',
    makna: 'Karakter berhati teguh, bijaksana, artistik, suka menolong sesama, dan memiliki daya cipta tinggi.',
    badgeClass: 'badge-pon',
    dotClass: 'bg-purple-500'
  },
  Wage: {
    nama: 'Wage (Cemeng)',
    neptu: 4,
    warna: 'Oranye',
    arah: 'Utara',
    elemen: 'Air / Tanah',
    simbol: 'Hitam',
    makna: 'Karakter tekun, teliti, tenang, realistis, hemat, dan tahan uji dalam menghadapi rintangan kehidupan.',
    badgeClass: 'badge-wage',
    dotClass: 'bg-amber-500'
  },
  Kliwon: {
    nama: 'Kliwon (Kasih)',
    neptu: 8,
    warna: 'Merah Muda / Pink',
    arah: 'Pusat / Pancer',
    elemen: 'Akasa (Ruang Hampa)',
    simbol: 'Panca Warna',
    makna: 'Karakter karismatik, berjiwa pemimpin, pengayom sesama, serta memiliki kepekaan batin dan spiritualitas luhur.',
    badgeClass: 'badge-kliwon',
    dotClass: 'bg-rose-500'
  }
};

const NEPTU_HARI_INFO = {
  Minggu: { neptu: 5, hariJawa: 'Ahad / Dite' },
  Senin: { neptu: 4, hariJawa: 'Soma' },
  Selasa: { neptu: 3, hariJawa: 'Anggara' },
  Rabu: { neptu: 7, hariJawa: 'Buda' },
  Kamis: { neptu: 8, hariJawa: 'Respati' },
  Jumat: { neptu: 6, hariJawa: 'Sukra' },
  Sabtu: { neptu: 9, hariJawa: 'Tumpak / Saniscara' }
};

const WATAK_TOTAL_NEPTU = {
  7: { watak: 'Pendito Kang Lelaku', arti: 'Suka bepergian jauh, tekun mengejar ilmu, dan mandiri.' },
  8: { watak: 'Lakuning Geni', arti: 'Semangat berkobar, berani, cepat tanggap, dan berpendirian kuat.' },
  9: { watak: 'Lakuning Angin', arti: 'Lincah, mudah beradaptasi, disukai banyak sahabat, dan berjiwa bebas.' },
  10: { watak: 'Pendito Mbangun Teki', arti: 'Suka prihatin, cerdas, pemikir mendalam, dan suka menasihati kebaikan.' },
  11: { watak: 'Lakuning Setan', arti: 'Berani mengambil risiko, dermawan, ulet, dan pantang putus asa.' },
  12: { watak: 'Lakuning Kembang', arti: 'Menyenangkan, berwajah teduh, cinta damai, dan menarik simpati.' },
  13: { watak: 'Lakuning Lintang', arti: 'Rendah hati, setia, tenang, dan mandiri menyelesaikan masalah.' },
  14: { watak: 'Lakuning Rembulan', arti: 'Penyabar, penyejuk suasana, bijaksana, dan murah rezeki.' },
  15: { watak: 'Lakuning Srengenge', arti: 'Berwibawa agung, bercahaya, menjadi panutan dan pelindung keluarga.' },
  16: { watak: 'Lakuning Bumi', arti: 'Pemaaf, lapang dada, kokoh pendirian, dan tempat bernaung sesama.' },
  17: { watak: 'Satria Wibawa', arti: 'Berbudi luhur, disegani, berwibawa ningrat, dan berkedudukan tinggi.' },
  18: { watak: 'Dadi Kayu', arti: 'Kuat mengayomi, mulia, dicintai keluarga dan khalayak luas.' }
};

const NAMA_BULAN = [
  'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
  'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
];

const NAMA_BULAN_JAWA = {
  2026: [
    'Rejeb - Ruwah 1959 Jimawal',
    'Ruwah - Pasa 1959 Jimawal',
    'Pasa - Sawal 1959 Jimawal',
    'Sawal - Sela 1959 Jimawal',
    'Sela - Besar 1959 Jimawal',
    'Besar 1959 - Sura 1960 Je',
    'Sura - Sapar 1960 Je',
    'Sapar - Mulud 1960 Je',
    'Mulud - Bakda Mulud 1960 Je',
    'Bakda Mulud - Jumadilawal 1960 Je',
    'Jumadilawal - Jumadilakhir 1960 Je',
    'Jumadilakhir - Rejeb 1960 Je'
  ],
  2027: [
    'Rejeb - Ruwah 1960 Je',
    'Ruwah - Pasa 1960 Je',
    'Pasa - Sawal 1960 Je',
    'Sawal - Sela 1960 Je',
    'Sela - Besar 1960 Je',
    'Besar 1960 - Sura 1961 Dal',
    'Sura - Sapar 1961 Dal',
    'Sapar - Mulud 1961 Dal',
    'Mulud - Bakda Mulud 1961 Dal',
    'Bakda Mulud - Jumadilawal 1961 Dal',
    'Jumadilawal - Jumadilakhir 1961 Dal',
    'Jumadilakhir - Rejeb 1961 Dal'
  ]
};

// =============================================================================
// 2. STATE MANAGER APLIKASI MULTI-TAHUN
// =============================================================================
class CalendarApp {
  constructor() {
    this.datasets = {};
    this.currentYear = 2026;
    this.currentMonth = 1; // 1 = Januari s/d 12 = Desember
    this.selectedPasaranFilter = 'all';
    this.searchQuery = '';
    this.isDarkMode = false;
    this.todayStr = this.getTodayIso(); // Format 'YYYY-MM-DD'
    
    // Inisialisasi
    this.initData();
    this.initTheme();
    this.bindDomElements();
    this.bindEvents();
    
    // Tentukan tahun & bulan awal
    const today = new Date();
    const systemYear = today.getFullYear();
    if (this.datasets[systemYear]) {
      this.currentYear = systemYear;
      this.currentMonth = today.getMonth() + 1;
    } else {
      this.currentYear = 2026;
      this.currentMonth = 1;
    }

    if (this.elYearSelect) this.elYearSelect.value = String(this.currentYear);
    if (this.elMonthSelect) this.elMonthSelect.value = String(this.currentMonth);
    
    this.renderMonthView();
  }

  getTodayIso() {
    const now = new Date();
    const y = now.getFullYear();
    const m = String(now.getMonth() + 1).padStart(2, '0');
    const d = String(now.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
  }

  initData() {
    this.datasets = {};

    // 1. Muat dataset 2026
    if (window.KALENDER_2026_DATA && Array.isArray(window.KALENDER_2026_DATA)) {
      this.datasets[2026] = window.KALENDER_2026_DATA;
    } else {
      this.datasets[2026] = this.generateFallbackData(2026);
    }

    // 2. Muat dataset 2027
    if (window.KALENDER_2027_DATA && Array.isArray(window.KALENDER_2027_DATA)) {
      this.datasets[2027] = window.KALENDER_2027_DATA;
    } else {
      this.datasets[2027] = this.generateFallbackData(2027);
    }

    // 3. Cek apakah ada data kustom pengguna di localStorage
    const customData = localStorage.getItem('kalender_custom_data');
    if (customData) {
      try {
        const parsed = JSON.parse(customData);
        if (Array.isArray(parsed) && parsed.length > 0) {
          const y = parsed[0].tahun || 2026;
          this.datasets[y] = parsed;
          console.log(`Memuat data kustom untuk tahun ${y} dari localStorage.`);
        }
      } catch (e) {
        console.warn('Gagal membaca data kustom, menggunakan dataset bawaan.', e);
      }
    }
  }

  getActiveYearData() {
    return this.datasets[this.currentYear] || this.datasets[2026] || [];
  }

  generateFallbackData(targetYear = 2026) {
    const pasarans = ['Legi', 'Pahing', 'Pon', 'Wage', 'Kliwon'];
    const refDate = new Date(1945, 7, 17); // 17 Agustus 1945 = Jumat Legi
    const namaHari = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
    const neptuH = { Minggu: 5, Senin: 4, Selasa: 3, Rabu: 7, Kamis: 8, Jumat: 6, Sabtu: 9 };
    const neptuP = { Legi: 5, Pahing: 9, Pon: 7, Wage: 4, Kliwon: 8 };
    const dayCounts = { Minggu: 0, Senin: 0, Selasa: 0, Rabu: 0, Kamis: 0, Jumat: 0, Sabtu: 0 };
    
    const data = [];
    const cur = new Date(targetYear, 0, 1);
    const end = new Date(targetYear, 11, 31);
    
    while (cur <= end) {
      const d = cur.getDate();
      const m = cur.getMonth() + 1;
      const y = cur.getFullYear();
      const hari = namaHari[cur.getDay()];
      dayCounts[hari] += 1;
      
      const diffTime = cur.getTime() - refDate.getTime();
      const diffDays = Math.floor(diffTime / (1000 * 3600 * 24));
      const pasaranIdx = ((diffDays % 5) + 5) % 5;
      const pasaran = pasarans[pasaranIdx];
      
      const nh = neptuH[hari];
      const np = neptuP[pasaran];
      
      const iso = `${y}-${String(m).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
      const formatted = `${String(d).padStart(2, '0')}/${String(m).padStart(2, '0')}/${y}`;
      
      data.push({
        tanggal: d,
        bulan: m,
        tahun: y,
        namaBulan: NAMA_BULAN[m - 1],
        tanggalIso: iso,
        tanggalFormatted: formatted,
        hari: hari,
        hitungan: `${hari} ke-${dayCounts[hari]}`,
        pasaran: pasaran,
        neptuHari: nh,
        neptuPasaran: np,
        totalNeptu: nh + np,
        keterangan: ''
      });
      cur.setDate(cur.getDate() + 1);
    }
    return data;
  }

  // ===========================================================================
  // 3. TEMA DARK / LIGHT
  // ===========================================================================
  initTheme() {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      this.isDarkMode = true;
      document.documentElement.classList.add('dark');
    } else {
      this.isDarkMode = false;
      document.documentElement.classList.remove('dark');
    }
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    if (this.isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
    this.updateThemeButtonIcon();
  }

  updateThemeButtonIcon() {
    const iconSun = document.getElementById('icon-sun');
    const iconMoon = document.getElementById('icon-moon');
    const labelTheme = document.getElementById('label-theme');
    
    if (this.isDarkMode) {
      iconSun?.classList.remove('hidden');
      iconMoon?.classList.add('hidden');
      if (labelTheme) labelTheme.textContent = 'Mode Terang';
    } else {
      iconSun?.classList.add('hidden');
      iconMoon?.classList.remove('hidden');
      if (labelTheme) labelTheme.textContent = 'Mode Gelap';
    }
  }

  // ===========================================================================
  // 4. BINDING ELEMEN & EVENT LISTENER
  // ===========================================================================
  bindDomElements() {
    this.elYearSelect = document.getElementById('year-select');
    this.elMonthSelect = document.getElementById('month-select');
    this.elYearBadge = document.getElementById('year-badge');
    this.elMonthTitle = document.getElementById('month-title');
    this.elMonthSubTitle = document.getElementById('month-subtitle');
    this.elMonthPrintTitle = document.getElementById('print-month-title');
    this.elTableBody = document.getElementById('calendar-table-body');
    this.elCalendarCard = document.getElementById('calendar-main-card');
    this.elBtnPrev = document.getElementById('btn-prev-month');
    this.elBtnNext = document.getElementById('btn-next-month');
    this.elBtnToday = document.getElementById('btn-today');
    this.elBtnPrint = document.getElementById('btn-print');
    this.elThemeToggle = document.getElementById('btn-theme-toggle');
    this.elSearchInput = document.getElementById('quick-search-input');
    this.elSearchDropdown = document.getElementById('search-dropdown-results');
    this.elMobileSearchInput = document.getElementById('mobile-search-input');
    this.elMobileSearchDropdown = document.getElementById('mobile-search-dropdown-results');
    this.elTooltip = document.getElementById('global-floating-tooltip');
    
    // Stat elements
    this.elStatTotalDays = document.getElementById('stat-total-days');
    this.elStatSundays = document.getElementById('stat-sundays');
    this.elStatHolidays = document.getElementById('stat-holidays');
    this.elPasaranStatChips = document.getElementById('pasaran-stat-chips');

    // Modal elements
    this.elModalData = document.getElementById('modal-data-manager');
    this.elBtnOpenData = document.getElementById('btn-open-data-manager');
    this.elBtnCloseData = document.getElementById('btn-close-data-manager');
    this.elTextareaData = document.getElementById('textarea-custom-json');
    this.elBtnApplyData = document.getElementById('btn-apply-custom-json');
    this.elBtnResetData = document.getElementById('btn-reset-data');
    this.elBtnCopySchema = document.getElementById('btn-copy-schema');
  }

  bindEvents() {
    // Navigasi Bulan & Tahun
    this.elBtnPrev?.addEventListener('click', () => this.changeMonth(-1));
    this.elBtnNext?.addEventListener('click', () => this.changeMonth(1));
    this.elMonthSelect?.addEventListener('change', (e) => {
      this.setMonth(parseInt(e.target.value, 10));
    });
    this.elYearSelect?.addEventListener('change', (e) => {
      this.setYear(parseInt(e.target.value, 10));
    });
    this.elBtnToday?.addEventListener('click', () => this.jumpToToday());

    // Cetak
    this.elBtnPrint?.addEventListener('click', () => this.printCalendar());

    // Dark Mode
    this.elThemeToggle?.addEventListener('click', () => this.toggleTheme());
    this.updateThemeButtonIcon();

    // Filter Pasaran (Tab pill)
    const filterPills = document.querySelectorAll('.filter-pasaran-btn');
    filterPills.forEach(btn => {
      btn.addEventListener('click', () => {
        const pasaran = btn.dataset.pasaran;
        this.setPasaranFilter(pasaran, btn);
      });
    });

    // Pencarian Cepat (Desktop & Mobile)
    const setupSearchInput = (inputEl, dropdownEl) => {
      if (!inputEl) return;
      inputEl.addEventListener('input', (e) => {
        this.handleSearchInput(e.target.value);
      });
      inputEl.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          this.closeSearchDropdown();
        } else if (e.key === 'Enter') {
          const firstResultBtn = (dropdownEl || this.elSearchDropdown)?.querySelector('button[data-jump-iso]');
          if (firstResultBtn) {
            firstResultBtn.click();
          }
        }
      });
    };

    setupSearchInput(this.elSearchInput, this.elSearchDropdown);
    setupSearchInput(this.elMobileSearchInput, this.elMobileSearchDropdown);

    // Klik di luar dropdown untuk menutup search suggestions
    document.addEventListener('click', (e) => {
      const isInsideDesktop = this.elSearchInput?.contains(e.target) || this.elSearchDropdown?.contains(e.target);
      const isInsideMobile = this.elMobileSearchInput?.contains(e.target) || this.elMobileSearchDropdown?.contains(e.target);
      if (!isInsideDesktop && !isInsideMobile) {
        this.closeSearchDropdown();
      }
    });

    // Delegasi Event Tooltip pada Tabel
    this.bindTooltipEvents();

    // Modal Kelola Data
    this.elBtnOpenData?.addEventListener('click', () => this.openDataManagerModal());
    this.elBtnCloseData?.addEventListener('click', () => this.closeDataManagerModal());
    this.elBtnApplyData?.addEventListener('click', () => this.applyCustomJsonData());
    this.elBtnResetData?.addEventListener('click', () => this.resetToDefaultData());
    this.elBtnCopySchema?.addEventListener('click', () => this.copyJsonSchema());

    // Tutup modal dengan tombol Esc
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !this.elModalData?.classList.contains('hidden')) {
        this.closeDataManagerModal();
      }
    });
  }

  // ===========================================================================
  // 5. NAVIGASI BULAN & TAHUN
  // ===========================================================================
  changeMonth(delta) {
    let targetMonth = this.currentMonth + delta;
    let targetYear = this.currentYear;

    if (targetMonth > 12) {
      if (this.datasets[targetYear + 1]) {
        targetYear += 1;
        targetMonth = 1;
      } else {
        targetMonth = 1;
      }
    } else if (targetMonth < 1) {
      if (this.datasets[targetYear - 1]) {
        targetYear -= 1;
        targetMonth = 12;
      } else {
        targetMonth = 12;
      }
    }

    this.currentYear = targetYear;
    this.currentMonth = targetMonth;
    if (this.elYearSelect) this.elYearSelect.value = String(this.currentYear);
    if (this.elMonthSelect) this.elMonthSelect.value = String(this.currentMonth);

    this.renderMonthView();
  }

  setMonth(monthNum, highlightTargetDate = null) {
    if (monthNum < 1) monthNum = 1;
    if (monthNum > 12) monthNum = 12;
    this.currentMonth = monthNum;
    
    if (this.elMonthSelect) {
      this.elMonthSelect.value = String(monthNum);
    }

    this.renderMonthView(highlightTargetDate);
  }

  setYear(yearNum) {
    if (this.datasets[yearNum]) {
      this.currentYear = yearNum;
      if (this.elYearSelect) {
        this.elYearSelect.value = String(yearNum);
      }
      this.renderMonthView();
    }
  }

  jumpToToday() {
    const today = new Date();
    const todayYear = today.getFullYear();
    const todayMonth = today.getMonth() + 1;
    const todayDay = today.getDate();
    const todayIso = this.getTodayIso();

    if (this.datasets[todayYear]) {
      this.currentYear = todayYear;
      if (this.elYearSelect) this.elYearSelect.value = String(todayYear);
      this.setMonth(todayMonth, todayIso);
    } else {
      // Default lompat ke bulan aktif di 2026
      this.currentYear = 2026;
      if (this.elYearSelect) this.elYearSelect.value = '2026';
      this.setMonth(todayMonth, null);
      this.showToastNotification(`Saat ini sistem melihat tanggal ${todayDay} ${NAMA_BULAN[todayMonth-1]}. Membuka kalender 2026.`);
    }
  }

  setPasaranFilter(pasaran, activeBtn) {
    this.selectedPasaranFilter = pasaran;
    
    const filterPills = document.querySelectorAll('.filter-pasaran-btn');
    filterPills.forEach(btn => {
      btn.classList.remove('bg-amber-600', 'text-white', 'shadow-sm');
      btn.classList.add('bg-slate-100', 'dark:bg-slate-800', 'text-slate-600', 'dark:text-slate-300');
    });

    if (activeBtn) {
      activeBtn.classList.remove('bg-slate-100', 'dark:bg-slate-800', 'text-slate-600', 'dark:text-slate-300');
      activeBtn.classList.add('bg-amber-600', 'text-white', 'shadow-sm');
    }

    this.renderMonthView();
  }

  // ===========================================================================
  // 6. RENDER VIEW BULANAN
  // ===========================================================================
  renderMonthView(highlightDateIso = null) {
    const monthNum = this.currentMonth;
    const yearNum = this.currentYear;
    const monthName = NAMA_BULAN[monthNum - 1];
    const monthJawaName = (NAMA_BULAN_JAWA[yearNum] && NAMA_BULAN_JAWA[yearNum][monthNum - 1]) || 'Tahun Sultan Agungan';

    // Update Header Card
    if (this.elMonthTitle) {
      this.elMonthTitle.textContent = `${monthName} ${yearNum}`;
    }
    if (this.elYearBadge) {
      this.elYearBadge.textContent = `${yearNum} M`;
    }
    if (this.elMonthSubTitle) {
      this.elMonthSubTitle.textContent = `${monthJawaName} • Kalender Sultan Agung`;
    }
    if (this.elMonthPrintTitle) {
      this.elMonthPrintTitle.textContent = `KALENDER JAWA TAHUN ${yearNum} - BULAN ${monthName.toUpperCase()}`;
    }

    // Ambil data untuk tahun & bulan yang dipilih
    const activeData = this.getActiveYearData();
    let monthRows = activeData.filter(d => d.bulan === monthNum && d.tahun === yearNum);

    // Hitung statistik bulan sebelum filter pasaran
    this.renderMonthStats(monthRows);

    // Terapkan filter pasaran jika ada
    if (this.selectedPasaranFilter !== 'all') {
      monthRows = monthRows.filter(d => d.pasaran.toLowerCase() === this.selectedPasaranFilter.toLowerCase());
    }

    // Animasi transisi ganti bulan
    if (this.elCalendarCard) {
      this.elCalendarCard.classList.remove('animate-card-switch');
      void this.elCalendarCard.offsetWidth;
      this.elCalendarCard.classList.add('animate-card-switch');
    }

    // Render Tabel
    if (!this.elTableBody) return;

    if (monthRows.length === 0) {
      this.elTableBody.innerHTML = `
        <tr>
          <td colspan="7" class="py-12 text-center text-slate-400 dark:text-slate-500">
            <svg class="w-12 h-12 mx-auto mb-3 opacity-40 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
            <p class="font-medium text-base">Tidak ada tanggal dengan filter pasaran "${this.selectedPasaranFilter}" pada bulan ini.</p>
            <button onclick="window.calendarApp.setPasaranFilter('all', document.querySelector('[data-pasaran=all]'))" class="mt-3 px-4 py-1.5 text-xs font-semibold text-amber-600 dark:text-amber-400 hover:underline">
              Tampilkan Semua Pasaran
            </button>
          </td>
        </tr>
      `;
      return;
    }

    const rowsHtml = monthRows.map(item => {
      const isSunday = item.hari === 'Minggu';
      const isToday = item.tanggalIso === this.todayStr;
      const isTargetHighlight = highlightDateIso && item.tanggalIso === highlightDateIso;
      const pasaranMeta = PASARAN_METADATA[item.pasaran] || {};
      const neptuHariData = NEPTU_HARI_INFO[item.hari] || { neptu: item.neptuHari, hariJawa: '' };

      let rowClasses = [
        'transition-colors',
        'duration-150',
        'border-b',
        'border-slate-100',
        'dark:border-slate-800/80',
        'hover:bg-amber-50/60',
        'dark:hover:bg-slate-800/60'
      ];

      if (isToday) rowClasses.push('row-today');
      if (isTargetHighlight) rowClasses.push('row-highlight-search');

      const dayColorClass = isSunday ? 'text-rose-600 dark:text-rose-400 font-semibold' : 'text-slate-800 dark:text-slate-200';

      return `
        <tr id="row-${item.tanggalIso}" class="${rowClasses.join(' ')}" data-iso="${item.tanggalIso}">
          <!-- 1. TANGGAL -->
          <td class="py-3 px-4 whitespace-nowrap">
            <div class="flex items-center gap-2">
              <span class="inline-flex items-center justify-center w-8 h-8 rounded-lg font-bold text-sm ${isSunday ? 'bg-rose-100 text-rose-700 dark:bg-rose-950/50 dark:text-rose-300' : 'bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-200'}">
                ${item.tanggal}
              </span>
              <div class="flex flex-col">
                <span class="text-xs text-slate-400 dark:text-slate-500 font-inter">${item.tanggalFormatted}</span>
                ${isToday ? '<span class="inline-block px-1.5 py-0.2 text-[10px] font-bold bg-amber-500 text-white rounded mt-0.5 tracking-wider animate-pulse">HARI INI</span>' : ''}
              </div>
            </div>
          </td>

          <!-- 2. HARI -->
          <td class="py-3 px-4 whitespace-nowrap">
            <div class="flex flex-col">
              <span class="text-sm font-semibold ${dayColorClass}">${item.hari}</span>
              <span class="text-[11px] text-slate-400 dark:text-slate-500 italic">${neptuHariData.hariJawa || ''}</span>
            </div>
          </td>

          <!-- 3. HITUNGAN HARI DALAM TAHUN -->
          <td class="py-3 px-4 whitespace-nowrap">
            <span class="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60 font-inter">
              <svg class="w-3 h-3 mr-1 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"></path>
              </svg>
              ${item.hitungan}
            </span>
          </td>

          <!-- 4. PASARAN (DENGAN WARNA KHAS & TOOLTIP) -->
          <td class="py-3 px-4 whitespace-nowrap cursor-help has-tooltip" 
              data-tooltip-type="pasaran" 
              data-pasaran="${item.pasaran}">
            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold shadow-xs ${pasaranMeta.badgeClass}">
              <span class="w-2 h-2 rounded-full ${pasaranMeta.dotClass}"></span>
              ${item.pasaran}
              <svg class="w-3 h-3 ml-0.5 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </span>
          </td>

          <!-- 5. NEPTU HARI -->
          <td class="py-3 px-4 whitespace-nowrap text-center">
            <span class="inline-block w-7 h-7 leading-7 text-xs font-bold rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 font-inter">
              ${item.neptuHari}
            </span>
          </td>

          <!-- 6. NEPTU PASARAN -->
          <td class="py-3 px-4 whitespace-nowrap text-center">
            <span class="inline-block w-7 h-7 leading-7 text-xs font-bold rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 font-inter">
              ${item.neptuPasaran}
            </span>
          </td>

          <!-- 7. TOTAL NEPTU (DENGAN TOOLTIP PRIMBON) -->
          <td class="py-3 px-4 whitespace-nowrap text-center cursor-help has-tooltip"
              data-tooltip-type="total-neptu"
              data-total-neptu="${item.totalNeptu}"
              data-hari="${item.hari}"
              data-pasaran="${item.pasaran}"
              data-neptu-hari="${item.neptuHari}"
              data-neptu-pasaran="${item.neptuPasaran}">
            <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-amber-50 dark:bg-amber-950/40 text-amber-900 dark:text-amber-200 border border-amber-300 dark:border-amber-800/80 font-inter font-bold text-sm shadow-xs group">
              <span>${item.totalNeptu}</span>
              <svg class="w-3.5 h-3.5 text-amber-500 opacity-70 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            ${item.keterangan ? `<div class="text-[10px] text-rose-500 dark:text-rose-400 font-medium mt-1 truncate max-w-[140px] mx-auto">${item.keterangan}</div>` : ''}
          </td>
        </tr>
      `;
    }).join('');

    this.elTableBody.innerHTML = rowsHtml;

    if (highlightDateIso) {
      setTimeout(() => {
        const targetRow = document.getElementById(`row-${highlightDateIso}`);
        if (targetRow) {
          targetRow.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 150);
    }
  }

  // ===========================================================================
  // 7. STATISTIK RINGKASAN BULANAN
  // ===========================================================================
  renderMonthStats(monthData) {
    if (!monthData || monthData.length === 0) return;

    const totalDays = monthData.length;
    const totalSundays = monthData.filter(d => d.hari === 'Minggu').length;
    const holidays = monthData.filter(d => d.keterangan && d.keterangan.trim() !== '');

    if (this.elStatTotalDays) this.elStatTotalDays.textContent = `${totalDays} Hari`;
    if (this.elStatSundays) this.elStatSundays.textContent = `${totalSundays} Hari`;
    if (this.elStatHolidays) this.elStatHolidays.textContent = `${holidays.length} Libur`;

    const pasaranCounts = { Legi: 0, Pahing: 0, Pon: 0, Wage: 0, Kliwon: 0 };
    monthData.forEach(d => {
      if (pasaranCounts[d.pasaran] !== undefined) {
        pasaranCounts[d.pasaran]++;
      }
    });

    if (this.elPasaranStatChips) {
      const chipsHtml = Object.keys(pasaranCounts).map(p => {
        const meta = PASARAN_METADATA[p];
        return `
          <div class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium ${meta.badgeClass}">
            <span class="w-1.5 h-1.5 rounded-full ${meta.dotClass}"></span>
            <span>${p}:</span>
            <span class="font-bold">${pasaranCounts[p]}x</span>
          </div>
        `;
      }).join('');
      this.elPasaranStatChips.innerHTML = chipsHtml;
    }
  }

  // ===========================================================================
  // 8. PENCARIAN CEPAT LINTAS TAHUN (SMART MULTI-YEAR SEARCH)
  // ===========================================================================
  handleSearchInput(query) {
    const trimmed = query.trim().toLowerCase();
    this.searchQuery = trimmed;

    if (!trimmed || trimmed.length < 2) {
      this.closeSearchDropdown();
      return;
    }

    // Gabungkan seluruh data tahun untuk pencarian lintas tahun
    const allRecords = Object.values(this.datasets).flat();

    const matches = allRecords.filter(item => {
      const matchTanggalBulan = `${item.tanggal} ${item.namaBulan}`.toLowerCase().includes(trimmed);
      const matchFormatted = item.tanggalFormatted.includes(trimmed);
      const matchIso = item.tanggalIso.includes(trimmed);
      const matchHitungan = item.hitungan.toLowerCase().includes(trimmed);
      const matchHari = item.hari.toLowerCase().includes(trimmed);
      const matchPasaran = item.pasaran.toLowerCase().includes(trimmed);
      const matchWeton = `${item.hari} ${item.pasaran}`.toLowerCase().includes(trimmed);
      const matchNeptuText = `neptu ${item.totalNeptu}`.toLowerCase().includes(trimmed);
      const matchKet = item.keterangan.toLowerCase().includes(trimmed);

      return matchTanggalBulan || matchFormatted || matchIso || matchHitungan || matchHari || matchPasaran || matchWeton || matchNeptuText || matchKet;
    }).slice(0, 8);

    this.renderSearchDropdown(matches);
  }

  renderSearchDropdown(results) {
    const dropdowns = [this.elSearchDropdown, this.elMobileSearchDropdown].filter(Boolean);
    if (dropdowns.length === 0) return;

    if (results.length === 0) {
      const emptyHtml = `
        <div class="px-4 py-3 text-xs text-slate-500 dark:text-slate-400 text-center">
          Tidak ditemukan tanggal yang cocok dengan "<strong>${this.searchQuery}</strong>"
        </div>
      `;
      dropdowns.forEach(dd => {
        dd.innerHTML = emptyHtml;
        dd.classList.remove('hidden');
      });
      return;
    }

    const itemsHtml = results.map(item => {
      const pasaranMeta = PASARAN_METADATA[item.pasaran] || {};
      return `
        <button type="button" 
                class="w-full px-4 py-2.5 text-left text-xs flex items-center justify-between hover:bg-amber-50 dark:hover:bg-slate-800 border-b border-slate-100 dark:border-slate-800/60 last:border-b-0 transition-colors"
                data-jump-year="${item.tahun}"
                data-jump-month="${item.bulan}" 
                data-jump-iso="${item.tanggalIso}">
          <div class="flex items-center gap-2">
            <span class="font-bold text-slate-900 dark:text-slate-100 w-6 text-center">${item.tanggal}</span>
            <div class="flex flex-col">
              <span class="font-semibold text-slate-800 dark:text-slate-200">
                ${item.hari}, ${item.tanggal} ${item.namaBulan} <span class="text-amber-600 dark:text-amber-400 font-bold">${item.tahun}</span>
              </span>
              <span class="text-[10px] text-slate-400 dark:text-slate-500">${item.hitungan} • Total Neptu: ${item.totalNeptu}</span>
            </div>
          </div>
          <span class="px-2 py-0.5 rounded-full text-[11px] font-semibold ${pasaranMeta.badgeClass}">
            ${item.pasaran}
          </span>
        </button>
      `;
    }).join('');

    dropdowns.forEach(dd => {
      dd.innerHTML = `
        <div class="max-h-72 overflow-y-auto">
          ${itemsHtml}
        </div>
      `;

      const buttons = dd.querySelectorAll('button[data-jump-iso]');
      buttons.forEach(btn => {
        btn.addEventListener('click', () => {
          const targetYear = parseInt(btn.dataset.jumpYear, 10);
          const targetMonth = parseInt(btn.dataset.jumpMonth, 10);
          const targetIso = btn.dataset.jumpIso;
          
          this.selectedPasaranFilter = 'all';
          const filterAllBtn = document.querySelector('.filter-pasaran-btn[data-pasaran="all"]');
          if (filterAllBtn) {
            const filterPills = document.querySelectorAll('.filter-pasaran-btn');
            filterPills.forEach(b => {
              b.classList.remove('bg-amber-600', 'text-white', 'shadow-sm');
              b.classList.add('bg-slate-100', 'dark:bg-slate-800', 'text-slate-600', 'dark:text-slate-300');
            });
            filterAllBtn.classList.remove('bg-slate-100', 'dark:bg-slate-800', 'text-slate-600', 'dark:text-slate-300');
            filterAllBtn.classList.add('bg-amber-600', 'text-white', 'shadow-sm');
          }

          this.currentYear = targetYear;
          if (this.elYearSelect) this.elYearSelect.value = String(targetYear);
          this.setMonth(targetMonth, targetIso);
          this.closeSearchDropdown();
          if (this.elSearchInput) this.elSearchInput.value = '';
          if (this.elMobileSearchInput) this.elMobileSearchInput.value = '';
        });
      });

      dd.classList.remove('hidden');
    });
  }

  closeSearchDropdown() {
    if (this.elSearchDropdown) {
      this.elSearchDropdown.classList.add('hidden');
    }
    if (this.elMobileSearchDropdown) {
      this.elMobileSearchDropdown.classList.add('hidden');
    }
  }

  // ===========================================================================
  // 9. SISTEM TOOLTIP CERDAS (PASARAN & TOTAL NEPTU)
  // ===========================================================================
  bindTooltipEvents() {
    document.addEventListener('mouseover', (e) => {
      const target = e.target.closest('.has-tooltip');
      if (!target) return;

      const type = target.dataset.tooltipType;
      let html = '';

      if (type === 'pasaran') {
        const pasaran = target.dataset.pasaran;
        const meta = PASARAN_METADATA[pasaran];
        if (meta) {
          html = `
            <div class="p-3 max-w-xs text-xs font-sans text-slate-800 dark:text-slate-100 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl shadow-xl">
              <div class="flex items-center justify-between pb-2 mb-2 border-b border-slate-100 dark:border-slate-800">
                <span class="font-bold text-sm text-slate-900 dark:text-amber-400 flex items-center gap-1.5">
                  <span class="w-2.5 h-2.5 rounded-full ${meta.dotClass}"></span>
                  Pasaran ${meta.nama}
                </span>
                <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                  Neptu: ${meta.neptu}
                </span>
              </div>
              <div class="space-y-1 text-[11px] mb-2 text-slate-600 dark:text-slate-300">
                <div class="flex justify-between"><span>Arah Mata Angin:</span> <strong class="text-slate-900 dark:text-slate-100">${meta.arah}</strong></div>
                <div class="flex justify-between"><span>Unsur / Elemen:</span> <strong class="text-slate-900 dark:text-slate-100">${meta.elemen}</strong></div>
                <div class="flex justify-between"><span>Warna Simbolik:</span> <strong class="text-slate-900 dark:text-slate-100">${meta.simbol}</strong></div>
              </div>
              <p class="text-[11px] leading-relaxed italic text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800 pt-2">
                "${meta.makna}"
              </p>
            </div>
          `;
        }
      } else if (type === 'total-neptu') {
        const total = parseInt(target.dataset.totalNeptu, 10);
        const hari = target.dataset.hari;
        const pasaran = target.dataset.pasaran;
        const nh = target.dataset.neptuHari;
        const np = target.dataset.neptuPasaran;
        const watakInfo = WATAK_TOTAL_NEPTU[total] || { watak: 'Rahayu', arti: 'Keseimbangan lahir batin.' };

        html = `
          <div class="p-3 max-w-xs text-xs font-sans text-slate-800 dark:text-slate-100 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl shadow-xl">
            <div class="flex items-center justify-between pb-2 mb-2 border-b border-slate-100 dark:border-slate-800">
              <span class="font-bold text-sm text-amber-600 dark:text-amber-400">
                Weton ${hari} ${pasaran}
              </span>
              <span class="px-2 py-0.5 rounded text-[11px] font-extrabold bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300">
                Total: ${total}
              </span>
            </div>
            <div class="bg-slate-50 dark:bg-slate-800/80 rounded-lg p-2 mb-2 text-[11px] font-inter">
              <div class="flex justify-between text-slate-600 dark:text-slate-300">
                <span>Neptu Hari (${hari}):</span>
                <span class="font-bold">${nh}</span>
              </div>
              <div class="flex justify-between text-slate-600 dark:text-slate-300">
                <span>Neptu Pasaran (${pasaran}):</span>
                <span class="font-bold">${np}</span>
              </div>
              <div class="flex justify-between border-t border-slate-200 dark:border-slate-700 mt-1 pt-1 font-bold text-slate-900 dark:text-slate-100">
                <span>Penjumlahan:</span>
                <span>${nh} + ${np} = ${total}</span>
              </div>
            </div>
            <div class="text-[11px] text-slate-700 dark:text-slate-300">
              <span class="font-semibold text-amber-700 dark:text-amber-300">Watak Primbon:</span> 
              <span class="font-bold">${watakInfo.watak}</span>
              <p class="mt-1 text-slate-500 dark:text-slate-400 italic leading-relaxed">
                "${watakInfo.arti}"
              </p>
            </div>
          </div>
        `;
      }

      if (html && this.elTooltip) {
        this.elTooltip.innerHTML = html;
        this.elTooltip.classList.remove('hidden');
        this.positionTooltip(target);
      }
    });

    document.addEventListener('mouseout', (e) => {
      const target = e.target.closest('.has-tooltip');
      if (target && this.elTooltip) {
        this.elTooltip.classList.add('hidden');
      }
    });
  }

  positionTooltip(targetEl) {
    if (!this.elTooltip) return;

    const rect = targetEl.getBoundingClientRect();
    const tooltipWidth = 280;
    const tooltipHeight = 160;

    let left = rect.left + (rect.width / 2) - (tooltipWidth / 2);
    let top = rect.top - tooltipHeight - 12;

    if (left < 10) left = 10;
    if (left + tooltipWidth > window.innerWidth - 10) {
      left = window.innerWidth - tooltipWidth - 10;
    }

    if (top < 10) {
      top = rect.bottom + 12;
    }

    this.elTooltip.style.position = 'fixed';
    this.elTooltip.style.left = `${left}px`;
    this.elTooltip.style.top = `${top}px`;
  }

  // ===========================================================================
  // 10. CETAK KALENDER (PRINT MODE)
  // ===========================================================================
  printCalendar() {
    const monthName = NAMA_BULAN[this.currentMonth - 1];
    const prevTitle = document.title;
    document.title = `Kalender-Jawa-${this.currentYear}-${monthName}`;
    window.print();
    setTimeout(() => {
      document.title = prevTitle;
    }, 1000);
  }

  // ===========================================================================
  // 11. MODAL KELOLA & GANTI DATA OLEH PENGGUNA
  // ===========================================================================
  openDataManagerModal() {
    if (!this.elModalData) return;
    if (this.elTextareaData) {
      const activeData = this.getActiveYearData();
      this.elTextareaData.value = JSON.stringify(activeData, null, 2);
    }
    this.elModalData.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
  }

  closeDataManagerModal() {
    if (!this.elModalData) return;
    this.elModalData.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
  }

  applyCustomJsonData() {
    if (!this.elTextareaData) return;
    const raw = this.elTextareaData.value.trim();

    try {
      const parsed = JSON.parse(raw);
      if (!Array.isArray(parsed) || parsed.length === 0) {
        throw new Error('Data harus berupa array JSON objek yang berisi minimal 1 item.');
      }

      const first = parsed[0];
      if (first.tanggal === undefined || !first.hari || !first.pasaran) {
        throw new Error('Setiap objek harus memiliki properti minimal: tanggal, hari, pasaran, neptuHari, neptuPasaran, totalNeptu.');
      }

      const y = first.tahun || this.currentYear;
      this.datasets[y] = parsed;
      this.currentYear = y;
      if (this.elYearSelect) this.elYearSelect.value = String(y);

      localStorage.setItem('kalender_custom_data', JSON.stringify(parsed));
      this.showToastNotification(`Data kalender tahun ${y} berhasil diperbarui!`);
      this.closeDataManagerModal();
      this.renderMonthView();
    } catch (err) {
      alert(`Gagal menerapkan data JSON:\n${err.message}`);
    }
  }

  resetToDefaultData() {
    if (confirm('Apakah Anda yakin ingin menghapus data kustom dan kembali ke data bawaan kalender?')) {
      localStorage.removeItem('kalender_custom_data');
      this.initData();
      this.showToastNotification('Data telah di-reset ke standar bawaan.');
      this.closeDataManagerModal();
      this.renderMonthView();
    }
  }

  copyJsonSchema() {
    const sampleItem = [
      {
        tanggal: 1,
        bulan: 1,
        tahun: 2026,
        namaBulan: "Januari",
        tanggalIso: "2026-01-01",
        tanggalFormatted: "01/01/2026",
        hari: "Kamis",
        hitungan: "Kamis ke-1",
        pasaran: "Pon",
        neptuHari: 8,
        neptuPasaran: 7,
        totalNeptu: 15,
        keterangan: "Tahun Baru 2026 Masehi"
      }
    ];

    navigator.clipboard.writeText(JSON.stringify(sampleItem, null, 2)).then(() => {
      this.showToastNotification('Contoh format JSON berhasil disalin ke clipboard!');
    }).catch(() => {
      alert('Gagal menyalin format ke clipboard.');
    });
  }

  showToastNotification(msg) {
    const toast = document.createElement('div');
    toast.className = 'fixed bottom-6 right-6 z-50 px-4 py-3 bg-slate-900 text-white dark:bg-amber-600 rounded-xl shadow-2xl text-xs font-semibold flex items-center gap-2 transform transition-all duration-300 translate-y-10 opacity-0';
    toast.innerHTML = `
      <svg class="w-4 h-4 text-emerald-400 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
      </svg>
      <span>${msg}</span>
    `;
    document.body.appendChild(toast);

    setTimeout(() => {
      toast.classList.remove('translate-y-10', 'opacity-0');
      toast.classList.add('translate-y-0', 'opacity-100');
    }, 50);

    setTimeout(() => {
      toast.classList.remove('translate-y-0', 'opacity-100');
      toast.classList.add('translate-y-10', 'opacity-0');
      setTimeout(() => toast.remove(), 300);
    }, 3200);
  }
}

// Inisialisasi Aplikasi Saat Halaman Selesai Dimuat
document.addEventListener('DOMContentLoaded', () => {
  window.calendarApp = new CalendarApp();
});
