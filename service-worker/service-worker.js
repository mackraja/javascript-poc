// Install Service Worker
self.addEventListener("install", event => {
    event.waitUntil(
        caches.open("service-worker").then(cache => {
            cache.add("/");
        })
    );
});
// Fetch from Service Worker
self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    )
});