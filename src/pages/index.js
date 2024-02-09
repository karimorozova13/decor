import Header from "@/components/generic/Header";
import Hero from "@/components/Hero";
import MeetUs from "@/components/MeetUs";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Decor</title>
        <meta name="description" content="Event Decor" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Header />
        <Hero />
        <MeetUs/>
    </>
  );
}
