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
                    { props.state.map((item, idx, arr) => {
                        return (
                                <tr key={idx}>
                                    <td>{ item.id }</td>
                                    <td> { item.name } </td>
                                    <td> { item.quan } </td>
                                    <td>Table cell</td>
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