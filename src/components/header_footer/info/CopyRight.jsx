import React from "react";
import { Copyright } from "@mui/icons-material";
import { Typography } from "@mui/material";

export default function CopyRight() {
  const year = new Date().getFullYear();
  return (
    <Typography component="p" className="copy-right">
      © {year}, Ernstudy
    </Typography>
  );
}
