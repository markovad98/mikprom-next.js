import React from "react";
import withLocale from "../../hocs/withLocale";
import PressCenterCards from "../../components/PressCenterCards"

const IndexPage = () => {
    return (
        <React.Fragment>
            <PressCenterCards/>
        </React.Fragment>
    );
};

export default withLocale(IndexPage);
