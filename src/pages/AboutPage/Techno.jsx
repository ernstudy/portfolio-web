import React from "react";
import Heading from "./Heading";
import { LibraryBooks, LocalLibrary, Person } from "@mui/icons-material";
import HTML_svg from "../../assets/images/Tecch/html5.svg";
import CSS_svg from "../../assets/images/Tecch/css3.svg";
import JS_svg from "../../assets/images/Tecch/javascript.svg";
import React_svg from "../../assets/images/Tecch/react.svg";
import materialUI_svg from "../../assets/images/Tecch/material-ui.svg";
import bootstrap_svg from "../../assets/images/Tecch/bootstrap.svg";
import tailwind_svg from "../../assets/images/Tecch/tailwind-css.svg";
import git_svg from "../../assets/images/Tecch/git.svg";
import figma_svg from "../../assets/images/Tecch/figma.svg";
import nodejs_svg from "../../assets/images/Tecch/node-js.svg";
import vscode_svg from "../../assets/images/Tecch/vscode.svg";
import filmora_svg from "../../assets/images/Tecch/filmora.svg";
import canva_svg from "../../assets/images/Tecch/canva.svg";

export default function Techno() {
  const technoName = [
    { name: "HTML", icon: HTML_svg },
    { name: "CSS", icon: CSS_svg },
    { name: "JavaScript", icon: JS_svg },
    { name: "React", icon: React_svg },
    { name: "Material Ui", icon: materialUI_svg },
    { name: "Bootstrap", icon: bootstrap_svg },
    { name: "Tailwind CSS", icon: tailwind_svg },
    { name: "Git", icon: git_svg },
    { name: "Figma", icon: figma_svg },
    { name: "Node JS", icon: nodejs_svg },
    { name: "VS Code", icon: vscode_svg },
    { name: "Filmora", icon: filmora_svg },
    { name: "Canva", icon: canva_svg },
  ];
  return (
    <section className="technologies">
      <h3 className="tech-title "> Skills :</h3>

      <div className="tech-icon">
        {technoName.map((item, idx) => (
          <div className="circle" key={idx}>
            <div className="tech-image">
              <img src={item.icon} alt="" />
            </div>
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
