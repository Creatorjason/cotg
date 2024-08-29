import Image from 'next/image'; // Import Next.js Image component
import { FaTwitter, FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa'; // Importing icons from react-icons

const Footer = () => {
    return (
        <div className='flex justify-between items-center gap-4 p-4 sm:p-8 bg-indigo-100 footer'>
            {/* Logo Section */}
            <div className='flex items-center'>
                <Image 
                    src='/logo.png' // replace with the actual path to your logo image
                    alt='Logo'
                    width={48} 
                    height={48} 
                    className='rounded-full border border-gray-300' 
                />
                <span className='ml-4 text-lg font-bold text-purple-700'>CUTS ON THE GO</span>
            </div>

            {/* Social Media Icons */}
            <div className='flex gap-4'>
                <a href='https://twitter.com' target='_blank' rel='noopener noreferrer' className='bg-gray-200 p-2 rounded'>
                    <FaTwitter className='text-black' />
                </a>
                <a href='https://linkedin.com' target='_blank' rel='noopener noreferrer' className='bg-gray-200 p-2 rounded'>
                    <FaLinkedin className='text-black' />
                </a>
                <a href='https://instagram.com' target='_blank' rel='noopener noreferrer' className='bg-gray-200 p-2 rounded'>
                    <FaInstagram className='text-black' />
                </a>
                <a href='https://whatsapp.com' target='_blank' rel='noopener noreferrer' className='bg-gray-200 p-2 rounded'>
                    <FaWhatsapp className='text-black' />
                </a>
            </div>
        </div>
    );
}

export default Footer;
