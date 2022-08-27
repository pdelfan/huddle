import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Note } from "./Note";

export default {
  title: "Content Display/Note",
  component: Note,
} as ComponentMeta<typeof Note>;

const Template: ComponentStory<typeof Note> = (args) => <Note {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: "Note title",
  text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
};
