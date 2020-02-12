import React from 'react';
import './contact.css';


const Contact = () => {
	return(
		<form className="mgs">
			<h1 className="fc1 fs1"> Contact Us</h1>
			<div className= "fc1 fs2 mgb">
				<label for="name">Enter your name</label>
				<input type= "text" name="name" id="name" placeholder=""/>
			</div>
			<div className= "fc1 fs2 mgb">
				<label for="email"> Enter your email</label>
				<input type= "text" name="email" id="email" placeholder=""/>
			</div>
			<div className= "fc1 fs2 mgb">
				<textarea name="message" id="message" cols="60" rows="5"></textarea>
			</div>

			<input type="submit" value="message" />

		</form>
	)
}

export default Contact;