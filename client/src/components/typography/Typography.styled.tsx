import styled from "styled-components";
import { theme } from "../../theme/theme";

interface TypographyProps {
  color?: string;
}

export const H1 = styled.h1<TypographyProps>`
  font-size: ${theme.fontSize[7]};
  font-weight: ${theme.fontWeight.semibold};
  color: ${(props) => (props.color ? props.color : `${theme.color.gray[60]}`)};
`;

export const H2 = styled.h2<TypographyProps>`
  font-size: ${theme.fontSize[6]};
  font-weight: ${theme.fontWeight.semibold};
  color: ${(props) => (props.color ? props.color : `${theme.color.gray[60]}`)};
`;

export const H3 = styled.h3<TypographyProps>`
  font-size: ${theme.fontSize[5]};
  font-weight: ${theme.fontWeight.semibold};
  color: ${(props) => (props.color ? props.color : `${theme.color.gray[60]}`)};
`;

export const H4 = styled.h4<TypographyProps>`
  font-size: ${theme.fontSize[4]};
  font-weight: ${theme.fontWeight.semibold};
  color: ${(props) => (props.color ? props.color : `${theme.color.gray[60]}`)};
`;

export const H5 = styled.h5<TypographyProps>`
  font-size: ${theme.fontSize[3]};
  font-weight: ${theme.fontWeight.semibold};
  color: ${(props) => (props.color ? props.color : `${theme.color.gray[60]}`)};
`;

export const H6 = styled.h6<TypographyProps>`
  font-size: ${theme.fontSize[2]};
  font-weight: ${theme.fontWeight.semibold};
  color: ${(props) => (props.color ? props.color : `${theme.color.gray[60]}`)};
`;

export const Body1 = styled.p<TypographyProps>`
  font-size: ${theme.fontSize[2]};
  font-weight: ${theme.fontWeight.medium};
  color: ${(props) => (props.color ? props.color : `${theme.color.gray[40]}`)};
`;

export const Body2 = styled.p<TypographyProps>`
  font-size: ${theme.fontSize[1]};
  font-weight: ${theme.fontWeight.medium};
  color: ${(props) => (props.color ? props.color : `${theme.color.gray[60]}`)};
`;
