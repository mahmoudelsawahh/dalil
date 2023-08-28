// import generateRssFeed from '@/lib/generateRssFeed';
import dynamic from 'next/dynamic'

const Home = dynamic(() => import('./Components/Home'), {
  ssr : false
})

const page = async() => {
  // await generateRssFeed();
  return (
    <>
      <Home/>
    </>
  )
}

export default page