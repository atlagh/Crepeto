import React from 'react';
import './contact.css';


const Contact = () => {
	return(
		<form className="mgs">
			<p className="fc1 fs1"> Contact Us</p>
			<div className= "fc1 fs2 mgb">
				<label className="pad1" htmlFor="name">Enter your name</label>
				<input type= "text" name="name" id="name" placeholder=""/>
			</div>
			<div className= "fc1 fs2 mgb">
				<label className="pad1" htmlFor="email"> Enter your email</label>
				<input type= "text" name="email" id="email" placeholder=""/>
			</div>
			<div className= "fc1 fs2 mgb">
				<textarea name="message" id="message" cols="30" rows="5" placeholder="enter your text here"></textarea>
			</div>

			<input type="submit" value="message" />

		</form>
	)
}

export default Contact;