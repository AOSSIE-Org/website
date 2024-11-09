import { Container } from '@/components/Container'
import React from 'react'
import Image from 'next/image'
import HelpImage from "../images/404.png"
import Link from 'next/link'

const NotFoundPage = () => {
  return (
    <>
      <div className="mt-20 mb-28 min-h-[60vh] flex flex-col justify-center items-center text-center dark:text-white space-y-3">
        
        <Image src={HelpImage} alt="404 Not Found" className="max-w-xs mb-6 mx-auto" />
        
        <h1 className="text-2xl font-semibold">Page Not Found</h1>

        <Link 
          href="/" 
          className="bg-green-600 text-white rounded-md px-3  py-3  hover:underline text-md font-medium "
        >
          Return to Homepage
        </Link> 
      </div>
    </>
  )
}

export default NotFoundPage
