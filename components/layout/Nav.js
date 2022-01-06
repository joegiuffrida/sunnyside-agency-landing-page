import styles from './Nav.module.css';

import { FaBars } from 'react-icons/fa';

const Nav = () => {
  return (
    <div className={styles.navContainer}>
      <div className={styles.navHeader}>
        <a>sunnyside</a>
        <button
          className={`${styles.mobileButton} ${styles.toggleMobileButton}`}
        >
          <FaBars />
        </button>
      </div>
    </div>
  );
};

export default Nav;
