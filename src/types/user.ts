interface User {
  accessToken: string;
  refreshToken: string;
  user: {
    id: number;
    usuario: {
      nombre: string;
      email: string;
      username: string;
      verificado: boolean;
    };
  };
}

export type { User };
