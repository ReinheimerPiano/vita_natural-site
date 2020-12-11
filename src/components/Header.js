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
      <section className='' style={{height: '20vh', margin: "12.4px;", marginBottom: "0px", backgroundColor: "#CCE4B7"}}>
        <div className="columns m-0 h-100">
          <div className="column is-one-quarter is-full-mobile is-full-tablet p-0 cli-color-bg h-100 ">
            <Link to='/'>
              <figure className="m-0 has-text-centered" style={{padding: "2rem"}}>
                <img src={logo}
                  style={{width: "70%",height: "15vh"}}
                  alt='VitaNatural'/>
              </figure>
            </Link>
          </div>
          <div className="column h-100 is-flex is-vcentered is-hcentered is-one-quarter-desktop is-hidden-mobile">
            <img src={fone}
              className="h-70 pr-2"
              style={{height: "2.7rem"}}
              alt='foneIcon'/>
            <h1 className="title is-2 cli-color has-text-centered is-size-4-tablet">61 98461-4005</h1> 
          </div>

          <div className="column h-100 is-flex is-hcentered is-hidden-mobile" style={{flexDirection: "column"}}>
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
              <img src={email}  
                className="h-70 pr-2"
                style={{height: "2rem"}}
                alt='emailIcon'/>
              <h2 className='title is-4 cli-color is-size-6-tablet'>vitanaturaldf@gmail.com</h2>
            </section>
          </div>
        </div>
      </section>
    );
  }
};

export default Navbar;
