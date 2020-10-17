import React from "react";

import Slider from "react-slick";

import pac1 from "../img/girl.svg";
import pac2 from "../img/boy.svg";
import aspas from "../img/aspas.svg";

const Testimonials = class extends React.Component {
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
      <div>
        <section className="is-flex is-vcentered is-hcentered has-background-light">
          <h1
            className="title is-size-1 has-text-weight-bold my-6 has-background-light px-6"
            style={{ color: "#808080", zIndex: "2" }}
          >
            Depoimentos de pacientes
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
        <section style={{ height: "80vh" }}>
          <Slider {...settings}>
            <div
              style={{ height: "80vh" }}
              className="hero is-light  is-medium has-background is-flex is-vcentered is-hcentered"
            >
              <img
                className="background-contain is-transparent"
                src={aspas}
                style={{ width: "94vw", marginTop: "-25rem" }}
              />
              <div className="hero-body">
                <div
                  className="container is-flex is-vcentered id-hcentered"
                  style={{ flexDirection: "column" }}
                >
                  <h2 className="subtitle subtitle has-text-centered">
                    Des que iniciei o tratamento na Clínica Vita Natural Lorem
                    ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                    nonummy nibh euismod tincidunt ut laoreet dolore magna
                    aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                    nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                    aliquip ex ea commodo consequat. Duis autem vel eum iriure
                    dolor in hendrerit in vulputate velit esse molestie
                    consequat, vel illum dolore eu feugiat nulla facilisis at
                    vero eros et accumsan et iusto odio dignissim qui blandit
                    praesent luptatum zzril delenit augue duis dolore te feugait
                    nulla facilisi.
                  </h2>
                  <img
                    className="mt-3"
                    src={pac1}
                    style={{
                      width: "20rem",
                      height: "20rem",
                      border: "3px solid #808080",
                      borderRadius: "50%",
                    }}
                  />
                  <h1 className="title has-text-link has-text-weight-bold mt-3">
                    Maria das Dores
                  </h1>
                </div>
              </div>
            </div>
            <div
              style={{ height: "80vh" }}
              className="hero is-light  is-medium has-background is-flex is-vcentered is-hcentered"
            >
              <img
                className="background-contain is-transparent"
                src={aspas}
                style={{ width: "94vw", marginTop: "-25rem" }}
              />
              <div className="hero-body">
                <div
                  className="container is-flex is-vcentered id-hcentered"
                  style={{ flexDirection: "column" }}
                >
                  <h2 className="subtitle has-text-centered">
                    Des que iniciei o tratamento na Clínica Vita Natural Lorem
                    ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                    nonummy nibh euismod tincidunt ut laoreet dolore magna
                    aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                    nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                    aliquip ex ea commodo consequat. Duis autem vel eum iriure
                    dolor in hendrerit in vulputate velit esse molestie
                    consequat.
                  </h2>
                  <img
                    className="mt-3"
                    src={pac2}
                    style={{
                      width: "20rem",
                      height: "20rem",
                      border: "3px solid #808080",
                      borderRadius: "50%",
                    }}
                  />
                  <h1 className="title has-text-link has-text-weight-bold mt-3">
                    João da Silva
                  </h1>
                </div>
              </div>
            </div>
          </Slider>
        </section>
      </div>
    );
  }
};

export default Testimonials;
