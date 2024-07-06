"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

// ICONS
import { MdAccountBox } from "react-icons/md";
import { TbHelpSquareRoundedFilled } from "react-icons/tb";

const MenuRouter = [
  {
    url: "/accounts",
    title: "Accounts",
  },
  {
    url: "/help",
    title: "Help",
  },
];

const getIcon = (url: string) => {
  switch (url) {
    case "/accounts":
      return <MdAccountBox className="mr-[5px]" size="20" />;
    case "/help":
      return <TbHelpSquareRoundedFilled className="mr-[5px]" size="20" />;
    default:
      return null;
  }
};

export default function Menu() {
  const location = usePathname();

  return (
    <div className="bg-background p-5 rounded-lg">
      {MenuRouter.map((group) => (
        <Link
          href={`/home/config/${group.url}`}
          className={`border-b flex items-center justify-start gap-1 cursor-pointer px-3 py-3 rounded-lg ${
            location.endsWith(group.url) &&
            "bg-basePurple text-white rounded-[10px]"
          }`}
          key={group.title}
        >
          {getIcon(group.url)}
          <h2 className="text-md font-medium">{group.title}</h2>
        </Link>
      ))}
    </div>
  );
}
