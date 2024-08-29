import { Fugaz_One, Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });
const fugaz = Fugaz_One({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Cutz On The Go",
  description: "Like ",
};

const header = (
  <header className="p-2 sm:p-8 flex items-center justify-between gap-4">
    {/* <h1 className={'text-base sm:text-lg textGradient  '+ fugaz.className}>Broodl</h1> */}
   <Nav/>
  </header>
)

const footer = (
  // <footer className="p-4 sm:p-8 grid place-items-center">

  //   <p className={'text-indigo-500 ' + fugaz.className}>Created with ❤️</p>
  // </footer>
  <Footer/>
)
export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <body className={'w-full max-w-[1000px] mx-auto text-sm sm:text-base min-h-screen flex flex-col text-slate-700 ' + inter.className}>
        {header}
        {children}
        {footer}
      </body>
    </html>
  );
}
