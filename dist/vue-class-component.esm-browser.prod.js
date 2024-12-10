/**
  * vue-class-component v8.0.0-rc.1
  * (c) 2015-present Evan You
  * @license MIT
  */
import{ref,proxyRefs}from"vue";function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function _objectSpread2(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach(function(t){_defineProperty(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function defineGetter(e,t,r){Object.defineProperty(e,t,{get:r,enumerable:!1,configurable:!0})}function defineProxy(e,t,r){Object.defineProperty(e,t,{get:()=>r[t].value,set:e=>{r[t].value=e},enumerable:!0,configurable:!0})}function getSuper(e){var t=Object.getPrototypeOf(e.prototype);if(t)return t.constructor}function getOwn(e,t){return e.hasOwnProperty(t)?e[t]:void 0}class VueImpl{constructor(e,t){defineGetter(this,"$props",()=>e),defineGetter(this,"$attrs",()=>t.attrs),defineGetter(this,"$slots",()=>t.slots),defineGetter(this,"$emit",()=>t.emit),Object.keys(e).forEach(t=>{Object.defineProperty(this,t,{enumerable:!1,configurable:!0,writable:!0,value:e[t]})})}static get __vccOpts(){if(this===Vue)return{};var e=this,t=getOwn(e,"__c");if(t)return t;var r=_objectSpread2({},getOwn(e,"__o"));e.__c=r;var n=getSuper(e);n&&(r.extends=n.__vccOpts);var o=getOwn(e,"__b");o&&(r.mixins=r.mixins||[],r.mixins.unshift(o)),r.methods=_objectSpread2({},r.methods),r.computed=_objectSpread2({},r.computed);var s=e.prototype;Object.getOwnPropertyNames(s).forEach(t=>{if("constructor"!==t)if(e.__h.indexOf(t)>-1)r[t]=s[t];else{var n=Object.getOwnPropertyDescriptor(s,t);"function"!=typeof n.value?(n.get||n.set)&&(r.computed[t]={get:n.get,set:n.set}):r.methods[t]=n.value}}),r.setup=function(t,r){var n,o=new e(t,r),s=Object.keys(o),c={},i=null;return s.forEach(e=>{void 0===o[e]||o[e]&&o[e].__s||(c[e]=ref(o[e]),defineProxy(o,e,c))}),s.forEach(e=>{if(o[e]&&o[e].__s){var t=o[e].__s();t instanceof Promise?(i||(i=Promise.resolve(c)),i=i.then(()=>t.then(t=>(c[e]=proxyRefs(t),c)))):c[e]=proxyRefs(t)}}),null!==(n=i)&&void 0!==n?n:c};var c=getOwn(e,"__d");c&&c.forEach(e=>e(r));return["render","ssrRender","__file","__cssModules","__scopeId","__hmrId"].forEach(t=>{e[t]&&(r[t]=e[t])}),r}static registerHooks(e){this.__h.push(...e)}static with(e){var t=new e,r={};Object.keys(t).forEach(e=>{var n=t[e];r[e]=null!==n&&void 0!==n?n:null});class n extends(this){}return n.__b={props:r},n}}VueImpl.__h=["data","beforeCreate","created","beforeMount","mounted","beforeUnmount","unmounted","beforeUpdate","updated","activated","deactivated","render","errorCaptured","serverPrefetch"];var Vue;function Options(e){return t=>(t.__o=e,t)}function createDecorator(e){return(t,r,n)=>{var o="function"==typeof t?t:t.constructor;o.__d||(o.__d=[]),"number"!=typeof n&&(n=void 0),o.__d.push(t=>e(t,r,n))}}function mixins(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];var n;return(n=class extends Vue{constructor(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];super(...r),t.forEach(e=>{var t=new e(...r);Object.keys(t).forEach(e=>{this[e]=t[e]})})}}).__b={mixins:t.map(e=>e.__vccOpts)},n}function setup(e){return{__s:e}}function prop(e){return e}export{Options,VueImpl as Vue,createDecorator,mixins,prop,setup};