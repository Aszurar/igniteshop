import { priceFormatter } from '@/utils/formatter'
import Image from 'next/image'

type ProductProps = {
  name: string
  value: string | null
  image: string
  className?: string
}

export function Product({
  image,
  name,
  value,
  className,
}: Readonly<ProductProps>) {
  return (
    <a
      href="#"
      className={`group relative flex items-center justify-center 
        overflow-hidden rounded-lg bg-home-gradient p-1 ${className}`}
    >
      <Image
        src={image}
        width={520}
        height={480}
        alt="Camiseta"
        className="object-cover"
      />
      <footer
        className={`absolute bottom-1 left-1 right-1 flex translate-y-110% 
          justify-between rounded-md bg-base-over p-8 opacity-0 transition-all 
          duration-200 ease-in-out group-hover:translate-y-[0%] 
          group-hover:opacity-100`}
      >
        <span className="text-xl font-bold text-base-title">{name}</span>
        <strong className="text-2xl font-bold text-principal-light">
          {value}
        </strong>
      </footer>
    </a>
  )
}
