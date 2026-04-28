/* ================================
   DevLearn - Global App Script
================================ */

// Theme toggle
function initTheme() {
  const saved = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = saved || (prefersDark ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', theme);
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
}

// Sidebar toggle (mobile)
function toggleSidebar() {
  const sb = document.querySelector('.sidebar');
  if (sb) sb.classList.toggle('open');
}

// Highlight active sidebar link based on current page
function highlightSidebar() {
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.sidebar a').forEach(a => {
    const href = a.getAttribute('href');
    if (href && href.includes(page)) {
      a.classList.add('active');
    } else {
      a.classList.remove('active');
    }
  });
}

// Search filter for sidebar
function filterSidebar(query) {
  const q = query.toLowerCase().trim();
  document.querySelectorAll('.sidebar a').forEach(a => {
    a.style.display = a.textContent.toLowerCase().includes(q) ? 'block' : 'none';
  });
}

// Initialize
initTheme();
highlightSidebar();

// Expose helpers
try {
  window.toggleTheme = toggleTheme;
  window.toggleSidebar = toggleSidebar;
  window.filterSidebar = filterSidebar;
} catch (e) {}

