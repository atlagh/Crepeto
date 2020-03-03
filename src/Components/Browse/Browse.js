import React from 'react';
import './Browse.css';

const Browse =({onRouteChange}) => {
	return(
		<div onClick={() => onRouteChange('browse')} className="menu grow pointer">
			<h1 className="center bluck sizez">  Our Menu</h1>
		</div>

	)
}

export default Browse;