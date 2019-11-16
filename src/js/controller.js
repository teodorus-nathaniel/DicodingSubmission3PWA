import * as model from './model';
import * as view from './view';

async function changePage (pagename){
	let id;
	if (pagename == '') pagename = 'home';
	else if (!isNaN(pagename)) {
		id = pagename;
		pagename = 'team-detail';
	} else return;

	const page = await model.getPage(pagename);
	view.renderPage(page);

	switch (pagename) {
		case 'home':
			initHomePage();
		default:
			initTeamDetailPage(id);
	}
}

async function initTeamDetailPage (id){
	const team = await model.getTeam(id);
	console.log(team);
	view.renderTeam(team);
}

async function initHomePage (){
	const teamsDom = document.getElementById(view.domString.teams);
	teamsDom.addEventListener('click', (e) => {
		const target = e.target;
		const closestTeam = target.closest('.team');
		if (closestTeam && target.tagName !== 'I' && !target.closest('.card-reveal')) {
			window.location.hash = closestTeam.dataset.id;
		}
	});

	const teams = await model.getTeams();
	view.renderTeams(teams);
}

export default function init (){
	changePage(window.location.hash.substring(1));
	window.addEventListener('hashchange', () => changePage(window.location.hash.substring(1)));
}
