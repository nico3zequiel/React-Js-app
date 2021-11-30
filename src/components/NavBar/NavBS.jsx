import React from 'react'
import CartWidget from '../CartWidget';
import './styles.css';


const NavBS = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="/#">React Store</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" href="/#">Categoria A</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="/#">Categoria B</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="/#">Categoria C</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="/#">Categoria D</a>
        </li>
        <CartWidget/>
        
      </ul>
    </div>
  </div>
</nav>
    )
}

export default NavBS
