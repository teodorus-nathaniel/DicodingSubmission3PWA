import controller from './js/controller';
import { createDB, insertFavTeam } from './js/utils/indexeddb';

window.addEventListener('load', async () => {
	if (window.indexedDB) {
		await createDB();
	} else {
		console.log('Indexed DB not supported by browser.');
	}

	controller();

	if ('serviceWorker' in navigator) {
		try {
			await navigator.serviceWorker.register('./service-worker.js');
			console.log('Serviceworker successfully registered.');
			await requestPermission();
		} catch (e) {
			console.log(`Service worker registration failed\n${e}`);
		}
	} else console.log('Browser have no support for Serviceworker yet.');

	async function requestPermission (){
		if (window.Notification) {
			const result = await Notification.requestPermission();
			console.log(result);

			navigator.serviceWorker.getRegistration().then(function (reg){
				reg.showNotification('Notifikasi diijinkan!');
			});

			showNotifikasiSederhana();
		}
	}

	function showNotifikasiSederhana (){
		const title = 'Notifikasi Sederhana';
		const options = {
			body: 'Ini adalah konten notifikasi. \nBisa menggunakan baris baru.',
		};
		if (Notification.permission === 'granted') {
			navigator.serviceWorker.ready.then(function (registration){
				registration.showNotification(title, options);
			});
		} else {
			console.error('FItur notifikasi tidak diijinkan.');
		}
	}
});
