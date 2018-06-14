import Header from './Header.html';
import About from './About.html';
import Social from './Social.html';
import Skills from './Skills.html';
import Work from './Work.html';
import Education from './Education.html';
import Recommendations from './Recommendations.html';
import ThemeSwitcher from './ThemeSwitcher.html';

import { 
	aboutData, 
	headerData,
	socialData,
	skillsData,
	workData,
	educationData,
	recommendationsData
} from './data.js'

export const header = new Header({
	target: document.querySelector('header'),
	data: {
		...headerData,
		next: ".about"
	}
});

export const themeSwitcher = new ThemeSwitcher({
	target: document.querySelector('nav'),
	data: {}
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

export const skills = new Skills({
	target: document.querySelector('section.skills'),
	data: {
		skillsData,
		next: ".work"
	}
});

export const work = new Work({
	target: document.querySelector('section.work'),
	data: {
		workData,
		next: ".education"
	}
});

export const education = new Education({
	target: document.querySelector('section.education'),
	data: {
		educationData,
		next: ".recommendations"
	}
});

export const recommendation = new Recommendations({
	target: document.querySelector('section.recommendations'),
	data: {
		recommendationsData,
		next: "body"
	}
});