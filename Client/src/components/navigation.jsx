import React, { Component } from "react";

export class Navigation extends Component {
  render() {
    return (
      <nav id="menu" className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
            >
              {" "}
              <span className="sr-only">Abrir a navegação</span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
            </button>
            <a className="navbar-brand page-scroll" href="#page-top">
              <h2>Gifermo</h2>
            </a>{" "}
          </div>

          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="#features" className="page-scroll">
                  Sobre nós
                </a>
              </li>
              <li>
                <a href="#about" className="page-scroll">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#portfolio" className="page-scroll">
                  Portólio
                </a>
              </li>
              <li>
                <a href="#contact" className="page-scroll">
                  Contactos
                </a>
              </li>
              <li>
                <a href="https://www.gifermo2.com" className="page-scroll">
                  GIFERMO II
                </a>
              </li>
            
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;
