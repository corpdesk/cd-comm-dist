(self.webpackChunkcd_comm=self.webpackChunkcd_comm||[]).push([[3565,5946],{5946:(D,m,d)=>{d.r(m),d.d(m,{LeafletBaseLayersDirective:()=>M,LeafletControlLayersChanges:()=>f,LeafletControlLayersConfig:()=>p,LeafletControlLayersWrapper:()=>c,LeafletDirective:()=>h,LeafletDirectiveWrapper:()=>u,LeafletLayerDirective:()=>v,LeafletLayersControlDirective:()=>C,LeafletLayersDirective:()=>L,LeafletModule:()=>g,LeafletTileLayerDefinition:()=>y,LeafletUtil:()=>a});var i=d(9883),l=d(4517);class a{static mapToArray(o){const e=[];for(const s in o)o.hasOwnProperty(s)&&e.push(o[s]);return e}static handleEvent(o,e,s){0<e.observers.length&&o.run(()=>{e.emit(s)})}}let h=(()=>{class n{constructor(e,s){this.element=e,this.zone=s,this.DEFAULT_ZOOM=1,this.DEFAULT_CENTER=(0,l.latLng)(38.907192,-77.036871),this.DEFAULT_FPZ_OPTIONS={},this.fitBoundsOptions=this.DEFAULT_FPZ_OPTIONS,this.panOptions=this.DEFAULT_FPZ_OPTIONS,this.zoomOptions=this.DEFAULT_FPZ_OPTIONS,this.zoomPanOptions=this.DEFAULT_FPZ_OPTIONS,this.options={},this.mapReady=new i.EventEmitter,this.zoomChange=new i.EventEmitter,this.centerChange=new i.EventEmitter,this.onClick=new i.EventEmitter,this.onDoubleClick=new i.EventEmitter,this.onMouseDown=new i.EventEmitter,this.onMouseUp=new i.EventEmitter,this.onMouseMove=new i.EventEmitter,this.onMouseOver=new i.EventEmitter,this.onMouseOut=new i.EventEmitter,this.onMapMove=new i.EventEmitter,this.onMapMoveStart=new i.EventEmitter,this.onMapMoveEnd=new i.EventEmitter,this.onMapZoom=new i.EventEmitter,this.onMapZoomStart=new i.EventEmitter,this.onMapZoomEnd=new i.EventEmitter}ngOnInit(){this.zone.runOutsideAngular(()=>{this.map=(0,l.map)(this.element.nativeElement,this.options),this.addMapEventListeners()}),null!=this.center&&null!=this.zoom&&this.setView(this.center,this.zoom),null!=this.fitBounds&&this.setFitBounds(this.fitBounds),null!=this.maxBounds&&this.setMaxBounds(this.maxBounds),null!=this.minZoom&&this.setMinZoom(this.minZoom),null!=this.maxZoom&&this.setMaxZoom(this.maxZoom),this.doResize(),this.mapReady.emit(this.map)}ngOnChanges(e){e.zoom&&e.center&&null!=this.zoom&&null!=this.center?this.setView(e.center.currentValue,e.zoom.currentValue):e.zoom?this.setZoom(e.zoom.currentValue):e.center&&this.setCenter(e.center.currentValue),e.fitBounds&&this.setFitBounds(e.fitBounds.currentValue),e.maxBounds&&this.setMaxBounds(e.maxBounds.currentValue),e.minZoom&&this.setMinZoom(e.minZoom.currentValue),e.maxZoom&&this.setMaxZoom(e.maxZoom.currentValue)}ngOnDestroy(){null!=this.map&&this.map.remove()}getMap(){return this.map}onResize(){this.delayResize()}addMapEventListeners(){const e=(t,r)=>{this.map.on(t,r)};e("click",t=>a.handleEvent(this.zone,this.onClick,t)),e("dblclick",t=>a.handleEvent(this.zone,this.onDoubleClick,t)),e("mousedown",t=>a.handleEvent(this.zone,this.onMouseDown,t)),e("mouseup",t=>a.handleEvent(this.zone,this.onMouseUp,t)),e("mouseover",t=>a.handleEvent(this.zone,this.onMouseOver,t)),e("mouseout",t=>a.handleEvent(this.zone,this.onMouseOut,t)),e("mousemove",t=>a.handleEvent(this.zone,this.onMouseMove,t)),e("zoomstart",t=>a.handleEvent(this.zone,this.onMapZoomStart,t)),e("zoom",t=>a.handleEvent(this.zone,this.onMapZoom,t)),e("zoomend",t=>a.handleEvent(this.zone,this.onMapZoomEnd,t)),e("movestart",t=>a.handleEvent(this.zone,this.onMapMoveStart,t)),e("move",t=>a.handleEvent(this.zone,this.onMapMove,t)),e("moveend",t=>a.handleEvent(this.zone,this.onMapMoveEnd,t));const s=()=>{const t=this.map.getZoom();t!==this.zoom&&(this.zoom=t,a.handleEvent(this.zone,this.zoomChange,t));const r=this.map.getCenter();(null!=r||null!=this.center)&&((null==r||null==this.center)&&r!==this.center||r.lat!==this.center.lat||r.lng!==this.center.lng)&&(this.center=r,a.handleEvent(this.zone,this.centerChange,r))};e("moveend",s),e("zoomend",s)}doResize(){this.zone.runOutsideAngular(()=>{null!=this.map&&this.map.invalidateSize({})})}delayResize(){null!=this.resizeTimer&&clearTimeout(this.resizeTimer),this.resizeTimer=setTimeout(this.doResize.bind(this),200)}setView(e,s){null!=this.map&&null!=e&&null!=s&&this.map.setView(e,s,this.zoomPanOptions)}setZoom(e){null!=this.map&&null!=e&&this.map.setZoom(e,this.zoomOptions)}setCenter(e){null!=this.map&&null!=e&&this.map.panTo(e,this.panOptions)}setFitBounds(e){null!=this.map&&null!=e&&this.map.fitBounds(e,this.fitBoundsOptions)}setMaxBounds(e){null!=this.map&&null!=e&&this.map.setMaxBounds(e)}setMinZoom(e){null!=this.map&&null!=e&&this.map.setMinZoom(e)}setMaxZoom(e){null!=this.map&&null!=e&&this.map.setMaxZoom(e)}static#e=this.\u0275fac=function(s){return new(s||n)(i.\u0275\u0275directiveInject(i.ElementRef),i.\u0275\u0275directiveInject(i.NgZone))};static#t=this.\u0275dir=i.\u0275\u0275defineDirective({type:n,selectors:[["","leaflet",""]],hostBindings:function(s,t){1&s&&i.\u0275\u0275listener("resize",function(){return t.onResize()},!1,i.\u0275\u0275resolveWindow)},inputs:{fitBoundsOptions:[0,"leafletFitBoundsOptions","fitBoundsOptions"],panOptions:[0,"leafletPanOptions","panOptions"],zoomOptions:[0,"leafletZoomOptions","zoomOptions"],zoomPanOptions:[0,"leafletZoomPanOptions","zoomPanOptions"],options:[0,"leafletOptions","options"],zoom:[0,"leafletZoom","zoom"],center:[0,"leafletCenter","center"],fitBounds:[0,"leafletFitBounds","fitBounds"],maxBounds:[0,"leafletMaxBounds","maxBounds"],minZoom:[0,"leafletMinZoom","minZoom"],maxZoom:[0,"leafletMaxZoom","maxZoom"]},outputs:{mapReady:"leafletMapReady",zoomChange:"leafletZoomChange",centerChange:"leafletCenterChange",onClick:"leafletClick",onDoubleClick:"leafletDoubleClick",onMouseDown:"leafletMouseDown",onMouseUp:"leafletMouseUp",onMouseMove:"leafletMouseMove",onMouseOver:"leafletMouseOver",onMouseOut:"leafletMouseOut",onMapMove:"leafletMapMove",onMapMoveStart:"leafletMapMoveStart",onMapMoveEnd:"leafletMapMoveEnd",onMapZoom:"leafletMapZoom",onMapZoomStart:"leafletMapZoomStart",onMapZoomEnd:"leafletMapZoomEnd"},features:[i.\u0275\u0275NgOnChangesFeature]})}return n})();class u{constructor(o){this.leafletDirective=o}init(){}getMap(){return this.leafletDirective.getMap()}}let v=(()=>{class n{constructor(e,s){this.zone=s,this.onAdd=new i.EventEmitter,this.onRemove=new i.EventEmitter,this.leafletDirective=new u(e)}ngOnInit(){this.leafletDirective.init()}ngOnDestroy(){null!=this.layer&&(this.removeLayerEventListeners(this.layer),this.layer.remove())}ngOnChanges(e){if(e.layer){const s=e.layer.previousValue,t=e.layer.currentValue;this.zone.runOutsideAngular(()=>{null!=s&&(this.removeLayerEventListeners(s),s.remove()),null!=t&&(this.addLayerEventListeners(t),this.leafletDirective.getMap().addLayer(t))})}}addLayerEventListeners(e){this.onAddLayerHandler=s=>a.handleEvent(this.zone,this.onAdd,s),e.on("add",this.onAddLayerHandler),this.onRemoveLayerHandler=s=>a.handleEvent(this.zone,this.onRemove,s),e.on("remove",this.onRemoveLayerHandler)}removeLayerEventListeners(e){e.off("add",this.onAddLayerHandler),e.off("remove",this.onRemoveLayerHandler)}static#e=this.\u0275fac=function(s){return new(s||n)(i.\u0275\u0275directiveInject(h),i.\u0275\u0275directiveInject(i.NgZone))};static#t=this.\u0275dir=i.\u0275\u0275defineDirective({type:n,selectors:[["","leafletLayer",""]],inputs:{layer:[0,"leafletLayer","layer"]},outputs:{onAdd:"leafletLayerAdd",onRemove:"leafletLayerRemove"},features:[i.\u0275\u0275NgOnChangesFeature]})}return n})(),L=(()=>{class n{set layers(e){this.layersValue=e,this.updateLayers()}get layers(){return this.layersValue}constructor(e,s,t){this.differs=s,this.zone=t,this.leafletDirective=new u(e),this.layersDiffer=this.differs.find([]).create()}ngDoCheck(){this.updateLayers()}ngOnInit(){this.leafletDirective.init(),this.updateLayers()}ngOnDestroy(){this.layers=[]}updateLayers(){const e=this.leafletDirective.getMap();if(null!=e&&null!=this.layersDiffer){const s=this.layersDiffer.diff(this.layersValue);null!=s&&this.zone.runOutsideAngular(()=>{s.forEachRemovedItem(t=>{e.removeLayer(t.item)}),s.forEachAddedItem(t=>{e.addLayer(t.item)})})}}static#e=this.\u0275fac=function(s){return new(s||n)(i.\u0275\u0275directiveInject(h),i.\u0275\u0275directiveInject(i.IterableDiffers),i.\u0275\u0275directiveInject(i.NgZone))};static#t=this.\u0275dir=i.\u0275\u0275defineDirective({type:n,selectors:[["","leafletLayers",""]],inputs:{layers:[0,"leafletLayers","layers"]}})}return n})();class f{constructor(){this.layersRemoved=0,this.layersChanged=0,this.layersAdded=0}changed(){return!(0===this.layersRemoved&&0===this.layersChanged&&0===this.layersAdded)}}class c{constructor(o,e){this.zone=o,this.layersControlReady=e}getLayersControl(){return this.layersControl}init(o,e){const s=o.baseLayers||{},t=o.overlays||{};return this.zone.runOutsideAngular(()=>{this.layersControl=l.control.layers(s,t,e)}),this.layersControlReady.emit(this.layersControl),this.layersControl}applyBaseLayerChanges(o){let e=new f;return null!=this.layersControl&&(e=this.applyChanges(o,this.layersControl.addBaseLayer)),e}applyOverlayChanges(o){let e=new f;return null!=this.layersControl&&(e=this.applyChanges(o,this.layersControl.addOverlay)),e}applyChanges(o,e){const s=new f;return null!=o&&this.zone.runOutsideAngular(()=>{o.forEachChangedItem(t=>{this.layersControl.removeLayer(t.previousValue),e.call(this.layersControl,t.currentValue,t.key),s.layersChanged++}),o.forEachRemovedItem(t=>{this.layersControl.removeLayer(t.previousValue),s.layersRemoved++}),o.forEachAddedItem(t=>{e.call(this.layersControl,t.currentValue,t.key),s.layersAdded++})}),s}}class p{constructor(){this.baseLayers={},this.overlays={}}}let C=(()=>{class n{set layersControlConfig(e){null==e&&(e=new p),null==e.baseLayers&&(e.baseLayers={}),null==e.overlays&&(e.overlays={}),this.layersControlConfigValue=e,this.updateLayers()}get layersControlConfig(){return this.layersControlConfigValue}constructor(e,s,t){this.differs=s,this.zone=t,this.layersControlReady=new i.EventEmitter,this.leafletDirective=new u(e),this.controlLayers=new c(this.zone,this.layersControlReady),this.baseLayersDiffer=this.differs.find({}).create(),this.overlaysDiffer=this.differs.find({}).create()}ngOnInit(){this.leafletDirective.init(),this.zone.runOutsideAngular(()=>{this.controlLayers.init({},this.layersControlOptions).addTo(this.leafletDirective.getMap())}),this.updateLayers()}ngOnDestroy(){this.layersControlConfig={baseLayers:{},overlays:{}},this.controlLayers.getLayersControl().remove()}ngDoCheck(){this.updateLayers()}updateLayers(){const e=this.leafletDirective.getMap(),s=this.controlLayers.getLayersControl();if(null!=e&&null!=s){if(null!=this.baseLayersDiffer&&null!=this.layersControlConfigValue.baseLayers){const t=this.baseLayersDiffer.diff(this.layersControlConfigValue.baseLayers);this.controlLayers.applyBaseLayerChanges(t)}if(null!=this.overlaysDiffer&&null!=this.layersControlConfigValue.overlays){const t=this.overlaysDiffer.diff(this.layersControlConfigValue.overlays);this.controlLayers.applyOverlayChanges(t)}}}static#e=this.\u0275fac=function(s){return new(s||n)(i.\u0275\u0275directiveInject(h),i.\u0275\u0275directiveInject(i.KeyValueDiffers),i.\u0275\u0275directiveInject(i.NgZone))};static#t=this.\u0275dir=i.\u0275\u0275defineDirective({type:n,selectors:[["","leafletLayersControl",""]],inputs:{layersControlConfig:[0,"leafletLayersControl","layersControlConfig"],layersControlOptions:[0,"leafletLayersControlOptions","layersControlOptions"]},outputs:{layersControlReady:"leafletLayersControlReady"}})}return n})(),M=(()=>{class n{set baseLayers(e){this.baseLayersValue=e,this.updateBaseLayers()}get baseLayers(){return this.baseLayersValue}constructor(e,s,t){this.differs=s,this.zone=t,this.layersControlReady=new i.EventEmitter,this.leafletDirective=new u(e),this.controlLayers=new c(this.zone,this.layersControlReady),this.baseLayersDiffer=this.differs.find({}).create()}ngOnDestroy(){this.baseLayers={},null!=this.controlLayers.getLayersControl()&&this.controlLayers.getLayersControl().remove()}ngOnInit(){this.leafletDirective.init(),this.zone.runOutsideAngular(()=>{this.controlLayers.init({},this.layersControlOptions).addTo(this.leafletDirective.getMap())}),this.updateBaseLayers()}ngDoCheck(){this.updateBaseLayers()}updateBaseLayers(){const e=this.leafletDirective.getMap(),s=this.controlLayers.getLayersControl();if(null!=e&&null!=s&&null!=this.baseLayersDiffer){const t=this.baseLayersDiffer.diff(this.baseLayersValue);this.controlLayers.applyBaseLayerChanges(t).changed()&&this.syncBaseLayer()}}syncBaseLayer(){const e=this.leafletDirective.getMap(),s=a.mapToArray(this.baseLayers);let t;e.eachLayer(r=>{t=s.find(E=>r===E)}),null!=t?this.baseLayer=t:s.length>0&&(this.baseLayer=s[0],this.zone.runOutsideAngular(()=>{this.baseLayer.addTo(e)}))}static#e=this.\u0275fac=function(s){return new(s||n)(i.\u0275\u0275directiveInject(h),i.\u0275\u0275directiveInject(i.KeyValueDiffers),i.\u0275\u0275directiveInject(i.NgZone))};static#t=this.\u0275dir=i.\u0275\u0275defineDirective({type:n,selectors:[["","leafletBaseLayers",""]],inputs:{baseLayers:[0,"leafletBaseLayers","baseLayers"],layersControlOptions:[0,"leafletLayersControlOptions","layersControlOptions"]},outputs:{layersControlReady:"leafletLayersControlReady"}})}return n})(),g=(()=>{class n{static#e=this.\u0275fac=function(s){return new(s||n)};static#t=this.\u0275mod=i.\u0275\u0275defineNgModule({type:n});static#s=this.\u0275inj=i.\u0275\u0275defineInjector({})}return n})();class y{constructor(o,e,s){this.type=o,this.url=e,this.options=s}static createTileLayer(o){let e;return e="xyz"===o.type?(0,l.tileLayer)(o.url,o.options):l.tileLayer.wms(o.url,o.options),e}static createTileLayers(o){const e={};for(const s in o)o.hasOwnProperty(s)&&(e[s]=y.createTileLayer(o[s]));return e}createTileLayer(){return y.createTileLayer(this)}}}}]);