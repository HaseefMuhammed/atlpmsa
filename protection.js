// Offline detection
window.addEventListener('offline', function() {
  window.location.href = 'offline.html';
});

// Inspect protection
(function() {
  let allowInspect = false;
  const ADMIN_USER = "admin";
  const ADMIN_PASS = "atl@pmsa";

  function askAuth() {
    const user = prompt("Enter admin username to inspect:");
    if (user === ADMIN_USER) {
      const pass = prompt("Enter admin password:");
      if (pass === ADMIN_PASS) {
        allowInspect = true;
        sessionStorage.setItem('allowInspect', '1');
        alert('Developer tools enabled for this session.');
        return true;
      }
    }
    alert("Access denied.");
    return false;
  }

  function block(e) {
    if (!allowInspect) {
      e.preventDefault();
      askAuth();
    }
  }

  if (sessionStorage.getItem('allowInspect') === '1') {
    allowInspect = true;
  }

  window.addEventListener('contextmenu', block);
  window.addEventListener('keydown', function(e) {
    if (allowInspect) return;
    if (
      e.key === 'F12' ||
      (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J')) ||
      (e.ctrlKey && e.key === 'U')
    ) {
      e.preventDefault();
      askAuth();
    }
  });
})();
