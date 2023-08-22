import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRouter } from 'next/router';
import  Link  from "next/link";
import { useSelector, useDispatch } from "react-redux";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import styles from  "../styles/Home.module.scss";
const SubGategoriesSlick = ({ Categories }) => {
  const { AllCategories } = useSelector((state) => state.categoriesMenu);

  const router = useRouter();
  const { id } = router.query;
  const slideNumber = Categories ? 
  Categories.filter((ele) => ele.id === parseInt(id)).map(
    (e) => {
      return e.catList.length;
    }
  )
  : ""
  const settings = {
    cssEase: "linear",
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: slideNumber[0] <= 4 ? 3 : 5,
    initialSlide: 3,
    slidesToScroll: 1,
    autoplay: true,
    ltr: true,
    arrows: false,
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
  const [fade, setFade] = useState("");
  
  const getFade = () => {
    setFade("fade-page");
    return setTimeout(() => {
      setFade("");
    }, 1000);
  };
  const subGateogry = Categories
  ? Categories?.filter((ele) => ele.id === parseInt(id)).map((el) => {
      return el.catList?.map((e, idx) => {
        const pathname = e.name.replace(/-/g, " ");
        return (
          <div key={idx}>

            <div
              className={styles.slick_Container}
              style={{ textAlign: "center" }}
            >
              <Link key={e.id} href={`/subGategories?id=${e.id}/${pathname}`} as={`/page/${e.id}/${e.name.replace(/\s+/g, '-')}`}>
                <section className={styles.img_skick}>
                  <div className={`${styles.img_skick} ${styles.loading_circel}`}>
                    <LazyLoadImage
                      effect="blur"
                      src={`https://dalil.deltawy.com/images?id=${e.image}&type=tab`}
                      alt={`${e.name}-categories`}
                      
                    />
                  </div>

                  <h3 className={styles.h3_margin_bold}>{pathname}</h3>
                </section>
              </Link>
            </div>
          </div>
        );
      });
    })
  : null;
  return (
    <React.Fragment>
      <div  className={`${styles.header_slider} ${styles.subCategirySlick}`}>
      {slideNumber[0] > 1 && <Slider {...settings}>{subGateogry}</Slider>}
    </div>
   
    </React.Fragment>
  );
};

export default SubGategoriesSlick;

