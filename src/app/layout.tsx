import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import "../styles/globals.css";
import Navbar from "./components/navbar/Navbar";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rate My Lecture',
  description: 'rate lecture',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <div className="bg-blueish min-h-screen"> {/* Set background of page */}
        <Navbar /> {/* Import Navbar */}
        {children}
      </div>
  )
}
