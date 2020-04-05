import React from "react";
import withLocale from "../../hocs/withLocale";
// import useTranslation from "../../hooks/useTranslation";
import Header from "../../layouts/Header";
import AboutCompany from "../../components/AboutCompany";

const IndexPage = () => {
    // const { t } = useTranslation();

    return (
        <React.Fragment>
            <Header />
            <AboutCompany />
        </React.Fragment>
    );
};

export default withLocale(IndexPage);
