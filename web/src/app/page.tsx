import logoSpacetime from '@/assets/nlw-logo.svg'
import { User } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="grid min-h-screen grid-cols-2">
      {/* Left */}
      <div className="relative flex flex-col justify-between overflow-hidden border-r border-gray-500 bg-[url(../assets/stars.svg)] bg-cover px-28 py-16">
        {/* Blur */}
        <div className="absolute right-0 top-0 h-[288px] w-[526px] translate-x-1/2 translate-y-1/2 rounded-full bg-purple-700  opacity-50 blur-full" />

        {/* Stripes */}
        <div className="absolute bottom-0 right-2 top-0 w-2 bg-stripes" />

        <a className="flex items-center gap-3 text-left" href="">
          <div className="flex h-10 w-10 items-center justify-center space-x-3 rounded-full  bg-gray-400">
            <User className=" h-5 w-5 text-gray-500" />
          </div>
          <p className="w-[150px]">
            <span className="underline hover:text-gray-50">Crie sua conta</span>{' '}
            e salve suas memórias!
          </p>
        </a>

        <div className="space-y-5">
          <Image src={logoSpacetime} alt="NLW Spacitme Logo" />
          <div>
            <h1 className=" text-5xl font-bold leading-tight text-gray-50">
              Sua cápsula do tempo
            </h1>
            <p className="text-lg leading-relaxed">
              Colecione momentos marcantes da sua jornada e compartilhe (se
              quiser) com o mundo!
            </p>
          </div>
          <a
            className="inline-block rounded-full bg-green-500 px-5 py-3 font-alt text-sm font-bold uppercase leading-none text-black hover:bg-green-600"
            href=""
          >
            CADASTRAR LEMBRANÇA
          </a>
        </div>

        <div className="text-sm leading-relaxed text-gray-200">
          Feito com 💜 no NLW da{' '}
          <a
            className="underline hover:text-gray-100"
            target="_blank"
            rel="noreferrer"
            href="https://www.rocketseat.com.br"
          >
            {' '}
            Rocketseat
          </a>
        </div>
      </div>
      <div className="flex flex-col bg-[url(../assets/stars.svg)] bg-cover py-16">
        <div className="flex flex-1 items-center justify-center">
          <p className="w-[360px] text-center leading-relaxed">
            Você ainda não registrou nenhuma lembrança, comece a{' '}
            <a className="underline hover:text-gray-50" href="">
              {' '}
              criar agora!
            </a>
          </p>
        </div>
      </div>
    </main>
  )
}
