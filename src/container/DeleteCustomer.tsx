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
} from "@/components/ui/dialog";
import { httpClient } from "@/utils/httpClient";

import { FaRegTrashAlt } from "react-icons/fa";

interface DeleteCustomerProps {
  id: number;
}

function DeleteCustomer({ id }: DeleteCustomerProps) {
  const handleDeleteCustomer = async () => {
    try {
      if (!id) return;

      const response = await httpClient.delete(
        `/forms/delete-customer/8?id_customer=${id}`
      );

      return response;
    } catch (error) {
      console.log(error);
      throw error;
    } finally {
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    }
  };

  return (
    <Dialog>
      <DialogTrigger>
        <Button type="button" className="w-auto h-[45px]">
          <FaRegTrashAlt />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-center">
            Estas seguro que deseas Eliminarlo?
          </DialogTitle>
          <DialogDescription className="text-center">
            Recuerda que esta accion es irreversible
          </DialogDescription>
        </DialogHeader>

        <DialogFooter className="flex justify-center items-center mx-auto">
          <DialogClose>
            <Button onClick={handleDeleteCustomer}>Eliminar</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default DeleteCustomer;
