import ValidateEmail from '@/components/validateemail.jsx'
export default function ContentSection6() {

    return (
        <div className="ml-[-110px] w-[1440px] h-[670px] pt-[127px] bg-gray_03">  
            <div className="flex flex-col justify-between w-[1160px] h-[333px] mx-auto">
                <h2 className="font-bold text-[32px] line-h2">Заполните форму</h2>
                <div className="h-[216px] w-[1160px] flex justify-between">
                    <textarea className="block w-[560px] h-[215px] rounded-[12px] pt-[14px] pl-[18px] resize-none border-gray_01 outline-black border" placeholder="Напишите свой вопрос"></textarea>
                    <ValidateEmail />
                </div>
            </div>     
        </div>
    )
}