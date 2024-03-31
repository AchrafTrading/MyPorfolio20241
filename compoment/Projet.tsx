import React from 'react'



const Projet = () => {
  return (
    <div className='h-[30rem]  w-auto space-x-2 bg-slate-300 rounded-3xl  overflow-hidden'>
      <div className="h-full w-full   duration-[500ms] transition-all ease-in-out hover:scale-105 bg-cover bg-center BG bg-[url('/devP1.jpg')]">
        <div className='flex text-white font-bold justify-between px-10 py-4 bg-black w-full h-20'>
          <div className=' '>
            <h1>Name Projet</h1>
            <p className='text-zinc-500 text-sm'> Descripiton of the Project</p>
          </div>
          <div className=' cursor-pointer flex justify-center items-center w-20 bg-zinc-400 rounded-full h-10'>
            <p>Check</p>
          </div>
        </div>
      </div>
       
    </div>
  )
}

export default Projet