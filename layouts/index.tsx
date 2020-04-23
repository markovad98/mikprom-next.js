import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import MobileHeader from "./MobileHeader";

type TProps = {
  children: JSX.Element | JSX.Element[];
};

const Layout: React.FC<TProps> = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <MobileHeader />
        {children}
      <Footer />
    </React.Fragment>


  );
};

export default Layout;
