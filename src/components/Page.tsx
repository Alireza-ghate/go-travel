import { type ReactElement } from "react";

interface PageProps {
  children: ReactElement[];
}

function Page({ children }: PageProps) {
  return <div>{children}</div>;
}

export default Page;
