"use client"
import { useState } from 'react'
import ToggleButton from './togglebutton'

export default function ContentSection2() {
    const [isToggled, setIsToggled] = useState(false)
    
    return (
        <section className="flex justify-between lg:px-[30px] lg:w-[1220px] w-[688px] lg:h-[212px] h-[128px] lg:mt-[180px] mt-[120px] mx-auto">
            <h2 className="flex lg:w-[460px] w-[275px] h-[136px] lg:h-[114px] lg:text-[32px] text-[28px] font-bold line-h2">Дополнительные источники выручки для разных компаний</h2>
            <div  className='lg:w-[560px] lg:h-[188px] w-[334px] h-[112px]'>
                { isToggled ? 
                    <article className='flex lg:w-[560px] w-[336px] lg:h-[60px] h-[36px] bg-white lg:rounded-[10px] rounded-[6px] justify-around items-center'>
                        <ToggleButton onClick={()=>setIsToggled(!isToggled)} name="Операторам" />
                        <p className="flex items-center justify-center lg:w-[276px] w-[165.6px] lg:h-[52px] h-[31px] text-[16px] lg:text-[24px]">ОТТ сервисам</p>
                    </article>
                     : 
                    <article className='flex lg:w-[560px] w-[336px] lg:h-[60px] h-[36px] bg-white lg:rounded-[10px] rounded-[6px] justify-around items-center'>
                        <p className="flex items-center justify-center lg:w-[276px] w-[165.6px] lg:h-[52px] h-[31px] text-[16px] lg:text-[24px]">Операторам</p>
                        <ToggleButton onClick={()=>setIsToggled(!isToggled)} name="ОТТ сервисам"/>
                    </article>
                    }
                { isToggled ? <p className='flex lg:h-[96px] h-[60px] lg:text-[22px] text-[14px] lg:mt-[32px] mt-[16px]'>Найдите идеальный баланс выручки и удовлетворённости пользователей с платформой рекламной монетизации</p> : <p className='flex lg:h-[96px] h-[60px] lg:text-[22px] text-[14px] lg:mt-[32px] mt-[16px]'>Дополнительные возможности обогащения данных об аудитории и монетизации</p> }
            </div>
        </section>
    )
}