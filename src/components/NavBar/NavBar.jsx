import React from "react";
import './styles.css';

const NavBar = () => {
    return (
        
        
        <div>
        <ul className= "navStyle">    

            {/* LINK AL HOME */}        
            <li className="list">React Store</li> 

            {/* CATEGORIAS */}
            
            <li className="list">Categoria 1</li> 
            <li className="list">Categoria 2</li>
            <li className="list">Categoria 3</li>
            <li className="list">Categoria 4</li>
        </ul>
        
        </div>
    )
}   

export default NavBar;