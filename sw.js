// MealHub Service Worker — enables PWA installability

const CACHE = 'mealhub-v1';



self.addEventListener('install', () => self.skipWaiting());

self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));



self.addEventListener('fetch', e => {

  // API 요청은 항상 네트워크에서 직접 가져옴

  if (e.request.url.includes('planeatchoice.net')) return;

  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));

});
