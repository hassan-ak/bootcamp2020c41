import React from "react";
import { Helmet } from "react-helmet";
import { ErrorPage } from "../components/errorPage/ErrorPage";
import Layout from "../components/addOns/Layout";

export default function Error() {
  return (
    <div>
      <Helmet>
        <title>Virtual Lolly</title>
      </Helmet>
      <Layout>
        <ErrorPage />
      </Layout>
    </div>
  );
}
