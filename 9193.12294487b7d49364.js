(self.webpackChunkcd_comm=self.webpackChunkcd_comm||[]).push([[9193,1574],{1574:(Za,W,g)=>{g.r(W),g.d(W,{BaseChartDirective:()=>Va,NgChartsConfiguration:()=>J,NgChartsModule:()=>Xa,ThemeService:()=>xt,baseColors:()=>wt});var h=g(9883),O=g(7514),Dt=g(2778);const x=function Et(t,e){return t===e||t!=t&&e!=e},w=function Ft(t,e){for(var r=t.length;r--;)if(x(t[r][0],e))return r;return-1};var Ht=Array.prototype.splice;function b(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}b.prototype.clear=function Mt(){this.__data__=[],this.size=0},b.prototype.delete=function zt(t){var e=this.__data__,r=w(e,t);return!(r<0||(r==e.length-1?e.pop():Ht.call(e,r,1),--this.size,0))},b.prototype.get=function Gt(t){var e=this.__data__,r=w(e,t);return r<0?void 0:e[r][1]},b.prototype.has=function Lt(t){return w(this.__data__,t)>-1},b.prototype.set=function Vt(t,e){var r=this.__data__,n=w(r,t);return n<0?(++this.size,r.push([t,e])):r[n][1]=e,this};const P=b,Y="object"==typeof global&&global&&global.Object===Object&&global;var ee="object"==typeof self&&self&&self.Object===Object&&self;const v=Y||ee||Function("return this")();var ne=v.Symbol,q=Object.prototype,ae=q.hasOwnProperty,oe=q.toString,j=ne?ne.toStringTag:void 0;var ue=Object.prototype.toString;var Q=ne?ne.toStringTag:void 0;const M=function pe(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":Q&&Q in Object(t)?function se(t){var e=ae.call(t,j),r=t[j];try{t[j]=void 0;var n=!0}catch{}var a=oe.call(t);return n&&(e?t[j]=r:delete t[j]),a}(t):function he(t){return ue.call(t)}(t)},_=function _e(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},F=function Ce(t){if(!_(t))return!1;var e=M(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e};var t,me=v["__core-js_shared__"],k=(t=/[^.]+$/.exec(me&&me.keys&&me.keys.IE_PROTO||""))?"Symbol(src)_1."+t:"";var Ae=Function.prototype.toString;var we=/^\[object .+?Constructor\]$/,Ee=RegExp("^"+Function.prototype.toString.call(Object.prototype.hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");const Be=function Fe(t){return!(!_(t)||function Oe(t){return!!k&&k in t}(t))&&(F(t)?Ee:we).test(function Ie(t){if(null!=t){try{return Ae.call(t)}catch{}try{return t+""}catch{}}return""}(t))},H=function Ue(t,e){var r=function He(t,e){return t?.[e]}(t,e);return Be(r)?r:void 0},tt=H(v,"Map"),T=H(Object,"create");var Ze=Object.prototype.hasOwnProperty;var Qe=Object.prototype.hasOwnProperty;function y(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}y.prototype.clear=function Le(){this.__data__=T?T(null):{},this.size=0},y.prototype.delete=function Ve(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},y.prototype.get=function We(t){var e=this.__data__;if(T){var r=e[t];return"__lodash_hash_undefined__"===r?void 0:r}return Ze.call(e,t)?e[t]:void 0},y.prototype.has=function ke(t){var e=this.__data__;return T?void 0!==e[t]:Qe.call(e,t)},y.prototype.set=function rr(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=T&&void 0===e?"__lodash_hash_undefined__":e,this};const et=y,N=function cr(t,e){var r=t.__data__;return function sr(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}(e)?r["string"==typeof e?"string":"hash"]:r.map};function C(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}C.prototype.clear=function ar(){this.size=0,this.__data__={hash:new et,map:new(tt||P),string:new et}},C.prototype.delete=function ur(t){var e=N(this,t).delete(t);return this.size-=e?1:0,e},C.prototype.get=function lr(t){return N(this,t).get(t)},C.prototype.has=function dr(t){return N(this,t).has(t)},C.prototype.set=function _r(t,e){var r=N(this,t),n=r.size;return r.set(t,e),this.size+=r.size==n?0:1,this};const br=C;function m(t){var e=this.__data__=new P(t);this.size=e.size}m.prototype.clear=function Jt(){this.__data__=new P,this.size=0},m.prototype.delete=function Zt(t){var e=this.__data__,r=e.delete(t);return this.size=e.size,r},m.prototype.get=function Yt(t){return this.__data__.get(t)},m.prototype.has=function Qt(t){return this.__data__.has(t)},m.prototype.set=function yr(t,e){var r=this.__data__;if(r instanceof P){var n=r.__data__;if(!tt||n.length<199)return n.push([t,e]),this.size=++r.size,this;r=this.__data__=new br(n)}return r.set(t,e),this.size=r.size,this};const mr=m;var Or=function(){try{var t=H(Object,"defineProperty");return t({},"",{}),t}catch{}}();const E=Or,z=function jr(t,e,r){"__proto__"==e&&E?E(t,e,{configurable:!0,enumerable:!0,value:r,writable:!0}):t[e]=r},U=function Tr(t,e,r){(void 0!==r&&!x(t[e],r)||void 0===r&&!(e in t))&&z(t,e,r)};var Ir=function Ar(t){return function(e,r,n){for(var a=-1,o=Object(e),c=n(e),s=c.length;s--;){var u=c[t?s:++a];if(!1===r(o[u],u,o))break}return e}}();const Sr=Ir;var rt="object"==typeof exports&&exports&&!exports.nodeType&&exports,nt=rt&&"object"==typeof module&&module&&!module.nodeType&&module,at=nt&&nt.exports===rt?v.Buffer:void 0,ot=at?at.allocUnsafe:void 0;const st=v.Uint8Array,Fr=function Er(t,e){var r=e?function Mr(t){var e=new t.constructor(t.byteLength);return new st(e).set(new st(t)),e}(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)};var it=Object.create,zr=function(){function t(){}return function(e){if(!_(e))return{};if(it)return it(e);t.prototype=e;var r=new t;return t.prototype=void 0,r}}();const Ur=zr;var Rr=function Gr(t,e){return function(r){return t(e(r))}}(Object.getPrototypeOf,Object);const ct=Rr;var Lr=Object.prototype;const ut=function Kr(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||Lr)},A=function Jr(t){return null!=t&&"object"==typeof t},ht=function Zr(t){return A(t)&&"[object Arguments]"==M(t)};var lt=Object.prototype,Wr=lt.hasOwnProperty,Yr=lt.propertyIsEnumerable,qr=ht(function(){return arguments}())?ht:function(t){return A(t)&&Wr.call(t,"callee")&&!Yr.call(t,"callee")};const G=qr,R=Array.isArray,ft=function tn(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991},L=function en(t){return null!=t&&ft(t.length)&&!F(t)};var dt="object"==typeof exports&&exports&&!exports.nodeType&&exports,pt=dt&&"object"==typeof module&&module&&!module.nodeType&&module,_t=pt&&pt.exports===dt?v.Buffer:void 0;const gt=(_t?_t.isBuffer:void 0)||function an(){return!1};var bt=Function.prototype.toString,dn=Object.prototype.hasOwnProperty,pn=bt.call(Object);var i={};i["[object Float32Array]"]=i["[object Float64Array]"]=i["[object Int8Array]"]=i["[object Int16Array]"]=i["[object Int32Array]"]=i["[object Uint8Array]"]=i["[object Uint8ClampedArray]"]=i["[object Uint16Array]"]=i["[object Uint32Array]"]=!0,i["[object Arguments]"]=i["[object Array]"]=i["[object ArrayBuffer]"]=i["[object Boolean]"]=i["[object DataView]"]=i["[object Date]"]=i["[object Error]"]=i["[object Function]"]=i["[object Map]"]=i["[object Number]"]=i["[object Object]"]=i["[object RegExp]"]=i["[object Set]"]=i["[object String]"]=i["[object WeakMap]"]=!1;var vt="object"==typeof exports&&exports&&!exports.nodeType&&exports,I=vt&&"object"==typeof module&&module&&!module.nodeType&&module,K=I&&I.exports===vt&&Y.process,Jn=function(){try{return I&&I.require&&I.require("util").types||K&&K.binding&&K.binding("util")}catch{}}(),Ct=Jn&&Jn.isTypedArray;const mt=Ct?function Kn(t){return function(e){return t(e)}}(Ct):function Rn(t){return A(t)&&ft(t.length)&&!!i[M(t)]},V=function Zn(t,e){if(("constructor"!==e||"function"!=typeof t[e])&&"__proto__"!=e)return t[e]};var Yn=Object.prototype.hasOwnProperty;const Qn=function qn(t,e,r){var n=t[e];(!Yn.call(t,e)||!x(n,r)||void 0===r&&!(e in t))&&z(t,e,r)};var aa=/^(?:0|[1-9]\d*)$/;const Ot=function oa(t,e){var r=typeof t;return!!(e=e??9007199254740991)&&("number"==r||"symbol"!=r&&aa.test(t))&&t>-1&&t%1==0&&t<e};var ia=Object.prototype.hasOwnProperty;const ua=function ca(t,e){var r=R(t),n=!r&&G(t),a=!r&&!n&&gt(t),o=!r&&!n&&!a&&mt(t),c=r||n||a||o,s=c?function ea(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(t.length,String):[],u=s.length;for(var f in t)(e||ia.call(t,f))&&(!c||!("length"==f||a&&("offset"==f||"parent"==f)||o&&("buffer"==f||"byteLength"==f||"byteOffset"==f)||Ot(f,u)))&&s.push(f);return s};var da=Object.prototype.hasOwnProperty;const _a=function pa(t){if(!_(t))return function ha(t){var e=[];if(null!=t)for(var r in Object(t))e.push(r);return e}(t);var e=ut(t),r=[];for(var n in t)"constructor"==n&&(e||!da.call(t,n))||r.push(n);return r},jt=function ga(t){return L(t)?ua(t,!0):_a(t)},va=function ba(t){return function kn(t,e,r,n){var a=!r;r||(r={});for(var o=-1,c=e.length;++o<c;){var s=e[o],u=n?n(r[s],t[s],s,r,t):void 0;void 0===u&&(u=t[s]),a?z(r,s,u):Qn(r,s,u)}return r}(t,jt(t))},Ca=function ya(t,e,r,n,a,o,c){var s=V(t,r),u=V(e,r),f=c.get(u);if(f)U(t,r,f);else{var l=o?o(s,u,r+"",t,e,c):void 0,S=void 0===l;if(S){var X=R(u),Z=!X&&gt(u),Pt=!X&&!Z&&mt(u);l=u,X||Z||Pt?R(s)?l=s:function rn(t){return A(t)&&L(t)}(s)?l=function Br(t,e){var r=-1,n=t.length;for(e||(e=Array(n));++r<n;)e[r]=t[r];return e}(s):Z?(S=!1,l=function wr(t,e){if(e)return t.slice();var r=t.length,n=ot?ot(r):new t.constructor(r);return t.copy(n),n}(u,!0)):Pt?(S=!1,l=Fr(u,!0)):l=[]:function _n(t){if(!A(t)||"[object Object]"!=M(t))return!1;var e=ct(t);if(null===e)return!0;var r=dn.call(e,"constructor")&&e.constructor;return"function"==typeof r&&r instanceof r&&bt.call(r)==pn}(u)||G(u)?(l=s,G(s)?l=va(s):(!_(s)||F(s))&&(l=function Vr(t){return"function"!=typeof t.constructor||ut(t)?{}:Ur(ct(t))}(u))):S=!1}S&&(c.set(u,l),a(l,u,n,o,c),c.delete(u)),U(t,r,l)}},ma=function Tt(t,e,r,n,a){t!==e&&Sr(e,function(o,c){if(a||(a=new mr),_(o))Ca(t,e,c,r,Tt,n,a);else{var s=n?n(V(t,c),o,c+"",t,e,a):void 0;void 0===s&&(s=o),U(t,c,s)}},jt)},At=function Oa(t){return t};var It=Math.max;const xa=function Sa(t){return function(){return t}};var wa=E?function(t,e){return E(t,"toString",{configurable:!0,enumerable:!1,value:xa(e),writable:!0})}:At,Na=Date.now,Fa=function Ea(t){var e=0,r=0;return function(){var n=Na(),a=16-(n-r);if(r=n,a>0){if(++e>=800)return arguments[0]}else e=0;return t.apply(void 0,arguments)}}(wa);const Ba=Fa,za=function Ha(t,e){return Ba(function Aa(t,e,r){return e=It(void 0===e?t.length-1:e,0),function(){for(var n=arguments,a=-1,o=It(n.length-e,0),c=Array(o);++a<o;)c[a]=n[e+a];a=-1;for(var s=Array(e+1);++a<e;)s[a]=n[a];return s[e]=r(c),function ja(t,e,r){switch(r.length){case 0:return t.call(e);case 1:return t.call(e,r[0]);case 2:return t.call(e,r[0],r[1]);case 3:return t.call(e,r[0],r[1],r[2])}return t.apply(e,r)}(t,this,s)}}(t,e,At),t+"")};var La=function Ra(t){return za(function(e,r){var n=-1,a=r.length,o=a>1?r[a-1]:void 0,c=a>2?r[2]:void 0;for(o=t.length>3&&"function"==typeof o?(a--,o):void 0,c&&function Ua(t,e,r){if(!_(r))return!1;var n=typeof e;return!!("number"==n?L(r)&&Ot(e,r.length):"string"==n&&e in r)&&x(r[e],t)}(r[0],r[1],c)&&(o=a<3?void 0:o,a=1),e=Object(e);++n<a;){var s=r[n];s&&t(e,s,n,o)}return e})}(function(t,e,r){ma(t,e,r)});const St=La;var Ka=g(4866);let xt=(()=>{class t{constructor(){this.colorschemesOptions=new Ka.BehaviorSubject(void 0)}setColorschemesOptions(r){this.pColorschemesOptions=r,this.colorschemesOptions.next(r)}getColorschemesOptions(){return this.pColorschemesOptions}}return t.\u0275fac=function(r){return new(r||t)},t.\u0275prov=h.\u0275\u0275defineInjectable({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),Va=(()=>{class t{constructor(r,n,a){this.zone=n,this.themeService=a,this.type="bar",this.plugins=[],this.chartClick=new h.EventEmitter,this.chartHover=new h.EventEmitter,this.subs=[],this.themeOverrides={},this.ctx=r.nativeElement.getContext("2d"),this.subs.push(this.themeService.colorschemesOptions.pipe((0,Dt.distinctUntilChanged)()).subscribe(o=>this.themeChanged(o)))}ngOnChanges(r){const n=["type"],a=Object.getOwnPropertyNames(r);if(a.some(o=>n.includes(o))||a.every(o=>r[o].isFirstChange()))this.render();else{const o=this.getChartConfiguration();this.chart&&(Object.assign(this.chart.config.data,o.data),this.chart.config.plugins&&Object.assign(this.chart.config.plugins,o.plugins),this.chart.config.options&&Object.assign(this.chart.config.options,o.options)),this.update()}}ngOnDestroy(){this.chart&&(this.chart.destroy(),this.chart=void 0),this.subs.forEach(r=>r.unsubscribe())}render(){return this.chart&&this.chart.destroy(),this.zone.runOutsideAngular(()=>this.chart=new O.Chart(this.ctx,this.getChartConfiguration()))}update(r){this.chart&&this.zone.runOutsideAngular(()=>this.chart?.update(r))}hideDataset(r,n){this.chart&&(this.chart.getDatasetMeta(r).hidden=n,this.update())}isDatasetHidden(r){return this.chart?.getDatasetMeta(r)?.hidden}toBase64Image(){return this.chart?.toBase64Image()}themeChanged(r){this.themeOverrides=r,this.chart&&(this.chart.config.options&&Object.assign(this.chart.config.options,this.getChartOptions()),this.update())}getChartOptions(){return St({onHover:(r,n)=>{!this.chartHover.observed&&!this.chartHover.observers?.length||this.zone.run(()=>this.chartHover.emit({event:r,active:n}))},onClick:(r,n)=>{!this.chartClick.observed&&!this.chartClick.observers?.length||this.zone.run(()=>this.chartClick.emit({event:r,active:n}))}},this.themeOverrides,this.options,{plugins:{legend:{display:this.legend}}})}getChartConfiguration(){return{type:this.type,data:this.getChartData(),options:this.getChartOptions(),plugins:this.plugins}}getChartData(){return this.data?this.data:{labels:this.labels||[],datasets:this.datasets||[]}}}return t.\u0275fac=function(r){return new(r||t)(h.\u0275\u0275directiveInject(h.ElementRef),h.\u0275\u0275directiveInject(h.NgZone),h.\u0275\u0275directiveInject(xt))},t.\u0275dir=h.\u0275\u0275defineDirective({type:t,selectors:[["canvas","baseChart",""]],inputs:{type:"type",legend:"legend",data:"data",options:"options",plugins:"plugins",labels:"labels",datasets:"datasets"},outputs:{chartClick:"chartClick",chartHover:"chartHover"},exportAs:["base-chart"],features:[h.\u0275\u0275NgOnChangesFeature]}),t})();const wt=[[255,99,132],[54,162,235],[255,206,86],[231,233,237],[75,192,192],[151,187,205],[220,220,220],[247,70,74],[70,191,189],[253,180,92],[148,159,177],[77,83,96]],$a={plugins:{colors:{enabled:!1}},datasets:{line:{backgroundColor:t=>d(p(t.datasetIndex),.4),borderColor:t=>d(p(t.datasetIndex),1),pointBackgroundColor:t=>d(p(t.datasetIndex),1),pointBorderColor:"#fff"},bar:{backgroundColor:t=>d(p(t.datasetIndex),.6),borderColor:t=>d(p(t.datasetIndex),1)},get radar(){return this.line},doughnut:{backgroundColor:t=>d(p(t.dataIndex),.6),borderColor:"#fff"},get pie(){return this.doughnut},polarArea:{backgroundColor:t=>d(p(t.dataIndex),.6),borderColor:t=>d(p(t.dataIndex),1)},get bubble(){return this.doughnut},get scatter(){return this.doughnut},get area(){return this.polarArea}}};function d(t,e){return"rgba("+t.concat(e).join(",")+")"}function $(t,e){return Math.floor(Math.random()*(e-t+1))+t}function p(t=0){return wt[t]||function Ja(){return[$(0,255),$(0,255),$(0,255)]}()}let J=(()=>{class t{constructor(){this.generateColors=!0}}return t.\u0275fac=function(r){return new(r||t)},t.\u0275prov=h.\u0275\u0275defineInjectable({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();O.Chart.register(...O.registerables);let Xa=(()=>{class t{constructor(r){r?.plugins&&O.Chart.register(...r?.plugins);const n=St(r?.generateColors?$a:{},r?.defaults||{});O.defaults.set(n)}static forRoot(r){return{ngModule:t,providers:[{provide:J,useValue:r}]}}}return t.\u0275fac=function(r){return new(r||t)(h.\u0275\u0275inject(J,8))},t.\u0275mod=h.\u0275\u0275defineNgModule({type:t}),t.\u0275inj=h.\u0275\u0275defineInjector({}),t})()}}]);