import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { RegisterSchema } from "@/schema/index";
import FormWrapper from "@/components/FormWrapper";

import { Form } from "@/components/ui/form";
import Fields from "@/components/Fields";
import { auth } from "@/services/auth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const form = useForm({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof RegisterSchema>) => {
    try {
      setLoading(true);

      const payload = {
        email: data.email,
        password: data.password,
      };

      const user = await auth(payload);

      const { accessToken } = user;

      sessionStorage.setItem("accessToken", accessToken);

      sessionStorage.setItem("user", JSON.stringify(user));

      navigate("/home/dashboard");

      //01. guardar usuario en redux

      return user;
    } catch (error: unknown) {
      console.log(error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="h-[90vh] w-full justify-center flex flex-col items-center">
      <FormWrapper
        label="Welcome to blooforms 🤖"
        title="Sing in blooforms"
        backButtonHref="/register"
        backButtonLabel="Don't have an account? Register here."
      >
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-4">
              <Fields
                type="email"
                label="Email"
                form={form}
                placeholder="miguelmunoz@bloomify.tech"
              />
              <Fields
                type="password"
                label="Password"
                form={form}
                placeholder="********"
              />
            </div>
            <Button
              type="submit"
              className="w-full"
              disabled={loading ? true : false}
            >
              {loading ? "Loading..." : "Login"}
            </Button>
          </form>
        </Form>
      </FormWrapper>
    </main>
  );
}
