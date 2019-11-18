import { fetchJSON } from './utils/fetch';
import * as db from './utils/indexeddb';

let teams = [];

let team = {};
let matches = [];

const baseURL = 'https://api.football-data.org/v2/';
const competitionID = 2014;

export async function getPage (pagename){
	const res = await fetch(`pages/${pagename}.html`);
	return await res.text();
}

export async function getFavoriteTeams (){
	return await db.getFavoriteTeams();
}

export async function getTeams (){
	if (teams.length !== 0) return teams;
	const favTeams = await getFavoriteTeams();

	const res = await fetchJSON(`${baseURL}competitions/${competitionID}/teams`);
	teams = res.teams;

	teams.forEach((team) => {
		if (favTeams.find((curr) => team.id === curr.id)) team.liked = true;
		else team.liked = false;
	});

	return teams;
}

export async function getTeamInfo (teamId){
	if (team.id === teamId && Object.entries(team.info).length !== 0) return team.info;
	team = await fetchJSON(`${baseURL}teams/${teamId}`);

	const favTeams = await getFavoriteTeams();
	team.liked = favTeams.find((curr) => curr.id === +teamId);

	return team;
}

export async function getSavedMatches (){
	return await db.getSavedMatches();
}

export async function getTeamMatches (teamId){
	const res = await fetchJSON(`${baseURL}teams/${teamId}/matches?status=SCHEDULED`);
	const savedMatches = await getSavedMatches();

	res.matches.forEach((match) => {
		if (savedMatches.find((curr) => curr.id === match.id)) match.saved = true;
		else match.saved = false;
	});

	matches = res.matches;
	return matches;
}

export async function toggleSavedMatch (id){
	const match = matches.find((match) => match.id === +id);

	try {
		if (match.saved) await db.deleteSavedMatch(match);
		else await db.insertSavedMatch(match);

		match.saved = !match.saved;
	} catch (error) {
		console.log(`Error toggling saved match\n${error}`);
		return { status: false };
	}

	return { status: true, saved: match.saved };
}

export async function toggleFavoriteTeam (id){
	let teamData;
	if (teams.length === 0) teamData = team;
	else teamData = teams.find((curr) => curr.id === +id);
	if (!teamData) return false;

	try {
		if (teamData.liked) await db.deleteFavTeam(teamData);
		else await db.insertFavTeam(teamData);

		teamData.liked = !teamData.liked;
	} catch (error) {
		console.log(`Error toggling fav\n${error}`);
		return { status: false };
	}

	return { status: true, liked: teamData.liked };
}
