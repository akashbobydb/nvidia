import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import './banne.css'
import img1 from '../assets/b1.webp'
import img2 from '../assets/try2.png'
import img3 from '../assets/banner3.jpg'
import img4 from '../assets/banner4.jpg'
import img5 from '../assets/banner5.jpg'
import img6 from '../assets/founder.jpg'


function Banne() {
  return (
    <div>
        <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to="4" aria-label="Slide 5"></button>
  </div>
  <div>
  <div class="carousel-inner ">
    <div class="carousel-item active" data-bs-interval="10000" >
      <img src={img1} className='ban-img'  alt="grass"/>
      <div class="carousel-caption d-none d-md-block ">
        <div className='banner-position'>
        <h3 class='display-1' style={{color:"	#8fce00"}}> NVIDIA</h3>
        <p class="blockquote " id='b1'>Pionered Accelerated Computing to Tackle Challenges No One Else can Solve. </p>
        <button type="button" class="btn btn-success  round-corners">Learn More</button>
        </div>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src={img2} className='ban-img' alt="canvas"/>
      <div class="carousel-caption d-none d-md-block">
        <h5 style={{color:"white"}}>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src={img3} className='ban-img' alt="rtx"/>
      <div class="carousel-caption d-none d-md-block">
      <div className='banner-position3'>
      <h3 class='display-1'>GeForce® 4090 Experience™</h3>
        <p id='b1'>Maak en deel video's, screenshots en livestreams met vrienden. Houd je stuurprogramma's up-to-date en optimaliseer je
           game-instellingen. Met GeForce Experience™ heb je oneindig veel mogelijkheden, waardoor het een onmisbare aanvulling voor je 
           GeForce®-grafische kaart is.
        </p>
        </div>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src={img4} className='ban-img' alt="canvas"/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src={img5} className='ban-img' alt="canvas"/>
      <div class="carousel-caption d-none d-md-block">
      <div className='banner-position'>
      <h3 class='display-1'> NVIDIA</h3>
        <h3> Grace Hopper Superchip</h3>
        <p>Researchers, scientists embrace NVIDIA platform for quantum algorithms, simulations and classical-quantum compute.</p>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
    <br/>
    <div className='fnder'>
      <img src={img6} height='300px' width='400px' id='fnd-img'  alt="grass"/>
        <div className='fnder-position'>
          <h1>Don’t Miss the GTC Keynote</h1>
        <h3>Jensen Huang | Founder and CEO | NVIDIA </h3>
        <p class="blockquote">Take a closer look at the game-changing technologies that are<br/> helping us 
        take on the world’s greatest challenges. </p>
        <button type="button" class="btn btn-success rounded-top">watch now</button>
        </div>
      </div><br/>
      
    </div>
  )
}

export default Banne