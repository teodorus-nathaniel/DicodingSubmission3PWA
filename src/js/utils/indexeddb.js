import idb, { openDB } from 'idb';

let db;
const DATABASE_NAME = 'footballeague';

export async function createDB() {
	db = await openDB(DATABASE_NAME, 1, {
		upgrade(db, oldVersion) {
			switch (oldVersion) {
				case 0:
					db.createObjectStore('teams', { keyPath: 'id' });
					db.createObjectStore('matches', { keyPath: 'id' });
			}
		},
	});
}

export async function getFavoriteTeams() {
	try {
		const tx = db.transaction('teams', 'readonly');
		const data = await tx.store.getAll();
		return data;
	} catch (error) {
		console.log(`Error fetching fav teams\n${error}`);
		return null;
	}
}

export async function insertFavTeam(team) {
	const tx = db.transaction('teams', 'readwrite');
	tx.store.put(team);
	return tx.complete;
}

export function deleteFavTeam(team) {
	const tx = db.transaction('teams', 'readwrite');
	tx.store.delete(team.id);
	return tx.complete;
}

export async function getSavedMatches() {
	try {
		const tx = db.transaction('matches', 'readonly');
		const data = await tx.store.getAll();
		return data;
	} catch (error) {
		console.log(`Error fetching saved matches\n${error}`);
		return null;
	}
}

export async function insertSavedMatch(match) {
	const tx = db.transaction('matches', 'readwrite');
	tx.store.put(match);
	return tx.complete;
}

export function deleteSavedMatch(match) {
	const tx = db.transaction('matches', 'readwrite');
	tx.store.delete(match.id);
	return tx.complete;
}
