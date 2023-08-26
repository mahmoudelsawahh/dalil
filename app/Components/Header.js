"use client"
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Container } from "react-bootstrap";
import styles from "../styles/Home.module.scss";
import { useRouter } from "next/navigation";
import Image from "next/image";
import mainBg from '/public/img/download.webp'
import { useEffect, useState } from "react";
import { Autoplay } from 'swiper';
const Header = () => {
  const [Categories , setCategories] = useState(null)

  useEffect(() => {
    fetch(`https://dalil.deltawy.com/rest/test.category/cats`,{
    })
      .then((res) => res.json())
      .then((data) => {
        setCategories(data)
      })
  }, [])

  const router = useRouter()

  const CategoriesSlick =
    Categories?.length > 0 &&
    Categories?.map((ele, id) => {
      const pathname = ele.name.replace(/-/gi, "-");
      return (
        <SwiperSlide key={id}>
          <div className={styles.slick_Container}>
          <div onClick={()=> router.push(`/cat/${ele.id}/${pathname}`)} style={{cursor : 'pointer'}}>
            <div
              className={`${styles.img_skick} ${styles.loading_circel}`} style={{textAlign : 'center', display : 'flex', justifyContent : 'center'}}>
              <Image
                src={`https://dalil.deltawy.com/images?id=${ele.image}&type=tab`}
                alt={`${ele.name}-categories`}
                loading="lazy"
                width={80}
                height={80}
              />
            </div>
            <h3>{pathname}</h3>
            </div>
          </div>
        </SwiperSlide>
      );
    });


  return (
    <header className={styles.header_container}>


      <div
        className={`${styles.img_container} headerResponsive`} 
        // style={{ backgroundImage: `url(${loaded})` }}
      >
        <Image src={mainBg} alt="deltawy" layout="fill" objectFit="cover" priority/>
        <div className={styles.Header_content}>
          <div className={styles.text_contet}>
            <div className={styles.warpper}>
              <h1 className={styles.static_text}>ابحث عن اقرب </h1>
              <ul className={styles.dynamic_text}>
                <li>
                  <span data-text="مطاعم">مطاعم</span>
                </li>
                <li>
                  <span data-text="فنادق">فنادق</span>
                </li>
                <li>
                  <span data-text="محلات">محلات</span>
                </li>
              </ul>
            </div>
            <p>ابحث في مدينتك</p>
            <p> تصفح دليل المحلة و الدلتا</p>
          </div>
            <Container>
              <div className={styles.header_slider}>
                <Swiper
                  slidesPerView={2}
                     autoplay={{
                      delay: 2500,
                      disableOnInteraction: false,
                    }}
                    breakpoints={{
                      640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                      },
                      768: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                      },
                      1024: {
                        slidesPerView: 5,
                        spaceBetween: 50,
                      },
                    }}
                    modules={[Autoplay]}
                    className="mySwiper"
                >{CategoriesSlick}</Swiper>
              </div>
            </Container>
        </div>
      </div>
    
  </header>
  );
};

export default Header;