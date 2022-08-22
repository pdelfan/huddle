import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Comment } from "./Comment";

export default {
  title: "Content Display/Comment",
  component: Comment,
} as ComponentMeta<typeof Comment>;

const Template: ComponentStory<typeof Comment> = (args) => (
  <Comment {...args} />
);

export const Default = Template.bind({});

Default.args = {
  user: "Alice",
  userImage: "https://avatars.dicebear.com/api/initials/jd.svg?b=%23d100ab",
  date: "1 hr ago",
  text: "This is a comment that I just made as an example.",
};
