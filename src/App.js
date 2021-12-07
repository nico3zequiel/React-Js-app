import './App.css';
import NavBS from './components/NavBar/NavBS';
import './components/NavBar/styles.css' 
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';





function App() {
  return (
    
      <>      
      <NavBS/>      
      {/* <ItemListContainer greeting='React Store' />   */}
      <ItemDetailContainer />
          

    </>
  );
}

export default App;
