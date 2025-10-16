import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const Login = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-background">
      <form
        onSubmit={handleSubmit}
        className="bg-card p-6 rounded-lg shadow-sm border w-sm"
      >
        <h2 className="text-2xl font-semibold mb-4 text-center">Login</h2>
        <div className="flex flex-col gap-1">
          <div className="flex flex-col gap-1.5">
            <Label>Email</Label>
            <Input
              type="email"
              placeholder="Email"
              className="mb-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <Label>Password</Label>
            <Input
              type="password"
              placeholder="Password"
              className=""
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <Button type="submit" className="w-full mt-3">
            Login
          </Button>
        </div>
        <p className="mt-3 text-center text-sm">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-blue-600 font-semibold">
            Signup
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
