/*! For license information please see main.75bd15f3.js.LICENSE.txt */
(()=>{var e={43:(e,t,n)=>{"use strict";e.exports=n(202)},153:(e,t,n)=>{"use strict";var r=n(43),i=Symbol.for("react.element"),o=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var r,o={},c=null,u=null;for(r in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(u=t.ref),t)a.call(t,r)&&!l.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:i,type:e,key:c,ref:u,props:o,_owner:s.current}}t.Fragment=o,t.jsx=c,t.jsxs=c},202:(e,t)=>{"use strict";var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),l=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),h=Symbol.iterator;var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,g={};function y(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||f}function v(){}function x(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||f}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=y.prototype;var b=x.prototype=new v;b.constructor=x,m(b,y.prototype),b.isPureReactComponent=!0;var w=Array.isArray,k=Object.prototype.hasOwnProperty,j={current:null},S={key:!0,ref:!0,__self:!0,__source:!0};function C(e,t,r){var i,o={},a=null,s=null;if(null!=t)for(i in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(a=""+t.key),t)k.call(t,i)&&!S.hasOwnProperty(i)&&(o[i]=t[i]);var l=arguments.length-2;if(1===l)o.children=r;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];o.children=c}if(e&&e.defaultProps)for(i in l=e.defaultProps)void 0===o[i]&&(o[i]=l[i]);return{$$typeof:n,type:e,key:a,ref:s,props:o,_owner:j.current}}function P(e){return"object"===typeof e&&null!==e&&e.$$typeof===n}var E=/\/+/g;function T(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(e){return t[e]})}(""+e.key):t.toString(36)}function z(e,t,i,o,a){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var l=!1;if(null===e)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case n:case r:l=!0}}if(l)return a=a(l=e),e=""===o?"."+T(l,0):o,w(a)?(i="",null!=e&&(i=e.replace(E,"$&/")+"/"),z(a,t,i,"",function(e){return e})):null!=a&&(P(a)&&(a=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,i+(!a.key||l&&l.key===a.key?"":(""+a.key).replace(E,"$&/")+"/")+e)),t.push(a)),1;if(l=0,o=""===o?".":o+":",w(e))for(var c=0;c<e.length;c++){var u=o+T(s=e[c],c);l+=z(s,t,i,u,a)}else if(u=function(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=h&&e[h]||e["@@iterator"])?e:null}(e),"function"===typeof u)for(e=u.call(e),c=0;!(s=e.next()).done;)l+=z(s=s.value,t,i,u=o+T(s,c++),a);else if("object"===s)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function D(e,t,n){if(null==e)return e;var r=[],i=0;return z(e,r,"","",function(e){return t.call(n,e,i++)}),r}function M(e){if(-1===e._status){var t=e._result;(t=t()).then(function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)},function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)}),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var R={current:null},O={transition:null},A={ReactCurrentDispatcher:R,ReactCurrentBatchConfig:O,ReactCurrentOwner:j};function N(){throw Error("act(...) is not supported in production builds of React.")}t.Children={map:D,forEach:function(e,t,n){D(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return D(e,function(){t++}),t},toArray:function(e){return D(e,function(e){return e})||[]},only:function(e){if(!P(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=y,t.Fragment=i,t.Profiler=a,t.PureComponent=x,t.StrictMode=o,t.Suspense=u,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=A,t.act=N,t.cloneElement=function(e,t,r){if(null===e||void 0===e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var i=m({},e.props),o=e.key,a=e.ref,s=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,s=j.current),void 0!==t.key&&(o=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)k.call(t,c)&&!S.hasOwnProperty(c)&&(i[c]=void 0===t[c]&&void 0!==l?l[c]:t[c])}var c=arguments.length-2;if(1===c)i.children=r;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];i.children=l}return{$$typeof:n,type:e.type,key:o,ref:a,props:i,_owner:s}},t.createContext=function(e){return(e={$$typeof:l,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},t.createElement=C,t.createFactory=function(e){var t=C.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=P,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:M}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=O.transition;O.transition={};try{e()}finally{O.transition=t}},t.unstable_act=N,t.useCallback=function(e,t){return R.current.useCallback(e,t)},t.useContext=function(e){return R.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return R.current.useDeferredValue(e)},t.useEffect=function(e,t){return R.current.useEffect(e,t)},t.useId=function(){return R.current.useId()},t.useImperativeHandle=function(e,t,n){return R.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return R.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return R.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return R.current.useMemo(e,t)},t.useReducer=function(e,t,n){return R.current.useReducer(e,t,n)},t.useRef=function(e){return R.current.useRef(e)},t.useState=function(e){return R.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return R.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return R.current.useTransition()},t.version="18.3.1"},234:(e,t)=>{"use strict";function n(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,i=e[r];if(!(0<o(i,t)))break e;e[r]=t,e[n]=i,n=r}}function r(e){return 0===e.length?null:e[0]}function i(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,i=e.length,a=i>>>1;r<a;){var s=2*(r+1)-1,l=e[s],c=s+1,u=e[c];if(0>o(l,n))c<i&&0>o(u,l)?(e[r]=u,e[c]=n,r=c):(e[r]=l,e[s]=n,r=s);else{if(!(c<i&&0>o(u,n)))break e;e[r]=u,e[c]=n,r=c}}}return t}function o(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if("object"===typeof performance&&"function"===typeof performance.now){var a=performance;t.unstable_now=function(){return a.now()}}else{var s=Date,l=s.now();t.unstable_now=function(){return s.now()-l}}var c=[],u=[],d=1,p=null,h=3,f=!1,m=!1,g=!1,y="function"===typeof setTimeout?setTimeout:null,v="function"===typeof clearTimeout?clearTimeout:null,x="undefined"!==typeof setImmediate?setImmediate:null;function b(e){for(var t=r(u);null!==t;){if(null===t.callback)i(u);else{if(!(t.startTime<=e))break;i(u),t.sortIndex=t.expirationTime,n(c,t)}t=r(u)}}function w(e){if(g=!1,b(e),!m)if(null!==r(c))m=!0,O(k);else{var t=r(u);null!==t&&A(w,t.startTime-e)}}function k(e,n){m=!1,g&&(g=!1,v(P),P=-1),f=!0;var o=h;try{for(b(n),p=r(c);null!==p&&(!(p.expirationTime>n)||e&&!z());){var a=p.callback;if("function"===typeof a){p.callback=null,h=p.priorityLevel;var s=a(p.expirationTime<=n);n=t.unstable_now(),"function"===typeof s?p.callback=s:p===r(c)&&i(c),b(n)}else i(c);p=r(c)}if(null!==p)var l=!0;else{var d=r(u);null!==d&&A(w,d.startTime-n),l=!1}return l}finally{p=null,h=o,f=!1}}"undefined"!==typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var j,S=!1,C=null,P=-1,E=5,T=-1;function z(){return!(t.unstable_now()-T<E)}function D(){if(null!==C){var e=t.unstable_now();T=e;var n=!0;try{n=C(!0,e)}finally{n?j():(S=!1,C=null)}}else S=!1}if("function"===typeof x)j=function(){x(D)};else if("undefined"!==typeof MessageChannel){var M=new MessageChannel,R=M.port2;M.port1.onmessage=D,j=function(){R.postMessage(null)}}else j=function(){y(D,0)};function O(e){C=e,S||(S=!0,j())}function A(e,n){P=y(function(){e(t.unstable_now())},n)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_continueExecution=function(){m||f||(m=!0,O(k))},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return r(c)},t.unstable_next=function(e){switch(h){case 1:case 2:case 3:var t=3;break;default:t=h}var n=h;h=t;try{return e()}finally{h=n}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=h;h=e;try{return t()}finally{h=n}},t.unstable_scheduleCallback=function(e,i,o){var a=t.unstable_now();switch("object"===typeof o&&null!==o?o="number"===typeof(o=o.delay)&&0<o?a+o:a:o=a,e){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return e={id:d++,callback:i,priorityLevel:e,startTime:o,expirationTime:s=o+s,sortIndex:-1},o>a?(e.sortIndex=o,n(u,e),null===r(c)&&e===r(u)&&(g?(v(P),P=-1):g=!0,A(w,o-a))):(e.sortIndex=s,n(c,e),m||f||(m=!0,O(k))),e},t.unstable_shouldYield=z,t.unstable_wrapCallback=function(e){var t=h;return function(){var n=h;h=t;try{return e.apply(this,arguments)}finally{h=n}}}},324:e=>{e.exports=function(e,t,n,r){var i=n?n.call(r,e,t):void 0;if(void 0!==i)return!!i;if(e===t)return!0;if("object"!==typeof e||!e||"object"!==typeof t||!t)return!1;var o=Object.keys(e),a=Object.keys(t);if(o.length!==a.length)return!1;for(var s=Object.prototype.hasOwnProperty.bind(t),l=0;l<o.length;l++){var c=o[l];if(!s(c))return!1;var u=e[c],d=t[c];if(!1===(i=n?n.call(r,u,d,c):void 0)||void 0===i&&u!==d)return!1}return!0}},391:(e,t,n)=>{"use strict";var r=n(950);t.createRoot=r.createRoot,t.hydrateRoot=r.hydrateRoot},579:(e,t,n)=>{"use strict";e.exports=n(153)},730:(e,t,n)=>{"use strict";var r=n(43),i=n(853);function o(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var a=new Set,s={};function l(e,t){c(e,t),c(e+"Capture",t)}function c(e,t){for(s[e]=t,e=0;e<t.length;e++)a.add(t[e])}var u=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),d=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,h={},f={};function m(e,t,n,r,i,o,a){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var g={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){g[e]=new m(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];g[t]=new m(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){g[e]=new m(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){g[e]=new m(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){g[e]=new m(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){g[e]=new m(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){g[e]=new m(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){g[e]=new m(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){g[e]=new m(e,5,!1,e.toLowerCase(),null,!1,!1)});var y=/[\-:]([a-z])/g;function v(e){return e[1].toUpperCase()}function x(e,t,n,r){var i=g.hasOwnProperty(t)?g[t]:null;(null!==i?0!==i.type:r||!(2<t.length)||"o"!==t[0]&&"O"!==t[0]||"n"!==t[1]&&"N"!==t[1])&&(function(e,t,n,r){if(null===t||"undefined"===typeof t||function(e,t,n,r){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!r&&(null!==n?!n.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,n,r))return!0;if(r)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,n,i,r)&&(n=null),r||null===i?function(e){return!!d.call(f,e)||!d.call(h,e)&&(p.test(e)?f[e]=!0:(h[e]=!0,!1))}(t)&&(null===n?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=null===n?3!==i.type&&"":n:(t=i.attributeName,r=i.attributeNamespace,null===n?e.removeAttribute(t):(n=3===(i=i.type)||4===i&&!0===n?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(y,v);g[t]=new m(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(y,v);g[t]=new m(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(y,v);g[t]=new m(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){g[e]=new m(e,1,!1,e.toLowerCase(),null,!1,!1)}),g.xlinkHref=new m("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){g[e]=new m(e,1,!1,e.toLowerCase(),null,!0,!0)});var b=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,w=Symbol.for("react.element"),k=Symbol.for("react.portal"),j=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),P=Symbol.for("react.provider"),E=Symbol.for("react.context"),T=Symbol.for("react.forward_ref"),z=Symbol.for("react.suspense"),D=Symbol.for("react.suspense_list"),M=Symbol.for("react.memo"),R=Symbol.for("react.lazy");Symbol.for("react.scope"),Symbol.for("react.debug_trace_mode");var O=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden"),Symbol.for("react.cache"),Symbol.for("react.tracing_marker");var A=Symbol.iterator;function N(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=A&&e[A]||e["@@iterator"])?e:null}var _,L=Object.assign;function I(e){if(void 0===_)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);_=t&&t[1]||""}return"\n"+_+e}var F=!1;function V(e,t){if(!e||F)return"";F=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&"string"===typeof c.stack){for(var i=c.stack.split("\n"),o=r.stack.split("\n"),a=i.length-1,s=o.length-1;1<=a&&0<=s&&i[a]!==o[s];)s--;for(;1<=a&&0<=s;a--,s--)if(i[a]!==o[s]){if(1!==a||1!==s)do{if(a--,0>--s||i[a]!==o[s]){var l="\n"+i[a].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}}while(1<=a&&0<=s);break}}}finally{F=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?I(e):""}function U(e){switch(e.tag){case 5:return I(e.type);case 16:return I("Lazy");case 13:return I("Suspense");case 19:return I("SuspenseList");case 0:case 2:case 15:return e=V(e.type,!1);case 11:return e=V(e.type.render,!1);case 1:return e=V(e.type,!0);default:return""}}function B(e){if(null==e)return null;if("function"===typeof e)return e.displayName||e.name||null;if("string"===typeof e)return e;switch(e){case j:return"Fragment";case k:return"Portal";case C:return"Profiler";case S:return"StrictMode";case z:return"Suspense";case D:return"SuspenseList"}if("object"===typeof e)switch(e.$$typeof){case E:return(e.displayName||"Context")+".Consumer";case P:return(e._context.displayName||"Context")+".Provider";case T:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case M:return null!==(t=e.displayName||null)?t:B(e.type)||"Memo";case R:t=e._payload,e=e._init;try{return B(e(t))}catch(n){}}return null}function $(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=(e=t.render).displayName||e.name||"",t.displayName||(""!==e?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return B(t);case 8:return t===S?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"===typeof t)return t.displayName||t.name||null;if("string"===typeof t)return t}return null}function W(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function H(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function q(e){e._valueTracker||(e._valueTracker=function(e){var t=H(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&"undefined"!==typeof n&&"function"===typeof n.get&&"function"===typeof n.set){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){r=""+e,o.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function Y(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=H(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function K(e){if("undefined"===typeof(e=e||("undefined"!==typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function G(e,t){var n=t.checked;return L({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e._wrapperState.initialChecked})}function Q(e,t){var n=null==t.defaultValue?"":t.defaultValue,r=null!=t.checked?t.checked:t.defaultChecked;n=W(null!=t.value?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function X(e,t){null!=(t=t.checked)&&x(e,"checked",t,!1)}function Z(e,t){X(e,t);var n=W(t.value),r=t.type;if(null!=n)"number"===r?(0===n&&""===e.value||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if("submit"===r||"reset"===r)return void e.removeAttribute("value");t.hasOwnProperty("value")?ee(e,t.type,n):t.hasOwnProperty("defaultValue")&&ee(e,t.type,W(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function J(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!("submit"!==r&&"reset"!==r||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}""!==(n=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==n&&(e.name=n)}function ee(e,t,n){"number"===t&&K(e.ownerDocument)===e||(null==n?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var te=Array.isArray;function ne(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+W(n),t=null,i=0;i<e.length;i++){if(e[i].value===n)return e[i].selected=!0,void(r&&(e[i].defaultSelected=!0));null!==t||e[i].disabled||(t=e[i])}null!==t&&(t.selected=!0)}}function re(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(o(91));return L({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ie(e,t){var n=t.value;if(null==n){if(n=t.children,t=t.defaultValue,null!=n){if(null!=t)throw Error(o(92));if(te(n)){if(1<n.length)throw Error(o(93));n=n[0]}t=n}null==t&&(t=""),n=t}e._wrapperState={initialValue:W(n)}}function oe(e,t){var n=W(t.value),r=W(t.defaultValue);null!=n&&((n=""+n)!==e.value&&(e.value=n),null==t.defaultValue&&e.defaultValue!==n&&(e.defaultValue=n)),null!=r&&(e.defaultValue=""+r)}function ae(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}function se(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function le(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?se(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var ce,ue,de=(ue=function(e,t){if("http://www.w3.org/2000/svg"!==e.namespaceURI||"innerHTML"in e)e.innerHTML=t;else{for((ce=ce||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ce.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}},"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,t,n,r){MSApp.execUnsafeLocalFunction(function(){return ue(e,t)})}:ue);function pe(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var he={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},fe=["Webkit","ms","Moz","O"];function me(e,t,n){return null==t||"boolean"===typeof t||""===t?"":n||"number"!==typeof t||0===t||he.hasOwnProperty(e)&&he[e]?(""+t).trim():t+"px"}function ge(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=0===n.indexOf("--"),i=me(n,t[n],r);"float"===n&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}Object.keys(he).forEach(function(e){fe.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),he[t]=he[e]})});var ye=L({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ve(e,t){if(t){if(ye[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(o(137,e));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(o(60));if("object"!==typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(o(61))}if(null!=t.style&&"object"!==typeof t.style)throw Error(o(62))}}function xe(e,t){if(-1===e.indexOf("-"))return"string"===typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var be=null;function we(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var ke=null,je=null,Se=null;function Ce(e){if(e=xi(e)){if("function"!==typeof ke)throw Error(o(280));var t=e.stateNode;t&&(t=wi(t),ke(e.stateNode,e.type,t))}}function Pe(e){je?Se?Se.push(e):Se=[e]:je=e}function Ee(){if(je){var e=je,t=Se;if(Se=je=null,Ce(e),t)for(e=0;e<t.length;e++)Ce(t[e])}}function Te(e,t){return e(t)}function ze(){}var De=!1;function Me(e,t,n){if(De)return e(t,n);De=!0;try{return Te(e,t,n)}finally{De=!1,(null!==je||null!==Se)&&(ze(),Ee())}}function Re(e,t){var n=e.stateNode;if(null===n)return null;var r=wi(n);if(null===r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!==typeof n)throw Error(o(231,t,typeof n));return n}var Oe=!1;if(u)try{var Ae={};Object.defineProperty(Ae,"passive",{get:function(){Oe=!0}}),window.addEventListener("test",Ae,Ae),window.removeEventListener("test",Ae,Ae)}catch(ue){Oe=!1}function Ne(e,t,n,r,i,o,a,s,l){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(u){this.onError(u)}}var _e=!1,Le=null,Ie=!1,Fe=null,Ve={onError:function(e){_e=!0,Le=e}};function Ue(e,t,n,r,i,o,a,s,l){_e=!1,Le=null,Ne.apply(Ve,arguments)}function Be(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!==(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function $e(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function We(e){if(Be(e)!==e)throw Error(o(188))}function He(e){return null!==(e=function(e){var t=e.alternate;if(!t){if(null===(t=Be(e)))throw Error(o(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(null===i)break;var a=i.alternate;if(null===a){if(null!==(r=i.return)){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return We(i),e;if(a===r)return We(i),t;a=a.sibling}throw Error(o(188))}if(n.return!==r.return)n=i,r=a;else{for(var s=!1,l=i.child;l;){if(l===n){s=!0,n=i,r=a;break}if(l===r){s=!0,r=i,n=a;break}l=l.sibling}if(!s){for(l=a.child;l;){if(l===n){s=!0,n=a,r=i;break}if(l===r){s=!0,r=a,n=i;break}l=l.sibling}if(!s)throw Error(o(189))}}if(n.alternate!==r)throw Error(o(190))}if(3!==n.tag)throw Error(o(188));return n.stateNode.current===n?e:t}(e))?qe(e):null}function qe(e){if(5===e.tag||6===e.tag)return e;for(e=e.child;null!==e;){var t=qe(e);if(null!==t)return t;e=e.sibling}return null}var Ye=i.unstable_scheduleCallback,Ke=i.unstable_cancelCallback,Ge=i.unstable_shouldYield,Qe=i.unstable_requestPaint,Xe=i.unstable_now,Ze=i.unstable_getCurrentPriorityLevel,Je=i.unstable_ImmediatePriority,et=i.unstable_UserBlockingPriority,tt=i.unstable_NormalPriority,nt=i.unstable_LowPriority,rt=i.unstable_IdlePriority,it=null,ot=null;var at=Math.clz32?Math.clz32:function(e){return e>>>=0,0===e?32:31-(st(e)/lt|0)|0},st=Math.log,lt=Math.LN2;var ct=64,ut=4194304;function dt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194240&e;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return 130023424&e;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function pt(e,t){var n=e.pendingLanes;if(0===n)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=268435455&n;if(0!==a){var s=a&~i;0!==s?r=dt(s):0!==(o&=a)&&(r=dt(o))}else 0!==(a=n&~i)?r=dt(a):0!==o&&(r=dt(o));if(0===r)return 0;if(0!==t&&t!==r&&0===(t&i)&&((i=r&-r)>=(o=t&-t)||16===i&&0!==(4194240&o)))return t;if(0!==(4&r)&&(r|=16&n),0!==(t=e.entangledLanes))for(e=e.entanglements,t&=r;0<t;)i=1<<(n=31-at(t)),r|=e[n],t&=~i;return r}function ht(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function ft(e){return 0!==(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function mt(){var e=ct;return 0===(4194240&(ct<<=1))&&(ct=64),e}function gt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function yt(e,t,n){e.pendingLanes|=t,536870912!==t&&(e.suspendedLanes=0,e.pingedLanes=0),(e=e.eventTimes)[t=31-at(t)]=n}function vt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-at(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var xt=0;function bt(e){return 1<(e&=-e)?4<e?0!==(268435455&e)?16:536870912:4:1}var wt,kt,jt,St,Ct,Pt=!1,Et=[],Tt=null,zt=null,Dt=null,Mt=new Map,Rt=new Map,Ot=[],At="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Nt(e,t){switch(e){case"focusin":case"focusout":Tt=null;break;case"dragenter":case"dragleave":zt=null;break;case"mouseover":case"mouseout":Dt=null;break;case"pointerover":case"pointerout":Mt.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Rt.delete(t.pointerId)}}function _t(e,t,n,r,i,o){return null===e||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},null!==t&&(null!==(t=xi(t))&&kt(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==i&&-1===t.indexOf(i)&&t.push(i),e)}function Lt(e){var t=vi(e.target);if(null!==t){var n=Be(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=$e(n)))return e.blockedOn=t,void Ct(e.priority,function(){jt(n)})}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function It(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=Gt(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==n)return null!==(t=xi(n))&&kt(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);be=r,n.target.dispatchEvent(r),be=null,t.shift()}return!0}function Ft(e,t,n){It(e)&&n.delete(t)}function Vt(){Pt=!1,null!==Tt&&It(Tt)&&(Tt=null),null!==zt&&It(zt)&&(zt=null),null!==Dt&&It(Dt)&&(Dt=null),Mt.forEach(Ft),Rt.forEach(Ft)}function Ut(e,t){e.blockedOn===t&&(e.blockedOn=null,Pt||(Pt=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,Vt)))}function Bt(e){function t(t){return Ut(t,e)}if(0<Et.length){Ut(Et[0],e);for(var n=1;n<Et.length;n++){var r=Et[n];r.blockedOn===e&&(r.blockedOn=null)}}for(null!==Tt&&Ut(Tt,e),null!==zt&&Ut(zt,e),null!==Dt&&Ut(Dt,e),Mt.forEach(t),Rt.forEach(t),n=0;n<Ot.length;n++)(r=Ot[n]).blockedOn===e&&(r.blockedOn=null);for(;0<Ot.length&&null===(n=Ot[0]).blockedOn;)Lt(n),null===n.blockedOn&&Ot.shift()}var $t=b.ReactCurrentBatchConfig,Wt=!0;function Ht(e,t,n,r){var i=xt,o=$t.transition;$t.transition=null;try{xt=1,Yt(e,t,n,r)}finally{xt=i,$t.transition=o}}function qt(e,t,n,r){var i=xt,o=$t.transition;$t.transition=null;try{xt=4,Yt(e,t,n,r)}finally{xt=i,$t.transition=o}}function Yt(e,t,n,r){if(Wt){var i=Gt(e,t,n,r);if(null===i)Wr(e,t,r,Kt,n),Nt(e,r);else if(function(e,t,n,r,i){switch(t){case"focusin":return Tt=_t(Tt,e,t,n,r,i),!0;case"dragenter":return zt=_t(zt,e,t,n,r,i),!0;case"mouseover":return Dt=_t(Dt,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Mt.set(o,_t(Mt.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Rt.set(o,_t(Rt.get(o)||null,e,t,n,r,i)),!0}return!1}(i,e,t,n,r))r.stopPropagation();else if(Nt(e,r),4&t&&-1<At.indexOf(e)){for(;null!==i;){var o=xi(i);if(null!==o&&wt(o),null===(o=Gt(e,t,n,r))&&Wr(e,t,r,Kt,n),o===i)break;i=o}null!==i&&r.stopPropagation()}else Wr(e,t,r,null,n)}}var Kt=null;function Gt(e,t,n,r){if(Kt=null,null!==(e=vi(e=we(r))))if(null===(t=Be(e)))e=null;else if(13===(n=t.tag)){if(null!==(e=$e(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Kt=e,null}function Qt(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ze()){case Je:return 1;case et:return 4;case tt:case nt:return 16;case rt:return 536870912;default:return 16}default:return 16}}var Xt=null,Zt=null,Jt=null;function en(){if(Jt)return Jt;var e,t,n=Zt,r=n.length,i="value"in Xt?Xt.value:Xt.textContent,o=i.length;for(e=0;e<r&&n[e]===i[e];e++);var a=r-e;for(t=1;t<=a&&n[r-t]===i[o-t];t++);return Jt=i.slice(e,1<t?1-t:void 0)}function tn(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function nn(){return!0}function rn(){return!1}function on(e){function t(t,n,r,i,o){for(var a in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=o,this.currentTarget=null,e)e.hasOwnProperty(a)&&(t=e[a],this[a]=t?t(i):i[a]);return this.isDefaultPrevented=(null!=i.defaultPrevented?i.defaultPrevented:!1===i.returnValue)?nn:rn,this.isPropagationStopped=rn,this}return L(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!==typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=nn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!==typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=nn)},persist:function(){},isPersistent:nn}),t}var an,sn,ln,cn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},un=on(cn),dn=L({},cn,{view:0,detail:0}),pn=on(dn),hn=L({},dn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cn,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ln&&(ln&&"mousemove"===e.type?(an=e.screenX-ln.screenX,sn=e.screenY-ln.screenY):sn=an=0,ln=e),an)},movementY:function(e){return"movementY"in e?e.movementY:sn}}),fn=on(hn),mn=on(L({},hn,{dataTransfer:0})),gn=on(L({},dn,{relatedTarget:0})),yn=on(L({},cn,{animationName:0,elapsedTime:0,pseudoElement:0})),vn=L({},cn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),xn=on(vn),bn=on(L({},cn,{data:0})),wn={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},kn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},jn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Sn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=jn[e])&&!!t[e]}function Cn(){return Sn}var Pn=L({},dn,{key:function(e){if(e.key){var t=wn[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=tn(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?kn[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cn,charCode:function(e){return"keypress"===e.type?tn(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?tn(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}),En=on(Pn),Tn=on(L({},hn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),zn=on(L({},dn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cn})),Dn=on(L({},cn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Mn=L({},hn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Rn=on(Mn),On=[9,13,27,32],An=u&&"CompositionEvent"in window,Nn=null;u&&"documentMode"in document&&(Nn=document.documentMode);var _n=u&&"TextEvent"in window&&!Nn,Ln=u&&(!An||Nn&&8<Nn&&11>=Nn),In=String.fromCharCode(32),Fn=!1;function Vn(e,t){switch(e){case"keyup":return-1!==On.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Un(e){return"object"===typeof(e=e.detail)&&"data"in e?e.data:null}var Bn=!1;var $n={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!$n[e.type]:"textarea"===t}function Hn(e,t,n,r){Pe(r),0<(t=qr(t,"onChange")).length&&(n=new un("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var qn=null,Yn=null;function Kn(e){Ir(e,0)}function Gn(e){if(Y(bi(e)))return e}function Qn(e,t){if("change"===e)return t}var Xn=!1;if(u){var Zn;if(u){var Jn="oninput"in document;if(!Jn){var er=document.createElement("div");er.setAttribute("oninput","return;"),Jn="function"===typeof er.oninput}Zn=Jn}else Zn=!1;Xn=Zn&&(!document.documentMode||9<document.documentMode)}function tr(){qn&&(qn.detachEvent("onpropertychange",nr),Yn=qn=null)}function nr(e){if("value"===e.propertyName&&Gn(Yn)){var t=[];Hn(t,Yn,e,we(e)),Me(Kn,t)}}function rr(e,t,n){"focusin"===e?(tr(),Yn=n,(qn=t).attachEvent("onpropertychange",nr)):"focusout"===e&&tr()}function ir(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return Gn(Yn)}function or(e,t){if("click"===e)return Gn(t)}function ar(e,t){if("input"===e||"change"===e)return Gn(t)}var sr="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t};function lr(e,t){if(sr(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!d.call(t,i)||!sr(e[i],t[i]))return!1}return!0}function cr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ur(e,t){var n,r=cr(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=cr(r)}}function dr(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?dr(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function pr(){for(var e=window,t=K();t instanceof e.HTMLIFrameElement;){try{var n="string"===typeof t.contentWindow.location.href}catch(r){n=!1}if(!n)break;t=K((e=t.contentWindow).document)}return t}function hr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}function fr(e){var t=pr(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&dr(n.ownerDocument.documentElement,n)){if(null!==r&&hr(n))if(t=r.start,void 0===(e=r.end)&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if((e=(t=n.ownerDocument||document)&&t.defaultView||window).getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=void 0===r.end?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=ur(n,o);var a=ur(n,r);i&&a&&(1!==e.rangeCount||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&((t=t.createRange()).setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}for(t=[],e=n;e=e.parentNode;)1===e.nodeType&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for("function"===typeof n.focus&&n.focus(),n=0;n<t.length;n++)(e=t[n]).element.scrollLeft=e.left,e.element.scrollTop=e.top}}var mr=u&&"documentMode"in document&&11>=document.documentMode,gr=null,yr=null,vr=null,xr=!1;function br(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;xr||null==gr||gr!==K(r)||("selectionStart"in(r=gr)&&hr(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},vr&&lr(vr,r)||(vr=r,0<(r=qr(yr,"onSelect")).length&&(t=new un("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=gr)))}function wr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var kr={animationend:wr("Animation","AnimationEnd"),animationiteration:wr("Animation","AnimationIteration"),animationstart:wr("Animation","AnimationStart"),transitionend:wr("Transition","TransitionEnd")},jr={},Sr={};function Cr(e){if(jr[e])return jr[e];if(!kr[e])return e;var t,n=kr[e];for(t in n)if(n.hasOwnProperty(t)&&t in Sr)return jr[e]=n[t];return e}u&&(Sr=document.createElement("div").style,"AnimationEvent"in window||(delete kr.animationend.animation,delete kr.animationiteration.animation,delete kr.animationstart.animation),"TransitionEvent"in window||delete kr.transitionend.transition);var Pr=Cr("animationend"),Er=Cr("animationiteration"),Tr=Cr("animationstart"),zr=Cr("transitionend"),Dr=new Map,Mr="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Rr(e,t){Dr.set(e,t),l(t,[e])}for(var Or=0;Or<Mr.length;Or++){var Ar=Mr[Or];Rr(Ar.toLowerCase(),"on"+(Ar[0].toUpperCase()+Ar.slice(1)))}Rr(Pr,"onAnimationEnd"),Rr(Er,"onAnimationIteration"),Rr(Tr,"onAnimationStart"),Rr("dblclick","onDoubleClick"),Rr("focusin","onFocus"),Rr("focusout","onBlur"),Rr(zr,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Nr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),_r=new Set("cancel close invalid load scroll toggle".split(" ").concat(Nr));function Lr(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,function(e,t,n,r,i,a,s,l,c){if(Ue.apply(this,arguments),_e){if(!_e)throw Error(o(198));var u=Le;_e=!1,Le=null,Ie||(Ie=!0,Fe=u)}}(r,t,void 0,e),e.currentTarget=null}function Ir(e,t){t=0!==(4&t);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var s=r[a],l=s.instance,c=s.currentTarget;if(s=s.listener,l!==o&&i.isPropagationStopped())break e;Lr(i,s,c),o=l}else for(a=0;a<r.length;a++){if(l=(s=r[a]).instance,c=s.currentTarget,s=s.listener,l!==o&&i.isPropagationStopped())break e;Lr(i,s,c),o=l}}}if(Ie)throw e=Fe,Ie=!1,Fe=null,e}function Fr(e,t){var n=t[mi];void 0===n&&(n=t[mi]=new Set);var r=e+"__bubble";n.has(r)||($r(t,e,2,!1),n.add(r))}function Vr(e,t,n){var r=0;t&&(r|=4),$r(n,e,r,t)}var Ur="_reactListening"+Math.random().toString(36).slice(2);function Br(e){if(!e[Ur]){e[Ur]=!0,a.forEach(function(t){"selectionchange"!==t&&(_r.has(t)||Vr(t,!1,e),Vr(t,!0,e))});var t=9===e.nodeType?e:e.ownerDocument;null===t||t[Ur]||(t[Ur]=!0,Vr("selectionchange",!1,t))}}function $r(e,t,n,r){switch(Qt(t)){case 1:var i=Ht;break;case 4:i=qt;break;default:i=Yt}n=i.bind(null,t,n,e),i=void 0,!Oe||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(i=!0),r?void 0!==i?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):void 0!==i?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Wr(e,t,n,r,i){var o=r;if(0===(1&t)&&0===(2&t)&&null!==r)e:for(;;){if(null===r)return;var a=r.tag;if(3===a||4===a){var s=r.stateNode.containerInfo;if(s===i||8===s.nodeType&&s.parentNode===i)break;if(4===a)for(a=r.return;null!==a;){var l=a.tag;if((3===l||4===l)&&((l=a.stateNode.containerInfo)===i||8===l.nodeType&&l.parentNode===i))return;a=a.return}for(;null!==s;){if(null===(a=vi(s)))return;if(5===(l=a.tag)||6===l){r=o=a;continue e}s=s.parentNode}}r=r.return}Me(function(){var r=o,i=we(n),a=[];e:{var s=Dr.get(e);if(void 0!==s){var l=un,c=e;switch(e){case"keypress":if(0===tn(n))break e;case"keydown":case"keyup":l=En;break;case"focusin":c="focus",l=gn;break;case"focusout":c="blur",l=gn;break;case"beforeblur":case"afterblur":l=gn;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":l=fn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":l=mn;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":l=zn;break;case Pr:case Er:case Tr:l=yn;break;case zr:l=Dn;break;case"scroll":l=pn;break;case"wheel":l=Rn;break;case"copy":case"cut":case"paste":l=xn;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":l=Tn}var u=0!==(4&t),d=!u&&"scroll"===e,p=u?null!==s?s+"Capture":null:s;u=[];for(var h,f=r;null!==f;){var m=(h=f).stateNode;if(5===h.tag&&null!==m&&(h=m,null!==p&&(null!=(m=Re(f,p))&&u.push(Hr(f,m,h)))),d)break;f=f.return}0<u.length&&(s=new l(s,c,null,n,i),a.push({event:s,listeners:u}))}}if(0===(7&t)){if(l="mouseout"===e||"pointerout"===e,(!(s="mouseover"===e||"pointerover"===e)||n===be||!(c=n.relatedTarget||n.fromElement)||!vi(c)&&!c[fi])&&(l||s)&&(s=i.window===i?i:(s=i.ownerDocument)?s.defaultView||s.parentWindow:window,l?(l=r,null!==(c=(c=n.relatedTarget||n.toElement)?vi(c):null)&&(c!==(d=Be(c))||5!==c.tag&&6!==c.tag)&&(c=null)):(l=null,c=r),l!==c)){if(u=fn,m="onMouseLeave",p="onMouseEnter",f="mouse","pointerout"!==e&&"pointerover"!==e||(u=Tn,m="onPointerLeave",p="onPointerEnter",f="pointer"),d=null==l?s:bi(l),h=null==c?s:bi(c),(s=new u(m,f+"leave",l,n,i)).target=d,s.relatedTarget=h,m=null,vi(i)===r&&((u=new u(p,f+"enter",c,n,i)).target=h,u.relatedTarget=d,m=u),d=m,l&&c)e:{for(p=c,f=0,h=u=l;h;h=Yr(h))f++;for(h=0,m=p;m;m=Yr(m))h++;for(;0<f-h;)u=Yr(u),f--;for(;0<h-f;)p=Yr(p),h--;for(;f--;){if(u===p||null!==p&&u===p.alternate)break e;u=Yr(u),p=Yr(p)}u=null}else u=null;null!==l&&Kr(a,s,l,u,!1),null!==c&&null!==d&&Kr(a,d,c,u,!0)}if("select"===(l=(s=r?bi(r):window).nodeName&&s.nodeName.toLowerCase())||"input"===l&&"file"===s.type)var g=Qn;else if(Wn(s))if(Xn)g=ar;else{g=ir;var y=rr}else(l=s.nodeName)&&"input"===l.toLowerCase()&&("checkbox"===s.type||"radio"===s.type)&&(g=or);switch(g&&(g=g(e,r))?Hn(a,g,n,i):(y&&y(e,s,r),"focusout"===e&&(y=s._wrapperState)&&y.controlled&&"number"===s.type&&ee(s,"number",s.value)),y=r?bi(r):window,e){case"focusin":(Wn(y)||"true"===y.contentEditable)&&(gr=y,yr=r,vr=null);break;case"focusout":vr=yr=gr=null;break;case"mousedown":xr=!0;break;case"contextmenu":case"mouseup":case"dragend":xr=!1,br(a,n,i);break;case"selectionchange":if(mr)break;case"keydown":case"keyup":br(a,n,i)}var v;if(An)e:{switch(e){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else Bn?Vn(e,n)&&(x="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(x="onCompositionStart");x&&(Ln&&"ko"!==n.locale&&(Bn||"onCompositionStart"!==x?"onCompositionEnd"===x&&Bn&&(v=en()):(Zt="value"in(Xt=i)?Xt.value:Xt.textContent,Bn=!0)),0<(y=qr(r,x)).length&&(x=new bn(x,e,null,n,i),a.push({event:x,listeners:y}),v?x.data=v:null!==(v=Un(n))&&(x.data=v))),(v=_n?function(e,t){switch(e){case"compositionend":return Un(t);case"keypress":return 32!==t.which?null:(Fn=!0,In);case"textInput":return(e=t.data)===In&&Fn?null:e;default:return null}}(e,n):function(e,t){if(Bn)return"compositionend"===e||!An&&Vn(e,t)?(e=en(),Jt=Zt=Xt=null,Bn=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ln&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(r=qr(r,"onBeforeInput")).length&&(i=new bn("onBeforeInput","beforeinput",null,n,i),a.push({event:i,listeners:r}),i.data=v))}Ir(a,t)})}function Hr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function qr(e,t){for(var n=t+"Capture",r=[];null!==e;){var i=e,o=i.stateNode;5===i.tag&&null!==o&&(i=o,null!=(o=Re(e,n))&&r.unshift(Hr(e,o,i)),null!=(o=Re(e,t))&&r.push(Hr(e,o,i))),e=e.return}return r}function Yr(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag);return e||null}function Kr(e,t,n,r,i){for(var o=t._reactName,a=[];null!==n&&n!==r;){var s=n,l=s.alternate,c=s.stateNode;if(null!==l&&l===r)break;5===s.tag&&null!==c&&(s=c,i?null!=(l=Re(n,o))&&a.unshift(Hr(n,l,s)):i||null!=(l=Re(n,o))&&a.push(Hr(n,l,s))),n=n.return}0!==a.length&&e.push({event:t,listeners:a})}var Gr=/\r\n?/g,Qr=/\u0000|\uFFFD/g;function Xr(e){return("string"===typeof e?e:""+e).replace(Gr,"\n").replace(Qr,"")}function Zr(e,t,n){if(t=Xr(t),Xr(e)!==t&&n)throw Error(o(425))}function Jr(){}var ei=null,ti=null;function ni(e,t){return"textarea"===e||"noscript"===e||"string"===typeof t.children||"number"===typeof t.children||"object"===typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var ri="function"===typeof setTimeout?setTimeout:void 0,ii="function"===typeof clearTimeout?clearTimeout:void 0,oi="function"===typeof Promise?Promise:void 0,ai="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof oi?function(e){return oi.resolve(null).then(e).catch(si)}:ri;function si(e){setTimeout(function(){throw e})}function li(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&8===i.nodeType)if("/$"===(n=i.data)){if(0===r)return e.removeChild(i),void Bt(t);r--}else"$"!==n&&"$?"!==n&&"$!"!==n||r++;n=i}while(n);Bt(t)}function ci(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t)break;if("/$"===t)return null}}return e}function ui(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}var di=Math.random().toString(36).slice(2),pi="__reactFiber$"+di,hi="__reactProps$"+di,fi="__reactContainer$"+di,mi="__reactEvents$"+di,gi="__reactListeners$"+di,yi="__reactHandles$"+di;function vi(e){var t=e[pi];if(t)return t;for(var n=e.parentNode;n;){if(t=n[fi]||n[pi]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=ui(e);null!==e;){if(n=e[pi])return n;e=ui(e)}return t}n=(e=n).parentNode}return null}function xi(e){return!(e=e[pi]||e[fi])||5!==e.tag&&6!==e.tag&&13!==e.tag&&3!==e.tag?null:e}function bi(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(o(33))}function wi(e){return e[hi]||null}var ki=[],ji=-1;function Si(e){return{current:e}}function Ci(e){0>ji||(e.current=ki[ji],ki[ji]=null,ji--)}function Pi(e,t){ji++,ki[ji]=e.current,e.current=t}var Ei={},Ti=Si(Ei),zi=Si(!1),Di=Ei;function Mi(e,t){var n=e.type.contextTypes;if(!n)return Ei;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i,o={};for(i in n)o[i]=t[i];return r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ri(e){return null!==(e=e.childContextTypes)&&void 0!==e}function Oi(){Ci(zi),Ci(Ti)}function Ai(e,t,n){if(Ti.current!==Ei)throw Error(o(168));Pi(Ti,t),Pi(zi,n)}function Ni(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,"function"!==typeof r.getChildContext)return n;for(var i in r=r.getChildContext())if(!(i in t))throw Error(o(108,$(e)||"Unknown",i));return L({},n,r)}function _i(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ei,Di=Ti.current,Pi(Ti,e),Pi(zi,zi.current),!0}function Li(e,t,n){var r=e.stateNode;if(!r)throw Error(o(169));n?(e=Ni(e,t,Di),r.__reactInternalMemoizedMergedChildContext=e,Ci(zi),Ci(Ti),Pi(Ti,e)):Ci(zi),Pi(zi,n)}var Ii=null,Fi=!1,Vi=!1;function Ui(e){null===Ii?Ii=[e]:Ii.push(e)}function Bi(){if(!Vi&&null!==Ii){Vi=!0;var e=0,t=xt;try{var n=Ii;for(xt=1;e<n.length;e++){var r=n[e];do{r=r(!0)}while(null!==r)}Ii=null,Fi=!1}catch(i){throw null!==Ii&&(Ii=Ii.slice(e+1)),Ye(Je,Bi),i}finally{xt=t,Vi=!1}}return null}var $i=[],Wi=0,Hi=null,qi=0,Yi=[],Ki=0,Gi=null,Qi=1,Xi="";function Zi(e,t){$i[Wi++]=qi,$i[Wi++]=Hi,Hi=e,qi=t}function Ji(e,t,n){Yi[Ki++]=Qi,Yi[Ki++]=Xi,Yi[Ki++]=Gi,Gi=e;var r=Qi;e=Xi;var i=32-at(r)-1;r&=~(1<<i),n+=1;var o=32-at(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,Qi=1<<32-at(t)+i|n<<i|r,Xi=o+e}else Qi=1<<o|n<<i|r,Xi=e}function eo(e){null!==e.return&&(Zi(e,1),Ji(e,1,0))}function to(e){for(;e===Hi;)Hi=$i[--Wi],$i[Wi]=null,qi=$i[--Wi],$i[Wi]=null;for(;e===Gi;)Gi=Yi[--Ki],Yi[Ki]=null,Xi=Yi[--Ki],Yi[Ki]=null,Qi=Yi[--Ki],Yi[Ki]=null}var no=null,ro=null,io=!1,oo=null;function ao(e,t){var n=Mc(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,null===(t=e.deletions)?(e.deletions=[n],e.flags|=16):t.push(n)}function so(e,t){switch(e.tag){case 5:var n=e.type;return null!==(t=1!==t.nodeType||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,no=e,ro=ci(t.firstChild),!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,no=e,ro=null,!0);case 13:return null!==(t=8!==t.nodeType?null:t)&&(n=null!==Gi?{id:Qi,overflow:Xi}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},(n=Mc(18,null,null,0)).stateNode=t,n.return=e,e.child=n,no=e,ro=null,!0);default:return!1}}function lo(e){return 0!==(1&e.mode)&&0===(128&e.flags)}function co(e){if(io){var t=ro;if(t){var n=t;if(!so(e,t)){if(lo(e))throw Error(o(418));t=ci(n.nextSibling);var r=no;t&&so(e,t)?ao(r,n):(e.flags=-4097&e.flags|2,io=!1,no=e)}}else{if(lo(e))throw Error(o(418));e.flags=-4097&e.flags|2,io=!1,no=e}}}function uo(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;no=e}function po(e){if(e!==no)return!1;if(!io)return uo(e),io=!0,!1;var t;if((t=3!==e.tag)&&!(t=5!==e.tag)&&(t="head"!==(t=e.type)&&"body"!==t&&!ni(e.type,e.memoizedProps)),t&&(t=ro)){if(lo(e))throw ho(),Error(o(418));for(;t;)ao(e,t),t=ci(t.nextSibling)}if(uo(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(o(317));e:{for(e=e.nextSibling,t=0;e;){if(8===e.nodeType){var n=e.data;if("/$"===n){if(0===t){ro=ci(e.nextSibling);break e}t--}else"$"!==n&&"$!"!==n&&"$?"!==n||t++}e=e.nextSibling}ro=null}}else ro=no?ci(e.stateNode.nextSibling):null;return!0}function ho(){for(var e=ro;e;)e=ci(e.nextSibling)}function fo(){ro=no=null,io=!1}function mo(e){null===oo?oo=[e]:oo.push(e)}var go=b.ReactCurrentBatchConfig;function yo(e,t,n){if(null!==(e=n.ref)&&"function"!==typeof e&&"object"!==typeof e){if(n._owner){if(n=n._owner){if(1!==n.tag)throw Error(o(309));var r=n.stateNode}if(!r)throw Error(o(147,e));var i=r,a=""+e;return null!==t&&null!==t.ref&&"function"===typeof t.ref&&t.ref._stringRef===a?t.ref:(t=function(e){var t=i.refs;null===e?delete t[a]:t[a]=e},t._stringRef=a,t)}if("string"!==typeof e)throw Error(o(284));if(!n._owner)throw Error(o(290,e))}return e}function vo(e,t){throw e=Object.prototype.toString.call(t),Error(o(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function xo(e){return(0,e._init)(e._payload)}function bo(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function i(e,t){return(e=Oc(e,t)).index=0,e.sibling=null,e}function a(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=2,n):r:(t.flags|=2,n):(t.flags|=1048576,n)}function s(t){return e&&null===t.alternate&&(t.flags|=2),t}function l(e,t,n,r){return null===t||6!==t.tag?((t=Lc(n,e.mode,r)).return=e,t):((t=i(t,n)).return=e,t)}function c(e,t,n,r){var o=n.type;return o===j?d(e,t,n.props.children,r,n.key):null!==t&&(t.elementType===o||"object"===typeof o&&null!==o&&o.$$typeof===R&&xo(o)===t.type)?((r=i(t,n.props)).ref=yo(e,t,n),r.return=e,r):((r=Ac(n.type,n.key,n.props,null,e.mode,r)).ref=yo(e,t,n),r.return=e,r)}function u(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Ic(n,e.mode,r)).return=e,t):((t=i(t,n.children||[])).return=e,t)}function d(e,t,n,r,o){return null===t||7!==t.tag?((t=Nc(n,e.mode,r,o)).return=e,t):((t=i(t,n)).return=e,t)}function p(e,t,n){if("string"===typeof t&&""!==t||"number"===typeof t)return(t=Lc(""+t,e.mode,n)).return=e,t;if("object"===typeof t&&null!==t){switch(t.$$typeof){case w:return(n=Ac(t.type,t.key,t.props,null,e.mode,n)).ref=yo(e,null,t),n.return=e,n;case k:return(t=Ic(t,e.mode,n)).return=e,t;case R:return p(e,(0,t._init)(t._payload),n)}if(te(t)||N(t))return(t=Nc(t,e.mode,n,null)).return=e,t;vo(e,t)}return null}function h(e,t,n,r){var i=null!==t?t.key:null;if("string"===typeof n&&""!==n||"number"===typeof n)return null!==i?null:l(e,t,""+n,r);if("object"===typeof n&&null!==n){switch(n.$$typeof){case w:return n.key===i?c(e,t,n,r):null;case k:return n.key===i?u(e,t,n,r):null;case R:return h(e,t,(i=n._init)(n._payload),r)}if(te(n)||N(n))return null!==i?null:d(e,t,n,r,null);vo(e,n)}return null}function f(e,t,n,r,i){if("string"===typeof r&&""!==r||"number"===typeof r)return l(t,e=e.get(n)||null,""+r,i);if("object"===typeof r&&null!==r){switch(r.$$typeof){case w:return c(t,e=e.get(null===r.key?n:r.key)||null,r,i);case k:return u(t,e=e.get(null===r.key?n:r.key)||null,r,i);case R:return f(e,t,n,(0,r._init)(r._payload),i)}if(te(r)||N(r))return d(t,e=e.get(n)||null,r,i,null);vo(t,r)}return null}function m(i,o,s,l){for(var c=null,u=null,d=o,m=o=0,g=null;null!==d&&m<s.length;m++){d.index>m?(g=d,d=null):g=d.sibling;var y=h(i,d,s[m],l);if(null===y){null===d&&(d=g);break}e&&d&&null===y.alternate&&t(i,d),o=a(y,o,m),null===u?c=y:u.sibling=y,u=y,d=g}if(m===s.length)return n(i,d),io&&Zi(i,m),c;if(null===d){for(;m<s.length;m++)null!==(d=p(i,s[m],l))&&(o=a(d,o,m),null===u?c=d:u.sibling=d,u=d);return io&&Zi(i,m),c}for(d=r(i,d);m<s.length;m++)null!==(g=f(d,i,m,s[m],l))&&(e&&null!==g.alternate&&d.delete(null===g.key?m:g.key),o=a(g,o,m),null===u?c=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),io&&Zi(i,m),c}function g(i,s,l,c){var u=N(l);if("function"!==typeof u)throw Error(o(150));if(null==(l=u.call(l)))throw Error(o(151));for(var d=u=null,m=s,g=s=0,y=null,v=l.next();null!==m&&!v.done;g++,v=l.next()){m.index>g?(y=m,m=null):y=m.sibling;var x=h(i,m,v.value,c);if(null===x){null===m&&(m=y);break}e&&m&&null===x.alternate&&t(i,m),s=a(x,s,g),null===d?u=x:d.sibling=x,d=x,m=y}if(v.done)return n(i,m),io&&Zi(i,g),u;if(null===m){for(;!v.done;g++,v=l.next())null!==(v=p(i,v.value,c))&&(s=a(v,s,g),null===d?u=v:d.sibling=v,d=v);return io&&Zi(i,g),u}for(m=r(i,m);!v.done;g++,v=l.next())null!==(v=f(m,i,g,v.value,c))&&(e&&null!==v.alternate&&m.delete(null===v.key?g:v.key),s=a(v,s,g),null===d?u=v:d.sibling=v,d=v);return e&&m.forEach(function(e){return t(i,e)}),io&&Zi(i,g),u}return function e(r,o,a,l){if("object"===typeof a&&null!==a&&a.type===j&&null===a.key&&(a=a.props.children),"object"===typeof a&&null!==a){switch(a.$$typeof){case w:e:{for(var c=a.key,u=o;null!==u;){if(u.key===c){if((c=a.type)===j){if(7===u.tag){n(r,u.sibling),(o=i(u,a.props.children)).return=r,r=o;break e}}else if(u.elementType===c||"object"===typeof c&&null!==c&&c.$$typeof===R&&xo(c)===u.type){n(r,u.sibling),(o=i(u,a.props)).ref=yo(r,u,a),o.return=r,r=o;break e}n(r,u);break}t(r,u),u=u.sibling}a.type===j?((o=Nc(a.props.children,r.mode,l,a.key)).return=r,r=o):((l=Ac(a.type,a.key,a.props,null,r.mode,l)).ref=yo(r,o,a),l.return=r,r=l)}return s(r);case k:e:{for(u=a.key;null!==o;){if(o.key===u){if(4===o.tag&&o.stateNode.containerInfo===a.containerInfo&&o.stateNode.implementation===a.implementation){n(r,o.sibling),(o=i(o,a.children||[])).return=r,r=o;break e}n(r,o);break}t(r,o),o=o.sibling}(o=Ic(a,r.mode,l)).return=r,r=o}return s(r);case R:return e(r,o,(u=a._init)(a._payload),l)}if(te(a))return m(r,o,a,l);if(N(a))return g(r,o,a,l);vo(r,a)}return"string"===typeof a&&""!==a||"number"===typeof a?(a=""+a,null!==o&&6===o.tag?(n(r,o.sibling),(o=i(o,a)).return=r,r=o):(n(r,o),(o=Lc(a,r.mode,l)).return=r,r=o),s(r)):n(r,o)}}var wo=bo(!0),ko=bo(!1),jo=Si(null),So=null,Co=null,Po=null;function Eo(){Po=Co=So=null}function To(e){var t=jo.current;Ci(jo),e._currentValue=t}function zo(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Do(e,t){So=e,Po=Co=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(0!==(e.lanes&t)&&(xs=!0),e.firstContext=null)}function Mo(e){var t=e._currentValue;if(Po!==e)if(e={context:e,memoizedValue:t,next:null},null===Co){if(null===So)throw Error(o(308));Co=e,So.dependencies={lanes:0,firstContext:e}}else Co=Co.next=e;return t}var Ro=null;function Oo(e){null===Ro?Ro=[e]:Ro.push(e)}function Ao(e,t,n,r){var i=t.interleaved;return null===i?(n.next=n,Oo(t)):(n.next=i.next,i.next=n),t.interleaved=n,No(e,r)}function No(e,t){e.lanes|=t;var n=e.alternate;for(null!==n&&(n.lanes|=t),n=e,e=e.return;null!==e;)e.childLanes|=t,null!==(n=e.alternate)&&(n.childLanes|=t),n=e,e=e.return;return 3===n.tag?n.stateNode:null}var _o=!1;function Lo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Io(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Fo(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Vo(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,0!==(2&Tl)){var i=r.pending;return null===i?t.next=t:(t.next=i.next,i.next=t),r.pending=t,No(e,n)}return null===(i=r.interleaved)?(t.next=t,Oo(r)):(t.next=i.next,i.next=t),r.interleaved=t,No(e,n)}function Uo(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,0!==(4194240&n))){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,vt(e,n)}}function Bo(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var i=null,o=null;if(null!==(n=n.firstBaseUpdate)){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};null===o?i=o=a:o=o.next=a,n=n.next}while(null!==n);null===o?i=o=t:o=o.next=t}else i=o=t;return n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function $o(e,t,n,r){var i=e.updateQueue;_o=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,s=i.shared.pending;if(null!==s){i.shared.pending=null;var l=s,c=l.next;l.next=null,null===a?o=c:a.next=c,a=l;var u=e.alternate;null!==u&&((s=(u=u.updateQueue).lastBaseUpdate)!==a&&(null===s?u.firstBaseUpdate=c:s.next=c,u.lastBaseUpdate=l))}if(null!==o){var d=i.baseState;for(a=0,u=c=l=null,s=o;;){var p=s.lane,h=s.eventTime;if((r&p)===p){null!==u&&(u=u.next={eventTime:h,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var f=e,m=s;switch(p=t,h=n,m.tag){case 1:if("function"===typeof(f=m.payload)){d=f.call(h,d,p);break e}d=f;break e;case 3:f.flags=-65537&f.flags|128;case 0:if(null===(p="function"===typeof(f=m.payload)?f.call(h,d,p):f)||void 0===p)break e;d=L({},d,p);break e;case 2:_o=!0}}null!==s.callback&&0!==s.lane&&(e.flags|=64,null===(p=i.effects)?i.effects=[s]:p.push(s))}else h={eventTime:h,lane:p,tag:s.tag,payload:s.payload,callback:s.callback,next:null},null===u?(c=u=h,l=d):u=u.next=h,a|=p;if(null===(s=s.next)){if(null===(s=i.shared.pending))break;s=(p=s).next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}if(null===u&&(l=d),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=u,null!==(t=i.shared.interleaved)){i=t;do{a|=i.lane,i=i.next}while(i!==t)}else null===o&&(i.shared.lanes=0);_l|=a,e.lanes=a,e.memoizedState=d}}function Wo(e,t,n){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(null!==i){if(r.callback=null,r=n,"function"!==typeof i)throw Error(o(191,i));i.call(r)}}}var Ho={},qo=Si(Ho),Yo=Si(Ho),Ko=Si(Ho);function Go(e){if(e===Ho)throw Error(o(174));return e}function Qo(e,t){switch(Pi(Ko,t),Pi(Yo,e),Pi(qo,Ho),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:le(null,"");break;default:t=le(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}Ci(qo),Pi(qo,t)}function Xo(){Ci(qo),Ci(Yo),Ci(Ko)}function Zo(e){Go(Ko.current);var t=Go(qo.current),n=le(t,e.type);t!==n&&(Pi(Yo,e),Pi(qo,n))}function Jo(e){Yo.current===e&&(Ci(qo),Ci(Yo))}var ea=Si(0);function ta(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||"$!"===n.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!==(128&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var na=[];function ra(){for(var e=0;e<na.length;e++)na[e]._workInProgressVersionPrimary=null;na.length=0}var ia=b.ReactCurrentDispatcher,oa=b.ReactCurrentBatchConfig,aa=0,sa=null,la=null,ca=null,ua=!1,da=!1,pa=0,ha=0;function fa(){throw Error(o(321))}function ma(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!sr(e[n],t[n]))return!1;return!0}function ga(e,t,n,r,i,a){if(aa=a,sa=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ia.current=null===e||null===e.memoizedState?Ja:es,e=n(r,i),da){a=0;do{if(da=!1,pa=0,25<=a)throw Error(o(301));a+=1,ca=la=null,t.updateQueue=null,ia.current=ts,e=n(r,i)}while(da)}if(ia.current=Za,t=null!==la&&null!==la.next,aa=0,ca=la=sa=null,ua=!1,t)throw Error(o(300));return e}function ya(){var e=0!==pa;return pa=0,e}function va(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===ca?sa.memoizedState=ca=e:ca=ca.next=e,ca}function xa(){if(null===la){var e=sa.alternate;e=null!==e?e.memoizedState:null}else e=la.next;var t=null===ca?sa.memoizedState:ca.next;if(null!==t)ca=t,la=e;else{if(null===e)throw Error(o(310));e={memoizedState:(la=e).memoizedState,baseState:la.baseState,baseQueue:la.baseQueue,queue:la.queue,next:null},null===ca?sa.memoizedState=ca=e:ca=ca.next=e}return ca}function ba(e,t){return"function"===typeof t?t(e):t}function wa(e){var t=xa(),n=t.queue;if(null===n)throw Error(o(311));n.lastRenderedReducer=e;var r=la,i=r.baseQueue,a=n.pending;if(null!==a){if(null!==i){var s=i.next;i.next=a.next,a.next=s}r.baseQueue=i=a,n.pending=null}if(null!==i){a=i.next,r=r.baseState;var l=s=null,c=null,u=a;do{var d=u.lane;if((aa&d)===d)null!==c&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var p={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};null===c?(l=c=p,s=r):c=c.next=p,sa.lanes|=d,_l|=d}u=u.next}while(null!==u&&u!==a);null===c?s=r:c.next=l,sr(r,t.memoizedState)||(xs=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=c,n.lastRenderedState=r}if(null!==(e=n.interleaved)){i=e;do{a=i.lane,sa.lanes|=a,_l|=a,i=i.next}while(i!==e)}else null===i&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ka(e){var t=xa(),n=t.queue;if(null===n)throw Error(o(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(null!==i){n.pending=null;var s=i=i.next;do{a=e(a,s.action),s=s.next}while(s!==i);sr(a,t.memoizedState)||(xs=!0),t.memoizedState=a,null===t.baseQueue&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function ja(){}function Sa(e,t){var n=sa,r=xa(),i=t(),a=!sr(r.memoizedState,i);if(a&&(r.memoizedState=i,xs=!0),r=r.queue,_a(Ea.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||null!==ca&&1&ca.memoizedState.tag){if(n.flags|=2048,Ma(9,Pa.bind(null,n,r,i,t),void 0,null),null===zl)throw Error(o(349));0!==(30&aa)||Ca(n,t,i)}return i}function Ca(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=sa.updateQueue)?(t={lastEffect:null,stores:null},sa.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function Pa(e,t,n,r){t.value=n,t.getSnapshot=r,Ta(t)&&za(e)}function Ea(e,t,n){return n(function(){Ta(t)&&za(e)})}function Ta(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!sr(e,n)}catch(r){return!0}}function za(e){var t=No(e,1);null!==t&&nc(t,e,1,-1)}function Da(e){var t=va();return"function"===typeof e&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ba,lastRenderedState:e},t.queue=e,e=e.dispatch=Ka.bind(null,sa,e),[t.memoizedState,e]}function Ma(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},null===(t=sa.updateQueue)?(t={lastEffect:null,stores:null},sa.updateQueue=t,t.lastEffect=e.next=e):null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Ra(){return xa().memoizedState}function Oa(e,t,n,r){var i=va();sa.flags|=e,i.memoizedState=Ma(1|t,n,void 0,void 0===r?null:r)}function Aa(e,t,n,r){var i=xa();r=void 0===r?null:r;var o=void 0;if(null!==la){var a=la.memoizedState;if(o=a.destroy,null!==r&&ma(r,a.deps))return void(i.memoizedState=Ma(t,n,o,r))}sa.flags|=e,i.memoizedState=Ma(1|t,n,o,r)}function Na(e,t){return Oa(8390656,8,e,t)}function _a(e,t){return Aa(2048,8,e,t)}function La(e,t){return Aa(4,2,e,t)}function Ia(e,t){return Aa(4,4,e,t)}function Fa(e,t){return"function"===typeof t?(e=e(),t(e),function(){t(null)}):null!==t&&void 0!==t?(e=e(),t.current=e,function(){t.current=null}):void 0}function Va(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,Aa(4,4,Fa.bind(null,t,e),n)}function Ua(){}function Ba(e,t){var n=xa();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&ma(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function $a(e,t){var n=xa();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&ma(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Wa(e,t,n){return 0===(21&aa)?(e.baseState&&(e.baseState=!1,xs=!0),e.memoizedState=n):(sr(n,t)||(n=mt(),sa.lanes|=n,_l|=n,e.baseState=!0),t)}function Ha(e,t){var n=xt;xt=0!==n&&4>n?n:4,e(!0);var r=oa.transition;oa.transition={};try{e(!1),t()}finally{xt=n,oa.transition=r}}function qa(){return xa().memoizedState}function Ya(e,t,n){var r=tc(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ga(e))Qa(t,n);else if(null!==(n=Ao(e,t,n,r))){nc(n,e,r,ec()),Xa(n,t,r)}}function Ka(e,t,n){var r=tc(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ga(e))Qa(t,i);else{var o=e.alternate;if(0===e.lanes&&(null===o||0===o.lanes)&&null!==(o=t.lastRenderedReducer))try{var a=t.lastRenderedState,s=o(a,n);if(i.hasEagerState=!0,i.eagerState=s,sr(s,a)){var l=t.interleaved;return null===l?(i.next=i,Oo(t)):(i.next=l.next,l.next=i),void(t.interleaved=i)}}catch(c){}null!==(n=Ao(e,t,i,r))&&(nc(n,e,r,i=ec()),Xa(n,t,r))}}function Ga(e){var t=e.alternate;return e===sa||null!==t&&t===sa}function Qa(e,t){da=ua=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Xa(e,t,n){if(0!==(4194240&n)){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,vt(e,n)}}var Za={readContext:Mo,useCallback:fa,useContext:fa,useEffect:fa,useImperativeHandle:fa,useInsertionEffect:fa,useLayoutEffect:fa,useMemo:fa,useReducer:fa,useRef:fa,useState:fa,useDebugValue:fa,useDeferredValue:fa,useTransition:fa,useMutableSource:fa,useSyncExternalStore:fa,useId:fa,unstable_isNewReconciler:!1},Ja={readContext:Mo,useCallback:function(e,t){return va().memoizedState=[e,void 0===t?null:t],e},useContext:Mo,useEffect:Na,useImperativeHandle:function(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,Oa(4194308,4,Fa.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Oa(4194308,4,e,t)},useInsertionEffect:function(e,t){return Oa(4,2,e,t)},useMemo:function(e,t){var n=va();return t=void 0===t?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=va();return t=void 0!==n?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Ya.bind(null,sa,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},va().memoizedState=e},useState:Da,useDebugValue:Ua,useDeferredValue:function(e){return va().memoizedState=e},useTransition:function(){var e=Da(!1),t=e[0];return e=Ha.bind(null,e[1]),va().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=sa,i=va();if(io){if(void 0===n)throw Error(o(407));n=n()}else{if(n=t(),null===zl)throw Error(o(349));0!==(30&aa)||Ca(r,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,Na(Ea.bind(null,r,a,e),[e]),r.flags|=2048,Ma(9,Pa.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=va(),t=zl.identifierPrefix;if(io){var n=Xi;t=":"+t+"R"+(n=(Qi&~(1<<32-at(Qi)-1)).toString(32)+n),0<(n=pa++)&&(t+="H"+n.toString(32)),t+=":"}else t=":"+t+"r"+(n=ha++).toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},es={readContext:Mo,useCallback:Ba,useContext:Mo,useEffect:_a,useImperativeHandle:Va,useInsertionEffect:La,useLayoutEffect:Ia,useMemo:$a,useReducer:wa,useRef:Ra,useState:function(){return wa(ba)},useDebugValue:Ua,useDeferredValue:function(e){return Wa(xa(),la.memoizedState,e)},useTransition:function(){return[wa(ba)[0],xa().memoizedState]},useMutableSource:ja,useSyncExternalStore:Sa,useId:qa,unstable_isNewReconciler:!1},ts={readContext:Mo,useCallback:Ba,useContext:Mo,useEffect:_a,useImperativeHandle:Va,useInsertionEffect:La,useLayoutEffect:Ia,useMemo:$a,useReducer:ka,useRef:Ra,useState:function(){return ka(ba)},useDebugValue:Ua,useDeferredValue:function(e){var t=xa();return null===la?t.memoizedState=e:Wa(t,la.memoizedState,e)},useTransition:function(){return[ka(ba)[0],xa().memoizedState]},useMutableSource:ja,useSyncExternalStore:Sa,useId:qa,unstable_isNewReconciler:!1};function ns(e,t){if(e&&e.defaultProps){for(var n in t=L({},t),e=e.defaultProps)void 0===t[n]&&(t[n]=e[n]);return t}return t}function rs(e,t,n,r){n=null===(n=n(r,t=e.memoizedState))||void 0===n?t:L({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var is={isMounted:function(e){return!!(e=e._reactInternals)&&Be(e)===e},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ec(),i=tc(e),o=Fo(r,i);o.payload=t,void 0!==n&&null!==n&&(o.callback=n),null!==(t=Vo(e,o,i))&&(nc(t,e,i,r),Uo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ec(),i=tc(e),o=Fo(r,i);o.tag=1,o.payload=t,void 0!==n&&null!==n&&(o.callback=n),null!==(t=Vo(e,o,i))&&(nc(t,e,i,r),Uo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ec(),r=tc(e),i=Fo(n,r);i.tag=2,void 0!==t&&null!==t&&(i.callback=t),null!==(t=Vo(e,i,r))&&(nc(t,e,r,n),Uo(t,e,r))}};function os(e,t,n,r,i,o,a){return"function"===typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,o,a):!t.prototype||!t.prototype.isPureReactComponent||(!lr(n,r)||!lr(i,o))}function as(e,t,n){var r=!1,i=Ei,o=t.contextType;return"object"===typeof o&&null!==o?o=Mo(o):(i=Ri(t)?Di:Ti.current,o=(r=null!==(r=t.contextTypes)&&void 0!==r)?Mi(e,i):Ei),t=new t(n,o),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=is,e.stateNode=t,t._reactInternals=e,r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function ss(e,t,n,r){e=t.state,"function"===typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"===typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&is.enqueueReplaceState(t,t.state,null)}function ls(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Lo(e);var o=t.contextType;"object"===typeof o&&null!==o?i.context=Mo(o):(o=Ri(t)?Di:Ti.current,i.context=Mi(e,o)),i.state=e.memoizedState,"function"===typeof(o=t.getDerivedStateFromProps)&&(rs(e,t,o,n),i.state=e.memoizedState),"function"===typeof t.getDerivedStateFromProps||"function"===typeof i.getSnapshotBeforeUpdate||"function"!==typeof i.UNSAFE_componentWillMount&&"function"!==typeof i.componentWillMount||(t=i.state,"function"===typeof i.componentWillMount&&i.componentWillMount(),"function"===typeof i.UNSAFE_componentWillMount&&i.UNSAFE_componentWillMount(),t!==i.state&&is.enqueueReplaceState(i,i.state,null),$o(e,n,i,r),i.state=e.memoizedState),"function"===typeof i.componentDidMount&&(e.flags|=4194308)}function cs(e,t){try{var n="",r=t;do{n+=U(r),r=r.return}while(r);var i=n}catch(o){i="\nError generating stack: "+o.message+"\n"+o.stack}return{value:e,source:t,stack:i,digest:null}}function us(e,t,n){return{value:e,source:null,stack:null!=n?n:null,digest:null!=t?t:null}}function ds(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var ps="function"===typeof WeakMap?WeakMap:Map;function hs(e,t,n){(n=Fo(-1,n)).tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Wl||(Wl=!0,Hl=r),ds(0,t)},n}function fs(e,t,n){(n=Fo(-1,n)).tag=3;var r=e.type.getDerivedStateFromError;if("function"===typeof r){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){ds(0,t)}}var o=e.stateNode;return null!==o&&"function"===typeof o.componentDidCatch&&(n.callback=function(){ds(0,t),"function"!==typeof r&&(null===ql?ql=new Set([this]):ql.add(this));var e=t.stack;this.componentDidCatch(t.value,{componentStack:null!==e?e:""})}),n}function ms(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new ps;var i=new Set;r.set(t,i)}else void 0===(i=r.get(t))&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Cc.bind(null,e,t,n),t.then(e,e))}function gs(e){do{var t;if((t=13===e.tag)&&(t=null===(t=e.memoizedState)||null!==t.dehydrated),t)return e;e=e.return}while(null!==e);return null}function ys(e,t,n,r,i){return 0===(1&e.mode)?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,1===n.tag&&(null===n.alternate?n.tag=17:((t=Fo(-1,1)).tag=2,Vo(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var vs=b.ReactCurrentOwner,xs=!1;function bs(e,t,n,r){t.child=null===e?ko(t,null,n,r):wo(t,e.child,n,r)}function ws(e,t,n,r,i){n=n.render;var o=t.ref;return Do(t,i),r=ga(e,t,n,r,o,i),n=ya(),null===e||xs?(io&&n&&eo(t),t.flags|=1,bs(e,t,r,i),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ws(e,t,i))}function ks(e,t,n,r,i){if(null===e){var o=n.type;return"function"!==typeof o||Rc(o)||void 0!==o.defaultProps||null!==n.compare||void 0!==n.defaultProps?((e=Ac(n.type,null,r,t,t.mode,i)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=o,js(e,t,o,r,i))}if(o=e.child,0===(e.lanes&i)){var a=o.memoizedProps;if((n=null!==(n=n.compare)?n:lr)(a,r)&&e.ref===t.ref)return Ws(e,t,i)}return t.flags|=1,(e=Oc(o,r)).ref=t.ref,e.return=t,t.child=e}function js(e,t,n,r,i){if(null!==e){var o=e.memoizedProps;if(lr(o,r)&&e.ref===t.ref){if(xs=!1,t.pendingProps=r=o,0===(e.lanes&i))return t.lanes=e.lanes,Ws(e,t,i);0!==(131072&e.flags)&&(xs=!0)}}return Ps(e,t,n,r,i)}function Ss(e,t,n){var r=t.pendingProps,i=r.children,o=null!==e?e.memoizedState:null;if("hidden"===r.mode)if(0===(1&t.mode))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Pi(Ol,Rl),Rl|=n;else{if(0===(1073741824&n))return e=null!==o?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Pi(Ol,Rl),Rl|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=null!==o?o.baseLanes:n,Pi(Ol,Rl),Rl|=r}else null!==o?(r=o.baseLanes|n,t.memoizedState=null):r=n,Pi(Ol,Rl),Rl|=r;return bs(e,t,i,n),t.child}function Cs(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ps(e,t,n,r,i){var o=Ri(n)?Di:Ti.current;return o=Mi(t,o),Do(t,i),n=ga(e,t,n,r,o,i),r=ya(),null===e||xs?(io&&r&&eo(t),t.flags|=1,bs(e,t,n,i),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ws(e,t,i))}function Es(e,t,n,r,i){if(Ri(n)){var o=!0;_i(t)}else o=!1;if(Do(t,i),null===t.stateNode)$s(e,t),as(t,n,r),ls(t,n,r,i),r=!0;else if(null===e){var a=t.stateNode,s=t.memoizedProps;a.props=s;var l=a.context,c=n.contextType;"object"===typeof c&&null!==c?c=Mo(c):c=Mi(t,c=Ri(n)?Di:Ti.current);var u=n.getDerivedStateFromProps,d="function"===typeof u||"function"===typeof a.getSnapshotBeforeUpdate;d||"function"!==typeof a.UNSAFE_componentWillReceiveProps&&"function"!==typeof a.componentWillReceiveProps||(s!==r||l!==c)&&ss(t,a,r,c),_o=!1;var p=t.memoizedState;a.state=p,$o(t,r,a,i),l=t.memoizedState,s!==r||p!==l||zi.current||_o?("function"===typeof u&&(rs(t,n,u,r),l=t.memoizedState),(s=_o||os(t,n,s,r,p,l,c))?(d||"function"!==typeof a.UNSAFE_componentWillMount&&"function"!==typeof a.componentWillMount||("function"===typeof a.componentWillMount&&a.componentWillMount(),"function"===typeof a.UNSAFE_componentWillMount&&a.UNSAFE_componentWillMount()),"function"===typeof a.componentDidMount&&(t.flags|=4194308)):("function"===typeof a.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=c,r=s):("function"===typeof a.componentDidMount&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Io(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:ns(t.type,s),a.props=c,d=t.pendingProps,p=a.context,"object"===typeof(l=n.contextType)&&null!==l?l=Mo(l):l=Mi(t,l=Ri(n)?Di:Ti.current);var h=n.getDerivedStateFromProps;(u="function"===typeof h||"function"===typeof a.getSnapshotBeforeUpdate)||"function"!==typeof a.UNSAFE_componentWillReceiveProps&&"function"!==typeof a.componentWillReceiveProps||(s!==d||p!==l)&&ss(t,a,r,l),_o=!1,p=t.memoizedState,a.state=p,$o(t,r,a,i);var f=t.memoizedState;s!==d||p!==f||zi.current||_o?("function"===typeof h&&(rs(t,n,h,r),f=t.memoizedState),(c=_o||os(t,n,c,r,p,f,l)||!1)?(u||"function"!==typeof a.UNSAFE_componentWillUpdate&&"function"!==typeof a.componentWillUpdate||("function"===typeof a.componentWillUpdate&&a.componentWillUpdate(r,f,l),"function"===typeof a.UNSAFE_componentWillUpdate&&a.UNSAFE_componentWillUpdate(r,f,l)),"function"===typeof a.componentDidUpdate&&(t.flags|=4),"function"===typeof a.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!==typeof a.componentDidUpdate||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),"function"!==typeof a.getSnapshotBeforeUpdate||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=f),a.props=r,a.state=f,a.context=l,r=c):("function"!==typeof a.componentDidUpdate||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),"function"!==typeof a.getSnapshotBeforeUpdate||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return Ts(e,t,n,r,o,i)}function Ts(e,t,n,r,i,o){Cs(e,t);var a=0!==(128&t.flags);if(!r&&!a)return i&&Li(t,n,!1),Ws(e,t,o);r=t.stateNode,vs.current=t;var s=a&&"function"!==typeof n.getDerivedStateFromError?null:r.render();return t.flags|=1,null!==e&&a?(t.child=wo(t,e.child,null,o),t.child=wo(t,null,s,o)):bs(e,t,s,o),t.memoizedState=r.state,i&&Li(t,n,!0),t.child}function zs(e){var t=e.stateNode;t.pendingContext?Ai(0,t.pendingContext,t.pendingContext!==t.context):t.context&&Ai(0,t.context,!1),Qo(e,t.containerInfo)}function Ds(e,t,n,r,i){return fo(),mo(i),t.flags|=256,bs(e,t,n,r),t.child}var Ms,Rs,Os,As,Ns={dehydrated:null,treeContext:null,retryLane:0};function _s(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ls(e,t,n){var r,i=t.pendingProps,a=ea.current,s=!1,l=0!==(128&t.flags);if((r=l)||(r=(null===e||null!==e.memoizedState)&&0!==(2&a)),r?(s=!0,t.flags&=-129):null!==e&&null===e.memoizedState||(a|=1),Pi(ea,1&a),null===e)return co(t),null!==(e=t.memoizedState)&&null!==(e=e.dehydrated)?(0===(1&t.mode)?t.lanes=1:"$!"===e.data?t.lanes=8:t.lanes=1073741824,null):(l=i.children,e=i.fallback,s?(i=t.mode,s=t.child,l={mode:"hidden",children:l},0===(1&i)&&null!==s?(s.childLanes=0,s.pendingProps=l):s=_c(l,i,0,null),e=Nc(e,i,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=_s(n),t.memoizedState=Ns,e):Is(t,l));if(null!==(a=e.memoizedState)&&null!==(r=a.dehydrated))return function(e,t,n,r,i,a,s){if(n)return 256&t.flags?(t.flags&=-257,Fs(e,t,s,r=us(Error(o(422))))):null!==t.memoizedState?(t.child=e.child,t.flags|=128,null):(a=r.fallback,i=t.mode,r=_c({mode:"visible",children:r.children},i,0,null),(a=Nc(a,i,s,null)).flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,0!==(1&t.mode)&&wo(t,e.child,null,s),t.child.memoizedState=_s(s),t.memoizedState=Ns,a);if(0===(1&t.mode))return Fs(e,t,s,null);if("$!"===i.data){if(r=i.nextSibling&&i.nextSibling.dataset)var l=r.dgst;return r=l,Fs(e,t,s,r=us(a=Error(o(419)),r,void 0))}if(l=0!==(s&e.childLanes),xs||l){if(null!==(r=zl)){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}0!==(i=0!==(i&(r.suspendedLanes|s))?0:i)&&i!==a.retryLane&&(a.retryLane=i,No(e,i),nc(r,e,i,-1))}return mc(),Fs(e,t,s,r=us(Error(o(421))))}return"$?"===i.data?(t.flags|=128,t.child=e.child,t=Ec.bind(null,e),i._reactRetry=t,null):(e=a.treeContext,ro=ci(i.nextSibling),no=t,io=!0,oo=null,null!==e&&(Yi[Ki++]=Qi,Yi[Ki++]=Xi,Yi[Ki++]=Gi,Qi=e.id,Xi=e.overflow,Gi=t),t=Is(t,r.children),t.flags|=4096,t)}(e,t,l,i,r,a,n);if(s){s=i.fallback,l=t.mode,r=(a=e.child).sibling;var c={mode:"hidden",children:i.children};return 0===(1&l)&&t.child!==a?((i=t.child).childLanes=0,i.pendingProps=c,t.deletions=null):(i=Oc(a,c)).subtreeFlags=14680064&a.subtreeFlags,null!==r?s=Oc(r,s):(s=Nc(s,l,n,null)).flags|=2,s.return=t,i.return=t,i.sibling=s,t.child=i,i=s,s=t.child,l=null===(l=e.child.memoizedState)?_s(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},s.memoizedState=l,s.childLanes=e.childLanes&~n,t.memoizedState=Ns,i}return e=(s=e.child).sibling,i=Oc(s,{mode:"visible",children:i.children}),0===(1&t.mode)&&(i.lanes=n),i.return=t,i.sibling=null,null!==e&&(null===(n=t.deletions)?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=i,t.memoizedState=null,i}function Is(e,t){return(t=_c({mode:"visible",children:t},e.mode,0,null)).return=e,e.child=t}function Fs(e,t,n,r){return null!==r&&mo(r),wo(t,e.child,null,n),(e=Is(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function Vs(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),zo(e.return,t,n)}function Us(e,t,n,r,i){var o=e.memoizedState;null===o?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Bs(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(bs(e,t,r.children,n),0!==(2&(r=ea.current)))r=1&r|2,t.flags|=128;else{if(null!==e&&0!==(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&Vs(e,n,t);else if(19===e.tag)Vs(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Pi(ea,r),0===(1&t.mode))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;null!==n;)null!==(e=n.alternate)&&null===ta(e)&&(i=n),n=n.sibling;null===(n=i)?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Us(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;null!==i;){if(null!==(e=i.alternate)&&null===ta(e)){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Us(t,!0,n,null,o);break;case"together":Us(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function $s(e,t){0===(1&t.mode)&&null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ws(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),_l|=t.lanes,0===(n&t.childLanes))return null;if(null!==e&&t.child!==e.child)throw Error(o(153));if(null!==t.child){for(n=Oc(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=Oc(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function Hs(e,t){if(!io)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function qs(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;null!==i;)n|=i.lanes|i.childLanes,r|=14680064&i.subtreeFlags,r|=14680064&i.flags,i.return=e,i=i.sibling;else for(i=e.child;null!==i;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Ys(e,t,n){var r=t.pendingProps;switch(to(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qs(t),null;case 1:case 17:return Ri(t.type)&&Oi(),qs(t),null;case 3:return r=t.stateNode,Xo(),Ci(zi),Ci(Ti),ra(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),null!==e&&null!==e.child||(po(t)?t.flags|=4:null===e||e.memoizedState.isDehydrated&&0===(256&t.flags)||(t.flags|=1024,null!==oo&&(ac(oo),oo=null))),Rs(e,t),qs(t),null;case 5:Jo(t);var i=Go(Ko.current);if(n=t.type,null!==e&&null!=t.stateNode)Os(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(null===t.stateNode)throw Error(o(166));return qs(t),null}if(e=Go(qo.current),po(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[pi]=t,r[hi]=a,e=0!==(1&t.mode),n){case"dialog":Fr("cancel",r),Fr("close",r);break;case"iframe":case"object":case"embed":Fr("load",r);break;case"video":case"audio":for(i=0;i<Nr.length;i++)Fr(Nr[i],r);break;case"source":Fr("error",r);break;case"img":case"image":case"link":Fr("error",r),Fr("load",r);break;case"details":Fr("toggle",r);break;case"input":Q(r,a),Fr("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},Fr("invalid",r);break;case"textarea":ie(r,a),Fr("invalid",r)}for(var l in ve(n,a),i=null,a)if(a.hasOwnProperty(l)){var c=a[l];"children"===l?"string"===typeof c?r.textContent!==c&&(!0!==a.suppressHydrationWarning&&Zr(r.textContent,c,e),i=["children",c]):"number"===typeof c&&r.textContent!==""+c&&(!0!==a.suppressHydrationWarning&&Zr(r.textContent,c,e),i=["children",""+c]):s.hasOwnProperty(l)&&null!=c&&"onScroll"===l&&Fr("scroll",r)}switch(n){case"input":q(r),J(r,a,!0);break;case"textarea":q(r),ae(r);break;case"select":case"option":break;default:"function"===typeof a.onClick&&(r.onclick=Jr)}r=i,t.updateQueue=r,null!==r&&(t.flags|=4)}else{l=9===i.nodeType?i:i.ownerDocument,"http://www.w3.org/1999/xhtml"===e&&(e=se(n)),"http://www.w3.org/1999/xhtml"===e?"script"===n?((e=l.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):"string"===typeof r.is?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),"select"===n&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[pi]=t,e[hi]=r,Ms(e,t,!1,!1),t.stateNode=e;e:{switch(l=xe(n,r),n){case"dialog":Fr("cancel",e),Fr("close",e),i=r;break;case"iframe":case"object":case"embed":Fr("load",e),i=r;break;case"video":case"audio":for(i=0;i<Nr.length;i++)Fr(Nr[i],e);i=r;break;case"source":Fr("error",e),i=r;break;case"img":case"image":case"link":Fr("error",e),Fr("load",e),i=r;break;case"details":Fr("toggle",e),i=r;break;case"input":Q(e,r),i=G(e,r),Fr("invalid",e);break;case"option":default:i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=L({},r,{value:void 0}),Fr("invalid",e);break;case"textarea":ie(e,r),i=re(e,r),Fr("invalid",e)}for(a in ve(n,i),c=i)if(c.hasOwnProperty(a)){var u=c[a];"style"===a?ge(e,u):"dangerouslySetInnerHTML"===a?null!=(u=u?u.__html:void 0)&&de(e,u):"children"===a?"string"===typeof u?("textarea"!==n||""!==u)&&pe(e,u):"number"===typeof u&&pe(e,""+u):"suppressContentEditableWarning"!==a&&"suppressHydrationWarning"!==a&&"autoFocus"!==a&&(s.hasOwnProperty(a)?null!=u&&"onScroll"===a&&Fr("scroll",e):null!=u&&x(e,a,u,l))}switch(n){case"input":q(e),J(e,r,!1);break;case"textarea":q(e),ae(e);break;case"option":null!=r.value&&e.setAttribute("value",""+W(r.value));break;case"select":e.multiple=!!r.multiple,null!=(a=r.value)?ne(e,!!r.multiple,a,!1):null!=r.defaultValue&&ne(e,!!r.multiple,r.defaultValue,!0);break;default:"function"===typeof i.onClick&&(e.onclick=Jr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}null!==t.ref&&(t.flags|=512,t.flags|=2097152)}return qs(t),null;case 6:if(e&&null!=t.stateNode)As(e,t,e.memoizedProps,r);else{if("string"!==typeof r&&null===t.stateNode)throw Error(o(166));if(n=Go(Ko.current),Go(qo.current),po(t)){if(r=t.stateNode,n=t.memoizedProps,r[pi]=t,(a=r.nodeValue!==n)&&null!==(e=no))switch(e.tag){case 3:Zr(r.nodeValue,n,0!==(1&e.mode));break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&Zr(r.nodeValue,n,0!==(1&e.mode))}a&&(t.flags|=4)}else(r=(9===n.nodeType?n:n.ownerDocument).createTextNode(r))[pi]=t,t.stateNode=r}return qs(t),null;case 13:if(Ci(ea),r=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(io&&null!==ro&&0!==(1&t.mode)&&0===(128&t.flags))ho(),fo(),t.flags|=98560,a=!1;else if(a=po(t),null!==r&&null!==r.dehydrated){if(null===e){if(!a)throw Error(o(318));if(!(a=null!==(a=t.memoizedState)?a.dehydrated:null))throw Error(o(317));a[pi]=t}else fo(),0===(128&t.flags)&&(t.memoizedState=null),t.flags|=4;qs(t),a=!1}else null!==oo&&(ac(oo),oo=null),a=!0;if(!a)return 65536&t.flags?t:null}return 0!==(128&t.flags)?(t.lanes=n,t):((r=null!==r)!==(null!==e&&null!==e.memoizedState)&&r&&(t.child.flags|=8192,0!==(1&t.mode)&&(null===e||0!==(1&ea.current)?0===Al&&(Al=3):mc())),null!==t.updateQueue&&(t.flags|=4),qs(t),null);case 4:return Xo(),Rs(e,t),null===e&&Br(t.stateNode.containerInfo),qs(t),null;case 10:return To(t.type._context),qs(t),null;case 19:if(Ci(ea),null===(a=t.memoizedState))return qs(t),null;if(r=0!==(128&t.flags),null===(l=a.rendering))if(r)Hs(a,!1);else{if(0!==Al||null!==e&&0!==(128&e.flags))for(e=t.child;null!==e;){if(null!==(l=ta(e))){for(t.flags|=128,Hs(a,!1),null!==(r=l.updateQueue)&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;null!==n;)e=r,(a=n).flags&=14680066,null===(l=a.alternate)?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=l.childLanes,a.lanes=l.lanes,a.child=l.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=l.memoizedProps,a.memoizedState=l.memoizedState,a.updateQueue=l.updateQueue,a.type=l.type,e=l.dependencies,a.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Pi(ea,1&ea.current|2),t.child}e=e.sibling}null!==a.tail&&Xe()>Bl&&(t.flags|=128,r=!0,Hs(a,!1),t.lanes=4194304)}else{if(!r)if(null!==(e=ta(l))){if(t.flags|=128,r=!0,null!==(n=e.updateQueue)&&(t.updateQueue=n,t.flags|=4),Hs(a,!0),null===a.tail&&"hidden"===a.tailMode&&!l.alternate&&!io)return qs(t),null}else 2*Xe()-a.renderingStartTime>Bl&&1073741824!==n&&(t.flags|=128,r=!0,Hs(a,!1),t.lanes=4194304);a.isBackwards?(l.sibling=t.child,t.child=l):(null!==(n=a.last)?n.sibling=l:t.child=l,a.last=l)}return null!==a.tail?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=Xe(),t.sibling=null,n=ea.current,Pi(ea,r?1&n|2:1&n),t):(qs(t),null);case 22:case 23:return dc(),r=null!==t.memoizedState,null!==e&&null!==e.memoizedState!==r&&(t.flags|=8192),r&&0!==(1&t.mode)?0!==(1073741824&Rl)&&(qs(t),6&t.subtreeFlags&&(t.flags|=8192)):qs(t),null;case 24:case 25:return null}throw Error(o(156,t.tag))}function Ks(e,t){switch(to(t),t.tag){case 1:return Ri(t.type)&&Oi(),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return Xo(),Ci(zi),Ci(Ti),ra(),0!==(65536&(e=t.flags))&&0===(128&e)?(t.flags=-65537&e|128,t):null;case 5:return Jo(t),null;case 13:if(Ci(ea),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(o(340));fo()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return Ci(ea),null;case 4:return Xo(),null;case 10:return To(t.type._context),null;case 22:case 23:return dc(),null;default:return null}}Ms=function(e,t){for(var n=t.child;null!==n;){if(5===n.tag||6===n.tag)e.appendChild(n.stateNode);else if(4!==n.tag&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===t)break;for(;null===n.sibling;){if(null===n.return||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},Rs=function(){},Os=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Go(qo.current);var o,a=null;switch(n){case"input":i=G(e,i),r=G(e,r),a=[];break;case"select":i=L({},i,{value:void 0}),r=L({},r,{value:void 0}),a=[];break;case"textarea":i=re(e,i),r=re(e,r),a=[];break;default:"function"!==typeof i.onClick&&"function"===typeof r.onClick&&(e.onclick=Jr)}for(u in ve(n,r),n=null,i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&null!=i[u])if("style"===u){var l=i[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else"dangerouslySetInnerHTML"!==u&&"children"!==u&&"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&"autoFocus"!==u&&(s.hasOwnProperty(u)?a||(a=[]):(a=a||[]).push(u,null));for(u in r){var c=r[u];if(l=null!=i?i[u]:void 0,r.hasOwnProperty(u)&&c!==l&&(null!=c||null!=l))if("style"===u)if(l){for(o in l)!l.hasOwnProperty(o)||c&&c.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in c)c.hasOwnProperty(o)&&l[o]!==c[o]&&(n||(n={}),n[o]=c[o])}else n||(a||(a=[]),a.push(u,n)),n=c;else"dangerouslySetInnerHTML"===u?(c=c?c.__html:void 0,l=l?l.__html:void 0,null!=c&&l!==c&&(a=a||[]).push(u,c)):"children"===u?"string"!==typeof c&&"number"!==typeof c||(a=a||[]).push(u,""+c):"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&(s.hasOwnProperty(u)?(null!=c&&"onScroll"===u&&Fr("scroll",e),a||l===c||(a=[])):(a=a||[]).push(u,c))}n&&(a=a||[]).push("style",n);var u=a;(t.updateQueue=u)&&(t.flags|=4)}},As=function(e,t,n,r){n!==r&&(t.flags|=4)};var Gs=!1,Qs=!1,Xs="function"===typeof WeakSet?WeakSet:Set,Zs=null;function Js(e,t){var n=e.ref;if(null!==n)if("function"===typeof n)try{n(null)}catch(r){Sc(e,t,r)}else n.current=null}function el(e,t,n){try{n()}catch(r){Sc(e,t,r)}}var tl=!1;function nl(e,t,n){var r=t.updateQueue;if(null!==(r=null!==r?r.lastEffect:null)){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,void 0!==o&&el(t,n,o)}i=i.next}while(i!==r)}}function rl(e,t){if(null!==(t=null!==(t=t.updateQueue)?t.lastEffect:null)){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function il(e){var t=e.ref;if(null!==t){var n=e.stateNode;e.tag,e=n,"function"===typeof t?t(e):t.current=e}}function ol(e){var t=e.alternate;null!==t&&(e.alternate=null,ol(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&(delete t[pi],delete t[hi],delete t[mi],delete t[gi],delete t[yi])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function al(e){return 5===e.tag||3===e.tag||4===e.tag}function sl(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||al(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function ll(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?8===n.nodeType?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(8===n.nodeType?(t=n.parentNode).insertBefore(e,n):(t=n).appendChild(e),null!==(n=n._reactRootContainer)&&void 0!==n||null!==t.onclick||(t.onclick=Jr));else if(4!==r&&null!==(e=e.child))for(ll(e,t,n),e=e.sibling;null!==e;)ll(e,t,n),e=e.sibling}function cl(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==r&&null!==(e=e.child))for(cl(e,t,n),e=e.sibling;null!==e;)cl(e,t,n),e=e.sibling}var ul=null,dl=!1;function pl(e,t,n){for(n=n.child;null!==n;)hl(e,t,n),n=n.sibling}function hl(e,t,n){if(ot&&"function"===typeof ot.onCommitFiberUnmount)try{ot.onCommitFiberUnmount(it,n)}catch(s){}switch(n.tag){case 5:Qs||Js(n,t);case 6:var r=ul,i=dl;ul=null,pl(e,t,n),dl=i,null!==(ul=r)&&(dl?(e=ul,n=n.stateNode,8===e.nodeType?e.parentNode.removeChild(n):e.removeChild(n)):ul.removeChild(n.stateNode));break;case 18:null!==ul&&(dl?(e=ul,n=n.stateNode,8===e.nodeType?li(e.parentNode,n):1===e.nodeType&&li(e,n),Bt(e)):li(ul,n.stateNode));break;case 4:r=ul,i=dl,ul=n.stateNode.containerInfo,dl=!0,pl(e,t,n),ul=r,dl=i;break;case 0:case 11:case 14:case 15:if(!Qs&&(null!==(r=n.updateQueue)&&null!==(r=r.lastEffect))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,void 0!==a&&(0!==(2&o)||0!==(4&o))&&el(n,t,a),i=i.next}while(i!==r)}pl(e,t,n);break;case 1:if(!Qs&&(Js(n,t),"function"===typeof(r=n.stateNode).componentWillUnmount))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){Sc(n,t,s)}pl(e,t,n);break;case 21:pl(e,t,n);break;case 22:1&n.mode?(Qs=(r=Qs)||null!==n.memoizedState,pl(e,t,n),Qs=r):pl(e,t,n);break;default:pl(e,t,n)}}function fl(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var n=e.stateNode;null===n&&(n=e.stateNode=new Xs),t.forEach(function(t){var r=Tc.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))})}}function ml(e,t){var n=t.deletions;if(null!==n)for(var r=0;r<n.length;r++){var i=n[r];try{var a=e,s=t,l=s;e:for(;null!==l;){switch(l.tag){case 5:ul=l.stateNode,dl=!1;break e;case 3:case 4:ul=l.stateNode.containerInfo,dl=!0;break e}l=l.return}if(null===ul)throw Error(o(160));hl(a,s,i),ul=null,dl=!1;var c=i.alternate;null!==c&&(c.return=null),i.return=null}catch(u){Sc(i,t,u)}}if(12854&t.subtreeFlags)for(t=t.child;null!==t;)gl(t,e),t=t.sibling}function gl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ml(t,e),yl(e),4&r){try{nl(3,e,e.return),rl(3,e)}catch(g){Sc(e,e.return,g)}try{nl(5,e,e.return)}catch(g){Sc(e,e.return,g)}}break;case 1:ml(t,e),yl(e),512&r&&null!==n&&Js(n,n.return);break;case 5:if(ml(t,e),yl(e),512&r&&null!==n&&Js(n,n.return),32&e.flags){var i=e.stateNode;try{pe(i,"")}catch(g){Sc(e,e.return,g)}}if(4&r&&null!=(i=e.stateNode)){var a=e.memoizedProps,s=null!==n?n.memoizedProps:a,l=e.type,c=e.updateQueue;if(e.updateQueue=null,null!==c)try{"input"===l&&"radio"===a.type&&null!=a.name&&X(i,a),xe(l,s);var u=xe(l,a);for(s=0;s<c.length;s+=2){var d=c[s],p=c[s+1];"style"===d?ge(i,p):"dangerouslySetInnerHTML"===d?de(i,p):"children"===d?pe(i,p):x(i,d,p,u)}switch(l){case"input":Z(i,a);break;case"textarea":oe(i,a);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var f=a.value;null!=f?ne(i,!!a.multiple,f,!1):h!==!!a.multiple&&(null!=a.defaultValue?ne(i,!!a.multiple,a.defaultValue,!0):ne(i,!!a.multiple,a.multiple?[]:"",!1))}i[hi]=a}catch(g){Sc(e,e.return,g)}}break;case 6:if(ml(t,e),yl(e),4&r){if(null===e.stateNode)throw Error(o(162));i=e.stateNode,a=e.memoizedProps;try{i.nodeValue=a}catch(g){Sc(e,e.return,g)}}break;case 3:if(ml(t,e),yl(e),4&r&&null!==n&&n.memoizedState.isDehydrated)try{Bt(t.containerInfo)}catch(g){Sc(e,e.return,g)}break;case 4:default:ml(t,e),yl(e);break;case 13:ml(t,e),yl(e),8192&(i=e.child).flags&&(a=null!==i.memoizedState,i.stateNode.isHidden=a,!a||null!==i.alternate&&null!==i.alternate.memoizedState||(Ul=Xe())),4&r&&fl(e);break;case 22:if(d=null!==n&&null!==n.memoizedState,1&e.mode?(Qs=(u=Qs)||d,ml(t,e),Qs=u):ml(t,e),yl(e),8192&r){if(u=null!==e.memoizedState,(e.stateNode.isHidden=u)&&!d&&0!==(1&e.mode))for(Zs=e,d=e.child;null!==d;){for(p=Zs=d;null!==Zs;){switch(f=(h=Zs).child,h.tag){case 0:case 11:case 14:case 15:nl(4,h,h.return);break;case 1:Js(h,h.return);var m=h.stateNode;if("function"===typeof m.componentWillUnmount){r=h,n=h.return;try{t=r,m.props=t.memoizedProps,m.state=t.memoizedState,m.componentWillUnmount()}catch(g){Sc(r,n,g)}}break;case 5:Js(h,h.return);break;case 22:if(null!==h.memoizedState){wl(p);continue}}null!==f?(f.return=h,Zs=f):wl(p)}d=d.sibling}e:for(d=null,p=e;;){if(5===p.tag){if(null===d){d=p;try{i=p.stateNode,u?"function"===typeof(a=i.style).setProperty?a.setProperty("display","none","important"):a.display="none":(l=p.stateNode,s=void 0!==(c=p.memoizedProps.style)&&null!==c&&c.hasOwnProperty("display")?c.display:null,l.style.display=me("display",s))}catch(g){Sc(e,e.return,g)}}}else if(6===p.tag){if(null===d)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(g){Sc(e,e.return,g)}}else if((22!==p.tag&&23!==p.tag||null===p.memoizedState||p===e)&&null!==p.child){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;null===p.sibling;){if(null===p.return||p.return===e)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:ml(t,e),yl(e),4&r&&fl(e);case 21:}}function yl(e){var t=e.flags;if(2&t){try{e:{for(var n=e.return;null!==n;){if(al(n)){var r=n;break e}n=n.return}throw Error(o(160))}switch(r.tag){case 5:var i=r.stateNode;32&r.flags&&(pe(i,""),r.flags&=-33),cl(e,sl(e),i);break;case 3:case 4:var a=r.stateNode.containerInfo;ll(e,sl(e),a);break;default:throw Error(o(161))}}catch(s){Sc(e,e.return,s)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function vl(e,t,n){Zs=e,xl(e,t,n)}function xl(e,t,n){for(var r=0!==(1&e.mode);null!==Zs;){var i=Zs,o=i.child;if(22===i.tag&&r){var a=null!==i.memoizedState||Gs;if(!a){var s=i.alternate,l=null!==s&&null!==s.memoizedState||Qs;s=Gs;var c=Qs;if(Gs=a,(Qs=l)&&!c)for(Zs=i;null!==Zs;)l=(a=Zs).child,22===a.tag&&null!==a.memoizedState?kl(i):null!==l?(l.return=a,Zs=l):kl(i);for(;null!==o;)Zs=o,xl(o,t,n),o=o.sibling;Zs=i,Gs=s,Qs=c}bl(e)}else 0!==(8772&i.subtreeFlags)&&null!==o?(o.return=i,Zs=o):bl(e)}}function bl(e){for(;null!==Zs;){var t=Zs;if(0!==(8772&t.flags)){var n=t.alternate;try{if(0!==(8772&t.flags))switch(t.tag){case 0:case 11:case 15:Qs||rl(5,t);break;case 1:var r=t.stateNode;if(4&t.flags&&!Qs)if(null===n)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:ns(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;null!==a&&Wo(t,a,r);break;case 3:var s=t.updateQueue;if(null!==s){if(n=null,null!==t.child)switch(t.child.tag){case 5:case 1:n=t.child.stateNode}Wo(t,s,n)}break;case 5:var l=t.stateNode;if(null===n&&4&t.flags){n=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:case 4:case 12:case 19:case 17:case 21:case 22:case 23:case 25:break;case 13:if(null===t.memoizedState){var u=t.alternate;if(null!==u){var d=u.memoizedState;if(null!==d){var p=d.dehydrated;null!==p&&Bt(p)}}}break;default:throw Error(o(163))}Qs||512&t.flags&&il(t)}catch(h){Sc(t,t.return,h)}}if(t===e){Zs=null;break}if(null!==(n=t.sibling)){n.return=t.return,Zs=n;break}Zs=t.return}}function wl(e){for(;null!==Zs;){var t=Zs;if(t===e){Zs=null;break}var n=t.sibling;if(null!==n){n.return=t.return,Zs=n;break}Zs=t.return}}function kl(e){for(;null!==Zs;){var t=Zs;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{rl(4,t)}catch(l){Sc(t,n,l)}break;case 1:var r=t.stateNode;if("function"===typeof r.componentDidMount){var i=t.return;try{r.componentDidMount()}catch(l){Sc(t,i,l)}}var o=t.return;try{il(t)}catch(l){Sc(t,o,l)}break;case 5:var a=t.return;try{il(t)}catch(l){Sc(t,a,l)}}}catch(l){Sc(t,t.return,l)}if(t===e){Zs=null;break}var s=t.sibling;if(null!==s){s.return=t.return,Zs=s;break}Zs=t.return}}var jl,Sl=Math.ceil,Cl=b.ReactCurrentDispatcher,Pl=b.ReactCurrentOwner,El=b.ReactCurrentBatchConfig,Tl=0,zl=null,Dl=null,Ml=0,Rl=0,Ol=Si(0),Al=0,Nl=null,_l=0,Ll=0,Il=0,Fl=null,Vl=null,Ul=0,Bl=1/0,$l=null,Wl=!1,Hl=null,ql=null,Yl=!1,Kl=null,Gl=0,Ql=0,Xl=null,Zl=-1,Jl=0;function ec(){return 0!==(6&Tl)?Xe():-1!==Zl?Zl:Zl=Xe()}function tc(e){return 0===(1&e.mode)?1:0!==(2&Tl)&&0!==Ml?Ml&-Ml:null!==go.transition?(0===Jl&&(Jl=mt()),Jl):0!==(e=xt)?e:e=void 0===(e=window.event)?16:Qt(e.type)}function nc(e,t,n,r){if(50<Ql)throw Ql=0,Xl=null,Error(o(185));yt(e,n,r),0!==(2&Tl)&&e===zl||(e===zl&&(0===(2&Tl)&&(Ll|=n),4===Al&&sc(e,Ml)),rc(e,r),1===n&&0===Tl&&0===(1&t.mode)&&(Bl=Xe()+500,Fi&&Bi()))}function rc(e,t){var n=e.callbackNode;!function(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-at(o),s=1<<a,l=i[a];-1===l?0!==(s&n)&&0===(s&r)||(i[a]=ht(s,t)):l<=t&&(e.expiredLanes|=s),o&=~s}}(e,t);var r=pt(e,e===zl?Ml:0);if(0===r)null!==n&&Ke(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(null!=n&&Ke(n),1===t)0===e.tag?function(e){Fi=!0,Ui(e)}(lc.bind(null,e)):Ui(lc.bind(null,e)),ai(function(){0===(6&Tl)&&Bi()}),n=null;else{switch(bt(r)){case 1:n=Je;break;case 4:n=et;break;case 16:default:n=tt;break;case 536870912:n=rt}n=zc(n,ic.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function ic(e,t){if(Zl=-1,Jl=0,0!==(6&Tl))throw Error(o(327));var n=e.callbackNode;if(kc()&&e.callbackNode!==n)return null;var r=pt(e,e===zl?Ml:0);if(0===r)return null;if(0!==(30&r)||0!==(r&e.expiredLanes)||t)t=gc(e,r);else{t=r;var i=Tl;Tl|=2;var a=fc();for(zl===e&&Ml===t||($l=null,Bl=Xe()+500,pc(e,t));;)try{vc();break}catch(l){hc(e,l)}Eo(),Cl.current=a,Tl=i,null!==Dl?t=0:(zl=null,Ml=0,t=Al)}if(0!==t){if(2===t&&(0!==(i=ft(e))&&(r=i,t=oc(e,i))),1===t)throw n=Nl,pc(e,0),sc(e,r),rc(e,Xe()),n;if(6===t)sc(e,r);else{if(i=e.current.alternate,0===(30&r)&&!function(e){for(var t=e;;){if(16384&t.flags){var n=t.updateQueue;if(null!==n&&null!==(n=n.stores))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!sr(o(),i))return!1}catch(s){return!1}}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}(i)&&(2===(t=gc(e,r))&&(0!==(a=ft(e))&&(r=a,t=oc(e,a))),1===t))throw n=Nl,pc(e,0),sc(e,r),rc(e,Xe()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(o(345));case 2:case 5:wc(e,Vl,$l);break;case 3:if(sc(e,r),(130023424&r)===r&&10<(t=Ul+500-Xe())){if(0!==pt(e,0))break;if(((i=e.suspendedLanes)&r)!==r){ec(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=ri(wc.bind(null,e,Vl,$l),t);break}wc(e,Vl,$l);break;case 4:if(sc(e,r),(4194240&r)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-at(r);a=1<<s,(s=t[s])>i&&(i=s),r&=~a}if(r=i,10<(r=(120>(r=Xe()-r)?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Sl(r/1960))-r)){e.timeoutHandle=ri(wc.bind(null,e,Vl,$l),r);break}wc(e,Vl,$l);break;default:throw Error(o(329))}}}return rc(e,Xe()),e.callbackNode===n?ic.bind(null,e):null}function oc(e,t){var n=Fl;return e.current.memoizedState.isDehydrated&&(pc(e,t).flags|=256),2!==(e=gc(e,t))&&(t=Vl,Vl=n,null!==t&&ac(t)),e}function ac(e){null===Vl?Vl=e:Vl.push.apply(Vl,e)}function sc(e,t){for(t&=~Il,t&=~Ll,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-at(t),r=1<<n;e[n]=-1,t&=~r}}function lc(e){if(0!==(6&Tl))throw Error(o(327));kc();var t=pt(e,0);if(0===(1&t))return rc(e,Xe()),null;var n=gc(e,t);if(0!==e.tag&&2===n){var r=ft(e);0!==r&&(t=r,n=oc(e,r))}if(1===n)throw n=Nl,pc(e,0),sc(e,t),rc(e,Xe()),n;if(6===n)throw Error(o(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,wc(e,Vl,$l),rc(e,Xe()),null}function cc(e,t){var n=Tl;Tl|=1;try{return e(t)}finally{0===(Tl=n)&&(Bl=Xe()+500,Fi&&Bi())}}function uc(e){null!==Kl&&0===Kl.tag&&0===(6&Tl)&&kc();var t=Tl;Tl|=1;var n=El.transition,r=xt;try{if(El.transition=null,xt=1,e)return e()}finally{xt=r,El.transition=n,0===(6&(Tl=t))&&Bi()}}function dc(){Rl=Ol.current,Ci(Ol)}function pc(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(-1!==n&&(e.timeoutHandle=-1,ii(n)),null!==Dl)for(n=Dl.return;null!==n;){var r=n;switch(to(r),r.tag){case 1:null!==(r=r.type.childContextTypes)&&void 0!==r&&Oi();break;case 3:Xo(),Ci(zi),Ci(Ti),ra();break;case 5:Jo(r);break;case 4:Xo();break;case 13:case 19:Ci(ea);break;case 10:To(r.type._context);break;case 22:case 23:dc()}n=n.return}if(zl=e,Dl=e=Oc(e.current,null),Ml=Rl=t,Al=0,Nl=null,Il=Ll=_l=0,Vl=Fl=null,null!==Ro){for(t=0;t<Ro.length;t++)if(null!==(r=(n=Ro[t]).interleaved)){n.interleaved=null;var i=r.next,o=n.pending;if(null!==o){var a=o.next;o.next=i,r.next=a}n.pending=r}Ro=null}return e}function hc(e,t){for(;;){var n=Dl;try{if(Eo(),ia.current=Za,ua){for(var r=sa.memoizedState;null!==r;){var i=r.queue;null!==i&&(i.pending=null),r=r.next}ua=!1}if(aa=0,ca=la=sa=null,da=!1,pa=0,Pl.current=null,null===n||null===n.return){Al=1,Nl=t,Dl=null;break}e:{var a=e,s=n.return,l=n,c=t;if(t=Ml,l.flags|=32768,null!==c&&"object"===typeof c&&"function"===typeof c.then){var u=c,d=l,p=d.tag;if(0===(1&d.mode)&&(0===p||11===p||15===p)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var f=gs(s);if(null!==f){f.flags&=-257,ys(f,s,l,0,t),1&f.mode&&ms(a,u,t),c=u;var m=(t=f).updateQueue;if(null===m){var g=new Set;g.add(c),t.updateQueue=g}else m.add(c);break e}if(0===(1&t)){ms(a,u,t),mc();break e}c=Error(o(426))}else if(io&&1&l.mode){var y=gs(s);if(null!==y){0===(65536&y.flags)&&(y.flags|=256),ys(y,s,l,0,t),mo(cs(c,l));break e}}a=c=cs(c,l),4!==Al&&(Al=2),null===Fl?Fl=[a]:Fl.push(a),a=s;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t,Bo(a,hs(0,c,t));break e;case 1:l=c;var v=a.type,x=a.stateNode;if(0===(128&a.flags)&&("function"===typeof v.getDerivedStateFromError||null!==x&&"function"===typeof x.componentDidCatch&&(null===ql||!ql.has(x)))){a.flags|=65536,t&=-t,a.lanes|=t,Bo(a,fs(a,l,t));break e}}a=a.return}while(null!==a)}bc(n)}catch(b){t=b,Dl===n&&null!==n&&(Dl=n=n.return);continue}break}}function fc(){var e=Cl.current;return Cl.current=Za,null===e?Za:e}function mc(){0!==Al&&3!==Al&&2!==Al||(Al=4),null===zl||0===(268435455&_l)&&0===(268435455&Ll)||sc(zl,Ml)}function gc(e,t){var n=Tl;Tl|=2;var r=fc();for(zl===e&&Ml===t||($l=null,pc(e,t));;)try{yc();break}catch(i){hc(e,i)}if(Eo(),Tl=n,Cl.current=r,null!==Dl)throw Error(o(261));return zl=null,Ml=0,Al}function yc(){for(;null!==Dl;)xc(Dl)}function vc(){for(;null!==Dl&&!Ge();)xc(Dl)}function xc(e){var t=jl(e.alternate,e,Rl);e.memoizedProps=e.pendingProps,null===t?bc(e):Dl=t,Pl.current=null}function bc(e){var t=e;do{var n=t.alternate;if(e=t.return,0===(32768&t.flags)){if(null!==(n=Ys(n,t,Rl)))return void(Dl=n)}else{if(null!==(n=Ks(n,t)))return n.flags&=32767,void(Dl=n);if(null===e)return Al=6,void(Dl=null);e.flags|=32768,e.subtreeFlags=0,e.deletions=null}if(null!==(t=t.sibling))return void(Dl=t);Dl=t=e}while(null!==t);0===Al&&(Al=5)}function wc(e,t,n){var r=xt,i=El.transition;try{El.transition=null,xt=1,function(e,t,n,r){do{kc()}while(null!==Kl);if(0!==(6&Tl))throw Error(o(327));n=e.finishedWork;var i=e.finishedLanes;if(null===n)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(o(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(function(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-at(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}(e,a),e===zl&&(Dl=zl=null,Ml=0),0===(2064&n.subtreeFlags)&&0===(2064&n.flags)||Yl||(Yl=!0,zc(tt,function(){return kc(),null})),a=0!==(15990&n.flags),0!==(15990&n.subtreeFlags)||a){a=El.transition,El.transition=null;var s=xt;xt=1;var l=Tl;Tl|=4,Pl.current=null,function(e,t){if(ei=Wt,hr(e=pr())){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var r=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(r&&0!==r.rangeCount){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch(w){n=null;break e}var s=0,l=-1,c=-1,u=0,d=0,p=e,h=null;t:for(;;){for(var f;p!==n||0!==i&&3!==p.nodeType||(l=s+i),p!==a||0!==r&&3!==p.nodeType||(c=s+r),3===p.nodeType&&(s+=p.nodeValue.length),null!==(f=p.firstChild);)h=p,p=f;for(;;){if(p===e)break t;if(h===n&&++u===i&&(l=s),h===a&&++d===r&&(c=s),null!==(f=p.nextSibling))break;h=(p=h).parentNode}p=f}n=-1===l||-1===c?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(ti={focusedElem:e,selectionRange:n},Wt=!1,Zs=t;null!==Zs;)if(e=(t=Zs).child,0!==(1028&t.subtreeFlags)&&null!==e)e.return=t,Zs=e;else for(;null!==Zs;){t=Zs;try{var m=t.alternate;if(0!==(1024&t.flags))switch(t.tag){case 0:case 11:case 15:case 5:case 6:case 4:case 17:break;case 1:if(null!==m){var g=m.memoizedProps,y=m.memoizedState,v=t.stateNode,x=v.getSnapshotBeforeUpdate(t.elementType===t.type?g:ns(t.type,g),y);v.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var b=t.stateNode.containerInfo;1===b.nodeType?b.textContent="":9===b.nodeType&&b.documentElement&&b.removeChild(b.documentElement);break;default:throw Error(o(163))}}catch(w){Sc(t,t.return,w)}if(null!==(e=t.sibling)){e.return=t.return,Zs=e;break}Zs=t.return}m=tl,tl=!1}(e,n),gl(n,e),fr(ti),Wt=!!ei,ti=ei=null,e.current=n,vl(n,e,i),Qe(),Tl=l,xt=s,El.transition=a}else e.current=n;if(Yl&&(Yl=!1,Kl=e,Gl=i),a=e.pendingLanes,0===a&&(ql=null),function(e){if(ot&&"function"===typeof ot.onCommitFiberRoot)try{ot.onCommitFiberRoot(it,e,void 0,128===(128&e.current.flags))}catch(t){}}(n.stateNode),rc(e,Xe()),null!==t)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Wl)throw Wl=!1,e=Hl,Hl=null,e;0!==(1&Gl)&&0!==e.tag&&kc(),a=e.pendingLanes,0!==(1&a)?e===Xl?Ql++:(Ql=0,Xl=e):Ql=0,Bi()}(e,t,n,r)}finally{El.transition=i,xt=r}return null}function kc(){if(null!==Kl){var e=bt(Gl),t=El.transition,n=xt;try{if(El.transition=null,xt=16>e?16:e,null===Kl)var r=!1;else{if(e=Kl,Kl=null,Gl=0,0!==(6&Tl))throw Error(o(331));var i=Tl;for(Tl|=4,Zs=e.current;null!==Zs;){var a=Zs,s=a.child;if(0!==(16&Zs.flags)){var l=a.deletions;if(null!==l){for(var c=0;c<l.length;c++){var u=l[c];for(Zs=u;null!==Zs;){var d=Zs;switch(d.tag){case 0:case 11:case 15:nl(8,d,a)}var p=d.child;if(null!==p)p.return=d,Zs=p;else for(;null!==Zs;){var h=(d=Zs).sibling,f=d.return;if(ol(d),d===u){Zs=null;break}if(null!==h){h.return=f,Zs=h;break}Zs=f}}}var m=a.alternate;if(null!==m){var g=m.child;if(null!==g){m.child=null;do{var y=g.sibling;g.sibling=null,g=y}while(null!==g)}}Zs=a}}if(0!==(2064&a.subtreeFlags)&&null!==s)s.return=a,Zs=s;else e:for(;null!==Zs;){if(0!==(2048&(a=Zs).flags))switch(a.tag){case 0:case 11:case 15:nl(9,a,a.return)}var v=a.sibling;if(null!==v){v.return=a.return,Zs=v;break e}Zs=a.return}}var x=e.current;for(Zs=x;null!==Zs;){var b=(s=Zs).child;if(0!==(2064&s.subtreeFlags)&&null!==b)b.return=s,Zs=b;else e:for(s=x;null!==Zs;){if(0!==(2048&(l=Zs).flags))try{switch(l.tag){case 0:case 11:case 15:rl(9,l)}}catch(k){Sc(l,l.return,k)}if(l===s){Zs=null;break e}var w=l.sibling;if(null!==w){w.return=l.return,Zs=w;break e}Zs=l.return}}if(Tl=i,Bi(),ot&&"function"===typeof ot.onPostCommitFiberRoot)try{ot.onPostCommitFiberRoot(it,e)}catch(k){}r=!0}return r}finally{xt=n,El.transition=t}}return!1}function jc(e,t,n){e=Vo(e,t=hs(0,t=cs(n,t),1),1),t=ec(),null!==e&&(yt(e,1,t),rc(e,t))}function Sc(e,t,n){if(3===e.tag)jc(e,e,n);else for(;null!==t;){if(3===t.tag){jc(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"===typeof t.type.getDerivedStateFromError||"function"===typeof r.componentDidCatch&&(null===ql||!ql.has(r))){t=Vo(t,e=fs(t,e=cs(n,e),1),1),e=ec(),null!==t&&(yt(t,1,e),rc(t,e));break}}t=t.return}}function Cc(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),t=ec(),e.pingedLanes|=e.suspendedLanes&n,zl===e&&(Ml&n)===n&&(4===Al||3===Al&&(130023424&Ml)===Ml&&500>Xe()-Ul?pc(e,0):Il|=n),rc(e,t)}function Pc(e,t){0===t&&(0===(1&e.mode)?t=1:(t=ut,0===(130023424&(ut<<=1))&&(ut=4194304)));var n=ec();null!==(e=No(e,t))&&(yt(e,t,n),rc(e,n))}function Ec(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),Pc(e,n)}function Tc(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;null!==i&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(o(314))}null!==r&&r.delete(t),Pc(e,n)}function zc(e,t){return Ye(e,t)}function Dc(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Mc(e,t,n,r){return new Dc(e,t,n,r)}function Rc(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Oc(e,t){var n=e.alternate;return null===n?((n=Mc(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=14680064&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ac(e,t,n,r,i,a){var s=2;if(r=e,"function"===typeof e)Rc(e)&&(s=1);else if("string"===typeof e)s=5;else e:switch(e){case j:return Nc(n.children,i,a,t);case S:s=8,i|=8;break;case C:return(e=Mc(12,n,t,2|i)).elementType=C,e.lanes=a,e;case z:return(e=Mc(13,n,t,i)).elementType=z,e.lanes=a,e;case D:return(e=Mc(19,n,t,i)).elementType=D,e.lanes=a,e;case O:return _c(n,i,a,t);default:if("object"===typeof e&&null!==e)switch(e.$$typeof){case P:s=10;break e;case E:s=9;break e;case T:s=11;break e;case M:s=14;break e;case R:s=16,r=null;break e}throw Error(o(130,null==e?e:typeof e,""))}return(t=Mc(s,n,t,i)).elementType=e,t.type=r,t.lanes=a,t}function Nc(e,t,n,r){return(e=Mc(7,e,r,t)).lanes=n,e}function _c(e,t,n,r){return(e=Mc(22,e,r,t)).elementType=O,e.lanes=n,e.stateNode={isHidden:!1},e}function Lc(e,t,n){return(e=Mc(6,e,null,t)).lanes=n,e}function Ic(e,t,n){return(t=Mc(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Fc(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=gt(0),this.expirationTimes=gt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gt(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Vc(e,t,n,r,i,o,a,s,l){return e=new Fc(e,t,n,s,l),1===t?(t=1,!0===o&&(t|=8)):t=0,o=Mc(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Lo(o),e}function Uc(e){if(!e)return Ei;e:{if(Be(e=e._reactInternals)!==e||1!==e.tag)throw Error(o(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ri(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(null!==t);throw Error(o(171))}if(1===e.tag){var n=e.type;if(Ri(n))return Ni(e,n,t)}return t}function Bc(e,t,n,r,i,o,a,s,l){return(e=Vc(n,r,!0,e,0,o,0,s,l)).context=Uc(null),n=e.current,(o=Fo(r=ec(),i=tc(n))).callback=void 0!==t&&null!==t?t:null,Vo(n,o,i),e.current.lanes=i,yt(e,i,r),rc(e,r),e}function $c(e,t,n,r){var i=t.current,o=ec(),a=tc(i);return n=Uc(n),null===t.context?t.context=n:t.pendingContext=n,(t=Fo(o,a)).payload={element:e},null!==(r=void 0===r?null:r)&&(t.callback=r),null!==(e=Vo(i,t,a))&&(nc(e,i,a,o),Uo(e,i,a)),a}function Wc(e){return(e=e.current).child?(e.child.tag,e.child.stateNode):null}function Hc(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function qc(e,t){Hc(e,t),(e=e.alternate)&&Hc(e,t)}jl=function(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps||zi.current)xs=!0;else{if(0===(e.lanes&n)&&0===(128&t.flags))return xs=!1,function(e,t,n){switch(t.tag){case 3:zs(t),fo();break;case 5:Zo(t);break;case 1:Ri(t.type)&&_i(t);break;case 4:Qo(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Pi(jo,r._currentValue),r._currentValue=i;break;case 13:if(null!==(r=t.memoizedState))return null!==r.dehydrated?(Pi(ea,1&ea.current),t.flags|=128,null):0!==(n&t.child.childLanes)?Ls(e,t,n):(Pi(ea,1&ea.current),null!==(e=Ws(e,t,n))?e.sibling:null);Pi(ea,1&ea.current);break;case 19:if(r=0!==(n&t.childLanes),0!==(128&e.flags)){if(r)return Bs(e,t,n);t.flags|=128}if(null!==(i=t.memoizedState)&&(i.rendering=null,i.tail=null,i.lastEffect=null),Pi(ea,ea.current),r)break;return null;case 22:case 23:return t.lanes=0,Ss(e,t,n)}return Ws(e,t,n)}(e,t,n);xs=0!==(131072&e.flags)}else xs=!1,io&&0!==(1048576&t.flags)&&Ji(t,qi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;$s(e,t),e=t.pendingProps;var i=Mi(t,Ti.current);Do(t,n),i=ga(null,t,r,e,i,n);var a=ya();return t.flags|=1,"object"===typeof i&&null!==i&&"function"===typeof i.render&&void 0===i.$$typeof?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ri(r)?(a=!0,_i(t)):a=!1,t.memoizedState=null!==i.state&&void 0!==i.state?i.state:null,Lo(t),i.updater=is,t.stateNode=i,i._reactInternals=t,ls(t,r,e,n),t=Ts(null,t,r,!0,a,n)):(t.tag=0,io&&a&&eo(t),bs(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch($s(e,t),e=t.pendingProps,r=(i=r._init)(r._payload),t.type=r,i=t.tag=function(e){if("function"===typeof e)return Rc(e)?1:0;if(void 0!==e&&null!==e){if((e=e.$$typeof)===T)return 11;if(e===M)return 14}return 2}(r),e=ns(r,e),i){case 0:t=Ps(null,t,r,e,n);break e;case 1:t=Es(null,t,r,e,n);break e;case 11:t=ws(null,t,r,e,n);break e;case 14:t=ks(null,t,r,ns(r.type,e),n);break e}throw Error(o(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,Ps(e,t,r,i=t.elementType===r?i:ns(r,i),n);case 1:return r=t.type,i=t.pendingProps,Es(e,t,r,i=t.elementType===r?i:ns(r,i),n);case 3:e:{if(zs(t),null===e)throw Error(o(387));r=t.pendingProps,i=(a=t.memoizedState).element,Io(e,t),$o(t,r,null,n);var s=t.memoizedState;if(r=s.element,a.isDehydrated){if(a={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=a,t.memoizedState=a,256&t.flags){t=Ds(e,t,r,n,i=cs(Error(o(423)),t));break e}if(r!==i){t=Ds(e,t,r,n,i=cs(Error(o(424)),t));break e}for(ro=ci(t.stateNode.containerInfo.firstChild),no=t,io=!0,oo=null,n=ko(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(fo(),r===i){t=Ws(e,t,n);break e}bs(e,t,r,n)}t=t.child}return t;case 5:return Zo(t),null===e&&co(t),r=t.type,i=t.pendingProps,a=null!==e?e.memoizedProps:null,s=i.children,ni(r,i)?s=null:null!==a&&ni(r,a)&&(t.flags|=32),Cs(e,t),bs(e,t,s,n),t.child;case 6:return null===e&&co(t),null;case 13:return Ls(e,t,n);case 4:return Qo(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=wo(t,null,r,n):bs(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,ws(e,t,r,i=t.elementType===r?i:ns(r,i),n);case 7:return bs(e,t,t.pendingProps,n),t.child;case 8:case 12:return bs(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,a=t.memoizedProps,s=i.value,Pi(jo,r._currentValue),r._currentValue=s,null!==a)if(sr(a.value,s)){if(a.children===i.children&&!zi.current){t=Ws(e,t,n);break e}}else for(null!==(a=t.child)&&(a.return=t);null!==a;){var l=a.dependencies;if(null!==l){s=a.child;for(var c=l.firstContext;null!==c;){if(c.context===r){if(1===a.tag){(c=Fo(-1,n&-n)).tag=2;var u=a.updateQueue;if(null!==u){var d=(u=u.shared).pending;null===d?c.next=c:(c.next=d.next,d.next=c),u.pending=c}}a.lanes|=n,null!==(c=a.alternate)&&(c.lanes|=n),zo(a.return,n,t),l.lanes|=n;break}c=c.next}}else if(10===a.tag)s=a.type===t.type?null:a.child;else if(18===a.tag){if(null===(s=a.return))throw Error(o(341));s.lanes|=n,null!==(l=s.alternate)&&(l.lanes|=n),zo(s,n,t),s=a.sibling}else s=a.child;if(null!==s)s.return=a;else for(s=a;null!==s;){if(s===t){s=null;break}if(null!==(a=s.sibling)){a.return=s.return,s=a;break}s=s.return}a=s}bs(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Do(t,n),r=r(i=Mo(i)),t.flags|=1,bs(e,t,r,n),t.child;case 14:return i=ns(r=t.type,t.pendingProps),ks(e,t,r,i=ns(r.type,i),n);case 15:return js(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ns(r,i),$s(e,t),t.tag=1,Ri(r)?(e=!0,_i(t)):e=!1,Do(t,n),as(t,r,i),ls(t,r,i,n),Ts(null,t,r,!0,e,n);case 19:return Bs(e,t,n);case 22:return Ss(e,t,n)}throw Error(o(156,t.tag))};var Yc="function"===typeof reportError?reportError:function(e){console.error(e)};function Kc(e){this._internalRoot=e}function Gc(e){this._internalRoot=e}function Qc(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function Xc(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function Zc(){}function Jc(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if("function"===typeof i){var s=i;i=function(){var e=Wc(a);s.call(e)}}$c(t,a,e,i)}else a=function(e,t,n,r,i){if(i){if("function"===typeof r){var o=r;r=function(){var e=Wc(a);o.call(e)}}var a=Bc(t,r,e,0,null,!1,0,"",Zc);return e._reactRootContainer=a,e[fi]=a.current,Br(8===e.nodeType?e.parentNode:e),uc(),a}for(;i=e.lastChild;)e.removeChild(i);if("function"===typeof r){var s=r;r=function(){var e=Wc(l);s.call(e)}}var l=Vc(e,0,!1,null,0,!1,0,"",Zc);return e._reactRootContainer=l,e[fi]=l.current,Br(8===e.nodeType?e.parentNode:e),uc(function(){$c(t,l,n,r)}),l}(n,t,e,i,r);return Wc(a)}Gc.prototype.render=Kc.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(o(409));$c(e,t,null,null)},Gc.prototype.unmount=Kc.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;uc(function(){$c(null,e,null,null)}),t[fi]=null}},Gc.prototype.unstable_scheduleHydration=function(e){if(e){var t=St();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ot.length&&0!==t&&t<Ot[n].priority;n++);Ot.splice(n,0,e),0===n&&Lt(e)}},wt=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=dt(t.pendingLanes);0!==n&&(vt(t,1|n),rc(t,Xe()),0===(6&Tl)&&(Bl=Xe()+500,Bi()))}break;case 13:uc(function(){var t=No(e,1);if(null!==t){var n=ec();nc(t,e,1,n)}}),qc(e,1)}},kt=function(e){if(13===e.tag){var t=No(e,134217728);if(null!==t)nc(t,e,134217728,ec());qc(e,134217728)}},jt=function(e){if(13===e.tag){var t=tc(e),n=No(e,t);if(null!==n)nc(n,e,t,ec());qc(e,t)}},St=function(){return xt},Ct=function(e,t){var n=xt;try{return xt=e,t()}finally{xt=n}},ke=function(e,t,n){switch(t){case"input":if(Z(e,n),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=wi(r);if(!i)throw Error(o(90));Y(r),Z(r,i)}}}break;case"textarea":oe(e,n);break;case"select":null!=(t=n.value)&&ne(e,!!n.multiple,t,!1)}},Te=cc,ze=uc;var eu={usingClientEntryPoint:!1,Events:[xi,bi,wi,Pe,Ee,cc]},tu={findFiberByHostInstance:vi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},nu={bundleType:tu.bundleType,version:tu.version,rendererPackageName:tu.rendererPackageName,rendererConfig:tu.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:b.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=He(e))?null:e.stateNode},findFiberByHostInstance:tu.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var ru=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ru.isDisabled&&ru.supportsFiber)try{it=ru.inject(nu),ot=ru}catch(ue){}}t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=eu,t.createPortal=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!Qc(t))throw Error(o(200));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:k,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},t.createRoot=function(e,t){if(!Qc(e))throw Error(o(299));var n=!1,r="",i=Yc;return null!==t&&void 0!==t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onRecoverableError&&(i=t.onRecoverableError)),t=Vc(e,1,!1,null,0,n,0,r,i),e[fi]=t.current,Br(8===e.nodeType?e.parentNode:e),new Kc(t)},t.findDOMNode=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternals;if(void 0===t){if("function"===typeof e.render)throw Error(o(188));throw e=Object.keys(e).join(","),Error(o(268,e))}return e=null===(e=He(t))?null:e.stateNode},t.flushSync=function(e){return uc(e)},t.hydrate=function(e,t,n){if(!Xc(t))throw Error(o(200));return Jc(null,e,t,!0,n)},t.hydrateRoot=function(e,t,n){if(!Qc(e))throw Error(o(405));var r=null!=n&&n.hydratedSources||null,i=!1,a="",s=Yc;if(null!==n&&void 0!==n&&(!0===n.unstable_strictMode&&(i=!0),void 0!==n.identifierPrefix&&(a=n.identifierPrefix),void 0!==n.onRecoverableError&&(s=n.onRecoverableError)),t=Bc(t,null,e,1,null!=n?n:null,i,0,a,s),e[fi]=t.current,Br(e),r)for(e=0;e<r.length;e++)i=(i=(n=r[e])._getVersion)(n._source),null==t.mutableSourceEagerHydrationData?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Gc(t)},t.render=function(e,t,n){if(!Xc(t))throw Error(o(200));return Jc(null,e,t,!1,n)},t.unmountComponentAtNode=function(e){if(!Xc(e))throw Error(o(40));return!!e._reactRootContainer&&(uc(function(){Jc(null,null,e,!1,function(){e._reactRootContainer=null,e[fi]=null})}),!0)},t.unstable_batchedUpdates=cc,t.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Xc(n))throw Error(o(200));if(null==e||void 0===e._reactInternals)throw Error(o(38));return Jc(e,t,n,!1,r)},t.version="18.3.1-next-f1338f8080-20240426"},853:(e,t,n)=>{"use strict";e.exports=n(234)},950:(e,t,n)=>{"use strict";!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=n(730)}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;n.t=function(r,i){if(1&i&&(r=this(r)),8&i)return r;if("object"===typeof r&&r){if(4&i&&r.__esModule)return r;if(16&i&&"function"===typeof r.then)return r}var o=Object.create(null);n.r(o);var a={};e=e||[null,t({}),t([]),t(t)];for(var s=2&i&&r;("object"==typeof s||"function"==typeof s)&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach(e=>a[e]=()=>r[e]);return a.default=()=>r,n.d(o,a),o}})(),n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nc=void 0,(()=>{"use strict";var e,t=n(43),r=n.t(t,2),i=n(391),o=n(950),a=n.t(o,2);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}!function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"}(e||(e={}));const l="popstate";function c(e,t){if(!1===e||null===e||"undefined"===typeof e)throw new Error(t)}function u(e,t){if(!e){"undefined"!==typeof console&&console.warn(t);try{throw new Error(t)}catch(n){}}}function d(e,t){return{usr:e.state,key:e.key,idx:t}}function p(e,t,n,r){return void 0===n&&(n=null),s({pathname:"string"===typeof e?e:e.pathname,search:"",hash:""},"string"===typeof t?f(t):t,{state:n,key:t&&t.key||r||Math.random().toString(36).substr(2,8)})}function h(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&"?"!==n&&(t+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(t+="#"===r.charAt(0)?r:"#"+r),t}function f(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function m(t,n,r,i){void 0===i&&(i={});let{window:o=document.defaultView,v5Compat:a=!1}=i,u=o.history,f=e.Pop,m=null,g=y();function y(){return(u.state||{idx:null}).idx}function v(){f=e.Pop;let t=y(),n=null==t?null:t-g;g=t,m&&m({action:f,location:b.location,delta:n})}function x(e){let t="null"!==o.location.origin?o.location.origin:o.location.href,n="string"===typeof e?e:h(e);return n=n.replace(/ $/,"%20"),c(t,"No window.location.(origin|href) available to create URL for href: "+n),new URL(n,t)}null==g&&(g=0,u.replaceState(s({},u.state,{idx:g}),""));let b={get action(){return f},get location(){return t(o,u)},listen(e){if(m)throw new Error("A history only accepts one active listener");return o.addEventListener(l,v),m=e,()=>{o.removeEventListener(l,v),m=null}},createHref:e=>n(o,e),createURL:x,encodeLocation(e){let t=x(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(t,n){f=e.Push;let i=p(b.location,t,n);r&&r(i,t),g=y()+1;let s=d(i,g),l=b.createHref(i);try{u.pushState(s,"",l)}catch(c){if(c instanceof DOMException&&"DataCloneError"===c.name)throw c;o.location.assign(l)}a&&m&&m({action:f,location:b.location,delta:1})},replace:function(t,n){f=e.Replace;let i=p(b.location,t,n);r&&r(i,t),g=y();let o=d(i,g),s=b.createHref(i);u.replaceState(o,"",s),a&&m&&m({action:f,location:b.location,delta:0})},go:e=>u.go(e)};return b}var g;!function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"}(g||(g={}));new Set(["lazy","caseSensitive","path","id","index","children"]);function y(e,t,n){return void 0===n&&(n="/"),v(e,t,n,!1)}function v(e,t,n,r){let i=R(("string"===typeof t?f(t):t).pathname||"/",n);if(null==i)return null;let o=x(e);!function(e){e.sort((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){let n=e.length===t.length&&e.slice(0,-1).every((e,n)=>e===t[n]);return n?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)))}(o);let a=null;for(let s=0;null==a&&s<o.length;++s){let e=M(i);a=z(o[s],e,r)}return a}function x(e,t,n,r){void 0===t&&(t=[]),void 0===n&&(n=[]),void 0===r&&(r="");let i=(e,i,o)=>{let a={relativePath:void 0===o?e.path||"":o,caseSensitive:!0===e.caseSensitive,childrenIndex:i,route:e};a.relativePath.startsWith("/")&&(c(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path "'+r+'" is not valid. An absolute child route path must start with the combined path of all its parent routes.'),a.relativePath=a.relativePath.slice(r.length));let s=L([r,a.relativePath]),l=n.concat(a);e.children&&e.children.length>0&&(c(!0!==e.index,'Index routes must not have child routes. Please remove all child routes from route path "'+s+'".'),x(e.children,t,l,s)),(null!=e.path||e.index)&&t.push({path:s,score:T(s,e.index),routesMeta:l})};return e.forEach((e,t)=>{var n;if(""!==e.path&&null!=(n=e.path)&&n.includes("?"))for(let r of b(e.path))i(e,t,r);else i(e,t)}),t}function b(e){let t=e.split("/");if(0===t.length)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(0===r.length)return i?[o,""]:[o];let a=b(r.join("/")),s=[];return s.push(...a.map(e=>""===e?o:[o,e].join("/"))),i&&s.push(...a),s.map(t=>e.startsWith("/")&&""===t?"/":t)}const w=/^:[\w-]+$/,k=3,j=2,S=1,C=10,P=-2,E=e=>"*"===e;function T(e,t){let n=e.split("/"),r=n.length;return n.some(E)&&(r+=P),t&&(r+=j),n.filter(e=>!E(e)).reduce((e,t)=>e+(w.test(t)?k:""===t?S:C),r)}function z(e,t,n){void 0===n&&(n=!1);let{routesMeta:r}=e,i={},o="/",a=[];for(let s=0;s<r.length;++s){let e=r[s],l=s===r.length-1,c="/"===o?t:t.slice(o.length)||"/",u=D({path:e.relativePath,caseSensitive:e.caseSensitive,end:l},c),d=e.route;if(!u&&l&&n&&!r[r.length-1].route.index&&(u=D({path:e.relativePath,caseSensitive:e.caseSensitive,end:!1},c)),!u)return null;Object.assign(i,u.params),a.push({params:i,pathname:L([o,u.pathname]),pathnameBase:I(L([o,u.pathnameBase])),route:d}),"/"!==u.pathnameBase&&(o=L([o,u.pathnameBase]))}return a}function D(e,t){"string"===typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=function(e,t,n){void 0===t&&(t=!1);void 0===n&&(n=!0);u("*"===e||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were "'+e.replace(/\*$/,"/*")+'" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "'+e.replace(/\*$/,"/*")+'".');let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(e,t,n)=>(r.push({paramName:t,isOptional:null!=n}),n?"/?([^\\/]+)?":"/([^\\/]+)"));e.endsWith("*")?(r.push({paramName:"*"}),i+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":""!==e&&"/"!==e&&(i+="(?:(?=\\/|$))");let o=new RegExp(i,t?void 0:"i");return[o,r]}(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),s=i.slice(1),l=r.reduce((e,t,n)=>{let{paramName:r,isOptional:i}=t;if("*"===r){let e=s[n]||"";a=o.slice(0,o.length-e.length).replace(/(.)\/+$/,"$1")}const l=s[n];return e[r]=i&&!l?void 0:(l||"").replace(/%2F/g,"/"),e},{});return{params:l,pathname:o,pathnameBase:a,pattern:e}}function M(e){try{return e.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(t){return u(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding ('+t+")."),e}}function R(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&"/"!==r?null:e.slice(n)||"/"}function O(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified `to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the `to."+n+'` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'}function A(e){return e.filter((e,t)=>0===t||e.route.path&&e.route.path.length>0)}function N(e,t){let n=A(e);return t?n.map((e,t)=>t===n.length-1?e.pathname:e.pathnameBase):n.map(e=>e.pathnameBase)}function _(e,t,n,r){let i;void 0===r&&(r=!1),"string"===typeof e?i=f(e):(i=s({},e),c(!i.pathname||!i.pathname.includes("?"),O("?","pathname","search",i)),c(!i.pathname||!i.pathname.includes("#"),O("#","pathname","hash",i)),c(!i.search||!i.search.includes("#"),O("#","search","hash",i)));let o,a=""===e||""===i.pathname,l=a?"/":i.pathname;if(null==l)o=n;else{let e=t.length-1;if(!r&&l.startsWith("..")){let t=l.split("/");for(;".."===t[0];)t.shift(),e-=1;i.pathname=t.join("/")}o=e>=0?t[e]:"/"}let u=function(e,t){void 0===t&&(t="/");let{pathname:n,search:r="",hash:i=""}="string"===typeof e?f(e):e,o=n?n.startsWith("/")?n:function(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)}),n.length>1?n.join("/"):"/"}(n,t):t;return{pathname:o,search:F(r),hash:V(i)}}(i,o),d=l&&"/"!==l&&l.endsWith("/"),p=(a||"."===l)&&n.endsWith("/");return u.pathname.endsWith("/")||!d&&!p||(u.pathname+="/"),u}const L=e=>e.join("/").replace(/\/\/+/g,"/"),I=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),F=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",V=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";Error;function U(e){return null!=e&&"number"===typeof e.status&&"string"===typeof e.statusText&&"boolean"===typeof e.internal&&"data"in e}const B=["post","put","patch","delete"],$=(new Set(B),["get",...B]);new Set($),new Set([301,302,303,307,308]),new Set([307,308]);Symbol("deferred");function W(){return W=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},W.apply(this,arguments)}const H=t.createContext(null);const q=t.createContext(null);const Y=t.createContext(null);const K=t.createContext(null);const G=t.createContext({outlet:null,matches:[],isDataRoute:!1});const Q=t.createContext(null);function X(){return null!=t.useContext(K)}function Z(){return X()||c(!1),t.useContext(K).location}function J(e){t.useContext(Y).static||t.useLayoutEffect(e)}function ee(){let{isDataRoute:e}=t.useContext(G);return e?function(){let{router:e}=ue(le.UseNavigateStable),n=pe(ce.UseNavigateStable),r=t.useRef(!1);J(()=>{r.current=!0});let i=t.useCallback(function(t,i){void 0===i&&(i={}),r.current&&("number"===typeof t?e.navigate(t):e.navigate(t,W({fromRouteId:n},i)))},[e,n]);return i}():function(){X()||c(!1);let e=t.useContext(H),{basename:n,future:r,navigator:i}=t.useContext(Y),{matches:o}=t.useContext(G),{pathname:a}=Z(),s=JSON.stringify(N(o,r.v7_relativeSplatPath)),l=t.useRef(!1);return J(()=>{l.current=!0}),t.useCallback(function(t,r){if(void 0===r&&(r={}),!l.current)return;if("number"===typeof t)return void i.go(t);let o=_(t,JSON.parse(s),a,"path"===r.relative);null==e&&"/"!==n&&(o.pathname="/"===o.pathname?n:L([n,o.pathname])),(r.replace?i.replace:i.push)(o,r.state,r)},[n,i,s,a,e])}()}function te(e,n){let{relative:r}=void 0===n?{}:n,{future:i}=t.useContext(Y),{matches:o}=t.useContext(G),{pathname:a}=Z(),s=JSON.stringify(N(o,i.v7_relativeSplatPath));return t.useMemo(()=>_(e,JSON.parse(s),a,"path"===r),[e,s,a,r])}function ne(n,r,i,o){X()||c(!1);let{navigator:a}=t.useContext(Y),{matches:s}=t.useContext(G),l=s[s.length-1],u=l?l.params:{},d=(l&&l.pathname,l?l.pathnameBase:"/");l&&l.route;let p,h=Z();if(r){var m;let e="string"===typeof r?f(r):r;"/"===d||(null==(m=e.pathname)?void 0:m.startsWith(d))||c(!1),p=e}else p=h;let g=p.pathname||"/",v=g;if("/"!==d){let e=d.replace(/^\//,"").split("/");v="/"+g.replace(/^\//,"").split("/").slice(e.length).join("/")}let x=y(n,{pathname:v});let b=se(x&&x.map(e=>Object.assign({},e,{params:Object.assign({},u,e.params),pathname:L([d,a.encodeLocation?a.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?d:L([d,a.encodeLocation?a.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])})),s,i,o);return r&&b?t.createElement(K.Provider,{value:{location:W({pathname:"/",search:"",hash:"",state:null,key:"default"},p),navigationType:e.Pop}},b):b}function re(){let e=function(){var e;let n=t.useContext(Q),r=de(ce.UseRouteError),i=pe(ce.UseRouteError);if(void 0!==n)return n;return null==(e=r.errors)?void 0:e[i]}(),n=U(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,i="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:i};return t.createElement(t.Fragment,null,t.createElement("h2",null,"Unexpected Application Error!"),t.createElement("h3",{style:{fontStyle:"italic"}},n),r?t.createElement("pre",{style:o},r):null,null)}const ie=t.createElement(re,null);class oe extends t.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return void 0!==this.state.error?t.createElement(G.Provider,{value:this.props.routeContext},t.createElement(Q.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function ae(e){let{routeContext:n,match:r,children:i}=e,o=t.useContext(H);return o&&o.static&&o.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=r.route.id),t.createElement(G.Provider,{value:n},i)}function se(e,n,r,i){var o;if(void 0===n&&(n=[]),void 0===r&&(r=null),void 0===i&&(i=null),null==e){var a;if(!r)return null;if(r.errors)e=r.matches;else{if(!(null!=(a=i)&&a.v7_partialHydration&&0===n.length&&!r.initialized&&r.matches.length>0))return null;e=r.matches}}let s=e,l=null==(o=r)?void 0:o.errors;if(null!=l){let e=s.findIndex(e=>e.route.id&&void 0!==(null==l?void 0:l[e.route.id]));e>=0||c(!1),s=s.slice(0,Math.min(s.length,e+1))}let u=!1,d=-1;if(r&&i&&i.v7_partialHydration)for(let t=0;t<s.length;t++){let e=s[t];if((e.route.HydrateFallback||e.route.hydrateFallbackElement)&&(d=t),e.route.id){let{loaderData:t,errors:n}=r,i=e.route.loader&&void 0===t[e.route.id]&&(!n||void 0===n[e.route.id]);if(e.route.lazy||i){u=!0,s=d>=0?s.slice(0,d+1):[s[0]];break}}}return s.reduceRight((e,i,o)=>{let a,c=!1,p=null,h=null;var f;r&&(a=l&&i.route.id?l[i.route.id]:void 0,p=i.route.errorElement||ie,u&&(d<0&&0===o?(f="route-fallback",!1||he[f]||(he[f]=!0),c=!0,h=null):d===o&&(c=!0,h=i.route.hydrateFallbackElement||null)));let m=n.concat(s.slice(0,o+1)),g=()=>{let n;return n=a?p:c?h:i.route.Component?t.createElement(i.route.Component,null):i.route.element?i.route.element:e,t.createElement(ae,{match:i,routeContext:{outlet:e,matches:m,isDataRoute:null!=r},children:n})};return r&&(i.route.ErrorBoundary||i.route.errorElement||0===o)?t.createElement(oe,{location:r.location,revalidation:r.revalidation,component:p,error:a,children:g(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):g()},null)}var le=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(le||{}),ce=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(ce||{});function ue(e){let n=t.useContext(H);return n||c(!1),n}function de(e){let n=t.useContext(q);return n||c(!1),n}function pe(e){let n=function(){let e=t.useContext(G);return e||c(!1),e}(),r=n.matches[n.matches.length-1];return r.route.id||c(!1),r.route.id}const he={};function fe(e,t){null==e||e.v7_startTransition,void 0===(null==e?void 0:e.v7_relativeSplatPath)&&(!t||t.v7_relativeSplatPath),t&&(t.v7_fetcherPersist,t.v7_normalizeFormMethod,t.v7_partialHydration,t.v7_skipActionErrorRevalidation)}r.startTransition;function me(e){let{to:n,replace:r,state:i,relative:o}=e;X()||c(!1);let{future:a,static:s}=t.useContext(Y),{matches:l}=t.useContext(G),{pathname:u}=Z(),d=ee(),p=_(n,N(l,a.v7_relativeSplatPath),u,"path"===o),h=JSON.stringify(p);return t.useEffect(()=>d(JSON.parse(h),{replace:r,state:i,relative:o}),[d,h,o,r,i]),null}function ge(e){c(!1)}function ye(n){let{basename:r="/",children:i=null,location:o,navigationType:a=e.Pop,navigator:s,static:l=!1,future:u}=n;X()&&c(!1);let d=r.replace(/^\/*/,"/"),p=t.useMemo(()=>({basename:d,navigator:s,static:l,future:W({v7_relativeSplatPath:!1},u)}),[d,u,s,l]);"string"===typeof o&&(o=f(o));let{pathname:h="/",search:m="",hash:g="",state:y=null,key:v="default"}=o,x=t.useMemo(()=>{let e=R(h,d);return null==e?null:{location:{pathname:e,search:m,hash:g,state:y,key:v},navigationType:a}},[d,h,m,g,y,v,a]);return null==x?null:t.createElement(Y.Provider,{value:p},t.createElement(K.Provider,{children:i,value:x}))}function ve(e){let{children:t,location:n}=e;return ne(xe(t),n)}new Promise(()=>{});t.Component;function xe(e,n){void 0===n&&(n=[]);let r=[];return t.Children.forEach(e,(e,i)=>{if(!t.isValidElement(e))return;let o=[...n,i];if(e.type===t.Fragment)return void r.push.apply(r,xe(e.props.children,o));e.type!==ge&&c(!1),e.props.index&&e.props.children&&c(!1);let a={id:e.props.id||o.join("-"),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,loader:e.props.loader,action:e.props.action,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:null!=e.props.ErrorBoundary||null!=e.props.errorElement,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(a.children=xe(e.props.children,o)),r.push(a)}),r}function be(){return be=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},be.apply(this,arguments)}function we(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);const ke=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],je=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"];try{window.__reactRouterVersion="6"}catch(px){}const Se=t.createContext({isTransitioning:!1});new Map;const Ce=r.startTransition;a.flushSync,r.useId;function Pe(e){let{basename:n,children:r,future:i,window:o}=e,a=t.useRef();var s;null==a.current&&(a.current=(void 0===(s={window:o,v5Compat:!0})&&(s={}),m(function(e,t){let{pathname:n,search:r,hash:i}=e.location;return p("",{pathname:n,search:r,hash:i},t.state&&t.state.usr||null,t.state&&t.state.key||"default")},function(e,t){return"string"===typeof t?t:h(t)},null,s)));let l=a.current,[c,u]=t.useState({action:l.action,location:l.location}),{v7_startTransition:d}=i||{},f=t.useCallback(e=>{d&&Ce?Ce(()=>u(e)):u(e)},[u,d]);return t.useLayoutEffect(()=>l.listen(f),[l,f]),t.useEffect(()=>fe(i),[i]),t.createElement(ye,{basename:n,children:r,location:c.location,navigationType:c.action,navigator:l,future:i})}const Ee="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement,Te=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ze=t.forwardRef(function(e,n){let r,{onClick:i,relative:o,reloadDocument:a,replace:s,state:l,target:u,to:d,preventScrollReset:p,viewTransition:f}=e,m=we(e,ke),{basename:g}=t.useContext(Y),y=!1;if("string"===typeof d&&Te.test(d)&&(r=d,Ee))try{let e=new URL(window.location.href),t=d.startsWith("//")?new URL(e.protocol+d):new URL(d),n=R(t.pathname,g);t.origin===e.origin&&null!=n?d=n+t.search+t.hash:y=!0}catch(px){}let v=function(e,n){let{relative:r}=void 0===n?{}:n;X()||c(!1);let{basename:i,navigator:o}=t.useContext(Y),{hash:a,pathname:s,search:l}=te(e,{relative:r}),u=s;return"/"!==i&&(u="/"===s?i:L([i,s])),o.createHref({pathname:u,search:l,hash:a})}(d,{relative:o}),x=function(e,n){let{target:r,replace:i,state:o,preventScrollReset:a,relative:s,viewTransition:l}=void 0===n?{}:n,c=ee(),u=Z(),d=te(e,{relative:s});return t.useCallback(t=>{if(function(e,t){return 0===e.button&&(!t||"_self"===t)&&!function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)}(t,r)){t.preventDefault();let n=void 0!==i?i:h(u)===h(d);c(e,{replace:n,state:o,preventScrollReset:a,relative:s,viewTransition:l})}},[u,c,d,i,o,r,e,a,s,l])}(d,{replace:s,state:l,target:u,preventScrollReset:p,relative:o,viewTransition:f});return t.createElement("a",be({},m,{href:r||v,onClick:y||a?i:function(e){i&&i(e),e.defaultPrevented||x(e)},ref:n,target:u}))});const De=t.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:i=!1,className:o="",end:a=!1,style:s,to:l,viewTransition:u,children:d}=e,p=we(e,je),h=te(l,{relative:p.relative}),f=Z(),m=t.useContext(q),{navigator:g,basename:y}=t.useContext(Y),v=null!=m&&function(e,n){void 0===n&&(n={});let r=t.useContext(Se);null==r&&c(!1);let{basename:i}=Oe(Me.useViewTransitionState),o=te(e,{relative:n.relative});if(!r.isTransitioning)return!1;let a=R(r.currentLocation.pathname,i)||r.currentLocation.pathname,s=R(r.nextLocation.pathname,i)||r.nextLocation.pathname;return null!=D(o.pathname,s)||null!=D(o.pathname,a)}(h)&&!0===u,x=g.encodeLocation?g.encodeLocation(h).pathname:h.pathname,b=f.pathname,w=m&&m.navigation&&m.navigation.location?m.navigation.location.pathname:null;i||(b=b.toLowerCase(),w=w?w.toLowerCase():null,x=x.toLowerCase()),w&&y&&(w=R(w,y)||w);const k="/"!==x&&x.endsWith("/")?x.length-1:x.length;let j,S=b===x||!a&&b.startsWith(x)&&"/"===b.charAt(k),C=null!=w&&(w===x||!a&&w.startsWith(x)&&"/"===w.charAt(x.length)),P={isActive:S,isPending:C,isTransitioning:v},E=S?r:void 0;j="function"===typeof o?o(P):[o,S?"active":null,C?"pending":null,v?"transitioning":null].filter(Boolean).join(" ");let T="function"===typeof s?s(P):s;return t.createElement(ze,be({},p,{"aria-current":E,className:j,ref:n,style:T,to:l,viewTransition:u}),"function"===typeof d?d(P):d)});var Me,Re;function Oe(e){let n=t.useContext(H);return n||c(!1),n}(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Me||(Me={})),function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"}(Re||(Re={}));var Ae=function(){return Ae=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},Ae.apply(this,arguments)};Object.create;function Ne(e,t,n){if(n||2===arguments.length)for(var r,i=0,o=t.length;i<o;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))}Object.create;"function"===typeof SuppressedError&&SuppressedError;var _e=n(324),Le=n.n(_e),Ie="-ms-",Fe="-moz-",Ve="-webkit-",Ue="comm",Be="rule",$e="decl",We="@keyframes",He=Math.abs,qe=String.fromCharCode,Ye=Object.assign;function Ke(e){return e.trim()}function Ge(e,t){return(e=t.exec(e))?e[0]:e}function Qe(e,t,n){return e.replace(t,n)}function Xe(e,t,n){return e.indexOf(t,n)}function Ze(e,t){return 0|e.charCodeAt(t)}function Je(e,t,n){return e.slice(t,n)}function et(e){return e.length}function tt(e){return e.length}function nt(e,t){return t.push(e),e}function rt(e,t){return e.filter(function(e){return!Ge(e,t)})}var it=1,ot=1,at=0,st=0,lt=0,ct="";function ut(e,t,n,r,i,o,a,s){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:it,column:ot,length:a,return:"",siblings:s}}function dt(e,t){return Ye(ut("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function pt(e){for(;e.root;)e=dt(e.root,{children:[e]});nt(e,e.siblings)}function ht(){return lt=st>0?Ze(ct,--st):0,ot--,10===lt&&(ot=1,it--),lt}function ft(){return lt=st<at?Ze(ct,st++):0,ot++,10===lt&&(ot=1,it++),lt}function mt(){return Ze(ct,st)}function gt(){return st}function yt(e,t){return Je(ct,e,t)}function vt(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function xt(e){return it=ot=1,at=et(ct=e),st=0,[]}function bt(e){return ct="",e}function wt(e){return Ke(yt(st-1,St(91===e?e+2:40===e?e+1:e)))}function kt(e){for(;(lt=mt())&&lt<33;)ft();return vt(e)>2||vt(lt)>3?"":" "}function jt(e,t){for(;--t&&ft()&&!(lt<48||lt>102||lt>57&&lt<65||lt>70&&lt<97););return yt(e,gt()+(t<6&&32==mt()&&32==ft()))}function St(e){for(;ft();)switch(lt){case e:return st;case 34:case 39:34!==e&&39!==e&&St(lt);break;case 40:41===e&&St(e);break;case 92:ft()}return st}function Ct(e,t){for(;ft()&&e+lt!==57&&(e+lt!==84||47!==mt()););return"/*"+yt(t,st-1)+"*"+qe(47===e?e:ft())}function Pt(e){for(;!vt(mt());)ft();return yt(e,st)}function Et(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function Tt(e,t,n,r){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case $e:return e.return=e.return||e.value;case Ue:return"";case We:return e.return=e.value+"{"+Et(e.children,r)+"}";case Be:if(!et(e.value=e.props.join(",")))return""}return et(n=Et(e.children,r))?e.return=e.value+"{"+n+"}":""}function zt(e,t,n){switch(function(e,t){return 45^Ze(e,0)?(((t<<2^Ze(e,0))<<2^Ze(e,1))<<2^Ze(e,2))<<2^Ze(e,3):0}(e,t)){case 5103:return Ve+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Ve+e+e;case 4789:return Fe+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Ve+e+Fe+e+Ie+e+e;case 5936:switch(Ze(e,t+11)){case 114:return Ve+e+Ie+Qe(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Ve+e+Ie+Qe(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Ve+e+Ie+Qe(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return Ve+e+Ie+e+e;case 6165:return Ve+e+Ie+"flex-"+e+e;case 5187:return Ve+e+Qe(e,/(\w+).+(:[^]+)/,Ve+"box-$1$2"+Ie+"flex-$1$2")+e;case 5443:return Ve+e+Ie+"flex-item-"+Qe(e,/flex-|-self/g,"")+(Ge(e,/flex-|baseline/)?"":Ie+"grid-row-"+Qe(e,/flex-|-self/g,""))+e;case 4675:return Ve+e+Ie+"flex-line-pack"+Qe(e,/align-content|flex-|-self/g,"")+e;case 5548:return Ve+e+Ie+Qe(e,"shrink","negative")+e;case 5292:return Ve+e+Ie+Qe(e,"basis","preferred-size")+e;case 6060:return Ve+"box-"+Qe(e,"-grow","")+Ve+e+Ie+Qe(e,"grow","positive")+e;case 4554:return Ve+Qe(e,/([^-])(transform)/g,"$1"+Ve+"$2")+e;case 6187:return Qe(Qe(Qe(e,/(zoom-|grab)/,Ve+"$1"),/(image-set)/,Ve+"$1"),e,"")+e;case 5495:case 3959:return Qe(e,/(image-set\([^]*)/,Ve+"$1$`$1");case 4968:return Qe(Qe(e,/(.+:)(flex-)?(.*)/,Ve+"box-pack:$3"+Ie+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Ve+e+e;case 4200:if(!Ge(e,/flex-|baseline/))return Ie+"grid-column-align"+Je(e,t)+e;break;case 2592:case 3360:return Ie+Qe(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(e,n){return t=n,Ge(e.props,/grid-\w+-end/)})?~Xe(e+(n=n[t].value),"span",0)?e:Ie+Qe(e,"-start","")+e+Ie+"grid-row-span:"+(~Xe(n,"span",0)?Ge(n,/\d+/):+Ge(n,/\d+/)-+Ge(e,/\d+/))+";":Ie+Qe(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(e){return Ge(e.props,/grid-\w+-start/)})?e:Ie+Qe(Qe(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return Qe(e,/(.+)-inline(.+)/,Ve+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(et(e)-1-t>6)switch(Ze(e,t+1)){case 109:if(45!==Ze(e,t+4))break;case 102:return Qe(e,/(.+:)(.+)-([^]+)/,"$1"+Ve+"$2-$3$1"+Fe+(108==Ze(e,t+3)?"$3":"$2-$3"))+e;case 115:return~Xe(e,"stretch",0)?zt(Qe(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return Qe(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(t,n,r,i,o,a,s){return Ie+n+":"+r+s+(i?Ie+n+"-span:"+(o?a:+a-+r)+s:"")+e});case 4949:if(121===Ze(e,t+6))return Qe(e,":",":"+Ve)+e;break;case 6444:switch(Ze(e,45===Ze(e,14)?18:11)){case 120:return Qe(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Ve+(45===Ze(e,14)?"inline-":"")+"box$3$1"+Ve+"$2$3$1"+Ie+"$2box$3")+e;case 100:return Qe(e,":",":"+Ie)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Qe(e,"scroll-","scroll-snap-")+e}return e}function Dt(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case $e:return void(e.return=zt(e.value,e.length,n));case We:return Et([dt(e,{value:Qe(e.value,"@","@"+Ve)})],r);case Be:if(e.length)return function(e,t){return e.map(t).join("")}(n=e.props,function(t){switch(Ge(t,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":pt(dt(e,{props:[Qe(t,/:(read-\w+)/,":-moz-$1")]})),pt(dt(e,{props:[t]})),Ye(e,{props:rt(n,r)});break;case"::placeholder":pt(dt(e,{props:[Qe(t,/:(plac\w+)/,":"+Ve+"input-$1")]})),pt(dt(e,{props:[Qe(t,/:(plac\w+)/,":-moz-$1")]})),pt(dt(e,{props:[Qe(t,/:(plac\w+)/,Ie+"input-$1")]})),pt(dt(e,{props:[t]})),Ye(e,{props:rt(n,r)})}return""})}}function Mt(e){return bt(Rt("",null,null,null,[""],e=xt(e),0,[0],e))}function Rt(e,t,n,r,i,o,a,s,l){for(var c=0,u=0,d=a,p=0,h=0,f=0,m=1,g=1,y=1,v=0,x="",b=i,w=o,k=r,j=x;g;)switch(f=v,v=ft()){case 40:if(108!=f&&58==Ze(j,d-1)){-1!=Xe(j+=Qe(wt(v),"&","&\f"),"&\f",He(c?s[c-1]:0))&&(y=-1);break}case 34:case 39:case 91:j+=wt(v);break;case 9:case 10:case 13:case 32:j+=kt(f);break;case 92:j+=jt(gt()-1,7);continue;case 47:switch(mt()){case 42:case 47:nt(At(Ct(ft(),gt()),t,n,l),l);break;default:j+="/"}break;case 123*m:s[c++]=et(j)*y;case 125*m:case 59:case 0:switch(v){case 0:case 125:g=0;case 59+u:-1==y&&(j=Qe(j,/\f/g,"")),h>0&&et(j)-d&&nt(h>32?Nt(j+";",r,n,d-1,l):Nt(Qe(j," ","")+";",r,n,d-2,l),l);break;case 59:j+=";";default:if(nt(k=Ot(j,t,n,c,u,i,s,x,b=[],w=[],d,o),o),123===v)if(0===u)Rt(j,t,k,k,b,o,d,s,w);else switch(99===p&&110===Ze(j,3)?100:p){case 100:case 108:case 109:case 115:Rt(e,k,k,r&&nt(Ot(e,k,k,0,0,i,s,x,i,b=[],d,w),w),i,w,d,s,r?b:w);break;default:Rt(j,k,k,k,[""],w,0,s,w)}}c=u=h=0,m=y=1,x=j="",d=a;break;case 58:d=1+et(j),h=f;default:if(m<1)if(123==v)--m;else if(125==v&&0==m++&&125==ht())continue;switch(j+=qe(v),v*m){case 38:y=u>0?1:(j+="\f",-1);break;case 44:s[c++]=(et(j)-1)*y,y=1;break;case 64:45===mt()&&(j+=wt(ft())),p=mt(),u=d=et(x=j+=Pt(gt())),v++;break;case 45:45===f&&2==et(j)&&(m=0)}}return o}function Ot(e,t,n,r,i,o,a,s,l,c,u,d){for(var p=i-1,h=0===i?o:[""],f=tt(h),m=0,g=0,y=0;m<r;++m)for(var v=0,x=Je(e,p+1,p=He(g=a[m])),b=e;v<f;++v)(b=Ke(g>0?h[v]+" "+x:Qe(x,/&\f/g,h[v])))&&(l[y++]=b);return ut(e,t,n,0===i?Be:s,l,c,u,d)}function At(e,t,n,r){return ut(e,t,n,Ue,qe(lt),Je(e,2,-2),0,r)}function Nt(e,t,n,r,i){return ut(e,t,n,$e,Je(e,0,r),Je(e,r+1,-1),r,i)}var _t={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Lt="undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_ATTR||{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_ATTR)||"data-styled",It="active",Ft="data-styled-version",Vt="6.1.19",Ut="/*!sc*/\n",Bt="undefined"!=typeof window&&"undefined"!=typeof document,$t=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&("false"!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY)),Wt=(new Set,Object.freeze([])),Ht=Object.freeze({});function qt(e,t,n){return void 0===n&&(n=Ht),e.theme!==n.theme&&e.theme||t||n.theme}var Yt=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Kt=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Gt=/(^-|-$)/g;function Qt(e){return e.replace(Kt,"-").replace(Gt,"")}var Xt=/(a)(d)/gi,Zt=function(e){return String.fromCharCode(e+(e>25?39:97))};function Jt(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Zt(t%52)+n;return(Zt(t%52)+n).replace(Xt,"$1-$2")}var en,tn=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},nn=function(e){return tn(5381,e)};function rn(e){return Jt(nn(e)>>>0)}function on(e){return e.displayName||e.name||"Component"}function an(e){return"string"==typeof e&&!0}var sn="function"==typeof Symbol&&Symbol.for,ln=sn?Symbol.for("react.memo"):60115,cn=sn?Symbol.for("react.forward_ref"):60112,un={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},dn={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},pn={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},hn=((en={})[cn]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},en[ln]=pn,en);function fn(e){return("type"in(t=e)&&t.type.$$typeof)===ln?pn:"$$typeof"in e?hn[e.$$typeof]:un;var t}var mn=Object.defineProperty,gn=Object.getOwnPropertyNames,yn=Object.getOwnPropertySymbols,vn=Object.getOwnPropertyDescriptor,xn=Object.getPrototypeOf,bn=Object.prototype;function wn(e,t,n){if("string"!=typeof t){if(bn){var r=xn(t);r&&r!==bn&&wn(e,r,n)}var i=gn(t);yn&&(i=i.concat(yn(t)));for(var o=fn(e),a=fn(t),s=0;s<i.length;++s){var l=i[s];if(!(l in dn||n&&n[l]||a&&l in a||o&&l in o)){var c=vn(t,l);try{mn(e,l,c)}catch(e){}}}}return e}function kn(e){return"function"==typeof e}function jn(e){return"object"==typeof e&&"styledComponentId"in e}function Sn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Cn(e,t){if(0===e.length)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function Pn(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function En(e,t,n){if(void 0===n&&(n=!1),!n&&!Pn(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=En(e[r],t[r]);else if(Pn(t))for(var r in t)e[r]=En(e[r],t[r]);return e}function Tn(e,t){Object.defineProperty(e,"toString",{value:t})}function zn(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Dn=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,i=r;e>=i;)if((i<<=1)<0)throw zn(16,"".concat(e));this.groupSizes=new Uint32Array(i),this.groupSizes.set(n),this.length=i;for(var o=r;o<i;o++)this.groupSizes[o]=0}for(var a=this.indexOfGroup(e+1),s=(o=0,t.length);o<s;o++)this.tag.insertRule(a,t[o])&&(this.groupSizes[e]++,a++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var i=n;i<r;i++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n,o=r;o<i;o++)t+="".concat(this.tag.getRule(o)).concat(Ut);return t},e}(),Mn=new Map,Rn=new Map,On=1,An=function(e){if(Mn.has(e))return Mn.get(e);for(;Rn.has(On);)On++;var t=On++;return Mn.set(e,t),Rn.set(t,e),t},Nn=function(e,t){On=t+1,Mn.set(e,t),Rn.set(t,e)},_n="style[".concat(Lt,"][").concat(Ft,'="').concat(Vt,'"]'),Ln=new RegExp("^".concat(Lt,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),In=function(e,t,n){for(var r,i=n.split(","),o=0,a=i.length;o<a;o++)(r=i[o])&&e.registerName(t,r)},Fn=function(e,t){for(var n,r=(null!==(n=t.textContent)&&void 0!==n?n:"").split(Ut),i=[],o=0,a=r.length;o<a;o++){var s=r[o].trim();if(s){var l=s.match(Ln);if(l){var c=0|parseInt(l[1],10),u=l[2];0!==c&&(Nn(u,c),In(e,u,l[3]),e.getTag().insertRules(c,i)),i.length=0}else i.push(s)}}},Vn=function(e){for(var t=document.querySelectorAll(_n),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(Lt)!==It&&(Fn(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function Un(){return n.nc}var Bn=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(e){var t=Array.from(e.querySelectorAll("style[".concat(Lt,"]")));return t[t.length-1]}(n),o=void 0!==i?i.nextSibling:null;r.setAttribute(Lt,It),r.setAttribute(Ft,Vt);var a=Un();return a&&r.setAttribute("nonce",a),n.insertBefore(r,o),r},$n=function(){function e(e){this.element=Bn(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var i=t[n];if(i.ownerNode===e)return i}throw zn(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),Wn=function(){function e(e){this.element=Bn(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),Hn=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),qn=Bt,Yn={isServer:!Bt,useCSSOMInjection:!$t},Kn=function(){function e(e,t,n){void 0===e&&(e=Ht),void 0===t&&(t={});var r=this;this.options=Ae(Ae({},Yn),e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&Bt&&qn&&(qn=!1,Vn(this)),Tn(this,function(){return function(e){for(var t=e.getTag(),n=t.length,r="",i=function(n){var i=function(e){return Rn.get(e)}(n);if(void 0===i)return"continue";var o=e.names.get(i),a=t.getGroup(n);if(void 0===o||!o.size||0===a.length)return"continue";var s="".concat(Lt,".g").concat(n,'[id="').concat(i,'"]'),l="";void 0!==o&&o.forEach(function(e){e.length>0&&(l+="".concat(e,","))}),r+="".concat(a).concat(s,'{content:"').concat(l,'"}').concat(Ut)},o=0;o<n;o++)i(o);return r}(r)})}return e.registerId=function(e){return An(e)},e.prototype.rehydrate=function(){!this.server&&Bt&&Vn(this)},e.prototype.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(Ae(Ae({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=function(e){var t=e.useCSSOMInjection,n=e.target;return e.isServer?new Hn(n):t?new $n(n):new Wn(n)}(this.options),new Dn(e)));var e},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(An(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},e.prototype.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(An(e),n)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(An(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Gn=/&/g,Qn=/^\s*\/\/.*$/gm;function Xn(e,t){return e.map(function(e){return"rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map(function(e){return"".concat(t," ").concat(e)})),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=Xn(e.children,t)),e})}function Zn(e){var t,n,r,i=void 0===e?Ht:e,o=i.options,a=void 0===o?Ht:o,s=i.plugins,l=void 0===s?Wt:s,c=function(e,r,i){return i.startsWith(n)&&i.endsWith(n)&&i.replaceAll(n,"").length>0?".".concat(t):e},u=l.slice();u.push(function(e){e.type===Be&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(Gn,n).replace(r,c))}),a.prefix&&u.push(Dt),u.push(Tt);var d=function(e,i,o,s){void 0===i&&(i=""),void 0===o&&(o=""),void 0===s&&(s="&"),t=s,n=i,r=new RegExp("\\".concat(n,"\\b"),"g");var l=e.replace(Qn,""),c=Mt(o||i?"".concat(o," ").concat(i," { ").concat(l," }"):l);a.namespace&&(c=Xn(c,a.namespace));var d,p=[];return Et(c,function(e){var t=tt(e);return function(n,r,i,o){for(var a="",s=0;s<t;s++)a+=e[s](n,r,i,o)||"";return a}}(u.concat((d=function(e){return p.push(e)},function(e){e.root||(e=e.return)&&d(e)})))),p};return d.hash=l.length?l.reduce(function(e,t){return t.name||zn(15),tn(e,t.name)},5381).toString():"",d}var Jn=new Kn,er=Zn(),tr=t.createContext({shouldForwardProp:void 0,styleSheet:Jn,stylis:er}),nr=(tr.Consumer,t.createContext(void 0));function rr(){return(0,t.useContext)(tr)}function ir(e){var n=(0,t.useState)(e.stylisPlugins),r=n[0],i=n[1],o=rr().styleSheet,a=(0,t.useMemo)(function(){var t=o;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t},[e.disableCSSOMInjection,e.sheet,e.target,o]),s=(0,t.useMemo)(function(){return Zn({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:r})},[e.enableVendorPrefixes,e.namespace,r]);(0,t.useEffect)(function(){Le()(r,e.stylisPlugins)||i(e.stylisPlugins)},[e.stylisPlugins]);var l=(0,t.useMemo)(function(){return{shouldForwardProp:e.shouldForwardProp,styleSheet:a,stylis:s}},[e.shouldForwardProp,a,s]);return t.createElement(tr.Provider,{value:l},t.createElement(nr.Provider,{value:s},e.children))}var or=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=er);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,Tn(this,function(){throw zn(12,String(n.name))})}return e.prototype.getName=function(e){return void 0===e&&(e=er),this.name+e.hash},e}(),ar=function(e){return e>="A"&&e<="Z"};function sr(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(1===n&&"-"===r&&"-"===e[0])return e;ar(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var lr=function(e){return null==e||!1===e||""===e},cr=function(e){var t,n,r=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!lr(o)&&(Array.isArray(o)&&o.isCss||kn(o)?r.push("".concat(sr(i),":"),o,";"):Pn(o)?r.push.apply(r,Ne(Ne(["".concat(i," {")],cr(o),!1),["}"],!1)):r.push("".concat(sr(i),": ").concat((t=i,null==(n=o)||"boolean"==typeof n||""===n?"":"number"!=typeof n||0===n||t in _t||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function ur(e,t,n,r){return lr(e)?[]:jn(e)?[".".concat(e.styledComponentId)]:kn(e)?!kn(i=e)||i.prototype&&i.prototype.isReactComponent||!t?[e]:ur(e(t),t,n,r):e instanceof or?n?(e.inject(n,r),[e.getName(r)]):[e]:Pn(e)?cr(e):Array.isArray(e)?Array.prototype.concat.apply(Wt,e.map(function(e){return ur(e,t,n,r)})):[e.toString()];var i}function dr(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(kn(n)&&!jn(n))return!1}return!0}var pr=nn(Vt),hr=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===n||n.isStatic)&&dr(e),this.componentId=t,this.baseHash=tn(pr,t),this.baseStyle=n,Kn.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))r=Sn(r,this.staticRulesId);else{var i=Cn(ur(this.rules,e,t,n)),o=Jt(tn(this.baseHash,i)>>>0);if(!t.hasNameForId(this.componentId,o)){var a=n(i,".".concat(o),void 0,this.componentId);t.insertRules(this.componentId,o,a)}r=Sn(r,o),this.staticRulesId=o}else{for(var s=tn(this.baseHash,n.hash),l="",c=0;c<this.rules.length;c++){var u=this.rules[c];if("string"==typeof u)l+=u;else if(u){var d=Cn(ur(u,e,t,n));s=tn(s,d+c),l+=d}}if(l){var p=Jt(s>>>0);t.hasNameForId(this.componentId,p)||t.insertRules(this.componentId,p,n(l,".".concat(p),void 0,this.componentId)),r=Sn(r,p)}}return r},e}(),fr=t.createContext(void 0);fr.Consumer;var mr={};new Set;function gr(e,n,r){var i=jn(e),o=e,a=!an(e),s=n.attrs,l=void 0===s?Wt:s,c=n.componentId,u=void 0===c?function(e,t){var n="string"!=typeof e?"sc":Qt(e);mr[n]=(mr[n]||0)+1;var r="".concat(n,"-").concat(rn(Vt+n+mr[n]));return t?"".concat(t,"-").concat(r):r}(n.displayName,n.parentComponentId):c,d=n.displayName,p=void 0===d?function(e){return an(e)?"styled.".concat(e):"Styled(".concat(on(e),")")}(e):d,h=n.displayName&&n.componentId?"".concat(Qt(n.displayName),"-").concat(n.componentId):n.componentId||u,f=i&&o.attrs?o.attrs.concat(l).filter(Boolean):l,m=n.shouldForwardProp;if(i&&o.shouldForwardProp){var g=o.shouldForwardProp;if(n.shouldForwardProp){var y=n.shouldForwardProp;m=function(e,t){return g(e,t)&&y(e,t)}}else m=g}var v=new hr(r,h,i?o.componentStyle:void 0);function x(e,n){return function(e,n,r){var i=e.attrs,o=e.componentStyle,a=e.defaultProps,s=e.foldedComponentIds,l=e.styledComponentId,c=e.target,u=t.useContext(fr),d=rr(),p=e.shouldForwardProp||d.shouldForwardProp,h=qt(n,u,a)||Ht,f=function(e,t,n){for(var r,i=Ae(Ae({},t),{className:void 0,theme:n}),o=0;o<e.length;o+=1){var a=kn(r=e[o])?r(i):r;for(var s in a)i[s]="className"===s?Sn(i[s],a[s]):"style"===s?Ae(Ae({},i[s]),a[s]):a[s]}return t.className&&(i.className=Sn(i.className,t.className)),i}(i,n,h),m=f.as||c,g={};for(var y in f)void 0===f[y]||"$"===y[0]||"as"===y||"theme"===y&&f.theme===h||("forwardedAs"===y?g.as=f.forwardedAs:p&&!p(y,m)||(g[y]=f[y]));var v=function(e,t){var n=rr();return e.generateAndInjectStyles(t,n.styleSheet,n.stylis)}(o,f),x=Sn(s,l);return v&&(x+=" "+v),f.className&&(x+=" "+f.className),g[an(m)&&!Yt.has(m)?"class":"className"]=x,r&&(g.ref=r),(0,t.createElement)(m,g)}(b,e,n)}x.displayName=p;var b=t.forwardRef(x);return b.attrs=f,b.componentStyle=v,b.displayName=p,b.shouldForwardProp=m,b.foldedComponentIds=i?Sn(o.foldedComponentIds,o.styledComponentId):"",b.styledComponentId=h,b.target=i?o.target:e,Object.defineProperty(b,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=i?function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var r=0,i=t;r<i.length;r++)En(e,i[r],!0);return e}({},o.defaultProps,e):e}}),Tn(b,function(){return".".concat(b.styledComponentId)}),a&&wn(b,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),b}function yr(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var vr=function(e){return Object.assign(e,{isCss:!0})};function xr(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(kn(e)||Pn(e))return vr(ur(yr(Wt,Ne([e],t,!0))));var r=e;return 0===t.length&&1===r.length&&"string"==typeof r[0]?ur(r):vr(ur(yr(r,t)))}function br(e,t,n){if(void 0===n&&(n=Ht),!t)throw zn(1,t);var r=function(r){for(var i=[],o=1;o<arguments.length;o++)i[o-1]=arguments[o];return e(t,n,xr.apply(void 0,Ne([r],i,!1)))};return r.attrs=function(r){return br(e,t,Ae(Ae({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)}))},r.withConfig=function(r){return br(e,t,Ae(Ae({},n),r))},r}var wr=function(e){return br(gr,e)},kr=wr;Yt.forEach(function(e){kr[e]=wr(e)});!function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=dr(e),Kn.registerId(this.componentId+1)}e.prototype.createStyles=function(e,t,n,r){var i=r(Cn(ur(this.rules,t,n,r)),""),o=this.componentId+e;n.insertRules(o,o,i)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,n,r){e>2&&Kn.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r)}}();function jr(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Cn(xr.apply(void 0,Ne([e],t,!1))),i=rn(r);return new or(i,r)}(function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString();if(!t)return"";var n=Un(),r=Cn([n&&'nonce="'.concat(n,'"'),"".concat(Lt,'="true"'),"".concat(Ft,'="').concat(Vt,'"')].filter(Boolean)," ");return"<style ".concat(r,">").concat(t,"</style>")},this.getStyleTags=function(){if(e.sealed)throw zn(2);return e._emitSheetCSS()},this.getStyleElement=function(){var n;if(e.sealed)throw zn(2);var r=e.instance.toString();if(!r)return[];var i=((n={})[Lt]="",n[Ft]=Vt,n.dangerouslySetInnerHTML={__html:r},n),o=Un();return o&&(i.nonce=o),[t.createElement("style",Ae({},i,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new Kn({isServer:!0}),this.sealed=!1}e.prototype.collectStyles=function(e){if(this.sealed)throw zn(2);return t.createElement(ir,{sheet:this.instance},e)},e.prototype.interleaveWithNodeStream=function(e){throw zn(3)}})(),"__sc-".concat(Lt,"__");var Sr={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const Cr=(e,n)=>{const r=(0,t.forwardRef)((r,i)=>{let{color:o="currentColor",size:a=24,strokeWidth:s=2,absoluteStrokeWidth:l,children:c,...u}=r;return(0,t.createElement)("svg",{ref:i,...Sr,width:a,height:a,stroke:o,strokeWidth:l?24*Number(s)/Number(a):s,className:`lucide lucide-${d=e,d.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,...u},[...n.map(e=>{let[n,r]=e;return(0,t.createElement)(n,r)}),...(Array.isArray(c)?c:[c])||[]]);var d});return r.displayName=`${e}`,r},Pr=Cr("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]),Er=Cr("Package",[["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]),Tr=Cr("Leaf",[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",key:"nnexq3"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",key:"mt58a7"}]]),zr=Cr("MessageCircle",[["path",{d:"m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z",key:"v2veuj"}]]),Dr=Cr("ShoppingCart",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]]),Mr=Cr("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]),Rr=Cr("UserCheck",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["polyline",{points:"16 11 18 13 22 9",key:"1pwet4"}]]),Or=Cr("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]),Ar=Cr("Shield",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}]]),Nr=Cr("HelpCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]),_r=Cr("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]),Lr=Cr("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]),Ir=Cr("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),Fr=Cr("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);var Vr=n(579);const Ur=kr.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(15px);
  z-index: 1000;
  padding: 1rem 0;
  transition: all 0.3s ease;
  border-bottom: 2px solid var(--cream-200);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
  height: 80px;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    padding: 0.75rem 0;
    height: 70px;
  }

  @media (max-width: 480px) {
    padding: 0.5rem 0;
    height: 65px;
  }
`,Br=kr.nav`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  gap: 2rem;

  @media (max-width: 768px) {
    padding: 0 15px;
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 0 10px;
    gap: 1rem;
  }
`,$r=kr.div`
  font-family: 'Playfair Display', serif;
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--primary-600);
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0.4rem 0.8rem;
  border-radius: 8px;
  
  &:hover {
    color: var(--primary-500);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(234, 179, 8, 0.2);
  }

  @media (max-width: 768px) {
    font-size: 1.4rem;
    padding: 0.2rem 0.6rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
    padding: 0.2rem 0.4rem;
  }
`,Wr=kr.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;

  @media (max-width: 768px) {
    position: fixed;
    top: 100%;
    left: 0;
    right: 0;
    background: white;
    flex-direction: column;
    padding: 2rem;
    transform: ${e=>e.isOpen?"translateY(0)":"translateY(-100%)"};
    opacity: ${e=>e.isOpen?"1":"0"};
    visibility: ${e=>e.isOpen?"visible":"hidden"};
    transition: all 0.3s ease;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
    border-top: 2px solid var(--cream-200);
    max-height: calc(100vh - 100%);
    overflow-y: auto;
  }

  @media (max-width: 480px) {
    padding: 1.5rem;
    gap: 1rem;
  }
`,Hr=kr(De)`
  text-decoration: none;
  color: #333;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  cursor: pointer;
  padding: 0.6rem 1rem;
  border-radius: 20px;
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  white-space: nowrap;
  
  &.active {
    color: var(--primary-600);
    background: var(--primary-50);
    box-shadow: 0 2px 8px rgba(234, 179, 8, 0.2);
  }
  
  &:hover {
    color: var(--primary-600);
    background: var(--cream-100);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(234, 179, 8, 0.15);
  }

  @media (max-width: 768px) {
    padding: 1rem 1.5rem;
    font-size: 1rem;
    width: 100%;
    justify-content: center;
    border-radius: 12px;
    margin-bottom: 0.5rem;
  }

  @media (max-width: 480px) {
    padding: 0.75rem 1rem;
    font-size: 0.9rem;
  }
`,qr=kr.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`,Yr=kr.button`
  background: var(--primary-600);
  border: none;
  cursor: pointer;
  padding: 0.75rem;
  border-radius: 50%;
  transition: all 0.3s ease;
  position: relative;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: var(--primary-500);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(234, 179, 8, 0.3);
  }

  &.secondary {
    background: transparent;
    color: var(--primary-600);
    border: 2px solid var(--primary-600);
    
    &:hover {
      background: var(--primary-600);
      color: white;
    }
  }
`,Kr=kr.span`
  position: absolute;
  top: -5px;
  right: -5px;
  background: var(--primary-500);
  color: white;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.25rem 0.5rem;
  border-radius: 50%;
  min-width: 20px;
  text-align: center;
  border: 2px solid white;
`,Gr=kr.button`
  display: none;
  background: var(--primary-600);
  border: none;
  cursor: pointer;
  padding: 0.75rem;
  border-radius: 8px;
  color: white;
  transition: all 0.3s ease;

  &:hover {
    background: var(--primary-500);
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`,Qr=kr.div`
  position: absolute;
  top: 100%;
  right: 0;
  background: white;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  border: 1px solid #e2e8f0;
  min-width: 200px;
  z-index: 1000;
  opacity: ${e=>e.isOpen?1:0};
  visibility: ${e=>e.isOpen?"visible":"hidden"};
  transform: ${e=>e.isOpen?"translateY(0)":"translateY(-10px)"};
  transition: all 0.3s ease;
  margin-top: 0.5rem;
`,Xr=kr.button`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  width: 100%;
  padding: 0.75rem 1rem;
  border: none;
  background: none;
  cursor: pointer;
  color: #1e293b;
  font-size: 0.9rem;
  transition: all 0.2s ease;
  border-radius: 0;

  &:hover {
    background: #f8fafc;
    color: #f59e0b;
  }

  &:first-child {
    border-radius: 12px 12px 0 0;
  }

  &:last-child {
    border-radius: 0 0 12px 12px;
    border-top: 1px solid #e2e8f0;
    color: #dc2626;
  }

  &:last-child:hover {
    background: #fef2f2;
    color: #dc2626;
  }
`,Zr=kr.button`
  position: relative;
  background: transparent;
  border: 2px solid #e2e8f0;
  color: #64748b;
  border-radius: 12px;
  padding: 0.75rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    border-color: #f59e0b;
    color: #f59e0b;
    transform: translateY(-1px);
  }
`,Jr=e=>{let{user:n,onLogout:r,cartCount:i=0,onCartClick:o,onLogin:a}=e;const[s,l]=t.useState(!1),[c,u]=t.useState(!1),d=e=>{switch(u(!1),e){case"profile":case"notifications":case"security":case"help":default:break;case"logout":r()}};return(0,Vr.jsx)(Ur,{children:(0,Vr.jsxs)(Br,{children:[(0,Vr.jsx)($r,{as:De,to:"/",children:"Nature's Dairy"}),(0,Vr.jsxs)(Wr,{isOpen:s,children:[(0,Vr.jsxs)(Hr,{to:"/about",children:[" ",(0,Vr.jsx)(Pr,{size:16})," About Us "]}),(0,Vr.jsxs)(Hr,{to:"/products",children:[" ",(0,Vr.jsx)(Er,{size:16})," Our Products "]}),(0,Vr.jsxs)(Hr,{to:"/practices",children:[" ",(0,Vr.jsx)(Tr,{size:16})," Farming Practices "]}),(0,Vr.jsxs)(Hr,{to:"/contact",children:[" ",(0,Vr.jsx)(zr,{size:16})," Contact Us "]}),(0,Vr.jsxs)(Hr,{to:"/orders",children:[" ",(0,Vr.jsx)(Er,{size:16})," My Orders "]})]}),(0,Vr.jsxs)(qr,{children:[(0,Vr.jsxs)(Yr,{onClick:o,title:"View Cart",children:[(0,Vr.jsx)(Dr,{size:20}),i>0&&(0,Vr.jsx)(Kr,{children:i})]}),n?(0,Vr.jsxs)("div",{style:{position:"relative"},children:[(0,Vr.jsx)(Zr,{onClick:()=>{u(!c)},title:"Settings",children:(0,Vr.jsx)(Mr,{size:20})}),(0,Vr.jsxs)(Qr,{isOpen:c,children:[(0,Vr.jsxs)(Xr,{onClick:()=>d("profile"),children:[(0,Vr.jsx)(Rr,{size:16}),"Profile Settings"]}),(0,Vr.jsxs)(Xr,{onClick:()=>d("notifications"),children:[(0,Vr.jsx)(Or,{size:16}),"Notifications"]}),(0,Vr.jsxs)(Xr,{onClick:()=>d("security"),children:[(0,Vr.jsx)(Ar,{size:16}),"Security"]}),(0,Vr.jsxs)(Xr,{onClick:()=>d("help"),children:[(0,Vr.jsx)(Nr,{size:16}),"Help & Support"]}),(0,Vr.jsxs)(Xr,{onClick:()=>d("logout"),children:[(0,Vr.jsx)(_r,{size:16}),"Logout"]})]})]}):(0,Vr.jsxs)(Yr,{onClick:a,title:"Login",style:{background:"transparent",color:"var(--primary-600)",border:"2px solid var(--primary-600)",borderRadius:"20px",padding:"0.5rem 1rem",fontSize:"0.9rem",fontWeight:"600"},children:[(0,Vr.jsx)(Lr,{size:16,style:{marginRight:"0.5rem"}}),"Login"]}),(0,Vr.jsx)(Gr,{onClick:()=>{l(!s)},children:s?(0,Vr.jsx)(Ir,{size:24}):(0,Vr.jsx)(Fr,{size:24})})]})]})})},ei=(0,t.createContext)({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"}),ti=(0,t.createContext)({}),ni=(0,t.createContext)(null),ri="undefined"!==typeof document,ii=ri?t.useLayoutEffect:t.useEffect,oi=(0,t.createContext)({strict:!1}),ai=e=>e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),si="data-"+ai("framerAppearId");function li(e){return e&&"object"===typeof e&&Object.prototype.hasOwnProperty.call(e,"current")}function ci(e){return"string"===typeof e||Array.isArray(e)}function ui(e){return null!==e&&"object"===typeof e&&"function"===typeof e.start}const di=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],pi=["initial",...di];function hi(e){return ui(e.animate)||pi.some(t=>ci(e[t]))}function fi(e){return Boolean(hi(e)||e.variants)}function mi(e){const{initial:n,animate:r}=function(e,t){if(hi(e)){const{initial:t,animate:n}=e;return{initial:!1===t||ci(t)?t:void 0,animate:ci(n)?n:void 0}}return!1!==e.inherit?t:{}}(e,(0,t.useContext)(ti));return(0,t.useMemo)(()=>({initial:n,animate:r}),[gi(n),gi(r)])}function gi(e){return Array.isArray(e)?e.join(" "):e}const yi={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},vi={};for(const n in yi)vi[n]={isEnabled:e=>yi[n].some(t=>!!e[t])};const xi=(0,t.createContext)({}),bi=(0,t.createContext)({}),wi=Symbol.for("motionComponentSymbol");function ki(e){let{preloadedFeatures:n,createVisualElement:r,useRender:i,useVisualState:o,Component:a}=e;n&&function(e){for(const t in e)vi[t]={...vi[t],...e[t]}}(n);const s=(0,t.forwardRef)(function(e,s){let l;const c={...(0,t.useContext)(ei),...e,layoutId:ji(e)},{isStatic:u}=c,d=mi(e),p=o(e,u);if(!u&&ri){d.visualElement=function(e,n,r,i){const{visualElement:o}=(0,t.useContext)(ti),a=(0,t.useContext)(oi),s=(0,t.useContext)(ni),l=(0,t.useContext)(ei).reducedMotion,c=(0,t.useRef)();i=i||a.renderer,!c.current&&i&&(c.current=i(e,{visualState:n,parent:o,props:r,presenceContext:s,blockInitialAnimation:!!s&&!1===s.initial,reducedMotionConfig:l}));const u=c.current;(0,t.useInsertionEffect)(()=>{u&&u.update(r,s)});const d=(0,t.useRef)(Boolean(r[si]&&!window.HandoffComplete));return ii(()=>{u&&(u.render(),d.current&&u.animationState&&u.animationState.animateChanges())}),(0,t.useEffect)(()=>{u&&(u.updateFeatures(),!d.current&&u.animationState&&u.animationState.animateChanges(),d.current&&(d.current=!1,window.HandoffComplete=!0))}),u}(a,p,c,r);const e=(0,t.useContext)(bi),i=(0,t.useContext)(oi).strict;d.visualElement&&(l=d.visualElement.loadFeatures(c,i,n,e))}return t.createElement(ti.Provider,{value:d},l&&d.visualElement?t.createElement(l,{visualElement:d.visualElement,...c}):null,i(a,e,function(e,n,r){return(0,t.useCallback)(t=>{t&&e.mount&&e.mount(t),n&&(t?n.mount(t):n.unmount()),r&&("function"===typeof r?r(t):li(r)&&(r.current=t))},[n])}(p,d.visualElement,s),p,u,d.visualElement))});return s[wi]=a,s}function ji(e){let{layoutId:n}=e;const r=(0,t.useContext)(xi).id;return r&&void 0!==n?r+"-"+n:n}function Si(e){function t(t){return ki(e(t,arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}))}if("undefined"===typeof Proxy)return t;const n=new Map;return new Proxy(t,{get:(e,r)=>(n.has(r)||n.set(r,t(r)),n.get(r))})}const Ci=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Pi(e){return"string"===typeof e&&!e.includes("-")&&!!(Ci.indexOf(e)>-1||/[A-Z]/.test(e))}const Ei={};const Ti=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],zi=new Set(Ti);function Di(e,t){let{layout:n,layoutId:r}=t;return zi.has(e)||e.startsWith("origin")||(n||void 0!==r)&&(!!Ei[e]||"opacity"===e)}const Mi=e=>Boolean(e&&e.getVelocity),Ri={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},Oi=Ti.length;const Ai=e=>t=>"string"===typeof t&&t.startsWith(e),Ni=Ai("--"),_i=Ai("var(--"),Li=(e,t)=>t&&"number"===typeof e?t.transform(e):e,Ii=(e,t,n)=>Math.min(Math.max(n,e),t),Fi={test:e=>"number"===typeof e,parse:parseFloat,transform:e=>e},Vi={...Fi,transform:e=>Ii(0,1,e)},Ui={...Fi,default:1},Bi=e=>Math.round(1e5*e)/1e5,$i=/(-)?([\d]*\.?[\d])+/g,Wi=/(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,Hi=/^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function qi(e){return"string"===typeof e}const Yi=e=>({test:t=>qi(t)&&t.endsWith(e)&&1===t.split(" ").length,parse:parseFloat,transform:t=>`${t}${e}`}),Ki=Yi("deg"),Gi=Yi("%"),Qi=Yi("px"),Xi=Yi("vh"),Zi=Yi("vw"),Ji={...Gi,parse:e=>Gi.parse(e)/100,transform:e=>Gi.transform(100*e)},eo={...Fi,transform:Math.round},to={borderWidth:Qi,borderTopWidth:Qi,borderRightWidth:Qi,borderBottomWidth:Qi,borderLeftWidth:Qi,borderRadius:Qi,radius:Qi,borderTopLeftRadius:Qi,borderTopRightRadius:Qi,borderBottomRightRadius:Qi,borderBottomLeftRadius:Qi,width:Qi,maxWidth:Qi,height:Qi,maxHeight:Qi,size:Qi,top:Qi,right:Qi,bottom:Qi,left:Qi,padding:Qi,paddingTop:Qi,paddingRight:Qi,paddingBottom:Qi,paddingLeft:Qi,margin:Qi,marginTop:Qi,marginRight:Qi,marginBottom:Qi,marginLeft:Qi,rotate:Ki,rotateX:Ki,rotateY:Ki,rotateZ:Ki,scale:Ui,scaleX:Ui,scaleY:Ui,scaleZ:Ui,skew:Ki,skewX:Ki,skewY:Ki,distance:Qi,translateX:Qi,translateY:Qi,translateZ:Qi,x:Qi,y:Qi,z:Qi,perspective:Qi,transformPerspective:Qi,opacity:Vi,originX:Ji,originY:Ji,originZ:Qi,zIndex:eo,fillOpacity:Vi,strokeOpacity:Vi,numOctaves:eo};function no(e,t,n,r){const{style:i,vars:o,transform:a,transformOrigin:s}=e;let l=!1,c=!1,u=!0;for(const d in t){const e=t[d];if(Ni(d)){o[d]=e;continue}const n=to[d],r=Li(e,n);if(zi.has(d)){if(l=!0,a[d]=r,!u)continue;e!==(n.default||0)&&(u=!1)}else d.startsWith("origin")?(c=!0,s[d]=r):i[d]=r}if(t.transform||(l||r?i.transform=function(e,t,n,r){let{enableHardwareAcceleration:i=!0,allowTransformNone:o=!0}=t,a="";for(let s=0;s<Oi;s++){const t=Ti[s];void 0!==e[t]&&(a+=`${Ri[t]||t}(${e[t]}) `)}return i&&!e.z&&(a+="translateZ(0)"),a=a.trim(),r?a=r(e,n?"":a):o&&n&&(a="none"),a}(e.transform,n,u,r):i.transform&&(i.transform="none")),c){const{originX:e="50%",originY:t="50%",originZ:n=0}=s;i.transformOrigin=`${e} ${t} ${n}`}}const ro=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function io(e,t,n){for(const r in t)Mi(t[r])||Di(r,n)||(e[r]=t[r])}function oo(e,n,r){const i={};return io(i,e.style||{},e),Object.assign(i,function(e,n,r){let{transformTemplate:i}=e;return(0,t.useMemo)(()=>{const e={style:{},transform:{},transformOrigin:{},vars:{}};return no(e,n,{enableHardwareAcceleration:!r},i),Object.assign({},e.vars,e.style)},[n])}(e,n,r)),e.transformValues?e.transformValues(i):i}function ao(e,t,n){const r={},i=oo(e,t,n);return e.drag&&!1!==e.dragListener&&(r.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=!0===e.drag?"none":"pan-"+("x"===e.drag?"y":"x")),void 0===e.tabIndex&&(e.onTap||e.onTapStart||e.whileTap)&&(r.tabIndex=0),r.style=i,r}const so=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","transformValues","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function lo(e){return e.startsWith("while")||e.startsWith("drag")&&"draggable"!==e||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||so.has(e)}let co=e=>!lo(e);try{(uo=require("@emotion/is-prop-valid").default)&&(co=e=>e.startsWith("on")?!lo(e):uo(e))}catch(hx){}var uo;function po(e,t,n){return"string"===typeof e?e:Qi.transform(t+n*e)}const ho={offset:"stroke-dashoffset",array:"stroke-dasharray"},fo={offset:"strokeDashoffset",array:"strokeDasharray"};function mo(e,t,n,r,i){let{attrX:o,attrY:a,attrScale:s,originX:l,originY:c,pathLength:u,pathSpacing:d=1,pathOffset:p=0,...h}=t;if(no(e,h,n,i),r)return void(e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox));e.attrs=e.style,e.style={};const{attrs:f,style:m,dimensions:g}=e;f.transform&&(g&&(m.transform=f.transform),delete f.transform),g&&(void 0!==l||void 0!==c||m.transform)&&(m.transformOrigin=function(e,t,n){return`${po(t,e.x,e.width)} ${po(n,e.y,e.height)}`}(g,void 0!==l?l:.5,void 0!==c?c:.5)),void 0!==o&&(f.x=o),void 0!==a&&(f.y=a),void 0!==s&&(f.scale=s),void 0!==u&&function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,i=!(arguments.length>4&&void 0!==arguments[4])||arguments[4];e.pathLength=1;const o=i?ho:fo;e[o.offset]=Qi.transform(-r);const a=Qi.transform(t),s=Qi.transform(n);e[o.array]=`${a} ${s}`}(f,u,d,p,!1)}const go=()=>({style:{},transform:{},transformOrigin:{},vars:{},attrs:{}}),yo=e=>"string"===typeof e&&"svg"===e.toLowerCase();function vo(e,n,r,i){const o=(0,t.useMemo)(()=>{const t={style:{},transform:{},transformOrigin:{},vars:{},attrs:{}};return mo(t,n,{enableHardwareAcceleration:!1},yo(i),e.transformTemplate),{...t.attrs,style:{...t.style}}},[n]);if(e.style){const t={};io(t,e.style,e),o.style={...t,...o.style}}return o}function xo(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return(n,r,i,o,a)=>{let{latestValues:s}=o;const l=(Pi(n)?vo:ao)(r,s,a,n),c=function(e,t,n){const r={};for(const i in e)"values"===i&&"object"===typeof e.values||(co(i)||!0===n&&lo(i)||!t&&!lo(i)||e.draggable&&i.startsWith("onDrag"))&&(r[i]=e[i]);return r}(r,"string"===typeof n,e),u={...c,...l,ref:i},{children:d}=r,p=(0,t.useMemo)(()=>Mi(d)?d.get():d,[d]);return(0,t.createElement)(n,{...u,children:p})}}function bo(e,t,n,r){let{style:i,vars:o}=t;Object.assign(e.style,i,r&&r.getProjectionStyles(n));for(const a in o)e.style.setProperty(a,o[a])}const wo=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function ko(e,t,n,r){bo(e,t,void 0,r);for(const i in t.attrs)e.setAttribute(wo.has(i)?i:ai(i),t.attrs[i])}function jo(e,t){const{style:n}=e,r={};for(const i in n)(Mi(n[i])||t.style&&Mi(t.style[i])||Di(i,e))&&(r[i]=n[i]);return r}function So(e,t){const n=jo(e,t);for(const r in e)if(Mi(e[r])||Mi(t[r])){n[-1!==Ti.indexOf(r)?"attr"+r.charAt(0).toUpperCase()+r.substring(1):r]=e[r]}return n}function Co(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{};return"function"===typeof t&&(t=t(void 0!==n?n:e.custom,r,i)),"string"===typeof t&&(t=e.variants&&e.variants[t]),"function"===typeof t&&(t=t(void 0!==n?n:e.custom,r,i)),t}function Po(e){const n=(0,t.useRef)(null);return null===n.current&&(n.current=e()),n.current}const Eo=e=>Array.isArray(e),To=e=>Eo(e)?e[e.length-1]||0:e;function zo(e){const t=Mi(e)?e.get():e;return(e=>Boolean(e&&"object"===typeof e&&e.mix&&e.toValue))(t)?t.toValue():t}const Do=e=>(n,r)=>{const i=(0,t.useContext)(ti),o=(0,t.useContext)(ni),a=()=>function(e,t,n,r){let{scrapeMotionValuesFromProps:i,createRenderState:o,onMount:a}=e;const s={latestValues:Mo(t,n,r,i),renderState:o()};return a&&(s.mount=e=>a(t,e,s)),s}(e,n,i,o);return r?a():Po(a)};function Mo(e,t,n,r){const i={},o=r(e,{});for(const p in o)i[p]=zo(o[p]);let{initial:a,animate:s}=e;const l=hi(e),c=fi(e);t&&c&&!l&&!1!==e.inherit&&(void 0===a&&(a=t.initial),void 0===s&&(s=t.animate));let u=!!n&&!1===n.initial;u=u||!1===a;const d=u?s:a;if(d&&"boolean"!==typeof d&&!ui(d)){(Array.isArray(d)?d:[d]).forEach(t=>{const n=Co(e,t);if(!n)return;const{transitionEnd:r,transition:o,...a}=n;for(const e in a){let t=a[e];if(Array.isArray(t)){t=t[u?t.length-1:0]}null!==t&&(i[e]=t)}for(const e in r)i[e]=r[e]})}return i}const Ro=e=>e;class Oo{constructor(){this.order=[],this.scheduled=new Set}add(e){if(!this.scheduled.has(e))return this.scheduled.add(e),this.order.push(e),!0}remove(e){const t=this.order.indexOf(e);-1!==t&&(this.order.splice(t,1),this.scheduled.delete(e))}clear(){this.order.length=0,this.scheduled.clear()}}const Ao=["prepare","read","update","preRender","render","postRender"];const{schedule:No,cancel:_o,state:Lo,steps:Io}=function(e,t){let n=!1,r=!0;const i={delta:0,timestamp:0,isProcessing:!1},o=Ao.reduce((e,t)=>(e[t]=function(e){let t=new Oo,n=new Oo,r=0,i=!1,o=!1;const a=new WeakSet,s={schedule:function(e){const o=arguments.length>2&&void 0!==arguments[2]&&arguments[2]&&i,s=o?t:n;return arguments.length>1&&void 0!==arguments[1]&&arguments[1]&&a.add(e),s.add(e)&&o&&i&&(r=t.order.length),e},cancel:e=>{n.remove(e),a.delete(e)},process:l=>{if(i)o=!0;else{if(i=!0,[t,n]=[n,t],n.clear(),r=t.order.length,r)for(let n=0;n<r;n++){const r=t.order[n];r(l),a.has(r)&&(s.schedule(r),e())}i=!1,o&&(o=!1,s.process(l))}}};return s}(()=>n=!0),e),{}),a=e=>o[e].process(i),s=()=>{const o=performance.now();n=!1,i.delta=r?1e3/60:Math.max(Math.min(o-i.timestamp,40),1),i.timestamp=o,i.isProcessing=!0,Ao.forEach(a),i.isProcessing=!1,n&&t&&(r=!1,e(s))},l=Ao.reduce((t,a)=>{const l=o[a];return t[a]=function(t){let o=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return n||(n=!0,r=!0,i.isProcessing||e(s)),l.schedule(t,o,a)},t},{});return{schedule:l,cancel:e=>Ao.forEach(t=>o[t].cancel(e)),state:i,steps:o}}("undefined"!==typeof requestAnimationFrame?requestAnimationFrame:Ro,!0),Fo={useVisualState:Do({scrapeMotionValuesFromProps:So,createRenderState:go,onMount:(e,t,n)=>{let{renderState:r,latestValues:i}=n;No.read(()=>{try{r.dimensions="function"===typeof t.getBBox?t.getBBox():t.getBoundingClientRect()}catch(px){r.dimensions={x:0,y:0,width:0,height:0}}}),No.render(()=>{mo(r,i,{enableHardwareAcceleration:!1},yo(t.tagName),e.transformTemplate),ko(t,r)})}})},Vo={useVisualState:Do({scrapeMotionValuesFromProps:jo,createRenderState:ro})};function Uo(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{passive:!0};return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}const Bo=e=>"mouse"===e.pointerType?"number"!==typeof e.button||e.button<=0:!1!==e.isPrimary;function $o(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"page";return{point:{x:e[t+"X"],y:e[t+"Y"]}}}function Wo(e,t,n,r){return Uo(e,t,(e=>t=>Bo(t)&&e(t,$o(t)))(n),r)}const Ho=(e,t)=>n=>t(e(n)),qo=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.reduce(Ho)};function Yo(e){let t=null;return()=>{const n=()=>{t=null};return null===t&&(t=e,n)}}const Ko=Yo("dragHorizontal"),Go=Yo("dragVertical");function Qo(e){let t=!1;if("y"===e)t=Go();else if("x"===e)t=Ko();else{const e=Ko(),n=Go();e&&n?t=()=>{e(),n()}:(e&&e(),n&&n())}return t}function Xo(){const e=Qo(!0);return!e||(e(),!1)}class Zo{constructor(e){this.isMounted=!1,this.node=e}update(){}}function Jo(e,t){const n="pointer"+(t?"enter":"leave"),r="onHover"+(t?"Start":"End");return Wo(e.current,n,(n,i)=>{if("touch"===n.pointerType||Xo())return;const o=e.getProps();e.animationState&&o.whileHover&&e.animationState.setActive("whileHover",t),o[r]&&No.update(()=>o[r](n,i))},{passive:!e.getProps()[r]})}const ea=(e,t)=>!!t&&(e===t||ea(e,t.parentElement));function ta(e,t){if(!t)return;const n=new PointerEvent("pointer"+e);t(n,$o(n))}const na=new WeakMap,ra=new WeakMap,ia=e=>{const t=na.get(e.target);t&&t(e)},oa=e=>{e.forEach(ia)};function aa(e,t,n){const r=function(e){let{root:t,...n}=e;const r=t||document;ra.has(r)||ra.set(r,{});const i=ra.get(r),o=JSON.stringify(n);return i[o]||(i[o]=new IntersectionObserver(oa,{root:t,...n})),i[o]}(t);return na.set(e,n),r.observe(e),()=>{na.delete(e),r.unobserve(e)}}const sa={some:0,all:1};const la={inView:{Feature:class extends Zo{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:t,margin:n,amount:r="some",once:i}=e,o={root:t?t.current:void 0,rootMargin:n,threshold:"number"===typeof r?r:sa[r]};return aa(this.node.current,o,e=>{const{isIntersecting:t}=e;if(this.isInView===t)return;if(this.isInView=t,i&&!t&&this.hasEnteredView)return;t&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",t);const{onViewportEnter:n,onViewportLeave:r}=this.node.getProps(),o=t?n:r;o&&o(e)})}mount(){this.startObserver()}update(){if("undefined"===typeof IntersectionObserver)return;const{props:e,prevProps:t}=this.node,n=["amount","margin","root"].some(function(e){let{viewport:t={}}=e,{viewport:n={}}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e=>t[e]!==n[e]}(e,t));n&&this.startObserver()}unmount(){}}},tap:{Feature:class extends Zo{constructor(){super(...arguments),this.removeStartListeners=Ro,this.removeEndListeners=Ro,this.removeAccessibleListeners=Ro,this.startPointerPress=(e,t)=>{if(this.isPressing)return;this.removeEndListeners();const n=this.node.getProps(),r=Wo(window,"pointerup",(e,t)=>{if(!this.checkPressEnd())return;const{onTap:n,onTapCancel:r,globalTapTarget:i}=this.node.getProps();No.update(()=>{i||ea(this.node.current,e.target)?n&&n(e,t):r&&r(e,t)})},{passive:!(n.onTap||n.onPointerUp)}),i=Wo(window,"pointercancel",(e,t)=>this.cancelPress(e,t),{passive:!(n.onTapCancel||n.onPointerCancel)});this.removeEndListeners=qo(r,i),this.startPress(e,t)},this.startAccessiblePress=()=>{const e=Uo(this.node.current,"keydown",e=>{if("Enter"!==e.key||this.isPressing)return;this.removeEndListeners(),this.removeEndListeners=Uo(this.node.current,"keyup",e=>{"Enter"===e.key&&this.checkPressEnd()&&ta("up",(e,t)=>{const{onTap:n}=this.node.getProps();n&&No.update(()=>n(e,t))})}),ta("down",(e,t)=>{this.startPress(e,t)})}),t=Uo(this.node.current,"blur",()=>{this.isPressing&&ta("cancel",(e,t)=>this.cancelPress(e,t))});this.removeAccessibleListeners=qo(e,t)}}startPress(e,t){this.isPressing=!0;const{onTapStart:n,whileTap:r}=this.node.getProps();r&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),n&&No.update(()=>n(e,t))}checkPressEnd(){this.removeEndListeners(),this.isPressing=!1;return this.node.getProps().whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!Xo()}cancelPress(e,t){if(!this.checkPressEnd())return;const{onTapCancel:n}=this.node.getProps();n&&No.update(()=>n(e,t))}mount(){const e=this.node.getProps(),t=Wo(e.globalTapTarget?window:this.node.current,"pointerdown",this.startPointerPress,{passive:!(e.onTapStart||e.onPointerStart)}),n=Uo(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=qo(t,n)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}},focus:{Feature:class extends Zo{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch(px){e=!0}e&&this.node.animationState&&(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){this.isActive&&this.node.animationState&&(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=qo(Uo(this.node.current,"focus",()=>this.onFocus()),Uo(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}},hover:{Feature:class extends Zo{mount(){this.unmount=qo(Jo(this.node,!0),Jo(this.node,!1))}unmount(){}}}};function ca(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}function ua(e,t,n){const r=e.getProps();return Co(r,t,void 0!==n?n:r.custom,function(e){const t={};return e.values.forEach((e,n)=>t[n]=e.get()),t}(e),function(e){const t={};return e.values.forEach((e,n)=>t[n]=e.getVelocity()),t}(e))}let da=Ro,pa=Ro;const ha=e=>1e3*e,fa=e=>e/1e3,ma=!1,ga=e=>Array.isArray(e)&&"number"===typeof e[0];function ya(e){return Boolean(!e||"string"===typeof e&&xa[e]||ga(e)||Array.isArray(e)&&e.every(ya))}const va=e=>{let[t,n,r,i]=e;return`cubic-bezier(${t}, ${n}, ${r}, ${i})`},xa={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:va([0,.65,.55,1]),circOut:va([.55,0,1,.45]),backIn:va([.31,.01,.66,-.59]),backOut:va([.33,1.53,.69,.99])};function ba(e){if(e)return ga(e)?va(e):Array.isArray(e)?e.map(ba):xa[e]}const wa=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e;function ka(e,t,n,r){if(e===t&&n===r)return Ro;const i=t=>function(e,t,n,r,i){let o,a,s=0;do{a=t+(n-t)/2,o=wa(a,r,i)-e,o>0?n=a:t=a}while(Math.abs(o)>1e-7&&++s<12);return a}(t,0,1,e,n);return e=>0===e||1===e?e:wa(i(e),t,r)}const ja=ka(.42,0,1,1),Sa=ka(0,0,.58,1),Ca=ka(.42,0,.58,1),Pa=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,Ea=e=>t=>1-e(1-t),Ta=e=>1-Math.sin(Math.acos(e)),za=Ea(Ta),Da=Pa(Ta),Ma=ka(.33,1.53,.69,.99),Ra=Ea(Ma),Oa=Pa(Ra),Aa={linear:Ro,easeIn:ja,easeInOut:Ca,easeOut:Sa,circIn:Ta,circInOut:Da,circOut:za,backIn:Ra,backInOut:Oa,backOut:Ma,anticipate:e=>(e*=2)<1?.5*Ra(e):.5*(2-Math.pow(2,-10*(e-1)))},Na=e=>{if(Array.isArray(e)){pa(4===e.length,"Cubic bezier arrays must contain four numerical values.");const[t,n,r,i]=e;return ka(t,n,r,i)}return"string"===typeof e?(pa(void 0!==Aa[e],`Invalid easing type '${e}'`),Aa[e]):e},_a=(e,t)=>n=>Boolean(qi(n)&&Hi.test(n)&&n.startsWith(e)||t&&Object.prototype.hasOwnProperty.call(n,t)),La=(e,t,n)=>r=>{if(!qi(r))return r;const[i,o,a,s]=r.match($i);return{[e]:parseFloat(i),[t]:parseFloat(o),[n]:parseFloat(a),alpha:void 0!==s?parseFloat(s):1}},Ia={...Fi,transform:e=>Math.round((e=>Ii(0,255,e))(e))},Fa={test:_a("rgb","red"),parse:La("red","green","blue"),transform:e=>{let{red:t,green:n,blue:r,alpha:i=1}=e;return"rgba("+Ia.transform(t)+", "+Ia.transform(n)+", "+Ia.transform(r)+", "+Bi(Vi.transform(i))+")"}};const Va={test:_a("#"),parse:function(e){let t="",n="",r="",i="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}},transform:Fa.transform},Ua={test:_a("hsl","hue"),parse:La("hue","saturation","lightness"),transform:e=>{let{hue:t,saturation:n,lightness:r,alpha:i=1}=e;return"hsla("+Math.round(t)+", "+Gi.transform(Bi(n))+", "+Gi.transform(Bi(r))+", "+Bi(Vi.transform(i))+")"}},Ba={test:e=>Fa.test(e)||Va.test(e)||Ua.test(e),parse:e=>Fa.test(e)?Fa.parse(e):Ua.test(e)?Ua.parse(e):Va.parse(e),transform:e=>qi(e)?e:e.hasOwnProperty("red")?Fa.transform(e):Ua.transform(e)},$a=(e,t,n)=>-n*e+n*t+e;function Wa(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}const Ha=(e,t,n)=>{const r=e*e;return Math.sqrt(Math.max(0,n*(t*t-r)+r))},qa=[Va,Fa,Ua];function Ya(e){const t=(e=>qa.find(t=>t.test(e)))(e);pa(Boolean(t),`'${e}' is not an animatable color. Use the equivalent color code instead.`);let n=t.parse(e);return t===Ua&&(n=function(e){let{hue:t,saturation:n,lightness:r,alpha:i}=e;t/=360,n/=100,r/=100;let o=0,a=0,s=0;if(n){const e=r<.5?r*(1+n):r+n-r*n,i=2*r-e;o=Wa(i,e,t+1/3),a=Wa(i,e,t),s=Wa(i,e,t-1/3)}else o=a=s=r;return{red:Math.round(255*o),green:Math.round(255*a),blue:Math.round(255*s),alpha:i}}(n)),n}const Ka=(e,t)=>{const n=Ya(e),r=Ya(t),i={...n};return e=>(i.red=Ha(n.red,r.red,e),i.green=Ha(n.green,r.green,e),i.blue=Ha(n.blue,r.blue,e),i.alpha=$a(n.alpha,r.alpha,e),Fa.transform(i))};const Ga={regex:/var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,countKey:"Vars",token:"${v}",parse:Ro},Qa={regex:Wi,countKey:"Colors",token:"${c}",parse:Ba.parse},Xa={regex:$i,countKey:"Numbers",token:"${n}",parse:Fi.parse};function Za(e,t){let{regex:n,countKey:r,token:i,parse:o}=t;const a=e.tokenised.match(n);a&&(e["num"+r]=a.length,e.tokenised=e.tokenised.replace(n,i),e.values.push(...a.map(o)))}function Ja(e){const t=e.toString(),n={value:t,tokenised:t,values:[],numVars:0,numColors:0,numNumbers:0};return n.value.includes("var(--")&&Za(n,Ga),Za(n,Qa),Za(n,Xa),n}function es(e){return Ja(e).values}function ts(e){const{values:t,numColors:n,numVars:r,tokenised:i}=Ja(e),o=t.length;return e=>{let t=i;for(let i=0;i<o;i++)t=i<r?t.replace(Ga.token,e[i]):i<r+n?t.replace(Qa.token,Ba.transform(e[i])):t.replace(Xa.token,Bi(e[i]));return t}}const ns=e=>"number"===typeof e?0:e;const rs={test:function(e){var t,n;return isNaN(e)&&qi(e)&&((null===(t=e.match($i))||void 0===t?void 0:t.length)||0)+((null===(n=e.match(Wi))||void 0===n?void 0:n.length)||0)>0},parse:es,createTransformer:ts,getAnimatableNone:function(e){const t=es(e);return ts(e)(t.map(ns))}},is=(e,t)=>n=>`${n>0?t:e}`;function os(e,t){return"number"===typeof e?n=>$a(e,t,n):Ba.test(e)?Ka(e,t):e.startsWith("var(")?is(e,t):ls(e,t)}const as=(e,t)=>{const n=[...e],r=n.length,i=e.map((e,n)=>os(e,t[n]));return e=>{for(let t=0;t<r;t++)n[t]=i[t](e);return n}},ss=(e,t)=>{const n={...e,...t},r={};for(const i in n)void 0!==e[i]&&void 0!==t[i]&&(r[i]=os(e[i],t[i]));return e=>{for(const t in r)n[t]=r[t](e);return n}},ls=(e,t)=>{const n=rs.createTransformer(t),r=Ja(e),i=Ja(t);return r.numVars===i.numVars&&r.numColors===i.numColors&&r.numNumbers>=i.numNumbers?qo(as(r.values,i.values),n):(da(!0,`Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`),is(e,t))},cs=(e,t,n)=>{const r=t-e;return 0===r?1:(n-e)/r},us=(e,t)=>n=>$a(e,t,n);function ds(e,t,n){const r=[],i=n||function(e){return"number"===typeof e?us:"string"===typeof e?Ba.test(e)?Ka:ls:Array.isArray(e)?as:"object"===typeof e?ss:us}(e[0]),o=e.length-1;for(let a=0;a<o;a++){let n=i(e[a],e[a+1]);if(t){const e=Array.isArray(t)?t[a]||Ro:t;n=qo(e,n)}r.push(n)}return r}function ps(e,t){let{clamp:n=!0,ease:r,mixer:i}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const o=e.length;if(pa(o===t.length,"Both input and output ranges must be the same length"),1===o)return()=>t[0];e[0]>e[o-1]&&(e=[...e].reverse(),t=[...t].reverse());const a=ds(t,r,i),s=a.length,l=t=>{let n=0;if(s>1)for(;n<e.length-2&&!(t<e[n+1]);n++);const r=cs(e[n],e[n+1],t);return a[n](r)};return n?t=>l(Ii(e[0],e[o-1],t)):l}function hs(e){const t=[0];return function(e,t){const n=e[e.length-1];for(let r=1;r<=t;r++){const i=cs(0,t,r);e.push($a(n,1,i))}}(t,e.length-1),t}function fs(e){let{duration:t=300,keyframes:n,times:r,ease:i="easeInOut"}=e;const o=(e=>Array.isArray(e)&&"number"!==typeof e[0])(i)?i.map(Na):Na(i),a={done:!1,value:n[0]},s=function(e,t){return e.map(e=>e*t)}(r&&r.length===n.length?r:hs(n),t),l=ps(s,n,{ease:Array.isArray(o)?o:(c=n,u=o,c.map(()=>u||Ca).splice(0,c.length-1))});var c,u;return{calculatedDuration:t,next:e=>(a.value=l(e),a.done=e>=t,a)}}function ms(e,t){return t?e*(1e3/t):0}function gs(e,t,n){const r=Math.max(t-5,0);return ms(n-e(r),t-r)}const ys=.001;function vs(e){let t,n,{duration:r=800,bounce:i=.25,velocity:o=0,mass:a=1}=e;da(r<=ha(10),"Spring duration must be 10 seconds or less");let s=1-i;s=Ii(.05,1,s),r=Ii(.01,10,fa(r)),s<1?(t=e=>{const t=e*s,n=t*r,i=t-o,a=bs(e,s),l=Math.exp(-n);return ys-i/a*l},n=e=>{const n=e*s*r,i=n*o+o,a=Math.pow(s,2)*Math.pow(e,2)*r,l=Math.exp(-n),c=bs(Math.pow(e,2),s);return(-t(e)+ys>0?-1:1)*((i-a)*l)/c}):(t=e=>Math.exp(-e*r)*((e-o)*r+1)-.001,n=e=>Math.exp(-e*r)*(r*r*(o-e)));const l=function(e,t,n){let r=n;for(let i=1;i<xs;i++)r-=e(r)/t(r);return r}(t,n,5/r);if(r=ha(r),isNaN(l))return{stiffness:100,damping:10,duration:r};{const e=Math.pow(l,2)*a;return{stiffness:e,damping:2*s*Math.sqrt(a*e),duration:r}}}const xs=12;function bs(e,t){return e*Math.sqrt(1-t*t)}const ws=["duration","bounce"],ks=["stiffness","damping","mass"];function js(e,t){return t.some(t=>void 0!==e[t])}function Ss(e){let{keyframes:t,restDelta:n,restSpeed:r,...i}=e;const o=t[0],a=t[t.length-1],s={done:!1,value:o},{stiffness:l,damping:c,mass:u,duration:d,velocity:p,isResolvedFromDuration:h}=function(e){let t={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...e};if(!js(e,ks)&&js(e,ws)){const n=vs(e);t={...t,...n,mass:1},t.isResolvedFromDuration=!0}return t}({...i,velocity:-fa(i.velocity||0)}),f=p||0,m=c/(2*Math.sqrt(l*u)),g=a-o,y=fa(Math.sqrt(l/u)),v=Math.abs(g)<5;let x;if(r||(r=v?.01:2),n||(n=v?.005:.5),m<1){const e=bs(y,m);x=t=>{const n=Math.exp(-m*y*t);return a-n*((f+m*y*g)/e*Math.sin(e*t)+g*Math.cos(e*t))}}else if(1===m)x=e=>a-Math.exp(-y*e)*(g+(f+y*g)*e);else{const e=y*Math.sqrt(m*m-1);x=t=>{const n=Math.exp(-m*y*t),r=Math.min(e*t,300);return a-n*((f+m*y*g)*Math.sinh(r)+e*g*Math.cosh(r))/e}}return{calculatedDuration:h&&d||null,next:e=>{const t=x(e);if(h)s.done=e>=d;else{let i=f;0!==e&&(i=m<1?gs(x,e,t):0);const o=Math.abs(i)<=r,l=Math.abs(a-t)<=n;s.done=o&&l}return s.value=s.done?a:t,s}}}function Cs(e){let{keyframes:t,velocity:n=0,power:r=.8,timeConstant:i=325,bounceDamping:o=10,bounceStiffness:a=500,modifyTarget:s,min:l,max:c,restDelta:u=.5,restSpeed:d}=e;const p=t[0],h={done:!1,value:p},f=e=>void 0===l?c:void 0===c||Math.abs(l-e)<Math.abs(c-e)?l:c;let m=r*n;const g=p+m,y=void 0===s?g:s(g);y!==g&&(m=y-p);const v=e=>-m*Math.exp(-e/i),x=e=>y+v(e),b=e=>{const t=v(e),n=x(e);h.done=Math.abs(t)<=u,h.value=h.done?y:n};let w,k;const j=e=>{(e=>void 0!==l&&e<l||void 0!==c&&e>c)(h.value)&&(w=e,k=Ss({keyframes:[h.value,f(h.value)],velocity:gs(x,e,h.value),damping:o,stiffness:a,restDelta:u,restSpeed:d}))};return j(0),{calculatedDuration:null,next:e=>{let t=!1;return k||void 0!==w||(t=!0,b(e),j(e)),void 0!==w&&e>w?k.next(e-w):(!t&&b(e),h)}}}const Ps=e=>{const t=t=>{let{timestamp:n}=t;return e(n)};return{start:()=>No.update(t,!0),stop:()=>_o(t),now:()=>Lo.isProcessing?Lo.timestamp:performance.now()}};function Es(e){let t=0;let n=e.next(t);for(;!n.done&&t<2e4;)t+=50,n=e.next(t);return t>=2e4?1/0:t}const Ts={decay:Cs,inertia:Cs,tween:fs,keyframes:fs,spring:Ss};function zs(e){let t,n,{autoplay:r=!0,delay:i=0,driver:o=Ps,keyframes:a,type:s="keyframes",repeat:l=0,repeatDelay:c=0,repeatType:u="loop",onPlay:d,onStop:p,onComplete:h,onUpdate:f,...m}=e,g=1,y=!1;const v=()=>{n=new Promise(e=>{t=e})};let x;v();const b=Ts[s]||fs;let w;b!==fs&&"number"!==typeof a[0]&&(w=ps([0,100],a,{clamp:!1}),a=[0,100]);const k=b({...m,keyframes:a});let j;"mirror"===u&&(j=b({...m,keyframes:[...a].reverse(),velocity:-(m.velocity||0)}));let S="idle",C=null,P=null,E=null;null===k.calculatedDuration&&l&&(k.calculatedDuration=Es(k));const{calculatedDuration:T}=k;let z=1/0,D=1/0;null!==T&&(z=T+c,D=z*(l+1)-c);let M=0;const R=e=>{if(null===P)return;g>0&&(P=Math.min(P,e)),g<0&&(P=Math.min(e-D/g,P)),M=null!==C?C:Math.round(e-P)*g;const t=M-i*(g>=0?1:-1),n=g>=0?t<0:t>D;M=Math.max(t,0),"finished"===S&&null===C&&(M=D);let r=M,o=k;if(l){const e=Math.min(M,D)/z;let t=Math.floor(e),n=e%1;!n&&e>=1&&(n=1),1===n&&t--,t=Math.min(t,l+1);Boolean(t%2)&&("reverse"===u?(n=1-n,c&&(n-=c/z)):"mirror"===u&&(o=j)),r=Ii(0,1,n)*z}const s=n?{done:!1,value:a[0]}:o.next(r);w&&(s.value=w(s.value));let{done:d}=s;n||null===T||(d=g>=0?M>=D:M<=0);const p=null===C&&("finished"===S||"running"===S&&d);return f&&f(s.value),p&&N(),s},O=()=>{x&&x.stop(),x=void 0},A=()=>{S="idle",O(),t(),v(),P=E=null},N=()=>{S="finished",h&&h(),O(),t()},_=()=>{if(y)return;x||(x=o(R));const e=x.now();d&&d(),null!==C?P=e-C:P&&"finished"!==S||(P=e),"finished"===S&&v(),E=P,C=null,S="running",x.start()};r&&_();const L={then:(e,t)=>n.then(e,t),get time(){return fa(M)},set time(e){e=ha(e),M=e,null===C&&x&&0!==g?P=x.now()-e/g:C=e},get duration(){const e=null===k.calculatedDuration?Es(k):k.calculatedDuration;return fa(e)},get speed(){return g},set speed(e){e!==g&&x&&(g=e,L.time=fa(M))},get state(){return S},play:_,pause:()=>{S="paused",C=M},stop:()=>{y=!0,"idle"!==S&&(S="idle",p&&p(),A())},cancel:()=>{null!==E&&R(E),A()},complete:()=>{S="finished"},sample:e=>(P=0,R(e))};return L}const Ds=function(e){let t;return()=>(void 0===t&&(t=e()),t)}(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),Ms=new Set(["opacity","clipPath","filter","transform","backgroundColor"]);function Rs(e,t,n){let{onUpdate:r,onComplete:i,...o}=n;if(!(Ds()&&Ms.has(t)&&!o.repeatDelay&&"mirror"!==o.repeatType&&0!==o.damping&&"inertia"!==o.type))return!1;let a,s,l=!1,c=!1;const u=()=>{s=new Promise(e=>{a=e})};u();let{keyframes:d,duration:p=300,ease:h,times:f}=o;if(((e,t)=>"spring"===t.type||"backgroundColor"===e||!ya(t.ease))(t,o)){const e=zs({...o,repeat:0,delay:0});let t={done:!1,value:d[0]};const n=[];let r=0;for(;!t.done&&r<2e4;)t=e.sample(r),n.push(t.value),r+=10;f=void 0,d=n,p=r-10,h="linear"}const m=function(e,t,n){let{delay:r=0,duration:i,repeat:o=0,repeatType:a="loop",ease:s,times:l}=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const c={[t]:n};l&&(c.offset=l);const u=ba(s);return Array.isArray(u)&&(c.easing=u),e.animate(c,{delay:r,duration:i,easing:Array.isArray(u)?"linear":u,fill:"both",iterations:o+1,direction:"reverse"===a?"alternate":"normal"})}(e.owner.current,t,d,{...o,duration:p,ease:h,times:f}),g=()=>{c=!1,m.cancel()},y=()=>{c=!0,No.update(g),a(),u()};m.onfinish=()=>{c||(e.set(function(e,t){let{repeat:n,repeatType:r="loop"}=t;return e[n&&"loop"!==r&&n%2===1?0:e.length-1]}(d,o)),i&&i(),y())};return{then:(e,t)=>s.then(e,t),attachTimeline:e=>(m.timeline=e,m.onfinish=null,Ro),get time(){return fa(m.currentTime||0)},set time(e){m.currentTime=ha(e)},get speed(){return m.playbackRate},set speed(e){m.playbackRate=e},get duration(){return fa(p)},play:()=>{l||(m.play(),_o(g))},pause:()=>m.pause(),stop:()=>{if(l=!0,"idle"===m.playState)return;const{currentTime:t}=m;if(t){const n=zs({...o,autoplay:!1});e.setWithVelocity(n.sample(t-10).value,n.sample(t).value,10)}y()},complete:()=>{c||m.finish()},cancel:y}}const Os={type:"spring",stiffness:500,damping:25,restSpeed:10},As={type:"keyframes",duration:.8},Ns={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},_s=(e,t)=>{let{keyframes:n}=t;return n.length>2?As:zi.has(e)?e.startsWith("scale")?{type:"spring",stiffness:550,damping:0===n[1]?2*Math.sqrt(550):30,restSpeed:10}:Os:Ns},Ls=(e,t)=>"zIndex"!==e&&(!("number"!==typeof t&&!Array.isArray(t))||!("string"!==typeof t||!rs.test(t)&&"0"!==t||t.startsWith("url("))),Is=new Set(["brightness","contrast","saturate","opacity"]);function Fs(e){const[t,n]=e.slice(0,-1).split("(");if("drop-shadow"===t)return e;const[r]=n.match($i)||[];if(!r)return e;const i=n.replace(r,"");let o=Is.has(t)?1:0;return r!==n&&(o*=100),t+"("+o+i+")"}const Vs=/([a-z-]*)\(.*?\)/g,Us={...rs,getAnimatableNone:e=>{const t=e.match(Vs);return t?t.map(Fs).join(" "):e}},Bs={...to,color:Ba,backgroundColor:Ba,outlineColor:Ba,fill:Ba,stroke:Ba,borderColor:Ba,borderTopColor:Ba,borderRightColor:Ba,borderBottomColor:Ba,borderLeftColor:Ba,filter:Us,WebkitFilter:Us},$s=e=>Bs[e];function Ws(e,t){let n=$s(e);return n!==Us&&(n=rs),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const Hs=e=>/^0[^.\s]+$/.test(e);function qs(e){return"number"===typeof e?0===e:null!==e?"none"===e||"0"===e||Hs(e):void 0}function Ys(e,t){return e[t]||e.default||e}const Ks=!1,Gs=function(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return i=>{const o=Ys(r,e)||{},a=o.delay||r.delay||0;let{elapsed:s=0}=r;s-=ha(a);const l=function(e,t,n,r){const i=Ls(t,n);let o;o=Array.isArray(n)?[...n]:[null,n];const a=void 0!==r.from?r.from:e.get();let s;const l=[];for(let c=0;c<o.length;c++)null===o[c]&&(o[c]=0===c?a:o[c-1]),qs(o[c])&&l.push(c),"string"===typeof o[c]&&"none"!==o[c]&&"0"!==o[c]&&(s=o[c]);if(i&&l.length&&s)for(let c=0;c<l.length;c++)o[l[c]]=Ws(t,s);return o}(t,e,n,o),c=l[0],u=l[l.length-1],d=Ls(e,c),p=Ls(e,u);da(d===p,`You are trying to animate ${e} from "${c}" to "${u}". ${c} is not an animatable value - to enable this animation set ${c} to a value animatable to ${u} via the \`style\` property.`);let h={keyframes:l,velocity:t.getVelocity(),ease:"easeOut",...o,delay:-s,onUpdate:e=>{t.set(e),o.onUpdate&&o.onUpdate(e)},onComplete:()=>{i(),o.onComplete&&o.onComplete()}};if(function(e){let{when:t,delay:n,delayChildren:r,staggerChildren:i,staggerDirection:o,repeat:a,repeatType:s,repeatDelay:l,from:c,elapsed:u,...d}=e;return!!Object.keys(d).length}(o)||(h={...h,..._s(e,h)}),h.duration&&(h.duration=ha(h.duration)),h.repeatDelay&&(h.repeatDelay=ha(h.repeatDelay)),!d||!p||ma||!1===o.type||Ks)return function(e){let{keyframes:t,delay:n,onUpdate:r,onComplete:i}=e;const o=()=>(r&&r(t[t.length-1]),i&&i(),{time:0,speed:1,duration:0,play:Ro,pause:Ro,stop:Ro,then:e=>(e(),Promise.resolve()),cancel:Ro,complete:Ro});return n?zs({keyframes:[0,1],duration:0,delay:n,onComplete:o}):o()}(ma?{...h,delay:0}:h);if(!r.isHandoff&&t.owner&&t.owner.current instanceof HTMLElement&&!t.owner.getProps().onUpdate){const n=Rs(t,e,h);if(n)return n}return zs(h)}};function Qs(e){return Boolean(Mi(e)&&e.add)}const Xs=e=>/^\-?\d*\.?\d+$/.test(e);function Zs(e,t){-1===e.indexOf(t)&&e.push(t)}function Js(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}class el{constructor(){this.subscriptions=[]}add(e){return Zs(this.subscriptions,e),()=>Js(this.subscriptions,e)}notify(e,t,n){const r=this.subscriptions.length;if(r)if(1===r)this.subscriptions[0](e,t,n);else for(let i=0;i<r;i++){const r=this.subscriptions[i];r&&r(e,t,n)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const tl={current:void 0};class nl{constructor(e){var t=this;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};var r;this.version="10.18.0",this.timeDelta=0,this.lastUpdated=0,this.canTrackVelocity=!1,this.events={},this.updateAndNotify=function(e){let n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];t.prev=t.current,t.current=e;const{delta:r,timestamp:i}=Lo;t.lastUpdated!==i&&(t.timeDelta=r,t.lastUpdated=i,No.postRender(t.scheduleVelocityCheck)),t.prev!==t.current&&t.events.change&&t.events.change.notify(t.current),t.events.velocityChange&&t.events.velocityChange.notify(t.getVelocity()),n&&t.events.renderRequest&&t.events.renderRequest.notify(t.current)},this.scheduleVelocityCheck=()=>No.postRender(this.velocityCheck),this.velocityCheck=e=>{let{timestamp:t}=e;t!==this.lastUpdated&&(this.prev=this.current,this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()))},this.hasAnimated=!1,this.prev=this.current=e,this.canTrackVelocity=(r=this.current,!isNaN(parseFloat(r))),this.owner=n.owner}onChange(e){return this.on("change",e)}on(e,t){this.events[e]||(this.events[e]=new el);const n=this.events[e].add(t);return"change"===e?()=>{n(),No.read(()=>{this.events.change.getSize()||this.stop()})}:n}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];t&&this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e,t)}setWithVelocity(e,t,n){this.set(t),this.prev=e,this.timeDelta=n}jump(e){this.updateAndNotify(e),this.prev=e,this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return tl.current&&tl.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?ms(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(e){return this.stop(),new Promise(t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function rl(e,t){return new nl(e,t)}const il=e=>t=>t.test(e),ol=[Fi,Qi,Gi,Ki,Zi,Xi,{test:e=>"auto"===e,parse:e=>e}],al=e=>ol.find(il(e)),sl=[...ol,Ba,rs],ll=e=>sl.find(il(e));function cl(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,rl(n))}function ul(e,t){const n=ua(e,t);let{transitionEnd:r={},transition:i={},...o}=n?e.makeTargetAnimatable(n,!1):{};o={...o,...r};for(const a in o){cl(e,a,To(o[a]))}}function dl(e,t){if(!t)return;return(t[e]||t.default||t).from}function pl(e,t){let{protectedKeys:n,needsAnimating:r}=e;const i=n.hasOwnProperty(t)&&!0!==r[t];return r[t]=!1,i}function hl(e,t){const n=e.get();if(!Array.isArray(t))return n!==t;for(let r=0;r<t.length;r++)if(t[r]!==n)return!0}function fl(e,t){let{delay:n=0,transitionOverride:r,type:i}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},{transition:o=e.getDefaultTransition(),transitionEnd:a,...s}=e.makeTargetAnimatable(t);const l=e.getValue("willChange");r&&(o=r);const c=[],u=i&&e.animationState&&e.animationState.getState()[i];for(const d in s){const t=e.getValue(d),r=s[d];if(!t||void 0===r||u&&pl(u,d))continue;const i={delay:n,elapsed:0,...Ys(o||{},d)};if(window.HandoffAppearAnimations){const n=e.getProps()[si];if(n){const e=window.HandoffAppearAnimations(n,d,t,No);null!==e&&(i.elapsed=e,i.isHandoff=!0)}}let a=!i.isHandoff&&!hl(t,r);if("spring"===i.type&&(t.getVelocity()||i.velocity)&&(a=!1),t.animation&&(a=!1),a)continue;t.start(Gs(d,t,r,e.shouldReduceMotion&&zi.has(d)?{type:!1}:i));const p=t.animation;Qs(l)&&(l.add(d),p.then(()=>l.remove(d))),c.push(p)}return a&&Promise.all(c).then(()=>{a&&ul(e,a)}),c}function ml(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const r=ua(e,t,n.custom);let{transition:i=e.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(i=n.transitionOverride);const o=r?()=>Promise.all(fl(e,r,n)):()=>Promise.resolve(),a=e.variantChildren&&e.variantChildren.size?function(){let r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;const{delayChildren:o=0,staggerChildren:a,staggerDirection:s}=i;return function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,o=arguments.length>5?arguments[5]:void 0;const a=[],s=(e.variantChildren.size-1)*r,l=1===i?function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:0)*r}:function(){return s-(arguments.length>0&&void 0!==arguments[0]?arguments[0]:0)*r};return Array.from(e.variantChildren).sort(gl).forEach((e,r)=>{e.notify("AnimationStart",t),a.push(ml(e,t,{...o,delay:n+l(r)}).then(()=>e.notify("AnimationComplete",t)))}),Promise.all(a)}(e,t,o+r,a,s,n)}:()=>Promise.resolve(),{when:s}=i;if(s){const[e,t]="beforeChildren"===s?[o,a]:[a,o];return e().then(()=>t())}return Promise.all([o(),a(n.delay)])}function gl(e,t){return e.sortNodePosition(t)}const yl=[...di].reverse(),vl=di.length;function xl(e){return t=>Promise.all(t.map(t=>{let{animation:n,options:r}=t;return function(e,t){let n,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(e.notify("AnimationStart",t),Array.isArray(t)){const i=t.map(t=>ml(e,t,r));n=Promise.all(i)}else if("string"===typeof t)n=ml(e,t,r);else{const i="function"===typeof t?ua(e,t,r.custom):t;n=Promise.all(fl(e,i,r))}return n.then(()=>e.notify("AnimationComplete",t))}(e,n,r)}))}function bl(e){let t=xl(e);const n={animate:kl(!0),whileInView:kl(),whileHover:kl(),whileTap:kl(),whileDrag:kl(),whileFocus:kl(),exit:kl()};let r=!0;const i=(t,n)=>{const r=ua(e,n);if(r){const{transition:e,transitionEnd:n,...i}=r;t={...t,...i,...n}}return t};function o(o,a){const s=e.getProps(),l=e.getVariantContext(!0)||{},c=[],u=new Set;let d={},p=1/0;for(let t=0;t<vl;t++){const h=yl[t],f=n[h],m=void 0!==s[h]?s[h]:l[h],g=ci(m),y=h===a?f.isActive:null;!1===y&&(p=t);let v=m===l[h]&&m!==s[h]&&g;if(v&&r&&e.manuallyAnimateOnMount&&(v=!1),f.protectedKeys={...d},!f.isActive&&null===y||!m&&!f.prevProp||ui(m)||"boolean"===typeof m)continue;let x=wl(f.prevProp,m)||h===a&&f.isActive&&!v&&g||t>p&&g,b=!1;const w=Array.isArray(m)?m:[m];let k=w.reduce(i,{});!1===y&&(k={});const{prevResolvedValues:j={}}=f,S={...j,...k},C=e=>{x=!0,u.has(e)&&(b=!0,u.delete(e)),f.needsAnimating[e]=!0};for(const e in S){const t=k[e],n=j[e];if(d.hasOwnProperty(e))continue;let r=!1;r=Eo(t)&&Eo(n)?!ca(t,n):t!==n,r?void 0!==t?C(e):u.add(e):void 0!==t&&u.has(e)?C(e):f.protectedKeys[e]=!0}f.prevProp=m,f.prevResolvedValues=k,f.isActive&&(d={...d,...k}),r&&e.blockInitialAnimation&&(x=!1),!x||v&&!b||c.push(...w.map(e=>({animation:e,options:{type:h,...o}})))}if(u.size){const t={};u.forEach(n=>{const r=e.getBaseTarget(n);void 0!==r&&(t[n]=r)}),c.push({animation:t})}let h=Boolean(c.length);return!r||!1!==s.initial&&s.initial!==s.animate||e.manuallyAnimateOnMount||(h=!1),r=!1,h?t(c):Promise.resolve()}return{animateChanges:o,setActive:function(t,r,i){var a;if(n[t].isActive===r)return Promise.resolve();null===(a=e.variantChildren)||void 0===a||a.forEach(e=>{var n;return null===(n=e.animationState)||void 0===n?void 0:n.setActive(t,r)}),n[t].isActive=r;const s=o(i,t);for(const e in n)n[e].protectedKeys={};return s},setAnimateFunction:function(n){t=n(e)},getState:()=>n}}function wl(e,t){return"string"===typeof t?t!==e:!!Array.isArray(t)&&!ca(t,e)}function kl(){return{isActive:arguments.length>0&&void 0!==arguments[0]&&arguments[0],protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}let jl=0;const Sl={animation:{Feature:class extends Zo{constructor(e){super(e),e.animationState||(e.animationState=bl(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();this.unmount(),ui(e)&&(this.unmount=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){}}},exit:{Feature:class extends Zo{constructor(){super(...arguments),this.id=jl++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:t,custom:n}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===r)return;const i=this.node.animationState.setActive("exit",!e,{custom:null!==n&&void 0!==n?n:this.node.getProps().custom});t&&!e&&i.then(()=>t(this.id))}mount(){const{register:e}=this.node.presenceContext||{};e&&(this.unmount=e(this.id))}unmount(){}}}},Cl=(e,t)=>Math.abs(e-t);class Pl{constructor(e,t){let{transformPagePoint:n,contextWindow:r,dragSnapToOrigin:i=!1}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!this.lastMoveEvent||!this.lastMoveEventInfo)return;const e=zl(this.lastMoveEventInfo,this.history),t=null!==this.startEvent,n=function(e,t){const n=Cl(e.x,t.x),r=Cl(e.y,t.y);return Math.sqrt(n**2+r**2)}(e.offset,{x:0,y:0})>=3;if(!t&&!n)return;const{point:r}=e,{timestamp:i}=Lo;this.history.push({...r,timestamp:i});const{onStart:o,onMove:a}=this.handlers;t||(o&&o(this.lastMoveEvent,e),this.startEvent=this.lastMoveEvent),a&&a(this.lastMoveEvent,e)},this.handlePointerMove=(e,t)=>{this.lastMoveEvent=e,this.lastMoveEventInfo=El(t,this.transformPagePoint),No.update(this.updatePoint,!0)},this.handlePointerUp=(e,t)=>{this.end();const{onEnd:n,onSessionEnd:r,resumeAnimation:i}=this.handlers;if(this.dragSnapToOrigin&&i&&i(),!this.lastMoveEvent||!this.lastMoveEventInfo)return;const o=zl("pointercancel"===e.type?this.lastMoveEventInfo:El(t,this.transformPagePoint),this.history);this.startEvent&&n&&n(e,o),r&&r(e,o)},!Bo(e))return;this.dragSnapToOrigin=i,this.handlers=t,this.transformPagePoint=n,this.contextWindow=r||window;const o=El($o(e),this.transformPagePoint),{point:a}=o,{timestamp:s}=Lo;this.history=[{...a,timestamp:s}];const{onSessionStart:l}=t;l&&l(e,zl(o,this.history)),this.removeListeners=qo(Wo(this.contextWindow,"pointermove",this.handlePointerMove),Wo(this.contextWindow,"pointerup",this.handlePointerUp),Wo(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),_o(this.updatePoint)}}function El(e,t){return t?{point:t(e.point)}:e}function Tl(e,t){return{x:e.x-t.x,y:e.y-t.y}}function zl(e,t){let{point:n}=e;return{point:n,delta:Tl(n,Ml(t)),offset:Tl(n,Dl(t)),velocity:Rl(t,.1)}}function Dl(e){return e[0]}function Ml(e){return e[e.length-1]}function Rl(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const i=Ml(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>ha(t)));)n--;if(!r)return{x:0,y:0};const o=fa(i.timestamp-r.timestamp);if(0===o)return{x:0,y:0};const a={x:(i.x-r.x)/o,y:(i.y-r.y)/o};return a.x===1/0&&(a.x=0),a.y===1/0&&(a.y=0),a}function Ol(e){return e.max-e.min}function Al(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:.01;return Math.abs(e-t)<=n}function Nl(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:.5;e.origin=r,e.originPoint=$a(t.min,t.max,e.origin),e.scale=Ol(n)/Ol(t),(Al(e.scale,1,1e-4)||isNaN(e.scale))&&(e.scale=1),e.translate=$a(n.min,n.max,e.origin)-e.originPoint,(Al(e.translate)||isNaN(e.translate))&&(e.translate=0)}function _l(e,t,n,r){Nl(e.x,t.x,n.x,r?r.originX:void 0),Nl(e.y,t.y,n.y,r?r.originY:void 0)}function Ll(e,t,n){e.min=n.min+t.min,e.max=e.min+Ol(t)}function Il(e,t,n){e.min=t.min-n.min,e.max=e.min+Ol(t)}function Fl(e,t,n){Il(e.x,t.x,n.x),Il(e.y,t.y,n.y)}function Vl(e,t,n){return{min:void 0!==t?e.min+t:void 0,max:void 0!==n?e.max+n-(e.max-e.min):void 0}}function Ul(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}const Bl=.35;function $l(e,t,n){return{min:Wl(e,t),max:Wl(e,n)}}function Wl(e,t){return"number"===typeof e?e:e[t]||0}const Hl=()=>({x:{min:0,max:0},y:{min:0,max:0}});function ql(e){return[e("x"),e("y")]}function Yl(e){let{top:t,left:n,right:r,bottom:i}=e;return{x:{min:n,max:r},y:{min:t,max:i}}}function Kl(e){return void 0===e||1===e}function Gl(e){let{scale:t,scaleX:n,scaleY:r}=e;return!Kl(t)||!Kl(n)||!Kl(r)}function Ql(e){return Gl(e)||Xl(e)||e.z||e.rotate||e.rotateX||e.rotateY}function Xl(e){return Zl(e.x)||Zl(e.y)}function Zl(e){return e&&"0%"!==e}function Jl(e,t,n){return n+t*(e-n)}function ec(e,t,n,r,i){return void 0!==i&&(e=Jl(e,i,r)),Jl(e,n,r)+t}function tc(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=arguments.length>3?arguments[3]:void 0,i=arguments.length>4?arguments[4]:void 0;e.min=ec(e.min,t,n,r,i),e.max=ec(e.max,t,n,r,i)}function nc(e,t){let{x:n,y:r}=t;tc(e.x,n.translate,n.scale,n.originPoint),tc(e.y,r.translate,r.scale,r.originPoint)}function rc(e){return Number.isInteger(e)||e>1.0000000000001||e<.999999999999?e:1}function ic(e,t){e.min=e.min+t,e.max=e.max+t}function oc(e,t,n){let[r,i,o]=n;const a=void 0!==t[o]?t[o]:.5,s=$a(e.min,e.max,a);tc(e,t[r],t[i],s,t.scale)}const ac=["x","scaleX","originX"],sc=["y","scaleY","originY"];function lc(e,t){oc(e.x,t,ac),oc(e.y,t,sc)}function cc(e,t){return Yl(function(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}(e.getBoundingClientRect(),t))}const uc=e=>{let{current:t}=e;return t?t.ownerDocument.defaultView:null},dc=new WeakMap;class pc{constructor(e){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic={x:{min:0,max:0},y:{min:0,max:0}},this.visualElement=e}start(e){let{snapToCursor:t=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{presenceContext:n}=this.visualElement;if(n&&!1===n.isPresent)return;const{dragSnapToOrigin:r}=this.getProps();this.panSession=new Pl(e,{onSessionStart:e=>{const{dragSnapToOrigin:n}=this.getProps();n?this.pauseAnimation():this.stopAnimation(),t&&this.snapToCursor($o(e,"page").point)},onStart:(e,t)=>{const{drag:n,dragPropagation:r,onDragStart:i}=this.getProps();if(n&&!r&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=Qo(n),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),ql(e=>{let t=this.getAxisMotionValue(e).get()||0;if(Gi.test(t)){const{projection:n}=this.visualElement;if(n&&n.layout){const r=n.layout.layoutBox[e];if(r){t=Ol(r)*(parseFloat(t)/100)}}}this.originPoint[e]=t}),i&&No.update(()=>i(e,t),!1,!0);const{animationState:o}=this.visualElement;o&&o.setActive("whileDrag",!0)},onMove:(e,t)=>{const{dragPropagation:n,dragDirectionLock:r,onDirectionLock:i,onDrag:o}=this.getProps();if(!n&&!this.openGlobalLock)return;const{offset:a}=t;if(r&&null===this.currentDirection)return this.currentDirection=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n=null;Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x");return n}(a),void(null!==this.currentDirection&&i&&i(this.currentDirection));this.updateAxis("x",t.point,a),this.updateAxis("y",t.point,a),this.visualElement.render(),o&&o(e,t)},onSessionEnd:(e,t)=>this.stop(e,t),resumeAnimation:()=>ql(e=>{var t;return"paused"===this.getAnimationState(e)&&(null===(t=this.getAxisMotionValue(e).animation)||void 0===t?void 0:t.play())})},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:r,contextWindow:uc(this.visualElement)})}stop(e,t){const n=this.isDragging;if(this.cancel(),!n)return;const{velocity:r}=t;this.startAnimation(r);const{onDragEnd:i}=this.getProps();i&&No.update(()=>i(e,t))}cancel(){this.isDragging=!1;const{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:n}=this.getProps();!n&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),t&&t.setActive("whileDrag",!1)}updateAxis(e,t,n){const{drag:r}=this.getProps();if(!n||!hc(e,r,this.currentDirection))return;const i=this.getAxisMotionValue(e);let o=this.originPoint[e]+n[e];this.constraints&&this.constraints[e]&&(o=function(e,t,n){let{min:r,max:i}=t;return void 0!==r&&e<r?e=n?$a(r,e,n.min):Math.max(e,r):void 0!==i&&e>i&&(e=n?$a(i,e,n.max):Math.min(e,i)),e}(o,this.constraints[e],this.elastic[e])),i.set(o)}resolveConstraints(){var e;const{dragConstraints:t,dragElastic:n}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):null===(e=this.visualElement.projection)||void 0===e?void 0:e.layout,i=this.constraints;t&&li(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):this.constraints=!(!t||!r)&&function(e,t){let{top:n,left:r,bottom:i,right:o}=t;return{x:Vl(e.x,r,o),y:Vl(e.y,n,i)}}(r.layoutBox,t),this.elastic=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Bl;return!1===e?e=0:!0===e&&(e=Bl),{x:$l(e,"left","right"),y:$l(e,"top","bottom")}}(n),i!==this.constraints&&r&&this.constraints&&!this.hasMutatedConstraints&&ql(e=>{this.getAxisMotionValue(e)&&(this.constraints[e]=function(e,t){const n={};return void 0!==t.min&&(n.min=t.min-e.min),void 0!==t.max&&(n.max=t.max-e.min),n}(r.layoutBox[e],this.constraints[e]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:t}=this.getProps();if(!e||!li(e))return!1;const n=e.current;pa(null!==n,"If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");const{projection:r}=this.visualElement;if(!r||!r.layout)return!1;const i=function(e,t,n){const r=cc(e,n),{scroll:i}=t;return i&&(ic(r.x,i.offset.x),ic(r.y,i.offset.y)),r}(n,r.root,this.visualElement.getTransformPagePoint());let o=function(e,t){return{x:Ul(e.x,t.x),y:Ul(e.y,t.y)}}(r.layout.layoutBox,i);if(t){const e=t(function(e){let{x:t,y:n}=e;return{top:n.min,right:t.max,bottom:n.max,left:t.min}}(o));this.hasMutatedConstraints=!!e,e&&(o=Yl(e))}return o}startAnimation(e){const{drag:t,dragMomentum:n,dragElastic:r,dragTransition:i,dragSnapToOrigin:o,onDragTransitionEnd:a}=this.getProps(),s=this.constraints||{},l=ql(a=>{if(!hc(a,t,this.currentDirection))return;let l=s&&s[a]||{};o&&(l={min:0,max:0});const c=r?200:1e6,u=r?40:1e7,d={type:"inertia",velocity:n?e[a]:0,bounceStiffness:c,bounceDamping:u,timeConstant:750,restDelta:1,restSpeed:10,...i,...l};return this.startAxisValueAnimation(a,d)});return Promise.all(l).then(a)}startAxisValueAnimation(e,t){const n=this.getAxisMotionValue(e);return n.start(Gs(e,n,0,t))}stopAnimation(){ql(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){ql(e=>{var t;return null===(t=this.getAxisMotionValue(e).animation)||void 0===t?void 0:t.pause()})}getAnimationState(e){var t;return null===(t=this.getAxisMotionValue(e).animation)||void 0===t?void 0:t.state}getAxisMotionValue(e){const t="_drag"+e.toUpperCase(),n=this.visualElement.getProps(),r=n[t];return r||this.visualElement.getValue(e,(n.initial?n.initial[e]:void 0)||0)}snapToCursor(e){ql(t=>{const{drag:n}=this.getProps();if(!hc(t,n,this.currentDirection))return;const{projection:r}=this.visualElement,i=this.getAxisMotionValue(t);if(r&&r.layout){const{min:n,max:o}=r.layout.layoutBox[t];i.set(e[t]-$a(n,o,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:t}=this.getProps(),{projection:n}=this.visualElement;if(!li(t)||!n||!this.constraints)return;this.stopAnimation();const r={x:0,y:0};ql(e=>{const t=this.getAxisMotionValue(e);if(t){const n=t.get();r[e]=function(e,t){let n=.5;const r=Ol(e),i=Ol(t);return i>r?n=cs(t.min,t.max-r,e.min):r>i&&(n=cs(e.min,e.max-i,t.min)),Ii(0,1,n)}({min:n,max:n},this.constraints[e])}});const{transformTemplate:i}=this.visualElement.getProps();this.visualElement.current.style.transform=i?i({},""):"none",n.root&&n.root.updateScroll(),n.updateLayout(),this.resolveConstraints(),ql(t=>{if(!hc(t,e,null))return;const n=this.getAxisMotionValue(t),{min:i,max:o}=this.constraints[t];n.set($a(i,o,r[t]))})}addListeners(){if(!this.visualElement.current)return;dc.set(this.visualElement,this);const e=Wo(this.visualElement.current,"pointerdown",e=>{const{drag:t,dragListener:n=!0}=this.getProps();t&&n&&this.start(e)}),t=()=>{const{dragConstraints:e}=this.getProps();li(e)&&(this.constraints=this.resolveRefConstraints())},{projection:n}=this.visualElement,r=n.addEventListener("measure",t);n&&!n.layout&&(n.root&&n.root.updateScroll(),n.updateLayout()),t();const i=Uo(window,"resize",()=>this.scalePositionWithinConstraints()),o=n.addEventListener("didUpdate",e=>{let{delta:t,hasLayoutChanged:n}=e;this.isDragging&&n&&(ql(e=>{const n=this.getAxisMotionValue(e);n&&(this.originPoint[e]+=t[e].translate,n.set(n.get()+t[e].translate))}),this.visualElement.render())});return()=>{i(),e(),r(),o&&o()}}getProps(){const e=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:n=!1,dragPropagation:r=!1,dragConstraints:i=!1,dragElastic:o=Bl,dragMomentum:a=!0}=e;return{...e,drag:t,dragDirectionLock:n,dragPropagation:r,dragConstraints:i,dragElastic:o,dragMomentum:a}}}function hc(e,t,n){return(!0===t||t===e)&&(null===n||n===e)}const fc=e=>(t,n)=>{e&&No.update(()=>e(t,n))};const mc={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function gc(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const yc={correct:(e,t)=>{if(!t.target)return e;if("string"===typeof e){if(!Qi.test(e))return e;e=parseFloat(e)}return`${gc(e,t.target.x)}% ${gc(e,t.target.y)}%`}},vc={correct:(e,t)=>{let{treeScale:n,projectionDelta:r}=t;const i=e,o=rs.parse(e);if(o.length>5)return i;const a=rs.createTransformer(e),s="number"!==typeof o[0]?1:0,l=r.x.scale*n.x,c=r.y.scale*n.y;o[0+s]/=l,o[1+s]/=c;const u=$a(l,c,.5);return"number"===typeof o[2+s]&&(o[2+s]/=u),"number"===typeof o[3+s]&&(o[3+s]/=u),a(o)}};class xc extends t.Component{componentDidMount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:n,layoutId:r}=this.props,{projection:i}=e;var o;o=wc,Object.assign(Ei,o),i&&(t.group&&t.group.add(i),n&&n.register&&r&&n.register(i),i.root.didUpdate(),i.addEventListener("animationComplete",()=>{this.safeToRemove()}),i.setOptions({...i.options,onExitComplete:()=>this.safeToRemove()})),mc.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:t,visualElement:n,drag:r,isPresent:i}=this.props,o=n.projection;return o?(o.isPresent=i,r||e.layoutDependency!==t||void 0===t?o.willUpdate():this.safeToRemove(),e.isPresent!==i&&(i?o.promote():o.relegate()||No.postRender(()=>{const e=o.getStack();e&&e.members.length||this.safeToRemove()})),null):null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),queueMicrotask(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:n}=this.props,{projection:r}=e;r&&(r.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(r),n&&n.deregister&&n.deregister(r))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function bc(e){const[n,r]=function(){const e=(0,t.useContext)(ni);if(null===e)return[!0,null];const{isPresent:n,onExitComplete:r,register:i}=e,o=(0,t.useId)();return(0,t.useEffect)(()=>i(o),[]),!n&&r?[!1,()=>r&&r(o)]:[!0]}(),i=(0,t.useContext)(xi);return t.createElement(xc,{...e,layoutGroup:i,switchLayoutGroup:(0,t.useContext)(bi),isPresent:n,safeToRemove:r})}const wc={borderRadius:{...yc,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:yc,borderTopRightRadius:yc,borderBottomLeftRadius:yc,borderBottomRightRadius:yc,boxShadow:vc},kc=["TopLeft","TopRight","BottomLeft","BottomRight"],jc=kc.length,Sc=e=>"string"===typeof e?parseFloat(e):e,Cc=e=>"number"===typeof e||Qi.test(e);function Pc(e,t){return void 0!==e[t]?e[t]:e.borderRadius}const Ec=zc(0,.5,za),Tc=zc(.5,.95,Ro);function zc(e,t,n){return r=>r<e?0:r>t?1:n(cs(e,t,r))}function Dc(e,t){e.min=t.min,e.max=t.max}function Mc(e,t){Dc(e.x,t.x),Dc(e.y,t.y)}function Rc(e,t,n,r,i){return e=Jl(e-=t,1/n,r),void 0!==i&&(e=Jl(e,1/i,r)),e}function Oc(e,t,n,r,i){let[o,a,s]=n;!function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:.5,i=arguments.length>4?arguments[4]:void 0,o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:e,a=arguments.length>6&&void 0!==arguments[6]?arguments[6]:e;Gi.test(t)&&(t=parseFloat(t),t=$a(a.min,a.max,t/100)-a.min);if("number"!==typeof t)return;let s=$a(o.min,o.max,r);e===o&&(s-=t),e.min=Rc(e.min,t,n,s,i),e.max=Rc(e.max,t,n,s,i)}(e,t[o],t[a],t[s],t.scale,r,i)}const Ac=["x","scaleX","originX"],Nc=["y","scaleY","originY"];function _c(e,t,n,r){Oc(e.x,t,Ac,n?n.x:void 0,r?r.x:void 0),Oc(e.y,t,Nc,n?n.y:void 0,r?r.y:void 0)}function Lc(e){return 0===e.translate&&1===e.scale}function Ic(e){return Lc(e.x)&&Lc(e.y)}function Fc(e,t){return Math.round(e.x.min)===Math.round(t.x.min)&&Math.round(e.x.max)===Math.round(t.x.max)&&Math.round(e.y.min)===Math.round(t.y.min)&&Math.round(e.y.max)===Math.round(t.y.max)}function Vc(e){return Ol(e.x)/Ol(e.y)}class Uc{constructor(){this.members=[]}add(e){Zs(this.members,e),e.scheduleRender()}remove(e){if(Js(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const e=this.members[this.members.length-1];e&&this.promote(e)}}relegate(e){const t=this.members.findIndex(t=>e===t);if(0===t)return!1;let n;for(let r=t;r>=0;r--){const e=this.members[r];if(!1!==e.isPresent){n=e;break}}return!!n&&(this.promote(n),!0)}promote(e,t){const n=this.lead;if(e!==n&&(this.prevLead=n,this.lead=e,e.show(),n)){n.instance&&n.scheduleRender(),e.scheduleRender(),e.resumeFrom=n,t&&(e.resumeFrom.preserveOpacity=!0),n.snapshot&&(e.snapshot=n.snapshot,e.snapshot.latestValues=n.animationValues||n.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:r}=e.options;!1===r&&n.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:t,resumingFrom:n}=e;t.onExitComplete&&t.onExitComplete(),n&&n.options.onExitComplete&&n.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function Bc(e,t,n){let r="";const i=e.x.translate/t.x,o=e.y.translate/t.y;if((i||o)&&(r=`translate3d(${i}px, ${o}px, 0) `),1===t.x&&1===t.y||(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{rotate:e,rotateX:t,rotateY:i}=n;e&&(r+=`rotate(${e}deg) `),t&&(r+=`rotateX(${t}deg) `),i&&(r+=`rotateY(${i}deg) `)}const a=e.x.scale*t.x,s=e.y.scale*t.y;return 1===a&&1===s||(r+=`scale(${a}, ${s})`),r||"none"}const $c=(e,t)=>e.depth-t.depth;class Wc{constructor(){this.children=[],this.isDirty=!1}add(e){Zs(this.children,e),this.isDirty=!0}remove(e){Js(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort($c),this.isDirty=!1,this.children.forEach(e)}}const Hc=["","X","Y","Z"],qc={visibility:"hidden"};let Yc=0;const Kc={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0};function Gc(e){let{attachResizeListener:t,defaultParent:n,measureScroll:r,checkIsScrollRoot:i,resetTransform:o}=e;return class{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null===n||void 0===n?void 0:n();this.id=Yc++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,Kc.totalNodes=Kc.resolvedTargetDeltas=Kc.recalculatedProjection=0,this.nodes.forEach(Zc),this.nodes.forEach(ou),this.nodes.forEach(au),this.nodes.forEach(Jc),function(e){window.MotionDebug&&window.MotionDebug.record(e)}(Kc)},this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=e,this.root=t?t.root||t:this,this.path=t?[...t.path,t]:[],this.parent=t,this.depth=t?t.depth+1:0;for(let n=0;n<this.path.length;n++)this.path[n].shouldResetTransform=!0;this.root===this&&(this.nodes=new Wc)}addEventListener(e,t){return this.eventHandlers.has(e)||this.eventHandlers.set(e,new el),this.eventHandlers.get(e).add(t)}notifyListeners(e){const t=this.eventHandlers.get(e);for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];t&&t.notify(...r)}hasListeners(e){return this.eventHandlers.has(e)}mount(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.root.hasTreeAnimated;if(this.instance)return;var r;this.isSVG=(r=e)instanceof SVGElement&&"svg"!==r.tagName,this.instance=e;const{layoutId:i,layout:o,visualElement:a}=this.options;if(a&&!a.current&&a.mount(e),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),n&&(o||i)&&(this.isLayoutDirty=!0),t){let n;const r=()=>this.root.updateBlockedByResize=!1;t(e,()=>{this.root.updateBlockedByResize=!0,n&&n(),n=function(e,t){const n=performance.now(),r=i=>{let{timestamp:o}=i;const a=o-n;a>=t&&(_o(r),e(a-t))};return No.read(r,!0),()=>_o(r)}(r,250),mc.hasAnimatedSinceResize&&(mc.hasAnimatedSinceResize=!1,this.nodes.forEach(iu))})}i&&this.root.registerSharedNode(i,this),!1!==this.options.animate&&a&&(i||o)&&this.addEventListener("didUpdate",e=>{let{delta:t,hasLayoutChanged:n,hasRelativeTargetChanged:r,layout:i}=e;if(this.isTreeAnimationBlocked())return this.target=void 0,void(this.relativeTarget=void 0);const o=this.options.transition||a.getDefaultTransition()||pu,{onLayoutAnimationStart:s,onLayoutAnimationComplete:l}=a.getProps(),c=!this.targetLayout||!Fc(this.targetLayout,i)||r,u=!n&&r;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||u||n&&(c||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(t,u);const e={...Ys(o,"layout"),onPlay:s,onComplete:l};(a.shouldReduceMotion||this.options.layoutRoot)&&(e.delay=0,e.type=!1),this.startAnimation(e)}else n||iu(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=i})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const e=this.getStack();e&&e.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,_o(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(su),this.animationId++)}getTransformTemplate(){const{visualElement:e}=this.options;return e&&e.getProps().transformTemplate}willUpdate(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked())return void(this.options.onExitComplete&&this.options.onExitComplete());if(!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let i=0;i<this.path.length;i++){const e=this.path[i];e.shouldResetTransform=!0,e.updateScroll("snapshot"),e.options.layoutRoot&&e.willUpdate(!1)}const{layoutId:t,layout:n}=this.options;if(void 0===t&&!n)return;const r=this.getTransformTemplate();this.prevTransformTemplateValue=r?r(this.latestValues,""):void 0,this.updateSnapshot(),e&&this.notifyListeners("willUpdate")}update(){this.updateScheduled=!1;if(this.isUpdateBlocked())return this.unblockUpdate(),this.clearAllSnapshots(),void this.nodes.forEach(tu);this.isUpdating||this.nodes.forEach(nu),this.isUpdating=!1,this.nodes.forEach(ru),this.nodes.forEach(Qc),this.nodes.forEach(Xc),this.clearAllSnapshots();const e=performance.now();Lo.delta=Ii(0,1e3/60,e-Lo.timestamp),Lo.timestamp=e,Lo.isProcessing=!0,Io.update.process(Lo),Io.preRender.process(Lo),Io.render.process(Lo),Lo.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,queueMicrotask(()=>this.update()))}clearAllSnapshots(){this.nodes.forEach(eu),this.sharedNodes.forEach(lu)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,No.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){No.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){!this.snapshot&&this.instance&&(this.snapshot=this.measure())}updateLayout(){if(!this.instance)return;if(this.updateScroll(),(!this.options.alwaysMeasureLayout||!this.isLead())&&!this.isLayoutDirty)return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let n=0;n<this.path.length;n++){this.path[n].updateScroll()}const e=this.layout;this.layout=this.measure(!1),this.layoutCorrected={x:{min:0,max:0},y:{min:0,max:0}},this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:t}=this.options;t&&t.notify("LayoutMeasure",this.layout.layoutBox,e?e.layoutBox:void 0)}updateScroll(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"measure",t=Boolean(this.options.layoutScroll&&this.instance);this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===e&&(t=!1),t&&(this.scroll={animationId:this.root.animationId,phase:e,isRoot:i(this.instance),offset:r(this.instance)})}resetTransform(){if(!o)return;const e=this.isLayoutDirty||this.shouldResetTransform,t=this.projectionDelta&&!Ic(this.projectionDelta),n=this.getTransformTemplate(),r=n?n(this.latestValues,""):void 0,i=r!==this.prevTransformTemplateValue;e&&(t||Ql(this.latestValues)||i)&&(o(this.instance,r),this.shouldResetTransform=!1,this.scheduleRender())}measure(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];const t=this.measurePageBox();let n=this.removeElementScroll(t);var r;return e&&(n=this.removeTransform(n)),mu((r=n).x),mu(r.y),{animationId:this.root.animationId,measuredBox:t,layoutBox:n,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:e}=this.options;if(!e)return{x:{min:0,max:0},y:{min:0,max:0}};const t=e.measureViewportBox(),{scroll:n}=this.root;return n&&(ic(t.x,n.offset.x),ic(t.y,n.offset.y)),t}removeElementScroll(e){const t={x:{min:0,max:0},y:{min:0,max:0}};Mc(t,e);for(let n=0;n<this.path.length;n++){const r=this.path[n],{scroll:i,options:o}=r;if(r!==this.root&&i&&o.layoutScroll){if(i.isRoot){Mc(t,e);const{scroll:n}=this.root;n&&(ic(t.x,-n.offset.x),ic(t.y,-n.offset.y))}ic(t.x,i.offset.x),ic(t.y,i.offset.y)}}return t}applyTransform(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const n={x:{min:0,max:0},y:{min:0,max:0}};Mc(n,e);for(let r=0;r<this.path.length;r++){const e=this.path[r];!t&&e.options.layoutScroll&&e.scroll&&e!==e.root&&lc(n,{x:-e.scroll.offset.x,y:-e.scroll.offset.y}),Ql(e.latestValues)&&lc(n,e.latestValues)}return Ql(this.latestValues)&&lc(n,this.latestValues),n}removeTransform(e){const t={x:{min:0,max:0},y:{min:0,max:0}};Mc(t,e);for(let n=0;n<this.path.length;n++){const e=this.path[n];if(!e.instance)continue;if(!Ql(e.latestValues))continue;Gl(e.latestValues)&&e.updateSnapshot();const r=Hl();Mc(r,e.measurePageBox()),_c(t,e.latestValues,e.snapshot?e.snapshot.layoutBox:void 0,r)}return Ql(this.latestValues)&&_c(t,this.latestValues),t}setTargetDelta(e){this.targetDelta=e,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(e){this.options={...this.options,...e,crossfade:void 0===e.crossfade||e.crossfade}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Lo.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];var t;const n=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=n.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=n.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=n.isSharedProjectionDirty);const r=Boolean(this.resumingFrom)||this!==n;if(!(e||r&&this.isSharedProjectionDirty||this.isProjectionDirty||(null===(t=this.parent)||void 0===t?void 0:t.isProjectionDirty)||this.attemptToResolveRelativeTarget))return;const{layout:i,layoutId:o}=this.options;if(this.layout&&(i||o)){if(this.resolvedRelativeTargetAt=Lo.timestamp,!this.targetDelta&&!this.relativeTarget){const e=this.getClosestProjectingParent();e&&e.layout&&1!==this.animationProgress?(this.relativeParent=e,this.forceRelativeParentToResolveTarget(),this.relativeTarget={x:{min:0,max:0},y:{min:0,max:0}},this.relativeTargetOrigin={x:{min:0,max:0},y:{min:0,max:0}},Fl(this.relativeTargetOrigin,this.layout.layoutBox,e.layout.layoutBox),Mc(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(this.relativeTarget||this.targetDelta){var a,s,l;if(this.target||(this.target={x:{min:0,max:0},y:{min:0,max:0}},this.targetWithTransforms={x:{min:0,max:0},y:{min:0,max:0}}),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),a=this.target,s=this.relativeTarget,l=this.relativeParent.target,Ll(a.x,s.x,l.x),Ll(a.y,s.y,l.y)):this.targetDelta?(Boolean(this.resumingFrom)?this.target=this.applyTransform(this.layout.layoutBox):Mc(this.target,this.layout.layoutBox),nc(this.target,this.targetDelta)):Mc(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const e=this.getClosestProjectingParent();e&&Boolean(e.resumingFrom)===Boolean(this.resumingFrom)&&!e.options.layoutScroll&&e.target&&1!==this.animationProgress?(this.relativeParent=e,this.forceRelativeParentToResolveTarget(),this.relativeTarget={x:{min:0,max:0},y:{min:0,max:0}},this.relativeTargetOrigin={x:{min:0,max:0},y:{min:0,max:0}},Fl(this.relativeTargetOrigin,this.target,e.target),Mc(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}Kc.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(this.parent&&!Gl(this.parent.latestValues)&&!Xl(this.parent.latestValues))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return Boolean((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var e;const t=this.getLead(),n=Boolean(this.resumingFrom)||this!==t;let r=!0;if((this.isProjectionDirty||(null===(e=this.parent)||void 0===e?void 0:e.isProjectionDirty))&&(r=!1),n&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(r=!1),this.resolvedRelativeTargetAt===Lo.timestamp&&(r=!1),r)return;const{layout:i,layoutId:o}=this.options;if(this.isTreeAnimating=Boolean(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!i&&!o)return;Mc(this.layoutCorrected,this.layout.layoutBox);const a=this.treeScale.x,s=this.treeScale.y;!function(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];const i=n.length;if(!i)return;let o,a;t.x=t.y=1;for(let s=0;s<i;s++){o=n[s],a=o.projectionDelta;const i=o.instance;i&&i.style&&"contents"===i.style.display||(r&&o.options.layoutScroll&&o.scroll&&o!==o.root&&lc(e,{x:-o.scroll.offset.x,y:-o.scroll.offset.y}),a&&(t.x*=a.x.scale,t.y*=a.y.scale,nc(e,a)),r&&Ql(o.latestValues)&&lc(e,o.latestValues))}t.x=rc(t.x),t.y=rc(t.y)}(this.layoutCorrected,this.treeScale,this.path,n),!t.layout||t.target||1===this.treeScale.x&&1===this.treeScale.y||(t.target=t.layout.layoutBox);const{target:l}=t;if(!l)return void(this.projectionTransform&&(this.projectionDelta={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}},this.projectionTransform="none",this.scheduleRender()));this.projectionDelta||(this.projectionDelta={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}},this.projectionDeltaWithTransform={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}});const c=this.projectionTransform;_l(this.projectionDelta,this.layoutCorrected,l,this.latestValues),this.projectionTransform=Bc(this.projectionDelta,this.treeScale),this.projectionTransform===c&&this.treeScale.x===a&&this.treeScale.y===s||(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",l)),Kc.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if(this.options.scheduleRender&&this.options.scheduleRender(),e){const e=this.getStack();e&&e.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}setAnimationOrigin(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const n=this.snapshot,r=n?n.latestValues:{},i={...this.latestValues},o={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}};this.relativeParent&&this.relativeParent.options.layoutRoot||(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!t;const a={x:{min:0,max:0},y:{min:0,max:0}},s=(n?n.source:void 0)!==(this.layout?this.layout.source:void 0),l=this.getStack(),c=!l||l.members.length<=1,u=Boolean(s&&!c&&!0===this.options.crossfade&&!this.path.some(du));let d;this.animationProgress=0,this.mixTargetDelta=t=>{const n=t/1e3;cu(o.x,e.x,n),cu(o.y,e.y,n),this.setTargetDelta(o),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Fl(a,this.layout.layoutBox,this.relativeParent.layout.layoutBox),function(e,t,n,r){uu(e.x,t.x,n.x,r),uu(e.y,t.y,n.y,r)}(this.relativeTarget,this.relativeTargetOrigin,a,n),d&&function(e,t){return e.x.min===t.x.min&&e.x.max===t.x.max&&e.y.min===t.y.min&&e.y.max===t.y.max}(this.relativeTarget,d)&&(this.isProjectionDirty=!1),d||(d={x:{min:0,max:0},y:{min:0,max:0}}),Mc(d,this.relativeTarget)),s&&(this.animationValues=i,function(e,t,n,r,i,o){i?(e.opacity=$a(0,void 0!==n.opacity?n.opacity:1,Ec(r)),e.opacityExit=$a(void 0!==t.opacity?t.opacity:1,0,Tc(r))):o&&(e.opacity=$a(void 0!==t.opacity?t.opacity:1,void 0!==n.opacity?n.opacity:1,r));for(let a=0;a<jc;a++){const i=`border${kc[a]}Radius`;let o=Pc(t,i),s=Pc(n,i);void 0===o&&void 0===s||(o||(o=0),s||(s=0),0===o||0===s||Cc(o)===Cc(s)?(e[i]=Math.max($a(Sc(o),Sc(s),r),0),(Gi.test(s)||Gi.test(o))&&(e[i]+="%")):e[i]=s)}(t.rotate||n.rotate)&&(e.rotate=$a(t.rotate||0,n.rotate||0,r))}(i,r,this.latestValues,n,u,c)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=n},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(e){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(_o(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=No.update(()=>{mc.hasAnimatedSinceResize=!0,this.currentAnimation=function(e,t,n){const r=Mi(e)?e:rl(e);return r.start(Gs("",r,t,n)),r.animation}(0,1e3,{...e,onUpdate:t=>{this.mixTargetDelta(t),e.onUpdate&&e.onUpdate(t)},onComplete:()=>{e.onComplete&&e.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const e=this.getStack();e&&e.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(1e3),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const e=this.getLead();let{targetWithTransforms:t,target:n,layout:r,latestValues:i}=e;if(t&&n&&r){if(this!==e&&this.layout&&r&&gu(this.options.animationType,this.layout.layoutBox,r.layoutBox)){n=this.target||{x:{min:0,max:0},y:{min:0,max:0}};const t=Ol(this.layout.layoutBox.x);n.x.min=e.target.x.min,n.x.max=n.x.min+t;const r=Ol(this.layout.layoutBox.y);n.y.min=e.target.y.min,n.y.max=n.y.min+r}Mc(t,n),lc(t,i),_l(this.projectionDeltaWithTransform,this.layoutCorrected,t,i)}}registerSharedNode(e,t){this.sharedNodes.has(e)||this.sharedNodes.set(e,new Uc);this.sharedNodes.get(e).add(t);const n=t.options.initialPromotionConfig;t.promote({transition:n?n.transition:void 0,preserveFollowOpacity:n&&n.shouldPreserveFollowOpacity?n.shouldPreserveFollowOpacity(t):void 0})}isLead(){const e=this.getStack();return!e||e.lead===this}getLead(){var e;const{layoutId:t}=this.options;return t&&(null===(e=this.getStack())||void 0===e?void 0:e.lead)||this}getPrevLead(){var e;const{layoutId:t}=this.options;return t?null===(e=this.getStack())||void 0===e?void 0:e.prevLead:void 0}getStack(){const{layoutId:e}=this.options;if(e)return this.root.sharedNodes.get(e)}promote(){let{needsReset:e,transition:t,preserveFollowOpacity:n}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const r=this.getStack();r&&r.promote(this,n),e&&(this.projectionDelta=void 0,this.needsReset=!0),t&&this.setOptions({transition:t})}relegate(){const e=this.getStack();return!!e&&e.relegate(this)}resetRotation(){const{visualElement:e}=this.options;if(!e)return;let t=!1;const{latestValues:n}=e;if((n.rotate||n.rotateX||n.rotateY||n.rotateZ)&&(t=!0),!t)return;const r={};for(let i=0;i<Hc.length;i++){const t="rotate"+Hc[i];n[t]&&(r[t]=n[t],e.setStaticValue(t,0))}e.render();for(const i in r)e.setStaticValue(i,r[i]);e.scheduleRender()}getProjectionStyles(e){var t,n;if(!this.instance||this.isSVG)return;if(!this.isVisible)return qc;const r={visibility:""},i=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,r.opacity="",r.pointerEvents=zo(null===e||void 0===e?void 0:e.pointerEvents)||"",r.transform=i?i(this.latestValues,""):"none",r;const o=this.getLead();if(!this.projectionDelta||!this.layout||!o.target){const t={};return this.options.layoutId&&(t.opacity=void 0!==this.latestValues.opacity?this.latestValues.opacity:1,t.pointerEvents=zo(null===e||void 0===e?void 0:e.pointerEvents)||""),this.hasProjected&&!Ql(this.latestValues)&&(t.transform=i?i({},""):"none",this.hasProjected=!1),t}const a=o.animationValues||o.latestValues;this.applyTransformsToTarget(),r.transform=Bc(this.projectionDeltaWithTransform,this.treeScale,a),i&&(r.transform=i(a,r.transform));const{x:s,y:l}=this.projectionDelta;r.transformOrigin=`${100*s.origin}% ${100*l.origin}% 0`,o.animationValues?r.opacity=o===this?null!==(n=null!==(t=a.opacity)&&void 0!==t?t:this.latestValues.opacity)&&void 0!==n?n:1:this.preserveOpacity?this.latestValues.opacity:a.opacityExit:r.opacity=o===this?void 0!==a.opacity?a.opacity:"":void 0!==a.opacityExit?a.opacityExit:0;for(const c in Ei){if(void 0===a[c])continue;const{correct:e,applyTo:t}=Ei[c],n="none"===r.transform?a[c]:e(a[c],o);if(t){const e=t.length;for(let i=0;i<e;i++)r[t[i]]=n}else r[c]=n}return this.options.layoutId&&(r.pointerEvents=o===this?zo(null===e||void 0===e?void 0:e.pointerEvents)||"":"none"),r}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(e=>{var t;return null===(t=e.currentAnimation)||void 0===t?void 0:t.stop()}),this.root.nodes.forEach(tu),this.root.sharedNodes.clear()}}}function Qc(e){e.updateLayout()}function Xc(e){var t;const n=(null===(t=e.resumeFrom)||void 0===t?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&n&&e.hasListeners("didUpdate")){const{layoutBox:t,measuredBox:r}=e.layout,{animationType:i}=e.options,o=n.source!==e.layout.source;"size"===i?ql(e=>{const r=o?n.measuredBox[e]:n.layoutBox[e],i=Ol(r);r.min=t[e].min,r.max=r.min+i}):gu(i,n.layoutBox,t)&&ql(r=>{const i=o?n.measuredBox[r]:n.layoutBox[r],a=Ol(t[r]);i.max=i.min+a,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[r].max=e.relativeTarget[r].min+a)});const a={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}};_l(a,t,n.layoutBox);const s={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}};o?_l(s,e.applyTransform(r,!0),n.measuredBox):_l(s,t,n.layoutBox);const l=!Ic(a);let c=!1;if(!e.resumeFrom){const r=e.getClosestProjectingParent();if(r&&!r.resumeFrom){const{snapshot:i,layout:o}=r;if(i&&o){const a={x:{min:0,max:0},y:{min:0,max:0}};Fl(a,n.layoutBox,i.layoutBox);const s={x:{min:0,max:0},y:{min:0,max:0}};Fl(s,t,o.layoutBox),Fc(a,s)||(c=!0),r.options.layoutRoot&&(e.relativeTarget=s,e.relativeTargetOrigin=a,e.relativeParent=r)}}}e.notifyListeners("didUpdate",{layout:t,snapshot:n,delta:s,layoutDelta:a,hasLayoutChanged:l,hasRelativeTargetChanged:c})}else if(e.isLead()){const{onExitComplete:t}=e.options;t&&t()}e.options.transition=void 0}function Zc(e){Kc.totalNodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=Boolean(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function Jc(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function eu(e){e.clearSnapshot()}function tu(e){e.clearMeasurements()}function nu(e){e.isLayoutDirty=!1}function ru(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function iu(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function ou(e){e.resolveTargetDelta()}function au(e){e.calcProjection()}function su(e){e.resetRotation()}function lu(e){e.removeLeadSnapshot()}function cu(e,t,n){e.translate=$a(t.translate,0,n),e.scale=$a(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function uu(e,t,n,r){e.min=$a(t.min,n.min,r),e.max=$a(t.max,n.max,r)}function du(e){return e.animationValues&&void 0!==e.animationValues.opacityExit}const pu={duration:.45,ease:[.4,0,.1,1]},hu=e=>"undefined"!==typeof navigator&&navigator.userAgent.toLowerCase().includes(e),fu=hu("applewebkit/")&&!hu("chrome/")?Math.round:Ro;function mu(e){e.min=fu(e.min),e.max=fu(e.max)}function gu(e,t,n){return"position"===e||"preserve-aspect"===e&&!Al(Vc(t),Vc(n),.2)}const yu=Gc({attachResizeListener:(e,t)=>Uo(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),vu={current:void 0},xu=Gc({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!vu.current){const e=new yu({});e.mount(window),e.setOptions({layoutScroll:!0}),vu.current=e}return vu.current},resetTransform:(e,t)=>{e.style.transform=void 0!==t?t:"none"},checkIsScrollRoot:e=>Boolean("fixed"===window.getComputedStyle(e).position)}),bu={pan:{Feature:class extends Zo{constructor(){super(...arguments),this.removePointerDownListener=Ro}onPointerDown(e){this.session=new Pl(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:uc(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:t,onPan:n,onPanEnd:r}=this.node.getProps();return{onSessionStart:fc(e),onStart:fc(t),onMove:n,onEnd:(e,t)=>{delete this.session,r&&No.update(()=>r(e,t))}}}mount(){this.removePointerDownListener=Wo(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}},drag:{Feature:class extends Zo{constructor(e){super(e),this.removeGroupControls=Ro,this.removeListeners=Ro,this.controls=new pc(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Ro}unmount(){this.removeGroupControls(),this.removeListeners()}},ProjectionNode:xu,MeasureLayout:bc}},wu=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;function ku(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;pa(n<=4,`Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`);const[r,i]=function(e){const t=wu.exec(e);if(!t)return[,];const[,n,r]=t;return[n,r]}(e);if(!r)return;const o=window.getComputedStyle(t).getPropertyValue(r);if(o){const e=o.trim();return Xs(e)?parseFloat(e):e}return _i(i)?ku(i,t,n+1):i}const ju=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),Su=e=>ju.has(e),Cu=e=>e===Fi||e===Qi,Pu=(e,t)=>parseFloat(e.split(", ")[t]),Eu=(e,t)=>(n,r)=>{let{transform:i}=r;if("none"===i||!i)return 0;const o=i.match(/^matrix3d\((.+)\)$/);if(o)return Pu(o[1],t);{const t=i.match(/^matrix\((.+)\)$/);return t?Pu(t[1],e):0}},Tu=new Set(["x","y","z"]),zu=Ti.filter(e=>!Tu.has(e));const Du={width:(e,t)=>{let{x:n}=e,{paddingLeft:r="0",paddingRight:i="0"}=t;return n.max-n.min-parseFloat(r)-parseFloat(i)},height:(e,t)=>{let{y:n}=e,{paddingTop:r="0",paddingBottom:i="0"}=t;return n.max-n.min-parseFloat(r)-parseFloat(i)},top:(e,t)=>{let{top:n}=t;return parseFloat(n)},left:(e,t)=>{let{left:n}=t;return parseFloat(n)},bottom:(e,t)=>{let{y:n}=e,{top:r}=t;return parseFloat(r)+(n.max-n.min)},right:(e,t)=>{let{x:n}=e,{left:r}=t;return parseFloat(r)+(n.max-n.min)},x:Eu(4,13),y:Eu(5,14)};Du.translateX=Du.x,Du.translateY=Du.y;const Mu=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};t={...t},r={...r};const i=Object.keys(t).filter(Su);let o=[],a=!1;const s=[];if(i.forEach(i=>{const l=e.getValue(i);if(!e.hasValue(i))return;let c=n[i],u=al(c);const d=t[i];let p;if(Eo(d)){const e=d.length,t=null===d[0]?1:0;c=d[t],u=al(c);for(let n=t;n<e&&null!==d[n];n++)p?pa(al(d[n])===p,"All keyframes must be of the same type"):(p=al(d[n]),pa(p===u||Cu(u)&&Cu(p),"Keyframes must be of the same dimension as the current value"))}else p=al(d);if(u!==p)if(Cu(u)&&Cu(p)){const e=l.get();"string"===typeof e&&l.set(parseFloat(e)),"string"===typeof d?t[i]=parseFloat(d):Array.isArray(d)&&p===Qi&&(t[i]=d.map(parseFloat))}else(null===u||void 0===u?void 0:u.transform)&&(null===p||void 0===p?void 0:p.transform)&&(0===c||0===d)?0===c?l.set(p.transform(c)):t[i]=u.transform(d):(a||(o=function(e){const t=[];return zu.forEach(n=>{const r=e.getValue(n);void 0!==r&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),t.length&&e.render(),t}(e),a=!0),s.push(i),r[i]=void 0!==r[i]?r[i]:t[i],l.jump(d))}),s.length){const n=s.indexOf("height")>=0?window.pageYOffset:null,i=((e,t,n)=>{const r=t.measureViewportBox(),i=t.current,o=getComputedStyle(i),{display:a}=o,s={};"none"===a&&t.setStaticValue("display",e.display||"block"),n.forEach(e=>{s[e]=Du[e](r,o)}),t.render();const l=t.measureViewportBox();return n.forEach(n=>{const r=t.getValue(n);r&&r.jump(s[n]),e[n]=Du[n](l,o)}),e})(t,e,s);return o.length&&o.forEach(t=>{let[n,r]=t;e.getValue(n).set(r)}),e.render(),ri&&null!==n&&window.scrollTo({top:n}),{target:i,transitionEnd:r}}return{target:t,transitionEnd:r}};function Ru(e,t,n,r){return(e=>Object.keys(e).some(Su))(t)?Mu(e,t,n,r):{target:t,transitionEnd:r}}const Ou=(e,t,n,r)=>{const i=function(e,t,n){let{...r}=t;const i=e.current;if(!(i instanceof Element))return{target:r,transitionEnd:n};n&&(n={...n}),e.values.forEach(e=>{const t=e.get();if(!_i(t))return;const n=ku(t,i);n&&e.set(n)});for(const o in r){const e=r[o];if(!_i(e))continue;const t=ku(e,i);t&&(r[o]=t,n||(n={}),void 0===n[o]&&(n[o]=e))}return{target:r,transitionEnd:n}}(e,t,r);return Ru(e,t=i.target,n,r=i.transitionEnd)},Au={current:null},Nu={current:!1};const _u=new WeakMap,Lu=Object.keys(vi),Iu=Lu.length,Fu=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"],Vu=pi.length;class Uu{constructor(e){let{parent:t,props:n,presenceContext:r,reducedMotionConfig:i,visualState:o}=e,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.scheduleRender=()=>No.render(this.render,!1,!0);const{latestValues:s,renderState:l}=o;this.latestValues=s,this.baseTarget={...s},this.initialValues=n.initial?{...s}:{},this.renderState=l,this.parent=t,this.props=n,this.presenceContext=r,this.depth=t?t.depth+1:0,this.reducedMotionConfig=i,this.options=a,this.isControllingVariants=hi(n),this.isVariantNode=fi(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=Boolean(t&&t.current);const{willChange:c,...u}=this.scrapeMotionValuesFromProps(n,{});for(const d in u){const e=u[d];void 0!==s[d]&&Mi(e)&&(e.set(s[d],!1),Qs(c)&&c.add(d))}}scrapeMotionValuesFromProps(e,t){return{}}mount(e){this.current=e,_u.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((e,t)=>this.bindToMotionValue(t,e)),Nu.current||function(){if(Nu.current=!0,ri)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>Au.current=e.matches;e.addListener(t),t()}else Au.current=!1}(),this.shouldReduceMotion="never"!==this.reducedMotionConfig&&("always"===this.reducedMotionConfig||Au.current),this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){_u.delete(this.current),this.projection&&this.projection.unmount(),_o(this.notifyUpdate),_o(this.render),this.valueSubscriptions.forEach(e=>e()),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features)this.features[e].unmount();this.current=null}bindToMotionValue(e,t){const n=zi.has(e),r=t.on("change",t=>{this.latestValues[e]=t,this.props.onUpdate&&No.update(this.notifyUpdate,!1,!0),n&&this.projection&&(this.projection.isTransformDirty=!0)}),i=t.on("renderRequest",this.scheduleRender);this.valueSubscriptions.set(e,()=>{r(),i()})}sortNodePosition(e){return this.current&&this.sortInstanceNodePosition&&this.type===e.type?this.sortInstanceNodePosition(this.current,e.current):0}loadFeatures(e,t,n,r){let i,o,{children:a,...s}=e;for(let l=0;l<Iu;l++){const e=Lu[l],{isEnabled:t,Feature:n,ProjectionNode:r,MeasureLayout:a}=vi[e];r&&(i=r),t(s)&&(!this.features[e]&&n&&(this.features[e]=new n(this)),a&&(o=a))}if(("html"===this.type||"svg"===this.type)&&!this.projection&&i){this.projection=new i(this.latestValues,this.parent&&this.parent.projection);const{layoutId:e,layout:t,drag:n,dragConstraints:o,layoutScroll:a,layoutRoot:l}=s;this.projection.setOptions({layoutId:e,layout:t,alwaysMeasureLayout:Boolean(n)||o&&li(o),visualElement:this,scheduleRender:()=>this.scheduleRender(),animationType:"string"===typeof t?t:"both",initialPromotionConfig:r,layoutScroll:a,layoutRoot:l})}return o}updateFeatures(){for(const e in this.features){const t=this.features[e];t.isMounted?t.update():(t.mount(),t.isMounted=!0)}}triggerBuild(){this.build(this.renderState,this.latestValues,this.options,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):{x:{min:0,max:0},y:{min:0,max:0}}}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}makeTargetAnimatable(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return this.makeTargetAnimatableFromInstance(e,this.props,t)}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let n=0;n<Fu.length;n++){const t=Fu[n];this.propEventSubscriptions[t]&&(this.propEventSubscriptions[t](),delete this.propEventSubscriptions[t]);const r=e["on"+t];r&&(this.propEventSubscriptions[t]=this.on(t,r))}this.prevMotionValues=function(e,t,n){const{willChange:r}=t;for(const i in t){const o=t[i],a=n[i];if(Mi(o))e.addValue(i,o),Qs(r)&&r.add(i);else if(Mi(a))e.addValue(i,rl(o,{owner:e})),Qs(r)&&r.remove(i);else if(a!==o)if(e.hasValue(i)){const t=e.getValue(i);!t.hasAnimated&&t.set(o)}else{const t=e.getStaticValue(i);e.addValue(i,rl(void 0!==t?t:o,{owner:e}))}}for(const i in n)void 0===t[i]&&e.removeValue(i);return t}(this,this.scrapeMotionValuesFromProps(e,this.prevProps),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}getVariantContext(){if(arguments.length>0&&void 0!==arguments[0]&&arguments[0])return this.parent?this.parent.getVariantContext():void 0;if(!this.isControllingVariants){const e=this.parent&&this.parent.getVariantContext()||{};return void 0!==this.props.initial&&(e.initial=this.props.initial),e}const e={};for(let t=0;t<Vu;t++){const n=pi[t],r=this.props[n];(ci(r)||!1===r)&&(e[n]=r)}return e}addVariantChild(e){const t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){t!==this.values.get(e)&&(this.removeValue(e),this.bindToMotionValue(e,t)),this.values.set(e,t),this.latestValues[e]=t.get()}removeValue(e){this.values.delete(e);const t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let n=this.values.get(e);return void 0===n&&void 0!==t&&(n=rl(t,{owner:this}),this.addValue(e,n)),n}readValue(e){var t;return void 0===this.latestValues[e]&&this.current?null!==(t=this.getBaseTargetFromProps(this.props,e))&&void 0!==t?t:this.readValueFromInstance(this.current,e,this.options):this.latestValues[e]}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){var t;const{initial:n}=this.props,r="string"===typeof n||"object"===typeof n?null===(t=Co(this.props,n))||void 0===t?void 0:t[e]:void 0;if(n&&void 0!==r)return r;const i=this.getBaseTargetFromProps(this.props,e);return void 0===i||Mi(i)?void 0!==this.initialValues[e]&&void 0===r?void 0:this.baseTarget[e]:i}on(e,t){return this.events[e]||(this.events[e]=new el),this.events[e].add(t)}notify(e){if(this.events[e]){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];this.events[e].notify(...n)}}}class Bu extends Uu{sortInstanceNodePosition(e,t){return 2&e.compareDocumentPosition(t)?1:-1}getBaseTargetFromProps(e,t){return e.style?e.style[t]:void 0}removeValueFromRenderState(e,t){let{vars:n,style:r}=t;delete n[e],delete r[e]}makeTargetAnimatableFromInstance(e,t,n){let{transition:r,transitionEnd:i,...o}=e,{transformValues:a}=t,s=function(e,t,n){const r={};for(const i in e){const e=dl(i,t);if(void 0!==e)r[i]=e;else{const e=n.getValue(i);e&&(r[i]=e.get())}}return r}(o,r||{},this);if(a&&(i&&(i=a(i)),o&&(o=a(o)),s&&(s=a(s))),n){!function(e,t,n){var r,i;const o=Object.keys(t).filter(t=>!e.hasValue(t)),a=o.length;if(a)for(let s=0;s<a;s++){const a=o[s],l=t[a];let c=null;Array.isArray(l)&&(c=l[0]),null===c&&(c=null!==(i=null!==(r=n[a])&&void 0!==r?r:e.readValue(a))&&void 0!==i?i:t[a]),void 0!==c&&null!==c&&("string"===typeof c&&(Xs(c)||Hs(c))?c=parseFloat(c):!ll(c)&&rs.test(l)&&(c=Ws(a,l)),e.addValue(a,rl(c,{owner:e})),void 0===n[a]&&(n[a]=c),null!==c&&e.setBaseTarget(a,c))}}(this,o,s);const e=Ou(this,o,s,i);i=e.transitionEnd,o=e.target}return{transition:r,transitionEnd:i,...o}}}class $u extends Bu{constructor(){super(...arguments),this.type="html"}readValueFromInstance(e,t){if(zi.has(t)){const e=$s(t);return e&&e.default||0}{const r=(n=e,window.getComputedStyle(n)),i=(Ni(t)?r.getPropertyValue(t):r[t])||0;return"string"===typeof i?i.trim():i}var n}measureInstanceViewportBox(e,t){let{transformPagePoint:n}=t;return cc(e,n)}build(e,t,n,r){no(e,t,n,r.transformTemplate)}scrapeMotionValuesFromProps(e,t){return jo(e,t)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;Mi(e)&&(this.childSubscription=e.on("change",e=>{this.current&&(this.current.textContent=`${e}`)}))}renderInstance(e,t,n,r){bo(e,t,n,r)}}class Wu extends Bu{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(zi.has(t)){const e=$s(t);return e&&e.default||0}return t=wo.has(t)?t:ai(t),e.getAttribute(t)}measureInstanceViewportBox(){return{x:{min:0,max:0},y:{min:0,max:0}}}scrapeMotionValuesFromProps(e,t){return So(e,t)}build(e,t,n,r){mo(e,t,n,this.isSVGTag,r.transformTemplate)}renderInstance(e,t,n,r){ko(e,t,0,r)}mount(e){this.isSVGTag=yo(e.tagName),super.mount(e)}}const Hu=(e,t)=>Pi(e)?new Wu(t,{enableHardwareAcceleration:!1}):new $u(t,{enableHardwareAcceleration:!0}),qu={...Sl,...la,...bu,...{layout:{ProjectionNode:xu,MeasureLayout:bc}}},Yu=Si((e,t)=>function(e,t,n,r){let{forwardMotionProps:i=!1}=t;return{...Pi(e)?Fo:Vo,preloadedFeatures:n,useRender:xo(i),createVisualElement:r,Component:e}}(e,t,qu,Hu));const Ku=Cr("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]),Gu=Cr("Pause",[["rect",{width:"4",height:"16",x:"6",y:"4",key:"iffhe4"}],["rect",{width:"4",height:"16",x:"14",y:"4",key:"sjin7j"}]]),Qu=Cr("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]),Xu=kr.section`
  min-height: 100vh;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #cbd5e1 100%);
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding-top: 80px;
`,Zu=kr.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
    padding: 0 15px;
  }

  @media (max-width: 480px) {
    padding: 0 10px;
    gap: 1.5rem;
  }
`,Ju=kr.div`
  position: relative;
  z-index: 2;
`,ed=kr.div`
  position: relative;
  z-index: 2;
`,td=kr(Yu.h1)`
  font-family: 'Playfair Display', serif;
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 1rem;
  line-height: 1.1;

  @media (max-width: 768px) {
    font-size: clamp(2rem, 6vw, 3rem);
  }

  @media (max-width: 480px) {
    font-size: clamp(1.75rem, 7vw, 2.5rem);
  }
`,nd=kr.span`
  background: linear-gradient(135deg, #f59e0b, #d97706);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`,rd=kr(Yu.p)`
  font-size: clamp(1.1rem, 2vw, 1.4rem);
  color: #64748b;
  margin-bottom: 2rem;
  line-height: 1.7;
  max-width: 500px;

  @media (max-width: 768px) {
    font-size: clamp(1rem, 3vw, 1.2rem);
    max-width: 100%;
  }

  @media (max-width: 480px) {
    font-size: clamp(0.9rem, 4vw, 1.1rem);
  }
`,id=kr(Yu.div)`
  background: white;
  border-radius: 20px;
  padding: 1.5rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
  border: 2px solid #e2e8f0;
`,od=kr.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
  color: #059669;
  font-weight: 600;
`,ad=kr.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`,sd=kr.div`
  text-align: center;
  padding: 1rem;
  background: #f8fafc;
  border-radius: 12px;
`,ld=kr.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 0.25rem;
`,cd=kr.div`
  font-size: 0.875rem;
  color: #64748b;
  font-weight: 500;
`,ud=kr(Yu.div)`
  background: white;
  border-radius: 24px;
  padding: 2rem;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
  position: relative;
  overflow: hidden;
`,dd=kr.div`
  height: 300px;
  background: linear-gradient(135deg, #fef3c7, #fde68a);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  position: relative;
  overflow: hidden;
`,pd=kr.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: #059669;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 600;
`,hd=kr.h3`
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 0.5rem;
`,fd=kr.div`
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
  margin-bottom: 1rem;
`,md=kr.span`
  font-size: 2rem;
  font-weight: 700;
  color: #059669;
`,gd=kr.span`
  font-size: 1.2rem;
  color: #94a3b8;
  text-decoration: line-through;
`,yd=kr.div`
  font-size: 0.875rem;
  color: #dc2626;
  font-weight: 600;
`,vd=kr.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
`,xd=kr.button`
  background: linear-gradient(135deg, #f59e0b, #d97706);
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(245, 158, 11, 0.3);
  }
`,bd=kr.button`
  background: white;
  color: #1e293b;
  border: 2px solid #e2e8f0;
  padding: 12px 24px;
  border-radius: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    border-color: #f59e0b;
    color: #f59e0b;
  }
`,wd=()=>{const[e,n]=(0,t.useState)(new Date),[r,i]=(0,t.useState)(!0);(0,t.useEffect)(()=>{const e=setInterval(()=>{n(new Date)},1e3);return()=>{clearInterval(e)}},[]);return(0,Vr.jsx)(Xu,{id:"hero",children:(0,Vr.jsxs)(Zu,{children:[(0,Vr.jsxs)(Ju,{children:[(0,Vr.jsxs)(td,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8},children:["Pure ",(0,Vr.jsx)(nd,{children:"Fresh Milk"})," from Happy Cows"]}),(0,Vr.jsx)(rd,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8,delay:.2},children:"Experience the difference with our farm-fresh milk, delivered within 3 hours of milking. No hormones, no antibiotics, just pure goodness from our indigenous Gir cows."}),(0,Vr.jsxs)(id,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8,delay:.4},children:[(0,Vr.jsxs)(od,{children:[(0,Vr.jsx)(Ku,{size:16}),(0,Vr.jsx)("span",{children:"Live Delivery Tracker"})]}),(0,Vr.jsxs)(ad,{children:[(0,Vr.jsxs)(sd,{children:[(0,Vr.jsx)(ld,{children:(o=e,o.toLocaleTimeString("en-US",{hour12:!1,hour:"2-digit",minute:"2-digit",second:"2-digit"}))}),(0,Vr.jsx)(cd,{children:"Current Time"})]}),(0,Vr.jsxs)(sd,{children:[(0,Vr.jsx)(ld,{children:"3h"}),(0,Vr.jsx)(cd,{children:"Delivery Window"})]})]})]})]}),(0,Vr.jsx)(ed,{children:(0,Vr.jsxs)(ud,{initial:{opacity:0,x:30},animate:{opacity:1,x:0},transition:{duration:.8,delay:.6},children:[(0,Vr.jsxs)(dd,{children:[(0,Vr.jsx)(pd,{children:"Premium Quality"}),(0,Vr.jsx)(Yu.div,{animate:{scale:[1,1.05,1]},transition:{duration:2,repeat:1/0},children:"\ud83e\udd5b"})]}),(0,Vr.jsx)(hd,{children:"Fresh Milk"}),(0,Vr.jsxs)(fd,{children:[(0,Vr.jsx)(md,{children:"\u20b9110"}),(0,Vr.jsx)(gd,{children:"\u20b9130"}),(0,Vr.jsx)(yd,{children:"Limited Time"})]}),(0,Vr.jsx)("p",{style:{color:"#64748b",marginBottom:"1rem"},children:"Pure, unprocessed milk with all natural probiotics intact. Delivered fresh from our farm to your doorstep."}),(0,Vr.jsxs)(vd,{children:[(0,Vr.jsxs)(xd,{onClick:()=>i(!r),children:[r?(0,Vr.jsx)(Gu,{size:16}):(0,Vr.jsx)(Qu,{size:16}),r?"Pause":"Start"," Live"]}),(0,Vr.jsxs)(bd,{children:[(0,Vr.jsx)(Dr,{size:16}),"Add to Cart"]})]})]})})]})});var o};function kd(){const e=(0,t.useRef)(!1);return ii(()=>(e.current=!0,()=>{e.current=!1}),[]),e}class jd extends t.Component{getSnapshotBeforeUpdate(e){const t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){const e=this.props.sizeRef.current;e.height=t.offsetHeight||0,e.width=t.offsetWidth||0,e.top=t.offsetTop,e.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function Sd(e){let{children:n,isPresent:r}=e;const i=(0,t.useId)(),o=(0,t.useRef)(null),a=(0,t.useRef)({width:0,height:0,top:0,left:0});return(0,t.useInsertionEffect)(()=>{const{width:e,height:t,top:n,left:s}=a.current;if(r||!o.current||!e||!t)return;o.current.dataset.motionPopId=i;const l=document.createElement("style");return document.head.appendChild(l),l.sheet&&l.sheet.insertRule(`\n          [data-motion-pop-id="${i}"] {\n            position: absolute !important;\n            width: ${e}px !important;\n            height: ${t}px !important;\n            top: ${n}px !important;\n            left: ${s}px !important;\n          }\n        `),()=>{document.head.removeChild(l)}},[r]),t.createElement(jd,{isPresent:r,childRef:o,sizeRef:a},t.cloneElement(n,{ref:o}))}const Cd=e=>{let{children:n,initial:r,isPresent:i,onExitComplete:o,custom:a,presenceAffectsLayout:s,mode:l}=e;const c=Po(Pd),u=(0,t.useId)(),d=(0,t.useMemo)(()=>({id:u,initial:r,isPresent:i,custom:a,onExitComplete:e=>{c.set(e,!0);for(const t of c.values())if(!t)return;o&&o()},register:e=>(c.set(e,!1),()=>c.delete(e))}),s?void 0:[i]);return(0,t.useMemo)(()=>{c.forEach((e,t)=>c.set(t,!1))},[i]),t.useEffect(()=>{!i&&!c.size&&o&&o()},[i]),"popLayout"===l&&(n=t.createElement(Sd,{isPresent:i},n)),t.createElement(ni.Provider,{value:d},n)};function Pd(){return new Map}const Ed=e=>e.key||"";const Td=e=>{let{children:n,custom:r,initial:i=!0,onExitComplete:o,exitBeforeEnter:a,presenceAffectsLayout:s=!0,mode:l="sync"}=e;pa(!a,"Replace exitBeforeEnter with mode='wait'");const c=(0,t.useContext)(xi).forceRender||function(){const e=kd(),[n,r]=(0,t.useState)(0),i=(0,t.useCallback)(()=>{e.current&&r(n+1)},[n]);return[(0,t.useCallback)(()=>No.postRender(i),[i]),n]}()[0],u=kd(),d=function(e){const n=[];return t.Children.forEach(e,e=>{(0,t.isValidElement)(e)&&n.push(e)}),n}(n);let p=d;const h=(0,t.useRef)(new Map).current,f=(0,t.useRef)(p),m=(0,t.useRef)(new Map).current,g=(0,t.useRef)(!0);var y;if(ii(()=>{g.current=!1,function(e,t){e.forEach(e=>{const n=Ed(e);t.set(n,e)})}(d,m),f.current=p}),y=()=>{g.current=!0,m.clear(),h.clear()},(0,t.useEffect)(()=>()=>y(),[]),g.current)return t.createElement(t.Fragment,null,p.map(e=>t.createElement(Cd,{key:Ed(e),isPresent:!0,initial:!!i&&void 0,presenceAffectsLayout:s,mode:l},e)));p=[...p];const v=f.current.map(Ed),x=d.map(Ed),b=v.length;for(let t=0;t<b;t++){const e=v[t];-1!==x.indexOf(e)||h.has(e)||h.set(e,void 0)}return"wait"===l&&h.size&&(p=[]),h.forEach((e,n)=>{if(-1!==x.indexOf(n))return;const i=m.get(n);if(!i)return;const a=v.indexOf(n);let g=e;if(!g){const e=()=>{h.delete(n);const e=Array.from(m.keys()).filter(e=>!x.includes(e));if(e.forEach(e=>m.delete(e)),f.current=d.filter(t=>{const r=Ed(t);return r===n||e.includes(r)}),!h.size){if(!1===u.current)return;c(),o&&o()}};g=t.createElement(Cd,{key:Ed(i),isPresent:!1,onExitComplete:e,custom:r,presenceAffectsLayout:s,mode:l},i),h.set(n,g)}p.splice(a,0,g)}),p=p.map(e=>{const n=e.key;return h.has(n)?e:t.createElement(Cd,{key:Ed(e),isPresent:!0,presenceAffectsLayout:s,mode:l},e)}),t.createElement(t.Fragment,null,h.size?p:p.map(e=>(0,t.cloneElement)(e)))},zd=Cr("Beef",[["circle",{cx:"12.5",cy:"8.5",r:"2.5",key:"9738u8"}],["path",{d:"M12.5 2a6.5 6.5 0 0 0-6.22 4.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3A6.5 6.5 0 0 0 12.5 2Z",key:"o0f6za"}],["path",{d:"m18.5 6 2.19 4.5a6.48 6.48 0 0 1 .31 2 6.49 6.49 0 0 1-2.6 5.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5",key:"k7p6i0"}]]),Dd=Cr("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]),Md=Cr("Award",[["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}],["path",{d:"M15.477 12.89 17 22l-5-3-5 3 1.523-9.11",key:"em7aur"}]]),Rd=Cr("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]),Od=kr.section`
  padding: 100px 0;
  background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
`,Ad=kr.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
`,Nd=kr(Yu.div)`
  text-align: center;
  margin-bottom: 4rem;
`,_d=kr.h2`
  font-family: 'Playfair Display', serif;
  font-size: clamp(2rem, 4vw, 3.5rem);
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 1rem;
`,Ld=kr.p`
  font-size: 1.2rem;
  color: #64748b;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
`,Id=kr.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  margin-bottom: 4rem;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`,Fd=kr(Yu.div)`
  h3 {
    font-family: 'Playfair Display', serif;
    font-size: 2rem;
    font-weight: 600;
    color: #1e293b;
    margin-bottom: 1.5rem;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.7;
    color: #64748b;
    margin-bottom: 1.5rem;
  }
`,Vd=kr(Yu.div)`
  background: white;
  border-radius: 24px;
  padding: 2rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  position: relative;
`,Ud=kr.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border-radius: 12px;
  background: ${e=>e.active?"#fef3c7":"#f8fafc"};
  margin-bottom: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  border-left: 4px solid ${e=>e.active?"#f59e0b":"#e2e8f0"};

  &:hover {
    background: #fef3c7;
    border-left-color: #f59e0b;
  }
`,Bd=kr.div`
  font-weight: 700;
  color: #f59e0b;
  font-size: 1.2rem;
  min-width: 60px;
`,$d=kr.div`
  flex: 1;
`,Wd=kr.div`
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 0.25rem;
`,Hd=kr.div`
  font-size: 0.875rem;
  color: #64748b;
`,qd=kr(Yu.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-top: 4rem;
`,Yd=kr(Yu.div)`
  background: white;
  padding: 2rem;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border: 2px solid #f1f5f9;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    border-color: #f59e0b;
  }
`,Kd=kr.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #f59e0b, #d97706);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  color: white;
`,Gd=kr.div`
  font-size: 2rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 0.5rem;
`,Qd=kr.div`
  color: #64748b;
  font-weight: 500;
`,Xd=kr(Yu.div)`
  background: linear-gradient(135deg, #fef3c7, #fde68a);
  border-radius: 24px;
  padding: 2rem;
  margin-top: 3rem;
  text-align: center;
`,Zd=kr.button`
  background: linear-gradient(135deg, #f59e0b, #d97706);
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1rem;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(245, 158, 11, 0.3);
  }
`,Jd=kr(Yu.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 2rem;
`,ep=kr.div`
  background: white;
  border-radius: 24px;
  padding: 2rem;
  max-width: 800px;
  width: 100%;
  max-height: 80vh;
  overflow-y: auto;
`,tp=(kr.div`
  padding: 1rem;
  border-radius: 12px;
  margin-bottom: 1rem;
  background: ${e=>e.active?"#fef3c7":"#f8fafc"};
  border-left: 4px solid ${e=>e.active?"#f59e0b":"#e2e8f0"};
`,()=>{const[e,n]=(0,t.useState)(0),[r,i]=(0,t.useState)(!1),[o,a]=(0,t.useState)(0),s=[{title:"Welcome to Our Farm",description:"Located in the serene Aravalis, our farm spans 15 acres of organic land.",icon:"\ud83c\udfde\ufe0f"},{title:"Meet Our Cows",description:"Our 50+ indigenous Gir and Sahiwal cows roam freely in open pastures.",icon:"\ud83d\udc04"},{title:"Organic Feeding",description:"We grow pesticide-free fodder and provide natural mineral supplements.",icon:"\ud83c\udf31"},{title:"Milking Process",description:"Twice daily milking with traditional methods, no machines or stress.",icon:"\ud83e\udd5b"},{title:"Quality Control",description:"Every batch is tested for purity before delivery to your doorstep.",icon:"\u2705"}];return(0,Vr.jsx)(Od,{id:"about",children:(0,Vr.jsxs)(Ad,{children:[(0,Vr.jsxs)(Nd,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.8},viewport:{once:!0},children:[(0,Vr.jsx)(_d,{children:"Our Story"}),(0,Vr.jsx)(Ld,{children:"From corporate life to sustainable farming - discover how we're bringing pure fresh milk back to Indian families through ethical and traditional practices."})]}),(0,Vr.jsxs)(Id,{children:[(0,Vr.jsxs)(Fd,{initial:{opacity:0,x:-30},whileInView:{opacity:1,x:0},transition:{duration:.8},viewport:{once:!0},children:[(0,Vr.jsx)("h3",{children:"The Farmer's Journey"}),(0,Vr.jsx)("p",{children:"Our founder left a successful corporate career to return to his roots in farming. Frustrated with the lack of pure, unprocessed milk in the market, he decided to create a dairy that prioritizes animal welfare, environmental sustainability, and product purity."}),(0,Vr.jsx)("p",{children:"Today, our farm is home to 50+ indigenous Gir and Sahiwal cows, each treated like family. We believe that happy cows produce the best milk, which is why we never separate calves from their mothers and allow our cows to roam freely in our organic pastures."}),(0,Vr.jsx)("p",{children:"Every morning, our fresh milk is delivered to your doorstep within 3 hours of milking, ensuring you get the purest, most nutritious milk possible - just like our grandparents used to drink."})]}),(0,Vr.jsxs)(Vd,{initial:{opacity:0,x:30},whileInView:{opacity:1,x:0},transition:{duration:.8},viewport:{once:!0},children:[(0,Vr.jsx)("h3",{style:{marginBottom:"1.5rem",color:"#1e293b"},children:"Our Journey"}),[{year:"2018",title:"The Beginning",description:"Started with 5 indigenous Gir cows on our family farm"},{year:"2019",title:"First Customers",description:"Delivered our first fresh milk to 50 families in Gurgaon"},{year:"2020",title:"Expansion",description:"Grew to 25 cows and expanded delivery to South Delhi"},{year:"2021",title:"Product Range",description:"Added Desi Ghee and Fresh Paneer to our offerings"},{year:"2022",title:"Recognition",description:"Received Organic Certification and multiple awards"},{year:"2023",title:"Today",description:"Serving 500+ families with 50+ indigenous cows"}].map((t,r)=>(0,Vr.jsxs)(Ud,{active:e===r,onClick:()=>n(r),children:[(0,Vr.jsx)(Bd,{children:t.year}),(0,Vr.jsxs)($d,{children:[(0,Vr.jsx)(Wd,{children:t.title}),(0,Vr.jsx)(Hd,{children:t.description})]})]},r))]})]}),(0,Vr.jsxs)(qd,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.8},viewport:{once:!0},children:[(0,Vr.jsxs)(Yd,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.8,delay:.1},viewport:{once:!0},children:[(0,Vr.jsx)(Kd,{children:(0,Vr.jsx)(zd,{size:24})}),(0,Vr.jsx)(Gd,{children:"50+"}),(0,Vr.jsx)(Qd,{children:"Indigenous Cows"})]}),(0,Vr.jsxs)(Yd,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.8,delay:.2},viewport:{once:!0},children:[(0,Vr.jsx)(Kd,{children:(0,Vr.jsx)(Dd,{size:24})}),(0,Vr.jsx)(Gd,{children:"500+"}),(0,Vr.jsx)(Qd,{children:"Happy Families"})]}),(0,Vr.jsxs)(Yd,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.8,delay:.3},viewport:{once:!0},children:[(0,Vr.jsx)(Kd,{children:(0,Vr.jsx)(Ku,{size:24})}),(0,Vr.jsx)(Gd,{children:"3h"}),(0,Vr.jsx)(Qd,{children:"Delivery Window"})]}),(0,Vr.jsxs)(Yd,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.8,delay:.4},viewport:{once:!0},children:[(0,Vr.jsx)(Kd,{children:(0,Vr.jsx)(Md,{size:24})}),(0,Vr.jsx)(Gd,{children:"5+"}),(0,Vr.jsx)(Qd,{children:"Years of Excellence"})]})]}),(0,Vr.jsxs)(Xd,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.8},viewport:{once:!0},children:[(0,Vr.jsx)("h3",{style:{color:"#1e293b",marginBottom:"1rem"},children:"Take a Virtual Farm Tour"}),(0,Vr.jsx)("p",{style:{color:"#64748b",marginBottom:"1rem"},children:"Experience our farm from the comfort of your home. See how we care for our cows and produce the purest fresh milk using traditional methods."}),(0,Vr.jsxs)(Zd,{onClick:()=>i(!0),children:[(0,Vr.jsx)(Rd,{size:20}),"Start Virtual Tour"]})]}),(0,Vr.jsx)(Td,{children:r&&(0,Vr.jsx)(Jd,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:()=>i(!1),children:(0,Vr.jsxs)(ep,{onClick:e=>e.stopPropagation(),children:[(0,Vr.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"2rem"},children:[(0,Vr.jsx)("h3",{style:{color:"#1e293b"},children:"Virtual Farm Tour"}),(0,Vr.jsx)("button",{onClick:()=>i(!1),style:{background:"none",border:"none",fontSize:"1.5rem",cursor:"pointer",color:"#64748b"},children:"\xd7"})]}),(0,Vr.jsxs)("div",{style:{textAlign:"center",marginBottom:"2rem"},children:[(0,Vr.jsx)("div",{style:{fontSize:"4rem",marginBottom:"1rem"},children:s[o].icon}),(0,Vr.jsx)("h4",{style:{color:"#1e293b",marginBottom:"1rem"},children:s[o].title}),(0,Vr.jsx)("p",{style:{color:"#64748b",lineHeight:"1.6"},children:s[o].description})]}),(0,Vr.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,Vr.jsx)("button",{onClick:()=>a(Math.max(0,o-1)),disabled:0===o,style:{background:0===o?"#e2e8f0":"#f59e0b",color:"white",border:"none",padding:"0.75rem 1.5rem",borderRadius:"8px",cursor:0===o?"not-allowed":"pointer",opacity:0===o?.5:1},children:"Previous"}),(0,Vr.jsxs)("div",{style:{fontSize:"0.875rem",color:"#64748b"},children:[o+1," of ",s.length]}),(0,Vr.jsx)("button",{onClick:()=>{o===s.length-1?(i(!1),a(0)):a(o+1)},style:{background:"#f59e0b",color:"white",border:"none",padding:"0.75rem 1.5rem",borderRadius:"8px",cursor:"pointer"},children:o===s.length-1?"Finish Tour":"Next"})]})]})})})]})})}),np=Cr("Milk",[["path",{d:"M8 2h8",key:"1ssgc1"}],["path",{d:"M9 2v2.789a4 4 0 0 1-.672 2.219l-.656.984A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-9.789a4 4 0 0 0-.672-2.219l-.656-.984A4 4 0 0 1 15 4.788V2",key:"qtp12x"}],["path",{d:"M7 15a6.472 6.472 0 0 1 5 0 6.47 6.47 0 0 0 5 0",key:"ygeh44"}]]),rp=Cr("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]),ip=Cr("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]),op=Cr("Calendar",[["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",ry:"2",key:"eu3xkr"}],["line",{x1:"16",x2:"16",y1:"2",y2:"6",key:"m3sa8f"}],["line",{x1:"8",x2:"8",y1:"2",y2:"6",key:"18kwsl"}],["line",{x1:"3",x2:"21",y1:"10",y2:"10",key:"xt86sb"}]]),ap=Cr("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]),sp=kr.section`
  padding: 100px 0;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
`,lp=kr.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;

  @media (max-width: 768px) {
    padding: 0 15px;
  }

  @media (max-width: 480px) {
    padding: 0 10px;
  }
`,cp=kr(Yu.div)`
  text-align: center;
  margin-bottom: 4rem;
`,up=kr.h2`
  font-family: 'Playfair Display', serif;
  font-size: clamp(2rem, 4vw, 3.5rem);
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: clamp(1.75rem, 5vw, 2.5rem);
  }

  @media (max-width: 480px) {
    font-size: clamp(1.5rem, 6vw, 2rem);
  }
`,dp=kr.p`
  font-size: 1.2rem;
  color: #64748b;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    max-width: 100%;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`,pp=kr.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 0.5rem;
    margin-bottom: 2rem;
  }

  @media (max-width: 480px) {
    gap: 0.25rem;
    margin-bottom: 1.5rem;
  }
`,hp=kr.button`
  background: ${e=>e.active?"#f59e0b":"white"};
  color: ${e=>e.active?"white":"#64748b"};
  border: 2px solid ${e=>e.active?"#f59e0b":"#e2e8f0"};
  padding: 12px 24px;
  border-radius: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    border-color: #f59e0b;
    color: #f59e0b;
  }

  @media (max-width: 768px) {
    padding: 10px 16px;
    font-size: 0.9rem;
    border-radius: 8px;
  }

  @media (max-width: 480px) {
    padding: 8px 12px;
    font-size: 0.8rem;
    gap: 0.25rem;
  }
`,fp=kr(Yu.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  margin-top: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
    margin-top: 2rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1rem;
    margin-top: 1.5rem;
  }
`,mp=kr(Yu.div)`
  background: white;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.15);
  }
`,gp=kr.div`
  height: 250px;
  background: linear-gradient(135deg, #fef3c7, #fde68a);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
`,yp=kr.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: #059669;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 600;
`,vp=kr.div`
  padding: 2rem;
`,xp=kr.h3`
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 0.5rem;
`,bp=kr.p`
  color: #64748b;
  margin-bottom: 1rem;
  line-height: 1.6;
`,wp=kr.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`,kp=kr.span`
  background: #f1f5f9;
  color: #475569;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 500;
`,jp=kr.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
`,Sp=kr.div``,Cp=kr.div`
  font-size: 2rem;
  font-weight: 700;
  color: #059669;
`,Pp=kr.div`
  font-size: 1rem;
  color: #94a3b8;
  text-decoration: line-through;
`,Ep=kr.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
`,Tp=kr.label`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 24px;
  background: #e2e8f0;
  border-radius: 12px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:before {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    top: 2px;
    left: 2px;
    background: white;
    transition: transform 0.3s ease;
  }

  input:checked + &:before {
    transform: translateX(26px);
  }

  input:checked + & {
    background: #f59e0b;
  }
`,zp=kr.input`
  display: none;
`,Dp=kr.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`,Mp=kr.button`
  background: linear-gradient(135deg, #f59e0b, #d97706);
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex: 1;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(245, 158, 11, 0.3);
  }
`,Rp=kr.button`
  background: white;
  color: #1e293b;
  border: 2px solid #e2e8f0;
  padding: 12px 24px;
  border-radius: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    border-color: #f59e0b;
    color: #f59e0b;
  }
`,Op=kr.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
  margin: 1rem 0;
  padding: 1rem;
  background: #f8fafc;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
`,Ap=kr.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.8rem;
  color: #64748b;
  font-weight: 500;

  svg {
    color: #f59e0b;
  }
`,Np=kr(Yu.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 2rem;
`,_p=kr.div`
  background: white;
  border-radius: 24px;
  padding: 2rem;
  max-width: 800px;
  width: 100%;
  max-height: 80vh;
  overflow-y: auto;
`,Lp=kr.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
`,Ip=kr.th`
  padding: 1rem;
  text-align: left;
  border-bottom: 2px solid #e2e8f0;
  font-weight: 600;
  color: #1e293b;
`,Fp=kr.td`
  padding: 1rem;
  border-bottom: 1px solid #f1f5f9;
  color: #64748b;
`,Vp=kr(Yu.div)`
  position: fixed;
  top: 20px;
  right: 20px;
  background: white;
  border-radius: 12px;
  padding: 1rem 1.5rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  z-index: 1000;
  max-width: 300px;
  border: 1px solid #e2e8f0;
  color: #1e293b;
  font-weight: 500;
`,Up=e=>{let{cart:n,setCart:r,showCart:i,setShowCart:o,onPurchaseAttempt:a,onCheckout:s,user:l}=e;const[c,u]=(0,t.useState)("all"),[d,p]=(0,t.useState)(!1),[h,f]=(0,t.useState)(!1),[m,g]=(0,t.useState)(!1),[y,v]=(0,t.useState)(""),[x,b]=(0,t.useState)("info"),w=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"info";v(e),b(t),g(!0),setTimeout(()=>g(!1),3e3)},k=[{id:1,name:"Fresh Milk",description:"Pure, unprocessed milk with all natural probiotics intact. Delivered within 3 hours of milking.",price:135,originalPrice:150,features:["Organic","No Hormones","3-Hour Delivery","Natural Protein"],category:"milk",badge:"Premium",icon:"\ud83e\udd5b",minOrder:1,maxOrder:10,unit:"L",availability:"Daily",shelfLife:"24 hours"},{id:2,name:"Toned Milk",description:"Low-fat milk with reduced fat content while maintaining nutritional value.",price:120,originalPrice:135,features:["Low Fat","High Protein","Natural Protein","Fresh Daily"],category:"milk",badge:"Toned",icon:"\ud83e\udd5b",minOrder:1,maxOrder:10,unit:"L",availability:"Daily",shelfLife:"24 hours"},{id:3,name:"Full Cream Milk",description:"Rich, creamy milk with natural fat content for maximum nutrition.",price:150,originalPrice:165,features:["Full Cream","Rich Flavor","Natural Protein","Natural Fat"],category:"milk",badge:"Full Cream",icon:"\ud83e\udd5b",minOrder:1,maxOrder:10,unit:"L",availability:"Daily",shelfLife:"24 hours"},{id:4,name:"Curd (Dahi)",description:"Traditional curd made from milk, rich in probiotics and natural cultures.",price:80,originalPrice:90,features:["Probiotics","Traditional","Natural Protein","Natural Cultures"],category:"milk",badge:"Traditional",icon:"\ud83c\udf76",minOrder:1,maxOrder:5,unit:"kg",availability:"Daily",shelfLife:"48 hours"},{id:5,name:"Buttermilk",description:"Refreshing buttermilk made from curd, perfect for digestion.",price:60,originalPrice:70,features:["Digestive","Refreshing","Natural Protein","Natural"],category:"milk",badge:"Digestive",icon:"\ud83e\udd64",minOrder:1,maxOrder:5,unit:"L",availability:"Daily",shelfLife:"24 hours"},{id:6,name:"Organic Ghee",description:"Traditional Vedic method ghee with rich, nutty flavor from milk.",price:3e3,originalPrice:3500,features:["Vedic Method","Pure","Rich Flavor","Traditional"],category:"ghee",badge:"Traditional",icon:"\ud83e\uddc8",minOrder:1,maxOrder:3,unit:"kg",availability:"Weekly",shelfLife:"12 months"},{id:7,name:"Butter",description:"Pure butter made from cream, perfect for cooking and spreading.",price:450,originalPrice:500,features:["Pure","Natural","Rich Flavor","Versatile"],category:"ghee",badge:"Pure",icon:"\ud83e\uddc8",minOrder:1,maxOrder:5,unit:"kg",availability:"Daily",shelfLife:"2 weeks"},{id:8,name:"Cream",description:"Rich, thick cream from milk, perfect for desserts and coffee.",price:200,originalPrice:220,features:["Rich","Thick","Natural Protein","Natural"],category:"ghee",badge:"Premium",icon:"\ud83c\udf66",minOrder:1,maxOrder:3,unit:"L",availability:"Daily",shelfLife:"48 hours"},{id:9,name:"Fresh Paneer",description:"Fresh cottage cheese made from milk, perfect for Indian dishes.",price:200,originalPrice:250,features:["Fresh Made","No Preservatives","Natural Protein","Traditional"],category:"paneer",badge:"Fresh Made",icon:"\ud83e\uddc0",minOrder:1,maxOrder:5,unit:"kg",availability:"Daily",shelfLife:"5 days"},{id:10,name:"Cheese",description:"Artisanal cheese made with whole, raw milk, aged naturally.",price:350,originalPrice:400,features:["Artisanal","No Preservatives","Aged","Natural Protein"],category:"paneer",badge:"Artisanal",icon:"\ud83e\uddc0",minOrder:1,maxOrder:3,unit:"kg",availability:"Weekly",shelfLife:"2 weeks"},{id:11,name:"Malai",description:"Fresh cream layer from milk, perfect for desserts and sweets.",price:180,originalPrice:200,features:["Fresh","Rich","Natural Protein","Dessert Ready"],category:"paneer",badge:"Fresh",icon:"\ud83c\udf66",minOrder:1,maxOrder:3,unit:"kg",availability:"Daily",shelfLife:"48 hours"},{id:12,name:"Lassi",description:"Refreshing yogurt-based drink made from curd with natural flavors.",price:100,originalPrice:120,features:["Refreshing","Natural","Natural Protein","Flavored"],category:"specialty",badge:"Refreshing",icon:"\ud83e\udd64",minOrder:1,maxOrder:5,unit:"L",availability:"Daily",shelfLife:"24 hours"}],j="all"===c?k:k.filter(e=>e.category===c);return(0,Vr.jsx)(sp,{id:"products",children:(0,Vr.jsxs)(lp,{children:[(0,Vr.jsxs)(cp,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.8},viewport:{once:!0},children:[(0,Vr.jsx)(up,{children:"Our Premium Products"}),(0,Vr.jsx)(dp,{children:"Experience the purest dairy products, crafted with care from our indigenous cows. Each product is delivered fresh within 3 hours of production."})]}),(0,Vr.jsxs)(pp,{children:[(0,Vr.jsxs)(hp,{active:"all"===c,onClick:()=>u("all"),children:[(0,Vr.jsx)(Er,{size:16}),"All Products"]}),(0,Vr.jsxs)(hp,{active:"milk"===c,onClick:()=>u("milk"),children:[(0,Vr.jsx)(np,{size:16}),"Milk Products"]}),(0,Vr.jsxs)(hp,{active:"ghee"===c,onClick:()=>u("ghee"),children:[(0,Vr.jsx)(Tr,{size:16}),"Ghee & Oils"]}),(0,Vr.jsxs)(hp,{active:"paneer"===c,onClick:()=>u("paneer"),children:[(0,Vr.jsx)(rp,{size:16}),"Fresh Products"]}),(0,Vr.jsxs)(hp,{active:"specialty"===c,onClick:()=>u("specialty"),children:[(0,Vr.jsx)(ip,{size:16}),"Specialty"]})]}),(0,Vr.jsx)(fp,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.8,delay:.2},viewport:{once:!0},children:j.map((e,t)=>(0,Vr.jsxs)(mp,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.8,delay:.1*t},viewport:{once:!0},children:[(0,Vr.jsxs)(gp,{children:[(0,Vr.jsx)(yp,{children:e.badge}),(0,Vr.jsx)(Yu.div,{animate:{scale:[1,1.05,1]},transition:{duration:2,repeat:1/0},style:{fontSize:"4rem"},children:e.icon})]}),(0,Vr.jsxs)(vp,{children:[(0,Vr.jsx)(xp,{children:e.name}),(0,Vr.jsx)(bp,{children:e.description}),(0,Vr.jsx)(wp,{children:e.features.map((e,t)=>(0,Vr.jsx)(kp,{children:e},t))}),(0,Vr.jsxs)(Op,{children:[(0,Vr.jsxs)(Ap,{children:[(0,Vr.jsx)(Ku,{size:14}),(0,Vr.jsxs)("span",{children:["Min: ",e.minOrder," ",e.unit]})]}),(0,Vr.jsxs)(Ap,{children:[(0,Vr.jsx)(Er,{size:14}),(0,Vr.jsxs)("span",{children:["Max: ",e.maxOrder," ",e.unit]})]}),(0,Vr.jsxs)(Ap,{children:[(0,Vr.jsx)(op,{size:14}),(0,Vr.jsx)("span",{children:e.availability})]}),(0,Vr.jsxs)(Ap,{children:[(0,Vr.jsx)(ip,{size:14}),(0,Vr.jsxs)("span",{children:["Shelf: ",e.shelfLife]})]})]}),(0,Vr.jsxs)(Ep,{children:[(0,Vr.jsx)("span",{children:"Subscribe & Save"}),(0,Vr.jsx)(Tp,{children:(0,Vr.jsx)(zp,{type:"checkbox",checked:h,onChange:e=>f(e.target.checked)})})]}),(0,Vr.jsxs)(jp,{children:[(0,Vr.jsxs)(Sp,{children:[(0,Vr.jsxs)(Cp,{children:["\u20b9",h?Math.round(.85*e.price):e.price]}),e.originalPrice>e.price&&(0,Vr.jsxs)(Pp,{children:["\u20b9",e.originalPrice]})]}),h&&(0,Vr.jsx)(Yu.div,{initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},style:{background:"#fef3c7",color:"#92400e",padding:"0.5rem 1rem",borderRadius:"8px",fontSize:"0.875rem",fontWeight:"600"},children:"Save 15%"})]}),(0,Vr.jsxs)(Dp,{children:[(0,Vr.jsxs)(Mp,{onClick:()=>(e=>{if(!l)return void(null===a||void 0===a||a());n.find(t=>t.id===e.id)?(r(t=>t.map(t=>t.id===e.id?{...t,quantity:t.quantity+1}:t)),w(`${e.name} quantity updated in cart!`,"success")):(r(t=>[...t,{id:e.id,name:e.name,price:e.price,quantity:1,description:e.description,features:e.features,badge:e.badge,icon:e.icon,unit:e.unit}]),w(`${e.name} added to cart!`,"success"))})(e),children:[(0,Vr.jsx)(Dr,{size:16}),h?"Subscribe":"Add to Cart"]}),(0,Vr.jsxs)(Rp,{onClick:()=>(e=>{if(!l)return void(null===a||void 0===a||a());const t={id:e.id,name:e.name,price:e.price,quantity:1,description:e.description,features:e.features,badge:e.badge,icon:e.icon,unit:e.unit};r([t]),null===s||void 0===s||s(),w(`Proceeding to checkout for ${e.name}!`,"success")})(e),style:{background:"#f59e0b",borderColor:"#f59e0b",color:"white"},children:[(0,Vr.jsx)(ap,{size:16}),"Buy Now"]})]})]})]},e.id))}),(0,Vr.jsx)(Yu.div,{style:{textAlign:"center",marginTop:"3rem",display:"flex",gap:"1rem",justifyContent:"center",flexWrap:"wrap"},initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.8},viewport:{once:!0},children:(0,Vr.jsxs)(Rp,{onClick:()=>p(!0),children:[(0,Vr.jsx)(ip,{size:16}),"Compare Products"]})}),(0,Vr.jsx)(Td,{children:d&&(0,Vr.jsx)(Np,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:()=>p(!1),children:(0,Vr.jsxs)(_p,{onClick:e=>e.stopPropagation(),children:[(0,Vr.jsx)("h3",{style:{marginBottom:"1rem",color:"#1e293b"},children:"Product Comparison"}),(0,Vr.jsxs)(Lp,{children:[(0,Vr.jsx)("thead",{children:(0,Vr.jsxs)("tr",{children:[(0,Vr.jsx)(Ip,{children:"Feature"}),(0,Vr.jsx)(Ip,{children:"Fresh Milk"}),(0,Vr.jsx)(Ip,{children:"Desi Ghee"}),(0,Vr.jsx)(Ip,{children:"Fresh Paneer"})]})}),(0,Vr.jsxs)("tbody",{children:[(0,Vr.jsxs)("tr",{children:[(0,Vr.jsx)(Fp,{children:"Price"}),(0,Vr.jsx)(Fp,{children:"\u20b9135/litre"}),(0,Vr.jsx)(Fp,{children:"\u20b93000/litre"}),(0,Vr.jsx)(Fp,{children:"\u20b9200/250g"})]}),(0,Vr.jsxs)("tr",{children:[(0,Vr.jsx)(Fp,{children:"Delivery"}),(0,Vr.jsx)(Fp,{children:"3 hours"}),(0,Vr.jsx)(Fp,{children:"3 hours"}),(0,Vr.jsx)(Fp,{children:"3 hours"})]}),(0,Vr.jsxs)("tr",{children:[(0,Vr.jsx)(Fp,{children:"Processing"}),(0,Vr.jsx)(Fp,{children:"Unprocessed"}),(0,Vr.jsx)(Fp,{children:"Vedic method"}),(0,Vr.jsx)(Fp,{children:"Artisanal"})]}),(0,Vr.jsxs)("tr",{children:[(0,Vr.jsx)(Fp,{children:"Preservatives"}),(0,Vr.jsx)(Fp,{children:"None"}),(0,Vr.jsx)(Fp,{children:"None"}),(0,Vr.jsx)(Fp,{children:"None"})]})]})]}),(0,Vr.jsx)("div",{style:{marginTop:"2rem",textAlign:"center"},children:(0,Vr.jsx)(Mp,{onClick:()=>p(!1),children:"Close Comparison"})})]})})}),(0,Vr.jsx)(Td,{children:m&&(0,Vr.jsxs)(Vp,{initial:{opacity:0,x:300},animate:{opacity:1,x:0},exit:{opacity:0,x:300},transition:{type:"spring",damping:25,stiffness:300},children:["success"===x&&(0,Vr.jsx)(Dr,{size:16,color:"#10b981"}),"error"===x&&(0,Vr.jsx)(Dr,{size:16,color:"#dc2626"}),"info"===x&&(0,Vr.jsx)(Er,{size:16,color:"#3b82f6"}),y]})})]})})},Bp=Cr("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]),$p=Cr("Recycle",[["path",{d:"M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5",key:"x6z5xu"}],["path",{d:"M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12",key:"1x4zh5"}],["path",{d:"m14 16-3 3 3 3",key:"f6jyew"}],["path",{d:"M8.293 13.596 7.196 9.5 3.1 10.598",key:"wf1obh"}],["path",{d:"m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843",key:"9tzpgr"}],["path",{d:"m13.378 9.633 4.096 1.098 1.097-4.096",key:"1oe83g"}]]),Wp=Cr("Truck",[["path",{d:"M5 18H3c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v11",key:"hs4xqm"}],["path",{d:"M14 9h4l4 4v4c0 .6-.4 1-1 1h-2",key:"11fp61"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}]]),Hp=kr.section`
  padding: 100px 0;
  background: var(--cream-50);
`,qp=kr.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`,Yp=kr(Yu.div)`
  text-align: center;
  margin-bottom: 4rem;
`,Kp=kr.h2`
  font-family: 'Playfair Display', serif;
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  color: var(--primary-800);
  margin-bottom: 1rem;
`,Gp=kr.p`
  font-size: 1.2rem;
  color: #666;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`,Qp=kr(Yu.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`,Xp=kr(Yu.div)`
  background: white;
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  }
`,Zp=kr.div`
  width: 60px;
  height: 60px;
  background: var(--green-100);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  color: var(--green-600);
`,Jp=kr.h3`
  font-family: 'Playfair Display', serif;
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--primary-700);
  margin-bottom: 1rem;
`,eh=kr.p`
  color: #666;
  line-height: 1.6;
  margin-bottom: 1rem;
`,th=kr.ul`
  list-style: none;
  margin-top: 1rem;
`,nh=kr.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #555;
  margin-bottom: 0.5rem;
  font-size: 0.95rem;

  &::before {
    content: "✓";
    color: var(--green-500);
    font-weight: bold;
  }
`,rh=()=>{const e=[{id:1,title:"We Don't Aggregate",description:"At Nature's Dairy, you get milk and milk products that are produced only from our own cows.",icon:(0,Vr.jsx)(Tr,{size:24}),features:["Complete control over quality","No antibiotics or hormones","Pesticide-free feed only","Traceable from farm to table"]},{id:2,title:"Indigenous Breed Development",description:"We believe in the propagation of indigenous cow breeds for superior milk quality.",icon:(0,Vr.jsx)(Bp,{size:24}),features:["Gir/Sahiwal breeds","Superior natural protein content","Natural disease resistance","Traditional breeding methods"]},{id:3,title:"Environmentally Responsible",description:"We deliver local, in a limited radius, ensuring a supply chain with low carbon footprint.",icon:(0,Vr.jsx)($p,{size:24}),features:["3-hour delivery window","Glass bottle recycling","Waste water composting","Solar-powered operations"]},{id:4,title:"Fresh & Unprocessed",description:"You get milk which is unprocessed, whole, and living - with all of its probiotic bacteria.",icon:(0,Vr.jsx)(Wp,{size:24}),features:["No pasteurization","No homogenization","Probiotic bacteria preserved","Natural cream layer"]}];return(0,Vr.jsx)(Hp,{id:"practices",children:(0,Vr.jsxs)(qp,{children:[(0,Vr.jsxs)(Yp,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.8},viewport:{once:!0},children:[(0,Vr.jsx)(Kp,{children:"Sustainable Farming Practices"}),(0,Vr.jsx)(Gp,{children:"Our commitment to ethical and sustainable practices ensures the highest quality dairy products"})]}),(0,Vr.jsx)(Qp,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.8,delay:.2},viewport:{once:!0},children:e.map((e,t)=>(0,Vr.jsxs)(Xp,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.8,delay:.1*t},viewport:{once:!0},children:[(0,Vr.jsx)(Zp,{children:e.icon}),(0,Vr.jsx)(Jp,{children:e.title}),(0,Vr.jsx)(eh,{children:e.description}),(0,Vr.jsx)(th,{children:e.features.map((e,t)=>(0,Vr.jsx)(nh,{children:e},t))})]},e.id))})]})})},ih=Cr("Quote",[["path",{d:"M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z",key:"4rm80e"}],["path",{d:"M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z",key:"10za9r"}]]),oh=Cr("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]),ah=kr.section`
  padding: 100px 0;
  background: white;
`,sh=kr.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`,lh=kr(Yu.div)`
  text-align: center;
  margin-bottom: 4rem;
`,ch=kr.h2`
  font-family: 'Playfair Display', serif;
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  color: var(--primary-800);
  margin-bottom: 1rem;
`,uh=kr.p`
  font-size: 1.2rem;
  color: #666;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`,dh=kr(Yu.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`,ph=kr(Yu.div)`
  background: var(--cream-50);
  border-radius: 20px;
  padding: 2rem;
  border: 1px solid var(--cream-200);
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }
`,hh=kr.div`
  position: absolute;
  top: -10px;
  left: 2rem;
  width: 40px;
  height: 40px;
  background: var(--primary-500);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`,fh=kr.p`
  font-size: 1.1rem;
  line-height: 1.7;
  color: #555;
  margin-bottom: 1.5rem;
  font-style: italic;
`,mh=kr.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`,gh=kr.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: var(--primary-200);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  color: var(--primary-700);
  font-size: 1.2rem;
`,yh=kr.div`
  flex: 1;
`,vh=kr.h4`
  font-weight: 600;
  color: var(--primary-700);
  margin-bottom: 0.25rem;
`,xh=kr.p`
  font-size: 0.9rem;
  color: #666;
`,bh=kr.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: var(--primary-500);
`,wh=()=>(0,Vr.jsx)(ah,{id:"testimonials",children:(0,Vr.jsxs)(sh,{children:[(0,Vr.jsxs)(lh,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.8},viewport:{once:!0},children:[(0,Vr.jsx)(ch,{children:"What Our Customers Say"}),(0,Vr.jsx)(uh,{children:"Don't just take our word for it - hear from our happy customers about their experience"})]}),(0,Vr.jsx)(dh,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.8,delay:.2},viewport:{once:!0},children:[{id:1,text:"The milk from Nature's Dairy is absolutely amazing! My kids love it and I can see the difference in their health. The cream layer is natural and the taste is incomparable to any other milk we've tried.",author:"Priya Sharma",location:"Gurgaon",rating:5,avatar:"PS"},{id:2,text:"As someone who's very particular about organic products, I'm impressed with their farming practices. The fact that they don't aggregate milk and deliver within 3 hours makes all the difference.",author:"Rajesh Kumar",location:"South Delhi",rating:5,avatar:"RK"},{id:3,text:"Their desi ghee is pure gold! Made using traditional methods, it has that authentic taste that reminds me of my grandmother's cooking. Worth every penny for the quality.",author:"Meera Patel",location:"Gurgaon",rating:5,avatar:"MP"},{id:4,text:"The fresh paneer is a game-changer for our family. It's so creamy and fresh, unlike the store-bought ones. My kids can't get enough of it in their meals.",author:"Amit Singh",location:"South Delhi",rating:5,avatar:"AS"},{id:5,text:"I love that they focus on indigenous cow breeds. The fresh milk quality is superior and I can feel the difference in my digestion. Highly recommend!",author:"Sunita Reddy",location:"Gurgaon",rating:5,avatar:"SR"},{id:6,text:"Their commitment to sustainable practices and ethical farming is commendable. The milk delivery is always on time and the glass bottles are a great eco-friendly touch.",author:"Vikram Malhotra",location:"South Delhi",rating:5,avatar:"VM"}].map((e,t)=>(0,Vr.jsxs)(ph,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.8,delay:.1*t},viewport:{once:!0},children:[(0,Vr.jsx)(hh,{children:(0,Vr.jsx)(ih,{size:20})}),(0,Vr.jsxs)(fh,{children:['"',e.text,'"']}),(0,Vr.jsxs)(mh,{children:[(0,Vr.jsx)(gh,{children:e.avatar}),(0,Vr.jsxs)(yh,{children:[(0,Vr.jsx)(vh,{children:e.author}),(0,Vr.jsx)(xh,{children:e.location})]}),(0,Vr.jsx)(bh,{children:[...Array(e.rating)].map((e,t)=>(0,Vr.jsx)(oh,{size:16,fill:"currentColor"},t))})]})]},e.id))})]})}),kh=Cr("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]),jh=Cr("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]),Sh=Cr("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]),Ch=Cr("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]),Ph=kr.section`
  padding: 100px 0;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
`,Eh=kr.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
`,Th=kr(Yu.div)`
  text-align: center;
  margin-bottom: 4rem;
`,zh=kr.h2`
  font-family: 'Playfair Display', serif;
  font-size: clamp(2rem, 4vw, 3.5rem);
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 1rem;
`,Dh=kr.p`
  font-size: 1.2rem;
  color: #64748b;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
`,Mh=kr.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-top: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`,Rh=kr(Yu.div)`
  h3 {
    font-family: 'Playfair Display', serif;
    font-size: 1.8rem;
    font-weight: 600;
    color: #1e293b;
    margin-bottom: 1.5rem;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.7;
    color: #64748b;
    margin-bottom: 2rem;
  }
`,Oh=kr.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  }
`,Ah=kr.div`
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #f59e0b, #d97706);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  flex-shrink: 0;
`,Nh=kr.div`
  h4 {
    font-weight: 600;
    color: #1e293b;
    margin-bottom: 0.25rem;
  }

  p {
    color: #64748b;
    margin: 0;
  }
`,_h=kr(Yu.form)`
  background: white;
  padding: 2rem;
  border-radius: 24px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
`,Lh=kr.h3`
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 1.5rem;
`,Ih=kr.div`
  margin-bottom: 1.5rem;
`,Fh=kr.label`
  display: block;
  font-weight: 500;
  color: #1e293b;
  margin-bottom: 0.5rem;
`,Vh=kr.input`
  width: 100%;
  padding: 12px 16px;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #f59e0b;
  }
`,Uh=kr.textarea`
  width: 100%;
  padding: 12px 16px;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-size: 1rem;
  min-height: 120px;
  resize: vertical;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #f59e0b;
  }
`,Bh=kr.button`
  background: linear-gradient(135deg, #f59e0b, #d97706);
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(245, 158, 11, 0.3);
  }
`,$h=kr(Yu.div)`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 1000;
`,Wh=kr.button`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #f59e0b, #d97706);
  border: none;
  border-radius: 50%;
  color: white;
  cursor: pointer;
  box-shadow: 0 10px 20px rgba(245, 158, 11, 0.3);
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    transform: scale(1.1);
  }
`,Hh=kr(Yu.div)`
  position: fixed;
  bottom: 5rem;
  right: 2rem;
  width: 350px;
  height: 500px;
  background: white;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  z-index: 1001;
  overflow: hidden;
`,qh=kr.div`
  background: linear-gradient(135deg, #f59e0b, #d97706);
  color: white;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`,Yh=kr.div`
  height: 400px;
  padding: 1rem;
  overflow-y: auto;
`,Kh=kr.div`
  margin-bottom: 1rem;
  display: flex;
  justify-content: ${e=>e.isUser?"flex-end":"flex-start"};
`,Gh=kr.div`
  background: ${e=>e.isUser?"#f59e0b":"#f1f5f9"};
  color: ${e=>e.isUser?"white":"#1e293b"};
  padding: 0.75rem 1rem;
  border-radius: 18px;
  max-width: 80%;
  font-size: 0.875rem;
`,Qh=kr.div`
  padding: 1rem;
  border-top: 1px solid #e2e8f0;
  display: flex;
  gap: 0.5rem;
`,Xh=kr.input`
  flex: 1;
  padding: 0.75rem;
  border: 1px solid #e2e8f0;
  border-radius: 20px;
  font-size: 0.875rem;

  &:focus {
    outline: none;
    border-color: #f59e0b;
  }
`,Zh=kr(Yu.div)`
  background: white;
  border-radius: 20px;
  padding: 2rem;
  margin-top: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`,Jh=kr.h4`
  font-family: 'Playfair Display', serif;
  font-size: 1.3rem;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,ef=kr.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
`,tf=kr.button`
  padding: 0.75rem;
  border: 2px solid ${e=>e.selected?"#f59e0b":"#e2e8f0"};
  border-radius: 8px;
  background: ${e=>e.selected?"#fef3c7":"white"};
  color: ${e=>e.selected?"#92400e":"#64748b"};
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;

  &:hover {
    border-color: #f59e0b;
    background: #fef3c7;
  }
`,nf=()=>{const[e,n]=(0,t.useState)({name:"",email:"",phone:"",message:"",deliveryTime:""}),[r,i]=(0,t.useState)(!1),[o,a]=(0,t.useState)([{text:"Hi! Welcome to Nature's Dairy. How can I help you today?",isUser:!1}]),[s,l]=(0,t.useState)(""),[c,u]=(0,t.useState)(""),d=t=>{n({...e,[t.target.name]:t.target.value})};return(0,Vr.jsx)(Ph,{id:"contact",children:(0,Vr.jsxs)(Eh,{children:[(0,Vr.jsxs)(Th,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.8},viewport:{once:!0},children:[(0,Vr.jsx)(zh,{children:"Get in Touch"}),(0,Vr.jsx)(Dh,{children:"Ready to experience the goodness of pure fresh milk? Contact us to place an order, schedule a farm visit, or try our free sample. We're here to help!"})]}),(0,Vr.jsxs)(Mh,{children:[(0,Vr.jsxs)(Rh,{initial:{opacity:0,x:-30},whileInView:{opacity:1,x:0},transition:{duration:.8},viewport:{once:!0},children:[(0,Vr.jsx)("h3",{children:"Contact Information"}),(0,Vr.jsx)("p",{children:"We would be delighted to welcome you to the farm to meet our cows and understand our farming practices. Reach out to us anytime!"}),(0,Vr.jsxs)(Oh,{children:[(0,Vr.jsx)(Ah,{children:(0,Vr.jsx)(kh,{size:20})}),(0,Vr.jsxs)(Nh,{children:[(0,Vr.jsx)("h4",{children:"Phone"}),(0,Vr.jsx)("p",{children:"+91 9810649456 / 9667035805"})]})]}),(0,Vr.jsxs)(Oh,{children:[(0,Vr.jsx)(Ah,{children:(0,Vr.jsx)(jh,{size:20})}),(0,Vr.jsxs)(Nh,{children:[(0,Vr.jsx)("h4",{children:"Email"}),(0,Vr.jsx)("p",{children:"info@naturesdairy.in"})]})]}),(0,Vr.jsxs)(Oh,{children:[(0,Vr.jsx)(Ah,{children:(0,Vr.jsx)(Sh,{size:20})}),(0,Vr.jsxs)(Nh,{children:[(0,Vr.jsx)("h4",{children:"Farm Location"}),(0,Vr.jsxs)("p",{children:["Baliawas Village, Near Gwal Pahari",(0,Vr.jsx)("br",{}),"Gurgaon 122002"]})]})]}),(0,Vr.jsxs)(Oh,{children:[(0,Vr.jsx)(Ah,{children:(0,Vr.jsx)(Ku,{size:20})}),(0,Vr.jsxs)(Nh,{children:[(0,Vr.jsx)("h4",{children:"Delivery Hours"}),(0,Vr.jsxs)("p",{children:["Daily: 6:00 AM - 9:00 AM",(0,Vr.jsx)("br",{}),"Within 3 hours of milking"]})]})]})]}),(0,Vr.jsxs)(_h,{initial:{opacity:0,x:30},whileInView:{opacity:1,x:0},transition:{duration:.8},viewport:{once:!0},onSubmit:t=>{t.preventDefault(),console.log("Form submitted:",e),alert("Thank you for your message! We will get back to you soon."),n({name:"",email:"",phone:"",message:"",deliveryTime:""})},children:[(0,Vr.jsx)(Lh,{children:"Send us a Message"}),(0,Vr.jsxs)(Ih,{children:[(0,Vr.jsx)(Fh,{htmlFor:"name",children:"Full Name *"}),(0,Vr.jsx)(Vh,{type:"text",id:"name",name:"name",value:e.name,onChange:d,required:!0})]}),(0,Vr.jsxs)(Ih,{children:[(0,Vr.jsx)(Fh,{htmlFor:"email",children:"Email Address *"}),(0,Vr.jsx)(Vh,{type:"email",id:"email",name:"email",value:e.email,onChange:d,required:!0})]}),(0,Vr.jsxs)(Ih,{children:[(0,Vr.jsx)(Fh,{htmlFor:"phone",children:"Phone Number *"}),(0,Vr.jsx)(Vh,{type:"tel",id:"phone",name:"phone",value:e.phone,onChange:d,required:!0})]}),(0,Vr.jsxs)(Ih,{children:[(0,Vr.jsx)(Fh,{htmlFor:"message",children:"Message *"}),(0,Vr.jsx)(Uh,{id:"message",name:"message",value:e.message,onChange:d,placeholder:"Tell us about your requirements or ask any questions...",required:!0})]}),(0,Vr.jsxs)(Bh,{type:"submit",children:[(0,Vr.jsx)(Ch,{size:16}),"Send Message"]})]})]}),(0,Vr.jsxs)(Zh,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.8},viewport:{once:!0},children:[(0,Vr.jsxs)(Jh,{children:[(0,Vr.jsx)(op,{size:20}),"Schedule Your Delivery"]}),(0,Vr.jsx)("p",{style:{color:"#64748b",marginBottom:"1rem"},children:"Choose your preferred delivery time. We deliver fresh milk within 3 hours of milking."}),(0,Vr.jsx)(ef,{children:["6:00 AM","6:30 AM","7:00 AM","7:30 AM","8:00 AM","8:30 AM","9:00 AM","9:30 AM"].map(e=>(0,Vr.jsx)(tf,{selected:c===e,onClick:()=>u(e),children:e},e))})]}),(0,Vr.jsx)($h,{children:(0,Vr.jsx)(Wh,{onClick:()=>i(!r),children:(0,Vr.jsx)(zr,{size:24})})}),(0,Vr.jsx)(Td,{children:r&&(0,Vr.jsxs)(Hh,{initial:{opacity:0,scale:.8,y:20},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.8,y:20},children:[(0,Vr.jsxs)(qh,{children:[(0,Vr.jsxs)("div",{children:[(0,Vr.jsx)("div",{style:{fontWeight:"600"},children:"Nature's Dairy"}),(0,Vr.jsx)("div",{style:{fontSize:"0.875rem",opacity:.9},children:"Online Support"})]}),(0,Vr.jsx)("button",{onClick:()=>i(!1),style:{background:"none",border:"none",color:"white",cursor:"pointer"},children:"\xd7"})]}),(0,Vr.jsx)(Yh,{children:o.map((e,t)=>(0,Vr.jsx)(Kh,{isUser:e.isUser,children:(0,Vr.jsx)(Gh,{isUser:e.isUser,children:e.text})},t))}),(0,Vr.jsx)(Qh,{children:(0,Vr.jsxs)("form",{onSubmit:e=>{e.preventDefault(),s.trim()&&(a([...o,{text:s,isUser:!0}]),l(""),setTimeout(()=>{const e=["Thank you for your message! Our team will assist you shortly.","Great question! Let me connect you with our dairy expert.","I understand your concern. Let me check our delivery schedule for you."],t=e[Math.floor(Math.random()*e.length)];a(e=>[...e,{text:t,isUser:!1}])},1e3))},style:{display:"flex",gap:"0.5rem",width:"100%"},children:[(0,Vr.jsx)(Xh,{type:"text",placeholder:"Type your message...",value:s,onChange:e=>l(e.target.value)}),(0,Vr.jsx)("button",{type:"submit",style:{background:"#f59e0b",border:"none",borderRadius:"50%",width:"32px",height:"32px",color:"white",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,Vr.jsx)(Ch,{size:16})})]})})]})})]})})},rf=Cr("Facebook",[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]]),of=Cr("Instagram",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]]),af=Cr("Twitter",[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]]),sf=Cr("Youtube",[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",key:"1q2vi4"}],["path",{d:"m10 15 5-3-5-3z",key:"1jp15x"}]]),lf=kr.footer`
  background: var(--primary-800);
  color: white;
  padding: 60px 0 20px;
`,cf=kr.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`,uf=kr.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`,df=kr(Yu.div)`
  h3 {
    font-family: 'Playfair Display', serif;
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--cream-100);
    margin-bottom: 1.5rem;
  }

  p {
    line-height: 1.7;
    color: var(--cream-200);
    margin-bottom: 1rem;
  }
`,pf=kr.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  color: var(--cream-200);
`,hf=kr.div`
  width: 40px;
  height: 40px;
  background: var(--primary-600);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  flex-shrink: 0;
`,ff=kr.div`
  h4 {
    font-weight: 600;
    color: var(--cream-100);
    margin-bottom: 0.25rem;
    font-size: 0.9rem;
  }

  p {
    color: var(--cream-200);
    margin: 0;
    font-size: 0.9rem;
  }
`,mf=kr.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`,gf=kr.a`
  color: var(--cream-200);
  text-decoration: none;
  transition: color 0.3s ease;
  font-size: 0.95rem;

  &:hover {
    color: var(--cream-100);
  }
`,yf=kr.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`,vf=kr.a`
  width: 45px;
  height: 45px;
  background: var(--primary-600);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background: var(--primary-500);
    transform: translateY(-2px);
  }
`,xf=kr.form`
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`,bf=kr.input`
  flex: 1;
  padding: 12px 16px;
  border: 2px solid var(--primary-600);
  border-radius: 8px;
  background: var(--primary-700);
  color: white;
  font-size: 0.9rem;

  &::placeholder {
    color: var(--cream-300);
  }

  &:focus {
    outline: none;
    border-color: var(--primary-500);
  }
`,wf=kr.button`
  background: var(--primary-500);
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;

  &:hover {
    background: var(--primary-400);
  }
`,kf=kr.div`
  border-top: 1px solid var(--primary-600);
  padding-top: 2rem;
  text-align: center;
  color: var(--cream-300);
  font-size: 0.9rem;
`,jf=()=>{const e=e=>{const t=document.getElementById(e);t&&t.scrollIntoView({behavior:"smooth"})};return(0,Vr.jsx)(lf,{children:(0,Vr.jsxs)(cf,{children:[(0,Vr.jsxs)(uf,{children:[(0,Vr.jsxs)(df,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.8},viewport:{once:!0},children:[(0,Vr.jsx)("h3",{children:"Nature's Dairy"}),(0,Vr.jsx)("p",{children:"Fresh, organic milk delivered directly from our farm to your doorstep. Experience the pure taste of nature with our carefully nurtured cows and sustainable farming practices."}),(0,Vr.jsxs)(yf,{children:[(0,Vr.jsx)(vf,{as:"button",type:"button","aria-label":"Facebook",children:(0,Vr.jsx)(rf,{size:20})}),(0,Vr.jsx)(vf,{as:"button",type:"button","aria-label":"Instagram",children:(0,Vr.jsx)(of,{size:20})}),(0,Vr.jsx)(vf,{as:"button",type:"button","aria-label":"Twitter",children:(0,Vr.jsx)(af,{size:20})}),(0,Vr.jsx)(vf,{as:"button",type:"button","aria-label":"YouTube",children:(0,Vr.jsx)(sf,{size:20})})]})]}),(0,Vr.jsxs)(df,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.8,delay:.1},viewport:{once:!0},children:[(0,Vr.jsx)("h3",{children:"Quick Links"}),(0,Vr.jsxs)(mf,{children:[(0,Vr.jsx)(gf,{onClick:()=>e("about"),children:"About Us"}),(0,Vr.jsx)(gf,{onClick:()=>e("products"),children:"Our Products"}),(0,Vr.jsx)(gf,{onClick:()=>e("practices"),children:"Farming Practices"}),(0,Vr.jsx)(gf,{onClick:()=>e("contact"),children:"Contact Us"})]})]}),(0,Vr.jsxs)(df,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.8,delay:.2},viewport:{once:!0},children:[(0,Vr.jsx)("h3",{children:"Contact Info"}),(0,Vr.jsxs)(pf,{children:[(0,Vr.jsx)(hf,{children:(0,Vr.jsx)(kh,{size:16})}),(0,Vr.jsxs)(ff,{children:[(0,Vr.jsx)("h4",{children:"Phone"}),(0,Vr.jsx)("p",{children:"+91 9810649456"})]})]}),(0,Vr.jsxs)(pf,{children:[(0,Vr.jsx)(hf,{children:(0,Vr.jsx)(jh,{size:16})}),(0,Vr.jsxs)(ff,{children:[(0,Vr.jsx)("h4",{children:"Email"}),(0,Vr.jsx)("p",{children:"info@naturesdairy.in"})]})]}),(0,Vr.jsxs)(pf,{children:[(0,Vr.jsx)(hf,{children:(0,Vr.jsx)(Sh,{size:16})}),(0,Vr.jsxs)(ff,{children:[(0,Vr.jsx)("h4",{children:"Location"}),(0,Vr.jsx)("p",{children:"Baliawas Village, Gurgaon"})]})]}),(0,Vr.jsxs)(pf,{children:[(0,Vr.jsx)(hf,{children:(0,Vr.jsx)(Ku,{size:16})}),(0,Vr.jsxs)(ff,{children:[(0,Vr.jsx)("h4",{children:"Delivery"}),(0,Vr.jsx)("p",{children:"6:00 AM - 9:00 AM Daily"})]})]})]}),(0,Vr.jsxs)(df,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.8,delay:.3},viewport:{once:!0},children:[(0,Vr.jsx)("h3",{children:"Newsletter"}),(0,Vr.jsx)("p",{children:"Subscribe to our newsletter for farm updates, health tips, and exclusive offers."}),(0,Vr.jsxs)(xf,{onSubmit:e=>{e.preventDefault(),alert("Thank you for subscribing to our newsletter!")},children:[(0,Vr.jsx)(bf,{type:"email",placeholder:"Enter your email",required:!0}),(0,Vr.jsx)(wf,{type:"submit",children:"Subscribe"})]})]})]}),(0,Vr.jsx)(kf,{children:(0,Vr.jsx)("p",{children:"\xa9 2024 Nature's Dairy. All rights reserved. | Fresh Organic Milk from Farm to Table"})})]})})},Sf=Cr("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]),Cf=Cr("KeyRound",[["path",{d:"M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z",key:"167ctg"}],["circle",{cx:"16.5",cy:"7.5",r:".5",key:"1kog09"}]]),Pf=Cr("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]),Ef=Cr("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]),Tf=kr.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
`,zf=kr(Yu.div)`
  background: white;
  border-radius: 20px;
  max-width: 500px;
  width: 100%;
  position: relative;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  overflow: hidden;
`,Df=kr.button`
  position: absolute;
  top: 15px;
  right: 20px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #666;
  z-index: 10;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.2s ease;

  &:hover {
    background-color: #f3f4f6;
    color: #374151;
  }
`,Mf=kr.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 500px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,Rf=kr.div`
  background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="50" cy="50" r="1" fill="rgba(255,255,255,0.1)"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
    opacity: 0.3;
  }
`,Of=kr.div`
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: white;
  position: relative;
`,Af=kr.div`
  width: 60px;
  height: 60px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  position: relative;
  z-index: 2;
`,Nf=kr.h2`
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  margin-bottom: 0.5rem;
  position: relative;
  z-index: 2;
`,_f=kr.p`
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.9rem;
  line-height: 1.5;
  position: relative;
  z-index: 2;
`,Lf=kr.h2`
  font-family: 'Playfair Display', serif;
  font-size: 1.75rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 0.5rem;
  text-align: center;
`,If=kr.p`
  color: #64748b;
  text-align: center;
  margin-bottom: 2rem;
  font-size: 0.95rem;
`,Ff=kr.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;
  background: #f8fafc;
  padding: 0.25rem;
  border-radius: 12px;
`,Vf=kr.button`
  flex: 1;
  padding: 0.75rem 1rem;
  border: none;
  border-radius: 8px;
  background: ${e=>e.active?"white":"transparent"};
  color: ${e=>e.active?"#1e293b":"#64748b"};
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  box-shadow: ${e=>e.active?"0 2px 8px rgba(0, 0, 0, 0.1)":"none"};

  &:hover {
    color: ${e=>e.active?"#1e293b":"#374151"};
  }
`,Uf=kr.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,Bf=kr.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,$f=kr.label`
  font-weight: 600;
  color: #374151;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,Wf=kr.input`
  padding: 0.75rem 1rem;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.2s ease;
  background: white;

  &:focus {
    outline: none;
    border-color: #f59e0b;
    box-shadow: 0 0 0 3px rgba(245, 158, 11, 0.1);
  }

  &::placeholder {
    color: #9ca3af;
  }
`,Hf=kr.button`
  background: #f59e0b;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &:hover {
    background: #d97706;
    transform: translateY(-1px);
  }

  &:disabled {
    background: #9ca3af;
    cursor: not-allowed;
    transform: none;
  }
`,qf=kr.button`
  background: white;
  color: #374151;
  border: 2px solid #e2e8f0;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &:hover {
    border-color: #f59e0b;
    color: #f59e0b;
  }
`,Yf=kr.div`
  display: flex;
  align-items: center;
  margin: 1.5rem 0;
  color: #9ca3af;
  font-size: 0.9rem;

  &::before,
  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: #e2e8f0;
  }

  span {
    padding: 0 1rem;
  }
`,Kf=kr.div`
  text-align: center;
  margin-top: 1rem;
  color: #64748b;
  font-size: 0.9rem;

  a {
    color: #f59e0b;
    text-decoration: none;
    font-weight: 600;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`,Gf=e=>{let{onLogin:n,onClose:r}=e;const[i,o]=(0,t.useState)("mobile"),[a,s]=(0,t.useState)(""),[l,c]=(0,t.useState)(""),[u,d]=(0,t.useState)(""),[p,h]=(0,t.useState)(""),[f,m]=(0,t.useState)(!1),[g,y]=(0,t.useState)(!1),[v,x]=(0,t.useState)(""),b=()=>{y(!1),h(""),x("")};return(0,Vr.jsx)(Tf,{onClick:r,children:(0,Vr.jsxs)(zf,{onClick:e=>e.stopPropagation(),initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.9},transition:{duration:.3},children:[(0,Vr.jsx)(Df,{onClick:r,children:"\xd7"}),(0,Vr.jsxs)(Mf,{children:[(0,Vr.jsxs)(Rf,{children:[(0,Vr.jsx)(Af,{children:(0,Vr.jsx)(np,{size:24,color:"white"})}),(0,Vr.jsx)(Nf,{children:"Nature's Dairy"}),(0,Vr.jsx)(_f,{children:"Fresh, organic dairy products delivered to your doorstep"})]}),(0,Vr.jsxs)(Of,{children:[(0,Vr.jsx)(Lf,{children:"Welcome Back"}),(0,Vr.jsx)(If,{children:"Sign in to your account to continue"}),(0,Vr.jsxs)(Ff,{children:[(0,Vr.jsxs)(Vf,{active:"mobile"===i,onClick:()=>{o("mobile"),b()},children:[(0,Vr.jsx)(Sf,{size:16}),"Mobile"]}),(0,Vr.jsxs)(Vf,{active:"email"===i,onClick:()=>o("email"),children:[(0,Vr.jsx)(jh,{size:16}),"Email"]})]}),v&&(0,Vr.jsx)("div",{style:{background:"#fef2f2",border:"1px solid #fecaca",color:"#dc2626",padding:"0.75rem",borderRadius:"8px",marginBottom:"1rem",fontSize:"0.9rem"},children:v}),"mobile"===i?g?(0,Vr.jsxs)(Uf,{onSubmit:e=>{e.preventDefault(),p&&4===p.length?(x(""),m(!0),setTimeout(()=>{"1234"===p?(n({type:"mobile",value:a}),m(!1)):(x("Invalid OTP. Please try again. (Use 1234 for demo)"),m(!1))},1e3)):x("Please enter a valid 4-digit OTP")},children:[(0,Vr.jsxs)("div",{style:{textAlign:"center",marginBottom:"1rem"},children:[(0,Vr.jsxs)("p",{style:{color:"#059669",fontSize:"0.9rem",marginBottom:"0.5rem"},children:["\u2713 OTP sent to ",a]}),(0,Vr.jsxs)("p",{style:{color:"#64748b",fontSize:"0.8rem"},children:["Demo OTP: ",(0,Vr.jsx)("strong",{children:"1234"})]})]}),(0,Vr.jsxs)(Bf,{children:[(0,Vr.jsxs)($f,{children:[(0,Vr.jsx)(Cf,{size:16}),"Enter OTP"]}),(0,Vr.jsx)(Wf,{type:"text",placeholder:"Enter 4-digit OTP",value:p,onChange:e=>h(e.target.value.replace(/\D/g,"")),maxLength:4,required:!0})]}),(0,Vr.jsx)(Hf,{type:"submit",disabled:f||!p||4!==p.length,children:f?"Verifying...":"Verify OTP"}),(0,Vr.jsxs)(qf,{type:"button",onClick:b,style:{marginTop:"0.5rem"},children:[(0,Vr.jsx)(Pf,{size:16}),"Change Mobile Number"]})]}):(0,Vr.jsxs)(Uf,{onSubmit:e=>{e.preventDefault(),a&&10===a.length?(x(""),m(!0),setTimeout(()=>{y(!0),m(!1),x("")},1500)):x("Please enter a valid 10-digit mobile number")},children:[(0,Vr.jsxs)(Bf,{children:[(0,Vr.jsxs)($f,{children:[(0,Vr.jsx)(Sf,{size:16}),"Mobile Number"]}),(0,Vr.jsx)(Wf,{type:"tel",placeholder:"Enter 10-digit mobile",value:a,onChange:e=>s(e.target.value.replace(/\D/g,"")),maxLength:10,required:!0})]}),(0,Vr.jsx)(Hf,{type:"submit",disabled:f||!a||10!==a.length,children:f?"Sending OTP...":"Send OTP"})]}):(0,Vr.jsxs)(Uf,{onSubmit:e=>{e.preventDefault(),l&&u?(x(""),m(!0),setTimeout(()=>{n({type:"email",value:l}),m(!1)},1e3)):x("Please fill in all fields")},children:[(0,Vr.jsxs)(Bf,{children:[(0,Vr.jsxs)($f,{children:[(0,Vr.jsx)(jh,{size:16}),"Email Address"]}),(0,Vr.jsx)(Wf,{type:"email",placeholder:"Enter your email",value:l,onChange:e=>c(e.target.value),required:!0})]}),(0,Vr.jsxs)(Bf,{children:[(0,Vr.jsxs)($f,{children:[(0,Vr.jsx)(Ef,{size:16}),"Password"]}),(0,Vr.jsx)(Wf,{type:"password",placeholder:"Enter your password",value:u,onChange:e=>d(e.target.value),required:!0})]}),(0,Vr.jsx)(Hf,{type:"submit",disabled:f||!l||!u,children:f?"Signing in...":"Sign In"})]}),(0,Vr.jsx)(Yf,{children:(0,Vr.jsx)("span",{children:"or"})}),(0,Vr.jsxs)(qf,{onClick:()=>{m(!0),setTimeout(()=>{n({type:"email",value:"user@gmail.com"}),m(!1)},1e3)},disabled:f,children:[(0,Vr.jsx)(ip,{size:16}),"Continue with Google"]}),(0,Vr.jsxs)(Kf,{children:["New user? ",(0,Vr.jsx)("button",{type:"button",onClick:()=>o("email"),style:{background:"none",border:"none",color:"var(--primary-500)",cursor:"pointer",textDecoration:"underline"},children:"Register"})]})]})]})]})})},Qf=Cr("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]),Xf=Cr("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]),Zf=Cr("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]),Jf=Cr("Droplets",[["path",{d:"M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z",key:"1ptgy4"}],["path",{d:"M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97",key:"1sl1rz"}]]),em=kr.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
`,tm=kr(Yu.div)`
  background: white;
  border-radius: 20px;
  max-width: 900px;
  width: 100%;
  max-height: 90vh;
  position: relative;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  overflow: hidden;
`,nm=kr.button`
  position: absolute;
  top: 15px;
  right: 20px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #666;
  z-index: 10;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.2s ease;

  &:hover {
    background-color: #f3f4f6;
    color: #374151;
  }
`,rm=kr.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 600px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,im=kr.div`
  background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="50" cy="50" r="1" fill="rgba(255,255,255,0.1)"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
    opacity: 0.3;
  }
`,om=kr.div`
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: white;
  position: relative;
  overflow-y: auto;
  max-height: 90vh;
`,am=kr.div`
  width: 60px;
  height: 60px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  position: relative;
  z-index: 2;
`,sm=kr.h2`
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  margin-bottom: 0.5rem;
  position: relative;
  z-index: 2;
`,lm=kr.p`
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.9rem;
  line-height: 1.5;
  position: relative;
  z-index: 2;
`,cm=kr.h2`
  font-family: 'Playfair Display', serif;
  font-size: 1.75rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 0.5rem;
  text-align: center;
`,um=kr.p`
  color: #64748b;
  text-align: center;
  margin-bottom: 2rem;
  font-size: 0.95rem;
`,dm=kr.div`
  background: #fef3c7;
  border: 1px solid #f59e0b;
  border-radius: 12px;
  padding: 1rem;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: #92400e;
`,pm=kr.div`
  position: relative;
  margin-bottom: 1.5rem;
`,hm=kr.input`
  width: 100%;
  padding: 0.75rem 1rem 0.75rem 2.5rem;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: #f59e0b;
    box-shadow: 0 0 0 3px rgba(245, 158, 11, 0.1);
  }

  &::placeholder {
    color: #9ca3af;
  }
`,fm=kr.div`
  position: absolute;
  left: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  color: #9ca3af;
`,mm=kr.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
  max-height: 250px;
  overflow-y: auto;
  padding-right: 0.5rem;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f5f9;
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: #cbd5e1;
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #94a3b8;
  }
`,gm=kr.button`
  background: ${e=>e.selected?"#fef3c7":"white"};
  border: 2px solid ${e=>e.selected?"#f59e0b":"#e2e8f0"};
  border-radius: 8px;
  padding: 0.75rem;
  text-align: left;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    border-color: #f59e0b;
    background: ${e=>e.selected?"#fef3c7":"#f8fafc"};
  }
`,ym=kr.div`
  width: 32px;
  height: 32px;
  background: #f59e0b;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 0.8rem;
`,vm=kr.div`
  flex: 1;
`,xm=kr.div`
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 0.25rem;
`,bm=kr.div`
  font-size: 0.8rem;
  color: #64748b;
`,wm=kr.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
`,km=kr.button`
  background: #f59e0b;
  color: white;
  border: none;
  padding: 1rem 1.5rem;
  border-radius: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  font-size: 1rem;

  &:hover {
    background: #d97706;
    transform: translateY(-1px);
  }

  &:disabled {
    background: #9ca3af;
    cursor: not-allowed;
    transform: none;
  }
`,jm=kr.button`
  background: white;
  color: #374151;
  border: 2px solid #e2e8f0;
  padding: 1rem 1.5rem;
  border-radius: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  font-size: 1rem;

  &:hover {
    border-color: #f59e0b;
    color: #f59e0b;
  }
`,Sm=kr.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-top: 1rem;
`,Cm=kr.div`
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 1rem;
  text-align: center;
`,Pm=kr.div`
  width: 40px;
  height: 40px;
  background: #f59e0b;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 0.5rem;
  color: white;
`,Em=kr.h4`
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 0.25rem;
  font-size: 0.9rem;
`,Tm=kr.p`
  color: #64748b;
  font-size: 0.8rem;
  line-height: 1.4;
`,zm=[{id:1,name:"Mumbai",state:"Maharashtra",delivery:"Same Day",icon:"\ud83c\udfd9\ufe0f"},{id:2,name:"Delhi",state:"Delhi",delivery:"Same Day",icon:"\ud83c\udfdb\ufe0f"},{id:3,name:"Bangalore",state:"Karnataka",delivery:"Next Day",icon:"\ud83c\udf06"},{id:4,name:"Hyderabad",state:"Telangana",delivery:"Next Day",icon:"\ud83c\udfe2"},{id:5,name:"Chennai",state:"Tamil Nadu",delivery:"Next Day",icon:"\ud83c\udfed"},{id:6,name:"Pune",state:"Maharashtra",delivery:"Same Day",icon:"\ud83c\udf93"},{id:7,name:"Ahmedabad",state:"Gujarat",delivery:"Next Day",icon:"\ud83c\udffa"},{id:8,name:"Kolkata",state:"West Bengal",delivery:"Next Day",icon:"\ud83c\udfad"}],Dm=e=>{let{user:n,onLocationSelect:r,onSkip:i,onClose:o}=e;const[a,s]=(0,t.useState)(""),[l,c]=(0,t.useState)(""),u=zm.filter(e=>e.name.toLowerCase().includes(l.toLowerCase())||e.state.toLowerCase().includes(l.toLowerCase()));return(0,Vr.jsx)(em,{onClick:o,children:(0,Vr.jsxs)(tm,{onClick:e=>e.stopPropagation(),initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.9},transition:{duration:.3},children:[(0,Vr.jsx)(nm,{onClick:o,children:"\xd7"}),(0,Vr.jsxs)(rm,{children:[(0,Vr.jsxs)(im,{children:[(0,Vr.jsx)(am,{children:(0,Vr.jsx)(np,{size:24,color:"white"})}),(0,Vr.jsx)(sm,{children:"Nature's Dairy"}),(0,Vr.jsx)(lm,{children:"Fresh, organic dairy products delivered to your doorstep"})]}),(0,Vr.jsxs)(om,{children:[(0,Vr.jsx)(cm,{children:"Choose Your Location"}),(0,Vr.jsx)(um,{children:"Select your delivery location to get fresh dairy products"}),(0,Vr.jsxs)(dm,{children:[(0,Vr.jsx)(Qf,{size:20}),"Successfully logged in as ",n.value]}),(0,Vr.jsxs)(pm,{children:[(0,Vr.jsx)(fm,{children:(0,Vr.jsx)(Xf,{size:16})}),(0,Vr.jsx)(hm,{type:"text",placeholder:"Search for your city...",value:l,onChange:e=>c(e.target.value)})]}),(0,Vr.jsx)(mm,{children:u.map(e=>(0,Vr.jsxs)(gm,{selected:a===e.name,onClick:()=>s(e.name),children:[(0,Vr.jsx)(ym,{children:(0,Vr.jsx)("span",{style:{fontSize:"1rem"},children:e.icon})}),(0,Vr.jsxs)(vm,{children:[(0,Vr.jsx)(xm,{children:e.name}),(0,Vr.jsxs)(bm,{children:[e.state," \u2022 ",e.delivery," Delivery"]})]})]},e.id))}),(0,Vr.jsxs)(wm,{children:[(0,Vr.jsxs)(km,{onClick:()=>{return s(e=a),void r(e);var e},disabled:!a,children:[(0,Vr.jsx)(Sh,{size:20}),a?`Continue with ${a}`:"Select a location",(0,Vr.jsx)(Zf,{size:16})]}),(0,Vr.jsx)(jm,{onClick:()=>{i()},children:"Skip for now"})]}),(0,Vr.jsxs)(Sm,{children:[(0,Vr.jsxs)(Cm,{children:[(0,Vr.jsx)(Pm,{children:(0,Vr.jsx)(Ku,{size:20})}),(0,Vr.jsx)(Em,{children:"Fast Delivery"}),(0,Vr.jsx)(Tm,{children:"Fresh milk delivered within 3 hours of milking"})]}),(0,Vr.jsxs)(Cm,{children:[(0,Vr.jsx)(Pm,{children:(0,Vr.jsx)(Jf,{size:20})}),(0,Vr.jsx)(Em,{children:"Pure Fresh Milk"}),(0,Vr.jsx)(Tm,{children:"From our indigenous Gir and Sahiwal cows"})]})]})]})]})]})})},Mm=Cr("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]),Rm=kr(Yu.div)`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
  font-family: 'Inter', sans-serif;
`,Om=kr.button`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #f59e0b;
  border: none;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(245, 158, 11, 0.3);
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 20px rgba(245, 158, 11, 0.4);
  }

  .notification {
    position: absolute;
    top: -5px;
    right: -5px;
    width: 20px;
    height: 20px;
    background: #dc2626;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.7rem;
    font-weight: 600;
  }
`,Am=kr(Yu.div)`
  position: absolute;
  bottom: 80px;
  right: 0;
  width: 350px;
  height: 500px;
  background: white;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  overflow: hidden;
`,Nm=kr.div`
  background: linear-gradient(135deg, #f59e0b, #d97706);
  color: white;
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h3 {
    margin: 0;
    font-size: 1.1rem;
    font-weight: 600;
  }

  .status {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.8rem;
    opacity: 0.9;
  }
`,_m=kr.button`
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  padding: 0.25rem;
  border-radius: 50%;
  transition: background 0.2s;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`,Lm=kr.div`
  flex: 1;
  padding: 1rem;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,Im=kr(Yu.div)`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  justify-content: ${e=>e.isUser?"flex-end":"flex-start"};
`,Fm=kr.div`
  max-width: 80%;
  padding: 0.75rem 1rem;
  border-radius: 18px;
  background: ${e=>e.isUser?"#f59e0b":"#f1f5f9"};
  color: ${e=>e.isUser?"white":"#1e293b"};
  font-size: 0.9rem;
  line-height: 1.4;
  word-wrap: break-word;
`,Vm=kr.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: ${e=>e.isUser?"#f59e0b":"#10b981"};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 0.8rem;
  flex-shrink: 0;
`,Um=kr.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.5rem;
`,Bm=kr.button`
  background: white;
  border: 2px solid #e2e8f0;
  border-radius: 20px;
  padding: 0.5rem 1rem;
  font-size: 0.8rem;
  cursor: pointer;
  transition: all 0.2s;
  color: #64748b;

  &:hover {
    border-color: #f59e0b;
    color: #f59e0b;
  }
`,$m=kr.div`
  padding: 1rem;
  border-top: 1px solid #e2e8f0;
  display: flex;
  gap: 0.5rem;
`,Wm=kr.input`
  flex: 1;
  padding: 0.75rem 1rem;
  border: 2px solid #e2e8f0;
  border-radius: 25px;
  font-size: 0.9rem;
  outline: none;
  transition: border 0.2s;

  &:focus {
    border-color: #f59e0b;
  }
`,Hm=kr.button`
  background: #f59e0b;
  border: none;
  color: white;
  padding: 0.75rem;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: #d97706;
    transform: scale(1.05);
  }

  &:disabled {
    background: #cbd5e1;
    cursor: not-allowed;
    transform: none;
  }
`,qm=kr.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  background: #f1f5f9;
  border-radius: 18px;
  max-width: 80%;
  font-size: 0.9rem;
  color: #64748b;
`,Ym=e=>{let{isOpen:n,onToggle:r}=e;const[i,o]=(0,t.useState)([{id:"1",text:"Hi! I'm your Nature's Dairy assistant. How can I help you today? \ud83e\udd5b",isUser:!1,timestamp:new Date,quickReplies:["Our Products","Delivery Info","Order Status","Contact Us"]}]),[a,s]=(0,t.useState)(""),[l,c]=(0,t.useState)(!1),u=(0,t.useRef)(null);(0,t.useEffect)(()=>{(()=>{var e;null===(e=u.current)||void 0===e||e.scrollIntoView({behavior:"smooth"})})()},[i]);const d=(e,t,n)=>{const r={id:Date.now().toString(),text:e,isUser:t,timestamp:new Date,quickReplies:n};o(e=>[...e,r])},p=e=>{c(!0),setTimeout(()=>{c(!1),e()},1e3+1e3*Math.random())},h=()=>{if(!a.trim())return;const e=a.trim();d(e,!0),s(""),p(()=>{const t=f(e);d(t.text,!1,t.quickReplies)})},f=e=>{const t=e.toLowerCase();return t.includes("product")||t.includes("milk")||t.includes("ghee")||t.includes("cheese")?{text:"We offer premium dairy products:\n\n\ud83e\udd5b **Fresh Milk** - \u20b9135\n- Pure, unprocessed with natural probiotics\n- Delivered within 3 hours\n\n\ud83e\uddc8 **Organic Ghee** - \u20b93000\n- Traditional Vedic method\n- Rich, nutty flavor\n\n\ud83e\uddc0 **Cheese** - \u20b9200\n- Artisanal milk cheese\n- No preservatives\n\nWould you like to know more about any specific product?",quickReplies:["Order Now","Delivery Areas","Pricing","Back to Products"]}:t.includes("delivery")||t.includes("deliver")||t.includes("location")?{text:"\ud83d\ude9a **Delivery Information:**\n\n\ud83d\udccd **Coverage Areas:**\n- Major Cities: Bangalore, Mumbai, Delhi NCR, Chennai, Hyderabad, Pune, Jaipur, Chandigarh\n- Other Cities: Coimbatore, Guntur, Kolkata, Lucknow, Mysore, Nashik, Surat, Vijayawada, Warangal\n\n\u23f0 **Delivery Time:**\n- 6:00 AM - 9:00 AM Daily\n- Within 3 hours of milking\n\n\ud83d\udcb0 **Free Delivery** on orders above \u20b9500",quickReplies:["Check My Area","Order Now","Contact Support"]}:t.includes("order")||t.includes("status")||t.includes("track")?{text:"\ud83d\udce6 **Order Tracking:**\n\nTo check your order status:\n1. Login to your account\n2. Go to 'My Orders'\n3. Click on your order number\n\nFor immediate assistance, you can:\n\ud83d\udcde Call: +91 9810649456\n\ud83d\udce7 Email: info@naturesdairy.in\n\nWould you like me to help you with anything else?",quickReplies:["My Orders","Contact Support","New Order"]}:t.includes("contact")||t.includes("phone")||t.includes("email")||t.includes("call")?{text:"\ud83d\udcde **Contact Information:**\n\n\ud83d\udcf1 **Phone:** +91 9810649456\n\ud83d\udce7 **Email:** info@naturesdairy.in\n\ud83d\udccd **Location:** Baliawas Village, Gurgaon\n\u23f0 **Support Hours:** 6:00 AM - 9:00 PM\n\nWe're here to help! What would you like to know?",quickReplies:["Call Now","Send Email","Visit Farm","Back to Products"]}:t.includes("price")||t.includes("cost")||t.includes("\u20b9")||t.includes("rupee")?{text:"\ud83d\udcb0 **Our Pricing:**\n\n\ud83e\udd5b **Fresh Milk:** \u20b9135 (\u20b9150 MRP)\n\ud83e\uddc8 **Organic Ghee:** \u20b93000 (\u20b93500 MRP)\n\ud83e\uddc0 **Cheese:** \u20b9200 (\u20b9250 MRP)\n\n\ud83d\udca1 **Special Offers:**\n- 15% discount on subscription\n- Free delivery on orders above \u20b9500\n- Bulk orders get additional discounts\n\nWould you like to place an order?",quickReplies:["Order Now","Subscription Plans","Bulk Orders"]}:t.includes("hello")||t.includes("hi")||t.includes("hey")?{text:"Hello! Welcome to Nature's Dairy! \ud83d\udc04\n\nI'm here to help you with:\n\u2022 Product information and pricing\n\u2022 Delivery areas and timing\n\u2022 Order tracking and support\n\u2022 Contact information\n\nWhat would you like to know?",quickReplies:["Our Products","Delivery Info","Contact Us","Order Now"]}:{text:"I'm not sure I understood that. Could you please:\n\n\u2022 Ask about our products (milk, ghee, cheese)\n\u2022 Inquire about delivery areas and timing\n\u2022 Check order status\n\u2022 Get contact information\n\nOr use the quick reply buttons below!",quickReplies:["Our Products","Delivery Info","Contact Us","Help"]}};return(0,Vr.jsxs)(Rm,{children:[(0,Vr.jsxs)(Om,{onClick:r,children:[n?(0,Vr.jsx)(Ir,{size:24}):(0,Vr.jsx)(zr,{size:24}),!n&&1===i.length&&(0,Vr.jsx)("div",{className:"notification",children:"1"})]}),(0,Vr.jsx)(Td,{children:n&&(0,Vr.jsxs)(Am,{initial:{opacity:0,scale:.8,y:20},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.8,y:20},transition:{type:"spring",damping:25,stiffness:300},children:[(0,Vr.jsxs)(Nm,{children:[(0,Vr.jsxs)("div",{children:[(0,Vr.jsx)("h3",{children:"Nature's Dairy Assistant"}),(0,Vr.jsxs)("div",{className:"status",children:[(0,Vr.jsx)("div",{style:{width:8,height:8,background:"#10b981",borderRadius:"50%"}}),"Online"]})]}),(0,Vr.jsx)(_m,{onClick:r,children:(0,Vr.jsx)(Ir,{size:20})})]}),(0,Vr.jsxs)(Lm,{children:[i.map(e=>(0,Vr.jsxs)(Im,{isUser:e.isUser,children:[!e.isUser&&(0,Vr.jsx)(Vm,{isUser:!1,children:(0,Vr.jsx)(Mm,{size:16})}),(0,Vr.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem"},children:[(0,Vr.jsx)(Fm,{isUser:e.isUser,children:e.text}),e.quickReplies&&(0,Vr.jsx)(Um,{children:e.quickReplies.map((e,t)=>(0,Vr.jsx)(Bm,{onClick:()=>(e=>{d(e,!0),p(()=>{const t=f(e);d(t.text,!1,t.quickReplies)})})(e),children:e},t))})]}),e.isUser&&(0,Vr.jsx)(Vm,{isUser:!0,children:(0,Vr.jsx)(Lr,{size:16})})]},e.id)),l&&(0,Vr.jsxs)(Im,{isUser:!1,children:[(0,Vr.jsx)(Vm,{isUser:!1,children:(0,Vr.jsx)(Mm,{size:16})}),(0,Vr.jsxs)(qm,{children:[(0,Vr.jsx)(Ku,{size:16}),"Assistant is typing..."]})]}),(0,Vr.jsx)("div",{ref:u})]}),(0,Vr.jsxs)($m,{children:[(0,Vr.jsx)(Wm,{value:a,onChange:e=>s(e.target.value),onKeyPress:e=>{"Enter"!==e.key||e.shiftKey||(e.preventDefault(),h())},placeholder:"Type your message...",disabled:l}),(0,Vr.jsx)(Hm,{onClick:h,disabled:!a.trim()||l,children:(0,Vr.jsx)(Ch,{size:16})})]})]})})]})},Km=Cr("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]),Gm=Cr("Filter",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]]),Qm=Cr("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]),Xm=Cr("Navigation",[["polygon",{points:"3 11 22 2 13 21 11 13 3 11",key:"1ltx0t"}]]),Zm=Cr("Share2",[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]]),Jm=Cr("Printer",[["polyline",{points:"6 9 6 2 18 2 18 9",key:"1306q4"}],["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["rect",{width:"12",height:"8",x:"6",y:"14",key:"5ipwut"}]]),eg=Cr("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]),tg=Cr("BellOff",[["path",{d:"M8.7 3A6 6 0 0 1 18 8a21.3 21.3 0 0 0 .6 5",key:"o7mx20"}],["path",{d:"M17 17H3s3-2 3-9a4.67 4.67 0 0 1 .3-1.7",key:"16f1lm"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]),ng=kr.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, #f8fafc 0%, #fef3c7 100%);
  z-index: 2000;
  overflow-y: auto;
`,rg=kr.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`,ig=kr.div`
  text-align: center;
  margin-bottom: 3rem;
  position: relative;
`,og=kr.h1`
  font-family: 'Playfair Display', serif;
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 1rem;
`,ag=kr.p`
  font-size: 1.1rem;
  color: #64748b;
  max-width: 600px;
  margin: 0 auto;
`,sg=kr.div`
  display: grid;
  grid-template-columns: 1fr 400px;
  gap: 2rem;
  margin-bottom: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`,lg=kr.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`,cg=kr(Yu.div)`
  background: white;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  border: 1px solid #e2e8f0;
`,ug=kr.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`,dg=kr.div`
  h2 {
    font-size: 1.5rem;
    font-weight: 700;
    color: #1e293b;
    margin: 0 0 0.5rem 0;
  }

  p {
    color: #64748b;
    margin: 0;
    font-size: 1rem;
  }
`,pg=kr.div`
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  font-weight: 600;
  font-size: 0.9rem;
  background: ${e=>{switch(e.status){case"delivered":return"linear-gradient(135deg, #10b981, #059669)";case"in-transit":return"linear-gradient(135deg, #f59e0b, #d97706)";case"processing":return"linear-gradient(135deg, #3b82f6, #2563eb)";case"cancelled":return"linear-gradient(135deg, #ef4444, #dc2626)";default:return"linear-gradient(135deg, #6b7280, #4b5563)"}}};
  color: white;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,hg=kr.div`
  width: 100%;
  height: 8px;
  background: #e2e8f0;
  border-radius: 4px;
  overflow: hidden;
  margin: 1.5rem 0;
`,fg=kr.div`
  height: 100%;
  background: linear-gradient(90deg, #10b981, #059669);
  border-radius: 4px;
  transition: width 0.5s ease;
  width: ${e=>e.progress}%;
`,mg=kr(Yu.div)`
  background: white;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  border: 1px solid #e2e8f0;
`,gg=kr.div`
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  margin-bottom: 2rem;
  position: relative;
  opacity: ${e=>e.completed?1:.6};
  transition: all 0.3s ease;

  &:last-child {
    margin-bottom: 0;
  }

  &::before {
    content: '';
    position: absolute;
    left: 20px;
    top: 40px;
    bottom: -2rem;
    width: 2px;
    background: ${e=>e.completed?"#10b981":"#e2e8f0"};
    z-index: 1;
  }

  &:last-child::before {
    display: none;
  }

  .timeline-icon {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: ${e=>e.active?"linear-gradient(135deg, #f59e0b, #d97706)":e.completed?"linear-gradient(135deg, #10b981, #059669)":"#f1f5f9"};
    color: ${e=>e.completed||e.active?"white":"#64748b"};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    z-index: 2;
    box-shadow: ${e=>e.completed||e.active?"0 4px 12px rgba(16, 185, 129, 0.3)":"none"};
  }

  .timeline-content {
    flex: 1;
    padding-top: 0.25rem;

    h4 {
      margin: 0 0 0.5rem 0;
      font-size: 1.1rem;
      color: #1e293b;
      font-weight: 600;
    }

    p {
      margin: 0 0 0.5rem 0;
      font-size: 0.9rem;
      color: #64748b;
    }

    .location {
      font-size: 0.85rem;
      color: #f59e0b;
      font-weight: 500;
    }
  }
`,yg=kr.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,vg=kr(Yu.div)`
  background: white;
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  border: 1px solid #e2e8f0;
`,xg=kr.h3`
  font-size: 1.1rem;
  font-weight: 600;
  color: #1e293b;
  margin: 0 0 1rem 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,bg=kr.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 0;
  border-bottom: 1px solid #f1f5f9;

  &:last-child {
    border-bottom: none;
  }

  .label {
    color: #64748b;
    font-size: 0.9rem;
  }

  .value {
    color: #1e293b;
    font-weight: 600;
    font-size: 0.9rem;
  }
`,wg=kr.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`,kg=kr.button`
  padding: 1rem;
  border: 2px solid #e2e8f0;
  background: white;
  color: #64748b;
  border-radius: 12px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &:hover {
    border-color: #f59e0b;
    color: #f59e0b;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(245, 158, 11, 0.2);
  }

  &.primary {
    background: #f59e0b;
    color: white;
    border-color: #f59e0b;

    &:hover {
      background: #d97706;
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(245, 158, 11, 0.3);
    }
  }

  &.success {
    background: #10b981;
    color: white;
    border-color: #10b981;

    &:hover {
      background: #059669;
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
    }
  }
`,jg=kr(Yu.div)`
  background: white;
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  border: 1px solid #e2e8f0;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #f8fafc, #f1f5f9);
  color: #64748b;
  font-weight: 500;
`,Sg=kr(Yu.div)`
  background: linear-gradient(135deg, #fef3c7, #fde68a);
  border: 1px solid #f59e0b;
  border-radius: 12px;
  padding: 1rem;
  margin-bottom: 1rem;

  h4 {
    margin: 0 0 0.5rem 0;
    color: #92400e;
    font-size: 1rem;
    font-weight: 600;
  }

  p {
    margin: 0;
    color: #92400e;
    font-size: 0.9rem;
  }
`,Cg=kr.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: white;
  border: 2px solid #e2e8f0;
  cursor: pointer;
  padding: 0.75rem;
  border-radius: 12px;
  transition: all 0.3s ease;
  color: #64748b;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;

  &:hover {
    background: #f1f5f9;
    border-color: #cbd5e1;
    color: #1e293b;
    transform: translateY(-1px);
  }
`,Pg=kr(Yu.div)`
  position: fixed;
  top: 20px;
  right: 20px;
  background: white;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  z-index: 3000;
  max-width: 300px;
`,Eg=e=>{let{order:n,onClose:r}=e;const[i,o]=(0,t.useState)([]),[a,s]=(0,t.useState)(""),[l]=(0,t.useState)(n.deliveryDate),[c,u]=(0,t.useState)(!0),[d,p]=(0,t.useState)(!1),[h,f]=(0,t.useState)(""),[m,g]=(0,t.useState)("info"),[y,v]=(0,t.useState)(!1),x=(0,t.useRef)(null);(0,t.useEffect)(()=>{const e=[{id:"1",title:"Order Placed",description:"Your order has been successfully placed",timestamp:new Date(n.deliveryDate.getTime()-864e5),completed:!0,active:!1,icon:(0,Vr.jsx)(Qf,{size:16})},{id:"2",title:"Order Confirmed",description:"Your order has been confirmed and is being prepared",timestamp:new Date(n.deliveryDate.getTime()-828e5),completed:"processing"!==n.status,active:"processing"===n.status,icon:(0,Vr.jsx)(Er,{size:16})},{id:"3",title:"Out for Delivery",description:"Your order is on its way to you",location:"Gurgaon Distribution Center",timestamp:new Date(n.deliveryDate.getTime()-72e5),completed:"delivered"===n.status,active:"in-transit"===n.status,icon:(0,Vr.jsx)(Wp,{size:16})},{id:"4",title:"Delivered",description:"Your order has been delivered successfully",location:n.deliveryAddress,timestamp:n.deliveryDate,completed:"delivered"===n.status,active:!1,icon:(0,Vr.jsx)(Qf,{size:16})}];o(e)},[n]),(0,t.useEffect)(()=>("in-transit"===n.status&&(x.current=setInterval(()=>{b()},3e4)),()=>{x.current&&clearInterval(x.current)}),[n.status]),(0,t.useEffect)(()=>{if("in-transit"===n.status){const e=["Gurgaon Distribution Center","Delhi Highway","Near Your Location",n.deliveryAddress];let t=0;const r=setInterval(()=>{s(e[t]),t=(t+1)%e.length},1e4);return()=>clearInterval(r)}},[n.status,n.deliveryAddress]);const b=async()=>{v(!0);try{await new Promise(e=>setTimeout(e,1e3)),o(e=>e.map(e=>({...e,timestamp:new Date(e.timestamp.getTime()+1e3*Math.random())}))),w("Tracking updated successfully","success")}catch(e){w("Failed to update tracking","error")}finally{v(!1)}},w=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"info";f(e),g(t),p(!0),setTimeout(()=>p(!1),3e3)},k=e=>e.toLocaleDateString("en-IN",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit"});return(0,Vr.jsx)(ng,{children:(0,Vr.jsxs)(rg,{children:[(0,Vr.jsxs)(ig,{children:[(0,Vr.jsx)(Cg,{onClick:r,children:(0,Vr.jsx)(Ir,{size:24})}),(0,Vr.jsx)(og,{children:"Track Your Order"}),(0,Vr.jsxs)(ag,{children:["Real-time tracking for order ",n.orderNumber]})]}),(0,Vr.jsxs)(sg,{children:[(0,Vr.jsxs)(lg,{children:[(0,Vr.jsxs)(cg,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},children:[(0,Vr.jsxs)(ug,{children:[(0,Vr.jsxs)(dg,{children:[(0,Vr.jsx)("h2",{children:"Order Status"}),(0,Vr.jsxs)("p",{children:["Tracking Number: ",n.trackingNumber]})]}),(0,Vr.jsxs)(pg,{status:n.status,children:["delivered"===n.status&&(0,Vr.jsx)(Qf,{size:16}),"in-transit"===n.status&&(0,Vr.jsx)(Wp,{size:16}),"processing"===n.status&&(0,Vr.jsx)(Ku,{size:16}),"cancelled"===n.status&&(0,Vr.jsx)(Km,{size:16}),n.status.charAt(0).toUpperCase()+n.status.slice(1)]})]}),(0,Vr.jsx)(hg,{children:(0,Vr.jsx)(fg,{progress:i.filter(e=>e.completed).length/i.length*100})}),(0,Vr.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,Vr.jsxs)("div",{children:[(0,Vr.jsx)("p",{style:{margin:0,color:"#64748b",fontSize:"0.9rem"},children:"Estimated Delivery"}),(0,Vr.jsx)("p",{style:{margin:0,fontWeight:600,color:"#1e293b"},children:k(l)})]}),(0,Vr.jsx)("button",{onClick:b,disabled:y,style:{padding:"0.5rem",border:"1px solid #e2e8f0",background:"white",borderRadius:"8px",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,Vr.jsx)(Qm,{size:16,className:y?"loading":""})})]})]}),(0,Vr.jsxs)(mg,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.1},children:[(0,Vr.jsxs)(xg,{children:[(0,Vr.jsx)(Ku,{size:20})," Tracking Timeline"]}),i.map((e,t)=>(0,Vr.jsxs)(gg,{completed:e.completed,active:e.active,children:[(0,Vr.jsx)("div",{className:"timeline-icon",children:e.icon}),(0,Vr.jsxs)("div",{className:"timeline-content",children:[(0,Vr.jsx)("h4",{children:e.title}),(0,Vr.jsx)("p",{children:e.description}),e.location&&(0,Vr.jsx)("p",{className:"location",children:e.location}),(0,Vr.jsx)("p",{style:{fontSize:"0.8rem",color:"#64748b"},children:k(e.timestamp)})]})]},e.id))]}),(0,Vr.jsx)(jg,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.2},children:(0,Vr.jsxs)("div",{style:{textAlign:"center"},children:[(0,Vr.jsx)(Sh,{size:48,style:{marginBottom:"1rem",opacity:.5}}),(0,Vr.jsx)("p",{children:"Live tracking map would be displayed here"}),(0,Vr.jsx)("p",{style:{fontSize:"0.9rem",marginTop:"0.5rem"},children:a||"Updating location..."})]})})]}),(0,Vr.jsxs)(yg,{children:[(0,Vr.jsxs)(vg,{initial:{opacity:0,x:20},animate:{opacity:1,x:0},transition:{duration:.5,delay:.1},children:[(0,Vr.jsxs)(xg,{children:[(0,Vr.jsx)(Er,{size:20})," Order Details"]}),(0,Vr.jsxs)(bg,{children:[(0,Vr.jsx)("span",{className:"label",children:"Order Number"}),(0,Vr.jsx)("span",{className:"value",children:n.orderNumber})]}),(0,Vr.jsxs)(bg,{children:[(0,Vr.jsx)("span",{className:"label",children:"Tracking Number"}),(0,Vr.jsx)("span",{className:"value",children:n.trackingNumber})]}),(0,Vr.jsxs)(bg,{children:[(0,Vr.jsx)("span",{className:"label",children:"Order Date"}),(0,Vr.jsx)("span",{className:"value",children:k(n.deliveryDate)})]}),(0,Vr.jsxs)(bg,{children:[(0,Vr.jsx)("span",{className:"label",children:"Total Amount"}),(0,Vr.jsx)("span",{className:"value",children:(j=n.total,`\u20b9${j.toLocaleString("en-IN")}`)})]})]}),(0,Vr.jsxs)(vg,{initial:{opacity:0,x:20},animate:{opacity:1,x:0},transition:{duration:.5,delay:.2},children:[(0,Vr.jsxs)(xg,{children:[(0,Vr.jsx)(Sh,{size:20})," Delivery Info"]}),(0,Vr.jsxs)("div",{style:{marginBottom:"1rem"},children:[(0,Vr.jsx)("p",{style:{margin:0,fontSize:"0.9rem",color:"#64748b"},children:"Delivery Address"}),(0,Vr.jsx)("p",{style:{margin:"0.5rem 0 0 0",fontSize:"0.9rem",color:"#1e293b"},children:n.deliveryAddress})]}),(0,Vr.jsxs)(bg,{children:[(0,Vr.jsx)("span",{className:"label",children:"Estimated Delivery"}),(0,Vr.jsx)("span",{className:"value",children:k(l)})]}),(0,Vr.jsxs)(bg,{children:[(0,Vr.jsx)("span",{className:"label",children:"Current Status"}),(0,Vr.jsx)("span",{className:"value",children:n.status})]})]}),"in-transit"===n.status&&(0,Vr.jsxs)(Sg,{initial:{opacity:0,x:20},animate:{opacity:1,x:0},transition:{duration:.5,delay:.3},children:[(0,Vr.jsx)("h4",{children:"\ud83d\ude9a Delivery Update"}),(0,Vr.jsx)("p",{children:"Your order is currently in transit and will be delivered soon!"})]}),(0,Vr.jsxs)(vg,{initial:{opacity:0,x:20},animate:{opacity:1,x:0},transition:{duration:.5,delay:.4},children:[(0,Vr.jsxs)(xg,{children:[(0,Vr.jsx)(Xm,{size:20})," Actions"]}),(0,Vr.jsxs)(wg,{children:[(0,Vr.jsxs)(kg,{onClick:()=>{const e=`${window.location.origin}/track/${n.trackingNumber}`;navigator.clipboard.writeText(e),w("Tracking link copied to clipboard","success")},children:[(0,Vr.jsx)(Zm,{size:16}),"Share Tracking"]}),(0,Vr.jsxs)(kg,{onClick:()=>{window.print(),w("Print dialog opened","info")},children:[(0,Vr.jsx)(Jm,{size:16}),"Print Details"]}),(0,Vr.jsxs)(kg,{onClick:()=>{const e={orderNumber:n.orderNumber,trackingNumber:n.trackingNumber,status:n.status,deliveryAddress:n.deliveryAddress,estimatedDelivery:l.toISOString(),events:i},t=new Blob([JSON.stringify(e,null,2)],{type:"application/json"}),r=window.URL.createObjectURL(t),o=document.createElement("a");o.href=r,o.download=`tracking-${n.trackingNumber}.json`,o.click(),window.URL.revokeObjectURL(r),w("Tracking data downloaded","success")},children:[(0,Vr.jsx)(eg,{size:16}),"Download Data"]}),(0,Vr.jsxs)(kg,{onClick:()=>{u(!c),w(c?"Notifications disabled":"Notifications enabled","info")},className:c?"success":"",children:[c?(0,Vr.jsx)(Or,{size:16}):(0,Vr.jsx)(tg,{size:16}),c?"Notifications On":"Notifications Off"]})]})]})]})]}),(0,Vr.jsx)(Td,{children:d&&(0,Vr.jsxs)(Pg,{initial:{opacity:0,x:300},animate:{opacity:1,x:0},exit:{opacity:0,x:300},transition:{type:"spring",damping:25,stiffness:300},children:["success"===m&&(0,Vr.jsx)(Qf,{size:16,color:"#10b981"}),"error"===m&&(0,Vr.jsx)(Km,{size:16,color:"#dc2626"}),"info"===m&&(0,Vr.jsx)(Er,{size:16,color:"#3b82f6"}),h]})})]})});var j},Tg=kr.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  min-height: calc(100vh - 70px);
  overflow-y: auto;
  margin-top: 20px;
  
  @media (max-width: 768px) {
    padding: 1rem;
    min-height: calc(100vh - 60px);
    margin-top: 15px;
  }
`,zg=kr.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  gap: 1rem;
  padding-top: 1rem;
  
  @media (max-width: 768px) {
    padding-top: 0.5rem;
  }
`,Dg=kr.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #1e293b;
  margin: 0;
`,Mg=kr.p`
  color: #64748b;
  margin: 0;
`,Rg=kr.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  flex-wrap: wrap;
`,Og=kr.div`
  position: relative;
  display: flex;
  align-items: center;
`,Ag=kr.input`
  padding: 0.75rem 1rem 0.75rem 2.5rem;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-size: 0.9rem;
  width: 250px;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: #f59e0b;
    box-shadow: 0 0 0 3px rgba(245, 158, 11, 0.1);
  }
`,Ng=kr.div`
  position: absolute;
  left: 0.75rem;
  color: #9ca3af;
`,_g=kr.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  background: white;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  font-weight: 500;

  &:hover {
    border-color: #f59e0b;
    background: #fef3c7;
  }
`,Lg=kr.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  border: none;
  font-size: 0.9rem;

  ${e=>"primary"===e.variant?"\n    background: #f59e0b;\n    color: white;\n    \n    &:hover {\n      background: #d97706;\n      transform: translateY(-1px);\n    }\n  ":"\n    background: white;\n    color: #374151;\n    border: 2px solid #e2e8f0;\n    \n    &:hover {\n      background: #f8fafc;\n      border-color: #cbd5e1;\n    }\n  "}
`,Ig=kr.div`
  display: grid;
  gap: 1.5rem;
  margin-bottom: 2rem;
`,Fg=kr(Yu.div)`
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
  transition: all 0.2s ease;

  &:hover {
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }
`,Vg=kr.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
  flex-wrap: wrap;
  gap: 1rem;
`,Ug=kr.div`
  flex: 1;
  min-width: 0;
`,Bg=kr.h3`
  font-size: 1.1rem;
  font-weight: 600;
  color: #1e293b;
  margin: 0 0 0.5rem 0;
`,$g=kr.p`
  color: #64748b;
  font-size: 0.9rem;
  margin: 0;
`,Wg=kr.span`
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  background: ${e=>{switch(e.status){case"delivered":return"#d1fae5";case"in-transit":return"#dbeafe";case"processing":return"#fef3c7";case"cancelled":return"#fee2e2";default:return"#f3f4f6"}}};
  color: ${e=>{switch(e.status){case"delivered":return"#059669";case"in-transit":return"#2563eb";case"processing":return"#d97706";case"cancelled":return"#dc2626";default:return"#6b7280"}}};
`,Hg=kr.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 1rem;
  padding: 1rem;
  background: #f8fafc;
  border-radius: 8px;
  font-size: 0.9rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,qg=kr.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`,Yg=kr.span`
  color: #64748b;
  font-weight: 500;
`,Kg=kr.span`
  color: #1e293b;
  font-weight: 600;
`,Gg=kr.div`
  margin-bottom: 1rem;
`,Qg=kr.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem;
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  margin-bottom: 0.5rem;
`,Xg=kr.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`,Zg=kr.span`
  font-size: 1.5rem;
`,Jg=kr.div`
  display: flex;
  flex-direction: column;
`,ey=kr.span`
  font-weight: 600;
  color: #1e293b;
`,ty=kr.span`
  font-size: 0.8rem;
  color: #64748b;
`,ny=kr.span`
  font-weight: 600;
  color: #1e293b;
`,ry=kr.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`,iy=kr.div`
  text-align: center;
  padding: 3rem 1rem;
  color: #64748b;
`,oy=kr.div`
  font-size: 4rem;
  margin-bottom: 1rem;
  opacity: 0.5;
`,ay=kr.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem;
`,sy=kr.div`
  width: 40px;
  height: 40px;
  border: 4px solid #f3f4f6;
  border-top: 4px solid #f59e0b;
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`,ly=e=>{let{user:n,location:r,orders:i=[]}=e;const[o,a]=(0,t.useState)(i),[s,l]=(0,t.useState)(null),[c,u]=(0,t.useState)(""),[d,p]=(0,t.useState)("all"),[h,f]=(0,t.useState)(!1),[m,g]=(0,t.useState)(!1),y=[{id:"1",orderNumber:"ND-2024-001",status:"delivered",items:[{id:1,name:"Fresh Milk",icon:"\ud83e\udd5b",quantity:2,price:135,unit:"litre"},{id:2,name:"Organic Ghee",icon:"\ud83e\uddc8",quantity:1,price:3e3,unit:"litre"}],total:3270,deliveryAddress:"123 Main Street, Gurgaon, Haryana 122001",deliveryDate:new Date("2024-01-16"),trackingNumber:"TRK-2024-001",createdAt:new Date("2024-01-15")},{id:"2",orderNumber:"ND-2024-002",status:"in-transit",items:[{id:3,name:"Cheese",icon:"\ud83e\uddc0",quantity:3,price:200,unit:"kg"},{id:1,name:"Fresh Milk",icon:"\ud83e\udd5b",quantity:1,price:135,unit:"litre"}],total:735,deliveryAddress:"456 Park Avenue, Delhi, Delhi 110001",deliveryDate:new Date("2024-01-21"),trackingNumber:"TRK-2024-002",createdAt:new Date("2024-01-20")},{id:"3",orderNumber:"ND-2024-003",status:"processing",items:[{id:2,name:"Organic Ghee",icon:"\ud83e\uddc8",quantity:2,price:3e3,unit:"litre"}],total:6e3,deliveryAddress:"789 Lake Road, Mumbai, Maharashtra 400001",deliveryDate:new Date("2024-01-26"),trackingNumber:"TRK-2024-003",createdAt:new Date("2024-01-25")}],v=(0,t.useCallback)(async()=>{f(!0);try{await new Promise(e=>setTimeout(e,1e3)),a(y)}catch(e){console.error("Error loading orders:",e)}finally{f(!1)}},[]);(0,t.useEffect)(()=>{v()},[v]);const x=o.filter(e=>{const t=e.orderNumber.toLowerCase().includes(c.toLowerCase())||e.deliveryAddress.toLowerCase().includes(c.toLowerCase()),n="all"===d||e.status===d;return t&&n}),b=e=>{switch(e){case"delivered":return(0,Vr.jsx)(Qf,{size:16});case"in-transit":return(0,Vr.jsx)(Wp,{size:16});case"processing":return(0,Vr.jsx)(Ku,{size:16});case"cancelled":return(0,Vr.jsx)(Km,{size:16});default:return(0,Vr.jsx)(Er,{size:16})}},w=e=>{switch(e){case"delivered":return"Delivered";case"in-transit":return"In Transit";case"processing":return"Processing";case"cancelled":return"Cancelled";default:return e}},k=e=>new Intl.DateTimeFormat("en-IN",{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}).format(e),j=e=>new Intl.NumberFormat("en-IN",{style:"currency",currency:"INR"}).format(e);return h?(0,Vr.jsx)(Tg,{children:(0,Vr.jsx)(ay,{children:(0,Vr.jsx)(sy,{})})}):(0,Vr.jsxs)(Tg,{children:[(0,Vr.jsxs)(zg,{children:[(0,Vr.jsxs)("div",{children:[(0,Vr.jsx)(Dg,{children:"My Orders"}),(0,Vr.jsx)(Mg,{children:"Track your dairy product orders and deliveries"})]}),(0,Vr.jsxs)(Rg,{children:[(0,Vr.jsxs)(Og,{children:[(0,Vr.jsx)(Ng,{children:(0,Vr.jsx)(Xf,{size:16})}),(0,Vr.jsx)(Ag,{type:"text",placeholder:"Search orders...",value:c,onChange:e=>u(e.target.value)})]}),(0,Vr.jsxs)(_g,{onClick:()=>p("all"),children:[(0,Vr.jsx)(Gm,{size:16}),"all"===d?"All Orders":"Filter"]}),(0,Vr.jsxs)(Lg,{onClick:v,children:[(0,Vr.jsx)(Qm,{size:16}),"Refresh"]})]})]}),0===x.length?(0,Vr.jsxs)(iy,{children:[(0,Vr.jsx)(oy,{children:"\ud83d\udce6"}),(0,Vr.jsx)("h3",{children:"No orders found"}),(0,Vr.jsx)("p",{children:"Start shopping to see your orders here"})]}):(0,Vr.jsx)(Ig,{children:x.map(e=>(0,Vr.jsxs)(Fg,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3},children:[(0,Vr.jsxs)(Vg,{children:[(0,Vr.jsxs)(Ug,{children:[(0,Vr.jsx)(Bg,{children:e.orderNumber}),(0,Vr.jsxs)($g,{children:["Ordered on ",k(e.createdAt)]})]}),(0,Vr.jsxs)(Wg,{status:e.status,children:[b(e.status),w(e.status)]})]}),(0,Vr.jsxs)(Hg,{children:[(0,Vr.jsxs)(qg,{children:[(0,Vr.jsx)(Yg,{children:"Delivery Address"}),(0,Vr.jsx)(Kg,{children:e.deliveryAddress})]}),(0,Vr.jsxs)(qg,{children:[(0,Vr.jsx)(Yg,{children:"Expected Delivery"}),(0,Vr.jsx)(Kg,{children:k(e.deliveryDate)})]}),(0,Vr.jsxs)(qg,{children:[(0,Vr.jsx)(Yg,{children:"Tracking Number"}),(0,Vr.jsx)(Kg,{children:e.trackingNumber})]}),(0,Vr.jsxs)(qg,{children:[(0,Vr.jsx)(Yg,{children:"Total Amount"}),(0,Vr.jsx)(Kg,{children:j(e.total)})]})]}),(0,Vr.jsxs)(Gg,{children:[(0,Vr.jsx)("h4",{style:{margin:"0 0 0.5rem 0",color:"#374151"},children:"Order Items"}),e.items.map(e=>(0,Vr.jsxs)(Qg,{children:[(0,Vr.jsxs)(Xg,{children:[(0,Vr.jsx)(Zg,{children:e.icon}),(0,Vr.jsxs)(Jg,{children:[(0,Vr.jsx)(ey,{children:e.name}),(0,Vr.jsxs)(ty,{children:["Qty: ",e.quantity," \xd7 ",j(e.price)," per ",e.unit]})]})]}),(0,Vr.jsx)(ny,{children:j(e.price*e.quantity)})]},e.id))]}),(0,Vr.jsx)(ry,{children:(0,Vr.jsxs)(Lg,{onClick:()=>(e=>{l(e),g(!0)})(e),children:[(0,Vr.jsx)(Xm,{size:16}),"Track Order"]})})]},e.id))}),(0,Vr.jsx)(Td,{children:m&&s&&(0,Vr.jsx)(Eg,{order:s,onClose:()=>{g(!1),l(null)}})})]})},cy=Cr("Brain",[["path",{d:"M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z",key:"1mhkh5"}],["path",{d:"M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z",key:"1d6s00"}]]),uy=Cr("MicOff",[["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}],["path",{d:"M18.89 13.23A7.12 7.12 0 0 0 19 12v-2",key:"80xlxr"}],["path",{d:"M5 10v2a7 7 0 0 0 12 5",key:"p2k8kg"}],["path",{d:"M15 9.34V5a3 3 0 0 0-5.68-1.33",key:"1gzdoj"}],["path",{d:"M9 9v3a3 3 0 0 0 5.12 2.12",key:"r2i35w"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]]),dy=Cr("Mic",[["path",{d:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z",key:"131961"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]]),py=Cr("VolumeX",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]),hy=Cr("Volume2",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["path",{d:"M15.54 8.46a5 5 0 0 1 0 7.07",key:"ltjumu"}],["path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14",key:"1kegas"}]]),fy=Cr("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]),my=kr(Yu.div)`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
  font-family: 'Inter', sans-serif;
`,gy=kr.button`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, #f59e0b, #d97706);
  border: none;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(245, 158, 11, 0.3);
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 20px rgba(245, 158, 11, 0.4);
  }

  .notification {
    position: absolute;
    top: -5px;
    right: -5px;
    width: 20px;
    height: 20px;
    background: #dc2626;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.7rem;
    font-weight: 600;
  }

  .ai-indicator {
    position: absolute;
    bottom: -5px;
    left: -5px;
    width: 16px;
    height: 16px;
    background: #10b981;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.6rem;
    color: white;
  }
`,yy=kr(Yu.div)`
  position: absolute;
  bottom: 80px;
  right: 0;
  width: 400px;
  height: 600px;
  background: white;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  overflow: hidden;
`,vy=kr.div`
  background: linear-gradient(135deg, #f59e0b, #d97706);
  color: white;
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h3 {
    margin: 0;
    font-size: 1.1rem;
    font-weight: 600;
  }

  .status {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.8rem;
    opacity: 0.9;
  }

  .ai-features {
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }
`,xy=kr.button`
  background: ${e=>e.active?"rgba(255, 255, 255, 0.2)":"rgba(255, 255, 255, 0.1)"};
  border: none;
  color: white;
  padding: 0.25rem;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: scale(1.1);
  }
`,by=kr.div`
  flex: 1;
  padding: 1rem;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: #f8fafc;
`,wy=kr(Yu.div)`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  justify-content: ${e=>e.isUser?"flex-end":"flex-start"};
`,ky=kr.div`
  max-width: 80%;
  padding: 0.75rem 1rem;
  border-radius: 18px;
  background: ${e=>e.isUser?"#f59e0b":"positive"===e.sentiment?"#dcfce7":"negative"===e.sentiment?"#fef2f2":"#f1f5f9"};
  color: ${e=>e.isUser?"white":"positive"===e.sentiment?"#166534":"negative"===e.sentiment?"#dc2626":"#1e293b"};
  font-size: 0.9rem;
  line-height: 1.4;
  word-wrap: break-word;
  position: relative;

  .sentiment-indicator {
    position: absolute;
    top: -8px;
    right: -8px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.6rem;
  }
`,jy=kr.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: ${e=>e.isUser?"#f59e0b":"#10b981"};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 0.8rem;
  flex-shrink: 0;
`,Sy=kr.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.5rem;
`,Cy=kr.button`
  background: white;
  border: 2px solid #e2e8f0;
  border-radius: 20px;
  padding: 0.5rem 1rem;
  font-size: 0.8rem;
  cursor: pointer;
  transition: all 0.2s;
  color: #64748b;

  &:hover {
    border-color: #f59e0b;
    color: #f59e0b;
    transform: scale(1.05);
  }
`,Py=kr.div`
  padding: 1rem;
  border-top: 1px solid #e2e8f0;
  display: flex;
  gap: 0.5rem;
  background: white;
`,Ey=kr.input`
  flex: 1;
  padding: 0.75rem 1rem;
  border: 2px solid #e2e8f0;
  border-radius: 25px;
  font-size: 0.9rem;
  outline: none;
  transition: border 0.2s;

  &:focus {
    border-color: #f59e0b;
  }
`,Ty=kr.button`
  background: ${e=>e.active?"#f59e0b":"#e2e8f0"};
  border: none;
  color: ${e=>e.active?"white":"#64748b"};
  padding: 0.75rem;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${e=>e.active?"#d97706":"#cbd5e1"};
    transform: scale(1.05);
  }

  &:disabled {
    background: #cbd5e1;
    cursor: not-allowed;
    transform: none;
  }
`,zy=kr.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  background: #f1f5f9;
  border-radius: 18px;
  max-width: 80%;
  font-size: 0.9rem;
  color: #64748b;
`,Dy=kr.div`
  background: linear-gradient(135deg, #fef3c7, #fde68a);
  border-radius: 12px;
  padding: 1rem;
  margin: 0.5rem 0;
  border-left: 4px solid #f59e0b;
`,My=e=>{let{isOpen:n,onToggle:r,user:i}=e;const[o,a]=(0,t.useState)([{id:"1",text:"Hi! I'm your AI-powered Nature's Dairy assistant. I can help you with products, orders, and even understand your mood! \ud83e\udd5b\u2728",isUser:!1,timestamp:new Date,quickReplies:["Our Products","AI Recommendations","Voice Chat","Order Status"]}]),[s,l]=(0,t.useState)(""),[c,u]=(0,t.useState)(!1),[d,p]=(0,t.useState)(!1),[h,f]=(0,t.useState)(!1),[m,g]=(0,t.useState)(!0),y=(0,t.useRef)(null);(0,t.useEffect)(()=>{(()=>{var e;null===(e=y.current)||void 0===e||e.scrollIntoView({behavior:"smooth"})})()},[o]);const v=(e,t)=>{const n=e.toLowerCase();if(n.includes("voice")||n.includes("speak")||n.includes("talk"))return{text:"\ud83c\udfa4 **Voice Chat Activated!**\n\nI can now understand your voice! Click the microphone button to start speaking. I'll respond with both text and voice.\n\nTry saying: 'Tell me about your products' or 'What's the delivery time?'",quickReplies:["Start Voice Chat","Text Only","Voice Settings"],insights:"User interested in voice features. Enabling voice interaction capabilities."};if(n.includes("product")||n.includes("milk")||n.includes("ghee")||n.includes("cheese")||n.includes("paneer")||n.includes("curd")||n.includes("butter")||n.includes("cream")||n.includes("lassi")||n.includes("shrikhand")){return{text:`\ud83e\udd5b **Smart Product Analysis:**\n\n${x(n)}\n\n\ud83d\udca1 **AI Insight:** Based on recent trends, fresh milk demand has increased by 25% this month!`,quickReplies:["Order Now","Nutrition Facts","Compare Products","Subscription"],insights:"Product inquiry detected. Providing enhanced product information with market insights."}}if(n.includes("order")||n.includes("status")||n.includes("track")){return{text:`\ud83d\udce6 **Smart Order Tracking:**\n\n${b()}\n\n\ud83e\udd16 **AI Prediction:** Your order will likely arrive within 2-3 hours based on current delivery patterns.`,quickReplies:["Track Order","Delivery Updates","Contact Support"],insights:"Order tracking request. Providing predictive delivery information."}}return{text:"\ud83e\udd16 **AI Assistant Mode:**\n\nI'm here to help with:\n\u2022 Voice chat capabilities\n\u2022 Predictive order tracking\n\u2022 Sentiment analysis\n\u2022 Product recommendations\n\u2022 Order assistance\n\nWhat would you like to explore?",quickReplies:["AI Features","Voice Chat","Order Help","Help"],insights:"General inquiry. Providing AI feature overview."}},x=e=>{const t=e.toLowerCase();return t.includes("milk")?"**Fresh Milk** - \u20b9135\n\u2022 AI-analyzed freshness score: 98%\n\u2022 Customer satisfaction: 4.8/5\n\u2022 Health benefits: 15% more protein\n\n**Toned Milk** - \u20b9120\n\u2022 Low-fat option with high protein\n\u2022 Perfect for weight management\n\u2022 Same natural benefits, less fat\n\n**Full Cream Milk** - \u20b9150\n\u2022 Rich, creamy texture\n\u2022 Maximum nutrition retention\n\u2022 Ideal for children and athletes":t.includes("ghee")||t.includes("butter")?"**Organic Ghee** - \u20b93000\n\u2022 Traditional Vedic method: 100%\n\u2022 Market demand trend: +30%\n\u2022 Quality assurance: AI-monitored\n\n**Butter** - \u20b9450\n\u2022 Pure cream butter\n\u2022 Rich flavor and texture\n\u2022 Perfect for cooking and spreading":t.includes("paneer")||t.includes("cheese")?"**Fresh Paneer** - \u20b9200\n\u2022 Freshness guarantee: 5 days\n\u2022 Customer preference: 95%\n\u2022 Traditional cottage cheese\n\n**Cheese** - \u20b9350\n\u2022 Artisanal aged cheese\n\u2022 Premium quality natural protein\n\u2022 Rich, complex flavors":t.includes("curd")||t.includes("dahi")?"**Curd (Dahi)** - \u20b980\n\u2022 Rich in natural probiotics\n\u2022 Traditional fermentation\n\u2022 Perfect for digestion\n\u2022 Shelf life: 48 hours":t.includes("lassi")||t.includes("buttermilk")?"**Lassi** - \u20b9100\n\u2022 Refreshing yogurt drink\n\u2022 Natural flavors available\n\u2022 Perfect summer beverage\n\n**Buttermilk** - \u20b960\n\u2022 Digestive health benefits\n\u2022 Traditional preparation\n\u2022 Low-calorie option":t.includes("cream")||t.includes("malai")?"**Cream** - \u20b9200\n\u2022 Rich, thick consistency\n\u2022 Perfect for desserts\n\u2022 Coffee enhancement\n\n**Malai** - \u20b9180\n\u2022 Fresh cream layer\n\u2022 Dessert and sweet making\n\u2022 Traditional Indian recipes":"**Fresh Milk** - \u20b9135\n\u2022 AI-analyzed freshness score: 98%\n\u2022 Customer satisfaction: 4.8/5\n\u2022 Health benefits: 15% more protein\n\n**Organic Ghee** - \u20b93000\n\u2022 Traditional method preservation: 100%\n\u2022 Market demand trend: +30%\n\u2022 Quality assurance: AI-monitored\n\n**Fresh Paneer** - \u20b9200\n\u2022 Freshness guarantee: 5 days\n\u2022 Customer preference: 95%\n\u2022 Traditional cottage cheese"},b=()=>"**Current Status:** Processing\n**AI Estimated Delivery:** 2-3 hours\n**Route Optimization:** Active\n**Weather Impact:** Minimal\n**Traffic Analysis:** Optimal route selected",w=(e,t,n,r)=>{const i=t?(e=>{const t=["good","great","excellent","amazing","love","like","happy","satisfied","perfect","wonderful"],n=["bad","terrible","awful","hate","dislike","angry","frustrated","disappointed","poor","worst"],r=e.toLowerCase().split(" "),i=r.filter(e=>t.includes(e)).length,o=r.filter(e=>n.includes(e)).length;return i>o?"positive":o>i?"negative":"neutral"})(e):void 0,o={id:Date.now().toString(),text:e,isUser:t,timestamp:new Date,quickReplies:n,sentiment:i,aiInsights:r};a(e=>[...e,o])},k=e=>{u(!0),setTimeout(()=>{u(!1),e()},1e3+1e3*Math.random())},j=()=>{if(!s.trim())return;const e=s.trim();w(e,!0),l(""),k(()=>{const t=v(e);w(t.text,!1,t.quickReplies,t.insights)})};return(0,Vr.jsxs)(my,{children:[(0,Vr.jsxs)(gy,{onClick:r,children:[n?(0,Vr.jsx)(Ir,{size:24}):(0,Vr.jsx)(zr,{size:24}),!n&&1===o.length&&(0,Vr.jsx)("div",{className:"notification",children:"1"}),(0,Vr.jsx)("div",{className:"ai-indicator",children:(0,Vr.jsx)(cy,{size:10})})]}),(0,Vr.jsx)(Td,{children:n&&(0,Vr.jsxs)(yy,{initial:{opacity:0,scale:.8,y:20},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.8,y:20},transition:{type:"spring",damping:25,stiffness:300},children:[(0,Vr.jsxs)(vy,{children:[(0,Vr.jsxs)("div",{children:[(0,Vr.jsx)("h3",{children:"AI Dairy Assistant"}),(0,Vr.jsxs)("div",{className:"status",children:[(0,Vr.jsx)("div",{style:{width:8,height:8,background:"#10b981",borderRadius:"50%"}}),"AI Enhanced"]})]}),(0,Vr.jsxs)("div",{className:"ai-features",children:[(0,Vr.jsx)(xy,{active:m,onClick:()=>g(!m),title:"AI Mode",children:(0,Vr.jsx)(cy,{size:16})}),(0,Vr.jsx)(xy,{active:d,onClick:()=>{p(!d),d?console.log("Voice recognition stopped"):console.log("Voice recognition started")},title:"Voice Chat",children:d?(0,Vr.jsx)(uy,{size:16}):(0,Vr.jsx)(dy,{size:16})}),(0,Vr.jsx)(xy,{active:!h,onClick:()=>f(!h),title:"Voice Output",children:h?(0,Vr.jsx)(py,{size:16}):(0,Vr.jsx)(hy,{size:16})}),(0,Vr.jsx)(xy,{onClick:r,children:(0,Vr.jsx)(Ir,{size:16})})]})]}),(0,Vr.jsxs)(by,{children:[o.map(e=>(0,Vr.jsxs)(wy,{isUser:e.isUser,sentiment:e.sentiment,children:[!e.isUser&&(0,Vr.jsx)(jy,{isUser:!1,children:(0,Vr.jsx)(Mm,{size:16})}),(0,Vr.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem"},children:[(0,Vr.jsxs)(ky,{isUser:e.isUser,sentiment:e.sentiment,children:[e.text,e.sentiment&&(0,Vr.jsx)("div",{className:"sentiment-indicator",children:"positive"===e.sentiment?(0,Vr.jsx)(fy,{size:10}):"negative"===e.sentiment?(0,Vr.jsx)(Km,{size:10}):(0,Vr.jsx)(oh,{size:10})})]}),e.aiInsights&&(0,Vr.jsxs)(Dy,{children:[(0,Vr.jsx)("strong",{children:"\ud83e\udd16 AI Analysis:"})," ",e.aiInsights]}),e.quickReplies&&(0,Vr.jsx)(Sy,{children:e.quickReplies.map((e,t)=>(0,Vr.jsx)(Cy,{onClick:()=>(e=>{w(e,!0),k(()=>{const t=v(e);w(t.text,!1,t.quickReplies,t.insights)})})(e),children:e},t))})]}),e.isUser&&(0,Vr.jsx)(jy,{isUser:!0,children:(0,Vr.jsx)(Lr,{size:16})})]},e.id)),c&&(0,Vr.jsxs)(wy,{isUser:!1,children:[(0,Vr.jsx)(jy,{isUser:!1,children:(0,Vr.jsx)(Mm,{size:16})}),(0,Vr.jsxs)(zy,{children:[(0,Vr.jsx)(cy,{size:16}),"AI is thinking..."]})]}),(0,Vr.jsx)("div",{ref:y})]}),(0,Vr.jsxs)(Py,{children:[(0,Vr.jsx)(Ey,{value:s,onChange:e=>l(e.target.value),onKeyPress:e=>{"Enter"!==e.key||e.shiftKey||(e.preventDefault(),j())},placeholder:"Ask me anything... (AI Enhanced)",disabled:c}),(0,Vr.jsx)(Ty,{onClick:j,disabled:!s.trim()||c,children:(0,Vr.jsx)(Ch,{size:16})})]})]})})]})},Ry=Cr("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]),Oy=Cr("QrCode",[["rect",{width:"5",height:"5",x:"3",y:"3",rx:"1",key:"1tu5fj"}],["rect",{width:"5",height:"5",x:"16",y:"3",rx:"1",key:"1v8r4q"}],["rect",{width:"5",height:"5",x:"3",y:"16",rx:"1",key:"1x03jg"}],["path",{d:"M21 16h-3a2 2 0 0 0-2 2v3",key:"177gqh"}],["path",{d:"M21 21v.01",key:"ents32"}],["path",{d:"M12 7v3a2 2 0 0 1-2 2H7",key:"8crl2c"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M12 3h.01",key:"n36tog"}],["path",{d:"M12 16v.01",key:"133mhm"}],["path",{d:"M16 12h1",key:"1slzba"}],["path",{d:"M21 12v.01",key:"1lwtk9"}],["path",{d:"M12 21v-1",key:"1880an"}]]),Ay=Cr("Building",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",ry:"2",key:"76otgf"}],["path",{d:"M9 22v-4h6v4",key:"r93iot"}],["path",{d:"M8 6h.01",key:"1dz90k"}],["path",{d:"M16 6h.01",key:"1x0f13"}],["path",{d:"M12 6h.01",key:"1vi96p"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M8 14h.01",key:"6423bh"}]]),Ny=jr`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`,_y=jr`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
`,Ly=kr.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: ${e=>{switch(e.size){case"small":return"8px";case"large":return"24px";default:return"16px"}}};
`,Iy=kr.div`
  width: ${e=>{switch(e.size){case"small":return"16px";case"large":return"32px";default:return"24px"}}};
  height: ${e=>{switch(e.size){case"small":return"16px";case"large":return"32px";default:return"24px"}}};
  border: 2px solid #e5e7eb;
  border-top: 2px solid #f59e0b;
  border-radius: 50%;
  animation: ${Ny} 1s linear infinite;
`,Fy=kr.div`
  color: #6b7280;
  font-size: ${e=>{switch(e.size){case"small":return"12px";case"large":return"16px";default:return"14px"}}};
  font-weight: 500;
  animation: ${_y} 2s ease-in-out infinite;
`,Vy=kr.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`,Uy=kr.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(2px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`,By=e=>{let{text:t="Loading...",size:n="medium",fullScreen:r=!1,overlay:i=!1}=e;const o=(0,Vr.jsxs)(Ly,{size:n,children:[(0,Vr.jsx)(Iy,{size:n}),(0,Vr.jsx)(Fy,{size:n,children:t})]});return r?(0,Vr.jsx)(Vy,{children:o}):i?(0,Vr.jsx)(Uy,{children:o}):o},$y=kr.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
`,Wy=kr(Yu.div)`
  background: white;
  border-radius: 20px;
  max-width: 1000px;
  width: 100%;
  max-height: 95vh;
  position: relative;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  overflow: hidden;
`,Hy=kr.button`
  position: absolute;
  top: 15px;
  right: 20px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #666;
  z-index: 10;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.2s ease;

  &:hover {
    background-color: #f3f4f6;
    color: #374151;
  }
`,qy=kr.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 700px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,Yy=kr.div`
  background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="50" cy="50" r="1" fill="rgba(255,255,255,0.1)"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
    opacity: 0.3;
  }
`,Ky=kr.div`
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  background: white;
  position: relative;
  overflow-y: auto;
  max-height: 95vh;
`,Gy=kr.div`
  width: 60px;
  height: 60px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  position: relative;
  z-index: 2;
`,Qy=kr.h2`
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  margin-bottom: 0.5rem;
  position: relative;
  z-index: 2;
`,Xy=kr.p`
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.9rem;
  line-height: 1.5;
  position: relative;
  z-index: 2;
`,Zy=kr.h2`
  font-family: 'Playfair Display', serif;
  font-size: 1.75rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 0.5rem;
  text-align: center;
`,Jy=kr.p`
  color: #64748b;
  text-align: center;
  margin-bottom: 2rem;
  font-size: 0.95rem;
`,ev=kr.div`
  margin-bottom: 2rem;
`,tv=kr.h3`
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.1rem;
`,nv=kr.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,rv=kr.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,iv=kr.label`
  font-weight: 600;
  color: #374151;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,ov=kr.input`
  padding: 0.75rem 1rem;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.2s ease;
  background: white;

  &:focus {
    outline: none;
    border-color: #f59e0b;
    box-shadow: 0 0 0 3px rgba(245, 158, 11, 0.1);
  }

  &::placeholder {
    color: #9ca3af;
  }
`,av=kr.textarea`
  padding: 0.75rem 1rem;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.2s ease;
  background: white;
  resize: vertical;
  min-height: 80px;

  &:focus {
    outline: none;
    border-color: #f59e0b;
    box-shadow: 0 0 0 3px rgba(245, 158, 11, 0.1);
  }

  &::placeholder {
    color: #9ca3af;
  }
`,sv=kr.div`
  display: grid;
  gap: 0.75rem;
  margin-bottom: 1rem;
`,lv=kr.label`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
  padding: 1rem;
  border-radius: 8px;
  border: 2px solid ${e=>e.selected?"#f59e0b":"#e2e8f0"};
  background: ${e=>e.selected?"#fef3c7":"white"};
  transition: all 0.2s ease;

  &:hover {
    border-color: #f59e0b;
    background: ${e=>e.selected?"#fef3c7":"#f8fafc"};
  }
`,cv=kr.div`
  display: ${e=>e.show?"block":"none"};
  margin-top: 1rem;
  padding: 1rem;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
`,uv=kr.div`
  text-align: center;
  padding: 1rem;
  background: white;
  border-radius: 8px;
  margin-bottom: 1rem;
`,dv=kr.div`
  width: 200px;
  height: 200px;
  background: #f8fafc;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  margin: 0 auto 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
`,pv=kr.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`,hv=kr.button`
  background: #f59e0b;
  color: white;
  border: none;
  padding: 1rem 1.5rem;
  border-radius: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  font-size: 1rem;

  &:hover {
    background: #d97706;
    transform: translateY(-1px);
  }

  &:disabled {
    background: #9ca3af;
    cursor: not-allowed;
    transform: none;
  }
`,fv=kr.div`
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 1rem;
  margin-bottom: 1rem;
  max-height: 300px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f5f9;
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: #cbd5e1;
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #94a3b8;
  }
`,mv=kr.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
  border-bottom: 1px solid #e2e8f0;

  &:last-child {
    border-bottom: none;
  }
`,gv=kr.div`
  border-top: 2px solid #e2e8f0;
  padding-top: 1rem;
  margin-top: 1rem;
`,yv=e=>{let{cart:n,onClose:r,onOrderComplete:i}=e;const[o,a]=(0,t.useState)("address"),[s,l]=(0,t.useState)(""),[c,u]=(0,t.useState)(!1),[d,p]=(0,t.useState)({fullName:"",phone:"",email:"",street:"",city:"",state:"",pincode:"",landmark:""}),h=n.reduce((e,t)=>e+t.price*t.quantity,0)+50;return(0,Vr.jsx)($y,{onClick:r,children:(0,Vr.jsxs)(Wy,{onClick:e=>e.stopPropagation(),initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.9},transition:{duration:.3},children:[(0,Vr.jsx)(Hy,{onClick:r,children:"\xd7"}),(0,Vr.jsxs)(qy,{children:[(0,Vr.jsxs)(Yy,{children:[(0,Vr.jsx)(Gy,{children:(0,Vr.jsx)(np,{size:24,color:"white"})}),(0,Vr.jsx)(Qy,{children:"Nature's Dairy"}),(0,Vr.jsx)(Xy,{children:"Fresh, organic dairy products delivered to your doorstep"})]}),(0,Vr.jsxs)(Ky,{children:[(0,Vr.jsx)(Zy,{children:"Checkout"}),(0,Vr.jsx)(Jy,{children:"address"===o?"Enter your delivery address":"Choose your payment method"}),"address"===o?(0,Vr.jsxs)(nv,{onSubmit:e=>{e.preventDefault(),a("payment")},children:[(0,Vr.jsxs)(ev,{children:[(0,Vr.jsxs)(tv,{children:[(0,Vr.jsx)(Lr,{size:16}),"Personal Information"]}),(0,Vr.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1rem"},children:[(0,Vr.jsxs)(rv,{children:[(0,Vr.jsxs)(iv,{children:[(0,Vr.jsx)(Lr,{size:16}),"Full Name"]}),(0,Vr.jsx)(ov,{type:"text",placeholder:"Enter your full name",value:d.fullName,onChange:e=>p({...d,fullName:e.target.value}),required:!0})]}),(0,Vr.jsxs)(rv,{children:[(0,Vr.jsxs)(iv,{children:[(0,Vr.jsx)(kh,{size:16}),"Phone Number"]}),(0,Vr.jsx)(ov,{type:"tel",placeholder:"Enter your phone number",value:d.phone,onChange:e=>p({...d,phone:e.target.value}),required:!0})]})]}),(0,Vr.jsxs)(rv,{children:[(0,Vr.jsxs)(iv,{children:[(0,Vr.jsx)(jh,{size:16}),"Email Address"]}),(0,Vr.jsx)(ov,{type:"email",placeholder:"Enter your email address",value:d.email,onChange:e=>p({...d,email:e.target.value}),required:!0})]})]}),(0,Vr.jsxs)(ev,{children:[(0,Vr.jsxs)(tv,{children:[(0,Vr.jsx)(Ry,{size:16}),"Delivery Address"]}),(0,Vr.jsxs)(rv,{children:[(0,Vr.jsxs)(iv,{children:[(0,Vr.jsx)(Sh,{size:16}),"Street Address"]}),(0,Vr.jsx)(av,{placeholder:"Enter your complete street address",value:d.street,onChange:e=>p({...d,street:e.target.value}),required:!0})]}),(0,Vr.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1rem"},children:[(0,Vr.jsxs)(rv,{children:[(0,Vr.jsx)(iv,{children:"City"}),(0,Vr.jsx)(ov,{type:"text",placeholder:"Enter your city",value:d.city,onChange:e=>p({...d,city:e.target.value}),required:!0})]}),(0,Vr.jsxs)(rv,{children:[(0,Vr.jsx)(iv,{children:"State"}),(0,Vr.jsx)(ov,{type:"text",placeholder:"Enter your state",value:d.state,onChange:e=>p({...d,state:e.target.value}),required:!0})]})]}),(0,Vr.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1rem"},children:[(0,Vr.jsxs)(rv,{children:[(0,Vr.jsx)(iv,{children:"Pincode"}),(0,Vr.jsx)(ov,{type:"text",placeholder:"Enter pincode",value:d.pincode,onChange:e=>p({...d,pincode:e.target.value}),required:!0})]}),(0,Vr.jsxs)(rv,{children:[(0,Vr.jsx)(iv,{children:"Landmark (Optional)"}),(0,Vr.jsx)(ov,{type:"text",placeholder:"Near hospital, school, etc.",value:d.landmark,onChange:e=>p({...d,landmark:e.target.value})})]})]})]}),(0,Vr.jsxs)(hv,{type:"submit",children:["Continue to Payment",(0,Vr.jsx)(Zf,{size:16})]})]}):(0,Vr.jsxs)(nv,{onSubmit:e=>{e.preventDefault(),s&&(u(!0),setTimeout(()=>{const e=`${d.street}, ${d.city}, ${d.state} - ${d.pincode}`,t=new Date(Date.now()+864e5);i({status:"processing",deliveryAddress:e,deliveryDate:t,items:n,total:h}),u(!1)},2e3))},children:[(0,Vr.jsxs)(ev,{children:[(0,Vr.jsxs)(tv,{children:[(0,Vr.jsx)(Er,{size:16}),"Order Summary"]}),(0,Vr.jsxs)(fv,{children:[n.map(e=>(0,Vr.jsxs)(mv,{children:[(0,Vr.jsxs)("div",{children:[(0,Vr.jsxs)("div",{style:{fontWeight:"600",color:"#1e293b"},children:[e.name," \xd7 ",e.quantity]}),(0,Vr.jsxs)("div",{style:{fontSize:"0.8rem",color:"#64748b"},children:["\u20b9",e.price," per ",e.unit||"unit"]})]}),(0,Vr.jsxs)("div",{style:{fontWeight:"600",color:"#1e293b"},children:["\u20b9",e.price*e.quantity]})]},e.id)),(0,Vr.jsxs)(gv,{children:[(0,Vr.jsxs)(mv,{children:[(0,Vr.jsx)("span",{children:"Subtotal:"}),(0,Vr.jsxs)("span",{children:["\u20b9",n.reduce((e,t)=>e+t.price*t.quantity,0)]})]}),(0,Vr.jsxs)(mv,{children:[(0,Vr.jsx)("span",{children:"Delivery:"}),(0,Vr.jsx)("span",{children:"\u20b950"})]}),(0,Vr.jsxs)(mv,{style:{fontWeight:"600",fontSize:"1.1rem"},children:[(0,Vr.jsx)("span",{children:"Total:"}),(0,Vr.jsxs)("span",{children:["\u20b9",h]})]})]})]})]}),(0,Vr.jsxs)(ev,{children:[(0,Vr.jsxs)(tv,{children:[(0,Vr.jsx)(ap,{size:16}),"Payment Method"]}),(0,Vr.jsxs)(sv,{children:[(0,Vr.jsxs)(lv,{selected:"cod"===s,children:[(0,Vr.jsx)("input",{type:"radio",name:"payment",value:"cod",checked:"cod"===s,onChange:e=>l(e.target.value)}),(0,Vr.jsxs)("div",{children:[(0,Vr.jsx)("div",{style:{fontWeight:"600",color:"#1e293b"},children:"\ud83d\udcb5 Cash on Delivery"}),(0,Vr.jsx)("div",{style:{fontSize:"0.8rem",color:"#64748b"},children:"Pay when you receive your order"})]})]}),(0,Vr.jsxs)(lv,{selected:"upi"===s,children:[(0,Vr.jsx)("input",{type:"radio",name:"payment",value:"upi",checked:"upi"===s,onChange:e=>l(e.target.value)}),(0,Vr.jsxs)("div",{children:[(0,Vr.jsx)("div",{style:{fontWeight:"600",color:"#1e293b"},children:"\ud83d\udcf1 UPI Payment"}),(0,Vr.jsx)("div",{style:{fontSize:"0.8rem",color:"#64748b"},children:"Scan QR code to pay instantly"})]})]}),(0,Vr.jsxs)(lv,{selected:"card"===s,children:[(0,Vr.jsx)("input",{type:"radio",name:"payment",value:"card",checked:"card"===s,onChange:e=>l(e.target.value)}),(0,Vr.jsxs)("div",{children:[(0,Vr.jsx)("div",{style:{fontWeight:"600",color:"#1e293b"},children:"\ud83d\udcb3 Credit/Debit Card"}),(0,Vr.jsx)("div",{style:{fontSize:"0.8rem",color:"#64748b"},children:"Secure card payment"})]})]}),(0,Vr.jsxs)(lv,{selected:"netbanking"===s,children:[(0,Vr.jsx)("input",{type:"radio",name:"payment",value:"netbanking",checked:"netbanking"===s,onChange:e=>l(e.target.value)}),(0,Vr.jsxs)("div",{children:[(0,Vr.jsx)("div",{style:{fontWeight:"600",color:"#1e293b"},children:"\ud83c\udfe6 Net Banking"}),(0,Vr.jsx)("div",{style:{fontSize:"0.8rem",color:"#64748b"},children:"Pay through your bank account"})]})]})]}),(0,Vr.jsx)(cv,{show:"upi"===s,children:(0,Vr.jsxs)(uv,{children:[(0,Vr.jsx)(dv,{children:(0,Vr.jsx)(Oy,{size:80,color:"#374151"})}),(0,Vr.jsx)("p",{style:{margin:"0 0 0.5rem 0",fontWeight:"600",color:"#1e293b"},children:"Scan QR Code to Pay"}),(0,Vr.jsx)("p",{style:{margin:0,fontSize:"0.9rem",color:"#64748b"},children:"UPI ID: naturesdairy@upi"})]})}),(0,Vr.jsx)(cv,{show:"card"===s,children:(0,Vr.jsxs)(pv,{children:[(0,Vr.jsxs)(rv,{children:[(0,Vr.jsxs)(iv,{children:[(0,Vr.jsx)(ap,{size:16}),"Card Number"]}),(0,Vr.jsx)(ov,{type:"text",placeholder:"1234 5678 9012 3456",maxLength:19})]}),(0,Vr.jsxs)(rv,{children:[(0,Vr.jsxs)(iv,{children:[(0,Vr.jsx)(Lr,{size:16}),"Cardholder Name"]}),(0,Vr.jsx)(ov,{type:"text",placeholder:"John Doe"})]}),(0,Vr.jsxs)(rv,{children:[(0,Vr.jsx)(iv,{children:"Expiry Date"}),(0,Vr.jsx)(ov,{type:"text",placeholder:"MM/YY",maxLength:5})]}),(0,Vr.jsxs)(rv,{children:[(0,Vr.jsxs)(iv,{children:[(0,Vr.jsx)(Ef,{size:16}),"CVV"]}),(0,Vr.jsx)(ov,{type:"password",placeholder:"123",maxLength:4})]})]})}),(0,Vr.jsx)(cv,{show:"netbanking"===s,children:(0,Vr.jsxs)("div",{style:{textAlign:"center",padding:"1rem"},children:[(0,Vr.jsx)(Ay,{size:48,color:"#64748b",style:{marginBottom:"1rem"}}),(0,Vr.jsx)("p",{style:{margin:"0 0 0.5rem 0",fontWeight:"600",color:"#1e293b"},children:"Select Your Bank"}),(0,Vr.jsx)("p",{style:{margin:0,fontSize:"0.9rem",color:"#64748b"},children:"You will be redirected to your bank's secure payment gateway"})]})})]}),(0,Vr.jsxs)("div",{style:{display:"flex",gap:"1rem"},children:[(0,Vr.jsx)("button",{type:"button",onClick:()=>a("address"),style:{background:"white",color:"#374151",border:"2px solid #e2e8f0",padding:"1rem 1.5rem",borderRadius:"12px",fontWeight:"600",cursor:"pointer",transition:"all 0.2s ease",flex:1},children:"Back to Address"}),(0,Vr.jsx)(hv,{type:"submit",disabled:!s||c,children:c?(0,Vr.jsx)(By,{text:"Processing...",size:"small"}):`Pay \u20b9${h}`})]})]})]})]})]})})},vv=Cr("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]),xv=Cr("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]),bv=Cr("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]),wv=kr.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
`,kv=kr(Yu.div)`
  background: white;
  border-radius: 20px;
  max-width: 600px;
  width: 100%;
  max-height: 90vh;
  position: relative;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  overflow: hidden;
`,jv=kr.div`
  background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
  color: white;
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,Sv=kr.h2`
  margin: 0;
  font-size: 1.5rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,Cv=kr.button`
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`,Pv=kr.div`
  padding: 1.5rem;
  max-height: 60vh;
  overflow-y: auto;
`,Ev=kr.div`
  text-align: center;
  padding: 3rem 1rem;
  color: #64748b;
`,Tv=kr.div`
  font-size: 4rem;
  margin-bottom: 1rem;
  opacity: 0.5;
`,zv=kr.p`
  font-size: 1.1rem;
  margin: 0 0 1rem 0;
`,Dv=kr.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  margin-bottom: 1rem;
  background: white;
  transition: all 0.2s ease;

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`,Mv=kr.div`
  width: 60px;
  height: 60px;
  border-radius: 8px;
  background: linear-gradient(135deg, #fef3c7, #fde68a);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  flex-shrink: 0;
`,Rv=kr.div`
  flex: 1;
  min-width: 0;
`,Ov=kr.h4`
  margin: 0 0 0.25rem 0;
  font-size: 1rem;
  font-weight: 600;
  color: #1e293b;
`,Av=kr.p`
  margin: 0;
  font-size: 0.9rem;
  color: #64748b;
`,Nv=kr.span`
  color: #f59e0b;
  font-weight: 500;
`,_v=kr.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,Lv=kr.button`
  background: #f1f5f9;
  border: none;
  width: 32px;
  height: 32px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  color: #64748b;

  &:hover {
    background: #e2e8f0;
    color: #1e293b;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,Iv=kr.span`
  min-width: 40px;
  text-align: center;
  font-weight: 600;
  color: #1e293b;
`,Fv=kr.button`
  background: #fee2e2;
  border: none;
  color: #dc2626;
  padding: 0.5rem;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: #fecaca;
  }
`,Vv=kr.div`
  background: #f8fafc;
  padding: 1.5rem;
  border-top: 1px solid #e2e8f0;
`,Uv=kr.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  padding: 1rem;
  background: white;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
`,Bv=kr.span`
  font-weight: 600;
  color: #64748b;
`,$v=kr.span`
  font-weight: 700;
  color: #1e293b;
  font-size: 1.1rem;
`,Wv=kr.button`
  width: 100%;
  background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
  color: white;
  border: none;
  padding: 1rem;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(245, 158, 11, 0.3);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`,Hv=kr.div`
  background: #fef3c7;
  border: 1px solid #f59e0b;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: #92400e;
`,qv=e=>{let{cart:t,setCart:n,isOpen:r,onClose:i,onCheckout:o,user:a}=e;const s=(e,t)=>{t<=0?l(e):n(n=>n.map(n=>n.id===e?{...n,quantity:t}:n))},l=e=>{n(t=>t.filter(t=>t.id!==e))},c=t.reduce((e,t)=>e+t.price*t.quantity,0),u=c>0?50:0,d=c+u;return(0,Vr.jsx)(Td,{children:r&&(0,Vr.jsx)(wv,{onClick:i,children:(0,Vr.jsxs)(kv,{onClick:e=>e.stopPropagation(),initial:{opacity:0,scale:.9,y:20},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.9,y:20},transition:{duration:.3},children:[(0,Vr.jsxs)(jv,{children:[(0,Vr.jsxs)(Sv,{children:[(0,Vr.jsx)(Dr,{size:24}),"Shopping Cart (",t.length," items)"]}),(0,Vr.jsx)(Cv,{onClick:i,children:(0,Vr.jsx)(Ir,{size:20})})]}),(0,Vr.jsx)(Pv,{children:0===t.length?(0,Vr.jsxs)(Ev,{children:[(0,Vr.jsx)(Tv,{children:"\ud83d\uded2"}),(0,Vr.jsx)(zv,{children:"Your cart is empty"}),(0,Vr.jsx)("p",{style:{fontSize:"0.9rem",margin:0},children:"Add some fresh dairy products to get started!"})]}):(0,Vr.jsx)(Vr.Fragment,{children:t.map(e=>(0,Vr.jsxs)(Dv,{children:[(0,Vr.jsx)(Mv,{children:e.icon||"\ud83e\udd5b"}),(0,Vr.jsxs)(Rv,{children:[(0,Vr.jsx)(Ov,{children:e.name}),(0,Vr.jsxs)(Av,{children:["\u20b9",e.price," per ",(0,Vr.jsx)(Nv,{children:e.unit})]})]}),(0,Vr.jsxs)(_v,{children:[(0,Vr.jsx)(Lv,{onClick:()=>s(e.id,e.quantity-1),disabled:e.quantity<=1,children:(0,Vr.jsx)(vv,{size:16})}),(0,Vr.jsx)(Iv,{children:e.quantity}),(0,Vr.jsx)(Lv,{onClick:()=>s(e.id,e.quantity+1),children:(0,Vr.jsx)(xv,{size:16})})]}),(0,Vr.jsx)(Fv,{onClick:()=>l(e.id),children:(0,Vr.jsx)(bv,{size:16})})]},e.id))})}),t.length>0&&(0,Vr.jsxs)(Vv,{children:[(0,Vr.jsxs)(Hv,{children:[(0,Vr.jsx)(Wp,{size:16}),"Free delivery on orders above \u20b9200"]}),(0,Vr.jsxs)(Uv,{children:[(0,Vr.jsx)(Bv,{children:"Subtotal"}),(0,Vr.jsxs)($v,{children:["\u20b9",c.toFixed(2)]})]}),(0,Vr.jsxs)(Uv,{children:[(0,Vr.jsx)(Bv,{children:"Delivery Fee"}),(0,Vr.jsxs)($v,{children:["\u20b9",u.toFixed(2)]})]}),(0,Vr.jsxs)(Uv,{children:[(0,Vr.jsx)(Bv,{children:"Total"}),(0,Vr.jsxs)($v,{children:["\u20b9",d.toFixed(2)]})]}),(0,Vr.jsxs)(Wv,{onClick:()=>{a?o():i()},children:[(0,Vr.jsx)(ap,{size:20}),"Proceed to Checkout"]})]})]})})})},Yv=kr.div`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 400px;
`,Kv=kr(Yu.div)`
  background: white;
  border-radius: 12px;
  padding: 16px 20px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  border-left: 4px solid ${e=>{switch(e.type){case"success":return"#10b981";case"error":return"#ef4444";case"info":return"#3b82f6";default:return"#6b7280"}}};
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 300px;
  max-width: 400px;
`,Gv=kr.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: ${e=>{switch(e.type){case"success":return"#d1fae5";case"error":return"#fee2e2";case"info":return"#dbeafe";default:return"#f3f4f6"}}};
  color: ${e=>{switch(e.type){case"success":return"#059669";case"error":return"#dc2626";case"info":return"#2563eb";default:return"#6b7280"}}};
  flex-shrink: 0;
`,Qv=kr.div`
  flex: 1;
  min-width: 0;
`,Xv=kr.div`
  font-weight: 600;
  color: #1f2937;
  font-size: 14px;
  margin-bottom: 2px;
`,Zv=kr.div`
  color: #6b7280;
  font-size: 13px;
  line-height: 1.4;
`,Jv=kr.button`
  background: none;
  border: none;
  color: #9ca3af;
  cursor: pointer;
  padding: 4px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  flex-shrink: 0;

  &:hover {
    background: #f3f4f6;
    color: #6b7280;
  }
`,ex=e=>{let{message:t,type:n,isVisible:r,onClose:i,title:o}=e;return(0,Vr.jsx)(Td,{children:r&&(0,Vr.jsx)(Yv,{children:(0,Vr.jsxs)(Kv,{type:n,initial:{opacity:0,x:300,scale:.8},animate:{opacity:1,x:0,scale:1},exit:{opacity:0,x:300,scale:.8},transition:{type:"spring",damping:25,stiffness:300,duration:.3},children:[(0,Vr.jsx)(Gv,{type:n,children:(()=>{switch(n){case"success":return(0,Vr.jsx)(Qf,{size:16});case"error":return(0,Vr.jsx)(Km,{size:16});default:return(0,Vr.jsx)(Pr,{size:16})}})()}),(0,Vr.jsxs)(Qv,{children:[(0,Vr.jsx)(Xv,{children:(()=>{if(o)return o;switch(n){case"success":return"Success";case"error":return"Error";case"info":return"Information";default:return"Notification"}})()}),(0,Vr.jsx)(Zv,{children:t})]}),(0,Vr.jsx)(Jv,{onClick:i,children:(0,Vr.jsx)(Ir,{size:16})})]})})})},tx=Cr("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]),nx=kr.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem;
  background: linear-gradient(135deg, #f8fafc 0%, #fef3c7 100%);
  text-align: center;
`,rx=kr.div`
  background: white;
  border-radius: 16px;
  padding: 3rem 2rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  width: 100%;
  border: 1px solid #e2e8f0;
`,ix=kr.div`
  width: 80px;
  height: 80px;
  background: #fee2e2;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 2rem;
  color: #dc2626;
`,ox=kr.h1`
  font-size: 1.5rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 1rem;
`,ax=kr.p`
  color: #6b7280;
  margin-bottom: 2rem;
  line-height: 1.6;
`,sx=(kr.details`
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 2rem;
  text-align: left;
  font-family: 'Courier New', monospace;
  font-size: 0.875rem;
  color: #374151;
`,kr.summary`
  font-weight: 600;
  color: #1f2937;
  cursor: pointer;
  margin-bottom: 0.5rem;
`,kr.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
`),lx=kr.button`
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border: none;
  font-size: 0.875rem;

  ${e=>"primary"===e.variant?"\n    background: #f59e0b;\n    color: white;\n    \n    &:hover {\n      background: #d97706;\n      transform: translateY(-1px);\n    }\n  ":"\n    background: white;\n    color: #374151;\n    border: 2px solid #e2e8f0;\n    \n    &:hover {\n      background: #f8fafc;\n      border-color: #cbd5e1;\n    }\n  "}
`;class cx extends t.Component{constructor(e){super(e),this.handleRetry=()=>{this.setState({hasError:!1,error:void 0,errorInfo:void 0})},this.handleGoHome=()=>{window.location.href="/"},this.state={hasError:!1}}static getDerivedStateFromError(e){return{hasError:!0,error:e}}componentDidCatch(e,t){console.error("Error caught by boundary:",e,t),this.setState({error:e,errorInfo:t})}render(){return this.state.hasError?this.props.fallback?this.props.fallback:(0,Vr.jsx)(nx,{children:(0,Vr.jsxs)(rx,{children:[(0,Vr.jsx)(ix,{children:(0,Vr.jsx)(tx,{size:40})}),(0,Vr.jsx)(ox,{children:"Oops! Something went wrong"}),(0,Vr.jsx)(ax,{children:"We encountered an unexpected error. Don't worry, our team has been notified and we're working to fix it."}),!1,(0,Vr.jsxs)(sx,{children:[(0,Vr.jsxs)(lx,{variant:"primary",onClick:this.handleRetry,children:[(0,Vr.jsx)(Qm,{size:16}),"Try Again"]}),(0,Vr.jsxs)(lx,{onClick:this.handleGoHome,children:[(0,Vr.jsx)(Ry,{size:16}),"Go Home"]})]})]})}):this.props.children}}const ux=cx;const dx=function(){const[e,n]=(0,t.useState)(()=>{const e=localStorage.getItem("naturesdairy_user");return e?JSON.parse(e):null}),[r,i]=(0,t.useState)(()=>localStorage.getItem("naturesdairy_location")||""),[o,a]=(0,t.useState)(()=>{const e=localStorage.getItem("naturesdairy_cart");return e?JSON.parse(e):[]}),[s,l]=(0,t.useState)(()=>{const e=localStorage.getItem("naturesdairy_orders");if(e){return JSON.parse(e).map(e=>({...e,deliveryDate:new Date(e.deliveryDate),createdAt:new Date(e.createdAt)}))}return[]}),[c,u]=(0,t.useState)(!1),[d]=(0,t.useState)(!0),[p,h]=(0,t.useState)(!1),[f,m]=(0,t.useState)(!1),[g,y]=(0,t.useState)(!1),[v,x]=(0,t.useState)(!1),[b,w]=(0,t.useState)({message:"",type:"info",isVisible:!1});(0,t.useEffect)(()=>{e?localStorage.setItem("naturesdairy_user",JSON.stringify(e)):localStorage.removeItem("naturesdairy_user")},[e]),(0,t.useEffect)(()=>{r?localStorage.setItem("naturesdairy_location",r):localStorage.removeItem("naturesdairy_location")},[r]),(0,t.useEffect)(()=>{localStorage.setItem("naturesdairy_cart",JSON.stringify(o))},[o]),(0,t.useEffect)(()=>{localStorage.setItem("naturesdairy_orders",JSON.stringify(s))},[s]);const k=()=>{h(!1),m(!0)},j=o.reduce((e,t)=>e+t.quantity,0);return(0,Vr.jsx)(ux,{children:(0,Vr.jsx)(Pe,{children:(0,Vr.jsxs)("div",{className:"App",children:[(0,Vr.jsx)(Jr,{user:e,onLogout:()=>{n(null),i(""),a([]),h(!1),m(!1)},cartCount:j,onCartClick:()=>{e?h(!0):y(!0)},onLogin:()=>y(!0)}),(0,Vr.jsx)("div",{style:{marginTop:"100px"},children:(0,Vr.jsxs)(ve,{children:[(0,Vr.jsx)(ge,{path:"/",element:(0,Vr.jsx)(wd,{})}),(0,Vr.jsx)(ge,{path:"/about",element:(0,Vr.jsx)(tp,{})}),(0,Vr.jsx)(ge,{path:"/products",element:(0,Vr.jsx)(Up,{cart:o,setCart:a,showCart:p,setShowCart:h,onPurchaseAttempt:()=>{e?r?h(!0):x(!0):y(!0)},onCheckout:k,user:e})}),(0,Vr.jsx)(ge,{path:"/practices",element:(0,Vr.jsx)(rh,{})}),(0,Vr.jsx)(ge,{path:"/testimonials",element:(0,Vr.jsx)(wh,{})}),(0,Vr.jsx)(ge,{path:"/contact",element:(0,Vr.jsx)(nf,{})}),(0,Vr.jsx)(ge,{path:"/orders",element:e?(0,Vr.jsx)(ly,{user:e,location:r,orders:s}):(0,Vr.jsx)(me,{to:"/"})}),(0,Vr.jsx)(ge,{path:"*",element:(0,Vr.jsx)(me,{to:"/"})})]})}),(0,Vr.jsx)(jf,{}),d?(0,Vr.jsx)(My,{isOpen:c,onToggle:()=>u(!c),user:e}):(0,Vr.jsx)(Ym,{isOpen:c,onToggle:()=>u(!c)}),g&&(0,Vr.jsx)(Gf,{onLogin:e=>{n(e),y(!1),x(!0)},onClose:()=>y(!1)}),v&&e&&(0,Vr.jsx)(Dm,{user:e,onLocationSelect:e=>{i(e),x(!1)},onSkip:()=>{i("Default"),x(!1)},onClose:()=>x(!1)}),(0,Vr.jsx)(qv,{cart:o,setCart:a,isOpen:p,onClose:()=>h(!1),onCheckout:k,user:e}),f&&(0,Vr.jsx)(yv,{cart:o,onClose:()=>m(!1),onOrderComplete:e=>{const t={...e,id:`order_${Date.now()}`,orderNumber:`ORD-${Date.now().toString().slice(-6)}`,trackingNumber:`TRK-${Date.now().toString().slice(-8)}`,createdAt:new Date};l(e=>[t,...e]),a([]),m(!1),w({message:`Order placed successfully! Order Number: ${t.orderNumber}`,type:"success",isVisible:!0,title:"Order Confirmed"})}}),(0,Vr.jsx)(ex,{message:b.message,type:b.type,isVisible:b.isVisible,onClose:()=>w(e=>({...e,isVisible:!1})),title:b.title})]})})})};i.createRoot(document.getElementById("root")).render((0,Vr.jsx)(t.StrictMode,{children:(0,Vr.jsx)(dx,{})}))})()})();
//# sourceMappingURL=main.75bd15f3.js.map