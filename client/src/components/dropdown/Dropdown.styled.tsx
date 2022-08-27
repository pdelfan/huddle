import styled, { keyframes } from "styled-components";
import { theme } from "../../theme/theme";

export const DropdownParent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  cursor: pointer;
`;

const appear = keyframes`
    0% {
        transform: scale(0);        
    }    
    100% {
        transform: scale(1);        
    }
`;

export const StyledDropdown = styled.ul`
  position: absolute;
  background-color: ${theme.color.white};
  border: ${theme.border[1]};
  border-radius: ${theme.borderRadius[1]};
  padding: ${theme.spacing[8]};
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing[4]};
  margin-top: ${theme.spacing[8]};
  top: 100%;
  width: 8rem;
  box-shadow: ${theme.boxShadow[1]};
  animation: ${appear} 0.1s linear;
  list-style:none ;  
`;

export const Item = styled.li`
  padding: ${theme.spacing[8]} ${theme.spacing[8]};
  user-select:none ;
  &:hover,
  &:focus {
    background-color: ${theme.color.gray[10]};
    border-radius: ${theme.borderRadius[1]};
  }
`;
