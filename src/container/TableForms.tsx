import Table from "@/components/Table";
import { useMemo } from "react";

/* eslint-disable no-unused-vars, @typescript-eslint/no-explicit-any */

function TableForms({ formValues }: any) {
  const headers = useMemo(() => {
    const headerSet = new Set();

    formValues.forEach((item: any) => {
      Object.keys(item).forEach((key) => {
        if (key !== "id") {
          headerSet.add(key);
        }
      });
    });

    return Array.from(headerSet).map((headerName) => ({
      title: headerName || "",
      key: headerName || "",
      dataIndex: headerName || "",
    }));
  }, [formValues]);

  return (
    <div className="w-full h-full flex flex-col gap-5">
      <h1 className="text-2xl font-bold">Formularios 🗂️</h1>
      <Table headers={headers} data={formValues} />
    </div>
  );
}

export default TableForms;
