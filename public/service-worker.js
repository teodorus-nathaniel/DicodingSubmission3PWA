importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

workbox.precaching.precacheAndRoute([
	{ url: '/', revision: 1 },
	{ url: '/manifest.json', revision: 1 },
	{ url: '/favicon.ico', revision: 1 },
	{ url: '/img/icon.png', revision: 1 },
	{ url: '/img/icon-512.png', revision: 1 },
	{ url: '/img/icon-192.png', revision: 1 },
	{ url: '/pages/home.html', revision: 1 },
	{ url: '/pages/team-detail.html', revision: 1 },
	{ url: '/pages/subscribed.html', revision: 1 },
	{ url: '/main.js', revision: 1 },
	{ url: '/css/styles.css', revision: 1 },
	{ url: 'https://fonts.gstatic.com/s/materialicons/v48/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2', revision: 1 },
	{ url: 'https://fonts.googleapis.com/icon?family=Material+Icons', revision: 1 },
	{ url: 'https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css', revision: 1 },
	{ url: 'https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js', revision: 1 },
]);

const plugins = [
	new workbox.cacheableResponse.Plugin({
		statuses: [ 0, 200 ],
	}),
	new workbox.expiration.Plugin({
		maxAgeSeconds: 60 * 60 * 24 * 180,
		maxEntries: 30,
	}),
];

workbox.routing.registerRoute(
	/^https:\/\/api.football-data.org\/v2\//,
	new workbox.strategies.CacheFirst({
		cacheName: 'football-api',
		plugins,
	})
);

workbox.routing.registerRoute(
	/^https:\/\/upload.wikimedia.org\/wikipedia\//,
	new workbox.strategies.CacheFirst({
		cacheName: 'football-crest',
		plugins,
	})
);

self.addEventListener('push', function (event){
	const options = {
		body: event.data.text(),
		icon: './img/icon-192.png',
		vibrate: [ 100, 50, 100 ],
		data: {
			dateOfArrival: Date.now(),
			primaryKey: 1,
		},
	};

	event.waitUntil(self.registration.showNotification('FootbalLeague', options));
});
