import React from 'react';

import './NavBar.css';

const NavBar = ({onRouteChange}) =>{
	return (
			<header className="logo">
				<div>
					<img onClick={() => onRouteChange('base')} className="center pointer" src={require('./logo.png')} alt="" width="100px" height="100px"/>
				</div>

				<nav>
					<div className="center mt2">
						<input onClick={() => onRouteChange('order')} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib br3 marg" type="submit" value="Order"/>
						<input onClick={() => onRouteChange('contact')} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib br3 marg" type="submit" value="Contact"/>
						<input onClick={() => onRouteChange('about')} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib br3 marg" type="submit" value="About"/>
					</div>
				</nav>
			</header>

	)
}
export default NavBar;