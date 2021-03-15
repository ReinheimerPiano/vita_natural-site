import React from "react";
import { Link } from "gatsby";

import logo from "../img/logo-line.svg";
import fone from "../img/fone-w.svg";
import email from "../img/email-w.svg";
import whats from "../img/whatsapp-btn.svg";

const Footer = class extends React.Component {
  render() {
    return (
      <footer
        className="footer cli-color-bg has-text-white-ter p-0 px-6"
        style={{ height: "auto" }}
      >
        <Link
          to="https://api.whatsapp.com/send?phone=5561984614005&text=Gostaria%20de%20saber%20mais!"
          className="p-0"
          target="_blank"
          style={{
            width: "8rem",
            borderRadius: "50px",
            backgroundColor: "transparent",
            border: "0px",
            position: "fixed",
            top: "75vh",
            left: "-20px",
            outLine: "0px",
            zIndex: "1000",
          }}
        >
          <img src={whats} alt="whats" style={{ width: "6rem" }} />{" "}
        </Link>
        <div class="columns py-6">
          <div class="column is-hidden-touch">
            <div className="content">
              <img src={logo} alt="vitaNatural" style={{ width: "70%" }} />{" "}
            </div>{" "}
            <div
              style={{ maxWidth: "100vw" }}
              className="columns is-8"
            >
              <div className="column">
                <div className="menu">
                  <ul className="menu-list subtitle is-5 has-text-white">
                    <li>
                      <Link
                        to="/"
                        className="navbar-item subtitle is-4 has-text-weight-bold "
                      >
                        INICIO{" "}
                      </Link>{" "}
                    </li>{" "}
                    <li>
                      <Link className="navbar-item" to="/about">
                        Quem somos{" "}
                      </Link>{" "}
                    </li>{" "}
                    <li>
                      <Link className="navbar-item" to="/blog">
                        Últimas Notícias{" "}
                      </Link>{" "}
                    </li>{" "}
                    <li>
                      <Link className="navbar-item" to="/contact">
                        Contato{" "}
                      </Link>{" "}
                    </li>{" "}
                    <li>
                      <a
                        className="navbar-item"
                        href="/admin/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Admin{" "}
                      </a>{" "}
                    </li>{" "}
                  </ul>{" "}
                </div>{" "}
              </div>{" "}
              <div className="column is-6">
                <div>
                  <ul className="menu-list subtitle is-5 has-text-white">
                    <li>
                      <Link
                        className="navbar-item subtitle is-4 has-text-weight-bold "
                        to="/tratamentos"
                      >
                        TRATAMENTOS{" "}
                      </Link>{" "}
                    </li>{" "}
                    <li>
                      <Link
                        className="navbar-item"
                        to="/tratamentos#acupuntura"
                      >
                        Acupuntura{" "}
                      </Link>{" "}
                    </li>{" "}
                    <li>
                      <Link
                        className="navbar-item"
                        to="/tratamentos#ozonioterapia"
                      >
                        Ozonioterapia{" "}
                      </Link>{" "}
                    </li>{" "}
                    <li>
                      <Link className="navbar-item" to="/tratamentos#photon">
                        Terapia Photon Magnética{" "}
                      </Link>{" "}
                    </li>{" "}
                    <li>
                      <Link
                        className="navbar-item"
                        to="/tratamentos#integrativa"
                      >
                        Estética Integrativa{" "}
                      </Link>{" "}
                    </li>{" "}
                  </ul>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>
          <div
            className="column h-100 is-flex"
            style={{
              flexDirection: "column",
              alignItems: "start",
            }}
          >
            <section
              className="mt-4 is-flex is-vcentered"
              style={{ flexDirection: "row" }}
            >
              <img
                src={fone}
                className="h-70 pr-2"
                style={{ height: "3rem" }}
                alt="foneIcon"
              />
              <h1 className="is-size-2 has-text-white is-size-4-mobile">
                61 98461-4005
              </h1>
            </section>

            <section
              className="mt-4 is-flex is-vcentered"
              style={{ flexDirection: "row" }}
            >
              <img
                src={email}
                className="h-70 pr-2"
                style={{ height: "2rem" }}
                alt="worldIcon"
              />
              <h2 className="is-size-3 has-text-white is-size-5-mobile">
                vitanaturaldf@gmail.com
              </h2>
            </section>
            <section
              className="is-flex is-hcentered"
              style={{ flexDirection: "column", marginTop: "3rem" }}
            >
              <h2
                className="title is-4 mb-1 is-size-5-mobile"
                style={{ color: "white" }}
              >
                <b>ENDEREÇO:</b>
              </h2>
              <p className="is-size-5-mobile" style={{ fontSize: "1.4rem" }}>
                SEPS EQ.705/905 Edifício Mont Blanc
              </p>
              <p className="is-size-5-mobile" style={{ fontSize: "1.4rem" }}>
                Bloco C - Sala 204. CEP: 70390-055 - Brasília DF.
              </p>
            </section>

            <section
              className="is-flex is-hcentered"
              style={{ flexDirection: "column", marginTop: "3rem" }}
            >
              <h2
                className="title is-4 mb-1 is-size-5-mobile"
                style={{ color: "white" }}
              >
                <b>HORÁRIOS DE ATENDIMENTO:</b>
              </h2>
              <p className="is-size-5-mobile" style={{ fontSize: "1.4rem" }}>
                Segunda à sexta:
              </p>
              <p className="is-size-5-mobile" style={{ fontSize: "1.4rem" }}>
                8h às 17h (exceto feriados)
              </p>
            </section>
          </div>
        </div>
        <p
          style={{ fontSize: "1.4rem", textAlign: "center", marginTop: "4rem" }}
          className="is-size-5-tablet is-size-7-mobile"
        >
          (C) 2020 - Todos os direitos reservados - Clínica Vita Natural
        </p>
      </footer>
    );
  }
};

export default Footer;
