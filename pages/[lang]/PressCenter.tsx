import React from "react";
import withLocale from "../../hocs/withLocale";
import NewPressCenter from "../../newComponents/NewPressCenter";

const IndexPage = () => {
    return (
        <React.Fragment>
            <NewPressCenter initialPageSize={12} />
        </React.Fragment>
    );
};

export default withLocale(IndexPage);
