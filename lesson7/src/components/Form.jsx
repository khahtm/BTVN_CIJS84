import React, { useState } from 'react';

const Form = ({ onAdd }) => {
  const [ho, setHo] = useState('');
  const [ten, setTen] = useState('');
  const [gioiTinh, setGioiTinh] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!ho) {
      alert('Chưa nhập họ');
      return;
    }

    if (!ten) {
      alert('Chưa nhập tên');
      return;
    }

    if (!gioiTinh) {
      alert('Chưa chọn giới tính');
      return;
    }

    onAdd({ ho, ten, gioiTinh });
    setHo('');
    setTen('');
    setGioiTinh('');
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <div>
        <label htmlFor="ho">Họ:</label>
        <input
          type="text"
          id="ho"
          value={ho}
          onChange={(e) => setHo(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="ten">Tên:</label>
        <input
          type="text"
          id="ten"
          value={ten}
          onChange={(e) => setTen(e.target.value)}
        />
      </div>
      <div>
        <label>Giới tính:</label>
        <div>
          <label>
            <input
              type="radio"
              value="Nam"
              checked={gioiTinh === 'Nam'}
              onChange={() => setGioiTinh('Nam')}
            />
            Nam
          </label>
          <label>
            <input
              type="radio"
              value="Nữ"
              checked={gioiTinh === 'Nữ'}
              onChange={() => setGioiTinh('Nữ')}
            />
            Nữ
          </label>
        </div>
      </div>
      <button type="submit">Thêm</button>
    </form>
  );
};

export default Form;
