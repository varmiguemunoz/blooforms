import { Input } from "@/components/ui/input";
import { FaCopy } from "react-icons/fa";
import { toast } from "sonner";

export default function Settings() {
  //08. Pasar por parametros el id y un token de acceso
  //09. Verificar en el backend que esta ruta sea publica
  //10. Verificar el token del usuario por parametros para la petición

  const URL = "http://localhost:4300/api/forms/create-form/1";

  const handleCopy = (url: string) => {
    navigator.clipboard.writeText(url).then(() => {
      toast("¡Elemento Copiado Con Exito! ⚡️");
    });
  };

  return (
    <div className="w-full h-[90vh] justify-center items-center flex gap-3 flex-col">
      <h1 className="text-start text-gray-400 text-xl">
        Conectate para enviar formularios
      </h1>
      <div className="w-[350px] bg-gray-200 h-[130px] px-5 py-5 flex gap-3 justify-center items-center rounded-md">
        <Input placeholder={URL} readOnly type="text" />

        <div className="justify-end items-end flex-col inline cursor-pointer">
          <FaCopy size={23} onClick={() => handleCopy(URL)} />
        </div>
      </div>
    </div>
  );
}
