import React, { useEffect, useState } from 'react';

import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const EditProduct = () => {
    const {id} = useParams()
    const navigate = useNavigate();

    const [product, setProduct] = useState({});
    // useEffect(() =>{
    //     async function cycleData() {
    //         const response = await fetch('http://localhost:3000/cycles')
    //         const data = await response.json()
    //         setProducts(data);      
    //     }
    //     cycleData();
    // },[])

    useEffect(() =>{
        async function loadData(){
            const defaultData = await axios.get(`http://localhost:3000/cycles/${id}`);
            setProduct(defaultData.data);
            console.log(defaultData);
        }
        loadData()
        
    },[])

    const handleEdit = async (e) =>{
        e.preventDefault();
        const formData = new FormData(e.target);
        const newData = Object.fromEntries(formData.entries())
        // console.log(product, formData);

        
        await axios.patch(`http://localhost:3000/cycles/${id}`, newData);

        
        alert("Product successfully Edited");
        e.target.reset();
        navigate('/dashboard/manage-products');


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
            <h1>Edit Product</h1>
            <form onSubmit={handleEdit} className="add-product-form">
                <input
                    defaultValue={product.title}
                    type="text"
                    name="title"
                    placeholder="Title"
                    required
                />
                <input
                    defaultValue={product.img}
                    type="text"
                    name="img"
                    placeholder="Image URL"
                    required
                />
                <input
                    defaultValue={product.price}
                    type="text"
                    name="price"
                    placeholder="Price"
                    required
                />
                <textarea
                    defaultValue={product.description}
                    name="description"
                    placeholder="Description"
                    required
                />
                <input
                    defaultValue={product.origin}
                    type="text"
                    name="origin"
                    // placeholder="Origin"
                    required
                />
                <button className='add-btn'>Confirm</button>
            </form>
        </div>
    );
};

export default EditProduct;