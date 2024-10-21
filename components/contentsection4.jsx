import Image from 'next/image'


export default function ContentSection4() {

    return (
        <div className="flex ml-[-110px] w-[1440px] h-[342px] bg-gray_03 items-center justify-center">
            <div className="w-[1220px] h-[122px] flex items-center justify-around">
                <p className='font-bold text-[24px]'>Наши партнёры по монетизации</p>
                <div className="w-[633px] h-[71px] flex items-center justify-between">
                    <Image
                    src="/images/ClickWave.png"
                    alt="ClickWave"
                    width={177}
                    height={54}
                    priority
                    />
                    <Image
                    src="/images/Zyphronix.png"
                    alt="Zyphronix"
                    width={102}
                    height={71}
                    priority
                    />
                    <Image
                    src="/images/NovaSphere.png"
                    alt="NovaSphere"
                    width={192}
                    height={61}
                    priority
                    />    
                </div>
            </div>
        </div>
    )
}