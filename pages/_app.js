import Head from "next/head";
import "../styles/globals.css";
import "../styles/variables.css";
import "../styles/row.css";
import Navbar from "../Components/Navbar";
import ListContextProvider from "../context/ListContextProvider";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="description" content="This is netfix clone" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <ListContextProvider>
        <Navbar />
        <Component {...pageProps} />
      </ListContextProvider>
    </>
  );
}

export default MyApp;
