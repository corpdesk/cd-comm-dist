(self.webpackChunkcd_comm=self.webpackChunkcd_comm||[]).push([[2490,109],{2490:(I,l,u)=>{u.r(l),u.d(l,{CookieService:()=>h});var d=u(9883),p=u(9354);let h=(()=>{class c{constructor(e,t){this.document=e,this.platformId=t,this.documentIsAccessible=(0,p.isPlatformBrowser)(this.platformId)}static getCookieRegExp(e){const t=e.replace(/([\[\]{}()|=;+?,.*^$])/gi,"\\$1");return new RegExp("(?:^"+t+"|;\\s*"+t+")=(.*?)(?:;|$)","g")}static safeDecodeURIComponent(e){try{return decodeURIComponent(e)}catch{return e}}check(e){return!!this.documentIsAccessible&&(e=encodeURIComponent(e),c.getCookieRegExp(e).test(this.document.cookie))}get(e){if(this.documentIsAccessible&&this.check(e)){e=encodeURIComponent(e);const s=c.getCookieRegExp(e).exec(this.document.cookie);return s[1]?c.safeDecodeURIComponent(s[1]):""}return""}getAll(){if(!this.documentIsAccessible)return{};const e={},t=this.document;return t.cookie&&""!==t.cookie&&t.cookie.split(";").forEach(s=>{const[n,i]=s.split("=");e[c.safeDecodeURIComponent(n.replace(/^ /,""))]=c.safeDecodeURIComponent(i)}),e}set(e,t,s,n,i,a,f,g){if(!this.documentIsAccessible)return;if("number"==typeof s||s instanceof Date||n||i||a||f)return void this.set(e,t,{expires:s,path:n,domain:i,secure:a,sameSite:f||"Lax",partitioned:g});let r=encodeURIComponent(e)+"="+encodeURIComponent(t)+";";const o=s||{};o.expires&&(r+="number"==typeof o.expires?"expires="+new Date((new Date).getTime()+1e3*o.expires*60*60*24).toUTCString()+";":"expires="+o.expires.toUTCString()+";"),o.path&&(r+="path="+o.path+";"),o.domain&&(r+="domain="+o.domain+";"),!1===o.secure&&"None"===o.sameSite&&(o.secure=!0,console.warn(`[ngx-cookie-service] Cookie ${e} was forced with secure flag because sameSite=None.More details : https://github.com/stevermeister/ngx-cookie-service/issues/86#issuecomment-597720130`)),o.secure&&(r+="secure;"),o.sameSite||(o.sameSite="Lax"),r+="sameSite="+o.sameSite+";",o.partitioned&&(r+="Partitioned;"),this.document.cookie=r}delete(e,t,s,n,i="Lax"){this.documentIsAccessible&&this.set(e,"",{expires:new Date("Thu, 01 Jan 1970 00:00:01 GMT"),path:t,domain:s,secure:n,sameSite:i})}deleteAll(e,t,s,n="Lax"){if(!this.documentIsAccessible)return;const i=this.getAll();for(const a in i)i.hasOwnProperty(a)&&this.delete(a,e,t,s,n)}static#e=this.\u0275fac=function(t){return new(t||c)(d.\u0275\u0275inject(p.DOCUMENT),d.\u0275\u0275inject(d.PLATFORM_ID))};static#t=this.\u0275prov=d.\u0275\u0275defineInjectable({token:c,factory:c.\u0275fac,providedIn:"root"})}return c})()}}]);