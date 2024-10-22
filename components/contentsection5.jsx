import Image from "next/image"
import Button from "./button"

export default function ContentSection5() {

    return (
        <section id="work" className="relative flex w-[1440px] h-[648px] items-center overflow-hidden">
            <div className="w-[497px] h-[436px] ml-[141px]">
                <h2 className="font-bold text-[32px] w-[473px] h-[76px] line-h2">Подробные отчёты для вас и правообладателей</h2>
                <div className="mt-[32px] w-[497px] h-[200px] mb-[80px] flex flex-col justify-between">
                    <div className="flex items-start">
                        <Image
                        src="/images/arrow.svg"
                        alt="arrow"
                        width={32}
                        height={32}
                        priority
                        />
                        <p className="text-[22px] ml-[16px]">Выручка, CTR, показы и другие<br/>показатели в реальном времени.</p>
                    </div>
                    <div className="flex items-start">
                        <Image
                        src="/images/arrow.svg"
                        alt="arrow"
                        width={32}
                        height={32}
                        priority
                        className=""
                        />
                        <p className="text-[22px] ml-[16px]">Инструменты контроля качества трафика.</p>
                    </div>
                    <div className="flex items-start">
                        <Image
                        src="/images/arrow.svg"
                        alt="arrow"
                        width={32}
                        height={32}
                        priority
                        />
                        <p className="text-[22px] ml-[16px]">Ежемесячные автоматические отчёты<br/>для каждого правообладателя.</p>
                    </div>
                </div>
                <Button color="bg-black" name="Заказать звонок"/>
            </div>
            <Image
            src="/images/Mac.png"
            alt="Logo"
            width={721}
            height={482}
            priority
            className="absolute ml-[810px]"
            />
        </section>
    )
}