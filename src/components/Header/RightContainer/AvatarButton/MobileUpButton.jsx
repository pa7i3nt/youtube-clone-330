import React from "react";
import styled from "styled-components";
import ArrowUpwardOutlinedIcon from "@material-ui/icons/ArrowUpwardOutlined";
import { Fab } from "@material-ui/core";

export const MobileUpButton = ({ onClick }) => {
  return (
    <StyledFab onClick={onClick}>
      <ArrowUpwardOutlinedIcon style={{ fontSize: "25px" }} />
    </StyledFab>
  );
};

const StyledFab = styled(Fab)`
  && {
    position: fixed;
    top: 140px;
    right: 20px;
    background-color: #1aa260;
    color: white;
  }
`;
