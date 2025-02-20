import { Box, Typography } from "@mui/material";
import React from "react";
import LinkButton from "../../components/outils/LinkButton";
import Heading from "./Heading";

export default function ContactMe() {
  return (
    <Box component="section" className="contact-me">
      <Heading text="Let's" text2="Talk" />
      <Typography component="h3" className="contact-me-text">
        Do you look for a Web developer or need a website?
      </Typography>
      <LinkButton
        style={{ textTransform: "none", fontSize: 18 }}
        text="Contact Me Now"
        link="/contact"
      />
    </Box>
  );
}
