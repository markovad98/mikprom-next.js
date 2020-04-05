import React from "react";
import withLocale from "../../hocs/withLocale";
// import useTranslation from "../../hooks/useTranslation";
import Header from "../../layouts/Header";
import CatalogBanner from "../../components/CatalogBanner";


const IndexPage = () => {
    // const { t } = useTranslation();

    return (
        <React.Fragment>
            <Header />
            <CatalogBanner/>
            
        </React.Fragment>
    );
};

export default withLocale(IndexPage);