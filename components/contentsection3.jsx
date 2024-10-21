import Image from "next/image"

export default function ContentSection3() {

    return (
        <div className="w-[1220px] h-[447px] mt-[180px] mb-[90px]">
            <div className="font-bold text-[32px] text-center mb-[80px]">Баланс между выручкой и удовлетворённостью пользователей</div>
            <div className="flex justify-between w-[1160px] h-[261px] mx-auto">
                <div className="w-[300px] h-[258px]">
                    <Image
                    src="/images/arrow.svg"
                    alt="arrow"
                    width={32}
                    height={32}
                    priority
                    className="object-contain mt-[32px] ml-[32px] mb-4"
                    />
                    <h2 className="font-bold text-[24px] ml-[32px] mb-[16px]" >Частотность<br/>под контролем</h2>
                    <p className="text-[18px] ml-[32px]">Чтобы не ронять NPS<br/>и не увеличивать отток<br/>пользователей</p>
                </div>
                <Image
                src="/images/icon.png"
                alt="Icon"
                width={120}
                height={120}
                priority
                className="object-contain"
                />
                <div className="w-[300px] h-[258px]">
                    <Image
                    src="/images/arrow.svg"
                    alt="arrow"
                    width={32}
                    height={32}
                    priority
                    className="object-contain mt-[32px] ml-[32px] mb-4"
                    />
                    <h2 className="font-bold text-[24px] ml-[32px] mb-[16px]" >Максимальная выручка</h2>
                    <p className="text-[18px] ml-[32px]">За счёт заполенения всех<br/>рекламных мест по<br/>высокой цене</p>
                </div>
            </div>
        </div>
    )
}