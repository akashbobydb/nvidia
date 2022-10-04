import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import img1 from '../images/banner1.jpg'
import img2 from '../images/banner2.jpg'
import img3 from '../images/banner3.jpg'
import img4 from '../images/banner4.jpg'
import img5 from '../images/banner5.jpg'

function Banne() {
  return (
    <>
        <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="4" aria-label="Slide 5"></button>
  </div>
  <div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000" >
      <img src={img1} height={650} class="d-block w-100" s alt="grass"/>
      <div class="carousel-caption d-none d-md-block ">
        <div className='banner-position'>
        <h3 class='display-1'> NVIDIA</h3>
        <p class="blockquote">Pionered Accelerated Computing to Tackle Challenges No One Else can Solve. </p>
        <button type="button" class="btn btn-success rounded-top">Read</button>
        </div>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src={img2} height={650} class="d-block w-100" alt="canvas"/>
      <div class="carousel-caption d-none d-md-block">
        <h5 style={{color:"white"}}>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={img3} height={650} class="d-block w-100" alt="rtx"/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src={img4} height={650} class="d-block w-100" alt="canvas"/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src={img5} height={650} class="d-block w-100" alt="canvas"/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
    </>
  )
}

export default Banne