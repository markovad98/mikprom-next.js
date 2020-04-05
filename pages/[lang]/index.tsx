import React from "react";
import withLocale from "../../hocs/withLocale";
import Carousel from "../../components/Carousel";
import Header from "../../layouts/Header";
import Benefits from "../../components/Benefits";
import CompanyInfo from "../../components/CompanyInfo";
import Partners from "../../components/Partners";
import Feedback from "../../components/Feedback";
import PressCenter from "../../components/PressCenter";

const IndexPage = () => {
  return (
    <React.Fragment>
      <Header />
      <Carousel />
      <Benefits />
      <CompanyInfo />
      <Partners />
      <Feedback />
      <PressCenter />
    </React.Fragment>
  );
};

export default withLocale(IndexPage);
