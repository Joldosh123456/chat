import './globals.css'
import { Open_Sans } from 'next/font/google'
import Header from '@/components/Header/Header'
import Main from '@/components/Main/Main'
import Footer from '@/components/Footer/Footer'


const open = Open_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={open.className}>
        <Header/>
        <Main/>
        {children}
        <Footer/>
        
        </body>
    </html>
  )
}
