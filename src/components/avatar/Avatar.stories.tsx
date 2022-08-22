import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Avatar } from "./Avatar";

export default {
  title: "Data Display/Avatar",
  component: Avatar,
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Default = Template.bind({});

Default.args = {
  image: "https://avatars.dicebear.com/api/initials/jd.svg?b=%23d100ab",
};