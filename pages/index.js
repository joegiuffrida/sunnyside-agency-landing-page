import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Nav from '../components/layout/Nav';
import Footer from '../components/layout/Footer';

export default function Home() {
  return (
    <>
      <Nav />
      <main className={styles.container}>
        <Head>
          <title>Sunnyside Agency</title>
          <link rel="icon" href="/favicon.ico" />
          <link
            href="https://fonts.googleapis.com/css2?family=Barlow:wght@600&family=Fraunces:wght@700;900&display=swap"
            rel="stylesheet"
          />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </Head>
        <section className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>WE ARE CREATIVES</h1>
            <img
              src="/icon-arrow-down.svg"
              height={140}
              width={40}
              className={styles.heroArrow}
            />
          </div>
        </section>
        <section className={styles.benefitsContainer}>
          <div className={styles.transformImage}>
            <img src="/desktop/image-transform.jpg" alt="Image of an egg." />
          </div>
          <div className={styles.transformText}>
            <h2>Transform your brand</h2>
            <p>
              We are a full-service creative agency specializing in helping
              brands grow fast. Engage your clients through compelling visuals
              that do most of the marketing for you.
            </p>
            <a>LEARN MORE</a>
          </div>
          <div className={styles.standoutImage}>
            <img
              src="/desktop/image-stand-out.jpg"
              alt="Image of a peach colored wine like cup."
            />
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
              Increase your credibility by getting the most stunning,
              high-quality photos that improve your business image.
            </p>
          </div>
        </section>
        <h2 className={styles.testimonialTitle}>CLIENT TESTIMONIALS</h2>
        <section className={styles.testimonialContainer}>
          <div className={styles.testimonial}>
            <img src="/image-emily.jpg" alt="Image of Emily R." />
            <p>
              We put our trust in Sunnyside and they delivered, making sure our
              needs were met and deadlines were always hit.
            </p>
            <h3>Emily R.</h3>
            <h4>Marketing Director</h4>
          </div>
          <div className={styles.testimonial}>
            <img src="/image-thomas.jpg" alt="Image of Thomas S." />
            <p>
              Sunnyside's enthusiasm coupled with their keen interest in our
              brand's success made it a satisfying and enjoyable exprience.
            </p>
            <h3>Thomas S.</h3>
            <h4>Chief Operating Officer</h4>
          </div>
          <div className={styles.testimonial}>
            <img src="/image-jennie.jpg" alt="Image of Jennie F." />
            <p>
              Incredible end result! Our sales increased over 400% when we
              worked with Sunnyside. Highly recommended!
            </p>
            <h3>Jennie F.</h3>
            <h4>Business Owner</h4>
          </div>
        </section>
        <section className={styles.gallery}>
          <div>
            <img src="/desktop/image-gallery-milkbottles.jpg" />
            <img src="/desktop/image-gallery-orange.jpg" />
          </div>
          <div>
            <img src="/desktop/image-gallery-cone.jpg" />
            <img src="/desktop/image-gallery-sugarcubes.jpg" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
