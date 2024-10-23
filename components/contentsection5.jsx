import Image from "next/image"
import Button from "./button"

export default function ContentSection5() {

    return (
        <section id="work" className="relative flex lg:w-[1440px] md:w-[768px] lg:h-[648px] md:h-[471px] items-center overflow-hidden">
            <div className="lg:w-[497px] md:w-[334px] lg:h-[436px] md:h-[354px] lg:ml-[141px] md:ml-[40px]">
                <h2 className="font-bold lg:text-[32px] md:text-[28px] lg:w-[473px] md:w-[334px] lg:h-[76px] md:h-[102px] line-h2">Подробные отчёты&nbsp;для&nbsp;вас&nbsp;и правообладателей</h2>
                <div className="mt-[32px] lg:w-[497px] md:w-[334px] lg:h-[200px] md:h-[139px] lg:mb-[80px] md:mb-[32px] flex flex-col justify-between">
                    <div className="flex items-start">
                        <Image
                        src="/images/arrow.svg"
                        alt="arrow"
                        width={32}
                        height={32}
                        priority
                        className="object-contain lg:w-[32px] md:w-[24px] lg:h-[32px] md:h-[24px] mb-4"
                        />
                        <p className="lg:text-[22px] md:text-[14px] ml-[16px]">Выручка, CTR, показы и другие<br/>показатели в реальном времени.</p>
                    </div>
                    <div className="flex items-start lg:h-[36px] md:h-[25px]">
                        <Image
                        src="/images/arrow.svg"
                        alt="arrow"
                        width={32}
                        height={32}
                        priority
                        className="object-contain lg:w-[32px] md:w-[24px] lg:h-[32px] md:h-[24px] mb-4"
                        />
                        <p className="lg:text-[22px] md:text-[14px] ml-[16px]">Инструменты контроля качества трафика.</p>
                    </div>
                    <div className="flex items-start">
                        <Image
                        src="/images/arrow.svg"
                        alt="arrow"
                        width={32}
                        height={32}
                        priority
                        className="object-contain lg:w-[32px] md:w-[24px] lg:h-[32px] md:h-[24px] mb-4"
                        />
                        <p className="lg:text-[22px] md:text-[14px] ml-[16px]">Ежемесячные автоматические отчёты<br/>для каждого правообладателя.</p>
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
            className="absolute lg:ml-[810px] md:ml-[449px] lg:w-[721px] lg:h-[482px] md:w-[399px] md:h-[266px]"
            />
        </section>
    )
}