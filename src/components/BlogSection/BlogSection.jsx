import React from 'react';
import styles from './BlogSection.module.css';
const BlogSection = () => {
  const blogs = [
    {
      id: 1,
      date: "September 12",
      readTime: "6 minutes",
      title: "Cactus & Succulent Care Tips",
      desc: "Cacti are succulents are easy care plants for any home or patio.",
      img: "/img3.png"
    },
    {
      id: 2,
      date: "September 13",
      readTime: "2 minutes",
      title: "Top 10 Succulents for Your Home",
      desc: "Best in hanging baskets. Prefers medium to high light.",
      img: "/img4.png"
    },
    {
      id: 3,
      date: "September 15",
      readTime: "3 minutes",
      title: "Cacti & Succulent Care Tips",
      desc: "Cacti and succulents thrive in containers and because most are..",
      img: "/img5.png"
    },
    {
      id: 4,
      date: "September 15",
      readTime: "2 minutes",
      title: "Best Houseplants Room By Room",
      desc: "The benefits of houseplants are endless. In addition to..",
      img: "/img6.png"
    }
  ];

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.mainTitle}>Our Blog Posts</h2>
        <p className={styles.mainDesc}>We are an online plant shop offering a wide range of cheap and trendy plants.</p>
      </div>

      <div className={styles.grid}>
        {blogs.map((blog) => (
          <div key={blog.id} className={styles.card}>
            <div className={styles.imgWrapper}>
              <img src={blog.img} alt={blog.title} />
            </div>
            <div className={styles.content}>
              <p className={styles.meta}>{blog.date} | Read in {blog.readTime}</p>
              <h3 className={styles.blogTitle}>{blog.title}</h3>
              <p className={styles.blogDesc}>{blog.desc}</p>
              <a href="#" className={styles.readMore}>Read More &rarr;</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;