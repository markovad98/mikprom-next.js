import React from "react";
import withLocale from "../../hocs/withLocale";
// import useTranslation from "../../hooks/useTranslation";
import Header from "../../layouts/Header";
import CatalogBanner from "../../components/CatalogBanner";
import TheBrand from "../../components/TheBrand";
import ProductSections from "../../components/ProductSections";
import ProductFeedback from "../../components/ProductFeedback";
import Footer from "../../components/Footer";


const IndexPage = () => {
    // const { t } = useTranslation();

    return (
        <React.Fragment>
            <Header />
            <CatalogBanner/>
            <TheBrand/>
            <ProductSections/>
            <ProductFeedback/>
            <Footer/>
        </React.Fragment>
    );
};

export default withLocale(IndexPage);