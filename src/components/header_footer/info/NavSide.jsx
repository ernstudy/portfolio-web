import {
  Code,
  ContactMail,
  Home,
  PermPhoneMsg,
  Person,
  School,
  Work,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

export default function NavSide() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  React.useEffect(() => {
    setActiveLink(location.pathname);
    console.log(location.pathname);
  }, [location.pathname]);

  const navSideItems = [
    {
      name: "Home ",
      icon: <Home className="nav-side-icon" sx={{ color: "#0073e6" }} />,
      path: "/",
    },
    {
      name: "Education",
      icon: <School className="nav-side-icon" sx={{ color: "#0073e6" }} />,
      path: "/education",
    },
    {
      name: "Portfolio",
      icon: <Code className="nav-side-icon" sx={{ color: "#0073e6" }} />,
      path: "/portfolio",
    },
    {
      name: "Contact Me",
      icon: (
        <PermPhoneMsg className="nav-side-icon" sx={{ color: "#0073e6" }} />
      ),
      path: "/contact",
    },
  ];
  return (
    <Box
      sx={{ width: "100%", maxWidth: 300, bgcolor: "inherit", height: "auto" }}
    >
      <nav aria-label="main mailbox folders" className="nav-side ">
        <List sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          {navSideItems.map((link, idx) => (
            <ListItem
              disablePadding
              className={
                activeLink == link.path
                  ? "bg-list-side acitve-nav-button"
                  : "bg-list-side"
              }
              key={idx}
              component={NavLink}
              sx={{ height: 35 }}
              to={link.path}
              onClick={() => setActiveLink(link.path)}
            >
              <ListItemButton>
                <ListItemIcon>{link.icon}</ListItemIcon>
                <ListItemText primary={link.name} id="side-list-text" />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </nav>
    </Box>
  );
}
