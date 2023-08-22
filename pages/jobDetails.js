import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getJobDetails } from "../store/JobsSlice";
import { useParams } from "react-router-dom";
import { FaPhone, FaFacebookF } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import styles from  "../styles/Home.module.scss";
import  Link  from "next/link";
import Image from "next/image";
import SplashScreen from "./SplashScreen";
import { useRouter } from 'next/router';
import Head from 'next/head'
import { LazyLoadImage } from "react-lazy-load-image-component";
const JobDetails = () => {
  const router = useRouter();
  const { id } = router.query;
    const dispatch = useDispatch();
    
  const { jobDetails, isLoadingJobs } = useSelector((state) => state.JobSlice);
  useEffect(() => {
    dispatch(getJobDetails(parseInt(id)));
  }, [dispatch, id]);
  const FinalData =
    Object.keys(jobDetails).length > 0 ? (
      
      <div>
        <Head>
          <title>{jobDetails.job.name}</title>
        </Head>
        <h2 className="text-center">{jobDetails.job.name}</h2>
        <div className={styles.image_container}>
          <LazyLoadImage
            src={`https://dalil.deltawy.com/images?id=${jobDetails.job.image}&type=tab`}
            alt={jobDetails.job.name}
            loading="lazy"
            
          />
        </div>
        <h2  className={styles.discripe_tag}>الوصف</h2>
        <div   className={styles.job_info}>
          <p>{jobDetails.job.description}</p>
          <p>رقم تليفون التواصل</p>
          <p> {jobDetails.job.phone}</p>
          <div  className={styles.icons_section}>
            {jobDetails.job.phone.length > 0 && (
              <span>
                <Link
                  href={`tel:${jobDetails.job.phone}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaPhone />
                </Link>
              </span>
            )}
            {jobDetails.job.whats.length > 0 && (
              <span>
                <Link
                  href={`http://api.whatsapp.com/send?phone=${jobDetails.job.whats}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IoLogoWhatsapp />
                </Link>
              </span>
            )}
            {jobDetails.job.face.length > 0 && (
              <span>
                <Link
                  href={`${jobDetails.job.face}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF />
                </Link>
              </span>
            )}
          </div>
        </div>
      </div>
    ) : null;
  return (
    <div  className={styles.job_details}>
     { Object.keys(jobDetails).length > 0 ? (
      <div>
        
          
        <Head>
        
        <title>{jobDetails.job.name}</title>
                <meta          name="description"          content={jobDetails.job.description?.slice(0, 160)}
        />
        <meta itemprop="name" content={jobDetails.job.name} />
        <meta          itemprop="description"          content={jobDetails.job.description?.slice(0, 160)}
        />
        <meta          itemprop="image"          content={`https://dalil.deltawy.com/images?id=${jobDetails.job.image}&type=tab`}
        />

        {/* <!-- Facebook Meta Tags --> */}
        {/* <meta
          property="og:url"
          content="https://deltawycom.vercel.app/projects/accounting/%D8%A8%D8%B1%D9%86%D8%A7%D9%85%D8%AC-%D9%85%D8%AD%D8%A7%D8%B3%D8%A8%D9%8A"
        /> */}
        <meta property="og:type" content="Article" />
        <meta property="og:title" content={jobDetails.job.name} />
        <meta          property="og:description"          content={jobDetails.job.description?.slice(0, 160)}        />
        <meta          property="og:image"          content={`https://dalil.deltawy.com/images?id=${jobDetails.job.image}&type=tab`}        />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={jobDetails.job.name} />
        <meta          name="twitter:description"          content={jobDetails.job.description?.slice(0, 160)}        />
        <meta          name="twitter:image"          content={`https://dalil.deltawy.com/images?id=${jobDetails.job.image}&type=tab`}        />
        <link rel="icon" type="image/x-icon" href={`https://dalil.deltawy.com/images?id=${jobDetails.job.image}&type=tab`} />

        
      </Head>        
      </div>
    ) : null 
    }
      {isLoadingJobs && <SplashScreen />}
      {FinalData}
    </div>
  );
};

export default JobDetails;
