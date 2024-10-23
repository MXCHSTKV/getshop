import Image from "next/image"

export default function ContentSection3() {

    return (
        <section id='advantages' className="lg:w-[1220px] md:w-[688px] lg:h-[597px] md:h-[397px] lg:mt-[30px] md:mt-[40px] lg:pt-[150px] md:pt-[80px] lg:mb-[90px] md:mb-[80px] mx-auto">
            <h2 className="md:w-[512px] lg:w-[1035px] md:h-[68px] lg:h-[40px] font-bold lg:text-[32px] md:text-[28px] text-center lg:mb-[80px] md:mb-[60px] line-h2 mx-auto">Баланс между выручкой и удовлетворённостью пользователей</h2>
            <div className="flex justify-between items-center lg:w-[1160px] md:w-[688px] lg:h-[261px] md:h-[189px] mx-auto">
                <article className="lg:w-[300px] md:w-[216px] lg:h-[258px] md:h-[189px]">
                    <Image
                    src="/images/arrow.svg"
                    alt="arrow"
                    width={32}
                    height={32}
                    priority
                    className="object-contain lg:w-[32px] md:w-[24px] lg:h-[32px] md:h-[24px] lg:mt-[32px] lg:ml-[32px] md:mt-[24px] md:ml-[24px] mb-4"
                    />
                    <h2 className="font-bold lg:text-[24px] md:text-[16px] lg:ml-[32px] md:ml-[24px] mb-[16px]" >Частотность<br/>под контролем</h2>
                    <p className="lg:text-[18px] md:text-[12px] lg:ml-[32px] md:ml-[24px]">Чтобы не ронять NPS<br/>и не увеличивать отток<br/>пользователей</p>
                </article>
                <Image
                src="/images/icon.png"
                alt="Icon"
                width={120}
                height={120}
                priority
                className="object-contain lg:w-[120px] md:w-[80px] lg:h-[120px] md:h-[80px] "
                />
                <article className="lg:w-[300px] md:w-[216px] lg:h-[258px] md:h-[189px]">
                    <Image
                    src="/images/arrow.svg"
                    alt="arrow"
                    width={32}
                    height={32}
                    priority
                    className="object-contain lg:w-[32px] md:w-[24px] lg:h-[32px] md:h-[24px] lg:mt-[32px] lg:ml-[32px] md:mt-[24px] md:ml-[24px] mb-4"
                    />
                    <h2 className="font-bold lg:text-[24px] md:text-[16px] lg:ml-[32px] md:ml-[24px] mb-[16px]" >Максимальная<br />выручка</h2>
                    <p className="lg:text-[18px] md:text-[12px] lg:ml-[32px] md:ml-[24px]">За счёт заполенения всех<br/>рекламных мест по<br/>высокой цене</p>
                </article>
            </div>
        </section>
    )
}