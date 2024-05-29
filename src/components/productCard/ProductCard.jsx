import React from 'react';
import './ProductCard.css'
import { Link } from 'react-router-dom';
const ProductCard = ({product}) => {
    const {id, title, img, price, description, origin} = product;
    // console.log(product);

    return (
        <div className="cycle-card">
        <img src={img} className="cycle-img" />
        <div className="cycle-details">
            <h2 className="cycle-title">{title}</h2>
            <p className="cycle-description">{description}</p>
            <p className="cycle-origin"><strong>Origin:</strong> {origin}</p>
            <p className="cycle-price">${price}</p>
            <Link to={`/products/${id}`}><button className="add-to-cart-btn">View Details</button></Link>
        </div>
    </div>
    );
};

export default ProductCard;