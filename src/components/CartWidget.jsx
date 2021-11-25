import React from 'react'
import '../components/NavBar/styles.css'
import CartImage from './images/CartImage.png'



const CartWidget = (props) => {
    return (     
        <div>   
            <button><img src={CartImage} alt="carrito" className="imgSize" /></button>
            </div>       
        
    )
}

export default CartWidget;

