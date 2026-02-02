import { Container } from '@/components/shared/Container'
import { CardProduct } from '@/components/products/CardProduct'
import { ProductsHeader } from '@/components/products/ProductsHeader'
import products from '@/helper/products'

export const metadata = {
  title: 'Products - AOSSIE',
  description: 'AOSSIE Products',
}

export default function Products() {
  return (
    <>
      <Container className="mt-16 sm:mt-32">
        <ProductsHeader />
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
