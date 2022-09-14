import React from "react";
import {
  MOBILE_VIEW_HEADER_HEIGHT,
  DESKTOP_VIEW_HEADER_HEIGHT,
  useIsMobileView,
} from "./utils";

export function TextForScrollingTest() {
  const isMobileView = useIsMobileView();

  return (
    <div
      style={{
        paddingTop: `${
          isMobileView ? MOBILE_VIEW_HEADER_HEIGHT : DESKTOP_VIEW_HEADER_HEIGHT
        }px`,
      }}
    >
      {[...new Array(100)]
        .map(
          () =>
            `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Rerum a, tenetur totam, delectus ipsum expedita, molestias 
          ducimus enim eum magnam dignissimos nostrum animi! Sit eum 
          sapiente, cumque rerum saepe assumenda.`
        )
        .join("\n")}
    </div>
  );
}
