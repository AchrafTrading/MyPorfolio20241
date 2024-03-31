import Image from 'next/image'
import React from 'react'

export const Devicon = () => {
  const urlIcon = [
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', alt: 'html' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', alt: 'css' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', alt: 'javascript' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', alt: 'react' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg', alt: 'nextjs' },
    {src : "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" , alt : 'TS'},
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg', alt: 'nodejs' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg', alt: 'npm' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg', alt: 'sass' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg', alt: 'bootstrap' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg', alt: 'trello' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', alt: 'github' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', alt: 'git' },
    { src :"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg", alt: "jest"},
    { src : "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg" , alt : 'redux'},
    
  ];

  return (
    <section className=" h-auto  justify-center mt-5 p-3 rounded-3xl bg-gray-200  ">
      <h1 className='font-bold text-center text-3xl mb-4'>Skills</h1>
      <div className='flex lg:flex-row  justify-center gap-4  flex-wrap'>
      {
      urlIcon.map((urlIcon) => <Image key={urlIcon.alt} width={50} height={50} alt={urlIcon.alt}  loading="lazy"  src={urlIcon.src} />
      )
    }
      </div>
        
  </section>
  )
}
