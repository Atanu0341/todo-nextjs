'use client';

import React, { useEffect, useState } from 'react';
import ThemeButton from './utils/ThemeButton';
import { FaGithub } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className='flex py-3 flex-wrap justify-around'>
      <h1 className='text-lg font-semibold cursor-pointer dark:text-white'>TODO APP</h1>
      <ul className='flex justify-center items-center gap-12 text-2xl cursor-pointer'>
        <li><a href='https://github.com/Atanu0341' target='_blank' rel='noopener noreferrer'><FaGithub /></a></li>
        {mounted && <ThemeButton />}
      </ul>
    </div>
  );
};

export default Navbar;
