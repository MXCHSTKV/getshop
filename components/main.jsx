import Header from "./header"
import Button from "./button"

export default function ContentSectionOne() {
    return (
        <section>
            <Header />
            <main className="w-[1220px] h-[615px] pt-[104px] pl-[30px] mx-auto">
                <h1 className="font-bold text-[80px] text-left pt-[100px] h-[284px] leading-tight line-h1 mx-auto">
                    Монетизируйте клиентскую базу, не снижая NPS
                </h1>
                <p className="text-[24px] font-regular block w-[626px] h-24 mt-8 mb-20">Найдите идеальный баланс выручки<br />и удовлетворённости пользователей с платформой рекламной монетизации</p>
                <Button name="Заказать звонок" color="bg-orange"/>
            </main>
        </section>
    )
}