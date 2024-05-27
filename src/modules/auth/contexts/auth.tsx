import { AuthContextProps, AuthProviderProps, User } from "@utils/types"
import { createContext, useState } from "react"

export const AuthContext = createContext<AuthContextProps | undefined>(undefined)

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User>({
    name: '',
    email: ''
  })
  const [token, setToken] = useState<string>('')

  return (
    <AuthContext.Provider
      value={{
        user, 
        setUser,
        token, 
        setToken
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}