import fs from 'fs';
import { Feed } from 'feed';

async function jobApi() {  
    const res = await fetch(`https://dalil.deltawy.com/jobLite`,{
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

  async function firstGroup() {  
    const res = await fetch(`https://dalil.deltawy.com/rest/test.sites/firstGroup`,{
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

  async function branchesApi() {  
    const res = await fetch(`https://dalil.deltawy.com/rest/test.branch/last/0`,{
      cache : 'no-store',
      headers : {
        'Content-Type': 'application/json',
      },
    })
    return res.json()
  }

  
export default async function generateRssFeed() {
 const allJobs = await jobApi();
 const allPosts = await postApi()
 const allfirstGroup = await firstGroup()
 const allbranchesApi = await branchesApi()
 const allCatApi = await catApi()


 const site_url = 'deltawy.net';

 const feedOptions = {
  title: 'دليل المحلة الإلكتروني',
  description: 'دليل المحلة الإلكتروني - هو دليل ومحرك بحث شامل للشركات وهو دليل صناعي وتجاري وخدمي يشمل كافة القطاعات والأشخاص المهنيين ، من مميزات الدليل: طريقة العرض والبحث حداثة ودقة بياناته في جميع المجالات يتميز بأنه مطور بتقنيات برمجية حديثة الدليل بالكامل مجاناً لمن يريد البحث عن أي شئ يتميز بقوة نتائجه في محركات البحث يتميز الدليل بالسرعة في أرشفة البيانات في محركات البحث العالمية الدليل إشهار ممتاز للشركات التجارية والقطاعات الخدمية والأشخاص أصحاب الأعمال  ',
  id: site_url,
  link: site_url,
  image: `${site_url}/logo.png`,
  favicon: `${site_url}/favicon.png`,
  copyright: `جميع الحقوق محفوظة لدي  شركه دلتاوي ${new Date().getFullYear()}, Ibas`,
  generator: 'https://deltawy.com',
  feedLinks: {
   rss2: `${site_url}/rss.xml`,
  },
 };

 const feed = new Feed(feedOptions);

 allJobs.jobs.forEach((post) => {
  feed.addItem({
   title: post.name,
   id: `${site_url}/jobDetails/${post.id}/${post.name}`,
   link: `${site_url}/jobDetails/${post.id}/${post.name}`,
   description: post.shortDescription,
   date: new Date(),
  });
 });


 allPosts.ads.forEach((post) => {
    feed.addItem({
     title: post.name,
     id: `${site_url}/adDetailsPage/${post.id}/${post.name}`,
     link: `${site_url}/adDetailsPage/${post.id}/${post.name}`,
     description: post.shortDescription,
     date: new Date(),
    });
   });

   allfirstGroup.forEach((post) => {
    feed.addItem({
     title: post.name,
     link: `${post.link}`,
     date: new Date(),
    });
   });

   allbranchesApi.branches.forEach((post) => {
    feed.addItem({
     title: post.name,
     id: `${site_url}/page/${post.id}/${post.name}`,
     link: `${site_url}/page/${post.id}/${post.name}`,
     description: post.shortDescription,
     date: new Date(),
    });
   });

   allCatApi.forEach((post) => {
    feed.addItem({
     title: post.name,
     id: `${site_url}/cat/${post.id}/${post.name}`,
     link: `${site_url}/cat/${post.id}/${post.name}`,
     description: post.name,
     date: new Date(),
    });
   });

 fs.writeFileSync('./public/rss.xml', feed.rss2());
}