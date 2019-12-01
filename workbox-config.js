// this config is used by workbox to generate the build/service-worker.js
// For more config options, visit the following url:
// https://developers.google.com/web/tools/workbox/modules/workbox-cli
module.exports = {
  "globDirectory": "build/",
  "globPatterns": [
    '*.html',
    'manifest.json',
    'static/**/!(*map*)',
  ],
  "swDest": "build/service-worker.js",
  "runtimeCaching": [{
    "urlPattern": /https?:\/\/fonts.+/,
    "handler": 'StaleWhileRevalidate',
  }, {
    "urlPattern": /https?:\/\/images.+/,
    "handler": 'StaleWhileRevalidate',
  }]
};