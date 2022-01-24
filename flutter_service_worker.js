'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "42fb9d2be5f187b2143bf9a4b1bac46c",
".git/config": "d3d840a6e818f4cb48cd97359ef20420",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/index": "2e9ed1a82a080172c48fc80c8fc5e94c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a1ed2c6393f6b6f29b856967b47670e6",
".git/logs/refs/heads/master": "a1ed2c6393f6b6f29b856967b47670e6",
".git/logs/refs/remotes/origin/master": "5fc06d04c4d714d307e1e8c09d6783c6",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/04/23e69acea1f25d5931c1be43403bd4d84a2281": "9bcb9196ea847c4b2e8af7ef4236aa4a",
".git/objects/08/179cf593a938d314d3a1257225c7daad0b59ab": "f2ffb1b64bcac3573d7c669d844ca195",
".git/objects/0f/9f5de11d11e7f7c90b8204cefd4ff1a34ef085": "f20a6a8f380db3fca62bff7834a3d81e",
".git/objects/17/ea7840710be695b2e379ce9573c042fc9e4a99": "0d86ac8d0ff5bcab2ce45983f7278417",
".git/objects/19/6a9da0928b644c99122977c6bdbe70d5c223ed": "994c3bd6900dc06d819495f6a775170f",
".git/objects/1c/403469ae57164b617c12d1a8ae1c1ff18945af": "89b3888e41ce3b31681e8245b6a5a031",
".git/objects/29/fae5ff72fefd4ab9956f4ff44b364914f7a3bf": "d46ce2803bafcd1bbad267cded03f0af",
".git/objects/30/ca5540052031e4a27c1daec25b24e205d27e46": "e8a57ac9e52f611cf54c721598483c5d",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/36/b9fbb51027f98503944f4f9e5ad9050b3550d3": "947a33a1598bef5595b208cdeef95646",
".git/objects/3d/c1bc6083db047f7ef13271f0e8cb9a1c256ce8": "7c7ef8d5a88055f13f161a5569914695",
".git/objects/41/9915ed78a26862613d270434ca0576241eb2b6": "8f725a9da70ed1ace3f55bbd3e4016f3",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/c742399421a370d2e54dc223c656e7bb173565": "877f793003407de9917c228f178dd7ac",
".git/objects/4a/32622916a8c8786dcd6cb9cb33c64a9b366143": "37023f3953c8d0b62f536556b375a27e",
".git/objects/4d/fcbb6a5a2e1e7e386ed350f64ba894f1e62939": "322efd455e74395780e63717b216039c",
".git/objects/4f/25366612d2bfa60b54149b92ef88065b94fae5": "d54ee735fb48994c3674f533578d13c7",
".git/objects/5b/f25d51bae7db07d596b048b2a0788af38eef19": "114f250bbf20863c5c52094be730dd5a",
".git/objects/5c/5c0906f05096f8e38d114508669de610b065e2": "aa36d8a1b8917264ad1f48fc306d4ee9",
".git/objects/5e/63749a10264dda87a9af364a633345c836c494": "a52f275a9c9b15db9ab4345b75baabc3",
".git/objects/5f/fd3919ebae005efd44cc9a7ff2bc35e2ad05cd": "22a7bdffb3f404e876b914b2085f7c37",
".git/objects/63/ddcaa57674801189a805be7cf3813157287616": "6f30ff108e3a36029cfc0e42cb251201",
".git/objects/67/ade07ac8e45ca445e79eeab56e3d0579e7595c": "4dcc29b1c75d93ec389bcf469877d0f6",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/79/efc46d7acb4bedce83991677e85481a6bf484a": "443fe9f70ef9c24c0f2e797795e04eb9",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/90/7fb1ee5dcde1d3e876a784ee4baa2e7b464742": "81f7e0e1dabe92699d54824171b38d6c",
".git/objects/90/fa7a6fa9dbbd1a3a14696aeffaa02a32a21668": "f37a15dabf88a9234575f64d119d4abb",
".git/objects/98/91d457671ce2f743b7ba21eca5c972a8767258": "11b61590045960e2f4874d03a2901939",
".git/objects/9b/d5739cb6ecf1aa74706a0f71c7c4270b3a70e8": "f4c5bcc13447ec7b56d862de5d597316",
".git/objects/9e/4d66f731bf7476371b06ad483116378e0c22f0": "27b93f60340fc524bad959016c7346b8",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ad/8174d3e3649c8b191fe1b0ea0e3dd336922997": "f09993e837f76db1ad906bf58a7bad2d",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c0/ab2ce475993b98c8c01a614280fc4b9478ce2d": "208976f9b9585662f89b67c0efc12b9b",
".git/objects/d6/70c6bc3157fe5d0b370e852ca91224c0fe2fa7": "3977861fee792cd8a175824ee0d7382b",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/e5dc667e380cf93a23a0748e8024a927688f47": "8341d147f2e73c03a8cba197dc495a11",
".git/objects/e1/878879d716c7d8794225f5f1310b4a414200de": "1ef4ab5ae229b9091f3c8d45a3078b0f",
".git/objects/e3/e6f5429617bab10ae176e785f2e6a68c459c3e": "6fe2573d669cc07345915c1c553b598e",
".git/objects/e5/900f8cf143cb03dd9a44d29d5e56a169da65c3": "34e7a1720b984544e480a5f76b1ffe7d",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/e0afa541493f456ed8aacec9bf067680c6adbe": "23406e5475cab55fb0ca8c55118083eb",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/af4e9aa4a1845c112072a9c9986f1b965c5db0": "2fc18e3536c5af85510d38400157eb39",
".git/objects/ee/e98f54f8396f5876dca9c4cff1c856982a3970": "015ccc0590f9e9e241e0e1b9ff0f236b",
".git/refs/heads/master": "c9a45ce90c4ef394ae4a40cc12e300d8",
".git/refs/remotes/origin/master": "c9a45ce90c4ef394ae4a40cc12e300d8",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "7afb31d6a951a7195e43cc3f423089b0",
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
"index.html": "5558920caee7ab470b097bfc505e5c9a",
"/": "5558920caee7ab470b097bfc505e5c9a",
"main.dart.js": "c558e3f358795ea042084c536fa20288",
"manifest.json": "5af75f161460e8a2ab928dde1dad481d",
"version.json": "0a7bbf805943c42d8690537e116fa8f9"
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
