import React from "react";
import { Helmet } from "react-helmet";
import { CreateNew } from "../components/createNew/CreateNew";
import Layout from "../components/addOns/Layout";

export default function createNew() {
  return (
    <div>
      <Helmet>
        <title>Virtual Lolly</title>
      </Helmet>
      <Layout>
        <CreateNew />
      </Layout>
    </div>
  );
}
