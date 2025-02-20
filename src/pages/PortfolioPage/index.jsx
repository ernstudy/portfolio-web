import React from "react";
import PortfolioProjects from "./PortfolioProjects";
import PortfolioInfo from "./PortfolioInfo";
import "./Portfolio.css";

export default function PortfolioPage() {
  return (
    <div className="portfolio-container section-page">
      <PortfolioInfo />

      <PortfolioProjects />
    </div>
  );
}
