!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var r=t();for(var n in r)("object"==typeof exports?exports:e)[n]=r[n]}}(window,(function(){return function(e){function t(t){for(var n,a,s=t[0],l=t[1],c=t[2],f=0,p=[];f<s.length;f++)a=s[f],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);for(u&&u(t);p.length;)p.shift()();return i.push.apply(i,c||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,s=1;s<r.length;s++){var l=r[s];0!==o[l]&&(n=!1)}n&&(i.splice(t--,1),e=a(a.s=r[0]))}return e}var n={},o={1:0},i=[];function a(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=n,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var s=window.wpJsonpTemplateSections=window.wpJsonpTemplateSections||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var u=l;return i.push([401,0]),r()}({401:function(e,t,r){"use strict";r.r(t);var n=r(15),o=(r(3),r(11),r(12),r(32),r(22),r(4),r(27),r(35),r(9),r(25),r(26),r(20),r(19),r(8),r(21),r(13),r(38),r(7),r(6),r(10),r(1)),i=r(23),a=(r(33),r(40),r(41),r(81)),s=r(2),l=r(64),c=r(31),u=r(49),f=r(16),p=r(65);function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e){return function(e){if(Array.isArray(e))return y(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return y(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return y(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function b(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=S(e);if(t){var o=S(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return m(this,r)}}function m(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?w(e):t}function w(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function S(e){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function O(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var j=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(i,e);var t,r,n,o=v(i);function i(e){var t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),O(w(t=o.call(this,e)),"createNode",(function(e){var t=document.createElement("div");return t.innerHTML=e,t.firstChild})),O(w(t),"resize",(function(e,r,n,o){var i=t.props,a=i.width,s=i.height,l=i.focalPoint;if(t.width=Math.round(a*(r/s)),t.height=r,o){t.width=e;var c=Math.max(t.width/a,t.height/s),u=a*c,f=s*c,d=.5*e-.5*u-(u-e)*(l.x-.5),h=.5*r-.5*f-(f-r)*(l.y-.5);Object(p.a)(t.ref.wrapper,{width:"".concat(u,"px"),height:"".concat(f,"px"),transform:"matrix(1, 0, 0, 1, ".concat(d,", ").concat(h,")")})}else Object(p.a)(t.ref.wrapper,{width:"100%",height:"100%",transform:"none"});return Object(p.a)(t.node,{width:"".concat(t.width,"px"),height:"".concat(t.height,"px")}),t.worldX=n,t.halfWidth=.5*t.width,t.width}));var r=t.props,n=r.html,a=r.width,s=r.height,l=r.imageWrapperSelector;return t.state={isActive:!1,inViewport:!0},t.offsetY=0,t.width=a,t.height=s,t.worldX=0,t.halfWidth=.5*a,t.pos={x:0},t.node=t.createNode(n),t.ref={image:t.node.querySelector("img")},t.ref.wrapper=l?t.ref.image.closest(l):t.ref.image.parentNode,t.node.style.width="".concat(a,"px"),t.node.style.height="".concat(s,"px"),t.loadImage(),t}return t=i,(r=[{key:"loadImage",value:function(){var e=this.ref,t=e.image,r=e.wrapper;t.onload=function(){r.dataset.loaded=!0},f.a.loadLazy(t,{load:!0})}},{key:"selectInteractiveElements",value:function(e){return e.querySelectorAll("a")}},{key:"position",value:function(e,t,r,n){var o=e+this.worldX;if(o+this.width<0?o+=t:o>r&&(o-=t),o+this.width>0&&o<r)return this.state.inViewport||this.setState({inViewport:!0}),this.node.style.transform="matrix(1, 0, 0, 1, ".concat(o,", 0)"),void h(this.selectInteractiveElements(this.node)).forEach((function(e){e.tabIndex=0}));this.state.inViewport&&(this.setState({inViewport:!1}),this.node.style.transform="matrix(1, 0, 0, 1, -9999, 0)",h(this.selectInteractiveElements(this.node)).forEach((function(e){e.tabIndex=-1})))}},{key:"addSlide",value:function(){this.loadImage(),this.setState({isActive:!0}),this.node.dataset.active=this.state.isActive}},{key:"removeSlide",value:function(){this.setState({isActive:!1}),this.node.dataset.active=this.state.isActive}}])&&b(t.prototype,r),n&&b(t,n),i}(o.a);O(j,"defaultProps",{html:"",width:800,height:600,focalPoint:{x:.5,y:.5}});var x=r(14),P=r(0);function k(e){return(k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function E(e){return function(e){if(Array.isArray(e))return L(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return L(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return L(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function L(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function T(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function _(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?T(Object(r),!0).forEach((function(t){H(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):T(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function A(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function C(e,t){return(C=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function D(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=W(e);if(t){var o=W(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return R(this,r)}}function R(e,t){return!t||"object"!==k(t)&&"function"!=typeof t?I(e):t}function I(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function W(e){return(W=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function H(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var N=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&C(e,t)}(i,e);var t,r,n,o=D(i);function i(e){var t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),H(I(t=o.call(this,e)),"buildSlidesData",(function(e){return e.map((function(e){var t=e.querySelectorAll("img")[0];return _(_({html:e.outerHTML},Object(c.c)(t)),{},{focalPoint:Object(c.b)(t)})}))})),H(I(t),"onPreviousSlide",(function(e){t.setTargetSlide(t.pos.target-1),e&&e.preventDefault&&e.preventDefault()})),H(I(t),"onNextSlide",(function(e){t.setTargetSlide(t.pos.target+1),e&&e.preventDefault&&e.preventDefault()})),H(I(t),"onResize",(function(){var e=t.props,r=e.region,n=e.maxDuplicationCount,o=r.clientWidth,i=r.clientHeight-t.getGalleryCaptionHeight(),a=t.resizeSlides(o,i);if(a<2*o)for(;a<2*o&&t.slides.length<n;){var s;(s=t.slides).push.apply(s,E(t.addSlides(t.slidesData,r))),a=t.resizeSlides(o,i)}t.setState({totalWidth:a,regionWidth:o,halfRegionWidth:.5*o,regionHeight:i}),t.slidesLen=t.slides.length,t.offsets=t.slides.map((function(e){return e.worldX+e.halfWidth}));var l=t.slides[0],c=t.slides[t.slides.length-1];t.offsets.push(c.worldX+c.width+l.halfWidth),t.update()})),H(I(t),"addSlides",(function(e,r){return e.map((function(e){var n=new j(_(_({},e),{},{imageWrapperSelector:t.props.imageWrapperSelector}));return r.appendChild(n.node),n}))})),H(I(t),"update",(function(){for(var e=t.state,r=e.len,n=e.totalWidth,o=e.regionWidth,i=e.halfRegionWidth,a=e.regionHeight,s=(t.pos.current%r+r)%r,l=i-Object(u.c)(t.indexes,t.offsets,s),c=0;c<t.slidesLen;c+=1)t.slides[c].position(l,n,o,a)}));var r=t.props,n=r.node,s=r.region,l=r.slides,f=r.cover,p=r.slideDuration,d=s.clientWidth,h=s.clientHeight;return t.state={cover:f,totalWidth:0,regionWidth:d,halfRegionWidth:.5*d,regionHeight:h,len:l.length,previousIndex:-1,index:0,slideDuration:p},t.pos={target:0,current:0},t.node=n,s.innerHTML="",t.slidesData=t.buildSlidesData(l,t.props),t.indexes=Array.from(Array(t.state.len+1).keys()),t.slides=t.addSlides(t.slidesData,s),t.slidesLen=t.slides.length,t.slidesData.length?(t.swipe=new a.a({axis:"x",node:s,onSwipeRight:t.onPreviousSlide,onSwipeLeft:t.onNextSlide}),t.bindListeners(),t.props.onSetSlide(t.state.index),t.setTargetSlide(t.state.index),t):R(t)}return t=i,(r=[{key:"bindListeners",value:function(){var e=this.props,t=e.buttonPrevious,r=e.buttonNext;t&&t.addEventListener("click",this.onPreviousSlide),r&&r.addEventListener("click",this.onNextSlide),s.a.on(this.onResize,P.e),this.onResize()}},{key:"unbindListeners",value:function(){var e=this.props,t=e.buttonPrevious,r=e.buttonNext;t&&t.removeEventListener("click",this.onPreviousSlide),r&&r.removeEventListener("click",this.onNextSlide),s.a.off(this.onResize)}},{key:"setTargetSlide",value:function(e){var t=this,r=this.state,n=r.len,o=r.slideDuration,i=(e%n+n)%n,a=r.previousIndex,s=this.slides[i],c=this.slides[a];c&&c.removeSlide(),s.addSlide(),this.setState({index:i,previousIndex:i}),this.props.onSetSlide(i),this.pos.target=e,this.tween&&this.tween.destroy(),this.tween=new l.a({duration:o,from:this.pos.current,to:this.pos.target,onUpdate:function(e){t.pos.current=e,t.update()}})}},{key:"resizeSlides",value:function(e,t){for(var r=this.state.cover,n=0,o=0,i=this.slides.length;o<i;o+=1)n+=this.slides[o].resize(e,t,n,r);return n}},{key:"refresh",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.setState(_({},e)),this.slidesData.length&&this.onResize()}},{key:"isGalleryCaptionOn",value:function(){var e=this.props,t=e.isGalleryCaptionsBetaFlagOn;return!(!e.isGalleryShowCaptionsOn||!t)}},{key:"getGalleryCaptionHeight",value:function(){return this.isGalleryCaptionOn()?125:0}},{key:"destroy",value:function(){this.tween&&this.tween.destroy(),this.tween=null,this.slides=[],this.slidesData=[],this.unbindListeners(),this.swipe&&this.swipe.destroy()}}])&&A(t.prototype,r),n&&A(t,n),i}(o.a);H(N,"defaultProps",{node:document.createElement("div"),region:document.createElement("div"),buttonNext:document.createElement("a"),buttonPrevious:document.createElement("a"),slides:[],cover:!1,slideDuration:.6,maxDuplicationCount:100,onSetSlide:x.a});var F=r(5),G=r.n(F),q=r(24),z=r(48);function M(e){return(M="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function X(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function B(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?X(Object(r),!0).forEach((function(t){K(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):X(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function U(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function V(e,t){return(V=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function J(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=Y(e);if(t){var o=Y(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Q(this,r)}}function Q(e,t){return!t||"object"!==M(t)&&"function"!=typeof t?$(e):t}function $(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Y(e){return(Y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function K(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var Z=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&V(e,t)}(a,e);var t,r,n,o=J(a);function a(e){var t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),K($(t=o.call(this)),"onSectionTweak",(function(e){var r=e.galleryOptions,n=r.reelOptions,o=r.design,i=B(B(B({},t.state),n),{},{design:o});if(i.design!==t.state.design)return!1;if(i.isCropping!==t.state.isCropping||i.width!==t.state.width||i.controlsLocation!==t.state.controlsLocation||i.viewportHeight!==t.state.viewportHeight||i.galleryHeight!==t.state.galleryHeight){t.setState(B({},i)),t.node.dataset.tweaking=!0,t.node.dataset.width=i.width,i.controlsLocation&&(t.node.dataset.controlsLocation=i.controlsLocation);var a=G.a.getValue("pagePadding");return t.node.style.height="calc(".concat(i.galleryHeight,"vh + (").concat(a," * 2))"),clearTimeout(t.tweakTimeout),t.tweakTimeout=setTimeout((function(){t.node.dataset.tweaking=!1}),100),t.reel.refresh({cover:i.isCropping}),!0}return!1})),K($(t),"onSetSlide",(function(e){t.clickLinks.forEach((function(t){parseInt(t.getAttribute("data-target"),10)===e+1?t.classList.add("active"):t.classList.remove("active")}))})),K($(t),"onLightboxOpen",(function(e){t.state.isHistoryEnabled&&(e.preventDefault(),history.pushState({},"",e.currentTarget.href))})),K($(t),"destroy",(function(){clearTimeout(t.tweakTimeout),i.a.disconnect(t.sectionId,t.onSectionTweak),t.unbindListeners(),t.reel.destroy()})),t.betaFeatureFlags=Object(q.a)(window,"Static.SQUARESPACE_CONTEXT.betaFeatureFlags",[]),t.isGalleryCaptionsBetaFlagOn=t.betaFeatureFlags.includes("gallery_captions_71");var r=Object(q.a)(window,"Static.SQUARESPACE_CONTEXT.collection.fullUrl",null);t.history=Object(z.a)();var n=t.props,s=n.listSelector,l=n.slideSelector,c=n.previousSelector,u=n.controlsSelector,f=n.nextSelector,p={};return e.dataset.props&&(p=JSON.parse(e.dataset.props)),t.state=B({design:"reel",controlsLocation:"side",isCropping:!1,width:"full",galleryHeight:75,isHistoryEnabled:r&&t.history},p),t.node=e,t.clickLinks=t.node.querySelectorAll(".gallery-click-through-link"),t.sectionId=t.node.dataset.sectionId,t.showCaptions=t.node.dataset.showCaptions,t.reel=new N({node:t.node,region:t.node.querySelector(s),controls:t.node.querySelector(u),slides:Array.from(t.node.querySelectorAll(l)),buttonPrevious:t.node.querySelector(c),buttonNext:t.node.querySelector(f),cover:t.state.isCropping,onSetSlide:t.onSetSlide.bind($(t)),imageWrapperSelector:".gallery-reel-item-src",isGalleryCaptionsBetaFlagOn:t.isGalleryCaptionsBetaFlagOn,isGalleryShowCaptionsOn:"true"===t.showCaptions}),t.tweakTimeout=null,t.node.dataset.galleryCaptionBetaFlag=t.isGalleryCaptionsBetaFlagOn,i.a.watch(t.sectionId,t.onSectionTweak),t.bindListeners(),t}return t=a,(r=[{key:"bindListeners",value:function(){var e=this;this.node.querySelectorAll(this.props.lightboxLinkSelector).forEach((function(t){t.addEventListener("click",e.onLightboxOpen)}))}},{key:"unbindListeners",value:function(){var e=this;this.node.querySelectorAll(this.props.lightboxLinkSelector).forEach((function(t){t.removeEventListener("click",e.onLightboxOpen)}))}}])&&U(t.prototype,r),n&&U(t,n),a}(o.a);K(Z,"defaultProps",{listSelector:".gallery-reel-list",slideSelector:".gallery-reel-item",controlsSelector:".gallery-reel-controls",previousSelector:"[data-previous]",nextSelector:"[data-next]",lightboxLinkSelector:'.gallery-reel-item[data-video="true"] .gallery-reel-lightbox-link'});n.a.register("GalleryReel",(function(e){return new Z(e)}))}})}));