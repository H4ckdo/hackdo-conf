let CACHE_NAME = 'v1';
let urlsToCache = [
  '/',
  '/bundle.js',  
  '/app.css',
  '/assets/images/portada.jpg',
  '/assets/images/menu-options.png',
  '/assets/images/fb-icon.png',
  '/assets/images/tw-icon.png',
  '/assets/images/menu-close.png',
  '/assets/images/menu-close.png',
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31761.510198575405!2d-76.63861136336621!3d5.685837071151528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4759686a7b2d74b0!2sCentro+Recreacional+Comfachoco!5e0!3m2!1ses-419!2sco!4v1525134914422'
];


self.addEventListener('install', function (event) {
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

        return fetch(fetchRequest).then(
          function (response) {
            // Check if we received a valid respons            
            console.log(!response || response.status !== 200 || response.type !== 'basic', ' ', response);
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }
            

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