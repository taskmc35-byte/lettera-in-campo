// Cache offline: cambia il numero di versione ogni volta che aggiorni i file
const CACHE = 'lettera-in-campo-v1';
const FILES = [
  './', './index.html', './manifest.webmanifest',
  './icons/icon-192.png', './icons/icon-512.png', './icons/maskable-512.png', './icons/apple-touch-icon.png',
  './fonts/big-shoulders-display-latin-600-normal.woff2',
  './fonts/big-shoulders-display-latin-800-normal.woff2',
  './fonts/big-shoulders-display-latin-900-normal.woff2',
  './fonts/atkinson-hyperlegible-latin-400-normal.woff2',
  './fonts/atkinson-hyperlegible-latin-700-normal.woff2'
];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    fetch(e.request).then(res => {
      const copy = res.clone();
      caches.open(CACHE).then(c => c.put(e.request, copy));
      return res;
    }).catch(() => caches.match(e.request).then(r => r || caches.match('./index.html')))
  );
});
