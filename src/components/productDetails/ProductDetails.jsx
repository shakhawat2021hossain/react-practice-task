import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetails.css'

const ProductDetails = () => {
    const {id} = useParams();
    const [value, setValue] =  useState({});
    useEffect(() =>{
        async function loadData() {
            const res = await fetch(`http://localhost:3000/cycles/${id}`) 
            const data = await res.json()
            setValue(data);
        }
        loadData();
        
    },[])
    console.log(value.title);

    return (
        <div className="product">
            <img src={value.img} className="product-image" />
            <div className="product-details">
                <h2 className="product-name">{value.title}</h2>
                <p className="product-description">{value.description}</p>
                <p className="product-price">${value.price}</p>
            </div>
        </div>
    );
};

export default ProductDetails;