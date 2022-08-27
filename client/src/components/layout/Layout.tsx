import { useAuth0 } from "@auth0/auth0-react";
import { Navbar } from "../navbar/Navbar";
import { StyledLayout } from "./Layout.styled";
import AvatarPlaceholder from "../../assets/avatarPlaceholder.png";

interface LayoutProps {
  children: React.ReactNode;
  title: string;
}

function Layout({ children, title }: LayoutProps) {
  const { user } = useAuth0();
  const userPicture = user?.picture ? user.picture : AvatarPlaceholder;
  
  return (
    <>
      {user && <Navbar user={userPicture} title={title} />}
      <StyledLayout>{children}</StyledLayout>
    </>
  );
}

export default Layout;
