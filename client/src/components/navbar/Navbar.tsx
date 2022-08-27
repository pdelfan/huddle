import { useState } from "react";
import { Avatar } from "../avatar/Avatar";
import { Typography } from "../typography/Typography";
import { StyledNavbar, LibraryShortcut } from "./Navbar.styled";
import HuddleIcon from "../../assets/logo192.png";
import { Link } from "react-router-dom";
import Dropdown from "../dropdown/Dropdown";
import { DropdownParent } from "../dropdown/Dropdown.styled";

interface NavbarProps {
  user: string;
  title: string;
}

export const Navbar = ({ user, title }: NavbarProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  return (
    <StyledNavbar>
      <Link to="/library">
        <LibraryShortcut src={HuddleIcon}></LibraryShortcut>
      </Link>
      <Typography variant="body2">{title}</Typography>
      <DropdownParent>
        <Avatar        
          image={user}
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        />
        <Dropdown isOpen={isDropdownOpen} />
      </DropdownParent>
    </StyledNavbar>
  );
};
