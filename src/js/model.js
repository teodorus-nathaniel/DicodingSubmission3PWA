import { fetchJSON } from './utils/fetch';

let teams = [];
let team = {};
const baseURL = 'https://api.football-data.org/v2/';
const competitionID = 2014;

export async function getPage (pagename){
	const res = await fetch(`pages/${pagename}.html`);
	return await res.text();
}

export async function getTeams (){
	if (teams.length !== 0) return teams;
	const res = await fetchJSON(`${baseURL}competitions/${competitionID}/teams`);
	teams = res.teams;
	return teams;
}

export async function getTeamInfo (teamId){
	if (team.id === teamId && Object.entries(team.info).length !== 0) return team.info;
	team.info = await fetchJSON(`${baseURL}teams/${teamId}`);
	return team.info;
}

export async function getTeamMatches (teamId){
	const res = await fetchJSON(`${baseURL}teams/${teamId}/matches?status=SCHEDULED`);
	return res.matches;
}
