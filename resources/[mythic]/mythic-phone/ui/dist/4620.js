"use strict";(self.webpackChunkmythic_phone=self.webpackChunkmythic_phone||[]).push([[4620],{4620:(t,r,e)=>{e.r(r),e.d(r,{createContact:()=>l,deleteContact:()=>h,updateContact:()=>s});var n=e(61541);function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function i(){i=function(){return r};var t,r={},e=Object.prototype,n=e.hasOwnProperty,a=Object.defineProperty||function(t,r,e){t[r]=e.value},c="function"==typeof Symbol?Symbol:{},u=c.iterator||"@@iterator",f=c.asyncIterator||"@@asyncIterator",l=c.toStringTag||"@@toStringTag";function s(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{s({},"")}catch(t){s=function(t,r,e){return t[r]=e}}function h(t,r,e,n){var o=r&&r.prototype instanceof b?r:b,i=Object.create(o.prototype),c=new T(n||[]);return a(i,"_invoke",{value:k(t,e,c)}),i}function p(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}r.wrap=h;var y="suspendedStart",v="suspendedYield",d="executing",g="completed",m={};function b(){}function w(){}function O(){}var x={};s(x,u,(function(){return this}));var E=Object.getPrototypeOf,j=E&&E(E(C([])));j&&j!==e&&n.call(j,u)&&(x=j);var L=O.prototype=b.prototype=Object.create(x);function P(t){["next","throw","return"].forEach((function(r){s(t,r,(function(t){return this._invoke(r,t)}))}))}function _(t,r){function e(i,a,c,u){var f=p(t[i],t,a);if("throw"!==f.type){var l=f.arg,s=l.value;return s&&"object"==o(s)&&n.call(s,"__await")?r.resolve(s.__await).then((function(t){e("next",t,c,u)}),(function(t){e("throw",t,c,u)})):r.resolve(s).then((function(t){l.value=t,c(l)}),(function(t){return e("throw",t,c,u)}))}u(f.arg)}var i;a(this,"_invoke",{value:function(t,n){function o(){return new r((function(r,o){e(t,n,r,o)}))}return i=i?i.then(o,o):o()}})}function k(r,e,n){var o=y;return function(i,a){if(o===d)throw Error("Generator is already running");if(o===g){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=S(c,n);if(u){if(u===m)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===y)throw o=g,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=d;var f=p(r,e,n);if("normal"===f.type){if(o=n.done?g:v,f.arg===m)continue;return{value:f.arg,done:n.done}}"throw"===f.type&&(o=g,n.method="throw",n.arg=f.arg)}}}function S(r,e){var n=e.method,o=r.iterator[n];if(o===t)return e.delegate=null,"throw"===n&&r.iterator.return&&(e.method="return",e.arg=t,S(r,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),m;var i=p(o,r.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,m;var a=i.arg;return a?a.done?(e[r.resultName]=a.value,e.next=r.nextLoc,"return"!==e.method&&(e.method="next",e.arg=t),e.delegate=null,m):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,m)}function A(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function D(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(A,this),this.reset(!0)}function C(r){if(r||""===r){var e=r[u];if(e)return e.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var i=-1,a=function e(){for(;++i<r.length;)if(n.call(r,i))return e.value=r[i],e.done=!1,e;return e.value=t,e.done=!0,e};return a.next=a}}throw new TypeError(o(r)+" is not iterable")}return w.prototype=O,a(L,"constructor",{value:O,configurable:!0}),a(O,"constructor",{value:w,configurable:!0}),w.displayName=s(O,l,"GeneratorFunction"),r.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===w||"GeneratorFunction"===(r.displayName||r.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,O):(t.__proto__=O,s(t,l,"GeneratorFunction")),t.prototype=Object.create(L),t},r.awrap=function(t){return{__await:t}},P(_.prototype),s(_.prototype,f,(function(){return this})),r.AsyncIterator=_,r.async=function(t,e,n,o,i){void 0===i&&(i=Promise);var a=new _(h(t,e,n,o),i);return r.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},P(L),s(L,l,"Generator"),s(L,u,(function(){return this})),s(L,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},r.values=C,T.prototype={constructor:T,reset:function(r){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(D),!r)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var e=this;function o(n,o){return c.type="throw",c.arg=r,e.next=n,o&&(e.method="next",e.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),f=n.call(a,"finallyLoc");if(u&&f){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!f)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,m):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),m},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),D(e),m}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;D(e)}return o}}throw Error("illegal catch attempt")},delegateYield:function(r,e,n){return this.delegate={iterator:C(r),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=t),m}},r}function a(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,n)}return e}function c(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?a(Object(e),!0).forEach((function(r){u(t,r,e[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):a(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}))}return t}function u(t,r,e){return(r=function(t){var r=function(t,r){if("object"!=o(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var n=e.call(t,r||"default");if("object"!=o(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==o(r)?r:r+""}(r))in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}function f(t,r,e,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void e(t)}c.done?r(u):Promise.resolve(u).then(n,o)}var l=function(t){return function(r){n.A.send("CreateContact",t).then(function(){var e,n=(e=i().mark((function e(n){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null==n){e.next=15;break}return e.t0=r,e.t1=c,e.t2=c({},t),e.t3={},e.next=7,n.json();case 7:e.t4=e.sent,e.t5={_id:e.t4},e.t6=(0,e.t1)(e.t2,e.t3,e.t5),e.t7={type:"contacts",data:e.t6},e.t8={type:"ADD_DATA",payload:e.t7},(0,e.t0)(e.t8),e.next=15;break;case 15:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(n,o){var i=e.apply(t,r);function a(t){f(i,n,o,a,c,"next",t)}function c(t){f(i,n,o,a,c,"throw",t)}a(void 0)}))});return function(t){return n.apply(this,arguments)}}())}},s=function(t,r){return function(e){n.A.send("UpdateContact",c(c({},r),{},{id:t})).then((function(n){n&&e({type:"UPDATE_DATA",payload:{type:"contacts",id:t,data:r}})}))}},h=function(t){return function(r){n.A.send("DeleteContact",t).then((function(e){e&&r({type:"REMOVE_DATA",payload:{type:"contacts",id:t}})}))}}}}]);