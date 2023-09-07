import Header from '@/components/Header/Header'
import Main from '@/components/Main/Main'
import Footer from '@/components/Footer/Footer'
import React from 'react'
import '../../src/app/globals.css'
import { Open_Sans } from 'next/font/google'

const open = Open_Sans({ subsets: ['latin'] })

function customer() {
  return (
    <div className={open.className}>

    {/* <div className='container'> */}
        <Header/>
        <Main/>
        <Footer/>
    {/* </div> */}
    </div>
  )
}

export default customer