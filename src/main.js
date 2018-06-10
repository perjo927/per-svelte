import Header from './Header.html';
import Social from './Social.html';

// TODO: fetch data, from store/service/db
const headerData = {
	name: 'Per Jonsson',
	title: "Front-end Developer",
	subTitle: "I Can Haz Front-End Skills"
};

const socialData = {		
	github: "",
	linkedin: "",		
	mail: "",
	medium: "",	
	phone: "",	
	twitter: "",
	wordpress: ""
}

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
		...socialData,
		next: null
	}
});

