import { createContext, useContext, useState } from "react";
import { endpoints } from "../services/authService";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const [token, setToken] = useState(() => {
    return localStorage.getItem("token") || null;
  });

  const isAuthenticated = !!user && !!token; //converts into a boolean value
  const login = async (data) => {
    try {
      const response = await endpoints.login(data);
      const userData = response.data?.data;
      const { profile, token } = userData;

      if (profile && token) {
        setUser(profile);
        setToken(token);

        localStorage.setItem("user", JSON.stringify(profile));
        localStorage.setItem("token", token);
      }

      return true;
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };
  const logout = async () => {
    try {
      await endpoints.logout();
    } catch (error) {
      console.error("Error logging out:", error);
    }
    //  finally {
    //   localStorage.removeItem("user");
    //   localStorage.removeItem("token");
    //   setUser(null);
    //   setToken(null);
    // }
  };
  return (
    <AuthContext.Provider
      value={{ user, setUser, token, setToken, isAuthenticated, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
