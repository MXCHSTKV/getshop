"use client"
import { useState } from 'react'
import ToggleButton from './togglebutton'

export default function ContentSection2() {
    const [isToggled, setIsToggled] = useState(false)
    
    return (
        <div className="flex justify-between px-[30px] w-[1160px] h-[212px] mt-[180px]">
            <p className="flex w-[460px] h-[114px] text-[32px] font-bold line-h2">Дополнительные источники выручки для разных компаний</p>
            <div  className='w-[560px] h-[188px]'>
                { isToggled ? 
                    <div className='flex w-[560px] h-[60px] bg-white rounded-[10px] justify-around items-center'>
                        <ToggleButton onClick={()=>setIsToggled(!isToggled)} name="Операторам"/>
                        <p className="flex items-center justify-center w-[276px] h-[52px]">ОТТ сервисам</p>
                    </div>
                     : 
                    <div className='flex w-[560px] h-[60px] bg-white rounded-[10px] justify-around items-center'>
                        <p className="flex items-center justify-center w-[276px] h-[52px]">Операторам</p>
                        <ToggleButton onClick={()=>setIsToggled(!isToggled)} name="ОТТ сервисам"/>
                    </div>
                    }
                { isToggled ? <p className='flex w-[560px] h-[96px] text-[22px] mt-[32px]'>Найдите идеальный баланс выручки и удовлетворённости пользователей с платформой рекламной монетизации</p> : <p className='flex w-[560px] h-[96px] text-[22px] mt-[32px]'>Дополнительные возможности обогащения данных<br/>об аудитории и монетизации</p> }
            </div>
        </div>
    )
}