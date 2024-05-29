import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import './ManageProducts.css'
import axios from 'axios';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);
    async function loadData() {
        const response = await fetch('http://localhost:3000/cycles')
        const data = await response.json()
        setProducts(data);      
    }
    useEffect(() =>{
        loadData();
    },[])

    const handleDelete = async (id) =>{
        await axios.delete(`http://localhost:3000/cycles/${id}`);
        alert("Product Successfully Deleted");
        loadData();
    }

    return (
        <div className='manage-products'>
            <h1>Manage Products</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Origin</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td>{item.price}</td>
                            <td>{item.origin}</td>

                            <td className='action'>
                                <button className='edit-btn'><Link to={`/dashboard/edit/${item.id}`}>Edit</Link></button>
                                <button onClick={() => handleDelete(item.id)} className='dlt-btn'>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ManageProducts;

