"use strict";var precacheConfig=[["/ClickyGame/index.html","02d5ae4dc1f4e7668ce68831bb5b95af"],["/ClickyGame/static/css/main.74c37889.css","cb39c189b8eb42765310348d090d708b"],["/ClickyGame/static/js/main.37f7fc5d.js","e9ededb2a8696264f129f01aab4f1378"],["/ClickyGame/static/media/beth.4d5e65a0.png","4d5e65a0c53ec380d408bfde1d8ff703"],["/ClickyGame/static/media/birdperson.612ba8d4.png","612ba8d4e89b5cbe07b279808234f834"],["/ClickyGame/static/media/evilmorty.0657e1f4.png","0657e1f4c5b5eb7d25b4bd18811256a3"],["/ClickyGame/static/media/gianthead.978b3847.png","978b38471c32626814803817d75f4ab8"],["/ClickyGame/static/media/goldenford.3774b39d.png","3774b39dcbda08977c789663f6049c70"],["/ClickyGame/static/media/jerry.af8e8a84.png","af8e8a84f14297f7c14073059a4b9246"],["/ClickyGame/static/media/jessica.a9644830.png","a9644830b29212e0af6fb0a353c1c46d"],["/ClickyGame/static/media/meeseeks.9667b7ee.png","9667b7eeed7cbde4439b6b6bba4a040f"],["/ClickyGame/static/media/morty.244deeda.png","244deeda3690049cebc0046457a6e1cf"],["/ClickyGame/static/media/mr.d61b2d5b.png","d61b2d5bd91638427b6604f6f7dcf1dc"],["/ClickyGame/static/media/rick.06b65841.png","06b6584198e9fce2075bc1a4a9bfae92"],["/ClickyGame/static/media/summer.afdbb7bf.png","afdbb7bfad6a6acefaafbf9fb072f0cb"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/ClickyGame/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});