import { AuthUser } from "@/types/auth";
import { publicHttpClient } from "@/utils/httpClient";

export const auth = async (user: AuthUser) => {
  const { data } = await publicHttpClient.post("/auth/login", user);

  return data;
};
