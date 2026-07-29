// رمز الدخول الخاص بالنظام
const SECRET_PIN = "1234";

function checkPin() {
  const pinInput = document.getElementById('pin-input').value;
  const errorMsg = document.getElementById('login-error');

  if (pinInput === SECRET_PIN) {
    localStorage.setItem('tajalla_session', 'active');
    document.getElementById('login-overlay').style.display = 'none';
    document.getElementById('main-app').style.display = 'block';
    errorMsg.style.display = 'none';
  } else {
    errorMsg.style.display = 'block';
  }
}

function checkExistingSession() {
  const session = localStorage.getItem('tajalla_session');
  if (session === 'active') {
    document.getElementById('login-overlay').style.display = 'none';
    document.getElementById('main-app').style.display = 'block';
  }
}

function logout() {
  localStorage.removeItem('tajalla_session');
  location.reload();
}
