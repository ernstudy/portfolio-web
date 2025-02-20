import { GitHub } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";
import React from "react";

export default function GoshtButton({ icon, text, path }) {
  return (
    <Typography component="a" href={path}>
      <Button
        sx={{ textTransform: "none", fontSize: "16px" }}
        startIcon={icon}
        variant="outlined"
      >
        {text}
      </Button>
    </Typography>
  );
}
