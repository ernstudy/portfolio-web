import React from "react";
import { Facebook, GitHub, LinkedIn, YouTube } from "@mui/icons-material";
import { Box, Link } from "@mui/material";

export default function SocialNetworks({ className }) {
  const icons = [
    {
      icon: <i className="bx bxl-github"></i>,
      link: "https://www.github.com/ernstudy",
    },
    {
      icon: <i className="bx bxl-linkedin"></i>,
      link: "https://www.linkedin.com/in/ernstudy",
    },
    {
      icon: <i className="bx bxl-facebook-circle"></i>,
      link: "https://www.facebook.com/ernstudy",
    },
    {
      icon: <i className="bx bxl-youtube"></i>,
      link: "https://www.youtube.com/@ernstudy_com",
    },
  ];
  return (
    <Box component="div">
      <div className={`social-networks ${className}`}>
        {icons.map((item, idx) => (
          <Link
            component="a"
            href={item.link}
            key={idx}
            id="social-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.icon}
          </Link>
        ))}
      </div>
    </Box>
  );
}
