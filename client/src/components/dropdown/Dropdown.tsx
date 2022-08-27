import React from "react";
import { StyledDropdown, Item } from "./Dropdown.styled";

interface ItemProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export function DropdownItem({ children, onClick }: ItemProps) {
  return (
    <Item tabIndex={0} onClick={onClick}>
      {children}
    </Item>
  );
}

interface DropdownProps {
  isOpen: boolean;
  children: React.ReactNode;
}

function Dropdown({ isOpen, children }: DropdownProps) {
  if (isOpen) {
    return <StyledDropdown>{children}</StyledDropdown>;
  } else {
    return null;
  }
}

export default Dropdown;
