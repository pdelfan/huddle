import { Typography } from "../typography/Typography";
import { StyledImage, Img } from "./Image.styled";

interface ImageProps {
  title?: string;
  image: string;
}

export const Image = ({ title, image }: ImageProps) => {
  return (
    <StyledImage>      
      {title && <Typography variant="body1">{title}</Typography>}
      <Img src={image} alt="image card" />
    </StyledImage>
  );
};
