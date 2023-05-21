import React from "react";
import InputCustom from "./components/InputCustom";
import "./App.css"
import SelectCustom from "./components/SelectCustom";
import InputCustomM from "./components/InputCustomM";


function App() {
  const handleRegister = () => {
    alert("Đăng ký thành công");
  };
  return (
    <div className="container">
      <div>
        <div className="header">
          <h1>Student Registration Form</h1>
          <hr color="#fff" />
        </div>

        <form action="" className="bieumau">
          <div>
              Firstname<br />
              {/* <InputCustom type="text" name="Firstname" placeholder="Firstname" /> */}
              <InputCustomM type="text" name="Firstname" placeholder="Firstname" />
              <br /><br />
              Middlename:<br />
              {/* <InputCustom type="text" name="Middlename" placeholder="Middlename" /> */}
              <InputCustomM type="text" name="Middlename" placeholder="Middlename" />
              <br /><br />
              Lastname:<br />
              {/* <InputCustom type="text" name="Lastname" placeholder="Lastname" /> */}
              <InputCustomM type="text" name="Lastname" placeholder="Lastname" />
              <br />
            </div>
            <div className="khoahoc">
            <label htmlFor="lang-select">Course:</label>
            <SelectCustom
              name="lang"
              options={["", "Full-stack", "Back-end", "Front-end"]}
              placeholder="Course"
            />
          </div>
          <br />
          Gender:
          <br />
          <InputCustom type="radio" name="gioitinh" placeholder="Male" isRadio={true} />
          <InputCustom type="radio" name="gioitinh" placeholder="Female" isRadio={true} />
          <InputCustom type="radio" name="gioitinh" placeholder="Other" isRadio={true} />
          <br /><br />
        </form>
        <form action="" className="bieumau2">
          <div>
            <label htmlFor="phone">Phone:</label><br />
            <InputCustom type="tel" name="phone" placeholder="+91" />
            <br />
            <InputCustom type="text" placeholder="Phone no" />
            <br /><br />
            Current Address:<br />
            <textarea
              cols="20"
              className="diachi"
              rows="10"
              placeholder="Current Address"
            ></textarea>
            <br /><br />
            <b>Email</b><br />
            <InputCustom type="email" className="mail" placeholder="Enter Email" />
            <br />
            <b>Password</b><br />
            <InputCustom type="password" className="matkhau" placeholder="Enter Password" />
            <br />
            <b>Re-type Password</b><br />
            <InputCustom type="password" className="ghilaimk" placeholder="Retype Password" />
            <br />
          </div>
          <input type="button" className="nut" value="Register" onClick={handleRegister} />
        </form>
      </div>
    </div>
  );
}

export default App;
