import React, { useState } from "react";
import {Col } from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";
import { RiMenu4Line } from "react-icons/ri";
import "react-lazy-load-image-component/src/effects/blur.css";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import logo from "/public/img/logo.png"
const options = [
  {
    scroll: true,
    backdrop: true,
  },
];

function OffCanvasExample({ ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);

  return (
    <div style={{display : 'flex', justifyContent :'space-between', alignItems : 'flex-start'}} className="mx-md-0 mx-2">
      <button
      className={styles.mobileButton}
        onClick={toggleShow}
        name="navbar"
        type="button"
        style={{margin:" 1rem 1rem  0 0"}}
      >
        <RiMenu4Line style={{fontSize:"1.5rem " , color:'#ffffff'}}  />
      </button>
      
      <Link  href="/" className="d-block d-md-none">
              <div  className={styles.logo}>
              <Image
              effect="blur"
              src={logo}
              alt="logo"
              width='100px'
              
              style={{width:'120px', height:"auto"}}
            />
              </div>
            </Link>


      <Offcanvas
        show={show}
        
        className={styles.dallel_canves}
        onHide={handleClose}
        {...props}
      >
        <Offcanvas.Header closeButton >
          <Offcanvas.Title>القائمة</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className={styles.Links_nav_container} style={{display: 'flex',
            gap: '1rem',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'}}>
            <Link  href="/" >
              <div className={styles.logo}>
              <Image
              effect="blur"
              src={logo}
              alt="logo"
              width='100px'
              style={{width:'150px', height:"auto"}}
              loading="lazy"
            />
              </div>
            </Link>
            <Link
              
              href="/"
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  left: 100,
                  behavior: "instant",
                });
                handleClose();
              }}
            >
              الرئيسية
            </Link>
            <Link
              
              href="/jobs"
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  left: 100,
                  behavior: "instant",
                });
                handleClose();
              }}
            >
              الوظائف
            </Link>
            <Link
              
              href="/advertisement"cfx 

              
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  left: 100,
                  behavior: "instant",
                });
                handleClose();
              }}
            >
              الاعلانات
            </Link>
            <Link
              
              href="/privacy"
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  left: 100,
                  behavior: "instant",
                });
                handleClose();
              }}
            >
              سياسة الخصوصية
            </Link>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}
const Navbar = () => {

  return (
    <nav className={styles.navbar_container  } >
      <Col xs={12} md={1}  >
          {options?.map((props, idx) => (
            <OffCanvasExample key={idx} placement={"end"} {...props} />
          ))}
      </Col>


      <section className={styles.nav_bar} >
    <div className={styles.mobile_reverse}>
          <Link href="/"
             className={styles.logo}
            onClick={() => {
              window.scrollTo({
                top: 0,
                left: 100,
                behavior: "instant",
              });
            }}
          >
            <Image
              effect="blur"
              src={logo}
              alt="logo"
             style={{width:'100px' , height:"auto" }}
              
            />
          </Link>
    </div>
    <div className={styles.mobile_reverse}>
        <div className={styles.Links_container }>
            <Link
              
              href="/"
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  left: 100,
                  behavior: "instant",
                });
              }}
            >
              الرئيسية
            </Link>
            <Link
              
              href="/jobs"
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  left: 100,
                  behavior: "instant",
                });
              }}
            >
              الوظائف
            </Link>
            <Link
              
              href="/advertisement"
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  left: 100,
                  behavior: "instant",
                });
              }}
            >
              الاعلانات
            </Link>
            <Link
              
              href="/privacy"
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  left: 100,
                  behavior: "instant",
                });
              }}
            >
              سياسة الخصوصية
            </Link>
          </div>
          </div>
        <div className={styles.buttonslogin }>
          <button
             className={`${styles.btn} ${styles.nav_btn}` }
            name="login"
            type="button"
            onClick={() => {
              window.scrollTo({
                top: 0,
                left: 100,
                behavior: "instant",
              });
              // }
            }}
          >
           <Link href='/loginPage'>أضافة للدليل</Link>         
        </button>
          <button
            name="add-dalel"
            type="button"
           className={`${styles.btn} ${styles.nav_btn}`}
 
            onClick={() => {
             
              window.scrollTo({
                top: 0,
                left: 100,
                behavior: "instant",
              });
            }}
          >
           <Link href='/loginPage'>أضافة للدليل</Link>      
          </button>
    </div>
      </section>
    </nav>
  );
};

export default Navbar;
