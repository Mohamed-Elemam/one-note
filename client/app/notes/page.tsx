import React from 'react'

const Notes = () => {
  return (
    <>
    <section className='container mx-auto px-5 py-24'>


{/* <!-- add note or update delete ? --> */}
<div className="justify-end flex p-5 gap-3">
    <button className="px-5 py-2.5 bg-yellow-300 rounded-lg hover:bg-yellow-400 font-semibold "> add note +</button>
    <button className="px-5 py-2.5 bg-yellow-300 rounded-lg font-semibold hover:bg-yellow-400"> Update</button>
</div>



{/* <!-- input modal --> */}


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
    </>
  )
}

export default Notes