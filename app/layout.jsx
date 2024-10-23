import localFont from "next/font/local";
import "../styles/globals.css";

const onestRegular = localFont({
  src: "../public/fonts/Onest-Regular.woff2",
  variable: "--font-onest-regular",
  weight: "400",
});

const onestMedium = localFont({
  src: "../public/fonts/Onest-Medium.woff2",
  variable: "--font-onest-medium",
  weight: "500",
});

const onestBold = localFont({
  src: "../public/fonts/Onest-Bold.woff2",
  variable: "--font-onest-bold",
  weight: "700",
});

export const metadata = {
  title: "GETSHOP",
  description: "Created by getshop.tv",
  icons: {
    icon: '/images/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body
        className={`${onestRegular.variable} ${onestMedium.variable} ${onestBold.variable} antialiased lg:w-[1440px] md:w-[768px] mx-auto`}
      >
        <div className="absolute inset-0 backgroundImage z-[-1] lg:w-[1440px] md:w-[768px] lg:min-h-[1110px] md:h-[760px] mx-auto"></div>
        {children}
      </body>
    </html>
  );
}
