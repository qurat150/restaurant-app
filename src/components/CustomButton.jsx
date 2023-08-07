import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import "../styles/buttons.css";

export default function CustomButton({ className, children, isLight }) {
  let buttonStyling = {
    backgroundColor: isLight ? "white" : "#d31b27",
    color: isLight ? "black" : "white",
  };
  return (
    <Button
      className={`btn ${className}`}
      style={buttonStyling}
      variant="contained"
    >
      {children}
    </Button>
  );
}
