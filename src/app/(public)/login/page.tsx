
import StudyImg from '@/../public/study-login.webp'


import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login | StudyBoost",
  description: "Faça login com sua conta Google para acessar sua jornada de estudos.",
};

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-4">
      <div className="w-full max-w-5xl space-y-6 text-center md:flex md:justify-between md:gap-8 ">
        <Image
          src={StudyImg}
          alt="Ilustração de estudo gamificado"
          className="mx-auto rounded-xl"
        />
        <div className='space-y-6 flex flex-col justify-center'>
          <h1 className="text-3xl font-bold">Bem-vindo ao StudyBoost</h1>
          <p className="text-muted-foreground text-sm">
            Transforme seus estudos com gamificação e progresso visual!
          </p>
          <Button
            variant="outline"
            className="w-full gap-2 cursor-pointer"
          >
            <FcGoogle size={22} />
            Entrar com Google
          </Button>
        </div>
      </div>
    </main>
  );
}
