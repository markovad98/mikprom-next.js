import React from "react";
import withLocale from "../../hocs/withLocale";
import Basket from "../../components/Basket";


const IndexPage = () => {
    return (
        <React.Fragment>
            <Basket/>
        </React.Fragment>
    );
};

export default withLocale(IndexPage);
