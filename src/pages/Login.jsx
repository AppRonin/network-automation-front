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

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // your login logic here
    console.log({ email, password });
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
            <div className="flex flex-col space-y-1.5">
              <Label>Email</Label>
              <Input
                type="email"
                placeholder="seu.email@empresa.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label>Senha</Label>
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
