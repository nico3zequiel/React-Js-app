import React, {useState} from 'react';

const ItemCount = ({getInitial, getStock, onAdd}) => {
    const[count, setCount] = useState(getInitial);
    const[stock] = useState(getStock);
    const[message] = useState(onAdd);

    const increase = () => {
        if (count >= 1 && count < stock) {
            setCount(count + 1);
        }
    }
    const decrease = () => {
        if (count >1) {
            setCount(count - 1);
        }
    }

    const msg = () => {
        console.log (`${message} ${count}`)
    }
    return (
        <div>
            <div>
                <h3 className='titles'>Cantidad Seleccionada</h3>
                <h3 className='titles'>{count}</h3>
                </div>

            <div className='incDecButtons'>
                <button type="button" className="btn btn-dark" onClick={decrease}>-</button>
                <button type="button" className="btn btn-dark" onClick={increase}>+</button>               
                                
            </div>
            <div className='cartButtons'>
                <button type="button" className="btn btn-dark" onClick={msg}>Agregar al carrito</button>
                </div>
            
            
        </div>
    )
}

export default ItemCount
