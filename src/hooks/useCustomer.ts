import { httpClient } from "@/utils/httpClient";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { setError, setIsLoading } from "@/redux/features/customerSlice";

const useCustomer = () => {
  const dispatch = useDispatch();

  const { isLoading, error } = useSelector(
    (state: RootState) => state.customers
  );

  const createCustomer = async (
    newCustomer: { name: string; email: string; phone: string },
    idSpace: number
  ) => {
    try {
      dispatch(setIsLoading(true));

      const customer = await httpClient.post(
        `/forms/create-customer/${idSpace}`,
        newCustomer
      );

      return customer;
    } catch (error) {
      dispatch(setError(error));
      throw error;
    } finally {
      dispatch(setIsLoading(false));
    }
  };

  return {
    createCustomer,
    isLoading,
    error,
  };
};

export default useCustomer;
