import React, { useEffect } from "react";
import SubGategoriesSlick from "./subGategoriesSlick";
import { useRouter } from 'next/router';
import { Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { getBranches } from "../store/Categories";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import Head from "next/head"  
import styles from  "../styles/Home.module.scss";
import Cat from "./cat";

const SubGategories = ({ Categories }) => {
  const { AllCategories } = useSelector((state) => state.categoriesMenu);
  const dispatch = useDispatch();
  const router = useRouter();
  const { id } = router.query;
  const { ALLBranches } = useSelector((state) => state.categoriesMenu);

  useEffect(() => {
    dispatch(getBranches(parseInt(id)));
  }, [dispatch, id]);

  const MinTitle = AllCategories
    ? AllCategories
        .filter((ele) => ele.id === parseInt(id))
        .map((e, id) => {
          return (
            <h2 style={{ textAlign: "center" }} key={id} className={styles.main_title}>
              {e.name}
            </h2>
          );
        })
    : null;


  return (
    <React.Fragment>
      {
        AllCategories
        ? AllCategories
            .filter((e) => e.id === parseInt(id))
            .map((ele, id) => {
              
              return (
                <Head key={id}>
              <title>{ele.name}</title>
              <meta name="description" content={ele.shortDescription?.slice(0, 160)}
              />
              <meta itemprop="name" content={ele.name} />
              <meta itemprop="description" content={ele.shortDescription?.slice(0, 160)}
              />
              <meta itemprop="image" content={`https://dalil.deltawy.com/images?id=${ele.image}&type=tab`}
              />
              <meta property="og:type" content="Article" />
              <meta property="og:title" content={ele.name} />
              <meta property="og:description" content={ele.shortDescription?.slice(0, 160)} />
              <meta property="og:image" content={`https://dalil.deltawy.com/images?id=${ele.image}&type=tab`} />
              <meta name="twitter:card" content="summary_large_image" />
              <meta name="twitter:title" content={ele.name} />
              <meta name="twitter:description" content={ele.shortDescription?.slice(0, 160)} />
              <meta name="twitter:image" content={`https://dalil.deltawy.com/images?id=${ele.image}&type=tab`} />
              <link rel="icon" type="image/x-icon" href={`https://dalil.deltawy.com/images?id=${ele.image}&type=tab`} />
            </Head> 
              );
            })
        : null
      }


      <div className={styles.sub_gateogry}>
        <div>
          {MinTitle}
          <LazyLoadComponent>
            <SubGategoriesSlick Categories={AllCategories} />
          </LazyLoadComponent>
            <Cat branches={ALLBranches} type={router.query.type} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default SubGategories;


