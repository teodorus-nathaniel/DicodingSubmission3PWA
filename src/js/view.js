import getTeamComponent from './components/team';
import getPlayerComponent from './components/player';
import getMatchComponent from './components/match';

export const domStringID = {
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
	matches: 'matches',
	likeButton: 'like-button',
};

export function makeToast (text){
	M.toast({ html: text });
}

export const domStringClass = {
	likeButton: 'like-button',
	notifyLink: 'notify-link',
};

export function renderLikeButton (component, liked){
	if (!component) return;
	component.firstElementChild.textContent = `favorite${liked ? '' : '_border'}`;
}

export function renderNotifyButton (id, saved){
	const btn = document.querySelector(`.${domStringClass.notifyLink}[data-id="${id}"]`);
	if (!btn) return;

	if (saved) {
		btn.textContent = 'Notification scheduled';
		btn.classList.add('saved');
	} else {
		btn.textContent = 'Notify me about this match';
		btn.classList.remove('saved');
	}
}

export function renderPage (page){
	document.getElementById(domStringID.main).innerHTML = page;
}

export function renderTeams (teams, noDataMessage = 'No Teams Found'){
	const teamDom = document.getElementById(domStringID.teams);
	if (!teamDom) return;

	teamDom.innerHTML = '';

	if (teams.length === 0) {
		teamDom.textContent = noDataMessage;
		return;
	}

	teams.forEach((team, idx) => {
		teamDom.innerHTML += getTeamComponent(team, idx);
	});
}

export function renderTeam (team){
	const crestDom = document.getElementById(domStringID.team.crest);
	const nameDom = document.getElementById(domStringID.team.name);
	const addressDom = document.getElementById(domStringID.team.address);
	const phoneDom = document.getElementById(domStringID.team.phone);
	const foundedDom = document.getElementById(domStringID.team.founded);
	const emailDom = document.getElementById(domStringID.team.email);

	crestDom.src = team.crestUrl;
	nameDom.textContent = team.name;
	addressDom.textContent = team.address;
	phoneDom.textContent = team.phone;
	foundedDom.textContent = team.founded;
	emailDom.textContent = team.email;
}

export function renderPlayers (squad, tab = null){
	const displayed = squad.filter((player) => player.position === tab);
	const playerListDom = document.getElementById(domStringID.playerList);
	playerListDom.textContent = '';
	displayed.forEach((player) => (playerListDom.innerHTML += getPlayerComponent(player)));
}

export function renderMatches (matches, teamId, noDataMessage = 'No Matches Found'){
	const matchesListDom = document.getElementById(domStringID.matches);
	matchesListDom.textContent = '';

	if (matches.length === 0) {
		matchesListDom.textContent = noDataMessage;
		return;
	}

	matches.forEach((match) => {
		matchesListDom.innerHTML += getMatchComponent(match, teamId);
	});
}

export function initNav (){
	M.Sidenav.init(document.getElementById(domStringID.sideNav));
}
