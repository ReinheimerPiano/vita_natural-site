import React from "react";

import { Link } from "gatsby";
import logo from "../img/logo-full.svg";
import fone from "../img/fone.svg";
import loc from "../img/loc.svg";
import world from "../img/world.svg";

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
      <section className='' style={{height: '15rem', margin: "12.4px;"}}>
        <div className="columns h-100">
          <div className="column is-one-quarter is-full-mobile is-full-tablet p-0 cli-color-bg h-100">
            <Link to='/'>
              <figure className="m-0 h-100 has-text-centered" style={{padding: "2rem"}}>
                <img src={logo}
                  className="h-100"
                  alt='VitaNatural'/>
              </figure>
            </Link>
          </div>
          <div className="column h-100 is-flex is-vcentered is-hcentered is-three-quarters-touch">
            <img src={fone}
              className="h-70 pr-2"
              style={{height: "2.7rem"}}
              alt='foneIcon'/>
            <h1 className="title is-2 cli-color has-text-centered">61 98461-4005</h1> 
          </div>

          <div className="column h-100 is-flex is-hcentered" style={{flexDirection: "column"}}>
            <section className='is-flex is-vcentered' style={{flexDirection: "row"}}>
              <img src={loc}
                className="h-70 pr-2"
                style={{height: "2.7rem", marginTop: "2rem"}}
                alt='locIcon'/>
                <div>
                  <h2 className='title is-4 mb-1' style={{color: "gray"}}><b>ENDEREÇO:</b></h2>
                  <p>SEPS EQ.705/905 Edifício Mont Blanc</p>
                  <p>Bloco C - Sala 204. CEP: 70390-055 - Brasília DF.</p>
                </div>
            </section>
            <section className='mt-4 is-flex is-vcentered' style={{flexDirection: "row"}}>
              <img src={world}  
                className="h-70 pr-2"
                style={{height: "2rem"}}
                alt='worldIcon'/>
              <h2 className='title is-4 cli-color'>www.clinicavitanatural.com.br</h2>
            </section>
          </div>
        </div>
      </section>
    );
  }
};

export default Navbar;
