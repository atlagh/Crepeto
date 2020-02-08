import React from 'react';
import './Card.css';


const Card = () =>{
	return (

		<div className= "form main-container grow">
			<form>
				<h1 className="center size">Sign In</h1>
				<div className="block">
					<div className="center">Phone Number: </div>
					<input className=" center grow pa1 mt2 bg-transparent" id="phone-number" name="phone-number" type="phone"/>
					<div className="mt2 center">Password: </div>
					<input className="grow pa1 mt2 bg-transparent center" id="phone-number" name="phone-number" type="phone"/>
					<div className="center mt3">
					<input class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib br3" type="submit" value="Sign in"/>
					</div>
					<div className="center mt3">
						<a className="black grow" href="">Forgot your password?</a>
					</div>
				</div>
			</form>
		</div>

	)
}

export default Card;