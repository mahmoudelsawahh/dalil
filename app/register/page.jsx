"use client"
import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import logo from "/public/img/logo.svg";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Link from "next/link";
import Swal from "sweetalert2/dist/sweetalert2.js";
import { UserRegister } from "/store/auth";
import { useDispatch } from "react-redux";
import {
  LazyLoadImage,
  LazyLoadComponent,
} from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import styles from  "../styles/Home.module.scss";
const Register = () => {
  const [userName, setUserName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [genderType, setGenderType] = useState("1");
  const [jobType, setJobType] = useState("1");
  const dispatch = useDispatch();
  const SendData = () => {
    if (
      userName.length === 0 ||
      phone.length === 0 ||
      email.length === 0 ||
      password.length === 0
    ) {
      Swal.fire({
        position: "top-start",
        icon: "error",
        title: "يجب عليك ادخال جميع البيانات المطلوبة",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      const data = {
        name: userName,
        email: email,
        phone: phone,
        password: password,
        state: jobType,
        gender: genderType,
      };
      dispatch(UserRegister(data));
      // navigate("https://www.deltawy.net/user/index.html");
    }
  };

  return (
    <div>
      <LazyLoadComponent>
        <h2  className={styles.main_title} >انشاء حساب جديد</h2>
        <div    className={`${styles.Login_page} ${styles.register}`}>
          <Row style={{justifyContent:"space-around"}}>
            <Col className={styles.cloumn}  md={12}>
              <div  className={styles.logo_container}>
                <LazyLoadImage effect="blur" src={logo} alt="logo" />
              </div>
            </Col>
            <Col md={5} className={styles.cloumn} >
              <FloatingLabel controlId="floatingInput" label="اسم المستخدم ">
                <Form.Control
                  type="text"
                  placeholder="اسم المستخدم "
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </FloatingLabel>
            </Col>
            <Col md={5} className={styles.cloumn} >
              <FloatingLabel controlId="floatingInput" label="رقم التليفون ">
                <Form.Control
                  type="text"
                  placeholder="رقم التليفون "
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </FloatingLabel>
            </Col>
            <Col md={5} className={styles.cloumn} >
              <FloatingLabel controlId="floatingInput" label="ادخل ايميلك هنا ">
                <Form.Control
                  type="email"
                  placeholder="ادخل ايميلك هنا "
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </FloatingLabel>
            </Col>
            <Col md={5} className={styles.cloumn} >
              <FloatingLabel controlId="floatingInput" label="كلمة السر ">
                <Form.Control
                  type="password"
                  placeholder="كلمة السر "
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </FloatingLabel>
            </Col>
            <Col md={5} className={styles.cloumn} >
              {["radio"].map((type) => (
                <div key={`inline-${type}`} className={styles.type_radio} >
                  <Form.Check
                    inline
                    label="ذكر"
                    name="ذكر"
                    type={type}
                    id={`inline-${type}-2`}
                    checked={genderType === "1"}
                    value={"1"}
                    onChange={(e) => setGenderType(e.target.value)}
                  />
                  <Form.Check
                    inline
                    label="انثي"
                    name="انثي"
                    type={type}
                    id={`inline-${type}-1`}
                    value={"0"}
                    checked={genderType === "0"}
                    onChange={(e) => setGenderType(e.target.value)}
                  />
                </div>
              ))}
            </Col>
            <Col md={5} className={styles.cloumn} >
              {["radio"].map((type) => (
                <div key={`inline-${type}`} className={styles.type_radio} >
                  <Form.Check
                    inline
                    label="فرد"
                    name="فرد"
                    type={type}
                    id={`inline-${type}-4`}
                    checked={jobType === "1"}
                    value={"1"}
                    onChange={(e) => setJobType(e.target.value)}
                  />
                  <Form.Check
                    inline
                    label="شركة"
                    name="شركة"
                    type={type}
                    id={`inline-${type}-3`}
                    value={"0"}
                    checked={jobType === "0"}
                    onChange={(e) => setJobType(e.target.value)}
                  />
                </div>
              ))}
            </Col>
            <Col md={5} className={styles.cloumn} >
              <button
                 className={styles.login_btn}
                name="registerpage"
                type="submit"
                onClick={() => SendData()}
              >
                تسجيل الدخول
              </button>
            </Col>
            <Col md={12}  className={styles.cloumn}>
              <Link
                href="/loginPage"
                style={{color: 'black',
                  textDecoration: 'none',
                  fontSize: '22px',
                  fontWeight: 'bold',
            }}
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              >
                هل لديك <span style={{color: '#055c97', fontSize: '24px', fontWeight: 'bold',
            }}>حساب ؟</span>
              </Link>
            </Col>
          </Row>
        </div>
      </LazyLoadComponent>
    </div>
  );
};

export default Register;

      