import React from "react";
import { ReactTyped } from "react-typed";
import ImageProfil from "../assets/images/profile/profile.png";
import NavSide from "./header_footer/info/NavSide";
import TitleTop from "./TitleTop";
import { Box, Button } from "@mui/material";
import SocialNetworks from "./SocialNetworks";
import { NavLink } from "react-router-dom";
import PortfolioPage from "../pages/PortfolioPage";
import { useNavigate } from "react-router-dom";
import LinkButton from "./outils/LinkButton";

export default function TopInfo({ display }) {
  const navigate = useNavigate();
  return (
    <div className="top-info-box">
      <div className="top-info-img" onClick={() => navigate("/")}>
        <img src={ImageProfil} alt="" />
      </div>
      <Box className="top-info-text">
        <h1 className="top-info-name">Ernst Saint-Gilles</h1>
        {/* <TitleTop display={{ display: { xs: "block", md: "none" } }} /> */}
        {/* <SocialNetworks /> */}
        <p className="top-info-description">
          I build professional and accessible websites
        </p>

        <Box sx={{ display: { xs: "block", md: "none" } }}>
          <LinkButton type="outlined" text="Portfolio" link="/portfolio" />
        </Box>
      </Box>
    </div>
  );
}
