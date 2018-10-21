importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.1/workbox-sw.js');

workbox.routing.registerRoute(/\.(?:html)$/,
  workbox.strategies.staleWhileRevalidate()
);

self.addEventListener('install', event => {
  const urls = [
    'https://cdn.ampproject.org/v0/amp-analytics-0.1.js',
    'https://cdn.ampproject.org/v0/amp-bind-0.1.js',
    'https://cdn.ampproject.org/v0/amp-carousel-0.1.js',
    'https://cdn.ampproject.org/v0/amp-font-0.1.js',
    'https://cdn.ampproject.org/v0/amp-install-serviceworker-0.1.js',
    'https://cdn.ampproject.org/v0/amp-list-0.1.js',
    'https://cdn.ampproject.org/v0/amp-mustache-0.2.js',
    'https://use.fontawesome.com/releases/v5.4.1/css/all.css',
    'https://fonts.googleapis.com/css?family=Ubuntu',
    'index.html',
    '/'
  ];
  const cacheName = workbox.core.cacheNames.runtime;
  event.waitUntil(
    caches.open(cacheName).then(cache => cache.addAll(urls))
  );
});