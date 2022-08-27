import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useState } from "react";
import Button from "../button/Button";
import Dropdown from "./Dropdown";
import { DropdownParent } from "./Dropdown.styled";

export default {
  title: "Action/Dropdown",
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DropdownParent>
      <Button text="Open dropdown" onClick={() => setIsOpen(!isOpen)} />
      <Dropdown {...args} isOpen={isOpen} />
    </DropdownParent>
  );
};

export const Default = Template.bind({});

Default.args = {};
