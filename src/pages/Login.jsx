import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import api from "../services/api"; // axios client

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await api.post("/token/", {
        username,
        password,
      });

      // JWT tokens returned by DRF SimpleJWT
      const { access, refresh } = response.data;

      localStorage.setItem("access", access);
      localStorage.setItem("refresh", refresh);

      console.log("Logged in!");

      // redirect / update UI
      window.location.href = "/";
    } catch (err) {
      console.log(err);
      setError("Email ou senha incorretos");
    }
  };

  return (
    <div className="w-full min-h-[calc(100vh-69px)] pb-16 flex items-center justify-center">
      <Card className="w-full max-w-sm shadow-lg border">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            Login
          </CardTitle>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && <p className="text-red-500 text-center">{error}</p>}

            <div className="flex flex-col space-y-1.5">
              <Label>Username</Label>
              <Input
                type="input"
                placeholder="seu.email@empresa.com"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label>Password</Label>
              <Input
                type="password"
                placeholder="•••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <Button className="w-full mt-2" type="submit">
              Entrar
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default Login;
