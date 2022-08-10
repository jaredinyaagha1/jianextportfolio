import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Col } from 'react-bootstrap';
import Nav from '../components/Nav';
import ViewCard from '../components/ViewCard';
import 'bootstrap/dist/css/bootstrap.min.css';

 function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Quit playing with me</title>
        <meta name="description" content="so srs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <video className="background-video" autoPlay loop muted playsinline >
        <source src="/clouds1.mp4" type="video/mp4" />
      </video>
      <Nav />
      <ViewCard />
      <ViewCard />
      <ViewCard />
      <ViewCard />
      </div>
      )
  }

export default Home;