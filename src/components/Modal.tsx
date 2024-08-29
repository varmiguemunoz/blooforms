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
import { useForm, Path } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { z } from "zod";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ModalCustomerProps<T extends z.ZodType<any>> = {
  title: string;
  description: string;
  formSchema: T;
  defaultValues: z.infer<T>;
  formFields: Array<{
    name: Path<z.infer<T>>;
    label: string;
    type: string;
    placeholder: string;
  }>;
  onSubmit: (data: z.infer<T>) => Promise<void>;
  buttonText: string;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Modal<T extends z.ZodType<any>>({
  title,
  description,
  formSchema,
  defaultValues,
  formFields,
  onSubmit,
  buttonText,
}: ModalCustomerProps<T>) {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  return (
    <Dialog>
      <DialogTrigger>
        <Button type="button" className="w-auto h-[45px]">
          {buttonText}
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="grid flex-1 gap-2">
              {formFields.map(({ name, label, type, placeholder }) => (
                <FormField
                  key={String(name)}
                  control={form.control}
                  name={name}
                  render={({ field }) => (
                    <FormItem className="text-start">
                      <FormLabel>{label}</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type={type}
                          placeholder={placeholder}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              ))}
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
