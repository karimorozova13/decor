import Layout from "@/components/generic/Layout";
import "@/styles/globals.css";
import localFont from "next/font/local";

const Poppins = localFont({
  src: [
    {
      path: "../../assets/fonts/Poppins/Poppins-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../assets/fonts/Poppins/Poppins-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
});

export default function App({ Component, pageProps }) {
  const {
    metaData = {
      title: "Celebration decor",
      keywords:
        "Wedding decor, Event decorations, Floral arrangements, Ceremony decor, Themed events, Candlelight decor, Outdoor wedding decor, Vintage-inspired decorations, Modern event styling,Luxury wedding decor, DIY wedding decorations",
      description: "Celebration decor | Wedding decor | Event decorations",
      type: "website",
      url: "",
      thumbImage: "/images/meta.png",
      coverImageIsExternal: "",
    },
  } = pageProps;
  return (
    <main className={Poppins.className}>
      <Layout
        metaData={{
          ...metaData,
        }}
      >
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}
