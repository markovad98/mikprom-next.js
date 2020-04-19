import React from "react";
import withLocale from "../../hocs/withLocale";
import CatalogBanner from "../../components/CatalogBanner";
import TheBrand from "../../components/TheBrand";
import ProductSections from "../../components/ProductSections";
import ProductFeedback from "../../components/ProductFeedback";
import Layout from "../../layouts";


const IndexPage = () => {

    return (
        <Layout>
            <CatalogBanner/>
            <TheBrand/>
            <ProductSections/>
            <ProductFeedback/>
        </Layout>
    );
};

export default withLocale(IndexPage);
