// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"kncrP":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "05254ebb09b21932";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"eMc9v":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "targetCategory", ()=>targetCategory);
"use strict";
const subject = document.querySelector(".subject");
const location = document.querySelector(".location");
const themes = document.querySelector(".themes");
const design = document.querySelector(".design");
const lightning = document.querySelector(".lightning");
const colors = document.querySelector(".colors");
const camera = document.querySelector(".camera");
const artists = document.querySelector(".artists");
const image = document.querySelector(".image");
const buttonBox = document.querySelector(".hover-buttons");
const optionBox1 = document.querySelector(".option-box1");
const optionBox2 = document.querySelector(".option-box2");
const optionBox3 = document.querySelector(".option-box3");
const optionBox4 = document.querySelector(".option-box4");
const optionBox5 = document.querySelector(".option-box5");
const optionBox6 = document.querySelector(".option-box6");
const optionBox7 = document.querySelector(".option-box7");
const optionBox8 = document.querySelector(".option-box8");
const optionBox9 = document.querySelector(".option-box9");
const subjectCounter = document.querySelector(".subject-counter");
const locationCounter = document.querySelector(".location-counter");
const themesCounter = document.querySelector(".themes-counter");
const designCounter = document.querySelector(".design-counter");
const lightningCounter = document.querySelector(".lightning-counter");
const colorsCounter = document.querySelector(".colors-counter");
const cameraCounter = document.querySelector(".camera-counter");
const artistsCounter = document.querySelector(".artists-counter");
const imageCounter = document.querySelector(".image-counter");
const sub1 = document.querySelector(".sub1");
const sub2 = document.querySelector(".sub2");
const sub3 = document.querySelector(".sub3");
const loc1 = document.querySelector(".loc1");
const loc2 = document.querySelector(".loc2");
const loc3 = document.querySelector(".loc3");
const the1 = document.querySelector(".the1");
const the2 = document.querySelector(".the2");
const the3 = document.querySelector(".the3");
const des1 = document.querySelector(".des1");
const des2 = document.querySelector(".des2");
const des3 = document.querySelector(".des3");
const lig1 = document.querySelector(".lig1");
const lig2 = document.querySelector(".lig2");
const lig3 = document.querySelector(".lig3");
const col1 = document.querySelector(".col1");
const col2 = document.querySelector(".col2");
const col3 = document.querySelector(".col3");
const cam1 = document.querySelector(".cam1");
const cam2 = document.querySelector(".cam2");
const cam3 = document.querySelector(".cam3");
const art1 = document.querySelector(".art1");
const art2 = document.querySelector(".art2");
const art3 = document.querySelector(".art3");
const mainProgram = document.querySelector(".main-program");
const subjectBoxes = document.querySelector(".modal-boxes");
const dot1 = document.querySelector(".dot-1");
const dot2 = document.querySelector(".dot-2");
const dot3 = document.querySelector(".dot-3");
let g = "rgb(74, 69, 70)";
let gb = "2px solid rgb(74, 69, 70)";
let w = "white";
let wb = "2px solid white";
let targetCategory = "subject";
///////
optionBox2.style.color = g;
locationCounter.style.color = g;
locationCounter.style.border = gb;
optionBox3.style.color = g;
themesCounter.style.color = g;
themesCounter.style.border = gb;
optionBox4.style.color = g;
designCounter.style.color = g;
designCounter.style.border = gb;
optionBox5.style.color = g;
lightningCounter.style.color = g;
lightningCounter.style.border = gb;
optionBox6.style.color = g;
colorsCounter.style.color = g;
colorsCounter.style.border = gb;
optionBox7.style.color = g;
cameraCounter.style.color = g;
cameraCounter.style.border = gb;
optionBox8.style.color = g;
artistsCounter.style.color = g;
artistsCounter.style.border = gb;
optionBox9.style.color = g;
imageCounter.style.color = g;
imageCounter.style.border = gb;
const hide = (el)=>{
    el.classList.add("hidden");
};
const show = (el)=>{
    el.classList.remove("hidden");
};
const opacity = (i1, i2)=>{
    i1.classList.add("fadeOpacity");
    i2.classList.add("fadeOpacity");
    setTimeout(()=>{
        i1.classList.remove("fadeOpacity");
        i2.classList.remove("fadeOpacity");
    }, 500);
};
const resetDots = ()=>{
    dot1.style.border = "1px solid rgb(37, 49, 96)";
    dot1.style.backgroundColor = "rgb(37, 49, 96)";
    dot2.style.border = "1px solid rgb(37, 49, 96)";
    dot2.style.backgroundColor = "rgb(8, 11, 22)";
    dot3.style.border = "1px solid rgb(37, 49, 96)";
    dot3.style.backgroundColor = "rgb(8, 11, 22)";
};
optionBox1.addEventListener("click", ()=>{
    let targetCategory = "subject";
    resetDots();
    dot1.className = "dot-1 d1 dot";
    dot2.className = "dot-2 d2 dot";
    dot3.className = "dot-3 d3 dot";
    show(sub1);
    show(subject);
    show(buttonBox);
    show(subjectBoxes);
    hide(location);
    hide(themes);
    hide(design);
    hide(lightning);
    hide(colors);
    hide(camera);
    hide(artists);
    hide(loc1);
    hide(loc2);
    hide(loc3);
    hide(the1);
    hide(the2);
    hide(the3);
    hide(des1);
    hide(des2);
    hide(des3);
    hide(lig1);
    hide(lig2);
    hide(lig3);
    hide(col1);
    hide(col2);
    hide(col3);
    hide(cam1);
    hide(cam2);
    hide(cam3);
    hide(art1);
    hide(art2);
    hide(art3);
    hide(image);
    opacity(mainProgram, subjectBoxes);
    styleReducer(optionBox1, subjectCounter, subjectCounter, optionBox2, locationCounter, locationCounter, optionBox3, themesCounter, themesCounter, optionBox4, designCounter, designCounter, optionBox5, lightningCounter, lightningCounter, optionBox6, colorsCounter, colorsCounter, optionBox7, cameraCounter, cameraCounter, optionBox8, artistsCounter, artistsCounter, optionBox9, imageCounter, imageCounter);
});
optionBox2.addEventListener("click", ()=>{
    let targetCategory = "location";
    resetDots();
    dot1.className = "dot-4 d1 dot";
    dot2.className = "dot-5 d2 dot";
    dot3.className = "dot-6 d3 dot";
    show(loc1);
    show(location);
    show(buttonBox);
    show(subjectBoxes);
    hide(subject);
    hide(themes);
    hide(design);
    hide(lightning);
    hide(colors);
    hide(camera);
    hide(artists);
    hide(sub1);
    hide(sub2);
    hide(sub3);
    hide(the1);
    hide(the2);
    hide(the3);
    hide(des1);
    hide(des2);
    hide(des3);
    hide(lig1);
    hide(lig2);
    hide(lig3);
    hide(col1);
    hide(col2);
    hide(col3);
    hide(cam1);
    hide(cam2);
    hide(cam3);
    hide(art1);
    hide(art2);
    hide(art3);
    hide(image);
    opacity(mainProgram, subjectBoxes);
    styleReducer(optionBox2, locationCounter, locationCounter, optionBox1, subjectCounter, subjectCounter, optionBox3, themesCounter, themesCounter, optionBox4, designCounter, designCounter, optionBox5, lightningCounter, lightningCounter, optionBox6, colorsCounter, colorsCounter, optionBox7, cameraCounter, cameraCounter, optionBox8, artistsCounter, artistsCounter, optionBox9, imageCounter, imageCounter);
});
optionBox3.addEventListener("click", ()=>{
    let targetCategory = "themes";
    resetDots();
    dot1.className = "dot-7 d1 dot";
    dot2.className = "dot-8 d2 dot";
    dot3.className = "dot-9 d3 dot";
    show(the1);
    show(themes);
    show(buttonBox);
    show(subjectBoxes);
    hide(subject);
    hide(location);
    hide(design);
    hide(lightning);
    hide(colors);
    hide(camera);
    hide(artists);
    hide(sub1);
    hide(sub2);
    hide(sub3);
    hide(loc1);
    hide(loc2);
    hide(loc3);
    hide(des1);
    hide(des2);
    hide(des3);
    hide(lig1);
    hide(lig2);
    hide(lig3);
    hide(col1);
    hide(col2);
    hide(col3);
    hide(cam1);
    hide(cam2);
    hide(cam3);
    hide(art1);
    hide(art2);
    hide(art3);
    hide(image);
    opacity(mainProgram, subjectBoxes);
    styleReducer(optionBox3, themesCounter, themesCounter, optionBox2, locationCounter, locationCounter, optionBox1, subjectCounter, subjectCounter, optionBox4, designCounter, designCounter, optionBox5, lightningCounter, lightningCounter, optionBox6, colorsCounter, colorsCounter, optionBox7, cameraCounter, cameraCounter, optionBox8, artistsCounter, artistsCounter, optionBox9, imageCounter, imageCounter);
});
optionBox4.addEventListener("click", ()=>{
    let targetCategory = "design";
    resetDots();
    dot1.className = "dot-10 d1 dot";
    dot2.className = "dot-11 d2 dot";
    dot3.className = "dot-12 d3 dot";
    show(des1);
    show(design);
    show(buttonBox);
    show(subjectBoxes);
    hide(themes);
    hide(subject);
    hide(location);
    hide(lightning);
    hide(colors);
    hide(camera);
    hide(artists);
    hide(sub1);
    hide(sub2);
    hide(sub3);
    hide(loc1);
    hide(loc2);
    hide(loc3);
    hide(the1);
    hide(the2);
    hide(the3);
    hide(lig1);
    hide(lig2);
    hide(lig3);
    hide(col1);
    hide(col2);
    hide(col3);
    hide(cam1);
    hide(cam2);
    hide(cam3);
    hide(art1);
    hide(art2);
    hide(art3);
    hide(image);
    opacity(mainProgram, subjectBoxes);
    styleReducer(optionBox4, designCounter, designCounter, optionBox3, themesCounter, themesCounter, optionBox2, locationCounter, locationCounter, optionBox1, subjectCounter, subjectCounter, optionBox5, lightningCounter, lightningCounter, optionBox6, colorsCounter, colorsCounter, optionBox7, cameraCounter, cameraCounter, optionBox8, artistsCounter, artistsCounter, optionBox9, imageCounter, imageCounter);
});
optionBox5.addEventListener("click", ()=>{
    let targetCategory = "lightning";
    resetDots();
    dot1.className = "dot-13 d1 dot";
    dot2.className = "dot-14 d2 dot";
    dot3.className = "dot-15 d3 dot";
    show(lig1);
    show(lightning);
    show(buttonBox);
    show(subjectBoxes);
    hide(subject);
    hide(location);
    hide(themes);
    hide(design);
    hide(colors);
    hide(camera);
    hide(artists);
    hide(sub1);
    hide(sub2);
    hide(sub3);
    hide(loc1);
    hide(loc2);
    hide(loc3);
    hide(the1);
    hide(the2);
    hide(the3);
    hide(des1);
    hide(des2);
    hide(des3);
    hide(col1);
    hide(col2);
    hide(col3);
    hide(cam1);
    hide(cam2);
    hide(cam3);
    hide(art1);
    hide(art2);
    hide(art3);
    hide(image);
    opacity(mainProgram, subjectBoxes);
    styleReducer(optionBox5, lightningCounter, lightningCounter, optionBox4, designCounter, designCounter, optionBox3, themesCounter, themesCounter, optionBox2, locationCounter, locationCounter, optionBox1, subjectCounter, subjectCounter, optionBox6, colorsCounter, colorsCounter, optionBox7, cameraCounter, cameraCounter, optionBox8, artistsCounter, artistsCounter, optionBox9, imageCounter, imageCounter);
});
optionBox6.addEventListener("click", ()=>{
    let targetCategory = "colors";
    resetDots();
    dot1.className = "dot-16 d1 dot";
    dot2.className = "dot-17 d2 dot";
    dot3.className = "dot-18 d3 dot";
    show(col1);
    show(colors);
    show(buttonBox);
    show(subjectBoxes);
    hide(subject);
    hide(location);
    hide(themes);
    hide(design);
    hide(lightning);
    hide(camera);
    hide(artists);
    hide(sub1);
    hide(sub2);
    hide(sub3);
    hide(loc1);
    hide(loc2);
    hide(loc3);
    hide(the1);
    hide(the2);
    hide(the3);
    hide(des1);
    hide(des2);
    hide(des3);
    hide(lig1);
    hide(lig2);
    hide(lig3);
    hide(cam1);
    hide(cam2);
    hide(cam3);
    hide(art1);
    hide(art2);
    hide(art3);
    hide(image);
    opacity(mainProgram, subjectBoxes);
    styleReducer(optionBox6, colorsCounter, colorsCounter, optionBox5, lightningCounter, lightningCounter, optionBox4, designCounter, designCounter, optionBox3, themesCounter, themesCounter, optionBox2, locationCounter, locationCounter, optionBox1, subjectCounter, subjectCounter, optionBox7, cameraCounter, cameraCounter, optionBox8, artistsCounter, artistsCounter, optionBox9, imageCounter, imageCounter);
});
optionBox7.addEventListener("click", ()=>{
    let targetCategory = "camera";
    resetDots();
    dot1.className = "dot-19 d1 dot";
    dot2.className = "dot-20 d2 dot";
    dot3.className = "dot-21 d3 dot";
    show(cam1);
    show(camera);
    show(buttonBox);
    show(subjectBoxes);
    hide(subject);
    hide(location);
    hide(themes);
    hide(design);
    hide(lightning);
    hide(colors);
    hide(artists);
    hide(sub1);
    hide(sub2);
    hide(sub3);
    hide(loc1);
    hide(loc2);
    hide(loc3);
    hide(the1);
    hide(the2);
    hide(the3);
    hide(des1);
    hide(des2);
    hide(des3);
    hide(lig1);
    hide(lig2);
    hide(lig3);
    hide(col1);
    hide(col2);
    hide(col3);
    hide(art1);
    hide(art2);
    hide(art3);
    hide(image);
    opacity(mainProgram, subjectBoxes);
    styleReducer(optionBox7, cameraCounter, cameraCounter, optionBox5, lightningCounter, lightningCounter, optionBox4, designCounter, designCounter, optionBox3, themesCounter, themesCounter, optionBox2, locationCounter, locationCounter, optionBox1, subjectCounter, subjectCounter, optionBox6, colorsCounter, colorsCounter, optionBox8, artistsCounter, artistsCounter, optionBox9, imageCounter, imageCounter);
});
optionBox8.addEventListener("click", ()=>{
    let targetCategory = "artists";
    console.log(targetCategory);
    resetDots();
    dot1.className = "dot-22 d1 dot";
    dot2.className = "dot-23 d2 dot";
    dot3.className = "dot-24 d3 dot";
    show(art1);
    show(artists);
    show(buttonBox);
    show(subjectBoxes);
    hide(subject);
    hide(location);
    hide(themes);
    hide(design);
    hide(lightning);
    hide(colors);
    hide(camera);
    hide(sub1);
    hide(sub2);
    hide(sub3);
    hide(loc1);
    hide(loc2);
    hide(loc3);
    hide(the1);
    hide(the2);
    hide(the3);
    hide(des1);
    hide(des2);
    hide(des3);
    hide(lig1);
    hide(lig2);
    hide(lig3);
    hide(col1);
    hide(col2);
    hide(col3);
    hide(cam1);
    hide(cam2);
    hide(cam3);
    hide(image);
    opacity(mainProgram, subjectBoxes);
    styleReducer(optionBox8, artistsCounter, artistsCounter, optionBox5, lightningCounter, lightningCounter, optionBox4, designCounter, designCounter, optionBox3, themesCounter, themesCounter, optionBox2, locationCounter, locationCounter, optionBox1, subjectCounter, subjectCounter, optionBox6, colorsCounter, colorsCounter, optionBox7, cameraCounter, cameraCounter, optionBox9, imageCounter, imageCounter);
});
optionBox9.addEventListener("click", ()=>{
    resetDots();
    dot1.className = "dot-25 d1 dot";
    dot2.className = "dot-26 d2 dot";
    dot3.className = "dot-27 d3 dot";
    show(image);
    hide(subject);
    hide(location);
    hide(themes);
    hide(design);
    hide(lightning);
    hide(colors);
    hide(camera);
    hide(artists);
    hide(sub1);
    hide(sub2);
    hide(sub3);
    hide(loc1);
    hide(loc2);
    hide(loc3);
    hide(the1);
    hide(the2);
    hide(the3);
    hide(des1);
    hide(des2);
    hide(des3);
    hide(lig1);
    hide(lig2);
    hide(lig3);
    hide(col1);
    hide(col2);
    hide(col3);
    hide(cam1);
    hide(cam2);
    hide(cam3);
    hide(art1);
    hide(art2);
    hide(art3);
    hide(buttonBox);
    hide(subjectBoxes);
    opacity(mainProgram, subjectBoxes);
    styleReducer(optionBox9, imageCounter, imageCounter, optionBox5, lightningCounter, lightningCounter, optionBox4, designCounter, designCounter, optionBox3, themesCounter, themesCounter, optionBox2, locationCounter, locationCounter, optionBox1, subjectCounter, subjectCounter, optionBox6, colorsCounter, colorsCounter, optionBox7, cameraCounter, cameraCounter, optionBox8, artistsCounter, artistsCounter);
});
const styleReducer = (visible, counter, border, a1, a2, a3, b1, b2, b3, c1, c2, c3, d1, d2, d3, e1, e2, e3, f1, f2, f3, g1, g2, g3, h1, h2, h3)=>{
    visible.style.color = w;
    counter.style.color = w;
    border.style.border = wb;
    a1.style.color = g;
    a2.style.color = g;
    a3.style.border = gb;
    b1.style.color = g;
    b2.style.color = g;
    b3.style.border = gb;
    c1.style.color = g;
    c2.style.color = g;
    c3.style.border = gb;
    d1.style.color = g;
    d2.style.color = g;
    d3.style.border = gb;
    e1.style.color = g;
    e2.style.color = g;
    e3.style.border = gb;
    f1.style.color = g;
    f2.style.color = g;
    f3.style.border = gb;
    g1.style.color = g;
    g2.style.color = g;
    g3.style.border = gb;
    h1.style.color = g;
    h2.style.color = g;
    h3.style.border = gb;
};
//Render right content according to button index
const dotArray = document.querySelectorAll(".dot");
dotArray.forEach((dot)=>{
    dot.addEventListener("click", (e)=>{
        if (e.target.style.backgroundColor === "rgb(37, 49, 96)") return;
        let dotIndex = +e.target.classList[0].slice(4) - 1;
        menuTransitions(e);
        if (dotIndex === 0) {
            sub1.classList.remove("hidden");
            sub2.classList.add("hidden");
            sub3.classList.add("hidden");
        }
        if (dotIndex === 1) {
            sub1.classList.add("hidden");
            sub2.classList.remove("hidden");
            sub3.classList.add("hidden");
        }
        if (dotIndex === 2) {
            sub1.classList.add("hidden");
            sub2.classList.add("hidden");
            sub3.classList.remove("hidden");
        } //
        if (dotIndex === 3) {
            loc1.classList.remove("hidden");
            loc2.classList.add("hidden");
            loc3.classList.add("hidden");
        }
        if (dotIndex === 4) {
            loc1.classList.add("hidden");
            loc2.classList.remove("hidden");
            loc3.classList.add("hidden");
            sub3.classList.add("hidden");
        }
        if (dotIndex === 5) {
            sub3.classList.add("hidden");
            loc1.classList.add("hidden");
            loc2.classList.add("hidden");
            loc3.classList.remove("hidden");
        } //
        if (dotIndex === 6) {
            the1.classList.remove("hidden");
            the2.classList.add("hidden");
            the3.classList.add("hidden");
        }
        if (dotIndex === 7) {
            the2.classList.remove("hidden");
            the1.classList.add("hidden");
            the3.classList.add("hidden");
        }
        if (dotIndex === 8) {
            the1.classList.add("hidden");
            the2.classList.add("hidden");
            the3.classList.remove("hidden");
        } //
        if (dotIndex === 9) {
            des1.classList.remove("hidden");
            des2.classList.add("hidden");
            des3.classList.add("hidden");
        }
        if (dotIndex === 10) {
            des2.classList.remove("hidden");
            des1.classList.add("hidden");
            des3.classList.add("hidden");
        }
        if (dotIndex === 11) {
            des1.classList.add("hidden");
            des2.classList.add("hidden");
            des3.classList.remove("hidden");
        } //
        if (dotIndex === 12) {
            lig1.classList.remove("hidden");
            lig2.classList.add("hidden");
            lig3.classList.add("hidden");
        }
        if (dotIndex === 13) {
            lig2.classList.remove("hidden");
            lig1.classList.add("hidden");
            lig3.classList.add("hidden");
        }
        if (dotIndex === 14) {
            lig1.classList.add("hidden");
            lig2.classList.add("hidden");
            lig3.classList.remove("hidden");
        } //
        if (dotIndex === 15) {
            col1.classList.remove("hidden");
            col2.classList.add("hidden");
            col3.classList.add("hidden");
        }
        if (dotIndex === 16) {
            col2.classList.remove("hidden");
            col1.classList.add("hidden");
            col3.classList.add("hidden");
        }
        if (dotIndex === 17) {
            col1.classList.add("hidden");
            col2.classList.add("hidden");
            col3.classList.remove("hidden");
        } //
        if (dotIndex === 18) {
            cam1.classList.remove("hidden");
            cam2.classList.add("hidden");
            cam3.classList.add("hidden");
        }
        if (dotIndex === 19) {
            cam2.classList.remove("hidden");
            cam1.classList.add("hidden");
            cam3.classList.add("hidden");
        }
        if (dotIndex === 20) {
            cam1.classList.add("hidden");
            cam2.classList.add("hidden");
            cam3.classList.remove("hidden");
        } //
        if (dotIndex === 21) {
            art1.classList.remove("hidden");
            art2.classList.add("hidden");
            art3.classList.add("hidden");
        }
        if (dotIndex === 22) {
            art2.classList.remove("hidden");
            art1.classList.add("hidden");
            art3.classList.add("hidden");
        }
        if (dotIndex === 23) {
            art1.classList.add("hidden");
            art2.classList.add("hidden");
            art3.classList.remove("hidden");
        }
        menuTransitions(e);
    });
});
const menuTransitions = (e)=>{
    subjectBoxes.classList.add("fadeOut");
    setTimeout(()=>{
        subjectBoxes.classList.remove("fadeOut");
    }, 500);
    if (e.target.classList.contains("d1")) {
        dot1.style.backgroundColor = "rgb(37, 49, 96)";
        dot2.style.backgroundColor = "rgb(8, 11, 22)";
        dot3.style.backgroundColor = "rgb(8, 11, 22)";
    }
    if (e.target.classList.contains("d2")) {
        dot1.style.backgroundColor = "rgb(8, 11, 22)";
        dot2.style.backgroundColor = "rgb(37, 49, 96)";
        dot3.style.backgroundColor = "rgb(8, 11, 22)";
    }
    if (e.target.classList.contains("d3")) {
        dot1.style.backgroundColor = "rgb(8, 11, 22)";
        dot2.style.backgroundColor = "rgb(8, 11, 22)";
        dot3.style.backgroundColor = "rgb(37, 49, 96)";
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["kncrP","eMc9v"], "eMc9v", "parcelRequire1ccf")

//# sourceMappingURL=index.09b21932.js.map
