'use client';

import Image from 'next/image';
import './styles.css'
import Imagesource from '@/public/jellies.webp';
import { useEffect, useState } from 'react';

const HeaderContent = () => {
  const [scrollY, setScrollY] = useState(3);

  useEffect(() => {
      const handleScroll = () => {
        setScrollY(scrollY - window.scrollY / 100);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
  return (
    <div style={{ paddingInline : `${scrollY}rem`}} className='h-screen py-4'>
      <div className="header-content size-ful h-full text-center mx-auto rounded-[50px] overflow-hidden">
        <div className='relative z-10 backdrop-blur-2xl size-full flex flex-col gap-10 items-center justify-between'>
          <div className='mt-50'>
            <h1 className="text-center text-4xl md:text-9xl font-bold text-white">
              هنرستان
            </h1>
            <h1 className="text-center text-4xl md:text-9xl font-bold text-white">
              شهید طهرانی مقدم
            </h1>
          </div>
          <div className='max-w-400 w-full h-100 rounded-t-[200px] overflow-hidden'>
            <Image src={Imagesource} alt='jellies.webp' width={500} height={500} className='size-full object-cover' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderContent;
