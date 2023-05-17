import React from "react";

const InputCustom = ({ type, name, placeholder, isRadio }) => {
  const inputStyle = {
    width: "100%",
    height: 40,
    borderRadius: 5,
    borderColor: "GrayText",
    fontSize: 16,
  };

  const radioStyle = {
    width: 14,
    height: 14,
    marginRight: 10,
  };

  if (isRadio) {
    return (
      <>
        <input type="radio" name={name} value={placeholder} style={radioStyle} />
        <label htmlFor={placeholder}>{placeholder}</label>
      </>
    );
  }

  return <input type={type} name={name} placeholder={placeholder} style={inputStyle} />;
};

export default InputCustom;
