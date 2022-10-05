import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import '../Navbar/navbar.css'
import SearchIcon from '../SearchIcon/SearchIcon';
import AvatarUser from '../AvatarUser/AvatarUser';
import logo from '../assets/logo.png'

function NavBar() {
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <div class="collapse navbar-collapse nav" id="navbarNav ">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active pt-1" aria-current="page" href="#"><img src={logo} width="80px" height={30}/></a>
        </li>
        <li class="nav-item">
          <a class="nav-link ps-4 " href="#">Products</a>
        </li>
        <li class="nav-item">
          <a class="nav-link ps-4 " href="#">Solutions</a>
        </li>
        <li class="nav-item ">
          <a class="nav-link  ps-4">For You</a>
        </li>
        <li class="nav-item ">
          <a class="nav-link  ps-4">Industries</a>
        </li>
        
      </ul>
  
    </div>
    <div class="d-flex flex-row-reverse  navbar-nav ">
  <div class="p-2 "><a class="nav-link  ps-2">Support</a></div>
  <div class="p-2 "><a class="nav-link  ps-2">Driver</a></div>
  <div class="p-2 "><a class="nav-link  ps-2">Shops</a></div>
</div>
<div class="d-flex flex-row-reverse  navbar-nav ">
<div class="p-0 "><a class="nav-link  ps-2"><AvatarUser/></a></div>
<div class="p-0 "><a class="nav-link  ps-2"><SearchIcon/></a></div>
</div>
  </div>
</nav>
    </div>
  )
}

export default NavBar