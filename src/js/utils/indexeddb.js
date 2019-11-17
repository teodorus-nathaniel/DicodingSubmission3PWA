import idb from 'idb';

export function createDB (){
	console.log(idb);
}

// const dbPromise = idb.open('footballeague', 1, function (upgradeDb){
// 	console.log('object');
// 	switch (upgradeDb.oldVersion) {
// 		case 0:
// 			upgradeDb.createObjectStore('teams', { keyPath: 'id' });
// 			upgradeDb.createObjectStore('matches', { keyPath: 'id' });
// 	}
// });

// export async function insertFavTeam (team){
// 	const db = await dbPromise;
// 	const tx = db.transaction('teams', 'readwrite');
// 	var store = tx.objectStore('teams');
// 	const tes = store.add(item);

// 	const complete = await tx.complete;
// 	console.log({ tes, complete });
// }
