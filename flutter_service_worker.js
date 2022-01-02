'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "520bb69375818c1cbfca852dff6506c7",
"assets/assets/Icons/arrow.png": "423e8731dbd33980eb05bf6bfd6e4cf8",
"assets/assets/Icons/credit-card.png": "7a82f07c0e6f8a1f9be13555136cb61c",
"assets/assets/Icons/engineering.png": "7cee3f3850e342b746ebb9b671b90be5",
"assets/assets/Icons/facebook.png": "1a73e323efcd92e36fff04fdf27a076b",
"assets/assets/Icons/Glyph.png": "557d468037e7990415d44bd94b19d709",
"assets/assets/Icons/Group%25209803.png": "3d7d56ceab2ee4e8835790eb0ef6b5d8",
"assets/assets/Icons/Group%25209836.png": "24d40b4b23d379760bc9e31d08f56b90",
"assets/assets/Icons/Group%25209848.png": "5b1dd7546669c18ae4764749fbcc56ed",
"assets/assets/Icons/Icon%2520awesome-map-marker-alt.png": "fd92eab076b65f915b4c053b0604577b",
"assets/assets/Icons/Icon%2520awesome-phone-alt.png": "b482210c68933874fe2aad4fe0cba61c",
"assets/assets/Icons/Icon%2520ionic-md-airplane.png": "9b7712307be743812d37f2edaffe4eb9",
"assets/assets/Icons/Icon%2520ionic-md-mail.png": "0fd885514d51b6ce04aaef952abaf700",
"assets/assets/Icons/instagram.png": "d24fb5d62e6332d8310a847ea0150319",
"assets/assets/Icons/light-bulb-2.png": "dc35f5a7836597b885a5766aa6ad6349",
"assets/assets/Icons/logo.png": "4e66ac51cbfb72166770629388eec139",
"assets/assets/Icons/logo_word.png": "7d1a3fb0dab071d787ab3a56b929c965",
"assets/assets/Icons/mortarboard.png": "9becdde53fa542d30595325c7fd82b45",
"assets/assets/Icons/Path%252011783.png": "950e69c939517ae6a32f2a08d0da5b75",
"assets/assets/Icons/Path%252011789.png": "394b6f60f8b6ad82b3e469d535e706eb",
"assets/assets/Icons/person.png": "1ac079d6e943820e7a8d5af63c741a3c",
"assets/assets/Icons/statistics.png": "d7d47ff405cefb66925b1aad0d2cc763",
"assets/assets/Icons/telegram.png": "40c61a82bb989cc61362de40b72b38d1",
"assets/assets/Icons/twitter.png": "5ce42bc53b2b39dbec242260c88727b0",
"assets/assets/image/background.png": "2b0c96a1e1493c5e350d4032d60c8e18",
"assets/assets/image/bg_img-1.png": "f2dfe778bc1e30333be4d385ad1c3a73",
"assets/assets/image/contactUsImage.png": "b676680405592f5b3cf5d1009a688fbf",
"assets/assets/image/exploreFire.png": "e52d5f2021b746b55f30ad866400652a",
"assets/assets/image/Group%25209776.png": "1a955efdedb571eeeb3fe2e297eab35b",
"assets/assets/image/images.png": "768bb7f9aabae7631563dff25424576e",
"assets/assets/image/joinusImage.png": "2eca474a2bf86d0e5af4f2554b62d08b",
"assets/assets/image/Mobile-App-Mockup-PSD.png": "9b00f1d115f41e5a7a0b5d55b9ff5b37",
"assets/assets/image/Perspective-Web-Mobile-App-PSD-Mockup-1.png": "a327b5b34b0374f7655f72c7bfa1a655",
"assets/assets/image/projects.png": "41057308a473c9ea9e2f3e67472002c1",
"assets/assets/image/shutterstock_-2.png": "8b42996885372e1844f93fe3f27ff238",
"assets/assets/image/white%2520background.png": "d9c9dd958484646ab640ef42a54e5c1c",
"assets/assets/image/who_we_are.png": "bf7f3a8626276eb484e15882537cc978",
"assets/assets/image/whyFire.png": "6d7947ef449a8adabe5b398b61e09ee9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "3463acf38699b5bc5cd40f825114a21b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e6911a07015834dc5f8be7478fe4d009",
"/": "e6911a07015834dc5f8be7478fe4d009",
"main.dart.js": "cd31b0dcf7651e0840a7ecea1d00ff00",
"manifest.json": "3d17ea2b1a300dc4795c1045851e5697",
"version.json": "50821d3e53abd50b87c82892bdef466c"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
