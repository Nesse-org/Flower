import React from 'react'
import styles from "./Korzina.module.css";

function Korzina() {
  return (
    <div className={styles.cartPage}>

      <div className={styles.cartTop}>
        <p>
          Home / Shop / <span>Shopping Cart</span>
        </p>
      </div>

      <div className={styles.cartWrapper}>


        <div className={styles.cartLeft}>

          <div className={styles.cartHeader}>
            <p>Products</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
          </div>

   
          <div className={styles.cartItem}>

            <div className={styles.productInfo}>
              <img
                src=""
                alt=""
              />

              <div>
                <h3>Barberton Daisy</h3>
                <span>SKU: 1995751877966</span>
              </div>
            </div>

            <p className={styles.price}>$119.00</p>

            <div className={styles.quantity}>
              <button>-</button>
              <span>2</span>
              <button>+</button>
            </div>

            <p className={styles.total}>$238.00</p>

            <button className={styles.deleteBtn}>
              🗑
            </button>

          </div>

          <div className={styles.cartItem}>

            <div className={styles.productInfo}>
              <img
                src=""
                alt=""
              />

              <div>
                <h3>Blushing Bromeliad</h3>
                <span>SKU: 19957518757065</span>
              </div>
            </div>

            <p className={styles.price}>$139.00</p>

            <div className={styles.quantity}>
              <button>-</button>
              <span>6</span>
              <button>+</button>
            </div>

            <p className={styles.total}>$834.00</p>

            <button className={styles.deleteBtn}>
              🗑
            </button>

          </div>

          <div className={styles.cartItem}>

            <div className={styles.productInfo}>
              <img
                src=""
                alt=""
              />

              <div>
                <h3>Aluminum Plant</h3>
                <span>SKU: 1995751877786</span>
              </div>
            </div>

            <p className={styles.price}>$179.00</p>

            <div className={styles.quantity}>
              <button>-</button>
              <span>9</span>
              <button>+</button>
            </div>

            <p className={styles.total}>$1,611.00</p>

            <button className={styles.deleteBtn}>
              🗑
            </button>

          </div>

        </div>

        <div className={styles.cartRight}>

          <h2>Cart Totals</h2>

          <p className={styles.couponTitle}>
            Coupon Apply
          </p>

          <div className={styles.couponBox}>
            <input
              type="text"
              placeholder="Enter coupon code here..."
            />

            <button>
              Apply
            </button>
          </div>

          <div className={styles.summary}>

            <div>
              <p>Subtotal</p>
              <span>$2,683.00</span>
            </div>

            <div>
              <p>Coupon Discount</p>
              <span>(-) 00.00</span>
            </div>

            <div>
              <p>Shipping</p>
              <span>$16.00</span>
            </div>

            <div className={styles.grandTotal}>
              <p>Total</p>
              <span>$2,699.00</span>
            </div>

          </div>

          <button className={styles.checkoutBtn}>
            Proceed To Checkout
          </button>

          <p className={styles.continue}>
            Continue Shopping
          </p>

        </div>

      </div>

      <div className={styles.recommended}>

        <h2>You may be interested in</h2>

        <div className={styles.recommendedGrid}>

          <div className={styles.card}>
            <img
              src="https://images.unsplash.com/photo-1463154545680-d59320fd685d?q=80&w=400"
              alt=""
            />
            <h3>Beach Spider Lily</h3>
            <p>$129.00</p>
          </div>

          <div className={styles.card}>
            <img
              src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=400"
              alt=""
            />
            <h3>Blushing Bromeliad</h3>
            <p>$139.00</p>
          </div>

          <div className={styles.card}>
            <img
              src="https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=400"
              alt=""
            />
            <h3>Aluminum Plant</h3>
            <p>$179.00</p>
          </div>

          <div className={styles.card}>
            <img
              src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=400"
              alt=""
            />
            <h3>Bird’s Nest Fern</h3>
            <p>$99.00</p>
          </div>

          <div className={styles.card}>
            <img
              src="https://images.unsplash.com/photo-1459156212016-c812468e2115?q=80&w=400"
              alt=""
            />
            <h3>Chinese Evergreen</h3>
            <p>$39.00</p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Korzina