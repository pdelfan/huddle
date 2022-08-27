import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Navbar } from "./Navbar";

export default {
  title: "Navigational/Navbar",
  component: Navbar,
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Default = Template.bind({});

Default.args = {
  user: "https://avatars.dicebear.com/api/initials/jd.svg?b=%23d100ab",
  title: "Library",
};
