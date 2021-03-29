import React from "react";
import { Helmet } from "react-helmet";
import Footer from "../components/addOns/Footer";
import Header from "../components/addOns/Header";
import { ErrorPage } from "../components/errorPage/ErrorPage";

export default function Error() {
  return (
    <div>
      <Helmet>
        <title>Virtual Lolly</title>
      </Helmet>
      <Header />
      <ErrorPage />
      <Footer />
    </div>
  );
}
