import React from "react";
import "../styles.scss";
import { ProductsProvider } from "../context/ProductsContext";
import { NewsProvider } from "../context/NewsContext";
import Layout from "../layouts";
import { CartProvider } from "../context/CartContext";
import Head from "next/head";

type TProps = {
  Component: React.FC;
  pageProps: any;
};

const MyApp: React.FC<TProps> = ({ Component, pageProps }) => {
  return (
    <div className="app">
      <Head>
        <title>Микпром</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <NewsProvider>
        <ProductsProvider>
          <CartProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </CartProvider>
        </ProductsProvider>
      </NewsProvider>
    </div>
  );
};

export default MyApp;
