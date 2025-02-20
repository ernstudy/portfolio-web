import { Box } from "@mui/material";
import React from "react";

export default function Heading({ text, text2 }) {
  return (
    <Box component="div" className="heading">
      <h4>
        {text} <span className="main-color">{text2}</span>
      </h4>
    </Box>
  );
}
