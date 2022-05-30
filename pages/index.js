import Head from "next/head";
import Navbar from "../components/navs/Navbar";
import Hero from "../components/Hero";
import Whatlof from "../components/whatlof";
import Lofplatform from "../components/Lofplatform";
import Footer from "../components/navs/Footer";
import Ceo from "../components/Ceo";
import Merchstore from "../components/Merchstore";
import Script from "next/script";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <script src="https://codepen.io/ImagineProgramming/pen/qBwZLJ.js"></script>
      <script src="//s3-us-west-2.amazonaws.com/s.cdpn.io/188512/codepen-utilities.min.js"></script>
      <script src="//cdnjs.cloudflare.com/ajax/libs/stats.js/r11/Stats.js"></script>
      <script src="//cdnjs.cloudflare.com/ajax/libs/dat-gui/0.5.1/dat.gui.min.js"></script>
      <Script src="/js/Canves.js" />
      <canvas id="swarm"></canvas>
      <div className="absolute inset-0">
        <Navbar />
        <Hero />
        <Whatlof />
        <Lofplatform />
        <Ceo />
        <Merchstore />
        <Footer />
      </div>
    </>
  );
}
