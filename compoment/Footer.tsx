import React from 'react'
import ButtonResume from './ButtonResume'

export default function Footer() {
  return (
    <footer  className="h-max mt-3 mb-3 rounded-3xl bg-gradient-to-r from-cyan-400 to-gray-300  ">
        <div className="p-10 ">
          <h1 className="font-bold text-4xl mb-6">Searching for an internship in Front-end Development </h1>
          <p className="font-semibold text-black-400 ">I am currently actively searching for an internship in Front-end Development focusing on Next.js 
          and React.js. I am eager to apply and expand my skills in these areas for a duration of 6 months. Please feel free to contact me via email
          to discuss any available opportunities or to request further information. Thank you for considering my application. </p>
          <h3 className=" m-3 font-semibold text-black-300">Achraf.gm12@gmail.com</h3>
          
          <ButtonResume />
        </div>
    </footer>
  )
}
