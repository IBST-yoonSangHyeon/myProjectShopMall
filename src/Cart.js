import React, { useState, useContext, useEffect, useCallback, useMemo } from 'react';
import { Table } from 'react-bootstrap'; // export default : 기본, 중괄호 해당 이름만....
import { connect, useDispatch, useSelector } from 'react-redux';




const Cart = ( props ) => {
    // redux에 있던 모든 state
    let state = useSelector((state) => state.reducer);
    let despatch = useDispatch();
    console.log(state);
    let 버튼누르면 = (i) => { despatch( { type : '수량증가', idx : i } ) } 
    let style = { color : 'red' };

    return (
        <div>
            <Table responsive="sm">
                <thead>
                    <tr style = { style }>
                        <th>#</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>변경</th>
                    </tr>
                    </thead>
                    <tbody>
                    { state.map((a, i, arr) => {
                        return (
                                <tr key={i}>
                                    <td>{ a.id }</td>
                                    <td> { a.name } </td>
                                    <td> { a.quan } </td>
                                    <td>
                                        <button onClick={ () => { 버튼누르면(i) } }>+</button>
                                        &nbsp;
                                        <button onClick={ () => { despatch( { type : '수량감소', idx : i } ) } }>-</button>
                                    </td>
                                </tr>
                        );
                    }) }
                    
                </tbody>
            </Table>
            
            {
                props.alert열렸니 === true 
                ? 
                (
                    <div className="my-alert2">
                        <p>지금 구매하시면 신규할인 20%</p>
                        <button onClick={ () => { props.dispatch( { type : 'alert닫기' }) } }>닫기</button>
                    </div>
                ) 
                : null

            }
            

        </div>
    );
};

// function state를props화( state ) {
//     console.log(state);
//     return { 
//         state : state.reducer , //store안에 있는 모든 데이터를 state라는 이름의 props로 바꿔주셈
//         alert열렸니 : state.reducer2
//     }
// }

// export default connect(state를props화)(Cart)

export default Cart;