import { DialogOverlay, DialogContent } from '@reach/dialog';
import styles from './MobileMenu.module.css';
import VisuallyHidden from '../../util/VisuallyHidden';

import { AiOutlineClose } from 'react-icons/ai';

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <DialogOverlay
      isOpen={isOpen}
      onDismiss={onDismiss}
      className={styles.overlay}
    >
      <DialogContent aria-label="Menu" className={styles.content}>
        <button onClick={onDismiss} className={styles.closeButton}>
          <AiOutlineClose />
          <VisuallyHidden>Dismiss Menu</VisuallyHidden>
        </button>
        <div className={styles.triangle} />
        <nav className={styles.nav}>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Projects</a>
          <button>CONTACT</button>
        </nav>
      </DialogContent>
    </DialogOverlay>
  );
};

export default MobileMenu;
