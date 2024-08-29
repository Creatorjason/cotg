import { Fugaz_One, Lato } from 'next/font/google';
import React from 'react'
import PricingCard from './PricingCard';



const fugaz = Fugaz_One({ subsets: ["latin"], weight: "400" });
const lato = Lato({ subsets: ["latin"], weight: "400" });

const PricingContainer = () => {
  const express_offers = [
    '1 Haircut',
    'Lagos Only',
    'Scalp',
];


const standard_offers = [
  '2 Haircuts Per Month',
  'Preferred Location ',
  'Scalp Massage',
  'Hairstyle Refresh',
];


const basic_offers = [
  '4 Haircuts Per Month',
  'Preferred Location ',
  'Scalp Massage',
  'Hairstyle Refresh',
];


const premium_offers = [
  '4 Haircuts Per Month',
  'Preferred Location ',
  'Scalp Massage',
  'Hairstyle Refresh',
  'Specialized Hair Treatment',
  'Exclusive Haircare Products',
  'Priority Scheduling',
];




  return (
    <div className='flex flex-col gap-4 p-4 sm:p-8 bg-indigo-50'>
      <h1 className={'text-3xl sm:text-5xl md:text-6xl text-center textGradient ' + lato.className}>Our Plans</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 p-4 rounded-lg gap-4 '>

      <PricingCard type="Express" amount="10,000" offers={express_offers} />
      <PricingCard type="Standard" amount="15,000" offers={standard_offers} />
      <PricingCard type="Basic" amount="25,000" offers={basic_offers} />
      <PricingCard type="Premium" amount="50,000" offers={premium_offers} />
      </div>
    </div>
  )
}

export default PricingContainer