import Head from 'next/head'
import ContactForm from '@/components/ContactForm'

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact · AOSSIE</title>
        <meta name="description" content="Get in touch with AOSSIE" />
      </Head>

      <ContactForm />
    </>
  )
}
