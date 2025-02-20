import React, { useState } from "react";
import Header from "./header_footer/Header";
import Footer from "./header_footer/Footer";
import { Box } from "@mui/material";
export default function SideBar() {
  return (
    <Box className="side-bar" sx={{ display: { xs: "none", md: "flex" } }}>
      <Header />
      <Footer />
    </Box>
  );
}
