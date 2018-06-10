import Header from './Header.html';
import Social from './Social.html';

// TODO: fetch data, from store/service/db
const headerData = {
	name: 'Per Jonsson',
	title: "Front-end Developer",
	subTitle: "I Can Haz Front-End Skills"
};

const socialData = [		
	{
		name: "GitHub",
		link: "",
		profile: "perjo927",		
		meta: "fab fa-github"
	},
	{
		name: "LinkedIn",
		link: "",
		profile: "djpjgj",
		meta: "fab fa-linkedin"
	},
	{
		name: "E-Mail",
		link: "",
		profile: "djpjgj",
		meta: "far fa-envelope"
	},
	{
		name: "Phone",
		link: "",
		profile: "073 - ASK ME",
		meta: "fas fa-phone"
	},
	{
		name: "Twitter",
		link: "",
		profile: "programmerper",
		meta: "fab fa-twitter"
	},
	{
		name: "Wordpress",
		link: "",
		profile: "programmerper",
		meta: "fab fa-wordpress"
	},
	{
		name: "Medium",
		link: "",
		profile: "programmerper",
		meta: "fab fa-medium"
	}
];

export const header = new Header({
	target: document.querySelector('header'),
	data: {
		...headerData,
		next: ".social"
	}
});

export const social = new Social({
	target: document.querySelector('section.social'),
	data: {
		socialData,
		next: null
	}
});

