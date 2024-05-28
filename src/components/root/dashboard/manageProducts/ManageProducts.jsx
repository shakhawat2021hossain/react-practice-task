import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './ManageProducts.css'

const ManageProducts = () => {
    const products = useLoaderData();
    // console.log(products);

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
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td>{item.price}</td>
                            <td>{item.origin}</td>
                            <td><button className='edit-btn'>Edit</button></td>
                            <td><button className='dlt-btn'>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ManageProducts;