import styled from "styled-components";
import { ListItemText } from "@material-ui/core";
import { StyledMenuItem, StyledListItemIcon } from "../../../../utils/utils";

export const MobileMenuRow = ({ Icon, text, onClick }) => {
  return (
    <StyledMenuItem onClick={onClick}>
      <RowIcon>
        <Icon fontSize="medium" />
      </RowIcon>
      <ListItemText primary={text} />
    </StyledMenuItem>
  );
};

const RowIcon = styled(StyledListItemIcon)`
  && {
    margin-right: 32px;
  }
`;
