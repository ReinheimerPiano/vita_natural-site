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
        className="footer cli-color-bg has-text-white-ter"
        style={{ height: "40rem" }}
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
            top: "45rem",
            left: "-20px",
            outLine: "0px",
          }}
        >
          <img src={whats} alt="whats" style={{ width: "8rem" }} />{" "}
        </Link>
        <div class="columns">
          <div class="column" style={{ paddingLeft: "10rem" }}>
            <div className="content has-text-centered">
              <img src={logo} alt="vitaNatural" style={{ width: "30vw" }} />{" "}
            </div>{" "}
            <div
              style={{ maxWidth: "100vw", paddingLeft: "8rem" }}
              className="columns"
            >
              <div className="column is-6">
                <section className="menu">
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
                        Ultímas Noticias{" "}
                      </Link>{" "}
                    </li>{" "}
                    <li>
                      <Link className="navbar-item" to="/">
                        Clínicas Parceiras{" "}
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
                </section>{" "}
              </div>{" "}
              <div className="column is-6">
                <section>
                  <ul className="menu-list subtitle is-5 has-text-white">
                    <li>
                      <Link className="navbar-item subtitle is-4 has-text-weight-bold ">
                        TRATAMENTOS{" "}
                      </Link>{" "}
                    </li>{" "}
                    <li>
                      <Link className="navbar-item" to="/">
                        Acupuntura{" "}
                      </Link>{" "}
                    </li>{" "}
                    <li>
                      <Link className="navbar-item" to="/">
                        Aromaterapia{" "}
                      </Link>{" "}
                    </li>{" "}
                    <li>
                      <Link className="navbar-item" to="/">
                        Auriculoterapia{" "}
                      </Link>{" "}
                    </li>{" "}
                    <li>
                      <Link className="navbar-item" to="/">
                        Ozônioterapia{" "}
                      </Link>{" "}
                    </li>{" "}
                    <li>
                      <Link className="navbar-item" to="/">
                        Terapia Photon Magnética{" "}
                      </Link>{" "}
                    </li>{" "}
                  </ul>{" "}
                </section>{" "}
              </div>{" "}
            </div>{" "}
          </div>
          <div
            className="column h-100 is-flex is-three-quarters-touch"
            style={{
              flexDirection: "column",
              alignItems: "start",
              paddingLeft: "10rem",
            }}
          >
            <section
              className="mt-4 is-flex is-vcentered"
              style={{ flexDirection: "row" }}
            >
              <img
                src={fone}
                className="h-70 pr-2"
                style={{ height: "3.5rem" }}
                alt="foneIcon"
              />
              <h1 className="title has-text-white" style={{ fontSize: "4rem" }}>
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
              <h2 className="title has-text-white" style={{ fontSize: "2rem" }}>
                www.clinicavitanatural.com.br
              </h2>
            </section>
            <section
              className="is-flex is-hcentered"
              style={{ flexDirection: "column", marginTop: "3rem" }}
            >
              <h2 className="title is-4 mb-1" style={{ color: "white" }}>
                <b>ENDEREÇO:</b>
              </h2>
              <p style={{ fontSize: "1.4rem" }}>
                SEPS EQ.705/905 Edifício Mont Blanc
              </p>
              <p style={{ fontSize: "1.4rem" }}>
                Bloco C - Sala 204. CEP: 70390-055 - Brasília DF.
              </p>
            </section>

            <section
              className="is-flex is-hcentered"
              style={{ flexDirection: "column", marginTop: "3rem" }}
            >
              <h2 className="title is-4 mb-1" style={{ color: "white" }}>
                <b>HORÁRIOS DE ATENDIMENTO:</b>
              </h2>
              <p style={{ fontSize: "1.4rem" }}>Segunda à sexta:</p>
              <p style={{ fontSize: "1.4rem" }}>8h às 17h (exceto feriados)</p>
            </section>
          </div>
        </div>
        <p
          style={{ fontSize: "1.4rem", textAlign: "center", marginTop: "4rem" }}
        >
          (C) 2020 - Todos os direitos reservados - Clínica Vita Natural
        </p>
        <div className="content has-text-centered cli-color-bg has-text-white-ter">
          <div className="container cli-color-bg has-text-white-ter"></div>{" "}
        </div>{" "}
      </footer>
    );
  }
};

export default Footer;
