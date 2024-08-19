import React from 'react'
import Image from 'next/image'
import Button from '@/components/Button'
import Link from 'next/link'

const Nav = () => {
    return (
        <>
            <Link href="/">
            <Image
                src="/logo.png"
                alt="Broodl Logo"
                width={80}
                height={80}
                className="rounded-full"
                priority
                
                />
                </Link>
            <div className="flex items-center justify-between">
                <div className='grid grid-cols-2 gap-4 w-fit mx-auto'>
                    <Link href="/signup"><Button text="Sign Up" /></Link>
                    {/* <Button text="Sign Up" /> */}
                   <Link href="/login"><Button text="Login"  dark/></Link> 
                </div>
            </div>
        </>
    )
}

export default Nav