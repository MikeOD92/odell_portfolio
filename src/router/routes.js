import React from 'react';

import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Portfolio from '../pages/Portfolio';

const routes = [
	{
		Component: Contact,
		key: 'Contact',
		path: '#contact'
	},
	{
		Component: About,
		key: 'About',
		path: '#about'
	},
	{
		Component: Portfolio,
		key: 'Portfolio',
		path: '#portfolio'
	},
	{
		Component: Home,
		key: 'Home',
		path: '/'
	}
];

export default routes;
