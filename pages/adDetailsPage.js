import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAdDetails } from "./store/AdvertisementSlice";
import { FaPhone } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import styles from  "../styles/Home.module.scss";
import  Link  from "next/link";
import { useRouter } from 'next/router';
import Head from "next/head";
const AdDetailsPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { id } = router.query;
  const  {getAdDetailsArray}  = useSelector((state) => state.Ads);
  useEffect(() => {
    dispatch(getAdDetails(parseInt(id)));
  }, [dispatch, id]);    console.log(getAdDetailsArray)

  console.log("getAdDetailsArray", getAdDetailsArray)
  const FinalData = getAdDetailsArray ? (
    <div>
      <Head key={getAdDetailsArray.ad?.id}>
        
        <title>{getAdDetailsArray.ad?.name}</title>
        <meta          name="description"          content={getAdDetailsArray.ad?.shortDescription?.slice(0, 160)}
        />
        <meta itemprop="name" content={getAdDetailsArray.ad?.name} />
        <meta          itemprop="description"          content={getAdDetailsArray.ad?.shortDescription?.slice(0, 160)}
        />
        <meta          itemprop="image"          content={`https://dalil.deltawy.com/images?id=${getAdDetailsArray.ad?.image}&type=tab`}
        />

        {/* <!-- Facebook Meta Tags --> */}
        {/* <meta
          property="og:url"
          content="https://deltawycom.vercel.app/projects/accounting/%D8%A8%D8%B1%D9%86%D8%A7%D9%85%D8%AC-%D9%85%D8%AD%D8%A7%D8%B3%D8%A8%D9%8A"
        /> */}
        <meta property="og:type" content="Article" />
        <meta property="og:title" content={getAdDetailsArray.ad?.name} />
        <meta          property="og:description"          content={getAdDetailsArray.ad?.shortDescription?.slice(0, 160)}        />
        <meta          property="og:image"          content={`https://dalil.deltawy.com/images?id=${getAdDetailsArray.ad?.image}&type=tab`}        />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={getAdDetailsArray.ad?.name} />
        <meta          name="twitter:description"          content={getAdDetailsArray.shortDescription?.slice(0, 160)}        />
        <meta          name="twitter:image"          content={`https://dalil.deltawy.com/images?id=${getAdDetailsArray.ad?.image}&type=tab`}        />
        <link rel="icon" type="image/x-icon" href={`https://dalil.deltawy.com/images?id=${getAdDetailsArray.ad?.image}&type=tab`} />

        
      </Head>
      <h2  className={styles.ad_info_p}>{getAdDetailsArray.ad?.name}</h2>
      <div  style={{textAlign:"center", padding:"2rem 0" }} >
        <img
          src={`https://dalil.deltawy.com/images?id=${getAdDetailsArray.ad?.image}&type=tab`}
          loading="lazy"

        />
      </div>
      <h2  className={styles.discripe_tag} >الوصف</h2>
      <div   className={styles.ad_info } >
        <p>{getAdDetailsArray.ad?.description}</p>
        <p>رقم تليفون التواصل</p>
        <p> {getAdDetailsArray.ad?.phone}</p>
        <div   className={styles.icons_section}>
          {getAdDetailsArray.ad?.phone.length > 0 && (
            <span>
              <Link
                href={`tel:${getAdDetailsArray.ad.phone}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <FaPhone />
              </Link>
            </span>
          )}

          {getAdDetailsArray.ad.phone.length > 0 && (
            <span>
              <Link
                href={`http://api.whatsapp.com/send?phone=${getAdDetailsArray.ad.phone}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoLogoWhatsapp />
              </Link>
            </span>
          )}
        </div>
      </div>
    </div>
  ) : null;
  return <div className={styles.job_details} >{FinalData}</div>;
};

export default AdDetailsPage;
