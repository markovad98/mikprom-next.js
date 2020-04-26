import React from "react";
import withLocale from "../../hocs/withLocale";
import AboutCompany from "../../components/AboutCompany";
import CertificateCarousel from "../../components/CertificateCarousel";

const IndexPage = () => {

    return (
        <React.Fragment>
            <AboutCompany />
            <CertificateCarousel />
        </React.Fragment>
    );
};

export default withLocale(IndexPage);
