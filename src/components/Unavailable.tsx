import { FC, JSX } from "react";

interface UnavailableProps {
  text: string;
  icon: JSX.Element;
}

const Unavailable: FC<UnavailableProps> = ({ text, icon }) => {
  return (
    <div className="flex flex-col items-center w-full h-60 justify-center">
      <div className="flex">{icon}</div>
      <h3 className="mt-8">{text}</h3>
    </div>
  );
};

export default Unavailable;
