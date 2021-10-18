import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components'; // css를 미리 입혀놓은 컴포넌트, className 작명 필요없음
import './Detail.scss';


let 박스 = styled.div`
  padding : 20px;
`;

let 제목 = styled.h4`
  font-size : 25px;
  color : ${ props => props.색상}
`;



function Detail ( props ) {

    // 라이프 싸이클 (컴포넌트 mount되었을때 , update될때 특정코드 () => {} 실행)
    useEffect(() => {
      // Detail페이지 방문후 alert창이 2초후에 사라지게 해주세요. (마운트될때)
      setTimeout(() => { document.getElementsByClassName('my-alert2')[0].style.display = "none"; }, 2000);
      // useEffect 훅2 컴포넌트가 사라질때 코드를 실행시킬수 있다. (언마운트될때)
      return () => {};
    });

    // 여러개 선언 가능 단, 위에서 아래로 useEffect실행됨
    useEffect(() => {

    });

    let { id } = useParams(); // { 사용자가 입력한 URL 파라미터들 }, 스트럭처링 문법으로 처리
    let history = useHistory(); // 모든 방문기록이 담긴 object
    let 찾은상품 = props.shoes.find(x => x.id == id);
    
    return (
      <div className="container">
        <박스>
          <제목 className="red" >Detail</제목>
        </박스>
        <div className={`my-alert2`}>
          <p>재고가 얼마 남지 않았습니다.</p>
        </div>
        <div className="row">
          <div className="col-md-6">
            <img src={`https://codingapple1.github.io/shop/shoes${찾은상품.id+1}.jpg`} width="100%" />
          </div>
          <div className="col-md-6 mt-4">
            <h4 className="pt-5">{ 찾은상품.title }</h4>
            <p>{ 찾은상품.content }</p>
            <p>{ 찾은상품.price }원</p>
            <button className="btn btn-danger">주문하기</button> 
            <button className="btn btn-danger" onClick={ () => { history.goBack(); } }>뒤로가기</button>
          </div>
        </div>
      </div>        
    );
}

export default Detail