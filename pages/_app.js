import "tailwindcss/tailwind.css";
import "@material-tailwind/react/tailwind.css";
import Icon from "@material-tailwind/react/Icon";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
