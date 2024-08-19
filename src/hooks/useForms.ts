import { GetSpace, CreateSpace } from "@/services/forms";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setForm, setError, setIsLoading } from "@/redux/features/formSlice";
import { RootState } from "@/redux/store";
import { FormSpace } from "@/types/form";

const useForms = () => {
  const dispatch = useDispatch();
  const { isLoading, form, error, isCreating } = useSelector(
    (state: RootState) => state.form
  );

  const getSpace = useCallback(async () => {
    try {
      dispatch(setIsLoading(true));

      const forms = await GetSpace();

      dispatch(setForm(forms));
    } catch (error: unknown) {
      dispatch(setError(error));
    } finally {
      dispatch(setIsLoading(false));
    }
  }, [dispatch]);

  const createSpace = async (space: FormSpace) => {
    try {
      dispatch(setIsLoading(true));

      const newSpace = {
        ...space,
      };

      const { data } = await CreateSpace(newSpace);

      return data;
    } catch (error) {
      dispatch(setError(error));
    } finally {
      dispatch(setIsLoading(false));
    }
  };

  return {
    getSpace,
    createSpace,
    isLoading,
    error,
    form,
    isCreating,
  };
};

export default useForms;
