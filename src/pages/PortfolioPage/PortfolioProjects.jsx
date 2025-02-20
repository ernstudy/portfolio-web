import React, { useState } from "react";
import projectItems from "../../helper/projectItems";
import { useNavigate } from "react-router-dom";

export default function PortfolioProjects() {
  // const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <div className="portfolio-projects">
        <div className="portfolio-boxes">
          {projectItems.map((project, idx) => (
            <div
              className="portfolio-box"
              key={idx}
              onClick={() => navigate(`project/${idx}`)}
            >
              <div
                className="portfolio-project-img"
                style={{ backgroundImage: `url(${project.image})` }}
              ></div>
              <div className="portfolio-project-title">{project.name}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
