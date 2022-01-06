import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <main className={styles.container}>
      <Head>
        <title>Sunnyside Agency</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={styles.heroContainer}>Hero Page</section>
      <section className={styles.benefitsContainer}>
        <div>Egg Image</div>
        <div>Transform Your Brand</div>
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
