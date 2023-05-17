import React from "react";
import TextField from "@mui/material/TextField";

const InputCustomM = ({ label }) => {
  return (
    <TextField
      id="outlined-basic"
      label={label}
      variant="outlined"
      fullWidth
    />
  );
};

export default InputCustomM;
