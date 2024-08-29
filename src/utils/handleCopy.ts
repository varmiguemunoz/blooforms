import { toast } from "sonner";

export const handleCopy = (url: string) => {
  navigator.clipboard.writeText(url).then(() => {
    toast("¡Elemento Copiado Con Exito! ⚡️");
  });
};
