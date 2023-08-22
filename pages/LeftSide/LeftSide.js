import React, { useEffect } from "react";
// import image from "../../images/deltawy.gif.gif";
import { NavLink } from "react-router-dom";
import styles from  "../../styles/Home.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { getLeftFriends } from "../../pages/store/FriendsSlice";
import {
  LazyLoadImage,
  LazyLoadComponent,
} from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Link from "next/link";
const LeftSide = ({ AllAds }) => {
  const dispatch = useDispatch();
  const { LeftGroupArray } = useSelector((state) => state.FriendsSlice);
      const SideAds = AllAds
    ? AllAds.ads?.slice(0, 8).map((ele, idx) => {
        const pathname = ele.name.replace(/\s/g, "-")
        return (
          <div key={idx}  className={`${styles.display_flex} ${styles.ads_container}`}   >
            <div   className={`${styles.display_flex} ${styles.ads_img_container}`}>
              <LazyLoadImage
                src={`https://dalil.deltawy.com/images?id=${ele.image}&type=tab`}
                alt={ele.name}
                effect="blur"
                key={idx}
                style={{width:"70px", height:"auto", padding:"10px"}}
              />
            </div>
            <Link className={styles.side_linkk}  key={idx}
              href={`/adDetailsPage?id=${ele.id}/${pathname}`} as={`/adDetailsPage/${ele.id}/${pathname}`}
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
            <p>{ele.name}</p>
            </Link>
          </div>
        );
      })
    : null;

  useEffect(() => {
    dispatch(getLeftFriends());
  }, [dispatch]);

  const FriendsData = LeftGroupArray
  ? LeftGroupArray?.map((ele, idx) => {
      return (
        <Link target={"_blank"} href={`${ele.link}`} key={idx} rel="noreferrer" className={styles.width_m}>
            <p className={styles.pp} >{ele.name}</p>

        </Link>
      );
    })
  : null;
  return (
    <React.Fragment>
      <aside className={styles.side_nave}>
        <div className={styles.side_nave_img_delt}>
          <LazyLoadImage 
            src={
              "https://dalil.deltawy.com/javax.faces.resource/deltawy.gif.html?ln=images"
            }
            alt="deltawy"
            effect="blur"
            onClick={() => {
              window.open("https://deltawy.com/", "_blank");
            }}
            className={styles.side_nave_img_delt}
          />
        </div>
        <div  className={`${styles.display_fflex} ${styles.jobs_side}`}  >
          <h3 className={styles.hthree} >اخر الأعلانات</h3>
          <div  className={styles.Links}>{SideAds}</div>
        </div>
        <LazyLoadComponent>
          <div  className={`${styles.display_fflex} ${styles.friends}`}  >
            <h3 className={`${styles.display_friends} ${styles.friends}`}>مواقع صديقة</h3>
            <div   className={`${styles.Links} ${styles.display_links}`} >{FriendsData}</div>
          </div>
        </LazyLoadComponent>
      </aside>
    </React.Fragment>
  );
};

export default LeftSide;