import controller from './js/controller';
import { createDB } from './js/utils/indexeddb';

window.addEventListener('load', async () => {
	controller();

	if ('serviceWorker' in navigator) {
		try {
			await navigator.serviceWorker.register('./service-worker.js');
			console.log('Serviceworker successfully registered.');
		} catch (e) {
			console.log(`Service worker registration failed\n${e}`);
		}
	} else console.log('Browser have no support for Serviceworker yet.');

	createDB();
});
