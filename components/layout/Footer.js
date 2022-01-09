import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <h2>sunnyside</h2>
      <ul className={styles.footerLinks}>
        <li>About</li>
        <li>Services</li>
        <li>Projects</li>
      </ul>
      <ul className={styles.footerSocial}>
        <li>
          <img src="/icon-facebook.svg" />
        </li>
        <li>
          <img src="/icon-instagram.svg" />
        </li>
        <li>
          <img src="/icon-twitter.svg" />
        </li>
        <li>
          <img src="/icon-pinterest.svg" />
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
