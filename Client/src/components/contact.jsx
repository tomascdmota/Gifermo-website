import React, { Component } from "react";
import axios from "axios";

export class Contact extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      message: "",
      status: "Submit"
    };   
  } 

    handleChange = (event) => {
    const field = event.target.id;
    if( field === 'name') {
      this.setState({name: event.target.value});
    } else if ( field === 'email') {
      this.setState({email: event.target.value});
    }
    else if ( field === 'message') {
      this.setState({message: event.target.value});
  }
}


  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({status: "SENDING"});
    axios({
      method: "POST",
      url: "http://localhost:3001/server",
      data: this.state,
    }).then((response) => {
      if (response.data.status === 'sent') {
        alert("Message sent");
        this.setState({name: "", email: "", message: "", status: "Submit"});
      } else if (response.data.status === " failed") {
        alert("Message failed");
      }
    })
  }

  render() {
    return (
      <div>
        <div id="contact">
          <div className="container">
            <div className="col-md-8">
              <div className="row">
                <div className="section-title">
                  <h2>Entre em contacto connosco</h2>
                  <p>
                    Preencha o formulário a baixo e mal possamos entraremos em contacto
                    consigo.
                  </p>
                </div>
                <form name="sentMessage" id="contactForm" onSubmit={this.handleSubmit.bind(this)} method="POST" noValidate>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          id="name"
                          className="form-control"
                          placeholder="Nome"
                          value={this.state.name}
                          onChange={this.handleChange.bind(this)}
                          required="required"
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="email"
                          id="email"
                          className="form-control"
                          placeholder="Email"
                          value={this.state.email}
                          onChange={this.handleChange.bind(this)}
                          required="required"
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <textarea
                      name="message"
                      id="message"
                      className="form-control"
                      rows="4"
                      placeholder="Em que é que o podemos ajudar?"
                      value={this.state.message}
                      onChange={this.handleChange.bind(this)}
                      required
                    ></textarea>
                    <p className="help-block text-danger"></p>
                  </div>
                  <div id="success"></div>
                  <button type="submit" className="btn btn-custom btn-lg">
                    Enviar mensagem
                  </button>
                </form>
              </div>
            </div>
            <div className="col-md-3 col-md-offset-1 contact-info">
              <div className="contact-item">
                <h3>Informação de contacto</h3>
                <p>
                  <span>
                    <i className="fa fa-map-marker"></i> Localização
                  </span>
                  {this.props.data ? this.props.data.address : "loading"}
                </p>
              </div>
              <div className="contact-item">
                <p>
                  <span>
                    <i className="fa fa-phone"></i> Contactos
                  </span>{" "}
                  {this.props.data ? this.props.data.phone : "loading"}
                </p>
              </div>
              <div className="contact-item">
                <p>
                  <span>
                    <i className="fa fa-envelope-o"></i> Email
                  </span>{" "}
                  {this.props.data ? this.props.data.email : "loading"}
                </p>
              </div>
            </div>
            <div className="col-md-12">
              <div className="row">
                <div className="social">
                  <ul>
                    <li>
                      <a
                        href={this.props.data ? this.props.data.facebook : "/"} target="blank">
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href={this.props.data ? this.props.data.instagram : "/"} target="blank">
                        <i className="fa fa-instagram"></i>
                      </a>
                    </li>
                    
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="footer">
          <div className="container text-center">
            <p>
              &copy; 2021 Todos os direitos reservados a Gifermo, lda. Design by{" "}
              <a href="" rel="nofollow">
                Tomás Mota
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
