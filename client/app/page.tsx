"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleOwnerLogin = () => {
    router.push("/dono");
  };

  const handleUserLogin = () => {
    router.push("/usuario");
  };

  return (
    <div className="flex flex-row h-screen justify-center items-center gap-2  ">
      <Button onClick={handleOwnerLogin}>Entrar como dono</Button>
      <Button onClick={handleUserLogin}>Entrar como usuário</Button>
    </div>
  );
}
