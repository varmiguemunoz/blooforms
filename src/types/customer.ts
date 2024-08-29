interface customerDetails {
  id: number;
  name: string;
  email: string;
  phone: string;
}

interface InitialCustomerState {
  customers: customerDetails;
  error: string;
  isLoading: boolean;
}

export type { InitialCustomerState };
