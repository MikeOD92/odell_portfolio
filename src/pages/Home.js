import React, { useState } from 'react';
import Portfolio from './Portfolio';
import Contact from './Contact';
import About from './About';

export default function App(props) {
	return (
		<div className="HomePage" id="home">
			<header className="header-bar">
				<h1 className="waves">Michael T. O'Dell</h1>
			</header>
			<div id="splash-container">
				<div id="red-texture"></div>
				<div id="blue-box"></div>
				<h3> Web Developer / Software Engineer / Artist</h3>
			</div>
			<About />

			<Portfolio />

			<Contact />
		</div>
	);
}
