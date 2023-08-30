import SubCategoriesComponent from '@/app/Components/SubGategories'


export async function getDetails(param) {
  const res = await fetch(`https://dalil.deltawy.com/rest/test.branch/subCat/${param}`,{
    cache : 'no-store',
})

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    return ""
  }
 
  return res.json()
}

export const metadata = {
  title: 'دليل المحلة الإلكتروني',
  description: 'دليل المحلة الإلكتروني - هو دليل ومحرك بحث شامل للشركات وهو دليل صناعي وتجاري وخدمي يشمل كافة القطاعات والأشخاص المهنيين ، من مميزات الدليل: طريقة العرض والبحث حداثة ودقة بياناته في جميع المجالات يتميز بأنه مطور بتقنيات برمجية حديثة الدليل بالكامل مجاناً لمن يريد البحث عن أي شئ يتميز بقوة نتائجه في محركات البحث يتميز الدليل بالسرعة في أرشفة البيانات في محركات البحث العالمية الدليل إشهار ممتاز للشركات التجارية والقطاعات الخدمية والأشخاص أصحاب الأعمال  ',
}



const page = async({params}) => {

  const data = await getDetails(Number(params.id[0]))
  metadata.title = data.name


  return (
    <>
      <SubCategoriesComponent params={params}/>
    </>
  )
}

export default page