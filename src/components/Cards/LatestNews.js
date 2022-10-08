import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import './cards.css'
import c1 from "../assets/card1.jpg";
import c2 from "../assets/card2.jpg";
import c3 from "../assets/card3.jpg";
import c4 from "../assets/card4.jpg";
import c5 from "../assets/card5.jpg";
import c6 from "../assets/card6.jpg";
import c7 from "../assets/card7.jpg";
import c8 from "../assets/card8.jpg";
function LatestNews() {
  return (
    <div class='bg-light'><br></br><br></br>
        <h1 style={{textAlign:"center"}}><b>Latest GTC News</b></h1><br/>
      <div class=" container">
        <div class="row row-cols-1 row-cols-md-4 g-4">
          <div class="col ">
            <div class="card card-height">
              <img src={c1} id='img-height' class="card-img-top" alt="..." />
              <div class="card-body">
                <h6 class="card-title">
                  <b>
                    HEAVY.AI Delivers Digital Twin for Telco Network Planning
                    and Operations
                  </b>
                </h6>
                <p class="card-text">
                HEAVY.AI is using NVIDIA Omniverse™
to help telcos optimize wireless site
placements, reducing the complexity of
operations.

                </p>
              </div>
            </div>
          </div>
          <div class="col ps-3">
            <div class="card card-height">
              <img src={c2}  id='img-height' class="card-img-top" alt="..." />
              <div class="card-body">
                <h6 class="card-title">
                  <b>
                    Fast-Track Your Speech AI With a Free Trial of NVIDIA Riva
                    on LaunchPad
                  </b>
                </h6>
                <p class="card-text">
                Prototype, test, and fine-tune your
speech-based Al solutions with free
access to hardware and software
stacks, NVIDIA Riva ASR and TTS step-
by-step labs, and support from NVIDIA
Al expert.

                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card card-height">
              <img src={c3}  id='img-height' class="card-img-top" alt="..." />
              <div class="card-body">
                <h6 class="card-title">
                  <b>
                    Korea Telecom Trains Smart Speakers, Customer Call Centers
                    with NVIDIA AI
                  </b>
                </h6>
                <p class="card-text">
                South Korea's leading mobile operator
 builds billion-parameter LLMs trained
with the NVIDIA DGX SuperPOD™
platform and NeMo Megatron.

                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card card-height">
              <img src={c4}  id='img-height' class="card-img-top" alt="..." />
              <div class="card-body">
                <h6 class="card-title">
                  <b>
                    Experience the Rimac Nevera 3D Configurator on Omniverse
                    Cloud
                  </b>
                </h6>
                <p class="card-text">
                See how INVIDIA Umniverse™ Cloud
 enables Rimac to host a real-time,
 physically accurate, advanced 3D
configurator for interaction on every
 device.

                </p>
              </div>
            </div>
          </div>
        </div>
      </div><br/><br/>
      <div class="container card-pos">
        <div class="row row-cols-1 row-cols-md-4 g-4">
          <div class="col">
            <div class="card card-height">
              <img src={c5}  id='img-height' class="card-img-top" alt="..." />
              <div class="card-body">
                <h6 class="card-title">
                  <b>
                    Deloitte Expands Innovative Solutions with NVIDIA Al and
                    Omniverse Platforms
                  </b>
                </h6>
                <p class="card-text">
                Enabling cutting-edge applications for
enterprises, including edge Al, speech
Al, recommender systems, chatbots,
cybersecurity, metaverse applications,
digital twins, and more.

                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card card-height">
              <img src={c6}  id='img-height' class="card-img-top" alt="..." />
              <div class="card-body">
                <h6 class="card-title">
                  <b>Speech AI Summit</b>
                </h6>
                <p class="card-text">
                Join us on November 2nd for an
 engaging online conversation with
 experts from Google, Meta, NVIDIA, and
 more on trends and techniques in
automatic speech recognition (ASR) and
text-to-speech (TTS) technologies.

                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card card-height">
              <img src={c7}  id='img-height' class="card-img-top" alt="..." />
              <div class="card-body">
                <h6 class="card-title">
                  <b>
                    NVIDIA Omniverse ACE Enables Easier, Faster Deployment of
                    Interactive Avatars
                  </b>
                </h6>
                <p class="card-text">
                Meet Violet, an interactive Al-powered
avatar built using the NVIDIA Tokkio
application framework. This cloud-based
virtual assistant leverages NVIDIA
Omniverse Avatar Cloud Engine (ACE) to
see, converse with users and make
intelligent recommendations.


                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card card-height">
              <img src={c8}  id='img-height' class="card-img-top" alt="..." />
              <div class="card-body">
                <h6 class="card-title">
                  <b>The Wheel Deal: 'Racer RTX'</b>
                </h6>
                <p class="card-text">
                Racer RTX is a fun, high-fidelity RC car
experience coming this fall that allows
users to navigate remote-controlled
vehicles through a variety of immersive,
physically accurate environments. Take a
behind-the-scenes look at how the
cinematic trailer was made.

                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LatestNews;
