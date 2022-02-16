import Head from "next/head";
import Hero from "../components/hero";

export default function Home() {
  return (
    <div>
      <Head>
        <title>RentBuyParis | Locations et ventes d'appartements à Paris</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
    </div>
  );
}
