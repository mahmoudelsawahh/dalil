 async function firstGroup() {  
  const res = await fetch(`https://dalil.deltawy.com/rest/test.sites/firstGroup`,{
    cache : 'no-store',
    headers : {
      'Content-Type': 'application/json',
    },
  })
  return res.json()
}

async function branchesApi() {  
  const res = await fetch(`https://dalil.deltawy.com/rest/test.branch/last/0`,{
    cache : 'no-store',
    headers : {
      'Content-Type': 'application/json',
    },
  })
  return res.json()
}


async function catApi() {  
  const res = await fetch(`https://dalil.deltawy.com/rest/test.category/cats`,{
    cache : 'no-store',
    headers : {
      'Content-Type': 'application/json',
    },
  })
  return res.json()
}

async function postApi() {  
  const res = await fetch(`https://dalil.deltawy.com/rest/test.ads/getAll/5`,{
    cache : 'no-store',
    headers : {
      'Content-Type': 'application/json',
    },
  })
  return res.json()
}

async function jobApi() {  
  const res = await fetch(`https://dalil.deltawy.com/jobLite`,{
    cache : 'no-store',
    headers : {
      'Content-Type': 'application/json',
    },
  })
  return res.json()
}


export default async function sitemap(){
  const baseUrl = "https://dalil.deltawy.com"
  // ----------------------------------------------------
  const firstGroupUrl = await firstGroup()
  const groupUrl = firstGroupUrl? firstGroupUrl.map((item)=>{
    return {
        url : `${baseUrl}/${item.name}`,
        lastModified : new Date()
    }
}) : []
  // ----------------------------------------------------
  const branches = await branchesApi()
  const branchesUrl = branches? branches.branches.map((item)=>{
    return {
        url : `${baseUrl}/${item.name}`,
        lastModified : new Date()
    }
}) : []
 // ----------------------------------------------------
  const cat = await catApi()
//   const catUrl = cat ?cat[0].catList.map((item)=>{
//     return {
//         url : `${baseUrl}/${item.name}`,
//         lastModified : new Date()
//     }
// }) : []

 const catUrl = cat ? cat.map((item)=>{
  return item.catList.map((ele)=>{
    return {
               url : `${baseUrl}/${ele.name}`,
               lastModified : new Date()
          } 
  })
 }):[]

  // ----------------------------------------------------

  const posts = await postApi()
  const postsUrl = posts? posts.ads.map((item)=>{
    return {
        url : `${baseUrl}/${item.name}`,
        lastModified : new Date()
    }
}) : []

 // ----------------------------------------------------

 const jobs = await jobApi()
 const jobsUrl = jobs? jobs.jobs.map((item)=>{
   return {
       url : `${baseUrl}/${item.name}`,
       lastModified : new Date()
   }
}) : []

    return [
        {
            url: 'https://deltawy.net',
            lastModified: new Date(),
          },
          {
            url: 'https://deltawy.net/jobs',
            lastModified: new Date(),
          },
          {
            url: 'https://deltawy.net/advertisement',
            lastModified: new Date(),
          },
          {
            url: 'https://deltawy.net/privacy',
            lastModified: new Date(),
          },
          ...groupUrl,
          ...branchesUrl,
          // ...catUrl,
          postsUrl,
          jobsUrl
    ]
}