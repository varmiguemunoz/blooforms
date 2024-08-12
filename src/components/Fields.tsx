import { UseFormReturn } from "react-hook-form";

import { Input } from "./ui/input";

import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "./ui/form";

interface FormValues {
  email: string;
  password: string;
}

interface FieldsProps {
  type: string;
  label: string;
  placeholder: string;
  form: UseFormReturn<FormValues>;
}

export default function Fields({
  placeholder,
  label,
  type,
  form,
}: FieldsProps) {
  return (
    <FormField
      control={form.control}
      name={type}
      render={({ field }) => (
        <FormItem className="text-start">
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input {...field} type={type} placeholder={placeholder} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
