import Header from './Header.html';
import Social from './Social.html';

// TODO: fetch data, from store/service/db
const data = {
	name: 'Per Jonsson',
	title: "Front-end Developer",
	subTitle: "I Can Haz Front-End Skills"
};


export const header = new Header({
	target: document.querySelector('header'),
	data: {
		...data,
		next: ".social"
	}
});

export const social = new Social({
	target: document.querySelector('section.social'),
	data: {		
		github: "",
		linkedin: "",		
		mail: "",
		medium: "",	
		phone: "",	
		twitter: "",
		wordpress: "",
		visible: false
	}
});

