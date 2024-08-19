import React from 'react';
import Button from './Button';

const PricingCard = (props) => {
    const { type, amount, offers } = props;
    return (
        <div className='flex flex-col gap-4 p-4 sm:p-8 borderGradient '>
            <h1 className='text-2xl sm:text-4xl md:text-5xl text-black '><b>{type}</b></h1>
            <h2 className='text-1xl sm:text-3xl md:text-4xl text-gray-600 '>&#x20A6; {amount}</h2>
            <div className='flex flex-col gap-2'>
                {offers.map((offer, index) => (
                    <p key={index} className='text-gray-600'>&#x2713; {offer}</p>
                ))}
            </div>
            <Button text="Book Now" dark />
        </div>
    );
}

export default PricingCard;
