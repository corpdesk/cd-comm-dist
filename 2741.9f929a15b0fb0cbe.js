(self.webpackChunkcd_comm=self.webpackChunkcd_comm||[]).push([[2741,5122],{5122:(h,u,c)=>{c.r(u),c.d(u,{FilterPipe:()=>f,FilterPipeModule:()=>a});var o=c(9883);let f=(()=>{class n{static isFoundOnWalking(e,t){let r=e,s=!1;do{if(r.hasOwnProperty(t)||Object.getOwnPropertyDescriptor(r,t)){s=!0;break}}while(r=Object.getPrototypeOf(r));return s}static isNumber(e){return!isNaN(parseInt(e,10))&&isFinite(e)}static getValue(e){return"function"==typeof e?e():e}filterByString(e){return e&&(e=e.toLowerCase()),t=>!e||!!t&&-1!==(""+t).toLowerCase().indexOf(e)}filterByBoolean(e){return t=>!!t===e}filterByObject(e){return t=>{for(const r in e)if("$or"!==r){if(!t||!n.isFoundOnWalking(t,r)||!this.isMatching(e[r],n.getValue(t[r])))return!1}else if(!this.filterByOr(e.$or)(n.getValue(t)))return!1;return!0}}isMatching(e,t){switch(typeof e){case"boolean":return this.filterByBoolean(e)(t);case"string":return this.filterByString(e)(t);case"object":return this.filterByObject(e)(t)}return this.filterDefault(e)(t)}filterByOr(e){return t=>{const r=e.length,l=Array.isArray(t)?i=>-1!==t.indexOf(e[i]):i=>this.isMatching(e[i],t);for(let i=0;i<r;i++)if(l(i))return!0;return!1}}filterDefault(e){return t=>void 0===e||e==t}transform(e,t){if(!e)return e;switch(typeof t){case"boolean":return e.filter(this.filterByBoolean(t));case"string":return n.isNumber(t)?e.filter(this.filterDefault(t)):e.filter(this.filterByString(t));case"object":return e.filter(this.filterByObject(t));case"function":return e.filter(t)}return e.filter(this.filterDefault(t))}static \u0275fac=function(t){return new(t||n)};static \u0275pipe=o.\u0275\u0275definePipe({name:"filterBy",type:n,pure:!1});static \u0275prov=o.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac})}return n})(),a=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=o.\u0275\u0275defineNgModule({type:n});static \u0275inj=o.\u0275\u0275defineInjector({providers:[f]})}return n})()}}]);