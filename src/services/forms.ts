import { FormSpace } from "@/types/form";
import { httpClient } from "@/utils/httpClient";

export const GetSpace = async () => {
  const { data } = await httpClient.get("/forms/get-space");

  return data;
};

export const CreateSpace = async (space: FormSpace) => {
  return await httpClient.post("/forms/create-space", space);
};
