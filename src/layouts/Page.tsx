import { ReactNode } from "react";

export default function Page({ children }: ReactNode) {
  return <main className="w-full h-full">{children}</main>;
}
