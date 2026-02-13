import Head from 'next/head'

import { NotFoundPage } from '@/components/404.page/NotFoundPage'

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 | AOSSIE</title>
        <meta
          name="description"
          content="AOSSIE custom 404 page with navigation to key sections."
        />
      </Head>
      <NotFoundPage />
    </>
  )
}
