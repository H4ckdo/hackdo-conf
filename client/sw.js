let CACHE_NAME = 'v282';
let urlsToCache = [
  '/',
  '/bundle.js',
  //'/app.css',
  //'/assets/images/portada.jpg',
  //'/assets/images/menu-options.png',
  //'/assets/images/fb-icon.png',
  //'/assets/images/tw-icon.png',
  //'/assets/images/menu-close.png',
  //'/assets/freezer.mp3'
];

self.addEventListener('notificationclick', function (event) {
  event.notification.close();
  // This looks to see if the current is already open and
  // focuses if it is
  event.waitUntil(clients.matchAll({
    type: "window"
  }).then(function (clientList) {
    if (event.notification.body) {
      if (clients.openWindow && event.notification.body.includes("@jarlinton_zea")) return clients.openWindow('https://twitter.com/H4ckdo/status/998967577501028353');
      if (clients.openWindow && event.notification.body.includes("@maleja111")) return clients.openWindow('https://twitter.com/H4ckdo/status/998659802996903936');
      if (clients.openWindow && event.notification.body.includes("Daniela Patiño")) return clients.openWindow('https://twitter.com/DaniCaprichos');
    }
  }));
});


self.addEventListener('push', function (event) {
  try {
    let { title = '', body = '' } = event.data.json();
    event.waitUntil(
      self.registration.showNotification(title, {
        body,
        icon: '/assets/images/logo-2x.png',
      })
    )
  } catch (error) {
    console.log('error ', error)
  }
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
