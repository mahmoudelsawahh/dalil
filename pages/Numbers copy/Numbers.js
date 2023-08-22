import React from "react";
import { Col, Row } from "react-bootstrap";
// import { BsFillPersonFill } from "react-icons/bs";
import { MdOutlineEmojiPeople, MdWork } from "react-icons/md";
import { RiPagesLine } from "react-icons/ri";
import { FcAdvertising } from "react-icons/fc";
import { IoIosPeople } from "react-icons/io";
import styles from  "../../styles/Home.module.scss";
const Numbers = () => {
  return (
    <div className={styles.Numbers} >
      <Row className={styles.text_center}>
        <Col sm={12} md={2}>
          <div className={styles.column_items}>
            <MdOutlineEmojiPeople className={styles.Icon_item} />
            <h5>عضو</h5>
            <h5>1112</h5>
          </div>
        </Col>
        <Col sm={12} md={2}>
          <div className={styles.column_items}>
            <RiPagesLine className={styles.Icon_item} />
            <h5>صفحة</h5>
            <h5>548</h5>
          </div>
        </Col>

        <Col sm={12} md={2}>
          <div className={styles.column_items}>
            <FcAdvertising className={styles.Icon_item} />
            <h5>اعلان</h5>
            <h5>298</h5>
          </div>
        </Col>

        <Col sm={12} md={2}>
          <div className={styles.column_items}>
            <MdWork className={styles.Icon_item} />
            <h5>وظيفة</h5>
            <h5>16</h5>
          </div>
        </Col>

        <Col sm={12} md={2}>
          <div className={styles.column_items}>
            <IoIosPeople className={styles.Icon_item} />
            <h5>زائر</h5>
            <h5>365</h5>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Numbers;
