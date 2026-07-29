let materialsData = [];

async function loadMaterials() {
  const tbody = document.getElementById('materials-table-body');
  if (!tbody) return;
  
  tbody.innerHTML = '<tr><td colspan="6" style="text-align:center;">جاري تحميل البيانات...</td></tr>';
  
  try {
    const { data, error } = await supabase.from('materials').select('*').order('id', { ascending: true });
    if (error) throw error;
    
    materialsData = data || [];
    renderMaterialsTable(materialsData);
  } catch (err) {
    console.error('خطأ في جلب البيانات:', err);
    tbody.innerHTML = '<tr><td colspan="6" style="text-align:center; color:red;">حدث خطأ أثناء تحميل البيانات</td></tr>';
  }
}

function renderMaterialsTable(data) {
  const tbody = document.getElementById('materials-table-body');
  if (!tbody) return;
  
  if (data.length === 0) {
    tbody.innerHTML = '<tr><td colspan="6" style="text-align:center;">لا توجد مواد مسجلة</td></tr>';
    return;
  }
  
  tbody.innerHTML = data.map((item, index) => `
    <tr>
      <td>${index + 1}</td>
      <td><strong>${item.name || '-'}</strong></td>
      <td>${item.category || '-'}</td>
      <td>${item.quantity || 0} ${item.unit || ''}</td>
      <td>${item.min_quantity || 0}</td>
      <td>
        <button onclick="editMaterial(${item.id})" style="background:none; border:none; cursor:pointer;">✏️</button>
        <button onclick="deleteMaterial(${item.id})" style="background:none; border:none; cursor:pointer;">🗑️</button>
      </td>
    </tr>
  `).join('');
}
