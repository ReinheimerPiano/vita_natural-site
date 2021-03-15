import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";
import HeroSlider from "../components/HeroSlider";
import Testimonials from "../components/Testimonials";
import BlogRoll from "../components/BlogRoll";
import Maps from "../components/Maps";
import AgendeDoctor from "../img/agende-doctor.svg";
import Face from "../img/face.svg";
import Insta from "../img/insta.svg";

export const IndexPageTemplate = ({
  title,
  subheading,
}) => (
    <div className="my-6 ">
      {/* <section className="hero is-medium is-white is-bold" style={{ paddingTop: "8rem" }}>
        <div className="hero-body">
          <div className="container">
            <h1 className="title mb-4" style={{ color: "#808080" }}>
              {title}
            </h1>
            <h2 className="subtitle mt-2">
              {subheading}
            </h2>
            <Link to="/about" ><button className="button is-medium is-active">Saiba Mais</button></Link>
          </div>
        </div>
      </section> */}
      <section className="is-flex is-vcentered is-hcentered has-background-light " style={{paddingTop: "5rem"}}>
        <h1
          className="title has-background-light px-4"
          style={{ color: "#808080", zIndex: "2" }}
        >

          Siga-nos em nossas redes sociais
                  </h1>
        <hr
          style={{
            width: "95vw",
            height: "2px",
            position: "absolute",
            background: "#808080",
            borderRadius: "50px",
            zIndex: "1",
          }}
        />
      </section>
      <section style={{ height: "15vh" }} className="hero is-light  is-medium has-background is-flex is-vcentered is-hcentered"> 
        <div className="column is-flex is-hcentered" style={{ flexDirection: "row" }}>
          <Link to="https://www.facebook.com/Vita-Natural-102768271798710" target="_blank" >
            <figure className="m-0 has-text-centered" style={{ padding: "1rem" }}>
              <img src={Face}
                style={{ height: "6rem" }}
                alt='' />
            </figure>
          </Link>
          <Link to="https://www.instagram.com/clinica_vita_natural/" target="_blank">
            <figure className="m-0 has-text-centered" style={{ padding: "1rem" }}>
              <img src={Insta}
                style={{ height: "6rem"}}
                alt='' />
            </figure>
          </Link>
        </div>
      </section>
      <section className="hero is-large cli-color-bg is-bold">
        <div className="hero-body py-6">
          <div className="container">
                <h1 className="title mb-4 mt-6" style={{ color: "#fff" }}>
                  Agende uma consulta
            </h1>
            <div className="columns is-mobile">
              <div className="column is-8 is-flex is-hcentered" style={{ flexDirection: "column" }}>
                <h2 className="subtitle mt-2 is-size-6-mobile" style={{ color: "#fff" }}>
                  Clique no botão abaixo para entrar em contato.
            </h2>
                <Link to="/contact" >
                  <button className="button is-size-2 is-success has-text-weight-bold is-size-3-tablet is-size-4-mobile" style={{ paddingRight: "3rem", paddingLeft: "3rem", borderRadius: "50px" }}>
                    Eu quero marcar
              </button>
                </Link>
              </div>
              <div className="column is-4">
                <figure className="m-0 has-text-centered" style={{ padding: "2rem", height: "100%", objectFit: "contain"}}>
                  <img src={AgendeDoctor}
                    className="h-100"
                    alt='AgendeDoctor' />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

IndexPageTemplate.propTypes = {
  title: PropTypes.string,
  subheading: PropTypes.string,
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <HeroSlider />
      <IndexPageTemplate
        title={frontmatter.title}
        subheading={frontmatter.subheading}
      />
      <Testimonials />
      <BlogRoll />
      <Maps />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        subheading
      }
    }
  }
`;



