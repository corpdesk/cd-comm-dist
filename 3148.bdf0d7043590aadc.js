(self.webpackChunkcd_comm=self.webpackChunkcd_comm||[]).push([[3148],{1985:(T,a,e)=>{e.d(a,{c:()=>h});var n=e(7707),u=e(3961),_=e(3494),l=e(1203),o=e(1026),E=e(8071),p=e(9786);let h=(()=>{class c{constructor(d){d&&(this._subscribe=d)}lift(d){const b=new c;return b.source=this,b.operator=d,b}subscribe(d,b,v){const m=function r(c){return c&&c instanceof n.vU||function t(c){return c&&(0,E.T)(c.next)&&(0,E.T)(c.error)&&(0,E.T)(c.complete)}(c)&&(0,u.Uv)(c)}(d)?d:new n.Ms(d,b,v);return(0,p.Y)(()=>{const{operator:S,source:O}=this;m.add(S?S.call(m,O):O?this._subscribe(m):this._trySubscribe(m))}),m}_trySubscribe(d){try{return this._subscribe(d)}catch(b){d.error(b)}}forEach(d,b){return new(b=s(b))((v,m)=>{const S=new n.Ms({next:O=>{try{d(O)}catch(M){m(M),S.unsubscribe()}},error:m,complete:v});this.subscribe(S)})}_subscribe(d){var b;return null===(b=this.source)||void 0===b?void 0:b.subscribe(d)}[_.s](){return this}pipe(...d){return(0,l.m)(d)(this)}toPromise(d){return new(d=s(d))((b,v)=>{let m;this.subscribe(S=>m=S,S=>v(S),()=>b(m))})}}return c.create=f=>new c(f),c})();function s(c){var f;return null!==(f=c??o.$.Promise)&&void 0!==f?f:Promise}},2771:(T,a,e)=>{e.d(a,{m:()=>_});var n=e(8530),u=e(6129);class _ extends n.B{constructor(o=1/0,E=1/0,p=u.U){super(),this._bufferSize=o,this._windowTime=E,this._timestampProvider=p,this._buffer=[],this._infiniteTimeWindow=!0,this._infiniteTimeWindow=E===1/0,this._bufferSize=Math.max(1,o),this._windowTime=Math.max(1,E)}next(o){const{isStopped:E,_buffer:p,_infiniteTimeWindow:h,_timestampProvider:s,_windowTime:t}=this;E||(p.push(o),!h&&p.push(s.now()+t)),this._trimBuffer(),super.next(o)}_subscribe(o){this._throwIfClosed(),this._trimBuffer();const E=this._innerSubscribe(o),{_infiniteTimeWindow:p,_buffer:h}=this,s=h.slice();for(let t=0;t<s.length&&!o.closed;t+=p?1:2)o.next(s[t]);return this._checkFinalizedStatuses(o),E}_trimBuffer(){const{_bufferSize:o,_timestampProvider:E,_buffer:p,_infiniteTimeWindow:h}=this,s=(h?1:2)*o;if(o<1/0&&s<p.length&&p.splice(0,p.length-s),!h){const t=E.now();let r=0;for(let c=1;c<p.length&&p[c]<=t;c+=2)r=c;r&&p.splice(0,r+1)}}}},8530:(T,a,e)=>{e.d(a,{B:()=>E,k:()=>p});var n=e(1985),u=e(3961),_=e(9117),l=e(7908),o=e(9786);let E=(()=>{class h extends n.c{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(t){const r=new p(this,this);return r.operator=t,r}_throwIfClosed(){if(this.closed)throw new _.P}next(t){(0,o.Y)(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(const r of this.currentObservers)r.next(t)}})}error(t){(0,o.Y)(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=t;const{observers:r}=this;for(;r.length;)r.shift().error(t)}})}complete(){(0,o.Y)(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;const{observers:t}=this;for(;t.length;)t.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var t;return(null===(t=this.observers)||void 0===t?void 0:t.length)>0}_trySubscribe(t){return this._throwIfClosed(),super._trySubscribe(t)}_subscribe(t){return this._throwIfClosed(),this._checkFinalizedStatuses(t),this._innerSubscribe(t)}_innerSubscribe(t){const{hasError:r,isStopped:c,observers:f}=this;return r||c?u.Kn:(this.currentObservers=null,f.push(t),new u.yU(()=>{this.currentObservers=null,(0,l.o)(f,t)}))}_checkFinalizedStatuses(t){const{hasError:r,thrownError:c,isStopped:f}=this;r?t.error(c):f&&t.complete()}asObservable(){const t=new n.c;return t.source=this,t}}return h.create=(s,t)=>new p(s,t),h})();class p extends E{constructor(s,t){super(),this.destination=s,this.source=t}next(s){var t,r;null===(r=null===(t=this.destination)||void 0===t?void 0:t.next)||void 0===r||r.call(t,s)}error(s){var t,r;null===(r=null===(t=this.destination)||void 0===t?void 0:t.error)||void 0===r||r.call(t,s)}complete(){var s,t;null===(t=null===(s=this.destination)||void 0===s?void 0:s.complete)||void 0===t||t.call(s)}_subscribe(s){var t,r;return null!==(r=null===(t=this.source)||void 0===t?void 0:t.subscribe(s))&&void 0!==r?r:u.Kn}}},7707:(T,a,e)=>{e.d(a,{Ms:()=>v,vU:()=>c});var n=e(8071),u=e(3961),_=e(1026),l=e(5334),o=e(5343);const E=s("C",void 0,void 0);function s(P,i,y){return{kind:P,value:i,error:y}}var t=e(9270),r=e(9786);class c extends u.yU{constructor(i){super(),this.isStopped=!1,i?(this.destination=i,(0,u.Uv)(i)&&i.add(this)):this.destination=M}static create(i,y,D){return new v(i,y,D)}next(i){this.isStopped?O(function h(P){return s("N",P,void 0)}(i),this):this._next(i)}error(i){this.isStopped?O(function p(P){return s("E",void 0,P)}(i),this):(this.isStopped=!0,this._error(i))}complete(){this.isStopped?O(E,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(i){this.destination.next(i)}_error(i){try{this.destination.error(i)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}}const f=Function.prototype.bind;function d(P,i){return f.call(P,i)}class b{constructor(i){this.partialObserver=i}next(i){const{partialObserver:y}=this;if(y.next)try{y.next(i)}catch(D){m(D)}}error(i){const{partialObserver:y}=this;if(y.error)try{y.error(i)}catch(D){m(D)}else m(i)}complete(){const{partialObserver:i}=this;if(i.complete)try{i.complete()}catch(y){m(y)}}}class v extends c{constructor(i,y,D){let g;if(super(),(0,n.T)(i)||!i)g={next:i??void 0,error:y??void 0,complete:D??void 0};else{let U;this&&_.$.useDeprecatedNextContext?(U=Object.create(i),U.unsubscribe=()=>this.unsubscribe(),g={next:i.next&&d(i.next,U),error:i.error&&d(i.error,U),complete:i.complete&&d(i.complete,U)}):g=i}this.destination=new b(g)}}function m(P){_.$.useDeprecatedSynchronousErrorHandling?(0,r.l)(P):(0,l.m)(P)}function O(P,i){const{onStoppedNotification:y}=_.$;y&&t.f.setTimeout(()=>y(P,i))}const M={closed:!0,next:o.l,error:function S(P){throw P},complete:o.l}},3961:(T,a,e)=>{e.d(a,{Kn:()=>o,Uv:()=>E,yU:()=>l});var n=e(8071),u=e(4079),_=e(7908);class l{constructor(s){this.initialTeardown=s,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let s;if(!this.closed){this.closed=!0;const{_parentage:t}=this;if(t)if(this._parentage=null,Array.isArray(t))for(const f of t)f.remove(this);else t.remove(this);const{initialTeardown:r}=this;if((0,n.T)(r))try{r()}catch(f){s=f instanceof u.Z?f.errors:[f]}const{_finalizers:c}=this;if(c){this._finalizers=null;for(const f of c)try{p(f)}catch(d){s=s??[],d instanceof u.Z?s=[...s,...d.errors]:s.push(d)}}if(s)throw new u.Z(s)}}add(s){var t;if(s&&s!==this)if(this.closed)p(s);else{if(s instanceof l){if(s.closed||s._hasParent(this))return;s._addParent(this)}(this._finalizers=null!==(t=this._finalizers)&&void 0!==t?t:[]).push(s)}}_hasParent(s){const{_parentage:t}=this;return t===s||Array.isArray(t)&&t.includes(s)}_addParent(s){const{_parentage:t}=this;this._parentage=Array.isArray(t)?(t.push(s),t):t?[t,s]:s}_removeParent(s){const{_parentage:t}=this;t===s?this._parentage=null:Array.isArray(t)&&(0,_.o)(t,s)}remove(s){const{_finalizers:t}=this;t&&(0,_.o)(t,s),s instanceof l&&s._removeParent(this)}}l.EMPTY=(()=>{const h=new l;return h.closed=!0,h})();const o=l.EMPTY;function E(h){return h instanceof l||h&&"closed"in h&&(0,n.T)(h.remove)&&(0,n.T)(h.add)&&(0,n.T)(h.unsubscribe)}function p(h){(0,n.T)(h)?h():h.unsubscribe()}},1026:(T,a,e)=>{e.d(a,{$:()=>n});const n={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1}},6129:(T,a,e)=>{e.d(a,{U:()=>n});const n={now:()=>(n.delegate||Date).now(),delegate:void 0}},9270:(T,a,e)=>{e.d(a,{f:()=>n});const n={setTimeout(u,_,...l){const{delegate:o}=n;return o?.setTimeout?o.setTimeout(u,_,...l):setTimeout(u,_,...l)},clearTimeout(u){const{delegate:_}=n;return(_?.clearTimeout||clearTimeout)(u)},delegate:void 0}},3494:(T,a,e)=>{e.d(a,{s:()=>n});const n="function"==typeof Symbol&&Symbol.observable||"@@observable"},9117:(T,a,e)=>{e.d(a,{P:()=>u});const u=(0,e(1853).L)(_=>function(){_(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"})},4079:(T,a,e)=>{e.d(a,{Z:()=>u});const u=(0,e(1853).L)(_=>function(o){_(this),this.message=o?`${o.length} errors occurred during unsubscription:\n${o.map((E,p)=>`${p+1}) ${E.toString()}`).join("\n  ")}`:"",this.name="UnsubscriptionError",this.errors=o})},7908:(T,a,e)=>{function n(u,_){if(u){const l=u.indexOf(_);0<=l&&u.splice(l,1)}}e.d(a,{o:()=>n})},1853:(T,a,e)=>{function n(u){const l=u(o=>{Error.call(o),o.stack=(new Error).stack});return l.prototype=Object.create(Error.prototype),l.prototype.constructor=l,l}e.d(a,{L:()=>n})},9786:(T,a,e)=>{e.d(a,{Y:()=>_,l:()=>l});var n=e(1026);let u=null;function _(o){if(n.$.useDeprecatedSynchronousErrorHandling){const E=!u;if(E&&(u={errorThrown:!1,error:null}),o(),E){const{errorThrown:p,error:h}=u;if(u=null,p)throw h}}else o()}function l(o){n.$.useDeprecatedSynchronousErrorHandling&&u&&(u.errorThrown=!0,u.error=o)}},3669:(T,a,e)=>{function n(u){return u}e.d(a,{D:()=>n})},8071:(T,a,e)=>{function n(u){return"function"==typeof u}e.d(a,{T:()=>n})},5343:(T,a,e)=>{function n(){}e.d(a,{l:()=>n})},1203:(T,a,e)=>{e.d(a,{F:()=>u,m:()=>_});var n=e(3669);function u(...l){return _(l)}function _(l){return 0===l.length?n.D:1===l.length?l[0]:function(E){return l.reduce((p,h)=>h(p),E)}}},5334:(T,a,e)=>{e.d(a,{m:()=>_});var n=e(1026),u=e(9270);function _(l){u.f.setTimeout(()=>{const{onUnhandledError:o}=n.$;if(!o)throw l;o(l)})}},3148:(T,a,e)=>{e.r(a),e.d(a,{WebSocketSubject:()=>h,webSocket:()=>s});var n=e(8530),u=e(7707),_=e(1985),l=e(3961),o=e(2771);const E={url:"",deserializer:t=>JSON.parse(t.data),serializer:t=>JSON.stringify(t)};class h extends n.k{constructor(r,c){if(super(),this._socket=null,r instanceof _.c)this.destination=c,this.source=r;else{const f=this._config=Object.assign({},E);if(this._output=new n.B,"string"==typeof r)f.url=r;else for(const d in r)r.hasOwnProperty(d)&&(f[d]=r[d]);if(!f.WebSocketCtor&&WebSocket)f.WebSocketCtor=WebSocket;else if(!f.WebSocketCtor)throw new Error("no WebSocket constructor can be found");this.destination=new o.m}}lift(r){const c=new h(this._config,this.destination);return c.operator=r,c.source=this,c}_resetState(){this._socket=null,this.source||(this.destination=new o.m),this._output=new n.B}multiplex(r,c,f){const d=this;return new _.c(b=>{try{d.next(r())}catch(m){b.error(m)}const v=d.subscribe({next:m=>{try{f(m)&&b.next(m)}catch(S){b.error(S)}},error:m=>b.error(m),complete:()=>b.complete()});return()=>{try{d.next(c())}catch(m){b.error(m)}v.unsubscribe()}})}_connectSocket(){const{WebSocketCtor:r,protocol:c,url:f,binaryType:d}=this._config,b=this._output;let v=null;try{v=c?new r(f,c):new r(f),this._socket=v,d&&(this._socket.binaryType=d)}catch(S){return void b.error(S)}const m=new l.yU(()=>{this._socket=null,v&&1===v.readyState&&v.close()});v.onopen=S=>{const{_socket:O}=this;if(!O)return v.close(),void this._resetState();const{openObserver:M}=this._config;M&&M.next(S);const P=this.destination;this.destination=u.vU.create(i=>{if(1===v.readyState)try{const{serializer:y}=this._config;v.send(y(i))}catch(y){this.destination.error(y)}},i=>{const{closingObserver:y}=this._config;y&&y.next(void 0),i&&i.code?v.close(i.code,i.reason):b.error(new TypeError("WebSocketSubject.error must be called with an object with an error code, and an optional reason: { code: number, reason: string }")),this._resetState()},()=>{const{closingObserver:i}=this._config;i&&i.next(void 0),v.close(),this._resetState()}),P&&P instanceof o.m&&m.add(P.subscribe(this.destination))},v.onerror=S=>{this._resetState(),b.error(S)},v.onclose=S=>{v===this._socket&&this._resetState();const{closeObserver:O}=this._config;O&&O.next(S),S.wasClean?b.complete():b.error(S)},v.onmessage=S=>{try{const{deserializer:O}=this._config;b.next(O(S))}catch(O){b.error(O)}}}_subscribe(r){const{source:c}=this;return c?c.subscribe(r):(this._socket||this._connectSocket(),this._output.subscribe(r),r.add(()=>{const{_socket:f}=this;0===this._output.observers.length&&(f&&(1===f.readyState||0===f.readyState)&&f.close(),this._resetState())}),r)}unsubscribe(){const{_socket:r}=this;r&&(1===r.readyState||0===r.readyState)&&r.close(),this._resetState(),super.unsubscribe()}}function s(t){return new h(t)}}}]);