import Link from 'next/link';
import { Search, ShoppingCart, LogIn } from 'lucide-react';
import styles from './Nav.module.css';

const Nav = () => {
  const navData = {
    logoText: "GREENSHOP",
    links: [
      { id: 1, title: 'Home', path: '/', isActive: true },
      { id: 2, title: 'Shop', path: '/shop', isActive: false },
      { id: 3, title: 'Plant Care', path: '/plant-care', isActive: false },
      { id: 4, title: 'Blogs', path: '/blogs', isActive: false },
    ],
    actions: {
      cartCount: 6,
      loginText: "Login"
    }
  };

  return (
    <div className='container'>

    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <span>{navData.logoText}</span>
      </div>
      
      <ul className={styles.navLinks}>
        {navData.links.map((link) => (
          <li key={link.id}>
            <Link 
              href={link.path} 
              className={`${styles.navItem} ${link.isActive ? styles.active : ''}`}
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>

      <div className={styles.actions}>
        <button className={styles.iconBtn}>
          <Search size={20} strokeWidth={1.5} />
        </button>
        
        <div className={styles.cartWrapper}>

          <Link href="/korzina">
            <button className={styles.iconBtn}>
              <ShoppingCart size={20} strokeWidth={1.5} />
            </button>
          </Link>

          {navData.actions.cartCount > 0 && (
            <span className={styles.cartBadge}>{navData.actions.cartCount}</span>
          )}
        </div>

        <button className={styles.loginBtn}>
          <LogIn size={18} />
          {navData.actions.loginText}
        </button>
      </div>
    </nav>

    </div>
  );
};

export default Nav;