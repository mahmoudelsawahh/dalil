import SapesficCategory from "@/app/Components/adsPageComponent"

export async function getDetails(param) {
  const res = await fetch(`https://dalil.deltawy.com/rest/test.branch/branche`,{
    method : 'POST',
    body : JSON.stringify({"id" : param}),
    cache : 'no-store',
    headers : {
      "Access-Control-Allow-Headers" : "X-Custom-Header, Upgrade-Insecure-Requests",
      'Content-Type': 'application/json',
    } 
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
  metadata.description = data.shortDescription

  return (
    <>
        <div style={{textAlign : 'center', marginBottom : '20px'}}>
          <h1 style={{padding : '2px 0px'}}>برمجيات دلتاوي</h1>
          <p style={{padding : '5px 0px', lineHeight : '50px'}}>لدى " شركة دلتاوي " سابقة أعمال كبيرة في مجال الحلول البرمجية مما يجعلها تنافس الشركات الكبرى في مصر بشكل خاص والعالم العربي بشكل عام كما تعد " شركة دلتاوي " الشركة الرائدة في مجال تصميم برامج محاسبة الشركات .</p>
        </div>
      <SapesficCategory params={params}/>
    </>
  )
}

export default page