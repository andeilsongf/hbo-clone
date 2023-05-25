import { ReactNode } from 'react'
import './globals.css'
import { Sintony } from 'next/font/google'

const sintony = Sintony({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-sintony',
})

export const metadata = {
  title: 'HBO Clone',
  description: 'HBO Clone using React and Hooks',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${sintony.variable} font-sans`}>{children}</body>
    </html>
  )
}
