import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./cards.css";
import g1 from "../assets/g1.jpg";
import g2 from "../assets/g2.png";
import g3 from "../assets/g3.jpg";
import g4 from "../assets/g4.jpg";
import s1 from "../assets/s1.jpg";
import s2 from "../assets/s2.jpg";
import s3 from "../assets/s3.jpg";
import s4 from "../assets/s4.jpg";
function GameShop() {
  return (
    <div class='bg-light'>
      <br></br>
      <br></br>
      <h1 style={{ textAlign: "center" }}>
        <b>Gaming</b>
      </h1><br/>
      <div class="container card-pos">
        <div class="row row-cols-1 row-cols-md-4 g-4">
          <div class="col ">
            <div class="card border">
              <img src={g1} height="150px" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">
                  <b>DLSS 3</b>
                </h5>
                <p class="card-text">
                  The performance multiplier, powered by
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card border">
              <img src={g2} height="150px" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">
                  <b>Portal with RTX</b>
                </h5>
                <p class="card-text">Reimagined with ray tracing and DLSS.</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card border">
              <img src={g3} height="150px" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">
                  <b>RTX. It's On.</b>
                </h5>
                <p class="card-text">The ultimate in ray tracing and Al.</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card ">
              <img src={g4} height="150px" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">
                  <b>Frames Win Games</b>
                </h5>
                <p class="card-text">NVIDIA Reflex Available Now.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <br></br>
        <br></br>
        <h1 style={{ textAlign: "center" }}>
          <b>SHOPS</b>
        </h1><br/>
        <div class="container card-pos">
          <div class="row row-cols-1 row-cols-md-4 g-4">
            <div class="col ">
              <div class="card shop-height">
                <img src={s1} height="150px" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">
                    <b>GeForce RTX Graphics Cards and Desktops</b>
                  </h5>
                  <p class="card-text">
                    GeForce RTX graphics cards deliver ultimate platform for
                    gamers and creators. Experience ray tracing, Al- powered
                    graphics, game-winning responsiveness, and much more.
                  </p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card shop-height">
                <img src={s2} height="150px" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">
                    <b>GeForce RTX 30 Series Laptops</b>
                  </h5>
                  <p class="card-text">
                    Powering the world’s fastest laptops for gamers and
                    creators. With new Al- powered Max-Q technologies that
                    optimize laptops to deliver high performance in thin form
                    factors.
                  </p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card shop-height">
                <img src={s3} height="150px" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">
                    <b>GFN Thursday</b>
                  </h5>
                  <p class="card-text">
                    See what's streaming this week on GeForce NOW.
                  </p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card shop-height">
                <img src={s4} height="150px" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">
                    <b>in the NVIDIA Studio</b>
                  </h5>
                  <p class="card-text">
                    Your weekly celebration of extraordinary artists, inspiring
                    art, and creator news.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br/><br/>
    </div>
  );
}

export default GameShop;
