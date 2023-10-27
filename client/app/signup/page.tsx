import { Formik } from 'formik'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {


    // let formik =useFormik({

    //   name:'',
    //   email:'',
    //   password:''

    // })


  return (
  <>
  
<form action=""  className="mt-20 p-10 rounded-lg  glass w-[50%] mx-auto">
  <div className="mb-6">
    <label  className="block dark:text-white font-semibold mb-2 ">Name</label>
    <input required type="text" name="name" className="block rounded-lg border border-gray-300 
    bg-gray-50 text-sm outline-none text-gray-900  ring-blue-400 focus:border-blue-500 focus:ring-2 w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  placeholder="Enter your name" />
  </div>
  {/* <!-- remove name from label + className text sm --> */}
  <div className="mb-6">
    <label  className="block dark:text-white font-semibold mb-2">Email</label>
    <input required type="email" name="email" className="block rounded-lg border border-gray-300 
    bg-gray-50 text-base outline-none text-gray-900 ring-blue-400 focus:border-blue-500 focus:ring-2 w-full p-2  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your email address" />
  </div>
  <div className="mb-6">
    <label  className="block dark:text-white font-semibold mb-2">Password</label>
    <input required type="password" className="block rounded-lg border border-gray-300 
    bg-gray-50 text-sm outline-none text-gray-900 ring-blue-400 focus:border-blue-500 focus:ring-2 w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  placeholder="Enter your password"/>
  </div>
  <p className="my-3 dark:text-white">Do you have already an account ? <a href="" className="text-blue-400 underline">Log in</a></p>
  
  <div className='flex justify-center'>

<button type="submit" className="p-2.5 bg-blue-500 rounded-full w-[50%] text-center inline-block text-white hover:bg-blue-600 focus:ring ring-blue-300">
  Signup
</button>
</div>
</form>

  </>
  )
}
