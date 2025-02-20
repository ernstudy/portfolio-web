import hamburgerProject from "../assets/images/projects-image/hambuger-site.png";
import photographyProject from "../assets/images/projects-image/photography-site.png";
import mathApppProject from "../assets/images/projects-image/math-app.png";
import WeatherApp from "../assets/images/projects-image/weather-app.png";

const projectItems = [
  {
    image: WeatherApp,
    name: "Temperature Application with React and Material UI",
    description:
      "This temperature application is developed with React and utilizes Material UI for a modern and attractive user interface. It also integrates with the Free Weather API to provide accurate and up-to-date weather data.",
    gh_link: "https://github.com/ernstudy/weather-app.git",
    site_link: "https://ernstudy.com/portfolio/weather-app/",
  },
  {
    image: mathApppProject,
    name: " Math Application",
    description:
      " I developed this math application in 2023. It helped me improve my programming logic and learn about the JavaScript language. It is a quiz application where you have to find the correct result of the operation between two numbers.  ",
    gh_link: "https://github.com/ernstudy/math4kids.git",
    site_link: "https://ernstudy.com/portfolio/math4kids",
  },
  {
    image: hamburgerProject,
    name: "Simple Hamburger Website",
    description:
      "This is a simple fictional hamburger website I developed when I was just learning HTML and CSS. It helped me understand web design and layout concepts.",
    gh_link: "https://github.com/ernstudy/At-Burger-Delights.git",
    site_link: "https://ernstudy.com/portfolio/hamburger-website",
  },
];

const photographywebsite = {
  image: photographyProject,
  name: "Single Page Photography Website",
  description:
    "I developed this fictional single-page photography website after watching a landing page tutorial. I decided to add the 'About' and 'Contact' sections. The site is developed with HTML, CSS, and JavaScript.",
  gh_link: "https://github.com/ernstudy/ken-zee-photographers.git",
  site_link: "https://ernstudy.com/portfolio/photography-website",
};
projectItems.push(photographywebsite);

// Jason Derulo

// {
//   image: null,
//   name: "Event Website for Jason Derulo Concert",
//   description:
//     "This website was a challenge for me when I was just learning React on Udemy. I learned how to create animations and apply events in JavaScript using the Date() method. It is a fictional website for a concert event by the artist Jason Derulo.",
//   gh_link: '',
// site_link: "";
// },

export default projectItems;
