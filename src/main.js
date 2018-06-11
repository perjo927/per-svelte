import Header from './Header.html';
import About from './About.html';
import Social from './Social.html';

import { aboutData, headerData, socialData } from './data.js'

export const header = new Header({
	target: document.querySelector('header'),
	data: {
		...headerData,
		next: ".about"
	}
});

export const about = new About({
	target: document.querySelector('section.about'),
	data: {
		aboutData,
		next: ".social"
	}
});

export const social = new Social({
	target: document.querySelector('section.social'),
	data: {
		socialData,
		next: ".skills"
	}
});
