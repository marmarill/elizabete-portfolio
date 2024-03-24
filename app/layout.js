import { Inter } from 'next/font/google'
import './globals.css'
import { ScrollProvider } from '@/context/Scroll'


const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
          <title>Elizabete Busevica</title>  
      </head>
      <ScrollProvider>
        <body className={inter.className}>{children}</body>
      </ScrollProvider>
    </html>
  )
}
