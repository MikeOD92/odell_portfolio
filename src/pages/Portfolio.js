import React, { useState } from 'react';

export default function App(props) {
	return (
		<div className="portfolio" id="portfolio">
			<h1 className="waves">My Websites and Apps</h1>

			<div id="ga-final-proj">
				<h4> My-Pack </h4>
				<h5>
					{' '}
					Gear and pack weight management application for thru hikers and
					ultra-light backpackers.
				</h5>
				<p>
					{' '}
					My pack is a full stack application made with a Ruby on rails back end
					and a React front end using the Chart.js library.
				</p>
				<p>
					{' '}
					A users can make a list of their backpacking gear, calculate total
					weight and see a chart which breaks down weights by gear catagory.
				</p>
				<a href="https://my-pack.herokuapp.com/">
					my-pack
					<img src="https://i.imgur.com/Cglr8UV.png" />
				</a>
				<a href="https://github.com/MikeOD92/mypack"> github repo</a>
				<br />
				<a href="https://github.com/MikeOD92/my_pack_api"> api repo</a>
			</div>

			<div id="fermenter">
				<h4> Fermenter </h4>
				<h5>
					{' '}
					Recipe management application made home brewers and fermenters to
					create and fine tune recipes.
				</h5>
				<p>Built with a react front end and a express/mongo DB backend.</p>
				<p>
					Users have full crud capibility with recipes for beers and lactic-acid
					fermentations. Planing to add recipe models for vinegars, cider,
					cheese and grain fermentations. Users can make time-stamped notes
					associated with recipes to record variations and outcomes{' '}
				</p>
				<a href="https://infinite-temple-91457.herokuapp.com/">
					Fermenter App
					<img src="https://i.imgur.com/R8oQjqc.jpg" />
				</a>
				<a href="https://github.com/MikeOD92/Fermenter"> github repo</a>
			</div>

			<div id="Computer Cacti">
				<h4> Computer Cacti </h4>
				<h5> a mock e-commerce site for 3-d models of cacti and planters</h5>
				<p> Built with an express and mongoDB backend </p>
				<p>
					{' '}
					with this application the user has full crud over product models and
					can click the buy button to reduce inventory
				</p>
				<p>
					{' '}
					This is a place for me to post and in the future sell or offer
					downloads of 3D models i've made with Blender
				</p>
				<a href="https://computercacti.herokuapp.com/">
					{' '}
					Computer Cacti
					<img src="https://i.imgur.com/eBNcPPv.png" />
					<img src="https://i.imgur.com/vhaBqKg.png" />
				</a>
				<a href="https://github.com/MikeOD92/computer-cacti"> github repo</a>
			</div>

			{/* <div id="The Wizards Maze">
				<h4> The Wizards Maze</h4>
				<h5> a very simple JS game</h5>
				<p>
					{' '}
					this is made with a jquery and is played by finding the correct route
					to exit the maze{' '}
				</p>
				<img src="" />
			</div> */}
		</div>
	);
}
