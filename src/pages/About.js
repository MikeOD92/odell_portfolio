import React from 'react';
import {
	DiHtml5,
	DiCss3,
	DiJsBadge,
	DiJqueryLogo,
	DiSass,
	DiReact,
	DiDatabase,
	DiGulp,
	DiNodejsSmall,
	DiRuby,
	DiPostgresql,
	DiMongodb,



} from 'react-icons/di';

export default function About(props) {
	return (
		<div className="AboutPage">
			<h3> About me</h3>
			<div className="prof-container">
				<img id="photo" src="..." />
			</div>
			<div className="info-container">
				<p>
					{' '}
					I’m a software engineer and creative with a passion for the outdoors
					and a strong sense of environmental responsibility. I use React, Ruby
					and JS to build visually pleasing, user friendly applications and
					websites to help other makers share their creations with the world.
				</p>
			</div>
			<div className="skills container">
				<h5> Front-end </h5>
				<DiHtml5 />
				<DiCss3 />
				<DiSass />
				<DiJsBadge />
				<DiReact />
				<DiGulp />
				<DiNodejsSmall />
				<DiDatabase />
				<DiRuby />
			</div>
		</div>
	);
}
