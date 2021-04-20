import React, { useState } from 'react';
import Portfolio from './Portfolio';
import Contact from './Contact';
import About from './About';

export default function App(props) {
	return (
		<div className="HomePage">
			<header className="header-bar">
				<h1>
					{' '}
					<span className="dots">Michael T. </span>
					<span className="waves">O'Dell</span>
				</h1>
			</header>
			<div id="splash-container">
				<div id="red-texture"></div>
				<div id="blue-box"></div>
				<h3> Web Developer / Software Engineer / Artist</h3>
			</div>
			<Portfolio />
			<About />
			<Contact />
		</div>
	);
}
