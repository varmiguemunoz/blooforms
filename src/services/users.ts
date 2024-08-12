import { httpClient } from "@/utils/httpClient";

const getUsers = async () => {
  try {
    const { data } = await httpClient.get("/users");
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getOneUser = async (id: string) => {
  const { data } = await httpClient.get(`/users/${id}`);
  return {
    user: data,
  };
};

const createNewUser = async (user: unknown) => {
  try {
    const { data } = await httpClient.post("/users", user);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const updateUser = async (id: string, user: unknown) => {
  try {
    const { data } = await httpClient.patch(`/users/${id}`, user);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export { getOneUser, createNewUser, updateUser, getUsers };
