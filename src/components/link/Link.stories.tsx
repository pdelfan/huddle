import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Link } from "./Link";

export default {
  title: "Content Display/Link",
  component: Link,
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => <Link {...args} />;

export const Default = Template.bind({});

Default.args = {
  url: "https://www.theguardian.com/international",
  title:
    "News, sport and opinion from the Guardian's global edition | The Guardian",
  favicon:
    "https://assets.guim.co.uk/images/favicons/46bd2faa1ab438684a6d4528a655a8bd/32x32.ico",
};
