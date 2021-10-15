
import { useState } from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { S } from 'xmlchars/xml/1.0/ed5';
import './App.css';
import Data from './data.js';

function App() {

  let [shoes, shoes변경] = useState(Data);

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="p-5 mb-4 bg-light rounded-3 background">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">20% Season Off</h1>
          <p className="col-md-8 fs-4">Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.</p>
          <button className="btn btn-primary btn-lg" type="button">Example button</button>
        </div>
      </div>

      <div className="contaier">
        <div className="row">
          { Data.map((item, idx, arr) => {
            return <Shoeses key={ idx } imgUrl={ item.imgUrl } title={ item.title } content={ item.content } price={ item.price } />
            }) 
          }
        </div>
      </div>

    </div>
  );
}

function Shoeses( props ) {
  return (
    <div className="col-md-4">
      <img src={ props.imgUrl } width="100%" />
      <h4>{ props.title }</h4>
      <p>{ props.content } { props.price }</p>
    </div>
  )
}

export default App;
