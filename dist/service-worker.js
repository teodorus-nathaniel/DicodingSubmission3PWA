const CACHE_NAME = 'footballeague-v1';
var urlsToCache = [
	'/',
	'/dist/manifest.json',
	// '/icon.png',
	'/dist/pages/home.html',
	'/dist/pages/team-detail.html',
	'/dist/main.js',
	'/dist/css/styles.css',
	'https://fonts.googleapis.com/icon?family=Material+Icons',
	'https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css',
	'https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js',
];

self.addEventListener('install', function(event) {
	event.waitUntil(
		caches.open(CACHE_NAME).then(function(cache) {
			return cache.addAll(urlsToCache);
		})
	);
});

self.addEventListener('fetch', function(event) {
	event.respondWith(
		caches.match(event.request, { cacheName: CACHE_NAME }).then(function(response) {
			const fetchRequest = event.request.clone();
			const fetchPromise = fetch(fetchRequest).then(async function(response) {
				if (!response || response.status !== 200) {
					return response;
				}
				var responseToCache = response.clone();
				const cache = await caches.open(CACHE_NAME);
				cache.put(event.request, responseToCache);
				return response;
			});
			return response || fetchPromise;
		})
	);
});

self.addEventListener('activate', function(event) {
	event.waitUntil(
		caches.keys().then(function(cacheNames) {
			return Promise.all(
				cacheNames.map(function(cacheName) {
					if (cacheName != CACHE_NAME) {
						return caches.delete(cacheName);
					}
				})
			);
		})
	);
});

self.addEventListener('push', function(event) {
	const options = {
		body: event.data.text(),
		// icon:
		vibrate: [ 100, 50, 100 ],
		data: {
			dateOfArrival: Date.now(),
			primaryKey: 1,
		},
	};

	event.waitUntil(self.registration.showNotification('FootbalLeague', options));
});
