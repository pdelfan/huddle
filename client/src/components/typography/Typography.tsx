import { theme } from "../../theme/theme";
import React from "react";
import { H1, H2, H3, H4, H5, H6, Body1, Body2 } from "./Typography.styled";

const typeVariant = {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  body1: Body1,
  body2: Body2,
};

type Variant = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "body1" | "body2";

interface TypographyProps {
  variant: Variant;
  color?: string;
  children: string;
}

export const Typography = ({
  variant,
  color,
  children,
}: TypographyProps) => {
  const SelectedType: React.ElementType = typeVariant[variant];

  return <SelectedType color={color}>{children}</SelectedType>;
};
