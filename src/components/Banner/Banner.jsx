import styles from './Banner.module.css';

const Banner = () => {
  const slides = [
    {
      id: 1,
      subtitle: 'WELCOME TO GREENSHOP',
      title: { normal: "LET’S MAKE A BETTER", highlight: "PLANET" },
      description: 'We are an online plant shop offering a wide range of cheap and trendy plants.',
      images: { big: "/big-plant.png", small: "/small-plant.png" },
      btnText: "SHOP NOW"
    }
  ];

  const data = slides[0];

  return (
    <div className='container'>

    <section className={styles.banner}>
      <div className={styles.content}>
        <p className={styles.subtitle}>{data.subtitle}</p>
        <h1 className={styles.title}>
          {data.title.normal} <span>{data.title.highlight}</span>
        </h1>
        <p className={styles.description}>{data.description}</p>
        <button className={styles.shopBtn}>{data.btnText}</button>
      </div>
      
      <div className={styles.imageContainer}>
        <img src={data.images.big} alt="Big Plant" className={styles.bigPlant} />
        <img src={data.images.small} alt="Small Plant" className={styles.smallPlant} />
      </div>

      <div className={styles.dots}>
        {slides.map((_, i) => (
          <span key={i} className={i === 0 ? styles.activeDot : styles.dot}></span>
        ))}
      </div>
    </section>
        </div>
  );
};

export default Banner;