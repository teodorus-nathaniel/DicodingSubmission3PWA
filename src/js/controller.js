import * as model from './model';
import * as view from './view';

async function changePage(pagename) {
	if (pagename == '') pagename = 'home';
	const page = await model.getPage(pagename);
	view.renderPage(page);

	switch (pagename) {
		case 'home':
			initHomePage();
	}
}

async function initHomePage() {
	const teams = await model.getTeams();
	view.renderTeams(teams);
	console.log(teams);
}

export default function init() {
	changePage(window.location.hash.substring(1));
	window.addEventListener('hashchange', () => changePage(window.location.hash.substring(1)));
}
