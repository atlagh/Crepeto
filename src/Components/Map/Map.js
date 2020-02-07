import React from 'react';
import './Map.css';


const MyMap = () => {
	return(
		<div className="round">
			<div className="center">
				<iframe className="contmap"
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1976.0034526955449!2d-5.109564944914869!3d33.52896996716922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf91a596b13dd3a21!2sCrepeto%20ifrane!5e0!3m2!1sfr!2sma!4v1581001351674!5m2!1sfr!2sma">
				</iframe>
			</div>
		</div>

	)
}
export default MyMap;

