let transactionsData = [];

async function loadTransactions() {
  const tbody = document.getElementById('transactions-table-body');
  if (!tbody) return;

  tbody.innerHTML = '<tr><td colspan="5" style="text-align:center;">جاري تحميل سجل الحركات...</td></tr>';

  try {
    const { data, error } = await supabase.from('transactions').select('*').order('created_at', { ascending: false });
    if (error) throw error;

    transactionsData = data || [];
    renderTransactionsTable(transactionsData);
  } catch (err) {
    console.error('خطأ في جلب الحركات:', err);
    tbody.innerHTML = '<tr><td colspan="5" style="text-align:center; color:red;">حدث خطأ أثناء تحميل سجل الحركات</td></tr>';
  }
}

function renderTransactionsTable(data) {
  const tbody = document.getElementById('transactions-table-body');
  if (!tbody) return;

  if (data.length === 0) {
    tbody.innerHTML = '<tr><td colspan="5" style="text-align:center;">لا توجد حركات مسجلة</td></tr>';
    return;
  }

  tbody.innerHTML = data.map((item, index) => `
    <tr>
      <td>${index + 1}</td>
      <td>${item.material_name || '-'}</td>
      <td>${item.type === 'out' ? '📤 صرف' : '📥 إضافة'}</td>
      <td>${item.quantity || 0}</td>
      <td>${item.created_at ? new Date(item.created_at).toLocaleDateString('ar-SA') : '-'}</td>
    </tr>
  `).join('');
}
