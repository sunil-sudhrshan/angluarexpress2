self.addEventListener('install', event => {
    event.waitUntil(
      caches.open('my-cache').then(cache => {
        return cache.addAll([
          '/assets/video/rain.mp4', // Add the path to your video file
          // Add other assets you want to cache here
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', event => {
    event.respondWith(
      caches.match(event.request).then(response => {
        return response || fetch(event.request);
      })
    );
  });
  