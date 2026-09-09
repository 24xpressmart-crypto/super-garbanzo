/* 24 Xpress service worker: push notifications + PWA installability. No caching (always fresh app). */
self.addEventListener('install', (e) => { self.skipWaiting(); });
self.addEventListener('activate', (e) => { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', (e) => { /* network only */ });
self.addEventListener('push', (e) => {
  let d = {};
  try { d = e.data ? e.data.json() : {}; } catch (err) { d = { title: '24 Xpress', body: e.data ? e.data.text() : '' }; }
  const title = d.title || '24 Xpress';
  const opts = {
    body: d.body || '',
    icon: './icon-192.png',
    badge: './icon-192.png',
    tag: d.tag || 'general',
    renotify: !!d.urgent,
    requireInteraction: !!d.urgent,
    vibrate: d.urgent ? [300, 100, 300, 100, 300] : [100],
    data: { url: d.url || '#home' },
  };
  e.waitUntil(self.registration.showNotification(title, opts));
});
self.addEventListener('notificationclick', (e) => {
  e.notification.close();
  const target = new URL('./' + (e.notification.data && e.notification.data.url ? e.notification.data.url : ''), self.registration.scope).href;
  e.waitUntil((async () => {
    const list = await self.clients.matchAll({ type: 'window', includeUncontrolled: true });
    for (const c of list) { if (c.url.startsWith(self.registration.scope) && 'focus' in c) { c.navigate(target); return c.focus(); } }
    return self.clients.openWindow(target);
  })());
});
