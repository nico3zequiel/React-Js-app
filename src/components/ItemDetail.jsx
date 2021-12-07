import React from 'react';
import '../components/NavBar/styles.css'


export default function ItemDetail ({product}) {
    return (
        <div>
            <h1>{product.title}</h1>
            <img src={product.image} alt={product.title} className="img-fluid product" />
            <p>{product.description}</p>
            <p>{product.price}</p>
            
        </div>
    )
}


