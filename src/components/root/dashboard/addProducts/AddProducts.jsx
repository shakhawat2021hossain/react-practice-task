import React from 'react';
import './AddProducts.css'

const AddProducts = () => {
    const handleAdd = e =>{
        e.preventDefault();
        const formData = new FormData(e.target);
        const product = Object.fromEntries(formData.entries())
        // console.log(product, formData);
        fetch("http://localhost:3000/cycles", {
            method: 'POST',
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(product)
        })
        .then(res => res.json())
        .catch(data => console.log(data))
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
                    name="imgUrl"
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