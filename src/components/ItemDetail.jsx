import React from 'react';
import '../components/NavBar/styles.css'


export default function ItemDetail ({product}) {
    return (
        <div className='container-fluid card product'>
            <h1 className='card-title'>{product.title}</h1>
            <img src={product.image} alt={product.title} className="img-fluid card-img-top product" />
            <p className="img-fluid card-text product">{product.description} </p>
            <p className="img-fluid card-text product">{product.price}</p>
            
        </div>
    )
}


