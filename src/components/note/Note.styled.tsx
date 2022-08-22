import styled from "styled-components";
import { theme } from "../../theme/theme";

export const StyledNote = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing[12]};
  max-width: 20rem;
  background-color: ${theme.color.white};
  border: ${theme.border[1]};
  border-radius: ${theme.borderRadius[1]};
  padding: ${theme.spacing[12]};
  box-shadow: ${theme.boxShadow[1]};
`;