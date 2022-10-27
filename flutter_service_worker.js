'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "90d553ea140ae0eb43636cb2a769a2a4",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "844f323457073133ea59867477efa60c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "4f756f7685b9dc3f5c4933ceb6c9cbfd",
".git/logs/refs/heads/main": "5b257db00755ca92b34d49ad8b112b18",
".git/logs/refs/remotes/origin/main": "4180e48cd46fc333e220b7fbfe5f1781",
".git/objects/0a/be5b843eeac7b521f9db03a7ea099686fd10bc": "a8e535543c92dd5288417f3996c01b33",
".git/objects/11/51161bbc6fad3982427fd0f6b74b76899d1692": "d206eae6a197004d5bd6d0178a1b898a",
".git/objects/13/c557eceb9bb414c9d5dcd922ece547ffe8df83": "9b58389ef3cd673c0ff7f4e94d49e78c",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/1b/5eaa361c7306b4246c48497c79475c0e05c5e2": "797c30b38f4b43082bf674ed21553c74",
".git/objects/1d/c1401a6e595601b8c5b63f1ebefc722e61daae": "cb19b48375f07ca3404330071a84976a",
".git/objects/21/566f9cb25696d628f6192768ab2cf116ab23a8": "24c21a94b25b2539ad95ec9b48ed1f0c",
".git/objects/27/32b9f66185b5f85f39fed2cff38352fe81173b": "107007d3548da93417651b0ee439aefb",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/32/df276eb70aafd9ae4c4ef504acdc4128c96849": "dc9a5e8286c35b2d4885a80ec9f9d7b2",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/40/d8ace4a911c738f29a7318f7f57c9658e15c9f": "8f1a6d1494550c4f4a4e4371f5cb6499",
".git/objects/43/da14d84ecb949ca5f5e8ecca3a514aa7fe1c7d": "d970b955bbe605c4f81533fde279992d",
".git/objects/47/b43eed358d941c79bc3073f962125c2a54c68f": "f89df02bbbdc8506bcc1b3be9c371201",
".git/objects/4c/0aff72fe52388718f4bf9d164822281b2522e4": "155272d7352e34206af63ad8d7a7dee2",
".git/objects/52/258d51812134fa17380a7e7ba480ce924a1127": "ce0a831605d0464695ebca9850f40564",
".git/objects/56/40698eab9cbf602b9af3e7e785ff46723f4953": "86561542c85287e414fc9efd9e1ef305",
".git/objects/5b/5fc15bf8089371c90841c372d7784da3d59d7d": "68ac02f3115b8ba540f72d1fa815c06a",
".git/objects/5f/9011ae7f611d35761dca19c709db634705d627": "f5b93f5831939ba2f141300f8a134c46",
".git/objects/60/518d295956d9580c0acb7ee5a903b4bdc21250": "22c1d6d01faf7fc1d8fdea62943b78d8",
".git/objects/79/5099870081e5b78571bbd203eabec1bc0bd9a6": "bcba1633cbe4f351193099b89fa20680",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7b/31a9f59816f2d87758adc59effe9a01e89d54f": "bb65eb9be184969d34d01cd9c2946f8b",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/97/c6682832bb90d06c0ce7030f090eb0a54d519d": "92a7f454f5021c532f1dfbcce8626b4a",
".git/objects/a0/5b7fbfd2b9170dbc113f9cc553d478eb53e382": "94d7e31b63cb98941e6855adf9a22d72",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b0/d1092de803c5664e9e4cc12bb37ddde7bb9d6a": "6f53abdb5ed876bbfdacdbc9647508df",
".git/objects/b3/aafce5b3b7d75ba7660e92b95ca2b63854f7ce": "867175a38f330ac1a837884d4445f562",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c1/da7f3630f895c1da09af3f71678c8c4d5d9279": "0e2bfeb9876337d70343694b474f595e",
".git/objects/c5/5068c3a6364fc5f3f9098cb4151480a1722c15": "1e325d810550e4c82cb3079ea217d3a5",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/d6/824fb6d8cd11dbde452538666d418161da0294": "9a3ed4ae73e4666f234e83ce7b0c8952",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/ad441fe05d01641bfb82891602e21f9bfed2aa": "2618fab7911ab3636b01e5cde3307d2a",
".git/objects/dd/f4bfacb396e97546364ccfeeb9c31dfaea4c25": "049d11285bcbd30a249b4dff756126a0",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e2/6fa47075d5adbbfa9a73cc49015cc5158ffd18": "2d0b932707aebace5fca6b23c1101eea",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e8/704a94f66e3d1b01eccf236fba0398bfeb7961": "073ce4c9a4c390065673e5ef7abeced2",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/refs/heads/main": "232be0f0c73bf3a3c215f0bb9b2df931",
".git/refs/remotes/origin/main": "232be0f0c73bf3a3c215f0bb9b2df931",
"assets/AssetManifest.json": "babd5fd50d18007c46cf0b202cca8d34",
"assets/assets/images/1.jpg": "f06eaf9703533bc43a787db794f7c676",
"assets/assets/images/avatar.png": "5a5808524556ffc5ff28ce1d878352bb",
"assets/assets/logo/atom.svg": "a6fda1b0481854173d12024496349060",
"assets/assets/logo/ava.svg": "7ee66f33ddde0ff12245035e4848f156",
"assets/assets/logo/blood.svg": "1a124a35349b4b6699e5a8850be88843",
"assets/assets/logo/heart.svg": "ac237c30cc474f3c81def2eabb954656",
"assets/assets/logo/img01.svg": "60a9c90f980ad6b98745f0a03bc2947c",
"assets/assets/logo/img02.svg": "84fe89ee067b5a4053f64a358b755a56",
"assets/assets/logo/low-poly-grid-haikei.svg": "03c618284689a9b232590ef069c91a05",
"assets/FontManifest.json": "036ee95622fd88b7e0049c6cbc44feb1",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/fonts/Roboto-Bold.ttf": "b8e42971dec8d49207a8c8e2b919a6ac",
"assets/fonts/Roboto-Italic.ttf": "cebd892d1acfcc455f5e52d4104f2719",
"assets/fonts/Roboto-Regular.ttf": "8a36205bd9b83e03af0591a004bc97f4",
"assets/NOTICES": "fe62d8f32608bd3a0e7c5f23576daa28",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "ae6c1fd6f6ee6ee952cde379095a8f3f",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "5fcb74e7716f471d92280a32dd99e1dd",
"/": "5fcb74e7716f471d92280a32dd99e1dd",
"main.dart.js": "f0bd47164f32ee7e45ba231789f8ac59",
"manifest.json": "9467989218faddab651761fe694f46cb",
"version.json": "fb59729be6fbec870fcd23774d3f36ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
