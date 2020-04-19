import React from "react";
import withLocale from "../../hocs/withLocale";
import PressCenterCards from "../../components/PressCenterCards"
import Layout from "../../layouts";

const IndexPage = () => {
    return (
        <Layout>
            <PressCenterCards/>
        </Layout>
    );
};

export default withLocale(IndexPage);
