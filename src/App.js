/* eslint-disable */ 

import { useState } from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { S } from 'xmlchars/xml/1.0/ed5';
import './App.css';
import Data from './data.js';
import { Link, Route, Switch } from 'react-router-dom';
import Detail from './Detail';

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
              <Nav.Link > <Link to="/">Home</Link> </Nav.Link>
              <Nav.Link > <Link to="detail">Detail</Link> </Nav.Link>
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


      <Switch>
        <Route exact path="/">
          <div className="p-5 mb-4 bg-light rounded-3 background">
            <div className="container-fluid py-5">
              <h1 className="display-5 fw-bold">20% Season Off</h1>
              <p className="col-md-8 fs-4">Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.</p>
              <button className="btn btn-primary btn-lg" type="button">Example button</button>
            </div>
          </div>        
          <div className="contaier">
            <div className="row">
              {
                shoes.map((a, i, arr) => {
                  return <Card shoes={ shoes[i] } i={ i } key={ i }/>
                })
              }
            </div>
          </div>
        </Route>

        <Route path="/detail">
          <Detail />
        </Route>
        {/* <Route path="/어쩌구" component={ 모델 }></Route> */}

        <Route path="/:id">
          <div>아무거나 적었을때 이거 보여주셈</div>
        </Route>
      </Switch>
    </div>
  );
}

function Card( props ) {
  return (
    <div className="col-md-4">
      <img src={ `https://codingapple1.github.io/shop/shoes${props.i+1}.jpg` } width="100%" />
      <h4>{ props.shoes.title }</h4>
      <p>{ props.shoes.content } { props.price }</p>
    </div>
  )
}

export default App;
