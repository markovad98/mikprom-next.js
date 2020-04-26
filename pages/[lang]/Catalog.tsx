import React from "react";
import withLocale from "../../hocs/withLocale";
import CatalogBanner from "../../components/CatalogBanner";
import TheBrand from "../../components/TheBrand";
import ProductSections from "../../components/ProductSections";
import ProductFeedback from "../../components/ProductFeedback";

const IndexPage = () => {
    return (
        <React.Fragment>
            <CatalogBanner/>
            <TheBrand/>
            <ProductSections/>
            <ProductFeedback/>
        </React.Fragment>
    );
};

export default withLocale(IndexPage);
