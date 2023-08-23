"use client"
import React, {  useEffect } from "react";
import {
  LazyLoadImage,
  LazyLoadComponent,
} from "react-lazy-load-image-component";
import styles from "/app/styles/Home.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { getLastBranches } from "/store/Categories";
import  Link  from "next/link";
import Head from "next/head";
import LastBranches from "./LastBranches";
import HandelLastBranch from "./HandelLastBranch";
import LastViewsSlick from "./LastViewsSlick";
import DirectoryItems from "./DirectoryItems";
const Home = () => {
  const { AllCategories } = useSelector((state) => state.categoriesMenu);
  const CategoriesColumn =
  AllCategories?.length > 0
      ? AllCategories?.map((ele, id) => {
          const pathname = ele.name.replace(/-/g, " ");
          return (
              <div className={styles.card_image_rad} key={id}>
                 <Link href={`/cat/${ele.id}/${ele.name}`} key={id} as={`/cat/${ele.id}/${ele.name}`}>

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
            AllCategories?.length > 0
            ? AllCategories?.map((ele, id) => {
                const pathname = ele.name.replace(/-/g, " ");
                return (
                  <head key={id}>
                  <title> دليل المحلة و الدلتا الشامل على الانترنت</title>
                  <meta name="description" content={ele.shortDescription?.slice(0, 160)}
                  />
                  <meta itemprop="name" content={ele.name} />
                  <meta itemprop="description" content={ele.shortDescription?.slice(0, 160)}
                  />
                  <meta itemprop="image" content={`https://dalil.deltawy.com/images?id=${ele.image}&type=tab`}
                  />
          
                 
                  <meta property="og:type" content="Article" />
                  <meta property="og:title" content={ele.name} />
                  <meta property="og:description" content={ele.shortDescription?.slice(0, 160)}        />
                  <meta property="og:image" content={`https://dalil.deltawy.com/images?id=${ele.image}&type=tab`} />
          
                  <meta name="twitter:card" content="summary_large_image" />
                  <meta name="twitter:title" content={ele.name} />
                  <meta name="twitter:description" content={ele.shortDescription?.slice(0, 160)}        />
                  <meta name="twitter:image" content={`https://dalil.deltawy.com/images?id=${ele.image}&type=tab`}        />
                  <link rel="icon" type="image/x-icon" href={`https://dalil.deltawy.com/images?id=${ele.image}&type=tab`} />
          
                  
                </head> 
                  
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
            <DirectoryItems Categories={AllCategories} />
          </LazyLoadComponent>
        </section>
      </div>
    </React.Fragment>
    
    </div>
   
  );
};

export default Home;
