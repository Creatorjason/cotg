import React from 'react';
import { Fugaz_One, Lato } from "next/font/google";

const fugaz = Fugaz_One({ subsets: ["latin"], weight: "400" });
const lato = Lato({ subsets: ["latin"], weight: "400" });

const Button = (props) => {
    const { text, dark, full, disabled } = props;
    return (
        <button
            className={
                'rounded-full overflow-hidden border-2 duration-200'
                + (dark ? ' text-white bg-primary border-primary' : ' text-primary border-primary')
                + (full ? ' grid place-items-center w-full' : '')
                + (disabled ? ' opacity-50 cursor-not-allowed' : ' hover:opacity-60')
            }
            disabled={disabled}
        >
            <p className={'px-6 sm:px-10 whitespace-nowrap py-2 sm:py-4 ' + lato.className}>
                {text}
            </p>
        </button>
    );
};

export default Button;
