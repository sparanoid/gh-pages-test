"use strict";var precacheConfig=[["/404.html","cd103ba6abaad55eed514d6060a85a34"],["/about/index.html","7eb65fe52432febf2754b9d9b569f934"],["/apple-touch-icon.png","5d189b047161fee5f4c8c9f9cbf5b829"],["/configuration.html","3ccac20f5cb953a4a06b523701ffc79f"],["/creating-themes.html","3f8684794d3aedfaeb73d5c0b14e6bbd"],["/custom-color-scheme.html","1c6f9436955dd754de8e34fb30bacb55"],["/custom-css.html","59dc1e2081432714385db26686a0baa6"],["/custom-heading-background.html","a3217c0559e6605e4bc3e28995a06335"],["/custom-heading-image.html","bb24f64864aa43207ef1c7fa19f1b659"],["/custom-html-markups.html","9e071bb7ed7c3c058821a6c108bec7e7"],["/customizing-styles.html","f0f1f0c7c865b9bbbb572be6d24ed9cb"],["/deployment-methods.html","c31718df1046179ed4e36b10d9654099"],["/external-link-post.html","4e10ab75d8d423ba8fe13d8b7dccd467"],["/favicon.png","3d05f8132d73390b349cae0ce8c016d2"],["/favicon.svg","821d4c60e5ae39e9042c879d5980640f"],["/getting-started.html","c2d113902e9cb631eb1164a4ffbbdc7a"],["/github-pages-setup.html","f04b730142b24bdf6e50b2fc70b595b2"],["/index.html","1e20c492742188eec93f1f31f43edf23"],["/jekyll-theme-compatibility.html","c19edb06221f08fa3acbef5eaa7d8b00"],["/logo.png","ecc1a06c8bb990573ad1d8d245bffe74"],["/markdown-features-test.html","df8b1807ff61fbd7f9d3f42856a81542"],["/markup-example.html","f3ab30f9a1e4994113086a9cec5742af"],["/mask-icon.svg","07b803e22eb033cb270633273e0bf528"],["/multiple-themes-support.html","cc1633e47c839f95746702b285e9114d"],["/news/index.html","35b35d8530ada5729257760d5f538a67"],["/open-graph.html","5c7b073a98685d184514fc7ce8b96a40"],["/svg-post-title.html","781156c574a9f38294625e2201f9194d"],["/syntax-highlighting.html","01ccfb5bffefd1099ed9dba80459194f"],["/theme-curtana.html","9cb0c5e58ec81c9fbaccc1c1401f39a9"],["/themes.html","e7ca565fbabf60f534ed286155e689ce"],["/upgrading-from-v1-to-v2.html","90e65a6f79a1755581fe1d0dc624f8cc"],["/upgrading-guide-v1.1.0.html","d964f5d8994c19501be3e2bbf5ec1b6d"],["/welcome.html","6a375648328cfc6ec326b02af80b5082"]],cacheName="sw-precache-v3-almace-scaffolding-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,n,a){var c=new URL(e);return a&&c.pathname.match(a)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,n){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return n.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),c=createCacheKey(a,hashParamName,n,!1);return[a.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(a){return setOfCachedUrls(a).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!n.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return a.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!n.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,n=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),a="index.html";(e=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,a),e=urlsToCacheKeys.has(n));0,e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return fetch(t.request)}))}});