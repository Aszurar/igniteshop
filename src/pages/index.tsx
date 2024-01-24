import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'

import camiseta1 from '../assets/camisetas/1.png'
import camiseta2 from '../assets/camisetas/2.png'
import camiseta3 from '../assets/camisetas/3.png'

import { Product } from '@/components/Product'

export default function Home() {
  const [slideRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  })

  return (
    <main
      ref={slideRef}
      className={`keen-slider ml-auto flex min-h-[656px] w-full max-w-home 
        items-center `}
    >
      <Product
        name="Camiseta Beyond the Limits"
        value={79.0}
        image={camiseta1}
        className="keen-slider__slide"
      />

      <Product
        value={80.0}
        image={camiseta2}
        name="Camiseta Beyond the Limits"
        className="keen-slider__slide"
      />

      <Product
        value={80.0}
        image={camiseta3}
        name="Camiseta Beyond the Limits"
        className="keen-slider__slide"
      />

      <Product
        value={20.0}
        image={camiseta1}
        name="Camiseta Beyond the Limits"
        className="keen-slider__slide"
      />
    </main>
  )
}
