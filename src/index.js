import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, HashRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';


let alert초기값 = true;

function reducer2 ( state = alert초기값, 액션 ) {
  
  if(액션.type === 'alert닫기'){
    return state = false;
  } else {
    return state;
  }
}


let 초기값 = [
  {id : 0, name : '멋진신발', quan : 2} , 
  {id : 1, name : '짱신발', quan : 3} , 
  {id : 2, name : '붉은신발', quan : 1}
]


// redux 데이터 수정 정의
function reducer( state = 초기값, 액션 ) {
  
  if ( 액션.type === '항목추가' ){
    let copy = [...state];
    let itemIdx = copy.findIndex(obj => obj.name === 액션.payload.name);
    
    if(itemIdx === -1){
      console.log('추가');
      copy.push(액션.payload);
    }else{
      copy[itemIdx].quan++;
    }
    return copy;
  }else if ( 액션.type === '수량증가' ) { // 수량증가라는 데이터수정 방법 정의한 것
    let copy = [...state];
    copy[액션.idx].quan++;
    return copy; // 수정된 state 뱉어냄
  } else if(액션.type === '수량감소') {
    let copy = [...state];
    copy[액션.idx].quan--;
    if(copy[액션.idx].quan < 0){
      copy[액션.idx].quan = 0;
    }
    return copy;
  }else {
    return state; // reducer 세팅법은 항상 state를 뱉어내어야한다.
  }
  
}

let store = createStore(combineReducers({
  reducer, reducer2
}));


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={ store }>
      <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
