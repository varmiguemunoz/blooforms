import * as z from "zod";

export const RegisterSchema = z.object({
  email: z.string().email({
    message: "Ingresa un email adecuado",
  }),
  password: z.string().min(6, {
    message: "La contraseña debe contener minimo 6 caracteres",
  }),
});

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Ingresa un email adecuado",
  }),
  password: z.string().min(6, {
    message: "La contraseña debe contener minimo 6 caracteres",
  }),
});

export const CreateSpaceSchema = z.object({
  titulo: z.string().min(6, {
    message: "Ingresa un titulo adecuado para tu espacio",
  }),
});
