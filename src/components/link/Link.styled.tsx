import styled from "styled-components";
import { theme } from "../../theme/theme";

export const StyledLink = styled.div`
  max-width: 25rem;
  background-color: ${theme.color.white};
  border: ${theme.border[1]};
  border-radius: ${theme.borderRadius[1]};
  padding: ${theme.spacing[12]};
  box-shadow: ${theme.boxShadow[1]};
`;

export const StyledFavicon = styled.img`
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  object-fit: cover;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing[12]};  
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${theme.spacing[12]};  
`;
