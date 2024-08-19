import { Fugaz_One } from 'next/font/google';
import React from 'react'
import Cover from './Cover';



const fugaz = Fugaz_One({ subsets: ["latin"], weight: "400" });

const WhyUs = () => {
  return (
      <div className='flex flex-col gap-4 p-4 sm:p-8'>
        <h1 className={'text-3xl sm:text-5xl md:text-6xl text-center textGradient '+ fugaz.className }>Why Choose Us</h1>
        <Cover/>
    </div>
  )
}

export default WhyUs