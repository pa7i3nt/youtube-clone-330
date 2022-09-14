import React from "react";
import styled from "styled-components";
import { AppBar, Toolbar } from "@material-ui/core";
import LeftContainer from "./LeftContainer/LeftContainer";
import MiddleContainer from "./MiddleContainer/MiddleContainer";
import RightContainer from "./RightContainer/RightContainer";
import {
  TWO_COL_MIN_WIDTH,
  MOBILE_VIEW_HEADER_HEIGHT,
  DESKTOP_VIEW_HEADER_HEIGHT,
  HideOnScroll,
  useIsMobileView,
  HEADER_OPACITY,
} from "../../utils/utils";

// import { TextForScrollingTest } from "../../utils/textForScrollingTest";

function Header() {
  const isMobileView = useIsMobileView();
  return (
    <>
      <HideOnScroll>
        <StyledAppBar elevation={isMobileView ? 2 : 0}>
          {/* shadow depth 0 - 24, below AppBar */}
          <StyledToolbar disableGutters>
            {/* default is false. If true, the left and right padding is removed. */}
            <LeftContainer />
            <MiddleContainer />
            <RightContainer />
          </StyledToolbar>
        </StyledAppBar>
      </HideOnScroll>

      {/* text to test if hiding the AppBar works */}
      {/* <TextForScrollingTest /> */}
    </>
  );
}

export default Header;

export const StyledAppBar = styled(AppBar)`
  && {
    background-color: white;
    @media screen and (min-width: ${TWO_COL_MIN_WIDTH}px) {
      transition: none !important;
      opacity: ${HEADER_OPACITY};
    }
  }

  .MuiToolbar-regular {
    min-height: ${MOBILE_VIEW_HEADER_HEIGHT}px;
    height: ${MOBILE_VIEW_HEADER_HEIGHT}px;
    @media screen and (min-width: ${TWO_COL_MIN_WIDTH}px) {
      min-height: ${DESKTOP_VIEW_HEADER_HEIGHT}px;
      height: ${DESKTOP_VIEW_HEADER_HEIGHT}px;
    }
  }
`;

const StyledToolbar = styled(Toolbar)`
  padding-left: 0;
  padding-right: 0;
  @media screen and (min-width: ${TWO_COL_MIN_WIDTH}px) {
    padding-left: 16px;
    padding-right: 16px;
  }
`;
