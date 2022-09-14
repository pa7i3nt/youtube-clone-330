import React from "react";
import { MoreFromYouTubeSection1 } from "./MoreFromYouTubeSection1";
import { MoreFromYouTubeSection2 } from "./MoreFromYouTubeSection2";
import { SubHeading, DividerWithMargin } from "./FullWidthSidebar";

export const SidebarThirdPart = () => {
  return (
    <>
      <SubHeading>MORE FROM YOUTUBE</SubHeading>
      <MoreFromYouTubeSection1 />
      <DividerWithMargin />
      <MoreFromYouTubeSection2 />
      <DividerWithMargin />
    </>
  );
};
