(self.webpackChunkcd_comm=self.webpackChunkcd_comm||[]).push([[1703],{21703:(k,v,o)=>{o.r(v),o.d(v,{DndDragImageRefDirective:()=>O,DndDraggableDirective:()=>m,DndDropzoneDirective:()=>L,DndHandleDirective:()=>F,DndModule:()=>B,DndPlaceholderRefDirective:()=>w});var d=o(87675),_=o(35228);const E=["move","copy","link"],f="application/x-dnd",D="application/json",g="Text";function y(n){return n.substr(0,f.length)===f}function b(n){if(n.dataTransfer){const r=n.dataTransfer.types;if(!r)return g;for(let e=0;e<r.length;e++)if(r[e]===g||r[e]===D||y(r[e]))return r[e]}return null}function c(n,r){return"all"===r||"uninitialized"===r?n:n.filter(function(e){return-1!==r.toLowerCase().indexOf(e)})}function P(n,r){const e=window.getComputedStyle(r),t=parseFloat(e.paddingTop)||0,i=parseFloat(e.paddingLeft)||0,a=parseFloat(e.borderTopWidth)||0,l=parseFloat(e.borderLeftWidth)||0;return{x:n.offsetX+i+l,y:n.offsetY+t+a}}const s={isDragging:!1,dropEffect:"none",effectAllowed:"all",type:void 0};function C(){s.isDragging=!1,s.dropEffect=void 0,s.effectAllowed=void 0,s.type=void 0}function h(n,r){!0===s.isDragging&&(s.dropEffect=r),n.dataTransfer&&(n.dataTransfer.dropEffect=r)}function I(n,r){let t=c(E,n.dataTransfer?n.dataTransfer.effectAllowed:"uninitialized");return!0===s.isDragging&&(t=c(t,s.effectAllowed)),r&&(t=c(t,r)),0===t.length?"none":n.ctrlKey&&-1!==t.indexOf("copy")?"copy":n.altKey&&-1!==t.indexOf("link")?"link":t[0]}function u(n){if(!0===s.isDragging)return s.type;const r=b(n);return null!==r&&r!==g&&r!==D&&r.substr(f.length+1)||void 0}function p(){return!1===s.isDragging}const R=s;let O=(()=>{class n{constructor(e,t){e.registerDragImage(t)}}return n.\u0275fac=function(e){return new(e||n)(d.\u0275\u0275directiveInject((0,d.forwardRef)(()=>m)),d.\u0275\u0275directiveInject(d.ElementRef))},n.\u0275dir=d.\u0275\u0275defineDirective({type:n,selectors:[["","dndDragImageRef",""]]}),n})(),m=(()=>{class n{constructor(e,t,i){this.elementRef=e,this.renderer=t,this.ngZone=i,this.dndEffectAllowed="copy",this.dndDraggingClass="dndDragging",this.dndDraggingSourceClass="dndDraggingSource",this.dndDraggableDisabledClass="dndDraggableDisabled",this.dndDragImageOffsetFunction=P,this.dndStart=new d.EventEmitter,this.dndDrag=new d.EventEmitter,this.dndEnd=new d.EventEmitter,this.dndMoved=new d.EventEmitter,this.dndCopied=new d.EventEmitter,this.dndLinked=new d.EventEmitter,this.dndCanceled=new d.EventEmitter,this.draggable=!0,this.isDragStarted=!1,this.dragEventHandler=a=>this.onDrag(a)}set dndDisableIf(e){this.draggable=!e,this.draggable?this.renderer.removeClass(this.elementRef.nativeElement,this.dndDraggableDisabledClass):this.renderer.addClass(this.elementRef.nativeElement,this.dndDraggableDisabledClass)}set dndDisableDragIf(e){this.dndDisableIf=e}ngAfterViewInit(){this.ngZone.runOutsideAngular(()=>{this.elementRef.nativeElement.addEventListener("drag",this.dragEventHandler)})}ngOnDestroy(){this.elementRef.nativeElement.removeEventListener("drag",this.dragEventHandler),!0===this.isDragStarted&&C()}onDragStart(e){if(!1===this.draggable||typeof this.dndHandle<"u"&&typeof e._dndUsingHandle>"u")return!1;(function z(n,r,e){s.isDragging=!0,s.dropEffect="none",s.effectAllowed=r,s.type=e,n.dataTransfer&&(n.dataTransfer.effectAllowed=r)})(e,this.dndEffectAllowed,this.dndType),this.isDragStarted=!0,function H(n,r,e){const t=f+(r.type?"-"+r.type:""),i=JSON.stringify(r);try{n.dataTransfer?.setData(t,i)}catch{try{n.dataTransfer?.setData(D,i)}catch{const x=c(E,e);n.dataTransfer&&(n.dataTransfer.effectAllowed=x[0]),n.dataTransfer?.setData(g,i)}}}(e,{data:this.dndDraggable,type:this.dndType},R.effectAllowed),this.dragImage=this.determineDragImage(),this.renderer.addClass(this.dragImage,this.dndDraggingClass),(typeof this.dndDragImageElementRef<"u"||typeof e._dndUsingHandle<"u")&&function S(n,r,e){const t=e(n,r)||{x:0,y:0};n.dataTransfer.setDragImage(r,t.x,t.y)}(e,this.dragImage,this.dndDragImageOffsetFunction);const t=this.renderer.listen(this.elementRef.nativeElement,"drag",()=>{this.renderer.addClass(this.elementRef.nativeElement,this.dndDraggingSourceClass),t()});return this.dndStart.emit(e),e.stopPropagation(),!0}onDrag(e){this.dndDrag.emit(e)}onDragEnd(e){let i;switch(R.dropEffect){case"copy":i=this.dndCopied;break;case"link":i=this.dndLinked;break;case"move":i=this.dndMoved;break;default:i=this.dndCanceled}i.emit(e),this.dndEnd.emit(e),C(),this.isDragStarted=!1,this.renderer.removeClass(this.dragImage,this.dndDraggingClass),window.setTimeout(()=>{this.renderer.removeClass(this.elementRef.nativeElement,this.dndDraggingSourceClass)},0),e.stopPropagation()}registerDragHandle(e){this.dndHandle=e}registerDragImage(e){this.dndDragImageElementRef=e}determineDragImage(){return typeof this.dndDragImageElementRef<"u"?this.dndDragImageElementRef.nativeElement:this.elementRef.nativeElement}}return n.\u0275fac=function(e){return new(e||n)(d.\u0275\u0275directiveInject(d.ElementRef),d.\u0275\u0275directiveInject(d.Renderer2),d.\u0275\u0275directiveInject(d.NgZone))},n.\u0275dir=d.\u0275\u0275defineDirective({type:n,selectors:[["","dndDraggable",""]],hostVars:1,hostBindings:function(e,t){1&e&&d.\u0275\u0275listener("dragstart",function(a){return t.onDragStart(a)})("dragend",function(a){return t.onDragEnd(a)}),2&e&&d.\u0275\u0275attribute("draggable",t.draggable)},inputs:{dndDraggable:"dndDraggable",dndEffectAllowed:"dndEffectAllowed",dndType:"dndType",dndDraggingClass:"dndDraggingClass",dndDraggingSourceClass:"dndDraggingSourceClass",dndDraggableDisabledClass:"dndDraggableDisabledClass",dndDragImageOffsetFunction:"dndDragImageOffsetFunction",dndDisableIf:"dndDisableIf",dndDisableDragIf:"dndDisableDragIf"},outputs:{dndStart:"dndStart",dndDrag:"dndDrag",dndEnd:"dndEnd",dndMoved:"dndMoved",dndCopied:"dndCopied",dndLinked:"dndLinked",dndCanceled:"dndCanceled"}}),n})(),w=(()=>{class n{constructor(e){this.elementRef=e}}return n.\u0275fac=function(e){return new(e||n)(d.\u0275\u0275directiveInject(d.ElementRef))},n.\u0275dir=d.\u0275\u0275defineDirective({type:n,selectors:[["","dndPlaceholderRef",""]]}),n})(),L=(()=>{class n{constructor(e,t,i){this.ngZone=e,this.elementRef=t,this.renderer=i,this.dndDropzone="",this.dndEffectAllowed="uninitialized",this.dndAllowExternal=!1,this.dndHorizontal=!1,this.dndDragoverClass="dndDragover",this.dndDropzoneDisabledClass="dndDropzoneDisabled",this.dndDragover=new d.EventEmitter,this.dndDrop=new d.EventEmitter,this.placeholder=null,this.disabled=!1,this.dragEnterEventHandler=a=>this.onDragEnter(a),this.dragOverEventHandler=a=>this.onDragOver(a),this.dragLeaveEventHandler=a=>this.onDragLeave(a)}set dndDisableIf(e){this.disabled=!!e,this.disabled?this.renderer.addClass(this.elementRef.nativeElement,this.dndDropzoneDisabledClass):this.renderer.removeClass(this.elementRef.nativeElement,this.dndDropzoneDisabledClass)}set dndDisableDropIf(e){this.dndDisableIf=e}ngAfterViewInit(){this.placeholder=this.tryGetPlaceholder(),this.removePlaceholderFromDOM(),this.ngZone.runOutsideAngular(()=>{this.elementRef.nativeElement.addEventListener("dragenter",this.dragEnterEventHandler),this.elementRef.nativeElement.addEventListener("dragover",this.dragOverEventHandler),this.elementRef.nativeElement.addEventListener("dragleave",this.dragLeaveEventHandler)})}ngOnDestroy(){this.elementRef.nativeElement.removeEventListener("dragenter",this.dragEnterEventHandler),this.elementRef.nativeElement.removeEventListener("dragover",this.dragOverEventHandler),this.elementRef.nativeElement.removeEventListener("dragleave",this.dragLeaveEventHandler)}onDragEnter(e){if(!0===e._dndDropzoneActive)return void this.cleanupDragoverState();if(typeof e._dndDropzoneActive>"u"){const i=document.elementFromPoint(e.clientX,e.clientY);this.elementRef.nativeElement.contains(i)&&(e._dndDropzoneActive=!0)}const t=u(e);!1!==this.isDropAllowed(t)&&e.preventDefault()}onDragOver(e){if(e.defaultPrevented)return;const t=u(e);if(!1===this.isDropAllowed(t))return;this.checkAndUpdatePlaceholderPosition(e);const i=I(e,this.dndEffectAllowed);"none"!==i?(e.preventDefault(),h(e,i),this.dndDragover.emit(e),this.renderer.addClass(this.elementRef.nativeElement,this.dndDragoverClass)):this.cleanupDragoverState()}onDrop(e){try{const t=u(e);if(!1===this.isDropAllowed(t))return;const i=function T(n,r){const e=b(n);return!0===r?null!==e&&y(e)?JSON.parse(n.dataTransfer?.getData(e)??"{}"):{}:null!==e?JSON.parse(n.dataTransfer?.getData(e)??"{}"):{}}(e,p());if(!1===this.isDropAllowed(i.type))return;e.preventDefault();const a=I(e);if(h(e,a),"none"===a)return;const l=this.getPlaceholderIndex();if(-1===l)return;this.dndDrop.emit({event:e,dropEffect:a,isExternal:p(),data:i.data,index:l,type:t}),e.stopPropagation()}finally{this.cleanupDragoverState()}}onDragLeave(e){if(typeof e._dndDropzoneActive>"u"){const t=document.elementFromPoint(e.clientX,e.clientY);if(this.elementRef.nativeElement.contains(t))return void(e._dndDropzoneActive=!0)}this.cleanupDragoverState(),h(e,"none")}isDropAllowed(e){if(!0===this.disabled||!0===p()&&!1===this.dndAllowExternal)return!1;if(!this.dndDropzone||!e)return!0;if(!1===Array.isArray(this.dndDropzone))throw new Error("dndDropzone: bound value to [dndDropzone] must be an array!");return-1!==this.dndDropzone.indexOf(e)}tryGetPlaceholder(){return typeof this.dndPlaceholderRef<"u"?this.dndPlaceholderRef.elementRef.nativeElement:this.elementRef.nativeElement.querySelector("[dndPlaceholderRef]")}removePlaceholderFromDOM(){null!==this.placeholder&&null!==this.placeholder.parentNode&&this.placeholder.parentNode.removeChild(this.placeholder)}checkAndUpdatePlaceholderPosition(e){if(null===this.placeholder)return;this.placeholder.parentNode!==this.elementRef.nativeElement&&this.renderer.appendChild(this.elementRef.nativeElement,this.placeholder);const t=function A(n,r){let e=r;for(;e.parentNode!==n;){if(!e.parentNode)return null;e=e.parentNode}return e}(this.elementRef.nativeElement,e.target);null!==t&&t!==this.placeholder&&(function M(n,r,e){const t=r.getBoundingClientRect();return e?n.clientX<t.left+t.width/2:n.clientY<t.top+t.height/2}(e,t,this.dndHorizontal)?t.previousSibling!==this.placeholder&&this.renderer.insertBefore(this.elementRef.nativeElement,this.placeholder,t):t.nextSibling!==this.placeholder&&this.renderer.insertBefore(this.elementRef.nativeElement,this.placeholder,t.nextSibling))}getPlaceholderIndex(){if(null!==this.placeholder)return Array.prototype.indexOf.call(this.elementRef.nativeElement.children,this.placeholder)}cleanupDragoverState(){this.renderer.removeClass(this.elementRef.nativeElement,this.dndDragoverClass),this.removePlaceholderFromDOM()}}return n.\u0275fac=function(e){return new(e||n)(d.\u0275\u0275directiveInject(d.NgZone),d.\u0275\u0275directiveInject(d.ElementRef),d.\u0275\u0275directiveInject(d.Renderer2))},n.\u0275dir=d.\u0275\u0275defineDirective({type:n,selectors:[["","dndDropzone",""]],contentQueries:function(e,t,i){if(1&e&&d.\u0275\u0275contentQuery(i,w,5),2&e){let a;d.\u0275\u0275queryRefresh(a=d.\u0275\u0275loadQuery())&&(t.dndPlaceholderRef=a.first)}},hostBindings:function(e,t){1&e&&d.\u0275\u0275listener("drop",function(a){return t.onDrop(a)})},inputs:{dndDropzone:"dndDropzone",dndEffectAllowed:"dndEffectAllowed",dndAllowExternal:"dndAllowExternal",dndHorizontal:"dndHorizontal",dndDragoverClass:"dndDragoverClass",dndDropzoneDisabledClass:"dndDropzoneDisabledClass",dndDisableIf:"dndDisableIf",dndDisableDropIf:"dndDisableDropIf"},outputs:{dndDragover:"dndDragover",dndDrop:"dndDrop"}}),n})(),F=(()=>{class n{constructor(e){this.draggable=!0,e.registerDragHandle(this)}onDragEvent(e){e._dndUsingHandle=!0}}return n.\u0275fac=function(e){return new(e||n)(d.\u0275\u0275directiveInject(m))},n.\u0275dir=d.\u0275\u0275defineDirective({type:n,selectors:[["","dndHandle",""]],hostVars:1,hostBindings:function(e,t){1&e&&d.\u0275\u0275listener("dragstart",function(a){return t.onDragEvent(a)})("dragend",function(a){return t.onDragEvent(a)}),2&e&&d.\u0275\u0275attribute("draggable",t.draggable)}}),n})(),B=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=d.\u0275\u0275defineNgModule({type:n}),n.\u0275inj=d.\u0275\u0275defineInjector({imports:[_.CommonModule]}),n})()}}]);