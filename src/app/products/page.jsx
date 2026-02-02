import { Container } from '@/components/shared/Container'
import { CardProduct } from '@/components/products/CardProduct'
import products from '@/helper/products'

export const metadata = {
  title: 'Products - AOSSIE',
  description: 'AOSSIE Products',
}

export default function Products() {
  return (
    <>
      <Container className="mt-16 sm:mt-32">
        <header className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Products
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            Explore our ready-to-use applications.
          </p>
        </header>
        <div className="mt-16 sm:mt-20">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-3">
            {products.map((product) => (
              <CardProduct key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </Container>
    </>
  )
}
