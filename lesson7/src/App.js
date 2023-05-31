import React, { useState } from 'react';
import Form from './components/Form';
import Table from './components/Table';
import './App.css';

const App = () => {
  const [data, setData] = useState([]);

  const handleAdd = (item) => {
    setData([...data, item]);
  };

  const handleDelete = (index) => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
  };

  return (
    <div className="app">
      <Form onAdd={handleAdd} />
      <Table data={data} onDelete={handleDelete} />
    </div>
  );
};

export default App;
