'use client'

import { MoonIcon, SunIcon } from '@heroicons/react/16/solid'
import { useTheme } from 'next-themes'
import React from 'react'

const ThemeButton = () => {

    const { resolvedTheme, setTheme } = useTheme()

    return (
        <button onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')} aria-label='Toggle Dark Theme' type='button'>
            {
                resolvedTheme === 'dark' ? (
                    <SunIcon className='h-5 w-5 text-orange-300 cursor-pointer' />
                ) : (
                    <MoonIcon className='h-5 w-5 text-slate-800 cursor-pointer' />
                )
            }
        </button>
    )
}

export default ThemeButton