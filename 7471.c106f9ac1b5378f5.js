(self.webpackChunkcd_comm=self.webpackChunkcd_comm||[]).push([[7471],{80529:(Je,W,w)=>{w.r(W),w.d(W,{HTTP_INTERCEPTORS:()=>U,HttpBackend:()=>O,HttpClient:()=>te,HttpClientJsonpModule:()=>Ae,HttpClientModule:()=>_e,HttpClientXsrfModule:()=>Fe,HttpContext:()=>Q,HttpContextToken:()=>ve,HttpErrorResponse:()=>k,HttpEventType:()=>d,HttpFeatureKind:()=>l,HttpHandler:()=>I,HttpHeaderResponse:()=>S,HttpHeaders:()=>g,HttpParams:()=>E,HttpRequest:()=>b,HttpResponse:()=>T,HttpResponseBase:()=>M,HttpUrlEncodingCodec:()=>G,HttpXhrBackend:()=>z,HttpXsrfTokenExtractor:()=>_,JsonpClientBackend:()=>B,JsonpInterceptor:()=>Oe,XhrFactory:()=>Le,provideHttpClient:()=>le,withInterceptors:()=>Se,withInterceptorsFromDi:()=>he,withJsonpSupport:()=>fe,withNoXsrfProtection:()=>pe,withRequestsMadeViaParent:()=>De,withXsrfConfiguration:()=>A,\u0275HttpInterceptingHandler:()=>D,\u0275HttpInterceptorHandler:()=>D});var N=w(35228),i=w(87675),L=w(33635),C=w(65893);class I{}class O{}class g{constructor(e){this.normalizedNames=new Map,this.lazyUpdate=null,e?this.lazyInit="string"==typeof e?()=>{this.headers=new Map,e.split("\n").forEach(t=>{const s=t.indexOf(":");if(s>0){const r=t.slice(0,s),o=r.toLowerCase(),c=t.slice(s+1).trim();this.maybeSetNormalizedName(r,o),this.headers.has(o)?this.headers.get(o).push(c):this.headers.set(o,[c])}})}:()=>{this.headers=new Map,Object.keys(e).forEach(t=>{let s=e[t];const r=t.toLowerCase();"string"==typeof s&&(s=[s]),s.length>0&&(this.headers.set(r,s),this.maybeSetNormalizedName(t,r))})}:this.headers=new Map}has(e){return this.init(),this.headers.has(e.toLowerCase())}get(e){this.init();const t=this.headers.get(e.toLowerCase());return t&&t.length>0?t[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(e){return this.init(),this.headers.get(e.toLowerCase())||null}append(e,t){return this.clone({name:e,value:t,op:"a"})}set(e,t){return this.clone({name:e,value:t,op:"s"})}delete(e,t){return this.clone({name:e,value:t,op:"d"})}maybeSetNormalizedName(e,t){this.normalizedNames.has(t)||this.normalizedNames.set(t,e)}init(){this.lazyInit&&(this.lazyInit instanceof g?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(e=>this.applyUpdate(e)),this.lazyUpdate=null))}copyFrom(e){e.init(),Array.from(e.headers.keys()).forEach(t=>{this.headers.set(t,e.headers.get(t)),this.normalizedNames.set(t,e.normalizedNames.get(t))})}clone(e){const t=new g;return t.lazyInit=this.lazyInit&&this.lazyInit instanceof g?this.lazyInit:this,t.lazyUpdate=(this.lazyUpdate||[]).concat([e]),t}applyUpdate(e){const t=e.name.toLowerCase();switch(e.op){case"a":case"s":let s=e.value;if("string"==typeof s&&(s=[s]),0===s.length)return;this.maybeSetNormalizedName(e.name,t);const r=("a"===e.op?this.headers.get(t):void 0)||[];r.push(...s),this.headers.set(t,r);break;case"d":const o=e.value;if(o){let c=this.headers.get(t);if(!c)return;c=c.filter(h=>-1===o.indexOf(h)),0===c.length?(this.headers.delete(t),this.normalizedNames.delete(t)):this.headers.set(t,c)}else this.headers.delete(t),this.normalizedNames.delete(t)}}forEach(e){this.init(),Array.from(this.normalizedNames.keys()).forEach(t=>e(this.normalizedNames.get(t),this.headers.get(t)))}}class G{encodeKey(e){return Y(e)}encodeValue(e){return Y(e)}decodeKey(e){return decodeURIComponent(e)}decodeValue(e){return decodeURIComponent(e)}}const ge=/%(\d[a-f0-9])/gi,Ee={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function Y(n){return encodeURIComponent(n).replace(ge,(e,t)=>Ee[t]??e)}function j(n){return`${n}`}class E{constructor(e={}){if(this.updates=null,this.cloneFrom=null,this.encoder=e.encoder||new G,e.fromString){if(e.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=function me(n,e){const t=new Map;return n.length>0&&n.replace(/^\?/,"").split("&").forEach(r=>{const o=r.indexOf("="),[c,h]=-1==o?[e.decodeKey(r),""]:[e.decodeKey(r.slice(0,o)),e.decodeValue(r.slice(o+1))],a=t.get(c)||[];a.push(h),t.set(c,a)}),t}(e.fromString,this.encoder)}else e.fromObject?(this.map=new Map,Object.keys(e.fromObject).forEach(t=>{const s=e.fromObject[t],r=Array.isArray(s)?s.map(j):[j(s)];this.map.set(t,r)})):this.map=null}has(e){return this.init(),this.map.has(e)}get(e){this.init();const t=this.map.get(e);return t?t[0]:null}getAll(e){return this.init(),this.map.get(e)||null}keys(){return this.init(),Array.from(this.map.keys())}append(e,t){return this.clone({param:e,value:t,op:"a"})}appendAll(e){const t=[];return Object.keys(e).forEach(s=>{const r=e[s];Array.isArray(r)?r.forEach(o=>{t.push({param:s,value:o,op:"a"})}):t.push({param:s,value:r,op:"a"})}),this.clone(t)}set(e,t){return this.clone({param:e,value:t,op:"s"})}delete(e,t){return this.clone({param:e,value:t,op:"d"})}toString(){return this.init(),this.keys().map(e=>{const t=this.encoder.encodeKey(e);return this.map.get(e).map(s=>t+"="+this.encoder.encodeValue(s)).join("&")}).filter(e=>""!==e).join("&")}clone(e){const t=new E({encoder:this.encoder});return t.cloneFrom=this.cloneFrom||this,t.updates=(this.updates||[]).concat(e),t}init(){null===this.map&&(this.map=new Map),null!==this.cloneFrom&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(e=>this.map.set(e,this.cloneFrom.map.get(e))),this.updates.forEach(e=>{switch(e.op){case"a":case"s":const t=("a"===e.op?this.map.get(e.param):void 0)||[];t.push(j(e.value)),this.map.set(e.param,t);break;case"d":if(void 0===e.value){this.map.delete(e.param);break}{let s=this.map.get(e.param)||[];const r=s.indexOf(j(e.value));-1!==r&&s.splice(r,1),s.length>0?this.map.set(e.param,s):this.map.delete(e.param)}}}),this.cloneFrom=this.updates=null)}}class ve{constructor(e){this.defaultValue=e}}class Q{constructor(){this.map=new Map}set(e,t){return this.map.set(e,t),this}get(e){return this.map.has(e)||this.map.set(e,e.defaultValue()),this.map.get(e)}delete(e){return this.map.delete(e),this}has(e){return this.map.has(e)}keys(){return this.map.keys()}}function Z(n){return typeof ArrayBuffer<"u"&&n instanceof ArrayBuffer}function q(n){return typeof Blob<"u"&&n instanceof Blob}function ee(n){return typeof FormData<"u"&&n instanceof FormData}class b{constructor(e,t,s,r){let o;if(this.url=t,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=e.toUpperCase(),function we(n){switch(n){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}(this.method)||r?(this.body=void 0!==s?s:null,o=r):o=s,o&&(this.reportProgress=!!o.reportProgress,this.withCredentials=!!o.withCredentials,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params)),this.headers||(this.headers=new g),this.context||(this.context=new Q),this.params){const c=this.params.toString();if(0===c.length)this.urlWithParams=t;else{const h=t.indexOf("?");this.urlWithParams=t+(-1===h?"?":h<t.length-1?"&":"")+c}}else this.params=new E,this.urlWithParams=t}serializeBody(){return null===this.body?null:Z(this.body)||q(this.body)||ee(this.body)||function Ce(n){return typeof URLSearchParams<"u"&&n instanceof URLSearchParams}(this.body)||"string"==typeof this.body?this.body:this.body instanceof E?this.body.toString():"object"==typeof this.body||"boolean"==typeof this.body||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return null===this.body||ee(this.body)?null:q(this.body)?this.body.type||null:Z(this.body)?null:"string"==typeof this.body?"text/plain":this.body instanceof E?"application/x-www-form-urlencoded;charset=UTF-8":"object"==typeof this.body||"number"==typeof this.body||"boolean"==typeof this.body?"application/json":null}clone(e={}){const t=e.method||this.method,s=e.url||this.url,r=e.responseType||this.responseType,o=void 0!==e.body?e.body:this.body,c=void 0!==e.withCredentials?e.withCredentials:this.withCredentials,h=void 0!==e.reportProgress?e.reportProgress:this.reportProgress;let a=e.headers||this.headers,f=e.params||this.params;const P=e.context??this.context;return void 0!==e.setHeaders&&(a=Object.keys(e.setHeaders).reduce((v,m)=>v.set(m,e.setHeaders[m]),a)),e.setParams&&(f=Object.keys(e.setParams).reduce((v,m)=>v.set(m,e.setParams[m]),f)),new b(t,s,o,{params:f,headers:a,context:P,reportProgress:h,responseType:r,withCredentials:c})}}var d=(()=>((d=d||{})[d.Sent=0]="Sent",d[d.UploadProgress=1]="UploadProgress",d[d.ResponseHeader=2]="ResponseHeader",d[d.DownloadProgress=3]="DownloadProgress",d[d.Response=4]="Response",d[d.User=5]="User",d))();class M{constructor(e,t=200,s="OK"){this.headers=e.headers||new g,this.status=void 0!==e.status?e.status:t,this.statusText=e.statusText||s,this.url=e.url||null,this.ok=this.status>=200&&this.status<300}}class S extends M{constructor(e={}){super(e),this.type=d.ResponseHeader}clone(e={}){return new S({headers:e.headers||this.headers,status:void 0!==e.status?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}}class T extends M{constructor(e={}){super(e),this.type=d.Response,this.body=void 0!==e.body?e.body:null}clone(e={}){return new T({body:void 0!==e.body?e.body:this.body,headers:e.headers||this.headers,status:void 0!==e.status?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}}class k extends M{constructor(e){super(e,0,"Unknown Error"),this.name="HttpErrorResponse",this.ok=!1,this.message=this.status>=200&&this.status<300?`Http failure during parsing for ${e.url||"(unknown url)"}`:`Http failure response for ${e.url||"(unknown url)"}: ${e.status} ${e.statusText}`,this.error=e.error||null}}function X(n,e){return{body:e,headers:n.headers,context:n.context,observe:n.observe,params:n.params,reportProgress:n.reportProgress,responseType:n.responseType,withCredentials:n.withCredentials}}let te=(()=>{class n{constructor(t){this.handler=t}request(t,s,r={}){let o;if(t instanceof b)o=t;else{let a,f;a=r.headers instanceof g?r.headers:new g(r.headers),r.params&&(f=r.params instanceof E?r.params:new E({fromObject:r.params})),o=new b(t,s,void 0!==r.body?r.body:null,{headers:a,context:r.context,params:f,reportProgress:r.reportProgress,responseType:r.responseType||"json",withCredentials:r.withCredentials})}const c=(0,L.of)(o).pipe((0,C.concatMap)(a=>this.handler.handle(a)));if(t instanceof b||"events"===r.observe)return c;const h=c.pipe((0,C.filter)(a=>a instanceof T));switch(r.observe||"body"){case"body":switch(o.responseType){case"arraybuffer":return h.pipe((0,C.map)(a=>{if(null!==a.body&&!(a.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return a.body}));case"blob":return h.pipe((0,C.map)(a=>{if(null!==a.body&&!(a.body instanceof Blob))throw new Error("Response is not a Blob.");return a.body}));case"text":return h.pipe((0,C.map)(a=>{if(null!==a.body&&"string"!=typeof a.body)throw new Error("Response is not a string.");return a.body}));default:return h.pipe((0,C.map)(a=>a.body))}case"response":return h;default:throw new Error(`Unreachable: unhandled observe type ${r.observe}}`)}}delete(t,s={}){return this.request("DELETE",t,s)}get(t,s={}){return this.request("GET",t,s)}head(t,s={}){return this.request("HEAD",t,s)}jsonp(t,s){return this.request("JSONP",t,{params:(new E).append(s,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(t,s={}){return this.request("OPTIONS",t,s)}patch(t,s,r={}){return this.request("PATCH",t,X(r,s))}post(t,s,r={}){return this.request("POST",t,X(r,s))}put(t,s,r={}){return this.request("PUT",t,X(r,s))}}return n.\u0275fac=function(t){return new(t||n)(i.\u0275\u0275inject(I))},n.\u0275prov=i.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac}),n})();function ne(n,e){return e(n)}function be(n,e){return(t,s)=>e.intercept(t,{handle:r=>n(r,s)})}const U=new i.InjectionToken("HTTP_INTERCEPTORS"),x=new i.InjectionToken("HTTP_INTERCEPTOR_FNS");function He(){let n=null;return(e,t)=>(null===n&&(n=((0,i.inject)(U,{optional:!0})??[]).reduceRight(be,ne)),n(e,t))}let J,D=(()=>{class n extends I{constructor(t,s){super(),this.backend=t,this.injector=s,this.chain=null}handle(t){if(null===this.chain){const s=Array.from(new Set(this.injector.get(x)));this.chain=s.reduceRight((r,o)=>function Te(n,e,t){return(s,r)=>t.runInContext(()=>e(s,o=>n(o,r)))}(r,o,this.injector),ne)}return this.chain(t,s=>this.backend.handle(s))}}return n.\u0275fac=function(t){return new(t||n)(i.\u0275\u0275inject(O),i.\u0275\u0275inject(i.EnvironmentInjector))},n.\u0275prov=i.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac}),n})(),Pe=0;class re{}function xe(){return"object"==typeof window?window:{}}let B=(()=>{class n{constructor(t,s){this.callbackMap=t,this.document=s,this.resolvedPromise=Promise.resolve()}nextCallback(){return"ng_jsonp_callback_"+Pe++}handle(t){if("JSONP"!==t.method)throw new Error("JSONP requests must use JSONP request method.");if("json"!==t.responseType)throw new Error("JSONP requests must use Json response type.");if(t.headers.keys().length>0)throw new Error("JSONP requests do not support headers.");return new L.Observable(s=>{const r=this.nextCallback(),o=t.urlWithParams.replace(/=JSONP_CALLBACK(&|$)/,`=${r}$1`),c=this.document.createElement("script");c.src=o;let h=null,a=!1;this.callbackMap[r]=m=>{delete this.callbackMap[r],h=m,a=!0};const f=()=>{c.parentNode&&c.parentNode.removeChild(c),delete this.callbackMap[r]};return c.addEventListener("load",m=>{this.resolvedPromise.then(()=>{f(),a?(s.next(new T({body:h,status:200,statusText:"OK",url:o})),s.complete()):s.error(new k({url:o,status:0,statusText:"JSONP Error",error:new Error("JSONP injected script did not invoke callback.")}))})}),c.addEventListener("error",m=>{f(),s.error(new k({error:m,status:0,statusText:"JSONP Error",url:o}))}),this.document.body.appendChild(c),s.next({type:d.Sent}),()=>{a||this.removeListeners(c),f()}})}removeListeners(t){J||(J=this.document.implementation.createHTMLDocument()),J.adoptNode(t)}}return n.\u0275fac=function(t){return new(t||n)(i.\u0275\u0275inject(re),i.\u0275\u0275inject(N.DOCUMENT))},n.\u0275prov=i.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac}),n})();function se(n,e){return"JSONP"===n.method?(0,i.inject)(B).handle(n):e(n)}let Oe=(()=>{class n{constructor(t){this.injector=t}intercept(t,s){return this.injector.runInContext(()=>se(t,r=>s.handle(r)))}}return n.\u0275fac=function(t){return new(t||n)(i.\u0275\u0275inject(i.EnvironmentInjector))},n.\u0275prov=i.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac}),n})();const je=/^\)\]\}',?\n/;let z=(()=>{class n{constructor(t){this.xhrFactory=t}handle(t){if("JSONP"===t.method)throw new Error("Attempted to construct Jsonp request without HttpClientJsonpModule installed.");return new L.Observable(s=>{const r=this.xhrFactory.build();if(r.open(t.method,t.urlWithParams),t.withCredentials&&(r.withCredentials=!0),t.headers.forEach((u,p)=>r.setRequestHeader(u,p.join(","))),t.headers.has("Accept")||r.setRequestHeader("Accept","application/json, text/plain, */*"),!t.headers.has("Content-Type")){const u=t.detectContentTypeHeader();null!==u&&r.setRequestHeader("Content-Type",u)}if(t.responseType){const u=t.responseType.toLowerCase();r.responseType="json"!==u?u:"text"}const o=t.serializeBody();let c=null;const h=()=>{if(null!==c)return c;const u=r.statusText||"OK",p=new g(r.getAllResponseHeaders()),R=function Me(n){return"responseURL"in n&&n.responseURL?n.responseURL:/^X-Request-URL:/m.test(n.getAllResponseHeaders())?n.getResponseHeader("X-Request-URL"):null}(r)||t.url;return c=new S({headers:p,status:r.status,statusText:u,url:R}),c},a=()=>{let{headers:u,status:p,statusText:R,url:ye}=h(),y=null;204!==p&&(y=typeof r.response>"u"?r.responseText:r.response),0===p&&(p=y?200:0);let $=p>=200&&p<300;if("json"===t.responseType&&"string"==typeof y){const Xe=y;y=y.replace(je,"");try{y=""!==y?JSON.parse(y):null}catch(Ue){y=Xe,$&&($=!1,y={error:Ue,text:y})}}$?(s.next(new T({body:y,headers:u,status:p,statusText:R,url:ye||void 0})),s.complete()):s.error(new k({error:y,headers:u,status:p,statusText:R,url:ye||void 0}))},f=u=>{const{url:p}=h(),R=new k({error:u,status:r.status||0,statusText:r.statusText||"Unknown Error",url:p||void 0});s.error(R)};let P=!1;const v=u=>{P||(s.next(h()),P=!0);let p={type:d.DownloadProgress,loaded:u.loaded};u.lengthComputable&&(p.total=u.total),"text"===t.responseType&&r.responseText&&(p.partialText=r.responseText),s.next(p)},m=u=>{let p={type:d.UploadProgress,loaded:u.loaded};u.lengthComputable&&(p.total=u.total),s.next(p)};return r.addEventListener("load",a),r.addEventListener("error",f),r.addEventListener("timeout",f),r.addEventListener("abort",f),t.reportProgress&&(r.addEventListener("progress",v),null!==o&&r.upload&&r.upload.addEventListener("progress",m)),r.send(o),s.next({type:d.Sent}),()=>{r.removeEventListener("error",f),r.removeEventListener("abort",f),r.removeEventListener("load",a),r.removeEventListener("timeout",f),t.reportProgress&&(r.removeEventListener("progress",v),null!==o&&r.upload&&r.upload.removeEventListener("progress",m)),r.readyState!==r.DONE&&r.abort()}})}}return n.\u0275fac=function(t){return new(t||n)(i.\u0275\u0275inject(N.XhrFactory))},n.\u0275prov=i.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac}),n})();const F=new i.InjectionToken("XSRF_ENABLED"),K="XSRF-TOKEN",oe=new i.InjectionToken("XSRF_COOKIE_NAME",{providedIn:"root",factory:()=>K}),V="X-XSRF-TOKEN",ie=new i.InjectionToken("XSRF_HEADER_NAME",{providedIn:"root",factory:()=>V});class _{}let ae=(()=>{class n{constructor(t,s,r){this.doc=t,this.platform=s,this.cookieName=r,this.lastCookieString="",this.lastToken=null,this.parseCount=0}getToken(){if("server"===this.platform)return null;const t=this.doc.cookie||"";return t!==this.lastCookieString&&(this.parseCount++,this.lastToken=(0,N.\u0275parseCookieValue)(t,this.cookieName),this.lastCookieString=t),this.lastToken}}return n.\u0275fac=function(t){return new(t||n)(i.\u0275\u0275inject(N.DOCUMENT),i.\u0275\u0275inject(i.PLATFORM_ID),i.\u0275\u0275inject(oe))},n.\u0275prov=i.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac}),n})();function ce(n,e){const t=n.url.toLowerCase();if(!(0,i.inject)(F)||"GET"===n.method||"HEAD"===n.method||t.startsWith("http://")||t.startsWith("https://"))return e(n);const s=(0,i.inject)(_).getToken(),r=(0,i.inject)(ie);return null!=s&&!n.headers.has(r)&&(n=n.clone({headers:n.headers.set(r,s)})),e(n)}let de=(()=>{class n{constructor(t){this.injector=t}intercept(t,s){return this.injector.runInContext(()=>ce(t,r=>s.handle(r)))}}return n.\u0275fac=function(t){return new(t||n)(i.\u0275\u0275inject(i.EnvironmentInjector))},n.\u0275prov=i.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac}),n})();var l=(()=>((l=l||{})[l.Interceptors=0]="Interceptors",l[l.LegacyInterceptors=1]="LegacyInterceptors",l[l.CustomXsrfConfiguration=2]="CustomXsrfConfiguration",l[l.NoXsrfProtection=3]="NoXsrfProtection",l[l.JsonpSupport=4]="JsonpSupport",l[l.RequestsMadeViaParent=5]="RequestsMadeViaParent",l))();function H(n,e){return{\u0275kind:n,\u0275providers:e}}function le(...n){const e=[te,z,D,{provide:I,useExisting:D},{provide:O,useExisting:z},{provide:x,useValue:ce,multi:!0},{provide:F,useValue:!0},{provide:_,useClass:ae}];for(const t of n)e.push(...t.\u0275providers);return(0,i.makeEnvironmentProviders)(e)}function Se(n){return H(l.Interceptors,n.map(e=>({provide:x,useValue:e,multi:!0})))}const ue=new i.InjectionToken("LEGACY_INTERCEPTOR_FN");function he(){return H(l.LegacyInterceptors,[{provide:ue,useFactory:He},{provide:x,useExisting:ue,multi:!0}])}function A({cookieName:n,headerName:e}){const t=[];return void 0!==n&&t.push({provide:oe,useValue:n}),void 0!==e&&t.push({provide:ie,useValue:e}),H(l.CustomXsrfConfiguration,t)}function pe(){return H(l.NoXsrfProtection,[{provide:F,useValue:!1}])}function fe(){return H(l.JsonpSupport,[B,{provide:re,useFactory:xe},{provide:x,useValue:se,multi:!0}])}function De(){return H(l.RequestsMadeViaParent,[{provide:O,useFactory:()=>(0,i.inject)(I,{skipSelf:!0,optional:!0})}])}let Fe=(()=>{class n{static disable(){return{ngModule:n,providers:[pe().\u0275providers]}}static withOptions(t={}){return{ngModule:n,providers:A(t).\u0275providers}}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=i.\u0275\u0275defineNgModule({type:n}),n.\u0275inj=i.\u0275\u0275defineInjector({providers:[de,{provide:U,useExisting:de,multi:!0},{provide:_,useClass:ae},A({cookieName:K,headerName:V}).\u0275providers,{provide:F,useValue:!0}]}),n})(),_e=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=i.\u0275\u0275defineNgModule({type:n}),n.\u0275inj=i.\u0275\u0275defineInjector({providers:[le(he(),A({cookieName:K,headerName:V}))]}),n})(),Ae=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=i.\u0275\u0275defineNgModule({type:n}),n.\u0275inj=i.\u0275\u0275defineInjector({providers:[fe().\u0275providers]}),n})();const Le=N.XhrFactory}}]);