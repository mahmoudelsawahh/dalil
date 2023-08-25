"use client"
import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import { LazyLoadImage } from "react-lazy-load-image-component";
import  Link  from "next/link";
import styles from "../styles/Home.module.scss";
import { useRouter } from "next/router";
const Header = ({ Categories }) => {
  const router = useRouter()
  // const useProgressiveImage = (src) => {
  //   const [sourceLoaded, setSourceLoaded] = useState(null);
  //   useEffect(() => {
  //     const img = new Image();
  //     img.src = src;
  //     img.onload = () => setSourceLoaded(src);
  //   }, [src]);

  //   return sourceLoaded;
  // };

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
          {/* <Link href={`/subGategories?id=${ele.id}`} key={id} as={`/cat/${ele.id}/${pathname}`}> */}
            <div
              className={`${styles.img_skick} ${styles.loading_circel}`} key={id} onClick={()=> Router.push(`/cat/${ele.id}/${pathname}`)}>
              <LazyLoadImage
                effect="blur"
                src={`https://dalil.deltawy.com/images?id=${ele.image}&type=tab`}
                alt={`${ele.name}-categories`}
              />
            </div>
            <h3>{pathname}</h3>
            {/* </Link> */}
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