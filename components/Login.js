"use client"

import { Fugaz_One } from 'next/font/google';
import React, { useState } from 'react';
import Link from 'next/link';
import Button from './Button';

const fugaz = Fugaz_One({ subsets: ["latin"], weight: "400" });

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className='flex flex-col flex-1 justify-center items-center gap-4'>
            <h3 className={'text-3xl sm:text-5xl md:text-6xl ' + fugaz.className}> Sign In Boss </h3>
            <p>Enter fresh, come out fresher 😎</p>

            <input 
                className='max-w-[400px] w-full mx-auto px-3 duration-200 hover:border-indigo-600 focus:border-indigo-600 py-2 sm:py-3 border border-solid border-indigo-400 rounded-full outline-none' 
                placeholder='Phone number' 
                type="number" 
                required 
            />

            <div className='relative max-w-[400px] w-full mx-auto'>
                <input 
                    className='w-full px-3 duration-200 hover:border-indigo-600 focus:border-indigo-600 py-2 sm:py-3 border border-solid border-indigo-400 rounded-full outline-none' 
                    placeholder='Password' 
                    type={showPassword ? "text" : "password"} 
                    required 
                />
                <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className='absolute inset-y-0 right-0 flex items-center px-4 text-gray-600'
                >
                    {showPassword ? "Hide" : "Show"}
                </button>
            </div>

            <div className='max-w-[400px] w-full mx-auto'>
                <Button text="Submit" full />
                <p className='text-center pt-2'>Don&#39;t have an account? <Link href="/signup"><span className='text-indigo-600'>Sign Up</span></Link></p>
            </div>
        </div>
    );
};

export default Login;
