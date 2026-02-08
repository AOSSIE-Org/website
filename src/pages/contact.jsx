import Head from 'next/head'
import ContactSection from '@/components/ContactSection'

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact · AOSSIE</title>
        <meta name="description" content="Get in touch with AOSSIE" />
      </Head>

      <ContactSection />
    </>
  )
}
