import styled from "styled-components";
import { theme } from "../../theme/theme";

export const StyledComment = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing[12]};
  max-width: 22rem;
  background-color: ${theme.color.white};
  border: ${theme.border[1]};
  border-radius: ${theme.borderRadius[1]};
  padding: ${theme.spacing[12]};
  box-shadow: ${theme.boxShadow[1]};
`;

export const CommentDate = styled.h3`
  color: ${theme.color.gray[30]};
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
