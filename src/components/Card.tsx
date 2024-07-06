import React, { FC } from "react";

type CardProps = {
  width?: "sm" | "md" | "lg" | "full";
  height?: "sm" | "md" | "lg" | "full";
  shadow?: boolean;
  padding?: "sm" | "md" | "lg" | "none";
  rounded?: "none" | "sm" | "md" | "lg" | "full";
  color?: "white" | "none" | "background";
  border?: "none" | "borderR" | "borderB";
  children: React.ReactNode;
};

/* eslint-disable no-unused-vars*/
enum CardPadding {
  none = "p-0",
  sm = "p-4",
  md = "p-6",
  lg = "p-8",
}

enum CardRounded {
  none = "rounded-none",
  sm = "rounded",
  md = "rounded-md",
  lg = "rounded-lg",
  full = "rounded-full",
}

enum CardColor {
  none = "bg-none",
  white = "bg-white",
  background = "bg-background",
}

enum CardWidth {
  sm = "w-[316px]",
  md = "w-[330px]",
  lg = "w-[415px]",
  full = "w-full",
}

enum CardHeight {
  sm = "h-[316px]",
  md = "h-[330px]",
  lg = "h-[415px]",
  full = "h-full",
}

enum CardBorder {
  none = "border-0",
  borderB = "border-b",
  borderR = "border-r",
}
/* eslint-enable no-unused-vars*/

const Card: FC<CardProps> = ({
  children,
  padding = "sm",
  shadow,
  width = "full",
  height = "full",
  rounded = "md",
  color = "white",
  border = "none",
}) => {
  return (
    <div
      className={`${CardWidth[width]} ${CardHeight[height]}  ${
        CardRounded[rounded]
      } ${CardPadding[padding]} ${CardColor[color]}
      ${shadow && "shadow-lg"} ${CardBorder[border]}`}
    >
      {children}
    </div>
  );
};

export default Card;
