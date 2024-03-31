import Link from 'next/link'
import React from 'react'



const Navbar = () => {
  return (
    <nav className='flex justify-between items-center   py-5 px-2 '>
      <div className='flex items-center gap-[1ch]'>
        <div className='font-semibold text-xl'>My Portfolio</div>
      </div>
      <div className='flex gap-6 text-zinc-500 font-semibold'>
        <Link href="#" className=' focus:text-zinc-900 hover:bg-zinc-700 hover:text-white px-4  py-2 rounded-md'>Home</Link>
        <Link  href="#Projet" className=' focus:text-zinc-900 hover:bg-zinc-700 hover:text-white px-4 py-2  rounded-md'>Projet</Link>
        <Link href="#Contact"className='focus:text-zinc-900 hover:bg-zinc-700 hover:text-white px-4 py-2  rounded-md'>Contact</Link>
       
        
      </div>
    </nav>
  )
}

export default Navbar