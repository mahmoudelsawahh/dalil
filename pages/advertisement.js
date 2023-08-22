import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllAds } from "../store/AdvertisementSlice";
import {
  LazyLoadImage,
  LazyLoadComponent,
} from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useNavigate } from "react-router-dom";
import styles from  "../styles/Home.module.scss";
import  Link  from "next/link";
import Head from "next/head";
const Advertisement = () => {
  const dispatch = useDispatch();
  const  { getAllAdsArray }  = useSelector((state) => state.Ads);
  
  useEffect(() => {
    dispatch(getAllAds());
  }, [dispatch]);
  const Finaldata = getAllAdsArray
    ? getAllAdsArray.ads?.map((ele, idx) => {

        const pathname = ele.name.replace(/\s/g, "-");

        return (
          <div
            className={styles.cards_container} 
            style={{gap:"1rem"}}
            key={idx}
          >
            <Link key={idx} href={`/adDetailsPage?id=${ele.id}/${pathname}`} as={`/adDetailsPage/${ele.id}/${pathname}`} >

            <div className={styles.image_container}  style={{ maxHeight: '200px', overflow: 'hidden'}}>
              <LazyLoadImage
                effect="blur"
                src={`https://dalil.deltawy.com/images?id=${ele.image}&type=tab`}
                alt={ele.name} width={200}
              />
            </div>
            </Link>
            <Link key={idx} href={`/adDetailsPage?id=${ele.id}/${pathname}`} as={`/adDetailsPage/${ele.id}/${pathname}`}>
            <div className={styles.Job_description} >
              <h3>{ele.name}</h3>
              <p>{ele.shortDescription.substring(0, 170)}{ele.shortDescription.length > 170 && "..."}</p>
            </div>
            </Link>
          </div>
        );
      })
    : null;
  return (
    <div className={styles.ads}>
      {
getAllAdsArray
? getAllAdsArray.ads?.map((ele, idx) => {

    return (
      <Head key={idx}>
              <title>{ele.name}</title>
              <meta          name="description"          content={ele.shortDescription.slice(0, 160)}
              />
              <meta itemprop="name" content={ele.name} />
              <meta          itemprop="description"          content={ele.shortDescription.slice(0, 160)}
              />
              <meta          itemprop="image"          content={`https://dalil.deltawy.com/images?id=${ele.image}&type=tab`}
              />
      
              {/* <!-- Facebook Meta Tags --> */}
              {/* <meta
                property="og:url"
                content="https://deltawycom.vercel.app/projects/accounting/%D8%A8%D8%B1%D9%86%D8%A7%D9%85%D8%AC-%D9%85%D8%AD%D8%A7%D8%B3%D8%A8%D9%8A"
              /> */}
              <meta property="og:type" content="Article" />
              <meta property="og:title" content={ele.name} />
              <meta          property="og:description"          content={ele.shortDescription.slice(0, 160)}        />
              <meta          property="og:image"          content={`https://dalil.deltawy.com/images?id=${ele.image}&type=tab`}        />
      
              {/* <!-- Twitter Meta Tags --> */}
              <meta name="twitter:card" content="summary_large_image" />
              <meta name="twitter:title" content={ele.name} />
              <meta          name="twitter:description"          content={ele.shortDescription.slice(0, 160)}        />
              <meta          name="twitter:image"          content={`https://dalil.deltawy.com/images?id=${ele.image}&type=tab`}        />
              <link rel="icon" type="image/x-icon" href={`https://dalil.deltawy.com/images?id=${ele.image}&type=tab`} />
      
              
            </Head> 
    );
  })
: null
      }
      
      <h2 className={styles.main_title} > الاعلانات</h2>
      <LazyLoadComponent>{Finaldata}</LazyLoadComponent>
    </div>
  );
};

export default Advertisement;
