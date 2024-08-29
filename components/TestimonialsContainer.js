import React from 'react'
import { Lato } from "next/font/google"
import TestimonialCard from './TestimonialCard'


const lato = Lato({ subsets: ["latin"], weight: "400" })
const TestimonialsContainer = () => {
    return (
        <div className='flex flex-col gap-4 p-4 sm:p-8 '>
            <h1 className={'text-3xl sm:text-5xl md:text-6xl text-center textGradient ' + lato.className}>Our Testimonials</h1>

            <div className='grid grid-cols-1 sm:grid-cols-1 p-8 rounded-lg gap-4 '>
            {/* <div cla> */}

            {/* </div> */}
            {/* <TestimonialCard/> */}
            {/* <TestimonialCard/> */}
            {/* <TestimonialCard/> */}
            <TestimonialCard/>
            
            </div>
        </div>
    )
}

export default TestimonialsContainer