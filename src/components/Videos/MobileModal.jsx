import React from "react";
import styled from "styled-components";
import { Modal, List, ListItem, Typography } from "@material-ui/core";

export const MobileModal = ({
  isModalOpen,
  handleModalClose,
  isSearchPage,
  isMobileHeaderMoreButton,
}) => {
  // Only "Don't recommend channel", 'Save to Watch Later', 'Cancel' on search page modal
  const MenuToLoop = isMobileHeaderMoreButton
    ? MobileHeaderModalMenu
    : isSearchPage
    ? MobileModalMenu.slice(1)
    : MobileModalMenu;

  return (
    <Modal open={isModalOpen} onClose={handleModalClose}>
      <ModalContainer>
        <List style={{ padding: "3px 0" }}>
          {MenuToLoop.map((item) => {
            return (
              <StyledListItem key={item} onClick={handleModalClose}>
                <Typography variant="body1">{item}</Typography>
              </StyledListItem>
            );
          })}
        </List>
      </ModalContainer>
    </Modal>
  );
};

const StyledListItem = styled(ListItem)`
  && {
    padding: 9px 12px;
    color: #030303;
    cursor: pointer;
  }
`;

const ModalContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 250px;
  max-width: 356px;
  max-height: 100%;
  background-color: rgb(249, 249, 249);
`;

const MobileModalMenu = [
  "Not interested",
  "Don't recommend channel",
  "Save to Watch Later",
  "Cancel",
];

const MobileHeaderModalMenu = [
  "Settings",
  "Your data in YouTube",
  "Feedback",
  "Help",
  "Cancel",
];
