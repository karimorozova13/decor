import GallerySection from "@/components/GallerySection";
import Footer from "@/components/generic/Footer";
import Navbar from "@/components/generic/Navbar";
import Hero from "@/components/Hero";
import MeetUs from "@/components/MeetUs";
import Rewies from "@/components/Rewies";
import WhatWeDo from "@/components/WhatWeDo";
import Head from "next/head";


export default function Home() {

  return (
    <>
      <Head>
        <title>Celebration decor</title>
        <meta name="description" content="Event Decor" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Navbar  />
        <Hero />
        <MeetUs />
        <WhatWeDo/>
        <Rewies/>
        <GallerySection />
        <Footer/>
    </>
  );
}
