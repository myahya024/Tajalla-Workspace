function hideAllSections() {
  document.getElementById('home-hub-view').style.display = 'none';
  document.getElementById('raw-materials-section').style.display = 'none';
  document.getElementById('general-inventory-section').style.display = 'none';
  document.getElementById('daily-transactions-section').style.display = 'none';
}

function showHomeHub() {
  hideAllSections();
  document.getElementById('home-hub-view').style.display = 'block';
}

function openRawMaterialsSection() {
  hideAllSections();
  document.getElementById('raw-materials-section').style.display = 'block';
}

function openWelcomeKitSection() {
  hideAllSections();
  document.getElementById('general-inventory-section').style.display = 'block';
}

function openDailyTransactionsSection() {
  hideAllSections();
  document.getElementById('daily-transactions-section').style.display = 'block';
}
