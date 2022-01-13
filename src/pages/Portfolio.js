import React from 'react';

export default function App(props) {
	return (
		<div className="portfolio" id="portfolio">
			<h1 className="waves">My Websites and Apps</h1>

			<div id="barraza-law">
				<h4> Barraza Law Intake App</h4>
				<h5>
					React and Django app built for the Immigration Law Office of Moises
					Barraza.
				</h5>
				<p>
					This app allows the law firm to create responsive forms for their
					intake process that can be edited as needed by staff. The intake app
					facilitates a quick and user friendly intake process for both the law
					firm and their prospective clients.
				</p>
				<div>
					<img src="https://i.imgur.com/EeHRqgY.png" />
				</div>

				{/* <div>
					<img src="https://i.imgur.com/yeUIbyr.png" />
				</div>

				<div>
					<img src="https://i.imgur.com/BQeM01t.png" />
				</div> */}
			</div>

			<div id="roll_bot">
				<h4> Roll Bot</h4>
				<h5>
					{' '}
					Discord bot designed to help play Powered by the Apocalypse Role
					Playing Games (RPG) remotely.
				</h5>
				{/* <p>
					{' '}
					The basic idea for this bot came about when some friends and I played
					Dungeon World via zoom in the early 2021. After using several diffrent
					tools for chat, dice rolls and character sheets, I set out to build a
					more all emcompassing tool for our game.
				</p> */}
				<p>
					{' '}
					Roll Bot uses Discord.py, and PyMongo to respond to user input, build
					character sheets, and to make dice rolls with or without modifiers
					based on their characters play sheet. Character sheets are stored in
					MongoDB, which can be updated and changed as players level up.
				</p>
				<p>
					Roll Bot is currently in development specifically for players of
					Dungeon World. I plan to include set up options so people can play
					other Powered by the Apocalypse games such as Apocalypse World, City
					of Mist, Monster Hearts and others.
				</p>
				<div>
					<img src="https://i.imgur.com/cfwSvv0.png" />
				</div>
				{/* <div>
					<img src="https://i.imgur.com/UtlVwGd.png" />
				</div> */}
				<div>
					<img src="https://i.imgur.com/As2PMxH.png" />
				</div>
				<a href="https://github.com/MikeOD92/rollbot"> github repo</a>
			</div>

			<div id="rain-check">
				<h4> Rain Check</h4>
				<h5>Mobile first weather app</h5>
				<p>
					{' '}
					Built using React, Rain Check pulls data from a third-party api (open
					weather) and stores saved locations in local storage.
				</p>
				<a href="https://raincheckapp.netlify.app/">
					<div className="horzontial-img">
						<img src="https://i.imgur.com/SS2pauD.png" />
					</div>
				</a>
				<a href="https://github.com/MikeOD92/weather_app"> github repo</a>
			</div>

			<div id="Here-comes-treble">
				<h4> Here comes Treble</h4>
				<h5>
					{' '}
					Kids music education app. Built with a team at the LiveOnline May 21'
					Hackathon{' '}
				</h5>
				<p>
					{' '}
					Built with the M.E.R.N stack, MongoDB, Express, React, Node.js. This
					app also uses Tone.js, React-route and jsonwebtokens
				</p>
				<a href="https://here-comes-treble.netlify.app/">
					<img src="https://i.imgur.com/gH4zQsv.png" />
				</a>
				<a href="https://github.com/MikeOD92/here_comes_treble"> github repo</a>
			</div>

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
					Users can make a list of their backpacking gear, calculate total
					weight and see a chart which breaks down weights into user defined
					gear categories.
				</p>
				<a href="https://my-pack.herokuapp.com/">
					my-pack
					<img src="https://i.imgur.com/JuAT335.png" />
					<img src="https://i.imgur.com/YKreI6V.png" />
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
					Users have full crud capibility with recipes for beers and lacto
					fermentations. Planing to add recipe models for vinegars, cider,
					cheese and grain fermentations. Users can make time-stamped notes
					associated with recipes to record variations and outcomes{' '}
				</p>
				<a href="https://infinite-temple-91457.herokuapp.com/">
					Fermenter App
					<img src="https://i.imgur.com/u6E93df.png" />
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

			<div id="Wizards-maze-RPG">
				<h4> Wizard's Maze</h4>
				<h5> Maze game with RPG battle Elements</h5>
				<p> Built with Jquery </p>
				<p>
					{' '}
					Wizard's maze is a small in browser maze and battle game inspired by
					choose your own adventure games and the pokemon battle sequences. As
					the player attempts to find the correct pattern to exit the maze, they
					encounter creatures and have the option to fight, heal or run.
				</p>
				<p>
					The game is lost when the player's health reaches zero and the game is
					won when the player has escaped the maze.
				</p>
				<a href="https://mikeod92.github.io/Wizards_Maze/">
					{' '}
					Wizard's Maze
					<img src="https://i.imgur.com/6MHHpZZ.png" />
					<img src="https://i.imgur.com/UrVeKAf.jpg" />
				</a>
				<a href="https://github.com/MikeOD92/Wizards_Maze"> github repo</a>
			</div>
		</div>
	);
}
