import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <main className={styles.container}>
      <Head>
        <title>Sunnyside Agency</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow:wght@600&family=Fraunces:wght@700;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <section className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>WE ARE CREATIVES</h1>
          <img
            src="/icon-arrow-down.svg"
            height={100}
            width={40}
            className={styles.heroArrow}
          />
        </div>
      </section>
      <section className={styles.benefitsContainer}>
        <div className={styles.transformImage}>
          <img src="/mobile/image-transform.jpg" />
        </div>
        <div className={styles.transformText}>
          <h2>Transform your brand</h2>
          <p>
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </p>
          <a>LEARN MORE</a>
        </div>
        <div className={styles.standoutImage}>
          <img src="/mobile/image-stand-out.jpg" />
        </div>
        <div className={styles.standoutText}>
          <h2>Stand out to the right audience</h2>
          <p>
            Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we'll build and
            extend your brand in digital places.
          </p>
          <a>LEARN MORE</a>
        </div>
        <div className={styles.graphicDesign}>
          <h2>Graphic Design</h2>
          <p>
            Great design makes you memorable. We deliver artwork that
            underscores your brand message and captures potential clients'
            attention.
          </p>
        </div>
        <div className={styles.photography}>
          <h2>Photography</h2>
          <p>
            Increase your credibility by getting the most stunning, high-quality
            photos that improve your business image.
          </p>
        </div>
      </section>
      <section className={styles.testimonialContainer}>
        <h2>CLIENT TESTIMONIALS</h2>
        <div className={styles.testimonial}>
          <img src="/image-emily.jpg" />
          <p>
            We put our trust in Sunnyside and they delivered, making sure our
            needs were met and deadlines were always hit.
          </p>
          <h3>Emily R.</h3>
          <h4>Marketing Director</h4>
        </div>
      </section>
      <section className={styles.gallery}>
        <div>
          <img src="/mobile/image-gallery-milkbottles.jpg" />
          <img src="/mobile/image-gallery-orange.jpg" />
        </div>
        <div>
          <img src="/mobile/image-gallery-cone.jpg" />
          <img src="/mobile/image-gallery-sugar-cubes.jpg" />
        </div>
      </section>
    </main>
  );
}
