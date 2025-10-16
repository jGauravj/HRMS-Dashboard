import { createContext, useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem("hrms_user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = (email, password) => {
    const users = JSON.parse(localStorage.getItem("hrms_users")) || [];
    const existingUser = users.find(
      (u) => u.email === email && u.password === password
    );

    if (existingUser) {
      setUser(existingUser);
      localStorage.setItem("hrms_user", JSON.stringify(existingUser));
      navigate("/dashboard");
    } else {
      alert("Invalid credentials");
    }
  };

  const signup = (name, email, password) => {
    const users = JSON.parse(localStorage.getItem("hrms_users")) || [];

    const existing = users.find((u) => u.email === email);
    if (existing) {
      alert("User already exists!");
      return;
    }

    const newUser = { name, email, password };
    users.push(newUser);
    localStorage.setItem("hrms_users", JSON.stringify(users));
    localStorage.setItem("hrms_user", JSON.stringify(newUser));
    setUser(newUser);
    navigate("/dashboard");
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("hrms_user");
    navigate("/login");
  };

  if (loading) return null;

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
