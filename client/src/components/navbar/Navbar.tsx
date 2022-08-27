import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Avatar } from "../avatar/Avatar";
import { Typography } from "../typography/Typography";
import { StyledNavbar, LibraryShortcut } from "./Navbar.styled";
import HuddleIcon from "../../assets/logo192.png";
import { Link } from "react-router-dom";
import Dropdown, { DropdownItem } from "../dropdown/Dropdown";
import { DropdownParent } from "../dropdown/Dropdown.styled";
import AvatarPlaceholder from "../../assets/avatarPlaceholder.png";
import Button from "../button/Button";

interface NavbarProps {
  title: string;
}

function Navbar({ title }: NavbarProps) {
  const { user, logout } = useAuth0();
  const userPicture = user?.picture ? user.picture : AvatarPlaceholder;

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <StyledNavbar>
      <Link to="/library">
        <LibraryShortcut src={HuddleIcon}></LibraryShortcut>
      </Link>
      <Typography variant="body2">{title}</Typography>
      <DropdownParent>
        <Avatar
          image={userPicture}
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        />
        <Dropdown isOpen={isDropdownOpen}>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem
            onClick={() => logout({ returnTo: window.location.origin })}
          >
            Sign out
          </DropdownItem>
        </Dropdown>
      </DropdownParent>
    </StyledNavbar>
  );
}

export default Navbar;
