import React from "react";
import { Helmet } from "react-helmet";
import Header from "../components/addOns/Header";

export default function Home() {
  return (
    <div>
      <Helmet>
        <title>Virtual Lolly</title>
      </Helmet>
      <Header />
      <div>Home Page</div>
    </div>
  );
}
