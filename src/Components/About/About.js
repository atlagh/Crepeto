import React from 'react';
import './About.css'


const About= () => {
	return (
		<div className="padt">
			<div className="ht fs1">
				<div className="first">
				Making Ifrane a better place
				</div>
				<div className="third fs2">
				<p>Une gaufre est un mets de pâte légère cuite entre deux plaques métalliques, articulées entre elles par une ou des charnières, ornées de motifs qui s'impriment dans la pâte et donnent à la pâtisserie sa forme caractéristique. C'est un mets typique de la Belgique, des Pays-Bas, du Nord de la France, des régions alpines d'Italie (Val d'Aoste et Escartons) et de Suisse romande.</p>
				</div>
				<div className="second">
				<img src={require('./waffle.jpg')} alt="" width="100%" height="100%"/>
				</div>
			</div>
		</div>
	)
}

export default About;