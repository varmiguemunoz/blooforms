import useForms from "@/hooks/useForms";
import { useEffect } from "react";

export default function Dashboard() {
  // 02. Se debe sacar al usuario una vez que la sesion expira
  // 04. Validar que si el usuario no tiene ningun espacio.
  // 05. validar que si el usuario no tiene ningun mensaje en el formulario

  const { getSpace } = useForms();

  useEffect(() => {
    getSpace();
  }, [getSpace]);

  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
}
