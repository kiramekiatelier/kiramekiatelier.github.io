(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5728:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(4386)}])},9749:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);a=!0);}catch(l){c=!0,i=l}finally{try{a||null==n.return||n.return()}finally{if(c)throw i}}return o}}(e,t)||c(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||c(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.src,n=e.sizes,r=e.unoptimized,c=void 0!==r&&r,l=e.priority,s=void 0!==l&&l,h=e.loading,p=e.lazyRoot,x=void 0===p?null:p,_=e.lazyBoundary,k=void 0===_?"200px":_,E=e.className,N=e.quality,P=e.width,R=e.height,q=e.style,C=e.objectFit,L=e.objectPosition,M=e.onLoadingComplete,F=e.placeholder,D=void 0===F?"empty":F,B=e.blurDataURL,W=v(e,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","style","objectFit","objectPosition","onLoadingComplete","placeholder","blurDataURL"]),T=u.useContext(m.ImageConfigContext),U=u.useMemo((function(){var e=b||T||f.imageConfigDefault,t=a(e.deviceSizes).concat(a(e.imageSizes)).sort((function(e,t){return e-t})),n=e.deviceSizes.sort((function(e,t){return e-t}));return y({},e,{allSizes:t,deviceSizes:n})}),[T]),J=W,V=n?"responsive":"intrinsic";"layout"in J&&(J.layout&&(V=J.layout),delete J.layout);var G=z;if("loader"in J){if(J.loader){var H=J.loader;G=function(e){e.config;var t=v(e,["config"]);return H(t)}}delete J.loader}var X="";if(function(e){return"object"===typeof e&&(S(e)||function(e){return void 0!==e.src}(e))}(t)){var $=S(t)?t.default:t;if(!$.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify($)));if(B=B||$.blurDataURL,X=$.src,(!V||"fill"!==V)&&(R=R||$.height,P=P||$.width,!$.height||!$.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify($)))}t="string"===typeof t?t:X;var Q=O(P),Y=O(R),K=O(N),Z=!s&&("lazy"===h||"undefined"===typeof h);(t.startsWith("data:")||t.startsWith("blob:"))&&(c=!0,Z=!1);w.has(t)&&(Z=!1);var ee,te=o(u.useState(!1),2),ne=te[0],re=te[1],ie=o(g.useIntersection({rootRef:x,rootMargin:k,disabled:!Z}),3),oe=ie[0],ae=ie[1],ce=ie[2],le=!Z||ae,se={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},ue={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},de=!1,fe={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:C,objectPosition:L};0;0;var ge=Object.assign({},q,"raw"===V?{}:fe),me="blur"!==D||ne?{}:{filter:"blur(20px)",backgroundSize:C||"cover",backgroundImage:'url("'.concat(B,'")'),backgroundPosition:L||"0% 0%"};if("fill"===V)se.display="block",se.position="absolute",se.top=0,se.left=0,se.bottom=0,se.right=0;else if("undefined"!==typeof Q&&"undefined"!==typeof Y){var he=Y/Q,pe=isNaN(he)?"100%":"".concat(100*he,"%");"responsive"===V?(se.display="block",se.position="relative",de=!0,ue.paddingTop=pe):"intrinsic"===V?(se.display="inline-block",se.position="relative",se.maxWidth="100%",de=!0,ue.maxWidth="100%",ee="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(Q,"%27%20height=%27").concat(Y,"%27/%3e")):"fixed"===V&&(se.display="inline-block",se.position="relative",se.width=Q,se.height=Y)}else 0;var ye={src:j,srcSet:void 0,sizes:void 0};le&&(ye=A({config:U,src:t,unoptimized:c,layout:V,width:Q,quality:K,sizes:n,loader:G}));var ve=t;0;var be,we="imagesrcset",je="imagesizes";we="imageSrcSet",je="imageSizes";var xe=(i(be={},we,ye.srcSet),i(be,je,ye.sizes),be),Se=u.default.useLayoutEffect,Ae=u.useRef(M),Oe=u.useRef(t);u.useEffect((function(){Ae.current=M}),[M]),Se((function(){Oe.current!==t&&(ce(),Oe.current=t)}),[ce,t]);var ze=y({isLazy:Z,imgAttributes:ye,heightInt:Y,widthInt:Q,qualityInt:K,layout:V,className:E,imgStyle:ge,blurStyle:me,loading:h,config:U,unoptimized:c,placeholder:D,loader:G,srcString:ve,onLoadingCompleteRef:Ae,setBlurComplete:re,setIntersection:oe,isVisible:le},J);return u.default.createElement(u.default.Fragment,null,"raw"===V?u.default.createElement(I,Object.assign({},ze)):u.default.createElement("span",{style:se},de?u.default.createElement("span",{style:ue},ee?u.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:ee}):null):null,u.default.createElement(I,Object.assign({},ze))),s?u.default.createElement(d.default,null,u.default.createElement("link",Object.assign({key:"__nimg-"+ye.src+ye.srcSet+ye.sizes,rel:"preload",as:"image",href:ye.srcSet?void 0:ye.src},xe))):null)};var l,s,u=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(7294)),d=(l=n(3121))&&l.__esModule?l:{default:l},f=n(139),g=n(9246),m=n(8730),h=(n(670),n(2700));function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function y(e){for(var t=arguments,n=function(n){var r=null!=t[n]?t[n]:{},i=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),i.forEach((function(t){p(e,t,r[t])}))},r=1;r<arguments.length;r++)n(r);return e}function v(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}s={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",experimentalLayoutRaw:!1};var b={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",experimentalLayoutRaw:!1},w=new Set,j=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var x=new Map([["default",function(e){var t=e.config,n=e.src,r=e.width,i=e.quality;0;if(n.endsWith(".svg")&&!t.dangerouslyAllowSVG)return n;return"".concat(h.normalizePathTrailingSlash(t.path),"?url=").concat(encodeURIComponent(n),"&w=").concat(r,"&q=").concat(i||75)}],["imgix",function(e){var t=e.config,n=e.src,r=e.width,i=e.quality,o=new URL("".concat(t.path).concat(k(n))),a=o.searchParams;a.set("auto",a.get("auto")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||r.toString()),i&&a.set("q",i.toString());return o.href}],["cloudinary",function(e){var t=e.config,n=e.src,r=e.width,i=e.quality,o=["f_auto","c_limit","w_"+r,"q_"+(i||"auto")].join(",")+"/";return"".concat(t.path).concat(o).concat(k(n))}],["akamai",function(e){var t=e.config,n=e.src,r=e.width;return"".concat(t.path).concat(k(n),"?imwidth=").concat(r)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function S(e){return void 0!==e.default}function A(e){var t=e.config,n=e.src,r=e.unoptimized,i=e.layout,o=e.width,c=e.quality,l=e.sizes,s=e.loader;if(r)return{src:n,srcSet:void 0,sizes:void 0};var u=function(e,t,n,r){var i=e.deviceSizes,o=e.allSizes;if(r&&("fill"===n||"responsive"===n||"raw"===n)){for(var c,l=/(^|\s)(1?\d?\d)vw/g,s=[];c=l.exec(r);c)s.push(parseInt(c[2]));if(s.length){var u,d=.01*(u=Math).min.apply(u,a(s));return{widths:o.filter((function(e){return e>=i[0]*d})),kind:"w"}}return{widths:o,kind:"w"}}return"number"!==typeof t||"fill"===n||"responsive"===n?{widths:i,kind:"w"}:{widths:a(new Set([t,2*t].map((function(e){return o.find((function(t){return t>=e}))||o[o.length-1]})))),kind:"x"}}(t,o,i,l),d=u.widths,f=u.kind,g=d.length-1;return{sizes:l||"w"!==f?l:"100vw",srcSet:d.map((function(e,r){return"".concat(s({config:t,src:n,quality:c,width:e})," ").concat("w"===f?e:r+1).concat(f)})).join(", "),src:s({config:t,src:n,quality:c,width:d[g]})}}function O(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function z(e){var t,n=(null===(t=e.config)||void 0===t?void 0:t.loader)||"default",r=x.get(n);if(r)return r(e);throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(f.VALID_LOADERS.join(", "),". Received: ").concat(n))}function _(e,t,n,r,i,o){e&&e.src!==j&&e["data-loaded-src"]!==t&&(e["data-loaded-src"]=t,("decode"in e?e.decode():Promise.resolve()).catch((function(){})).then((function(){if(e.parentNode&&(w.add(t),"blur"===r&&o(!0),null===i||void 0===i?void 0:i.current)){var n=e.naturalWidth,a=e.naturalHeight;i.current({naturalWidth:n,naturalHeight:a})}})))}var I=function(e){var t=e.imgAttributes,n=e.heightInt,r=e.widthInt,i=e.qualityInt,o=e.layout,a=e.className,c=e.imgStyle,l=e.blurStyle,s=e.isLazy,d=e.placeholder,f=e.loading,g=e.srcString,m=e.config,h=e.unoptimized,p=e.loader,b=e.onLoadingCompleteRef,w=e.setBlurComplete,j=e.setIntersection,x=e.onLoad,S=e.onError,O=(e.isVisible,v(e,["imgAttributes","heightInt","widthInt","qualityInt","layout","className","imgStyle","blurStyle","isLazy","placeholder","loading","srcString","config","unoptimized","loader","onLoadingCompleteRef","setBlurComplete","setIntersection","onLoad","onError","isVisible"]));return u.default.createElement(u.default.Fragment,null,u.default.createElement("img",Object.assign({},O,t,"raw"===o?{height:n,width:r}:{},{decoding:"async","data-nimg":o,className:a,style:y({},c,l),ref:u.useCallback((function(e){j(e),(null===e||void 0===e?void 0:e.complete)&&_(e,g,0,d,b,w)}),[j,g,o,d,b,w]),onLoad:function(e){_(e.currentTarget,g,0,d,b,w),x&&x(e)},onError:function(e){"blur"===d&&w(!0),S&&S(e)}})),(s||"blur"===d)&&u.default.createElement("noscript",null,u.default.createElement("img",Object.assign({},O,A({config:m,src:g,unoptimized:h,layout:o,width:r,quality:i,sizes:t.sizes,loader:p}),"raw"===o?{height:n,width:r}:{},{decoding:"async","data-nimg":o,style:c,className:a,loading:f||"lazy"}))))};function k(e){return"/"===e[0]?e.slice(1):e}("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);a=!0);}catch(l){c=!0,i=l}finally{try{a||null==n.return||n.return()}finally{if(c)throw i}}return o}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,r=e.disabled||!c,u=o.useRef(),d=i(o.useState(!1),2),f=d[0],g=d[1],m=i(o.useState(t?t.current:null),2),h=m[0],p=m[1],y=o.useCallback((function(e){u.current&&(u.current(),u.current=void 0),r||f||e&&e.tagName&&(u.current=function(e,t,n){var r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=s.find((function(e){return e.root===n.root&&e.margin===n.margin}));r?t=l.get(r):(t=l.get(n),s.push(n));if(t)return t;var i=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=i.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return l.set(n,t={id:n,observer:o,elements:i}),t}(n),i=r.id,o=r.observer,a=r.elements;return a.set(e,t),o.observe(e),function(){if(a.delete(e),o.unobserve(e),0===a.size){o.disconnect(),l.delete(i);var t=s.findIndex((function(e){return e.root===i.root&&e.margin===i.margin}));t>-1&&s.splice(t,1)}}}(e,(function(e){return e&&g(e)}),{root:h,rootMargin:n}))}),[r,h,n,f]),v=o.useCallback((function(){g(!1)}),[]);return o.useEffect((function(){if(!c&&!f){var e=a.requestIdleCallback((function(){return g(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[f]),o.useEffect((function(){t&&p(t.current)}),[t]),[y,f,v]};var o=n(7294),a=n(4686),c="undefined"!==typeof IntersectionObserver;var l=new Map,s=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},4386:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return p}});var r=n(5893),i=n(5675),o=n.n(i),a=n(9008),c=n.n(a),l=n(8299);var s=function(){return(0,r.jsxs)(c(),{children:[(0,r.jsx)("title",{children:l.jG}),(0,r.jsx)("meta",{name:"title",content:l.jG}),(0,r.jsx)("meta",{name:"description",content:l.j2}),(0,r.jsx)("meta",{property:"og:type",content:"website"}),(0,r.jsx)("meta",{property:"og:url",content:l._O}),(0,r.jsx)("meta",{property:"og:title",content:l.jG}),(0,r.jsx)("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),(0,r.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"anonymous"}),(0,r.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap",rel:"stylesheet"})]})},u={src:"/_next/static/media/logo.cd7849fe.svg",height:403,width:868},d={src:"/_next/static/media/art.7464ffdd.svg",height:59,width:59},f={src:"/_next/static/media/graphics.10054b9f.svg",height:59,width:59},g={src:"/_next/static/media/code.6c87a5da.svg",height:53,width:59},m={src:"/_next/static/media/video.ab141796.svg",height:53,width:53},h={src:"/_next/static/media/writing.b185de9b.svg",height:56,width:56};function p(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s,{}),(0,r.jsx)("main",{children:(0,r.jsxs)("div",{className:"index-wrapper",children:[(0,r.jsx)("div",{className:"logo",children:(0,r.jsx)(o(),{src:u,quality:"100",objectFit:"fill",alt:"logo",priority:!0})}),(0,r.jsx)("div",{className:"icons-desc",children:"art \xb7 graphics \xb7 code \xb7 video \xb7 writing"}),(0,r.jsxs)("div",{className:"icons",children:[(0,r.jsx)("div",{className:"icons__art",children:(0,r.jsx)("div",{className:"svg-wrapper",children:(0,r.jsx)(o(),{src:d,quality:"100",objectFit:"fill",alt:"art"})})}),(0,r.jsx)("div",{className:"icons__graphics",children:(0,r.jsx)("div",{className:"svg-wrapper",children:(0,r.jsx)(o(),{src:f,quality:"100",objectFit:"fill",alt:"graphics"})})}),(0,r.jsx)("div",{className:"icons__code",children:(0,r.jsx)("div",{className:"svg-wrapper",children:(0,r.jsx)(o(),{src:g,quality:"100",objectFit:"fill",alt:"code"})})}),(0,r.jsx)("div",{className:"icons__video",children:(0,r.jsx)("div",{className:"svg-wrapper",children:(0,r.jsx)(o(),{src:m,quality:"100",objectFit:"fill",alt:"video"})})}),(0,r.jsx)("div",{className:"icons__writing",children:(0,r.jsx)("div",{className:"svg-wrapper",children:(0,r.jsx)(o(),{src:h,quality:"100",objectFit:"fill",alt:"writing"})})})]}),(0,r.jsx)("div",{className:"description",children:"A Discord community for creative works related to Japanese media!"}),(0,r.jsx)("div",{className:"join",children:(0,r.jsx)("a",{href:"https://discord.gg/xwJuJawYFz",children:"Join now!"})})]})})]})}},5675:function(e,t,n){e.exports=n(9749)}},function(e){e.O(0,[774,888,179],(function(){return t=5728,e(e.s=t);var t}));var t=e.O();_N_E=t}]);