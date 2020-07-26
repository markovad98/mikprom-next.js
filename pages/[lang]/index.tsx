import React from "react";
import withLocale from "../../hocs/withLocale";
import Benefits from "../../components/Benefits";
import Feedback from "../../components/Feedback";
import MainBanner from "../../newComponents/MainBanner";
import OurProducts from "../../newComponents/OurProducts";
import NewAboutCompany from "../../newComponents/AboutCompany";
import NewPressCenter from "../../newComponents/NewPressCenter";

const IndexPage = () => {
  return (
    <React.Fragment>
      <MainBanner />
      <Benefits />
      <OurProducts />
      <NewAboutCompany withVideo={true} />
      <NewPressCenter />
      <Feedback />

    </React.Fragment>
  );
};

export default withLocale(IndexPage);
