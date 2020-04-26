import React from "react";
import withLocale from "../../hocs/withLocale";
import PartnersQuality from "../../components/PartnersQuality";
import PartnersThreeBlocks from "../../components/PartnersThreeBlocks";

const IndexPage = () => {
  return (
    <React.Fragment>
      <PartnersQuality />
      <PartnersThreeBlocks />
    </React.Fragment>
  );
};

export default withLocale(IndexPage);
