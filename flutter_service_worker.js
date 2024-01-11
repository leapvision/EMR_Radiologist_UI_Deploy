'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "40aa99368b1d5470fbbdb85bd7cd58fd",
"assets/AssetManifest.bin.json": "3b1f0e8687a51c283aca5821d15a436e",
"assets/AssetManifest.json": "edf8a35d6f231dd602de35456e7005b0",
"assets/assets/cfg/config.json": "9791a2ddf9dc2f5b1ade758b35abd629",
"assets/assets/fonts/halvetica/halvetica_medium.otf": "18e62253330792f07126ba451497292e",
"assets/assets/fonts/halvetica/helveetica_black_italic.otf": "9500fc82d21b9913f3d4a03de899c044",
"assets/assets/fonts/halvetica/helvetica_black.otf": "c13d190d08bba6b200108d89387fcb36",
"assets/assets/fonts/halvetica/helvetica_bold.ttf": "515ca6288363ef168c46d83ffbf201b6",
"assets/assets/fonts/halvetica/helvetica_reg.otf": "e6618782e163f995e346473c52452930",
"assets/assets/fonts/monteserat/Montserrat-Bold.ttf": "c4bd22ebfc4d76f100ebefd2cf916227",
"assets/assets/fonts/monteserat/Montserrat-BoldItalic.ttf": "c645b4313b3c505b700c292cbdbf3bd8",
"assets/assets/fonts/monteserat/Montserrat-ExtraBold.ttf": "bf087000dc560f8f2a318d4ddad4720f",
"assets/assets/fonts/monteserat/Montserrat-Medium.ttf": "128c3c68ca7303b88442a347292291fa",
"assets/assets/fonts/monteserat/Montserrat-Regular.ttf": "430be0dd245faf1cc788fac6680c2d71",
"assets/assets/images/png/heartbeat.png": "a339e8e11790be67ee05cdb43f266a7c",
"assets/assets/images/png/ndhm-logos.png": "cc00ac5fc7f367551b40bbfddcbd2ed4",
"assets/assets/images/png/person.png": "c53b33bd4bc3e8dce301c05fb5bbd84c",
"assets/assets/images/png/prorad.ico": "b2542f1ae39fcf744e9b30a44d26fd51",
"assets/assets/images/png/prorad_exe.png": "015cb4198d6a60e797690b4f23016c39",
"assets/assets/images/png/prorad_exe_white_background.png": "7a9199bf2c9a9a4924a00caa9428bee2",
"assets/assets/images/svg/dashboard.svg": "7a3dcc15b305377192044d7da0f68342",
"assets/assets/images/svg/exit.svg": "fdb7cdff038a7c73ff5f7d56877c4910",
"assets/assets/images/svg/logout.svg": "0cb0d79cc90977a007da052b81a73912",
"assets/assets/images/svg/Ot0dOzYhfM.json": "ebc677a225d64d39c5459ecfefca27ef",
"assets/assets/images/svg/plus.svg": "a506488c7f9213c8a13316423029a41e",
"assets/assets/images/svg/setting.svg": "469c2484102572b19431682ef569f6db",
"assets/FontManifest.json": "ced082e3ed67fdbdd8813594922d3ca5",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "450b76295d068501bb99cf5c2d039e0a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/syncfusion_flutter_pdfviewer/assets/highlight.png": "7384946432b51b56b0990dca1a735169",
"assets/packages/syncfusion_flutter_pdfviewer/assets/squiggly.png": "c9602bfd4aa99590ca66ce212099885f",
"assets/packages/syncfusion_flutter_pdfviewer/assets/strikethrough.png": "cb39da11cd936bd01d1c5a911e429799",
"assets/packages/syncfusion_flutter_pdfviewer/assets/underline.png": "c94a4441e753e4744e2857f0c4359bf0",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "976c306ffc082e9af41832402b084b03",
"/": "976c306ffc082e9af41832402b084b03",
"main.dart.js": "e35f9d1759dd36b7f6a2082bedbd34c5",
"manifest.json": "4f3aeb8162777029b5ca223591791738",
"version.json": "1cf615a3f7b71590e3369215158acc6b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
