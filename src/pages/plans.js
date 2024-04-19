import react from "react";
import {Link} from 'react-router-dom';

function Plans()
{
return( 
     <> 

<div class="host-palan">
		<div class="container">
		<h2>A WEB HOST YOU CAN COUNT ON</h2>
		<p>For over 16 years, we’ve proudly offered the best web hosting service and support available anywhere.High-performance WordPress hosting, from personal projects to high-profile client sites. From WordPress blogs and portfolio sites to small business sites, e-commerce, and beyond, Media Temple has a reliable hosting plan that’s right for you. And all our web hosting plans are backed by our industry-leading, award-winning, 24/7/365 live support.</p>
		<div class="plans-main">
				<h3>HOSTING PLANS</h3>
			   <div class="col-md-4 plan_1">
					<h4>WORDPRESS HOSTING</h4>
					<p>High-performance WordPress hosting, from personal projects to high-profile client sites.</p>
					<h5>Grate for :</h5>
					<h6>WordPress Designers, WordPress Developers</h6>
					<ul class="plan-bars">
						<li>EASY TO USE :<div class="progress two">
							   <div class="bar two" ></div>
							</div>
						</li>
						<li>ROOM TO GROW :<div class="progress two">
							   <div class="bar two" ></div>
							</div>
						</li>
					</ul>
				</div>
				<div class="col-md-4 plan_1 one">
					<h4>WEB HOSTING</h4>
					<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Printing and typesetting industry</p>
					<h5>Grate for :</h5>
					<h6>Bloggers, businesses, designers</h6>
					<ul class="plan-bars">
						<li>EASY TO USE :<div class="progress two">
							   <div class="bar two" ></div>
							</div>
						</li>
						<li>ROOM TO GROW :<div class="progress two">
							   <div class="bar two"></div>
							</div>
						</li>
					</ul>
				</div>
				<div class="col-md-4 plan_1 two">
					<h4>VPS HOSTING</h4>
					<p>Professional-grade VPS hosting, typesetting industry with or without a control panel.</p>
					<h5>Grate for :</h5>
					<h6>Business, e-commerce, resellers, web developers</h6>
					<ul class="plan-bars">
						<li>EASY TO USE :<div class="progress two">
							   <div class="bar two" ></div>
							</div>
						</li>
						<li>ROOM TO GROW :<div class="progress two">
							   <div class="bar two" ></div>
							</div>
						</li>
					</ul>
				</div>
					<div class="clearfix"></div>
			</div>
		</div>
	</div>
	<div class="pricing-plans">
		<div class="container">
			<div class="price-head">
				<h3>OUR PRICING PLANS</h3>
			</div>
				<div class="pricing-grids">
						<div class="pricing-grid1">
							<div class="price-value">
									<h4><a href="#"> BASIC</a></h4>
									<h5><span>$ 19.99</span><lable> / month</lable></h5>
							</div>
							<div class="price-bg">
							<ul>
								<li class="whyt"><a href="#">5GB Disk Space </a></li>
								<li><a href="#">10 Domain Names</a></li>
								<li class="whyt"><a href="#">5 E-Mail Address </a></li>
								<li><a href="#">50GB Monthly Bandwidth </a></li>
								<li class="whyt lost"><a href="#">Fully Support</a></li>
							</ul>
							<div class="cart1">
								<a class="popup-with-zoom-anim" href="#small-dialog">ORDER</a>
							</div>
							</div>
						</div>
						<div class="pricing-grid2">
							<div class="price-value two">
								<h4><a href="#">STANDARD</a></h4>
								<h5><span>$ 29.99</span><lable> / month</lable></h5>
							</div>
							<div class="price-bg">
							<ul>
								<li class="whyt"><a href="#">10GB Disk Space </a></li>
								<li><a href="#">20 Domain Names</a></li>
								<li class="whyt"><a href="#">10 E-Mail Address </a></li>
								<li><a href="#">100GB Monthly Bandwidth </a></li>
								<li class="whyt lost"><a href="#">Fully Support</a></li>
							</ul>
							<div class="cart2">
								<a class="popup-with-zoom-anim" href="#small-dialog">ORDER</a>
							</div>
							</div>
						</div>
						<div class="pricing-grid3">
							<div class="price-value three">
								<h4><a href="#">PREMIUM</a></h4>
								<h5><span>$ 49.99</span><lable> / month</lable></h5>
							</div>
							<div class="price-bg">
							<ul>
								<li class="whyt"><a href="#">50GB Disk Space </a></li>
								<li><a href="#">50 Domain Names</a></li>
								<li class="whyt"><a href="#">20 E-Mail Address </a></li>
								<li><a href="#">300GB Monthly Bandwidth </a></li>
								<li class="whyt lost"><a href="#">Fully Support</a></li>
							</ul>
							<div class="cart3">
								<a class="popup-with-zoom-anim" href="#small-dialog">ORDER</a>
							</div>
							</div>
						</div>
							<div class="clearfix"> </div>
							
								 <div id="small-dialog" class="mfp-hide">
									<div class="pop_up">
									 	<div class="payment-online-form-left">
											<form>
												<h4><span class="shipping"> </span>Shipping</h4>
												<ul>
													<li><input class="text-box-dark" type="text" value="Frist Name" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Frist Name';}"/></li>
													<li><input class="text-box-dark" type="text" value="Last Name" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Last Name';}"/></li>
												</ul>
												<ul>
													<li><input class="text-box-dark" type="text" value="Email" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Email';}"/></li>
													<li><input class="text-box-dark" type="text" value="Company Name" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Company Name';}"/></li>
												</ul>
												<ul>
													<li><input class="text-box-dark" type="text" value="Phone" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Phone';}"/></li>
													<li><input class="text-box-dark" type="text" value="Address" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Address';}"/></li>
													<div class="clearfix"> </div>
												</ul>
												<div class="clearfix"> </div>
											<ul class="payment-type">
												<h4><span class="payment"> </span> Payments</h4>
												<li><span class="col_checkbox">
													<input id="3" class="css-checkbox1" type="checkbox"/>
													<label for="3" name="demo_lbl_1" class="css-label1"> </label>
													<a class="visa" href="#"> </a>
													</span>
													
												</li>
												<li>
													<span class="col_checkbox">
														<input id="4" class="css-checkbox2" type="checkbox"/>
														<label for="4" name="demo_lbl_2" class="css-label2"> </label>
														<a class="paypal" href="#"> </a>
													</span>
												</li>
												<div class="clearfix"> </div>
											</ul>
												<ul>
													<li><input class="text-box-dark" type="text" value="Card Number" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Card Number';}"/></li>
													<li><input class="text-box-dark" type="text" value="Name on card" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Name on card';}"/></li>
													<div class="clearfix"> </div>
												</ul>
												<ul>
													<li><input class="text-box-light hasDatepicker" type="text" id="datepicker" value="Expiration Date" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Expiration Date';}"/><em class="pay-date"> </em></li>
													<li><input class="text-box-dark" type="text" value="Security Code" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Security Code';}"/></li>
													<div class="clearfix"> </div>
												</ul>
												<ul class="payment-sendbtns">
													<li><input type="reset" value="Cancel"/></li>
													<li><input type="submit" value="Process order"/></li>
												</ul>
												<div class="clearfix"> </div>
											</form>
										</div>
						  			</div>
								</div>
								
							</div>
						<div class="clearfix"> </div>
					</div>
				</div>
				
				
				<link href="css/popup.css" rel="stylesheet" type="text/css"></link>

</>
);
}
export default Plans;
