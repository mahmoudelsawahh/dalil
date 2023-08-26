"use client"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import styles from "../styles/Home.module.scss";
import { useRouter } from "next/navigation";
import Image from "next/image";
import mainBg from '/public/img/download.webp'
import { useEffect, useState } from "react";
import LazyLoad from "react-lazyload";
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
  const settings = {
    cssEase: "linear",
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 7,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    rtl: true,
    arrows: false,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const CategoriesSlick =
    Categories?.length > 0 &&
    Categories?.map((ele, id) => {
      const pathname = ele.name.replace(/-/gi, "-");
      return (
        <div key={id}>
          <div className={styles.slick_Container}>
          <div onClick={()=> router.push(`/cat/${ele.id}/${pathname}`)} style={{cursor : 'pointer'}}>
            <LazyLoad height={"100%"} once>
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
            </LazyLoad>
            <h3>{pathname}</h3>
            </div>
          </div>
        </div>
      );
    });


  return (
    <header className={styles.header_container}>


      <div
        className={styles.img_container}
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
                <Slider {...settings}>{CategoriesSlick}</Slider>
              </div>
            </Container>
        </div>
      </div>
    
  </header>
  );
};

export default Header;