
import Image from "next/image";
import { Button } from "@/components/ui/button";
import HeroStudyImg from '@/../public/study-hero.png'
import Link from "next/link";

export default function Home() {

  return (
    <main className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-8 lg:px-16 bg-gradient-to-br from-indigo-50 to-white">
      <section className="max-w-5xl w-full flex flex-col md:flex-row items-center gap-10 py-20">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-6 text-gray-900">
            Transforme seus estudos <br />
            em uma jornada divertida e eficaz!
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 mb-8 max-w-md mx-auto md:mx-0">
            Alcance suas metas com nosso SaaS de gamificação, acompanhe seu progresso e mantenha a motivação em alta.
          </p>
          <Link
            href='/login'>
            <Button
              size="lg"
              className="bg-indigo-600 hover:bg-indigo-700 focus-visible:ring-indigo-500 cursor-pointer"
            >
              Comece Agora - É Grátis!
            </Button>
          </Link>
        </div>

        <div className="flex-1 max-w-md mx-auto md:mx-0">
          <Image
            src={HeroStudyImg}
            alt="Ilustração de pessoa estudando com gamificação"
            width={450}
            height={400}
            quality={100}
            priority
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>
    </main>
  );
}
