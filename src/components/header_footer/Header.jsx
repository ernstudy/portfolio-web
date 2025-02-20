import { Widgets } from "@mui/icons-material";
import React from "react";
import TopInfo from "../../components/TopInfo";
import NavSide from "./info/NavSide";
import { Box, Typography } from "@mui/material";

export default function Header() {
  return (
    <header className="header">
      {/* TOP INFO  */}
      <Box sx={{ display: { xs: "none", md: "block" } }}>
        <TopInfo />
      </Box>
      <NavSide />
    </header>
  );
}
