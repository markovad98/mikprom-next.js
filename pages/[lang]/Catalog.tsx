import React from "react";
import withLocale from "../../hocs/withLocale";
import CatalogBanner from "../../components/CatalogBanner";
import TheBrand from "../../components/TheBrand";
import ProductSections from "../../components/ProductSections";
import Feedback from "../../components/Feedback";

const IndexPage = () => {
    return (
        <React.Fragment>
            <CatalogBanner/>
            <TheBrand/>
            <ProductSections/>
            <Feedback />
        </React.Fragment>
    );
};

export default withLocale(IndexPage);
