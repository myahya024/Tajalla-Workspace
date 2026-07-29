function checkPin() {
  const pinInput = document.getElementById('pin-input');
  if (pinInput && pinInput.value === SECRET_PIN) {
    localStorage.setItem(SESSION_KEY, Date.now().toString());
    grantAccess();
  } else {
    const errorEl = document.getElementById('login-error');
    if (errorEl) errorEl.style.display = 'block';
  }
}

function checkExistingSession() {
  if (localStorage.getItem(SESSION_KEY)) {
    grantAccess();
  }
}

function grantAccess() {
  const overlay = document.getElementById('login-overlay');
  const mainApp = document.getElementById('main-app');
  if (overlay) overlay.style.display = 'none';
  if (mainApp) mainApp.style.display = 'block';
  showHomeHub();
}

function logout() {
  localStorage.removeItem(SESSION_KEY);
  location.reload();
}

function togglePasswordVisibility() {
  const pin = document.getElementById('pin-input');
  if (pin) pin.type = pin.type === 'password' ? 'text' : 'password';
}
