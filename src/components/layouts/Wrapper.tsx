import React, { ReactNode } from "react";

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
    <section className="flex justify-between items-center h-full">
      <aside className="w-[30%] h-full bg-baseWhite px-6 py-6 flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <h1 className="text-xl font-semibold px-2">{name}</h1>
          {sideBarContent}
        </div>
      </aside>

      <aside className="w-[70%] h-full">
        <div
          className={`flex flex-col w-full h-full ${Justify[justify]} ${Padding[padding]}`}
        >
          {asideTitle && (
            <h1 className="text-xl font-semibold px-2 mb-10">{asideTitle}</h1>
          )}
          {children}
        </div>
      </aside>
    </section>
  );
}
