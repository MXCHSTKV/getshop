"use client"
import { useState } from 'react'
import ToggleButton from './togglebutton'

export default function ContentSection2() {
    const [isToggled, setIsToggled] = useState(false)
    
    return (
        <section className="flex justify-between lg:px-[30px] lg:w-[1220px] md:w-[688px] lg:h-[212px] md:h-[128px] lg:mt-[180px] md:mt-[120px] mx-auto">
            <h2 className="flex lg:w-[460px] md:w-[275px] md:h-[136px] lg:h-[114px] lg:text-[32px] md:text-[28px] font-bold line-h2">Дополнительные источники выручки для разных компаний</h2>
            <div  className='lg:w-[560px] lg:h-[188px] md:w-[334px] md:h-[112px]'>
                { isToggled ? 
                    <article className='flex lg:w-[560px] md:w-[336px] lg:h-[60px] md:h-[36px] bg-white lg:rounded-[10px] md:rounden-[6px] justify-around items-center'>
                        <ToggleButton onClick={()=>setIsToggled(!isToggled)} name="Операторам" />
                        <p className="flex items-center justify-center lg:w-[276px] md:w-[165.6px] lg:h-[52px] md:h-[31px] md:text-[16px] lg:text-[24px]">ОТТ сервисам</p>
                    </article>
                     : 
                    <article className='flex lg:w-[560px] md:w-[336px] lg:h-[60px] md:h-[36px] bg-white lg:rounded-[10px] md:rounden-[6px] justify-around items-center'>
                        <p className="flex items-center justify-center lg:w-[276px] md:w-[165.6px] lg:h-[52px] md:h-[31px] md:text-[16px] lg:text-[24px]">Операторам</p>
                        <ToggleButton onClick={()=>setIsToggled(!isToggled)} name="ОТТ сервисам"/>
                    </article>
                    }
                { isToggled ? <p className='flex lg:h-[96px] md:h-[60px] lg:text-[22px] md:text-[14px] lg:mt-[32px] md:mt-[16px]'>Найдите идеальный баланс выручки и удовлетворённости пользователей с платформой рекламной монетизации</p> : <p className='flex lg:h-[96px] md:h-[60px] lg:text-[22px] md:text-[14px] lg:mt-[32px] md:mt-[16px]'>Дополнительные возможности обогащения данных об аудитории и монетизации</p> }
            </div>
        </section>
    )
}