import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import { QuantityPicker } from 'react-qty-picker';
import auth from '../../firebase.init';
const Purchase = () => {
    const [user, loading, error] = useAuthState(auth);
    console.log(user);
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [itemNumber, setItemNumber] = useState('');
    const [valid, setValid] = useState('right');
    const navigate = useNavigate();
    useEffect(() => {
        fetch(`http://localhost:5000/product/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    let errorMessage = <p className='text-red-500'>Error</p>;

    const handleQuantity = (event) => {
        setItemNumber(event.target.value);
        if ((parseInt(itemNumber) > parseInt(product.quantity)) && (parseInt(itemNumber) < parseInt(product.sold))) {
            setValid("wrong");
        };
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const email = user.email;
        const name = event.target.name.value;
        const address = event.target.address.value;
        const phone = event.target.phone.value;

        const quantity = event.target.quantity.value;


        const order = { email, name, address, phone, quantity };
        console.log(order);
        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success!', data);
                event.target.reset();
                navigate('/home');
            })

    }
    return (
        <div >
            <h4 className='text-orange-500'>Product Name: {product.name}</h4>
            <h5>Product Quantity : {product.quantity}</h5>
            purchase
            <form className='grid grid-cols-1 gap-3 justify-items-center mt-2' style={{ fontFamily: 'Mate SC' }} onSubmit={handleSubmit}>

                <input type="text" name="name" disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />
                <input type="email" name="email" disabled value={user?.email || ''} className="input input-bordered w-full max-w-xs" />
                <input type="text" name="address" placeholder="Address" class="input input-bordered w-full max-w-xs" />
                <input type="text" name="phone" placeholder="Phone Number" class="input input-bordered w-full max-w-xs" />
                <div class="form-control">

                    <label class="input-group">
                        <span>Order Quantity</span>
                        <input type="number" onChange={handleQuantity} name='quantity' placeholder={product.sold} class="input input-bordered" />

                    </label>
                </div>

                {parseInt(itemNumber) > parseInt(product.quantity) ? <input type="submit" value="Submit" className="btn btn-secondary w-full max-w-xs" disabled /> : parseInt(itemNumber) < parseInt(product.sold) ? <input type="submit" value="Submit" className="btn btn-secondary w-full max-w-xs" disabled /> : <input type="submit" value="Submit" className="btn btn-secondary w-full max-w-xs" />}



            </form>
        </div>
    );
};

export default Purchase;