import controller from './js/controller';
import { createDB, insertFavTeam } from './js/utils/indexeddb';
import urlBase64ToUint8Array from './js/utils/uint-converter';

window.addEventListener('load', async () => {
	if (window.indexedDB) {
		await createDB();
	} else {
		console.log('Indexed DB not supported by browser.');
	}

	controller();

	if ('serviceWorker' in navigator) {
		try {
			const registration = await navigator.serviceWorker.register('./../service-worker.js');
			console.log('Serviceworker successfully registered.', registration);
			await requestPermission();
		} catch (e) {
			console.log(`Service worker registration failed\n${e}`);
		}
	} else console.log('Browser have no support for Serviceworker yet.');

	async function requestPermission (){
		if (window.Notification) {
			const result = await Notification.requestPermission();
			if (result === 'denied') console.log('notification denied.');
			else if (result === 'default') console.log('allow notification to get notification of your matches.');
			else {
				console.log('enabled notification.');
				registerPushNotification();
			}
		}
	}

	function registerPushNotification (){
		if ('PushManager' in window) {
			const publicKey = 'BNO2RFLEiW03a0vW9jD9gKXvvLeAVCNnCXOJMHZNsZ20PCK78w5Ck9kiSwl1bdFF9NvR-X0pYp7F5OXSiF1cI-A';

			navigator.serviceWorker.getRegistration().then(function (registration){
				registration.pushManager
					.subscribe({
						userVisibleOnly: true,
						applicationServerKey: urlBase64ToUint8Array(publicKey),
					})
					.then(function (subscribe){
						console.log('Berhasil melakukan subscribe dengan endpoint: ', subscribe.endpoint);
						console.log(
							'Berhasil melakukan subscribe dengan p256dh key: ',
							btoa(String.fromCharCode.apply(null, new Uint8Array(subscribe.getKey('p256dh'))))
						);
						console.log(
							'Berhasil melakukan subscribe dengan auth key: ',
							btoa(String.fromCharCode.apply(null, new Uint8Array(subscribe.getKey('auth'))))
						);
					})
					.catch(function (e){
						console.error('Tidak dapat melakukan subscribe ', e.message);
					});
			});
		}
	}
});
