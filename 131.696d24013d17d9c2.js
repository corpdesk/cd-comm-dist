(self.webpackChunkcd_comm=self.webpackChunkcd_comm||[]).push([[131,2512],{2512:(Gt,K,W)=>{W.r(K),W.d(K,{Geometry:()=>lt,PERFECT_SCROLLBAR_CONFIG:()=>jt,PerfectScrollbarComponent:()=>Ft,PerfectScrollbarConfig:()=>ct,PerfectScrollbarDirective:()=>Ut,PerfectScrollbarModule:()=>Kt,Position:()=>N,\u0275a:()=>Nt});var y=W(4866),E=W(2778),v=W(9883),_=W(9354);function S(e){return getComputedStyle(e)}function w(e,t){for(var i in t){var n=t[i];"number"==typeof n&&(n+="px"),e.style[i]=n}return e}function k(e){var t=document.createElement("div");return t.className=e,t}var G=typeof Element<"u"&&(Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector);function L(e,t){if(!G)throw new Error("No element matching method supported");return G.call(e,t)}function O(e){e.remove?e.remove():e.parentNode&&e.parentNode.removeChild(e)}function V(e,t){return Array.prototype.filter.call(e.children,function(i){return L(i,t)})}var m={main:"ps",rtl:"ps__rtl",element:{thumb:function(e){return"ps__thumb-"+e},rail:function(e){return"ps__rail-"+e},consuming:"ps__child--consume"},state:{focus:"ps--focus",clicking:"ps--clicking",active:function(e){return"ps--active-"+e},scrolling:function(e){return"ps--scrolling-"+e}}},$={x:null,y:null};function q(e,t){var i=e.element.classList,n=m.state.scrolling(t);i.contains(n)?clearTimeout($[t]):i.add(n)}function Z(e,t){$[t]=setTimeout(function(){return e.isAlive&&e.element.classList.remove(m.state.scrolling(t))},e.settings.scrollingThreshold)}var C=function(t){this.element=t,this.handlers={}},J={isEmpty:{configurable:!0}};C.prototype.bind=function(t,i){typeof this.handlers[t]>"u"&&(this.handlers[t]=[]),this.handlers[t].push(i),this.element.addEventListener(t,i,!1)},C.prototype.unbind=function(t,i){var n=this;this.handlers[t]=this.handlers[t].filter(function(r){return!(!i||r===i)||(n.element.removeEventListener(t,r,!1),!1)})},C.prototype.unbindAll=function(){for(var t in this.handlers)this.unbind(t)},J.isEmpty.get=function(){var e=this;return Object.keys(this.handlers).every(function(t){return 0===e.handlers[t].length})},Object.defineProperties(C.prototype,J);var D=function(){this.eventElements=[]};function B(e){if("function"==typeof window.CustomEvent)return new CustomEvent(e);var t=document.createEvent("CustomEvent");return t.initCustomEvent(e,!1,!1,void 0),t}function I(e,t,i,n,r){var l;if(void 0===n&&(n=!0),void 0===r&&(r=!1),"top"===t)l=["contentHeight","containerHeight","scrollTop","y","up","down"];else{if("left"!==t)throw new Error("A proper axis should be provided");l=["contentWidth","containerWidth","scrollLeft","x","left","right"]}!function ft(e,t,i,n,r){var l=i[0],s=i[1],a=i[2],o=i[3],c=i[4],u=i[5];void 0===n&&(n=!0),void 0===r&&(r=!1);var b=e.element;e.reach[o]=null,b[a]<1&&(e.reach[o]="start"),b[a]>e[l]-e[s]-1&&(e.reach[o]="end"),t&&(b.dispatchEvent(B("ps-scroll-"+o)),t<0?b.dispatchEvent(B("ps-scroll-"+c)):t>0&&b.dispatchEvent(B("ps-scroll-"+u)),n&&function ht(e,t){q(e,t),Z(e,t)}(e,o)),e.reach[o]&&(t||r)&&b.dispatchEvent(B("ps-"+o+"-reach-"+e.reach[o]))}(e,i,l,n,r)}function p(e){return parseInt(e,10)||0}D.prototype.eventElement=function(t){var i=this.eventElements.filter(function(n){return n.element===t})[0];return i||(i=new C(t),this.eventElements.push(i)),i},D.prototype.bind=function(t,i,n){this.eventElement(t).bind(i,n)},D.prototype.unbind=function(t,i,n){var r=this.eventElement(t);r.unbind(i,n),r.isEmpty&&this.eventElements.splice(this.eventElements.indexOf(r),1)},D.prototype.unbindAll=function(){this.eventElements.forEach(function(t){return t.unbindAll()}),this.eventElements=[]},D.prototype.once=function(t,i,n){var r=this.eventElement(t),l=function(s){r.unbind(i,l),n(s)};r.bind(i,l)};var H={isWebKit:typeof document<"u"&&"WebkitAppearance"in document.documentElement.style,supportsTouch:typeof window<"u"&&("ontouchstart"in window||"maxTouchPoints"in window.navigator&&window.navigator.maxTouchPoints>0||window.DocumentTouch&&document instanceof window.DocumentTouch),supportsIePointer:typeof navigator<"u"&&navigator.msMaxTouchPoints,isChrome:typeof navigator<"u"&&/Chrome/i.test(navigator&&navigator.userAgent)};function P(e){var t=e.element,i=Math.floor(t.scrollTop),n=t.getBoundingClientRect();e.containerWidth=Math.ceil(n.width),e.containerHeight=Math.ceil(n.height),e.contentWidth=t.scrollWidth,e.contentHeight=t.scrollHeight,t.contains(e.scrollbarXRail)||(V(t,m.element.rail("x")).forEach(function(r){return O(r)}),t.appendChild(e.scrollbarXRail)),t.contains(e.scrollbarYRail)||(V(t,m.element.rail("y")).forEach(function(r){return O(r)}),t.appendChild(e.scrollbarYRail)),!e.settings.suppressScrollX&&e.containerWidth+e.settings.scrollXMarginOffset<e.contentWidth?(e.scrollbarXActive=!0,e.railXWidth=e.containerWidth-e.railXMarginWidth,e.railXRatio=e.containerWidth/e.railXWidth,e.scrollbarXWidth=Q(e,p(e.railXWidth*e.containerWidth/e.contentWidth)),e.scrollbarXLeft=p((e.negativeScrollAdjustment+t.scrollLeft)*(e.railXWidth-e.scrollbarXWidth)/(e.contentWidth-e.containerWidth))):e.scrollbarXActive=!1,!e.settings.suppressScrollY&&e.containerHeight+e.settings.scrollYMarginOffset<e.contentHeight?(e.scrollbarYActive=!0,e.railYHeight=e.containerHeight-e.railYMarginHeight,e.railYRatio=e.containerHeight/e.railYHeight,e.scrollbarYHeight=Q(e,p(e.railYHeight*e.containerHeight/e.contentHeight)),e.scrollbarYTop=p(i*(e.railYHeight-e.scrollbarYHeight)/(e.contentHeight-e.containerHeight))):e.scrollbarYActive=!1,e.scrollbarXLeft>=e.railXWidth-e.scrollbarXWidth&&(e.scrollbarXLeft=e.railXWidth-e.scrollbarXWidth),e.scrollbarYTop>=e.railYHeight-e.scrollbarYHeight&&(e.scrollbarYTop=e.railYHeight-e.scrollbarYHeight),function pt(e,t){var i={width:t.railXWidth},n=Math.floor(e.scrollTop);i.left=t.isRtl?t.negativeScrollAdjustment+e.scrollLeft+t.containerWidth-t.contentWidth:e.scrollLeft,t.isScrollbarXUsingBottom?i.bottom=t.scrollbarXBottom-n:i.top=t.scrollbarXTop+n,w(t.scrollbarXRail,i);var r={top:n,height:t.railYHeight};t.isScrollbarYUsingRight?r.right=t.isRtl?t.contentWidth-(t.negativeScrollAdjustment+e.scrollLeft)-t.scrollbarYRight-t.scrollbarYOuterWidth-9:t.scrollbarYRight-e.scrollLeft:r.left=t.isRtl?t.negativeScrollAdjustment+e.scrollLeft+2*t.containerWidth-t.contentWidth-t.scrollbarYLeft-t.scrollbarYOuterWidth:t.scrollbarYLeft+e.scrollLeft,w(t.scrollbarYRail,r),w(t.scrollbarX,{left:t.scrollbarXLeft,width:t.scrollbarXWidth-t.railBorderXWidth}),w(t.scrollbarY,{top:t.scrollbarYTop,height:t.scrollbarYHeight-t.railBorderYWidth})}(t,e),e.scrollbarXActive?t.classList.add(m.state.active("x")):(t.classList.remove(m.state.active("x")),e.scrollbarXWidth=0,e.scrollbarXLeft=0,t.scrollLeft=!0===e.isRtl?e.contentWidth:0),e.scrollbarYActive?t.classList.add(m.state.active("y")):(t.classList.remove(m.state.active("y")),e.scrollbarYHeight=0,e.scrollbarYTop=0,t.scrollTop=0)}function Q(e,t){return e.settings.minScrollbarLength&&(t=Math.max(t,e.settings.minScrollbarLength)),e.settings.maxScrollbarLength&&(t=Math.min(t,e.settings.maxScrollbarLength)),t}function tt(e,t){var i=t[0],n=t[1],r=t[2],l=t[3],s=t[4],a=t[5],o=t[6],c=t[7],u=t[8],b=e.element,T=null,X=null,h=null;function g(f){f.touches&&f.touches[0]&&(f[r]=f.touches[0].pageY),b[o]=T+h*(f[r]-X),q(e,c),P(e),f.stopPropagation(),f.preventDefault()}function R(){Z(e,c),e[u].classList.remove(m.state.clicking),e.event.unbind(e.ownerDocument,"mousemove",g)}function d(f,Y){T=b[o],Y&&f.touches&&(f[r]=f.touches[0].pageY),X=f[r],h=(e[n]-e[i])/(e[l]-e[a]),Y?e.event.bind(e.ownerDocument,"touchmove",g):(e.event.bind(e.ownerDocument,"mousemove",g),e.event.once(e.ownerDocument,"mouseup",R),f.preventDefault()),e[u].classList.add(m.state.clicking),f.stopPropagation()}e.event.bind(e[s],"mousedown",function(f){d(f)}),e.event.bind(e[s],"touchstart",function(f){d(f,!0)})}var Et={"click-rail":function vt(e){e.event.bind(e.scrollbarY,"mousedown",function(i){return i.stopPropagation()}),e.event.bind(e.scrollbarYRail,"mousedown",function(i){var n=i.pageY-window.pageYOffset-e.scrollbarYRail.getBoundingClientRect().top;e.element.scrollTop+=(n>e.scrollbarYTop?1:-1)*e.containerHeight,P(e),i.stopPropagation()}),e.event.bind(e.scrollbarX,"mousedown",function(i){return i.stopPropagation()}),e.event.bind(e.scrollbarXRail,"mousedown",function(i){var n=i.pageX-window.pageXOffset-e.scrollbarXRail.getBoundingClientRect().left;e.element.scrollLeft+=(n>e.scrollbarXLeft?1:-1)*e.containerWidth,P(e),i.stopPropagation()})},"drag-thumb":function mt(e){tt(e,["containerWidth","contentWidth","pageX","railXWidth","scrollbarX","scrollbarXWidth","scrollLeft","x","scrollbarXRail"]),tt(e,["containerHeight","contentHeight","pageY","railYHeight","scrollbarY","scrollbarYHeight","scrollTop","y","scrollbarYRail"])},keyboard:function gt(e){var t=e.element;e.event.bind(e.ownerDocument,"keydown",function(l){if(!(l.isDefaultPrevented&&l.isDefaultPrevented()||l.defaultPrevented)&&(L(t,":hover")||L(e.scrollbarX,":focus")||L(e.scrollbarY,":focus"))){var s=document.activeElement?document.activeElement:e.ownerDocument.activeElement;if(s){if("IFRAME"===s.tagName)s=s.contentDocument.activeElement;else for(;s.shadowRoot;)s=s.shadowRoot.activeElement;if(function ut(e){return L(e,"input,[contenteditable]")||L(e,"select,[contenteditable]")||L(e,"textarea,[contenteditable]")||L(e,"button,[contenteditable]")}(s))return}var a=0,o=0;switch(l.which){case 37:a=l.metaKey?-e.contentWidth:l.altKey?-e.containerWidth:-30;break;case 38:o=l.metaKey?e.contentHeight:l.altKey?e.containerHeight:30;break;case 39:a=l.metaKey?e.contentWidth:l.altKey?e.containerWidth:30;break;case 40:o=l.metaKey?-e.contentHeight:l.altKey?-e.containerHeight:-30;break;case 32:o=l.shiftKey?e.containerHeight:-e.containerHeight;break;case 33:o=e.containerHeight;break;case 34:o=-e.containerHeight;break;case 36:o=e.contentHeight;break;case 35:o=-e.contentHeight;break;default:return}e.settings.suppressScrollX&&0!==a||e.settings.suppressScrollY&&0!==o||(t.scrollTop-=o,t.scrollLeft+=a,P(e),function r(l,s){var a=Math.floor(t.scrollTop);if(0===l){if(!e.scrollbarYActive)return!1;if(0===a&&s>0||a>=e.contentHeight-e.containerHeight&&s<0)return!e.settings.wheelPropagation}var o=t.scrollLeft;if(0===s){if(!e.scrollbarXActive)return!1;if(0===o&&l<0||o>=e.contentWidth-e.containerWidth&&l>0)return!e.settings.wheelPropagation}return!0}(a,o)&&l.preventDefault())}})},wheel:function bt(e){var t=e.element;function l(s){var a=function n(s){var a=s.deltaX,o=-1*s.deltaY;return(typeof a>"u"||typeof o>"u")&&(a=-1*s.wheelDeltaX/6,o=s.wheelDeltaY/6),s.deltaMode&&1===s.deltaMode&&(a*=10,o*=10),a!=a&&o!=o&&(a=0,o=s.wheelDelta),s.shiftKey?[-o,-a]:[a,o]}(s),o=a[0],c=a[1];if(!function r(s,a,o){if(!H.isWebKit&&t.querySelector("select:focus"))return!0;if(!t.contains(s))return!1;for(var c=s;c&&c!==t;){if(c.classList.contains(m.element.consuming))return!0;var u=S(c);if(o&&u.overflowY.match(/(scroll|auto)/)){var b=c.scrollHeight-c.clientHeight;if(b>0&&(c.scrollTop>0&&o<0||c.scrollTop<b&&o>0))return!0}if(a&&u.overflowX.match(/(scroll|auto)/)){var T=c.scrollWidth-c.clientWidth;if(T>0&&(c.scrollLeft>0&&a<0||c.scrollLeft<T&&a>0))return!0}c=c.parentNode}return!1}(s.target,o,c)){var u=!1;e.settings.useBothWheelAxes?e.scrollbarYActive&&!e.scrollbarXActive?(c?t.scrollTop-=c*e.settings.wheelSpeed:t.scrollTop+=o*e.settings.wheelSpeed,u=!0):e.scrollbarXActive&&!e.scrollbarYActive&&(o?t.scrollLeft+=o*e.settings.wheelSpeed:t.scrollLeft-=c*e.settings.wheelSpeed,u=!0):(t.scrollTop-=c*e.settings.wheelSpeed,t.scrollLeft+=o*e.settings.wheelSpeed),P(e),u=u||function i(s,a){var o=Math.floor(t.scrollTop),c=0===t.scrollTop,u=o+t.offsetHeight===t.scrollHeight,b=0===t.scrollLeft,T=t.scrollLeft+t.offsetWidth===t.scrollWidth;return!(Math.abs(a)>Math.abs(s)?c||u:b||T)||!e.settings.wheelPropagation}(o,c),u&&!s.ctrlKey&&(s.stopPropagation(),s.preventDefault())}}typeof window.onwheel<"u"?e.event.bind(t,"wheel",l):typeof window.onmousewheel<"u"&&e.event.bind(t,"mousewheel",l)},touch:function wt(e){if(H.supportsTouch||H.supportsIePointer){var t=e.element,r={},l=0,s={},a=null;H.supportsTouch?(e.event.bind(t,"touchstart",u),e.event.bind(t,"touchmove",T),e.event.bind(t,"touchend",X)):H.supportsIePointer&&(window.PointerEvent?(e.event.bind(t,"pointerdown",u),e.event.bind(t,"pointermove",T),e.event.bind(t,"pointerup",X)):window.MSPointerEvent&&(e.event.bind(t,"MSPointerDown",u),e.event.bind(t,"MSPointerMove",T),e.event.bind(t,"MSPointerUp",X)))}function n(h,g){t.scrollTop-=g,t.scrollLeft-=h,P(e)}function o(h){return h.targetTouches?h.targetTouches[0]:h}function c(h){return!(h.pointerType&&"pen"===h.pointerType&&0===h.buttons||!(h.targetTouches&&1===h.targetTouches.length||h.pointerType&&"mouse"!==h.pointerType&&h.pointerType!==h.MSPOINTER_TYPE_MOUSE))}function u(h){if(c(h)){var g=o(h);r.pageX=g.pageX,r.pageY=g.pageY,l=(new Date).getTime(),null!==a&&clearInterval(a)}}function T(h){if(c(h)){var g=o(h),R={pageX:g.pageX,pageY:g.pageY},d=R.pageX-r.pageX,f=R.pageY-r.pageY;if(function b(h,g,R){if(!t.contains(h))return!1;for(var d=h;d&&d!==t;){if(d.classList.contains(m.element.consuming))return!0;var f=S(d);if(R&&f.overflowY.match(/(scroll|auto)/)){var Y=d.scrollHeight-d.clientHeight;if(Y>0&&(d.scrollTop>0&&R<0||d.scrollTop<Y&&R>0))return!0}if(g&&f.overflowX.match(/(scroll|auto)/)){var A=d.scrollWidth-d.clientWidth;if(A>0&&(d.scrollLeft>0&&g<0||d.scrollLeft<A&&g>0))return!0}d=d.parentNode}return!1}(h.target,d,f))return;n(d,f),r=R;var Y=(new Date).getTime(),A=Y-l;A>0&&(s.x=d/A,s.y=f/A,l=Y),function i(h,g){var R=Math.floor(t.scrollTop),d=t.scrollLeft,f=Math.abs(h),Y=Math.abs(g);if(Y>f){if(g<0&&R===e.contentHeight-e.containerHeight||g>0&&0===R)return 0===window.scrollY&&g>0&&H.isChrome}else if(f>Y&&(h<0&&d===e.contentWidth-e.containerWidth||h>0&&0===d))return!0;return!0}(d,f)&&h.preventDefault()}}function X(){e.settings.swipeEasing&&(clearInterval(a),a=setInterval(function(){e.isInitialized?clearInterval(a):s.x||s.y?Math.abs(s.x)<.01&&Math.abs(s.y)<.01?clearInterval(a):(n(30*s.x,30*s.y),s.x*=.8,s.y*=.8):clearInterval(a)},10))}}},x=function(t,i){var n=this;if(void 0===i&&(i={}),"string"==typeof t&&(t=document.querySelector(t)),!t||!t.nodeName)throw new Error("no element is specified to initialize PerfectScrollbar");for(var r in this.element=t,t.classList.add(m.main),this.settings={handlers:["click-rail","drag-thumb","keyboard","wheel","touch"],maxScrollbarLength:null,minScrollbarLength:null,scrollingThreshold:1e3,scrollXMarginOffset:0,scrollYMarginOffset:0,suppressScrollX:!1,suppressScrollY:!1,swipeEasing:!0,useBothWheelAxes:!1,wheelPropagation:!0,wheelSpeed:1},i)this.settings[r]=i[r];this.containerWidth=null,this.containerHeight=null,this.contentWidth=null,this.contentHeight=null;var u,c,l=function(){return t.classList.add(m.state.focus)},s=function(){return t.classList.remove(m.state.focus)};this.isRtl="rtl"===S(t).direction,!0===this.isRtl&&t.classList.add(m.rtl),this.isNegativeScroll=(c=t.scrollLeft,t.scrollLeft=-1,u=t.scrollLeft<0,t.scrollLeft=c,u),this.negativeScrollAdjustment=this.isNegativeScroll?t.scrollWidth-t.clientWidth:0,this.event=new D,this.ownerDocument=t.ownerDocument||document,this.scrollbarXRail=k(m.element.rail("x")),t.appendChild(this.scrollbarXRail),this.scrollbarX=k(m.element.thumb("x")),this.scrollbarXRail.appendChild(this.scrollbarX),this.scrollbarX.setAttribute("tabindex",0),this.event.bind(this.scrollbarX,"focus",l),this.event.bind(this.scrollbarX,"blur",s),this.scrollbarXActive=null,this.scrollbarXWidth=null,this.scrollbarXLeft=null;var a=S(this.scrollbarXRail);this.scrollbarXBottom=parseInt(a.bottom,10),isNaN(this.scrollbarXBottom)?(this.isScrollbarXUsingBottom=!1,this.scrollbarXTop=p(a.top)):this.isScrollbarXUsingBottom=!0,this.railBorderXWidth=p(a.borderLeftWidth)+p(a.borderRightWidth),w(this.scrollbarXRail,{display:"block"}),this.railXMarginWidth=p(a.marginLeft)+p(a.marginRight),w(this.scrollbarXRail,{display:""}),this.railXWidth=null,this.railXRatio=null,this.scrollbarYRail=k(m.element.rail("y")),t.appendChild(this.scrollbarYRail),this.scrollbarY=k(m.element.thumb("y")),this.scrollbarYRail.appendChild(this.scrollbarY),this.scrollbarY.setAttribute("tabindex",0),this.event.bind(this.scrollbarY,"focus",l),this.event.bind(this.scrollbarY,"blur",s),this.scrollbarYActive=null,this.scrollbarYHeight=null,this.scrollbarYTop=null;var o=S(this.scrollbarYRail);this.scrollbarYRight=parseInt(o.right,10),isNaN(this.scrollbarYRight)?(this.isScrollbarYUsingRight=!1,this.scrollbarYLeft=p(o.left)):this.isScrollbarYUsingRight=!0,this.scrollbarYOuterWidth=this.isRtl?function dt(e){var t=S(e);return p(t.width)+p(t.paddingLeft)+p(t.paddingRight)+p(t.borderLeftWidth)+p(t.borderRightWidth)}(this.scrollbarY):null,this.railBorderYWidth=p(o.borderTopWidth)+p(o.borderBottomWidth),w(this.scrollbarYRail,{display:"block"}),this.railYMarginHeight=p(o.marginTop)+p(o.marginBottom),w(this.scrollbarYRail,{display:""}),this.railYHeight=null,this.railYRatio=null,this.reach={x:t.scrollLeft<=0?"start":t.scrollLeft>=this.contentWidth-this.containerWidth?"end":null,y:t.scrollTop<=0?"start":t.scrollTop>=this.contentHeight-this.containerHeight?"end":null},this.isAlive=!0,this.settings.handlers.forEach(function(c){return Et[c](n)}),this.lastScrollTop=Math.floor(t.scrollTop),this.lastScrollLeft=t.scrollLeft,this.event.bind(this.element,"scroll",function(c){return n.onScroll(c)}),P(this)};x.prototype.update=function(){this.isAlive&&(this.negativeScrollAdjustment=this.isNegativeScroll?this.element.scrollWidth-this.element.clientWidth:0,w(this.scrollbarXRail,{display:"block"}),w(this.scrollbarYRail,{display:"block"}),this.railXMarginWidth=p(S(this.scrollbarXRail).marginLeft)+p(S(this.scrollbarXRail).marginRight),this.railYMarginHeight=p(S(this.scrollbarYRail).marginTop)+p(S(this.scrollbarYRail).marginBottom),w(this.scrollbarXRail,{display:"none"}),w(this.scrollbarYRail,{display:"none"}),P(this),I(this,"top",0,!1,!0),I(this,"left",0,!1,!0),w(this.scrollbarXRail,{display:""}),w(this.scrollbarYRail,{display:""}))},x.prototype.onScroll=function(t){this.isAlive&&(P(this),I(this,"top",this.element.scrollTop-this.lastScrollTop),I(this,"left",this.element.scrollLeft-this.lastScrollLeft),this.lastScrollTop=Math.floor(this.element.scrollTop),this.lastScrollLeft=this.element.scrollLeft)},x.prototype.destroy=function(){this.isAlive&&(this.event.unbindAll(),O(this.scrollbarX),O(this.scrollbarY),O(this.scrollbarXRail),O(this.scrollbarYRail),this.removePsClasses(),this.element=null,this.scrollbarX=null,this.scrollbarY=null,this.scrollbarXRail=null,this.scrollbarYRail=null,this.isAlive=!1)},x.prototype.removePsClasses=function(){this.element.className=this.element.className.split(" ").filter(function(t){return!t.match(/^ps([-_].+|)$/)}).join(" ")};const Rt=x;var et=function(){if(typeof Map<"u")return Map;function e(t,i){var n=-1;return t.some(function(r,l){return r[0]===i&&(n=l,!0)}),n}return function(){function t(){this.__entries__=[]}return Object.defineProperty(t.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),t.prototype.get=function(i){var n=e(this.__entries__,i),r=this.__entries__[n];return r&&r[1]},t.prototype.set=function(i,n){var r=e(this.__entries__,i);~r?this.__entries__[r][1]=n:this.__entries__.push([i,n])},t.prototype.delete=function(i){var n=this.__entries__,r=e(n,i);~r&&n.splice(r,1)},t.prototype.has=function(i){return!!~e(this.__entries__,i)},t.prototype.clear=function(){this.__entries__.splice(0)},t.prototype.forEach=function(i,n){void 0===n&&(n=null);for(var r=0,l=this.__entries__;r<l.length;r++){var s=l[r];i.call(n,s[1],s[0])}},t}()}(),F=typeof window<"u"&&typeof document<"u"&&window.document===document,z=typeof global<"u"&&global.Math===Math?global:typeof self<"u"&&self.Math===Math?self:typeof window<"u"&&window.Math===Math?window:Function("return this")(),Tt="function"==typeof requestAnimationFrame?requestAnimationFrame.bind(z):function(e){return setTimeout(function(){return e(Date.now())},1e3/60)},Pt=["top","right","bottom","left","width","height","size","weight"],Lt=typeof MutationObserver<"u",_t=function(){function e(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=function St(e,t){var i=!1,n=!1,r=0;function l(){i&&(i=!1,e()),n&&a()}function s(){Tt(l)}function a(){var o=Date.now();if(i){if(o-r<2)return;n=!0}else i=!0,n=!1,setTimeout(s,t);r=o}return a}(this.refresh.bind(this),20)}return e.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},e.prototype.removeObserver=function(t){var i=this.observers_,n=i.indexOf(t);~n&&i.splice(n,1),!i.length&&this.connected_&&this.disconnect_()},e.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},e.prototype.updateObservers_=function(){var t=this.observers_.filter(function(i){return i.gatherActive(),i.hasActive()});return t.forEach(function(i){return i.broadcastActive()}),t.length>0},e.prototype.connect_=function(){!F||this.connected_||(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),Lt?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},e.prototype.disconnect_=function(){!F||!this.connected_||(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},e.prototype.onTransitionEnd_=function(t){var i=t.propertyName,n=void 0===i?"":i;Pt.some(function(l){return!!~n.indexOf(l)})&&this.refresh()},e.getInstance=function(){return this.instance_||(this.instance_=new e),this.instance_},e.instance_=null,e}(),it=function(e,t){for(var i=0,n=Object.keys(t);i<n.length;i++){var r=n[i];Object.defineProperty(e,r,{value:t[r],enumerable:!1,writable:!1,configurable:!0})}return e},M=function(e){return e&&e.ownerDocument&&e.ownerDocument.defaultView||z},nt=U(0,0,0,0);function j(e){return parseFloat(e)||0}function rt(e){for(var t=[],i=1;i<arguments.length;i++)t[i-1]=arguments[i];return t.reduce(function(n,r){return n+j(e["border-"+r+"-width"])},0)}var Ht=function(){return typeof SVGGraphicsElement<"u"?function(e){return e instanceof M(e).SVGGraphicsElement}:function(e){return e instanceof M(e).SVGElement&&"function"==typeof e.getBBox}}();function At(e){return F?Ht(e)?function Ot(e){var t=e.getBBox();return U(0,0,t.width,t.height)}(e):function Dt(e){var t=e.clientWidth,i=e.clientHeight;if(!t&&!i)return nt;var n=M(e).getComputedStyle(e),r=function Wt(e){for(var i={},n=0,r=["top","right","bottom","left"];n<r.length;n++){var l=r[n];i[l]=j(e["padding-"+l])}return i}(n),l=r.left+r.right,s=r.top+r.bottom,a=j(n.width),o=j(n.height);if("border-box"===n.boxSizing&&(Math.round(a+l)!==t&&(a-=rt(n,"left","right")+l),Math.round(o+s)!==i&&(o-=rt(n,"top","bottom")+s)),!function Mt(e){return e===M(e).document.documentElement}(e)){var c=Math.round(a+l)-t,u=Math.round(o+s)-i;1!==Math.abs(c)&&(a-=c),1!==Math.abs(u)&&(o-=u)}return U(r.left,r.top,a,o)}(e):nt}function U(e,t,i,n){return{x:e,y:t,width:i,height:n}}var xt=function(){function e(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=U(0,0,0,0),this.target=t}return e.prototype.isActive=function(){var t=At(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},e.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},e}(),kt=function(){return function e(t,i){var n=function Ct(e){var t=e.x,i=e.y,n=e.width,r=e.height,l=typeof DOMRectReadOnly<"u"?DOMRectReadOnly:Object,s=Object.create(l.prototype);return it(s,{x:t,y:i,width:n,height:r,top:i,right:t+n,bottom:r+i,left:t}),s}(i);it(this,{target:t,contentRect:n})}}(),Bt=function(){function e(t,i,n){if(this.activeObservations_=[],this.observations_=new et,"function"!=typeof t)throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=i,this.callbackCtx_=n}return e.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u")&&Element instanceof Object){if(!(t instanceof M(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var i=this.observations_;i.has(t)||(i.set(t,new xt(t)),this.controller_.addObserver(this),this.controller_.refresh())}},e.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u")&&Element instanceof Object){if(!(t instanceof M(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var i=this.observations_;i.has(t)&&(i.delete(t),i.size||this.controller_.removeObserver(this))}},e.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},e.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach(function(i){i.isActive()&&t.activeObservations_.push(i)})},e.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.callbackCtx_,i=this.activeObservations_.map(function(n){return new kt(n.target,n.broadcastRect())});this.callback_.call(t,i,t),this.clearActive()}},e.prototype.clearActive=function(){this.activeObservations_.splice(0)},e.prototype.hasActive=function(){return this.activeObservations_.length>0},e}(),st=typeof WeakMap<"u"?new WeakMap:new et,ot=function(){return function e(t){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var i=_t.getInstance(),n=new Bt(t,i,this);st.set(this,n)}}();["observe","unobserve","disconnect"].forEach(function(e){ot.prototype[e]=function(){var t;return(t=st.get(this))[e].apply(t,arguments)}});const zt=typeof z.ResizeObserver<"u"?z.ResizeObserver:ot,jt=new v.InjectionToken("PERFECT_SCROLLBAR_CONFIG");class lt{constructor(t,i,n,r){this.x=t,this.y=i,this.w=n,this.h=r}}class N{constructor(t,i){this.x=t,this.y=i}}const at=["psScrollY","psScrollX","psScrollUp","psScrollDown","psScrollLeft","psScrollRight","psYReachEnd","psYReachStart","psXReachEnd","psXReachStart"];class ct{constructor(t={}){this.assign(t)}assign(t={}){for(const i in t)this[i]=t[i]}}class Ut{constructor(t,i,n,r,l){this.zone=t,this.differs=i,this.elementRef=n,this.platformId=r,this.defaults=l,this.instance=null,this.ro=null,this.timeout=null,this.animation=null,this.configDiff=null,this.ngDestroy=new y.Subject,this.disabled=!1,this.psScrollY=new v.EventEmitter,this.psScrollX=new v.EventEmitter,this.psScrollUp=new v.EventEmitter,this.psScrollDown=new v.EventEmitter,this.psScrollLeft=new v.EventEmitter,this.psScrollRight=new v.EventEmitter,this.psYReachEnd=new v.EventEmitter,this.psYReachStart=new v.EventEmitter,this.psXReachEnd=new v.EventEmitter,this.psXReachStart=new v.EventEmitter}ngOnInit(){if(!this.disabled&&(0,_.isPlatformBrowser)(this.platformId)){const t=new ct(this.defaults);t.assign(this.config),this.zone.runOutsideAngular(()=>{this.instance=new Rt(this.elementRef.nativeElement,t)}),this.configDiff||(this.configDiff=this.differs.find(this.config||{}).create(),this.configDiff.diff(this.config||{})),this.zone.runOutsideAngular(()=>{this.ro=new zt(()=>{this.update()}),this.elementRef.nativeElement.children[0]&&this.ro.observe(this.elementRef.nativeElement.children[0]),this.ro.observe(this.elementRef.nativeElement)}),this.zone.runOutsideAngular(()=>{at.forEach(i=>{const n=i.replace(/([A-Z])/g,r=>`-${r.toLowerCase()}`);(0,y.fromEvent)(this.elementRef.nativeElement,n).pipe((0,E.auditTime)(20),(0,E.takeUntil)(this.ngDestroy)).subscribe(r=>{this[i].emit(r)})})})}}ngOnDestroy(){(0,_.isPlatformBrowser)(this.platformId)&&(this.ngDestroy.next(),this.ngDestroy.complete(),this.ro&&this.ro.disconnect(),this.timeout&&typeof window<"u"&&window.clearTimeout(this.timeout),this.zone.runOutsideAngular(()=>{this.instance&&this.instance.destroy()}),this.instance=null)}ngDoCheck(){!this.disabled&&this.configDiff&&(0,_.isPlatformBrowser)(this.platformId)&&this.configDiff.diff(this.config||{})&&(this.ngOnDestroy(),this.ngOnInit())}ngOnChanges(t){t.disabled&&!t.disabled.isFirstChange()&&(0,_.isPlatformBrowser)(this.platformId)&&t.disabled.currentValue!==t.disabled.previousValue&&(!0===t.disabled.currentValue?this.ngOnDestroy():!1===t.disabled.currentValue&&this.ngOnInit())}ps(){return this.instance}update(){typeof window<"u"&&(this.timeout&&window.clearTimeout(this.timeout),this.timeout=window.setTimeout(()=>{if(!this.disabled&&this.configDiff)try{this.zone.runOutsideAngular(()=>{this.instance&&this.instance.update()})}catch{}},0))}geometry(t="scroll"){return new lt(this.elementRef.nativeElement[t+"Left"],this.elementRef.nativeElement[t+"Top"],this.elementRef.nativeElement[t+"Width"],this.elementRef.nativeElement[t+"Height"])}position(t=!1){return!t&&this.instance?new N(this.instance.reach.x||0,this.instance.reach.y||0):new N(this.elementRef.nativeElement.scrollLeft,this.elementRef.nativeElement.scrollTop)}scrollable(t="any"){const i=this.elementRef.nativeElement;return"any"===t?i.classList.contains("ps--active-x")||i.classList.contains("ps--active-y"):"both"===t?i.classList.contains("ps--active-x")&&i.classList.contains("ps--active-y"):i.classList.contains("ps--active-"+t)}scrollTo(t,i,n){this.disabled||(null==i&&null==n?this.animateScrolling("scrollTop",t,n):(null!=t&&this.animateScrolling("scrollLeft",t,n),null!=i&&this.animateScrolling("scrollTop",i,n)))}scrollToX(t,i){this.animateScrolling("scrollLeft",t,i)}scrollToY(t,i){this.animateScrolling("scrollTop",t,i)}scrollToTop(t,i){this.animateScrolling("scrollTop",t||0,i)}scrollToLeft(t,i){this.animateScrolling("scrollLeft",t||0,i)}scrollToRight(t,i){this.animateScrolling("scrollLeft",this.elementRef.nativeElement.scrollWidth-this.elementRef.nativeElement.clientWidth-(t||0),i)}scrollToBottom(t,i){this.animateScrolling("scrollTop",this.elementRef.nativeElement.scrollHeight-this.elementRef.nativeElement.clientHeight-(t||0),i)}scrollToElement(t,i,n){if("string"==typeof t&&(t=this.elementRef.nativeElement.querySelector(t)),t){const r=t.getBoundingClientRect(),l=this.elementRef.nativeElement.getBoundingClientRect();this.elementRef.nativeElement.classList.contains("ps--active-x")&&this.animateScrolling("scrollLeft",r.left-l.left+this.elementRef.nativeElement.scrollLeft+(i||0),n),this.elementRef.nativeElement.classList.contains("ps--active-y")&&this.animateScrolling("scrollTop",r.top-l.top+this.elementRef.nativeElement.scrollTop+(i||0),n)}}animateScrolling(t,i,n){if(this.animation&&(window.cancelAnimationFrame(this.animation),this.animation=null),!n||typeof window>"u")this.elementRef.nativeElement[t]=i;else if(i!==this.elementRef.nativeElement[t]){let r=0,l=0,s=performance.now(),a=this.elementRef.nativeElement[t];const o=(a-i)/2,c=u=>{l+=Math.PI/(n/(u-s)),r=Math.round(i+o+o*Math.cos(l)),this.elementRef.nativeElement[t]===a&&(l>=Math.PI?this.animateScrolling(t,i,0):(this.elementRef.nativeElement[t]=r,a=this.elementRef.nativeElement[t],s=u,this.animation=window.requestAnimationFrame(c)))};window.requestAnimationFrame(c)}}}class Ft{constructor(t,i,n){this.zone=t,this.cdRef=i,this.platformId=n,this.states={},this.indicatorX=!1,this.indicatorY=!1,this.interaction=!1,this.scrollPositionX=0,this.scrollPositionY=0,this.scrollDirectionX=0,this.scrollDirectionY=0,this.usePropagationX=!1,this.usePropagationY=!1,this.allowPropagationX=!1,this.allowPropagationY=!1,this.stateTimeout=null,this.ngDestroy=new y.Subject,this.stateUpdate=new y.Subject,this.disabled=!1,this.usePSClass=!0,this.autoPropagation=!1,this.scrollIndicators=!1,this.psScrollY=new v.EventEmitter,this.psScrollX=new v.EventEmitter,this.psScrollUp=new v.EventEmitter,this.psScrollDown=new v.EventEmitter,this.psScrollLeft=new v.EventEmitter,this.psScrollRight=new v.EventEmitter,this.psYReachEnd=new v.EventEmitter,this.psYReachStart=new v.EventEmitter,this.psXReachEnd=new v.EventEmitter,this.psXReachStart=new v.EventEmitter}ngOnInit(){(0,_.isPlatformBrowser)(this.platformId)&&(this.stateUpdate.pipe((0,E.takeUntil)(this.ngDestroy),(0,E.distinctUntilChanged)((t,i)=>t===i&&!this.stateTimeout)).subscribe(t=>{this.stateTimeout&&typeof window<"u"&&(window.clearTimeout(this.stateTimeout),this.stateTimeout=null),"x"===t||"y"===t?(this.interaction=!1,"x"===t?(this.indicatorX=!1,this.states.left=!1,this.states.right=!1,this.autoPropagation&&this.usePropagationX&&(this.allowPropagationX=!1)):"y"===t&&(this.indicatorY=!1,this.states.top=!1,this.states.bottom=!1,this.autoPropagation&&this.usePropagationY&&(this.allowPropagationY=!1))):("left"===t||"right"===t?(this.states.left=!1,this.states.right=!1,this.states[t]=!0,this.autoPropagation&&this.usePropagationX&&(this.indicatorX=!0)):("top"===t||"bottom"===t)&&(this.states.top=!1,this.states.bottom=!1,this.states[t]=!0,this.autoPropagation&&this.usePropagationY&&(this.indicatorY=!0)),this.autoPropagation&&typeof window<"u"&&(this.stateTimeout=window.setTimeout(()=>{this.indicatorX=!1,this.indicatorY=!1,this.stateTimeout=null,this.interaction&&(this.states.left||this.states.right)&&(this.allowPropagationX=!0),this.interaction&&(this.states.top||this.states.bottom)&&(this.allowPropagationY=!0),this.cdRef.markForCheck()},500))),this.cdRef.markForCheck(),this.cdRef.detectChanges()}),this.zone.runOutsideAngular(()=>{if(this.directiveRef){const t=this.directiveRef.elementRef.nativeElement;(0,y.fromEvent)(t,"wheel").pipe((0,E.takeUntil)(this.ngDestroy)).subscribe(i=>{!this.disabled&&this.autoPropagation&&this.checkPropagation(i,i.deltaX,i.deltaY)}),(0,y.fromEvent)(t,"touchmove").pipe((0,E.takeUntil)(this.ngDestroy)).subscribe(i=>{if(!this.disabled&&this.autoPropagation){const n=i.touches[0].clientX,r=i.touches[0].clientY;this.checkPropagation(i,n-this.scrollPositionX,r-this.scrollPositionY),this.scrollPositionX=n,this.scrollPositionY=r}}),(0,y.merge)((0,y.fromEvent)(t,"ps-scroll-x").pipe((0,E.mapTo)("x")),(0,y.fromEvent)(t,"ps-scroll-y").pipe((0,E.mapTo)("y")),(0,y.fromEvent)(t,"ps-x-reach-end").pipe((0,E.mapTo)("right")),(0,y.fromEvent)(t,"ps-y-reach-end").pipe((0,E.mapTo)("bottom")),(0,y.fromEvent)(t,"ps-x-reach-start").pipe((0,E.mapTo)("left")),(0,y.fromEvent)(t,"ps-y-reach-start").pipe((0,E.mapTo)("top"))).pipe((0,E.takeUntil)(this.ngDestroy)).subscribe(i=>{!this.disabled&&(this.autoPropagation||this.scrollIndicators)&&this.stateUpdate.next(i)})}}),window.setTimeout(()=>{at.forEach(t=>{this.directiveRef&&(this.directiveRef[t]=this[t])})},0))}ngOnDestroy(){(0,_.isPlatformBrowser)(this.platformId)&&(this.ngDestroy.next(),this.ngDestroy.unsubscribe(),this.stateTimeout&&typeof window<"u"&&window.clearTimeout(this.stateTimeout))}ngDoCheck(){if((0,_.isPlatformBrowser)(this.platformId)&&!this.disabled&&this.autoPropagation&&this.directiveRef){const t=this.directiveRef.elementRef.nativeElement;this.usePropagationX=t.classList.contains("ps--active-x"),this.usePropagationY=t.classList.contains("ps--active-y")}}checkPropagation(t,i,n){this.interaction=!0;const r=i<0?-1:1,l=n<0?-1:1;(this.usePropagationX&&this.usePropagationY||this.usePropagationX&&(!this.allowPropagationX||this.scrollDirectionX!==r)||this.usePropagationY&&(!this.allowPropagationY||this.scrollDirectionY!==l))&&(t.preventDefault(),t.stopPropagation()),i&&(this.scrollDirectionX=r),n&&(this.scrollDirectionY=l),this.stateUpdate.next("interaction"),this.cdRef.detectChanges()}}class Nt{constructor(t,i){this.renderer=t,["ps__child","ps__child--consume"].forEach(n=>{this.renderer.addClass(i?.nativeElement,n)})}}class Kt{}}}]);