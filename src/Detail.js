import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components'; // css를 미리 입혀놓은 컴포넌트, className 작명 필요없음
import './Detail.scss';
import {재고context} from './App'
import { Nav } from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';


let 박스 = styled.div`
  padding : 20px;
`;

let 제목 = styled.h4`
  font-size : 25px;
  color : ${ props => props.색상}
`;



function Detail ( props ) {
    let [alert, alert변경] = useState(true);
    let [inputData, inputData변경] = useState("");
    let 재고 = useContext(재고context);
    let [누른탭, 누른탭변경] = useState(0);
    let [스위치, 스위치변경] = useState(false);

    // 라이프 싸이클 (컴포넌트 mount되었을때 , update될때 특정코드 () => {} 실행)
    useEffect(() => {
      // Detail 컴포넌트 로드시 ajax로 데이터를 가져오고 싶음....
      // axios.get()


      // 컴포넌트 등장시 실행됨
      let 타이머 = setTimeout(() => { alert변경(false) }, 2000);
      // 컴포넌트 업데이트시 실행됨
      return () => { clearTimeout(타이머) }; // Detail컴포넌트가 사라질때 , setTimout쓸때(모르는 에러 발생할수 있음) 명심해주세요. TIP
    }, []); // [] : useEffect 훅 4 특정 state가 변결될때만 실행해주세요~ 
    /*
      [] : 한번만 실행해주시요. 나중에는 실행할 일이 없습니다. (재렌더링(업데이트될때는) 하지말아주세요.)
      [alert] : alert state가 변경될때만 실행해 주세요. 그렇지 않으면 실행하지 말아주세요.
      [alert, inputData] : input Data또는 alert state가 변결될때만 실행해주세요. 그렇지 않으면 실행하지 말아주세요.
    */

    let { id } = useParams(); // { 사용자가 입력한 URL 파라미터들 }, 스트럭처링 문법으로 처리
    let history = useHistory(); // 모든 방문기록이 담긴 object
    let 찾은상품 = props.shoes.find(x => x.id == id);
    
    return (
      <div className="container">
        <박스>
          <제목 className="red" >Detail</제목>
        </박스>
        { inputData }
        <input type="text" onChange={ (e)=> { inputData변경(e.target.value) } }/>
        { // UI는 습관적으로 스위치 on/off 방식으로 관리하라~ (state로)
          alert === true 
          ? <div className={`my-alert2`}>
              <p>재고가 얼마 남지 않았습니다.</p>
            </div> 
          : null
        }
        
        <div className="row">
          <div className="col-md-6">
            <img src={`https://codingapple1.github.io/shop/shoes${찾은상품.id+1}.jpg`} width="100%" />
          </div>
          <div className="col-md-6 mt-4">
            <h4 className="pt-5">{ 찾은상품.title }</h4>
            <p>{ 찾은상품.content }</p>
            <p>{ 찾은상품.price }원</p>
            <Info 재고={ props.재고 }/>
            <button className="btn btn-danger" onClick={
              () => {
                props.재고변경([9, 11, 12]);
                props.dispatch( {type : '항목추가', payload : { id : 찾은상품.id+1, name : 찾은상품.content, quan : 1 }} );
                history.push('/cart');
              }
            }>주문하기</button> 
            <button className="btn btn-danger" onClick={ () => { history.goBack(); } }>뒤로가기</button>
          </div>
        </div>
        
        
        <Nav className="mt-5" variant="tabs" defaultActiveKey="link-0">
          <Nav.Item >
            <Nav.Link eventKey="link-0" onClick={ () => { 스위치변경(false);누른탭변경(0) } }>Active</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1" onClick={ () => { 스위치변경(false);누른탭변경(1) } }>Option 2</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1" onClick={ () => { 스위치변경(false);누른탭변경(2) } }>Option 3</Nav.Link>
          </Nav.Item>
        </Nav>
        <CSSTransition in={ 스위치 } classNames="wow" timeout={500} >
          <TabContent 누른탭={ 누른탭 } 스위치변경={ 스위치변경 }/>
        </CSSTransition>
      </div>        
    );
}

// 삼항연산자가 아니라면 이렇게 컴포넌트를 만드는것이 좋다!
function TabContent( props ) {
  
  useEffect(() => {
    props.스위치변경(true);
  })

  if(props.누른탭 === 0) {
    return <div>0번째 내용입니다.</div>
  }else if(props.누른탭 === 1){
    return <div>1번째 내용입니다.</div>
  }else if(props.누른탭 === 2){
    return <div>2번째 내용입니다.</div>
  }
}

function Info( props ) {
  return (
    props.재고.map((item, idx, arr) => {
      return <p key={idx}>{ item }</p>
    })
    
  )
}

function state를props화( state ) {
  console.log(state);
  return { 
      state : state.reducer , //store안에 있는 모든 데이터를 state라는 이름의 props로 바꿔주셈
      alert열렸니 : state.reducer2
  }
}

export default connect(state를props화)(Detail)

//export default Detail