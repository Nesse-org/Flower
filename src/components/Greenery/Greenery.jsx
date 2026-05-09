"use client"
import React, { useState } from 'react'
import styles from './Greenery.module.css'

const Greenery = () => {
    const [selectedProduct, setSelectedProduct] = useState(null); 
    const sidebar = [
        {
            id: 1,
            title: "Categories",
            items: [
                { id: 101, label: "House Plants", count: "33" },
                { id: 102, label: "Potter Plants", count: "12" },
                { id: 103, label: "Seeds", count: "65" },
                { id: 104, label: "Small Plants", count: "39" },
            ]
        },
        {
            id: 2,
            title: "Size",
            items: [
                { id: 201, label: "Small", count: "119" },
                { id: 202, label: "Medium", count: "86" },
                { id: 203, label: "Large", count: "78" },
            ]
        }
    ]

    const Product = [
        { id: 1, name: "Barberton Daisy", price: "$129.00", img: "/img1.png", category: "New Arrivals" },
        { id: 2, name: "Angel Wing Begonia", price: "$169.00", img: "/img2.png", category: "New Arrivals" },
        { id: 3, name: "Chinese Money Plant", price: "$89.00", img: "/img3.png", category: "Sale" },
        { id: 4, name: "Fiddle Leaf Fig", price: "$199.00", img: "/img4.png", category: "Sale" },
        { id: 5, name: "Snake Plant", price: "$79.00", img: "/img5.png", category: "Sale" },
        { id: 6, name: "Monstera Deliciosa", price: "$149.00", img: "/img6.png", category: "New Arrivals" },
        { id: 7, name: "Pothos", price: "$59.00", img: "/img7.png", category: "New Arrivals" },
        { id: 8, name: "Spider Plant", price: "$69.00", img: "/img8.png", category: "Sale" },
        { id: 9, name: "ZZ Plant", price: "$89.00", img: "/img9.png", category: "Sale" }
    ]

    const CATEGORIES = ["All Plants", "New Arrivals", "Sale"];
    
    const [activeTab, setActiveTab] = useState("All Plants");
    const [price, setPrice] = useState(1230); 

    const filteredProducts = Product.filter(product => {
        const categoryMatch = activeTab === "All Plants" || product.category === activeTab;
        const currentPrice = parseFloat(product.price.replace('$', ''));
        const priceMatch = currentPrice <= price;
        return categoryMatch && priceMatch;
    });

    return (
        <div className={styles.container}>
            <div className={styles.sidebar}>
                {sidebar.map((section) => (
                    <div key={section.id} className={styles.section}>
                        <h3 className={styles.sectionTitle}>{section.title}</h3>
                        <ul className={styles.itemList}>
                            {section.items.map((item) => (
                                <li key={item.id} className={styles.item}>
                                    <span className={styles.label}>{item.label}</span>
                                    <span className={styles.count}>({item.count})</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}

                <div className={styles.priceSection}>
                    <h3 className={styles.sectionTitle}>Price Range</h3>
                    <div className={styles.rangeWrapper}>
                        <input
                            type="range"
                            min="39"
                            max="1230"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            className={styles.rangeInput}
                        />
                        <p className={styles.priceText}>
                            Price: <span className={styles.priceBold}>$39 — ${price}</span>
                        </p>
                        <button className={styles.filterBtn}>Filter</button>
                    </div>
                </div>

                <div className={styles.saleBanner}>
                    <h2 className={styles.saleTitle}>Super Sale</h2>
                    <p className={styles.saleSubtitle}>UP TO 75% OFF</p>
                    <img src="/img1.png" alt="Super Sale" className={styles.bambooImg} />
                </div>
            </div>

            <div className={styles.productsListContainer}>
                <div className={styles.tabs}>
                    {CATEGORIES.map((category) => (
                        <button
                            key={category}
                            className={`${styles.tab} ${activeTab === category ? styles.activeTab : ""}`}
                            onClick={() => setActiveTab(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className={styles.productsGrid}>
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map((product) => (
                            <div key={product.id} className={styles.productCard}>
                                <img src={product.img} alt={product.name} className={styles.productImage}   onClick={() => setSelectedProduct(product)}/>
                                <h3 className={styles.productName}>{product.name}</h3>
                                <p className={styles.productPrice}>{product.price}</p>
                            </div>
                        ))
                    ) : (
                        <p>Ushbu narxda mahsulot topilmadi.</p>
                    )}
                </div>
            </div>
            
{selectedProduct && (
    <div className={styles.modalOverlay} onClick={() => setSelectedProduct(null)}>
        <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeBtn} onClick={() => setSelectedProduct(null)}>×</button>
            
            <div className={styles.modalBody}>
                <img src={selectedProduct.img} alt={selectedProduct.name} className={styles.modalImg} />
                <div className={styles.modalDetails}>
                    <h2 className={styles.modalName}>{selectedProduct.name}</h2>
                    <p className={styles.modalPrice}>{selectedProduct.price}</p>
                    <p className={styles.modalDesc}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, et praesentium laborum voluptatibus at consequuntur beatae nesciunt ratione debitis, ipsa dolore iure officia illo. 
                    </p>
                    <button className={styles.addToCart}>Add</button>
                </div>
            </div>
        </div>
    </div>
)}

        </div>
    )
}

export default Greenery;