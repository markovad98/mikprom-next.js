import React from "react";
import withLocale from "../../hocs/withLocale";
import ChildrenFood from "../../components/ChildrenFood";
import ChildrenContent from "../../newComponents/ChildrenContent";

const IndexPage = () => {
    return (
        <React.Fragment>
            <ChildrenFood />
            <ChildrenContent />
        </React.Fragment>
    );
};

export default withLocale(IndexPage);
