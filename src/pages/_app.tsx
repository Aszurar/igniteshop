import '@/global.css'
import type { AppProps } from 'next/app'
import Image from 'next/image'

import Logo from '@/assets/icons/logo.svg'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div
      className={`flex min-h-screen flex-col items-start justify-center 
          bg-zinc-900 antialiased`}
    >
      <header className="mx-auto w-full max-w-6xl.5 pb-8 pt-10">
        <Image src={Logo} width={130} height={52} alt="Ignite Shop" />
      </header>

      <Component {...pageProps} />
    </div>
  )
}
