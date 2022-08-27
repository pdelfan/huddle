import styled from "styled-components";
import { theme } from "../../theme/theme";

interface StyledButtonProps {
  variant?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
  color?: string;
}

export const StyledButton = styled.button<StyledButtonProps>`
  font-size: ${theme.fontSize[1]};
  font-weight: ${theme.fontWeight.semibold};
  background-color: ${(props) =>
    props.color ? props.color : theme.color.white};
  color: ${theme.color.gray[50]};
  padding: ${theme.spacing[12]} ${theme.spacing[24]};
  border: ${theme.border[1]};
  border-radius: ${theme.borderRadius[1]};
  cursor: pointer;

  &:hover {
    background-color: ${theme.color.gray[10]};
  }
`;
