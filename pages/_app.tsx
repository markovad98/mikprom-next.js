import React from "react";
import "../styles.scss";
import { ProductsProvider } from "../context/ProductsContext";
import { NewsProvider } from "../context/NewsContext";

type TProps = {
  Component: React.FC;
  pageProps: any;
};

const MyApp: React.FC<TProps> = ({ Component, pageProps }) => {
  return (
    <div className="app">
      <NewsProvider>
        <ProductsProvider>
          <Component {...pageProps} />
        </ProductsProvider>
      </NewsProvider>
    </div>
  );
};

export default MyApp;
