/**
 * TABRANIJ Documentation Application Engine
 * Handles SPA hash routing, 3-column state sync, search modal,
 * theme toggling, code preview, and live interactive TABRANIJ calculator.
 */

(function () {
  'use strict';

  const STORE = window.TABRANIJ_CHAPTERS || {};
  const CHAPTER_KEYS = [
    'index',
    '01-pengenalan',
    '02-konsep-gt',
    '03-parameter-tabranij',
    '04-membaca-candle',
    '05-bias-arah-struktur',
    '06-multi-candle-timeframe',
    '07-entry-exit',
    '08-manajemen-risiko',
    '09-contoh-kasus',
    '10-tool-visualizer',
    '11-checklist-harian',
    '12-glosarium',
    '13-nasihat-investasi',
    '14-jurnal-trading',
    '15-mengelola-keuntungan'
  ];

  let currentChapterKey = 'index';
  let activeCodeLang = 'javascript';
  let activePanelTab = 'spec';

  // DOM Elements Cache
  const el = {
    themeToggleBtn: document.getElementById('themeToggleBtn'),
    progressBar: document.getElementById('progressBar'),
    sidebar: document.getElementById('sidebar'),
    codePanel: document.getElementById('codePanel'),
    drawerBackdrop: document.getElementById('drawerBackdrop'),
    mobileMenuBtn: document.getElementById('mobileMenuBtn'),
    mobileCodeBtn: document.getElementById('mobileCodeBtn'),
    contentArea: document.getElementById('contentArea'),
    breadcrumbCategory: document.getElementById('breadcrumbCategory'),
    breadcrumbCurrent: document.getElementById('breadcrumbCurrent'),
    paginationContainer: document.getElementById('paginationContainer'),
    // Code Panel Elements
    tabBtnSpec: document.getElementById('tabBtnSpec'),
    tabBtnCode: document.getElementById('tabBtnCode'),
    tabBtnSim: document.getElementById('tabBtnSim'),
    paneSpec: document.getElementById('paneSpec'),
    paneCode: document.getElementById('paneCode'),
    paneSim: document.getElementById('paneSim'),
    specContent: document.getElementById('specContent'),
    codeContent: document.getElementById('codeContent'),
    copyCodeBtn: document.getElementById('copyCodeBtn'),
    // Simulator Elements
    simT: document.getElementById('simT'),
    simA: document.getElementById('simA'),
    simR: document.getElementById('simR'),
    simI: document.getElementById('simI'),
    valAtas: document.getElementById('valAtas'),
    valNeto: document.getElementById('valNeto'),
    valBawah: document.getElementById('valBawah'),
    valJulat: document.getElementById('valJulat'),
    biasCard: document.getElementById('biasCard'),
    biasText: document.getElementById('biasText'),
    identityBadge: document.getElementById('identityBadge'),
    candleSvg: document.getElementById('candleSvg'),
    // Search Modal Elements
    searchModal: document.getElementById('searchModal'),
    searchTrigger: document.getElementById('searchTrigger'),
    searchInput: document.getElementById('searchInput'),
    searchResults: document.getElementById('searchResults'),
    closeSearchModal: document.getElementById('closeSearchModal')
  };

  /* ==========================================================================
     THEME MANAGEMENT (DARK / LIGHT)
     ========================================================================== */
  function initTheme() {
    const savedTheme = localStorage.getItem('gt_theme');
    const systemDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme || (systemDark ? 'dark' : 'dark'); // default dark for developer aesthetic
    setTheme(initialTheme);

    if (el.themeToggleBtn) {
      el.themeToggleBtn.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme') || 'dark';
        const next = current === 'dark' ? 'light' : 'dark';
        setTheme(next);
      });
    }
  }

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('gt_theme', theme);
    if (el.themeToggleBtn) {
      el.themeToggleBtn.innerHTML = theme === 'dark' ? '☀️ Terang' : '🌙 Gelap';
      el.themeToggleBtn.setAttribute('title', `Beralih ke mode ${theme === 'dark' ? 'terang' : 'gelap'}`);
    }
  }

  /* ==========================================================================
     DRAWER & RESPONSIVE CONTROLS
     ========================================================================== */
  function initDrawers() {
    if (el.mobileMenuBtn) {
      el.mobileMenuBtn.addEventListener('click', () => {
        el.sidebar.classList.toggle('open');
        el.codePanel.classList.remove('open');
        updateBackdrop();
      });
    }

    if (el.mobileCodeBtn) {
      el.mobileCodeBtn.addEventListener('click', () => {
        el.codePanel.classList.toggle('open');
        el.sidebar.classList.remove('open');
        updateBackdrop();
      });
    }

    if (el.drawerBackdrop) {
      el.drawerBackdrop.addEventListener('click', () => {
        el.sidebar.classList.remove('open');
        el.codePanel.classList.remove('open');
        updateBackdrop();
      });
    }

    // Collapsible navigation groups in sidebar
    document.querySelectorAll('.nav-group-title').forEach(btn => {
      btn.addEventListener('click', () => {
        const group = btn.closest('.nav-group');
        if (group) group.classList.toggle('open');
      });
    });
  }

  function updateBackdrop() {
    const isOpen = (el.sidebar && el.sidebar.classList.contains('open')) ||
                   (el.codePanel && el.codePanel.classList.contains('open'));
    if (el.drawerBackdrop) {
      el.drawerBackdrop.classList.toggle('active', isOpen);
    }
  }

  /* ==========================================================================
     ROUTING & CHAPTER RENDERING
     ========================================================================== */
  function initRouter() {
    window.addEventListener('hashchange', handleHash);
    handleHash();
  }

  function handleHash() {
    let rawHash = window.location.hash.replace(/^#\/?/, '').trim();
    // Remove .html if someone passed #01-pengenalan.html
    rawHash = rawHash.replace(/\.html$/, '');

    if (!rawHash || !STORE[rawHash]) {
      // Check if it's one of the chapter keys
      rawHash = 'index';
    }

    loadChapter(rawHash);
  }

  function loadChapter(key) {
    const data = STORE[key];
    if (!data) return;

    currentChapterKey = key;

    // 1. Update Breadcrumbs
    if (el.breadcrumbCategory) el.breadcrumbCategory.textContent = data.category || 'Dokumentasi';
    if (el.breadcrumbCurrent) el.breadcrumbCurrent.textContent = data.title || 'Ringkasan';

    // 2. Render Main Body
    if (el.contentArea) {
      let bodyHtml = data.body || '';

      // Fallback if body not yet set
      if (!bodyHtml) {
        bodyHtml = `
          <div class="chapter-badge">${data.badge || 'TABRANIJ'}</div>
          <h1>${data.title}</h1>
          <p>Materi sedang disiapkan untuk bab ini.</p>
        `;
      }

      el.contentArea.innerHTML = bodyHtml;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // 3. Update Sidebar Active Links
    document.querySelectorAll('.nav-link').forEach(link => {
      const targetKey = link.getAttribute('data-chapter');
      if (targetKey === key) {
        link.classList.add('active');
        // Ensure parent group is expanded
        const parentGroup = link.closest('.nav-group');
        if (parentGroup) parentGroup.classList.add('open');
      } else {
        link.classList.remove('active');
      }
    });

    // 4. Update Prev / Next Pagination Cards
    renderPagination(key);

    // 5. Update Right Column Code & Spec
    updateRightPanel(key);

    // Close drawers on mobile after navigation
    if (el.sidebar) el.sidebar.classList.remove('open');
    if (el.codePanel) el.codePanel.classList.remove('open');
    updateBackdrop();
  }

  function renderPagination(currentKey) {
    if (!el.paginationContainer) return;

    const idx = CHAPTER_KEYS.indexOf(currentKey);
    const prevKey = idx > 0 ? CHAPTER_KEYS[idx - 1] : null;
    const nextKey = idx < CHAPTER_KEYS.length - 1 ? CHAPTER_KEYS[idx + 1] : null;

    let html = '';

    if (prevKey && STORE[prevKey]) {
      const p = STORE[prevKey];
      html += `
        <a href="#${prevKey}" class="pagination-card prev">
          <span class="pagination-label">← Bab Sebelumnya</span>
          <span class="pagination-title">${p.title}</span>
        </a>
      `;
    } else {
      html += `<div></div>`;
    }

    if (nextKey && STORE[nextKey]) {
      const n = STORE[nextKey];
      html += `
        <a href="#${nextKey}" class="pagination-card next">
          <span class="pagination-label">Bab Selanjutnya →</span>
          <span class="pagination-title">${n.title}</span>
        </a>
      `;
    }

    el.paginationContainer.innerHTML = html;
  }

  /* ==========================================================================
     RIGHT COLUMN: CODE & SPEC PANEL
     ========================================================================== */
  function initRightPanel() {
    // Tabs switching
    const tabs = [
      { btn: el.tabBtnSpec, pane: el.paneSpec, name: 'spec' },
      { btn: el.tabBtnCode, pane: el.paneCode, name: 'code' },
      { btn: el.tabBtnSim, pane: el.paneSim, name: 'sim' }
    ];

    tabs.forEach(({ btn, pane, name }) => {
      if (!btn) return;
      btn.addEventListener('click', () => {
        tabs.forEach(t => {
          if (t.btn) t.btn.classList.remove('active');
          if (t.pane) t.pane.classList.remove('active');
        });
        btn.classList.add('active');
        if (pane) pane.classList.add('active');
        activePanelTab = name;
      });
    });

    // Language pills in Code Tab
    document.querySelectorAll('.lang-pill').forEach(pill => {
      pill.addEventListener('click', () => {
        document.querySelectorAll('.lang-pill').forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        activeCodeLang = pill.getAttribute('data-lang') || 'javascript';
        renderActiveCode();
      });
    });

    // Copy Code Button
    if (el.copyCodeBtn) {
      el.copyCodeBtn.addEventListener('click', () => {
        const text = el.codeContent ? el.codeContent.textContent : '';
        if (text) {
          navigator.clipboard.writeText(text).then(() => {
            const orig = el.copyCodeBtn.innerHTML;
            el.copyCodeBtn.innerHTML = '✓ Tersalin!';
            el.copyCodeBtn.style.color = '#34d399';
            setTimeout(() => {
              el.copyCodeBtn.innerHTML = orig;
              el.copyCodeBtn.style.color = '';
            }, 2000);
          });
        }
      });
    }
  }

  function updateRightPanel(key) {
    const data = STORE[key];
    if (!data) return;

    // 1. Render Spec Tab
    if (el.specContent) {
      let specHtml = '';
      const spec = data.spec || {};

      specHtml += `
        <div class="spec-box">
          <div class="spec-title">📌 Fokus Materi</div>
          <div style="font-weight: 700; color: #f8fafc; font-size: 0.95rem; margin-bottom: 0.25rem;">${data.title}</div>
          <div class="spec-desc">${spec.fokus || spec.prinsip || spec.aturan_bias || spec.model || 'Kerangka kerja analitis Metode GT TABRANIJ.'}</div>
        </div>
      `;

      if (spec.identitas || spec.akronim) {
        specHtml += `
          <div class="spec-box">
            <div class="spec-title">📐 Identitas Kunci</div>
            <code class="spec-formula">${spec.identitas || spec.akronim || 'Julat = Atas + Neto + Bawah'}</code>
            <div class="spec-desc">Verifikasi konsistensi matematis wajib sebelum eksekusi order.</div>
          </div>
        `;
      }

      if (spec.titik_tari) {
        specHtml += `
          <div class="spec-box">
            <div class="spec-title">🎯 Titik TARI & Rentang</div>
            <div style="display:flex; flex-direction:column; gap:0.35rem; font-size: 0.8rem; font-family: var(--font-mono); color: #cbd5e1;">
              <div>• T: Tinggi (Puncak Atas)</div>
              <div>• A: Awal (Harga Pembukaan)</div>
              <div>• R: Rendah (Dasar Bawah)</div>
              <div>• I: Inti (Harga Penutupan/Kini)</div>
            </div>
          </div>
        `;
      }

      if (spec.sl_formula || spec.tp_formula) {
        specHtml += `
          <div class="spec-box">
            <div class="spec-title">⚡ Aturan Order & Buffer</div>
            <code class="spec-formula">${spec.sl_formula || ''}</code>
            <code class="spec-formula">${spec.tp_formula || ''}</code>
          </div>
        `;
      }

      specHtml += `
        <div class="spec-box" style="margin-bottom:0">
          <div class="spec-title">💡 Panduan Cepat</div>
          <div class="spec-desc">
            Beralih ke tab <strong>Kode</strong> untuk implementasi fungsi otomatis, atau tab <strong>Simulator</strong> untuk menguji lilin harga interaktif.
          </div>
        </div>
      `;

      el.specContent.innerHTML = specHtml;
    }

    // 2. Render Code Tab
    renderActiveCode();
  }

  function renderActiveCode() {
    if (!el.codeContent) return;
    const data = STORE[currentChapterKey] || {};
    let snippet = data[activeCodeLang];

    if (!snippet) {
      // fallback to javascript or index
      snippet = data.javascript || STORE.index.javascript || '// Snippet sedang disiapkan';
    }

    el.codeContent.textContent = snippet;
  }

  /* ==========================================================================
     LIVE TABRANIJ CALCULATOR & CANDLE VISUALIZER
     ========================================================================== */
  function initSimulator() {
    // Preset buttons
    const presets = {
      bullish: { T: 68000, A: 65000, R: 64800, I: 67800 },
      bearish: { T: 68200, A: 67500, R: 64000, I: 64200 },
      hammer: { T: 66200, A: 65800, R: 63000, I: 66000 },
      doji: { T: 66500, A: 65000, R: 63500, I: 65020 },
      star: { T: 68500, A: 65000, R: 64800, I: 65200 }
    };

    document.querySelectorAll('.preset-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const pKey = btn.getAttribute('data-preset');
        if (presets[pKey]) {
          const p = presets[pKey];
          if (el.simT) el.simT.value = p.T;
          if (el.simA) el.simA.value = p.A;
          if (el.simR) el.simR.value = p.R;
          if (el.simI) el.simI.value = p.I;
          recalculateSim();
        }
      });
    });

    [el.simT, el.simA, el.simR, el.simI].forEach(input => {
      if (input) {
        input.addEventListener('input', recalculateSim);
      }
    });

    // Run initial calculation
    recalculateSim();
  }

  function recalculateSim() {
    const T = parseFloat(el.simT ? el.simT.value : 0) || 0;
    const A = parseFloat(el.simA ? el.simA.value : 0) || 0;
    const R = parseFloat(el.simR ? el.simR.value : 0) || 0;
    const I = parseFloat(el.simI ? el.simI.value : 0) || 0;

    // TABRANIJ Formulas
    const atas = Math.max(0, +(T - Math.max(A, I)).toFixed(2));
    const bawah = Math.max(0, +(Math.min(A, I) - R).toFixed(2));
    const neto = +(Math.abs(I - A)).toFixed(2);
    const julat = Math.max(0, +(T - R).toFixed(2));

    const isBullish = I >= A;
    const sumParts = +(atas + neto + bawah).toFixed(2);
    const isValid = Math.abs(julat - sumParts) < 0.05;

    // Display numbers
    if (el.valAtas) el.valAtas.textContent = atas;
    if (el.valNeto) el.valNeto.textContent = neto;
    if (el.valBawah) el.valBawah.textContent = bawah;
    if (el.valJulat) el.valJulat.textContent = julat;

    // Display Bias Card
    if (el.biasCard && el.biasText) {
      if (isBullish) {
        el.biasCard.className = 'bias-card bullish';
        el.biasText.innerHTML = `🟢 BIAS NAIK / BULLISH (Inti ${I} ≥ Awal ${A})`;
      } else {
        el.biasCard.className = 'bias-card bearish';
        el.biasText.innerHTML = `🔴 BIAS TURUN / BEARISH (Inti ${I} < Awal ${A})`;
      }
    }

    // Display Identity Check
    if (el.identityBadge) {
      if (isValid) {
        el.identityBadge.className = 'identity-badge valid';
        el.identityBadge.innerHTML = `✓ Identitas Sesuai: ${atas} + ${neto} + ${bawah} = ${julat}`;
      } else {
        el.identityBadge.className = 'identity-badge';
        el.identityBadge.innerHTML = `⚠️ Periksa Titik: T harus tertinggi & R harus terendah`;
      }
    }

    // Render SVG Candle
    renderCandleSvg(T, A, R, I, atas, neto, bawah, julat, isBullish);
  }

  function renderCandleSvg(T, A, R, I, atas, neto, bawah, julat, isBullish) {
    if (!el.candleSvg) return;

    if (julat <= 0) {
      el.candleSvg.innerHTML = '<text x="140" y="70" fill="#64748b" text-anchor="middle" font-size="12">Nilai T harus lebih besar dari R</text>';
      return;
    }

    const svgH = 140;
    const svgW = 280;
    const padY = 18;
    const availH = svgH - (padY * 2);

    // Scale price to Y position
    const getY = (val) => padY + availH * (1 - (val - R) / julat);

    const yT = getY(T);
    const yR = getY(R);
    const yA = getY(A);
    const yI = getY(I);

    const bodyTop = Math.min(yA, yI);
    const bodyBottom = Math.max(yA, yI);
    const bodyHeight = Math.max(4, bodyBottom - bodyTop);

    const candleColor = isBullish ? '#34d399' : '#f43f5e';
    const wickColor = isBullish ? '#10b981' : '#e11d48';

    el.candleSvg.innerHTML = `
      <!-- Center High-Low Wick -->
      <line x1="140" y1="${yT}" x2="140" y2="${yR}" stroke="${wickColor}" stroke-width="2.5" stroke-linecap="round" />

      <!-- Candle Body -->
      <rect x="110" y="${bodyTop}" width="60" height="${bodyHeight}" rx="4"
            fill="${candleColor}" stroke="${wickColor}" stroke-width="1.5" />

      <!-- Level Labels -->
      <text x="80" y="${yT + 4}" fill="#60a5fa" font-size="10" font-weight="700" text-anchor="end" font-family="monospace">T: ${T}</text>
      <text x="200" y="${bodyTop + 4}" fill="#f8fafc" font-size="10" font-weight="600" font-family="monospace">Atas: ${Math.max(A, I)}</text>
      <text x="200" y="${bodyBottom + 12}" fill="#94a3b8" font-size="10" font-weight="600" font-family="monospace">Bawah: ${Math.min(A, I)}</text>
      <text x="80" y="${yR + 4}" fill="#f87171" font-size="10" font-weight="700" text-anchor="end" font-family="monospace">R: ${R}</text>
    `;
  }

  /* ==========================================================================
     GLOBAL SEARCH MODAL (CTRL + K / CMD + K)
     ========================================================================== */
  function initSearch() {
    function openModal() {
      if (!el.searchModal) return;
      el.searchModal.classList.add('open');
      if (el.searchInput) {
        el.searchInput.value = '';
        el.searchInput.focus();
      }
      renderSearchResults('');
    }

    function closeModal() {
      if (!el.searchModal) return;
      el.searchModal.classList.remove('open');
    }

    // Keyboard Shortcuts (Ctrl+K or Cmd+K)
    window.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        openModal();
      } else if (e.key === 'Escape') {
        closeModal();
      }
    });

    if (el.searchTrigger) {
      el.searchTrigger.addEventListener('click', openModal);
    }

    if (el.closeSearchModal) {
      el.closeSearchModal.addEventListener('click', closeModal);
    }

    if (el.searchModal) {
      el.searchModal.addEventListener('click', (e) => {
        if (e.target === el.searchModal) closeModal();
      });
    }

    if (el.searchInput) {
      el.searchInput.addEventListener('input', (e) => {
        renderSearchResults(e.target.value.trim());
      });
    }
  }

  function renderSearchResults(query) {
    if (!el.searchResults) return;

    const q = query.toLowerCase();
    const results = [];

    CHAPTER_KEYS.forEach(k => {
      const data = STORE[k];
      if (!data) return;

      const titleMatch = (data.title || '').toLowerCase().includes(q);
      const catMatch = (data.category || '').toLowerCase().includes(q);
      const bodyMatch = (data.body || '').toLowerCase().includes(q);

      if (!q || titleMatch || catMatch || bodyMatch) {
        let snippet = '';
        if (q && bodyMatch) {
          // Extract short preview around keyword
          const plainText = data.body.replace(/<[^>]+>/g, ' ');
          const idx = plainText.toLowerCase().indexOf(q);
          const start = Math.max(0, idx - 40);
          const end = Math.min(plainText.length, idx + 80);
          snippet = '…' + plainText.substring(start, end).trim() + '…';
        } else {
          snippet = data.badge || data.category || 'Metode GT TABRANIJ';
        }

        results.push({
          key: k,
          title: data.title,
          category: data.category,
          badge: data.badge,
          snippet: snippet
        });
      }
    });

    if (results.length === 0) {
      el.searchResults.innerHTML = `
        <div style="padding: 2rem; text-align: center; color: var(--text-muted); font-size: 0.9rem;">
          Tidak ada hasil untuk "<strong>${query}</strong>". Coba kata kunci seperti <em>TARI</em>, <em>Julat</em>, atau <em>Risiko</em>.
        </div>
      `;
      return;
    }

    el.searchResults.innerHTML = results.slice(0, 8).map(r => `
      <a href="#${r.key}" class="search-result-item" data-search-target="${r.key}">
        <div class="result-badge">${r.category} · ${r.badge}</div>
        <div class="result-title">${r.title}</div>
        <div class="result-snippet">${r.snippet}</div>
      </a>
    `).join('');

    // Attach click handlers to close modal upon selection
    el.searchResults.querySelectorAll('.search-result-item').forEach(item => {
      item.addEventListener('click', () => {
        if (el.searchModal) el.searchModal.classList.remove('open');
      });
    });
  }

  /* ==========================================================================
     READING PROGRESS SCROLLER
     ========================================================================== */
  function initProgressBar() {
    window.addEventListener('scroll', () => {
      if (!el.progressBar) return;
      const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
      el.progressBar.style.width = scrolled + '%';
    });
  }

  /* ==========================================================================
     BOOTSTRAP
     ========================================================================== */
  document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initDrawers();
    initRightPanel();
    initSimulator();
    initSearch();
    initProgressBar();
    initRouter();
  });

})();
