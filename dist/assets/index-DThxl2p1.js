(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function n(a){if(a.ep)return;a.ep=!0;const l=r(a);fetch(a.href,l)}})();function Hc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ks={exports:{}},Na={},js={exports:{}},U={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xn=Symbol.for("react.element"),Qc=Symbol.for("react.portal"),Gc=Symbol.for("react.fragment"),Yc=Symbol.for("react.strict_mode"),Kc=Symbol.for("react.profiler"),Xc=Symbol.for("react.provider"),qc=Symbol.for("react.context"),Zc=Symbol.for("react.forward_ref"),Jc=Symbol.for("react.suspense"),ed=Symbol.for("react.memo"),td=Symbol.for("react.lazy"),di=Symbol.iterator;function rd(e){return e===null||typeof e!="object"?null:(e=di&&e[di]||e["@@iterator"],typeof e=="function"?e:null)}var bs={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ns=Object.assign,Ss={};function Fr(e,t,r){this.props=e,this.context=t,this.refs=Ss,this.updater=r||bs}Fr.prototype.isReactComponent={};Fr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Fr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Cs(){}Cs.prototype=Fr.prototype;function co(e,t,r){this.props=e,this.context=t,this.refs=Ss,this.updater=r||bs}var po=co.prototype=new Cs;po.constructor=co;Ns(po,Fr.prototype);po.isPureReactComponent=!0;var pi=Array.isArray,Es=Object.prototype.hasOwnProperty,fo={current:null},Fs={key:!0,ref:!0,__self:!0,__source:!0};function zs(e,t,r){var n,a={},l=null,i=null;if(t!=null)for(n in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(l=""+t.key),t)Es.call(t,n)&&!Fs.hasOwnProperty(n)&&(a[n]=t[n]);var s=arguments.length-2;if(s===1)a.children=r;else if(1<s){for(var u=Array(s),c=0;c<s;c++)u[c]=arguments[c+2];a.children=u}if(e&&e.defaultProps)for(n in s=e.defaultProps,s)a[n]===void 0&&(a[n]=s[n]);return{$$typeof:xn,type:e,key:l,ref:i,props:a,_owner:fo.current}}function nd(e,t){return{$$typeof:xn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function mo(e){return typeof e=="object"&&e!==null&&e.$$typeof===xn}function ad(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var fi=/\/+/g;function $a(e,t){return typeof e=="object"&&e!==null&&e.key!=null?ad(""+e.key):t.toString(36)}function Bn(e,t,r,n,a){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(l){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case xn:case Qc:i=!0}}if(i)return i=e,a=a(i),e=n===""?"."+$a(i,0):n,pi(a)?(r="",e!=null&&(r=e.replace(fi,"$&/")+"/"),Bn(a,t,r,"",function(c){return c})):a!=null&&(mo(a)&&(a=nd(a,r+(!a.key||i&&i.key===a.key?"":(""+a.key).replace(fi,"$&/")+"/")+e)),t.push(a)),1;if(i=0,n=n===""?".":n+":",pi(e))for(var s=0;s<e.length;s++){l=e[s];var u=n+$a(l,s);i+=Bn(l,t,r,u,a)}else if(u=rd(e),typeof u=="function")for(e=u.call(e),s=0;!(l=e.next()).done;)l=l.value,u=n+$a(l,s++),i+=Bn(l,t,r,u,a);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function Nn(e,t,r){if(e==null)return e;var n=[],a=0;return Bn(e,n,"","",function(l){return t.call(r,l,a++)}),n}function ld(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ke={current:null},Vn={transition:null},od={ReactCurrentDispatcher:ke,ReactCurrentBatchConfig:Vn,ReactCurrentOwner:fo};function Ms(){throw Error("act(...) is not supported in production builds of React.")}U.Children={map:Nn,forEach:function(e,t,r){Nn(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return Nn(e,function(){t++}),t},toArray:function(e){return Nn(e,function(t){return t})||[]},only:function(e){if(!mo(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};U.Component=Fr;U.Fragment=Gc;U.Profiler=Kc;U.PureComponent=co;U.StrictMode=Yc;U.Suspense=Jc;U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=od;U.act=Ms;U.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=Ns({},e.props),a=e.key,l=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,i=fo.current),t.key!==void 0&&(a=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)Es.call(t,u)&&!Fs.hasOwnProperty(u)&&(n[u]=t[u]===void 0&&s!==void 0?s[u]:t[u])}var u=arguments.length-2;if(u===1)n.children=r;else if(1<u){s=Array(u);for(var c=0;c<u;c++)s[c]=arguments[c+2];n.children=s}return{$$typeof:xn,type:e.type,key:a,ref:l,props:n,_owner:i}};U.createContext=function(e){return e={$$typeof:qc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Xc,_context:e},e.Consumer=e};U.createElement=zs;U.createFactory=function(e){var t=zs.bind(null,e);return t.type=e,t};U.createRef=function(){return{current:null}};U.forwardRef=function(e){return{$$typeof:Zc,render:e}};U.isValidElement=mo;U.lazy=function(e){return{$$typeof:td,_payload:{_status:-1,_result:e},_init:ld}};U.memo=function(e,t){return{$$typeof:ed,type:e,compare:t===void 0?null:t}};U.startTransition=function(e){var t=Vn.transition;Vn.transition={};try{e()}finally{Vn.transition=t}};U.unstable_act=Ms;U.useCallback=function(e,t){return ke.current.useCallback(e,t)};U.useContext=function(e){return ke.current.useContext(e)};U.useDebugValue=function(){};U.useDeferredValue=function(e){return ke.current.useDeferredValue(e)};U.useEffect=function(e,t){return ke.current.useEffect(e,t)};U.useId=function(){return ke.current.useId()};U.useImperativeHandle=function(e,t,r){return ke.current.useImperativeHandle(e,t,r)};U.useInsertionEffect=function(e,t){return ke.current.useInsertionEffect(e,t)};U.useLayoutEffect=function(e,t){return ke.current.useLayoutEffect(e,t)};U.useMemo=function(e,t){return ke.current.useMemo(e,t)};U.useReducer=function(e,t,r){return ke.current.useReducer(e,t,r)};U.useRef=function(e){return ke.current.useRef(e)};U.useState=function(e){return ke.current.useState(e)};U.useSyncExternalStore=function(e,t,r){return ke.current.useSyncExternalStore(e,t,r)};U.useTransition=function(){return ke.current.useTransition()};U.version="18.3.1";js.exports=U;var O=js.exports;const Ps=Hc(O);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var id=O,sd=Symbol.for("react.element"),ud=Symbol.for("react.fragment"),cd=Object.prototype.hasOwnProperty,dd=id.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,pd={key:!0,ref:!0,__self:!0,__source:!0};function Ts(e,t,r){var n,a={},l=null,i=null;r!==void 0&&(l=""+r),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(i=t.ref);for(n in t)cd.call(t,n)&&!pd.hasOwnProperty(n)&&(a[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)a[n]===void 0&&(a[n]=t[n]);return{$$typeof:sd,type:e,key:l,ref:i,props:a,_owner:dd.current}}Na.Fragment=ud;Na.jsx=Ts;Na.jsxs=Ts;ks.exports=Na;var o=ks.exports,gl={},_s={exports:{}},Re={},Rs={exports:{}},Ls={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(F,D){var m=F.length;F.push(D);e:for(;0<m;){var d=m-1>>>1,C=F[d];if(0<a(C,D))F[d]=D,F[m]=C,m=d;else break e}}function r(F){return F.length===0?null:F[0]}function n(F){if(F.length===0)return null;var D=F[0],m=F.pop();if(m!==D){F[0]=m;e:for(var d=0,C=F.length,_=C>>>1;d<_;){var R=2*(d+1)-1,I=F[R],L=R+1,T=F[L];if(0>a(I,m))L<C&&0>a(T,I)?(F[d]=T,F[L]=m,d=L):(F[d]=I,F[R]=m,d=R);else if(L<C&&0>a(T,m))F[d]=T,F[L]=m,d=L;else break e}}return D}function a(F,D){var m=F.sortIndex-D.sortIndex;return m!==0?m:F.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var i=Date,s=i.now();e.unstable_now=function(){return i.now()-s}}var u=[],c=[],g=1,y=null,v=3,j=!1,k=!1,b=!1,P=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(F){for(var D=r(c);D!==null;){if(D.callback===null)n(c);else if(D.startTime<=F)n(c),D.sortIndex=D.expirationTime,t(u,D);else break;D=r(c)}}function x(F){if(b=!1,p(F),!k)if(r(u)!==null)k=!0,Zt(S);else{var D=r(c);D!==null&&_r(x,D.startTime-F)}}function S(F,D){k=!1,b&&(b=!1,h(M),M=-1),j=!0;var m=v;try{for(p(D),y=r(u);y!==null&&(!(y.expirationTime>D)||F&&!ze());){var d=y.callback;if(typeof d=="function"){y.callback=null,v=y.priorityLevel;var C=d(y.expirationTime<=D);D=e.unstable_now(),typeof C=="function"?y.callback=C:y===r(u)&&n(u),p(D)}else n(u);y=r(u)}if(y!==null)var _=!0;else{var R=r(c);R!==null&&_r(x,R.startTime-D),_=!1}return _}finally{y=null,v=m,j=!1}}var N=!1,E=null,M=-1,W=5,A=-1;function ze(){return!(e.unstable_now()-A<W)}function Lt(){if(E!==null){var F=e.unstable_now();A=F;var D=!0;try{D=E(!0,F)}finally{D?Dt():(N=!1,E=null)}}else N=!1}var Dt;if(typeof f=="function")Dt=function(){f(Lt)};else if(typeof MessageChannel<"u"){var Pr=new MessageChannel,Tr=Pr.port2;Pr.port1.onmessage=Lt,Dt=function(){Tr.postMessage(null)}}else Dt=function(){P(Lt,0)};function Zt(F){E=F,N||(N=!0,Dt())}function _r(F,D){M=P(function(){F(e.unstable_now())},D)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(F){F.callback=null},e.unstable_continueExecution=function(){k||j||(k=!0,Zt(S))},e.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<F?Math.floor(1e3/F):5},e.unstable_getCurrentPriorityLevel=function(){return v},e.unstable_getFirstCallbackNode=function(){return r(u)},e.unstable_next=function(F){switch(v){case 1:case 2:case 3:var D=3;break;default:D=v}var m=v;v=D;try{return F()}finally{v=m}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(F,D){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var m=v;v=F;try{return D()}finally{v=m}},e.unstable_scheduleCallback=function(F,D,m){var d=e.unstable_now();switch(typeof m=="object"&&m!==null?(m=m.delay,m=typeof m=="number"&&0<m?d+m:d):m=d,F){case 1:var C=-1;break;case 2:C=250;break;case 5:C=1073741823;break;case 4:C=1e4;break;default:C=5e3}return C=m+C,F={id:g++,callback:D,priorityLevel:F,startTime:m,expirationTime:C,sortIndex:-1},m>d?(F.sortIndex=m,t(c,F),r(u)===null&&F===r(c)&&(b?(h(M),M=-1):b=!0,_r(x,m-d))):(F.sortIndex=C,t(u,F),k||j||(k=!0,Zt(S))),F},e.unstable_shouldYield=ze,e.unstable_wrapCallback=function(F){var D=v;return function(){var m=v;v=D;try{return F.apply(this,arguments)}finally{v=m}}}})(Ls);Rs.exports=Ls;var fd=Rs.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var md=O,_e=fd;function w(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ds=new Set,tn={};function Xt(e,t){wr(e,t),wr(e+"Capture",t)}function wr(e,t){for(tn[e]=t,e=0;e<t.length;e++)Ds.add(t[e])}var ut=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),vl=Object.prototype.hasOwnProperty,hd=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,mi={},hi={};function gd(e){return vl.call(hi,e)?!0:vl.call(mi,e)?!1:hd.test(e)?hi[e]=!0:(mi[e]=!0,!1)}function vd(e,t,r,n){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function yd(e,t,r,n){if(t===null||typeof t>"u"||vd(e,t,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function je(e,t,r,n,a,l,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=a,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=i}var me={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){me[e]=new je(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];me[t]=new je(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){me[e]=new je(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){me[e]=new je(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){me[e]=new je(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){me[e]=new je(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){me[e]=new je(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){me[e]=new je(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){me[e]=new je(e,5,!1,e.toLowerCase(),null,!1,!1)});var ho=/[\-:]([a-z])/g;function go(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ho,go);me[t]=new je(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ho,go);me[t]=new je(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ho,go);me[t]=new je(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){me[e]=new je(e,1,!1,e.toLowerCase(),null,!1,!1)});me.xlinkHref=new je("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){me[e]=new je(e,1,!1,e.toLowerCase(),null,!0,!0)});function vo(e,t,r,n){var a=me.hasOwnProperty(t)?me[t]:null;(a!==null?a.type!==0:n||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(yd(t,r,a,n)&&(r=null),n||a===null?gd(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):a.mustUseProperty?e[a.propertyName]=r===null?a.type===3?!1:"":r:(t=a.attributeName,n=a.attributeNamespace,r===null?e.removeAttribute(t):(a=a.type,r=a===3||a===4&&r===!0?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}var ft=md.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Sn=Symbol.for("react.element"),tr=Symbol.for("react.portal"),rr=Symbol.for("react.fragment"),yo=Symbol.for("react.strict_mode"),yl=Symbol.for("react.profiler"),Is=Symbol.for("react.provider"),As=Symbol.for("react.context"),xo=Symbol.for("react.forward_ref"),xl=Symbol.for("react.suspense"),wl=Symbol.for("react.suspense_list"),wo=Symbol.for("react.memo"),ht=Symbol.for("react.lazy"),Os=Symbol.for("react.offscreen"),gi=Symbol.iterator;function Rr(e){return e===null||typeof e!="object"?null:(e=gi&&e[gi]||e["@@iterator"],typeof e=="function"?e:null)}var ee=Object.assign,Wa;function Vr(e){if(Wa===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);Wa=t&&t[1]||""}return`
`+Wa+e}var Ha=!1;function Qa(e,t){if(!e||Ha)return"";Ha=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var n=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){n=c}e.call(t.prototype)}else{try{throw Error()}catch(c){n=c}e()}}catch(c){if(c&&n&&typeof c.stack=="string"){for(var a=c.stack.split(`
`),l=n.stack.split(`
`),i=a.length-1,s=l.length-1;1<=i&&0<=s&&a[i]!==l[s];)s--;for(;1<=i&&0<=s;i--,s--)if(a[i]!==l[s]){if(i!==1||s!==1)do if(i--,s--,0>s||a[i]!==l[s]){var u=`
`+a[i].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=i&&0<=s);break}}}finally{Ha=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?Vr(e):""}function xd(e){switch(e.tag){case 5:return Vr(e.type);case 16:return Vr("Lazy");case 13:return Vr("Suspense");case 19:return Vr("SuspenseList");case 0:case 2:case 15:return e=Qa(e.type,!1),e;case 11:return e=Qa(e.type.render,!1),e;case 1:return e=Qa(e.type,!0),e;default:return""}}function kl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case rr:return"Fragment";case tr:return"Portal";case yl:return"Profiler";case yo:return"StrictMode";case xl:return"Suspense";case wl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case As:return(e.displayName||"Context")+".Consumer";case Is:return(e._context.displayName||"Context")+".Provider";case xo:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case wo:return t=e.displayName||null,t!==null?t:kl(e.type)||"Memo";case ht:t=e._payload,e=e._init;try{return kl(e(t))}catch{}}return null}function wd(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return kl(t);case 8:return t===yo?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function zt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Us(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function kd(e){var t=Us(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var a=r.get,l=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(i){n=""+i,l.call(this,i)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(i){n=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Cn(e){e._valueTracker||(e._valueTracker=kd(e))}function Bs(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=Us(e)?e.checked?"true":"false":e.value),e=n,e!==r?(t.setValue(e),!0):!1}function Jn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function jl(e,t){var r=t.checked;return ee({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function vi(e,t){var r=t.defaultValue==null?"":t.defaultValue,n=t.checked!=null?t.checked:t.defaultChecked;r=zt(t.value!=null?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Vs(e,t){t=t.checked,t!=null&&vo(e,"checked",t,!1)}function bl(e,t){Vs(e,t);var r=zt(t.value),n=t.type;if(r!=null)n==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Nl(e,t.type,r):t.hasOwnProperty("defaultValue")&&Nl(e,t.type,zt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function yi(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!(n!=="submit"&&n!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function Nl(e,t,r){(t!=="number"||Jn(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var $r=Array.isArray;function fr(e,t,r,n){if(e=e.options,t){t={};for(var a=0;a<r.length;a++)t["$"+r[a]]=!0;for(r=0;r<e.length;r++)a=t.hasOwnProperty("$"+e[r].value),e[r].selected!==a&&(e[r].selected=a),a&&n&&(e[r].defaultSelected=!0)}else{for(r=""+zt(r),t=null,a=0;a<e.length;a++){if(e[a].value===r){e[a].selected=!0,n&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function Sl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(w(91));return ee({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function xi(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(w(92));if($r(r)){if(1<r.length)throw Error(w(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:zt(r)}}function $s(e,t){var r=zt(t.value),n=zt(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),n!=null&&(e.defaultValue=""+n)}function wi(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Ws(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Cl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ws(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var En,Hs=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,n,a){MSApp.execUnsafeLocalFunction(function(){return e(t,r,n,a)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(En=En||document.createElement("div"),En.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=En.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function rn(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var Qr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},jd=["Webkit","ms","Moz","O"];Object.keys(Qr).forEach(function(e){jd.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Qr[t]=Qr[e]})});function Qs(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||Qr.hasOwnProperty(e)&&Qr[e]?(""+t).trim():t+"px"}function Gs(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var n=r.indexOf("--")===0,a=Qs(r,t[r],n);r==="float"&&(r="cssFloat"),n?e.setProperty(r,a):e[r]=a}}var bd=ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function El(e,t){if(t){if(bd[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(w(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(w(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(w(61))}if(t.style!=null&&typeof t.style!="object")throw Error(w(62))}}function Fl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var zl=null;function ko(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ml=null,mr=null,hr=null;function ki(e){if(e=jn(e)){if(typeof Ml!="function")throw Error(w(280));var t=e.stateNode;t&&(t=za(t),Ml(e.stateNode,e.type,t))}}function Ys(e){mr?hr?hr.push(e):hr=[e]:mr=e}function Ks(){if(mr){var e=mr,t=hr;if(hr=mr=null,ki(e),t)for(e=0;e<t.length;e++)ki(t[e])}}function Xs(e,t){return e(t)}function qs(){}var Ga=!1;function Zs(e,t,r){if(Ga)return e(t,r);Ga=!0;try{return Xs(e,t,r)}finally{Ga=!1,(mr!==null||hr!==null)&&(qs(),Ks())}}function nn(e,t){var r=e.stateNode;if(r===null)return null;var n=za(r);if(n===null)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(w(231,t,typeof r));return r}var Pl=!1;if(ut)try{var Lr={};Object.defineProperty(Lr,"passive",{get:function(){Pl=!0}}),window.addEventListener("test",Lr,Lr),window.removeEventListener("test",Lr,Lr)}catch{Pl=!1}function Nd(e,t,r,n,a,l,i,s,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(r,c)}catch(g){this.onError(g)}}var Gr=!1,ea=null,ta=!1,Tl=null,Sd={onError:function(e){Gr=!0,ea=e}};function Cd(e,t,r,n,a,l,i,s,u){Gr=!1,ea=null,Nd.apply(Sd,arguments)}function Ed(e,t,r,n,a,l,i,s,u){if(Cd.apply(this,arguments),Gr){if(Gr){var c=ea;Gr=!1,ea=null}else throw Error(w(198));ta||(ta=!0,Tl=c)}}function qt(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function Js(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ji(e){if(qt(e)!==e)throw Error(w(188))}function Fd(e){var t=e.alternate;if(!t){if(t=qt(e),t===null)throw Error(w(188));return t!==e?null:e}for(var r=e,n=t;;){var a=r.return;if(a===null)break;var l=a.alternate;if(l===null){if(n=a.return,n!==null){r=n;continue}break}if(a.child===l.child){for(l=a.child;l;){if(l===r)return ji(a),e;if(l===n)return ji(a),t;l=l.sibling}throw Error(w(188))}if(r.return!==n.return)r=a,n=l;else{for(var i=!1,s=a.child;s;){if(s===r){i=!0,r=a,n=l;break}if(s===n){i=!0,n=a,r=l;break}s=s.sibling}if(!i){for(s=l.child;s;){if(s===r){i=!0,r=l,n=a;break}if(s===n){i=!0,n=l,r=a;break}s=s.sibling}if(!i)throw Error(w(189))}}if(r.alternate!==n)throw Error(w(190))}if(r.tag!==3)throw Error(w(188));return r.stateNode.current===r?e:t}function eu(e){return e=Fd(e),e!==null?tu(e):null}function tu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=tu(e);if(t!==null)return t;e=e.sibling}return null}var ru=_e.unstable_scheduleCallback,bi=_e.unstable_cancelCallback,zd=_e.unstable_shouldYield,Md=_e.unstable_requestPaint,ae=_e.unstable_now,Pd=_e.unstable_getCurrentPriorityLevel,jo=_e.unstable_ImmediatePriority,nu=_e.unstable_UserBlockingPriority,ra=_e.unstable_NormalPriority,Td=_e.unstable_LowPriority,au=_e.unstable_IdlePriority,Sa=null,tt=null;function _d(e){if(tt&&typeof tt.onCommitFiberRoot=="function")try{tt.onCommitFiberRoot(Sa,e,void 0,(e.current.flags&128)===128)}catch{}}var Ye=Math.clz32?Math.clz32:Dd,Rd=Math.log,Ld=Math.LN2;function Dd(e){return e>>>=0,e===0?32:31-(Rd(e)/Ld|0)|0}var Fn=64,zn=4194304;function Wr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function na(e,t){var r=e.pendingLanes;if(r===0)return 0;var n=0,a=e.suspendedLanes,l=e.pingedLanes,i=r&268435455;if(i!==0){var s=i&~a;s!==0?n=Wr(s):(l&=i,l!==0&&(n=Wr(l)))}else i=r&~a,i!==0?n=Wr(i):l!==0&&(n=Wr(l));if(n===0)return 0;if(t!==0&&t!==n&&!(t&a)&&(a=n&-n,l=t&-t,a>=l||a===16&&(l&4194240)!==0))return t;if(n&4&&(n|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=n;0<t;)r=31-Ye(t),a=1<<r,n|=e[r],t&=~a;return n}function Id(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ad(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,a=e.expirationTimes,l=e.pendingLanes;0<l;){var i=31-Ye(l),s=1<<i,u=a[i];u===-1?(!(s&r)||s&n)&&(a[i]=Id(s,t)):u<=t&&(e.expiredLanes|=s),l&=~s}}function _l(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function lu(){var e=Fn;return Fn<<=1,!(Fn&4194240)&&(Fn=64),e}function Ya(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function wn(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ye(t),e[t]=r}function Od(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<r;){var a=31-Ye(r),l=1<<a;t[a]=0,n[a]=-1,e[a]=-1,r&=~l}}function bo(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-Ye(r),a=1<<n;a&t|e[n]&t&&(e[n]|=t),r&=~a}}var H=0;function ou(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var iu,No,su,uu,cu,Rl=!1,Mn=[],kt=null,jt=null,bt=null,an=new Map,ln=new Map,vt=[],Ud="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ni(e,t){switch(e){case"focusin":case"focusout":kt=null;break;case"dragenter":case"dragleave":jt=null;break;case"mouseover":case"mouseout":bt=null;break;case"pointerover":case"pointerout":an.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ln.delete(t.pointerId)}}function Dr(e,t,r,n,a,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:l,targetContainers:[a]},t!==null&&(t=jn(t),t!==null&&No(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function Bd(e,t,r,n,a){switch(t){case"focusin":return kt=Dr(kt,e,t,r,n,a),!0;case"dragenter":return jt=Dr(jt,e,t,r,n,a),!0;case"mouseover":return bt=Dr(bt,e,t,r,n,a),!0;case"pointerover":var l=a.pointerId;return an.set(l,Dr(an.get(l)||null,e,t,r,n,a)),!0;case"gotpointercapture":return l=a.pointerId,ln.set(l,Dr(ln.get(l)||null,e,t,r,n,a)),!0}return!1}function du(e){var t=Ut(e.target);if(t!==null){var r=qt(t);if(r!==null){if(t=r.tag,t===13){if(t=Js(r),t!==null){e.blockedOn=t,cu(e.priority,function(){su(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function $n(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=Ll(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var n=new r.constructor(r.type,r);zl=n,r.target.dispatchEvent(n),zl=null}else return t=jn(r),t!==null&&No(t),e.blockedOn=r,!1;t.shift()}return!0}function Si(e,t,r){$n(e)&&r.delete(t)}function Vd(){Rl=!1,kt!==null&&$n(kt)&&(kt=null),jt!==null&&$n(jt)&&(jt=null),bt!==null&&$n(bt)&&(bt=null),an.forEach(Si),ln.forEach(Si)}function Ir(e,t){e.blockedOn===t&&(e.blockedOn=null,Rl||(Rl=!0,_e.unstable_scheduleCallback(_e.unstable_NormalPriority,Vd)))}function on(e){function t(a){return Ir(a,e)}if(0<Mn.length){Ir(Mn[0],e);for(var r=1;r<Mn.length;r++){var n=Mn[r];n.blockedOn===e&&(n.blockedOn=null)}}for(kt!==null&&Ir(kt,e),jt!==null&&Ir(jt,e),bt!==null&&Ir(bt,e),an.forEach(t),ln.forEach(t),r=0;r<vt.length;r++)n=vt[r],n.blockedOn===e&&(n.blockedOn=null);for(;0<vt.length&&(r=vt[0],r.blockedOn===null);)du(r),r.blockedOn===null&&vt.shift()}var gr=ft.ReactCurrentBatchConfig,aa=!0;function $d(e,t,r,n){var a=H,l=gr.transition;gr.transition=null;try{H=1,So(e,t,r,n)}finally{H=a,gr.transition=l}}function Wd(e,t,r,n){var a=H,l=gr.transition;gr.transition=null;try{H=4,So(e,t,r,n)}finally{H=a,gr.transition=l}}function So(e,t,r,n){if(aa){var a=Ll(e,t,r,n);if(a===null)al(e,t,n,la,r),Ni(e,n);else if(Bd(a,e,t,r,n))n.stopPropagation();else if(Ni(e,n),t&4&&-1<Ud.indexOf(e)){for(;a!==null;){var l=jn(a);if(l!==null&&iu(l),l=Ll(e,t,r,n),l===null&&al(e,t,n,la,r),l===a)break;a=l}a!==null&&n.stopPropagation()}else al(e,t,n,null,r)}}var la=null;function Ll(e,t,r,n){if(la=null,e=ko(n),e=Ut(e),e!==null)if(t=qt(e),t===null)e=null;else if(r=t.tag,r===13){if(e=Js(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return la=e,null}function pu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Pd()){case jo:return 1;case nu:return 4;case ra:case Td:return 16;case au:return 536870912;default:return 16}default:return 16}}var xt=null,Co=null,Wn=null;function fu(){if(Wn)return Wn;var e,t=Co,r=t.length,n,a="value"in xt?xt.value:xt.textContent,l=a.length;for(e=0;e<r&&t[e]===a[e];e++);var i=r-e;for(n=1;n<=i&&t[r-n]===a[l-n];n++);return Wn=a.slice(e,1<n?1-n:void 0)}function Hn(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Pn(){return!0}function Ci(){return!1}function Le(e){function t(r,n,a,l,i){this._reactName=r,this._targetInst=a,this.type=n,this.nativeEvent=l,this.target=i,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(r=e[s],this[s]=r?r(l):l[s]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Pn:Ci,this.isPropagationStopped=Ci,this}return ee(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Pn)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Pn)},persist:function(){},isPersistent:Pn}),t}var zr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Eo=Le(zr),kn=ee({},zr,{view:0,detail:0}),Hd=Le(kn),Ka,Xa,Ar,Ca=ee({},kn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Fo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ar&&(Ar&&e.type==="mousemove"?(Ka=e.screenX-Ar.screenX,Xa=e.screenY-Ar.screenY):Xa=Ka=0,Ar=e),Ka)},movementY:function(e){return"movementY"in e?e.movementY:Xa}}),Ei=Le(Ca),Qd=ee({},Ca,{dataTransfer:0}),Gd=Le(Qd),Yd=ee({},kn,{relatedTarget:0}),qa=Le(Yd),Kd=ee({},zr,{animationName:0,elapsedTime:0,pseudoElement:0}),Xd=Le(Kd),qd=ee({},zr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Zd=Le(qd),Jd=ee({},zr,{data:0}),Fi=Le(Jd),ep={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},tp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},rp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function np(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=rp[e])?!!t[e]:!1}function Fo(){return np}var ap=ee({},kn,{key:function(e){if(e.key){var t=ep[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Hn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?tp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Fo,charCode:function(e){return e.type==="keypress"?Hn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Hn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),lp=Le(ap),op=ee({},Ca,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),zi=Le(op),ip=ee({},kn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Fo}),sp=Le(ip),up=ee({},zr,{propertyName:0,elapsedTime:0,pseudoElement:0}),cp=Le(up),dp=ee({},Ca,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),pp=Le(dp),fp=[9,13,27,32],zo=ut&&"CompositionEvent"in window,Yr=null;ut&&"documentMode"in document&&(Yr=document.documentMode);var mp=ut&&"TextEvent"in window&&!Yr,mu=ut&&(!zo||Yr&&8<Yr&&11>=Yr),Mi=" ",Pi=!1;function hu(e,t){switch(e){case"keyup":return fp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function gu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var nr=!1;function hp(e,t){switch(e){case"compositionend":return gu(t);case"keypress":return t.which!==32?null:(Pi=!0,Mi);case"textInput":return e=t.data,e===Mi&&Pi?null:e;default:return null}}function gp(e,t){if(nr)return e==="compositionend"||!zo&&hu(e,t)?(e=fu(),Wn=Co=xt=null,nr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return mu&&t.locale!=="ko"?null:t.data;default:return null}}var vp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ti(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!vp[e.type]:t==="textarea"}function vu(e,t,r,n){Ys(n),t=oa(t,"onChange"),0<t.length&&(r=new Eo("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var Kr=null,sn=null;function yp(e){Fu(e,0)}function Ea(e){var t=or(e);if(Bs(t))return e}function xp(e,t){if(e==="change")return t}var yu=!1;if(ut){var Za;if(ut){var Ja="oninput"in document;if(!Ja){var _i=document.createElement("div");_i.setAttribute("oninput","return;"),Ja=typeof _i.oninput=="function"}Za=Ja}else Za=!1;yu=Za&&(!document.documentMode||9<document.documentMode)}function Ri(){Kr&&(Kr.detachEvent("onpropertychange",xu),sn=Kr=null)}function xu(e){if(e.propertyName==="value"&&Ea(sn)){var t=[];vu(t,sn,e,ko(e)),Zs(yp,t)}}function wp(e,t,r){e==="focusin"?(Ri(),Kr=t,sn=r,Kr.attachEvent("onpropertychange",xu)):e==="focusout"&&Ri()}function kp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ea(sn)}function jp(e,t){if(e==="click")return Ea(t)}function bp(e,t){if(e==="input"||e==="change")return Ea(t)}function Np(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Xe=typeof Object.is=="function"?Object.is:Np;function un(e,t){if(Xe(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var a=r[n];if(!vl.call(t,a)||!Xe(e[a],t[a]))return!1}return!0}function Li(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Di(e,t){var r=Li(e);e=0;for(var n;r;){if(r.nodeType===3){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Li(r)}}function wu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?wu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ku(){for(var e=window,t=Jn();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=Jn(e.document)}return t}function Mo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Sp(e){var t=ku(),r=e.focusedElem,n=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&wu(r.ownerDocument.documentElement,r)){if(n!==null&&Mo(r)){if(t=n.start,e=n.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=r.textContent.length,l=Math.min(n.start,a);n=n.end===void 0?l:Math.min(n.end,a),!e.extend&&l>n&&(a=n,n=l,l=a),a=Di(r,l);var i=Di(r,n);a&&i&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),l>n?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Cp=ut&&"documentMode"in document&&11>=document.documentMode,ar=null,Dl=null,Xr=null,Il=!1;function Ii(e,t,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Il||ar==null||ar!==Jn(n)||(n=ar,"selectionStart"in n&&Mo(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Xr&&un(Xr,n)||(Xr=n,n=oa(Dl,"onSelect"),0<n.length&&(t=new Eo("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=ar)))}function Tn(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var lr={animationend:Tn("Animation","AnimationEnd"),animationiteration:Tn("Animation","AnimationIteration"),animationstart:Tn("Animation","AnimationStart"),transitionend:Tn("Transition","TransitionEnd")},el={},ju={};ut&&(ju=document.createElement("div").style,"AnimationEvent"in window||(delete lr.animationend.animation,delete lr.animationiteration.animation,delete lr.animationstart.animation),"TransitionEvent"in window||delete lr.transitionend.transition);function Fa(e){if(el[e])return el[e];if(!lr[e])return e;var t=lr[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in ju)return el[e]=t[r];return e}var bu=Fa("animationend"),Nu=Fa("animationiteration"),Su=Fa("animationstart"),Cu=Fa("transitionend"),Eu=new Map,Ai="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Pt(e,t){Eu.set(e,t),Xt(t,[e])}for(var tl=0;tl<Ai.length;tl++){var rl=Ai[tl],Ep=rl.toLowerCase(),Fp=rl[0].toUpperCase()+rl.slice(1);Pt(Ep,"on"+Fp)}Pt(bu,"onAnimationEnd");Pt(Nu,"onAnimationIteration");Pt(Su,"onAnimationStart");Pt("dblclick","onDoubleClick");Pt("focusin","onFocus");Pt("focusout","onBlur");Pt(Cu,"onTransitionEnd");wr("onMouseEnter",["mouseout","mouseover"]);wr("onMouseLeave",["mouseout","mouseover"]);wr("onPointerEnter",["pointerout","pointerover"]);wr("onPointerLeave",["pointerout","pointerover"]);Xt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Xt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Xt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Xt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Xt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Xt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Hr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),zp=new Set("cancel close invalid load scroll toggle".split(" ").concat(Hr));function Oi(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,Ed(n,t,void 0,e),e.currentTarget=null}function Fu(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var n=e[r],a=n.event;n=n.listeners;e:{var l=void 0;if(t)for(var i=n.length-1;0<=i;i--){var s=n[i],u=s.instance,c=s.currentTarget;if(s=s.listener,u!==l&&a.isPropagationStopped())break e;Oi(a,s,c),l=u}else for(i=0;i<n.length;i++){if(s=n[i],u=s.instance,c=s.currentTarget,s=s.listener,u!==l&&a.isPropagationStopped())break e;Oi(a,s,c),l=u}}}if(ta)throw e=Tl,ta=!1,Tl=null,e}function K(e,t){var r=t[Vl];r===void 0&&(r=t[Vl]=new Set);var n=e+"__bubble";r.has(n)||(zu(t,e,2,!1),r.add(n))}function nl(e,t,r){var n=0;t&&(n|=4),zu(r,e,n,t)}var _n="_reactListening"+Math.random().toString(36).slice(2);function cn(e){if(!e[_n]){e[_n]=!0,Ds.forEach(function(r){r!=="selectionchange"&&(zp.has(r)||nl(r,!1,e),nl(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[_n]||(t[_n]=!0,nl("selectionchange",!1,t))}}function zu(e,t,r,n){switch(pu(t)){case 1:var a=$d;break;case 4:a=Wd;break;default:a=So}r=a.bind(null,t,r,e),a=void 0,!Pl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),n?a!==void 0?e.addEventListener(t,r,{capture:!0,passive:a}):e.addEventListener(t,r,!0):a!==void 0?e.addEventListener(t,r,{passive:a}):e.addEventListener(t,r,!1)}function al(e,t,r,n,a){var l=n;if(!(t&1)&&!(t&2)&&n!==null)e:for(;;){if(n===null)return;var i=n.tag;if(i===3||i===4){var s=n.stateNode.containerInfo;if(s===a||s.nodeType===8&&s.parentNode===a)break;if(i===4)for(i=n.return;i!==null;){var u=i.tag;if((u===3||u===4)&&(u=i.stateNode.containerInfo,u===a||u.nodeType===8&&u.parentNode===a))return;i=i.return}for(;s!==null;){if(i=Ut(s),i===null)return;if(u=i.tag,u===5||u===6){n=l=i;continue e}s=s.parentNode}}n=n.return}Zs(function(){var c=l,g=ko(r),y=[];e:{var v=Eu.get(e);if(v!==void 0){var j=Eo,k=e;switch(e){case"keypress":if(Hn(r)===0)break e;case"keydown":case"keyup":j=lp;break;case"focusin":k="focus",j=qa;break;case"focusout":k="blur",j=qa;break;case"beforeblur":case"afterblur":j=qa;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":j=Ei;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":j=Gd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":j=sp;break;case bu:case Nu:case Su:j=Xd;break;case Cu:j=cp;break;case"scroll":j=Hd;break;case"wheel":j=pp;break;case"copy":case"cut":case"paste":j=Zd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":j=zi}var b=(t&4)!==0,P=!b&&e==="scroll",h=b?v!==null?v+"Capture":null:v;b=[];for(var f=c,p;f!==null;){p=f;var x=p.stateNode;if(p.tag===5&&x!==null&&(p=x,h!==null&&(x=nn(f,h),x!=null&&b.push(dn(f,x,p)))),P)break;f=f.return}0<b.length&&(v=new j(v,k,null,r,g),y.push({event:v,listeners:b}))}}if(!(t&7)){e:{if(v=e==="mouseover"||e==="pointerover",j=e==="mouseout"||e==="pointerout",v&&r!==zl&&(k=r.relatedTarget||r.fromElement)&&(Ut(k)||k[ct]))break e;if((j||v)&&(v=g.window===g?g:(v=g.ownerDocument)?v.defaultView||v.parentWindow:window,j?(k=r.relatedTarget||r.toElement,j=c,k=k?Ut(k):null,k!==null&&(P=qt(k),k!==P||k.tag!==5&&k.tag!==6)&&(k=null)):(j=null,k=c),j!==k)){if(b=Ei,x="onMouseLeave",h="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(b=zi,x="onPointerLeave",h="onPointerEnter",f="pointer"),P=j==null?v:or(j),p=k==null?v:or(k),v=new b(x,f+"leave",j,r,g),v.target=P,v.relatedTarget=p,x=null,Ut(g)===c&&(b=new b(h,f+"enter",k,r,g),b.target=p,b.relatedTarget=P,x=b),P=x,j&&k)t:{for(b=j,h=k,f=0,p=b;p;p=Jt(p))f++;for(p=0,x=h;x;x=Jt(x))p++;for(;0<f-p;)b=Jt(b),f--;for(;0<p-f;)h=Jt(h),p--;for(;f--;){if(b===h||h!==null&&b===h.alternate)break t;b=Jt(b),h=Jt(h)}b=null}else b=null;j!==null&&Ui(y,v,j,b,!1),k!==null&&P!==null&&Ui(y,P,k,b,!0)}}e:{if(v=c?or(c):window,j=v.nodeName&&v.nodeName.toLowerCase(),j==="select"||j==="input"&&v.type==="file")var S=xp;else if(Ti(v))if(yu)S=bp;else{S=kp;var N=wp}else(j=v.nodeName)&&j.toLowerCase()==="input"&&(v.type==="checkbox"||v.type==="radio")&&(S=jp);if(S&&(S=S(e,c))){vu(y,S,r,g);break e}N&&N(e,v,c),e==="focusout"&&(N=v._wrapperState)&&N.controlled&&v.type==="number"&&Nl(v,"number",v.value)}switch(N=c?or(c):window,e){case"focusin":(Ti(N)||N.contentEditable==="true")&&(ar=N,Dl=c,Xr=null);break;case"focusout":Xr=Dl=ar=null;break;case"mousedown":Il=!0;break;case"contextmenu":case"mouseup":case"dragend":Il=!1,Ii(y,r,g);break;case"selectionchange":if(Cp)break;case"keydown":case"keyup":Ii(y,r,g)}var E;if(zo)e:{switch(e){case"compositionstart":var M="onCompositionStart";break e;case"compositionend":M="onCompositionEnd";break e;case"compositionupdate":M="onCompositionUpdate";break e}M=void 0}else nr?hu(e,r)&&(M="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(M="onCompositionStart");M&&(mu&&r.locale!=="ko"&&(nr||M!=="onCompositionStart"?M==="onCompositionEnd"&&nr&&(E=fu()):(xt=g,Co="value"in xt?xt.value:xt.textContent,nr=!0)),N=oa(c,M),0<N.length&&(M=new Fi(M,e,null,r,g),y.push({event:M,listeners:N}),E?M.data=E:(E=gu(r),E!==null&&(M.data=E)))),(E=mp?hp(e,r):gp(e,r))&&(c=oa(c,"onBeforeInput"),0<c.length&&(g=new Fi("onBeforeInput","beforeinput",null,r,g),y.push({event:g,listeners:c}),g.data=E))}Fu(y,t)})}function dn(e,t,r){return{instance:e,listener:t,currentTarget:r}}function oa(e,t){for(var r=t+"Capture",n=[];e!==null;){var a=e,l=a.stateNode;a.tag===5&&l!==null&&(a=l,l=nn(e,r),l!=null&&n.unshift(dn(e,l,a)),l=nn(e,t),l!=null&&n.push(dn(e,l,a))),e=e.return}return n}function Jt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ui(e,t,r,n,a){for(var l=t._reactName,i=[];r!==null&&r!==n;){var s=r,u=s.alternate,c=s.stateNode;if(u!==null&&u===n)break;s.tag===5&&c!==null&&(s=c,a?(u=nn(r,l),u!=null&&i.unshift(dn(r,u,s))):a||(u=nn(r,l),u!=null&&i.push(dn(r,u,s)))),r=r.return}i.length!==0&&e.push({event:t,listeners:i})}var Mp=/\r\n?/g,Pp=/\u0000|\uFFFD/g;function Bi(e){return(typeof e=="string"?e:""+e).replace(Mp,`
`).replace(Pp,"")}function Rn(e,t,r){if(t=Bi(t),Bi(e)!==t&&r)throw Error(w(425))}function ia(){}var Al=null,Ol=null;function Ul(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Bl=typeof setTimeout=="function"?setTimeout:void 0,Tp=typeof clearTimeout=="function"?clearTimeout:void 0,Vi=typeof Promise=="function"?Promise:void 0,_p=typeof queueMicrotask=="function"?queueMicrotask:typeof Vi<"u"?function(e){return Vi.resolve(null).then(e).catch(Rp)}:Bl;function Rp(e){setTimeout(function(){throw e})}function ll(e,t){var r=t,n=0;do{var a=r.nextSibling;if(e.removeChild(r),a&&a.nodeType===8)if(r=a.data,r==="/$"){if(n===0){e.removeChild(a),on(t);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=a}while(r);on(t)}function Nt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function $i(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var Mr=Math.random().toString(36).slice(2),et="__reactFiber$"+Mr,pn="__reactProps$"+Mr,ct="__reactContainer$"+Mr,Vl="__reactEvents$"+Mr,Lp="__reactListeners$"+Mr,Dp="__reactHandles$"+Mr;function Ut(e){var t=e[et];if(t)return t;for(var r=e.parentNode;r;){if(t=r[ct]||r[et]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=$i(e);e!==null;){if(r=e[et])return r;e=$i(e)}return t}e=r,r=e.parentNode}return null}function jn(e){return e=e[et]||e[ct],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function or(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(w(33))}function za(e){return e[pn]||null}var $l=[],ir=-1;function Tt(e){return{current:e}}function X(e){0>ir||(e.current=$l[ir],$l[ir]=null,ir--)}function G(e,t){ir++,$l[ir]=e.current,e.current=t}var Mt={},ye=Tt(Mt),Ce=Tt(!1),Ht=Mt;function kr(e,t){var r=e.type.contextTypes;if(!r)return Mt;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var a={},l;for(l in r)a[l]=t[l];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function Ee(e){return e=e.childContextTypes,e!=null}function sa(){X(Ce),X(ye)}function Wi(e,t,r){if(ye.current!==Mt)throw Error(w(168));G(ye,t),G(Ce,r)}function Mu(e,t,r){var n=e.stateNode;if(t=t.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var a in n)if(!(a in t))throw Error(w(108,wd(e)||"Unknown",a));return ee({},r,n)}function ua(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Mt,Ht=ye.current,G(ye,e),G(Ce,Ce.current),!0}function Hi(e,t,r){var n=e.stateNode;if(!n)throw Error(w(169));r?(e=Mu(e,t,Ht),n.__reactInternalMemoizedMergedChildContext=e,X(Ce),X(ye),G(ye,e)):X(Ce),G(Ce,r)}var lt=null,Ma=!1,ol=!1;function Pu(e){lt===null?lt=[e]:lt.push(e)}function Ip(e){Ma=!0,Pu(e)}function _t(){if(!ol&&lt!==null){ol=!0;var e=0,t=H;try{var r=lt;for(H=1;e<r.length;e++){var n=r[e];do n=n(!0);while(n!==null)}lt=null,Ma=!1}catch(a){throw lt!==null&&(lt=lt.slice(e+1)),ru(jo,_t),a}finally{H=t,ol=!1}}return null}var sr=[],ur=0,ca=null,da=0,De=[],Ie=0,Qt=null,ot=1,it="";function At(e,t){sr[ur++]=da,sr[ur++]=ca,ca=e,da=t}function Tu(e,t,r){De[Ie++]=ot,De[Ie++]=it,De[Ie++]=Qt,Qt=e;var n=ot;e=it;var a=32-Ye(n)-1;n&=~(1<<a),r+=1;var l=32-Ye(t)+a;if(30<l){var i=a-a%5;l=(n&(1<<i)-1).toString(32),n>>=i,a-=i,ot=1<<32-Ye(t)+a|r<<a|n,it=l+e}else ot=1<<l|r<<a|n,it=e}function Po(e){e.return!==null&&(At(e,1),Tu(e,1,0))}function To(e){for(;e===ca;)ca=sr[--ur],sr[ur]=null,da=sr[--ur],sr[ur]=null;for(;e===Qt;)Qt=De[--Ie],De[Ie]=null,it=De[--Ie],De[Ie]=null,ot=De[--Ie],De[Ie]=null}var Te=null,Pe=null,q=!1,Ge=null;function _u(e,t){var r=Ae(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function Qi(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Te=e,Pe=Nt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Te=e,Pe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=Qt!==null?{id:ot,overflow:it}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=Ae(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,Te=e,Pe=null,!0):!1;default:return!1}}function Wl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Hl(e){if(q){var t=Pe;if(t){var r=t;if(!Qi(e,t)){if(Wl(e))throw Error(w(418));t=Nt(r.nextSibling);var n=Te;t&&Qi(e,t)?_u(n,r):(e.flags=e.flags&-4097|2,q=!1,Te=e)}}else{if(Wl(e))throw Error(w(418));e.flags=e.flags&-4097|2,q=!1,Te=e}}}function Gi(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Te=e}function Ln(e){if(e!==Te)return!1;if(!q)return Gi(e),q=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ul(e.type,e.memoizedProps)),t&&(t=Pe)){if(Wl(e))throw Ru(),Error(w(418));for(;t;)_u(e,t),t=Nt(t.nextSibling)}if(Gi(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(w(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){Pe=Nt(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}Pe=null}}else Pe=Te?Nt(e.stateNode.nextSibling):null;return!0}function Ru(){for(var e=Pe;e;)e=Nt(e.nextSibling)}function jr(){Pe=Te=null,q=!1}function _o(e){Ge===null?Ge=[e]:Ge.push(e)}var Ap=ft.ReactCurrentBatchConfig;function Or(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(w(309));var n=r.stateNode}if(!n)throw Error(w(147,e));var a=n,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(i){var s=a.refs;i===null?delete s[l]:s[l]=i},t._stringRef=l,t)}if(typeof e!="string")throw Error(w(284));if(!r._owner)throw Error(w(290,e))}return e}function Dn(e,t){throw e=Object.prototype.toString.call(t),Error(w(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Yi(e){var t=e._init;return t(e._payload)}function Lu(e){function t(h,f){if(e){var p=h.deletions;p===null?(h.deletions=[f],h.flags|=16):p.push(f)}}function r(h,f){if(!e)return null;for(;f!==null;)t(h,f),f=f.sibling;return null}function n(h,f){for(h=new Map;f!==null;)f.key!==null?h.set(f.key,f):h.set(f.index,f),f=f.sibling;return h}function a(h,f){return h=Ft(h,f),h.index=0,h.sibling=null,h}function l(h,f,p){return h.index=p,e?(p=h.alternate,p!==null?(p=p.index,p<f?(h.flags|=2,f):p):(h.flags|=2,f)):(h.flags|=1048576,f)}function i(h){return e&&h.alternate===null&&(h.flags|=2),h}function s(h,f,p,x){return f===null||f.tag!==6?(f=fl(p,h.mode,x),f.return=h,f):(f=a(f,p),f.return=h,f)}function u(h,f,p,x){var S=p.type;return S===rr?g(h,f,p.props.children,x,p.key):f!==null&&(f.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===ht&&Yi(S)===f.type)?(x=a(f,p.props),x.ref=Or(h,f,p),x.return=h,x):(x=Zn(p.type,p.key,p.props,null,h.mode,x),x.ref=Or(h,f,p),x.return=h,x)}function c(h,f,p,x){return f===null||f.tag!==4||f.stateNode.containerInfo!==p.containerInfo||f.stateNode.implementation!==p.implementation?(f=ml(p,h.mode,x),f.return=h,f):(f=a(f,p.children||[]),f.return=h,f)}function g(h,f,p,x,S){return f===null||f.tag!==7?(f=Wt(p,h.mode,x,S),f.return=h,f):(f=a(f,p),f.return=h,f)}function y(h,f,p){if(typeof f=="string"&&f!==""||typeof f=="number")return f=fl(""+f,h.mode,p),f.return=h,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Sn:return p=Zn(f.type,f.key,f.props,null,h.mode,p),p.ref=Or(h,null,f),p.return=h,p;case tr:return f=ml(f,h.mode,p),f.return=h,f;case ht:var x=f._init;return y(h,x(f._payload),p)}if($r(f)||Rr(f))return f=Wt(f,h.mode,p,null),f.return=h,f;Dn(h,f)}return null}function v(h,f,p,x){var S=f!==null?f.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return S!==null?null:s(h,f,""+p,x);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Sn:return p.key===S?u(h,f,p,x):null;case tr:return p.key===S?c(h,f,p,x):null;case ht:return S=p._init,v(h,f,S(p._payload),x)}if($r(p)||Rr(p))return S!==null?null:g(h,f,p,x,null);Dn(h,p)}return null}function j(h,f,p,x,S){if(typeof x=="string"&&x!==""||typeof x=="number")return h=h.get(p)||null,s(f,h,""+x,S);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Sn:return h=h.get(x.key===null?p:x.key)||null,u(f,h,x,S);case tr:return h=h.get(x.key===null?p:x.key)||null,c(f,h,x,S);case ht:var N=x._init;return j(h,f,p,N(x._payload),S)}if($r(x)||Rr(x))return h=h.get(p)||null,g(f,h,x,S,null);Dn(f,x)}return null}function k(h,f,p,x){for(var S=null,N=null,E=f,M=f=0,W=null;E!==null&&M<p.length;M++){E.index>M?(W=E,E=null):W=E.sibling;var A=v(h,E,p[M],x);if(A===null){E===null&&(E=W);break}e&&E&&A.alternate===null&&t(h,E),f=l(A,f,M),N===null?S=A:N.sibling=A,N=A,E=W}if(M===p.length)return r(h,E),q&&At(h,M),S;if(E===null){for(;M<p.length;M++)E=y(h,p[M],x),E!==null&&(f=l(E,f,M),N===null?S=E:N.sibling=E,N=E);return q&&At(h,M),S}for(E=n(h,E);M<p.length;M++)W=j(E,h,M,p[M],x),W!==null&&(e&&W.alternate!==null&&E.delete(W.key===null?M:W.key),f=l(W,f,M),N===null?S=W:N.sibling=W,N=W);return e&&E.forEach(function(ze){return t(h,ze)}),q&&At(h,M),S}function b(h,f,p,x){var S=Rr(p);if(typeof S!="function")throw Error(w(150));if(p=S.call(p),p==null)throw Error(w(151));for(var N=S=null,E=f,M=f=0,W=null,A=p.next();E!==null&&!A.done;M++,A=p.next()){E.index>M?(W=E,E=null):W=E.sibling;var ze=v(h,E,A.value,x);if(ze===null){E===null&&(E=W);break}e&&E&&ze.alternate===null&&t(h,E),f=l(ze,f,M),N===null?S=ze:N.sibling=ze,N=ze,E=W}if(A.done)return r(h,E),q&&At(h,M),S;if(E===null){for(;!A.done;M++,A=p.next())A=y(h,A.value,x),A!==null&&(f=l(A,f,M),N===null?S=A:N.sibling=A,N=A);return q&&At(h,M),S}for(E=n(h,E);!A.done;M++,A=p.next())A=j(E,h,M,A.value,x),A!==null&&(e&&A.alternate!==null&&E.delete(A.key===null?M:A.key),f=l(A,f,M),N===null?S=A:N.sibling=A,N=A);return e&&E.forEach(function(Lt){return t(h,Lt)}),q&&At(h,M),S}function P(h,f,p,x){if(typeof p=="object"&&p!==null&&p.type===rr&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Sn:e:{for(var S=p.key,N=f;N!==null;){if(N.key===S){if(S=p.type,S===rr){if(N.tag===7){r(h,N.sibling),f=a(N,p.props.children),f.return=h,h=f;break e}}else if(N.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===ht&&Yi(S)===N.type){r(h,N.sibling),f=a(N,p.props),f.ref=Or(h,N,p),f.return=h,h=f;break e}r(h,N);break}else t(h,N);N=N.sibling}p.type===rr?(f=Wt(p.props.children,h.mode,x,p.key),f.return=h,h=f):(x=Zn(p.type,p.key,p.props,null,h.mode,x),x.ref=Or(h,f,p),x.return=h,h=x)}return i(h);case tr:e:{for(N=p.key;f!==null;){if(f.key===N)if(f.tag===4&&f.stateNode.containerInfo===p.containerInfo&&f.stateNode.implementation===p.implementation){r(h,f.sibling),f=a(f,p.children||[]),f.return=h,h=f;break e}else{r(h,f);break}else t(h,f);f=f.sibling}f=ml(p,h.mode,x),f.return=h,h=f}return i(h);case ht:return N=p._init,P(h,f,N(p._payload),x)}if($r(p))return k(h,f,p,x);if(Rr(p))return b(h,f,p,x);Dn(h,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,f!==null&&f.tag===6?(r(h,f.sibling),f=a(f,p),f.return=h,h=f):(r(h,f),f=fl(p,h.mode,x),f.return=h,h=f),i(h)):r(h,f)}return P}var br=Lu(!0),Du=Lu(!1),pa=Tt(null),fa=null,cr=null,Ro=null;function Lo(){Ro=cr=fa=null}function Do(e){var t=pa.current;X(pa),e._currentValue=t}function Ql(e,t,r){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function vr(e,t){fa=e,Ro=cr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Se=!0),e.firstContext=null)}function Ue(e){var t=e._currentValue;if(Ro!==e)if(e={context:e,memoizedValue:t,next:null},cr===null){if(fa===null)throw Error(w(308));cr=e,fa.dependencies={lanes:0,firstContext:e}}else cr=cr.next=e;return t}var Bt=null;function Io(e){Bt===null?Bt=[e]:Bt.push(e)}function Iu(e,t,r,n){var a=t.interleaved;return a===null?(r.next=r,Io(t)):(r.next=a.next,a.next=r),t.interleaved=r,dt(e,n)}function dt(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var gt=!1;function Ao(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Au(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function st(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function St(e,t,r){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,$&2){var a=n.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),n.pending=t,dt(e,r)}return a=n.interleaved,a===null?(t.next=t,Io(n)):(t.next=a.next,a.next=t),n.interleaved=t,dt(e,r)}function Qn(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,bo(e,r)}}function Ki(e,t){var r=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var a=null,l=null;if(r=r.firstBaseUpdate,r!==null){do{var i={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};l===null?a=l=i:l=l.next=i,r=r.next}while(r!==null);l===null?a=l=t:l=l.next=t}else a=l=t;r={baseState:n.baseState,firstBaseUpdate:a,lastBaseUpdate:l,shared:n.shared,effects:n.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function ma(e,t,r,n){var a=e.updateQueue;gt=!1;var l=a.firstBaseUpdate,i=a.lastBaseUpdate,s=a.shared.pending;if(s!==null){a.shared.pending=null;var u=s,c=u.next;u.next=null,i===null?l=c:i.next=c,i=u;var g=e.alternate;g!==null&&(g=g.updateQueue,s=g.lastBaseUpdate,s!==i&&(s===null?g.firstBaseUpdate=c:s.next=c,g.lastBaseUpdate=u))}if(l!==null){var y=a.baseState;i=0,g=c=u=null,s=l;do{var v=s.lane,j=s.eventTime;if((n&v)===v){g!==null&&(g=g.next={eventTime:j,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var k=e,b=s;switch(v=t,j=r,b.tag){case 1:if(k=b.payload,typeof k=="function"){y=k.call(j,y,v);break e}y=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=b.payload,v=typeof k=="function"?k.call(j,y,v):k,v==null)break e;y=ee({},y,v);break e;case 2:gt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,v=a.effects,v===null?a.effects=[s]:v.push(s))}else j={eventTime:j,lane:v,tag:s.tag,payload:s.payload,callback:s.callback,next:null},g===null?(c=g=j,u=y):g=g.next=j,i|=v;if(s=s.next,s===null){if(s=a.shared.pending,s===null)break;v=s,s=v.next,v.next=null,a.lastBaseUpdate=v,a.shared.pending=null}}while(!0);if(g===null&&(u=y),a.baseState=u,a.firstBaseUpdate=c,a.lastBaseUpdate=g,t=a.shared.interleaved,t!==null){a=t;do i|=a.lane,a=a.next;while(a!==t)}else l===null&&(a.shared.lanes=0);Yt|=i,e.lanes=i,e.memoizedState=y}}function Xi(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var n=e[t],a=n.callback;if(a!==null){if(n.callback=null,n=r,typeof a!="function")throw Error(w(191,a));a.call(n)}}}var bn={},rt=Tt(bn),fn=Tt(bn),mn=Tt(bn);function Vt(e){if(e===bn)throw Error(w(174));return e}function Oo(e,t){switch(G(mn,t),G(fn,e),G(rt,bn),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Cl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Cl(t,e)}X(rt),G(rt,t)}function Nr(){X(rt),X(fn),X(mn)}function Ou(e){Vt(mn.current);var t=Vt(rt.current),r=Cl(t,e.type);t!==r&&(G(fn,e),G(rt,r))}function Uo(e){fn.current===e&&(X(rt),X(fn))}var Z=Tt(0);function ha(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var il=[];function Bo(){for(var e=0;e<il.length;e++)il[e]._workInProgressVersionPrimary=null;il.length=0}var Gn=ft.ReactCurrentDispatcher,sl=ft.ReactCurrentBatchConfig,Gt=0,J=null,oe=null,ue=null,ga=!1,qr=!1,hn=0,Op=0;function he(){throw Error(w(321))}function Vo(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!Xe(e[r],t[r]))return!1;return!0}function $o(e,t,r,n,a,l){if(Gt=l,J=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Gn.current=e===null||e.memoizedState===null?$p:Wp,e=r(n,a),qr){l=0;do{if(qr=!1,hn=0,25<=l)throw Error(w(301));l+=1,ue=oe=null,t.updateQueue=null,Gn.current=Hp,e=r(n,a)}while(qr)}if(Gn.current=va,t=oe!==null&&oe.next!==null,Gt=0,ue=oe=J=null,ga=!1,t)throw Error(w(300));return e}function Wo(){var e=hn!==0;return hn=0,e}function Je(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ue===null?J.memoizedState=ue=e:ue=ue.next=e,ue}function Be(){if(oe===null){var e=J.alternate;e=e!==null?e.memoizedState:null}else e=oe.next;var t=ue===null?J.memoizedState:ue.next;if(t!==null)ue=t,oe=e;else{if(e===null)throw Error(w(310));oe=e,e={memoizedState:oe.memoizedState,baseState:oe.baseState,baseQueue:oe.baseQueue,queue:oe.queue,next:null},ue===null?J.memoizedState=ue=e:ue=ue.next=e}return ue}function gn(e,t){return typeof t=="function"?t(e):t}function ul(e){var t=Be(),r=t.queue;if(r===null)throw Error(w(311));r.lastRenderedReducer=e;var n=oe,a=n.baseQueue,l=r.pending;if(l!==null){if(a!==null){var i=a.next;a.next=l.next,l.next=i}n.baseQueue=a=l,r.pending=null}if(a!==null){l=a.next,n=n.baseState;var s=i=null,u=null,c=l;do{var g=c.lane;if((Gt&g)===g)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),n=c.hasEagerState?c.eagerState:e(n,c.action);else{var y={lane:g,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(s=u=y,i=n):u=u.next=y,J.lanes|=g,Yt|=g}c=c.next}while(c!==null&&c!==l);u===null?i=n:u.next=s,Xe(n,t.memoizedState)||(Se=!0),t.memoizedState=n,t.baseState=i,t.baseQueue=u,r.lastRenderedState=n}if(e=r.interleaved,e!==null){a=e;do l=a.lane,J.lanes|=l,Yt|=l,a=a.next;while(a!==e)}else a===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function cl(e){var t=Be(),r=t.queue;if(r===null)throw Error(w(311));r.lastRenderedReducer=e;var n=r.dispatch,a=r.pending,l=t.memoizedState;if(a!==null){r.pending=null;var i=a=a.next;do l=e(l,i.action),i=i.next;while(i!==a);Xe(l,t.memoizedState)||(Se=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),r.lastRenderedState=l}return[l,n]}function Uu(){}function Bu(e,t){var r=J,n=Be(),a=t(),l=!Xe(n.memoizedState,a);if(l&&(n.memoizedState=a,Se=!0),n=n.queue,Ho(Wu.bind(null,r,n,e),[e]),n.getSnapshot!==t||l||ue!==null&&ue.memoizedState.tag&1){if(r.flags|=2048,vn(9,$u.bind(null,r,n,a,t),void 0,null),ce===null)throw Error(w(349));Gt&30||Vu(r,t,a)}return a}function Vu(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=J.updateQueue,t===null?(t={lastEffect:null,stores:null},J.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function $u(e,t,r,n){t.value=r,t.getSnapshot=n,Hu(t)&&Qu(e)}function Wu(e,t,r){return r(function(){Hu(t)&&Qu(e)})}function Hu(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!Xe(e,r)}catch{return!0}}function Qu(e){var t=dt(e,1);t!==null&&Ke(t,e,1,-1)}function qi(e){var t=Je();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:gn,lastRenderedState:e},t.queue=e,e=e.dispatch=Vp.bind(null,J,e),[t.memoizedState,e]}function vn(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},t=J.updateQueue,t===null?(t={lastEffect:null,stores:null},J.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e)),e}function Gu(){return Be().memoizedState}function Yn(e,t,r,n){var a=Je();J.flags|=e,a.memoizedState=vn(1|t,r,void 0,n===void 0?null:n)}function Pa(e,t,r,n){var a=Be();n=n===void 0?null:n;var l=void 0;if(oe!==null){var i=oe.memoizedState;if(l=i.destroy,n!==null&&Vo(n,i.deps)){a.memoizedState=vn(t,r,l,n);return}}J.flags|=e,a.memoizedState=vn(1|t,r,l,n)}function Zi(e,t){return Yn(8390656,8,e,t)}function Ho(e,t){return Pa(2048,8,e,t)}function Yu(e,t){return Pa(4,2,e,t)}function Ku(e,t){return Pa(4,4,e,t)}function Xu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function qu(e,t,r){return r=r!=null?r.concat([e]):null,Pa(4,4,Xu.bind(null,t,e),r)}function Qo(){}function Zu(e,t){var r=Be();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&Vo(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function Ju(e,t){var r=Be();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&Vo(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function ec(e,t,r){return Gt&21?(Xe(r,t)||(r=lu(),J.lanes|=r,Yt|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Se=!0),e.memoizedState=r)}function Up(e,t){var r=H;H=r!==0&&4>r?r:4,e(!0);var n=sl.transition;sl.transition={};try{e(!1),t()}finally{H=r,sl.transition=n}}function tc(){return Be().memoizedState}function Bp(e,t,r){var n=Et(e);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},rc(e))nc(t,r);else if(r=Iu(e,t,r,n),r!==null){var a=we();Ke(r,e,n,a),ac(r,t,n)}}function Vp(e,t,r){var n=Et(e),a={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(rc(e))nc(t,a);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var i=t.lastRenderedState,s=l(i,r);if(a.hasEagerState=!0,a.eagerState=s,Xe(s,i)){var u=t.interleaved;u===null?(a.next=a,Io(t)):(a.next=u.next,u.next=a),t.interleaved=a;return}}catch{}finally{}r=Iu(e,t,a,n),r!==null&&(a=we(),Ke(r,e,n,a),ac(r,t,n))}}function rc(e){var t=e.alternate;return e===J||t!==null&&t===J}function nc(e,t){qr=ga=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function ac(e,t,r){if(r&4194240){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,bo(e,r)}}var va={readContext:Ue,useCallback:he,useContext:he,useEffect:he,useImperativeHandle:he,useInsertionEffect:he,useLayoutEffect:he,useMemo:he,useReducer:he,useRef:he,useState:he,useDebugValue:he,useDeferredValue:he,useTransition:he,useMutableSource:he,useSyncExternalStore:he,useId:he,unstable_isNewReconciler:!1},$p={readContext:Ue,useCallback:function(e,t){return Je().memoizedState=[e,t===void 0?null:t],e},useContext:Ue,useEffect:Zi,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,Yn(4194308,4,Xu.bind(null,t,e),r)},useLayoutEffect:function(e,t){return Yn(4194308,4,e,t)},useInsertionEffect:function(e,t){return Yn(4,2,e,t)},useMemo:function(e,t){var r=Je();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=Je();return t=r!==void 0?r(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=Bp.bind(null,J,e),[n.memoizedState,e]},useRef:function(e){var t=Je();return e={current:e},t.memoizedState=e},useState:qi,useDebugValue:Qo,useDeferredValue:function(e){return Je().memoizedState=e},useTransition:function(){var e=qi(!1),t=e[0];return e=Up.bind(null,e[1]),Je().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var n=J,a=Je();if(q){if(r===void 0)throw Error(w(407));r=r()}else{if(r=t(),ce===null)throw Error(w(349));Gt&30||Vu(n,t,r)}a.memoizedState=r;var l={value:r,getSnapshot:t};return a.queue=l,Zi(Wu.bind(null,n,l,e),[e]),n.flags|=2048,vn(9,$u.bind(null,n,l,r,t),void 0,null),r},useId:function(){var e=Je(),t=ce.identifierPrefix;if(q){var r=it,n=ot;r=(n&~(1<<32-Ye(n)-1)).toString(32)+r,t=":"+t+"R"+r,r=hn++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=Op++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Wp={readContext:Ue,useCallback:Zu,useContext:Ue,useEffect:Ho,useImperativeHandle:qu,useInsertionEffect:Yu,useLayoutEffect:Ku,useMemo:Ju,useReducer:ul,useRef:Gu,useState:function(){return ul(gn)},useDebugValue:Qo,useDeferredValue:function(e){var t=Be();return ec(t,oe.memoizedState,e)},useTransition:function(){var e=ul(gn)[0],t=Be().memoizedState;return[e,t]},useMutableSource:Uu,useSyncExternalStore:Bu,useId:tc,unstable_isNewReconciler:!1},Hp={readContext:Ue,useCallback:Zu,useContext:Ue,useEffect:Ho,useImperativeHandle:qu,useInsertionEffect:Yu,useLayoutEffect:Ku,useMemo:Ju,useReducer:cl,useRef:Gu,useState:function(){return cl(gn)},useDebugValue:Qo,useDeferredValue:function(e){var t=Be();return oe===null?t.memoizedState=e:ec(t,oe.memoizedState,e)},useTransition:function(){var e=cl(gn)[0],t=Be().memoizedState;return[e,t]},useMutableSource:Uu,useSyncExternalStore:Bu,useId:tc,unstable_isNewReconciler:!1};function He(e,t){if(e&&e.defaultProps){t=ee({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function Gl(e,t,r,n){t=e.memoizedState,r=r(n,t),r=r==null?t:ee({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Ta={isMounted:function(e){return(e=e._reactInternals)?qt(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=we(),a=Et(e),l=st(n,a);l.payload=t,r!=null&&(l.callback=r),t=St(e,l,a),t!==null&&(Ke(t,e,a,n),Qn(t,e,a))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=we(),a=Et(e),l=st(n,a);l.tag=1,l.payload=t,r!=null&&(l.callback=r),t=St(e,l,a),t!==null&&(Ke(t,e,a,n),Qn(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=we(),n=Et(e),a=st(r,n);a.tag=2,t!=null&&(a.callback=t),t=St(e,a,n),t!==null&&(Ke(t,e,n,r),Qn(t,e,n))}};function Ji(e,t,r,n,a,l,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,l,i):t.prototype&&t.prototype.isPureReactComponent?!un(r,n)||!un(a,l):!0}function lc(e,t,r){var n=!1,a=Mt,l=t.contextType;return typeof l=="object"&&l!==null?l=Ue(l):(a=Ee(t)?Ht:ye.current,n=t.contextTypes,l=(n=n!=null)?kr(e,a):Mt),t=new t(r,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ta,e.stateNode=t,t._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=l),t}function es(e,t,r,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&Ta.enqueueReplaceState(t,t.state,null)}function Yl(e,t,r,n){var a=e.stateNode;a.props=r,a.state=e.memoizedState,a.refs={},Ao(e);var l=t.contextType;typeof l=="object"&&l!==null?a.context=Ue(l):(l=Ee(t)?Ht:ye.current,a.context=kr(e,l)),a.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(Gl(e,t,l,r),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&Ta.enqueueReplaceState(a,a.state,null),ma(e,r,a,n),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function Sr(e,t){try{var r="",n=t;do r+=xd(n),n=n.return;while(n);var a=r}catch(l){a=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:a,digest:null}}function dl(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function Kl(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var Qp=typeof WeakMap=="function"?WeakMap:Map;function oc(e,t,r){r=st(-1,r),r.tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){xa||(xa=!0,lo=n),Kl(e,t)},r}function ic(e,t,r){r=st(-1,r),r.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var a=t.value;r.payload=function(){return n(a)},r.callback=function(){Kl(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(r.callback=function(){Kl(e,t),typeof n!="function"&&(Ct===null?Ct=new Set([this]):Ct.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),r}function ts(e,t,r){var n=e.pingCache;if(n===null){n=e.pingCache=new Qp;var a=new Set;n.set(t,a)}else a=n.get(t),a===void 0&&(a=new Set,n.set(t,a));a.has(r)||(a.add(r),e=of.bind(null,e,t,r),t.then(e,e))}function rs(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ns(e,t,r,n,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=st(-1,1),t.tag=2,St(r,t,1))),r.lanes|=1),e)}var Gp=ft.ReactCurrentOwner,Se=!1;function xe(e,t,r,n){t.child=e===null?Du(t,null,r,n):br(t,e.child,r,n)}function as(e,t,r,n,a){r=r.render;var l=t.ref;return vr(t,a),n=$o(e,t,r,n,l,a),r=Wo(),e!==null&&!Se?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,pt(e,t,a)):(q&&r&&Po(t),t.flags|=1,xe(e,t,n,a),t.child)}function ls(e,t,r,n,a){if(e===null){var l=r.type;return typeof l=="function"&&!ei(l)&&l.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=l,sc(e,t,l,n,a)):(e=Zn(r.type,null,n,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&a)){var i=l.memoizedProps;if(r=r.compare,r=r!==null?r:un,r(i,n)&&e.ref===t.ref)return pt(e,t,a)}return t.flags|=1,e=Ft(l,n),e.ref=t.ref,e.return=t,t.child=e}function sc(e,t,r,n,a){if(e!==null){var l=e.memoizedProps;if(un(l,n)&&e.ref===t.ref)if(Se=!1,t.pendingProps=n=l,(e.lanes&a)!==0)e.flags&131072&&(Se=!0);else return t.lanes=e.lanes,pt(e,t,a)}return Xl(e,t,r,n,a)}function uc(e,t,r){var n=t.pendingProps,a=n.children,l=e!==null?e.memoizedState:null;if(n.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},G(pr,Me),Me|=r;else{if(!(r&1073741824))return e=l!==null?l.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,G(pr,Me),Me|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=l!==null?l.baseLanes:r,G(pr,Me),Me|=n}else l!==null?(n=l.baseLanes|r,t.memoizedState=null):n=r,G(pr,Me),Me|=n;return xe(e,t,a,r),t.child}function cc(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function Xl(e,t,r,n,a){var l=Ee(r)?Ht:ye.current;return l=kr(t,l),vr(t,a),r=$o(e,t,r,n,l,a),n=Wo(),e!==null&&!Se?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,pt(e,t,a)):(q&&n&&Po(t),t.flags|=1,xe(e,t,r,a),t.child)}function os(e,t,r,n,a){if(Ee(r)){var l=!0;ua(t)}else l=!1;if(vr(t,a),t.stateNode===null)Kn(e,t),lc(t,r,n),Yl(t,r,n,a),n=!0;else if(e===null){var i=t.stateNode,s=t.memoizedProps;i.props=s;var u=i.context,c=r.contextType;typeof c=="object"&&c!==null?c=Ue(c):(c=Ee(r)?Ht:ye.current,c=kr(t,c));var g=r.getDerivedStateFromProps,y=typeof g=="function"||typeof i.getSnapshotBeforeUpdate=="function";y||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==n||u!==c)&&es(t,i,n,c),gt=!1;var v=t.memoizedState;i.state=v,ma(t,n,i,a),u=t.memoizedState,s!==n||v!==u||Ce.current||gt?(typeof g=="function"&&(Gl(t,r,g,n),u=t.memoizedState),(s=gt||Ji(t,r,s,n,v,u,c))?(y||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=u),i.props=n,i.state=u,i.context=c,n=s):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{i=t.stateNode,Au(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:He(t.type,s),i.props=c,y=t.pendingProps,v=i.context,u=r.contextType,typeof u=="object"&&u!==null?u=Ue(u):(u=Ee(r)?Ht:ye.current,u=kr(t,u));var j=r.getDerivedStateFromProps;(g=typeof j=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==y||v!==u)&&es(t,i,n,u),gt=!1,v=t.memoizedState,i.state=v,ma(t,n,i,a);var k=t.memoizedState;s!==y||v!==k||Ce.current||gt?(typeof j=="function"&&(Gl(t,r,j,n),k=t.memoizedState),(c=gt||Ji(t,r,c,n,v,k,u)||!1)?(g||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(n,k,u),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(n,k,u)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=k),i.props=n,i.state=k,i.context=u,n=c):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),n=!1)}return ql(e,t,r,n,l,a)}function ql(e,t,r,n,a,l){cc(e,t);var i=(t.flags&128)!==0;if(!n&&!i)return a&&Hi(t,r,!1),pt(e,t,l);n=t.stateNode,Gp.current=t;var s=i&&typeof r.getDerivedStateFromError!="function"?null:n.render();return t.flags|=1,e!==null&&i?(t.child=br(t,e.child,null,l),t.child=br(t,null,s,l)):xe(e,t,s,l),t.memoizedState=n.state,a&&Hi(t,r,!0),t.child}function dc(e){var t=e.stateNode;t.pendingContext?Wi(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Wi(e,t.context,!1),Oo(e,t.containerInfo)}function is(e,t,r,n,a){return jr(),_o(a),t.flags|=256,xe(e,t,r,n),t.child}var Zl={dehydrated:null,treeContext:null,retryLane:0};function Jl(e){return{baseLanes:e,cachePool:null,transitions:null}}function pc(e,t,r){var n=t.pendingProps,a=Z.current,l=!1,i=(t.flags&128)!==0,s;if((s=i)||(s=e!==null&&e.memoizedState===null?!1:(a&2)!==0),s?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),G(Z,a&1),e===null)return Hl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=n.children,e=n.fallback,l?(n=t.mode,l=t.child,i={mode:"hidden",children:i},!(n&1)&&l!==null?(l.childLanes=0,l.pendingProps=i):l=La(i,n,0,null),e=Wt(e,n,r,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=Jl(r),t.memoizedState=Zl,e):Go(t,i));if(a=e.memoizedState,a!==null&&(s=a.dehydrated,s!==null))return Yp(e,t,i,n,s,a,r);if(l){l=n.fallback,i=t.mode,a=e.child,s=a.sibling;var u={mode:"hidden",children:n.children};return!(i&1)&&t.child!==a?(n=t.child,n.childLanes=0,n.pendingProps=u,t.deletions=null):(n=Ft(a,u),n.subtreeFlags=a.subtreeFlags&14680064),s!==null?l=Ft(s,l):(l=Wt(l,i,r,null),l.flags|=2),l.return=t,n.return=t,n.sibling=l,t.child=n,n=l,l=t.child,i=e.child.memoizedState,i=i===null?Jl(r):{baseLanes:i.baseLanes|r,cachePool:null,transitions:i.transitions},l.memoizedState=i,l.childLanes=e.childLanes&~r,t.memoizedState=Zl,n}return l=e.child,e=l.sibling,n=Ft(l,{mode:"visible",children:n.children}),!(t.mode&1)&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n}function Go(e,t){return t=La({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function In(e,t,r,n){return n!==null&&_o(n),br(t,e.child,null,r),e=Go(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Yp(e,t,r,n,a,l,i){if(r)return t.flags&256?(t.flags&=-257,n=dl(Error(w(422))),In(e,t,i,n)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=n.fallback,a=t.mode,n=La({mode:"visible",children:n.children},a,0,null),l=Wt(l,a,i,null),l.flags|=2,n.return=t,l.return=t,n.sibling=l,t.child=n,t.mode&1&&br(t,e.child,null,i),t.child.memoizedState=Jl(i),t.memoizedState=Zl,l);if(!(t.mode&1))return In(e,t,i,null);if(a.data==="$!"){if(n=a.nextSibling&&a.nextSibling.dataset,n)var s=n.dgst;return n=s,l=Error(w(419)),n=dl(l,n,void 0),In(e,t,i,n)}if(s=(i&e.childLanes)!==0,Se||s){if(n=ce,n!==null){switch(i&-i){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(n.suspendedLanes|i)?0:a,a!==0&&a!==l.retryLane&&(l.retryLane=a,dt(e,a),Ke(n,e,a,-1))}return Jo(),n=dl(Error(w(421))),In(e,t,i,n)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=sf.bind(null,e),a._reactRetry=t,null):(e=l.treeContext,Pe=Nt(a.nextSibling),Te=t,q=!0,Ge=null,e!==null&&(De[Ie++]=ot,De[Ie++]=it,De[Ie++]=Qt,ot=e.id,it=e.overflow,Qt=t),t=Go(t,n.children),t.flags|=4096,t)}function ss(e,t,r){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),Ql(e.return,t,r)}function pl(e,t,r,n,a){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:a}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=n,l.tail=r,l.tailMode=a)}function fc(e,t,r){var n=t.pendingProps,a=n.revealOrder,l=n.tail;if(xe(e,t,n.children,r),n=Z.current,n&2)n=n&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ss(e,r,t);else if(e.tag===19)ss(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(G(Z,n),!(t.mode&1))t.memoizedState=null;else switch(a){case"forwards":for(r=t.child,a=null;r!==null;)e=r.alternate,e!==null&&ha(e)===null&&(a=r),r=r.sibling;r=a,r===null?(a=t.child,t.child=null):(a=r.sibling,r.sibling=null),pl(t,!1,a,r,l);break;case"backwards":for(r=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&ha(e)===null){t.child=a;break}e=a.sibling,a.sibling=r,r=a,a=e}pl(t,!0,r,null,l);break;case"together":pl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Kn(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function pt(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),Yt|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(w(153));if(t.child!==null){for(e=t.child,r=Ft(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=Ft(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function Kp(e,t,r){switch(t.tag){case 3:dc(t),jr();break;case 5:Ou(t);break;case 1:Ee(t.type)&&ua(t);break;case 4:Oo(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,a=t.memoizedProps.value;G(pa,n._currentValue),n._currentValue=a;break;case 13:if(n=t.memoizedState,n!==null)return n.dehydrated!==null?(G(Z,Z.current&1),t.flags|=128,null):r&t.child.childLanes?pc(e,t,r):(G(Z,Z.current&1),e=pt(e,t,r),e!==null?e.sibling:null);G(Z,Z.current&1);break;case 19:if(n=(r&t.childLanes)!==0,e.flags&128){if(n)return fc(e,t,r);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),G(Z,Z.current),n)break;return null;case 22:case 23:return t.lanes=0,uc(e,t,r)}return pt(e,t,r)}var mc,eo,hc,gc;mc=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};eo=function(){};hc=function(e,t,r,n){var a=e.memoizedProps;if(a!==n){e=t.stateNode,Vt(rt.current);var l=null;switch(r){case"input":a=jl(e,a),n=jl(e,n),l=[];break;case"select":a=ee({},a,{value:void 0}),n=ee({},n,{value:void 0}),l=[];break;case"textarea":a=Sl(e,a),n=Sl(e,n),l=[];break;default:typeof a.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=ia)}El(r,n);var i;r=null;for(c in a)if(!n.hasOwnProperty(c)&&a.hasOwnProperty(c)&&a[c]!=null)if(c==="style"){var s=a[c];for(i in s)s.hasOwnProperty(i)&&(r||(r={}),r[i]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(tn.hasOwnProperty(c)?l||(l=[]):(l=l||[]).push(c,null));for(c in n){var u=n[c];if(s=a!=null?a[c]:void 0,n.hasOwnProperty(c)&&u!==s&&(u!=null||s!=null))if(c==="style")if(s){for(i in s)!s.hasOwnProperty(i)||u&&u.hasOwnProperty(i)||(r||(r={}),r[i]="");for(i in u)u.hasOwnProperty(i)&&s[i]!==u[i]&&(r||(r={}),r[i]=u[i])}else r||(l||(l=[]),l.push(c,r)),r=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(l=l||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(l=l||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(tn.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&K("scroll",e),l||s===u||(l=[])):(l=l||[]).push(c,u))}r&&(l=l||[]).push("style",r);var c=l;(t.updateQueue=c)&&(t.flags|=4)}};gc=function(e,t,r,n){r!==n&&(t.flags|=4)};function Ur(e,t){if(!q)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function ge(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,n=0;if(t)for(var a=e.child;a!==null;)r|=a.lanes|a.childLanes,n|=a.subtreeFlags&14680064,n|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)r|=a.lanes|a.childLanes,n|=a.subtreeFlags,n|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}function Xp(e,t,r){var n=t.pendingProps;switch(To(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ge(t),null;case 1:return Ee(t.type)&&sa(),ge(t),null;case 3:return n=t.stateNode,Nr(),X(Ce),X(ye),Bo(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Ln(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ge!==null&&(so(Ge),Ge=null))),eo(e,t),ge(t),null;case 5:Uo(t);var a=Vt(mn.current);if(r=t.type,e!==null&&t.stateNode!=null)hc(e,t,r,n,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(t.stateNode===null)throw Error(w(166));return ge(t),null}if(e=Vt(rt.current),Ln(t)){n=t.stateNode,r=t.type;var l=t.memoizedProps;switch(n[et]=t,n[pn]=l,e=(t.mode&1)!==0,r){case"dialog":K("cancel",n),K("close",n);break;case"iframe":case"object":case"embed":K("load",n);break;case"video":case"audio":for(a=0;a<Hr.length;a++)K(Hr[a],n);break;case"source":K("error",n);break;case"img":case"image":case"link":K("error",n),K("load",n);break;case"details":K("toggle",n);break;case"input":vi(n,l),K("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!l.multiple},K("invalid",n);break;case"textarea":xi(n,l),K("invalid",n)}El(r,l),a=null;for(var i in l)if(l.hasOwnProperty(i)){var s=l[i];i==="children"?typeof s=="string"?n.textContent!==s&&(l.suppressHydrationWarning!==!0&&Rn(n.textContent,s,e),a=["children",s]):typeof s=="number"&&n.textContent!==""+s&&(l.suppressHydrationWarning!==!0&&Rn(n.textContent,s,e),a=["children",""+s]):tn.hasOwnProperty(i)&&s!=null&&i==="onScroll"&&K("scroll",n)}switch(r){case"input":Cn(n),yi(n,l,!0);break;case"textarea":Cn(n),wi(n);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(n.onclick=ia)}n=a,t.updateQueue=n,n!==null&&(t.flags|=4)}else{i=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ws(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=i.createElement(r,{is:n.is}):(e=i.createElement(r),r==="select"&&(i=e,n.multiple?i.multiple=!0:n.size&&(i.size=n.size))):e=i.createElementNS(e,r),e[et]=t,e[pn]=n,mc(e,t,!1,!1),t.stateNode=e;e:{switch(i=Fl(r,n),r){case"dialog":K("cancel",e),K("close",e),a=n;break;case"iframe":case"object":case"embed":K("load",e),a=n;break;case"video":case"audio":for(a=0;a<Hr.length;a++)K(Hr[a],e);a=n;break;case"source":K("error",e),a=n;break;case"img":case"image":case"link":K("error",e),K("load",e),a=n;break;case"details":K("toggle",e),a=n;break;case"input":vi(e,n),a=jl(e,n),K("invalid",e);break;case"option":a=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},a=ee({},n,{value:void 0}),K("invalid",e);break;case"textarea":xi(e,n),a=Sl(e,n),K("invalid",e);break;default:a=n}El(r,a),s=a;for(l in s)if(s.hasOwnProperty(l)){var u=s[l];l==="style"?Gs(e,u):l==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Hs(e,u)):l==="children"?typeof u=="string"?(r!=="textarea"||u!=="")&&rn(e,u):typeof u=="number"&&rn(e,""+u):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(tn.hasOwnProperty(l)?u!=null&&l==="onScroll"&&K("scroll",e):u!=null&&vo(e,l,u,i))}switch(r){case"input":Cn(e),yi(e,n,!1);break;case"textarea":Cn(e),wi(e);break;case"option":n.value!=null&&e.setAttribute("value",""+zt(n.value));break;case"select":e.multiple=!!n.multiple,l=n.value,l!=null?fr(e,!!n.multiple,l,!1):n.defaultValue!=null&&fr(e,!!n.multiple,n.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=ia)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ge(t),null;case 6:if(e&&t.stateNode!=null)gc(e,t,e.memoizedProps,n);else{if(typeof n!="string"&&t.stateNode===null)throw Error(w(166));if(r=Vt(mn.current),Vt(rt.current),Ln(t)){if(n=t.stateNode,r=t.memoizedProps,n[et]=t,(l=n.nodeValue!==r)&&(e=Te,e!==null))switch(e.tag){case 3:Rn(n.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Rn(n.nodeValue,r,(e.mode&1)!==0)}l&&(t.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[et]=t,t.stateNode=n}return ge(t),null;case 13:if(X(Z),n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(q&&Pe!==null&&t.mode&1&&!(t.flags&128))Ru(),jr(),t.flags|=98560,l=!1;else if(l=Ln(t),n!==null&&n.dehydrated!==null){if(e===null){if(!l)throw Error(w(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(w(317));l[et]=t}else jr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ge(t),l=!1}else Ge!==null&&(so(Ge),Ge=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(t.child.flags|=8192,t.mode&1&&(e===null||Z.current&1?ie===0&&(ie=3):Jo())),t.updateQueue!==null&&(t.flags|=4),ge(t),null);case 4:return Nr(),eo(e,t),e===null&&cn(t.stateNode.containerInfo),ge(t),null;case 10:return Do(t.type._context),ge(t),null;case 17:return Ee(t.type)&&sa(),ge(t),null;case 19:if(X(Z),l=t.memoizedState,l===null)return ge(t),null;if(n=(t.flags&128)!==0,i=l.rendering,i===null)if(n)Ur(l,!1);else{if(ie!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=ha(e),i!==null){for(t.flags|=128,Ur(l,!1),n=i.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=r,r=t.child;r!==null;)l=r,e=n,l.flags&=14680066,i=l.alternate,i===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,l.type=i.type,e=i.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return G(Z,Z.current&1|2),t.child}e=e.sibling}l.tail!==null&&ae()>Cr&&(t.flags|=128,n=!0,Ur(l,!1),t.lanes=4194304)}else{if(!n)if(e=ha(i),e!==null){if(t.flags|=128,n=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),Ur(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!q)return ge(t),null}else 2*ae()-l.renderingStartTime>Cr&&r!==1073741824&&(t.flags|=128,n=!0,Ur(l,!1),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(r=l.last,r!==null?r.sibling=i:t.child=i,l.last=i)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=ae(),t.sibling=null,r=Z.current,G(Z,n?r&1|2:r&1),t):(ge(t),null);case 22:case 23:return Zo(),n=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(t.flags|=8192),n&&t.mode&1?Me&1073741824&&(ge(t),t.subtreeFlags&6&&(t.flags|=8192)):ge(t),null;case 24:return null;case 25:return null}throw Error(w(156,t.tag))}function qp(e,t){switch(To(t),t.tag){case 1:return Ee(t.type)&&sa(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Nr(),X(Ce),X(ye),Bo(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Uo(t),null;case 13:if(X(Z),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(w(340));jr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return X(Z),null;case 4:return Nr(),null;case 10:return Do(t.type._context),null;case 22:case 23:return Zo(),null;case 24:return null;default:return null}}var An=!1,ve=!1,Zp=typeof WeakSet=="function"?WeakSet:Set,z=null;function dr(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){ne(e,t,n)}else r.current=null}function to(e,t,r){try{r()}catch(n){ne(e,t,n)}}var us=!1;function Jp(e,t){if(Al=aa,e=ku(),Mo(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var a=n.anchorOffset,l=n.focusNode;n=n.focusOffset;try{r.nodeType,l.nodeType}catch{r=null;break e}var i=0,s=-1,u=-1,c=0,g=0,y=e,v=null;t:for(;;){for(var j;y!==r||a!==0&&y.nodeType!==3||(s=i+a),y!==l||n!==0&&y.nodeType!==3||(u=i+n),y.nodeType===3&&(i+=y.nodeValue.length),(j=y.firstChild)!==null;)v=y,y=j;for(;;){if(y===e)break t;if(v===r&&++c===a&&(s=i),v===l&&++g===n&&(u=i),(j=y.nextSibling)!==null)break;y=v,v=y.parentNode}y=j}r=s===-1||u===-1?null:{start:s,end:u}}else r=null}r=r||{start:0,end:0}}else r=null;for(Ol={focusedElem:e,selectionRange:r},aa=!1,z=t;z!==null;)if(t=z,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,z=e;else for(;z!==null;){t=z;try{var k=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var b=k.memoizedProps,P=k.memoizedState,h=t.stateNode,f=h.getSnapshotBeforeUpdate(t.elementType===t.type?b:He(t.type,b),P);h.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(w(163))}}catch(x){ne(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,z=e;break}z=t.return}return k=us,us=!1,k}function Zr(e,t,r){var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var a=n=n.next;do{if((a.tag&e)===e){var l=a.destroy;a.destroy=void 0,l!==void 0&&to(t,r,l)}a=a.next}while(a!==n)}}function _a(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var n=r.create;r.destroy=n()}r=r.next}while(r!==t)}}function ro(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function vc(e){var t=e.alternate;t!==null&&(e.alternate=null,vc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[et],delete t[pn],delete t[Vl],delete t[Lp],delete t[Dp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function yc(e){return e.tag===5||e.tag===3||e.tag===4}function cs(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||yc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function no(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=ia));else if(n!==4&&(e=e.child,e!==null))for(no(e,t,r),e=e.sibling;e!==null;)no(e,t,r),e=e.sibling}function ao(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(ao(e,t,r),e=e.sibling;e!==null;)ao(e,t,r),e=e.sibling}var pe=null,Qe=!1;function mt(e,t,r){for(r=r.child;r!==null;)xc(e,t,r),r=r.sibling}function xc(e,t,r){if(tt&&typeof tt.onCommitFiberUnmount=="function")try{tt.onCommitFiberUnmount(Sa,r)}catch{}switch(r.tag){case 5:ve||dr(r,t);case 6:var n=pe,a=Qe;pe=null,mt(e,t,r),pe=n,Qe=a,pe!==null&&(Qe?(e=pe,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):pe.removeChild(r.stateNode));break;case 18:pe!==null&&(Qe?(e=pe,r=r.stateNode,e.nodeType===8?ll(e.parentNode,r):e.nodeType===1&&ll(e,r),on(e)):ll(pe,r.stateNode));break;case 4:n=pe,a=Qe,pe=r.stateNode.containerInfo,Qe=!0,mt(e,t,r),pe=n,Qe=a;break;case 0:case 11:case 14:case 15:if(!ve&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){a=n=n.next;do{var l=a,i=l.destroy;l=l.tag,i!==void 0&&(l&2||l&4)&&to(r,t,i),a=a.next}while(a!==n)}mt(e,t,r);break;case 1:if(!ve&&(dr(r,t),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(s){ne(r,t,s)}mt(e,t,r);break;case 21:mt(e,t,r);break;case 22:r.mode&1?(ve=(n=ve)||r.memoizedState!==null,mt(e,t,r),ve=n):mt(e,t,r);break;default:mt(e,t,r)}}function ds(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new Zp),t.forEach(function(n){var a=uf.bind(null,e,n);r.has(n)||(r.add(n),n.then(a,a))})}}function We(e,t){var r=t.deletions;if(r!==null)for(var n=0;n<r.length;n++){var a=r[n];try{var l=e,i=t,s=i;e:for(;s!==null;){switch(s.tag){case 5:pe=s.stateNode,Qe=!1;break e;case 3:pe=s.stateNode.containerInfo,Qe=!0;break e;case 4:pe=s.stateNode.containerInfo,Qe=!0;break e}s=s.return}if(pe===null)throw Error(w(160));xc(l,i,a),pe=null,Qe=!1;var u=a.alternate;u!==null&&(u.return=null),a.return=null}catch(c){ne(a,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)wc(t,e),t=t.sibling}function wc(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(We(t,e),Ze(e),n&4){try{Zr(3,e,e.return),_a(3,e)}catch(b){ne(e,e.return,b)}try{Zr(5,e,e.return)}catch(b){ne(e,e.return,b)}}break;case 1:We(t,e),Ze(e),n&512&&r!==null&&dr(r,r.return);break;case 5:if(We(t,e),Ze(e),n&512&&r!==null&&dr(r,r.return),e.flags&32){var a=e.stateNode;try{rn(a,"")}catch(b){ne(e,e.return,b)}}if(n&4&&(a=e.stateNode,a!=null)){var l=e.memoizedProps,i=r!==null?r.memoizedProps:l,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&l.type==="radio"&&l.name!=null&&Vs(a,l),Fl(s,i);var c=Fl(s,l);for(i=0;i<u.length;i+=2){var g=u[i],y=u[i+1];g==="style"?Gs(a,y):g==="dangerouslySetInnerHTML"?Hs(a,y):g==="children"?rn(a,y):vo(a,g,y,c)}switch(s){case"input":bl(a,l);break;case"textarea":$s(a,l);break;case"select":var v=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!l.multiple;var j=l.value;j!=null?fr(a,!!l.multiple,j,!1):v!==!!l.multiple&&(l.defaultValue!=null?fr(a,!!l.multiple,l.defaultValue,!0):fr(a,!!l.multiple,l.multiple?[]:"",!1))}a[pn]=l}catch(b){ne(e,e.return,b)}}break;case 6:if(We(t,e),Ze(e),n&4){if(e.stateNode===null)throw Error(w(162));a=e.stateNode,l=e.memoizedProps;try{a.nodeValue=l}catch(b){ne(e,e.return,b)}}break;case 3:if(We(t,e),Ze(e),n&4&&r!==null&&r.memoizedState.isDehydrated)try{on(t.containerInfo)}catch(b){ne(e,e.return,b)}break;case 4:We(t,e),Ze(e);break;case 13:We(t,e),Ze(e),a=e.child,a.flags&8192&&(l=a.memoizedState!==null,a.stateNode.isHidden=l,!l||a.alternate!==null&&a.alternate.memoizedState!==null||(Xo=ae())),n&4&&ds(e);break;case 22:if(g=r!==null&&r.memoizedState!==null,e.mode&1?(ve=(c=ve)||g,We(t,e),ve=c):We(t,e),Ze(e),n&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!g&&e.mode&1)for(z=e,g=e.child;g!==null;){for(y=z=g;z!==null;){switch(v=z,j=v.child,v.tag){case 0:case 11:case 14:case 15:Zr(4,v,v.return);break;case 1:dr(v,v.return);var k=v.stateNode;if(typeof k.componentWillUnmount=="function"){n=v,r=v.return;try{t=n,k.props=t.memoizedProps,k.state=t.memoizedState,k.componentWillUnmount()}catch(b){ne(n,r,b)}}break;case 5:dr(v,v.return);break;case 22:if(v.memoizedState!==null){fs(y);continue}}j!==null?(j.return=v,z=j):fs(y)}g=g.sibling}e:for(g=null,y=e;;){if(y.tag===5){if(g===null){g=y;try{a=y.stateNode,c?(l=a.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(s=y.stateNode,u=y.memoizedProps.style,i=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=Qs("display",i))}catch(b){ne(e,e.return,b)}}}else if(y.tag===6){if(g===null)try{y.stateNode.nodeValue=c?"":y.memoizedProps}catch(b){ne(e,e.return,b)}}else if((y.tag!==22&&y.tag!==23||y.memoizedState===null||y===e)&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===e)break e;for(;y.sibling===null;){if(y.return===null||y.return===e)break e;g===y&&(g=null),y=y.return}g===y&&(g=null),y.sibling.return=y.return,y=y.sibling}}break;case 19:We(t,e),Ze(e),n&4&&ds(e);break;case 21:break;default:We(t,e),Ze(e)}}function Ze(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(yc(r)){var n=r;break e}r=r.return}throw Error(w(160))}switch(n.tag){case 5:var a=n.stateNode;n.flags&32&&(rn(a,""),n.flags&=-33);var l=cs(e);ao(e,l,a);break;case 3:case 4:var i=n.stateNode.containerInfo,s=cs(e);no(e,s,i);break;default:throw Error(w(161))}}catch(u){ne(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function ef(e,t,r){z=e,kc(e)}function kc(e,t,r){for(var n=(e.mode&1)!==0;z!==null;){var a=z,l=a.child;if(a.tag===22&&n){var i=a.memoizedState!==null||An;if(!i){var s=a.alternate,u=s!==null&&s.memoizedState!==null||ve;s=An;var c=ve;if(An=i,(ve=u)&&!c)for(z=a;z!==null;)i=z,u=i.child,i.tag===22&&i.memoizedState!==null?ms(a):u!==null?(u.return=i,z=u):ms(a);for(;l!==null;)z=l,kc(l),l=l.sibling;z=a,An=s,ve=c}ps(e)}else a.subtreeFlags&8772&&l!==null?(l.return=a,z=l):ps(e)}}function ps(e){for(;z!==null;){var t=z;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ve||_a(5,t);break;case 1:var n=t.stateNode;if(t.flags&4&&!ve)if(r===null)n.componentDidMount();else{var a=t.elementType===t.type?r.memoizedProps:He(t.type,r.memoizedProps);n.componentDidUpdate(a,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&Xi(t,l,n);break;case 3:var i=t.updateQueue;if(i!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}Xi(t,i,r)}break;case 5:var s=t.stateNode;if(r===null&&t.flags&4){r=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&r.focus();break;case"img":u.src&&(r.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var g=c.memoizedState;if(g!==null){var y=g.dehydrated;y!==null&&on(y)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(w(163))}ve||t.flags&512&&ro(t)}catch(v){ne(t,t.return,v)}}if(t===e){z=null;break}if(r=t.sibling,r!==null){r.return=t.return,z=r;break}z=t.return}}function fs(e){for(;z!==null;){var t=z;if(t===e){z=null;break}var r=t.sibling;if(r!==null){r.return=t.return,z=r;break}z=t.return}}function ms(e){for(;z!==null;){var t=z;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{_a(4,t)}catch(u){ne(t,r,u)}break;case 1:var n=t.stateNode;if(typeof n.componentDidMount=="function"){var a=t.return;try{n.componentDidMount()}catch(u){ne(t,a,u)}}var l=t.return;try{ro(t)}catch(u){ne(t,l,u)}break;case 5:var i=t.return;try{ro(t)}catch(u){ne(t,i,u)}}}catch(u){ne(t,t.return,u)}if(t===e){z=null;break}var s=t.sibling;if(s!==null){s.return=t.return,z=s;break}z=t.return}}var tf=Math.ceil,ya=ft.ReactCurrentDispatcher,Yo=ft.ReactCurrentOwner,Oe=ft.ReactCurrentBatchConfig,$=0,ce=null,le=null,fe=0,Me=0,pr=Tt(0),ie=0,yn=null,Yt=0,Ra=0,Ko=0,Jr=null,Ne=null,Xo=0,Cr=1/0,at=null,xa=!1,lo=null,Ct=null,On=!1,wt=null,wa=0,en=0,oo=null,Xn=-1,qn=0;function we(){return $&6?ae():Xn!==-1?Xn:Xn=ae()}function Et(e){return e.mode&1?$&2&&fe!==0?fe&-fe:Ap.transition!==null?(qn===0&&(qn=lu()),qn):(e=H,e!==0||(e=window.event,e=e===void 0?16:pu(e.type)),e):1}function Ke(e,t,r,n){if(50<en)throw en=0,oo=null,Error(w(185));wn(e,r,n),(!($&2)||e!==ce)&&(e===ce&&(!($&2)&&(Ra|=r),ie===4&&yt(e,fe)),Fe(e,n),r===1&&$===0&&!(t.mode&1)&&(Cr=ae()+500,Ma&&_t()))}function Fe(e,t){var r=e.callbackNode;Ad(e,t);var n=na(e,e===ce?fe:0);if(n===0)r!==null&&bi(r),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(r!=null&&bi(r),t===1)e.tag===0?Ip(hs.bind(null,e)):Pu(hs.bind(null,e)),_p(function(){!($&6)&&_t()}),r=null;else{switch(ou(n)){case 1:r=jo;break;case 4:r=nu;break;case 16:r=ra;break;case 536870912:r=au;break;default:r=ra}r=zc(r,jc.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function jc(e,t){if(Xn=-1,qn=0,$&6)throw Error(w(327));var r=e.callbackNode;if(yr()&&e.callbackNode!==r)return null;var n=na(e,e===ce?fe:0);if(n===0)return null;if(n&30||n&e.expiredLanes||t)t=ka(e,n);else{t=n;var a=$;$|=2;var l=Nc();(ce!==e||fe!==t)&&(at=null,Cr=ae()+500,$t(e,t));do try{af();break}catch(s){bc(e,s)}while(!0);Lo(),ya.current=l,$=a,le!==null?t=0:(ce=null,fe=0,t=ie)}if(t!==0){if(t===2&&(a=_l(e),a!==0&&(n=a,t=io(e,a))),t===1)throw r=yn,$t(e,0),yt(e,n),Fe(e,ae()),r;if(t===6)yt(e,n);else{if(a=e.current.alternate,!(n&30)&&!rf(a)&&(t=ka(e,n),t===2&&(l=_l(e),l!==0&&(n=l,t=io(e,l))),t===1))throw r=yn,$t(e,0),yt(e,n),Fe(e,ae()),r;switch(e.finishedWork=a,e.finishedLanes=n,t){case 0:case 1:throw Error(w(345));case 2:Ot(e,Ne,at);break;case 3:if(yt(e,n),(n&130023424)===n&&(t=Xo+500-ae(),10<t)){if(na(e,0)!==0)break;if(a=e.suspendedLanes,(a&n)!==n){we(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=Bl(Ot.bind(null,e,Ne,at),t);break}Ot(e,Ne,at);break;case 4:if(yt(e,n),(n&4194240)===n)break;for(t=e.eventTimes,a=-1;0<n;){var i=31-Ye(n);l=1<<i,i=t[i],i>a&&(a=i),n&=~l}if(n=a,n=ae()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*tf(n/1960))-n,10<n){e.timeoutHandle=Bl(Ot.bind(null,e,Ne,at),n);break}Ot(e,Ne,at);break;case 5:Ot(e,Ne,at);break;default:throw Error(w(329))}}}return Fe(e,ae()),e.callbackNode===r?jc.bind(null,e):null}function io(e,t){var r=Jr;return e.current.memoizedState.isDehydrated&&($t(e,t).flags|=256),e=ka(e,t),e!==2&&(t=Ne,Ne=r,t!==null&&so(t)),e}function so(e){Ne===null?Ne=e:Ne.push.apply(Ne,e)}function rf(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var a=r[n],l=a.getSnapshot;a=a.value;try{if(!Xe(l(),a))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yt(e,t){for(t&=~Ko,t&=~Ra,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-Ye(t),n=1<<r;e[r]=-1,t&=~n}}function hs(e){if($&6)throw Error(w(327));yr();var t=na(e,0);if(!(t&1))return Fe(e,ae()),null;var r=ka(e,t);if(e.tag!==0&&r===2){var n=_l(e);n!==0&&(t=n,r=io(e,n))}if(r===1)throw r=yn,$t(e,0),yt(e,t),Fe(e,ae()),r;if(r===6)throw Error(w(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Ot(e,Ne,at),Fe(e,ae()),null}function qo(e,t){var r=$;$|=1;try{return e(t)}finally{$=r,$===0&&(Cr=ae()+500,Ma&&_t())}}function Kt(e){wt!==null&&wt.tag===0&&!($&6)&&yr();var t=$;$|=1;var r=Oe.transition,n=H;try{if(Oe.transition=null,H=1,e)return e()}finally{H=n,Oe.transition=r,$=t,!($&6)&&_t()}}function Zo(){Me=pr.current,X(pr)}function $t(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,Tp(r)),le!==null)for(r=le.return;r!==null;){var n=r;switch(To(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&sa();break;case 3:Nr(),X(Ce),X(ye),Bo();break;case 5:Uo(n);break;case 4:Nr();break;case 13:X(Z);break;case 19:X(Z);break;case 10:Do(n.type._context);break;case 22:case 23:Zo()}r=r.return}if(ce=e,le=e=Ft(e.current,null),fe=Me=t,ie=0,yn=null,Ko=Ra=Yt=0,Ne=Jr=null,Bt!==null){for(t=0;t<Bt.length;t++)if(r=Bt[t],n=r.interleaved,n!==null){r.interleaved=null;var a=n.next,l=r.pending;if(l!==null){var i=l.next;l.next=a,n.next=i}r.pending=n}Bt=null}return e}function bc(e,t){do{var r=le;try{if(Lo(),Gn.current=va,ga){for(var n=J.memoizedState;n!==null;){var a=n.queue;a!==null&&(a.pending=null),n=n.next}ga=!1}if(Gt=0,ue=oe=J=null,qr=!1,hn=0,Yo.current=null,r===null||r.return===null){ie=1,yn=t,le=null;break}e:{var l=e,i=r.return,s=r,u=t;if(t=fe,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,g=s,y=g.tag;if(!(g.mode&1)&&(y===0||y===11||y===15)){var v=g.alternate;v?(g.updateQueue=v.updateQueue,g.memoizedState=v.memoizedState,g.lanes=v.lanes):(g.updateQueue=null,g.memoizedState=null)}var j=rs(i);if(j!==null){j.flags&=-257,ns(j,i,s,l,t),j.mode&1&&ts(l,c,t),t=j,u=c;var k=t.updateQueue;if(k===null){var b=new Set;b.add(u),t.updateQueue=b}else k.add(u);break e}else{if(!(t&1)){ts(l,c,t),Jo();break e}u=Error(w(426))}}else if(q&&s.mode&1){var P=rs(i);if(P!==null){!(P.flags&65536)&&(P.flags|=256),ns(P,i,s,l,t),_o(Sr(u,s));break e}}l=u=Sr(u,s),ie!==4&&(ie=2),Jr===null?Jr=[l]:Jr.push(l),l=i;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var h=oc(l,u,t);Ki(l,h);break e;case 1:s=u;var f=l.type,p=l.stateNode;if(!(l.flags&128)&&(typeof f.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Ct===null||!Ct.has(p)))){l.flags|=65536,t&=-t,l.lanes|=t;var x=ic(l,s,t);Ki(l,x);break e}}l=l.return}while(l!==null)}Cc(r)}catch(S){t=S,le===r&&r!==null&&(le=r=r.return);continue}break}while(!0)}function Nc(){var e=ya.current;return ya.current=va,e===null?va:e}function Jo(){(ie===0||ie===3||ie===2)&&(ie=4),ce===null||!(Yt&268435455)&&!(Ra&268435455)||yt(ce,fe)}function ka(e,t){var r=$;$|=2;var n=Nc();(ce!==e||fe!==t)&&(at=null,$t(e,t));do try{nf();break}catch(a){bc(e,a)}while(!0);if(Lo(),$=r,ya.current=n,le!==null)throw Error(w(261));return ce=null,fe=0,ie}function nf(){for(;le!==null;)Sc(le)}function af(){for(;le!==null&&!zd();)Sc(le)}function Sc(e){var t=Fc(e.alternate,e,Me);e.memoizedProps=e.pendingProps,t===null?Cc(e):le=t,Yo.current=null}function Cc(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=qp(r,t),r!==null){r.flags&=32767,le=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ie=6,le=null;return}}else if(r=Xp(r,t,Me),r!==null){le=r;return}if(t=t.sibling,t!==null){le=t;return}le=t=e}while(t!==null);ie===0&&(ie=5)}function Ot(e,t,r){var n=H,a=Oe.transition;try{Oe.transition=null,H=1,lf(e,t,r,n)}finally{Oe.transition=a,H=n}return null}function lf(e,t,r,n){do yr();while(wt!==null);if($&6)throw Error(w(327));r=e.finishedWork;var a=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(w(177));e.callbackNode=null,e.callbackPriority=0;var l=r.lanes|r.childLanes;if(Od(e,l),e===ce&&(le=ce=null,fe=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||On||(On=!0,zc(ra,function(){return yr(),null})),l=(r.flags&15990)!==0,r.subtreeFlags&15990||l){l=Oe.transition,Oe.transition=null;var i=H;H=1;var s=$;$|=4,Yo.current=null,Jp(e,r),wc(r,e),Sp(Ol),aa=!!Al,Ol=Al=null,e.current=r,ef(r),Md(),$=s,H=i,Oe.transition=l}else e.current=r;if(On&&(On=!1,wt=e,wa=a),l=e.pendingLanes,l===0&&(Ct=null),_d(r.stateNode),Fe(e,ae()),t!==null)for(n=e.onRecoverableError,r=0;r<t.length;r++)a=t[r],n(a.value,{componentStack:a.stack,digest:a.digest});if(xa)throw xa=!1,e=lo,lo=null,e;return wa&1&&e.tag!==0&&yr(),l=e.pendingLanes,l&1?e===oo?en++:(en=0,oo=e):en=0,_t(),null}function yr(){if(wt!==null){var e=ou(wa),t=Oe.transition,r=H;try{if(Oe.transition=null,H=16>e?16:e,wt===null)var n=!1;else{if(e=wt,wt=null,wa=0,$&6)throw Error(w(331));var a=$;for($|=4,z=e.current;z!==null;){var l=z,i=l.child;if(z.flags&16){var s=l.deletions;if(s!==null){for(var u=0;u<s.length;u++){var c=s[u];for(z=c;z!==null;){var g=z;switch(g.tag){case 0:case 11:case 15:Zr(8,g,l)}var y=g.child;if(y!==null)y.return=g,z=y;else for(;z!==null;){g=z;var v=g.sibling,j=g.return;if(vc(g),g===c){z=null;break}if(v!==null){v.return=j,z=v;break}z=j}}}var k=l.alternate;if(k!==null){var b=k.child;if(b!==null){k.child=null;do{var P=b.sibling;b.sibling=null,b=P}while(b!==null)}}z=l}}if(l.subtreeFlags&2064&&i!==null)i.return=l,z=i;else e:for(;z!==null;){if(l=z,l.flags&2048)switch(l.tag){case 0:case 11:case 15:Zr(9,l,l.return)}var h=l.sibling;if(h!==null){h.return=l.return,z=h;break e}z=l.return}}var f=e.current;for(z=f;z!==null;){i=z;var p=i.child;if(i.subtreeFlags&2064&&p!==null)p.return=i,z=p;else e:for(i=f;z!==null;){if(s=z,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:_a(9,s)}}catch(S){ne(s,s.return,S)}if(s===i){z=null;break e}var x=s.sibling;if(x!==null){x.return=s.return,z=x;break e}z=s.return}}if($=a,_t(),tt&&typeof tt.onPostCommitFiberRoot=="function")try{tt.onPostCommitFiberRoot(Sa,e)}catch{}n=!0}return n}finally{H=r,Oe.transition=t}}return!1}function gs(e,t,r){t=Sr(r,t),t=oc(e,t,1),e=St(e,t,1),t=we(),e!==null&&(wn(e,1,t),Fe(e,t))}function ne(e,t,r){if(e.tag===3)gs(e,e,r);else for(;t!==null;){if(t.tag===3){gs(t,e,r);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Ct===null||!Ct.has(n))){e=Sr(r,e),e=ic(t,e,1),t=St(t,e,1),e=we(),t!==null&&(wn(t,1,e),Fe(t,e));break}}t=t.return}}function of(e,t,r){var n=e.pingCache;n!==null&&n.delete(t),t=we(),e.pingedLanes|=e.suspendedLanes&r,ce===e&&(fe&r)===r&&(ie===4||ie===3&&(fe&130023424)===fe&&500>ae()-Xo?$t(e,0):Ko|=r),Fe(e,t)}function Ec(e,t){t===0&&(e.mode&1?(t=zn,zn<<=1,!(zn&130023424)&&(zn=4194304)):t=1);var r=we();e=dt(e,t),e!==null&&(wn(e,t,r),Fe(e,r))}function sf(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),Ec(e,r)}function uf(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,a=e.memoizedState;a!==null&&(r=a.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(w(314))}n!==null&&n.delete(t),Ec(e,r)}var Fc;Fc=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ce.current)Se=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return Se=!1,Kp(e,t,r);Se=!!(e.flags&131072)}else Se=!1,q&&t.flags&1048576&&Tu(t,da,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;Kn(e,t),e=t.pendingProps;var a=kr(t,ye.current);vr(t,r),a=$o(null,t,n,e,a,r);var l=Wo();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ee(n)?(l=!0,ua(t)):l=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,Ao(t),a.updater=Ta,t.stateNode=a,a._reactInternals=t,Yl(t,n,e,r),t=ql(null,t,n,!0,l,r)):(t.tag=0,q&&l&&Po(t),xe(null,t,a,r),t=t.child),t;case 16:n=t.elementType;e:{switch(Kn(e,t),e=t.pendingProps,a=n._init,n=a(n._payload),t.type=n,a=t.tag=df(n),e=He(n,e),a){case 0:t=Xl(null,t,n,e,r);break e;case 1:t=os(null,t,n,e,r);break e;case 11:t=as(null,t,n,e,r);break e;case 14:t=ls(null,t,n,He(n.type,e),r);break e}throw Error(w(306,n,""))}return t;case 0:return n=t.type,a=t.pendingProps,a=t.elementType===n?a:He(n,a),Xl(e,t,n,a,r);case 1:return n=t.type,a=t.pendingProps,a=t.elementType===n?a:He(n,a),os(e,t,n,a,r);case 3:e:{if(dc(t),e===null)throw Error(w(387));n=t.pendingProps,l=t.memoizedState,a=l.element,Au(e,t),ma(t,n,null,r);var i=t.memoizedState;if(n=i.element,l.isDehydrated)if(l={element:n,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){a=Sr(Error(w(423)),t),t=is(e,t,n,r,a);break e}else if(n!==a){a=Sr(Error(w(424)),t),t=is(e,t,n,r,a);break e}else for(Pe=Nt(t.stateNode.containerInfo.firstChild),Te=t,q=!0,Ge=null,r=Du(t,null,n,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(jr(),n===a){t=pt(e,t,r);break e}xe(e,t,n,r)}t=t.child}return t;case 5:return Ou(t),e===null&&Hl(t),n=t.type,a=t.pendingProps,l=e!==null?e.memoizedProps:null,i=a.children,Ul(n,a)?i=null:l!==null&&Ul(n,l)&&(t.flags|=32),cc(e,t),xe(e,t,i,r),t.child;case 6:return e===null&&Hl(t),null;case 13:return pc(e,t,r);case 4:return Oo(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=br(t,null,n,r):xe(e,t,n,r),t.child;case 11:return n=t.type,a=t.pendingProps,a=t.elementType===n?a:He(n,a),as(e,t,n,a,r);case 7:return xe(e,t,t.pendingProps,r),t.child;case 8:return xe(e,t,t.pendingProps.children,r),t.child;case 12:return xe(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(n=t.type._context,a=t.pendingProps,l=t.memoizedProps,i=a.value,G(pa,n._currentValue),n._currentValue=i,l!==null)if(Xe(l.value,i)){if(l.children===a.children&&!Ce.current){t=pt(e,t,r);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var s=l.dependencies;if(s!==null){i=l.child;for(var u=s.firstContext;u!==null;){if(u.context===n){if(l.tag===1){u=st(-1,r&-r),u.tag=2;var c=l.updateQueue;if(c!==null){c=c.shared;var g=c.pending;g===null?u.next=u:(u.next=g.next,g.next=u),c.pending=u}}l.lanes|=r,u=l.alternate,u!==null&&(u.lanes|=r),Ql(l.return,r,t),s.lanes|=r;break}u=u.next}}else if(l.tag===10)i=l.type===t.type?null:l.child;else if(l.tag===18){if(i=l.return,i===null)throw Error(w(341));i.lanes|=r,s=i.alternate,s!==null&&(s.lanes|=r),Ql(i,r,t),i=l.sibling}else i=l.child;if(i!==null)i.return=l;else for(i=l;i!==null;){if(i===t){i=null;break}if(l=i.sibling,l!==null){l.return=i.return,i=l;break}i=i.return}l=i}xe(e,t,a.children,r),t=t.child}return t;case 9:return a=t.type,n=t.pendingProps.children,vr(t,r),a=Ue(a),n=n(a),t.flags|=1,xe(e,t,n,r),t.child;case 14:return n=t.type,a=He(n,t.pendingProps),a=He(n.type,a),ls(e,t,n,a,r);case 15:return sc(e,t,t.type,t.pendingProps,r);case 17:return n=t.type,a=t.pendingProps,a=t.elementType===n?a:He(n,a),Kn(e,t),t.tag=1,Ee(n)?(e=!0,ua(t)):e=!1,vr(t,r),lc(t,n,a),Yl(t,n,a,r),ql(null,t,n,!0,e,r);case 19:return fc(e,t,r);case 22:return uc(e,t,r)}throw Error(w(156,t.tag))};function zc(e,t){return ru(e,t)}function cf(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ae(e,t,r,n){return new cf(e,t,r,n)}function ei(e){return e=e.prototype,!(!e||!e.isReactComponent)}function df(e){if(typeof e=="function")return ei(e)?1:0;if(e!=null){if(e=e.$$typeof,e===xo)return 11;if(e===wo)return 14}return 2}function Ft(e,t){var r=e.alternate;return r===null?(r=Ae(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function Zn(e,t,r,n,a,l){var i=2;if(n=e,typeof e=="function")ei(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case rr:return Wt(r.children,a,l,t);case yo:i=8,a|=8;break;case yl:return e=Ae(12,r,t,a|2),e.elementType=yl,e.lanes=l,e;case xl:return e=Ae(13,r,t,a),e.elementType=xl,e.lanes=l,e;case wl:return e=Ae(19,r,t,a),e.elementType=wl,e.lanes=l,e;case Os:return La(r,a,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Is:i=10;break e;case As:i=9;break e;case xo:i=11;break e;case wo:i=14;break e;case ht:i=16,n=null;break e}throw Error(w(130,e==null?e:typeof e,""))}return t=Ae(i,r,t,a),t.elementType=e,t.type=n,t.lanes=l,t}function Wt(e,t,r,n){return e=Ae(7,e,n,t),e.lanes=r,e}function La(e,t,r,n){return e=Ae(22,e,n,t),e.elementType=Os,e.lanes=r,e.stateNode={isHidden:!1},e}function fl(e,t,r){return e=Ae(6,e,null,t),e.lanes=r,e}function ml(e,t,r){return t=Ae(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function pf(e,t,r,n,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ya(0),this.expirationTimes=Ya(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ya(0),this.identifierPrefix=n,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function ti(e,t,r,n,a,l,i,s,u){return e=new pf(e,t,r,s,u),t===1?(t=1,l===!0&&(t|=8)):t=0,l=Ae(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ao(l),e}function ff(e,t,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:tr,key:n==null?null:""+n,children:e,containerInfo:t,implementation:r}}function Mc(e){if(!e)return Mt;e=e._reactInternals;e:{if(qt(e)!==e||e.tag!==1)throw Error(w(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ee(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(w(171))}if(e.tag===1){var r=e.type;if(Ee(r))return Mu(e,r,t)}return t}function Pc(e,t,r,n,a,l,i,s,u){return e=ti(r,n,!0,e,a,l,i,s,u),e.context=Mc(null),r=e.current,n=we(),a=Et(r),l=st(n,a),l.callback=t??null,St(r,l,a),e.current.lanes=a,wn(e,a,n),Fe(e,n),e}function Da(e,t,r,n){var a=t.current,l=we(),i=Et(a);return r=Mc(r),t.context===null?t.context=r:t.pendingContext=r,t=st(l,i),t.payload={element:e},n=n===void 0?null:n,n!==null&&(t.callback=n),e=St(a,t,i),e!==null&&(Ke(e,a,i,l),Qn(e,a,i)),i}function ja(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function vs(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function ri(e,t){vs(e,t),(e=e.alternate)&&vs(e,t)}function mf(){return null}var Tc=typeof reportError=="function"?reportError:function(e){console.error(e)};function ni(e){this._internalRoot=e}Ia.prototype.render=ni.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(w(409));Da(e,t,null,null)};Ia.prototype.unmount=ni.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Kt(function(){Da(null,e,null,null)}),t[ct]=null}};function Ia(e){this._internalRoot=e}Ia.prototype.unstable_scheduleHydration=function(e){if(e){var t=uu();e={blockedOn:null,target:e,priority:t};for(var r=0;r<vt.length&&t!==0&&t<vt[r].priority;r++);vt.splice(r,0,e),r===0&&du(e)}};function ai(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Aa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ys(){}function hf(e,t,r,n,a){if(a){if(typeof n=="function"){var l=n;n=function(){var c=ja(i);l.call(c)}}var i=Pc(t,n,e,0,null,!1,!1,"",ys);return e._reactRootContainer=i,e[ct]=i.current,cn(e.nodeType===8?e.parentNode:e),Kt(),i}for(;a=e.lastChild;)e.removeChild(a);if(typeof n=="function"){var s=n;n=function(){var c=ja(u);s.call(c)}}var u=ti(e,0,!1,null,null,!1,!1,"",ys);return e._reactRootContainer=u,e[ct]=u.current,cn(e.nodeType===8?e.parentNode:e),Kt(function(){Da(t,u,r,n)}),u}function Oa(e,t,r,n,a){var l=r._reactRootContainer;if(l){var i=l;if(typeof a=="function"){var s=a;a=function(){var u=ja(i);s.call(u)}}Da(t,i,e,a)}else i=hf(r,t,e,a,n);return ja(i)}iu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=Wr(t.pendingLanes);r!==0&&(bo(t,r|1),Fe(t,ae()),!($&6)&&(Cr=ae()+500,_t()))}break;case 13:Kt(function(){var n=dt(e,1);if(n!==null){var a=we();Ke(n,e,1,a)}}),ri(e,1)}};No=function(e){if(e.tag===13){var t=dt(e,134217728);if(t!==null){var r=we();Ke(t,e,134217728,r)}ri(e,134217728)}};su=function(e){if(e.tag===13){var t=Et(e),r=dt(e,t);if(r!==null){var n=we();Ke(r,e,t,n)}ri(e,t)}};uu=function(){return H};cu=function(e,t){var r=H;try{return H=e,t()}finally{H=r}};Ml=function(e,t,r){switch(t){case"input":if(bl(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var a=za(n);if(!a)throw Error(w(90));Bs(n),bl(n,a)}}}break;case"textarea":$s(e,r);break;case"select":t=r.value,t!=null&&fr(e,!!r.multiple,t,!1)}};Xs=qo;qs=Kt;var gf={usingClientEntryPoint:!1,Events:[jn,or,za,Ys,Ks,qo]},Br={findFiberByHostInstance:Ut,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},vf={bundleType:Br.bundleType,version:Br.version,rendererPackageName:Br.rendererPackageName,rendererConfig:Br.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ft.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=eu(e),e===null?null:e.stateNode},findFiberByHostInstance:Br.findFiberByHostInstance||mf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Un=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Un.isDisabled&&Un.supportsFiber)try{Sa=Un.inject(vf),tt=Un}catch{}}Re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=gf;Re.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ai(t))throw Error(w(200));return ff(e,t,null,r)};Re.createRoot=function(e,t){if(!ai(e))throw Error(w(299));var r=!1,n="",a=Tc;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=ti(e,1,!1,null,null,r,!1,n,a),e[ct]=t.current,cn(e.nodeType===8?e.parentNode:e),new ni(t)};Re.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(w(188)):(e=Object.keys(e).join(","),Error(w(268,e)));return e=eu(t),e=e===null?null:e.stateNode,e};Re.flushSync=function(e){return Kt(e)};Re.hydrate=function(e,t,r){if(!Aa(t))throw Error(w(200));return Oa(null,e,t,!0,r)};Re.hydrateRoot=function(e,t,r){if(!ai(e))throw Error(w(405));var n=r!=null&&r.hydratedSources||null,a=!1,l="",i=Tc;if(r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(l=r.identifierPrefix),r.onRecoverableError!==void 0&&(i=r.onRecoverableError)),t=Pc(t,null,e,1,r??null,a,!1,l,i),e[ct]=t.current,cn(e),n)for(e=0;e<n.length;e++)r=n[e],a=r._getVersion,a=a(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,a]:t.mutableSourceEagerHydrationData.push(r,a);return new Ia(t)};Re.render=function(e,t,r){if(!Aa(t))throw Error(w(200));return Oa(null,e,t,!1,r)};Re.unmountComponentAtNode=function(e){if(!Aa(e))throw Error(w(40));return e._reactRootContainer?(Kt(function(){Oa(null,null,e,!1,function(){e._reactRootContainer=null,e[ct]=null})}),!0):!1};Re.unstable_batchedUpdates=qo;Re.unstable_renderSubtreeIntoContainer=function(e,t,r,n){if(!Aa(r))throw Error(w(200));if(e==null||e._reactInternals===void 0)throw Error(w(38));return Oa(e,t,r,!1,n)};Re.version="18.3.1-next-f1338f8080-20240426";function _c(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(_c)}catch(e){console.error(e)}}_c(),_s.exports=Re;var yf=_s.exports,xs=yf;gl.createRoot=xs.createRoot,gl.hydrateRoot=xs.hydrateRoot;/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xf=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Rc=(...e)=>e.filter((t,r,n)=>!!t&&t.trim()!==""&&n.indexOf(t)===r).join(" ").trim();/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var wf={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kf=O.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:r=2,absoluteStrokeWidth:n,className:a="",children:l,iconNode:i,...s},u)=>O.createElement("svg",{ref:u,...wf,width:t,height:t,stroke:e,strokeWidth:n?Number(r)*24/Number(t):r,className:Rc("lucide",a),...s},[...i.map(([c,g])=>O.createElement(c,g)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const se=(e,t)=>{const r=O.forwardRef(({className:n,...a},l)=>O.createElement(kf,{ref:l,iconNode:t,className:Rc(`lucide-${xf(e)}`,n),...a}));return r.displayName=`${e}`,r};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lc=se("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rt=se("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const li=se("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ua=se("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jf=se("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bf=se("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nf=se("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sf=se("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cf=se("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uo=se("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ba=se("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ef=se("Maximize2",[["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["polyline",{points:"9 21 3 21 3 15",key:"1avn1i"}],["line",{x1:"21",x2:"14",y1:"3",y2:"10",key:"ota7mn"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ff=se("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zf=se("Music",[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mf=se("QrCode",[["rect",{width:"5",height:"5",x:"3",y:"3",rx:"1",key:"1tu5fj"}],["rect",{width:"5",height:"5",x:"16",y:"3",rx:"1",key:"1v8r4q"}],["rect",{width:"5",height:"5",x:"3",y:"16",rx:"1",key:"1x03jg"}],["path",{d:"M21 16h-3a2 2 0 0 0-2 2v3",key:"177gqh"}],["path",{d:"M21 21v.01",key:"ents32"}],["path",{d:"M12 7v3a2 2 0 0 1-2 2H7",key:"8crl2c"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M12 3h.01",key:"n36tog"}],["path",{d:"M12 16v.01",key:"133mhm"}],["path",{d:"M16 12h1",key:"1slzba"}],["path",{d:"M21 12v.01",key:"1lwtk9"}],["path",{d:"M12 21v-1",key:"1880an"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pf=se("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Er=se("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tf=se("VolumeX",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ba=se("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function _f(){const[e,t]=O.useState(!1),[r,n]=O.useState(!1);O.useEffect(()=>{const l=()=>{t(window.scrollY>80)};return window.addEventListener("scroll",l,{passive:!0}),()=>window.removeEventListener("scroll",l)},[]);const a=[{label:"Home",href:"#hero"},{label:"Countdown",href:"#countdown"},{label:"Invitation",href:"#invitation"},{label:"Couple",href:"#couple"},{label:"Our Story",href:"#story"},{label:"Events",href:"#events"},{label:"Gallery",href:"#gallery"},{label:"RSVP",href:"#rsvp"}];return o.jsxs("header",{className:`royal-navbar ${e?"is-scrolled":""}`,children:[o.jsxs("div",{className:"nav-inner-container",children:[o.jsxs("a",{href:"#hero",className:"nav-monogram-brand",children:[o.jsx("span",{className:"brand-monogram",children:"A & A"}),o.jsx("span",{className:"brand-sub",children:"December 14, 2026"})]}),o.jsxs("nav",{className:"desktop-nav-menu",children:[a.map(l=>o.jsx("a",{href:l.href,className:"desktop-nav-link",children:l.label},l.href)),o.jsxs("a",{href:"#rsvp",className:"nav-rsvp-pill",children:[o.jsx(uo,{size:13,fill:"currentColor"}),o.jsx("span",{children:"RSVP"})]})]}),o.jsx("button",{type:"button",className:"mobile-nav-toggle",onClick:()=>n(!r),"aria-label":"Toggle navigation menu",children:r?o.jsx(Ba,{size:24}):o.jsx(Ff,{size:24})})]}),o.jsxs("div",{className:`mobile-nav-drawer ${r?"is-open":""}`,children:[o.jsxs("div",{className:"mobile-drawer-header",children:[o.jsx("span",{className:"drawer-title",children:"Aarav & Ananya"}),o.jsx("p",{className:"drawer-subtitle",children:"The Royal Wedding • Udaipur"})]}),o.jsxs("div",{className:"mobile-drawer-links",children:[a.map(l=>o.jsx("a",{href:l.href,className:"mobile-drawer-link",onClick:()=>n(!1),children:l.label},l.href)),o.jsxs("a",{href:"#rsvp",className:"mobile-drawer-rsvp-btn btn-royal-gold",onClick:()=>n(!1),children:[o.jsx(uo,{size:16,fill:"currentColor"}),o.jsx("span",{children:"Confirm Attendance"})]})]})]}),o.jsx("style",{children:`
        .royal-navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          transition: all 0.35s ease;
          padding: 18px 0;
          background: linear-gradient(180deg, rgba(252, 248, 242, 0.92) 0%, rgba(252, 248, 242, 0) 100%);
        }

        .royal-navbar.is-scrolled {
          background: rgba(252, 248, 242, 0.95);
          backdrop-filter: blur(14px);
          padding: 12px 0;
          border-bottom: 1px solid rgba(197, 154, 69, 0.22);
          box-shadow: 0 10px 30px rgba(71, 13, 24, 0.06);
        }

        .nav-inner-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .nav-monogram-brand {
          text-decoration: none;
          display: flex;
          flex-direction: column;
        }

        .brand-monogram {
          font-family: var(--font-royal);
          font-size: 1.35rem;
          color: var(--royal-maroon-dark);
          font-weight: 700;
          letter-spacing: 0.08em;
          line-height: 1.1;
        }

        .brand-sub {
          font-size: 0.65rem;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--royal-gold-dark);
          font-weight: 600;
        }

        .desktop-nav-menu {
          display: flex;
          align-items: center;
          gap: 1.6rem;
        }

        .desktop-nav-link {
          text-decoration: none;
          color: var(--royal-charcoal);
          font-size: 0.88rem;
          font-weight: 500;
          letter-spacing: 0.03em;
          position: relative;
          transition: color 0.25s ease;
        }

        .desktop-nav-link::after {
          content: "";
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 1.5px;
          background: var(--royal-gold);
          transition: width 0.25s ease;
        }

        .desktop-nav-link:hover {
          color: var(--royal-maroon);
        }

        .desktop-nav-link:hover::after {
          width: 100%;
        }

        .nav-rsvp-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          padding: 0.5rem 1.25rem;
          background: var(--royal-gold-gradient);
          color: #FFF;
          font-size: 0.82rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          border-radius: 50px;
          text-decoration: none;
          box-shadow: 0 4px 15px rgba(197, 154, 69, 0.3);
          transition: all 0.25s ease;
        }

        .nav-rsvp-pill:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(197, 154, 69, 0.45);
        }

        .mobile-nav-toggle {
          display: none;
          background: none;
          border: none;
          color: var(--royal-maroon-dark);
          cursor: pointer;
          padding: 4px;
        }

        .mobile-nav-drawer {
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          width: 290px;
          background: #FCF8F2;
          box-shadow: -10px 0 35px rgba(0, 0, 0, 0.15);
          padding: 2.5rem 1.8rem;
          display: flex;
          flex-direction: column;
          transform: translateX(100%);
          transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          z-index: 1001;
        }

        .mobile-nav-drawer.is-open {
          transform: translateX(0);
        }

        .mobile-drawer-header {
          border-bottom: 1px solid rgba(197, 154, 69, 0.25);
          padding-bottom: 1.2rem;
          margin-bottom: 1.5rem;
        }

        .drawer-title {
          font-family: var(--font-serif);
          font-size: 1.5rem;
          color: var(--royal-maroon);
          font-weight: 700;
          display: block;
        }

        .drawer-subtitle {
          font-size: 0.78rem;
          color: var(--royal-gold-dark);
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .mobile-drawer-links {
          display: flex;
          flex-direction: column;
          gap: 1.1rem;
        }

        .mobile-drawer-link {
          text-decoration: none;
          color: var(--royal-charcoal);
          font-size: 1.05rem;
          font-family: var(--font-serif);
          font-weight: 600;
          transition: color 0.2s ease;
        }

        .mobile-drawer-link:hover {
          color: var(--royal-maroon);
        }

        .mobile-drawer-rsvp-btn {
          margin-top: 1.5rem;
          width: 100%;
          text-align: center;
        }

        @media (max-width: 900px) {
          .desktop-nav-menu {
            display: none;
          }
          .mobile-nav-toggle {
            display: block;
          }
        }
      `})]})}function Rf({onEnter:e,isMusicPlaying:t,toggleMusic:r}){const[n,a]=O.useState(!1),[l,i]=O.useState(!1),s=O.useRef(null),u=()=>{if(i(!0),a(!0),!t&&r&&r(!0),s.current){s.current.currentTime=0;const g=s.current.play();g!==void 0&&g.catch(y=>{console.warn("Autoplay restricted:",y),setTimeout(e,1500)})}else setTimeout(e,1800);setTimeout(()=>{e()},4500)},c=()=>{e()};return o.jsxs("div",{className:"entrance-overlay-container",children:[o.jsx("div",{className:"entrance-backdrop"}),o.jsxs("div",{className:"entrance-stage-card",children:[o.jsxs("div",{className:"entrance-header",children:[o.jsx("img",{src:"/assets/Ganesh.webp",alt:"Shri Ganesh",className:"entrance-ganesh-icon"}),o.jsx("p",{className:"entrance-shloka",children:"|| ॐ श्री गणेशाय नमः ||"})]}),o.jsx("div",{className:"entrance-media-frame",children:n?o.jsx("video",{ref:s,className:"entrance-video-player",playsInline:!0,preload:"auto",poster:"/assets/Entrance_Box_Front.webp",onEnded:c,children:o.jsx("source",{src:"/assets/Entrance Box Video.mp4",type:"video/mp4"})}):o.jsxs("div",{className:"entrance-front-wrapper",onClick:u,children:[o.jsx("img",{src:"/assets/Entrance_Box_Front.webp",alt:"Royal Wedding Box Cover",className:"entrance-front-cover"}),o.jsxs("div",{className:"entrance-seal-badge",children:[o.jsx("span",{className:"seal-monogram",children:"A & A"}),o.jsx("span",{className:"seal-text",children:"Tap to Open"})]})]})}),l?o.jsxs("div",{className:"entrance-opening-loader",children:[o.jsx("div",{className:"entrance-spinner"}),o.jsx("p",{className:"opening-text",children:"Opening Royal Invitation..."})]}):o.jsxs("div",{className:"entrance-action-center",children:[o.jsxs("button",{type:"button",className:"entrance-interactive-tap",onClick:u,"aria-label":"Open Wedding Invitation",children:[o.jsx("span",{className:"tap-pulse-ring"}),o.jsx("span",{className:"tap-pulse-ring-2"}),o.jsx("span",{className:"tap-core-circle",children:o.jsx("span",{className:"tap-hand-emoji",children:"💌"})})]}),o.jsxs("div",{className:"entrance-pill-prompt",children:[o.jsx(Er,{size:16,className:"sparkle-gold"}),o.jsx("span",{children:"Tap the seal to unveil our invitation"}),o.jsx(Er,{size:16,className:"sparkle-gold"})]}),o.jsxs("button",{type:"button",className:"entrance-skip-btn",onClick:e,children:[o.jsx("span",{children:"Direct Entrance"}),o.jsx(Ua,{size:14})]})]})]}),o.jsx("style",{children:`
        .entrance-overlay-container {
          position: fixed;
          inset: 0;
          z-index: 99999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.25rem;
          background: radial-gradient(circle at center, #2D1418 0%, #15080A 100%);
          animation: fadeIn 0.6s ease-out;
        }

        .entrance-backdrop {
          position: absolute;
          inset: 0;
          background-image: 
            radial-gradient(rgba(197, 154, 69, 0.12) 1px, transparent 1px);
          background-size: 24px 24px;
          opacity: 0.8;
        }

        .entrance-stage-card {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 440px;
          background: rgba(45, 20, 24, 0.85);
          backdrop-filter: blur(16px);
          border: 1.5px solid rgba(197, 154, 69, 0.45);
          border-radius: 28px;
          padding: 2.2rem 1.8rem;
          box-shadow: 0 25px 65px rgba(0, 0, 0, 0.65), 0 0 40px rgba(197, 154, 69, 0.2);
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .entrance-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 1.5rem;
        }

        .entrance-ganesh-icon {
          width: 44px;
          height: auto;
          filter: drop-shadow(0 2px 8px rgba(197, 154, 69, 0.6));
          margin-bottom: 0.5rem;
        }

        .entrance-shloka {
          font-family: var(--font-serif);
          color: var(--royal-gold-light);
          font-size: 1.05rem;
          letter-spacing: 0.08em;
        }

        .entrance-media-frame {
          width: 100%;
          max-width: 320px;
          aspect-ratio: 9 / 14;
          border-radius: 20px;
          overflow: hidden;
          position: relative;
          border: 2px solid var(--royal-gold);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5);
          background: #000;
          cursor: pointer;
        }

        .entrance-front-wrapper {
          width: 100%;
          height: 100%;
          position: relative;
          transition: transform 0.4s ease;
        }

        .entrance-front-wrapper:hover {
          transform: scale(1.02);
        }

        .entrance-front-cover {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .entrance-seal-badge {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: radial-gradient(circle, #ECC874 0%, #C59A45 70%, #8C6828 100%);
          width: 90px;
          height: 90px;
          border-radius: 50%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          border: 3px solid #FFF3B0;
          box-shadow: 0 10px 25px rgba(0,0,0,0.5), 0 0 20px rgba(236, 200, 116, 0.5);
          animation: pulseGlow 2.4s infinite ease-in-out;
        }

        .seal-monogram {
          font-family: var(--font-royal);
          font-size: 1rem;
          color: #4F0E1A;
          font-weight: 700;
          line-height: 1.1;
        }

        .seal-text {
          font-size: 0.65rem;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: #4F0E1A;
          font-weight: 600;
          margin-top: 2px;
        }

        .entrance-video-player {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .entrance-action-center {
          margin-top: 1.8rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }

        .entrance-interactive-tap {
          position: relative;
          width: 68px;
          height: 68px;
          border: none;
          background: transparent;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .tap-pulse-ring, .tap-pulse-ring-2 {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          border: 2px solid var(--royal-gold);
          animation: rippleEffect 2s infinite cubic-bezier(0.1, 0.2, 0.3, 1);
        }

        .tap-pulse-ring-2 {
          animation-delay: 0.6s;
        }

        .tap-core-circle {
          width: 54px;
          height: 54px;
          border-radius: 50%;
          background: var(--royal-gold-gradient);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 6px 18px rgba(197, 154, 69, 0.5);
          transition: transform 0.2s ease;
        }

        .tap-hand-emoji {
          font-size: 1.5rem;
        }

        .entrance-interactive-tap:hover .tap-core-circle {
          transform: scale(1.1);
        }

        .entrance-pill-prompt {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(197, 154, 69, 0.15);
          border: 1px solid rgba(197, 154, 69, 0.4);
          padding: 0.5rem 1.2rem;
          border-radius: 50px;
          color: #FFF3B0;
          font-size: 0.85rem;
          font-weight: 500;
          letter-spacing: 0.03em;
        }

        .entrance-skip-btn {
          background: none;
          border: none;
          color: rgba(246, 226, 163, 0.65);
          font-size: 0.82rem;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
          transition: color 0.2s ease;
          padding: 0.25rem 0.5rem;
        }

        .entrance-skip-btn:hover {
          color: #F6E2A3;
        }

        .entrance-opening-loader {
          margin-top: 1.8rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.8rem;
        }

        .entrance-spinner {
          width: 38px;
          height: 38px;
          border: 3px solid rgba(197, 154, 69, 0.2);
          border-top-color: var(--royal-gold);
          border-radius: 50%;
          animation: spinSlow 0.9s linear infinite;
        }

        .opening-text {
          color: var(--royal-gold-light);
          font-size: 0.9rem;
          font-family: var(--font-serif);
          letter-spacing: 0.05em;
        }

        @keyframes rippleEffect {
          0% { transform: scale(0.9); opacity: 1; }
          100% { transform: scale(1.8); opacity: 0; }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `})]})}function Lf(){const[e,t]=O.useState([]);return O.useEffect(()=>{const r=["marigold","rose","mogra"],n=Array.from({length:18}).map((a,l)=>({id:l,type:r[l%r.length],left:Math.random()*100,size:14+Math.random()*16,duration:9+Math.random()*8,delay:Math.random()*8,sway:15+Math.random()*30,rotation:Math.random()*360}));t(n)},[]),o.jsxs("div",{className:"ambient-petals-system","aria-hidden":"true",children:[e.map(r=>o.jsx("span",{className:`floating-petal petal-${r.type}`,style:{left:`${r.left}%`,width:`${r.size}px`,height:`${r.size*1.3}px`,animationDuration:`${r.duration}s`,animationDelay:`${r.delay}s`,transform:`rotate(${r.rotation}deg)`}},r.id)),o.jsx("style",{children:`
        .ambient-petals-system {
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 999;
          overflow: hidden;
        }

        .floating-petal {
          position: absolute;
          top: -40px;
          border-radius: 50% 0 50% 50%;
          opacity: 0.72;
          filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.08));
          animation-name: petalFall;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }

        .petal-marigold {
          background: radial-gradient(circle, #FFA500 20%, #E67E22 100%);
        }

        .petal-rose {
          background: radial-gradient(circle, #E4007C 20%, #A3004C 100%);
          border-radius: 60% 40% 70% 30% / 50% 60% 40% 50%;
        }

        .petal-mogra {
          background: radial-gradient(circle, #FFFFF0 40%, #FFE4B5 100%);
          border-radius: 50% 50% 50% 0;
          opacity: 0.6;
        }

        @keyframes petalFall {
          0% {
            top: -40px;
            transform: translateX(0) rotate(0deg) scale(0.9);
            opacity: 0;
          }
          10% {
            opacity: 0.75;
          }
          90% {
            opacity: 0.75;
          }
          100% {
            top: 105vh;
            transform: translateX(50px) rotate(360deg) scale(1.1);
            opacity: 0;
          }
        }
      `})]})}function Df({isPlaying:e,onToggle:t}){const[r,n]=O.useState(!1);return o.jsxs("div",{className:"royal-music-controller",children:[o.jsx("button",{type:"button",className:`music-floating-btn ${e?"is-playing":""}`,onClick:t,onMouseEnter:()=>n(!0),onMouseLeave:()=>n(!1),"aria-label":e?"Pause Wedding Shehnai Music":"Play Wedding Shehnai Music",children:e?o.jsxs("div",{className:"audio-equalizer",children:[o.jsx("span",{className:"eq-bar bar-1"}),o.jsx("span",{className:"eq-bar bar-2"}),o.jsx("span",{className:"eq-bar bar-3"}),o.jsx("span",{className:"eq-bar bar-4"})]}):o.jsx(Tf,{size:20,className:"music-muted-icon"})}),o.jsxs("div",{className:`music-status-tooltip ${r||!e?"visible":""}`,children:[o.jsx(zf,{size:13}),o.jsx("span",{children:e?"Shehnai Playing 🎶":"Play Shehnai 🎶"})]}),o.jsx("style",{children:`
        .royal-music-controller {
          position: fixed;
          bottom: 24px;
          right: 24px;
          z-index: 9999;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .music-floating-btn {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          border: 2px solid #ECC874;
          background: linear-gradient(135deg, #721829 0%, #470D18 100%);
          color: #FFF3B0;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 8px 24px rgba(71, 13, 24, 0.45), 0 0 15px rgba(236, 200, 116, 0.35);
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .music-floating-btn:hover {
          transform: scale(1.1);
          box-shadow: 0 12px 30px rgba(71, 13, 24, 0.6), 0 0 25px rgba(236, 200, 116, 0.6);
        }

        .music-floating-btn.is-playing {
          animation: pulseBorder 3s infinite ease-in-out;
        }

        .audio-equalizer {
          display: flex;
          align-items: flex-end;
          gap: 3px;
          height: 18px;
        }

        .eq-bar {
          width: 3px;
          background: #ECC874;
          border-radius: 2px;
          animation: eqDance 1.2s infinite ease-in-out alternate;
        }

        .bar-1 { height: 60%; animation-delay: 0.1s; }
        .bar-2 { height: 100%; animation-delay: 0.3s; }
        .bar-3 { height: 40%; animation-delay: 0.2s; }
        .bar-4 { height: 80%; animation-delay: 0.4s; }

        .music-status-tooltip {
          position: absolute;
          right: 64px;
          white-space: nowrap;
          background: rgba(35, 14, 18, 0.92);
          backdrop-filter: blur(8px);
          color: #FFF3B0;
          font-size: 0.8rem;
          font-weight: 500;
          padding: 6px 14px;
          border-radius: 20px;
          border: 1px solid rgba(236, 200, 116, 0.35);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.25);
          display: flex;
          align-items: center;
          gap: 6px;
          pointer-events: none;
          opacity: 0;
          transform: translateX(8px);
          transition: all 0.25s ease;
        }

        .music-status-tooltip.visible {
          opacity: 1;
          transform: translateX(0);
        }

        @keyframes eqDance {
          0% { height: 20%; }
          100% { height: 100%; }
        }

        @keyframes pulseBorder {
          0%, 100% { box-shadow: 0 8px 24px rgba(71, 13, 24, 0.45), 0 0 15px rgba(236, 200, 116, 0.35); }
          50% { box-shadow: 0 10px 28px rgba(71, 13, 24, 0.6), 0 0 25px rgba(236, 200, 116, 0.6); }
        }

        @media (max-width: 768px) {
          .royal-music-controller {
            bottom: 18px;
            right: 18px;
          }
          .music-floating-btn {
            width: 46px;
            height: 46px;
          }
        }
      `})]})}function If(){return o.jsxs("section",{className:"royal-hero-section",id:"hero",children:[o.jsxs("div",{className:"hero-background-wrapper",children:[o.jsxs("picture",{children:[o.jsx("source",{media:"(max-width: 767px)",srcSet:"/assets/bg_hero_mobile.webp"}),o.jsx("img",{src:"/assets/bg_hero_desktop.webp",alt:"Royal Udaipur Mandap Arch with Marigolds and Lotus Flowers",className:"hero-mandap-bg"})]}),o.jsx("div",{className:"hero-vignette-overlay"})]}),o.jsxs("div",{className:"hero-content-container container",children:[o.jsxs("div",{className:"hero-divine-invocation",children:[o.jsx("img",{src:"/assets/Ganesh.webp",alt:"Shri Ganesh",className:"hero-ganesh-emblem",width:"48",height:"52"}),o.jsx("p",{className:"hero-ganesh-shloka",children:"|| श्री गणेशाय नमः ||"})]}),o.jsx("p",{className:"hero-blessing-text",children:"With the divine blessings of the Almighty & our beloved elders"}),o.jsx("p",{className:"hero-announcement-tagline",children:"We're Getting Married"}),o.jsxs("h1",{className:"hero-couple-names",children:[o.jsx("span",{children:"Aarav"}),o.jsx("span",{className:"hero-ampersand-ornate",children:"&"}),o.jsx("span",{children:"Ananya"})]}),o.jsx("p",{className:"hero-event-pill",children:"December 14, 2026 • The Oberoi Udaivilas, Udaipur"}),o.jsx("div",{className:"hero-couple-cutout-frame",children:o.jsx("img",{src:"/assets/Couple_Image.webp",alt:"Aarav and Ananya in Royal Rajasthani Attire",className:"hero-couple-portrait"})}),o.jsxs("a",{href:"#countdown",className:"hero-scroll-cue-badge","aria-label":"Scroll to countdown section",children:[o.jsx("span",{children:"Scroll down to reveal"}),o.jsx(Rt,{size:14,className:"hero-bounce-arrow"})]})]}),o.jsx("style",{children:`
        .royal-hero-section {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 7.5rem 0 3rem;
          overflow: hidden;
          background: #231215;
          text-align: center;
        }

        .hero-background-wrapper {
          position: absolute;
          inset: 0;
          z-index: 1;
        }

        .hero-mandap-bg {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
        }

        .hero-vignette-overlay {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at center, rgba(35, 18, 21, 0.35) 0%, rgba(20, 8, 10, 0.78) 100%);
        }

        .hero-content-container {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-top: 1rem;
        }

        .hero-divine-invocation {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 0.9rem;
          animation: floatGentle 4s ease-in-out infinite;
        }

        .hero-ganesh-emblem {
          width: 46px;
          height: auto;
          filter: drop-shadow(0 4px 12px rgba(197, 154, 69, 0.65));
        }

        .hero-ganesh-shloka {
          font-family: var(--font-serif);
          color: #FFF3B0;
          font-size: 1.15rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          margin-top: 0.35rem;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.6);
        }

        .hero-blessing-text {
          font-size: clamp(0.85rem, 2vw, 1.05rem);
          color: #F8ECE1;
          font-weight: 400;
          letter-spacing: 0.04em;
          max-width: 580px;
          margin-bottom: 0.4rem;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
        }

        .hero-announcement-tagline {
          font-family: var(--font-script);
          font-size: clamp(1.8rem, 3.8vw, 2.6rem);
          color: #ECC874;
          letter-spacing: 0.04em;
          line-height: 1.1;
          margin-bottom: 0.6rem;
          text-shadow: 0 2px 12px rgba(0, 0, 0, 0.7);
        }

        .hero-couple-names {
          font-family: var(--font-serif);
          font-size: clamp(2.8rem, 8vw, 5.8rem);
          color: #FFFFFF;
          font-weight: 700;
          line-height: 1.05;
          letter-spacing: 0.02em;
          margin-bottom: 0.8rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: clamp(0.6rem, 2vw, 1.6rem);
          text-shadow: 0 4px 20px rgba(0, 0, 0, 0.75);
        }

        .hero-ampersand-ornate {
          font-family: var(--font-calligraphy);
          color: #ECC874;
          font-weight: 400;
          font-size: 1.1em;
          display: inline-block;
          filter: drop-shadow(0 2px 10px rgba(236, 200, 116, 0.6));
        }

        .hero-event-pill {
          background: rgba(255, 255, 255, 0.12);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(236, 200, 116, 0.4);
          color: #FFF8ED;
          padding: 0.45rem 1.4rem;
          border-radius: 50px;
          font-size: clamp(0.8rem, 1.8vw, 0.95rem);
          letter-spacing: 0.06em;
          font-weight: 500;
          box-shadow: 0 4px 15px rgba(0,0,0,0.3);
          margin-bottom: 1.8rem;
        }

        .hero-couple-cutout-frame {
          width: 100%;
          max-width: 440px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
          display: flex;
          justify-content: center;
        }

        .hero-couple-portrait {
          width: 100%;
          height: auto;
          max-height: 480px;
          object-fit: contain;
          filter: drop-shadow(0 15px 35px rgba(0, 0, 0, 0.75));
          animation: floatGentle 5s ease-in-out infinite;
        }

        .hero-scroll-cue-badge {
          margin-top: 1.5rem;
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          background: rgba(255, 255, 255, 0.18);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.35);
          color: #FFF;
          padding: 0.45rem 1.1rem;
          border-radius: 50px;
          text-decoration: none;
          font-size: 0.8rem;
          letter-spacing: 0.06em;
          font-weight: 500;
          transition: all 0.3s ease;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
        }

        .hero-scroll-cue-badge:hover {
          background: var(--royal-gold);
          color: #FFFFFF;
          transform: translateY(2px);
        }

        .hero-bounce-arrow {
          animation: bounceDown 1.6s infinite ease-in-out;
        }

        @keyframes bounceDown {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(4px); }
        }

        @media (max-width: 768px) {
          .royal-hero-section {
            padding: 6rem 0 2rem;
          }
          .hero-couple-names {
            flex-direction: column;
            gap: 0.1rem;
          }
          .hero-couple-cutout-frame {
            max-width: 320px;
          }
          .hero-couple-portrait {
            max-height: 380px;
          }
        }
      `})]})}const Af=new Date("2026-12-14T17:00:00+05:30").getTime();function Of(e=Af){const[t,r]=O.useState(()=>n(e));function n(a){const l=Date.now(),i=Math.max(0,a-l),s=Math.floor(i/(1e3*60*60*24)),u=Math.floor(i%(1e3*60*60*24)/(1e3*60*60)),c=Math.floor(i%(1e3*60*60)/(1e3*60)),g=Math.floor(i%(1e3*60)/1e3);return{days:String(s).padStart(2,"0"),hours:String(u).padStart(2,"0"),minutes:String(c).padStart(2,"0"),seconds:String(g).padStart(2,"0"),isExpired:i<=0,totalRemaining:i}}return O.useEffect(()=>{const a=setInterval(()=>{r(n(e))},1e3);return()=>clearInterval(a)},[e]),t}var oi={};(function e(t,r,n,a){var l=!!(t.Worker&&t.Blob&&t.Promise&&t.OffscreenCanvas&&t.OffscreenCanvasRenderingContext2D&&t.HTMLCanvasElement&&t.HTMLCanvasElement.prototype.transferControlToOffscreen&&t.URL&&t.URL.createObjectURL),i=typeof Path2D=="function"&&typeof DOMMatrix=="function",s=function(){if(!t.OffscreenCanvas)return!1;try{var m=new OffscreenCanvas(1,1),d=m.getContext("2d");d.fillRect(0,0,1,1);var C=m.transferToImageBitmap();d.createPattern(C,"no-repeat")}catch{return!1}return!0}();function u(){}function c(m){var d=r.exports.Promise,C=d!==void 0?d:t.Promise;return typeof C=="function"?new C(m):(m(u,u),null)}var g=function(m,d){return{transform:function(C){if(m)return C;if(d.has(C))return d.get(C);var _=new OffscreenCanvas(C.width,C.height),R=_.getContext("2d");return R.drawImage(C,0,0),d.set(C,_),_},clear:function(){d.clear()}}}(s,new Map),y=function(){var m=Math.floor(16.666666666666668),d,C,_={},R=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(d=function(I){var L=Math.random();return _[L]=requestAnimationFrame(function T(B){R===B||R+m-1<B?(R=B,delete _[L],I()):_[L]=requestAnimationFrame(T)}),L},C=function(I){_[I]&&cancelAnimationFrame(_[I])}):(d=function(I){return setTimeout(I,m)},C=function(I){return clearTimeout(I)}),{frame:d,cancel:C}}(),v=function(){var m,d,C={};function _(R){function I(L,T){R.postMessage({options:L||{},callback:T})}R.init=function(T){var B=T.transferControlToOffscreen();R.postMessage({canvas:B},[B])},R.fire=function(T,B,Q){if(d)return I(T,null),d;var te=Math.random().toString(36).slice(2);return d=c(function(Y){function re(de){de.data.callback===te&&(delete C[te],R.removeEventListener("message",re),d=null,g.clear(),Q(),Y())}R.addEventListener("message",re),I(T,te),C[te]=re.bind(null,{data:{callback:te}})}),d},R.reset=function(){R.postMessage({reset:!0});for(var T in C)C[T](),delete C[T]}}return function(){if(m)return m;if(!n&&l){var R=["var CONFETTI, SIZE = {}, module = {};","("+e.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{m=new Worker(URL.createObjectURL(new Blob([R])))}catch(I){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",I),null}_(m)}return m}}(),j={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function k(m,d){return d?d(m):m}function b(m){return m!=null}function P(m,d,C){return k(m&&b(m[d])?m[d]:j[d],C)}function h(m){return m<0?0:Math.floor(m)}function f(m,d){return Math.floor(Math.random()*(d-m))+m}function p(m){return parseInt(m,16)}function x(m){return m.map(S)}function S(m){var d=String(m).replace(/[^0-9a-f]/gi,"");return d.length<6&&(d=d[0]+d[0]+d[1]+d[1]+d[2]+d[2]),{r:p(d.substring(0,2)),g:p(d.substring(2,4)),b:p(d.substring(4,6))}}function N(m){var d=P(m,"origin",Object);return d.x=P(d,"x",Number),d.y=P(d,"y",Number),d}function E(m){m.width=document.documentElement.clientWidth,m.height=document.documentElement.clientHeight}function M(m){var d=m.getBoundingClientRect();m.width=d.width,m.height=d.height}function W(m){var d=document.createElement("canvas");return d.style.position="fixed",d.style.top="0px",d.style.left="0px",d.style.pointerEvents="none",d.style.zIndex=m,d}function A(m,d,C,_,R,I,L,T,B){m.save(),m.translate(d,C),m.rotate(I),m.scale(_,R),m.arc(0,0,1,L,T,B),m.restore()}function ze(m){var d=m.angle*(Math.PI/180),C=m.spread*(Math.PI/180);return{x:m.x,y:m.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:m.startVelocity*.5+Math.random()*m.startVelocity,angle2D:-d+(.5*C-Math.random()*C),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:m.color,shape:m.shape,tick:0,totalTicks:m.ticks,decay:m.decay,drift:m.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:m.gravity*3,ovalScalar:.6,scalar:m.scalar,flat:m.flat}}function Lt(m,d){d.x+=Math.cos(d.angle2D)*d.velocity+d.drift,d.y+=Math.sin(d.angle2D)*d.velocity+d.gravity,d.velocity*=d.decay,d.flat?(d.wobble=0,d.wobbleX=d.x+10*d.scalar,d.wobbleY=d.y+10*d.scalar,d.tiltSin=0,d.tiltCos=0,d.random=1):(d.wobble+=d.wobbleSpeed,d.wobbleX=d.x+10*d.scalar*Math.cos(d.wobble),d.wobbleY=d.y+10*d.scalar*Math.sin(d.wobble),d.tiltAngle+=.1,d.tiltSin=Math.sin(d.tiltAngle),d.tiltCos=Math.cos(d.tiltAngle),d.random=Math.random()+2);var C=d.tick++/d.totalTicks,_=d.x+d.random*d.tiltCos,R=d.y+d.random*d.tiltSin,I=d.wobbleX+d.random*d.tiltCos,L=d.wobbleY+d.random*d.tiltSin;if(m.fillStyle="rgba("+d.color.r+", "+d.color.g+", "+d.color.b+", "+(1-C)+")",m.beginPath(),i&&d.shape.type==="path"&&typeof d.shape.path=="string"&&Array.isArray(d.shape.matrix))m.fill(_r(d.shape.path,d.shape.matrix,d.x,d.y,Math.abs(I-_)*.1,Math.abs(L-R)*.1,Math.PI/10*d.wobble));else if(d.shape.type==="bitmap"){var T=Math.PI/10*d.wobble,B=Math.abs(I-_)*.1,Q=Math.abs(L-R)*.1,te=d.shape.bitmap.width*d.scalar,Y=d.shape.bitmap.height*d.scalar,re=new DOMMatrix([Math.cos(T)*B,Math.sin(T)*B,-Math.sin(T)*Q,Math.cos(T)*Q,d.x,d.y]);re.multiplySelf(new DOMMatrix(d.shape.matrix));var de=m.createPattern(g.transform(d.shape.bitmap),"no-repeat");de.setTransform(re),m.globalAlpha=1-C,m.fillStyle=de,m.fillRect(d.x-te/2,d.y-Y/2,te,Y),m.globalAlpha=1}else if(d.shape==="circle")m.ellipse?m.ellipse(d.x,d.y,Math.abs(I-_)*d.ovalScalar,Math.abs(L-R)*d.ovalScalar,Math.PI/10*d.wobble,0,2*Math.PI):A(m,d.x,d.y,Math.abs(I-_)*d.ovalScalar,Math.abs(L-R)*d.ovalScalar,Math.PI/10*d.wobble,0,2*Math.PI);else if(d.shape==="star")for(var V=Math.PI/2*3,be=4*d.scalar,Ve=8*d.scalar,$e=d.x,nt=d.y,It=5,qe=Math.PI/It;It--;)$e=d.x+Math.cos(V)*Ve,nt=d.y+Math.sin(V)*Ve,m.lineTo($e,nt),V+=qe,$e=d.x+Math.cos(V)*be,nt=d.y+Math.sin(V)*be,m.lineTo($e,nt),V+=qe;else m.moveTo(Math.floor(d.x),Math.floor(d.y)),m.lineTo(Math.floor(d.wobbleX),Math.floor(R)),m.lineTo(Math.floor(I),Math.floor(L)),m.lineTo(Math.floor(_),Math.floor(d.wobbleY));return m.closePath(),m.fill(),d.tick<d.totalTicks}function Dt(m,d,C,_,R){var I=d.slice(),L=m.getContext("2d"),T,B,Q=c(function(te){function Y(){T=B=null,L.clearRect(0,0,_.width,_.height),g.clear(),R(),te()}function re(){n&&!(_.width===a.width&&_.height===a.height)&&(_.width=m.width=a.width,_.height=m.height=a.height),!_.width&&!_.height&&(C(m),_.width=m.width,_.height=m.height),L.clearRect(0,0,_.width,_.height),I=I.filter(function(de){return Lt(L,de)}),I.length?T=y.frame(re):Y()}T=y.frame(re),B=Y});return{addFettis:function(te){return I=I.concat(te),Q},canvas:m,promise:Q,reset:function(){T&&y.cancel(T),B&&B()}}}function Pr(m,d){var C=!m,_=!!P(d||{},"resize"),R=!1,I=P(d,"disableForReducedMotion",Boolean),L=l&&!!P(d||{},"useWorker"),T=L?v():null,B=C?E:M,Q=m&&T?!!m.__confetti_initialized:!1,te=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,Y;function re(V,be,Ve){for(var $e=P(V,"particleCount",h),nt=P(V,"angle",Number),It=P(V,"spread",Number),qe=P(V,"startVelocity",Number),Ic=P(V,"decay",Number),Ac=P(V,"gravity",Number),Oc=P(V,"drift",Number),ii=P(V,"colors",x),Uc=P(V,"ticks",Number),si=P(V,"shapes"),Bc=P(V,"scalar"),Vc=!!P(V,"flat"),ui=N(V),ci=$e,Va=[],$c=m.width*ui.x,Wc=m.height*ui.y;ci--;)Va.push(ze({x:$c,y:Wc,angle:nt,spread:It,startVelocity:qe,color:ii[ci%ii.length],shape:si[f(0,si.length)],ticks:Uc,decay:Ic,gravity:Ac,drift:Oc,scalar:Bc,flat:Vc}));return Y?Y.addFettis(Va):(Y=Dt(m,Va,B,be,Ve),Y.promise)}function de(V){var be=I||P(V,"disableForReducedMotion",Boolean),Ve=P(V,"zIndex",Number);if(be&&te)return c(function(qe){qe()});C&&Y?m=Y.canvas:C&&!m&&(m=W(Ve),document.body.appendChild(m)),_&&!Q&&B(m);var $e={width:m.width,height:m.height};T&&!Q&&T.init(m),Q=!0,T&&(m.__confetti_initialized=!0);function nt(){if(T){var qe={getBoundingClientRect:function(){if(!C)return m.getBoundingClientRect()}};B(qe),T.postMessage({resize:{width:qe.width,height:qe.height}});return}$e.width=$e.height=null}function It(){Y=null,_&&(R=!1,t.removeEventListener("resize",nt)),C&&m&&(document.body.contains(m)&&document.body.removeChild(m),m=null,Q=!1)}return _&&!R&&(R=!0,t.addEventListener("resize",nt,!1)),T?T.fire(V,$e,It):re(V,$e,It)}return de.reset=function(){T&&T.reset(),Y&&Y.reset()},de}var Tr;function Zt(){return Tr||(Tr=Pr(null,{useWorker:!0,resize:!0})),Tr}function _r(m,d,C,_,R,I,L){var T=new Path2D(m),B=new Path2D;B.addPath(T,new DOMMatrix(d));var Q=new Path2D;return Q.addPath(B,new DOMMatrix([Math.cos(L)*R,Math.sin(L)*R,-Math.sin(L)*I,Math.cos(L)*I,C,_])),Q}function F(m){if(!i)throw new Error("path confetti are not supported in this browser");var d,C;typeof m=="string"?d=m:(d=m.path,C=m.matrix);var _=new Path2D(d),R=document.createElement("canvas"),I=R.getContext("2d");if(!C){for(var L=1e3,T=L,B=L,Q=0,te=0,Y,re,de=0;de<L;de+=2)for(var V=0;V<L;V+=2)I.isPointInPath(_,de,V,"nonzero")&&(T=Math.min(T,de),B=Math.min(B,V),Q=Math.max(Q,de),te=Math.max(te,V));Y=Q-T,re=te-B;var be=10,Ve=Math.min(be/Y,be/re);C=[Ve,0,0,Ve,-Math.round(Y/2+T)*Ve,-Math.round(re/2+B)*Ve]}return{type:"path",path:d,matrix:C}}function D(m){var d,C=1,_="#000000",R='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof m=="string"?d=m:(d=m.text,C="scalar"in m?m.scalar:C,R="fontFamily"in m?m.fontFamily:R,_="color"in m?m.color:_);var I=10*C,L=""+I+"px "+R,T=new OffscreenCanvas(I,I),B=T.getContext("2d");B.font=L;var Q=B.measureText(d),te=Math.ceil(Q.actualBoundingBoxRight+Q.actualBoundingBoxLeft),Y=Math.ceil(Q.actualBoundingBoxAscent+Q.actualBoundingBoxDescent),re=2,de=Q.actualBoundingBoxLeft+re,V=Q.actualBoundingBoxAscent+re;te+=re+re,Y+=re+re,T=new OffscreenCanvas(te,Y),B=T.getContext("2d"),B.font=L,B.fillStyle=_,B.fillText(d,de,V);var be=1/C;return{type:"bitmap",bitmap:T.transferToImageBitmap(),matrix:[be,0,0,be,-te*be/2,-Y*be/2]}}r.exports=function(){return Zt().apply(this,arguments)},r.exports.reset=function(){Zt().reset()},r.exports.create=Pr,r.exports.shapeFromPath=F,r.exports.shapeFromText=D})(function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}}(),oi,!1);const hl=oi.exports;oi.exports.create;function Dc(){const e=["#C59A45","#E9C77C","#FF9F1C","#E4007C","#304C3A","#FFF8ED"];hl({particleCount:60,angle:60,spread:55,origin:{x:0,y:.7},colors:e}),hl({particleCount:60,angle:120,spread:55,origin:{x:1,y:.7},colors:e}),setTimeout(()=>{hl({particleCount:90,spread:100,origin:{y:.6},colors:e,shapes:["circle","square"],scalar:1.2})},200)}function Uf(){const e=O.useRef(null),[t,r]=O.useState(!1),[n,a]=O.useState(!1),[l,i]=O.useState(0),s=Of(),u=O.useCallback(()=>{const p=e.current;if(!p)return;const x=p.getContext("2d",{willReadFrequently:!0}),S=p.getBoundingClientRect();p.width=S.width,p.height=S.height;const N=x.createLinearGradient(0,0,p.width,p.height);N.addColorStop(0,"#B38728"),N.addColorStop(.3,"#FBF5B7"),N.addColorStop(.5,"#DAA520"),N.addColorStop(.7,"#AA771C"),N.addColorStop(1,"#8C6828"),x.fillStyle=N,x.fillRect(0,0,p.width,p.height),x.fillStyle="rgba(255, 255, 255, 0.4)";for(let E=0;E<300;E++){const M=Math.random()*p.width,W=Math.random()*p.height;x.fillRect(M,W,2,2)}x.fillStyle="#4F0E1A",x.font="600 16px Poppins, sans-serif",x.textAlign="center",x.textBaseline="middle",x.fillText("✨ Scratch Here to Reveal ✨",p.width/2,p.height/2)},[]);O.useEffect(()=>(u(),window.addEventListener("resize",u),()=>window.removeEventListener("resize",u)),[u]);const c=(p,x)=>{if(t)return;const S=e.current;if(!S)return;const N=S.getContext("2d",{willReadFrequently:!0}),E=S.getBoundingClientRect(),M=p-E.left,W=x-E.top;N.globalCompositeOperation="destination-out",N.beginPath(),N.arc(M,W,28,0,Math.PI*2),N.fill(),g()},g=()=>{const p=e.current;if(!p||t)return;const N=p.getContext("2d",{willReadFrequently:!0}).getImageData(0,0,p.width,p.height).data;let E=0;for(let A=3;A<N.length;A+=16)N[A]<128&&E++;const M=N.length/16,W=Math.round(E/M*100);i(W),W>42&&y()},y=()=>{r(!0),i(100),Dc();const p=e.current;p&&p.getContext("2d").clearRect(0,0,p.width,p.height)},v=p=>{a(!0),c(p.clientX,p.clientY)},j=p=>{n&&c(p.clientX,p.clientY)},k=()=>a(!1),b=p=>{a(!0);const x=p.touches[0];c(x.clientX,x.clientY)},P=p=>{if(!n)return;const x=p.touches[0];c(x.clientX,x.clientY)},h=()=>a(!1);return o.jsxs("section",{className:"section-padding bg-palace-pattern",id:"countdown",children:[o.jsx("svg",{width:"0",height:"0",className:"svg-clip-defs","aria-hidden":"true",children:o.jsx("defs",{children:o.jsx("clipPath",{id:"royal-heart-clip",clipPathUnits:"objectBoundingBox",children:o.jsx("path",{d:"M 0.5, 0.94 C 0.48, 0.92, 0.05, 0.65, 0.02, 0.35 C -0.01, 0.16, 0.12, 0.02, 0.28, 0.02 C 0.38, 0.02, 0.46, 0.08, 0.5, 0.18 C 0.54, 0.08, 0.62, 0.02, 0.72, 0.02 C 0.88, 0.02, 1.01, 0.16, 0.98, 0.35 C 0.95, 0.65, 0.52, 0.92, 0.5, 0.94 Z"})})})}),o.jsxs("div",{className:"container container-narrow",children:[o.jsxs("div",{className:"section-header",children:[o.jsx("p",{className:"section-eyebrow",children:"The Countdown Begins"}),o.jsx("h2",{className:"section-title",children:"Scratch to Reveal Our Big Day"}),o.jsx("p",{className:"section-subtitle",children:"Rub the royal gold foil to unveil our sacred wedding date and Udaipur palace venue!"})]}),o.jsxs("div",{className:"scratch-heart-stage",children:[o.jsxs("div",{className:"scratch-heart-container",children:[o.jsxs("div",{className:"scratch-revealed-layer",children:[o.jsx("span",{className:"lotus-sacred-icon","aria-hidden":"true",children:"🪷"}),o.jsx("p",{className:"revealed-save-date",children:"Save The Date"}),o.jsx("h3",{className:"revealed-main-date",children:"December 14, 2026"}),o.jsx("p",{className:"revealed-venue-title",children:"The Oberoi Udaivilas • Udaipur"}),o.jsxs("div",{className:"revealed-badge-pill",children:[o.jsx(bf,{size:14,className:"revealed-check"}),o.jsx("span",{children:"Date Revealed"})]})]}),o.jsx("canvas",{ref:e,className:`scratch-foil-canvas ${t?"is-cleared":""}`,onMouseDown:v,onMouseMove:j,onMouseUp:k,onTouchStart:b,onTouchMove:P,onTouchEnd:h,"aria-label":"Scratch card canvas to reveal date"})]}),t?o.jsx("div",{className:"revealed-toast",children:o.jsx("span",{children:"🎉 Joyous Blessings! Mark your calendar for Udaipur."})}):o.jsxs("button",{type:"button",className:"scratch-quick-reveal-btn",onClick:y,children:[o.jsx(Er,{size:15}),o.jsxs("span",{children:["Tap to Instant Reveal (",l,"%)"]})]})]}),o.jsxs("div",{className:"royal-countdown-wrapper",children:[o.jsx("p",{className:"countdown-heading-title",children:"Ticking Towards Our Big Day"}),o.jsxs("div",{className:"countdown-clock-grid",children:[o.jsxs("div",{className:"countdown-time-card",children:[o.jsx("span",{className:"countdown-number",children:s.days}),o.jsx("span",{className:"countdown-unit",children:"Days"})]}),o.jsx("div",{className:"countdown-separator",children:":"}),o.jsxs("div",{className:"countdown-time-card",children:[o.jsx("span",{className:"countdown-number",children:s.hours}),o.jsx("span",{className:"countdown-unit",children:"Hours"})]}),o.jsx("div",{className:"countdown-separator",children:":"}),o.jsxs("div",{className:"countdown-time-card",children:[o.jsx("span",{className:"countdown-number",children:s.minutes}),o.jsx("span",{className:"countdown-unit",children:"Mins"})]}),o.jsx("div",{className:"countdown-separator",children:":"}),o.jsxs("div",{className:"countdown-time-card",children:[o.jsx("span",{className:"countdown-number",children:s.seconds}),o.jsx("span",{className:"countdown-unit",children:"Secs"})]})]}),o.jsx("div",{className:"countdown-actions-row",children:o.jsxs("a",{href:"https://calendar.google.com/calendar/render?action=TEMPLATE&text=Royal+Wedding+-+Aarav+%26+Ananya&dates=20261214T113000Z/20261214T183000Z&details=Royal+Wedding+Celebration+of+Aarav+Sharma+and+Ananya+Verma+at+The+Oberoi+Udaivilas,+Udaipur.&location=The+Oberoi+Udaivilas,+Udaipur,+Rajasthan",target:"_blank",rel:"noopener noreferrer",className:"btn-royal-gold",children:[o.jsx(Lc,{size:18}),o.jsx("span",{children:"Add to Google Calendar"})]})})]}),o.jsx("div",{className:"section-scroll-cue",children:o.jsxs("a",{href:"#invitation",className:"section-scroll-indicator",children:[o.jsx("span",{children:"Formal Invitation"}),o.jsx(Rt,{size:14})]})})]}),o.jsx("style",{children:`
        .svg-clip-defs {
          position: absolute;
          width: 0;
          height: 0;
          pointer-events: none;
        }

        .scratch-heart-stage {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 4rem;
        }

        .scratch-heart-container {
          width: 320px;
          height: 300px;
          position: relative;
          clip-path: url(#royal-heart-clip);
          box-shadow: 0 20px 45px rgba(115, 26, 42, 0.25);
          filter: drop-shadow(0 15px 30px rgba(197, 154, 69, 0.35));
          background: linear-gradient(135deg, #721829 0%, #460C17 100%);
          cursor: crosshair;
        }

        .scratch-revealed-layer {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 1.5rem 1.8rem;
          background: linear-gradient(135deg, #FFF9F0 0%, #F5ECE0 100%);
          color: #4F0E1A;
          user-select: none;
        }

        .lotus-sacred-icon {
          font-size: 2.2rem;
          margin-bottom: 0.2rem;
          filter: drop-shadow(0 2px 6px rgba(197, 154, 69, 0.4));
        }

        .revealed-save-date {
          font-family: var(--font-sans);
          font-size: 0.8rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--royal-gold-dark);
          font-weight: 600;
        }

        .revealed-main-date {
          font-family: var(--font-serif);
          font-size: 1.75rem;
          font-weight: 700;
          color: var(--royal-maroon);
          margin: 0.2rem 0;
          line-height: 1.15;
        }

        .revealed-venue-title {
          font-size: 0.82rem;
          color: var(--royal-muted);
          font-weight: 500;
        }

        .revealed-badge-pill {
          margin-top: 0.6rem;
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          background: rgba(30, 67, 52, 0.1);
          color: #1E4334;
          font-size: 0.72rem;
          font-weight: 600;
          padding: 0.25rem 0.75rem;
          border-radius: 20px;
        }

        .scratch-foil-canvas {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          z-index: 5;
          touch-action: none;
          transition: opacity 0.5s ease;
        }

        .scratch-foil-canvas.is-cleared {
          opacity: 0;
          pointer-events: none;
        }

        .scratch-quick-reveal-btn {
          margin-top: 1.5rem;
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(8px);
          border: 1px solid var(--royal-gold);
          color: var(--royal-gold-dark);
          padding: 0.5rem 1.3rem;
          border-radius: 50px;
          font-size: 0.82rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.25s ease;
          box-shadow: 0 4px 14px rgba(197, 154, 69, 0.2);
        }

        .scratch-quick-reveal-btn:hover {
          background: var(--royal-gold);
          color: #FFF;
          transform: translateY(-2px);
        }

        .revealed-toast {
          margin-top: 1.2rem;
          color: var(--royal-emerald);
          font-weight: 600;
          font-size: 0.9rem;
          animation: fadeIn 0.4s ease-out;
        }

        .royal-countdown-wrapper {
          background: rgba(255, 255, 255, 0.88);
          backdrop-filter: blur(12px);
          border: 1.5px solid rgba(197, 154, 69, 0.35);
          border-radius: 24px;
          padding: 2.5rem 1.8rem;
          text-align: center;
          box-shadow: 0 15px 40px rgba(71, 13, 24, 0.08);
          max-width: 680px;
          margin: 0 auto;
        }

        .countdown-heading-title {
          font-family: var(--font-serif);
          font-size: 1.35rem;
          color: var(--royal-maroon);
          font-weight: 600;
          letter-spacing: 0.04em;
          margin-bottom: 1.6rem;
        }

        .countdown-clock-grid {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: clamp(0.5rem, 2vw, 1.2rem);
          margin-bottom: 2rem;
        }

        .countdown-time-card {
          background: linear-gradient(180deg, #FFFFFF 0%, #FAF5ED 100%);
          border: 1.5px solid rgba(197, 154, 69, 0.4);
          border-radius: 16px;
          padding: 1rem 0.8rem;
          min-width: clamp(64px, 15vw, 92px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .countdown-number {
          font-family: var(--font-display);
          font-size: clamp(1.8rem, 4vw, 2.6rem);
          font-weight: 700;
          color: var(--royal-maroon);
          line-height: 1;
          margin-bottom: 0.3rem;
        }

        .countdown-unit {
          font-size: 0.72rem;
          text-transform: uppercase;
          letter-spacing: 0.14em;
          color: var(--royal-gold-dark);
          font-weight: 600;
        }

        .countdown-separator {
          font-family: var(--font-display);
          font-size: 1.8rem;
          color: var(--royal-gold);
          font-weight: 600;
        }

        .section-scroll-cue {
          text-align: center;
          margin-top: 3rem;
        }

        .section-scroll-indicator {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          color: var(--royal-muted);
          font-size: 0.82rem;
          letter-spacing: 0.05em;
          text-decoration: none;
          transition: color 0.25s ease;
        }

        .section-scroll-indicator:hover {
          color: var(--royal-maroon);
        }

        @media (max-width: 480px) {
          .scratch-heart-container {
            width: 270px;
            height: 255px;
          }
          .revealed-main-date {
            font-size: 1.45rem;
          }
          .countdown-clock-grid {
            gap: 0.3rem;
          }
          .countdown-time-card {
            padding: 0.75rem 0.4rem;
            min-width: 58px;
          }
          .countdown-number {
            font-size: 1.5rem;
          }
        }
      `})]})}function Bf(){return o.jsxs("section",{className:"section-padding bg-palace-silk",id:"invitation",children:[o.jsxs("div",{className:"container container-narrow",children:[o.jsxs("div",{className:"invitation-ornate-card",children:[o.jsx("div",{className:"card-corner corner-top-left"}),o.jsx("div",{className:"card-corner corner-top-right"}),o.jsx("div",{className:"card-corner corner-bottom-left"}),o.jsx("div",{className:"card-corner corner-bottom-right"}),o.jsxs("div",{className:"invitation-shloka-box",children:[o.jsx("p",{className:"sanskrit-shloka-line",children:"वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ।"}),o.jsx("p",{className:"sanskrit-shloka-line",children:"निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥"})]}),o.jsx("p",{className:"invitation-lead-text",children:"Request the honour of your gracious presence on the auspicious occasion of the Subh Vivah of"}),o.jsxs("div",{className:"invitation-name-box",children:[o.jsx("h2",{className:"person-display-name",children:"Aarav Sharma"}),o.jsxs("p",{className:"person-parentage",children:["Son of ",o.jsx("strong",{children:"Mr. Vikram & Mrs. Meenakshi Sharma"})]})]}),o.jsxs("div",{className:"royal-mandala-divider",children:[o.jsx("span",{className:"royal-mandala-line"}),o.jsx("span",{className:"invitation-knot-ampersand",children:"&"}),o.jsx("span",{className:"royal-mandala-line"})]}),o.jsxs("div",{className:"invitation-name-box",children:[o.jsx("h2",{className:"person-display-name",children:"Ananya Verma"}),o.jsxs("p",{className:"person-parentage",children:["Daughter of ",o.jsx("strong",{children:"Mr. Rajesh & Mrs. Sunita Verma"})]})]}),o.jsx("div",{className:"invitation-lotus-ornament",children:o.jsx("span",{className:"lotus-flower-crest",children:"🪷"})}),o.jsx("p",{className:"invitation-heartfelt-quote",children:"“With joyful hearts and the sacred blessings of our elders, we invite you to celebrate the union of two souls and the coming together of two families.”"}),o.jsx("div",{className:"invitation-footer-note",children:o.jsx("span",{children:"UDAIPUR, RAJASTHAN • DECEMBER 2026"})})]}),o.jsx("div",{className:"section-scroll-cue",children:o.jsxs("a",{href:"#couple",className:"section-scroll-indicator",children:[o.jsx("span",{children:"Meet The Couple"}),o.jsx(Rt,{size:14})]})})]}),o.jsx("style",{children:`
        .invitation-ornate-card {
          position: relative;
          background: rgba(255, 255, 255, 0.94);
          backdrop-filter: blur(14px);
          border: 2px solid var(--royal-gold);
          border-radius: 24px;
          padding: 4rem 3rem;
          text-align: center;
          box-shadow: 0 20px 60px rgba(115, 26, 42, 0.08), 0 0 40px rgba(197, 154, 69, 0.12);
        }

        .card-corner {
          position: absolute;
          width: 24px;
          height: 24px;
          border-color: var(--royal-gold-dark);
          border-style: solid;
        }

        .corner-top-left { top: 12px; left: 12px; border-width: 2px 0 0 2px; }
        .corner-top-right { top: 12px; right: 12px; border-width: 2px 2px 0 0; }
        .corner-bottom-left { bottom: 12px; left: 12px; border-width: 0 0 2px 2px; }
        .corner-bottom-right { bottom: 12px; right: 12px; border-width: 0 2px 2px 0; }

        .invitation-shloka-box {
          margin-bottom: 2rem;
        }

        .sanskrit-shloka-line {
          font-family: var(--font-serif);
          font-size: clamp(1.1rem, 2.5vw, 1.4rem);
          color: var(--royal-maroon);
          font-weight: 600;
          letter-spacing: 0.04em;
          line-height: 1.6;
        }

        .invitation-lead-text {
          font-size: clamp(0.92rem, 2vw, 1.08rem);
          color: var(--royal-charcoal);
          max-width: 580px;
          margin: 0 auto 2.4rem;
          line-height: 1.7;
          font-weight: 400;
        }

        .invitation-name-box {
          margin: 1.2rem 0;
        }

        .person-display-name {
          font-family: var(--font-serif);
          font-size: clamp(2.2rem, 5vw, 3.2rem);
          color: var(--royal-maroon-dark);
          font-weight: 700;
          letter-spacing: 0.03em;
          margin-bottom: 0.35rem;
        }

        .person-parentage {
          font-size: 0.95rem;
          color: var(--royal-muted);
        }

        .person-parentage strong {
          color: var(--royal-charcoal);
          font-weight: 600;
        }

        .invitation-knot-ampersand {
          font-family: var(--font-calligraphy);
          font-size: 2.2rem;
          color: var(--royal-gold);
          display: inline-block;
          line-height: 1;
        }

        .invitation-lotus-ornament {
          margin: 1.8rem 0 1.2rem;
        }

        .lotus-flower-crest {
          font-size: 1.8rem;
          filter: drop-shadow(0 2px 6px rgba(197, 154, 69, 0.4));
        }

        .invitation-heartfelt-quote {
          font-family: var(--font-serif);
          font-style: italic;
          font-size: clamp(1.05rem, 2.2vw, 1.25rem);
          color: var(--royal-maroon);
          max-width: 600px;
          margin: 0 auto 1.8rem;
          line-height: 1.6;
        }

        .invitation-footer-note {
          display: inline-block;
          border-top: 1px solid rgba(197, 154, 69, 0.35);
          padding-top: 1.2rem;
          font-size: 0.75rem;
          letter-spacing: 0.18em;
          color: var(--royal-gold-dark);
          font-weight: 600;
        }

        @media (max-width: 768px) {
          .invitation-ornate-card {
            padding: 3rem 1.5rem;
          }
        }
      `})]})}function Vf(){return o.jsxs("section",{className:"section-padding bg-palace-pattern",id:"couple",children:[o.jsxs("div",{className:"container",children:[o.jsxs("div",{className:"section-header",children:[o.jsx("p",{className:"section-eyebrow",children:"Two Souls, One Destiny"}),o.jsx("h2",{className:"section-title",children:"Meet the Bride & Groom"}),o.jsx("p",{className:"section-subtitle",children:"Two distinct lives brought together by serendipity, shared laughter, and an endless love."})]}),o.jsxs("div",{className:"couple-cards-grid",children:[o.jsxs("div",{className:"couple-profile-card",children:[o.jsxs("div",{className:"portrait-jharokha-frame",children:[o.jsx("img",{src:"/assets/Bride.webp",alt:"Ananya Verma - The Bride",className:"portrait-arch-photo"}),o.jsx("span",{className:"role-tag-badge",children:"The Bride"})]}),o.jsx("h3",{className:"couple-name",children:"Ananya"}),o.jsx("p",{className:"couple-bio",children:"An architect with an abiding passion for classical Kathak dance, weaving elegance, warm empathy, and joyous laughter into every room she enters."})]}),o.jsxs("div",{className:"couple-center-divider","aria-hidden":"true",children:[o.jsx("span",{className:"center-ampersand",children:"&"}),o.jsx("div",{className:"center-flower-orbit",children:o.jsx("span",{className:"flower-icon",children:"🪷"})})]}),o.jsxs("div",{className:"couple-profile-card",children:[o.jsxs("div",{className:"portrait-jharokha-frame",children:[o.jsx("img",{src:"/assets/Groom.webp",alt:"Aarav Sharma - The Groom",className:"portrait-arch-photo"}),o.jsx("span",{className:"role-tag-badge",children:"The Groom"})]}),o.jsx("h3",{className:"couple-name",children:"Aarav"}),o.jsx("p",{className:"couple-bio",children:"A visionary tech entrepreneur and avid Himalayan mountain trekker, celebrated for his calm wisdom, heartfelt loyalty, and infectious sense of humor."})]})]}),o.jsx("div",{className:"section-scroll-cue",children:o.jsxs("a",{href:"#story",className:"section-scroll-indicator",children:[o.jsx("span",{children:"Our Love Story"}),o.jsx(Rt,{size:14})]})})]}),o.jsx("style",{children:`
        .couple-cards-grid {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: center;
          gap: 2.5rem;
          max-width: 980px;
          margin: 0 auto;
        }

        .couple-profile-card {
          background: rgba(255, 255, 255, 0.92);
          backdrop-filter: blur(12px);
          border: 1.5px solid rgba(197, 154, 69, 0.35);
          border-radius: 24px;
          padding: 2.5rem 2rem;
          text-align: center;
          box-shadow: 0 15px 35px rgba(71, 13, 24, 0.06);
          transition: transform 0.35s ease, box-shadow 0.35s ease;
        }

        .couple-profile-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 22px 50px rgba(115, 26, 42, 0.14);
          border-color: var(--royal-gold);
        }

        .portrait-jharokha-frame {
          width: 220px;
          height: 270px;
          margin: 0 auto 1.8rem;
          border-top-left-radius: 110px;
          border-top-right-radius: 110px;
          border-bottom-left-radius: 16px;
          border-bottom-right-radius: 16px;
          overflow: hidden;
          position: relative;
          border: 3px solid var(--royal-gold);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.12);
        }

        .portrait-arch-photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .couple-profile-card:hover .portrait-arch-photo {
          transform: scale(1.06);
        }

        .role-tag-badge {
          position: absolute;
          bottom: 12px;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(71, 13, 24, 0.88);
          backdrop-filter: blur(6px);
          color: #FFF3B0;
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          padding: 0.3rem 0.9rem;
          border-radius: 50px;
          border: 1px solid rgba(236, 200, 116, 0.5);
          white-space: nowrap;
        }

        .couple-name {
          font-family: var(--font-serif);
          font-size: 2.2rem;
          color: var(--royal-maroon-dark);
          margin-bottom: 0.8rem;
          font-weight: 700;
        }

        .couple-bio {
          font-size: 0.92rem;
          color: var(--royal-muted);
          line-height: 1.65;
        }

        .couple-center-divider {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .center-ampersand {
          font-family: var(--font-calligraphy);
          font-size: 4.5rem;
          color: var(--royal-gold);
          line-height: 1;
          filter: drop-shadow(0 2px 8px rgba(197, 154, 69, 0.4));
        }

        .center-flower-orbit {
          font-size: 2rem;
          margin-top: -0.5rem;
        }

        @media (max-width: 840px) {
          .couple-cards-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .couple-center-divider {
            margin: -0.5rem 0;
          }
          .center-ampersand {
            font-size: 3rem;
          }
        }
      `})]})}const er=[{step:0,badge:"Chapter 1 of 4 • The Beginning",date:"November 2021",location:"New Delhi",title:"The First Serendipity",desc:"A mutual Diwali dinner sparked hours of effortless laughter over old classics. Amidst flickering diyas, our beautiful journey quietly began.",image:"/assets/Couple IMages/Couple_image.webp",emoji:"✨",quote:"In the glow of a hundred diyas, two stories intertwined."},{step:1,badge:"Chapter 2 of 4 • The Spark",date:"March 2022",location:"Rain-washed Streets",title:"Chai & Endless Conversations",desc:"Over steaming kulhad chai and rain-washed streets, hours vanished like minutes. That evening, we knew we had found our home in each other.",image:"/assets/Couple IMages/Couple_image1.webp",emoji:"☕",quote:"Warm tea, misty rains, and a connection that felt like eternity."},{step:2,badge:"Chapter 3 of 4 • The Promise",date:"October 2025",location:"Lake Pichola, Udaipur",title:"Under the Lake Pichola Stars",desc:"On a candlelit boat across Lake Pichola's shimmering waters, Aarav asked for a lifetime together—and Ananya joyfully whispered yes.",image:"/assets/Couple IMages/Couple_image2.webp",emoji:"💍",quote:"With the Taj Lake Palace glistening in the background, forever began."},{step:3,badge:"Chapter 4 of 4 • Forever Begins",date:"December 14, 2026",location:"Royal Matrimony, Udaipur",title:"Saath Phere & Forever",desc:"Surrounded by holy Vedic chants, rose petals, and beloved family, we take the sacred seven vows. Two souls united into one timeless forever.",image:"/assets/Couple IMages/Couple_image3.webp",emoji:"💟",quote:"Seven steps, seven vows, and a lifetime of shared dreams."}];function $f(){const[e,t]=O.useState(0),r=er[e],n=e/(er.length-1)*100,a=()=>{e>0&&t(e-1)},l=()=>{e<er.length-1&&t(e+1)};return o.jsxs("section",{className:"section-padding bg-palace-silk",id:"story",children:[o.jsxs("div",{className:"container container-narrow",children:[o.jsxs("div",{className:"section-header",children:[o.jsx("p",{className:"section-eyebrow",children:"Our Beautiful Journey"}),o.jsx("h2",{className:"section-title",children:"How It All Began"}),o.jsx("p",{className:"section-subtitle",children:"Every sweet chapter that brought us here today, woven with laughter and destiny."})]}),o.jsxs("div",{className:"milestone-stepper-container",children:[o.jsx("div",{className:"stepper-progress-track",children:o.jsx("div",{className:"stepper-progress-fill",style:{width:`${n}%`}})}),o.jsx("div",{className:"stepper-nodes-row",role:"tablist",children:er.map((i,s)=>{const u=s===e,c=s<e;return o.jsxs("button",{type:"button",className:`stepper-node-btn ${u?"is-active":""} ${c?"is-passed":""}`,onClick:()=>t(s),role:"tab","aria-selected":u,"aria-label":`Milestone ${s+1}: ${i.title}`,children:[o.jsx("span",{className:"node-icon-circle",children:o.jsx("span",{className:"node-emoji",children:i.emoji})}),o.jsxs("span",{className:"node-info-text",children:[o.jsx("span",{className:"node-date",children:i.date.split(" ")[0]}),o.jsx("span",{className:"node-title",children:i.date.split(" ")[1]})]})]},i.step)})})]}),o.jsxs("div",{className:"story-card-wrapper",children:[o.jsx("button",{type:"button",className:"story-nav-chevron chevron-prev",onClick:a,disabled:e===0,"aria-label":"Previous story chapter",children:o.jsx(li,{size:22})}),o.jsxs("article",{className:"active-chapter-card",children:[o.jsx("div",{className:"chapter-visual-col",children:o.jsx("div",{className:"chapter-photo-arch",children:o.jsx("img",{src:r.image,alt:r.title,className:"chapter-portrait-img"},r.image)})}),o.jsxs("div",{className:"chapter-content-col",children:[o.jsx("span",{className:"chapter-badge",children:r.badge}),o.jsxs("p",{className:"chapter-meta-date",children:[r.date," • ",r.location]}),o.jsx("h3",{className:"chapter-headline",children:r.title}),o.jsx("p",{className:"chapter-narrative",children:r.desc}),o.jsxs("div",{className:"chapter-romantic-quote",children:[o.jsx("span",{className:"quote-mark",children:"“"}),o.jsx("p",{children:r.quote})]})]})]}),o.jsx("button",{type:"button",className:"story-nav-chevron chevron-next",onClick:l,disabled:e===er.length-1,"aria-label":"Next story chapter",children:o.jsx(Ua,{size:22})})]}),o.jsx("div",{className:"story-dots-pagination",children:er.map((i,s)=>o.jsx("button",{type:"button",className:`story-dot ${s===e?"is-active":""}`,onClick:()=>t(s),"aria-label":`Go to slide ${s+1}`},s))}),o.jsx("div",{className:"section-scroll-cue",children:o.jsxs("a",{href:"#events",className:"section-scroll-indicator",children:[o.jsx("span",{children:"Celebration Itinerary"}),o.jsx(Rt,{size:14})]})})]}),o.jsx("style",{children:`
        .milestone-stepper-container {
          position: relative;
          margin-bottom: 3.5rem;
          padding: 1rem 0;
        }

        .stepper-progress-track {
          position: absolute;
          top: 36px;
          left: 10%;
          right: 10%;
          height: 3px;
          background: rgba(197, 154, 69, 0.25);
          z-index: 1;
        }

        .stepper-progress-fill {
          height: 100%;
          background: var(--royal-gold-gradient);
          transition: width 0.45s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .stepper-nodes-row {
          display: flex;
          justify-content: space-between;
          position: relative;
          z-index: 2;
        }

        .stepper-node-btn {
          background: none;
          border: none;
          display: flex;
          flex-direction: column;
          align-items: center;
          cursor: pointer;
          transition: transform 0.25s ease;
          padding: 0 0.5rem;
        }

        .stepper-node-btn:hover {
          transform: translateY(-2px);
        }

        .node-icon-circle {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background: #FFF9F0;
          border: 2px solid var(--royal-gold);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
          margin-bottom: 0.5rem;
        }

        .stepper-node-btn.is-active .node-icon-circle {
          background: var(--royal-maroon);
          border-color: #ECC874;
          transform: scale(1.15);
          box-shadow: 0 6px 20px rgba(115, 26, 42, 0.35);
        }

        .node-emoji {
          font-size: 1.3rem;
        }

        .node-info-text {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .node-date {
          font-size: 0.72rem;
          color: var(--royal-gold-dark);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        .node-title {
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--royal-charcoal);
        }

        .story-card-wrapper {
          position: relative;
          display: flex;
          align-items: center;
          gap: 1.2rem;
        }

        .active-chapter-card {
          flex: 1;
          background: rgba(255, 255, 255, 0.94);
          backdrop-filter: blur(14px);
          border: 1.5px solid rgba(197, 154, 69, 0.4);
          border-radius: 28px;
          padding: 2.8rem;
          box-shadow: 0 20px 50px rgba(71, 13, 24, 0.08);
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: 2.5rem;
          align-items: center;
          animation: fadeIn 0.4s ease-out;
        }

        .chapter-photo-arch {
          width: 100%;
          height: 320px;
          border-top-left-radius: 140px;
          border-top-right-radius: 140px;
          border-bottom-left-radius: 20px;
          border-bottom-right-radius: 20px;
          overflow: hidden;
          border: 3px solid var(--royal-gold);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12);
        }

        .chapter-portrait-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        .chapter-badge {
          display: inline-block;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--royal-maroon);
          background: rgba(115, 26, 42, 0.08);
          padding: 0.35rem 0.9rem;
          border-radius: 50px;
          margin-bottom: 0.6rem;
        }

        .chapter-meta-date {
          font-size: 0.85rem;
          color: var(--royal-gold-dark);
          font-weight: 600;
          margin-bottom: 0.6rem;
        }

        .chapter-headline {
          font-family: var(--font-serif);
          font-size: clamp(1.8rem, 3.5vw, 2.4rem);
          color: var(--royal-maroon-dark);
          font-weight: 700;
          line-height: 1.2;
          margin-bottom: 1rem;
        }

        .chapter-narrative {
          font-size: 1rem;
          color: var(--royal-muted);
          line-height: 1.7;
          margin-bottom: 1.4rem;
        }

        .chapter-romantic-quote {
          display: flex;
          gap: 0.6rem;
          background: rgba(247, 229, 169, 0.15);
          border-left: 3px solid var(--royal-gold);
          padding: 0.8rem 1.2rem;
          border-radius: 0 12px 12px 0;
          font-family: var(--font-serif);
          font-style: italic;
          color: var(--royal-maroon);
          font-size: 1.05rem;
        }

        .quote-mark {
          font-size: 1.6rem;
          line-height: 1;
          color: var(--royal-gold);
        }

        .story-nav-chevron {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: #FFF9F0;
          border: 1.5px solid var(--royal-gold);
          color: var(--royal-maroon);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 6px 16px rgba(0,0,0,0.08);
          transition: all 0.25s ease;
          flex-shrink: 0;
        }

        .story-nav-chevron:hover:not(:disabled) {
          background: var(--royal-gold);
          color: #FFF;
          transform: scale(1.08);
        }

        .story-nav-chevron:disabled {
          opacity: 0.35;
          cursor: not-allowed;
        }

        .story-dots-pagination {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          margin-top: 2rem;
        }

        .story-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          border: 1.5px solid var(--royal-gold);
          background: transparent;
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .story-dot.is-active {
          background: var(--royal-gold);
          width: 26px;
          border-radius: 8px;
        }

        @media (max-width: 860px) {
          .active-chapter-card {
            grid-template-columns: 1fr;
            padding: 2rem 1.5rem;
            gap: 1.8rem;
          }
          .chapter-photo-arch {
            max-width: 240px;
            height: 260px;
            margin: 0 auto;
          }
          .story-nav-chevron {
            display: none;
          }
        }
      `})]})}const ws=[{id:"mehndi",number:"01",title:"Mehndi Utsav",day:"Day 1",dateFormatted:"Sunday, December 13, 2026",time:"10:30 AM onwards",shortTime:"Sun, Dec 13 • 10:30 AM",venue:"The Mewar Lawns, The Oberoi Udaivilas",city:"Udaipur, Rajasthan",attire:"Sunshine Yellow & Lime",attireHex:["#F9D923","#A8D858"],description:"Intricate henna patterns, joyful folk music, dhol beats, and traditional Rajasthani swings under the golden morning sun.",image:"/assets/Wedding events/Rasm-e-Heena.webp",mapQuery:"The Oberoi Udaivilas Udaipur",embedMapUrl:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3628.3298687796934!2d73.6687989758778!3d24.58287755651036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967e54736f86617%3A0x6739bb457e4e116!2sThe%20Oberoi%20Udaivilas%2C%20Udaipur!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",calendarUrl:"https://calendar.google.com/calendar/render?action=TEMPLATE&text=Mehndi+Utsav+-+Aarav+%26+Ananya&dates=20261213T050000Z/20261213T093000Z&details=Mehndi+Celebrations+at+The+Oberoi+Udaivilas&location=The+Oberoi+Udaivilas,+Udaipur"},{id:"sangeet",number:"02",title:"Ring Ceremony & Sangeet",day:"Day 1",dateFormatted:"Sunday, December 13, 2026",time:"7:00 PM onwards",shortTime:"Sun, Dec 13 • 7:00 PM",venue:"Grand Ballroom & Courtyard, The Oberoi Udaivilas",city:"Udaipur, Rajasthan",attire:"Regal Rani Pink & Glamour",attireHex:["#E4007C","#D4AF37"],description:"An enchanting evening of ring exchange, energetic choreographed family performances, dazzling fairy lights, and musical symphony.",image:"/assets/Wedding events/Mangni.webp",mapQuery:"The Oberoi Udaivilas Udaipur",embedMapUrl:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3628.3298687796934!2d73.6687989758778!3d24.58287755651036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967e54736f86617%3A0x6739bb457e4e116!2sThe%20Oberoi%20Udaivilas%2C%20Udaipur!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",calendarUrl:"https://calendar.google.com/calendar/render?action=TEMPLATE&text=Ring+Ceremony+%26+Sangeet+-+Aarav+%26+Ananya&dates=20261213T133000Z/20261213T183000Z&details=Ring+Ceremony+and+Sangeet+Night+at+The+Oberoi+Udaivilas&location=The+Oberoi+Udaivilas,+Udaipur"},{id:"wedding",number:"03",title:"The Sacred Saath Phere",day:"Day 2",dateFormatted:"Monday, December 14, 2026",time:"3:30 PM Baraat • 5:00 PM Vows",shortTime:"Mon, Dec 14 • 3:30 PM Baraat",venue:"Mandap by the Pool, The Oberoi Udaivilas",city:"Udaipur, Rajasthan",attire:"Royal Splendor & Pastels",attireHex:["#C59A45","#F8B195"],description:"The auspicious royal Baraat procession followed by sacred Vedic mantras around the holy fire as twilight paints the Udaipur sky.",image:"/assets/Wedding events/Wedding Ceremony.webp",mapQuery:"The Oberoi Udaivilas Udaipur",embedMapUrl:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3628.3298687796934!2d73.6687989758778!3d24.58287755651036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967e54736f86617%3A0x6739bb457e4e116!2sThe%20Oberoi%20Udaivilas%2C%20Udaipur!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",calendarUrl:"https://calendar.google.com/calendar/render?action=TEMPLATE&text=Wedding+Ceremony+(Saath+Phere)+-+Aarav+%26+Ananya&dates=20261214T100000Z/20261214T143000Z&details=The+Sacred+Saath+Phere+at+The+Oberoi+Udaivilas&location=The+Oberoi+Udaivilas,+Udaipur"},{id:"reception",number:"04",title:"The Grand Reception",day:"Day 2",dateFormatted:"Monday, December 14, 2026",time:"8:00 PM onwards",shortTime:"Mon, Dec 14 • 8:00 PM",venue:"Jagmandir Island Palace",city:"Lake Pichola, Udaipur",attire:"Royal Evening Formals / Black Tie",attireHex:["#1B1B2F","#D4AF37"],description:"A fairy-tale dinner feast on the island palace of Lake Pichola with fireworks, live sitar-fusion orchestra, and toasts under the stars.",image:"/assets/Wedding events/Walima.webp",mapQuery:"Jagmandir Island Palace Udaipur",embedMapUrl:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3628.666736413284!2d73.67664687587742!3d24.57140885697669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967e5606d8636e7%3A0x36b0be6e138aeb4b!2sJagmandir%2C%20Udaipur!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",calendarUrl:"https://calendar.google.com/calendar/render?action=TEMPLATE&text=Grand+Reception+-+Aarav+%26+Ananya&dates=20261214T143000Z/20261214T193000Z&details=The+Grand+Reception+Dinner+at+Jagmandir+Island+Palace&location=Jagmandir+Island+Palace,+Lake+Pichola,+Udaipur"}];function Wf({onOpenVenue:e}){const[t,r]=O.useState("all"),n=t==="all"?ws:ws.filter(a=>a.day===t);return o.jsxs("section",{className:"section-padding bg-palace-pattern",id:"events",children:[o.jsxs("div",{className:"container container-narrow",children:[o.jsxs("div",{className:"section-header",children:[o.jsx("p",{className:"section-eyebrow",children:"Celebration Itinerary"}),o.jsx("h2",{className:"section-title",children:"The Wedding Celebrations"}),o.jsx("p",{className:"section-subtitle",children:"Four magnificent gatherings of music, sacred Vedic rites, dance, and joyous festivities in Udaipur."})]}),o.jsxs("div",{className:"itinerary-filter-tabs",children:[o.jsx("button",{type:"button",className:`filter-tab-pill ${t==="all"?"is-active":""}`,onClick:()=>r("all"),children:"All Celebrations (4)"}),o.jsx("button",{type:"button",className:`filter-tab-pill ${t==="Day 1"?"is-active":""}`,onClick:()=>r("Day 1"),children:"Day 1: Dec 13 (Mehndi & Sangeet)"}),o.jsx("button",{type:"button",className:`filter-tab-pill ${t==="Day 2"?"is-active":""}`,onClick:()=>r("Day 2"),children:"Day 2: Dec 14 (Vows & Reception)"})]}),o.jsx("div",{className:"storybook-chapters-list",children:n.map((a,l)=>o.jsxs(Ps.Fragment,{children:[o.jsxs("article",{className:"storybook-chapter-card",children:[o.jsx("span",{className:"chapter-watermark-number","aria-hidden":"true",children:a.number}),o.jsxs("div",{className:"chapter-card-inner",children:[o.jsx("div",{className:"chapter-thumb-wrapper",children:o.jsx("div",{className:"chapter-arch-frame",children:o.jsx("img",{src:a.image,alt:a.title,className:"chapter-thumb-img",loading:"lazy"})})}),o.jsxs("div",{className:"chapter-details-wrapper",children:[o.jsxs("div",{className:"chapter-meta-tag-row",children:[o.jsx("span",{className:"chapter-day-badge",children:a.day}),o.jsxs("span",{className:"chapter-time-pill",children:[o.jsx(Nf,{size:12}),o.jsx("span",{children:a.shortTime})]})]}),o.jsx("h3",{className:"chapter-event-title",children:a.title}),o.jsxs("p",{className:"chapter-venue-info",children:[o.jsx(ba,{size:15,className:"pin-gold"}),o.jsx("span",{children:a.venue})]}),o.jsx("p",{className:"chapter-event-desc",children:a.description}),o.jsxs("div",{className:"chapter-attire-box",children:[o.jsx(Er,{size:14,className:"sparkle-gold"}),o.jsx("span",{className:"attire-label",children:"Attire:"}),o.jsx("span",{className:"attire-desc",children:a.attire}),o.jsx("div",{className:"attire-swatches",children:a.attireHex.map((i,s)=>o.jsx("span",{className:"color-swatch-dot",style:{backgroundColor:i},title:`Attire palette color ${s+1}`},s))})]}),o.jsxs("div",{className:"chapter-actions-cluster",children:[o.jsxs("button",{type:"button",className:"chapter-btn-venue",onClick:()=>e(a),children:[o.jsx(ba,{size:14}),o.jsx("span",{children:"View Venue Map"})]}),o.jsxs("a",{href:a.calendarUrl,target:"_blank",rel:"noopener noreferrer",className:"chapter-btn-cal",children:[o.jsx(Lc,{size:14}),o.jsx("span",{children:"Add to Calendar"})]})]})]})]})]}),l<n.length-1&&o.jsxs("div",{className:"storybook-ornate-divider","aria-hidden":"true",children:[o.jsx("span",{className:"divider-gold-line"}),o.jsx("span",{className:"divider-flourish",children:"❀"}),o.jsx("span",{className:"divider-gold-line"})]})]},a.id))}),o.jsx("div",{className:"section-scroll-cue",children:o.jsxs("a",{href:"#gallery",className:"section-scroll-indicator",children:[o.jsx("span",{children:"Our Visual Diary"}),o.jsx(Rt,{size:14})]})})]}),o.jsx("style",{children:`
        .itinerary-filter-tabs {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 0.8rem;
          margin-bottom: 3rem;
        }

        .filter-tab-pill {
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(197, 154, 69, 0.35);
          color: var(--royal-charcoal);
          font-size: 0.85rem;
          font-weight: 500;
          padding: 0.55rem 1.3rem;
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.25s ease;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
        }

        .filter-tab-pill:hover {
          border-color: var(--royal-gold);
          color: var(--royal-maroon);
        }

        .filter-tab-pill.is-active {
          background: var(--royal-gold-gradient);
          color: #FFFFFF;
          border-color: transparent;
          font-weight: 600;
          box-shadow: 0 6px 18px rgba(197, 154, 69, 0.35);
        }

        .storybook-chapters-list {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .storybook-chapter-card {
          position: relative;
          background: rgba(255, 255, 255, 0.94);
          backdrop-filter: blur(14px);
          border: 1.5px solid rgba(197, 154, 69, 0.38);
          border-radius: 24px;
          padding: 2.2rem 2.4rem;
          box-shadow: 0 16px 40px rgba(71, 13, 24, 0.06);
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .storybook-chapter-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 22px 50px rgba(115, 26, 42, 0.12);
        }

        .chapter-watermark-number {
          position: absolute;
          top: -15px;
          right: 20px;
          font-family: var(--font-royal);
          font-size: 6.5rem;
          color: rgba(197, 154, 69, 0.08);
          font-weight: 700;
          line-height: 1;
          pointer-events: none;
          user-select: none;
        }

        .chapter-card-inner {
          display: grid;
          grid-template-columns: 180px 1fr;
          gap: 2.2rem;
          align-items: center;
          position: relative;
          z-index: 2;
        }

        .chapter-arch-frame {
          width: 100%;
          height: 220px;
          border-top-left-radius: 90px;
          border-top-right-radius: 90px;
          border-bottom-left-radius: 14px;
          border-bottom-right-radius: 14px;
          overflow: hidden;
          border: 2.5px solid var(--royal-gold);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
        }

        .chapter-thumb-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .storybook-chapter-card:hover .chapter-thumb-img {
          transform: scale(1.08);
        }

        .chapter-meta-tag-row {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          margin-bottom: 0.6rem;
        }

        .chapter-day-badge {
          background: rgba(115, 26, 42, 0.09);
          color: var(--royal-maroon);
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 0.25rem 0.7rem;
          border-radius: 50px;
        }

        .chapter-time-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.78rem;
          font-weight: 600;
          color: var(--royal-gold-dark);
        }

        .chapter-event-title {
          font-family: var(--font-serif);
          font-size: clamp(1.6rem, 3vw, 2.1rem);
          color: var(--royal-maroon-dark);
          font-weight: 700;
          margin-bottom: 0.4rem;
        }

        .chapter-venue-info {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.88rem;
          color: var(--royal-charcoal);
          font-weight: 600;
          margin-bottom: 0.8rem;
        }

        .pin-gold {
          color: var(--royal-gold);
        }

        .chapter-event-desc {
          font-size: 0.92rem;
          color: var(--royal-muted);
          line-height: 1.65;
          margin-bottom: 1.1rem;
        }

        .chapter-attire-box {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(247, 229, 169, 0.16);
          border: 1px solid rgba(197, 154, 69, 0.3);
          padding: 0.45rem 1rem;
          border-radius: 12px;
          margin-bottom: 1.3rem;
          width: fit-content;
        }

        .attire-label {
          font-weight: 600;
          color: var(--royal-maroon);
          font-size: 0.82rem;
        }

        .attire-desc {
          font-size: 0.82rem;
          color: var(--royal-charcoal);
        }

        .attire-swatches {
          display: flex;
          gap: 4px;
          margin-left: 4px;
        }

        .color-swatch-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          border: 1px solid rgba(0,0,0,0.15);
        }

        .chapter-actions-cluster {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          flex-wrap: wrap;
        }

        .chapter-btn-venue {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.55rem 1.25rem;
          background: var(--royal-gold);
          color: #FFF;
          font-size: 0.82rem;
          font-weight: 600;
          border: none;
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.25s ease;
          box-shadow: 0 4px 12px rgba(197, 154, 69, 0.3);
        }

        .chapter-btn-venue:hover {
          background: var(--royal-gold-dark);
          transform: translateY(-2px);
        }

        .chapter-btn-cal {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.55rem 1.25rem;
          background: transparent;
          color: var(--royal-charcoal);
          font-size: 0.82rem;
          font-weight: 600;
          border: 1px solid rgba(197, 154, 69, 0.4);
          border-radius: 50px;
          text-decoration: none;
          transition: all 0.25s ease;
        }

        .chapter-btn-cal:hover {
          border-color: var(--royal-gold);
          color: var(--royal-maroon);
          background: rgba(255, 255, 255, 0.8);
        }

        .storybook-ornate-divider {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          padding: 0.5rem 0;
        }

        .divider-gold-line {
          flex: 1;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(197, 154, 69, 0.4), transparent);
        }

        .divider-flourish {
          color: var(--royal-gold);
          font-size: 1.2rem;
        }

        @media (max-width: 768px) {
          .storybook-chapter-card {
            padding: 1.8rem 1.4rem;
          }
          .chapter-card-inner {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          .chapter-arch-frame {
            max-width: 170px;
            height: 200px;
            margin: 0 auto;
          }
          .chapter-details-wrapper {
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .chapter-actions-cluster {
            justify-content: center;
          }
        }
      `})]})}function Hf({event:e,onClose:t}){if(!e)return null;const r=`https://maps.google.com/?q=${encodeURIComponent(e.venue+" "+e.city)}`;return o.jsxs("div",{className:"venue-modal-backdrop",role:"dialog","aria-modal":"true","aria-labelledby":"venue-modal-title",children:[o.jsx("div",{className:"venue-modal-overlay",onClick:t}),o.jsxs("div",{className:"venue-modal-card",children:[o.jsx("button",{type:"button",className:"venue-modal-close-btn",onClick:t,"aria-label":"Close venue details",children:o.jsx(Ba,{size:20})}),o.jsxs("div",{className:"venue-modal-header",children:[o.jsxs("span",{className:"venue-badge-pill",children:[e.title," Venue"]}),o.jsx("h3",{className:"venue-modal-title",id:"venue-modal-title",children:e.venue}),o.jsxs("p",{className:"venue-modal-address",children:[o.jsx(ba,{size:15,className:"pin-icon"}),o.jsx("span",{children:e.city})]})]}),o.jsx("div",{className:"venue-map-viewport",children:o.jsx("iframe",{src:e.embedMapUrl,className:"venue-map-iframe",title:`${e.venue} Google Map`,loading:"lazy",allowFullScreen:"",referrerPolicy:"no-referrer-when-downgrade"})}),o.jsx("div",{className:"venue-modal-footer",children:o.jsxs("a",{href:r,target:"_blank",rel:"noopener noreferrer",className:"btn-directions-link btn-royal-gold",children:[o.jsx(ba,{size:16}),o.jsx("span",{children:"Open in Google Maps Navigation"}),o.jsx(Cf,{size:14})]})})]}),o.jsx("style",{children:`
        .venue-modal-backdrop {
          position: fixed;
          inset: 0;
          z-index: 10000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.25rem;
          animation: fadeIn 0.25s ease-out;
        }

        .venue-modal-overlay {
          position: absolute;
          inset: 0;
          background: rgba(25, 12, 16, 0.75);
          backdrop-filter: blur(8px);
        }

        .venue-modal-card {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 620px;
          background: #FCF8F2;
          border: 2px solid var(--royal-gold);
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 25px 65px rgba(0, 0, 0, 0.45);
          display: flex;
          flex-direction: column;
        }

        .venue-modal-close-btn {
          position: absolute;
          top: 16px;
          right: 16px;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(115, 26, 42, 0.08);
          border: 1px solid rgba(197, 154, 69, 0.3);
          color: var(--royal-maroon);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
          z-index: 10;
        }

        .venue-modal-close-btn:hover {
          background: var(--royal-maroon);
          color: #FFF;
        }

        .venue-modal-header {
          padding: 2rem 2.2rem 1.2rem;
          text-align: left;
        }

        .venue-badge-pill {
          display: inline-block;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--royal-gold-dark);
          margin-bottom: 0.4rem;
        }

        .venue-modal-title {
          font-family: var(--font-serif);
          font-size: 1.65rem;
          color: var(--royal-maroon-dark);
          font-weight: 700;
          line-height: 1.2;
          margin-bottom: 0.4rem;
        }

        .venue-modal-address {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.88rem;
          color: var(--royal-muted);
        }

        .pin-icon {
          color: var(--royal-gold);
        }

        .venue-map-viewport {
          width: 100%;
          height: 300px;
          background: #E5E3DF;
          position: relative;
        }

        .venue-map-iframe {
          width: 100%;
          height: 100%;
          border: none;
        }

        .venue-modal-footer {
          padding: 1.4rem 2.2rem;
          display: flex;
          justify-content: center;
          background: #FAF5ED;
          border-top: 1px solid rgba(197, 154, 69, 0.25);
        }

        .btn-directions-link {
          width: 100%;
        }

        @media (max-width: 600px) {
          .venue-modal-header {
            padding: 1.5rem 1.4rem 1rem;
          }
          .venue-modal-title {
            font-size: 1.35rem;
          }
          .venue-map-viewport {
            height: 240px;
          }
          .venue-modal-footer {
            padding: 1rem 1.4rem;
          }
        }
      `})]})}const xr=[{id:1,roman:"I",title:"Smiles & Serenity",subtitle:"Pre-Wedding Moments",caption:"A tender smile captured in the regal gardens of Udaipur.",category:"Pre-Wedding",src:"/assets/Couple IMages/Couple_image.webp",crest:"🌸"},{id:2,roman:"II",title:"Royal Elegance",subtitle:"Heritage Court",caption:"Stepping through centuries of royal architecture in traditional finery.",category:"Heritage",src:"/assets/Couple IMages/Couple_image1.webp",crest:"✨"},{id:3,roman:"III",title:"Lakeside Sunset",subtitle:"Lake Pichola Waters",caption:"Golden hour hues reflecting across the calm, sacred waters.",category:"Lake Pichola",src:"/assets/Couple IMages/Couple_image2.webp",crest:"🌸"},{id:4,roman:"IV",title:"Candid Radiance",subtitle:"Laughter & Joy",caption:"Unfiltered laughter and shared joy that lights up the world.",category:"Candid",src:"/assets/Couple IMages/Couple_image3.webp",crest:"💛"},{id:5,roman:"V",title:"Hand in Hand",subtitle:"The Royal Corridors",caption:"Walking side-by-side towards a magnificent new dawn.",category:"Romance",src:"/assets/Couple IMages/Couple_image4.webp",crest:"💟"},{id:6,roman:"VI",title:"Forever & Always",subtitle:"Pre-Wedding Glow",caption:"With hearts full of anticipation for the lifetime ahead.",category:"Portraits",src:"/assets/Couple IMages/Couple_image5.webp",crest:"✨"}];function Qf({onOpenLightbox:e}){const[t,r]=O.useState(0),[n,a]=O.useState("all"),l=["all","Pre-Wedding","Lake Pichola","Candid","Romance"],i=n==="all"?xr:xr.filter(g=>g.category===n),s=i[t]||i[0]||xr[0],u=()=>{r(g=>g===0?i.length-1:g-1)},c=()=>{r(g=>g===i.length-1?0:g+1)};return o.jsxs("section",{className:"section-padding bg-palace-silk",id:"gallery",children:[o.jsxs("div",{className:"container",children:[o.jsxs("div",{className:"section-header",children:[o.jsx("p",{className:"section-eyebrow",children:"Cherished Moments"}),o.jsx("h2",{className:"section-title",children:"Our Visual Diary"}),o.jsx("p",{className:"section-subtitle",children:"Glimpses of love, goofy smiles, and unforgettable pre-wedding memories by the waters of Udaipur."})]}),o.jsx("div",{className:"gallery-category-bar",children:l.map(g=>o.jsx("button",{type:"button",className:`gallery-cat-pill ${n===g?"is-active":""}`,onClick:()=>{a(g),r(0)},children:g==="all"?"All Glimpses":g},g))}),o.jsxs("div",{className:"jharokha-showcase-stage",children:[o.jsxs("div",{className:"jharokha-arch-frame",children:[o.jsx("div",{className:"jharokha-crown-arch",children:o.jsx("span",{className:"crown-crest-symbol",children:s.crest})}),o.jsxs("div",{className:"jharokha-photo-window",onClick:()=>e(s,t),children:[o.jsx("img",{src:s.src,alt:s.title,className:"jharokha-photo-img"},s.src),o.jsx("div",{className:"jharokha-photo-overlay",children:o.jsxs("button",{type:"button",className:"photo-zoom-btn","aria-label":"Enlarge photo in lightbox",children:[o.jsx(Ef,{size:18}),o.jsx("span",{children:"Enlarge View"})]})}),o.jsxs("div",{className:"jharokha-bottom-caption",children:[o.jsx("span",{className:"caption-category-pill",children:s.category}),o.jsx("h3",{className:"caption-photo-title",children:s.title}),o.jsx("p",{className:"caption-desc",children:s.caption})]})]})]}),o.jsxs("div",{className:"jharokha-navigation-bar",children:[o.jsx("button",{type:"button",className:"jharokha-arrow-btn",onClick:u,"aria-label":"Previous photo",children:o.jsx(li,{size:22})}),o.jsx("div",{className:"roman-pagination-pills",role:"tablist",children:i.map((g,y)=>o.jsx("button",{type:"button",className:`roman-pill-btn ${y===t?"is-active":""}`,onClick:()=>r(y),role:"tab","aria-selected":y===t,"aria-label":`Go to photo ${y+1}`,children:g.roman},g.id))}),o.jsx("button",{type:"button",className:"jharokha-arrow-btn",onClick:c,"aria-label":"Next photo",children:o.jsx(Ua,{size:22})})]})]}),o.jsx("div",{className:"section-scroll-cue",children:o.jsxs("a",{href:"#rsvp",className:"section-scroll-indicator",children:[o.jsx("span",{children:"RSVP Attendance"}),o.jsx(Rt,{size:14})]})})]}),o.jsx("style",{children:`
        .gallery-category-bar {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 0.65rem;
          margin-bottom: 2.5rem;
        }

        .gallery-cat-pill {
          background: rgba(255, 255, 255, 0.85);
          border: 1px solid rgba(197, 154, 69, 0.35);
          color: var(--royal-charcoal);
          font-size: 0.82rem;
          font-weight: 500;
          padding: 0.45rem 1.2rem;
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .gallery-cat-pill:hover {
          border-color: var(--royal-gold);
          color: var(--royal-maroon);
        }

        .gallery-cat-pill.is-active {
          background: var(--royal-gold-gradient);
          color: #FFF;
          font-weight: 600;
          border-color: transparent;
          box-shadow: 0 4px 14px rgba(197, 154, 69, 0.3);
        }

        .jharokha-showcase-stage {
          max-width: 680px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .jharokha-arch-frame {
          width: 100%;
          background: #FFFFFF;
          border: 3px solid var(--royal-gold);
          border-top-left-radius: 200px;
          border-top-right-radius: 200px;
          border-bottom-left-radius: 24px;
          border-bottom-right-radius: 24px;
          overflow: hidden;
          box-shadow: 0 20px 50px rgba(115, 26, 42, 0.12), 0 0 35px rgba(197, 154, 69, 0.2);
          position: relative;
        }

        .jharokha-crown-arch {
          background: linear-gradient(135deg, #8C6828 0%, #C59A45 50%, #ECC874 100%);
          height: 52px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-bottom: 2px solid #FFF3B0;
        }

        .crown-crest-symbol {
          font-size: 1.6rem;
          filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
        }

        .jharokha-photo-window {
          position: relative;
          width: 100%;
          aspect-ratio: 1 / 1;
          overflow: hidden;
          cursor: pointer;
          background: #15080A;
        }

        .jharokha-photo-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.65s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .jharokha-photo-window:hover .jharokha-photo-img {
          transform: scale(1.05);
        }

        .jharokha-photo-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(0, 0, 0, 0.1) 0%, rgba(20, 8, 10, 0.75) 100%);
          opacity: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: opacity 0.3s ease;
        }

        .jharokha-photo-window:hover .jharokha-photo-overlay {
          opacity: 1;
        }

        .photo-zoom-btn {
          background: rgba(255, 255, 255, 0.92);
          backdrop-filter: blur(6px);
          color: var(--royal-maroon);
          border: none;
          padding: 0.6rem 1.4rem;
          border-radius: 50px;
          font-size: 0.85rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 0.4rem;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
          transform: translateY(10px);
          transition: transform 0.3s ease;
        }

        .jharokha-photo-window:hover .photo-zoom-btn {
          transform: translateY(0);
        }

        .jharokha-bottom-caption {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 2rem 2rem 1.6rem;
          background: linear-gradient(0deg, rgba(15, 6, 8, 0.92) 0%, rgba(15, 6, 8, 0.6) 60%, transparent 100%);
          color: #FFF;
          text-align: center;
        }

        .caption-category-pill {
          display: inline-block;
          background: rgba(236, 200, 116, 0.25);
          border: 1px solid rgba(236, 200, 116, 0.6);
          color: #FFF3B0;
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 0.2rem 0.75rem;
          border-radius: 50px;
          margin-bottom: 0.4rem;
        }

        .caption-photo-title {
          font-family: var(--font-serif);
          font-size: clamp(1.5rem, 3vw, 1.9rem);
          color: #FFFFFF;
          margin-bottom: 0.2rem;
          font-weight: 700;
        }

        .caption-desc {
          font-size: 0.85rem;
          color: #E2D9D0;
          max-width: 480px;
          margin: 0 auto;
        }

        .jharokha-navigation-bar {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1.2rem;
          margin-top: 2rem;
          width: 100%;
        }

        .jharokha-arrow-btn {
          width: 46px;
          height: 46px;
          border-radius: 50%;
          background: #FFFFFF;
          border: 1.5px solid var(--royal-gold);
          color: var(--royal-maroon);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
          transition: all 0.25s ease;
        }

        .jharokha-arrow-btn:hover {
          background: var(--royal-gold);
          color: #FFF;
          transform: scale(1.08);
        }

        .roman-pagination-pills {
          display: flex;
          gap: 0.5rem;
          background: rgba(255, 255, 255, 0.9);
          padding: 0.35rem 0.65rem;
          border-radius: 50px;
          border: 1.5px solid rgba(197, 154, 69, 0.35);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
        }

        .roman-pill-btn {
          background: none;
          border: none;
          min-width: 32px;
          height: 32px;
          border-radius: 50%;
          font-family: var(--font-serif);
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--royal-charcoal);
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .roman-pill-btn.is-active {
          background: var(--royal-gold-gradient);
          color: #FFFFFF;
          box-shadow: 0 2px 8px rgba(197, 154, 69, 0.4);
        }

        @media (max-width: 600px) {
          .jharokha-arch-frame {
            border-top-left-radius: 140px;
            border-top-right-radius: 140px;
          }
          .jharokha-navigation-bar {
            gap: 0.8rem;
          }
          .roman-pagination-pills {
            gap: 0.25rem;
            padding: 0.25rem 0.4rem;
          }
          .roman-pill-btn {
            min-width: 28px;
            height: 28px;
            font-size: 0.82rem;
          }
        }
      `})]})}function Gf({photo:e,index:t,onClose:r,onNavigate:n}){return e?(O.useEffect(()=>{const a=l=>{l.key==="Escape"&&r(),l.key==="ArrowLeft"&&n(-1),l.key==="ArrowRight"&&n(1)};return window.addEventListener("keydown",a),()=>window.removeEventListener("keydown",a)},[r,n]),o.jsxs("div",{className:"lightbox-backdrop",role:"dialog","aria-modal":"true","aria-label":"Photo Lightbox",children:[o.jsx("div",{className:"lightbox-overlay",onClick:r}),o.jsxs("div",{className:"lightbox-modal-content",children:[o.jsx("button",{type:"button",className:"lightbox-close-btn",onClick:r,"aria-label":"Close Lightbox",children:o.jsx(Ba,{size:24})}),o.jsx("button",{type:"button",className:"lightbox-nav-arrow arrow-prev",onClick:()=>n(-1),"aria-label":"Previous photo",children:o.jsx(li,{size:32})}),o.jsxs("div",{className:"lightbox-image-stage",children:[o.jsx("img",{src:e.src,alt:e.title,className:"lightbox-enlarged-img"}),o.jsxs("div",{className:"lightbox-caption-bar",children:[o.jsxs("div",{className:"lightbox-meta",children:[o.jsxs("span",{className:"lightbox-counter",children:["Photo ",t+1," of ",xr.length]}),o.jsx("h4",{className:"lightbox-title",children:e.title})]}),o.jsx("span",{className:"lightbox-monogram",children:"Aarav & Ananya"})]})]}),o.jsx("button",{type:"button",className:"lightbox-nav-arrow arrow-next",onClick:()=>n(1),"aria-label":"Next photo",children:o.jsx(Ua,{size:32})})]}),o.jsx("style",{children:`
        .lightbox-backdrop {
          position: fixed;
          inset: 0;
          z-index: 100000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
        }

        .lightbox-overlay {
          position: absolute;
          inset: 0;
          background: rgba(15, 6, 8, 0.92);
          backdrop-filter: blur(12px);
        }

        .lightbox-modal-content {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 900px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .lightbox-close-btn {
          position: absolute;
          top: -45px;
          right: 0;
          background: none;
          border: none;
          color: #FFF3B0;
          cursor: pointer;
          transition: transform 0.2s ease;
        }

        .lightbox-close-btn:hover {
          transform: scale(1.2);
          color: #FFF;
        }

        .lightbox-nav-arrow {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(236, 200, 116, 0.35);
          color: #FFF;
          width: 52px;
          height: 52px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.25s ease;
          position: absolute;
          z-index: 5;
        }

        .arrow-prev { left: -70px; }
        .arrow-next { right: -70px; }

        .lightbox-nav-arrow:hover {
          background: var(--royal-gold);
          color: #FFF;
          transform: scale(1.1);
        }

        .lightbox-image-stage {
          position: relative;
          max-height: 80vh;
          border-radius: 16px;
          overflow: hidden;
          border: 2px solid var(--royal-gold);
          box-shadow: 0 25px 65px rgba(0, 0, 0, 0.7);
          background: #000;
          display: flex;
          flex-direction: column;
        }

        .lightbox-enlarged-img {
          max-height: 72vh;
          max-width: 100%;
          object-fit: contain;
        }

        .lightbox-caption-bar {
          background: rgba(25, 10, 14, 0.95);
          padding: 1rem 1.6rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid rgba(197, 154, 69, 0.3);
        }

        .lightbox-counter {
          font-size: 0.75rem;
          color: var(--royal-gold-light);
          text-transform: uppercase;
          letter-spacing: 0.12em;
        }

        .lightbox-title {
          font-family: var(--font-serif);
          font-size: 1.25rem;
          color: #FFFFFF;
          font-weight: 600;
        }

        .lightbox-monogram {
          font-family: var(--font-script);
          font-size: 1.4rem;
          color: #ECC874;
        }

        @media (max-width: 1060px) {
          .arrow-prev { left: 10px; }
          .arrow-next { right: 10px; }
          .lightbox-close-btn { top: -40px; right: 10px; }
        }
      `})]})):null}function Yf({onOpenPass:e}){const[t,r]=O.useState({name:"",contact:"",attending:"Yes",guests:"2",diet:"Vegetarian",events:["Haldi","Sangeet","Wedding","Reception"],message:""}),[n,a]=O.useState(!1),l=c=>{const{name:g,value:y}=c.target;r(v=>({...v,[g]:y}))},i=c=>{r(g=>{const v=g.events.includes(c)?g.events.filter(j=>j!==c):[...g.events,c];return{...g,events:v}})},s=c=>{c.preventDefault(),!(!t.name.trim()||!t.contact.trim())&&(a(!0),Dc())},u=()=>{a(!1)};return o.jsxs("section",{className:"section-padding bg-palace-pattern",id:"rsvp",children:[o.jsxs("div",{className:"container container-narrow",children:[o.jsxs("div",{className:"section-header",children:[o.jsx("p",{className:"section-eyebrow",children:"Your Presence is Our Honor"}),o.jsx("h2",{className:"section-title",children:"Kindly Confirm Your Attendance"}),o.jsx("p",{className:"section-subtitle",children:"Please RSVP by November 15, 2026 so we may prepare the warmest welcome for you in Udaipur."})]}),o.jsx("div",{className:"rsvp-card-container",children:n?o.jsxs("div",{className:"rsvp-confirmation-view",children:[o.jsx("div",{className:"confirmation-lotus-crest",children:"🪷"}),o.jsx("h3",{className:"confirmation-title",children:"Thank You!"}),o.jsxs("p",{className:"confirmation-greeting",children:["Dear ",o.jsx("strong",{children:t.name}),", your RSVP has been recorded with warm love.",o.jsx("br",{}),"We cannot wait to celebrate every unforgettable moment with you in Udaipur!"]}),o.jsxs("div",{className:"confirmation-summary-box",children:[o.jsxs("div",{className:"summary-line",children:[o.jsx("span",{className:"summary-label",children:"Status:"}),o.jsx("span",{className:"summary-val",children:t.attending==="Yes"?"Joyfully Attending 🌸":"Regretfully Declines 🕊️"})]}),t.attending==="Yes"&&o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"summary-line",children:[o.jsx("span",{className:"summary-label",children:"Party Size:"}),o.jsxs("span",{className:"summary-val",children:[t.guests," Guest(s)"]})]}),o.jsxs("div",{className:"summary-line",children:[o.jsx("span",{className:"summary-label",children:"Dietary:"}),o.jsx("span",{className:"summary-val",children:t.diet})]}),o.jsxs("div",{className:"summary-line",children:[o.jsx("span",{className:"summary-label",children:"Venue:"}),o.jsx("span",{className:"summary-val",children:"The Oberoi Udaivilas, Udaipur"})]})]}),o.jsxs("div",{className:"summary-line",children:[o.jsx("span",{className:"summary-label",children:"Dates:"}),o.jsx("span",{className:"summary-val",children:"December 13–14, 2026"})]})]}),o.jsxs("div",{className:"confirmation-actions",children:[t.attending==="Yes"&&o.jsxs("button",{type:"button",className:"btn-pass-action btn-royal-gold",onClick:()=>e(t),children:[o.jsx(Mf,{size:18}),o.jsx("span",{children:"View Digital Wedding Pass"})]}),o.jsxs("button",{type:"button",className:"btn-reset-form",onClick:u,children:[o.jsx(Pf,{size:14}),o.jsx("span",{children:"Update Response"})]})]})]}):o.jsxs("form",{className:"royal-rsvp-form",onSubmit:s,children:[o.jsxs("div",{className:"form-grid-row",children:[o.jsxs("div",{className:"form-field-group",children:[o.jsx("label",{htmlFor:"guest-name",className:"form-label",children:"Full Name *"}),o.jsx("input",{type:"text",id:"guest-name",name:"name",value:t.name,onChange:l,placeholder:"e.g. Vikram & Priya Singhania",className:"form-text-input",required:!0})]}),o.jsxs("div",{className:"form-field-group",children:[o.jsx("label",{htmlFor:"guest-contact",className:"form-label",children:"Email or Phone Number *"}),o.jsx("input",{type:"text",id:"guest-contact",name:"contact",value:t.contact,onChange:l,placeholder:"e.g. priya@example.com / +91 98765 43210",className:"form-text-input",required:!0})]})]}),o.jsxs("div",{className:"form-field-group",children:[o.jsx("label",{className:"form-label",children:"Will you be joining us in Udaipur? *"}),o.jsxs("div",{className:"attendance-pill-toggle",children:[o.jsxs("label",{className:`attendance-option ${t.attending==="Yes"?"is-selected":""}`,children:[o.jsx("input",{type:"radio",name:"attending",value:"Yes",checked:t.attending==="Yes",onChange:l}),o.jsx("span",{children:"🌸 Joyfully Accepts"})]}),o.jsxs("label",{className:`attendance-option ${t.attending==="No"?"is-selected":""}`,children:[o.jsx("input",{type:"radio",name:"attending",value:"No",checked:t.attending==="No",onChange:l}),o.jsx("span",{children:"🕊️ Regretfully Declines"})]})]})]}),t.attending==="Yes"&&o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"form-grid-row",children:[o.jsxs("div",{className:"form-field-group",children:[o.jsx("label",{htmlFor:"guest-count",className:"form-label",children:"Number of Guests Attending"}),o.jsxs("select",{id:"guest-count",name:"guests",value:t.guests,onChange:l,className:"form-select-input",children:[o.jsx("option",{value:"1",children:"1 Guest"}),o.jsx("option",{value:"2",children:"2 Guests"}),o.jsx("option",{value:"3",children:"3 Guests"}),o.jsx("option",{value:"4",children:"4 Guests"}),o.jsx("option",{value:"5+",children:"5+ Guests (Family)"})]})]}),o.jsxs("div",{className:"form-field-group",children:[o.jsx("label",{htmlFor:"guest-diet",className:"form-label",children:"Dietary Preference"}),o.jsxs("select",{id:"guest-diet",name:"diet",value:t.diet,onChange:l,className:"form-select-input",children:[o.jsx("option",{value:"Vegetarian",children:"Royal Vegetarian Feast"}),o.jsx("option",{value:"Jain",children:"Jain Vegetarian"}),o.jsx("option",{value:"Vegan",children:"Vegan Special"}),o.jsx("option",{value:"No Restrictions",children:"No Special Restrictions"})]})]})]}),o.jsxs("div",{className:"form-field-group",children:[o.jsx("label",{className:"form-label",children:"Events You Plan to Attend"}),o.jsx("div",{className:"event-selection-grid",children:[{id:"Haldi",label:"Mehndi Utsav (Dec 13)"},{id:"Sangeet",label:"Ring Ceremony & Sangeet (Dec 13)"},{id:"Wedding",label:"The Sacred Saath Phere (Dec 14)"},{id:"Reception",label:"The Grand Reception (Dec 14)"}].map(c=>o.jsxs("label",{className:"event-check-box",children:[o.jsx("input",{type:"checkbox",checked:t.events.includes(c.id),onChange:()=>i(c.id)}),o.jsx("span",{className:"check-custom-mark"}),o.jsx("span",{className:"check-text",children:c.label})]},c.id))})]})]}),o.jsxs("div",{className:"form-field-group",children:[o.jsx("label",{htmlFor:"guest-message",className:"form-label",children:"Warm Wishes & Blessings for Aarav & Ananya"}),o.jsx("textarea",{id:"guest-message",name:"message",value:t.message,onChange:l,rows:3,placeholder:"Write a heartfelt note for the couple...",className:"form-textarea-input"})]}),o.jsxs("button",{type:"submit",className:"btn-submit-rsvp btn-royal-gold",children:[o.jsx(uo,{size:16,fill:"currentColor"}),o.jsx("span",{children:"Send RSVP With Love 💛"})]})]})}),o.jsx("div",{className:"section-scroll-cue",children:o.jsxs("a",{href:"#footer",className:"section-scroll-indicator",children:[o.jsx("span",{children:"Wedding Monogram"}),o.jsx(Rt,{size:14})]})})]}),o.jsx("style",{children:`
        .rsvp-card-container {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(14px);
          border: 1.5px solid rgba(197, 154, 69, 0.4);
          border-radius: 24px;
          padding: 3rem 2.5rem;
          box-shadow: 0 20px 50px rgba(115, 26, 42, 0.08);
          max-width: 720px;
          margin: 0 auto;
        }

        .royal-rsvp-form {
          display: flex;
          flex-direction: column;
          gap: 1.6rem;
        }

        .form-grid-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }

        .form-field-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          text-align: left;
        }

        .form-label {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--royal-maroon-dark);
          letter-spacing: 0.02em;
        }

        .form-text-input,
        .form-select-input,
        .form-textarea-input {
          width: 100%;
          padding: 0.85rem 1.1rem;
          border: 1.5px solid rgba(197, 154, 69, 0.35);
          border-radius: 12px;
          background: #FAF6EF;
          color: var(--royal-charcoal);
          font-family: var(--font-sans);
          font-size: 0.92rem;
          transition: all 0.25s ease;
        }

        .form-text-input:focus,
        .form-select-input:focus,
        .form-textarea-input:focus {
          outline: none;
          border-color: var(--royal-gold);
          background: #FFFFFF;
          box-shadow: 0 0 0 3px rgba(197, 154, 69, 0.2);
        }

        .attendance-pill-toggle {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        .attendance-option {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0.85rem 1rem;
          border: 1.5px solid rgba(197, 154, 69, 0.35);
          border-radius: 12px;
          background: #FAF6EF;
          cursor: pointer;
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--royal-charcoal);
          transition: all 0.25s ease;
        }

        .attendance-option input {
          display: none;
        }

        .attendance-option.is-selected {
          background: var(--royal-maroon);
          color: #FFF3B0;
          border-color: #ECC874;
          box-shadow: 0 6px 18px rgba(115, 26, 42, 0.25);
        }

        .event-selection-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.8rem;
        }

        .event-check-box {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.65rem 0.9rem;
          background: #FAF6EF;
          border: 1px solid rgba(197, 154, 69, 0.25);
          border-radius: 10px;
          cursor: pointer;
          font-size: 0.82rem;
          font-weight: 500;
          color: var(--royal-charcoal);
          transition: all 0.2s ease;
        }

        .event-check-box input {
          accent-color: var(--royal-gold);
          width: 16px;
          height: 16px;
        }

        .event-check-box:hover {
          border-color: var(--royal-gold);
        }

        .btn-submit-rsvp {
          width: 100%;
          padding: 1.05rem;
          font-size: 1rem;
          margin-top: 0.5rem;
        }

        .rsvp-confirmation-view {
          text-align: center;
          padding: 1.5rem 0;
          animation: fadeIn 0.4s ease-out;
        }

        .confirmation-lotus-crest {
          font-size: 3rem;
          filter: drop-shadow(0 4px 10px rgba(197, 154, 69, 0.4));
          margin-bottom: 0.5rem;
        }

        .confirmation-title {
          font-family: var(--font-serif);
          font-size: 2.4rem;
          color: var(--royal-maroon);
          margin-bottom: 0.6rem;
          font-weight: 700;
        }

        .confirmation-greeting {
          font-size: 1.02rem;
          color: var(--royal-muted);
          line-height: 1.6;
          max-width: 520px;
          margin: 0 auto 1.8rem;
        }

        .confirmation-greeting strong {
          color: var(--royal-maroon-dark);
        }

        .confirmation-summary-box {
          background: #FAF6EF;
          border: 1.5px solid rgba(197, 154, 69, 0.35);
          border-radius: 16px;
          padding: 1.5rem 1.8rem;
          max-width: 480px;
          margin: 0 auto 2rem;
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
          text-align: left;
        }

        .summary-line {
          display: flex;
          justify-content: space-between;
          font-size: 0.9rem;
          border-bottom: 1px dashed rgba(197, 154, 69, 0.25);
          padding-bottom: 0.4rem;
        }

        .summary-line:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }

        .summary-label {
          color: var(--royal-muted);
          font-weight: 500;
        }

        .summary-val {
          color: var(--royal-maroon-dark);
          font-weight: 600;
        }

        .confirmation-actions {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }

        .btn-pass-action {
          width: 100%;
          max-width: 320px;
        }

        .btn-reset-form {
          background: none;
          border: none;
          color: var(--royal-muted);
          font-size: 0.82rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.35rem;
          transition: color 0.2s ease;
        }

        .btn-reset-form:hover {
          color: var(--royal-maroon);
        }

        @media (max-width: 650px) {
          .rsvp-card-container {
            padding: 2rem 1.4rem;
          }
          .form-grid-row {
            grid-template-columns: 1fr;
          }
          .attendance-pill-toggle {
            grid-template-columns: 1fr;
          }
          .event-selection-grid {
            grid-template-columns: 1fr;
          }
        }
      `})]})}function Kf({guestData:e,onClose:t}){if(!e)return null;const r=()=>{window.print()};return o.jsxs("div",{className:"digital-pass-backdrop",role:"dialog","aria-modal":"true","aria-label":"Digital Wedding Pass",children:[o.jsx("div",{className:"digital-pass-overlay",onClick:t}),o.jsxs("div",{className:"digital-pass-card",children:[o.jsx("button",{type:"button",className:"pass-close-btn",onClick:t,"aria-label":"Close digital pass",children:o.jsx(Ba,{size:20})}),o.jsxs("div",{className:"pass-top-bar",children:[o.jsx(Er,{size:16,className:"pass-sparkle"}),o.jsx("span",{children:"ROYAL WEDDING VIP ENTRY PASS"}),o.jsx(Er,{size:16,className:"pass-sparkle"})]}),o.jsxs("div",{className:"pass-body",children:[o.jsx("div",{className:"pass-monogram",children:"A & A"}),o.jsx("h2",{className:"pass-couple-title",children:"Aarav & Ananya"}),o.jsx("p",{className:"pass-subtitle",children:"The Oberoi Udaivilas • Udaipur, Rajasthan"}),o.jsx("p",{className:"pass-dates",children:"December 13 & 14, 2026"}),o.jsxs("div",{className:"pass-divider-cutout",children:[o.jsx("span",{className:"cutout-circle-left"}),o.jsx("span",{className:"pass-dashed-line"}),o.jsx("span",{className:"cutout-circle-right"})]}),o.jsxs("div",{className:"pass-guest-details",children:[o.jsxs("div",{className:"guest-info-block",children:[o.jsx("span",{className:"info-tag",children:"HONORED GUEST"}),o.jsx("p",{className:"guest-primary-name",children:e.name})]}),o.jsxs("div",{className:"guest-meta-grid",children:[o.jsxs("div",{children:[o.jsx("span",{className:"info-tag",children:"PARTY SIZE"}),o.jsxs("p",{className:"meta-val",children:[e.guests," Guest(s)"]})]}),o.jsxs("div",{children:[o.jsx("span",{className:"info-tag",children:"FEAST DIET"}),o.jsx("p",{className:"meta-val",children:e.diet})]})]})]}),o.jsxs("div",{className:"pass-qr-container",children:[o.jsx("div",{className:"qr-box",children:o.jsxs("svg",{width:"110",height:"110",viewBox:"0 0 24 24",fill:"none",stroke:"#4F0E1A",strokeWidth:"1.5",children:[o.jsx("rect",{x:"2",y:"2",width:"8",height:"8",rx:"1"}),o.jsx("rect",{x:"4",y:"4",width:"4",height:"4",fill:"#4F0E1A"}),o.jsx("rect",{x:"14",y:"2",width:"8",height:"8",rx:"1"}),o.jsx("rect",{x:"16",y:"4",width:"4",height:"4",fill:"#4F0E1A"}),o.jsx("rect",{x:"2",y:"14",width:"8",height:"8",rx:"1"}),o.jsx("rect",{x:"4",y:"16",width:"4",height:"4",fill:"#4F0E1A"}),o.jsx("path",{d:"M14 14h2v2h-2z",fill:"#4F0E1A"}),o.jsx("path",{d:"M18 14h4v2h-4z",fill:"#4F0E1A"}),o.jsx("path",{d:"M14 18h4v4h-4z",fill:"#4F0E1A"}),o.jsx("path",{d:"M20 18h2v4h-2z",fill:"#4F0E1A"})]})}),o.jsx("p",{className:"qr-scan-note",children:"Present this pass at the Udaivilas arrival gate"})]})]}),o.jsx("div",{className:"pass-actions-footer",children:o.jsxs("button",{type:"button",className:"btn-pass-save btn-royal-gold",onClick:r,children:[o.jsx(Sf,{size:16}),o.jsx("span",{children:"Save / Print Pass"})]})})]}),o.jsx("style",{children:`
        .digital-pass-backdrop {
          position: fixed;
          inset: 0;
          z-index: 100000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.25rem;
          animation: fadeIn 0.25s ease-out;
        }

        .digital-pass-overlay {
          position: absolute;
          inset: 0;
          background: rgba(20, 8, 12, 0.82);
          backdrop-filter: blur(10px);
        }

        .digital-pass-card {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 400px;
          background: #FFFFFF;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 25px 65px rgba(0, 0, 0, 0.5), 0 0 35px rgba(197, 154, 69, 0.3);
          border: 2px solid var(--royal-gold);
        }

        .pass-close-btn {
          position: absolute;
          top: 10px;
          right: 10px;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.2);
          border: none;
          color: #FFF;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 10;
        }

        .pass-top-bar {
          background: linear-gradient(135deg, #721829 0%, #470D18 100%);
          color: #FFF3B0;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.16em;
          padding: 0.75rem 1.2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          border-bottom: 2px solid #ECC874;
        }

        .pass-sparkle {
          color: #ECC874;
        }

        .pass-body {
          padding: 1.8rem 1.8rem 1.2rem;
          text-align: center;
          background: #FCF8F2;
        }

        .pass-monogram {
          font-family: var(--font-royal);
          font-size: 1.8rem;
          color: var(--royal-gold-dark);
          line-height: 1;
        }

        .pass-couple-title {
          font-family: var(--font-serif);
          font-size: 1.65rem;
          color: var(--royal-maroon);
          margin: 0.2rem 0;
          font-weight: 700;
        }

        .pass-subtitle {
          font-size: 0.82rem;
          color: var(--royal-charcoal);
          font-weight: 500;
        }

        .pass-dates {
          font-size: 0.75rem;
          color: var(--royal-gold-dark);
          font-weight: 600;
          letter-spacing: 0.08em;
          margin-top: 0.2rem;
        }

        .pass-divider-cutout {
          position: relative;
          display: flex;
          align-items: center;
          margin: 1.4rem -1.8rem;
        }

        .cutout-circle-left,
        .cutout-circle-right {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: rgba(20, 8, 12, 0.82);
          position: absolute;
          z-index: 5;
        }

        .cutout-circle-left { left: -10px; }
        .cutout-circle-right { right: -10px; }

        .pass-dashed-line {
          width: 100%;
          height: 1px;
          border-top: 1.5px dashed rgba(197, 154, 69, 0.5);
        }

        .pass-guest-details {
          text-align: left;
          background: #FFFFFF;
          padding: 1rem 1.2rem;
          border-radius: 14px;
          border: 1px solid rgba(197, 154, 69, 0.25);
          margin-bottom: 1.2rem;
        }

        .info-tag {
          font-size: 0.65rem;
          letter-spacing: 0.12em;
          color: var(--royal-gold-dark);
          font-weight: 700;
          display: block;
        }

        .guest-primary-name {
          font-family: var(--font-serif);
          font-size: 1.25rem;
          color: var(--royal-maroon-dark);
          font-weight: 700;
          margin-bottom: 0.6rem;
        }

        .guest-meta-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.5rem;
          border-top: 1px solid rgba(0, 0, 0, 0.06);
          padding-top: 0.5rem;
        }

        .meta-val {
          font-size: 0.85rem;
          color: var(--royal-charcoal);
          font-weight: 600;
        }

        .pass-qr-container {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .qr-box {
          background: #FFFFFF;
          padding: 0.6rem;
          border-radius: 12px;
          border: 1.5px solid rgba(197, 154, 69, 0.4);
          display: inline-block;
          margin-bottom: 0.4rem;
        }

        .qr-scan-note {
          font-size: 0.72rem;
          color: var(--royal-muted);
        }

        .pass-actions-footer {
          padding: 1rem 1.8rem 1.5rem;
          background: #FAF5ED;
          border-top: 1px solid rgba(197, 154, 69, 0.2);
        }

        .btn-pass-save {
          width: 100%;
        }
      `})]})}function Xf(){const e=()=>{window.scrollTo({top:0,behavior:"smooth"})};return o.jsxs("footer",{className:"royal-wedding-footer",id:"footer",children:[o.jsxs("div",{className:"container container-narrow",children:[o.jsx("div",{className:"footer-monogram-circle",children:o.jsx("span",{className:"footer-monogram",children:"A & A"})}),o.jsx("p",{className:"footer-marriage-quote",children:"“Two souls with but a single thought, two hearts that beat as one.”"}),o.jsx("div",{className:"footer-date-tag",children:o.jsx("span",{children:"DECEMBER 14, 2026 • THE OBEROI UDAIVILAS, UDAIPUR"})}),o.jsx("p",{className:"footer-blessing-note",children:"We eagerly await your gracious presence and heartfelt blessings to complete our celebrations in the City of Lakes."}),o.jsxs("button",{type:"button",className:"btn-back-to-top",onClick:e,"aria-label":"Back to top of wedding invitation",children:[o.jsx(jf,{size:18}),o.jsx("span",{children:"Back to Top"})]}),o.jsx("div",{className:"footer-credits-line",children:o.jsxs("span",{children:["With boundless love, ",o.jsx("strong",{children:"Aarav & Ananya"})]})})]}),o.jsx("style",{children:`
        .royal-wedding-footer {
          background: linear-gradient(180deg, #2D1418 0%, #15080A 100%);
          color: #FFF8ED;
          padding: 5.5rem 0 3.5rem;
          text-align: center;
          position: relative;
          border-top: 2px solid var(--royal-gold);
        }

        .footer-monogram-circle {
          width: 84px;
          height: 84px;
          border-radius: 50%;
          border: 2px solid #ECC874;
          background: radial-gradient(circle, #721829 0%, #460C17 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.8rem;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4), 0 0 20px rgba(236, 200, 116, 0.3);
        }

        .footer-monogram {
          font-family: var(--font-royal);
          font-size: 1.6rem;
          color: #FFF3B0;
          font-weight: 700;
        }

        .footer-marriage-quote {
          font-family: var(--font-serif);
          font-style: italic;
          font-size: clamp(1.2rem, 3vw, 1.6rem);
          color: #ECC874;
          max-width: 620px;
          margin: 0 auto 1.4rem;
          line-height: 1.5;
        }

        .footer-date-tag {
          font-size: 0.85rem;
          letter-spacing: 0.18em;
          color: #FFF3B0;
          font-weight: 600;
          margin-bottom: 1.2rem;
        }

        .footer-blessing-note {
          font-size: 0.95rem;
          color: #D3C4B8;
          max-width: 540px;
          margin: 0 auto 2.4rem;
          line-height: 1.7;
        }

        .btn-back-to-top {
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(236, 200, 116, 0.35);
          color: #FFF3B0;
          padding: 0.5rem 1.4rem;
          border-radius: 50px;
          font-size: 0.82rem;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          transition: all 0.25s ease;
          margin-bottom: 2.2rem;
        }

        .btn-back-to-top:hover {
          background: var(--royal-gold);
          color: #FFF;
          transform: translateY(-2px);
        }

        .footer-credits-line {
          border-top: 1px solid rgba(236, 200, 116, 0.15);
          padding-top: 1.8rem;
          font-size: 0.85rem;
          color: rgba(246, 226, 163, 0.7);
        }

        .footer-credits-line strong {
          color: #FFF3B0;
        }
      `})]})}function qf(){const[e,t]=O.useState(!1),[r,n]=O.useState(!1),[a,l]=O.useState(null),[i,s]=O.useState(null),[u,c]=O.useState(null),g=O.useRef(null),y=(k=null)=>{g.current&&(k===!0||!r&&k===null?g.current.play().then(()=>{n(!0)}).catch(b=>{console.warn("Audio play postponed:",b)}):(g.current.pause(),n(!1)))},v=()=>{t(!0),window.scrollTo({top:0,behavior:"smooth"})},j=k=>{if(!i)return;const b=xr.length;let P=(i.index+k)%b;P<0&&(P=b-1),s({photo:xr[P],index:P})};return o.jsxs("div",{className:"royal-wedding-app",children:[o.jsx("audio",{ref:g,src:"/assets/ReelAudio-7073.mp3",loop:!0,preload:"auto"}),!e&&o.jsx(Rf,{onEnter:v,isMusicPlaying:r,toggleMusic:y}),o.jsx(Lf,{}),o.jsx(Df,{isPlaying:r,onToggle:()=>y()}),o.jsx(_f,{}),o.jsx(If,{}),o.jsx(Uf,{}),o.jsx(Bf,{}),o.jsx(Vf,{}),o.jsx($f,{}),o.jsx(Wf,{onOpenVenue:k=>l(k)}),o.jsx(Qf,{onOpenLightbox:(k,b)=>s({photo:k,index:b})}),o.jsx(Yf,{onOpenPass:k=>c(k)}),o.jsx(Xf,{}),a&&o.jsx(Hf,{event:a,onClose:()=>l(null)}),i&&o.jsx(Gf,{photo:i.photo,index:i.index,onClose:()=>s(null),onNavigate:j}),u&&o.jsx(Kf,{guestData:u,onClose:()=>c(null)})]})}gl.createRoot(document.getElementById("root")).render(o.jsx(Ps.StrictMode,{children:o.jsx(qf,{})}));
