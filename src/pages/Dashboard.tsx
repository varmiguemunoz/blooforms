import ModalSpace from "@/container/ModalSpace";
import useForms from "@/hooks/useForms";

import { useEffect, useMemo } from "react";
import { baseURL } from "@/utils/httpClient";
import TableForms from "@/container/TableForms";
import ConnectForm from "@/container/ConnectForm";

type FormItem = {
  form_name: string;
  form_value: string;
};

type FormGroup = {
  id: number;
  formulario: FormItem[];
};

/* eslint-disable no-unused-vars, @typescript-eslint/no-explicit-any */

export default function Dashboard() {
  const { getSpace, form } = useForms();

  useEffect(() => {
    getSpace();
  }, [getSpace]);

  const formValues = useMemo(() => {
    const formArray = Array.isArray(form) ? form : [];
    const groupedValues: {
      [key: number]: { id: number } & { [key: string]: string };
    } = {};

    formArray.forEach((item: FormGroup) => {
      const row: any = { id: item.id };

      item.formulario?.forEach((itemForm) => {
        row[itemForm.form_name] = itemForm.form_value || "";
      });
      groupedValues[item.id] = row;
    });

    return Object.values(groupedValues);
  }, [form]);

  return (
    <div className="w-full h-screen">
      {!form || form.length === 0 ? (
        <div className="w-full h-full flex flex-col justify-center items-center">
          <ModalSpace />
        </div>
      ) : formValues.length === 0 ? (
        <div className="w-full flex flex-col justify-center text-center items-center h-screen">
          <ConnectForm url={`${baseURL}/forms/create-form/8`} />
        </div>
      ) : (
        <TableForms formValues={formValues} />
      )}
    </div>
  );
}
