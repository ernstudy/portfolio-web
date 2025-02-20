import React from "react";
import "./App.css";

// importing components from material ui

import { Box, Container } from "@mui/material";

// React router dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// comonents
import AboutPage from "./pages/AboutPage";
import EducationPage from "./pages/EducationPage";
import PortfolioPage from "./pages/PortfolioPage";
import ContactPage from "./pages/ContactPage";
import SideBar from "./components/SideBar";
import MobileHeader from "./components/MobileHeader";
import ProjectDisplay from "./pages/ProjectDisplay/ProjectDisplay";
import Footer from "./components/header_footer/Footer";

export default function App() {
  return (
    <Router>
      <MobileHeader />
      <Container maxWidth="lg" className="container-all">
        <SideBar />
        <div className="pages-container">
          <Routes>
            <Route path="/" element={<AboutPage />} />
            <Route path="/education" element={<EducationPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/portfolio/project/:id" element={<ProjectDisplay />} />
            <Route path="/portfolio/project" element={<PortfolioPage />} />
            <Route path="/portfolio/projects" element={<PortfolioPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>
        <Box sx={{ display: { xs: "block", md: "none" } }}>
          <Footer />
        </Box>
      </Container>
    </Router>
  );
}
