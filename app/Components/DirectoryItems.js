import React from "react";
import {
  LazyLoadImage,
  LazyLoadComponent,
} from "react-lazy-load-image-component";
import styles from  "../styles/Home.module.scss";
import  Link from "next/link";
const DirectoryItems = ({ Categories }) => {
  // const navigate = useNavigate();

  const Items =
    Categories?.length > 0
      ? Categories.slice()
          .sort((a, b) => parseFloat(a.id) - parseFloat(b.id))
          .map((ele, id) => {
            return (
              <LazyLoadComponent key={id}>
                <div className={`${styles.Directory} ${styles[`item_${ele.id}`]}`} >
                  <div
                    className={styles.Directory_header }
                    onClick={() => {
                      window.scrollTo(0, 0);
                    }}
                  >
                    <div className={styles.Directory_card_image } >
                    <Link key={id} href={`/subGategories?id=${ele.id}/allGategories`} as={`/subGategories/${ele.id}/allGategories`}>
                      <LazyLoadImage
                        effect="blur"
                        src={`https://dalil.deltawy.com/images?id=${ele.image}&type=tab`}
                        alt={`${ele.name}-categories`}
                        width="100%"
                        height="auto"
                      />
                     
                    
                    </Link>
                    </div>
                    <h4>{ele.name}</h4>
                  </div>
                  {ele.catList?.map((e, id) => {
                    const pathname = e.name.replace(/-/g, " ");
                    return (
                      <Link style={{color : '#024878'}} href={`/subGategories?id=${ele.id}/allBranches/${e.name}`} key={id} as={`/subGategories/${ele.id}/allBranches/${e.name}`}>
                    
                      <div
                        key={id}
                        className={styles.sapseficItem }
                       
                      >
                        <h5>{pathname}</h5>
                        <span>{e.size}</span> 
                      </div>
                      </Link>
                    );
                  })}
                </div>
              </LazyLoadComponent>
            );
          })
      : null;
  return (
    <>
      <h2  className={styles.main_title }>عناصر الدليل</h2>
      <div className={styles.DirectoryItems }>{Items}</div>
      
    </>
  );
};

export default DirectoryItems;
