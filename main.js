import interactiveCsvRaw from './Article patterns_Website dataset - Interactive_Categories_final.csv?raw';
import narrativeCsvRaw from './Article patterns_Website dataset - Narrative_Categories_final.csv?raw';

// Bulletproof RFC4180 CSV Parser
function parseCSV(text) {
  const lines = [];
  let row = [];
  let inQuotes = false;
  let currentToken = '';
  
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    const nextChar = text[i + 1];
    
    if (char === '"') {
      if (inQuotes && nextChar === '"') {
        currentToken += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (char === ',' && !inQuotes) {
      row.push(currentToken.trim());
      currentToken = '';
    } else if ((char === '\r' || char === '\n') && !inQuotes) {
      if (char === '\r' && nextChar === '\n') {
        i++;
      }
      row.push(currentToken.trim());
      if (row.some(cell => cell.length > 0)) {
        lines.push(row);
      }
      row = [];
      currentToken = '';
    } else {
      currentToken += char;
    }
  }
  if (currentToken.length > 0 || row.length > 0) {
    row.push(currentToken.trim());
    if (row.some(cell => cell.length > 0)) {
      lines.push(row);
    }
  }
  return lines;
}

// Parse Interactive Pattern CSV
function loadInteractivePatterns() {
  const rawRows = parseCSV(interactiveCsvRaw);
  const data = [];
  let currentCategory = '';

  for (let i = 1; i < rawRows.length; i++) {
    const row = rawRows[i];
    if (!row || row.length < 4) continue;
    
    const categoryCell = row[1];
    const pattern = row[2];
    const description = row[3];

    if (categoryCell) {
      currentCategory = categoryCell;
    }

    if (pattern && description) {
      data.push({
        id: `interactive-${i}`,
        category: currentCategory,
        pattern: pattern,
        description: description,
        type: 'INTERACTIVE PATTERN'
      });
    }
  }
  return data;
}

// Parse Narrative Pattern CSV
function loadNarrativePatterns() {
  const rawRows = parseCSV(narrativeCsvRaw);
  const data = [];
  let currentCategory = '';

  for (let i = 1; i < rawRows.length; i++) {
    const row = rawRows[i];
    if (!row || row.length < 3) continue;
    
    const categoryCell = row[0];
    const pattern = row[1];
    const description = row[2];

    if (categoryCell) {
      currentCategory = categoryCell;
    }

    if (pattern && description) {
      data.push({
        id: `narrative-${i}`,
        category: currentCategory,
        pattern: pattern,
        description: description,
        type: 'NARRATIVE PATTERN'
      });
    }
  }
  return data;
}

document.addEventListener('DOMContentLoaded', () => {
  const interactiveData = loadInteractivePatterns();
  const narrativeData = loadNarrativePatterns();

  const interactiveCategories = [...new Set(interactiveData.map(item => item.category))];
  const narrativeCategories = [...new Set(narrativeData.map(item => item.category))];

  // DOM Elements
  const viewHero = document.getElementById('view-hero');
  const viewPatterns = document.getElementById('view-patterns');
  const appNavbar = document.getElementById('app-navbar');
  
  const navLogo = document.getElementById('nav-logo');
  const navHome = document.getElementById('nav-home');
  const navInteractive = document.getElementById('nav-interactive');
  const navNarrative = document.getElementById('nav-narrative');
  const navSketchnotes = document.getElementById('nav-sketchnotes');

  const pageTitle = document.getElementById('patterns-page-title');
  const pageDesc = document.getElementById('patterns-page-desc');
  const searchInput = document.getElementById('search-input');
  
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const tagAllBtn = document.getElementById('tag-all');
  const activeTagPill = document.getElementById('active-tag-pill');
  const activeTagName = document.getElementById('active-tag-name');
  const tagCloseBtn = document.getElementById('tag-close-btn');

  const sidebarDrawer = document.getElementById('sidebar-drawer');
  const drawerBackdrop = document.getElementById('drawer-backdrop');
  const drawerCloseBtn = document.getElementById('drawer-close-btn');
  const drawerTitle = document.getElementById('drawer-title');
  const drawerCategoryList = document.getElementById('drawer-category-list');

  const patternsGrid = document.getElementById('patterns-grid');

  const heroAboutBtn = document.getElementById('hero-about-btn');
  const aboutModal = document.getElementById('about-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');

  let activeTab = 'interactive'; // 'interactive' or 'narrative'
  let activeCategory = 'All';

  // Irregular, Non-Repeating Deterministic Card Height Variants
  // Tall (~360px), Medium (~280px), Short (~190px)
  const heightVariants = [
    360, 190, 280, 280, 360, 190, 190, 280, 360, 280,
    190, 360, 360, 280, 190, 190, 360, 280, 280, 190,
    360, 360, 190, 280, 190, 360, 280, 190, 360, 280
  ];

  // Helper to compute deterministic height per card item
  function getPlaceholderHeight(itemIndex, itemPattern) {
    // Combine index and string hash for complete deterministic variety
    let hash = itemIndex * 17;
    for (let i = 0; i < itemPattern.length; i++) {
      hash += itemPattern.charCodeAt(i);
    }
    const idx = Math.abs(hash) % heightVariants.length;
    return heightVariants[idx];
  }

  // About Us Modal Handlers
  function openAboutModal() {
    if (aboutModal) {
      aboutModal.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeAboutModal() {
    if (aboutModal) {
      aboutModal.classList.remove('open');
      document.body.style.overflow = '';
    }
  }

  heroAboutBtn?.addEventListener('click', (e) => {
    e.preventDefault();
    openAboutModal();
  });
  modalCloseBtn?.addEventListener('click', closeAboutModal);
  aboutModal?.addEventListener('click', (e) => {
    if (e.target === aboutModal) closeAboutModal();
  });

  // Left Sidebar Drawer Event Handlers (Figma Node 115:594)
  function openDrawer() {
    if (sidebarDrawer && drawerBackdrop) {
      sidebarDrawer.classList.add('open');
      drawerBackdrop.classList.add('active');
    }
  }

  function closeDrawer() {
    if (sidebarDrawer && drawerBackdrop) {
      sidebarDrawer.classList.remove('open');
      drawerBackdrop.classList.remove('active');
    }
  }

  hamburgerBtn?.addEventListener('click', openDrawer);
  drawerCloseBtn?.addEventListener('click', closeDrawer);
  drawerBackdrop?.addEventListener('click', closeDrawer);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeAboutModal();
      closeDrawer();
    }
  });

  // Populate Left Sidebar Drawer Category Radio List
  function renderDrawerCategories() {
    if (!drawerCategoryList) return;

    const currentCategories = activeTab === 'interactive' ? interactiveCategories : narrativeCategories;
    
    // Update Drawer Title
    if (drawerTitle) {
      drawerTitle.textContent = activeCategory === 'All' ? currentCategories[0] || 'Categories' : activeCategory;
    }

    let html = '';

    currentCategories.forEach((cat) => {
      const isChecked = activeCategory === cat;
      html += `
        <li class="drawer-category-item">
          <label class="drawer-radio-label">
            <input type="radio" name="drawer-category" value="${escapeHtml(cat)}" ${isChecked ? 'checked' : ''}>
            <span class="drawer-radio-custom"></span>
            <span class="drawer-text ${isChecked ? 'active' : ''}">${escapeHtml(cat)}</span>
          </label>
        </li>
      `;
    });

    drawerCategoryList.innerHTML = html;

    // Attach Radio Selection Event Listeners
    drawerCategoryList.querySelectorAll('input[name="drawer-category"]').forEach(radio => {
      radio.addEventListener('change', (e) => {
        setCategoryFilter(e.target.value);
      });
    });
  }

  // Set Active Category Filter
  function setCategoryFilter(catName) {
    activeCategory = catName;

    if (activeCategory === 'All') {
      if (activeTagPill) activeTagPill.style.display = 'none';
      if (drawerTitle && activeTab === 'interactive') {
        drawerTitle.textContent = interactiveCategories[0] || 'Categories';
      }
    } else {
      if (activeTagPill) activeTagPill.style.display = 'inline-flex';
      if (activeTagName) activeTagName.textContent = activeCategory;
      if (drawerTitle) drawerTitle.textContent = activeCategory;
    }

    renderDrawerCategories();
    renderPatternsGrid();
  }

  // Clear Tag Pill Click Listener
  tagCloseBtn?.addEventListener('click', () => setCategoryFilter('All'));
  tagAllBtn?.addEventListener('click', () => setCategoryFilter('All'));

  // Pinterest-Style Masonry Layout Algorithm (Shortest-Column Dispenser)
  function renderPatternsGrid() {
    if (!patternsGrid) return;

    const currentData = activeTab === 'interactive' ? interactiveData : narrativeData;
    const searchQuery = (searchInput?.value || '').toLowerCase().trim();

    const filteredPatterns = currentData.filter(item => {
      const matchesCategory = (activeCategory === 'All') || (item.category === activeCategory);
      const matchesSearch = !searchQuery || 
        item.pattern.toLowerCase().includes(searchQuery) || 
        item.description.toLowerCase().includes(searchQuery) ||
        item.category.toLowerCase().includes(searchQuery);

      return matchesCategory && matchesSearch;
    });

    if (filteredPatterns.length === 0) {
      patternsGrid.innerHTML = `
        <div class="empty-state">
          <p>No pattern cards found matching your search and filter criteria.</p>
        </div>
      `;
      return;
    }

    // Determine column count based on container/window width
    const windowWidth = window.innerWidth;
    let numCols = 3;
    if (windowWidth < 640) {
      numCols = 1;
    } else if (windowWidth < 1100) {
      numCols = 2;
    }

    // Initialize columns
    const columns = Array.from({ length: numCols }, () => ({
      height: 0,
      cardsHtml: []
    }));

    // Distribute cards into shortest column (Authentic Pinterest Masonry)
    filteredPatterns.forEach((item, index) => {
      const imgHeight = getPlaceholderHeight(index, item.pattern);
      
      // Estimated total card height = image placeholder height + text content height (~120px)
      const totalCardHeight = imgHeight + 120;

      // Find column with minimum total height
      let minColIdx = 0;
      let minColHeight = columns[0].height;
      for (let c = 1; c < numCols; c++) {
        if (columns[c].height < minColHeight) {
          minColHeight = columns[c].height;
          minColIdx = c;
        }
      }

      // Card Markup
      const cardMarkup = `
        <article class="pattern-card-lf">
          <div class="card-img-placeholder" style="height: ${imgHeight}px;">
            <span class="card-badge-tag">${escapeHtml(item.category)}</span>
          </div>
          <h3 class="card-lf-title">${escapeHtml(item.pattern)}</h3>
          <p class="card-lf-desc">${escapeHtml(item.description)}</p>
          <a href="#" class="card-lf-link" onclick="event.preventDefault();">Read more &rarr;</a>
        </article>
      `;

      columns[minColIdx].cardsHtml.push(cardMarkup);
      columns[minColIdx].height += totalCardHeight + 36; // include vertical gap (36px)
    });

    // Render Column Containers
    patternsGrid.innerHTML = `
      <div class="patterns-grid-masonry">
        ${columns.map(col => `
          <div class="masonry-column">
            ${col.cardsHtml.join('')}
          </div>
        `).join('')}
      </div>
    `;
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  searchInput?.addEventListener('input', renderPatternsGrid);
  window.addEventListener('resize', renderPatternsGrid);

  // Router based on window hash
  function route() {
    const hash = window.location.hash || '#home';

    [navHome, navInteractive, navNarrative, navSketchnotes].forEach(el => el?.classList.remove('active'));

    if (hash === '#home' || hash === '' || hash === '#') {
      viewHero?.classList.add('active');
      viewPatterns?.classList.remove('active');
      if (appNavbar) appNavbar.style.display = 'none';
    } else {
      viewHero?.classList.remove('active');
      viewPatterns?.classList.add('active');
      if (appNavbar) appNavbar.style.display = 'flex';

      if (hash === '#narrative') {
        activeTab = 'narrative';
        navNarrative?.classList.add('active');
        if (pageTitle) pageTitle.textContent = 'Narrative Patterns';
        if (pageDesc) pageDesc.textContent = 'Patterns shaping compelling narrative experiences.';
      } else if (hash === '#sketchnotes') {
        activeTab = 'interactive';
        navSketchnotes?.classList.add('active');
        if (pageTitle) pageTitle.textContent = 'Sketchnotes';
        if (pageDesc) pageDesc.textContent = 'Visual note-taking for creative storytelling.';
      } else {
        activeTab = 'interactive';
        navInteractive?.classList.add('active');
        if (pageTitle) pageTitle.textContent = 'Interactive Patterns';
        if (pageDesc) pageDesc.textContent = 'Exploring dynamic and engaging interactive patterns.';
      }

      setCategoryFilter('All');
    }
  }

  navLogo?.addEventListener('click', () => {
    window.location.hash = '#home';
  });

  window.addEventListener('hashchange', route);

  route();
});
