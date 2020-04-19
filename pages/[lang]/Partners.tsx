import React from "react";
import withLocale from "../../hocs/withLocale";
import PartnersQuality from "../../components/PartnersQuality";
import PartnersThreeBlocks from "../../components/PartnersThreeBlocks";
import Layout from "../../layouts";


const IndexPage = () => {
    return (
        <Layout>
            <PartnersQuality/>
            <PartnersThreeBlocks/>
        </Layout>
    );
};

export default withLocale(IndexPage);
