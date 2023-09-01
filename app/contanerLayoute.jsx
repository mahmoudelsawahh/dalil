"use client"
import React from 'react'
import Navbar from './Components/NavBar'
import Layout from './Components/Layout'
import { usePathname } from 'next/navigation'

const ContainerLayout = ({children}) => {
    const pathName = usePathname();
    const param = pathName.split('/')[1]
  return (
    <>
      {
        param === "dashboard" ? 
        <>
           
            {children}
        </>
        :
         <>
            <Navbar/>
                {children}
         </>
      }
    </>
  )
}

export default ContainerLayout