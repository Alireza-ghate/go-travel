import { type ReactElement } from "react";

interface PageProps {
  children: ReactElement[];
}

function Page({ children }: PageProps) {
  return <div className="text-grey-1000">{children}</div>;
}

export default Page;
