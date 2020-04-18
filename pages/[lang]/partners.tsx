import React from "react";
import withLocale from "../../hocs/withLocale";
// import useTranslation from "../../hooks/useTranslation";
import Header from "../../layouts/Header";
import PartnersQuality from "../../components/PartnersQuality";
import PartnersThreeBlocks from "../../components/PartnersThreeBlocks";
import Footer from "../../components/Footer";


const IndexPage = () => {
    // const { t } = useTranslation();

    return (
        <React.Fragment>
            <Header />
            <PartnersQuality/>
            <PartnersThreeBlocks/>
            <Footer/>
        </React.Fragment>
    );
};

export default withLocale(IndexPage);