import React from "react";
import CopyRight from "./info/CopyRight";
import { Container } from "@mui/material";
import SocialNetworks from "../SocialNetworks";

export default function Footer() {
  return (
    <footer className="footer">
      <SocialNetworks />
      <CopyRight />
    </footer>
  );
}
