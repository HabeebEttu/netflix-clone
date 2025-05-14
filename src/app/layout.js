import { Geist, Geist_Mono, Roboto } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
})


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
