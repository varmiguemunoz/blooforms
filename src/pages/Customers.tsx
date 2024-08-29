import { useEffect, useMemo } from "react";
import { toast } from "sonner";
import { z } from "zod";

import Modal from "@/components/Modal";
import Table from "@/components/Table";

import useForms from "@/hooks/useForms";
import useCustomer from "@/hooks/useCustomer";
import { CreateCustomerSchema } from "@/schema";

export default function Customers() {
  const { getSpace, form } = useForms();
  const { createCustomer } = useCustomer();

  useEffect(() => {
    getSpace();
  }, [getSpace]);

  const customerValues = useMemo(() => {
    const formArray = Array.isArray(form) ? form : [];

    return formArray.flatMap(
      (item: {
        id: number;
        customers: { name: string; email: string; phone: string }[];
      }) =>
        item.customers?.map((itemCustomer) => ({
          id: item.id,
          name: itemCustomer.name || "",
          email: itemCustomer.email || "",
          phone: itemCustomer.phone || "",
        })) || []
    );
  }, [form]);

  const onSubmit = async (data: z.infer<typeof CreateCustomerSchema>) => {
    //01. Sacar el id del espacio para mandarlo en la request
    try {
      const payload = {
        name: data.name,
        email: data.email,
        phone: data.phone,
      };

      const newCustomer = await createCustomer(payload, 8);

      toast("¡Cliente creado con éxito! 🔥");

      return newCustomer;
    } catch (error) {
      console.log(error);
      throw error;
    } finally {
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    }
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-between w-full items-center">
        <h1 className="text-2xl font-semibold">Portafolio de clientes</h1>

        <Modal
          title="Crea a tus clientes"
          description="Espacio para agregar tus clientes a tu base de datos"
          buttonText="Crear Espacio 🧠"
          formFields={[
            {
              name: "name",
              label: "Nombre",
              type: "text",
              placeholder: "John doe",
            },
            {
              name: "email",
              label: "Email",
              type: "text",
              placeholder: "hola@bloomify.tech",
            },
            {
              name: "phone",
              label: "Phone",
              type: "text",
              placeholder: "+57 3023278057",
            },
          ]}
          formSchema={CreateCustomerSchema}
          onSubmit={onSubmit}
          defaultValues={{ name: "", phone: "", email: "" }}
        />
      </div>

      <Table
        headers={[
          {
            title: "Nombre Cliente",
            key: "name",
            dataIndex: "name",
          },
          {
            title: "Correo Electrónico",
            key: "email",
            dataIndex: "email",
          },
          {
            title: "Celular",
            key: "phone",
            dataIndex: "phone",
          },
        ]}
        data={customerValues}
      />
    </div>
  );
}
