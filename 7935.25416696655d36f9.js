(self.webpackChunkcd_comm=self.webpackChunkcd_comm||[]).push([[7935],{1076:(se,F,C)=>{C.d(F,{Am:()=>Be,Bd:()=>X,FA:()=>ge,Fy:()=>pe,I9:()=>ie,Im:()=>Te,Ku:()=>ue,Ll:()=>R,T9:()=>U,Uj:()=>O,XA:()=>re,ZQ:()=>w,bD:()=>ve,cY:()=>oe,eX:()=>Ce,g:()=>ce,gR:()=>Ne,hp:()=>Re,jZ:()=>V,lT:()=>Q,lV:()=>ae,nr:()=>Ie,p7:()=>Z,sr:()=>me,tD:()=>ee,u:()=>c,zW:()=>we,zw:()=>u});const A=function(t){const e=[];let n=0;for(let a=0;a<t.length;a++){let i=t.charCodeAt(a);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=63&i|128):55296==(64512&i)&&a+1<t.length&&56320==(64512&t.charCodeAt(a+1))?(i=65536+((1023&i)<<10)+(1023&t.charCodeAt(++a)),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=63&i|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=63&i|128)}return e},L={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,a=[];for(let i=0;i<t.length;i+=3){const d=t[i],m=i+1<t.length,N=m?t[i+1]:0,H=i+2<t.length,M=H?t[i+2]:0;let W=(15&N)<<2|M>>6,fe=63&M;H||(fe=64,m||(W=64)),a.push(n[d>>2],n[(3&d)<<4|N>>4],n[W],n[fe])}return a.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(A(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):function(t){const e=[];let n=0,a=0;for(;n<t.length;){const i=t[n++];if(i<128)e[a++]=String.fromCharCode(i);else if(i>191&&i<224){const d=t[n++];e[a++]=String.fromCharCode((31&i)<<6|63&d)}else if(i>239&&i<365){const H=((7&i)<<18|(63&t[n++])<<12|(63&t[n++])<<6|63&t[n++])-65536;e[a++]=String.fromCharCode(55296+(H>>10)),e[a++]=String.fromCharCode(56320+(1023&H))}else{const d=t[n++],m=t[n++];e[a++]=String.fromCharCode((15&i)<<12|(63&d)<<6|63&m)}}return e.join("")}(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,a=[];for(let i=0;i<t.length;){const d=n[t.charAt(i++)],N=i<t.length?n[t.charAt(i)]:0;++i;const M=i<t.length?n[t.charAt(i)]:64;++i;const I=i<t.length?n[t.charAt(i)]:64;if(++i,null==d||null==N||null==M||null==I)throw new P;a.push(d<<2|N>>4),64!==M&&(a.push(N<<4&240|M>>2),64!==I&&a.push(M<<6&192|I))}return a},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class P extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const O=function(t){return function(t){const e=A(t);return L.encodeByteArray(e,!0)}(t).replace(/\./g,"")},c=function(t){try{return L.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function u(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:return new Date(e.getTime());case Object:void 0===t&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!v(n)||(t[n]=u(t[n],e[n]));return t}function v(t){return"__proto__"!==t}const y=()=>{try{return function S(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__||(()=>{if(typeof process>"u"||typeof process.env>"u")return;const t=process.env.__FIREBASE_DEFAULTS__;return t?JSON.parse(t):void 0})()||(()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&c(t[1]);return e&&JSON.parse(e)})()}catch(t){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`)}},U=()=>{var t;return null===(t=y())||void 0===t?void 0:t.config},re=t=>{var e;return null===(e=y())||void 0===e?void 0:e[`_${t}`]};class oe{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,a)=>{n?this.reject(n):this.resolve(a),"function"==typeof e&&(this.promise.catch(()=>{}),1===e.length?e(n):e(n,a))}}}function pe(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const a=e||"demo-project",i=t.iat||0,d=t.sub||t.user_id;if(!d)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const m=Object.assign({iss:`https://securetoken.google.com/${a}`,aud:a,iat:i,exp:i+3600,auth_time:i,sub:d,user_id:d,firebase:{sign_in_provider:"custom",identities:{}}},t);return[O(JSON.stringify({alg:"none",type:"JWT"})),O(JSON.stringify(m)),""].join(".")}function w(){return typeof navigator<"u"&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function V(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(w())}function R(){var t;const e=null===(t=y())||void 0===t?void 0:t.forceEnvironment;if("node"===e)return!0;if("browser"===e)return!1;try{return"[object process]"===Object.prototype.toString.call(global.process)}catch{return!1}}function X(){return typeof window<"u"||Z()}function Z(){return typeof WorkerGlobalScope<"u"&&typeof self<"u"&&self instanceof WorkerGlobalScope}function me(){const t="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof t&&void 0!==t.id}function ae(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function Q(){const t=w();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Ie(){return!R()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function we(){try{return"object"==typeof indexedDB}catch{return!1}}function Ce(){return new Promise((t,e)=>{try{let n=!0;const a="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(a);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(a),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var d;e((null===(d=i.error)||void 0===d?void 0:d.message)||"")}}catch(n){e(n)}})}class ce extends Error{constructor(e,n,a){super(n),this.code=e,this.customData=a,this.name="FirebaseError",Object.setPrototypeOf(this,ce.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ge.prototype.create)}}class ge{constructor(e,n,a){this.service=e,this.serviceName=n,this.errors=a}create(e,...n){const a=n[0]||{},i=`${this.service}/${e}`,d=this.errors[e],m=d?function Oe(t,e){return t.replace(xe,(n,a)=>{const i=e[a];return null!=i?String(i):`<${a}?>`})}(d,a):"Error";return new ce(i,`${this.serviceName}: ${m} (${i}).`,a)}}const xe=/\{\$([^}]+)}/g;function Ne(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Te(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ve(t,e){if(t===e)return!0;const n=Object.keys(t),a=Object.keys(e);for(const i of n){if(!a.includes(i))return!1;const d=t[i],m=e[i];if(Ee(d)&&Ee(m)){if(!ve(d,m))return!1}else if(d!==m)return!1}for(const i of a)if(!n.includes(i))return!1;return!0}function Ee(t){return null!==t&&"object"==typeof t}function Be(t){const e=[];for(const[n,a]of Object.entries(t))Array.isArray(a)?a.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(a));return e.length?"&"+e.join("&"):""}function ie(t){const e={};return t.replace(/^\?/,"").split("&").forEach(a=>{if(a){const[i,d]=a.split("=");e[decodeURIComponent(i)]=decodeURIComponent(d)}}),e}function Re(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function ee(t,e){const n=new te(t,e);return n.subscribe.bind(n)}class te{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(a=>{this.error(a)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,a){let i;if(void 0===e&&void 0===n&&void 0===a)throw new Error("Missing Observer.");i=function Me(t,e){if("object"!=typeof t||null===t)return!1;for(const n of e)if(n in t&&"function"==typeof t[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:n,complete:a},void 0===i.next&&(i.next=ne),void 0===i.error&&(i.error=ne),void 0===i.complete&&(i.complete=ne);const d=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),d}unsubscribeOne(e){void 0===this.observers||void 0===this.observers[e]||(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{n(this.observers[e])}catch(a){typeof console<"u"&&console.error&&console.error(a)}})}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ne(){}function ue(t){return t&&t._delegate?t._delegate:t}},3345:(se,F,C)=>{C.d(F,{A:()=>j});var _=C(1076),h=C(1362),D=C(5471),A=C(8041);class k{constructor(E,y){this._delegate=E,this.firebase=y,(0,D._addComponent)(E,new h.uA("app-compat",()=>this,"PUBLIC")),this.container=E.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(E){this._delegate.automaticDataCollectionEnabled=E}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(E=>{this._delegate.checkDestroyed(),E()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),(0,D.deleteApp)(this._delegate)))}_getService(E,y=D._DEFAULT_ENTRY_NAME){var Y;this._delegate.checkDestroyed();const K=this._delegate.container.getProvider(E);return!K.isInitialized()&&"EXPLICIT"===(null===(Y=K.getComponent())||void 0===Y?void 0:Y.instantiationMode)&&K.initialize(),K.getImmediate({identifier:y})}_removeServiceInstance(E,y=D._DEFAULT_ENTRY_NAME){this._delegate.container.getProvider(E).clearInstance(y)}_addComponent(E){(0,D._addComponent)(this._delegate,E)}_addOrOverwriteComponent(E){(0,D._addOrOverwriteComponent)(this._delegate,E)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}const P=new _.FA("app-compat","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."}),c=function O(){const x=function $(x){const E={},y={__esModule:!0,initializeApp:function U(w,V={}){const R=D.initializeApp(w,V);if((0,_.gR)(E,R.name))return E[R.name];const X=new x(R,y);return E[R.name]=X,X},app:K,registerVersion:D.registerVersion,setLogLevel:D.setLogLevel,onLog:D.onLog,apps:null,SDK_VERSION:D.SDK_VERSION,INTERNAL:{registerComponent:function oe(w){const V=w.name,R=V.replace("-compat","");if(D._registerComponent(w)&&"PUBLIC"===w.type){const X=(Z=K())=>{if("function"!=typeof Z[R])throw P.create("invalid-app-argument",{appName:V});return Z[R]()};void 0!==w.serviceProps&&(0,_.zw)(X,w.serviceProps),y[R]=X,x.prototype[R]=function(...Z){return this._getService.bind(this,V).apply(this,w.multipleInstances?Z:[])}}return"PUBLIC"===w.type?y[R]:null},removeApp:function Y(w){delete E[w]},useAsService:function pe(w,V){return"serverAuth"===V?null:V},modularAPIs:D}};function K(w){if(!(0,_.gR)(E,w=w||D._DEFAULT_ENTRY_NAME))throw P.create("no-app",{appName:w});return E[w]}return y.default=y,Object.defineProperty(y,"apps",{get:function re(){return Object.keys(E).map(w=>E[w])}}),K.App=x,y}(k);return x.INTERNAL=Object.assign(Object.assign({},x.INTERNAL),{createFirebaseNamespace:O,extendNamespace:function E(y){(0,_.zw)(x,y)},createSubscribe:_.tD,ErrorFactory:_.FA,deepExtend:_.zw}),x}(),l=new A.Vy("@firebase/app-compat");if((0,_.Bd)()&&void 0!==self.firebase){l.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");const x=self.firebase.SDK_VERSION;x&&x.indexOf("LITE")>=0&&l.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")}const j=c;!function S(x){(0,D.registerVersion)("@firebase/app-compat","0.2.37",x)}()},5471:(se,F,C)=>{C.r(F),C.d(F,{FirebaseError:()=>A.g,SDK_VERSION:()=>ke,_DEFAULT_ENTRY_NAME:()=>ie,_addComponent:()=>ye,_addOrOverwriteComponent:()=>Me,_apps:()=>q,_clearComponents:()=>et,_components:()=>te,_getProvider:()=>Le,_isFirebaseApp:()=>Pe,_isFirebaseServerApp:()=>qe,_registerComponent:()=>ne,_removeServiceInstance:()=>de,_serverApps:()=>ee,deleteApp:()=>De,getApp:()=>nt,getApps:()=>rt,initializeApp:()=>Ae,initializeServerApp:()=>je,onLog:()=>e,registerVersion:()=>t,setLogLevel:()=>n});var _=C(467),h=C(1362),D=C(8041),A=C(1076);const k=(s,r)=>r.some(o=>s instanceof o);let L,P;const c=new WeakMap,l=new WeakMap,u=new WeakMap,v=new WeakMap,S=new WeakMap;let E={get(s,r,o){if(s instanceof IDBTransaction){if("done"===r)return l.get(s);if("objectStoreNames"===r)return s.objectStoreNames||u.get(s);if("store"===r)return o.objectStoreNames[1]?void 0:o.objectStore(o.objectStoreNames[0])}return U(s[r])},set:(s,r,o)=>(s[r]=o,!0),has:(s,r)=>s instanceof IDBTransaction&&("done"===r||"store"===r)||r in s};function K(s){return"function"==typeof s?function Y(s){return s!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?function O(){return P||(P=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}().includes(s)?function(...r){return s.apply(re(this),r),U(c.get(this))}:function(...r){return U(s.apply(re(this),r))}:function(r,...o){const f=s.call(re(this),r,...o);return u.set(f,r.sort?r.sort():[r]),U(f)}}(s):(s instanceof IDBTransaction&&function x(s){if(l.has(s))return;const r=new Promise((o,f)=>{const p=()=>{s.removeEventListener("complete",b),s.removeEventListener("error",g),s.removeEventListener("abort",g)},b=()=>{o(),p()},g=()=>{f(s.error||new DOMException("AbortError","AbortError")),p()};s.addEventListener("complete",b),s.addEventListener("error",g),s.addEventListener("abort",g)});l.set(s,r)}(s),k(s,function $(){return L||(L=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}())?new Proxy(s,E):s)}function U(s){if(s instanceof IDBRequest)return function j(s){const r=new Promise((o,f)=>{const p=()=>{s.removeEventListener("success",b),s.removeEventListener("error",g)},b=()=>{o(U(s.result)),p()},g=()=>{f(s.error),p()};s.addEventListener("success",b),s.addEventListener("error",g)});return r.then(o=>{o instanceof IDBCursor&&c.set(o,s)}).catch(()=>{}),S.set(r,s),r}(s);if(v.has(s))return v.get(s);const r=K(s);return r!==s&&(v.set(s,r),S.set(r,s)),r}const re=s=>S.get(s),w=["get","getKey","getAll","getAllKeys","count"],V=["put","add","delete","clear"],R=new Map;function X(s,r){if(!(s instanceof IDBDatabase)||r in s||"string"!=typeof r)return;if(R.get(r))return R.get(r);const o=r.replace(/FromIndex$/,""),f=r!==o,p=V.includes(o);if(!(o in(f?IDBIndex:IDBObjectStore).prototype)||!p&&!w.includes(o))return;const b=function(){var g=(0,_.A)(function*(T,...B){const J=this.transaction(T,p?"readwrite":"readonly");let he=J.store;return f&&(he=he.index(B.shift())),(yield Promise.all([he[o](...B),p&&J.done]))[0]});return function(B){return g.apply(this,arguments)}}();return R.set(r,b),b}!function y(s){E=s(E)}(s=>({...s,get:(r,o,f)=>X(r,o)||s.get(r,o,f),has:(r,o)=>!!X(r,o)||s.has(r,o)}));class Z{constructor(r){this.container=r}getPlatformInfoString(){return this.container.getProviders().map(o=>{if(function me(s){const r=s.getComponent();return"VERSION"===r?.type}(o)){const f=o.getImmediate();return`${f.library}/${f.version}`}return null}).filter(o=>o).join(" ")}}const ae="@firebase/app",be="0.10.7",Q=new D.Vy("@firebase/app"),ie="[DEFAULT]",Re={[ae]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","@firebase/vertexai-preview":"fire-vertex","fire-js":"fire-js",firebase:"fire-js-all"},q=new Map,ee=new Map,te=new Map;function ye(s,r){try{s.container.addComponent(r)}catch(o){Q.debug(`Component ${r.name} failed to register with FirebaseApp ${s.name}`,o)}}function Me(s,r){s.container.addOrOverwriteComponent(r)}function ne(s){const r=s.name;if(te.has(r))return Q.debug(`There were multiple attempts to register component ${r}.`),!1;te.set(r,s);for(const o of q.values())ye(o,s);for(const o of ee.values())ye(o,s);return!0}function Le(s,r){const o=s.container.getProvider("heartbeat").getImmediate({optional:!0});return o&&o.triggerHeartbeat(),s.container.getProvider(r)}function de(s,r,o=ie){Le(s,r).clearInstance(o)}function Pe(s){return void 0!==s.options}function qe(s){return void 0!==s.settings}function et(){te.clear()}const z=new A.FA("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."});class Fe{constructor(r,o,f){this._isDeleted=!1,this._options=Object.assign({},r),this._config=Object.assign({},o),this._name=o.name,this._automaticDataCollectionEnabled=o.automaticDataCollectionEnabled,this._container=f,this.container.addComponent(new h.uA("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(r){this.checkDestroyed(),this._automaticDataCollectionEnabled=r}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(r){this._isDeleted=r}checkDestroyed(){if(this.isDeleted)throw z.create("app-deleted",{appName:this._name})}}class $e extends Fe{constructor(r,o,f,p){const b=void 0!==o.automaticDataCollectionEnabled&&o.automaticDataCollectionEnabled,g={name:f,automaticDataCollectionEnabled:b};super(void 0!==r.apiKey?r:r.options,g,p),this._serverConfig=Object.assign({automaticDataCollectionEnabled:b},o),this._finalizationRegistry=null,typeof FinalizationRegistry<"u"&&(this._finalizationRegistry=new FinalizationRegistry(()=>{this.automaticCleanup()})),this._refCount=0,this.incRefCount(this._serverConfig.releaseOnDeref),this._serverConfig.releaseOnDeref=void 0,o.releaseOnDeref=void 0,t(ae,be,"serverapp")}toJSON(){}get refCount(){return this._refCount}incRefCount(r){this.isDeleted||(this._refCount++,void 0!==r&&null!==this._finalizationRegistry&&this._finalizationRegistry.register(r,this))}decRefCount(){return this.isDeleted?0:--this._refCount}automaticCleanup(){De(this)}get settings(){return this.checkDestroyed(),this._serverConfig}checkDestroyed(){if(this.isDeleted)throw z.create("server-app-deleted")}}const ke="10.12.4";function Ae(s,r={}){let o=s;"object"!=typeof r&&(r={name:r});const f=Object.assign({name:ie,automaticDataCollectionEnabled:!1},r),p=f.name;if("string"!=typeof p||!p)throw z.create("bad-app-name",{appName:String(p)});if(o||(o=(0,A.T9)()),!o)throw z.create("no-options");const b=q.get(p);if(b){if((0,A.bD)(o,b.options)&&(0,A.bD)(f,b.config))return b;throw z.create("duplicate-app",{appName:p})}const g=new h.h1(p);for(const B of te.values())g.addComponent(B);const T=new Fe(o,f,g);return q.set(p,T),T}function je(s,r){if((0,A.Bd)()&&!(0,A.p7)())throw z.create("invalid-server-app-environment");let o;void 0===r.automaticDataCollectionEnabled&&(r.automaticDataCollectionEnabled=!1),o=Pe(s)?s.options:s;const f=Object.assign(Object.assign({},r),o);if(void 0!==f.releaseOnDeref&&delete f.releaseOnDeref,void 0!==r.releaseOnDeref&&typeof FinalizationRegistry>"u")throw z.create("finalization-registry-not-supported",{});const b=""+(J=JSON.stringify(f),[...J].reduce((he,ft)=>Math.imul(31,he)+ft.charCodeAt(0)|0,0)),g=ee.get(b);var J;if(g)return g.incRefCount(r.releaseOnDeref),g;const T=new h.h1(b);for(const J of te.values())T.addComponent(J);const B=new $e(o,r,b,T);return ee.set(b,B),B}function nt(s=ie){const r=q.get(s);if(!r&&s===ie&&(0,A.T9)())return Ae();if(!r)throw z.create("no-app",{appName:s});return r}function rt(){return Array.from(q.values())}function De(s){return ue.apply(this,arguments)}function ue(){return(ue=(0,_.A)(function*(s){let r=!1;const o=s.name;q.has(o)?(r=!0,q.delete(o)):ee.has(o)&&s.decRefCount()<=0&&(ee.delete(o),r=!0),r&&(yield Promise.all(s.container.getProviders().map(f=>f.delete())),s.isDeleted=!0)})).apply(this,arguments)}function t(s,r,o){var f;let p=null!==(f=Re[s])&&void 0!==f?f:s;o&&(p+=`-${o}`);const b=p.match(/\s|\//),g=r.match(/\s|\//);if(b||g){const T=[`Unable to register library "${p}" with version "${r}":`];return b&&T.push(`library name "${p}" contains illegal characters (whitespace or "/")`),b&&g&&T.push("and"),g&&T.push(`version name "${r}" contains illegal characters (whitespace or "/")`),void Q.warn(T.join(" "))}ne(new h.uA(`${p}-version`,()=>({library:p,version:r}),"VERSION"))}function e(s,r){if(null!==s&&"function"!=typeof s)throw z.create("invalid-log-argument");(0,D.Ey)(s,r)}function n(s){(0,D.He)(s)}const a="firebase-heartbeat-database",i=1,d="firebase-heartbeat-store";let m=null;function N(){return m||(m=function oe(s,r,{blocked:o,upgrade:f,blocking:p,terminated:b}={}){const g=indexedDB.open(s,r),T=U(g);return f&&g.addEventListener("upgradeneeded",B=>{f(U(g.result),B.oldVersion,B.newVersion,U(g.transaction),B)}),o&&g.addEventListener("blocked",B=>o(B.oldVersion,B.newVersion,B)),T.then(B=>{b&&B.addEventListener("close",()=>b()),p&&B.addEventListener("versionchange",J=>p(J.oldVersion,J.newVersion,J))}).catch(()=>{}),T}(a,i,{upgrade:(s,r)=>{if(0===r)try{s.createObjectStore(d)}catch(o){console.warn(o)}}}).catch(s=>{throw z.create("idb-open",{originalErrorMessage:s.message})})),m}function M(){return(M=(0,_.A)(function*(s){try{const o=(yield N()).transaction(d),f=yield o.objectStore(d).get(W(s));return yield o.done,f}catch(r){if(r instanceof A.g)Q.warn(r.message);else{const o=z.create("idb-get",{originalErrorMessage:r?.message});Q.warn(o.message)}}})).apply(this,arguments)}function G(s,r){return I.apply(this,arguments)}function I(){return(I=(0,_.A)(function*(s,r){try{const f=(yield N()).transaction(d,"readwrite");yield f.objectStore(d).put(r,W(s)),yield f.done}catch(o){if(o instanceof A.g)Q.warn(o.message);else{const f=z.create("idb-set",{originalErrorMessage:o?.message});Q.warn(f.message)}}})).apply(this,arguments)}function W(s){return`${s.name}!${s.options.appId}`}class ot{constructor(r){this.container=r,this._heartbeatsCache=null;const o=this.container.getProvider("app").getImmediate();this._storage=new ct(o),this._heartbeatsCachePromise=this._storage.read().then(f=>(this._heartbeatsCache=f,f))}triggerHeartbeat(){var r=this;return(0,_.A)(function*(){var o,f;const b=r.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),g=it();if((null!=(null===(o=r._heartbeatsCache)||void 0===o?void 0:o.heartbeats)||(r._heartbeatsCache=yield r._heartbeatsCachePromise,null!=(null===(f=r._heartbeatsCache)||void 0===f?void 0:f.heartbeats)))&&r._heartbeatsCache.lastSentHeartbeatDate!==g&&!r._heartbeatsCache.heartbeats.some(T=>T.date===g))return r._heartbeatsCache.heartbeats.push({date:g,agent:b}),r._heartbeatsCache.heartbeats=r._heartbeatsCache.heartbeats.filter(T=>{const B=new Date(T.date).valueOf();return Date.now()-B<=2592e6}),r._storage.overwrite(r._heartbeatsCache)})()}getHeartbeatsHeader(){var r=this;return(0,_.A)(function*(){var o;if(null===r._heartbeatsCache&&(yield r._heartbeatsCachePromise),null==(null===(o=r._heartbeatsCache)||void 0===o?void 0:o.heartbeats)||0===r._heartbeatsCache.heartbeats.length)return"";const f=it(),{heartbeatsToSend:p,unsentEntries:b}=function at(s,r=1024){const o=[];let f=s.slice();for(const p of s){const b=o.find(g=>g.agent===p.agent);if(b){if(b.dates.push(p.date),st(o)>r){b.dates.pop();break}}else if(o.push({agent:p.agent,dates:[p.date]}),st(o)>r){o.pop();break}f=f.slice(1)}return{heartbeatsToSend:o,unsentEntries:f}}(r._heartbeatsCache.heartbeats),g=(0,A.Uj)(JSON.stringify({version:2,heartbeats:p}));return r._heartbeatsCache.lastSentHeartbeatDate=f,b.length>0?(r._heartbeatsCache.heartbeats=b,yield r._storage.overwrite(r._heartbeatsCache)):(r._heartbeatsCache.heartbeats=[],r._storage.overwrite(r._heartbeatsCache)),g})()}}function it(){return(new Date).toISOString().substring(0,10)}class ct{constructor(r){this.app=r,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}runIndexedDBEnvironmentCheck(){return(0,_.A)(function*(){return!!(0,A.zW)()&&(0,A.eX)().then(()=>!0).catch(()=>!1)})()}read(){var r=this;return(0,_.A)(function*(){if(yield r._canUseIndexedDBPromise){const f=yield function H(s){return M.apply(this,arguments)}(r.app);return f?.heartbeats?f:{heartbeats:[]}}return{heartbeats:[]}})()}overwrite(r){var o=this;return(0,_.A)(function*(){var f;if(yield o._canUseIndexedDBPromise){const b=yield o.read();return G(o.app,{lastSentHeartbeatDate:null!==(f=r.lastSentHeartbeatDate)&&void 0!==f?f:b.lastSentHeartbeatDate,heartbeats:r.heartbeats})}})()}add(r){var o=this;return(0,_.A)(function*(){var f;if(yield o._canUseIndexedDBPromise){const b=yield o.read();return G(o.app,{lastSentHeartbeatDate:null!==(f=r.lastSentHeartbeatDate)&&void 0!==f?f:b.lastSentHeartbeatDate,heartbeats:[...b.heartbeats,...r.heartbeats]})}})()}}function st(s){return(0,A.Uj)(JSON.stringify({version:2,heartbeats:s})).length}!function lt(s){ne(new h.uA("platform-logger",r=>new Z(r),"PRIVATE")),ne(new h.uA("heartbeat",r=>new ot(r),"PRIVATE")),t(ae,be,s),t(ae,be,"esm2017"),t("fire-js","")}("")},1362:(se,F,C)=>{C.d(F,{h1:()=>$,uA:()=>D});var _=C(467),h=C(1076);class D{constructor(c,l,u){this.name=c,this.instanceFactory=l,this.type=u,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(c){return this.instantiationMode=c,this}setMultipleInstances(c){return this.multipleInstances=c,this}setServiceProps(c){return this.serviceProps=c,this}setInstanceCreatedCallback(c){return this.onInstanceCreated=c,this}}const A="[DEFAULT]";class k{constructor(c,l){this.name=c,this.container=l,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(c){const l=this.normalizeInstanceIdentifier(c);if(!this.instancesDeferred.has(l)){const u=new h.cY;if(this.instancesDeferred.set(l,u),this.isInitialized(l)||this.shouldAutoInitialize())try{const v=this.getOrInitializeService({instanceIdentifier:l});v&&u.resolve(v)}catch{}}return this.instancesDeferred.get(l).promise}getImmediate(c){var l;const u=this.normalizeInstanceIdentifier(c?.identifier),v=null!==(l=c?.optional)&&void 0!==l&&l;if(!this.isInitialized(u)&&!this.shouldAutoInitialize()){if(v)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:u})}catch(S){if(v)return null;throw S}}getComponent(){return this.component}setComponent(c){if(c.name!==this.name)throw Error(`Mismatching Component ${c.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=c,this.shouldAutoInitialize()){if(function P(O){return"EAGER"===O.instantiationMode}(c))try{this.getOrInitializeService({instanceIdentifier:A})}catch{}for(const[l,u]of this.instancesDeferred.entries()){const v=this.normalizeInstanceIdentifier(l);try{const S=this.getOrInitializeService({instanceIdentifier:v});u.resolve(S)}catch{}}}}clearInstance(c=A){this.instancesDeferred.delete(c),this.instancesOptions.delete(c),this.instances.delete(c)}delete(){var c=this;return(0,_.A)(function*(){const l=Array.from(c.instances.values());yield Promise.all([...l.filter(u=>"INTERNAL"in u).map(u=>u.INTERNAL.delete()),...l.filter(u=>"_delete"in u).map(u=>u._delete())])})()}isComponentSet(){return null!=this.component}isInitialized(c=A){return this.instances.has(c)}getOptions(c=A){return this.instancesOptions.get(c)||{}}initialize(c={}){const{options:l={}}=c,u=this.normalizeInstanceIdentifier(c.instanceIdentifier);if(this.isInitialized(u))throw Error(`${this.name}(${u}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const v=this.getOrInitializeService({instanceIdentifier:u,options:l});for(const[S,j]of this.instancesDeferred.entries())u===this.normalizeInstanceIdentifier(S)&&j.resolve(v);return v}onInit(c,l){var u;const v=this.normalizeInstanceIdentifier(l),S=null!==(u=this.onInitCallbacks.get(v))&&void 0!==u?u:new Set;S.add(c),this.onInitCallbacks.set(v,S);const j=this.instances.get(v);return j&&c(j,v),()=>{S.delete(c)}}invokeOnInitCallbacks(c,l){const u=this.onInitCallbacks.get(l);if(u)for(const v of u)try{v(c,l)}catch{}}getOrInitializeService({instanceIdentifier:c,options:l={}}){let u=this.instances.get(c);if(!u&&this.component&&(u=this.component.instanceFactory(this.container,{instanceIdentifier:(O=c,O===A?void 0:O),options:l}),this.instances.set(c,u),this.instancesOptions.set(c,l),this.invokeOnInitCallbacks(u,c),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,c,u)}catch{}var O;return u||null}normalizeInstanceIdentifier(c=A){return this.component?this.component.multipleInstances?c:A:c}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class ${constructor(c){this.name=c,this.providers=new Map}addComponent(c){const l=this.getProvider(c.name);if(l.isComponentSet())throw new Error(`Component ${c.name} has already been registered with ${this.name}`);l.setComponent(c)}addOrOverwriteComponent(c){this.getProvider(c.name).isComponentSet()&&this.providers.delete(c.name),this.addComponent(c)}getProvider(c){if(this.providers.has(c))return this.providers.get(c);const l=new k(c,this);return this.providers.set(c,l),l}getProviders(){return Array.from(this.providers.values())}}},8041:(se,F,C)=>{C.d(F,{$b:()=>h,Ey:()=>O,He:()=>$,Vy:()=>P});const _=[];var h=function(c){return c[c.DEBUG=0]="DEBUG",c[c.VERBOSE=1]="VERBOSE",c[c.INFO=2]="INFO",c[c.WARN=3]="WARN",c[c.ERROR=4]="ERROR",c[c.SILENT=5]="SILENT",c}(h||{});const D={debug:h.DEBUG,verbose:h.VERBOSE,info:h.INFO,warn:h.WARN,error:h.ERROR,silent:h.SILENT},A=h.INFO,k={[h.DEBUG]:"log",[h.VERBOSE]:"log",[h.INFO]:"info",[h.WARN]:"warn",[h.ERROR]:"error"},L=(c,l,...u)=>{if(l<c.logLevel)return;const v=(new Date).toISOString(),S=k[l];if(!S)throw new Error(`Attempted to log a message with an invalid logType (value: ${l})`);console[S](`[${v}]  ${c.name}:`,...u)};class P{constructor(l){this.name=l,this._logLevel=A,this._logHandler=L,this._userLogHandler=null,_.push(this)}get logLevel(){return this._logLevel}set logLevel(l){if(!(l in h))throw new TypeError(`Invalid value "${l}" assigned to \`logLevel\``);this._logLevel=l}setLogLevel(l){this._logLevel="string"==typeof l?D[l]:l}get logHandler(){return this._logHandler}set logHandler(l){if("function"!=typeof l)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=l}get userLogHandler(){return this._userLogHandler}set userLogHandler(l){this._userLogHandler=l}debug(...l){this._userLogHandler&&this._userLogHandler(this,h.DEBUG,...l),this._logHandler(this,h.DEBUG,...l)}log(...l){this._userLogHandler&&this._userLogHandler(this,h.VERBOSE,...l),this._logHandler(this,h.VERBOSE,...l)}info(...l){this._userLogHandler&&this._userLogHandler(this,h.INFO,...l),this._logHandler(this,h.INFO,...l)}warn(...l){this._userLogHandler&&this._userLogHandler(this,h.WARN,...l),this._logHandler(this,h.WARN,...l)}error(...l){this._userLogHandler&&this._userLogHandler(this,h.ERROR,...l),this._logHandler(this,h.ERROR,...l)}}function $(c){_.forEach(l=>{l.setLogLevel(c)})}function O(c,l){for(const u of _){let v=null;l&&l.level&&(v=D[l.level]),u.userLogHandler=null===c?null:(S,j,...x)=>{const E=x.map(y=>{if(null==y)return null;if("string"==typeof y)return y;if("number"==typeof y||"boolean"==typeof y)return y.toString();if(y instanceof Error)return y.message;try{return JSON.stringify(y)}catch{return null}}).filter(y=>y).join(" ");j>=(v??S.logLevel)&&c({level:h[j].toLowerCase(),message:E,args:x,type:S.name})}}}},7935:(se,F,C)=>{C.r(F),C.d(F,{default:()=>_.A});var _=C(3345);_.A.registerVersion("firebase","10.12.4","app-compat")},467:(se,F,C)=>{function _(D,A,k,L,P,$,O){try{var c=D[$](O),l=c.value}catch(u){return void k(u)}c.done?A(l):Promise.resolve(l).then(L,P)}function h(D){return function(){var A=this,k=arguments;return new Promise(function(L,P){var $=D.apply(A,k);function O(l){_($,L,P,O,c,"next",l)}function c(l){_($,L,P,O,c,"throw",l)}O(void 0)})}}C.d(F,{A:()=>h})}}]);