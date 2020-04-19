import React from "react";
import withLocale from "../../hocs/withLocale";
import ChildrenFood from "../../components/ChildrenFood";
import Layout from "../../layouts";

const IndexPage = () => {
    return (
        <Layout>
            <ChildrenFood />
        </Layout>
    );
};

export default withLocale(IndexPage);
