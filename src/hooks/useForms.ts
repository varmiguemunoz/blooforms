import { GetSpace } from "@/services/forms";
import { useCallback } from "react";

const useForms = () => {
  const getSpace = useCallback(async () => {
    //03. Guardar la información en un estado de redux 🧠

    try {
      const forms = await GetSpace();

      return forms;
    } catch (error) {
      console.log(error);
    }
  }, []);

  return {
    getSpace,
  };
};

export default useForms;
