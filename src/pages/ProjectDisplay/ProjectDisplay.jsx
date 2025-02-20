import React from "react";
import { useParams } from "react-router-dom";
import projectItems from "../../helper/projectItems";
import { Box } from "@mui/material";
import { GitHub, Launch } from "@mui/icons-material";
import GoshtButton from "../../components/outils/GoshtButton";

export default function ProjectDisplay() {
  const id = useParams();

  const project = projectItems[id.id];

  // console.log();

  return (
    <section className="section-page">
      <div className="projects-display-container">
        <div className="projects-display-box">
          <img src={project.image} alt="" />
          <div className="projects-display-info">
            <h1 className="projects-display-title">{project.name}</h1>
            <p className="projects-display-description">
              {project.description}
            </p>
            {/* Button  */}
            <Box
              sx={{
                display: "flex",
                justifyContent: { xs: "center", sm: "initial" },
                alignItems: "center",
                gap: "10px",
                marginBottom: "20px",
              }}
            >
              <GoshtButton
                icon={<GitHub />}
                text="Code"
                path={project.gh_link}
              />
              <GoshtButton
                icon={<Launch />}
                text="Demo"
                path={project.site_link}
              />
            </Box>
          </div>
        </div>
      </div>
    </section>
  );
}
