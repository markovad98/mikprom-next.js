import React from "react";
import withLocale from "../../hocs/withLocale";
import ContactsInfo from "../../components/ContactsInfo";
import Layout from "../../layouts";

const Contacts = () => {
    return (
        <Layout>
            <ContactsInfo />
        </Layout>
    );
};

export default withLocale(Contacts);
