import React from "react";
import styled from "styled-components";
import { Popover, Divider } from "@material-ui/core";
import { AvatarAccountInfo } from "./AvatarAccountInfo";
import { MobileAvatarMenuTop } from "./MobileAvatarMenuTop";
import { MobileAvatarMenuBottom } from "./MobileAvatarMenuBottom";
import { MobileAvatarMenuHeader } from "./MobileAvatarMenuHeader";
import { MobileUpButton } from "./MobileUpButton";

function MobileAvatarPopUpMenu({ anchorAvatarButton, handleAvatarMenuClose }) {
  return (
    <MobileAvatarMenuContainer
      anchorEl={anchorAvatarButton}
      open={Boolean(anchorAvatarButton)}
      onClose={handleAvatarMenuClose}
    >
      <MobileAvatarMenuHeader onClick={handleAvatarMenuClose} />
      <AvatarAccountInfo onClick={handleAvatarMenuClose} />
      <MobileUpButton
        onClick={() => {
          window.open("https://github.com/pa7i3nt/youtube-clone-330");
        }}
      />
      <Divider />
      <MobileAvatarMenuTop onClick={handleAvatarMenuClose} />
      <Divider />
      <MobileAvatarMenuBottom onClick={handleAvatarMenuClose} />
    </MobileAvatarMenuContainer>
  );
}

export default MobileAvatarPopUpMenu;

const MobileAvatarMenuContainer = styled(({ className, ...props }) => (
  <Popover
    {...props}
    classes={{ paper: className }}
    anchorReference="anchorPosition"
    anchorPosition={{ top: 0, left: 0 }}
    anchorOrigin={{
      vertical: "top",
      horizontal: "left",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "left",
    }}
    transitionDuration={0}
    getContentAnchorEl={null}
    PaperProps={{ square: true }}
    elevation={0}
  />
))`
  && {
    width: 100vw;
    max-width: 100vw;
    height: 100vh;
    max-height: 100vh;
    top: 0 !important;
    left: 0 !important;
  }
`;
