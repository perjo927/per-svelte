import App from './App.html';

// TODO: fetch data, from store/service/db
const data = {
	name: 'Per Jonsson',
	title: "Front-end Developer",
	subTitle: "Does Front-End Things..."
};


const app = new App({
	target: document.body,
	data: data
});

export default app;