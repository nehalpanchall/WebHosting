import React from "react";
import {Link} from 'react-router-dom';

function Header()
{
return(
<>
<div id="home" class="header">
				<div class="strip">
					 <div class="container">
						<p class="location"><i class="location"></i>16A, Honey Street (Green Door), Toronto</p>
						<p class="phonenum">+1(658)-208-5592</p>
							<div class="clearfix"></div>
					</div>
				</div>
			<div class="header-bottom">
			<div class="container">
				<div class="logo">
					<a href="index.html"><h1>DESIRE <span>HOST</span></h1></a>
				</div>
				<span class="menu"></span>
				<div class="top-menu">
					<ul>
					<nav class="cl-effect-5">
						<li><Link to="/"><span data-hover="Home">Home</span></Link></li> 
            <li><Link to="/about"><span data-hover="About">About</span></Link></li> 
			<li><Link to="/services"><span data-hover="services">SERVICES</span></Link></li> 
			<li><Link to="/plans"><span data-hover="plans">PlANS</span></Link></li>
			<li><Link to="/domain"><span data-hover="Domain">Domain</span></Link></li> 
			<li><Link to="/contact"><span data-hover="contact">Contact</span></Link></li>
					</nav>
					</ul>
				</div>
			
				
				<div class="clearfix"></div>
			</div>
		</div>
		
	</div>
</>

);


}
export default Header;