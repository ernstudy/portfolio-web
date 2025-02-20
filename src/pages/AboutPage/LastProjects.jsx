import React from "react";
import Heading from "./Heading";
import hambugerProject from "../../assets/images/projects-image/hambuger-site.png";
import mathAppProject from "../../assets/images/projects-image/math-app.png";
import photographeProject from "../../assets/images/projects-image/photography-site.png";
import weatherProject from "../../assets/images/projects-image/weather-app.png";

export default function LastProjects() {
  const lastProjectsItems = [
    weatherProject,
    mathAppProject,
    hambugerProject,
    photographeProject,
  ];
  return (
    <section className="lastprojects-container">
      <div className="lastprojects-info">
        <Heading title="Last web design Projects" />
      </div>

      <div className="lastprojects-boxes">
        {lastProjectsItems.map((item, idx) => (
          <div>
            <div
              className="lastprojects-box"
              style={{ backgroundImage: `url(${item})` }}
              key={idx}
            ></div>
          </div>
        ))}
      </div>
    </section>
  );
}
