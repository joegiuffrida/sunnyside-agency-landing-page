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
        <nav className={styles.nav}>
          <a>About</a>
          <a>Sevices</a>
          <a>Projects</a>
          <button>Contact</button>
        </nav>
      </DialogContent>
    </DialogOverlay>
  );
};

export default MobileMenu;
