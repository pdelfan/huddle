import { StyledLink, StyledFavicon } from "./Link.styled";
import { Typography } from "../typography/Typography";
import { Row, Column } from "./Link.styled";

interface LinkProps {
  url: string;
  title?: string;
  favicon?: string;
}

export const Link = ({ url, title, favicon }: LinkProps) => {
  return (
    <StyledLink>
      <Row>
        <StyledFavicon src={favicon} alt="Favicon" />
        <Column>
          <Typography variant="h6">
            {title ? title : "Title Unavailable"}
          </Typography>
          <Typography variant="body1">{url}</Typography>
        </Column>
      </Row>
    </StyledLink>
  );
};
