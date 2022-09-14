import React from "react";
import styled from "styled-components";
import { Avatar } from "@material-ui/core";
import { StyledIconButton, TWO_COL_MIN_WIDTH } from "../../../../utils/utils";
import pepe from "../../../../imgs/pepe.png";

function AvatarIconButton({ setAnchorAvatarButton }) {
  return (
    <StyledIconButton
      onClick={(event) => setAnchorAvatarButton(event.currentTarget)}
    >
      {/* <StyledAvatar>PG</StyledAvatar> */}
      <StyledAvatar alt="vitconboiroi" src={pepe} />
    </StyledIconButton>
  );
}

export default AvatarIconButton;

const StyledAvatar = styled(Avatar)`
  && {
    width: 24px;
    height: 24px;
    font-size: 0.875rem;
    background-color: transparent;
    @media screen and (min-width: ${TWO_COL_MIN_WIDTH}px) {
      width: 32px;
      height: 32px;
    }
  }
`;
