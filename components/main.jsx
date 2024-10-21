import Header from "./header"
import Button from "./button"

export default function ContentSectionOne() {
    return (
        <main className="w-[1160px] h-[615px] mt-8 mx-auto">
            <Header />
            <h1 className="font-bold text-[80px] text-left mt-[100px] h-[184px] leading-tight">
                Монетизируйте клиентскую базу, не снижая NPS
            </h1>
            <p className="text-[24px] font-regular block w-[626px] h-24 mt-8 mb-20">Найдите идеальный баланс выручки<br />и удовлетворённости пользователей с платформой рекламной монетизации</p>
            <Button name="Заказать звонок" color="bg-orange"/>
        </main>
    )
}