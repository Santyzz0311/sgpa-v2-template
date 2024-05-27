import { Dispatch, SetStateAction } from "react"

export interface AuthContextProps {
  user: User;
  setUser: Dispatch<SetStateAction<User>>;
  token: string;
  setToken: Dispatch<SetStateAction<string>>;
}

export interface AuthProviderProps {
  children: JSX.Element | JSX.Element[]
}

export interface User {
  name: string
  email: string
}
