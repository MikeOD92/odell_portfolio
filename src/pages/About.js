import React from 'react';
import { IconContext } from 'react-icons';
import {
	SiAdobeillustrator,
	SiAdobephotoshop,
	SiAdobepremiere,
	SiBlender,
	SiPostman
} from 'react-icons/si';

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
	DiMongodb
} from 'react-icons/di';

export default function About(props) {
	return (
		<div className="AboutPage" id="about">
			<h1 className="waves">About me</h1>
			<div className="info-container">
				<div className="prof-container">
					<img id="photo" src="https://i.imgur.com/lGDDgKK.jpg" />
				</div>
				<div className="skills">
					<p>
						{' '}
						I’m a software engineer and creative with a passion for the
						outdoors. I use React, JS, and Ruby to build visually pleasing, user
						friendly applications and websites to help other makers share their
						creations with the world.
					</p>
				</div>
				<IconContext.Provider
					value={{ color: 'rgba(0,0,0,0.6)', className: 'react-icons' }}
				>
					<div className="skills-container">
						<h5> Front-end </h5>

						<DiHtml5 />

						<DiCss3 />

						<DiSass />

						<DiGulp />

						<DiJsBadge />

						<DiJqueryLogo />

						<DiReact />

						<h5> Back-end </h5>

						<DiNodejsSmall />

						<DiRuby />

						<DiDatabase />

						<DiPostgresql />

						<DiMongodb />

						<SiPostman />

						<h5> Software </h5>

						<SiAdobeillustrator />

						<SiAdobephotoshop />

						<SiAdobepremiere />

						<SiBlender />
					</div>
				</IconContext.Provider>
			</div>
		</div>
	);
}
