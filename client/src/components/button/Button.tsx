import { theme } from "../../theme/theme";
import { StyledButton } from "./Button.styled";

interface ButtonProps {
  disabled?: boolean;
  variant?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
  color?: string;
  text: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

function Button({
  variant = "primary",
  size = "medium",
  color,
  text,
  disabled = false,
  onClick,
}: ButtonProps) {
  return (
    <StyledButton
      disabled={disabled}
      onClick={onClick}
      color={color}
      variant={variant}
      size={size}
    >
      {text}
    </StyledButton>
  );
}

export default Button;
