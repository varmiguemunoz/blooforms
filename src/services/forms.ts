import { httpClient } from "@/utils/httpClient";

export const GetSpace = async () => {
  const { data } = await httpClient.get("/forms/get-space");

  return data;
};
