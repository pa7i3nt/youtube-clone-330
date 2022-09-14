import React, { useState } from "react";
import styled from "styled-components";
import { ListItemText, ListItemAvatar, Avatar } from "@material-ui/core";
import { ShowMoreRow } from "./ShowMoreRow";
import { ShowLessRow } from "./ShowLessRow";
import { SubHeading, SidebarMenuItem } from "./FullWidthSidebar";
import { isSidebarDrawerOpenAtom } from "../../store";
import { useAtom } from "jotai";
import pepe from "../../imgs/pepe.png";
import { IconTooltip } from "../../utils/utils";

export const SidebarSecondPart = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const expandMenu = () => {
    setIsExpanded(true);
  };
  const collapseMenu = () => {
    setIsExpanded(false);
  };

  return (
    <>
      <SubHeading>SUBSCRIPTIONS</SubHeading>
      <SubscriptionItem />
      {isExpanded ? (
        <>
          {[...Array(5)].map((_, index) => {
            return <SubscriptionItem key={`subscriptions-${index}`} />;
          })}
          <ShowLessRow onClick={collapseMenu} />
        </>
      ) : (
        <ShowMoreRow onClick={expandMenu} />
      )}
    </>
  );
};

const SubscriptionItem = () => {
  const text = "Truong Giang";

  const [, setIsSidebarDrawerOpen] = useAtom(isSidebarDrawerOpenAtom);
  return (
    <IconTooltip title={text} placement="right-end" enterDelay={150}>
      <SidebarMenuItem onClick={() => setIsSidebarDrawerOpen(false)}>
        <StyledListItemAvatar>
          {/* <StyledAvatar>PG</StyledAvatar> */}
          <StyledAvatar src={pepe} alt="vitconboiroi" />
        </StyledListItemAvatar>
        <ListItemText primary={text} />
      </SidebarMenuItem>
    </IconTooltip>
  );
};

const StyledListItemAvatar = styled(ListItemAvatar)`
  && {
    min-width: 0;
    margin-right: 24px;
  }
`;

const StyledAvatar = styled(Avatar)`
  && {
    width: 24px;
    height: 24px;
    /* font-size: 0.75rem;
    background-color: transparent; */
  }
`;
