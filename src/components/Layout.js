import React from "react";
import { Helmet } from "react-helmet";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import "./all.sass";
import useSiteMetadata from "./SiteMetadata";
import { withPrefix } from "gatsby";

import logo from "../img/logo-full.svg";

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <div>
      <Helmet>
        <html lang='pt-BR' />
        <title> {title} </title>{" "}
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"/>
        <meta name='description' content={description} />
        <link rel='shortcut icon' href={logo} />
               <meta name='theme-color' content='#fff' />
        <meta property='og:type' content='business.business' />
        <meta property='og:title' content={title} />{" "}
        <meta property='og:url' content='/' />
      </Helmet>{" "}
      <Header/>
      <Navbar />
      <div> {children} </div>
      <Footer />
    </div>
  );
};

export default TemplateWrapper;
