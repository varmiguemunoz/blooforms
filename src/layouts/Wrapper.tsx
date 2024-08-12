import { ReactNode } from "react";

interface WrapperProps {
  children: ReactNode;
  name: string;
  asideTitle?: string;
  sideBarContent: ReactNode;
  padding?: "sm" | "none";
  justify?: "between" | "none" | "center";
}

enum Padding {
  sm = "p-5",
  none = "p-0",
}

enum Justify {
  between = "justify-between",
  none = "justify-normal",
  center = "justify-center",
}

export default function Wrapper({
  children,
  sideBarContent,
  name,
  padding = "sm",
  justify = "between",
  asideTitle,
}: WrapperProps) {
  return (
    <section className="flex justify-between items-start gap-16 w-full">
      <aside className="w-[13%] h-screen border-r bg-gray-100 px-6 py-6 flex flex-col">
        <div className="flex flex-col h-full">
          <h1 className="text-xl font-medium px-2 text-center">{name}</h1>
          {sideBarContent}
        </div>
      </aside>

      <aside className="w-[85%] pr-16 h-full">
        <div
          className={`flex px-2 flex-col w-full h-full ${Justify[justify]} ${Padding[padding]}`}
        >
          {asideTitle && (
            <h1 className="text-xl font-semibold mb-8">{asideTitle}</h1>
          )}
          {children}
        </div>
      </aside>
    </section>
  );
}
