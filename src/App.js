import './App.css';
import NavBS from './components/NavBar/NavBS';
import './components/NavBar/styles.css' 
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import {BrowserRouter, Switch, Route} from 'react-router-dom';





function App() {
  return (
    
    <BrowserRouter>      
    <NavBS/>
    <Switch>
      <Route exact path='/'>
      <ItemListContainer greeting='React Store' />
      </Route>      
      <Route exact path='/detail'>
        <ItemDetailContainer />
      </Route>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
