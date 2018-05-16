let CACHE_NAME = 'v19';
let urlsToCache = [
  '/',
  '/bundle.js',
  '/app.css',
  '/assets/images/portada.jpg',
  '/assets/images/menu-options.png',
  '/assets/images/fb-icon.png',
  '/assets/images/tw-icon.png',
  '/assets/images/menu-close.png',
];

self.addEventListener('push', function(event) {
  console.log(event);
  event.waitUntil(
    self.registration.showNotification('Notificaciones Activadas', {
      body: 'Recibiras notificaciones del evento pronto :)',
      icon: '/assets/images/logo-2x.png',
    })
  )
})

self.addEventListener('install', function (event) {
  self.skipWaiting();
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function (cache) {
        console.log('Opened cache ', cache);
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        // Cache hit - return response
        if (response) {
          return response;
        }

        // IMPORTANT: Clone the request. A request is a stream and
        // can only be consumed once. Since we are consuming this
        // once by cache and once by the browser for fetch, we need
        // to clone the response.
        var fetchRequest = event.request.clone();

        return fetch(fetchRequest).then(function (response) {
            // Check if we received a valid respons, only save in cache valid responses
            //console.log(!response || response.status !== 200 || response.type !== 'basic', ' ', response);
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }
            //console.log(fetchRequest);

            // IMPORTANT: Clone the response. A response is a stream
            // and because we want the browser to consume the response
            // as well as the cache consuming the response, we need
            // to clone it so we have two streams.
            var responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then(function (cache) {
                cache.put(event.request, responseToCache);
              });

            return response;
          }
        );
      })
  );
});

self.addEventListener('activate', function (event) {
  var cacheWhitelist = [CACHE_NAME];
  console.log("ACTIVA")
  event.waitUntil(
    caches.keys().then(function (cacheNames) {
      return Promise.all(
        cacheNames.map(function (cacheName) {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
