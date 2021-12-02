import {useEffect, useState} from 'react';
import Item from './Item.jsx';


const ItemList = ({items}) => {
    console.log(items);
    return (
        <div>
            <ul>
                {items.map(i => <li key={i.id}>{i.name}</li>)}
            </ul>
            
        </div>
    )
}

const [listProduct, setListProduct] = useState([])

useEffect(() => {
    const list = getItems()

    list.then(response => {
        console.log(response)
        setListProduct(response)
    })
    console.log(listProduct)
    return () => {
        cleanup
    }
}, [input])

export default ItemList
