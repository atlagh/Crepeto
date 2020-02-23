import React from 'react';
import './Register.css';

const Register =() => {
	return(
		<div className= "forme main-container grow">
			<form>
				<h1 className="center siz">Register</h1>
				<div className="blick">
					<div className="center">Phone Number: </div>
					<input className=" center grow pa1 mt2 bg-transparent" id="phone-number" name="phone-number" type="phone"/>
					<div className="center">address: </div>
					<input className=" center grow pa1 mt2 bg-transparent" id="phone-number" name="phone-number" type="phone"/>
					<div className="mt2 center">Password: </div>
					<input className="grow pa1 mt2 bg-transparent center" id="phone-number" name="phone-number" type="phone"/>
					<div className="mt2 center">Confirm Password: </div>
					<input className="grow pa1 mt2 bg-transparent center" id="phone-number" name="phone-number" type="phone"/>
					<div className="center mt3">
					<input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib br3" type="submit" value="Register"/>
					</div>
				</div>
			</form>
		</div>
	)
}

export default Register;