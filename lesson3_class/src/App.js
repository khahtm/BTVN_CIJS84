import React from "react";
import CustomCard from "./components/CustomCard";
import "./App.css";


function App() {
  return (
    <div className="container">
      <div className="left-column">
        <CustomCard layout="first" title="Thủ tướng: 'Khoa học là con đường ngắn nhất để đạt mục tiêu thịnh vượng'" text="Chiều 17/5, Lễ chào mừng Ngày Khoa học và Công nghệ Việt Nam 18/5 được tổ chức tại Hà Nội. " />
      </div>
      <div className="right-column">
        <CustomCard layout="second" title="Thủ tướng: 'Khoa học là con đường ngắn nhất để đạt mục tiêu thịnh vượng'" text="Chiều 17/5, Lễ chào mừng Ngày Khoa học và Công nghệ Việt Nam 18/5 được tổ chức tại Hà Nội." image="https://images.unsplash.com/photo-1661956601031-4cf09efadfce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1176&q=80" />
        <CustomCard layout="third" title="Thủ tướng: 'Khoa học là con đường ngắn nhất để đạt mục tiêu thịnh vượng'" text="Chiều 17/5, Lễ chào mừng Ngày Khoa học và Công nghệ Việt Nam 18/5 được tổ chức tại Hà Nội." image="https://images.unsplash.com/photo-1661956601031-4cf09efadfce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1176&q=80" />
      </div>
    </div>
  );
}

export default App;

