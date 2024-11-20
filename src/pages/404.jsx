import Head from 'next/head'

import { Container } from '@/components/Container'

export default function Custom404(){
    return(
        <>
            <Head>
                <title>404-Page Not Found!</title>
                <meta name="PageNotFound" content="Page not found" />
            </Head>
            <Container className="mt-16 sm:mt-32 text-center justify-center items-center">
                <div className="flex flex-col gap-4 justify-center items-center w-[100%] h-[100%] min-h-[200px]">
                    <p className='text-6xl font-bold text-gray-400'>404</p>
                    <p className='text-md text-gray-400'>Oops, the page you&apos;re looking for isn&apos;t here!</p>
                </div>
            </Container>
        </>
    )
}