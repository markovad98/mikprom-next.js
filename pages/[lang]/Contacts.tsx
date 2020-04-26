import React from "react";
import withLocale from "../../hocs/withLocale";
import ContactsInfo from "../../components/ContactsInfo";

const Contacts = () => {
    return (
        <React.Fragment>
            <ContactsInfo />
        </React.Fragment>
    );
};

export default withLocale(Contacts);
