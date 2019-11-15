import getTeamComponent from './components/team';

export const domString = {
	main: 'main',
	teams: 'teams',
};

export function renderPage (page){
	document.getElementById(domString.main).innerHTML = page;
}

export function renderTeams (teams){
	const teamDom = document.getElementById(domString.teams);
	if (!teamDom) return;
	teamDom.innerHTML = '';
	teams.forEach((team, idx) => {
		teamDom.innerHTML += getTeamComponent(team, idx);
	});
}
