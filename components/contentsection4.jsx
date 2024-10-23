import Image from 'next/image'


export default function ContentSection4() {

    return (
        <section className="flex lg:w-[1440px] w-[768px] lg:h-[342px] h-[179px] bg-gray_03 items-center justify-center">
            <div className="w-[1220px] h-[122px] flex items-center justify-around">
                <h2 className='font-bold lg:text-[24px] text-[16px] lg:w-[400px] w-[140px] h-[40px]'>Наши партнёры по монетизации</h2>
                <section className="lg:w-[633px] w-[433.5px] lg:h-[71px] h-[48.5px] flex items-center justify-between">
                    <figure>
                        <Image
                        src="/images/ClickWave.png"
                        alt="ClickWave"
                        width={177}
                        height={54}
                        priority
                        className='lg:w-[177px] w-[121px] lg:h-[54px] h-[37px]'
                        />
                        <figcaption className="sr-only">ClickWave</figcaption>    
                    </figure>
                    <figure>
                        <Image
                        src="/images/Zyphronix.png"
                        alt="Zyphronix"
                        width={102}
                        height={71}
                        priority
                        className='lg:w-[102px] w-[69px] lg:h-[71px] h-[48px]'
                        />
                        <figcaption className="sr-only">Zyphronix</figcaption>    
                    </figure>
                    <figure>
                        <Image
                        src="/images/NovaSphere.png"
                        alt="NovaSphere"
                        width={192}
                        height={61}
                        priority
                        className='lg:w-[192px] w-[131px] lg:h-[61px] h-[41px]'
                        />
                        <figcaption className="sr-only">NovaSphere</figcaption>    
                    </figure>
                </section>
            </div>
        </section>
    )
}