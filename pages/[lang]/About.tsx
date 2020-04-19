import React from "react";
import withLocale from "../../hocs/withLocale";
import AboutCompany from "../../components/AboutCompany";
import Layout from "../../layouts";
import CertificateCarousel from "../../components/CertificateCarousel";

const IndexPage = () => {

    return (
        <Layout>
            <AboutCompany />
            <CertificateCarousel />
        </Layout>
    );
};

export default withLocale(IndexPage);
