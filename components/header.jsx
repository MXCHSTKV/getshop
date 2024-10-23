"use client"
import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Header() {
const [isScrolled, setIsScrolled] = useState(false)
const [width, setWidth] = useState(312)

useEffect(() => {
    if (typeof window !== 'undefined') {   
        const handleResize = () => {
            setWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }
}, [])

useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const fixedHeader = isScrolled ? "shadow-[0_4px_8px_rgba(214,219,219,0.7)] bg-gray_03" : ""

    return (
        <header className={`flex fixed h-[72px] lg:pl-[30px] md:px-[10px] lg:w-[1220px] md:w-[688px] justify-between items-center z-50 lg:ml-[110px] md:ml-[40px] ${fixedHeader}`}>
            <Image
            src="/images/logo.svg"
            alt="Logo"
            width={161}
            height={40}
            priority
            />
            {width <= 1440 ? <Image
            src="/images/menu.svg"
            alt="Menu"
            width={44}
            height={44}
            priority
            /> :
            <div className="w-[336px] h-[44px] flex justify-around items-center font-medium">
                <a href="#advantages" className='hover:text-dark_orange '>Преимущества</a>
                <a href="#work" className='hover:text-dark_orange '>Как работаем</a>
            </div>}
        </header>
    )
}
