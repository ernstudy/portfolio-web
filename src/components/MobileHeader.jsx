import {
  DarkMode,
  Rotate90DegreesCw,
  WidgetsOutlined,
} from "@mui/icons-material";
import { Button, Container, Drawer } from "@mui/material";
import React, { useState } from "react";
import "../css/MobileHeader.css";
import NavbarBottom from "./NavbarBottom";

export default function MobileHeader() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Container
        maxWidth="sm"
        component="header"
        sx={{ display: { xs: "flex", md: "none" } }}
        className="header-mobile"
      >
        {/* <DarkMode /> */}
        <Button onClick={() => setOpen(!open)}>
          <WidgetsOutlined
            fontSize="large"
            sx={{
              "&:hover": { transform: "rotate(-90deg)" },
              transition: "all 0.6s",
            }}
          />
        </Button>
      </Container>

      <Drawer
        open={open}
        onClose={() => setOpen(!open)}
        anchor="bottom"
        sx={{ display: { xs: "block", md: "none" } }}
      >
        <NavbarBottom setOpenDrawer={setOpen} />
      </Drawer>
    </>
  );
}
