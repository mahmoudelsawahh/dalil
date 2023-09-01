import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css'
import { Cairo } from 'next/font/google';
import ProviderLayout from '@/ProviderLayout'
import dynamic from 'next/dynamic';
const ContainerLayout = dynamic(() => import('./contanerLayoute'), {
  ssr : false
})
const cairo = Cairo({ 
  subsets: ['latin'] ,
  display : 'swap',
  preload : true
})

export const metadata = {
  title: 'دليل المحلة الإلكتروني',
  description: 'دليل المحلة الإلكتروني - هو دليل ومحرك بحث شامل للشركات وهو دليل صناعي وتجاري وخدمي يشمل كافة القطاعات والأشخاص المهنيين ، من مميزات الدليل: طريقة العرض والبحث حداثة ودقة بياناته في جميع المجالات يتميز بأنه مطور بتقنيات برمجية حديثة الدليل بالكامل مجاناً لمن يريد البحث عن أي شئ يتميز بقوة نتائجه في محركات البحث يتميز الدليل بالسرعة في أرشفة البيانات في محركات البحث العالمية الدليل إشهار ممتاز للشركات التجارية والقطاعات الخدمية والأشخاص أصحاب الأعمال  ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ar">
      <body className={cairo.className}>
          <ProviderLayout>
           <ContainerLayout>
              {children}
           </ContainerLayout>
          </ProviderLayout>
      </body>
    </html>
  )
}
