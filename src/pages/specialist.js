import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import React from 'react'
import '../../src/app/globals.css'
import { Open_Sans } from 'next/font/google'
import SpecialistMain from '@/components/SpecialistMain/SpecialistMain'

const open = Open_Sans({ subsets: ['latin'] })

function specialist() { 
  return (
    <div className={open.className}>
        <Header/>
        <SpecialistMain/>
        <Footer/>
    </div>
  )
}

export default specialist