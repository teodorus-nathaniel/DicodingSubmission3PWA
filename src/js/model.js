import { fetchJSON } from './utils/fetch';

let teams = [];
const baseURL = 'https://api.football-data.org/v2/';
const competitionID = 2014;

export async function getPage(pagename) {
	const res = await fetch(`pages/${pagename}.html`);
	return await res.text();
}

export async function getTeams() {
	if (teams.length !== 0) return teams;
	const res = await fetchJSON(`${baseURL}competitions/${competitionID}/teams`);
	teams = res.teams;
	return teams;
}
