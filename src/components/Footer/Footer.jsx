import React from "react";
import { BottomNavigation, Slide, useScrollTrigger } from "@material-ui/core";
import styled from "styled-components";
import { FooterIcons } from "./FooterIcons";

const MobileFooter = () => {
  return (
    <HideFooterOnScroll>
      <FooterContainer showLabels={true}>
        <FooterIcons />
      </FooterContainer>
    </HideFooterOnScroll>
  );
};

export default MobileFooter;

const FooterContainer = styled(BottomNavigation)`
  && {
    position: fixed;
    bottom: 0;
    left: 0;
    /* 100vw instead of % because Grid spacing adds width to the container */
    width: 100vw;
    height: 48px;
    overflow-x: hidden;
  }
  .MuiBottomNavigationAction-root.MuiBottomNavigationAction-iconOnly {
    padding-top: 8px;
  }
`;

function HideFooterOnScroll({ children }) {
  const shouldShowFooter = !useScrollTrigger({
    threshold: 200,
  });

  return (
    <Slide in={shouldShowFooter} direction="up">
      {children}
    </Slide>
  );
}
