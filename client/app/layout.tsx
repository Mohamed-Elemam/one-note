import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { FaRegSun } from 'react-icons/fa';
import { BsMoonStars } from 'react-icons/bs';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
      <nav>
  <div className="flex flex-wrap p-5 flex-col md:flex-row items-center bg-white shadow-lg " >
    <div >
      <Link href="/ " className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span className="ml-3 text-xl">oneNote</span>
      {/* <!-- pencile icon --> */}
    </Link>
   </div>
    <ul className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base font-semibold justify-center cursor-pointer ">
     <li>
      <a className="mr-5 hover:text-gray-900">Home</a>
     </li>
     <li>
      <a className="mr-5 hover:text-gray-900">Pricing</a>
     </li>
     <li>
      <a className="mr-5 hover:text-gray-900">About</a>
     </li>
    </ul>
   <div className="flex gap-3">

    <Link href="/signup" className="inline-flex items-center px-5 py-2.5 bg-blue-300 rounded-lg hover:bg-blue-400 font-semibold focus:outline-none text-base mt-4 md:mt-0">
      Signup
    </Link>
    <Link href="/login" className="inline-flex items-center px-5 py-2.5 bg-blue-300 rounded-lg hover:bg-blue-400 font-semibold focus:outline-none text-base mt-4 md:mt-0">
      Login
    </Link>
    <Link href="/" className="inline-flex items-center px-5 py-2.5 bg-blue-300 rounded-lg hover:bg-blue-400 font-semibold focus:outline-none text-base mt-4 md:mt-0 ">
      Logout
    </Link>
   </div>
    
  </div>
  {/* <BsMoonStars/>
<FaRegSun/> */}

    </nav>
        
        
        {children}</body>
    </html>
  )
}
