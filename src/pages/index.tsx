import React from "react";
import { Helmet } from "react-helmet";
import { Landing } from "../components/landing/Landing";
import Layout from "../components/addOns/Layout";

export default function Home() {
  return (
    <div>
      <Helmet>
        <title>Virtual Lolly</title>
      </Helmet>
      <Layout>
        <Landing />
      </Layout>
    </div>
  );
}
