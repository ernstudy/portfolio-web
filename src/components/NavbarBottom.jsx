import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Home from "@mui/icons-material/Home";
import School from "@mui/icons-material/School";
import Work from "@mui/icons-material/Work";
import ContactMail from "@mui/icons-material/ContactMail";
import { colors, styled } from "@mui/material";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { Padding } from "@mui/icons-material";

export default function NavbarBottom({ setOpenDrawer }) {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  useEffect(() => {
    setActiveLink(location.pathname);
    // console.log(location.pathname);
  }, []);

  const navItems = [
    { label: "Home", path: "/", icon: <Home /> },
    { label: "Education", path: "/education", icon: <School /> },
    { label: "Portfolio", path: "/portfolio", icon: <Work /> },
    { label: "Contact", path: "/contact", icon: <ContactMail /> },
  ];
  const StyledBottomNavigation = styled(BottomNavigation)({
    backgroundColor: "#f5f9ff",
    transition: "all 0.5s",
  });

  const StyledBottomNavigationAction = styled(BottomNavigationAction)(
    ({ theme, selected }) => ({
      "&.Mui-selected ": {
        // color: "#fff",
        Padding: 0,

        "&.active .MuiBottomNavigationAction-label": {
          height: "100%",
          color: "#fff",
        },
        "&.active .MuiSvgIcon-root": {
          color: "#fff",
        },
      },
      "&:hover": {
        backgroundColor: "#e5f2ff",
      },
    })
  );

  const hundleClick = (path) => {
    setOpenDrawer(false);
    navigate(path);

    console.log(path);
  };

  const buttonStyle = {
    color: "#fff",
    backgroundColor: "#0073e6",
    height: "100%",
  };

  return (
    <Box sx={{ maxWidth: "100%" }}>
      <StyledBottomNavigation showLabels>
        {navItems.map((item, index) => (
          <StyledBottomNavigationAction
            key={index}
            label={item.label}
            icon={item.icon}
            onClick={() => hundleClick(item.path)}
            sx={activeLink == item.path && buttonStyle}
          />
        ))}
      </StyledBottomNavigation>
    </Box>
  );
}
