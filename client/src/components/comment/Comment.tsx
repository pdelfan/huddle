import { StyledComment, Row, Column } from "./Comment.styled";
import { Typography } from "../typography/Typography";
import { Avatar } from "../avatar/Avatar";
import { theme } from "../../theme/theme";

interface CommentProps {
  userImage: string;
  user: string;
  date: string;
  text: string;
}

export const Comment = ({ userImage, user, date, text }: CommentProps) => {
  return (
    <StyledComment>
      <Row>
        <Avatar image={userImage} />
        <Column>
          <Row>
            <Typography variant="h6">{user}</Typography>
            <Typography variant="h6" color={theme.color.gray[30]}>
              {date}
            </Typography>
          </Row>
          <Typography variant="body1">{text}</Typography>
        </Column>
      </Row>
    </StyledComment>
  );
};
