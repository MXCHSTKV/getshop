"use client"
import { useState, useEffect } from 'react';
import Image from 'next/image'

export default function Header() {
const [isScrolled, setIsScrolled] = useState(false)

useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [])

  const fixedHeader = isScrolled ? "shadow-[0_4px_8px_rgba(214,219,219,0.7)] bg-gray_03" : ""

    return (
        <header className={`flex fixed h-[72px] pl-[30px] w-[1220px] justify-between items-center z-50 ml-[110px] ${fixedHeader}`}>
            <Image
            src="/images/logo.svg"
            alt="Logo"
            width={161}
            height={40}
            priority
            />
            <div className="w-[336px] h-[44px] flex justify-around items-center font-medium">
                <a href="#advantages" className='hover:text-dark_orange '>Преимущества</a>
                <a href="#work" className='hover:text-dark_orange '>Как работаем</a>
            </div>
        </header>
    )
}