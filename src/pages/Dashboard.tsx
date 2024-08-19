import FormTable from "@/components/FormTable";
import ModalSpace from "@/components/ModalSpace";
import useForms from "@/hooks/useForms";

import { useEffect, useMemo } from "react";

export default function Dashboard() {
  // 02. Se debe sacar al usuario una vez que la sesion expira
  // 05. validar que si el usuario no tiene ningun mensaje en el formulario

  const { getSpace, form } = useForms();

  useEffect(() => {
    getSpace();
  }, [getSpace]);

  const formValues = useMemo(() => {
    const formArray = Array.isArray(form) ? form : [form];

    return formArray?.flatMap((item) => {
      return item.formulario.map(
        (itemForm: { form_value: string; form_name: string }) => ({
          id: item.id,
          title: item.titulo,
          form_name: itemForm.form_name,
          form_value: itemForm.form_value,
        })
      );
    });
  }, [form]);

  return (
    <div className="w-full h-screen">
      {form.length === 0 ? (
        <div className="w-full h-full flex flex-col justify-center items-center">
          <ModalSpace />
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
