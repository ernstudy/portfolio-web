// education

import { School } from "@mui/icons-material";

const timelineElements = [
  // Full-Stack Web Development
  {
    date: "2023 - present",
    title: "The Complete Full-Stack Web Development Bootcamp",
    subtitle: "(Udemy, Angela Yu)",
    description:
      "HTML, CSS, Javascript, Node, React, PostgreSQL, Web3 and DApps.",
    iconStyle: {
      background: "rgb(255, 255, 255)",
      color: "rgb(18, 146, 251)",
    },
    bgStyle: { background: "rgb(33, 150, 243)", color: "#fff" },
    arrowStyle: { borderRight: "7px solid  rgb(33, 150, 243)" },
  },

  // Programming from Scratch
  {
    date: "2022",
    title: "Course: Programming from Scratch",
    subtitle: "(EDteam)",
    description:
      "The best programming course in Spanish returns renewed. Discover with us that programming is not difficult; you've just been taught wrong. ",
    iconStyle: {
      background: "rgb(255, 255, 255)",
      color: "rgb(18, 146, 251)",
    },
    bgStyle: { background: "rgb(33, 150, 243)", color: "#fff" },
    arrowStyle: { borderRight: "7px solid  rgb(33, 150, 243)" },
  },

  // Web Page Design
  {
    date: "2022",
    title: "Web Page Design",
    subtitle: "(INFOTEP)",
    description:
      "Introduction to HTML , CSS, JavaScript and Wed design concepts",
    iconStyle: { background: "rgb(33, 150, 243)", color: "#fff" },
    bgStyle: { background: "#fff", color: "#0f0f0f" },
    arrowStyle: { borderRight: "7px solid  rgb(33, 150, 243)" },
  },

  // Basic Operations of Office Programs
  {
    date: "2022",
    title: "Basic Operations of Office Programs",
    subtitle: "(INFOTEP)",
    description: "Windows, Microssoft Office Word, Excel, PowerPoint etc...",
    iconStyle: {
      background: "rgb(255, 255, 255)",
      color: "rgb(18, 146, 251)",
    },
    bgStyle: { background: "rgb(33, 150, 243)", color: "#fff" },
    arrowStyle: { borderRight: "7px solid  rgb(33, 150, 243)" },
  },
];

const uiDesign = {
  date: "2024",
  title: "Course: UI Design",
  subtitle: "(EDteam)",
  description:
    "Learn the techniques and best practices to create beautiful, functional, and impactful interface designs.",
  iconStyle: {
    background: "rgb(255, 255, 255)",
    color: "rgb(18, 146, 251)",
  },
  bgStyle: { background: "rgb(33, 150, 243)", color: "#fff" },
  arrowStyle: { borderRight: "7px solid  rgb(33, 150, 243)" },
};

timelineElements.unshift(uiDesign);

export default timelineElements;
