import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  LazyLoadImage,
  LazyLoadComponent,
} from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import styles from  "../../styles/Home.module.scss";
import { getRightFrinds } from "../../pages/store/FriendsSlice";
import Link from "next/link";
import Script from "next/script";

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
    ? AllJobs.jobs?.map((ele, idx) => {
        const pathname = ele.name.replace(/\s/g, "-");
        return (
          <Link style={{borderBottom:' 1px solid #dee2e6', width:"100%" }}
            key={idx}
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
    ? fristGroupArray?.map((ele, idx) => {
        return (
          <Link target={"_blank"} href={`${ele.link}`} key={idx} rel="noreferrer" style={{ borderBottom:' 1px solid #dee2e6',  padding:"10px 0" , width:"100%" , fontWeight:"bold"}}>
           <p style={{fontSize:"13px"}}>{ele.name}</p> 
          </Link>
        );
      })
    : "null";
    
  return (
    <React.Fragment>
      {
        AllJobs
        ? AllJobs.jobs?.map((ele, idx) => {
            return (
              <Script key={idx} type="application/ld+json">
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
          <LazyLoadImage
            effect="blur"
            src={
              "https://dalil.deltawy.com/javax.faces.resource/deltawy.gif.html?ln=images"
            }
            alt="deltawy"
            onClick={() => {
              window.open("https://deltawy.com/", "_blank");
            }}
            className={styles.side_nave_img_delt}
          />
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

