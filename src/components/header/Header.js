import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './header.css'
const Header = () => {
    const { user, singout } = useAuth();
    return (
      
      <div>  <nav class="navbar navbar-expand-lg navbar-light bg-light bg">
  <div class="container-fluid d-flex justify-content-between">
  <div><NavLink className='nav fw-bold fs-2 ms-3' to="/home">VISITBD</NavLink></div>
  <div>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="true" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
        <NavLink className='nav fs-4' to="/home">Home</NavLink>
        </li>
        <li class="nav-item">
        <NavLink className='nav fs-4' to="/addService">Add Service</NavLink>
        </li>
        <li class="nav-item">
        <NavLink className='nav fs-4' to="/manageData">Manage Al Data</NavLink>
        </li>
        <li class="nav-item">
        <NavLink className='nav fs-4' to="/myOrders">My Orders</NavLink>
        </li>
        {
                user?.email ?<>
                    <button className='mx-3' onClick={singout}> logout</button>
                   { user?.displayName}

                </>: <> 
                <NavLink className='nav fs-4' to="/login">Login</NavLink>
            <NavLink className='nav fs-4' to="/registation">Registation</NavLink>
                </>
            }
      </ul>
    </div>
  </div>
   
  </div>
</nav></div>


        
    );
};

export default Header;



