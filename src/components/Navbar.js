import React from "react";

import { Link } from "gatsby";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: "",
    };
  }

  toggleHamburger = () => {
    this.setState(
      {
        active: !this.state.active,
      },
      () => {
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active",
            })
          : this.setState({
              navBarActiveClass: "",
            });
      }
    );
  };

  render() {
    return (
      <nav
        className='navbar is-transparent-op'
        role='navigation'
        aria-label='main-navigation'>
        <div className='container'>
          <div className='navbar-brand'>

            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target='navMenu'
              onClick={() => this.toggleHamburger()}>
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id='navMenu'
            className={`navbar-menu ${this.state.navBarActiveClass} is-transparent`}>
            <div className='navbar-end has-text-centered'>
              <Link className='navbar-item' to='/about'>
                QUEM SOMOS
              </Link>
              <Link className='navbar-item' to='/tratamentos'>
                TRATAMENTOS
              </Link>
              <Link className='navbar-item' to='/contact'>
                CONTATO
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
