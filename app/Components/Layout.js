"use client"
import dynamic from "next/dynamic";
import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import Header from "./Header";
import LazyLoad from "react-lazyload";
import { usePathname } from 'next/navigation';
import { useDispatch, useSelector } from "react-redux";
import { getGatecories } from "@/store/Categories";


const LeftSide = dynamic(() => import('./LeftSide'), {
  ssr : false
})
const RightSide = dynamic(() => import('./RightSide'), {
  ssr : false
})
const Numbers = dynamic(() => import('./Numbers'), {
  ssr : false
})
const Footer = dynamic(() => import('./Footer'), {
  ssr : false
})
const Layout = ({ children}) => {
  const dispatch = useDispatch();
  const getParam  = usePathname();
  const param = getParam.split('/')
  console.log(param)
  const { AllCategories, isLoading } = useSelector(
    (state) => state.categoriesMenu
  );
  useEffect(() => {
    dispatch(getGatecories());
  }, [dispatch]);

  return (
    <>      
      <div>
           {
            param[2] === "id" || param[1] === "sapesficCategory"? 
            null
            : <Header Categories={AllCategories}/>
           }
      <Row style={{padding:' 15px 10px' , width:'100%'}} >
      <Col lg={2} md={12}>
         <LazyLoad height={"100%"} once>
             <LeftSide />
         </LazyLoad>
      </Col>
      <Col lg={8} md={12} style={{padding:' 10px'}}>
       <LazyLoad height={"100%"} once>
       {children}
       </LazyLoad>
    </Col>
    <Col lg={2} md={12}>
       <LazyLoad height={"100%"} once>
           <RightSide/> 
       </LazyLoad>
     </Col>
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
    </>
  )
}

export default Layout;