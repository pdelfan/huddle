import { Typography } from "../typography/Typography";
import { StyledNote } from "./Note.styled";

interface NoteProps {
  title?: string;
  text: string;
}

export const Note = ({ title, text }: NoteProps) => {
  return (
    <StyledNote>
      {title && <Typography variant="h6">{title}</Typography>}
      <Typography variant="body1">{text}</Typography>
    </StyledNote>
  );
};
