import { type ReactElement } from "react";

interface HeaderProps {
  children: ReactElement[];
}

function Header({ children }: HeaderProps) {
  return <header className="px-24 pt-8 pb-23">{children}</header>;
}

export default Header;
