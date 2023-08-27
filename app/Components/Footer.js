import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { CgChevronDoubleLeft } from "react-icons/cg";
import {
  LazyLoadComponent,
} from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import styles from "../styles/Home.module.scss";
import  Link  from "next/link";
import  Image  from "next/image";
import logo from "/public/img/logo.png"
import googleImage from '/public/img/google-play.png'
import LazyLoad from "react-lazyload";
const Footer = () => {
  return (
    <React.Fragment>
      <footer className={styles.footer}>
        <Container>
          <Row className="text-center flex-column flex-md-row" style={{textAlign:'center'}}>
            <Col md={5} className={styles.column_footer}>
              <h3>عن الدليل</h3>
              <hr />
              <p>
                دليل المحلة الإلكتروني - هو دليل ومحرك بحث شامل للشركات وهو دليل
                صناعي وتجاري وخدمي يشمل كافة القطاعات والأشخاص المهنيين ، من
                مميزات الدليل: طريقة العرض والبحث حداثة ودقة بياناته في جميع
                المجالات يتميز بأنه مطور بتقنيات برمجية حديثة الدليل بالكامل
                مجاناً لمن يريد البحث عن أي شئ يتميز بقوة نتائجه في محركات البحث
                يتميز الدليل بالسرعة في أرشفة البيانات في محركات البحث العالمية
                الدليل إشهار ممتاز للشركات التجارية والقطاعات الخدمية والأشخاص
                أصحاب الأعمال
              </p>
            </Col>
            <Col className={styles.column_footer}>
              <h3>خريطة الموقع</h3>
              <hr />
              <ul>
              <li>
                  <Link href="/sitemap.xml">خريطة الموقع</Link>
                  <CgChevronDoubleLeft className={styles.footer_arrow_icon} />
                </li>
                <li>
                  <Link href="/">الرئيسية</Link>
                  <CgChevronDoubleLeft className={styles.footer_arrow_icon} />
                </li>
                <li>
                  <Link href="/">اضافة</Link>
                  <CgChevronDoubleLeft className={styles.footer_arrow_icon} />
                </li>
                <li>
                  
                  <Link href="/loginPage"> تسجيلا الدخول</Link>
                  <CgChevronDoubleLeft className={styles.footer_arrow_icon} />
                </li>
                <li>
                  
                  <Link href="/jobs">الوظائف</Link>
                  <CgChevronDoubleLeft className={styles.footer_arrow_icon} />
                </li>
                <li>
                  <Link href="/ads">الاعلانات</Link>
                  <CgChevronDoubleLeft className={styles.footer_arrow_icon} />
                </li>
              </ul>
            </Col>
            <Col className={styles.column_footer}>
              <h3>التواصل</h3>
              <hr />

              <ul>
                <li>
                  <Link
                    href={"https://www.facebook.com/DalilLmehalla"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    صفحة فيسبوك
                  </Link>
                  <CgChevronDoubleLeft className={styles.footer_arrow_icon} />
                </li>
                <li>
                  <Link
                    href={`tel:0106743982`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    0106743982
                  </Link>

                  <CgChevronDoubleLeft className={styles.footer_arrow_icon} />
                </li>
                <li>
                  <Link href={`mailto:info@deltawy.com`} rel="noopener noreferrer">
                    info@deltawy.com
                  </Link>
                  <CgChevronDoubleLeft className={styles.footer_arrow_icon} />
                </li>
                
              </ul>
            </Col>
            <Col className={styles.column_footer}>
              <h3>حمل التطبيق</h3>
              <hr />
              <ul className={styles.googleplay_container}>
                <li>
                  <div style={{width:"100%" , display : 'flex', justifyContent : 'center', alignItems : 'center'}}
                    onClick={() => {
                      window.open(
                        "https://play.google.com/store/apps/details?id=com.Deltawy.DeltawyNet",
                        "_blank"
                      );
                    }}
                  >
                    <LazyLoad height={"100%"} once>
                        <Image src={googleImage} alt="googleImage" width={140} loading="lazy"/>
                    </LazyLoad>
                  </div>
                </li>
              </ul>
            </Col>
          </Row>
          <LazyLoadComponent>
            <div className={styles.rights_container}>
              <h2 className="text-center">جميع الحقوق محفوظة لدي</h2>
              <div 
                className={styles.rights_logo}
              >
                <Link href={"https://deltawy.com/"} target="_blank">                
                <Image                 
                  src={logo}
                  alt="logo"
                  style={{width:"100%",height:'100px'}}
                />
                </Link>
              </div>
            </div>
          </LazyLoadComponent>
        </Container>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
