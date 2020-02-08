import React from 'react';

import './NavBar.css';

const NavBar = () =>{
	return (
		<header className="logo container">
			<div>
				<img src={require('./logo.png')} alt="" width="100px" height="100px"/>
			</div>

			<nav>
				<div className="center">
					<input class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib br3 marg" type="submit" value="Order"/>
					<input class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib br3 marg" type="submit" value="Contact us"/>
					<input class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib br3 marg" type="submit" value="About us"/>
				</div>
			</nav>
		</header>

	)
}
export default NavBar;