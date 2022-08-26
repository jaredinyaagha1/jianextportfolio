import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
// import { Container, Row, Col, Card } from 'react-bootstrap';
import Nav from '../components/Nav';
import ViewCard from '../components/common/ViewCard';
import 'bootstrap/dist/css/bootstrap.min.css';

//  function Home() {
//   return (
// <div className={styles.container}>

      
//       <Nav />
//       </div>
    
//       )
//   }

function Home() {
  return (
    <div className="App">
      <Head>
        <title>Quit playing with me</title>
        <meta name="description" content="so srs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <video className="background-video" autoPlay loop muted playsInline >
        <source src="/videos/clouds1.mp4" type="video/mp4" />
      </video>
      <main>
        <style type='text/css'>
          {`
.view {
    background-color: rgba(0, 0, 0, 0.1);
}
`}

        </style>
        <ViewCard />
      {/* <Footer /> */}
      </main>
    </div>
  );
}


// export default App;

export default Home;