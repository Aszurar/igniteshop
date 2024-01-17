import '@/global.css'
import type { AppProps } from 'next/app'
import Image from 'next/image'

import Logo from '@/assets/icons/logo.svg'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className='bg-zinc-900 flex flex-col items-start justify-center min-h-screen'>

        <header className='pt-10 pb-8 max-w-6xl.5 mx-auto'>
          <Image src={Logo} width={130} height={52} alt="Ignite Shop"/>
        </header>

      <Component {...pageProps} />
    </div>
  )
}
