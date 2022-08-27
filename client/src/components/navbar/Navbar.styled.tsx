import styled from "styled-components";
import { theme } from "../../theme/theme";

export const StyledNavbar = styled.nav`
  background-color: ${theme.color.white};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  z-index: 1;
  width: 100%;
  padding: ${theme.spacing[8]} ${theme.spacing[12]};
  border-bottom: ${theme.border[1]};
  -webkit-app-region: drag;
`;

export const LibraryShortcut = styled.img`
  display: block;
  max-width: 2rem;
`;
