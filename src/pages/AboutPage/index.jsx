import { Box, Container, Typography } from "@mui/material";
import React from "react";
import Heading from "./Heading";
import {
  CollectionsBookmark,
  Person,
  Subscriptions,
} from "@mui/icons-material";
import AboutMe from "./AboutMe";
import Techno from "./Techno";
import MyProducts from "./MyProducts";
import LastProjects from "./LastProjects";
import TopInfo from "../../components/TopInfo";
import ContactMe from "./ContactMe";
import Footer from "../../components/header_footer/Footer";

export default function index() {
  return (
    <div className="home-page">
      {/* TOP INFO  */}
      <Box
        sx={{
          display: { xs: "flex", md: "none" },
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TopInfo />
      </Box>
      {/* About Me */}
      <AboutMe />

      {/* tecchnologies */}
      <Techno />

      {/* Last projects */}

      {/* <LastProjects /> */}
      {/* my products */}
      {/* <MyProducts /> */}

      {/* contact me */}
      <ContactMe />
    </div>
  );
}
