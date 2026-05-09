import React from 'react';
import styles from './AdBanner.module.css';
const AdBanner = () => {
  const banners = [
    {
      id: 1,
      title: "SUMMER CACTUS & SUCCULENTS",
      desc: "We are an online plant shop offering a wide range of cheap and trendy plants",
      img: "/big-plant.png",
      link: "#"
    },
    {
      id: 2,
      title: "STYLING TRENDS & MUCH MORE",
      desc: "We are an online plant shop offering a wide range of cheap and trendy plants",
      img: "/small-plant.png",
      link: "#"
    }
  ];

  return (
    <div className={styles.container}>
      {banners.map((banner) => (
        <div key={banner.id} className={styles.bannerCard}>
          <div className={styles.imageBox}>
            <img src={banner.img} alt={banner.title} />
          </div>
          <div className={styles.content}>
            <h2 className={styles.title}>{banner.title}</h2>
            <p className={styles.desc}>{banner.desc}</p>
            <button className={styles.btn}>Find More &rarr;</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdBanner;