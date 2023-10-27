import Image from 'next/image'
import Link from 'next/link'
import { FaRegSun } from 'react-icons/fa';
import { BsMoonStars } from 'react-icons/bs';

export default function Home() {
  return (
  <main>
    <nav>
  <div className="flex flex-wrap p-5 flex-col md:flex-row items-center glass shadow-lg " >
    <div >
      <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span className="ml-3 text-xl">oneNote</span>
      {/* <!-- pencile icon --> */}
    </a>
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

    </nav>

    {/* --------------------------------------------------- */}
<main className='container'>
<div className='grid md:grid-cols-2 sm:grid-col-1' items->
  <div>
    <h1 className='text-2xl'>one Note</h1>
    <p className='text-grey-800'>where notes are 
    **A place for great ideas. Notes is designed for whatever’s on your mind. Write down your thoughts.


    </p>
    <Link href={'#'} className='px-4 py-2.5 font-semibold text-white bg-green-300 rounded-lg'> Get Started</Link>
  </div>
  <div>
image
  </div>
</div>
</main>
{/* ------------------------------------------------------------ */}
<section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Before they sold out
        <br className="hidden lg:inline-block"/>readymade gluten
      </h1>
      <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
        <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      {/* <Image className="object-cover object-center rounded" width={100}  alt="hero" src="https://dummyimage.com/720x600"/> */}
    </div>
  </div>
</section>


<section>


{/* <!-- add note or update delete ? --> */}
<div className="justify-end flex p-5 gap-3">
    <button className="px-5 py-2.5 bg-yellow-300 rounded-lg hover:bg-yellow-400 font-semibold "> add note +</button>
    <button className="px-5 py-2.5 bg-yellow-300 rounded-lg font-semibold hover:bg-yellow-400"> Update</button>
</div>



{/* <!-- input modal --> */}
<div className=" border border-gray-200 bg-green-200 shadow-2xl rounded-lg p-5 m-5 ">
<div className="flex justify-end cursor-pointer">
  <button>X</button>
</div>

 <div className="mb-6">
    <label for="name" className="block dark:text-white font-semibold mb-2 ">Title</label>
    <input required type="text" name="name" className="block rounded-lg border border-gray-300 
    bg-gray-50 text-sm outline-none text-gray-900  ring-blue-400 focus:border-blue-500 focus:ring-2 w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  placeholder="Enter note tilte" />
  </div>


 <div className="mb-6">
    <label for="name" className="block dark:text-white font-semibold mb-2 ">Note</label> 
    <textarea  name="" id="" cols="30" rows="10"  className="block rounded-lg border resize-none	 border-gray-300 
    bg-gray-50 text-sm outline-none text-gray-900  ring-blue-400 focus:border-blue-500 focus:ring-2 w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  placeholder="Enter your note here " ></textarea>
  </div>
  <div className="flex gap-3">
        <button className="px-5 py-2.5 bg-yellow-300 rounded-lg font-semibold "> save</button>
    <button className="px-5 py-2.5 bg-yellow-300 rounded-lg font-semibold "> Update</button>
    <button className="px-5 py-2.5 bg-yellow-300 rounded-lg font-semibold "> Delete +</button>

  </div>

  </div>


  <div className="continer my-3 p-10 " >
<div className="inline-grid md:grid-cols-3 sm:grid-cols-3 gap-3 ">
  {/* <!-- note body -->
<!-- cursor pointer to update? --> */}
<div  className="shadow-lg bg-yellow-200 rounded-lg p-5 flex flex-col "> 
<div className="text-gray-900">
  <p className="text-xl font-semibold">Title</p>
<p className="mb-5"> this is note</p>
</div>
<div className="flex justify-end gap-3 text-sm text-gray-700">
  <p>194</p>
  <p>15/10/2023</p>
  <p>09:12PM</p>
</div>
<div className="flex gap-3 justify-end mt-3" > <span>edit</span> <span>delete</span></div>
</div>
</div>
</div>




</section>
<nav>
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
    </nav>


<footer className=" fixed bottom-0 left-0 w-full bg-teal-400 p-2 text-white font-semibold text-center">
  oneNote 
</footer>

  </main>
  )
}
