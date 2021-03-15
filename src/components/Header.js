import React from "react";

import { Link } from "gatsby";
import logo from "../img/logo-full.svg";
import fone from "../img/fone.svg";
import loc from "../img/loc.svg";
import email from "../img/email.svg";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: "",
    };
  }

  render() {
    return (
      <section
        className=""
        style={{ height: "20vh", margin: "12.4px;", marginBottom: "0px" }}
      >
        <div className="row">
          <div className="columns is-mobile">
            <div className="column is-6-mobile p-0 cli-color-bg">
              <Link to="/">
                <figure
                  className="m-0 has-text-centered"
                  style={{ padding: "2rem" }}
                >
                  <img
                    src={logo}
                    style={{ width: "70%", height: "15vh" }}
                    alt="VitaNatural"
                  />
                </figure>
              </Link>
            </div>
            <div className="column is-6-mobile p-0" style={{ backgroundColor: "#CCE4B7" }}>
              <div className="h-100 is-flex is-vcentered is-hcentered">
                <img
                  src={fone}
                  className="h-70 pr-2"
                  style={{ height: "2.7rem" }}
                  alt="foneIcon"
                />
                <h1 className="title is-2 cli-color has-text-centered is-size-4-tablet is-size-5-mobile">
                  61 98461-4005
                </h1>
              </div>
            </div>
            <div
              className="column is-hidden-touch p-0"
              style={{ backgroundColor: "#CCE4B7" }}
            >
              <div
                className="is-flex is-hcentered h-100"
                style={{ flexDirection: "column" }}
              >
                <div
                  className="is-flex is-vcentered"
                  style={{ flexDirection: "row" }}
                >
                  <img
                    src={loc}
                    className="h-70 pr-2"
                    style={{ height: "2.7rem", marginTop: "2rem" }}
                    alt="locIcon"
                  />
                  <div>
                    <h2 className="title is-4 mb-1" style={{ color: "gray" }}>
                      <b>ENDEREÇO:</b>
                    </h2>
                    <p>SEPS EQ.705/905 Edifício Mont Blanc</p>
                    <p>Bloco C - Sala 204. CEP: 70390-055 - Brasília DF.</p>
                  </div>
                </div>
                <div
                  className="mt-4 is-flex is-vcentered"
                  style={{ flexDirection: "row" }}
                >
                  <img
                    src={email}
                    className="h-70 pr-2"
                    style={{ height: "2rem" }}
                    alt="emailIcon"
                  />
                  <h2 className="title is-4 cli-color is-size-6-tablet">
                    vitanaturaldf@gmail.com
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
};

export default Navbar;
