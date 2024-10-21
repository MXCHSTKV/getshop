import Image from 'next/image'

export default function Header() {
    return (
        <header className="flex h-[72px] justify-between items-center">
            <Image
            src="/images/logo.svg"
            alt="Logo"
            width={161}
            height={40}
            priority
            />
            <div className="w-[336px] h-[44px] flex justify-around items-center font-medium">
                <p>Преимущества</p>
                <p>Как работаем</p>
            </div>
        </header>
    )
}