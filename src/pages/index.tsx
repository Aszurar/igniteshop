import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'

import { Product } from '@/components/Product'
import { stripe } from '@/lib/stripe'
import { GetStaticProps } from 'next'
import Stripe from 'stripe'
import { priceFormatter } from '@/utils/formatter'

type ProductProps = {
  id: string
  name: string
  imageURL: string
  price: string | null
}

type HomeProps = {
  products: ProductProps[]
}

export default function Home({ products }: HomeProps) {
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
      {products.map((product) => {
        return (
          <Product
            key={product.id}
            name={product.name}
            value={product.price}
            image={product.imageURL}
            className="keen-slider__slide"
          />
        )
      })}
    </main>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  })

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price
    const priceFormatted = price.unit_amount
      ? priceFormatter.format(price.unit_amount / 100)
      : '--'

    return {
      id: product.id,
      name: product.name,
      imageURL: product.images[0],
      price: priceFormatted,
    }
  })

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2, // 2 hours
  }
}
