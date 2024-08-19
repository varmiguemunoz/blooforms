interface Form {
  length: number;
  id: number;
  titulo: string;
  formulario: {
    form_name: string;
    form_value: string;
  }[];
}

interface FormState {
  form: Form;
  error: string | null;
  isLoading: boolean;
  isCreating: boolean;
}

interface FormSpace {
  titulo: string;
  id_user: number;
  id_space_types: number;
}

export type { FormState, Form, FormSpace };
