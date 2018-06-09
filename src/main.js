import Header from './Header.html';
import Social from './Social.html';

// TODO: fetch data, from store/service/db
const data = {
	name: 'Per Jonsson',
	title: "Front-end Developer",
	subTitle: "Does Front-End Things"
};


export const header = new Header({
	target: document.querySelector('header'),
	data: data
});

export const social = new Social({
	target: document.querySelector('section.social'),
	data: {}
});

