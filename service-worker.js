const cacheName = 'v1-meu-jogo';
const assetsToCache = [
  '/',
  'index.html',
  'style.css',
  'script.js',
  'icon-192.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(cacheName).then((cache) => cache.addAll(assetsToCache))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});