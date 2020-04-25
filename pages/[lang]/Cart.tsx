import React from "react";
import withLocale from "../../hocs/withLocale";
import Layout from "../../layouts";
import Basket from "../../components/Basket";


const IndexPage = () => {
    return (
        <Layout>
            <Basket/>
        </Layout>
    );
};

export default withLocale(IndexPage);
