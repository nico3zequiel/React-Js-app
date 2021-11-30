import React from 'react'
import '../components/NavBar/styles.css'
import {ShoppingCartOutlined} from '@ant-design/icons';



const CartWidget = (props) => {
    return (     
        <div className='cartStyle'>   
            <button><ShoppingCartOutlined /></button>
            </div>       
        
    )
}

export default CartWidget;

