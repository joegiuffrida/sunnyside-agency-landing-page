import { useState } from 'react';
import styles from './Nav.module.css';
import { FaBars } from 'react-icons/fa';

import MobileMenu from './MobileMenu';

const Nav = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <div className={styles.navContainer}>
      <div className={styles.mobileNavHeader}>
        <a>sunnyside</a>
        <button
          className={`${styles.mobileButton} ${styles.toggleMobileButton}`}
          onClick={() => setShowMobileMenu(true)}
        >
          <FaBars />
        </button>
        <MobileMenu
          isOpen={showMobileMenu}
          onDismiss={() => setShowMobileMenu(false)}
        />
      </div>
    </div>
  );
};

export default Nav;
