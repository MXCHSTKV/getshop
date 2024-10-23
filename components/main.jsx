import Header from "./header"
import Button from "./button"

export default function ContentSectionOne() {
    return (
        <section>
            <Header />
            <main className="lg:w-[1220px] w-[688px] lg:h-[615px] h-[314px] lg:pt-[104px] lg:pl-[30px] mx-auto">
                <h1 className="font-bold lg:text-[80px] text-[52px] text-left lg:mt-[100px] mt-[152px] lg:h-[184px] h-[114px] leading-tight lg:line-h1 line-h1-md tracking-[-2px] mx-auto">
                    Монетизируйте клиентскую<br />базу, не снижая NPS
                </h1>
                <p className="lg:text-[24px] text-[14px] font-regular block lg:w-[626px] w-[393px] lg:h-24 lg-[60px] mt-8 lg:mb-20 mb-[60px]">Найдите идеальный баланс выручки<br />и удовлетворённости пользователей с платформой рекламной монетизации</p>
                <Button name="Заказать звонок" color="bg-orange" width="w-full lg:w-[210px]"/>
            </main>
        </section>
    )
}