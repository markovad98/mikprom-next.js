import React from "react";
import withLocale from "../../hocs/withLocale";
import Carousel from "../../components/Carousel";
import Benefits from "../../components/Benefits";
import CompanyInfo from "../../components/CompanyInfo";
import Partners from "../../components/Partners";
import Feedback from "../../components/Feedback";
import PressCenter from "../../components/PressCenter";
import Layout from "../../layouts";

const IndexPage = () => {
  return (
    <Layout>
      <Carousel />
      <Benefits />
      <CompanyInfo />
      <Partners />
      <Feedback />
      <PressCenter />
    </Layout>
  );
};

export default withLocale(IndexPage);
