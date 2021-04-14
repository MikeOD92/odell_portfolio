import React, { useState } from 'react';

export default function Contact(props) {
	return (
		<div className="ContactPage">
			<div className="pagetitle">
				<h1>Contact</h1>
			</div>
			<div className="email">
				<a href="mailto:michaelodell660@gmail.com">
					{' '}
					michaelodell660@gmail.com
				</a>
			</div>
			<div className="github">
				<a href="https://github.com/MikeOD92"> Github</a>
			</div>
			<div className="linkedin">
				<a href="https://www.linkedin.com/in/michaelodell92/">Linked-in</a>
			</div>
		</div>
	);
}
