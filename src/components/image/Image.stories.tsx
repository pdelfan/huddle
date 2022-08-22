import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Image } from "./Image";

export default {
  title: "Content Display/Image",
  component: Image,
} as ComponentMeta<typeof Image>;

const Template: ComponentStory<typeof Image> = (args) => <Image {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: "Ritratto-di-Musico.png",
  image:
    "https://upload.wikimedia.org/wikipedia/commons/d/d0/Ritratto_di_musico_01.jpg",
};
