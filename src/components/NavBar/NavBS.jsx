import React from 'react'
import CartWidget from '../CartWidget';
import './styles.css';
import {Link} from 'react-router-dom';


const NavBS = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link to={'/'} className="navbar-brand" href="/#">React Store</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to={'/detail'} className="nav-link active">Categoria A</Link>
        </li>
        <li className="nav-item">
          <Link to={'/detail'} className="nav-link active">Categoria B</Link>
        </li>
        <li className="nav-item">
          <Link to={'/detail'} className="nav-link active">Categoria C</Link>
        </li>
        <li className="nav-item">
          <Link to={'/detail'} className="nav-link active">Categoria D</Link>
        </li>
        <CartWidget/>
        
      </ul>
    </div>
  </div>
</nav>
    )
}

export default NavBS
