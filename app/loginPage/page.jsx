"use client"
import React, { useState } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { Col, Row } from "react-bootstrap";
import Swal from "sweetalert2/dist/sweetalert2.js";
import styles from  "/app/styles/Home.module.scss";
import { UserLogin } from "/store/auth";
import { useDispatch, useSelector } from "react-redux";
import {
  LazyLoadImage,
  LazyLoadComponent,
} from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import  Link  from "next/link";
import Image from "next/image";
import logoo from "/public/img/logo.png"

const LoginPage = () => {
  const dispatch = useDispatch();
  const [AddEmail, SetEmail] = useState("");
  const [AddPassword, SetPassword] = useState("");
  const login  = useSelector((state) => state.AuthSlice);

  const SendData = () => {
    if (AddEmail.length === 0 || AddPassword.length === 0) {
      Swal.fire({
        position: "top-start",
        icon: "error",
        title: "يجب عليك ادخال جميع البيانات المطلوبة",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      const clientLogin = {
        useName: AddEmail,
        password: AddPassword,
      };
      dispatch(UserLogin(clientLogin));
      if (login.Result === false) {
        Swal.fire({
          position: "top-start",
          icon: "error",
          title: "بيانات المستخد غير موجودة برجاء التأكد او انشاء حساب جديد",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        Swal.fire({
          position: "top-start",
          icon: "success",
          title: "تم تسجيل الدخول بنجاح",
          showConfirmButton: false,
          timer: 1500,
        });
        // navigate("/controlpanal");
        window.scrollTo({
          top: 0,
          left: 100,
          behavior: "instant",
        });
      }
    }
  };

  return (

 
       <LazyLoadComponent>
        <h2  className={styles.main_title} >تسجيل الدخول</h2>
        <div   className= {styles.Login_page} >
          <Row>
            <Col  md={12} className={styles.cloumn} >
              <div  className={styles.logo_container}>
              <Image
                 
                 src={logoo}
                 alt="logo"
                 style={{width:"100%",height:'100%', textAlign:"center" , }}
               />
              </div>
            </Col>
            <Col md={12} className={styles.cloumn}> 
              <FloatingLabel controlId="floatingInput" label="Enter username ">
                <Form.Control
                  type="text"
                  placeholder="Enter username"
                  value={AddEmail}
                  onChange={(e) => SetEmail(e.target.value)}
                />
              </FloatingLabel>
            </Col>

            <Col md={12} className={styles.cloumn}>
              <FloatingLabel controlId="floatingInput" label="Enter password  ">
                <Form.Control
                  type="text"
                  placeholder="Enter password "
                  value={AddPassword}
                  onChange={(e) => SetPassword(e.target.value)}
                />
              </FloatingLabel>
            </Col>
            <Col  md={12}  > 
              <button
                 className={styles.login_btn}
                name="loginpage"
                type="button"
                onClick={() => SendData()}
              >
                تسجيل الدخول
              </button>
            </Col>
            <Col  className={styles.cloumn} >
              <Link
                href="/register"
                 className={styles.go_to_register}
                onClick={() => window.scrollTo(0, 0)}
              >
                هل تريد انشاء <span>حساب جديد ؟</span>
              </Link>
            </Col>
          </Row>
        </div>
      </LazyLoadComponent>
    
  );
};

export default LoginPage;
