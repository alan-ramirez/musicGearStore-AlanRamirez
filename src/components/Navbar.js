import React from 'react';
import logo1 from '../logo1.png';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Navbar} from 'react-bootstrap';
import * as ReactBootStrap from 'react-bootstrap';

function Navbar1() {
    return (
      <div className="App">
        <ReactBootStrap.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <ReactBootStrap.Container>
          <ReactBootStrap.Navbar.Brand href="#home">
            <img
              src={logo1}
              width="100"
              height="70"
              className="d-inline-block align-top"
              alt="logo"    
            />
          </ReactBootStrap.Navbar.Brand>
          <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
            <ReactBootStrap.Nav className="me-auto">
              <ReactBootStrap.Nav.Link href="#features">Inicio</ReactBootStrap.Nav.Link>
              <ReactBootStrap.Nav.Link href="#pricing">Nosotros</ReactBootStrap.Nav.Link>
              <ReactBootStrap.NavDropdown title="Productos" id="collasible-nav-dropdown">
                <ReactBootStrap.NavDropdown.Item href="#action/3.1">Guitarras</ReactBootStrap.NavDropdown.Item>
                <ReactBootStrap.NavDropdown.Item href="#action/3.2">Percusión</ReactBootStrap.NavDropdown.Item>
                <ReactBootStrap.NavDropdown.Item href="#action/3.3">Teclados</ReactBootStrap.NavDropdown.Item>
                <ReactBootStrap.NavDropdown.Divider />
                <ReactBootStrap.NavDropdown.Item href="#action/3.4">Equipamiento</ReactBootStrap.NavDropdown.Item>
              </ReactBootStrap.NavDropdown>
            </ReactBootStrap.Nav>
            <ReactBootStrap.Nav>
              <ReactBootStrap.Nav.Link href="#deets">Login</ReactBootStrap.Nav.Link>
              <ReactBootStrap.Nav.Link eventKey={2} href="#memes">
                Carrito
              </ReactBootStrap.Nav.Link>
            </ReactBootStrap.Nav>
          </ReactBootStrap.Navbar.Collapse>
          </ReactBootStrap.Container>
        </ReactBootStrap.Navbar>
      </div>
    );
  }
export default Navbar1;