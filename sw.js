const CACHE_NAME = "pavc5-mobile-v37-20260812-lessons3-14-workbooks";
const ASSETS = [
  "./",
  "./index.html",
  "./styles.css",
  "./app.js",
  "./manifest.webmanifest",
  "./content-template.json",
  "./data/lesson1-cards.js",
  "./data/lesson1-content.js",
  "./data/lesson2-content.js",
  "./data/manual-supplement-content.js",
  "./data/lesson3-4-sync-content.js",
  "./data/lesson3-4-final-content.js",
  "./data/lesson3-card-completions.js",
  "./data/lesson4-card-completions.js",
  "./data/lesson5-12-content.js",
  "./data/lesson5-content.js",
  "./data/lesson6-content.js",
  "./data/lesson7-content.js",
  "./data/lesson8-content.js",
  "./data/lesson9-content.js",
  "./data/lesson10-content.js",
  "./data/lesson11-content.js",
  "./data/lesson12-content.js",
  "./data/lesson13-14-content.js",
  "./data/lesson13-content.js",
  "./data/lesson14-content.js",
  "./assets/pavc5-cover.svg",
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))))
      .then(() => self.clients.matchAll({ type: "window" }))
      .then((clients) => clients.forEach((client) => client.postMessage({ type: "CACHE_UPDATED" }))),
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        const copy = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
        return response;
      })
      .catch(() => caches.match(event.request, { ignoreSearch: true })),
  );
});
