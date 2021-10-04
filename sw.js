// use a cacheName for cache versioning
var cacheName = 'pwa-1';
var contentToCache = [
  './index.html',
  './menu.html',
  './main.html',
  './memorama.html',
  './crossword.html',
  './tictac.html',

  'manifest.json',
  'script.js',
  'sw.js',

  './assets/css/all.min.css',
  './assets/css/bootstrap.css',
  './assets/css/crossword.css',
  './assets/css/css.css',
  './assets/css/font.css',
  './assets/css/main.css',
  './assets/css/mdb.1.min.css',
  './assets/css/mdb.min.css',
  './assets/css/memorama.css',
  './assets/css/menu.css',
  './assets/css/style.css',
  './assets/css/tictac.css',

  './assets/js/angular-animate.min.js',
  './assets/js/angular-route.min.js',
  './assets/js/angular-touch.min.js',
  './assets/js/angular.min.js',
  './assets/js/crossword.js',
  './assets/js/jquery.flip.min.js',
  './assets/js/jquery.min.js',
  './assets/js/jquery2.1.3.min.js',
  './assets/js/mdb.min.js',
  './assets/js/memorama.js',
  './assets/js/menu.js',
  './assets/js/script.js',
  './assets/js/tictac.js',
  './assets/js/vue.js',
  './assets/js/vue.min.js',

  './assets/img/Education - 35448 (1).gif',
  './assets/img/Education - 35448.gif',
  './assets/img/banner-move-2.gif',
  './assets/img/banner-move.gif',
  './assets/img/card-img-1.jpg',
  './assets/img/card-img-2.png',
  './assets/img/card-img-3.png',
  './assets/img/mdb-favicon.ico',

  './assets/icons/android-icon-144x144.png',
  './assets/icons/android-icon-192x192.png',
  './assets/icons/android-icon-36x36.png',
  './assets/icons/android-icon-48x48.png',
  './assets/icons/android-icon-72x72.png',
  './assets/icons/android-icon-96x96.png',
  './assets/icons/apple-icon-114x114.png',
  './assets/icons/apple-icon-120x120.png',
  './assets/icons/apple-icon-144x144.png',
  './assets/icons/apple-icon-152x152.png',
  './assets/icons/apple-icon-180x180.png',
  './assets/icons/apple-icon-57x57.png',
  './assets/icons/apple-icon-60x60.png',
  './assets/icons/apple-icon-72x72.png',
  './assets/icons/apple-icon-76x76.png',
  './assets/icons/apple-icon-precomposed.png',
  './assets/icons/apple-icon.png',
  './assets/icons/browserconfig.xml',
  './assets/icons/favicon-16x16.png',
  './assets/icons/favicon-32x32.png',
  './assets/icons/favicon-96x96.png',
  './assets/icons/favicon.ico',
  './assets/icons/ms-icon-144x144.png',
  './assets/icons/ms-icon-150x150.png',
  './assets/icons/ms-icon-310x310.png',
  './assets/icons/ms-icon-70x70.png',
];
'./assets/fonts/Rubik-Bold.ttf',

  self.addEventListener('install', (e) => {
    console.log('[Service Worker] Install');
    e.waitUntil(
      caches.open(cacheName).then((cache) => {
        console.log('[Servicio Worker] Almacena todo en caché: contenido e intérprete de la aplicación');
        return cache.addAll(contentToCache);
      })
    );
  });

/* self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((r) => {
      console.log('[Servicio Worker] Obteniendo recurso: ' + e.request.url);
      return r || fetch(e.request).then((response) => {
        return caches.open(cacheName).then((cache) => {
          console.log('[Servicio Worker] Almacena el nuevo recurso: ' + e.request.url);
          cache.put(e.request, response.clone());
          return response;
        });
      });
    })
  );
}); */

self.addEventListener('fetch', (e) => {
  e.respondWith((async () => {
    const r = await caches.match(e.request);
    console.log(r);
    if (r) return r;
    const response = await fetch(e.request);
    const cache = await caches.open(cacheName);
    console.log(`${e.request.url}`);
    cache.put(e.request, response.clone());
    console.log("no entro");
    return response;
  })());
});