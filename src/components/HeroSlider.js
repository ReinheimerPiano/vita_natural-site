import React from "react";

import { Link } from "gatsby";
import Slider from "react-slick";
import heroSlide1 from "../img/hero1.jpg";
import heroSlide2 from "../img/hero2.png";

import acupuntura from "../img/acupuntura-ico.svg";
import facial from "../img/facial-ico.svg";
import magnetica from "../img/magnetica-ico.svg";
import ozonio from "../img/ozonio-ico.svg";

const HeroSlider = class extends React.Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 2000,
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplaySpeed: 10000,
    };
    return (
      <session>
        <Slider {...settings}>
          <div className="hero is-dark is-large has-background">
            <img
              className="background"
              src={heroSlide1}
              style={{ width: "100vw" }}
            />
            <div className="hero-body" style={{ height: "55vh" }}></div>
          </div>
          <div className="hero is-dark is-large has-background">
            <img
              className="background"
              src={heroSlide2}
              style={{ width: "100vw" }}
            />
            <div className="hero-body" style={{ height: "55vh" }}></div>
          </div>
        </Slider>

        <session class="is-flex is-hcentered is-hidden-touch" style={{
          width: "100vw",
          flexDirection: "row"
        }}>
          <div
            style={{
              position: "absolute",
              height: "20rem",
              width: "80vw",
              marginLeft: "auto",
              marginTop: "-10rem",
            }}>
            <div className="columns">
              <div className="column">
                <div
                  class="card cli-color-bg has-text-white"
                  style={{
                    height: "17rem",
                    borderRadius: "30px",
                    padding: "1rem",
                  }}
                >
                  <div class="content p-3 has-text-weight-bold">
                    <h4 className="has-text-white">ACUPUNTURA</h4>
                    <p style={{ fontSize: "1rem" }}>
                      Descubra como sua saúde pode melhorar através dessa técnica
                      milenar reconhecida em todo mundo!
                  </p>
                    <Link to="/tratamentos#acupuntura">
                      <button
                        class="button is-small is-primary"
                        style={{
                          border: "1px solid white",
                          borderRadius: "20px",
                          color: "white",
                        }}
                      >
                        Saiba Mais
                  </button></Link>
                    <figure
                      class="image"
                      style={{
                        position: "absolute",
                        width: "8rem",
                        right: "0rem",
                        bottom: "1rem",
                      }}
                    >
                      <img src={acupuntura} />
                    </figure>
                  </div>
                </div>
              </div>
              <div className="column">
                <div
                  class="card cli-color-bg has-text-white"
                  style={{
                    height: "17rem",
                    borderRadius: "30px",
                    padding: "1rem",
                  }}
                >
                  <div class="content p-3 has-text-weight-bold">
                    <h4 className="has-text-white">OZÔNIOTERAPIA</h4>
                    <p style={{ fontSize: "1rem" }}>
                      Descubra como sua saúde pode melhorar através dessa técnica
                      milenar reconhecida em todo mundo!
                  </p>
                    <Link to="/tratamentos#ozonioterapia">
                      <button
                        class="button is-small is-primary"
                        style={{
                          border: "1px solid white",
                          borderRadius: "20px",
                          color: "white",
                        }}
                      >
                        Saiba Mais
                  </button></Link>
                    <figure
                      class="image"
                      style={{
                        position: "absolute",
                        width: "8rem",
                        right: "0rem",
                        bottom: "1rem",
                      }}
                    >
                      <img src={ozonio} />
                    </figure>
                  </div>
                </div>
              </div>
              <div className="column">
                <div
                  class="card cli-color-bg has-text-white"
                  style={{
                    height: "17rem",
                    borderRadius: "30px",
                    padding: "1rem",
                  }}
                >
                  <div class="content p-3 has-text-weight-bold">
                    <h4 className="has-text-white">TERAPIA PHOTON MAGNÉTICA</h4>
                    <p style={{ fontSize: "1rem" }}>
                      Descubra como sua saúde pode melhorar através dessa técnica
                      milenar reconhecida em todo mundo!
                  </p>
                    <Link to="/tratamentos#photon">
                      <button
                        class="button is-small is-primary"
                        style={{
                          border: "1px solid white",
                          borderRadius: "20px",
                          color: "white",
                        }}
                      >
                        Saiba Mais
                  </button></Link>
                    <figure
                      class="image"
                      style={{
                        position: "absolute",
                        width: "8rem",
                        right: "0rem",
                        bottom: "1rem",
                      }}
                    >
                      <img src={magnetica} />
                    </figure>
                  </div>
                </div>
              </div>
              <div className="column">
                <div
                  class="card cli-color-bg has-text-white"
                  style={{
                    height: "17rem",
                    borderRadius: "30px",
                    padding: "1rem",
                  }}
                >
                  <div class="content p-3 has-text-weight-bold">
                    <h4 className="has-text-white">ESTÉTICA INTEGRATIVA</h4>
                    <p style={{ fontSize: "1rem" }}>
                      Descubra como sua saúde pode melhorar através dessa técnica
                      milenar reconhecida em todo mundo!
                  </p>
                    <Link to="/tratamentos#integrativa">
                      <button
                        class="button is-small is-primary"
                        style={{
                          border: "1px solid white",
                          borderRadius: "20px",
                          color: "white",
                        }}
                      >
                        Saiba Mais
                  </button>
                    </Link>
                    <figure
                      class="image"
                      style={{
                        position: "absolute",
                        width: "5rem",
                        height: "5rem",
                        right: "0rem",
                        bottom: "6rem",
                      }}
                    >
                      <img src={facial} />
                    </figure>
                  </div>
                </div>
              </div>
              {/* <div className="column">
                <div
                  class="card cli-color-bg has-text-white"
                  style={{
                    height: "17rem",
                    borderRadius: "30px",
                    padding: "1rem",
                  }}
                >
                  <div class="content p-3 has-text-weight-bold">
                    <h4 className="has-text-white">ESTÉTICA INTEGRATIVA</h4>
                    <p style={{ fontSize: "1rem" }}>
                      Descubra como sua saúde pode melhorar através dessa técnica
                      milenar reconhecida em todo mundo!
                  </p>
                    <button
                      class="button is-small is-primary"
                      style={{
                        border: "1px solid white",
                        borderRadius: "20px",
                        color: "white",
                      }}
                    >
                      Saiba Mais
                  </button>
                    <figure
                      class="image"
                      style={{
                        position: "absolute",
                        width: "5rem",
                        height: "5rem",
                        right: "0rem",
                        bottom: "6rem",
                      }}
                    >
                      <img src={facial} />
                    </figure>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </session>
      </session>
    );
  }
};

export default HeroSlider;
