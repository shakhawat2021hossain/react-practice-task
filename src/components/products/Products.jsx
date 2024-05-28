import { useEffect, useState } from "react";
import ProductCard from "../productCard/ProductCard";
import './Product.css'
const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() =>{
        async function cycleData() {
            const response = await fetch('http://localhost:3000/cycles')
            const data = await response.json()
            setProducts(data);      
        }
        cycleData();
    },[])

    return (
        <div className='products'>
            <h1>Available Cycles</h1>
            <div className="products-container">
                {
                    products.map(product => <ProductCard key={product.id} product={product}></ProductCard>)
                }

            </div>
        </div>
    );
};

export default Products;