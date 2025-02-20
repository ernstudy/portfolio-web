import { Style, TrendingFlatTwoTone } from "@mui/icons-material";
import { Button, styled } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function LinkButton({ style, type, text, link }) {
  const navigate = useNavigate();
  const StyledButton = styled(Button)({
    textDecoration: "underline",

    "&:hover": {
      textDecoration: "underline",
      "& .MuiSvgIcon-root": {
        transform: "translateX(5px)",
        transition: "all .8s",
      },
    },
  });

  return (
    <StyledButton
      variant="text"
      size="large"
      onClick={() => navigate(link)}
      endIcon={<TrendingFlatTwoTone />}
      sx={style}
    >
      {text}
    </StyledButton>
  );
}
