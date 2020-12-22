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
            className="title has-text-weight-bold my-6 has-background-light px-6"
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
        <section style={{ height: "70vh" }}>
          <Slider {...settings}>
            <div
              style={{ height: "70vh" }}
              className="hero is-light  is-medium has-background is-flex is-vcentered is-hcentered"
            >
              <img
                className="background-contain is-transparent"
                src={aspas}
                style={{ width: "94vw", marginTop: "-12rem" }}
              />
              <div className="hero-body">
                <div
                  className="container is-flex is-vcentered id-hcentered"
                  style={{ flexDirection: "column" }}
                >
                  <h2 className="subtitle subtitle has-text-centered is-size-5-tablet is-size-7-mobile">
                  Eu declaro a quem interessar que realizei o tratamento pós cirúrgico em uma amputação  de um dedo no pé esquerdo. 
                  O tratamento foi realizado com ozonioterapia na  clinica vita natural. Segundo os médicos que realizaram a amputação  
                  eu ficaria 12 meses sem poder calçar sapato e com o tratamento realizado na clinica vita natural com ozonioterapia foi necessário apenas 90 dias. 
                  Recomendo quem precisar de tratar feridas, pé diabético ou pós cirúrgico a clinica vita natural.
                  </h2>
                  {/* <img
                    className="mt-3"
                    src={pac1}
                    style={{
                      width: "15vh",
                      height: "15vh",
                      border: "3px solid #808080",
                      borderRadius: "50%",
                    }}
                  /> */}
                  <h1 className="title has-text-link has-text-weight-bold mt-3 is-size-3-tablet is-size-4-mobile">
                  JOSÉ CARDOSO  – BRASÍLIA DF.
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
                style={{ width: "94vw", marginTop: "-12rem" }}
              />
              <div className="hero-body">
                <div
                  className="container is-flex is-vcentered id-hcentered"
                  style={{ flexDirection: "column" }}
                >
                  <h2 className="subtitle has-text-centered is-size-5-tablet is-size-7-mobile">
                  Eu cheguei na clínica com muitas dores de coluna, não conseguia trabalhar por causa de fortes dores na região lombar.
                  Em novembro realizei algumas sessões de Ozonioterapia com o Dr. David Rodrigues. Recomendo o tratamento, pois para mim foi um sucesso.
                  </h2>
                  {/* <img
                    className="mt-3"
                    src={pac2}
                    style={{
                      width: "15vh",
                      height: "15vh",
                      border: "3px solid #808080",
                      borderRadius: "50%",
                    }}
                  /> */}
                  <h1 className="title has-text-link has-text-weight-bold mt-3 is-size-3-tablet is-size-4-mobile">
                  Evânio Souza – IMPERATRIZ MA.
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
                style={{ width: "94vw", marginTop: "-12rem" }}
              />
              <div className="hero-body">
                <div
                  className="container is-flex is-vcentered id-hcentered"
                  style={{ flexDirection: "column" }}
                >
                  <h2 className="subtitle has-text-centered is-size-5-tablet is-size-7-mobile">
                  Eu sofria muito com dor no calcanhar direito. Na verdade, o diagnóstico médico era fascite plantar. Fiquei conhecendo a Clínica Vita Natural,
                  realizei algumas sessões de terapia pohton magnética e hoje estou livre e feliz, sem dores nos pés. Recomendo muito essa terapia com o Dr. David Rodrigues.
                  </h2>
                  {/* <img
                    className="mt-3"
                    src={pac2}
                    style={{
                      width: "15vh",
                      height: "15vh",
                      border: "3px solid #808080",
                      borderRadius: "50%",
                    }}
                  /> */}
                  <h1 className="title has-text-link has-text-weight-bold mt-3 is-size-3-tablet is-size-4-mobile">
                    MARIA LUIZA ZORZATTO – BRASÍLIA DF.
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
                style={{ width: "94vw", marginTop: "-12rem" }}
              />
              <div className="hero-body">
                <div
                  className="container is-flex is-vcentered id-hcentered"
                  style={{ flexDirection: "column" }}
                >
                  <h2 className="subtitle has-text-centered is-size-5-tablet is-size-7-mobile">
                  Na época em que procurei a Clínica Vita Natural, sentia um tremor no meu rosto, como se fosse o início de um derrame. Realizei um tratamento com 
                  eletroacupuntura e me senti muito bem após as sessões. Fiquei satisfeito com o atendimento oferecido pelo Dr. David Rodrigues.
                  </h2>
                  {/* <img
                    className="mt-3"
                    src={pac2}
                    style={{
                      width: "15vh",
                      height: "15vh",
                      border: "3px solid #808080",
                      borderRadius: "50%",
                    }}
                  /> */}
                  <h1 className="title has-text-link has-text-weight-bold mt-3 is-size-3-tablet is-size-4-mobile">
                  EDSON BARBOSA – BRASÍLIA DF.
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
                style={{ width: "94vw", marginTop: "-12rem" }}
              />
              <div className="hero-body">
                <div
                  className="container is-flex is-vcentered id-hcentered"
                  style={{ flexDirection: "column" }}
                >
                  <h2 className="subtitle has-text-centered is-size-5-tablet is-size-7-mobile">
                  Tive um derrame facial e fiquei com a pálpebra e a boca repuxadas. Um amigo me indicou os tratamentos oferecidos pela Clínica Vita Natural. 
                  Realizei sessões de terapia photon magnética, eletroacupuntura e ozonioterapia. 
                  Os resultados foram muito satisfatórios. Recomendo as terapias que a Clínica oferece.
                  </h2>
                  {/* <img
                    className="mt-3"
                    src={pac2}
                    style={{
                      width: "15vh",
                      height: "15vh",
                      border: "3px solid #808080",
                      borderRadius: "50%",
                    }}
                  /> */}
                  <h1 className="title has-text-link has-text-weight-bold mt-3 is-size-3-tablet is-size-4-mobile">
                  JANETH C REGO VALADARES – BRASÍLIA – DF
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
