'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

export const ScrollButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 50) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 px-5 py-4 rounded-[100%] z-50 bg-blue text-white ${
        isVisible ? 'opacity-100' : 'opacity-0'
      } transition-opacity duration-300`}
    >
            <img src="/svgs/arrow-up.svg" alt="Scroll to top" className='h-auto' width={14} height={20} />
    </button>
  );
};