import React from 'react'
import { Fugaz_One, Inter, Lato } from "next/font/google";
import Button from './Button';
import Link from 'next/link';
import WhyUs from './WhyUs';
import PricingContainer from './PricingContainer';
import TestimonialsContainer from './TestimonialsContainer';

// import Calendar from './Calendar';


// TODO: restructure this component to be more modular, also removing all of the other
const fugaz = Fugaz_One({ subsets: ["latin"], weight: "400" })
const inter = Inter({ subsets: ["latin"], weight: "400" })
const lato = Lato({ subsets: ["latin"], weight: "400" })

const Hero = () => {
  return (
    <div className='py-2 md:py-10 flex flex-col gap-4 sm:gap-8'>
        <h1 className={'text-5xl sm:text-6xl md:text-7xl text-center  ' + lato.className}><span className='textGradient'>Stay</span> sharp wherever you are, <span className='textGradient'> CutzOnTheGO <br/></span>brings the barber to you</h1>
        <p className='text-lg sm:text-xl md:text-2xl text-center w-full mx-auto max-w-[600px]'>Experience top notch grooming without leaving your doorsteps.  <span className='font-semibold'>Our expert barbers deliver the perfect cut, shave and style, right where you are.</span></p>
        <div className='grid grid-cols-1 gap-4 w-fit mx-auto'>
            {/* <Link href="/signup"><Button text="Get Started" full/></Link> */}
            <Link href="/login">
            <Button text="Book an Appointment Today" dark/>
            </Link>
            {/* <Button text="Login" dark/> */}
        </div>
        {/* <Calendar demo/> */}
        <hr/>
        <WhyUs/>
        <hr/>
        <PricingContainer/>
        <hr/>
        <TestimonialsContainer/>
    </div>

  )
}

export default Hero