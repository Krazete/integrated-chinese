const VERSION = "0.0.0"; /* update whenever anything changes */

self.addEventListener("install", event => {
    // console.log("PWA Install: " + VERSION);
    self.skipWaiting();
    event.waitUntil((async () => {
        const cache = await caches.open(VERSION);
        cache.addAll(["./", "./404.html"]);
    })());
});

self.addEventListener("activate", event => {
    // console.log("PWA Activate: " + VERSION);
    self.clients.claim();
    event.waitUntil((async () => {
        const keys = await caches.keys();
        keys.forEach(async (key) => {
            if (key !== VERSION) {
                // console.log("PWA Delete: " + key);
                await caches.delete(key);
            }
        });
    })());
});

self.addEventListener("fetch", event => {
    // console.log("PWA Fetch: " + VERSION);
    event.respondWith((async () => {
        const cache = await caches.open(VERSION);
        const cacheResponse = await cache.match(event.request);
        if (cacheResponse) {
            return cacheResponse;
        }
        else {
            try {
                const fetchResponse = await fetch(event.request);
                const isGet = event.request.method === "GET";
                const isAudio = event.request.headers.has("Content-Type") && event.request.headers.get("Content-Type").includes("audio");
                if (isGet && !isAudio) {
                    cache.put(event.request, fetchResponse.clone());
                }
                return fetchResponse;
            }
            catch (e) {
                // console.warn(e);
            }
        }
    })());
});
