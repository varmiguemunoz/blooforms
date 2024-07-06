import { useState, ChangeEvent } from "react";

type useReadFieldProps = {
  type: string;
};

export const useReadField = ({ type }: useReadFieldProps) => {
  const [getData, setGetData] = useState<string>("");

  const handleData = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue =
      type === "number" ? parseInt(e.target.value, 10) : e.target.value;
    setGetData(newValue.toString());
  };

  return {
    value: getData,
    onChange: handleData,
    setGetData,
    type,
  };
};
