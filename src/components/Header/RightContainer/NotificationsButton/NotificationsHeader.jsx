import React from "react";
import styled from "styled-components";
import { Box, Typography, IconButton } from "@material-ui/core";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import { NOTIFICATION_MENU_TOP_HEIGHT } from "../../../../utils/utils";

export function NotificationsHeader({ onClick }) {
  return (
    <NotificationsMenuTop>
      <Typography>Notifications</Typography>
      <IconButton onClick={onClick}>
        <SettingsOutlinedIcon />
      </IconButton>
    </NotificationsMenuTop>
  );
}

const NotificationsMenuTop = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${NOTIFICATION_MENU_TOP_HEIGHT}px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding-left: 16px;
  padding-right: 16px;
`;
