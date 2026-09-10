// Light/dark theme (Bootstrap 5.3 data-bs-theme) + Logs link handling.
// Loaded in <head> so the theme is applied before the page renders.
(function () {
  const STORAGE_KEY = 'wmbusmeters-theme';
  const media = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;

  function storedTheme() {
    try {
      const t = localStorage.getItem(STORAGE_KEY);
      return t === 'dark' || t === 'light' ? t : null;
    } catch (e) {
      return null;
    }
  }

  function preferredTheme() {
    return storedTheme() || (media && media.matches ? 'dark' : 'light');
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-bs-theme', theme);
    const btn = document.getElementById('theme-toggle');
    if (btn) btn.textContent = theme === 'dark' ? '☀ Light' : '🌙 Dark';
  }

  applyTheme(preferredTheme());

  if (media && media.addEventListener) {
    media.addEventListener('change', () => { if (!storedTheme()) applyTheme(preferredTheme()); });
  }

  window.addEventListener('DOMContentLoaded', () => {
    applyTheme(preferredTheme());

    const btn = document.getElementById('theme-toggle');
    if (btn) {
      btn.addEventListener('click', () => {
        const next = document.documentElement.getAttribute('data-bs-theme') === 'dark' ? 'light' : 'dark';
        try { localStorage.setItem(STORAGE_KEY, next); } catch (e) { /* ignore */ }
        applyTheme(next);
      });
    }

    // The add-on UI runs inside the Home Assistant ingress iframe. Build the
    // logs URL from the top window origin (the HA frontend), which is more
    // reliable than the host seen by Flask behind the ingress proxy.
    const logs = document.getElementById('nav-logs-link');
    if (logs) {
      logs.addEventListener('click', (e) => {
        e.preventDefault();
        let url = logs.href;
        try { url = window.top.location.origin + logs.dataset.logsPath; } catch (err) { /* cross-origin: keep server URL */ }
        window.top.location.assign(url);
      });
    }
  });
})();
