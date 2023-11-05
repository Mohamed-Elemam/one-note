import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
  <main>
 

    {/* --------------------------------------------------- */}
    <main className='container mx-auto px-5 py-24'>
<div className='grid md:grid-cols-2 sm:grid-col-1' items->
  <div>
    <h1 className='text-4xl font-bold mb-3'>one Note</h1>
    <p className='text-grey-700 font-medium' >where notes are 
    **A place for great ideas. Notes is designed for whatever`s on your mind. Write down your thoughts.


    </p>
    <a href={'/signup'} className='inline-block px-4 py-2.5 my-3 font-semibold text-white bg-green-300 rounded-lg'> Get Started</a>
  </div>
  <div>
image
  </div>
</div>
</main>
{/* ------------------------------------------------------------ */}



{/* <nav>
  <div className="flex flex-wrap p-5 flex-col md:flex-row items-center glass shadow-lg " >
    <div >
      <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span className="ml-3 text-xl">oneNote</span>
    </a>
   </div>
   
    <ul className="md:ml-auto md:mr-auto flex md:flex-row flex-wrap items-center text-base font-semibold justify-center cursor-pointer 
    sm:flex-col md:relative sm:fixed  top-0 right-0 sm:opacity-0
    ">
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

    <button className="inline-flex items-center px-5 py-2.5 bg-yellow-300 rounded-lg hover:bg-yellow-400 font-semibold focus:outline-none text-base mt-4 md:mt-0">
      Signup
    </button>
    <button className="inline-flex items-center px-5 py-2.5 bg-yellow-300 rounded-lg hover:bg-yellow-400 font-semibold focus:outline-none text-base mt-4 md:mt-0">
      Login
    </button>
    <button className="inline-flex items-center px-5 py-2.5 bg-yellow-300 rounded-lg hover:bg-yellow-400 font-semibold focus:outline-none text-base mt-4 md:mt-0 ">
      Logout
    </button>
   </div>
    
  </div>
  <BsMoonStars/>
<FaRegSun/>
    </nav> */}


<footer className=" fixed bottom-0 left-0 w-full bg-teal-400 p-2 text-white font-semibold text-center">
  oneNote 
</footer>

  </main>
  )
}
