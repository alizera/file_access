'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "f4647f87a425cdbc1ae1e5e45f03983f",
"index.html": "4a8dd59bf31c1dd740875ec95ce1ca0c",
"/": "4a8dd59bf31c1dd740875ec95ce1ca0c",
"main.dart.js": "03cd4ca534ab8a230b2cf66434d8d501",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "936d491fcccfc836fdb36f27942cf45d",
"assets/AssetManifest.json": "86626e5df924fe3198e7af1bf29b61bd",
"assets/NOTICES": "fe8866d5e2f68011d85e0fef11457857",
"assets/FontManifest.json": "84df3ac30fb9df8aa0c17c5e02c15375",
"assets/packages/fwfh_svg/test/images/logo.svg": "fdb46fc7657324f79bd97928651e8274",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/community_material_icon/fonts/materialdesignicons-webfont.ttf": "174c02fc4609e8fc4389f5d21f16a296",
"assets/packages/flutter_widget_from_html_core/test/images/logo.png": "57838d52c318faff743130c3fcfae0c6",
"assets/packages/flutter_inappwebview/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/images/profileContactUs.png": "a7f72375e9c9ed50ac9f78fc4d992f88",
"assets/assets/images/auth_letter_design_icon.png": "8782680dde60bcb5fbaeff86df83d0e1",
"assets/assets/images/auth_camera_design_icon.png": "ec6916baef23897978e1b28641c30ec8",
"assets/assets/images/splash.gif": "c73c157d57f3aeaefa071f6ce20db98c",
"assets/assets/images/service_form_info_icon.png": "4a3d09cee0bfe02e683d347c45ac8e7e",
"assets/assets/images/app.png": "ae61bb16b800691a8d3525a94ca23c1c",
"assets/assets/images/profileBankAccounts.png": "aa52476ef6030d8f848c717558cd2a59",
"assets/assets/images/auth_id_card.png": "3aca18b218ea655612638adfbef92bd3",
"assets/assets/images/profileAuthentication.png": "d85ac12946b09bee62462d1ed8a5a04a",
"assets/assets/images/auth_fix_phone_design_icon.png": "7a3109e328d4ed610043cef4157d898e",
"assets/assets/images/bottomNavigationBlogSelected.png": "e7158d2fb7293778ce0c009fee520eb5",
"assets/assets/images/auth_doc_mobile.png": "c44882fb7e90a7b596f1a25ea8efe85c",
"assets/assets/images/bottomNavigationOrdersSelected.png": "6e52c5a8e059dffa131e3a12a7b8aec5",
"assets/assets/images/fix_back.png": "2dc2bbc87574eb64e0b7f0c43a0501ef",
"assets/assets/images/bottomNavigationHomeSelected.png": "9f03573cadbe3df5b6b6d526ec06e792",
"assets/assets/images/auth_info_design_icon.png": "84a4c8f5349edb65d4ec00f20b07afaf",
"assets/assets/images/profileUpgrade.png": "ac1a7497962640912cf9941327d12adc",
"assets/assets/images/empty_invoice.png": "a304e4b1177acbb17dc2a6261caaf575",
"assets/assets/images/bottomNavigationProfile.png": "56a82f1bda3a1b540cf6230d2465ca90",
"assets/assets/images/auth_letter.png": "1c6945429b2a7f1616919f49bb5d4627",
"assets/assets/images/bottomNavigationHome.png": "5cc0f83cd21ca53c26fb1516175a3013",
"assets/assets/images/profileProfileInformation.png": "dc5613f243df54ef1ab7ccd82567094d",
"assets/assets/images/profile_empty.png": "15d923be108e7737f29850df706115c2",
"assets/assets/images/profileBankCards.png": "f66c3cd00b7709ea631763e95572c646",
"assets/assets/images/bottomNavigationProfileSelected.png": "0471e179ec5d8d24a04d92b776554818",
"assets/assets/images/bottomNavigationBlog.png": "c894b7e03ef09eb7ea9079c301d57ee1",
"assets/assets/images/otp_middle_image.png": "ddeb67d45e2d5ff627cf762c1c34e8ce",
"assets/assets/images/app_logo_text.png": "8ddb8576950ff9c59511fdee4b354718",
"assets/assets/images/bottomNavigationPriceSelected.png": "3a4931198a64a96dc3abc7ce9bfef9fb",
"assets/assets/images/transparentImage.png": "8eafc0720d0e3318ce3ce9a003650fe9",
"assets/assets/images/bank_card_empty.png": "103b27d8b78bf348b594bff953d817c0",
"assets/assets/images/bottomNavigationPrice.png": "2714e0010449a64fd9c45c4ab1c6c588",
"assets/assets/images/profileAboutUs.png": "111abef9bb87cafd89cdab87be976bdf",
"assets/assets/images/profileOrders.png": "6b60a118bd17ca44d1af8d95c781d3fc",
"assets/assets/images/auth_phone.png": "9429ef2c2318f0ce4e2c8cbd873c175a",
"assets/assets/images/woman.png": "874d6accc2f3f9d0d84c4df3eaf82469",
"assets/assets/images/bank_account_empty.png": "6964abfb67d04115a00f668f31b75959",
"assets/assets/images/auth_design_icon.png": "b308af9fdd7a0f3a13043e8479d09289",
"assets/assets/images/auth_video.png": "3ccd2aa55d598cb105290a08ae6bdcc4",
"assets/assets/images/app_logo_text.svg": "2f7ec2bf3194f245a57352cfd85adb71",
"assets/assets/images/auth_mobile_design_icon.png": "a4282a650f80fe8dd365b64222bef0ed",
"assets/assets/images/empty_notification.png": "86f2092fb3e194d1c66c07247bc0a5b2",
"assets/assets/images/auth_bank_card_design_icon.png": "817a35c06751489bb39a33024c9d9366",
"assets/assets/images/auth_video_interview_design_icon.png": "a83ca26265404f882a13a9d71699657f",
"assets/assets/images/profileIncome.png": "db975cc10d3d3f22958a0abad5eb85e8",
"assets/assets/images/wallet_design_icon.png": "a5b7476788fac491cb4835314b58b976",
"assets/assets/images/auth_bank_card.png": "2f77fea63d12cd5b0ccbeebf150f92d5",
"assets/assets/images/bottomNavigationOrders.png": "83d1341a77e4332348a03abefcc3b597",
"assets/assets/fonts/iran_sans_regular.ttf": "80470e5cc0dea2d75af2700d8c35ba6a",
"assets/assets/fonts/iran_sans_bold.ttf": "215e37f13058b04530a571f145ac10ea",
"assets/assets/fonts/iran_sans_regular_en.ttf": "ac22d187130d6c3433a49a1e98bfa968",
"assets/assets/fonts/iran_sans_light.ttf": "669177836d145526c0238fb731f36246",
"assets/assets/fonts/iran_sans_medium.ttf": "526a6bd26539434715bc5587a513d716"
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
