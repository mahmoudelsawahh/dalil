  "use client"
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getClientDetails, addMoreViews } from "/store/Categories";
import dynamic from "next/dynamic";
import Image from "next/image";
import LazyLoad from "react-lazyload";
import {FaLocationArrow} from "react-icons/fa";
import whastappLogo from '/public/img/whatsapp (1).png'
import mobilePhone from '/public/img/phone-call.png'
import mailLogo from '/public/img/email.png'
import { Rating } from "primereact/rating";
import styles from  "/app/styles/Home.module.scss";
import Link from "next/link";
import { FloatingLabel, Form } from "react-bootstrap";
import { ImEye } from "react-icons/im";


const MatchBranchesContainer = dynamic(() => import('/app/Components/matchBranchesContainer.js'), {
  ssr : false
})
const Branche = dynamic(() => import('/app/Components/branche'), {
  ssr : false
})

 const SapesficCategory = ({params}) => {
  const [val1, setVal1] = useState(null);
  const  id  = params.id[0];
  const { ALLClientDetails } = useSelector((state) => state.categoriesMenu);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getClientDetails(parseInt(id)));
    dispatch(addMoreViews(parseInt(id)));
  }, [dispatch, id]);
 console.log(ALLClientDetails)
  return (
    <>
       {ALLClientDetails ? 
       <div style={{minHeight : '100vh'}}>
         <div style={{position : 'relative', width : '100%', height : '400px'}}>
        <Image src={`https://dalil.deltawy.com/images?id=${ALLClientDetails.cover}&type=tab`} alt={ALLClientDetails.name}
          layout="fill"
        priority={true}
        />
         </div>

          <div style={{alignItems : 'center', gap : '20px', padding : '30px 0px', padding : '50px 0px'}} className="d-flex flex-md-row flex-column">
                <LazyLoad height={"100%"} once>
                <div style={{boxShadow : '5px 5px 12px rgba(0,0,0,.15)', border : '5px solid #fff', width : '140px', height : '140px', borderRadius : '50%', overflow : 'hidden'}}>
                <Image src={`https://dalil.deltawy.com/images?id=${ALLClientDetails.logo}&type=tab`} alt={ALLClientDetails.name}
                  width={140}
                  height={140}
                  style={{borderRadius : '50%', transform : 'scaleX(-1)'}}
                  loading="lazy"
                />
                </div>
                </LazyLoad>
                  <div  className="text-center text-md-end">
                    <h1 style={{fontSize : '28px', color : '#000', fontWeight : 'bold'}}>{ALLClientDetails.name}</h1>
                    <p style={{color : '#055c97', fontSize : '16px', fontWeight : 'bold', padding : '5px 0px'}}>
                    <FaLocationArrow /> {ALLClientDetails.address}
                    </p>
                      <div style={{marginLeft : '5px'}} className="d-flex justify-content-md-start justify-content-center">
                        <Link aria-label="social-media" style={{color : '#333', marginLeft : '20px'}}
                        title="social-media"
                        href={`tel:${ALLClientDetails.phone}`}
                          rel="noopener noreferrer"
                        >
                            <LazyLoad height={"100%"} once>
                               <Image src={whastappLogo} alt="whastapp" width={32} height={32} loading="lazy"/>
                            </LazyLoad>
                        </Link>
                        <Link aria-label="social-media" style={{color : '#333', marginLeft : '20px'}}
                        title="social-media"
                        href={`tel:${ALLClientDetails.phone}`}
                          rel="noopener noreferrer"
                        >
                               <LazyLoad height={"100%"} once>
                                  <Image src={mobilePhone} alt="whastapp" width={32} height={32} loading="lazy"/>
                               </LazyLoad>
                        </Link>
                        <Link aria-label="social-media" style={{color : '#333', marginLeft : '20px'}}
                        title="social-media"
                        href={`tel:${ALLClientDetails.phone}`}
                          rel="noopener noreferrer"
                        >
                            <LazyLoad height={"100%"} once>
                              <Image src={mailLogo} alt="whastapp" width={32} height={32} loading="lazy"/>
                            </LazyLoad>
                        </Link>
                    
                    
                      </div>
            
                    <div>
                  </div>
                  </div>
                  
          </div>
           <div style={{color : '#fff', marginBottom : '50px'}}>
               <div className="card text-center">
                    <div className="card-header" style={{ backgroundColor : '#fff'}}>
                       <h1 style={{fontSize : '32px', color : '#055c97', textAlign : 'start'}}>الوصف</h1>
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">{ALLClientDetails.name}</h5>
                      <p className="card-text" style={{lineHeight : '50px', direction : 'ltr'}}>{ALLClientDetails.description}</p>
                    </div>
                    <div className="card-footer text-muted" style={{backgroundColor : '#fff'}}>
                        <div style={{marginLeft : '5px', display : 'flex', justifyContent : 'center'}}>
                            <Link aria-label="social-media" style={{color : '#333', marginLeft : '20px'}}
                            title="social-media"
                            href={`tel:${ALLClientDetails.phone}`}
                              rel="noopener noreferrer"
                            >
                                <LazyLoad height={"100%"} once>
                                  <Image src={whastappLogo} alt="whastapp" width={32} height={32} loading="lazy"/>
                                </LazyLoad>
                            </Link>
                            <Link aria-label="social-media" style={{color : '#333', marginLeft : '20px'}}
                            title="social-media"
                            href={`tel:${ALLClientDetails.phone}`}
                              rel="noopener noreferrer"
                            >
                                  <LazyLoad height={"100%"} once>
                                      <Image src={mobilePhone} alt="whastapp" width={32} height={32} loading="lazy"/>
                                  </LazyLoad>
                            </Link>
                            <Link aria-label="social-media" style={{color : '#333', marginLeft : '20px'}}
                            title="social-media"
                            href={`tel:${ALLClientDetails.phone}`}
                              rel="noopener noreferrer"
                            >
                                <LazyLoad height={"100%"} once>
                                  <Image src={mailLogo} alt="whastapp" width={32} height={32} loading="lazy"/>
                                </LazyLoad>
                            </Link>
                        
                        
                          </div>
                    </div>
              </div>
           </div>

           <div style={{color : '#fff', marginBottom : '50px'}}>
               <div className="card text-center">
               <div className="card-header" style={{ backgroundColor : '#fff'}}>
                       <h1 style={{fontSize : '32px', color : '#055c97', textAlign : 'start'}}>الخريطه</h1>
                    </div>
                    <div className="card-body">
                    <div >
                        <LazyLoad height={"100%"} once>
                          <Branche latt={ALLClientDetails} ></Branche>
                          </LazyLoad>
                      </div>
                  </div>
                   
              </div>
           </div>

         
         <div className="row" style={{marginBottom : '50px'}}>
          <div className="col-12 col-md-8">
          <LazyLoad height={"100%"} once>
          <div className={styles.servises} >
              <h3>الخدمات المتاحة</h3>
            </div>
            <div className={styles.servises}>
              <h3> فيديو</h3>
            </div>
            <LazyLoad height={'100%'} once>
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
            </LazyLoad>
            <LazyLoad height={"100%"} once>
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
            </LazyLoad>
          </LazyLoad>
          </div>
          <div className="col-12 col-md-4">
          <LazyLoad height={"100%"} once>
                <div  className={styles.Facebook_iframe_container}>
                  <h2 className="text-center" >تابعنا علي صفحتنا </h2>
                    <LazyLoad height={"100%"} once>
                    <iframe
                    src={`https://www.facebook.com/plugins/page.php?href=${ALLClientDetails.face}%2Ffacebook&tabs=timeline&width=300&height=600&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId`}
                    style={{ width: "300px", height: "500px" }}
                    scrolling="no"
                    frameBorderr="0"
                    allowFullScreen={true}
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    title="Facebook"
                    loading="lazy"
                  />
                    </LazyLoad>
                </div>
                <div style={{padding : '0px 20px'}}  className={styles.Views_section}>
                  <h3>عدد المشاهدات</h3>
                  <ImEye />
                  <p>{ALLClientDetails.views}</p>
                </div>
              </LazyLoad>
          </div>
         </div>
       </div>
       : 
       <div style={{height : '100vh'}}></div>
       }
       <LazyLoad height={"100%"} once>
        <MatchBranchesContainer id={id} />
     </LazyLoad>
    </>
  );
};
export default SapesficCategory;

 
