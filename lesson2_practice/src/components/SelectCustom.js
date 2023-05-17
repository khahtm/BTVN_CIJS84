import React from "react";

const SelectCustom = ({ name, options, placeholder }) => {
  const selectStyle = {
    width: "100%",
    height: 40,
    borderRadius: 5,
    borderColor: "GrayText",
    fontSize: 16,
  };

  return (
    <select name={name} style={selectStyle}>
      <option value="">{placeholder}</option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default SelectCustom;
