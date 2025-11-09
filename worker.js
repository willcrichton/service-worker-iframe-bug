self.addEventListener("install", _event => {
  self.skipWaiting();  
});

self.addEventListener("activate", event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", event => {
  if (event.request.url.endsWith("hello.txt")) {
    event.respondWith(new Response("Hello world", {
      status: 200,
      headers: {"Content-Type": "application/text"}
    }))
  }
});