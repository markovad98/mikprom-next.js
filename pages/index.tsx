import React from "react";
import Head from "next/head";
import { getInitialLocale } from "../translations/getInitialLocale";
import "../styles.scss";

const Index = () => {
  React.useEffect(() => {
    window.location.replace(`/${getInitialLocale()}`);
  });

  return (
    <Head>
      <meta name="robots" content="noindex, nofollow" />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" />
      
    </Head>
  );
};

export default Index;
