import React from 'react';

const OrderRow = ({ order, index, refetch, setDeletingOrder }) => {
    const { name, product, quantity, price } = order;
    return (

        <tr>
            <th>{index + 1}</th>
            <td>{name}</td>
            <td>{product}</td>
            <td>{quantity}</td>
            <td>{price}$</td>
            <td>
                {(order.price && !order.paid) && <label onClick={() => setDeletingOrder(order)} for="delete-confirm-modal" class="btn btn-xs btn-error">Cancel Order</label>}
            </td>
        </tr>

    );
};

export default OrderRow;