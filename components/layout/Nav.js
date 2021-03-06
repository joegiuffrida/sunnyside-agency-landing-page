import { useState } from 'react';
import styles from './Nav.module.css';
import { FaBars } from 'react-icons/fa';

import MobileMenu from './MobileMenu';
import VisuallyHidden from '../../util/VisuallyHidden';

const Nav = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <div className={styles.navContainer}>
      <div className={styles.navLogo}>
        <a href="#">sunnyside</a>
      </div>
      <div className={styles.mobileNavHeader}>
        <button
          className={styles.mobileButton}
          onClick={() => setShowMobileMenu(true)}
        >
          <FaBars />
          <VisuallyHidden>Menu Button</VisuallyHidden>
        </button>
        <MobileMenu
          isOpen={showMobileMenu}
          onDismiss={() => setShowMobileMenu(false)}
        />
      </div>
      <div className={styles.desktopNavHeader}>
        <nav>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Projects</a>
          <button className={styles.desktopNavButton}>CONTACT</button>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
