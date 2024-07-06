import React from "react";
import Image from "next/image";

import Card from "./Card";

interface ChatsProps {
  name: string;
  description: string;
  image: string;
}

export default function Chats({ name, description, image }: ChatsProps) {
  return (
    <Card color="none" padding="none">
      <div className="flex items-center justify-start hover:bg-[#D9D9D9] px-2 py-2 rounded-lg gap-2 cursor-pointer">
        <div className="rounded-full">
          <Image
            src={image}
            alt="icon"
            width={60}
            height={60}
            className="rounded-full object-cover w-[60px] h-[60px]"
          />
        </div>

        <div>
          <h1 className="text-black text-[18px]">{name}</h1>
          <p className="text-black text-sm">{description}</p>
        </div>
      </div>
    </Card>
  );
}
