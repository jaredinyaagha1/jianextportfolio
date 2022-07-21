import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Col } from 'react-bootstrap';
// import Clouds1 from '../clouds1.mp4'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <main className={styles.main}>
        <h1 className={styles.title}>
          Can I please get <a href="https://nextjs.org">some rest?</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>
      */}
      <video className="background-video" autoplay loop muted playsinline >
        <source src="/clouds1.mp4" type="video/mp4" />
      </video>
      <nav className="brand-color p-4">
            <Col className='logoCol'>
                {/* <a href="#" className="navbar-logo light-shade">JARED I.A</a> */}
                {/* <Link
                    activeClass="active"
                    // to="#top"
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-90}
                    duration={500}
                    className="navbar-logo light-shade">
                    JARED.IA
                </Link> */}
                What is going to stop me? Is anything?
            </Col>
            {/* <Col className='linksCol'>
                <ul>
                    <NavLinks isMobile={isMobile} />
                </ul>
            </Col> */}
        </nav>
      {/*
        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main> */}

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
