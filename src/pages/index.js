import Head from "next/head";
import Footer from "../components/footer";
import Header from "../components/header";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>RentBuyParis</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <div>
          <h1>Locations et ventes d'appartements à Paris</h1>
          <p>
            Appartements à louer et à vendre en plein centre de Paris, dans des
            conditions idéales et des prix convenables
          </p>
        </div>
      </main>
      <Footer className={styles.footer} />
    </div>
  );
}
