import { StyledAvatar } from "./Avatar.styled";

interface AvatarProps {
  image: string;
  onClick?: () => void;
}

export const Avatar = ({ image, onClick }: AvatarProps) => {
  return <StyledAvatar src={image} alt="avatar" onClick={onClick} />;
};
