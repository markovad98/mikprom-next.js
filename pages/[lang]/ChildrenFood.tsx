import React from "react";
import withLocale from "../../hocs/withLocale";
import ChildrenFood from "../../components/ChildrenFood";

const IndexPage = () => {
    return (
        <React.Fragment>
            <ChildrenFood />
        </React.Fragment>
    );
};

export default withLocale(IndexPage);
