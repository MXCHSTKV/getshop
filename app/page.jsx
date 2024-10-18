import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <main className="flex flex-col items-center">
        <Image
          src="/images/icon.png"
          alt="Logo"
          width={100}
          height={100}
          priority
        />
        <h1 className="text-center mt-4">
          Монетизируйте клиентскую базу, не снижая NPS
        </h1>
      </main>
    </div>
  );
}
