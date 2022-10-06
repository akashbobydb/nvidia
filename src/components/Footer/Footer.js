import React from 'react'
import './Footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
function Footer() {
  return (
    <div>
        

  <footer class="footer">
  	 <div class="container">
  	 	<div class="row">
  	 		<div class="footer-col">
  	 			<h3>Corporate Information</h3>
  	 			<ul>
  	 				<li><a href="#">About us</a></li>
  	 				<li><a href="#">Corporate Overview</a></li>
  	 				<li><a href="#">Technologies</a></li>
  	 				<li><a href="#">Reasearch</a></li>
                    <li><a href="#">Investors</a></li>
  	 				<li><a href="#">Social Responsibility</a></li>
  	 				<li><a href="#">NVIDIA Foundation</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h3>Get Involved</h3>
  	 			<ul>
                   <li><a href="#">forums</a></li>
  	 				<li><a href="#">careers</a></li>
  	 				<li><a href="#">developer home</a></li>
  	 				<li><a href="#">NVIDIA partner network</a></li>
                    <li><a href="#">startups and VCs</a></li>
  	 				<li><a href="#">technical training</a></li>
  	 				<li><a href="#">professional services for database</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h3>News & Events</h3>
  	 			<ul>
  	 				<li><a href="#">newsroom</a></li>
  	 				<li><a href="#">NVIDIA blog</a></li>
  	 				<li><a href="#">webinars</a></li>
  	 				<li><a href="#">stay informed</a></li>
                    <li><a href="#">events calendar</a></li>
  	 				<li><a href="#">NVIDIA gtc</a></li>
  	 				<li><a href="#">NVIDIA-on-demand</a></li>
  	 			</ul>
  	 		</div>
  	 	</div>
  	 </div>
       <div className='followus'>
  	 			<h4>follow NVIDIA</h4>
  	 			<div class="social-links">
  	 				<a id='pad-ic' href="#"><FacebookIcon/></a>
  	 				<a id='pad-ic' href="#"><TwitterIcon/></a>
  	 				<a id='pad-ic' href="#"><InstagramIcon/></a>
  	 				<a id='pad-ic' href="#"><LinkedInIcon/></a>
                       <a id='pad-ic' href="#"><YouTubeIcon/></a>
  	 			</div>
                </div>
  </footer>



    </div>
  )
}

export default Footer