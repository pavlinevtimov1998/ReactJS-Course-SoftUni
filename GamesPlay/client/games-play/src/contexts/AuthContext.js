import { createContext } from "react";

import { useLocalStorage } from "../hooks/useLocalStorage";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage("auth");
  const handleLogin = (userData) => setUser(userData);

  const handleLogout = () => setUser(null);

  return (
    <AuthContext.Provider
      value={{
        user: user,
        handleLogin,
        handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
