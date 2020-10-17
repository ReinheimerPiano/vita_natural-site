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
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href={`${withPrefix("/")}img/apple-touch-icon.png`}
        />{" "}
        <link
          rel='icon'
          type='image/png'
          href={`${withPrefix("/")}img/favicon-32x32.png`}
          sizes='32x32'
        />
        <link
          rel='icon'
          type='image/png'
          href={`${withPrefix("/")}img/favicon-16x16.png`}
          sizes='16x16'
        />
        <link
          rel='mask-icon'
          href={`${withPrefix("/")}img/safari-pinned-tab.svg`}
          color='#ff4400'
        />
        <meta name='theme-color' content='#fff' />
        <meta property='og:type' content='business.business' />
        <meta property='og:title' content={title} />{" "}
        <meta property='og:url' content='/' />
        <meta
          property='og:image'
          content={`${withPrefix("/")}img/og-image.jpg`}
        />{" "}
      </Helmet>{" "}
      <Header/>
      <Navbar />
      <div> {children} </div>
      <Footer />
    </div>
  );
};

export default TemplateWrapper;
