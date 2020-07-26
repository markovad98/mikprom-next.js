import React from "react";
import withLocale from "../../hocs/withLocale";
import CertificateCarousel from "../../components/CertificateCarousel";
import NewAboutCompany from "../../newComponents/AboutCompany";
import Partners from "../../components/Partners";
import AboutCompanyBanner from "../../newComponents/AboutCompanyBanner";

const IndexPage = () => {

    return (
        <React.Fragment>
            <AboutCompanyBanner />
            <NewAboutCompany withVideo={false} />
            <CertificateCarousel />
            <Partners />
        </React.Fragment>
    );
};

export default withLocale(IndexPage);
