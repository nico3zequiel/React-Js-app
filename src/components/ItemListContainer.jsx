import ItemCount from './ItemCount';
import './NavBar/styles.css';


const ItemListContainer = ({greeting}) => {
    return (
        <div>
        <h1 className='fontStyle'>Bienvenido a {'React Store'}</h1>
        <div className='titles'>
        <p>Producto 1</p>
        <p>Producto 2</p>
        <p>Producto 3</p>
        </div>
        <ItemCount getInitial={1} getStock={10} onAdd={'Cantidad agregada al carrito '}/>
        </div>
    )
}

export default ItemListContainer
