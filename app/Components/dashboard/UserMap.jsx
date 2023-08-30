"use client"
import LazyLoad from 'react-lazyload'

const UserMap = () => {
  return (
    <>
       <LazyLoad height={"100%"} once>
       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d218842.15030775036!2d31.27305930640307!3d31.01486372645808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f7a57f1a5967c1%3A0xadaa98780dc4c346!2sElmahalla%20elkobra!5e0!3m2!1sar!2seg!4v1693360375013!5m2!1sar!2seg" 
         allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" style={{width : '100%', height : '400px'}}></iframe>
       </LazyLoad>
       <button type="button" class="btn  w-100 p-2" 
       style={{backgroundColor : '#055c97', color : '#fff', fontWeight : 700 , fontSize : '18px'}}>تحديد موقعي على الخريطة  </button>
    </>
  )
}

export default UserMap