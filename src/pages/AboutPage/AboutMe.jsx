import React from "react";
import Heading from "./Heading";
import { Person } from "@mui/icons-material";
import { ReactTyped } from "react-typed";
import { Box, Button, Typography } from "@mui/material";
import TitleTop from "../../components/TitleTop";
import { NavLink } from "react-router-dom";
import LinkButton from "../../components/outils/LinkButton";

export default function AboutMe() {
  return (
    <section className="about">
      <h1 className="first-title main-color">
        <ReactTyped
          strings={["UI/UX Designer", "Content creator"]}
          typeSpeed={100}
          backSpeed={70}
          loop
        />
      </h1>
      <p className="about-description">
        I am a web designer specializing in creating user interfaces (UI) and
        user experiences (UX) for web applications. My goal is to create
        visually appealing, functional, and user-friendly websites, ensuring a
        smooth and enjoyable experience for users.{" "}
        <LinkButton
          text="See My Academic Journey"
          link="/education"
          style={{
            textTransform: "none",
            fontSize: { xs: "16px", md: "18px" },
            padding: "0",
            textDecoration: "none",
          }}
        />
        <br />
        <br />
        In 2020, I decided to learn about video creation and began producing
        educational content for YouTube, contributing to the student community.
        My content focuses on language learning, teaching phrases, vocabulary,
        and providing tests to improve listening and speaking comprehension. You
        can find my work on my YouTube channels:{" "}
        <a
          href="https://youtube.com/@aprendemosespanol"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aprendemos Español
        </a>
        ,{" "}
        <a
          href="https://youtube.com/@ernstschool"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ernst Language School
        </a>
        , and{" "}
        <a
          href="https://youtube.com/@eng-span"
          target="_blank"
          rel="noopener noreferrer"
        >
          ENG-SPAN
        </a>
        .
        <br />
        <br />
        In my free time, I enjoy listening to podcasts, watching technology
        videos, and documentaries to learn more about the world.
      </p>
    </section>
  );
}
