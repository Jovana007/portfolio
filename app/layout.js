import { Poppins, Playfair_Display, Lato } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const playfair_Display = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const metadata = {
  title: 'Portfolio Start',
  description: 'Jednostavna Next.js + Tailwind app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.className} ${playfair_Display.className} ${lato.className} antialiased  leading-8 overflow-x-hidden`} >
        {children}
      </body>
    </html>
  )
}
