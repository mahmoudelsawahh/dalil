import dynamic from 'next/dynamic'

const Home = dynamic(() => import('./Components/Home'), {
  ssr : false
})

const page = () => {
  return (
    <>
      <Home/>
    </>
  )
}

export default page