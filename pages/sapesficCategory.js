import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getClientDetails, addMoreViews } from "../store/Categories";
import Carousel from "react-bootstrap/Carousel";
import { FaPhone, FaFacebookF, FaPhoneAlt } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { IoLogoWhatsapp } from "react-icons/io";
import { BsTwitter } from "react-icons/bs";
import { ImEye } from "react-icons/im";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import {
  LazyLoadImage,
  LazyLoadComponent,
} from "react-lazy-load-image-component";
import { useRouter } from 'next/router';
import loading from "../public/img/loading.gif";
import { Rating } from "primereact/rating";
import MatchBranchesContainer from "./matchBranchesContainer";
import styles from  "../styles/Home.module.scss";
import Link from "next/link";
import Head from "next/head"  
import Script from "next/script"  

import Branche from "./branche"
 const SapesficCategory = (props) => {
  const [val1, setVal1] = useState(null);
  const router = useRouter();
  const { id } = router.query;
  const { ALLClientDetails } = useSelector((state) => state.categoriesMenu);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getClientDetails(parseInt(id)));
    dispatch(addMoreViews(parseInt(id)));
  }, [dispatch, id]);
  const imageCarousel = ALLClientDetails
    ? ALLClientDetails.imagesList?.map((ele, idx) => {
        return (
          <Carousel.Item
            key={idx}
            data-url={ele}
            src={`https://dalil.deltawy.com/images?id=${ele}&type=bran`}
            style={{
              backgroundImage: `url(
                https://dalil.deltawy.com/images?id=${ele}&type=bran
              )`,
            }}
          ></Carousel.Item>
        );
      })
    : null;

  const clientDescrip = ALLClientDetails ? (
    <div  className={styles.client_descrip}>
      <div className={styles.image_header}>
        <LazyLoadImage
          effect="blur"
          src={`https://dalil.deltawy.com/images?id=${ALLClientDetails.logo}&type=tab`}
          alt={ALLClientDetails.name}
          // placeholderSrc={process.env.PUBLIC_URL + loading}
        />
      </div>
      <h2>{ALLClientDetails.name}</h2>
      <div className={styles.clientinfo}>
        {/* <p className="description">{ALLClientDetails.description}</p> */}
        <p className={styles.address}>العنوان: {ALLClientDetails.address}</p>
        <p className={styles.address}>التليفون: {ALLClientDetails.phone}</p>
        <div className={styles.icons_section}>
          {ALLClientDetails.phone?.length > 0 ? (
            <span>
              <Link
                href={`tel:${ALLClientDetails.phone}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <FaPhone />
              </Link>
            </span>
          ) : null}

          {ALLClientDetails.email?.length > 0 ? (
            <span>
              <Link
                href={`mailto:${ALLClientDetails.email}`}
                rel="noopener noreferrer"
              >
                {" "}
                <GrMail />
              </Link>
            </span>
          ) : null}
          {ALLClientDetails.phone?.length > 0 ? (
            <span>
              <Link
                href={`http://api.whatsapp.com/send?phone=${ALLClientDetails.phone}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoLogoWhatsapp />
              </Link>
            </span>
          ) : null}
          {ALLClientDetails.face?.length > 0 ? (
            <span>
              <Link
                href={`${ALLClientDetails.face}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF />
              </Link>
            </span>
          ) : null}
          {ALLClientDetails.twitter?.length > 0 ? (
            <span>
              <Link
                href={`${ALLClientDetails.twitter}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsTwitter />
              </Link>
            </span>
          ) : null}
        </div>
      </div>
    </div>
  ) : null;

  const ImageHeader = ALLClientDetails ? (
    <LazyLoadImage
      effect="blur"
      src={`https://dalil.deltawy.com/images?id=${ALLClientDetails.cover}&type=tab`}
      alt={ALLClientDetails.name}
      placeholderSrc={process.env.PUBLIC_URL + loading}
    />
  ) : null;
  return (
    <div className={styles.ClientPage}>
      {ALLClientDetails ? (
               <Script type="application/ld+json">
               {JSON.stringify({
                 "@context": `${ALLClientDetails.url}`,
                 "@type": "Place",
                 "geo": {
                   "@type": "GeoCoordinates",
                   "latitude": `${ALLClientDetails.lat}`,
                   "longitude": `${ALLClientDetails.lng}`
                 },
                 "name": `${ALLClientDetails.name}`,
                 "description":`${ALLClientDetails.description}`,
                 "telephone": `${ALLClientDetails.phone}`,
                  "address": {
                      "@type": "PostalAddress",
                      "addressLocality": `${ALLClientDetails.address}`
                    },
               })}
             </Script>
            ) : null}
            
     {ALLClientDetails ? (
             

      <Head>
        
        <title>{ALLClientDetails.name}</title>
        <meta          name="description"          content={ALLClientDetails.description.slice(0, 160)}
        />
        <meta itemprop="name" content={ALLClientDetails.name} />
        <meta          itemprop="description"          content={ALLClientDetails.description.slice(0, 160)}
        />
        <meta          itemprop="image"          content={`https://dalil.deltawy.com/images?id=${ALLClientDetails.cover}&type=tab`}
        />

        {/* <!-- Facebook Meta Tags --> */}
        {/* <meta
          property="og:url"
          content="https://deltawycom.vercel.app/projects/accounting/%D8%A8%D8%B1%D9%86%D8%A7%D9%85%D8%AC-%D9%85%D8%AD%D8%A7%D8%B3%D8%A8%D9%8A"
        /> */}
        <meta property="og:type" content="Article" />
        <meta property="og:title" content={ALLClientDetails.name} />
        <meta          property="og:description"          content={ALLClientDetails.description.slice(0, 160)}        />
        <meta          property="og:image"          content={`https://dalil.deltawy.com/images?id=${ALLClientDetails.cover}&type=tab`}        />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={ALLClientDetails.name} />
        <meta          name="twitter:description"          content={ALLClientDetails.description.slice(0, 160)}        />
        <meta          name="twitter:image"          content={`https://dalil.deltawy.com/images?id=${ALLClientDetails.cover}&type=tab`}        />
        <link rel="icon" type="image/x-icon" href={`https://dalil.deltawy.com/images?id=${ALLClientDetails.cover}&type=tab`} />

        
      </Head>
      ) : null}
      <div  className={styles.image_header}>{ImageHeader}</div>
      <div  className={styles.client_content_container}>
        <div  className={styles.grid_section}>
          <div  className={styles.section_right}>
            {clientDescrip}
            <div  className={styles.ImageList_container}>
              {" "}
              <LazyLoadComponent>
                <Carousel fade>{imageCarousel}</Carousel>
              </LazyLoadComponent>
            </div>
            {ALLClientDetails ? (
              <LazyLoadComponent>
                <div  className={styles.detials_container} >
                  <h2>{ALLClientDetails.name}</h2>
                  <p>{ALLClientDetails.description}</p>
                  <div  className={styles.icons_section}>
                    {ALLClientDetails.phone?.length > 0 ? (
                      <span>
                        <Link
                          href={`http://api.whatsapp.com/send?phone=${ALLClientDetails.phone}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <IoLogoWhatsapp />
                        </Link>
                      </span>
                    ) : null}
                    {ALLClientDetails.email?.length > 0 ? (
                      <span>
                        <Link
                          href={`mailto:${ALLClientDetails.email}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {" "}
                          <GrMail />
                        </Link>
                      </span>
                    ) : null}
                    {ALLClientDetails.phone?.length > 0 ? (
                      <span>
                        <Link
                          href={`tel:${ALLClientDetails.phone}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {ALLClientDetails?.phone} <FaPhoneAlt />
                        </Link>
                      </span>
                    ) : null}
                  </div>
                </div>
              </LazyLoadComponent>
            ) : null}
            <div className={styles.servises} >
              <h3>الخدمات المتاحة</h3>
            </div>
            <div className={styles.servises}>
              <h3> فيديو</h3>
            </div>
            <LazyLoadComponent>
              <div className={styles.servises}>
                <h3> التقييمات </h3>
                <div className={styles.rating_section}>
                  <h1>0</h1>
                  <div className={styles.reating_left}>
                    <div className={styles.Ratings}>
                      <span className={styles.number}>0</span>
                      <span className={styles.space}></span>
                      <div className={styles.stars} >
                        <Rating value={5} readOnly cancel={false} style={{display:"flex" , flexDirection:'row' }}></Rating>
                      </div>
                    </div>
                    <div className={styles.Ratings}>
                      <span className={styles.number}>0</span>
                      <span className={styles.space}></span>
                      <div className={styles.stars}>
                        <Rating value={4} readOnly cancel={false} style={{display:"flex" , flexDirection:'row'}}></Rating>
                      </div>
                    </div>
                    <div className={styles.Ratings}>
                      <span className={styles.number}>0</span>
                      <span className={styles.space}></span>
                      <div className={styles.stars}>
                        <Rating value={3} readOnly cancel={false} style={{display:"flex" , flexDirection:'row'}}></Rating>
                      </div>
                    </div>
                    <div className={styles.Ratings}>
                      <span className={styles.number}>0</span>
                      <span className={styles.space}></span>
                      <div className={styles.stars}>
                        <Rating value={2} readOnly cancel={false} style={{display:"flex" , flexDirection:'row'}}></Rating>
                      </div>
                    </div>
                    <div className={styles.Ratings}>
                      <span className={styles.number}>0</span>
                      <span className={styles.space}></span>
                      <div className={styles.stars}>
                        <Rating value={1} readOnly cancel={false} style={{display:"flex" , flexDirection:'row'}}></Rating>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </LazyLoadComponent>
            <LazyLoadComponent>
              <div className={styles.comment_section}>
                <div className={`${styles.stars} ${styles.comment_stars}`}>
                  <Rating value={val1} onChange={(e) => setVal1(e.value)} style={{display:"flex" , flexDirection:'row', color: '#FFDD66' ,gap:'.4rem'}}/>
                </div>
                <h5>التقيم</h5>
                <FloatingLabel controlId="floatingTextarea2" label="التعليق">
                  <Form.Control
                    as="textarea"
                    placeholder="التعليق"
                    style={{ height: "200px" }}
                  />
                </FloatingLabel>
              </div>
            </LazyLoadComponent>
          </div>
          <div  className={styles.section_left}>
            <div  className={styles.test}>
              <LazyLoadComponent>
                <Branche latt={ALLClientDetails} ></Branche>
                </LazyLoadComponent>
            </div>
            {ALLClientDetails ? (
              <LazyLoadComponent>
                <div  className={styles.Facebook_iframe_container}>
                  <h2 className="text-center" >تابعنا علي صفحتنا </h2>
                  <iframe
                    src={`https://www.facebook.com/plugins/page.php?href=${ALLClientDetails.face}%2Ffacebook&tabs=timeline&width=300&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId`}
                    style={{ width: "300px", height: "500px" }}
                    scrolling="no"
                    frameBorder="0"
                    allowFullScreen={true}
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    title="Facebook"
                  />
                </div>
                <div  className={styles.Views_section}>
                  <h3>عدد المشاهدات</h3>
                  <ImEye />
                  <p>{ALLClientDetails.views}</p>
                </div>
              </LazyLoadComponent>
            ) : null}
          </div>
        </div>
      </div>
      <MatchBranchesContainer id={id} />
    </div>
  );
};
export default SapesficCategory;

 
