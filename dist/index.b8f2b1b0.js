"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global&&global;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e=function(e){const t=[];let r=0;for(let n=0;n<e.length;n++){let s=e.charCodeAt(n);s<128?t[r++]=s:s<2048?(t[r++]=s>>6|192,t[r++]=63&s|128):55296==(64512&s)&&n+1<e.length&&56320==(64512&e.charCodeAt(n+1))?(s=65536+((1023&s)<<10)+(1023&e.charCodeAt(++n)),t[r++]=s>>18|240,t[r++]=s>>12&63|128,t[r++]=s>>6&63|128,t[r++]=63&s|128):(t[r++]=s>>12|224,t[r++]=s>>6&63|128,t[r++]=63&s|128)}return t},t={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const r=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let t=0;t<e.length;t+=3){const s=e[t],i=t+1<e.length,o=i?e[t+1]:0,a=t+2<e.length,c=a?e[t+2]:0,l=s>>2,d=(3&s)<<4|o>>4;let u=(15&o)<<2|c>>6,h=63&c;a||(h=64,i||(u=64)),n.push(r[l],r[d],r[u],r[h])}return n.join("")},encodeString(t,r){return this.HAS_NATIVE_SUPPORT&&!r?btoa(t):this.encodeByteArray(e(t),r)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let r=0,n=0;for(;r<e.length;){const s=e[r++];if(s<128)t[n++]=String.fromCharCode(s);else if(s>191&&s<224){const i=e[r++];t[n++]=String.fromCharCode((31&s)<<6|63&i)}else if(s>239&&s<365){const i=((7&s)<<18|(63&e[r++])<<12|(63&e[r++])<<6|63&e[r++])-65536;t[n++]=String.fromCharCode(55296+(i>>10)),t[n++]=String.fromCharCode(56320+(1023&i))}else{const i=e[r++],o=e[r++];t[n++]=String.fromCharCode((15&s)<<12|(63&i)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const r=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let t=0;t<e.length;){const s=r[e.charAt(t++)],i=t<e.length?r[e.charAt(t)]:0;++t;const o=t<e.length?r[e.charAt(t)]:64;++t;const a=t<e.length?r[e.charAt(t)]:64;if(++t,null==s||null==i||null==o||null==a)throw Error();const c=s<<2|i>>4;if(n.push(c),64!==o){const e=i<<4&240|o>>2;if(n.push(e),64!==a){const e=o<<6&192|a;n.push(e)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},r=function(r){return function(r){const n=e(r);return t.encodeByteArray(n,!0)}(r).replace(/\./g,"")},n=function(e){try{return t.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class s{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,r))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function i(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function o(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function a(){const e=i();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}class c extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name="FirebaseError",Object.setPrototypeOf(this,c.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,l.prototype.create)}}class l{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},n=`${this.service}/${e}`,s=this.errors[e],i=s?function(e,t){return e.replace(d,((e,r)=>{const n=t[r];return null!=n?String(n):`<${r}?>`}))}(s,r):"Error",o=`${this.serviceName}: ${i} (${n}).`;return new c(n,o,r)}}const d=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function h(e,t){if(e===t)return!0;const r=Object.keys(e),n=Object.keys(t);for(const s of r){if(!n.includes(s))return!1;const r=e[s],i=t[s];if(p(r)&&p(i)){if(!h(r,i))return!1}else if(r!==i)return!1}for(const e of n)if(!r.includes(e))return!1;return!0}function p(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function m(e){const t=[];for(const[r,n]of Object.entries(e))Array.isArray(n)?n.forEach((e=>{t.push(encodeURIComponent(r)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(r)+"="+encodeURIComponent(n));return t.length?"&"+t.join("&"):""}function f(e){const t={};return e.replace(/^\?/,"").split("&").forEach((e=>{if(e){const[r,n]=e.split("=");t[decodeURIComponent(r)]=decodeURIComponent(n)}})),t}function g(e){const t=e.indexOf("?");if(!t)return"";const r=e.indexOf("#",t);return e.substring(t,r>0?r:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v(e,t){const r=new y(e,t);return r.subscribe.bind(r)}class y{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,r){let n;if(void 0===e&&void 0===t&&void 0===r)throw new Error("Missing Observer.");n=function(e,t){if("object"!=typeof e||null===e)return!1;for(const r of t)if(r in e&&"function"==typeof e[r])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:r},void 0===n.next&&(n.next=_),void 0===n.error&&(n.error=_),void 0===n.complete&&(n.complete=_);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?n.error(this.finalError):n.complete()}catch(e){}})),this.observers.push(n),s}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function _(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function b(e){return e&&e._delegate?e._delegate:e}class w{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class I{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new s;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:t});r&&e.resolve(r)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),n=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(r)&&!this.shouldAutoInitialize()){if(n)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:r})}catch(e){if(n)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});t.resolve(e)}catch(e){}}}}clearInstance(e="[DEFAULT]"){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e="[DEFAULT]"){return this.instances.has(e)}getOptions(e="[DEFAULT]"){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const n=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[e,t]of this.instancesDeferred.entries()){r===this.normalizeInstanceIdentifier(e)&&t.resolve(n)}return n}onInit(e,t){var r;const n=this.normalizeInstanceIdentifier(t),s=null!==(r=this.onInitCallbacks.get(n))&&void 0!==r?r:new Set;s.add(e),this.onInitCallbacks.set(n,s);const i=this.instances.get(n);return i&&e(i,n),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const n of r)try{n(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:(n=e,"[DEFAULT]"===n?void 0:n),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch(e){}var n;return r||null}normalizeInstanceIdentifier(e="[DEFAULT]"){return this.component?this.component.multipleInstances?e:"[DEFAULT]":e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class k{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new I(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S=[];var T,E;(E=T||(T={}))[E.DEBUG=0]="DEBUG",E[E.VERBOSE=1]="VERBOSE",E[E.INFO=2]="INFO",E[E.WARN=3]="WARN",E[E.ERROR=4]="ERROR",E[E.SILENT=5]="SILENT";const R={debug:T.DEBUG,verbose:T.VERBOSE,info:T.INFO,warn:T.WARN,error:T.ERROR,silent:T.SILENT},C=T.INFO,L={[T.DEBUG]:"log",[T.VERBOSE]:"log",[T.INFO]:"info",[T.WARN]:"warn",[T.ERROR]:"error"},O=(e,t,...r)=>{if(t<e.logLevel)return;const n=(new Date).toISOString(),s=L[t];if(!s)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[s](`[${n}]  ${e.name}:`,...r)};class N{constructor(e){this.name=e,this._logLevel=C,this._logHandler=O,this._userLogHandler=null,S.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in T))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?R[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,T.DEBUG,...e),this._logHandler(this,T.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,T.VERBOSE,...e),this._logHandler(this,T.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,T.INFO,...e),this._logHandler(this,T.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,T.WARN,...e),this._logHandler(this,T.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,T.ERROR,...e),this._logHandler(this,T.ERROR,...e)}}let A,P;const D=new WeakMap,x=new WeakMap,M=new WeakMap,U=new WeakMap,q=new WeakMap;let F={get(e,t,r){if(e instanceof IDBTransaction){if("done"===t)return x.get(e);if("objectStoreNames"===t)return e.objectStoreNames||M.get(e);if("store"===t)return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return B(e[t])},set:(e,t,r)=>(e[t]=r,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function j(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(P||(P=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(V(this),t),B(D.get(this))}:function(...t){return B(e.apply(V(this),t))}:function(t,...r){const n=e.call(V(this),t,...r);return M.set(n,t.sort?t.sort():[t]),B(n)}}function H(e){return"function"==typeof e?j(e):(e instanceof IDBTransaction&&function(e){if(x.has(e))return;const t=new Promise(((t,r)=>{const n=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",i),e.removeEventListener("abort",i)},s=()=>{t(),n()},i=()=>{r(e.error||new DOMException("AbortError","AbortError")),n()};e.addEventListener("complete",s),e.addEventListener("error",i),e.addEventListener("abort",i)}));x.set(e,t)}(e),t=e,(A||(A=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((e=>t instanceof e))?new Proxy(e,F):e);var t}function B(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,r)=>{const n=()=>{e.removeEventListener("success",s),e.removeEventListener("error",i)},s=()=>{t(B(e.result)),n()},i=()=>{r(e.error),n()};e.addEventListener("success",s),e.addEventListener("error",i)}));return t.then((t=>{t instanceof IDBCursor&&D.set(t,e)})).catch((()=>{})),q.set(t,e),t}(e);if(U.has(e))return U.get(e);const t=H(e);return t!==e&&(U.set(e,t),q.set(t,e)),t}const V=e=>q.get(e);function z(e,t,{blocked:r,upgrade:n,blocking:s,terminated:i}={}){const o=indexedDB.open(e,t),a=B(o);return n&&o.addEventListener("upgradeneeded",(e=>{n(B(o.result),e.oldVersion,e.newVersion,B(o.transaction))})),r&&o.addEventListener("blocked",(()=>r())),a.then((e=>{i&&e.addEventListener("close",(()=>i())),s&&e.addEventListener("versionchange",(()=>s()))})).catch((()=>{})),a}const $=["get","getKey","getAll","getAllKeys","count"],W=["put","add","delete","clear"],K=new Map;function G(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(K.get(t))return K.get(t);const r=t.replace(/FromIndex$/,""),n=t!==r,s=W.includes(r);if(!(r in(n?IDBIndex:IDBObjectStore).prototype)||!s&&!$.includes(r))return;const i=async function(e,...t){const i=this.transaction(e,s?"readwrite":"readonly");let o=i.store;return n&&(o=o.index(t.shift())),(await Promise.all([o[r](...t),s&&i.done]))[0]};return K.set(t,i),i}F=(e=>({...e,get:(t,r,n)=>G(t,r)||e.get(t,r,n),has:(t,r)=>!!G(t,r)||e.has(t,r)}))(F);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class J{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const X=new N("@firebase/app"),Y={"@firebase/app":"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},Z=new Map,Q=new Map;function ee(e,t){try{e.container.addComponent(t)}catch(r){X.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,r)}}function te(e){const t=e.name;if(Q.has(t))return X.debug(`There were multiple attempts to register component ${t}.`),!1;Q.set(t,e);for(const t of Z.values())ee(t,e);return!0}function re(e,t){const r=e.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ne=new l("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class se{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new w("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ne.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ie(e="[DEFAULT]"){const t=Z.get(e);if(!t)throw ne.create("no-app",{appName:e});return t}function oe(e,t,r){var n;let s=null!==(n=Y[e])&&void 0!==n?n:e;r&&(s+=`-${r}`);const i=s.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const e=[`Unable to register library "${s}" with version "${t}":`];return i&&e.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void X.warn(e.join(" "))}te(new w(`${s}-version`,(()=>({library:s,version:t})),"VERSION"))}let ae=null;function ce(){return ae||(ae=z("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)e.createObjectStore("firebase-heartbeat-store")}}).catch((e=>{throw ne.create("idb-open",{originalErrorMessage:e.message})}))),ae}async function le(e,t){var r;try{const r=(await ce()).transaction("firebase-heartbeat-store","readwrite"),n=r.objectStore("firebase-heartbeat-store");return await n.put(t,de(e)),r.done}catch(e){if(e instanceof c)X.warn(e.message);else{const t=ne.create("idb-set",{originalErrorMessage:null===(r=e)||void 0===r?void 0:r.message});X.warn(t.message)}}}function de(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new pe(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=he();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some((e=>e.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=he(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){const r=[];let n=e.slice();for(const s of e){const e=r.find((e=>e.agent===s.agent));if(e){if(e.dates.push(s.date),me(r)>t){e.dates.pop();break}}else if(r.push({agent:s.agent,dates:[s.date]}),me(r)>t){r.pop();break}n=n.slice(1)}return{heartbeatsToSend:r,unsentEntries:n}}(this._heartbeatsCache.heartbeats),s=r(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function he(){return(new Date).toISOString().substring(0,10)}class pe{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return"object"==typeof indexedDB&&new Promise(((e,t)=>{try{let r=!0;const n="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(n);s.onsuccess=()=>{s.result.close(),r||self.indexedDB.deleteDatabase(n),e(!0)},s.onupgradeneeded=()=>{r=!1},s.onerror=()=>{var e;t((null===(e=s.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){return await async function(e){var t;try{return(await ce()).transaction("firebase-heartbeat-store").objectStore("firebase-heartbeat-store").get(de(e))}catch(e){if(e instanceof c)X.warn(e.message);else{const r=ne.create("idb-get",{originalErrorMessage:null===(t=e)||void 0===t?void 0:t.message});X.warn(r.message)}}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const r=await this.read();return le(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const r=await this.read();return le(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}}}function me(e){return r(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var fe;fe="",te(new w("platform-logger",(e=>new J(e)),"PRIVATE")),te(new w("heartbeat",(e=>new ue(e)),"PRIVATE")),oe("@firebase/app","0.7.31",fe),oe("@firebase/app","0.7.31","esm2017"),oe("fire-js","");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
oe("firebase","9.9.3","app");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ge extends c{constructor(e,t){super(ve(e),`Firebase Storage: ${t} (${ve(e)})`),this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ge.prototype)}_codeEquals(e){return ve(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}}function ve(e){return"storage/"+e}function ye(){return new ge("unknown","An unknown error occurred, please check the error payload for server response.")}function _e(){return new ge("canceled","User canceled the upload/download.")}function be(e){return new ge("invalid-argument",e)}function we(){return new ge("app-deleted","The Firebase app was deleted.")}function Ie(e){throw new ge("internal-error","Internal error: "+e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=ke.makeFromUrl(e,t)}catch(t){return new ke(e,"")}if(""===r.path)return r;throw new ge("invalid-default-bucket","Invalid default bucket '"+e+"'.")}static makeFromUrl(e,t){let r=null;const n="([A-Za-z0-9.\\-_]+)";const s=new RegExp("^gs://"+n+"(/(.*))?$","i");function i(e){e.path_=decodeURIComponent(e.path)}const o=t.replace(/[.]/g,"\\."),a=[{regex:s,indices:{bucket:1,path:3},postModify:function(e){"/"===e.path.charAt(e.path.length-1)&&(e.path_=e.path_.slice(0,-1))}},{regex:new RegExp(`^https?://${o}/v[A-Za-z0-9_]+/b/${n}/o(/([^?#]*).*)?$`,"i"),indices:{bucket:1,path:3},postModify:i},{regex:new RegExp(`^https?://${"firebasestorage.googleapis.com"===t?"(?:storage.googleapis.com|storage.cloud.google.com)":t}/${n}/([^?#]*)`,"i"),indices:{bucket:1,path:2},postModify:i}];for(let t=0;t<a.length;t++){const n=a[t],s=n.regex.exec(e);if(s){const e=s[n.indices.bucket];let t=s[n.indices.path];t||(t=""),r=new ke(e,t),n.postModify(r);break}}if(null==r)throw function(e){return new ge("invalid-url","Invalid URL '"+e+"'.")}(e);return r}}class Se{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Te(e){return"string"==typeof e||e instanceof String}function Ee(e,t,r,n){if(n<t)throw be(`Invalid value for '${e}'. Expected ${t} or greater.`);if(n>r)throw be(`Invalid value for '${e}'. Expected ${r} or less.`)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Re(e,t,r){let n=t;return null==r&&(n=`https://${t}`),`${r}://${n}/v0${e}`}function Ce(e){const t=encodeURIComponent;let r="?";for(const n in e)if(e.hasOwnProperty(n)){r=r+(t(n)+"="+t(e[n]))+"&"}return r=r.slice(0,-1),r}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Le,Oe;(Oe=Le||(Le={}))[Oe.NO_ERROR=0]="NO_ERROR",Oe[Oe.NETWORK_ERROR=1]="NETWORK_ERROR",Oe[Oe.ABORT=2]="ABORT";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ne{constructor(e,t,r,n,s,i,o,a,c,l,d){this.url_=e,this.method_=t,this.headers_=r,this.body_=n,this.successCodes_=s,this.additionalRetryCodes_=i,this.callback_=o,this.errorCallback_=a,this.timeout_=c,this.progressCallback_=l,this.connectionFactory_=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise(((e,t)=>{this.resolve_=e,this.reject_=t,this.start_()}))}start_(){const e=(e,t)=>{const r=this.resolve_,n=this.reject_,s=t.connection;if(t.wasSuccessCode)try{const e=this.callback_(s,s.getResponse());void 0!==e?r(e):r()}catch(e){n(e)}else if(null!==s){const e=ye();e.serverResponse=s.getErrorText(),this.errorCallback_?n(this.errorCallback_(s,e)):n(e)}else if(t.canceled){n(this.appDelete_?we():_e())}else{n(new ge("retry-limit-exceeded","Max retry time for operation exceeded, please try again."))}};this.canceled_?e(0,new Ae(!1,null,!0)):this.backoffId_=function(e,t,r){let n=1,s=null,i=null,o=!1,a=0;function c(){return 2===a}let l=!1;function d(...e){l||(l=!0,t.apply(null,e))}function u(t){s=setTimeout((()=>{s=null,e(p,c())}),t)}function h(){i&&clearTimeout(i)}function p(e,...t){if(l)return void h();if(e)return h(),void d.call(null,e,...t);if(c()||o)return h(),void d.call(null,e,...t);let r;n<64&&(n*=2),1===a?(a=2,r=0):r=1e3*(n+Math.random()),u(r)}let m=!1;function f(e){m||(m=!0,h(),l||(null!==s?(e||(a=2),clearTimeout(s),u(0)):e||(a=1)))}return u(0),i=setTimeout((()=>{o=!0,f(!0)}),r),f}(((e,t)=>{if(t)return void e(!1,new Ae(!1,null,!0));const r=this.connectionFactory_();this.pendingConnection_=r;const n=e=>{const t=e.loaded,r=e.lengthComputable?e.total:-1;null!==this.progressCallback_&&this.progressCallback_(t,r)};null!==this.progressCallback_&&r.addUploadProgressListener(n),r.send(this.url_,this.method_,this.body_,this.headers_).then((()=>{null!==this.progressCallback_&&r.removeUploadProgressListener(n),this.pendingConnection_=null;const t=r.getErrorCode()===Le.NO_ERROR,s=r.getStatus();if(!t||this.isRetryStatusCode_(s)){const t=r.getErrorCode()===Le.ABORT;return void e(!1,new Ae(!1,null,t))}const i=-1!==this.successCodes_.indexOf(s);e(!0,new Ae(i,r))}))}),e,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,null!==this.backoffId_&&(0,this.backoffId_)(!1),null!==this.pendingConnection_&&this.pendingConnection_.abort()}isRetryStatusCode_(e){const t=e>=500&&e<600,r=-1!==[408,429].indexOf(e),n=-1!==this.additionalRetryCodes_.indexOf(e);return t||r||n}}class Ae{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Pe(e){let t;try{t=JSON.parse(e)}catch(e){return null}return"object"!=typeof(r=t)||Array.isArray(r)?null:t;var r}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function De(e){const t=e.lastIndexOf("/",e.length-2);return-1===t?e:e.slice(t+1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xe(e,t){return t}class Me{constructor(e,t,r,n){this.server=e,this.local=t||e,this.writable=!!r,this.xform=n||xe}}let Ue=null;function qe(){if(Ue)return Ue;const e=[];e.push(new Me("bucket")),e.push(new Me("generation")),e.push(new Me("metageneration")),e.push(new Me("name","fullPath",!0));const t=new Me("name");t.xform=function(e,t){return function(e){return!Te(e)||e.length<2?e:De(e)}(t)},e.push(t);const r=new Me("size");return r.xform=function(e,t){return void 0!==t?Number(t):t},e.push(r),e.push(new Me("timeCreated")),e.push(new Me("updated")),e.push(new Me("md5Hash",null,!0)),e.push(new Me("cacheControl",null,!0)),e.push(new Me("contentDisposition",null,!0)),e.push(new Me("contentEncoding",null,!0)),e.push(new Me("contentLanguage",null,!0)),e.push(new Me("contentType",null,!0)),e.push(new Me("metadata","customMetadata",!0)),Ue=e,Ue}function Fe(e,t,r){const n={type:"file"},s=r.length;for(let e=0;e<s;e++){const s=r[e];n[s.local]=s.xform(n,t[s.server])}return function(e,t){Object.defineProperty(e,"ref",{get:function(){const r=e.bucket,n=e.fullPath,s=new ke(r,n);return t._makeStorageReference(s)}})}(n,e),n}function je(e,t,r){const n=Pe(t);if(null===n)return null;return Fe(e,n,r)}class He{constructor(e,t,r,n){this.url=e,this.method=t,this.handler=r,this.timeout=n,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Be(e){if(!e)throw ye()}function Ve(e,t){return function(r,n){const s=je(e,n,t);return Be(null!==s),function(e,t,r,n){const s=Pe(t);if(null===s)return null;if(!Te(s.downloadTokens))return null;const i=s.downloadTokens;if(0===i.length)return null;const o=encodeURIComponent;return i.split(",").map((t=>{const s=e.bucket,i=e.fullPath;return Re("/b/"+o(s)+"/o/"+o(i),r,n)+Ce({alt:"media",token:t})}))[0]}(s,n,e.host,e._protocol)}}function ze(e){return function(t,r){let n;var s,i;return 401===t.getStatus()?n=t.getErrorText().includes("Firebase App Check token is invalid")?new ge("unauthorized-app","This app does not have permission to access Firebase Storage on this project."):new ge("unauthenticated","User is not authenticated, please authenticate using Firebase Authentication and try again."):402===t.getStatus()?(i=e.bucket,n=new ge("quota-exceeded","Quota for bucket '"+i+"' exceeded, please view quota on https://firebase.google.com/pricing/.")):403===t.getStatus()?(s=e.path,n=new ge("unauthorized","User does not have permission to access '"+s+"'.")):n=r,n.serverResponse=r.serverResponse,n}}function $e(e){const t=ze(e);return function(r,n){let s=t(r,n);var i;return 404===r.getStatus()&&(i=e.path,s=new ge("object-not-found","Object '"+i+"' does not exist.")),s.serverResponse=n.serverResponse,s}}class We{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Le.NO_ERROR,this.sendPromise_=new Promise((e=>{this.xhr_.addEventListener("abort",(()=>{this.errorCode_=Le.ABORT,e()})),this.xhr_.addEventListener("error",(()=>{this.errorCode_=Le.NETWORK_ERROR,e()})),this.xhr_.addEventListener("load",(()=>{e()}))}))}send(e,t,r,n){if(this.sent_)throw Ie("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),void 0!==n)for(const e in n)n.hasOwnProperty(e)&&this.xhr_.setRequestHeader(e,n[e].toString());return void 0!==r?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Ie("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Ie("cannot .getStatus() before sending");try{return this.xhr_.status}catch(e){return-1}}getResponse(){if(!this.sent_)throw Ie("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Ie("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",e)}}class Ke extends We{initXhr(){this.xhr_.responseType="text"}}function Ge(){return new Ke}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Je{constructor(e,t){this._service=e,this._location=t instanceof ke?t:ke.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Je(e,t)}get root(){const e=new ke(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return De(this._location.path)}get storage(){return this._service}get parent(){const e=function(e){if(0===e.length)return null;const t=e.lastIndexOf("/");return-1===t?"":e.slice(0,t)}(this._location.path);if(null===e)return null;const t=new ke(this._location.bucket,e);return new Je(this._service,t)}_throwIfRoot(e){if(""===this._location.path)throw function(e){return new ge("invalid-root-operation","The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}(e)}}function Xe(e){e._throwIfRoot("getDownloadURL");const t=function(e,t,r){const n=Re(t.fullServerUrl(),e.host,e._protocol),s=e.maxOperationRetryTime,i=new He(n,"GET",Ve(e,r),s);return i.errorHandler=$e(t),i}(e.storage,e._location,qe());return e.storage.makeRequestWithTokens(t,Ge).then((e=>{if(null===e)throw new ge("no-download-url","The given file does not have any download URLs.");return e}))}function Ye(e,t){const r=function(e,t){const r=t.split("/").filter((e=>e.length>0)).join("/");return 0===e.length?r:e+"/"+r}(e._location.path,t),n=new ke(e._location.bucket,r);return new Je(e.storage,n)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ze(e,t){if(e instanceof tt){const r=e;if(null==r._bucket)throw new ge("no-default-bucket","No default bucket found. Did you set the 'storageBucket' property when initializing the app?");const n=new Je(r,r._bucket);return null!=t?Ze(n,t):n}return void 0!==t?Ye(e,t):e}function Qe(e,t){if(t&&/^[A-Za-z]+:\/\//.test(t)){if(e instanceof tt)return new Je(e,t);throw be("To use ref(service, url), the first argument must be a Storage instance.")}return Ze(e,t)}function et(e,t){const r=null==t?void 0:t.storageBucket;return null==r?null:ke.makeFromBucketSpec(r,e)}class tt{constructor(e,t,r,n,s){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=n,this._firebaseVersion=s,this._bucket=null,this._host="firebasestorage.googleapis.com",this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=12e4,this._maxUploadRetryTime=6e5,this._requests=new Set,this._bucket=null!=n?ke.makeFromBucketSpec(n,this._host):et(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,null!=this._url?this._bucket=ke.makeFromBucketSpec(this._url,e):this._bucket=et(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Ee("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Ee("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(null!==t)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});if(e){return(await e.getToken()).token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach((e=>e.cancel())),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Je(this,e)}_makeRequest(e,t,r,n){if(this._deleted)return new Se(we());{const s=function(e,t,r,n,s,i){const o=Ce(e.urlParams),a=e.url+o,c=Object.assign({},e.headers);return function(e,t){t&&(e["X-Firebase-GMPID"]=t)}(c,t),function(e,t){null!==t&&t.length>0&&(e.Authorization="Firebase "+t)}(c,r),function(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(null!=t?t:"AppManager")}(c,i),function(e,t){null!==t&&(e["X-Firebase-AppCheck"]=t)}(c,n),new Ne(a,e.method,c,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,s)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,this._appId,r,n,t,this._firebaseVersion);return this._requests.add(s),s.getPromise().then((()=>this._requests.delete(s)),(()=>this._requests.delete(s))),s}}async makeRequestWithTokens(e,t){const[r,n]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,n).getPromise()}}function rt(e=ie(),t){return re(e=b(e),"storage").getImmediate({identifier:t})}function nt(e,{instanceIdentifier:t}){const r=e.getProvider("app").getImmediate(),n=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return new tt(r,n,s,t,"9.9.3")}te(new w("storage",nt,"PUBLIC").setMultipleInstances(!0)),oe("@firebase/storage","0.9.9",""),oe("@firebase/storage","0.9.9","esm2017");function st(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]])}return r}Object.create;Object.create;function it(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ot=it,at=new l("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),ct=new N("@firebase/auth");function lt(e,...t){ct.logLevel<=T.ERROR&&ct.error(`Auth (9.9.3): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dt(e,...t){throw pt(e,...t)}function ut(e,...t){return pt(e,...t)}function ht(e,t,r){const n=Object.assign(Object.assign({},ot()),{[t]:r});return new l("auth","Firebase",n).create(t,{appName:e.name})}function pt(e,...t){if("string"!=typeof e){const r=t[0],n=[...t.slice(1)];return n[0]&&(n[0].appName=e.name),e._errorFactory.create(r,...n)}return at.create(e,...t)}function mt(e,t,...r){if(!e)throw pt(t,...r)}function ft(e){const t="INTERNAL ASSERTION FAILED: "+e;throw lt(t),new Error(t)}function gt(e,t){e||ft(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vt=new Map;function yt(e){gt(e instanceof Function,"Expected a class definition");let t=vt.get(e);return t?(gt(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,vt.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function _t(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function bt(){return"http:"===wt()||"https:"===wt()}function wt(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function It(){return!("undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(bt()||o()||"connection"in navigator))||navigator.onLine}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class kt{constructor(e,t){this.shortDelay=e,this.longDelay=t,gt(t>e,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(i())||"object"==typeof navigator&&"ReactNative"===navigator.product}get(){return It()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function St(e,t){gt(e.emulator,"Emulator should always be set here");const{url:r}=e.emulator;return t?`${r}${t.startsWith("/")?t.slice(1):t}`:r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void ft("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void ft("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void ft("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Et={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},Rt=new kt(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ct(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Lt(e,t,r,n,s={}){return Ot(e,s,(async()=>{let s={},i={};n&&("GET"===t?i=n:s={body:JSON.stringify(n)});const o=m(Object.assign({key:e.config.apiKey},i)).slice(1),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode),Tt.fetch()(At(e,e.config.apiHost,r,o),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},s))}))}async function Ot(e,t,r){e._canInitEmulator=!1;const n=Object.assign(Object.assign({},Et),t);try{const t=new Pt(e),s=await Promise.race([r(),t.promise]);t.clearNetworkTimeout();const i=await s.json();if("needConfirmation"in i)throw Dt(e,"account-exists-with-different-credential",i);if(s.ok&&!("errorMessage"in i))return i;{const t=s.ok?i.errorMessage:i.error.message,[r,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===r)throw Dt(e,"credential-already-in-use",i);if("EMAIL_EXISTS"===r)throw Dt(e,"email-already-in-use",i);if("USER_DISABLED"===r)throw Dt(e,"user-disabled",i);const a=n[r]||r.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw ht(e,a,o);dt(e,a)}}catch(t){if(t instanceof c)throw t;dt(e,"network-request-failed")}}async function Nt(e,t,r,n,s={}){const i=await Lt(e,t,r,n,s);return"mfaPendingCredential"in i&&dt(e,"multi-factor-auth-required",{_serverResponse:i}),i}function At(e,t,r,n){const s=`${t}${r}?${n}`;return e.config.emulator?St(e.config,s):`${e.config.apiScheme}://${s}`}class Pt{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(ut(this.auth,"network-request-failed"))),Rt.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function Dt(e,t,r){const n={appName:e.name};r.email&&(n.email=r.email),r.phoneNumber&&(n.phoneNumber=r.phoneNumber);const s=ut(e,t,n);return s.customData._tokenResponse=r,s}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function xt(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mt(e){return 1e3*Number(e)}function Ut(e){var t;const[r,s,i]=e.split(".");if(void 0===r||void 0===s||void 0===i)return lt("JWT malformed, contained fewer than 3 sections"),null;try{const e=n(s);return e?JSON.parse(e):(lt("Failed to decode base64 JWT payload"),null)}catch(e){return lt("Caught error parsing JWT payload as JSON",null===(t=e)||void 0===t?void 0:t.toString()),null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function qt(e,t,r=!1){if(r)return t;try{return await t}catch(t){throw t instanceof c&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class Ft{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===(null===(e=t)||void 0===e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=xt(this.lastLoginAt),this.creationTime=xt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ht(e){var t;const r=e.auth,n=await e.getIdToken(),s=await qt(e,async function(e,t){return Lt(e,"POST","/v1/accounts:lookup",t)}(r,{idToken:n}));mt(null==s?void 0:s.users.length,r,"internal-error");const i=s.users[0];e._notifyReloadListener(i);const o=(null===(t=i.providerUserInfo)||void 0===t?void 0:t.length)?i.providerUserInfo.map((e=>{var{providerId:t}=e,r=st(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})):[];const a=(c=e.providerData,l=o,[...c.filter((e=>!l.some((t=>t.providerId===e.providerId)))),...l]);var c,l;const d=e.isAnonymous,u=!(e.email&&i.passwordHash||(null==a?void 0:a.length)),h=!!d&&u,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new jt(i.createdAt,i.lastLoginAt),isAnonymous:h};Object.assign(e,p)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Bt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){mt(e.idToken,"internal-error"),mt(void 0!==e.idToken,"internal-error"),mt(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=Ut(e);return mt(t,"internal-error"),mt(void 0!==t.exp,"internal-error"),mt(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return mt(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:n,expiresIn:s}=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e,t){const r=await Ot(e,{},(async()=>{const r=m({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:n,apiKey:s}=e.config,i=At(e,n,"/v1/token",`key=${s}`),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",Tt.fetch()(i,{method:"POST",headers:o,body:r})}));return{accessToken:r.access_token,expiresIn:r.expires_in,refreshToken:r.refresh_token}}(e,t);this.updateTokensAndExpiration(r,n,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*r}static fromJSON(e,t){const{refreshToken:r,accessToken:n,expirationTime:s}=t,i=new Bt;return r&&(mt("string"==typeof r,"internal-error",{appName:e}),i.refreshToken=r),n&&(mt("string"==typeof n,"internal-error",{appName:e}),i.accessToken=n),s&&(mt("number"==typeof s,"internal-error",{appName:e}),i.expirationTime=s),i}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Bt,this.toJSON())}_performRefresh(){return ft("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vt(e,t){mt("string"==typeof e||void 0===e,"internal-error",{appName:t})}class zt{constructor(e){var{uid:t,auth:r,stsTokenManager:n}=e,s=st(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Ft(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new jt(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await qt(this,this.stsTokenManager.getToken(this.auth,e));return mt(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const r=b(e),n=await r.getIdToken(t),s=Ut(n);mt(s&&s.exp&&s.auth_time&&s.iat,r.auth,"internal-error");const i="object"==typeof s.firebase?s.firebase:void 0,o=null==i?void 0:i.sign_in_provider;return{claims:s,token:n,authTime:xt(Mt(s.auth_time)),issuedAtTime:xt(Mt(s.iat)),expirationTime:xt(Mt(s.exp)),signInProvider:o||null,signInSecondFactor:(null==i?void 0:i.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=b(e);await Ht(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(mt(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new zt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){mt(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Ht(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await qt(this,async function(e,t){return Lt(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,n,s,i,o,a,c,l;const d=null!==(r=t.displayName)&&void 0!==r?r:void 0,u=null!==(n=t.email)&&void 0!==n?n:void 0,h=null!==(s=t.phoneNumber)&&void 0!==s?s:void 0,p=null!==(i=t.photoURL)&&void 0!==i?i:void 0,m=null!==(o=t.tenantId)&&void 0!==o?o:void 0,f=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(c=t.createdAt)&&void 0!==c?c:void 0,v=null!==(l=t.lastLoginAt)&&void 0!==l?l:void 0,{uid:y,emailVerified:_,isAnonymous:b,providerData:w,stsTokenManager:I}=t;mt(y&&I,e,"internal-error");const k=Bt.fromJSON(this.name,I);mt("string"==typeof y,e,"internal-error"),Vt(d,e.name),Vt(u,e.name),mt("boolean"==typeof _,e,"internal-error"),mt("boolean"==typeof b,e,"internal-error"),Vt(h,e.name),Vt(p,e.name),Vt(m,e.name),Vt(f,e.name),Vt(g,e.name),Vt(v,e.name);const S=new zt({uid:y,auth:e,email:u,emailVerified:_,displayName:d,isAnonymous:b,photoURL:p,phoneNumber:h,tenantId:m,stsTokenManager:k,createdAt:g,lastLoginAt:v});return w&&Array.isArray(w)&&(S.providerData=w.map((e=>Object.assign({},e)))),f&&(S._redirectEventId=f),S}static async _fromIdTokenResponse(e,t,r=!1){const n=new Bt;n.updateFromServerResponse(t);const s=new zt({uid:t.localId,auth:e,stsTokenManager:n,isAnonymous:r});return await Ht(s),s}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}$t.type="NONE";const Wt=$t;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kt(e,t,r){return`firebase:${e}:${t}:${r}`}class Gt{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:n,name:s}=this.auth;this.fullUserKey=Kt(this.userKey,n.apiKey,s),this.fullPersistenceKey=Kt("persistence",n.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?zt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Gt(yt(Wt),e,r);const n=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let s=n[0]||yt(Wt);const i=Kt(r,e.config.apiKey,e.name);let o=null;for(const r of t)try{const t=await r._get(i);if(t){const n=zt._fromJSON(e,t);r!==s&&(o=n),s=r;break}}catch(e){}const a=n.filter((e=>e._shouldAllowMigration));return s._shouldAllowMigration&&a.length?(s=a[0],o&&await s._set(i,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==s)try{await e._remove(i)}catch(e){}}))),new Gt(s,e,r)):new Gt(s,e,r)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jt(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Qt(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Xt(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(tr(t))return"Blackberry";if(rr(t))return"Webos";if(Yt(t))return"Safari";if((t.includes("chrome/")||Zt(t))&&!t.includes("edge/"))return"Chrome";if(er(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(t);if(2===(null==r?void 0:r.length))return r[1]}return"Other"}function Xt(e=i()){return/firefox\//i.test(e)}function Yt(e=i()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Zt(e=i()){return/crios\//i.test(e)}function Qt(e=i()){return/iemobile/i.test(e)}function er(e=i()){return/android/i.test(e)}function tr(e=i()){return/blackberry/i.test(e)}function rr(e=i()){return/webos/i.test(e)}function nr(e=i()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function sr(){return a()&&10===document.documentMode}function ir(e=i()){return nr(e)||er(e)||rr(e)||tr(e)||/windows phone/i.test(e)||Qt(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function or(e,t=[]){let r;switch(e){case"Browser":r=Jt(i());break;case"Worker":r=`${Jt(i())}-${e}`;break;default:r=e}return`${r}/JsCore/9.9.3/${t.length?t.join(","):"FirebaseCore-web"}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=t=>new Promise(((r,n)=>{try{r(e(t))}catch(e){n(e)}}));r.onAbort=t,this.queue.push(r);const n=this.queue.length-1;return()=>{this.queue[n]=()=>Promise.resolve()}}async runMiddleware(e){var t;if(this.auth.currentUser===e)return;const r=[];try{for(const t of this.queue)await t(e),t.onAbort&&r.push(t.onAbort)}catch(e){r.reverse();for(const e of r)try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===(t=e)||void 0===t?void 0:t.message})}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(e,t,r){this.app=e,this.heartbeatServiceProvider=t,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new dr(this),this.idTokenSubscription=new dr(this),this.beforeStateQueue=new ar(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=at,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=yt(t)),this._initializationPromise=this.queue((async()=>{var r,n;if(!this._deleted&&(this.persistenceManager=await Gt.create(this,e),!this._deleted)){if(null===(r=this._popupRedirectResolver)||void 0===r?void 0:r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(n=this.currentUser)||void 0===n?void 0:n.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const r=await this.assertedPersistence.getCurrentUser();let n=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,i=null==n?void 0:n._redirectEventId,o=await this.tryRedirectSignIn(e);r&&r!==i||!(null==o?void 0:o.user)||(n=o.user,s=!0)}if(!n)return this.directlySetCurrentUser(null);if(!n._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(n)}catch(e){n=r,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(e)))}return n?this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}return mt(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){var t;try{await Ht(e)}catch(e){if("auth/network-request-failed"!==(null===(t=e)||void 0===t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?b(e):null;return t&&mt(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&mt(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(yt(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new l("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return null===e?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&yt(e)||this._popupRedirectResolver;mt(t,this,"argument-error"),this.redirectPersistenceManager=await Gt.create(this,[yt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(r=this.redirectUser)||void 0===r?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,n){if(this._deleted)return()=>{};const s="function"==typeof t?t:t.next.bind(t),i=this._isInitialized?Promise.resolve():this._initializationPromise;return mt(i,this,"internal-error"),i.then((()=>s(this.currentUser))),"function"==typeof t?e.addObserver(t,r,n):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return mt(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=or(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return r&&(t["X-Firebase-Client"]=r),t}}function lr(e){return b(e)}class dr{constructor(e){this.auth=e,this.observer=null,this.addObserver=v((e=>this.observer=e))}get next(){return mt(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ur{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ft("not implemented")}_getIdTokenResponse(e){return ft("not implemented")}_linkToIdToken(e,t){return ft("not implemented")}_getReauthenticationResolver(e){return ft("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hr(e,t){return Lt(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pr extends ur{constructor(e,t,r,n=null){super("password",r),this._email=e,this._password=t,this._tenantId=n}static _fromEmailAndPassword(e,t){return new pr(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new pr(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t){return Nt(e,"POST","/v1/accounts:signInWithPassword",Ct(e,t))}(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t){return Nt(e,"POST","/v1/accounts:signInWithEmailLink",Ct(e,t))}(e,{email:this._email,oobCode:this._password});default:dt(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return hr(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return Nt(e,"POST","/v1/accounts:signInWithEmailLink",Ct(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:dt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mr(e,t){return Nt(e,"POST","/v1/accounts:signInWithIdp",Ct(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr extends ur{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new fr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):dt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:r,signInMethod:n}=t,s=st(t,["providerId","signInMethod"]);if(!r||!n)return null;const i=new fr(r,n);return i.idToken=s.idToken||void 0,i.accessToken=s.accessToken||void 0,i.secret=s.secret,i.nonce=s.nonce,i.pendingToken=s.pendingToken||null,i}_getIdTokenResponse(e){return mr(e,this.buildRequest())}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,mr(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,mr(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=m(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gr={USER_NOT_FOUND:"user-not-found"};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vr extends ur{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new vr({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new vr({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return async function(e,t){return Nt(e,"POST","/v1/accounts:signInWithPhoneNumber",Ct(e,t))}(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return async function(e,t){const r=await Nt(e,"POST","/v1/accounts:signInWithPhoneNumber",Ct(e,t));if(r.temporaryProof)throw Dt(e,"account-exists-with-different-credential",r);return r}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return async function(e,t){return Nt(e,"POST","/v1/accounts:signInWithPhoneNumber",Ct(e,Object.assign(Object.assign({},t),{operation:"REAUTH"})),gr)}(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:r,verificationCode:n}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:r,code:n}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:r,phoneNumber:n,temporaryProof:s}=e;return r||t||n||s?new vr({verificationId:t,verificationCode:r,phoneNumber:n,temporaryProof:s}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(e){var t,r,n,s,i,o;const a=f(g(e)),c=null!==(t=a.apiKey)&&void 0!==t?t:null,l=null!==(r=a.oobCode)&&void 0!==r?r:null,d=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(n=a.mode)&&void 0!==n?n:null);mt(c&&l&&d,"argument-error"),this.apiKey=c,this.operation=d,this.code=l,this.continueUrl=null!==(s=a.continueUrl)&&void 0!==s?s:null,this.languageCode=null!==(i=a.languageCode)&&void 0!==i?i:null,this.tenantId=null!==(o=a.tenantId)&&void 0!==o?o:null}static parseLink(e){const t=function(e){const t=f(g(e)).link,r=t?f(g(t)).deep_link_id:null,n=f(g(e)).deep_link_id;return(n?f(g(n)).link:null)||n||r||t||e}(e);try{return new yr(t)}catch(e){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _r{constructor(){this.providerId=_r.PROVIDER_ID}static credential(e,t){return pr._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=yr.parseLink(t);return mt(r,"argument-error"),pr._fromEmailAndCode(e,r.code,r.tenantId)}}_r.PROVIDER_ID="password",_r.EMAIL_PASSWORD_SIGN_IN_METHOD="password",_r.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class br{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr extends br{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ir extends wr{constructor(){super("facebook.com")}static credential(e){return fr._fromParams({providerId:Ir.PROVIDER_ID,signInMethod:Ir.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ir.credentialFromTaggedObject(e)}static credentialFromError(e){return Ir.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Ir.credential(e.oauthAccessToken)}catch(e){return null}}}Ir.FACEBOOK_SIGN_IN_METHOD="facebook.com",Ir.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class kr extends wr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return fr._fromParams({providerId:kr.PROVIDER_ID,signInMethod:kr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return kr.credentialFromTaggedObject(e)}static credentialFromError(e){return kr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return kr.credential(t,r)}catch(e){return null}}}kr.GOOGLE_SIGN_IN_METHOD="google.com",kr.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Sr extends wr{constructor(){super("github.com")}static credential(e){return fr._fromParams({providerId:Sr.PROVIDER_ID,signInMethod:Sr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Sr.credentialFromTaggedObject(e)}static credentialFromError(e){return Sr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Sr.credential(e.oauthAccessToken)}catch(e){return null}}}Sr.GITHUB_SIGN_IN_METHOD="github.com",Sr.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Tr extends wr{constructor(){super("twitter.com")}static credential(e,t){return fr._fromParams({providerId:Tr.PROVIDER_ID,signInMethod:Tr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Tr.credentialFromTaggedObject(e)}static credentialFromError(e){return Tr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Tr.credential(t,r)}catch(e){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Er(e,t){return Nt(e,"POST","/v1/accounts:signUp",Ct(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Tr.TWITTER_SIGN_IN_METHOD="twitter.com",Tr.PROVIDER_ID="twitter.com";class Rr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,n=!1){const s=await zt._fromIdTokenResponse(e,r,n),i=Cr(r);return new Rr({user:s,providerId:i,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const n=Cr(r);return new Rr({user:e,providerId:n,_tokenResponse:r,operationType:t})}}function Cr(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Lr extends c{constructor(e,t,r,n){var s;super(t.code,t.message),this.operationType=r,this.user=n,Object.setPrototypeOf(this,Lr.prototype),this.customData={appName:e.name,tenantId:null!==(s=e.tenantId)&&void 0!==s?s:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,n){return new Lr(e,t,r,n)}}function Or(e,t,r,n){return("reauthenticate"===t?r._getReauthenticationResolver(e):r._getIdTokenResponse(e)).catch((r=>{if("auth/multi-factor-auth-required"===r.code)throw Lr._fromErrorAndOperation(e,r,t,n);throw r}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nr(e,t,r=!1){const n=await qt(e,t._linkToIdToken(e.auth,await e.getIdToken()),r);return Rr._forOperation(e,"link",n)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Ar(e,t,r=!1){var n;const{auth:s}=e,i="reauthenticate";try{const n=await qt(e,Or(s,i,t,e),r);mt(n.idToken,s,"internal-error");const o=Ut(n.idToken);mt(o,s,"internal-error");const{sub:a}=o;return mt(e.uid===a,s,"user-mismatch"),Rr._forOperation(e,i,n)}catch(e){throw"auth/user-not-found"===(null===(n=e)||void 0===n?void 0:n.code)&&dt(s,"user-mismatch"),e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pr(e,t,r=!1){const n="signIn",s=await Or(e,n,t),i=await Rr._fromIdTokenResponse(e,n,s);return r||await e._updateCurrentUser(i.user),i}async function Dr(e,t){return Pr(lr(e),t)}async function xr(e,t,r){const n=lr(e),s=await Er(n,{returnSecureToken:!0,email:t,password:r}),i=await Rr._fromIdTokenResponse(n,"signIn",s);return await n._updateCurrentUser(i.user),i}new WeakMap;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Mr{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem("__sak","1"),this.storage.removeItem("__sak"),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur extends Mr{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=i();return Yt(e)||nr(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=ir(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),n=this.localCache[t];r!==n&&e(t,n,r)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,r)=>{this.notifyListeners(e,r)}));const r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const n=this.storage.getItem(r);if(e.newValue!==n)null!==e.newValue?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}const n=()=>{const e=this.storage.getItem(r);(t||this.localCache[r]!==e)&&this.notifyListeners(r,e)},s=this.storage.getItem(r);sr()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(n,10):n()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const e of Array.from(r))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ur.type="LOCAL";const qr=Ur;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr extends Mr{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Fr.type="SESSION";const jr=Fr;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Hr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const r=new Hr(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:n,data:s}=t.data,i=this.handlersMap[n];if(!(null==i?void 0:i.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:n});const o=Array.from(i).map((async e=>e(t.origin,s))),a=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}})))}(o);t.ports[0].postMessage({status:"done",eventId:r,eventType:n,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Br(e="",t=10){let r="";for(let e=0;e<t;e++)r+=Math.floor(10*Math.random());return e+r}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Hr.receivers=[];class Vr{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const n="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!n)throw new Error("connection_unavailable");let s,i;return new Promise(((o,a)=>{const c=Br("",20);n.port1.start();const l=setTimeout((()=>{a(new Error("unsupported_event"))}),r);i={messageChannel:n,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(l),s=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(s),o(t.data.response);break;default:clearTimeout(l),clearTimeout(s),a(new Error("invalid_response"))}}},this.handlers.add(i),n.port1.addEventListener("message",i.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[n.port2])})).finally((()=>{i&&this.removeMessageHandler(i)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zr(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function $r(){return void 0!==zr().WorkerGlobalScope&&"function"==typeof zr().importScripts}class Wr{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function Kr(e,t){return e.transaction(["firebaseLocalStorage"],t?"readwrite":"readonly").objectStore("firebaseLocalStorage")}function Gr(){const e=indexedDB.open("firebaseLocalStorageDb",1);return new Promise(((t,r)=>{e.addEventListener("error",(()=>{r(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore("firebaseLocalStorage",{keyPath:"fbase_key"})}catch(e){r(e)}})),e.addEventListener("success",(async()=>{const r=e.result;r.objectStoreNames.contains("firebaseLocalStorage")?t(r):(r.close(),await function(){const e=indexedDB.deleteDatabase("firebaseLocalStorageDb");return new Wr(e).toPromise()}(),t(await Gr()))}))}))}async function Jr(e,t,r){const n=Kr(e,!0).put({fbase_key:t,value:r});return new Wr(n).toPromise()}function Xr(e,t){const r=Kr(e,!0).delete(t);return new Wr(r).toPromise()}class Yr{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await Gr()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return $r()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Hr._getInstance($r()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new Vr(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&(null===(e=r[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=r[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Gr();return await Jr(e,"__sak","1"),await Xr(e,"__sak"),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((r=>Jr(r,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const r=Kr(e,!1).get(t),n=await new Wr(r).toPromise();return void 0===n?null:n.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>Xr(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=Kr(e,!1).getAll();return new Wr(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],r=new Set;for(const{fbase_key:n,value:s}of e)r.add(n),JSON.stringify(this.localCache[n])!==JSON.stringify(s)&&(this.notifyListeners(n,s),t.push(n));for(const e of Object.keys(this.localCache))this.localCache[e]&&!r.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const e of Array.from(r))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Yr.type="LOCAL";const Zr=Yr;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qr(e){return new Promise(((t,r)=>{const n=document.createElement("script");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var s,i;n.setAttribute("src",e),n.onload=t,n.onerror=e=>{const t=ut("internal-error");t.customData=e,r(t)},n.type="text/javascript",n.charset="UTF-8",(null!==(i=null===(s=document.getElementsByTagName("head"))||void 0===s?void 0:s[0])&&void 0!==i?i:document).appendChild(n)}))}function en(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
en("rcb"),new kt(3e4,6e4);async function tn(e,t,r){var n;const s=await r.verify();try{let i;if(mt("string"==typeof s,e,"argument-error"),mt("recaptcha"===r.type,e,"argument-error"),i="string"==typeof t?{phoneNumber:t}:t,"session"in i){const t=i.session;if("phoneNumber"in i){mt("enroll"===t.type,e,"internal-error");const r=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e,t){return Lt(e,"POST","/v2/accounts/mfaEnrollment:start",Ct(e,t))}(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:i.phoneNumber,recaptchaToken:s}});return r.phoneSessionInfo.sessionInfo}{mt("signin"===t.type,e,"internal-error");const r=(null===(n=i.multiFactorHint)||void 0===n?void 0:n.uid)||i.multiFactorUid;mt(r,e,"missing-multi-factor-info");const o=await function(e,t){return Lt(e,"POST","/v2/accounts/mfaSignIn:start",Ct(e,t))}(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:r,phoneSignInInfo:{recaptchaToken:s}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await async function(e,t){return Lt(e,"POST","/v1/accounts:sendVerificationCode",Ct(e,t))}(e,{phoneNumber:i.phoneNumber,recaptchaToken:s});return t}}finally{r._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class rn{constructor(e){this.providerId=rn.PROVIDER_ID,this.auth=lr(e)}verifyPhoneNumber(e,t){return tn(this.auth,e,b(t))}static credential(e,t){return vr._fromVerification(e,t)}static credentialFromResult(e){const t=e;return rn.credentialFromTaggedObject(t)}static credentialFromError(e){return rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:r}=e;return t&&r?vr._fromTokenResponse(t,r):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function nn(e,t){return t?yt(t):(mt(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */rn.PROVIDER_ID="phone",rn.PHONE_SIGN_IN_METHOD="phone";class sn extends ur{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return mr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return mr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return mr(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function on(e){return Pr(e.auth,new sn(e),e.bypassAuthState)}function an(e){const{auth:t,user:r}=e;return mt(r,t,"internal-error"),Ar(r,new sn(e),e.bypassAuthState)}async function cn(e){const{auth:t,user:r}=e;return mt(r,t,"internal-error"),Nr(r,new sn(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(e,t,r,n,s=!1){this.auth=e,this.resolver=r,this.user=n,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:n,tenantId:s,error:i,type:o}=e;if(i)return void this.reject(i);const a={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:n||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return on;case"linkViaPopup":case"linkViaRedirect":return cn;case"reauthViaPopup":case"reauthViaRedirect":return an;default:dt(this.auth,"internal-error")}}resolve(e){gt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){gt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dn=new kt(2e3,1e4);class un extends ln{constructor(e,t,r,n,s){super(e,t,n,s),this.provider=r,this.authWindow=null,this.pollId=null,un.currentPopupAction&&un.currentPopupAction.cancel(),un.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return mt(e,this.auth,"internal-error"),e}async onExecution(){gt(1===this.filter.length,"Popup operations only handle one event");const e=Br();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(ut(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(ut(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,un.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;(null===(r=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===r?void 0:r.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(ut(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,dn.get())};e()}}un.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const hn=new Map;class pn extends ln{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=hn.get(this.auth._key());if(!e){try{const t=await async function(e,t){const r=gn(t),n=fn(e);if(!await n._isAvailable())return!1;const s="true"===await n._get(r);return await n._remove(r),s}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}hn.set(this.auth._key(),e)}return this.bypassAuthState||hn.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}function mn(e,t){hn.set(e._key(),t)}function fn(e){return yt(e._redirectPersistence)}function gn(e){return Kt("pendingRedirect",e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vn(e,t,r=!1){const n=lr(e),s=nn(n,t),i=new pn(n,s,r),o=await i.execute();return o&&!r&&(delete o.user._redirectEventId,await n._persistUserIfCurrent(o.user),await n._setRedirectUser(null,t)),o}class yn{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return bn(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!bn(e)){const n=(null===(r=e.error.code)||void 0===r?void 0:r.split("auth/")[1])||"internal-error";t.onError(ut(this.auth,n))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(_n(e))}saveEventToCache(e){this.cachedEventUids.add(_n(e)),this.lastProcessedEventTime=Date.now()}}function _n(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function bn({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const wn=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,In=/^https?/;async function kn(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return Lt(e,"GET","/v1/projects",t)}(e);for(const e of t)try{if(Sn(e))return}catch(e){}dt(e,"unauthorized-domain")}function Sn(e){const t=_t(),{protocol:r,hostname:n}=new URL(t);if(e.startsWith("chrome-extension://")){const s=new URL(e);return""===s.hostname&&""===n?"chrome-extension:"===r&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===r&&s.hostname===n}if(!In.test(r))return!1;if(wn.test(e))return n===e;const s=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(n)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tn=new kt(3e4,6e4);function En(){const e=zr().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}let Rn=null;function Cn(e){return Rn=Rn||function(e){return new Promise(((t,r)=>{var n,s,i;function o(){En(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{En(),r(ut(e,"network-request-failed"))},timeout:Tn.get()})}if(null===(s=null===(n=zr().gapi)||void 0===n?void 0:n.iframes)||void 0===s?void 0:s.Iframe)t(gapi.iframes.getContext());else{if(!(null===(i=zr().gapi)||void 0===i?void 0:i.load)){const t=en("iframefcb");return zr()[t]=()=>{gapi.load?o():r(ut(e,"network-request-failed"))},Qr(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>r(e)))}o()}})).catch((e=>{throw Rn=null,e}))}(e),Rn}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ln=new kt(5e3,15e3),On={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Nn=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function An(e){const t=e.config;mt(t.authDomain,e,"auth-domain-config-required");const r=t.emulator?St(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,n={apiKey:t.apiKey,appName:e.name,v:"9.9.3"},s=Nn.get(e.config.apiHost);s&&(n.eid=s);const i=e._getFrameworks();return i.length&&(n.fw=i.join(",")),`${r}?${m(n).slice(1)}`}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Pn={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class Dn{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function xn(e,t,r,n=500,s=600){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-n)/2,0).toString();let c="";const l=Object.assign(Object.assign({},Pn),{width:n.toString(),height:s.toString(),top:o,left:a}),d=i().toLowerCase();r&&(c=Zt(d)?"_blank":r),Xt(d)&&(t=t||"http://localhost",l.scrollbars="yes");const u=Object.entries(l).reduce(((e,[t,r])=>`${e}${t}=${r},`),"");if(function(e=i()){var t;return nr(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(d)&&"_self"!==c)return function(e,t){const r=document.createElement("a");r.href=e,r.target=t;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),r.dispatchEvent(n)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t||"",c),new Dn(null);const h=window.open(t||"",c,u);mt(h,e,"popup-blocked");try{h.focus()}catch(e){}return new Dn(h)}function Mn(e,t,r,n,s,i){mt(e.config.authDomain,e,"auth-domain-config-required"),mt(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:r,redirectUrl:n,v:"9.9.3",eventId:s};if(t instanceof br){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",u(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(i||{}))o[e]=t}if(t instanceof wr){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(o.scopes=e.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const e of Object.keys(a))void 0===a[e]&&delete a[e];return`${function({config:e}){return e.emulator?St(e,"emulator/auth/handler"):`https://${e.authDomain}/__/auth/handler`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)}?${m(a).slice(1)}`}const Un=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=jr,this._completeRedirectFn=vn,this._overrideRedirectResult=mn}async _openPopup(e,t,r,n){var s;gt(null===(s=this.eventManagers[e._key()])||void 0===s?void 0:s.manager,"_initialize() not called before _openPopup()");return xn(e,Mn(e,t,r,_t(),n),Br())}async _openRedirect(e,t,r,n){var s;return await this._originValidation(e),s=Mn(e,t,r,_t(),n),zr().location.href=s,new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:r}=this.eventManagers[t];return e?Promise.resolve(e):(gt(r,"If manager is not set, promise should be"),r)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch((()=>{delete this.eventManagers[t]})),r}async initAndGetManager(e){const t=await async function(e){const t=await Cn(e),r=zr().gapi;return mt(r,e,"internal-error"),t.open({where:document.body,url:An(e),messageHandlersFilter:r.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:On,dontclear:!0},(t=>new Promise((async(r,n)=>{await t.restyle({setHideOnLeave:!1});const s=ut(e,"network-request-failed"),i=zr().setTimeout((()=>{n(s)}),Ln.get());function o(){zr().clearTimeout(i),r(t)}t.ping(o).then(o,(()=>{n(s)}))}))))}(e),r=new yn(e);return t.register("authEvent",(t=>{mt(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:r.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send("webStorageSupport",{type:"webStorageSupport"},(r=>{var n;const s=null===(n=null==r?void 0:r[0])||void 0===n?void 0:n.webStorageSupport;void 0!==s&&t(!!s),dt(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=kn(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return ir()||Yt()||nr()}};var qn;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Fn{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{var r;e((null===(r=t)||void 0===r?void 0:r.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){mt(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */qn="Browser",te(new w("auth",((e,{options:t})=>{const r=e.getProvider("app").getImmediate(),n=e.getProvider("heartbeat"),{apiKey:s,authDomain:i}=r.options;return((e,r)=>{mt(s&&!s.includes(":"),"invalid-api-key",{appName:e.name}),mt(!(null==i?void 0:i.includes(":")),"argument-error",{appName:e.name});const n={apiKey:s,authDomain:i,clientPlatform:qn,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:or(qn)},o=new cr(e,r,n);return function(e,t){const r=(null==t?void 0:t.persistence)||[],n=(Array.isArray(r)?r:[r]).map(yt);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(n,null==t?void 0:t.popupRedirectResolver)}(o,t),o})(r,n)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,r)=>{e.getProvider("auth-internal").initialize()}))),te(new w("auth-internal",(e=>(e=>new Fn(e))(lr(e.getProvider("auth").getImmediate()))),"PRIVATE").setInstantiationMode("EXPLICIT")),oe("@firebase/auth","0.20.5",function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(qn)),oe("@firebase/auth","0.20.5","esm2017");const jn=document.querySelector(".subject"),Hn=document.querySelector(".location"),Bn=document.querySelector(".themes"),Vn=document.querySelector(".design"),zn=document.querySelector(".lightning"),$n=document.querySelector(".colors"),Wn=document.querySelector(".camera"),Kn=document.querySelector(".artists"),Gn=document.querySelector(".image"),Jn=document.querySelector(".hover-buttons"),Xn=document.querySelector(".option-box1"),Yn=document.querySelector(".option-box2"),Zn=document.querySelector(".option-box3"),Qn=document.querySelector(".option-box4"),es=document.querySelector(".option-box5"),ts=document.querySelector(".option-box6"),rs=document.querySelector(".option-box7"),ns=document.querySelector(".option-box8"),ss=document.querySelector(".option-box9"),is=document.querySelector(".subject-counter"),os=document.querySelector(".location-counter"),as=document.querySelector(".themes-counter"),cs=document.querySelector(".design-counter"),ls=document.querySelector(".lightning-counter"),ds=document.querySelector(".colors-counter"),us=document.querySelector(".camera-counter"),hs=document.querySelector(".artists-counter"),ps=document.querySelector(".image-counter"),ms=document.querySelector(".sub1"),fs=document.querySelector(".sub2"),gs=document.querySelector(".sub3"),vs=document.querySelector(".loc1"),ys=document.querySelector(".loc2"),_s=document.querySelector(".loc3"),bs=document.querySelector(".the1"),ws=document.querySelector(".the2"),Is=document.querySelector(".the3"),ks=document.querySelector(".des1"),Ss=document.querySelector(".des2"),Ts=document.querySelector(".des3"),Es=document.querySelector(".lig1"),Rs=document.querySelector(".lig2"),Cs=document.querySelector(".lig3"),Ls=document.querySelector(".col1"),Os=document.querySelector(".col2"),Ns=document.querySelector(".col3"),As=document.querySelector(".cam1"),Ps=document.querySelector(".cam2"),Ds=document.querySelector(".cam3"),xs=document.querySelector(".art1"),Ms=document.querySelector(".art2"),Us=document.querySelector(".art3"),qs=document.querySelector(".main-program"),Fs=document.querySelector(".modal-boxes"),js=document.querySelector(".dot-1"),Hs=document.querySelector(".dot-2"),Bs=document.querySelector(".dot-3");Yn.style.color="rgb(40,37,38)",os.style.color="rgb(40,37,38)",os.style.border="2px solid rgb(40,37,38)",Zn.style.color="rgb(40,37,38)",as.style.color="rgb(40,37,38)",as.style.border="2px solid rgb(40,37,38)",Qn.style.color="rgb(40,37,38)",cs.style.color="rgb(40,37,38)",cs.style.border="2px solid rgb(40,37,38)",es.style.color="rgb(40,37,38)",ls.style.color="rgb(40,37,38)",ls.style.border="2px solid rgb(40,37,38)",ts.style.color="rgb(40,37,38)",ds.style.color="rgb(40,37,38)",ds.style.border="2px solid rgb(40,37,38)",rs.style.color="rgb(40,37,38)",us.style.color="rgb(40,37,38)",us.style.border="2px solid rgb(40,37,38)",ns.style.color="rgb(40,37,38)",hs.style.color="rgb(40,37,38)",hs.style.border="2px solid rgb(40,37,38)",ss.style.color="rgb(40,37,38)",ps.style.color="rgb(40,37,38)",ps.style.border="2px solid rgb(40,37,38)";const Vs=e=>{e.classList.add("hidden")},zs=e=>{e.classList.remove("hidden")},$s=(e,t)=>{e.classList.add("fadeOpacity"),t.classList.add("fadeOpacity"),setTimeout((()=>{e.classList.remove("fadeOpacity"),t.classList.remove("fadeOpacity")}),500)},Ws=()=>{js.style.border="1px solid rgb(37, 49, 96)",js.style.backgroundColor="rgb(37, 49, 96)",Hs.style.border="1px solid rgb(37, 49, 96)",Hs.style.backgroundColor="rgb(8, 11, 22)",Bs.style.border="1px solid rgb(37, 49, 96)",Bs.style.backgroundColor="rgb(8, 11, 22)"};Xn.addEventListener("click",(()=>{Ws(),js.className="dot-1 d1 dot",Hs.className="dot-2 d2 dot",Bs.className="dot-3 d3 dot",zs(ms),zs(jn),zs(Jn),zs(Fs),Vs(Hn),Vs(Bn),Vs(Vn),Vs(zn),Vs($n),Vs(Wn),Vs(Kn),Vs(vs),Vs(ys),Vs(_s),Vs(bs),Vs(ws),Vs(Is),Vs(ks),Vs(Ss),Vs(Ts),Vs(Es),Vs(Rs),Vs(Cs),Vs(Ls),Vs(Os),Vs(Ns),Vs(As),Vs(Ps),Vs(Ds),Vs(xs),Vs(Ms),Vs(Us),Vs(Gn),$s(qs,Fs),Ks(Xn,is,is,Yn,os,os,Zn,as,as,Qn,cs,cs,es,ls,ls,ts,ds,ds,rs,us,us,ns,hs,hs,ss,ps,ps)})),Yn.addEventListener("click",(()=>{Ws(),js.className="dot-4 d1 dot",Hs.className="dot-5 d2 dot",Bs.className="dot-6 d3 dot",zs(vs),zs(Hn),zs(Jn),zs(Fs),Vs(jn),Vs(Bn),Vs(Vn),Vs(zn),Vs($n),Vs(Wn),Vs(Kn),Vs(ms),Vs(fs),Vs(gs),Vs(bs),Vs(ws),Vs(Is),Vs(ks),Vs(Ss),Vs(Ts),Vs(Es),Vs(Rs),Vs(Cs),Vs(Ls),Vs(Os),Vs(Ns),Vs(As),Vs(Ps),Vs(Ds),Vs(xs),Vs(Ms),Vs(Us),Vs(Gn),$s(qs,Fs),Ks(Yn,os,os,Xn,is,is,Zn,as,as,Qn,cs,cs,es,ls,ls,ts,ds,ds,rs,us,us,ns,hs,hs,ss,ps,ps)})),Zn.addEventListener("click",(()=>{Ws(),js.className="dot-7 d1 dot",Hs.className="dot-8 d2 dot",Bs.className="dot-9 d3 dot",zs(bs),zs(Bn),zs(Jn),zs(Fs),Vs(jn),Vs(Hn),Vs(Vn),Vs(zn),Vs($n),Vs(Wn),Vs(Kn),Vs(ms),Vs(fs),Vs(gs),Vs(vs),Vs(ys),Vs(_s),Vs(ks),Vs(Ss),Vs(Ts),Vs(Es),Vs(Rs),Vs(Cs),Vs(Ls),Vs(Os),Vs(Ns),Vs(As),Vs(Ps),Vs(Ds),Vs(xs),Vs(Ms),Vs(Us),Vs(Gn),$s(qs,Fs),Ks(Zn,as,as,Yn,os,os,Xn,is,is,Qn,cs,cs,es,ls,ls,ts,ds,ds,rs,us,us,ns,hs,hs,ss,ps,ps)})),Qn.addEventListener("click",(()=>{Ws(),js.className="dot-10 d1 dot",Hs.className="dot-11 d2 dot",Bs.className="dot-12 d3 dot",zs(ks),zs(Vn),zs(Jn),zs(Fs),Vs(Bn),Vs(jn),Vs(Hn),Vs(zn),Vs($n),Vs(Wn),Vs(Kn),Vs(ms),Vs(fs),Vs(gs),Vs(vs),Vs(ys),Vs(_s),Vs(bs),Vs(ws),Vs(Is),Vs(Es),Vs(Rs),Vs(Cs),Vs(Ls),Vs(Os),Vs(Ns),Vs(As),Vs(Ps),Vs(Ds),Vs(xs),Vs(Ms),Vs(Us),Vs(Gn),$s(qs,Fs),Ks(Qn,cs,cs,Zn,as,as,Yn,os,os,Xn,is,is,es,ls,ls,ts,ds,ds,rs,us,us,ns,hs,hs,ss,ps,ps)})),es.addEventListener("click",(()=>{Ws(),js.className="dot-13 d1 dot",Hs.className="dot-14 d2 dot",Bs.className="dot-15 d3 dot",zs(Es),zs(zn),zs(Jn),zs(Fs),Vs(jn),Vs(Hn),Vs(Bn),Vs(Vn),Vs($n),Vs(Wn),Vs(Kn),Vs(ms),Vs(fs),Vs(gs),Vs(vs),Vs(ys),Vs(_s),Vs(bs),Vs(ws),Vs(Is),Vs(ks),Vs(Ss),Vs(Ts),Vs(Ls),Vs(Os),Vs(Ns),Vs(As),Vs(Ps),Vs(Ds),Vs(xs),Vs(Ms),Vs(Us),Vs(Gn),$s(qs,Fs),Ks(es,ls,ls,Qn,cs,cs,Zn,as,as,Yn,os,os,Xn,is,is,ts,ds,ds,rs,us,us,ns,hs,hs,ss,ps,ps)})),ts.addEventListener("click",(()=>{Ws(),js.className="dot-16 d1 dot",Hs.className="dot-17 d2 dot",Bs.className="dot-18 d3 dot",zs(Ls),zs($n),zs(Jn),zs(Fs),Vs(jn),Vs(Hn),Vs(Bn),Vs(Vn),Vs(zn),Vs(Wn),Vs(Kn),Vs(ms),Vs(fs),Vs(gs),Vs(vs),Vs(ys),Vs(_s),Vs(bs),Vs(ws),Vs(Is),Vs(ks),Vs(Ss),Vs(Ts),Vs(Es),Vs(Rs),Vs(Cs),Vs(As),Vs(Ps),Vs(Ds),Vs(xs),Vs(Ms),Vs(Us),Vs(Gn),$s(qs,Fs),Ks(ts,ds,ds,es,ls,ls,Qn,cs,cs,Zn,as,as,Yn,os,os,Xn,is,is,rs,us,us,ns,hs,hs,ss,ps,ps)})),rs.addEventListener("click",(()=>{Ws(),js.className="dot-19 d1 dot",Hs.className="dot-20 d2 dot",Bs.className="dot-21 d3 dot",zs(As),zs(Wn),zs(Jn),zs(Fs),Vs(jn),Vs(Hn),Vs(Bn),Vs(Vn),Vs(zn),Vs($n),Vs(Kn),Vs(ms),Vs(fs),Vs(gs),Vs(vs),Vs(ys),Vs(_s),Vs(bs),Vs(ws),Vs(Is),Vs(ks),Vs(Ss),Vs(Ts),Vs(Es),Vs(Rs),Vs(Cs),Vs(Ls),Vs(Os),Vs(Ns),Vs(xs),Vs(Ms),Vs(Us),Vs(Gn),$s(qs,Fs),Ks(rs,us,us,es,ls,ls,Qn,cs,cs,Zn,as,as,Yn,os,os,Xn,is,is,ts,ds,ds,ns,hs,hs,ss,ps,ps)})),ns.addEventListener("click",(()=>{console.log("artists"),Ws(),js.className="dot-22 d1 dot",Hs.className="dot-23 d2 dot",Bs.className="dot-24 d3 dot",zs(xs),zs(Kn),zs(Jn),zs(Fs),Vs(jn),Vs(Hn),Vs(Bn),Vs(Vn),Vs(zn),Vs($n),Vs(Wn),Vs(ms),Vs(fs),Vs(gs),Vs(vs),Vs(ys),Vs(_s),Vs(bs),Vs(ws),Vs(Is),Vs(ks),Vs(Ss),Vs(Ts),Vs(Es),Vs(Rs),Vs(Cs),Vs(Ls),Vs(Os),Vs(Ns),Vs(As),Vs(Ps),Vs(Ds),Vs(Gn),$s(qs,Fs),Ks(ns,hs,hs,es,ls,ls,Qn,cs,cs,Zn,as,as,Yn,os,os,Xn,is,is,ts,ds,ds,rs,us,us,ss,ps,ps)})),ss.addEventListener("click",(()=>{Ws(),js.className="dot-25 d1 dot",Hs.className="dot-26 d2 dot",Bs.className="dot-27 d3 dot",zs(Gn),Vs(jn),Vs(Hn),Vs(Bn),Vs(Vn),Vs(zn),Vs($n),Vs(Wn),Vs(Kn),Vs(ms),Vs(fs),Vs(gs),Vs(vs),Vs(ys),Vs(_s),Vs(bs),Vs(ws),Vs(Is),Vs(ks),Vs(Ss),Vs(Ts),Vs(Es),Vs(Rs),Vs(Cs),Vs(Ls),Vs(Os),Vs(Ns),Vs(As),Vs(Ps),Vs(Ds),Vs(xs),Vs(Ms),Vs(Us),Vs(Jn),Vs(Fs),$s(qs,Fs),Ks(ss,ps,ps,es,ls,ls,Qn,cs,cs,Zn,as,as,Yn,os,os,Xn,is,is,ts,ds,ds,rs,us,us,ns,hs,hs)}));const Ks=(e,t,r,n,s,i,o,a,c,l,d,u,h,p,m,f,g,v,y,_,b,w,I,k,S,T,E)=>{e.style.color="white",t.style.color="white",r.style.border="2px solid white",n.style.color="rgb(40,37,38)",s.style.color="rgb(40,37,38)",i.style.border="2px solid rgb(40,37,38)",o.style.color="rgb(40,37,38)",a.style.color="rgb(40,37,38)",c.style.border="2px solid rgb(40,37,38)",l.style.color="rgb(40,37,38)",d.style.color="rgb(40,37,38)",u.style.border="2px solid rgb(40,37,38)",h.style.color="rgb(40,37,38)",p.style.color="rgb(40,37,38)",m.style.border="2px solid rgb(40,37,38)",f.style.color="rgb(40,37,38)",g.style.color="rgb(40,37,38)",v.style.border="2px solid rgb(40,37,38)",y.style.color="rgb(40,37,38)",_.style.color="rgb(40,37,38)",b.style.border="2px solid rgb(40,37,38)",w.style.color="rgb(40,37,38)",I.style.color="rgb(40,37,38)",k.style.border="2px solid rgb(40,37,38)",S.style.color="rgb(40,37,38)",T.style.color="rgb(40,37,38)",E.style.border="2px solid rgb(40,37,38)"};document.querySelectorAll(".dot").forEach((e=>{e.addEventListener("click",(e=>{if("rgb(37, 49, 96)"===e.target.style.backgroundColor)return;let t=+e.target.classList[0].slice(4)-1;Gs(e),0===t&&(ms.classList.remove("hidden"),fs.classList.add("hidden"),gs.classList.add("hidden")),1===t&&(ms.classList.add("hidden"),fs.classList.remove("hidden"),gs.classList.add("hidden")),2===t&&(ms.classList.add("hidden"),fs.classList.add("hidden"),gs.classList.remove("hidden")),3===t&&(vs.classList.remove("hidden"),ys.classList.add("hidden"),_s.classList.add("hidden")),4===t&&(vs.classList.add("hidden"),ys.classList.remove("hidden"),_s.classList.add("hidden"),gs.classList.add("hidden")),5===t&&(gs.classList.add("hidden"),vs.classList.add("hidden"),ys.classList.add("hidden"),_s.classList.remove("hidden")),6===t&&(bs.classList.remove("hidden"),ws.classList.add("hidden"),Is.classList.add("hidden")),7===t&&(ws.classList.remove("hidden"),bs.classList.add("hidden"),Is.classList.add("hidden")),8===t&&(bs.classList.add("hidden"),ws.classList.add("hidden"),Is.classList.remove("hidden")),9===t&&(ks.classList.remove("hidden"),Ss.classList.add("hidden"),Ts.classList.add("hidden")),10===t&&(Ss.classList.remove("hidden"),ks.classList.add("hidden"),Ts.classList.add("hidden")),11===t&&(ks.classList.add("hidden"),Ss.classList.add("hidden"),Ts.classList.remove("hidden")),12===t&&(Es.classList.remove("hidden"),Rs.classList.add("hidden"),Cs.classList.add("hidden")),13===t&&(Rs.classList.remove("hidden"),Es.classList.add("hidden"),Cs.classList.add("hidden")),14===t&&(Es.classList.add("hidden"),Rs.classList.add("hidden"),Cs.classList.remove("hidden")),15===t&&(Ls.classList.remove("hidden"),Os.classList.add("hidden"),Ns.classList.add("hidden")),16===t&&(Os.classList.remove("hidden"),Ls.classList.add("hidden"),Ns.classList.add("hidden")),17===t&&(Ls.classList.add("hidden"),Os.classList.add("hidden"),Ns.classList.remove("hidden")),18===t&&(As.classList.remove("hidden"),Ps.classList.add("hidden"),Ds.classList.add("hidden")),19===t&&(Ps.classList.remove("hidden"),As.classList.add("hidden"),Ds.classList.add("hidden")),20===t&&(As.classList.add("hidden"),Ps.classList.add("hidden"),Ds.classList.remove("hidden")),21===t&&(xs.classList.remove("hidden"),Ms.classList.add("hidden"),Us.classList.add("hidden")),22===t&&(Ms.classList.remove("hidden"),xs.classList.add("hidden"),Us.classList.add("hidden")),23===t&&(xs.classList.add("hidden"),Ms.classList.add("hidden"),Us.classList.remove("hidden")),Gs(e)}))}));const Gs=e=>{Fs.classList.add("fadeOut"),setTimeout((()=>{Fs.classList.remove("fadeOut")}),500),e.target.classList.contains("d1")&&(js.style.backgroundColor="rgb(37, 49, 96)",Hs.style.backgroundColor="rgb(8, 11, 22)",Bs.style.backgroundColor="rgb(8, 11, 22)"),e.target.classList.contains("d2")&&(js.style.backgroundColor="rgb(8, 11, 22)",Hs.style.backgroundColor="rgb(37, 49, 96)",Bs.style.backgroundColor="rgb(8, 11, 22)"),e.target.classList.contains("d3")&&(js.style.backgroundColor="rgb(8, 11, 22)",Hs.style.backgroundColor="rgb(8, 11, 22)",Bs.style.backgroundColor="rgb(37, 49, 96)")},Js={animals:{0:"Alpaca",1:"Cheetah",2:"Bull",3:"Eagle",4:"Falcon",5:"Fox",6:"Frog",7:"Hamster",8:"Horse",9:"Lion",10:"Lizard",11:"Monkey",12:"Owl",13:"Parrot",14:"Shark",15:"Snake"},buildings:{0:"Boarding House",1:"Castle",2:"Cathedral",3:"Conservatory",4:"Greenhouse",5:"Hospital",6:"Igloo"}};let Xs=[],Ys={},Zs=!1,Qs=0,ei=0,ti=0;const ri=document.querySelector(".total-selection-counter"),ni=document.querySelector(".subject-counter"),si=(document.querySelector(".location-counter"),document.querySelector(".themes-counter"),document.querySelector(".design-counter"),document.querySelector(".lightning-counter"),document.querySelector(".colors-counter"),document.querySelector(".camera-counter"),document.querySelector(".artists-counter"),document.querySelector(".image-counter"),document.querySelector(".subjects-counter")),ii=(document.querySelector(".locations-counter"),document.querySelector(".themes-mini-counter"),document.querySelector(".designs-counter"),document.querySelector(".lightnings-counter"),document.querySelector(".colors-mini-counter"),document.querySelector(".cameras-counter"),document.querySelector(".artists-mini-counter"),document.querySelector(".imagess-counter"),document.querySelector(".login-box")),oi=document.querySelector(".login-button"),ai=document.querySelector(".login-btn"),ci=document.querySelector(".logout-btn"),li=document.querySelector(".signup-button"),di=document.querySelector(".signup-forwards"),ui=document.querySelector(".login-inputbox"),hi=document.querySelector(".signup-inputbox"),pi=document.querySelector(".display-user"),mi=document.querySelector(".username-input"),fi=document.querySelector(".password-input"),gi=document.querySelector(".username-register"),vi=document.querySelector(".password-register"),yi=document.querySelector(".wrong-credentials"),_i=document.querySelector(".outer-lightbox"),bi=document.querySelector(".lightbox-shade"),wi=(document.querySelector(".lightbox-imgdiv"),document.querySelector(".lightbox")),Ii=document.querySelector(".output-txt"),ki=document.querySelector(".close-lightbox"),Si=document.querySelector(".clear-close"),Ti=document.querySelector(".select-styles"),Ei=document.querySelector(".prompt-string"),Ri=
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e=ie()){const t=re(e,"auth");return t.isInitialized()?t.getImmediate():function(e,t){const r=re(e,"auth");if(r.isInitialized()){const e=r.getImmediate();if(h(r.getOptions(),null!=t?t:{}))return e;dt(e,"already-initialized")}return r.initialize({options:t})}(e,{popupRedirectResolver:Un,persistence:[Zr,qr,jr]})}(function(e,t={}){if("object"!=typeof t){t={name:t}}const r=Object.assign({name:"[DEFAULT]",automaticDataCollectionEnabled:!1},t),n=r.name;if("string"!=typeof n||!n)throw ne.create("bad-app-name",{appName:String(n)});const s=Z.get(n);if(s){if(h(e,s.options)&&h(r,s.config))return s;throw ne.create("duplicate-app",{appName:n})}const i=new k(n);for(const e of Q.values())i.addComponent(e);const o=new se(e,r,i);return Z.set(n,o),o}({apiKey:"AIzaSyA5SwOpU8KCIMaOEAcpgKSGCeJ5zGa4mYM",authDomain:"prompt-maker.firebaseapp.com",projectId:"prompt-maker",storageBucket:"prompt-maker.appspot.com",messagingSenderId:"449676529770",appId:"1:449676529770:web:470531242f944aa58dfa13",measurementId:"G-DWN7577Z1B"}));di.addEventListener("click",(e=>{e.preventDefault(),ui.classList.add("hidden"),hi.classList.remove("hidden")}));li.addEventListener("click",(async()=>{const e=gi.value,t=vi.value,r=await xr(Ri,e,t);hi.classList.add("hidden"),ui.classList.add("hidden"),gi.value="",vi.value="",console.log(r.user)}));oi.addEventListener("click",(async()=>{yi.classList.add("hidden");const e=mi.value,t=fi.value;try{const i=await(r=Ri,n=e,s=t,Dr(b(r),_r.credential(n,s)));console.log(i.user)}catch(e){yi.classList.remove("hidden"),console.log(e)}var r,n,s;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}));ci.addEventListener("click",(async()=>{var e;await(e=Ri,b(e).signOut()),pi.textContent="",mi.value="",fi.value="",yi.classList.add("hidden"),ii.classList.add("hidden"),hi.classList.add("hidden"),ui.classList.remove("hidden")}));(async()=>{var e,t,r;e=e=>{e?(ii.classList.add("hidden"),ai.classList.add("hidden"),ci.classList.remove("hidden"),console.log(e.email),pi.textContent="Welcome",Zs=!0):(ai.classList.remove("hidden"),ci.classList.add("hidden"),Zs=!1)},b(Ri).onAuthStateChanged(e,t,r)})();const Ci=(e,t)=>{Xs=[],Ii.textContent="";document.querySelectorAll(".lightbox-imgdiv").forEach((e=>{e.className="lightbox-imgdiv"}));const r=document.querySelector(".lightbox"),n=document.createElement("div"),s=document.createElement("img"),i=document.createElement("p");i.textContent="",i.textContent=Object.values(Ys)[t],s.className="lightbox-img "+("a"+t),n.className="lightbox-imgdiv",i.className="lightbox-txt",s.setAttribute("src",e),n.appendChild(s),n.appendChild(i),r.appendChild(n),bi.classList.remove("hidden"),_i.classList.remove("hidden")};document.querySelectorAll(".subjects-style").forEach((e=>{e.addEventListener("click",(t=>{for(let[e,r]of Object.entries(Js))t.target.offsetParent.dataset.id===e&&(Ys=r);const r=rt();Qs=+Object.keys(Ys).length;for(let t=0;t<Qs;t++)(s=r,i=`/subject/${e.dataset.id}/${t}.png`,n=Qe(s=b(s),i),Xe(n=b(n))).then((e=>{Ci(e,t)})).catch((e=>{console.log(e)}));var n,s,i}))})),wi.addEventListener("click",(e=>{"lightbox-imgdiv"!==e.target.classList[0]&&(e.target.classList.contains("lightbox")||e.target.offsetParent.classList.contains("selected")||(e.target.offsetParent.classList.toggle("selected"),e.target.offsetParent.classList.contains("selected")&&(Xs.push(" "+Object.values(Ys)[+e.target.classList[1].slice(1)]),Ii.textContent=Xs.toString())))})),Si.addEventListener("click",(()=>{Xs=[],Ii.textContent="";document.querySelectorAll(".lightbox-imgdiv").forEach((e=>{e.className="lightbox-imgdiv"}))})),Ti.addEventListener("click",(()=>{Ei.value+=Xs.toString(),ei+=+Xs.length,ti+=+Xs.length,ni.textContent=ti,si.textContent=ti,ri.textContent=ei,_i.classList.add("hidden"),bi.classList.add("hidden"),wi.innerHTML="",Xs=[],Ii.textContent="";document.querySelectorAll(".lightbox-imgdiv").forEach((e=>{e.className="lightbox-imgdiv"})),Ei.value+=","})),ki.addEventListener("click",(()=>{_i.classList.add("hidden"),bi.classList.add("hidden"),wi.innerHTML="",Xs=[],Ii.textContent="";document.querySelectorAll(".lightbox-imgdiv").forEach((e=>{e.className="lightbox-imgdiv"}))})),bi.addEventListener("click",(()=>{_i.classList.add("hidden"),bi.classList.add("hidden"),wi.innerHTML="",Xs=[],Ii.textContent="";document.querySelectorAll(".lightbox-imgdiv").forEach((e=>{e.className="lightbox-imgdiv"}))}));
//# sourceMappingURL=index.b8f2b1b0.js.map
