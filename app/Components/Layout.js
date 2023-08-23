"use client"
import Meta from './Meta'
import React, { useEffect } from "react";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useRouter } from 'next/navigation';
import Footer from './Footer'
import NavBar from './NavBar'
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Header from './Header';
import LeftSide from './LeftSide';
import RightSide from './RightSide';
import Numbers from './Numbers';
import { getGatecories } from '@/store/Categories';
import { getAllAds } from '@/store/AdvertisementSlice';
import { getAllJobs } from '@/store/JobsSlice';
import SplashScreen from './SplashScreen';
const Layout = ({ children }) => {
  
  const dispatch = useDispatch();
  const { AllCategories, isLoading } = useSelector(
    (state) => state.categoriesMenu
  );
  const { isLoadingAds, getAllAdsArray } = useSelector((state) => state.Ads);
  useEffect(() => {
    dispatch(getGatecories());
    dispatch(getAllAds());
    dispatch(getAllJobs());
  }, [dispatch]);

  function ScrollToTop() {
    const router = useRouter();
    const { pathname } = router;
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
    return null;
  }
  return (
    <>
       {isLoading && <SplashScreen />}
      {isLoadingAds && <SplashScreen />}
      {isLoading && <ScrollToTop />}
      
    <NavBar/>
      
      
      <div >
       
      <Header Categories={AllCategories} />

      <Row style={{padding:' 15px 10px' , width:'100%'}} >
      <Col lg={2} md={12}>
      <LeftSide AllAds={getAllAdsArray} />
      </Col>
   
      <Col lg={8} md={12}  style={{padding:' 10px'}}>
      {children}
    </Col>
    <Col lg={2} md={12} > <RightSide/> </Col>
    </Row>
        
          <Numbers/>

          <Footer/>
          <style jsx global>
            {
              `

              @media (max-width: 1022px)
           .row {
                --bs-gutter-x: 0;
                --bs-gutter-y: 0;
                display: flex;
                flex-wrap: wrap;
               
            }
            .offcanvas-header .btn-close {
              display: none;
            
          }
          .offcanvas-header {
            display: flex;
            justify-content: center;
            border-bottom: 1px solid rgb(254 255 255 / 10%);
        }
        .offcanvas-body {
          padding: 0;
      }
       .btn-close {
    color: white !important;
    visibility: hidden;
  }
  .p-rating {
    display: flex;
    
}
.p-rating.p-readonly .p-rating-icon {
    margin: 0 5px;
    color: gray;
  }
  
  .p-rating .p-rating-icon.pi-star-fill {
    color: #FFDD66 !important;
  }
  .p-rating-item-active .p-rating-icon {
    color: #FFDD66 !important ;
  }
  .slick-dots li {
    color: black !important;
  }
              `
            }
          </style>
      </div>
      <Meta />
    </>
  )
}

export default Layout;
