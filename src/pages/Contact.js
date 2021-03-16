import React, { useState } from 'react';

export default function Contact(props) {
	return (
		<div className="ContactPage">
			<h3>~ Contact ~</h3>
			<ul>
				<li> michaelodell660@gmail.com</li>
				<li>
					{' '}
					<a href="https://github.com/MikeOD92"> Github</a>
				</li>
				<li>
					{' '}
					<a href="https://www.linkedin.com/in/michaelodell92/">Linked~in</a>
				</li>
			</ul>
		</div>
	);
}
