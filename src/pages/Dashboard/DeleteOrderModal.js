import React from 'react';
import { toast } from 'react-toastify';

const DeleteOrderModal = ({ deletingOrder, refetch, setDeletingOrder }) => {
    const { product, _id } = deletingOrder;
    const handleDelete = (id) => {
        fetch(`https://immense-river-52979.herokuapp.com/order/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    toast.success(`Order of ${product} is deleted.`)
                    setDeletingOrder(null);
                    refetch();
                }
            })
    }
    return (
        <div>
            <input type="checkbox" id="delete-confirm-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg text-red-500">Are you sure you want to delete </h3>

                    <div class="modal-action">
                        <button onClick={() => handleDelete(_id)} class="btn btn-xs btn-error">Remove Order</button>
                        <label for="delete-confirm-modal" class="btn btn-xs">Cancel</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DeleteOrderModal;