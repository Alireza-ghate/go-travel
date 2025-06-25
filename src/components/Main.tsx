import { ReactElement } from "react";

interface MainProps {
  children: ReactElement;
}

function Main({ children }: MainProps) {
  return <main>{children}</main>;
}

export default Main;
