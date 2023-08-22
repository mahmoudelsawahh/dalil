import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Offcanvas from "react-bootstrap/Offcanvas";
import { RiMenu4Line } from "react-icons/ri";
import { GoPerson } from "react-icons/go";
import logo from "../public/img/logo.svg";
import Image from "next/image";
const ControlPanal = () => {
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

    const navLinkStyles = ({ isActive }) => {
      return {
        fontWeight: isActive ? "700" : "normal",
        color: isActive ? "#253b70" : "#000",
        fontSize: isActive ? "22px" : "20px",
      };
    };

    return (
      <>
        <button
          onClick={toggleShow}
          className="me-2 mobileButton"
          name="navbar2"
          type="button"
        >
          <RiMenu4Line className="mobileIcon" />
        </button>
        <Offcanvas
          className="control-nav"
          show={show}
          onHide={handleClose}
          {...props}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>القائمة</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <div className="Links-nav-container ">
              {/* <NavLink style={navLinkStyles} to={"/"}>
                <div className="logo">
                  <LazyLoadImage
                    effect="blur"
                    src={"https://deltawy.com/images/logo.svg"}
                    alt="logo"
                    width={"100%"}
                    height="auto"
                  />
                </div>
              </NavLink> */}
              <NavLink style={navLinkStyles} to={"/"}>
                الرئيسية
              </NavLink>
              <NavLink style={navLinkStyles} to={"/jobs"}>
                الوظائف
              </NavLink>
              <NavLink style={navLinkStyles} to={"/ads"}>
                الاعلانات
              </NavLink>
              <NavLink style={navLinkStyles} to={"/privacy"}>
                سياسة الخصوصية
              </NavLink>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  }
  return (
    <>
      <div class="container-fluid NavBar controlPanal-nav">
        <div class="row justify-content-between align-items-center">
          <div class="d-none d-md-block col-md-2 col-lg-1 order-sm-0 order-lg-0 ordd">
            <div class="NavImage">
              <Image src={logo} alt="test" />
            </div>
          </div>
          <div class="col-sm-3 d-sm-block d-md-none slideNav">
            {
              options?.map((props, id) => (
              <OffCanvasExample key={id} placement={"end"} {...props} />
            ))
            }
          </div>
          <div class=" col-md-12 col-lg-9 order-sm-2 order-lg-1 d-none d-md-block linkCont">
            <div class="container-fluid">
              <div class="row ">
                <div class="col-md-12">
                  <div class="Invoices Heading">
                    <i class="fas fa-chart-line"></i>
                    <h3>الاعدادات</h3>
                    <i class="fas fa-chevron-left"></i>
                    <div class="Links">
                      <NavLink to="/">test</NavLink>
                      <NavLink to="/">test</NavLink>
                      <NavLink to="/">test</NavLink>
                      <NavLink to="/">test</NavLink>
                      <NavLink to="/">test</NavLink>
                      <NavLink to="/">test</NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class=" AdminNav col-sm-6 col-md-4 col-lg-2 order-sm-1 order-lg-2">
            <div class="container-fluid">
              <div class="row">
                <div class="col-6 ">
                  <div class="AdminPrice">
                    <h3>
                      814181 <span>$</span>
                    </h3>
                  </div>
                </div>
                <div class="col-6 text-center ">
                  <div className="login-section">
                    <GoPerson />
                  </div>
                  <div class="AmdinInfo">
                    {/* <i class="fas fa-user"></i> */}
                    <div class="AdminControl">
                      <div>
                        <GoPerson />
                        <NavLink to="/">test</NavLink>
                      </div>
                      <div>
                        <GoPerson />
                        <NavLink to="/">test</NavLink>
                      </div>
                      <div>
                        <GoPerson />
                        <NavLink to="/">test</NavLink>
                      </div>
                      <div>
                        <GoPerson />
                        <NavLink to="/">test</NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ControlPanal;
