import React from "react";
import withLocale from "../../hocs/withLocale";
import useTranslation from "../../hooks/useTranslation";
import Header from "../../layouts/Header";

const IndexPage = () => {
    const { t } = useTranslation();

    return (
        <React.Fragment>
            <Header />
            <div className="header">{t("hello")}</div>
        </React.Fragment>
    );
};

export default withLocale(IndexPage);
