import getTeamComponent from './components/team';
import getPlayerComponent from './components/player';
import getMatchComponent from './components/match';

export const domString = {
	main: 'main',
	teams: 'teams',
	team: {
		name: 'team-name',
		crest: 'team-crest',
		address: 'team-address',
		phone: 'team-phone',
		email: 'team-email',
		founded: 'team-founded',
	},
	sideNav: 'mobile-nav',
	positionTab: 'position-tab',
	playerList: 'player-list',
	pagination: 'pagination',
	paginationList: 'pagination-list',
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

export function renderTeam (team){
	const crestDom = document.getElementById(domString.team.crest);
	const nameDom = document.getElementById(domString.team.name);
	const addressDom = document.getElementById(domString.team.address);
	const phoneDom = document.getElementById(domString.team.phone);
	const foundedDom = document.getElementById(domString.team.founded);
	const emailDom = document.getElementById(domString.team.email);

	crestDom.src = team.crestUrl;
	nameDom.textContent = team.name;
	addressDom.textContent = team.address;
	phoneDom.textContent = team.phone;
	foundedDom.textContent = team.founded;
	emailDom.textContent = team.email;
}

export function renderPlayers (squad, tab = null){
	const displayed = squad.filter((player) => player.position === tab);
	const playerListDom = document.getElementById(domString.playerList);
	playerListDom.textContent = '';
	displayed.forEach((player) => (playerListDom.innerHTML += getPlayerComponent(player)));
}

export function renderMatches (matches, teamId){
	const matchesListDom = document.getElementById(domString.paginationList);
	matchesListDom.textContent = '';
	matches.forEach((match) => {
		matchesListDom.innerHTML += getMatchComponent(match, teamId);
	});
}

export function initNav (){
	M.Sidenav.init(document.getElementById(domString.sideNav));
}
