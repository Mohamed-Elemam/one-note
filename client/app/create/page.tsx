import React from 'react'

const Create = () => {
  return (
    <section className='container '>
        <div className=" border  border-gray-200 glass shadow-2xl rounded-lg p-9 w-3/4 mx-auto m-5 ">
{/* <div className="flex justify-end cursor-pointer">
  <button>X</button>
</div> */}

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

<div className="mb-6">
<h3 className='block dark:text-white font-semibold mb-2'>Choose note color</h3>
  
  </div>
  <div className="flex gap-3">
        <button className="px-5 py-2.5 bg-yellow-300 rounded-lg font-semibold "> save</button>
    <button className="px-5 py-2.5 bg-yellow-300 rounded-lg font-semibold "> Update</button>
    <button className="px-5 py-2.5 bg-yellow-300 rounded-lg font-semibold "> Delete +</button>

  </div>


  </div>



    </section>
  )
}

export default Create