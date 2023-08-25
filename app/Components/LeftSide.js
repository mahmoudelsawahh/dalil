/* eslint-disable @next/next/inline-script-id */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {LazyLoadComponent} from "react-lazy-load-image-component";
import styles from  "../styles/Home.module.scss";
import { getRightFrinds } from "../../store/FriendsSlice";
import Link from "next/link";
import Script from "next/script";
import Image from 'next/image';
import deltawyBanner from '/public/img/deltawy.gif.gif'
const RightSide = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  const dispatch = useDispatch();
  const  { AllJobs }  = useSelector((state) => state.JobSlice);
  const fristGroupArray = useSelector((state) => state.FriendsSlice.fristGroupArray);
    const SideJobs = AllJobs
    ? AllJobs.jobs?.map((ele, id) => {
        const pathname = ele.name.replace(/\s/g, "-");
        return (
          <Link style={{borderBottom:' 1px solid #dee2e6', width:"100%" }}
            key={id}
            href={`/jobDetails?id=${ele.id}/${pathname}`} as={`/jobDetails/${ele.id}/${pathname}`}
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            <p className={styles.pp}>{ele.name}</p>
          </Link>
        );
      })
    : null;

  useEffect(() => {
    dispatch(getRightFrinds());
  }, [dispatch]);

  const FriendsData = fristGroupArray
    ? fristGroupArray?.map((ele, id) => {
        return (
          <Link target={"_blank"} href={`${ele.link}`} key={id} rel="noreferrer" style={{ borderBottom:' 1px solid #dee2e6',  padding:"10px 0" , width:"100%" , fontWeight:"bold"}}>
           <p style={{fontSize:"13px"}}>{ele.name}</p> 
          </Link>
        );
      })
    : "null";
    
  return (
    <React.Fragment>
      {
        AllJobs
        ? AllJobs.jobs?.map((ele, id) => {
            return (
              <Script key={id} type="application/ld+json">
              {JSON.stringify({
               
               "@context": "https://schema.org",
               "@type": "JobPosting",
               "baseSalary": "",
               "jobBenefits": "Medical, Life, Dental",
               "datePosted": `${date.toLocaleDateString()}`,
               "description": `${ele.shortDescription  }`,
               "employmentType": "Full-time",
               "title":`${ele.name}`
               
              })}
            </Script>
               
            );
          })
        : null
      }
      
      <aside className={styles.side_nave}>
        <div  className={styles.side_nave_img_delt}>
        <LazyLoadComponent>
          <Image
              src={deltawyBanner}
              alt="deltawy"
              onClick={() => {
                window.open("https://deltawy.com/", "_blank");
              }}
              loading='lazy'
              className={styles.side_nave_img_delt}
            />
        </LazyLoadComponent>
        </div>
        <div className={`${styles.display_fflex} ${styles.jobs_side}`}   >
          <h3 className={styles.hthree}>اخر الوظائف</h3>
          <div  className={styles.Links}>{SideJobs}</div>
        </div>

        <LazyLoadComponent>
         
          <div  className={`${styles.display_fflex} ${styles.friends}`}  >
            <h3 className={`${styles.display_friends} ${styles.friends}`} >مواقع صديقة</h3>
            <div   className={`${styles.display_links} ${styles.Links}`}  >
              
              
              {FriendsData}
               
            </div>
          </div>
        </LazyLoadComponent>
      </aside>
    </React.Fragment>
  );
};

export default RightSide;

