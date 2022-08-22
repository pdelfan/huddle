import { StyledAvatar } from "./Avatar.styled";

interface AvatarProps {
  image: string;
}

export const Avatar = ({ image }: AvatarProps) => {
  return <StyledAvatar src={image} alt="avatar" />;
};
