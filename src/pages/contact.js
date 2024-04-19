import react from "react";
import {Link} from 'react-router-dom';

function Contact()
{
return( 
     <> 

<div class="contact_index">
	<div class="container">
			<div class="cont-head">
				<h3>CONTACT</h3>
				<p>Have questions or inquiries? We're here to help. Get in touch with us using the contact information below:</p>
  
			</div>
		<div class="col-md-7 contact_index-left">
			<h3>Send Us A Message</h3>
			<div class="contact-form">
				<form>
				<input type="text" class="textbox" value="Name" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Name';}"/>
					<input type="text" class="textbox" value="Email" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Email';}"/>
					<textarea value="Message:" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Message';}">Message</textarea>
					<input type="submit" value="Send Now"/>
				</form>
			</div>
		</div>
		<div class="col-md-5 contact_index-right">
			<h3>Quick Links</h3>
			<ul class="footer_social">
			  <li><a href="#"> <i class="email"> </i> </a></li>
			  <li><a href="#"> <i class="chat"> </i> </a></li>
			  <li><a href="#"> <i class="report"> </i></a></li>
			  <li><a href="#"> <i class="phone"> </i></a></li>
			</ul>
		</div>
	</div>
</div>
	
	<div class="map">
			
	<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d185436.03848209148!2d-80.64112757796612!3d43.430565356523736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882bf48c03ee5105%3A0x9525f8e6df5f544b!2sKitchener%2C%20ON!5e0!3m2!1sen!2sca!4v1713504223425!5m2!1sen!2sca"></iframe>
	</div>
     
     </>


);
}
export default Contact;
