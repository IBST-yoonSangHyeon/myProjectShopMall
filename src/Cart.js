import React, { useState, useContext, useEffect, useCallback, useMemo } from 'react';
import { Table } from 'react-bootstrap'; // export default : 기본, 중괄호 해당 이름만....
import { connect } from 'react-redux';




const Cart = ( props ) => {
    return (
        <div>
            <Table responsive="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>변경</th>
                    </tr>
                    </thead>
                    <tbody>
                    { props.state.map((a, i, arr) => {
                        return (
                                <tr key={i}>
                                    <td>{ a.id }</td>
                                    <td> { a.name } </td>
                                    <td> { a.quan } </td>
                                    <td>
                                        <button onClick={ () => { props.dispatch( { type : '수량증가' } ) } }>+</button>
                                        &nbsp;
                                        <button onClick={ () => { props.dispatch( { type : '수량감소' } ) } }>-</button>
                                    </td>
                                </tr>
                        );
                    }) }
                    
                </tbody>
            </Table>            
        </div>
    );
};

function state를props화( state ) {
    return { 
        state : state //store안에 있는 모든 데이터를 state라는 이름의 props로 바꿔주셈
    }
}

export default connect(state를props화)(Cart)

// export default Cart;