import { priceFormatter } from '@/utils/formatter'
import Image, { StaticImageData } from 'next/image'

type ProductProps = {
  name: string
  value: number
  image: StaticImageData
  className?: string
}

export function Product({
  image,
  name,
  value,
  className,
}: Readonly<ProductProps>) {
  const priceFormatted = priceFormatter.format(value)

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
        className={`translate-y-110% absolute bottom-1 left-1 right-1 flex 
          justify-between rounded-md bg-base-over p-8 opacity-0 transition-all 
          duration-200 ease-in-out group-hover:translate-y-[0%] 
          group-hover:opacity-100`}
      >
        <span className="text-xl font-bold text-base-title">{name}</span>
        <strong className="text-2xl font-bold text-principal-light">
          {priceFormatted}
        </strong>
      </footer>
    </a>
  )
}
