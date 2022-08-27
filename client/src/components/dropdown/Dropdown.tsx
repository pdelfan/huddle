import { StyledDropdown, DropdownItem } from "./Dropdown.styled";

interface DropdownProps {
  isOpen: boolean;
}

function Dropdown({ isOpen }: DropdownProps) {
  if (isOpen) {
    return (
      <StyledDropdown>
        <DropdownItem tabIndex={0}>item</DropdownItem>
        <DropdownItem tabIndex={0}>item</DropdownItem>
        <DropdownItem tabIndex={0}>item</DropdownItem>
      </StyledDropdown>
    );
  } else {
    return null;
  }
}

export default Dropdown;
