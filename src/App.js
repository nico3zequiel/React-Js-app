/* import logo from './logo.svg'; */
import './App.css';
import NavBar from './components/NavBar/NavBar';
import './components/NavBar/styles.css' 
import CartWidget from './components/CartWidget';
import ItemListContainer from './components/ItemListContainer'




function App() {
  return (
    
      <>
      <NavBar/>
      <CartWidget/>
      <ItemListContainer saludo="Bienvenido" />

    </>
  );
}

export default App;
