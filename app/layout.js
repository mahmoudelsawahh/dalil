'use client'
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";0
import './globals.css'
import { Cairo } from 'next/font/google';
import ProviderLayout from '@/ProviderLayout'
import dynamic from 'next/dynamic';
import Navbar from "./Components/NavBar";
import Header from "./Components/Header";

const cairo = Cairo({ 
  subsets: ['latin'] ,
  display : 'swap',
  preload : true
})

// export const metadata = {
//   title: 'دليل المحلة الإلكتروني',
//   description: 'دليل المحلة الإلكتروني - هو دليل ومحرك بحث شامل للشركات وهو دليل صناعي وتجاري وخدمي يشمل كافة القطاعات والأشخاص المهنيين ، من مميزات الدليل: طريقة العرض والبحث حداثة ودقة بياناته في جميع المجالات يتميز بأنه مطور بتقنيات برمجية حديثة الدليل بالكامل مجاناً لمن يريد البحث عن أي شئ يتميز بقوة نتائجه في محركات البحث يتميز الدليل بالسرعة في أرشفة البيانات في محركات البحث العالمية الدليل إشهار ممتاز للشركات التجارية والقطاعات الخدمية والأشخاص أصحاب الأعمال  ',
// }

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cairo.className}>
          <ProviderLayout>
             <Navbar/> 
             <Header />            
             {children}
             
          </ProviderLayout>
      </body>
    </html>
  )
}
