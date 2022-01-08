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
        <div className={styles.heroImage}>
          <img src="/mobile/image-header.jpg" />
          {/* <div className={styles.heroArrow}>
            <Image src="/icon-arrow-down.svg" height={175} width={50} />
          </div> */}
        </div>
        {/* <div className={styles.heroTitle}>
          <h1>We Are Creatives</h1>
        </div> */}
      </section>
      <section className={styles.benefitsContainer}>
        <div className={styles.transformEgg}>
          <img src="/mobile/image-transform.jpg" />
        </div>
        <div className={styles.transformText}>
          <h2>Transform your brand</h2>
          <p>
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </p>
          <a>Learn More</a>
        </div>
        <div>Wine Cup</div>
        <div>Stand out to the right audience</div>
        <div>Graphic Design</div>
        <div>Photography</div>
      </section>
      <section className={styles.testimonials}>
        <div>
          For the testimonials create a testimonial component to render here
        </div>
        <div>then we can map over testimonials</div>
        <div>
          and have the component generate in a list. OR JUST KEEP SIMPLE and
          make three divs
        </div>
      </section>
      <section className={styles.gallery}>
        <div>Image</div>
        <div>Image</div>
        <div>Image</div>
        <div>Image</div>
      </section>
    </main>
  );
}
