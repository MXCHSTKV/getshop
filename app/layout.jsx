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
        className={`${onestRegular.variable} ${onestMedium.variable} ${onestBold.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}