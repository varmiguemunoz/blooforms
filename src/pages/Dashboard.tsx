import FormTable from "@/components/FormTable";
import ModalSpace from "@/container/ModalSpace";
import useForms from "@/hooks/useForms";

import { useEffect, useMemo } from "react";
import { FaCopy } from "react-icons/fa";
import { handleCopy } from "@/utils/handleCopy";

export default function Dashboard() {
  // 02. Se debe sacar al usuario una vez que la sesion expira

  const { getSpace, form } = useForms();

  const URL = "http://localhost:4300/api/forms/create-form/8";

  useEffect(() => {
    getSpace();
  }, [getSpace]);

  const formValues = useMemo(() => {
    const formArray = Array.isArray(form) ? form : [form];

    return formArray?.flatMap((item) => {
      return item.formulario?.map(
        (itemForm: { form_value: string; form_name: string }) => ({
          id: item.id,
          title: item.titulo,
          form_name: itemForm.form_name,
          form_value: itemForm.form_value,
        })
      );
    });
  }, [form]);

  const noFormsAvailable = !form || form.length === 0;

  return (
    <div className="w-full h-screen">
      {noFormsAvailable ? (
        <div className="w-full h-full flex flex-col justify-center items-center">
          <ModalSpace />
        </div>
      ) : formValues.length === 0 ? (
        <div className="w-full flex flex-col justify-center text-center items-center h-screen">
          <div className="bg-gray-200 rounded-md px-10 py-6 text-gray-600 gap-4 flex flex-col">
            <p className="text-start font-medium text-gray-700">
              Conectate para enviar información:
            </p>
            <div className="bg-white px-5 py-5 gap-3 rounded-md flex justify-center w-full items-center">
              <h2 className="font-bold text-gray-700">{URL}</h2>
              <div className="cursor-pointer">
                <FaCopy size={23} onClick={() => handleCopy(URL)} />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full h-full flex flex-col gap-5">
          <h1 className="text-2xl font-bold">Formularios 🗂️</h1>
          <FormTable forms={formValues} />
        </div>
      )}
    </div>
  );
}
