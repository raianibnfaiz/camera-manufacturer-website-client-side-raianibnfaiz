import React from 'react';

const OrderRow = ({ order, index }) => {
    const { name, product, quantity, price } = order;
    return (

        <tr>
            <th>{index + 1}</th>
            <td>{name}</td>
            <td>{product}</td>
            <td>{quantity}</td>
            <td>{price}$</td>
        </tr>

    );
};

export default OrderRow;