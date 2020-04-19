import React from "react";
import Header from "./Header";
import Footer from "./Footer";

type TProps = {
  children: JSX.Element | JSX.Element[];
};

const Layout: React.FC<TProps> = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
        {children}
      <Footer />
    </React.Fragment>


  );
};

export default Layout;
