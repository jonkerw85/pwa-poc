self.addEventListener('install', function(e) {
    e.waitUntil(
        caches.open('pwa-example').then(function(cache) {
            return cache.addAll([
                '/pwa-poc/',
                '/pwa-poc/index.html',
            ]);
        })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});