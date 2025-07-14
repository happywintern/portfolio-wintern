// src/app/layout.js
import './globals.css'
import { Outfit } from 'next/font/google'

const outfit = Outfit({ subsets: ['latin'], weight: ['400', '600', '700'] })

export const metadata = {
  title: 'Mutiara Rachma | Portfolio',
  description: 'Portfolio of Mutiara Rachma - UI/UX Designer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${outfit.className} bg-gradient-to-b from-pink-300 via-pink-100 to-white min-h-screen text-black`}
      >
        {children}
      </body>
    </html>
  )
}
