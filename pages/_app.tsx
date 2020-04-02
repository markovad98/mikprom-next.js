import React from 'react'
import "../styles.scss";

type TProps = {
    Component: React.FC;
    pageProps: any;
}

 const MyApp: React.FC<TProps> = ({ Component, pageProps }) => {
  return (
    <div className="app">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
