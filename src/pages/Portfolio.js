import React, { useState } from 'react';

export default function App(props) {
	return (
		<div className="Portfolio">
			<h1>My Websites and Apps</h1>

			<div id="ga-final-proj">
				<h4> My-Pack </h4>
				<h5> a lighter pack clone</h5>
				<p>
					{' '}
					This app is built with a Ruby-on-rails backend and a React front-end.{' '}
				</p>
				<p>
					{' '}
					A users can make a list of their backpacking gear, calculate total
					weight and see a chart which breaks down weights by gear catagory.
				</p>
				<img src="" />
			</div>

			<div id="tweeter">
				<h4> Tweeet-r</h4>
				<h5> a very basic twitter clone</h5>
				<p>
					{' '}
					This app was made in a group setting where I mostly worked on the CSS
					and styling
				</p>
				<img src="" />
			</div>

			<div id="fermenter">
				<h4> Fermenter </h4>
				<h5> An app for homebrewers and at home microbial kitchens</h5>
				<p> Built with a react front end and a express/ mongo DB backend</p>
				<p>
					{' '}
					Users have full crud capibility to create recipies for beers and
					lactic-acid fermentations.
				</p>
				<p>
					{' '}
					users can also make time-stamped notes when making a recipe to record
					variations and outcomes{' '}
				</p>
				<img src="" />
			</div>

			<div id="Grocery-app">
				<h4> Grocery list </h4>
				<h5> very basic react app made for making a grocery shopping list</h5>
				<p>
					{' '}
					This app is built with a react front end and an express/mongoDB
					backend{' '}
				</p>
				<img src="" />
			</div>

			<div id="Computer Cacti">
				<h4> Computer Cacti </h4>
				<h5> a mock e-commerce site for 3-d models of cacti and planters</h5>
				<p> This app is built with an express and mongoDB backend </p>
				<p> </p>
				<img src="" />
			</div>

			<div id="The Wizards Maze">
				<h4> The Wizards Maze</h4>
				<h5> a very simple JS game</h5>
				<p>
					{' '}
					this is made with a jquery and is played by finding the correct route
					to exit the maze{' '}
				</p>
				<img src="" />
			</div>
		</div>
	);
}
