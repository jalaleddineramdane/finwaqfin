// فين واقفين؟ — Service Worker v9
// Strategy:
//   - JS / CSS  → network-first (always fresh on every deploy)
//   - HTML nav  → network-first (always fresh)
//   - Images / fonts → cache-first (fast, rarely change)

var CACHE_NAME = 'fein-waqfin-v10';

var PRECACHE = [
  './apple-touch-icon.png',
  './logo-nav.png',
  './og-image.png',
  './favicon.ico',
  './favicon-32.png',
  './icon-192.png',
  'https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@300;400;500;600;700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap'
];

// Install: pre-cache only images & fonts (NOT js/css — those are always network-first)
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(PRECACHE);
    })
  );
  self.skipWaiting();
});

// Activate: delete ALL old caches so stale JS/CSS can never be served
self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(
        keys.filter(function(k) { return k !== CACHE_NAME; })
            .map(function(k) { return caches.delete(k); })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', function(event) {
  var req = event.request;
  if (req.method !== 'GET') return;

  var url = req.url;

  // JS and CSS: always network-first — never serve stale code
  if (/\.(js|css)(\?.*)?$/.test(url)) {
    event.respondWith(
      fetch(req).catch(function() {
        return caches.match(req);
      })
    );
    return;
  }

  // HTML navigation: network-first
  if (req.mode === 'navigate') {
    event.respondWith(
      fetch(req).catch(function() {
        return caches.match('./index.html');
      })
    );
    return;
  }

  // Images and fonts: cache-first (fast, rarely change)
  event.respondWith(
    caches.match(req).then(function(cached) {
      if (cached) return cached;
      return fetch(req).then(function(response) {
        if (!response || response.status !== 200 || response.type !== 'basic') {
          return response;
        }
        var clone = response.clone();
        caches.open(CACHE_NAME).then(function(cache) {
          cache.put(req, clone);
        });
        return response;
      });
    })
  );
});
