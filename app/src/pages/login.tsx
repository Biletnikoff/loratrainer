"use client";

import "@/app/globals.css";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  const handleLogin = () => {
    signIn("google");
  };

  return (
    <div className="container mx-auto">
      <Card className="w-96 mx-auto mt-20">
        <CardHeader>
          <CardTitle>Login</CardTitle>
        </CardHeader>
        <CardContent>
          <Button onClick={handleLogin}>Sign in with Google</Button>
        </CardContent>
      </Card>
    </div>
  );
}