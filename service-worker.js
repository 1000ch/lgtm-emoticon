const CACHE_KEY = '20170105';

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_KEY).then(cache => {
      return cache.addAll([
        'index.html',
        'app.js'
      ]);
    }).catch(e => console.error(e))
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames
          .filter(cacheName => cacheName !== CACHE_KEY)
          .map(cacheName => caches.delete(cacheName))
      );
    }).catch(e => console.error(e))
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.open(CACHE_KEY).then(cache => {
      return cache.match(e.request).then(response => {
        return response || fetch(e.request.clone()).then(response => {
          cache.put(e.request, response.clone());
          return response;
        });
      });
    }).catch(e => console.error(e))
  );
});
