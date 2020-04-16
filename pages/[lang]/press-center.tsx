import React from "react";
import withLocale from "../../hocs/withLocale";
// import useTranslation from "../../hooks/useTranslation";
import Header from "../../layouts/Header";
import PressCenterCards from "../../components/PressCenterCards"
import Footer from "../../components/Footer";



const IndexPage = () => {
    // const { t } = useTranslation();

    return (
        <React.Fragment>
            <Header />
            <PressCenterCards/>
            <Footer/>
        </React.Fragment>
    );
};

export default withLocale(IndexPage);