export interface RegisterInterface {
  email: string;
  username: string;
  password: string;
}

export interface LoginInterface {
  identifier: string;
  password: string;
}

export interface ResponseRegister {
  jwt: string;
  user: {
    id: number;
    documentId: string;
    username: string;
    email: string;
    provider: string;
    confirmed: boolean;
    blocked: boolean;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale: null;
  };
}

export interface MeInterface {
  id: number;
  documentId: string;
  username: string;
  email: string;
  provider: string;
  confirmed: boolean;
  blocked: boolean;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: null;
}
