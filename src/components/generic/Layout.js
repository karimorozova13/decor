import Head from "next/head";
import { useRouter } from "next/router";

import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children, metaData }) => {
  const {
    title,
    keywords,
    description,
    thumbImage,
    url,
    type,
    coverImageIsExternal,
  } = metaData;
  const { locale } = useRouter();

  return (
    <>
      <Head>
        <title>{`${"Celebration Decor | "}${title}`}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta
          property="og:title"
          content={`${
            coverImageIsExternal ? "" : "Celebration Decor | "
          }${title}`}
        />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content={type} />
        <meta property="og:site_name" content="Celebration Decor" />
        <meta property="og:locale" content={locale} />
        <meta
          property="og:image"
          content={`${
            coverImageIsExternal
              ? thumbImage
              : process.env.NEXT_PAGE_URL + thumbImage
          }`}
        />

        <meta property="fb:pages" content={keywords} />
        <meta property="ia:markup_url" content={url} />
        <link rel="icon" href="/favicon.ico"></link>

        <meta
          name="twitter:title"
          content={`${
            coverImageIsExternal ? "" : "Celebration Decor | "
          }${title}`}
        />
        <meta name="twitter:description" content={description} />
        <meta
          property="twitter:image"
          content={`${
            coverImageIsExternal
              ? thumbImage
              : process.env.NEXT_PAGE_URL + thumbImage
          }`}
        ></meta>
        <link rel="canonical" href={url} />
        <meta name="theme-color" content={"#111111"} />
        <meta name="msapplication-navbutton-color" content={"#111111"} />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content={"#111111"}
        />
        <meta name="msapplication-TileColor" content={"#111111"} />
        <meta charSet="utf-8" />
      </Head>
      <Navbar />
      {children}

      <Footer />
    </>
  );
};

export default Layout;
