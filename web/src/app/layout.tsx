import '@/styles/globals.css'
import { Roboto_Flex as Roboto, Bai_Jamjuree } from 'next/font/google'
import { ReactNode } from 'react'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })
const baiJamjuree = Bai_Jamjuree({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-bai-jamjuree',
})

export const metadata = {
  title: 'NLW Spacetime',
  description:
    'Uma capsula do tempo construida com React JS, Next JS e outras tecnologias',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} ${baiJamjuree.className} bg-gray-900 font-sans text-gray-100`}
      >
        {children}
      </body>
    </html>
  )
}
