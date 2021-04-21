import React, { useState } from 'react';
import { DiGithubBadge } from 'react-icons/di';
import { SiLinkedin } from 'react-icons/si';
import { IconContext } from 'react-icons';

export default function Contact(props) {
	return (
		<div className="ContactPage" id="contact">
			<div className="pagetitle">
				<h1 className="waves">Contact</h1>
			</div>
			<div className="email">
				<a href="mailto:michaelodell660@gmail.com">
					{' '}
					michaelodell660@gmail.com
				</a>
			</div>
			<IconContext.Provider
				value={{ color: 'rgba(0,0,0,0.6)', className: 'react-icons' }}
			>
				<div className="github">
					<a href="https://github.com/MikeOD92">
						{' '}
						<DiGithubBadge />
					</a>
				</div>
				<div className="linkedin">
					<a href="https://www.linkedin.com/in/michaelodell92/">
						<SiLinkedin />
					</a>
				</div>
			</IconContext.Provider>
		</div>
	);
}
