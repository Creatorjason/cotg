import React from 'react'
import Image from 'next/image'
import Button from '@/components/Button'
import Link from 'next/link'

const Cover = () => {
    return (
        <div className='flex-1 flex flex-col gap-8 sm:gap-12  md:gap-16 '>
            <div className='grid grid-cols-1 sm:grid-cols-2 bg-indigo-50 text-primary p-4 rounded-lg gap-4 '>
                <div>
                <h3 className='textGradient text-3xl'>Introducing your one-stop solution for premium home service haircuts!</h3>
                <br/>
                We bring the salon experience directly to you, offering 
                the convenience of professional cuts 
                in the comfort of your own home. 
                Our skilled stylists are dedicated to 
                providing personalized services tailored to 
                your needs and preferences. Whether you need a quick trim
                 or a complete style makeover, we've got you covered.
                 <br/>
                 <br/>
                    <center>

                  <Link href="/login">  <Button text="Book an Appointment Today" dark/></Link>
                    </center>
                </div>

                  

                <div>
                <Image src="/img1.jpeg" 
                    alt="Cover" 
                    width={400} 
                    height={400} 
                    className='rounded-lg' />
                </div>
            </div>
        </div>
    )
}

export default Cover