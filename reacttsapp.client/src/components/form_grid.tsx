import { useState } from 'react';
import './form_grid.css';
const today = new Date().toISOString().split('T')[0];
const date = new Date();
date.setDate(date.getDate() - 1);
const yesterday = date.toISOString().split('T')[0]

export default function EditableFormTable() {
  const [isEditing, setIsEditing] = useState(false);
 
  const [newRow, setNewRow] = useState({ name: '', animal: '', date: today });
type Row = { name: string; animal: string; date: string };

const [rows, setRows] = useState<Row[]>([{ name: 'Tom', animal: '貓', date: today },
    { name: 'Jack', animal: '狗', date: today },
    { name: 'Nancy', animal: '貓', date: yesterday }]);

const handleChange = (index: number, field: keyof Row, value: string) => {
  const updated = [...rows];
  updated[index][field] = value;
  setRows(updated);
};

  const handleDelete = (index: number) => {
    const updated = [...rows];
    updated.splice(index, 1);
    setRows(updated);
  };

  const handleNewRowChange = (field: string, value:string) => {
    setNewRow({ ...newRow, [field]: value });
  };

  const handleSave = () => {
    if (newRow.name || newRow.animal || newRow.date !== today) {
      setRows([...rows, newRow]);
      setNewRow({ name: '', animal: '', date: today });
    }
    setIsEditing(false);
    // alert('已儲存：\n' + JSON.stringify([...rows, newRow]));
  };

  return (
    <div>
      <button onClick={() => {
        if (isEditing) handleSave();
        else setIsEditing(true);
      }}>
        {isEditing ? '儲存' : '編輯'}
      </button>

      <table>
        <thead>
          <tr>
            <th>姓名</th>
            <th>喜愛動物</th>
            <th>紀錄日期</th>
            {isEditing && <th>操作</th>}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              <td>
                {isEditing ? (
                  <input value={row.name} onChange={(e) => handleChange(index, 'name', e.target.value)} />
                ) : row.name}
              </td>
              <td>
                {isEditing ? (
                  <select
                    value={row.animal}
                    onChange={(e) => handleChange(index, 'animal', e.target.value)}
                  >
                    <option value="">請選擇</option>
                    <option>狗</option>
                    <option>貓</option>
                    <option>免子</option>
                    <option>卡皮巴拉</option>
                  </select>
                ) : row.animal || '請選擇'}
              </td>
              <td>
                {isEditing ? (
                  <input
                    type="date"
                    value={row.date}
                    onChange={(e) => handleChange(index, 'date', e.target.value)}
                  />
                ) : row.date}
              </td>
              {isEditing && (
                <td>
                  <button onClick={() => handleDelete(index)}>刪除</button>
                </td>
              )}
            </tr>
          ))}

          {isEditing && (
            <tr>
              <td>
                <input
                  value={newRow.name}
                  onChange={(e) => handleNewRowChange('name', e.target.value)}
                />
              </td>
              <td>
                <select
                  value={newRow.animal}
                  onChange={(e) => handleNewRowChange('animal', e.target.value)}
                >
                  <option value="">請選擇</option>
                  <option>狗</option>
                  <option>貓</option>
                  <option>免子</option>
                  <option>卡皮巴拉</option>
                </select>
              </td>
              <td>
                <input
                  type="date"
                  value={newRow.date}
                  onChange={(e) => handleNewRowChange('date', e.target.value)}
                />
              </td>
              <td></td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
