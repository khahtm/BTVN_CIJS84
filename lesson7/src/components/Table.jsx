import React from 'react';
import { RiDeleteBin5Line } from 'react-icons/ri';

const Table = ({ data, onDelete }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>#</th>
          <th>Họ và tên</th>
          <th>Giới tính</th>
          <th>Thao tác</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{`${item.ho} ${item.ten}`}</td>
            <td>
              <span
                className={`gender ${item.gioiTinh === 'Nam' ? 'male' : 'female'}`}
              >
                {item.gioiTinh}
              </span>
            </td>
            <td>
              <button className="delete-button" onClick={() => onDelete(index)}>
                <span className="delete-icon">
                  <RiDeleteBin5Line />
                </span>
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
