/**
 * use a CACHE_NAME for cache versioning
 */ 

 importScripts('./assets/js/workbox-sw.js');

 workbox.precaching.precacheAndRoute([
  './index.html',
  './menu.html',
  './main.html',
  './memorama.html',
  './crossword.html',
  './tictac.html',
  './404.html',
  './webcam.html',

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
  './assets/css/404.css',
  './assets/css/font404.css',

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
  './assets/js/workbox-sw.js',

  
  /* './OneSignalSDKUpdaterWorker.js',
  './OneSignalSDKWorker.js', */

  './assets/img/banner.jpg',
  './assets/img/card-img-1.jpg',
  './assets/img/card-img-2.png',
  './assets/img/card-img-3.png',
  './assets/img/mdb-favicon.ico',
  './assets/img/404.svg',
  './assets/img/astronaut.svg',
  './assets/img/meteor.svg',
  './assets/img/spaceship.svg',
  './assets/img/star.svg',
  './assets/img/mars.svg  ',
  './assets/img/cloud-connection-offline.png',
  './assets/img/loading.gif',
  './assets/img/loading-fast.gif',
  './assets/img/camera.gif',

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

  './assets/fonts/Rubik-Bold.ttf',
 ]);

workbox.routing.setCatchHandler(async context => {
  //console.log(context);
  //console.log(context.request);

  if (context.request.url.pathname === '"./assets/img/loading.gif"'){
    return workbox.precaching.matchPrecache('./assets/img/loading-fast.gif');
  }
  else if (context.request.destination === 'document') {
    return workbox.precaching.matchPrecache('./404.html');
  }
  else if (context.request.destination === 'image') {
    return workbox.precaching.matchPrecache('./assets/img/cloud-connection-offline.png')
  }
  return Response.error();
});

workbox.routing.registerRoute(
  new RegExp('\\.*'),
  new workbox.strategies.CacheFirst({
    cacheName: 'CacheHTML',
  })
);

workbox.routing.registerRoute(
  new RegExp('\\.json'),
  new workbox.strategies.NetworkFirst()
);


/* 
var CACHE_NAME = 'pwa-1';

var MULTIMEDIA_CONTENT_CACHE = [
  
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

  './assets/img/banner.jpg',
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

  './assets/fonts/Rubik-Bold.ttf',
];


/**
 *  addEventListener Caches media files
 */
/**
  self.addEventListener('install', (e) => {
    console.log('[Service Worker] Install');
    e.waitUntil(
      caches.open(CACHE_NAME).then((cache) => {
        console.log('[Servicio Worker] Almacena todo en caché: contenido e intérprete de la aplicación');
        return cache.addAll(MULTIMEDIA_CONTENT_CACHE);
      })
    );
  });
*/
/* self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((r) => {
      console.log('[Servicio Worker] Obteniendo recurso: ' + e.request.url);
      return r || fetch(e.request).then((response) => {
        return caches.open(CACHE_NAME).then((cache) => {
          console.log('[Servicio Worker] Almacena el nuevo recurso: ' + e.request.url);
          cache.put(e.request, response.clone());
          return response;
        });
      });
    })
  );
}); */
/**
self.addEventListener('fetch', (e) => {
  e.respondWith((async () => {
    const r = await caches.match(e.request);
    console.log(r);
    if (r) return r;
    const response = await fetch(e.request);
    const cache = await caches.open(CACHE_NAME);
    console.log(`${e.request.url}`);
    cache.put(e.request, response.clone());
    console.log("I do not enter");
    return response;
  })());
}); */