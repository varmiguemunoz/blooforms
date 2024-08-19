import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

import { Input } from "./ui/input";
import useForms from "@/hooks/useForms";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreateSpaceSchema } from "@/schema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { z } from "zod";
import useUsers from "@/hooks/useUsers";
import { toast } from "sonner";

export default function ModalSpace() {
  const { createSpace } = useForms();
  const { currentUser } = useUsers();

  const form = useForm({
    resolver: zodResolver(CreateSpaceSchema),
    defaultValues: {
      titulo: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof CreateSpaceSchema>) => {
    try {
      const { id } = currentUser.user;

      const payload = {
        titulo: data.titulo,
        id_user: parseInt(id),
        id_space_types: 3,
      };

      const response = await createSpace(payload);

      toast("¡Espacio creado con exito! 🔥");

      return response;
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
    <Dialog>
      <DialogTrigger>
        <Button type="button" className="w-auto h-[45px]">
          Crear Espacio 🧠
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Crea tu espacio aqui </DialogTitle>
          <DialogDescription>
            Digita la siguiente información ⚡️
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="grid flex-1 gap-2">
              <FormField
                control={form.control}
                name={"titulo"}
                render={({ field }) => (
                  <FormItem className="text-start">
                    <FormLabel>Titulo</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type={"text"}
                        placeholder="Inserta el titulo de tu espacio"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <DialogFooter className="sm:justify-start mt-5">
              <DialogClose>
                <Button type="submit">Enviar</Button>
              </DialogClose>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
