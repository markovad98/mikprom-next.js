import React from "react";
import "../styles.scss";
import { ProductsProvider } from "../context/ProductsContext";
import { NewsProvider } from "../context/NewsContext";
import Layout from "../layouts";
import { CartProvider } from "../context/CartContext";

type TProps = {
  Component: React.FC;
  pageProps: any;
};

const MyApp: React.FC<TProps> = ({ Component, pageProps }) => {
  return (
    <div className="app">
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
