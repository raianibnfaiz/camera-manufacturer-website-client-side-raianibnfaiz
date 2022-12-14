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
        fetch(`https://immense-river-52979.herokuapp.com/product/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    let errorMessage = <p className='text-red-500'>Sorry! You must order the quantity of the product between the range of available and minimum order quantity! </p>;

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
        const price = event.target.price.value;
        const product = event.target.product.value;
        const quantity = event.target.quantity.value;


        const order = { email, name, address, product, phone, price, quantity };
        console.log(order);
        fetch('https://immense-river-52979.herokuapp.com/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success!', data);
                if (data) {
                    toast("Order is placed successfully.")
                }
                event.target.reset();
                navigate('/home');
            })

    }
    return (
        <div className='my-auto'>
            <h4 className='text-yellow-500 font-bold text-2xl'>Product Name: <span style={{ color: "tomato" }}>{product.name}</span></h4>
            <h5>Available Product Quantity : {product.availableQuantity}</h5>
            <h5>Minimum Order Quantity : {product.minimumOrderQuantity}</h5>
            <p> <span style={{ color: "tomato" }}>Purchase</span></p>
            <form className='mb-2 grid grid-cols-1 gap-3 justify-items-center mt-2 ' style={{ fontFamily: 'Mate SC' }} onSubmit={handleSubmit}>

                <input type="text" name="name" disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />
                <input type="email" name="email" disabled value={user?.email || ''} className="input input-bordered w-full max-w-xs" />
                <input type="text" name="product" disabled value={product.name || ''} className="input input-bordered w-full max-w-xs" />
                <input type="text" name="address" placeholder="Address" class="input input-bordered w-full max-w-xs" required />
                <input type="number" name="phone" placeholder="Phone Number" class="input input-bordered w-full max-w-xs" required />
                <div class="form-control">

                    <label class="input-group">
                        <span>Price</span>
                        <input type="number" name='price' value={product.price} disabled class="input input-bordered" />

                    </label>
                </div>
                <div class="form-control">

                    <label class="input-group">
                        <span>Order Quantity</span>
                        <input type="number" onChange={handleQuantity} name='quantity' placeholder={product.minimumOrderQuantity} class="input input-bordered" required />

                    </label>
                </div>
                {parseInt(itemNumber) > parseInt(product.availableQuantity) ? errorMessage : parseInt(itemNumber) < parseInt(product.minimumOrderQuantity) ? errorMessage : " "}

                {parseInt(itemNumber) > parseInt(product.availableQuantity) ? <input type="submit" value="Submit" className="btn btn-primary w-full max-w-xs" disabled /> : parseInt(itemNumber) < parseInt(product.minimumOrderQuantity) ? <input type="submit" value="Submit" className="btn btn-primary w-full max-w-xs" disabled /> : <input type="submit" value="Submit" className="btn btn-primary w-full max-w-xs" />}



            </form>
        </div>
    );
};

export default Purchase;