import React, {useState, useEffect} from 'react';
import ItemDetail from './ItemDetail';


const DB_PRODUCTS = [];

export default function ItemDetailContainer () {
    const [item, setItem] = useState(null);

    

    useEffect ( () => {
        fetch('https://fakestoreapi.com/products/1')
            .then(res=>res.json())
            .then(dataJson=>setItem(dataJson))
    }, []);


    return (
        <div>
            <h1>Item Detail Container</h1>
            {
                item?
                <ItemDetail product={item} />
            : <div>Cargando...</div>
            }
            
        </div>
    )
}


