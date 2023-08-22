import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { useNavigate } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import  Link  from "next/link";
import { useRouter } from 'next/router';

import styles from "../styles/Home.module.scss";
import Head from "next/head";
const Header = ({ Categories }) => {
  const [sourceLoaded, setSourceLoaded] = useState(null);

  useEffect(()=>{
    setSourceLoaded("https://dalil.deltawy.com/javax.faces.resource/main-back.jpg.html?ln=imgs");
  },[])

  const settings = {
    cssEase: "linear",
    dots: false,
    // swipeToSlide: true,
    infinite: true,
    // lazyLoad: true,
    speed: 1000,
    slidesToShow: 7,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    rtl: true,
    arrows: false,
    autoplaySpeed: 2000,
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

  // const CategoriesSlick =
  //   Categories?.length > 0 &&
  //   Categories?.map((ele, idx) => {
  //     const pathname = ele.name.replace(/-/gi, "-");
  //     const router = useRouter();
  //     return (
  //       <div key={idx}>
  //         <div className={styles.slick_Container}>
  //         <Link href={`/subGategories?id=${ele.id}`} key={idx} as={`/cat/${ele.id}/${pathname}`}>
  //           <div
  //             className={`${styles.img_skick} ${styles.loading_circel}`}
  //             // onClick={() => router.push(`/subGategories?id=${ele.id}/${ele.name}`)}
  //           >
              
  //             <LazyLoadImage
  //               effect="blur"
  //               src={`https://dalil.deltawy.com/images?id=${ele.image}&type=tab`}
  //               alt={`${ele.name}-categories`}
  //             />

  //           </div>
  //           <h3>{pathname}</h3>
  //           </Link>
  //         </div>
  //       </div>
  //     );
  //   });

  return (
    <header className={styles.header_container}>

{
  Categories?.length > 0 &&
  Categories?.map((ele, idx) => {
    return (
        <Head key={idx}>
              {/* <title>{ele.name}</title> */}
              <meta          name="description"          content={ele.shortDescription?.slice(0, 160)}
              />
              <meta itemprop="name" content={ele.name} />
              <meta          itemprop="description"          content={ele.shortDescription?.slice(0, 160)}
              />
              <meta          itemprop="image"          content={`https://dalil.deltawy.com/images?id=${ele.image}&type=tab`}
              />
      
             
              <meta property="og:type" content="Article" />
              <meta property="og:title" content={ele.name} />
              <meta          property="og:description"          content={ele.shortDescription?.slice(0, 160)}        />
              <meta          property="og:image"          content={`https://dalil.deltawy.com/images?id=${ele.image}&type=tab`}        />
      
              <meta name="twitter:card" content="summary_large_image" />
              <meta name="twitter:title" content={ele.name} />
              <meta          name="twitter:description"          content={ele.shortDescription?.slice(0, 160)}        />
              <meta          name="twitter:image"          content={`https://dalil.deltawy.com/images?id=${ele.image}&type=tab`}        />
              <link rel="icon" type="image/x-icon" href={`https://dalil.deltawy.com/images?id=${ele.image}&type=tab`} />
            </Head>
    )
  })
}

    {sourceLoaded ? (
      <div
        className={styles.img_container}
        style={{ backgroundImage: `url(${sourceLoaded})` }}
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
              {/* <Slider {...settings}>{CategoriesSlick}</Slider> */}
            </div>
          </Container>
        </div>
      </div>
    ) : null}
  </header>
  );
};

export default Header;