import { useAuth0 } from "@auth0/auth0-react";
import Navbar from "../navbar/Navbar";
import { StyledLayout } from "./Layout.styled";

interface LayoutProps {
  children: React.ReactNode;
  title: string;
}

function Layout({ children, title }: LayoutProps) {
  return (
    <>
      <Navbar title={title} />
      <StyledLayout>{children}</StyledLayout>
    </>
  );
}

export default Layout;
