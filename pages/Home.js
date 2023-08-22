import React, {  useEffect } from "react";
import {
  LazyLoadImage,
  LazyLoadComponent,
} from "react-lazy-load-image-component";
import styles from "../styles/Home.module.scss";
import DirectoryItems from "./DirectoryItems";
import LastViewsSlick from "./LastViewsSlick";
import HandelLastBranch from "./HandelLastBranch";
import { useDispatch } from "react-redux";
import { getLastBranches } from "../pages/store/Categories";
import  Link  from "next/link";
import Head from "next/head";
import LastBranches from "./LastBranches";
const Home = ({ Categories }) => {
  const CategoriesColumn =
    Categories?.length > 0
      ? Categories?.map((ele, idx) => {
          const pathname = ele.name.replace(/-/g, " ");
          return (
              <div className={styles.card_image_rad} key={idx}>
                 <Link href={`/subGategories?id=${ele.id}/${ele.name}`} key={idx} as={`/subGategories?id=/${ele.id}/${ele.name}`}>

                  <div className={styles.card_image}>

                    <LazyLoadImage
                      effect="blur"
                      src={`https://dalil.deltawy.com/images?id=${ele.image}&type=tab`}
                      alt={`${ele.name}-categories`}
                      width="360px"
                      height="250px"
                    />
                  </div>
                  <h4>{pathname}</h4>
                </Link>
              </div>
            
          );
        })
      : "loading....";
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getLastBranches());
  }, [dispatch]);

  return (
    <div>
        <React.Fragment>
          {
            Categories?.length > 0
            ? Categories?.map((ele, idx) => {
                const pathname = ele.name.replace(/-/g, " ");
                return (
                  <Head key={idx}>
                  <title> دليل المحلة و الدلتا الشامل على الانترنت</title>
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
                  
                );
              })
            : "loading...."
          }
      <div  style={{direction:'rtl'}}>    
        <LastBranches/>
        <section style={{textAlign:'center'}}>
          <h2 className={styles.main_title} >تصفح ادلة الدليل</h2>
          <LazyLoadComponent>
            <div className={styles.card_image_rad_flex}>{CategoriesColumn}</div>
          </LazyLoadComponent>
          <HandelLastBranch />
          <LastViewsSlick />
          <LazyLoadComponent>
            <DirectoryItems Categories={Categories} />
          </LazyLoadComponent>
        </section>
      </div>
    </React.Fragment>
    
    </div>
   
  );
};

export default Home;
