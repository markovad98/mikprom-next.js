import React from "react";
import withLocale from "../../hocs/withLocale";
import AboutCompany from "../../components/AboutCompany";
import Layout from "../../layouts";

const IndexPage = () => {

    return (
        <Layout>
            <AboutCompany />
        </Layout>
    );
};

export default withLocale(IndexPage);
