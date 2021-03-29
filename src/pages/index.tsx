import React from "react";
import { Helmet } from "react-helmet";
import Footer from "../components/addOns/Footer";
import Header from "../components/addOns/Header";
import { Landing } from "../components/landing/Landing";

export default function Home() {
  return (
    <div>
      <Helmet>
        <title>Virtual Lolly</title>
      </Helmet>
      <Header />
      <Landing />
      <Footer />
    </div>
  );
}
