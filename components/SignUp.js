"use client";

import { Fugaz_One } from 'next/font/google';
import React, { useState } from 'react';
import Button from './Button';
import Link from 'next/link';

const fugaz = Fugaz_One({ subsets: ["latin"], weight: "400" });

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmedPassword, setConfirmedPassword] = useState(false);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setConfirmedPassword(!showConfirmedPassword);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        if (confirmPassword && e.target.value !== confirmPassword) {
            setError('Passwords do not match');
        } else {
            setError('');
        }
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
        if (password && e.target.value !== password) {
            setError('Passwords do not match');
        } else {
            setError('');
        }
    };

    return (
        <div className='flex flex-col flex-1 justify-center items-center gap-4'>
            <h3 className={'text-3xl sm:text-5xl md:text-6xl ' + fugaz.className}> Sign Up Boss </h3>
            <p>You&#39;re one step closer.</p>

            <input
                className='max-w-[400px] w-full mx-auto px-3 duration-200 hover:border-indigo-600 focus:border-indigo-600 py-2 sm:py-3 border border-solid border-indigo-400 rounded-full outline-none'
                placeholder='Email'
                required
            />

            <input
                className='max-w-[400px] w-full mx-auto px-3 duration-200 hover:border-indigo-600 focus:border-indigo-600 py-2 sm:py-3 border border-solid border-indigo-400 rounded-full outline-none'
                placeholder='Phone number'
                type="number"
                required
            />

            <input
                className='max-w-[400px] w-full mx-auto px-3 duration-200 hover:border-indigo-600 focus:border-indigo-600 py-2 sm:py-3 border border-solid border-indigo-400 rounded-full outline-none'
                placeholder='Location'
                required
            />

            <div className='relative max-w-[400px] w-full mx-auto'>
                <input
                    className='w-full px-3 duration-200 hover:border-indigo-600 focus:border-indigo-600 py-2 sm:py-3 border border-solid border-indigo-400 rounded-full outline-none'
                    placeholder='Password'
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={handlePasswordChange}
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

            <div className='relative max-w-[400px] w-full mx-auto'>
                <input
                    className='w-full px-3 duration-200 hover:border-indigo-600 focus:border-indigo-600 py-2 sm:py-3 border border-solid border-indigo-400 rounded-full outline-none'
                    placeholder='Confirm Password'
                    type={showConfirmedPassword ? "text" : "password"}
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                    required
                />
                <button
                    type="button"
                    onClick={toggleConfirmPasswordVisibility}
                    className='absolute inset-y-0 right-0 flex items-center px-4 text-gray-600'
                >
                    {showConfirmedPassword ? "Hide" : "Show"}
                </button>
            </div>

            {error && <p className="text-red-500">{error}</p>}

            <div className='max-w-[400px] w-full mx-auto'>

                <Button text="Submit" full disabled={!!error} />

                <p className='text-center pt-2'>Already have an account? <Link href="/login"><span className='text-indigo-600'> Sign In</span></Link></p>
            </div>
        </div>
    );
};

export default SignUp;
