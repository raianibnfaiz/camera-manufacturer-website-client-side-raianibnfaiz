import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
const AddProduct = () => {
    const navigate = useNavigate();
    const handleSubmit = (event) => {

        event.preventDefault();
        const name = event.target.name.value;
        const description = event.target.description.value;
        const price = event.target.price.value;
        const supplier = event.target.supplier.value;
        const image = event.target.image.value;
        const availableQuantity = event.target.availableQuantity.value;
        const minimumOrderQuantity = event.target.minimumOrderQuantity.value;

        const newProduct = { name, image, description, price, supplier, availableQuantity, minimumOrderQuantity };
        console.log(newProduct);
        // send to your database 
        fetch('https://immense-river-52979.herokuapp.com/product', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(inserted => {
                if (inserted.insertedId) {
                    toast.success('Product added successfully')
                    event.target.reset();
                    navigate('/home');
                }
                else {
                    toast.error('Failed to add the doctor');
                }
            })

    }


    return (
        <div className='pb-2'>
            <h4 className='text-yellow-500 font-bold text-2xl'>Add a new product</h4>

            <form className='mb-2 grid grid-cols-1 gap-3 justify-items-center mt-2 ' style={{ fontFamily: 'Mate SC' }} onSubmit={handleSubmit}>

                <input type="text" name="name" placeholder='Product Name' className="input input-bordered w-full max-w-xs" required />
                <input type="text" name="price" placeholder='Price' required className="input input-bordered w-full max-w-xs" />
                <input type="text" name="description" placeholder='Description' required className="input input-bordered w-full max-w-xs" />
                <input type="number" name="availableQuantity" placeholder="Available Quantity" class="input input-bordered w-full max-w-xs" required />
                <input type="number" name="minimumOrderQuantity" placeholder="Minimum Order Quantity" class="input input-bordered w-full max-w-xs" required />
                <input type="text" name="supplier" placeholder="Supplier" class="input input-bordered w-full max-w-xs" required />
                <input class="input input-bordered w-full max-w-xs" placeholder='Photo URL' name="image" type="text" required />


                <input type="submit" value="Submit" className="btn btn-primary w-full max-w-xs" />



            </form>
        </div>
    );
};

export default AddProduct;