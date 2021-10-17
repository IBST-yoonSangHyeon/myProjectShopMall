import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';


function Detail ( props ) {

    let { id } = useParams(); // { 사용자가 입력한 URL 파라미터들 }, 스트럭처링 문법으로 처리
    let history = useHistory(); // 모든 방문기록이 담긴 object


    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
          </div>
          <div className="col-md-6 mt-4">
            <h4 className="pt-5">{ props.shoes[props.shoes[id].id].title }</h4>
            <p>{ props.shoes[props.shoes[id].id].content }</p>
            <p>{ props.shoes[props.shoes[id].id].price }원</p>
            <button className="btn btn-danger">주문하기</button> 
            <button className="btn btn-danger" onClick={ () => { history.goBack(); } }>뒤로가기</button>
          </div>
        </div>
      </div>        
    );
}

export default Detail