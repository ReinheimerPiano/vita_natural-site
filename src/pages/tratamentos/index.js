import React from "react";
import { navigate } from "gatsby-link";
import { Link, graphql } from "gatsby";
import Layout from "../../components/Layout";
import acupuntura from "../../img/acupuntura.png";
import ozonio from "../../img/ozonioterapia.png";
import terapiaphontonmagnetica from "../../img/terapiaphontonmagnetica.png";
import esteticaintegrada from "../../img/esteticaintegrada.png";
import AgendeDoctor from "../../img/agende-doctor.svg";


function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isValidated: false };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch((error) => alert(error));
  };

  render() {
    return (
      <Layout>
        <section className="section" style={{ paddingTop: "5rem" }}>
          <div className="container">
            <div className="content">
              <section className="is-flex is-vcentered is-hcentered">
                <h1
                  className="title has-text-weight-bold my-6 has-background-white px-6"
                  style={{ color: "#808080", zIndex: "2" }}
                >
                  Tratamentos
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
              <section className="mt-6" id="acupuntura">
                <div className="columns">
                  <div className="column is-half is-hidden-touch">
                    <figure
                      class="image"
                      style={{
                      }}
                    >
                      <img src={acupuntura} />
                    </figure>
                  </div>
                  <div className="column is-half">
                    <h1 className="title cli-color">ACUPUNTURA</h1>
                    <p>Um ramo da Medicina Tradicional Chinesa, surgida na China há aproximadamente 4.500 anos, que se utiliza de agulhas que são introduzidas em pontos precisos do corpo, cuja ação tem a propriedade de restabelecer o equilíbrio do organismo do paciente e tratar uma diversidade de doenças e até mesmo provocar efeito anestésico.</p>
                    <p>Conheça os principais benefícios da acupuntura! </p>
                    <p>Como a acupuntura pode ser empregada no tratamento de diversas doenças e sintomas:</p>
                    <ul>
                      <li>Tratamento para a insônia.</li>
                      <li>Emagrecimento e regulação do metabolismo.</li>
                      <li>Controle da ansiedade, estresse e depressão.</li>
                      <li>Alívio da dor nas costas e no joelho.</li>
                      <li>Redução de problemas do sistema digestivo, entre outros.</li>
                    </ul>
                  </div>
                </div>
              </section>
              <section className="mt-6" id="ozonioterapia">
                <div className="columns">
                  <div className="column is-half is-hidden-touch">
                    <figure
                      class="image"
                      style={{
                      }}
                    >
                      <img src={ozonio} />
                    </figure>
                  </div>
                  <div className="column is-half">
                    <h1 className="title cli-color">OZONIOTERAPIA</h1>
                    <p>Técnica terapêutica que utiliza a aplicação de uma mistura dos gases oxigênio e ozônio; ou seja, o ozônio medicinal, que é obtido a partir do oxigênio puro medicinal. </p>
                    <p>A OZONIOTERAPIA pode ser utilizada no tratamento de diversas patologias, de maneira isolada ou complementar.</p>
                    <p>A técnica tem sido utilizada há séculos em países desenvolvidos, com benefícios comprovados por inúmeros estudos, em virtude das excelentes propriedades medicinais oferecidas pelo OZÔNIO MEDICINAL, tais como:</p>
                    <ul>
                      <li>Anti-inflamatórias;</li>
                      <li>Antissépticas;</li>
                      <li>Modulação do estresse oxidativo;</li>
                      <li>Melhora da circulação periférica e da oxigenação.</li>
                      <li>Melhora o sistema Imunológico </li>
                      <li>Feridas de origem vascular, arterial ou venosas, úlceras diabéticas e por insuficiência arterial.</li>
                      <li>Dores articulares decorrentes de inflamações crônicas.</li>
                      <li>Vários tipos de câncer, ajudando a combater tumores e reduzindo os efeitos colaterais da Radioterapia e da Quimioterapia.</li>
                      <li>Germicida e muitos outras patologias....</li>
                    </ul>
                  </div>
                </div>
              </section>
              <section className="mt-6" id="photon">
                <div className="columns">
                  <div className="column is-half is-hidden-touch">
                    <figure
                      class="image"
                      style={{
                      }}
                    >
                      <img src={terapiaphontonmagnetica} />
                    </figure>
                  </div>
                  <div className="column is-half">
                    <h1 className="title cli-color">TERAPIA PHOTON MAGNÉTICA</h1>
                    <p>A TERAPIA PHOTON MAGNÉTICA utiliza energia magnética e representa saúde e harmonia para o seu corpo.</p>
                    <p>O QUE É E COMO FUNCIONA?</p>
                    <p>Trata-se de procedimentos não invasivos, seguros e sem efeitos secundários que proporcionam a regulação do metabolismo e o fortalecimento do organismo.</p>
                    <p>As ondas magnéticas atravessam os tecidos, chegam aos órgãos internos e ao sistema circulatório e equilibram a energia corporal. Dessa forma, os campos magnéticos, ao entrarem nas células, provocam a sua restauração de forma a frear ou retardar a degeneração das mesmas.</p>
                    <p>PARA QUE PODE SER UTILIZADA?</p>
                    <p>As terapias magnéticas atuam diretamente sobre o sistema ósseo, muscular, articular, nervoso e circulatório. </p>
                    <p>Os resultados positivos da TERAPIA PHOTON MAGNÉTICA podem ser observados em várias ações específicas:</p>
                    <ol>
                      <li>Ação anti-inflamatória; </li>
                      <li>Ação antálgica (combate à dor);</li>
                      <li>Ação anti-estresse;</li>
                      <li>Ação reparadora dos tecidos;</li>
                      <li>Ação estimulante do sistema endócrino;</li>
                      <li>Ação anti-edematosa; </li>
                      <li>Ação analgésica, curativa ou estética;</li>
                      <li>Ação na depressão, estresse e distúrbios do sono;</li>
                      <li>Ação na melhoria da circulação sanguínea e na ativação e proteção das células necessárias para uma vida saudável;</li>
                      <li>Excelente ação nas dores das pernas, tais como: varizes e cãibras;</li>
                      <li>Ação benéfica no caso de enxaquecas, dores renais, artrites, artroses, entre outros.</li>
                    </ol>
                  </div>
                </div>
              </section>
              <section className="mt-6" id="integrativa">
                <div className="columns">
                  <div className="column is-half is-hidden-touch">
                    <figure
                      class="image"
                      style={{
                      }}
                    >
                      <img src={esteticaintegrada} />
                    </figure>
                  </div>
                  <div className="column is-half">
                    <h1 className="title cli-color">ESTÉTICA INTEGRATIVA</h1>
                    <p>O nosso corpo é exposto a muitas substâncias e toxinas ao longo da vida, que geram lesões à pele que se passam desapercebidas até desencadearem problemas crônicos. Pensando nisso, criou-se a Estética Integrativa, terapias complementares menos agressivas à pele, capazes de analisar a face do paciente de uma maneira geral, considerando contexto emocional, mental, espiritual e físico. </p>
                    <p>Assim, o tratamento é super personalizado e exclusivo, pois dependerá do estado de cada paciente.</p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </section>
        <section className="hero is-large cli-color-bg is-bold mb-6">
          <div className="hero-body py-2">
            <div className="container">
              <div className="columns">
                <div className="column is-flex is-hcentered" style={{ flexDirection: "column" }}>
                  <h1 className="title mb-4 mt-6" style={{ color: "#fff" }}>
                    Agende uma consulta
                        </h1>
                  <h2 className="subtitle mt-2" style={{ color: "#fff" }}>
                    Clique no botão abaixo para entrar em contato.
                        </h2>
                  <Link to="/contact" >
                    <button className="button is-large is-size-2 is-success has-text-weight-bold is-size-3-tablet is-size-4-mobile" style={{ paddingRight: "3rem", paddingLeft: "3rem", borderRadius: "50px" }}>
                      Eu quero marcar
                          </button>
                  </Link>
                </div>
                <div className="column">
                  <figure className="m-0 h-100 has-text-centered" style={{ padding: "2rem" }}>
                    <img src={AgendeDoctor}
                      className="h-100"
                      alt='AgendeDoctor' />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
