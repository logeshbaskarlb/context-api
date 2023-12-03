import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { CartFill } from "react-bootstrap-icons";
import Productlist from '../Context/Productlist';

const Navbar=()=> {
  const { cart } = useContext(Productlist)
  return (
    <>
   
    <div className='container-fluid m-0 p-0'>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container">
    <Link class="navbar-brand" to="/" >
      <h1>Context API</h1> 
      </Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/mainpage">Products</Link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="/#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="true">
            Shop
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="/#">All Producs</a></li>
            <li><a class="dropdown-item" href="/#">Popular Items</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="/#">New Arrivals</a></li>
          </ul>
        </li>
        
      </ul>
     
      <form className="d-flex">
            <Link className="btn btn-dark" to={'/cart'}  >
              <i className="bi-cart-fill me-1">
                <CartFill/>
              </i>
              Cart
              <span className="badge bg-white text-black ms-1 rounded-pill">
                {cart.length}
              </span>
            </Link>
      </form>
    </div>
  </div>
</nav>
    </div>
    
    </>
  )
}

export default Navbar