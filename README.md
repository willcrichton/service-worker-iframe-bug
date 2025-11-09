# Service Worker bug

## Steps to reproduce

* Run a static file server in this directory (e.g. `python3 -m http.server`).
* Open `index.html` via the server (e.g. <http://localhost:8000>).
* Inspect console logs.
* Refresh the page.
* Inspect console logs.

If you need to re-reproduce the bug, run before reloading:

```js
navigator.serviceWorker.getRegistrations().then(regs => regs.forEach(reg => reg.unregister()))
```

## Expected output

The scripts should succeed in fetching `hello.txt` via the service worker within the outer and inner frames on both the first and second visits.

## Actual behavior

I ran this on aarch64 builds via my M1 Macbook Pro. Chrome v142.0.7444.60 and Safari 18.6 (20621.3.11.11.3) have the expected behavior. 

Firefox 144.0.2 has unexpected behavior. On the first visit, the outer frame gets a 200 but the inner frame gets a 404 because its request does not hit the service worker. On reload, the inner frame hits the service worker as expected.