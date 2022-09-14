import React from "react";
import styled from "styled-components";
import { Avatar, Box, Typography } from "@material-ui/core";
import {
  DEFAULT_FONT_SIZE,
  TWO_COL_MIN_WIDTH,
  useIsMobileView,
} from "../../../../utils/utils";
import pepe from "../../../../imgs/pepe.png";

export const AvatarAccountInfo = ({ onClick }) => {
  const isMobileView = useIsMobileView();

  return (
    <AccountInfoHeader style={isMobileView ? { padding: "8px" } : null}>
      {/* <Avatar>PG</Avatar> */}
      <Avatar src={pepe} alt="vitconboiroi" />
      <Box>
        <AccountName>Truong Giang</AccountName>
        <AccountEmail>giangfnptit@gmail.com</AccountEmail>
        <ManageAccountButton onClick={onClick}>
          Manage your Google Account
        </ManageAccountButton>
      </Box>
    </AccountInfoHeader>
  );
};

const AccountName = styled(Typography)`
  &&& {
    font-size: 16px;
    font-weight: 600;
  }
`;

const AccountEmail = styled(Typography)`
  && {
    font-size: ${DEFAULT_FONT_SIZE}px;
  }
`;

const ManageAccountButton = styled(Typography)`
  && {
    font-size: ${DEFAULT_FONT_SIZE}px;
    margin-top: 8px;
    color: #2c77db;
    cursor: pointer;
  }
`;

const AccountInfoHeader = styled.div`
  padding: 0;
  margin: 12px auto;
  display: flex;
  @media screen and (min-width: ${TWO_COL_MIN_WIDTH}px) {
    padding: 16px;
  }

  .MuiAvatar-root {
    background-color: transparent;
    margin-right: 16px;
    width: 48px;
    height: 48px;
    @media screen and (min-width: ${TWO_COL_MIN_WIDTH}px) {
      width: 40px;
      height: 40px;
    }
  }
`;
