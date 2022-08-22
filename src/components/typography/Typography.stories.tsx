import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Typography } from "./Typography";

export default {
  title: "Data Display/Typography",
  component: Typography,
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = () => (
  <>
    <Typography variant="h1">H1</Typography>
    <Typography variant="h2">H2</Typography>
    <Typography variant="h3">H3</Typography>
    <Typography variant="h4">H4</Typography>
    <Typography variant="h5">H5</Typography>
    <Typography variant="h6">H6</Typography>
    <Typography variant="body1">Body1</Typography>
    <Typography variant="body2">Body2</Typography>
  </>
);

export const Default = Template.bind({});
