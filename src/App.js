/* eslint-disable */ 

import { useState } from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { S } from 'xmlchars/xml/1.0/ed5';
import './App.css';
import Data from './data.js';
import { Link, Route, Switch } from 'react-router-dom';
import Detail from './Detail';
import axios from 'axios';

function App() {
  // 중요한 데이터는 항상 App이라는 컴포넌트에 저장하는 것이 정석(국룰)
  // 상위에서 하위로 보내는 것은 쉽지만 하위에서 상위로 데이터 전송은 힘듬
  // 만약 state도 많아지면 관리하기 힘들어서 다른 파일로 빼서 보관하거나, redux를 사용하면됨.
  let [shoes, shoes변경] = useState(Data);
  let [spinner, spinner변경] = useState(false);

  
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/" > Home </Nav.Link>
              <Nav.Link as={Link} to="detail"> Detail </Nav.Link>
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
            <div>
              {
                //로딩중이라는 UI 띄움
                spinner === true 
                ? <div class="spinner-border text-primary" role="status">
                    <span class="sr-only">Loading...</span>
                  </div>
                : null
              }
            </div>
            <button className="btn btn-primary" onClick={ () => { 
              spinner변경(true);
              setTimeout(() => {
                
                // ajax를 위해 fetch 사용 (호환성이 좋지 않음, 오브젝트로 따로 변경하는 작업이 필요함.)
                // fetch() 
                // ajax를 위해 axios 사용 (추천!!!)
                axios.get('https://codingapple1.github.io/shop/data2.json')
                .then((result) => {
                  // 로딩중이라는 UI 안보이게 처리
                  
                  console.log(result);
                  console.log(result.data); // data만 받고 싶을때
                  let copyshoes = [...shoes, ...result.data]; // ...shoes 카피본 만들어주세요., ...덮게를 벅겨주세요.[{}, {}, {}] => {}, {}, {}
                  console.log('copyshoes : ', copyshoes);
                  shoes변경(copyshoes);
                  console.log('성공했어요.');
                  spinner변경(false);
                })
                .catch(() => {
                  // 로딩중이라는 UI 안보이게 처리
                  console.log('실패했어요.');
                  spinner변경(false);
                }); 
              }, 3000);
             } }>더보기</button>
          </div>
        </Route>

        <Route path="/detail/:id">
          <Detail shoes={shoes} />
        </Route>
        
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
