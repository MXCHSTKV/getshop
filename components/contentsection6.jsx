import ValidateEmail from '@/components/validateemail.jsx'
export default function ContentSection6() {

    return (
        <section className="lg:w-[1440px] md:w-[768px] lg:h-[670px] md:h-[650px] lg:pt-[127px] bg-gray_03 flex items-center justify-between">  
            <div className="flex flex-col justify-between lg:w-[1160px] md:w-[688px] lg:h-[333px] md:h-[550px] mx-auto">
                <h2 className="font-bold text-[32px] line-h2">Заполните форму</h2>
                <div className="lg:h-[216px] md:h-[484px] lg:w-[1160px] md:w-[688px] flex lg:flex-row md:flex-col justify-between">
                    <textarea className="block lg:w-[560px] md:w-[688px] lg:h-[215px] md:h-[220px] rounded-[12px] pt-[14px] pl-[18px] resize-none border-gray_01 outline-black border" placeholder="Напишите свой вопрос"></textarea>
                    <ValidateEmail />
                </div>
            </div>     
        </section>
    )
}