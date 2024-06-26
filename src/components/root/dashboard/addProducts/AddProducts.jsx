import React from 'react';
import './AddProducts.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddProducts = () => {
    const navigate = useNavigate();

    const handleAdd = async (e) =>{
        e.preventDefault();
        const formData = new FormData(e.target);
        const product = Object.fromEntries(formData.entries())
        console.log(product, formData);

        await axios.post("http://localhost:3000/cycles", product);
        alert("New product successfully added");
        e.target.reset();
        navigate('/dashboard/manage-products')


        // fetch("http://localhost:3000/cycles", {
        //     method: 'POST',
        //     headers: {
        //         "Content-type": "application/json",
        //     },
        //     body: JSON.stringify(product)
        // })
        // .then(res => {
        //     res.json();
        //     alert("New product successfully added");
        //     e.target.reset();
        //     navigate('/dashboard/manage-products')

        // })
        // .catch(data => console.log(data))
    }
    return (
        <div className='add-products'>
            <h1>Add Products</h1>
            <form onSubmit={handleAdd} className="add-product-form">
                <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    required
                />
                <input
                    type="text"
                    name="img"
                    placeholder="Image URL"
                    required
                />
                <input
                    type="text"
                    name="price"
                    placeholder="Price"
                    required
                />
                <textarea
                    name="description"
                    placeholder="Description"
                    required
                />
                <input
                    type="text"
                    name="origin"
                    placeholder="Origin"
                    required
                />
                <button className='add-btn'>Add Product</button>
            </form>
        </div>
    );
};

export default AddProducts;