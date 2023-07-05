export interface UserData {
  id: number;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone: number;
  role: string;
}

export interface userLoginAttrs {
  username: string;
  password: string;
}

export interface IUser {
  id: number;
  username: string;
  email: string;
  phone: number;
  role: string;
}
