/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	
	__webpack_require__(1);
	__webpack_require__(5);
	__webpack_require__(6);
	__webpack_require__(7);
	__webpack_require__(8);
	__webpack_require__(9);
	__webpack_require__(10);
	__webpack_require__(11);
	__webpack_require__(12);
	__webpack_require__(13);
	__webpack_require__(14);
	__webpack_require__(15);
	__webpack_require__(16);
	__webpack_require__(17);
	__webpack_require__(18);
	__webpack_require__(19);
	__webpack_require__(20);
	__webpack_require__(21);
	__webpack_require__(22);
	__webpack_require__(23);
	__webpack_require__(24);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process, setImmediate) {/* MooTools: the javascript framework. license: MIT-style license. copyright: Copyright (c) 2006-2016 [Valerio Proietti](http://mad4milk.net/).*/ 
	/*!
	Web Build: http://mootools.net/core/builder/e426a9ae7167c5807b173d5deff673fc
	*/
	!function(){function t(t,e,i){if(r)for(var s=r.length;s--;){var o=r[s];n.call(t,o)&&e.call(i,o,t[o])}}this.MooTools={version:"1.6.0",build:"529422872adfff401b901b8b6c7ca5114ee95e2b"};var e=this.typeOf=function(t){if(null==t)return"null";if(null!=t.$family)return t.$family();if(t.nodeName){if(1==t.nodeType)return"element";if(3==t.nodeType)return/\S/.test(t.nodeValue)?"textnode":"whitespace"}else if("number"==typeof t.length){if("callee"in t)return"arguments";if("item"in t)return"collection"}return typeof t},n=(this.instanceOf=function(t,e){if(null==t)return!1;for(var n=t.$constructor||t.constructor;n;){if(n===e)return!0;n=n.parent}return t.hasOwnProperty?t instanceof e:!1},Object.prototype.hasOwnProperty),r=!0;for(var i in{toString:1})r=null;r&&(r=["hasOwnProperty","valueOf","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","constructor"]);var s=this.Function;s.prototype.overloadSetter=function(e){var n=this;return function(r,i){if(null==r)return this;if(e||"string"!=typeof r){for(var s in r)n.call(this,s,r[s]);t(r,n,this)}else n.call(this,r,i);return this}},s.prototype.overloadGetter=function(t){var e=this;return function(n){var r,i;if("string"!=typeof n?r=n:arguments.length>1?r=arguments:t&&(r=[n]),r){i={};for(var s=0;s<r.length;s++)i[r[s]]=e.call(this,r[s])}else i=e.call(this,n);return i}},s.prototype.extend=function(t,e){this[t]=e}.overloadSetter(),s.prototype.implement=function(t,e){this.prototype[t]=e}.overloadSetter();var o=Array.prototype.slice;Array.convert=function(t){return null==t?[]:a.isEnumerable(t)&&"string"!=typeof t?"array"==e(t)?t:o.call(t):[t]},s.convert=function(t){return"function"==e(t)?t:function(){return t}},Number.convert=function(t){var e=parseFloat(t);return isFinite(e)?e:null},String.convert=function(t){return t+""},s.from=s.convert,Number.from=Number.convert,String.from=String.convert,s.implement({hide:function(){return this.$hidden=!0,this},protect:function(){return this.$protected=!0,this}});var a=this.Type=function(t,n){if(t){var r=t.toLowerCase(),i=function(t){return e(t)==r};a["is"+t]=i,null!=n&&(n.prototype.$family=function(){return r}.hide())}return null==n?null:(n.extend(this),n.$constructor=a,n.prototype.$constructor=n,n)},u=Object.prototype.toString;a.isEnumerable=function(t){return null!=t&&"number"==typeof t.length&&"[object Function]"!=u.call(t)};var c={},l=function(t){var n=e(t.prototype);return c[n]||(c[n]=[])},h=function(t,n){if(!n||!n.$hidden){for(var r=l(this),i=0;i<r.length;i++){var s=r[i];"type"==e(s)?h.call(s,t,n):s.call(this,t,n)}var a=this.prototype[t];null!=a&&a.$protected||(this.prototype[t]=n),null==this[t]&&"function"==e(n)&&f.call(this,t,function(t){return n.apply(t,o.call(arguments,1))})}},f=function(t,e){if(!e||!e.$hidden){var n=this[t];null!=n&&n.$protected||(this[t]=e)}};a.implement({implement:h.overloadSetter(),extend:f.overloadSetter(),alias:function(t,e){h.call(this,t,this.prototype[e])}.overloadSetter(),mirror:function(t){return l(this).push(t),this}}),new a("Type",a);var p=function(t,e,n){var r=e!=Object,i=e.prototype;r&&(e=new a(t,e));for(var s=0,o=n.length;o>s;s++){var u=n[s],c=e[u],l=i[u];c&&c.protect(),r&&l&&e.implement(u,l.protect())}if(r){var h=i.propertyIsEnumerable(n[0]);e.forEachMethod=function(t){if(!h)for(var e=0,r=n.length;r>e;e++)t.call(i,i[n[e]],n[e]);for(var s in i)t.call(i,i[s],s)}}return p};p("String",String,["charAt","charCodeAt","concat","contains","indexOf","lastIndexOf","match","quote","replace","search","slice","split","substr","substring","trim","toLowerCase","toUpperCase"])("Array",Array,["pop","push","reverse","shift","sort","splice","unshift","concat","join","slice","indexOf","lastIndexOf","filter","forEach","every","map","some","reduce","reduceRight","contains"])("Number",Number,["toExponential","toFixed","toLocaleString","toPrecision"])("Function",s,["apply","call","bind"])("RegExp",RegExp,["exec","test"])("Object",Object,["create","defineProperty","defineProperties","keys","getPrototypeOf","getOwnPropertyDescriptor","getOwnPropertyNames","preventExtensions","isExtensible","seal","isSealed","freeze","isFrozen"])("Date",Date,["now"]),Object.extend=f.overloadSetter(),Date.extend("now",function(){return+new Date}),new a("Boolean",Boolean),Number.prototype.$family=function(){return isFinite(this)?"number":"null"}.hide(),Number.extend("random",function(t,e){return Math.floor(Math.random()*(e-t+1)+t)}),Array.implement({forEach:function(t,e){for(var n=0,r=this.length;r>n;n++)n in this&&t.call(e,this[n],n,this)},each:function(t,e){return Array.forEach(this,t,e),this}}),Object.extend({keys:function(e){var r=[];for(var i in e)n.call(e,i)&&r.push(i);return t(e,function(t){r.push(t)}),r},forEach:function(t,e,n){Object.keys(t).forEach(function(r){e.call(n,t[r],r,t)})}}),Object.each=Object.forEach;var d=function(t){switch(e(t)){case"array":return t.clone();case"object":return Object.clone(t);default:return t}};Array.implement("clone",function(){for(var t=this.length,e=new Array(t);t--;)e[t]=d(this[t]);return e});var m=function(t,n,r){switch(e(r)){case"object":"object"==e(t[n])?Object.merge(t[n],r):t[n]=Object.clone(r);break;case"array":t[n]=r.clone();break;default:t[n]=r}return t};Object.extend({merge:function(t,n,r){if("string"==e(n))return m(t,n,r);for(var i=1,s=arguments.length;s>i;i++){var o=arguments[i];for(var a in o)m(t,a,o[a])}return t},clone:function(t){var e={};for(var n in t)e[n]=d(t[n]);return e},append:function(t){for(var e=1,n=arguments.length;n>e;e++){var r=arguments[e]||{};for(var i in r)t[i]=r[i]}return t}}),["Object","WhiteSpace","TextNode","Collection","Arguments"].each(function(t){new a(t)});var v=Date.now();String.extend("uniqueID",function(){return(v++).toString(36)})}(),Array.implement({every:function(t,e){for(var n=0,r=this.length>>>0;r>n;n++)if(n in this&&!t.call(e,this[n],n,this))return!1;return!0},filter:function(t,e){for(var n,r=[],i=0,s=this.length>>>0;s>i;i++)i in this&&(n=this[i],t.call(e,n,i,this)&&r.push(n));return r},indexOf:function(t,e){for(var n=this.length>>>0,r=0>e?Math.max(0,n+e):e||0;n>r;r++)if(this[r]===t)return r;return-1},map:function(t,e){for(var n=this.length>>>0,r=Array(n),i=0;n>i;i++)i in this&&(r[i]=t.call(e,this[i],i,this));return r},some:function(t,e){for(var n=0,r=this.length>>>0;r>n;n++)if(n in this&&t.call(e,this[n],n,this))return!0;return!1},clean:function(){return this.filter(function(t){return null!=t})},invoke:function(t){var e=Array.slice(arguments,1);return this.map(function(n){return n[t].apply(n,e)})},associate:function(t){for(var e={},n=Math.min(this.length,t.length),r=0;n>r;r++)e[t[r]]=this[r];return e},link:function(t){for(var e={},n=0,r=this.length;r>n;n++)for(var i in t)if(t[i](this[n])){e[i]=this[n],delete t[i];break}return e},contains:function(t,e){return-1!=this.indexOf(t,e)},append:function(t){return this.push.apply(this,t),this},getLast:function(){return this.length?this[this.length-1]:null},getRandom:function(){return this.length?this[Number.random(0,this.length-1)]:null},include:function(t){return this.contains(t)||this.push(t),this},combine:function(t){for(var e=0,n=t.length;n>e;e++)this.include(t[e]);return this},erase:function(t){for(var e=this.length;e--;)this[e]===t&&this.splice(e,1);return this},empty:function(){return this.length=0,this},flatten:function(){for(var t=[],e=0,n=this.length;n>e;e++){var r=typeOf(this[e]);"null"!=r&&(t=t.concat("array"==r||"collection"==r||"arguments"==r||instanceOf(this[e],Array)?Array.flatten(this[e]):this[e]))}return t},pick:function(){for(var t=0,e=this.length;e>t;t++)if(null!=this[t])return this[t];return null},hexToRgb:function(t){if(3!=this.length)return null;var e=this.map(function(t){return 1==t.length&&(t+=t),parseInt(t,16)});return t?e:"rgb("+e+")"},rgbToHex:function(t){if(this.length<3)return null;if(4==this.length&&0==this[3]&&!t)return"transparent";for(var e=[],n=0;3>n;n++){var r=(this[n]-0).toString(16);e.push(1==r.length?"0"+r:r)}return t?e:"#"+e.join("")}}),Function.extend({attempt:function(){for(var t=0,e=arguments.length;e>t;t++)try{return arguments[t]()}catch(n){}return null}}),Function.implement({attempt:function(t,e){try{return this.apply(e,Array.convert(t))}catch(n){}return null},bind:function(t){var e=this,n=arguments.length>1?Array.slice(arguments,1):null,r=function(){},i=function(){var s=t,o=arguments.length;this instanceof i&&(r.prototype=e.prototype,s=new r);var a=n||o?e.apply(s,n&&o?n.concat(Array.slice(arguments)):n||arguments):e.call(s);return s==t?a:s};return i},pass:function(t,e){var n=this;return null!=t&&(t=Array.convert(t)),function(){return n.apply(e,t||arguments)}},delay:function(t,e,n){return setTimeout(this.pass(null==n?[]:n,e),t)},periodical:function(t,e,n){return setInterval(this.pass(null==n?[]:n,e),t)}}),Number.implement({limit:function(t,e){return Math.min(e,Math.max(t,this))},round:function(t){return t=Math.pow(10,t||0).toFixed(0>t?-t:0),Math.round(this*t)/t},times:function(t,e){for(var n=0;this>n;n++)t.call(e,n,this)},toFloat:function(){return parseFloat(this)},toInt:function(t){return parseInt(this,t||10)}}),Number.alias("each","times"),function(t){var e={};t.each(function(t){Number[t]||(e[t]=function(){return Math[t].apply(null,[this].concat(Array.convert(arguments)))})}),Number.implement(e)}(["abs","acos","asin","atan","atan2","ceil","cos","exp","floor","log","max","min","pow","sin","sqrt","tan"]),String.implement({contains:function(t,e){return(e?String(this).slice(e):String(this)).indexOf(t)>-1},test:function(t,e){return("regexp"==typeOf(t)?t:new RegExp(""+t,e)).test(this)},trim:function(){return String(this).replace(/^\s+|\s+$/g,"")},clean:function(){return String(this).replace(/\s+/g," ").trim()},camelCase:function(){return String(this).replace(/-\D/g,function(t){return t.charAt(1).toUpperCase()})},hyphenate:function(){return String(this).replace(/[A-Z]/g,function(t){return"-"+t.charAt(0).toLowerCase()})},capitalize:function(){return String(this).replace(/\b[a-z]/g,function(t){return t.toUpperCase()})},escapeRegExp:function(){return String(this).replace(/([-.*+?^${}()|[\]\/\\])/g,"\\$1")},toInt:function(t){return parseInt(this,t||10)},toFloat:function(){return parseFloat(this)},hexToRgb:function(t){var e=String(this).match(/^#?(\w{1,2})(\w{1,2})(\w{1,2})$/);return e?e.slice(1).hexToRgb(t):null},rgbToHex:function(t){var e=String(this).match(/\d{1,3}/g);return e?e.rgbToHex(t):null},substitute:function(t,e){return String(this).replace(e||/\\?\{([^{}]+)\}/g,function(e,n){return"\\"==e.charAt(0)?e.slice(1):null!=t[n]?t[n]:""})}}),function(){var t=this.document,e=t.window=this,n=function(t,e){t=t.toLowerCase(),e=e?e.toLowerCase():"";var n=t.match(/(edge)[\s\/:]([\w\d\.]+)/);return n||(n=t.match(/(opera|ie|firefox|chrome|trident|crios|version)[\s\/:]([\w\d\.]+)?.*?(safari|(?:rv[\s\/:]|version[\s\/:])([\w\d\.]+)|$)/)||[null,"unknown",0]),"trident"==n[1]?(n[1]="ie",n[4]&&(n[2]=n[4])):"crios"==n[1]&&(n[1]="chrome"),e=t.match(/ip(?:ad|od|hone)/)?"ios":(t.match(/(?:webos|android)/)||t.match(/mac|win|linux/)||["other"])[0],"win"==e&&(e="windows"),{extend:Function.prototype.extend,name:"version"==n[1]?n[3]:n[1],version:parseFloat("opera"==n[1]&&n[4]?n[4]:n[2]),platform:e}},r=this.Browser=n(navigator.userAgent,navigator.platform);if("ie"==r.name&&t.documentMode&&(r.version=t.documentMode),r.extend({Features:{xpath:!!t.evaluate,air:!!e.runtime,query:!!t.querySelector,json:!!e.JSON},parseUA:n}),r.Request=function(){var t=function(){return new XMLHttpRequest},e=function(){return new ActiveXObject("MSXML2.XMLHTTP")},n=function(){return new ActiveXObject("Microsoft.XMLHTTP")};return Function.attempt(function(){return t(),t},function(){return e(),e},function(){return n(),n})}(),r.Features.xhr=!!r.Request,r.exec=function(n){if(!n)return n;if(e.execScript)e.execScript(n);else{var r=t.createElement("script");r.setAttribute("type","text/javascript"),r.text=n,t.head.appendChild(r),t.head.removeChild(r)}return n},String.implement("stripScripts",function(t){var e="",n=this.replace(/<script[^>]*>([\s\S]*?)<\/script>/gi,function(t,n){return e+=n+"\n",""});return t===!0?r.exec(e):"function"==typeOf(t)&&t(e,n),n}),r.extend({Document:this.Document,Window:this.Window,Element:this.Element,Event:this.Event}),this.Window=this.$constructor=new Type("Window",function(){}),this.$family=Function.convert("window").hide(),Window.mirror(function(t,n){e[t]=n}),this.Document=t.$constructor=new Type("Document",function(){}),t.$family=Function.convert("document").hide(),Document.mirror(function(e,n){t[e]=n}),t.html=t.documentElement,t.head||(t.head=t.getElementsByTagName("head")[0]),t.execCommand)try{t.execCommand("BackgroundImageCache",!1,!0)}catch(i){}if(this.attachEvent&&!this.addEventListener){var s=function(){this.detachEvent("onunload",s),t.head=t.html=t.window=null,e=this.Window=t=null};this.attachEvent("onunload",s)}var o=Array.convert;try{o(t.html.childNodes)}catch(i){Array.convert=function(t){if("string"!=typeof t&&Type.isEnumerable(t)&&"array"!=typeOf(t)){for(var e=t.length,n=new Array(e);e--;)n[e]=t[e];return n}return o(t)};var a=Array.prototype,u=a.slice;["pop","push","reverse","shift","sort","splice","unshift","concat","join","slice"].each(function(t){var e=a[t];Array[t]=function(t){return e.apply(Array.convert(t),u.call(arguments,1))}})}}(),function(){var t=this.Class=new Type("Class",function(r){instanceOf(r,Function)&&(r={initialize:r});var i=function(){if(n(this),i.$prototyping)return this;this.$caller=null,this.$family=null;var t=this.initialize?this.initialize.apply(this,arguments):this;return this.$caller=this.caller=null,t}.extend(this).implement(r);return i.$constructor=t,i.prototype.$constructor=i,i.prototype.parent=e,i}),e=function(){if(!this.$caller)throw new Error('The method "parent" cannot be called.');var t=this.$caller.$name,e=this.$caller.$owner.parent,n=e?e.prototype[t]:null;if(!n)throw new Error('The method "'+t+'" has no parent.');return n.apply(this,arguments)},n=function(t){for(var e in t){var r=t[e];switch(typeOf(r)){case"object":var i=function(){};i.prototype=r,t[e]=n(new i);break;case"array":t[e]=r.clone()}}return t},r=function(t,e,n){n.$origin&&(n=n.$origin);var r=function(){if(n.$protected&&null==this.$caller)throw new Error('The method "'+e+'" cannot be called.');var t=this.caller,i=this.$caller;this.caller=i,this.$caller=r;var s=n.apply(this,arguments);return this.$caller=i,this.caller=t,s}.extend({$owner:t,$origin:n,$name:e});return r},i=function(e,n,i){if(t.Mutators.hasOwnProperty(e)&&(n=t.Mutators[e].call(this,n),null==n))return this;if("function"==typeOf(n)){if(n.$hidden)return this;this.prototype[e]=i?n:r(this,e,n)}else Object.merge(this.prototype,e,n);return this},s=function(t){t.$prototyping=!0;var e=new t;return delete t.$prototyping,e};t.implement("implement",i.overloadSetter()),t.Mutators={Extends:function(t){this.parent=t,this.prototype=s(t)},Implements:function(t){Array.convert(t).each(function(t){var e=new t;for(var n in e)i.call(this,n,e[n],!0)},this)}}}(),function(){this.Chain=new Class({$chain:[],chain:function(){return this.$chain.append(Array.flatten(arguments)),this},callChain:function(){return this.$chain.length?this.$chain.shift().apply(this,arguments):!1},clearChain:function(){return this.$chain.empty(),this}});var t=function(t){return t.replace(/^on([A-Z])/,function(t,e){return e.toLowerCase()})};this.Events=new Class({$events:{},addEvent:function(e,n,r){return e=t(e),this.$events[e]=(this.$events[e]||[]).include(n),r&&(n.internal=!0),this},addEvents:function(t){for(var e in t)this.addEvent(e,t[e]);return this},fireEvent:function(e,n,r){e=t(e);var i=this.$events[e];return i?(n=Array.convert(n),i.each(function(t){r?t.delay(r,this,n):t.apply(this,n)},this),this):this},removeEvent:function(e,n){e=t(e);var r=this.$events[e];if(r&&!n.internal){var i=r.indexOf(n);-1!=i&&delete r[i]}return this},removeEvents:function(e){var n;if("object"==typeOf(e)){for(n in e)this.removeEvent(n,e[n]);return this}e&&(e=t(e));for(n in this.$events)if(!e||e==n)for(var r=this.$events[n],i=r.length;i--;)i in r&&this.removeEvent(n,r[i]);return this}}),this.Options=new Class({setOptions:function(){var t=this.options=Object.merge.apply(null,[{},this.options].append(arguments));if(this.addEvent)for(var e in t)"function"==typeOf(t[e])&&/^on[A-Z]/.test(e)&&(this.addEvent(e,t[e]),delete t[e]);return this}})}(),function(){function t(r,i){if(r.$thenableState===o)if(r===i)n(r,new TypeError("Tried to resolve a thenable with itself."));else if(!i||"object"!=typeof i&&"function"!=typeof i)e(r,i);else{var s;try{s=i.then}catch(a){n(r,a)}if("function"==typeof s){var u=!1;l(function(){try{s.call(i,function(e){u||(u=!0,t(r,e))},function(t){u||(u=!0,n(r,t))})}catch(e){u||(u=!0,n(r,e))}})}else e(r,i)}}function e(t,e){t.$thenableState===o&&(t.$thenableResult=e,t.$thenableState=a,i(t))}function n(t,e){t.$thenableState===o&&(t.$thenableResult=e,t.$thenableState=u,i(t))}function r(t){t.$thenableState!==o&&(t.$thenableResult=null,t.$thenableState=o)}function i(t){var e,n=t.$thenableState,r=t.$thenableResult,i=t.$thenableReactions;n===a?(t.$thenableReactions=[],e="fulfillHandler"):n==u&&(t.$thenableReactions=[],e="rejectHandler"),e&&l(s.pass([r,i,e]))}function s(e,r,i){for(var s=0,o=r.length;o>s;++s){var a=r[s],u=a[i];if("Identity"===u)t(a.thenable,e);else if("Thrower"===u)n(a.thenable,e);else try{t(a.thenable,u(e))}catch(c){n(a.thenable,c)}}}var o=0,a=1,u=2,c=Class.Thenable=new Class({$thenableState:o,$thenableResult:null,$thenableReactions:[],resolve:function(e){return t(this,e),this},reject:function(t){return n(this,t),this},getThenableState:function(){switch(this.$thenableState){case o:return"pending";case a:return"fulfilled";case u:return"rejected"}},resetThenable:function(t){return n(this,t),r(this),this},then:function(t,e){"function"!=typeof t&&(t="Identity"),"function"!=typeof e&&(e="Thrower");var n=new c;return this.$thenableReactions.push({thenable:n,fulfillHandler:t,rejectHandler:e}),this.$thenableState!==o&&i(this),n},"catch":function(t){return this.then(null,t)}});c.extend({resolve:function(e){var n;return e instanceof c?n=e:(n=new c,t(n,e)),n},reject:function(t){var e=new c;return n(e,t),e}});var l;l="undefined"!=typeof process&&"function"==typeof process.nextTick?process.nextTick:"undefined"!=typeof setImmediate?setImmediate:function(t){setTimeout(t,0)}}(),function(){Object.extend({subset:function(t,e){for(var n={},r=0,i=e.length;i>r;r++){var s=e[r];s in t&&(n[s]=t[s])}return n},map:function(t,e,n){for(var r={},i=Object.keys(t),s=0;s<i.length;s++){var o=i[s];r[o]=e.call(n,t[o],o,t)}return r},filter:function(t,e,n){for(var r={},i=Object.keys(t),s=0;s<i.length;s++){var o=i[s],a=t[o];e.call(n,a,o,t)&&(r[o]=a)}return r},every:function(t,e,n){for(var r=Object.keys(t),i=0;i<r.length;i++){var s=r[i];if(!e.call(n,t[s],s))return!1}return!0},some:function(t,e,n){for(var r=Object.keys(t),i=0;i<r.length;i++){var s=r[i];if(e.call(n,t[s],s))return!0}return!1},values:function(t){for(var e=[],n=Object.keys(t),r=0;r<n.length;r++){var i=n[r];e.push(t[i])}return e},getLength:function(t){return Object.keys(t).length},keyOf:function(t,e){for(var n=Object.keys(t),r=0;r<n.length;r++){var i=n[r];if(t[i]===e)return i}return null},contains:function(t,e){return null!=Object.keyOf(t,e)},toQueryString:function(t,e){var n=[];return Object.each(t,function(t,r){e&&(r=e+"["+r+"]");var i;switch(typeOf(t)){case"object":i=Object.toQueryString(t,r);break;case"array":var s={};t.each(function(t,e){s[e]=t}),i=Object.toQueryString(s,r);break;default:i=r+"="+encodeURIComponent(t)}null!=t&&n.push(i)}),n.join("&")}})}(),function(){function t(t,s,o,u,l,f,p,d,m,v,g,y,b,x,E,S){if((s||-1===n)&&(e.expressions[++n]=[],r=-1,s))return"";if(o||u||-1===r){o=o||" ";var w=e.expressions[n];i&&w[r]&&(w[r].reverseCombinator=c(o)),w[++r]={combinator:o,tag:"*"}}var k=e.expressions[n][r];if(l)k.tag=l.replace(a,"");else if(f)k.id=f.replace(a,"");else if(p)p=p.replace(a,""),k.classList||(k.classList=[]),k.classes||(k.classes=[]),k.classList.push(p),k.classes.push({value:p,regexp:new RegExp("(^|\\s)"+h(p)+"(\\s|$)")});else if(b)S=S||E,S=S?S.replace(a,""):null,k.pseudos||(k.pseudos=[]),k.pseudos.push({key:b.replace(a,""),value:S,type:1==y.length?"class":"element"});else if(d){d=d.replace(a,""),g=(g||"").replace(a,"");var T,C;switch(m){case"^=":C=new RegExp("^"+h(g));break;case"$=":C=new RegExp(h(g)+"$");break;case"~=":C=new RegExp("(^|\\s)"+h(g)+"(\\s|$)");break;case"|=":C=new RegExp("^"+h(g)+"(-|$)");break;case"=":T=function(t){return g==t};break;case"*=":T=function(t){return t&&t.indexOf(g)>-1};break;case"!=":T=function(t){return g!=t};break;default:T=function(t){return!!t}}""==g&&/^[*$^]=$/.test(m)&&(T=function(){return!1}),T||(T=function(t){return t&&C.test(t)}),k.attributes||(k.attributes=[]),k.attributes.push({key:d,operator:m,value:g,test:T})}return""}var e,n,r,i,s={},o={},a=/\\/g,u=function(r,a){if(null==r)return null;if(r.Slick===!0)return r;r=(""+r).replace(/^\s+|\s+$/g,""),i=!!a;var c=i?o:s;if(c[r])return c[r];for(e={Slick:!0,expressions:[],raw:r,reverse:function(){return u(this.raw,!0)}},n=-1;r!=(r=r.replace(f,t)););return e.length=e.expressions.length,c[e.raw]=i?l(e):e},c=function(t){return"!"===t?" ":" "===t?"!":/^!/.test(t)?t.replace(/^!/,""):"!"+t},l=function(t){for(var e=t.expressions,n=0;n<e.length;n++){for(var r=e[n],i={parts:[],tag:"*",combinator:c(r[0].combinator)},s=0;s<r.length;s++){var o=r[s];o.reverseCombinator||(o.reverseCombinator=" "),o.combinator=o.reverseCombinator,delete o.reverseCombinator}r.reverse().push(i)}return t},h=function(t){return t.replace(/[-[\]{}()*+?.\\^$|,#\s]/g,function(t){return"\\"+t})},f=new RegExp("^(?:\\s*(,)\\s*|\\s*(<combinator>+)\\s*|(\\s+)|(<unicode>+|\\*)|\\#(<unicode>+)|\\.(<unicode>+)|\\[\\s*(<unicode1>+)(?:\\s*([*^$!~|]?=)(?:\\s*(?:([\"']?)(.*?)\\9)))?\\s*\\](?!\\])|(:+)(<unicode>+)(?:\\((?:(?:([\"'])([^\\13]*)\\13)|((?:\\([^)]+\\)|[^()]*)+))\\))?)".replace(/<combinator>/,"["+h(">+~`!@$%^&={}\\;</")+"]").replace(/<unicode>/g,"(?:[\\w\\u00a1-\\uFFFF-]|\\\\[^\\s0-9a-f])").replace(/<unicode1>/g,"(?:[:\\w\\u00a1-\\uFFFF-]|\\\\[^\\s0-9a-f])")),p=this.Slick||{};p.parse=function(t){return u(t)},p.escapeRegExp=h,this.Slick||(this.Slick=p)}.apply( true?exports:this),function(){var t={},e={},n=Object.prototype.toString;t.isNativeCode=function(t){return/\{\s*\[native code\]\s*\}/.test(""+t)},t.isXML=function(t){return!!t.xmlVersion||!!t.xml||"[object XMLDocument]"==n.call(t)||9==t.nodeType&&"HTML"!=t.documentElement.nodeName},t.setDocument=function(t){var n=t.nodeType;if(9==n);else if(n)t=t.ownerDocument;else{if(!t.navigator)return;t=t.document}if(this.document!==t){this.document=t;var r,i=t.documentElement,s=this.getUIDXML(i),o=e[s];if(o)for(r in o)this[r]=o[r];else{o=e[s]={},o.root=i,o.isXMLDocument=this.isXML(t),o.brokenStarGEBTN=o.starSelectsClosedQSA=o.idGetsName=o.brokenMixedCaseQSA=o.brokenGEBCN=o.brokenCheckedQSA=o.brokenEmptyAttributeQSA=o.isHTMLDocument=o.nativeMatchesSelector=!1;var a,u,c,l,h,f,p="slick_uniqueid",d=t.createElement("div"),m=t.body||t.getElementsByTagName("body")[0]||i;m.appendChild(d);try{d.innerHTML='<a id="'+p+'"></a>',o.isHTMLDocument=!!t.getElementById(p)}catch(v){}if(o.isHTMLDocument){d.style.display="none",d.appendChild(t.createComment("")),u=d.getElementsByTagName("*").length>1;try{d.innerHTML="foo</foo>",f=d.getElementsByTagName("*"),a=f&&!!f.length&&"/"==f[0].nodeName.charAt(0)}catch(v){}o.brokenStarGEBTN=u||a;try{d.innerHTML='<a name="'+p+'"></a><b id="'+p+'"></b>',o.idGetsName=t.getElementById(p)===d.firstChild}catch(v){}if(d.getElementsByClassName){try{d.innerHTML='<a class="f"></a><a class="b"></a>',d.getElementsByClassName("b").length,d.firstChild.className="b",l=2!=d.getElementsByClassName("b").length}catch(v){}try{d.innerHTML='<a class="a"></a><a class="f b a"></a>',c=2!=d.getElementsByClassName("a").length}catch(v){}o.brokenGEBCN=l||c}if(d.querySelectorAll){try{d.innerHTML="foo</foo>",f=d.querySelectorAll("*"),o.starSelectsClosedQSA=f&&!!f.length&&"/"==f[0].nodeName.charAt(0)}catch(v){}try{d.innerHTML='<a class="MiX"></a>',o.brokenMixedCaseQSA=!d.querySelectorAll(".MiX").length}catch(v){}try{d.innerHTML='<select><option selected="selected">a</option></select>',o.brokenCheckedQSA=0==d.querySelectorAll(":checked").length}catch(v){}try{d.innerHTML='<a class=""></a>',o.brokenEmptyAttributeQSA=0!=d.querySelectorAll('[class*=""]').length}catch(v){}}try{d.innerHTML='<form action="s"><input id="action"/></form>',h="s"!=d.firstChild.getAttribute("action")}catch(v){}if(o.nativeMatchesSelector=i.matches||i.mozMatchesSelector||i.webkitMatchesSelector,o.nativeMatchesSelector)try{o.nativeMatchesSelector.call(i,":slick"),o.nativeMatchesSelector=null}catch(v){}}try{i.slick_expando=1,delete i.slick_expando,o.getUID=this.getUIDHTML}catch(v){o.getUID=this.getUIDXML}m.removeChild(d),d=f=m=null,o.getAttribute=o.isHTMLDocument&&h?function(t,e){var n=this.attributeGetters[e];if(n)return n.call(t);var r=t.getAttributeNode(e);return r?r.nodeValue:null}:function(t,e){var n=this.attributeGetters[e];return n?n.call(t):t.getAttribute(e)},o.hasAttribute=i&&this.isNativeCode(i.hasAttribute)?function(t,e){return t.hasAttribute(e)}:function(t,e){return t=t.getAttributeNode(e),!(!t||!t.specified&&!t.nodeValue)};var g=i&&this.isNativeCode(i.contains),y=t&&this.isNativeCode(t.contains);o.contains=g&&y?function(t,e){return t.contains(e)}:g&&!y?function(e,n){return e===n||(e===t?t.documentElement:e).contains(n)}:i&&i.compareDocumentPosition?function(t,e){return t===e||!!(16&t.compareDocumentPosition(e))}:function(t,e){if(e)do if(e===t)return!0;while(e=e.parentNode);return!1},o.documentSorter=i.compareDocumentPosition?function(t,e){return t.compareDocumentPosition&&e.compareDocumentPosition?4&t.compareDocumentPosition(e)?-1:t===e?0:1:0}:"sourceIndex"in i?function(t,e){return t.sourceIndex&&e.sourceIndex?t.sourceIndex-e.sourceIndex:0}:t.createRange?function(t,e){if(!t.ownerDocument||!e.ownerDocument)return 0;var n=t.ownerDocument.createRange(),r=e.ownerDocument.createRange();return n.setStart(t,0),n.setEnd(t,0),r.setStart(e,0),r.setEnd(e,0),n.compareBoundaryPoints(Range.START_TO_END,r)}:null,i=null;for(r in o)this[r]=o[r]}}};var r=/^([#.]?)((?:[\w-]+|\*))$/,i=/\[.+[*$^]=(?:""|'')?\]/,s={};t.search=function(t,e,n,o){var a=this.found=o?null:n||[];if(!t)return a;if(t.navigator)t=t.document;else if(!t.nodeType)return a;var u,c,l,f,p=this.uniques={},d=!(!n||!n.length),m=9==t.nodeType;if(this.document!==(m?t:t.ownerDocument)&&this.setDocument(t),d)for(c=a.length;c--;)p[this.getUID(a[c])]=!0;if("string"==typeof e){var v=e.match(r);t:if(v){var g=v[1],y=v[2];if(g){if("#"==g){if(!this.isHTMLDocument||!m)break t;if(l=t.getElementById(y),!l)return a;if(this.idGetsName&&l.getAttributeNode("id").nodeValue!=y)break t;if(o)return l||null;d&&p[this.getUID(l)]||a.push(l)}else if("."==g){if(!this.isHTMLDocument||(!t.getElementsByClassName||this.brokenGEBCN)&&t.querySelectorAll)break t;if(t.getElementsByClassName&&!this.brokenGEBCN){if(f=t.getElementsByClassName(y),o)return f[0]||null;for(c=0;l=f[c++];)d&&p[this.getUID(l)]||a.push(l)}else{var b=new RegExp("(^|\\s)"+h.escapeRegExp(y)+"(\\s|$)");for(f=t.getElementsByTagName("*"),c=0;l=f[c++];)if(className=l.className,className&&b.test(className)){if(o)return l;d&&p[this.getUID(l)]||a.push(l)}}}}else{if("*"==y&&this.brokenStarGEBTN)break t;if(f=t.getElementsByTagName(y),o)return f[0]||null;for(c=0;l=f[c++];)d&&p[this.getUID(l)]||a.push(l)}return d&&this.sort(a),o?null:a}t:if(t.querySelectorAll){if(!this.isHTMLDocument||s[e]||this.brokenMixedCaseQSA||this.brokenCheckedQSA&&e.indexOf(":checked")>-1||this.brokenEmptyAttributeQSA&&i.test(e)||!m&&e.indexOf(",")>-1||h.disableQSA)break t;var x,E=e,S=t;m||(x=S.getAttribute("id"),slickid="slickid__",S.setAttribute("id",slickid),E="#"+slickid+" "+E,t=S.parentNode);try{if(o)return t.querySelector(E)||null;f=t.querySelectorAll(E)}catch(w){s[e]=1;break t}finally{m||(x?S.setAttribute("id",x):S.removeAttribute("id"),t=S)}if(this.starSelectsClosedQSA)for(c=0;l=f[c++];)!(l.nodeName>"@")||d&&p[this.getUID(l)]||a.push(l);else for(c=0;l=f[c++];)d&&p[this.getUID(l)]||a.push(l);return d&&this.sort(a),a}if(u=this.Slick.parse(e),!u.length)return a}else{if(null==e)return a;if(!e.Slick)return this.contains(t.documentElement||t,e)?(a?a.push(e):a=e,a):a;u=e}this.posNTH={},this.posNTHLast={},this.posNTHType={},this.posNTHTypeLast={},this.push=!d&&(o||1==u.length&&1==u.expressions[0].length)?this.pushArray:this.pushUID,null==a&&(a=[]);var k,T,C,N,O,A,L,M,$,j,D,P,H,F,R=u.expressions;t:for(c=0;P=R[c];c++)for(k=0;H=P[k];k++){if(N="combinator:"+H.combinator,!this[N])continue t;if(O=this.isXMLDocument?H.tag:H.tag.toUpperCase(),A=H.id,L=H.classList,M=H.classes,$=H.attributes,j=H.pseudos,F=k===P.length-1,this.bitUniques={},F?(this.uniques=p,this.found=a):(this.uniques={},this.found=[]),0===k){if(this[N](t,O,A,M,$,j,L),o&&F&&a.length)break t}else if(o&&F){for(T=0,C=D.length;C>T;T++)if(this[N](D[T],O,A,M,$,j,L),a.length)break t}else for(T=0,C=D.length;C>T;T++)this[N](D[T],O,A,M,$,j,L);D=this.found}return(d||u.expressions.length>1)&&this.sort(a),o?a[0]||null:a},t.uidx=1,t.uidk="slick-uniqueid",t.getUIDXML=function(t){var e=t.getAttribute(this.uidk);return e||(e=this.uidx++,t.setAttribute(this.uidk,e)),e},t.getUIDHTML=function(t){return t.uniqueNumber||(t.uniqueNumber=this.uidx++)},t.sort=function(t){return this.documentSorter?(t.sort(this.documentSorter),t):t},t.cacheNTH={},t.matchNTH=/^([+-]?\d*)?([a-z]+)?([+-]\d+)?$/,t.parseNTHArgument=function(t){var e=t.match(this.matchNTH);if(!e)return!1;var n=e[2]||!1,r=e[1]||1;"-"==r&&(r=-1);var i=+e[3]||0;return e="n"==n?{a:r,b:i}:"odd"==n?{a:2,b:1}:"even"==n?{a:2,b:0}:{a:0,b:r},this.cacheNTH[t]=e},t.createNTHPseudo=function(t,e,n,r){return function(i,s){var o=this.getUID(i);if(!this[n][o]){var a=i.parentNode;if(!a)return!1;var u=a[t],c=1;if(r){var l=i.nodeName;do u.nodeName==l&&(this[n][this.getUID(u)]=c++);while(u=u[e])}else do 1==u.nodeType&&(this[n][this.getUID(u)]=c++);while(u=u[e])}s=s||"n";var h=this.cacheNTH[s]||this.parseNTHArgument(s);if(!h)return!1;var f=h.a,p=h.b,d=this[n][o];if(0==f)return p==d;if(f>0){if(p>d)return!1}else if(d>p)return!1;return(d-p)%f==0}},t.pushArray=function(t,e,n,r,i,s){this.matchSelector(t,e,n,r,i,s)&&this.found.push(t)},t.pushUID=function(t,e,n,r,i,s){var o=this.getUID(t);!this.uniques[o]&&this.matchSelector(t,e,n,r,i,s)&&(this.uniques[o]=!0,this.found.push(t))},t.matchNode=function(t,e){if(this.isHTMLDocument&&this.nativeMatchesSelector)try{return this.nativeMatchesSelector.call(t,e.replace(/\[([^=]+)=\s*([^'"\]]+?)\s*\]/g,'[$1="$2"]'))}catch(n){}var r=this.Slick.parse(e);if(!r)return!0;var i,s,o=r.expressions,a=0;for(i=0;s=o[i];i++)if(1==s.length){var u=s[0];if(this.matchSelector(t,this.isXMLDocument?u.tag:u.tag.toUpperCase(),u.id,u.classes,u.attributes,u.pseudos))return!0;a++}if(a==r.length)return!1;var c,l=this.search(this.document,r);for(i=0;c=l[i++];)if(c===t)return!0;return!1},t.matchPseudo=function(t,e,n){var r="pseudo:"+e;if(this[r])return this[r](t,n);var i=this.getAttribute(t,e);return n?n==i:!!i},t.matchSelector=function(t,e,n,r,i,s){if(e){var o=this.isXMLDocument?t.nodeName:t.nodeName.toUpperCase();if("*"==e){if("@">o)return!1}else if(o!=e)return!1}if(n&&t.getAttribute("id")!=n)return!1;var a,u,c;if(r)for(a=r.length;a--;)if(c=this.getAttribute(t,"class"),!c||!r[a].regexp.test(c))return!1;if(i)for(a=i.length;a--;)if(u=i[a],u.operator?!u.test(this.getAttribute(t,u.key)):!this.hasAttribute(t,u.key))return!1;if(s)for(a=s.length;a--;)if(u=s[a],!this.matchPseudo(t,u.key,u.value))return!1;return!0};var o={" ":function(t,e,n,r,i,s,o){var a,u,c;if(this.isHTMLDocument){t:if(n){if(u=this.document.getElementById(n),!u&&t.all||this.idGetsName&&u&&u.getAttributeNode("id").nodeValue!=n){if(c=t.all[n],!c)return;for(c[0]||(c=[c]),a=0;u=c[a++];){var l=u.getAttributeNode("id");if(l&&l.nodeValue==n){this.push(u,e,null,r,i,s);break}}return}if(!u){if(this.contains(this.root,t))return;break t}if(this.document!==t&&!this.contains(t,u))return;return void this.push(u,e,null,r,i,s)}t:if(r&&t.getElementsByClassName&&!this.brokenGEBCN){if(c=t.getElementsByClassName(o.join(" ")),
	!c||!c.length)break t;for(a=0;u=c[a++];)this.push(u,e,n,null,i,s);return}}if(c=t.getElementsByTagName(e),c&&c.length)for(this.brokenStarGEBTN||(e=null),a=0;u=c[a++];)this.push(u,e,n,r,i,s)},">":function(t,e,n,r,i,s){if(t=t.firstChild)do 1==t.nodeType&&this.push(t,e,n,r,i,s);while(t=t.nextSibling)},"+":function(t,e,n,r,i,s){for(;t=t.nextSibling;)if(1==t.nodeType){this.push(t,e,n,r,i,s);break}},"^":function(t,e,n,r,i,s){t=t.firstChild,t&&(1==t.nodeType?this.push(t,e,n,r,i,s):this["combinator:+"](t,e,n,r,i,s))},"~":function(t,e,n,r,i,s){for(;t=t.nextSibling;)if(1==t.nodeType){var o=this.getUID(t);if(this.bitUniques[o])break;this.bitUniques[o]=!0,this.push(t,e,n,r,i,s)}},"++":function(t,e,n,r,i,s){this["combinator:+"](t,e,n,r,i,s),this["combinator:!+"](t,e,n,r,i,s)},"~~":function(t,e,n,r,i,s){this["combinator:~"](t,e,n,r,i,s),this["combinator:!~"](t,e,n,r,i,s)},"!":function(t,e,n,r,i,s){for(;t=t.parentNode;)t!==this.document&&this.push(t,e,n,r,i,s)},"!>":function(t,e,n,r,i,s){t=t.parentNode,t!==this.document&&this.push(t,e,n,r,i,s)},"!+":function(t,e,n,r,i,s){for(;t=t.previousSibling;)if(1==t.nodeType){this.push(t,e,n,r,i,s);break}},"!^":function(t,e,n,r,i,s){t=t.lastChild,t&&(1==t.nodeType?this.push(t,e,n,r,i,s):this["combinator:!+"](t,e,n,r,i,s))},"!~":function(t,e,n,r,i,s){for(;t=t.previousSibling;)if(1==t.nodeType){var o=this.getUID(t);if(this.bitUniques[o])break;this.bitUniques[o]=!0,this.push(t,e,n,r,i,s)}}};for(var a in o)t["combinator:"+a]=o[a];var u={empty:function(t){var e=t.firstChild;return!(e&&1==e.nodeType||(t.innerText||t.textContent||"").length)},not:function(t,e){return!this.matchNode(t,e)},contains:function(t,e){return(t.innerText||t.textContent||"").indexOf(e)>-1},"first-child":function(t){for(;t=t.previousSibling;)if(1==t.nodeType)return!1;return!0},"last-child":function(t){for(;t=t.nextSibling;)if(1==t.nodeType)return!1;return!0},"only-child":function(t){for(var e=t;e=e.previousSibling;)if(1==e.nodeType)return!1;for(var n=t;n=n.nextSibling;)if(1==n.nodeType)return!1;return!0},"nth-child":t.createNTHPseudo("firstChild","nextSibling","posNTH"),"nth-last-child":t.createNTHPseudo("lastChild","previousSibling","posNTHLast"),"nth-of-type":t.createNTHPseudo("firstChild","nextSibling","posNTHType",!0),"nth-last-of-type":t.createNTHPseudo("lastChild","previousSibling","posNTHTypeLast",!0),index:function(t,e){return this["pseudo:nth-child"](t,""+(e+1))},even:function(t){return this["pseudo:nth-child"](t,"2n")},odd:function(t){return this["pseudo:nth-child"](t,"2n+1")},"first-of-type":function(t){for(var e=t.nodeName;t=t.previousSibling;)if(t.nodeName==e)return!1;return!0},"last-of-type":function(t){for(var e=t.nodeName;t=t.nextSibling;)if(t.nodeName==e)return!1;return!0},"only-of-type":function(t){for(var e=t,n=t.nodeName;e=e.previousSibling;)if(e.nodeName==n)return!1;for(var r=t;r=r.nextSibling;)if(r.nodeName==n)return!1;return!0},enabled:function(t){return!t.disabled},disabled:function(t){return t.disabled},checked:function(t){return t.checked||t.selected},focus:function(t){return this.isHTMLDocument&&this.document.activeElement===t&&(t.href||t.type||this.hasAttribute(t,"tabindex"))},root:function(t){return t===this.root},selected:function(t){return t.selected}};for(var c in u)t["pseudo:"+c]=u[c];var l=t.attributeGetters={"for":function(){return"htmlFor"in this?this.htmlFor:this.getAttribute("for")},href:function(){return"href"in this?this.getAttribute("href",2):this.getAttribute("href")},style:function(){return this.style?this.style.cssText:this.getAttribute("style")},tabindex:function(){var t=this.getAttributeNode("tabindex");return t&&t.specified?t.nodeValue:null},type:function(){return this.getAttribute("type")},maxlength:function(){var t=this.getAttributeNode("maxLength");return t&&t.specified?t.nodeValue:null}};l.MAXLENGTH=l.maxLength=l.maxlength;var h=t.Slick=this.Slick||{};h.version="1.1.7",h.search=function(e,n,r){return t.search(e,n,r)},h.find=function(e,n){return t.search(e,n,null,!0)},h.contains=function(e,n){return t.setDocument(e),t.contains(e,n)},h.getAttribute=function(e,n){return t.setDocument(e),t.getAttribute(e,n)},h.hasAttribute=function(e,n){return t.setDocument(e),t.hasAttribute(e,n)},h.match=function(e,n){return e&&n?n&&n!==e?(t.setDocument(e),t.matchNode(e,n)):!0:!1},h.defineAttributeGetter=function(e,n){return t.attributeGetters[e]=n,this},h.lookupAttributeGetter=function(e){return t.attributeGetters[e]},h.definePseudo=function(e,n){return t["pseudo:"+e]=function(t,e){return n.call(t,e)},this},h.lookupPseudo=function(e){var n=t["pseudo:"+e];return n?function(t){return n.call(this,t)}:null},h.override=function(e,n){return t.override(e,n),this},h.isXML=t.isXML,h.uidOf=function(e){return t.getUIDHTML(e)},this.Slick||(this.Slick=h)}.apply( true?exports:this);var Element=this.Element=function(t,e){var n=Element.Constructors[t];if(n)return n(e);if("string"!=typeof t)return document.id(t).set(e);if(e||(e={}),!/^[\w-]+$/.test(t)){var r=Slick.parse(t).expressions[0][0];t="*"==r.tag?"div":r.tag,r.id&&null==e.id&&(e.id=r.id);var i=r.attributes;if(i)for(var s,o=0,a=i.length;a>o;o++)s=i[o],null==e[s.key]&&(null!=s.value&&"="==s.operator?e[s.key]=s.value:s.value||s.operator||(e[s.key]=!0));r.classList&&null==e["class"]&&(e["class"]=r.classList.join(" "))}return document.newElement(t,e)};Browser.Element&&(Element.prototype=Browser.Element.prototype,Element.prototype._fireEvent=function(t){return function(e,n){return t.call(this,e,n)}}(Element.prototype.fireEvent)),new Type("Element",Element).mirror(function(t){if(!Array.prototype[t]){var e={};e[t]=function(){for(var e=[],n=arguments,r=!0,i=0,s=this.length;s>i;i++){var o=this[i],a=e[i]=o[t].apply(o,n);r=r&&"element"==typeOf(a)}return r?new Elements(e):e},Elements.implement(e)}}),Browser.Element||(Element.parent=Object,Element.Prototype={$constructor:Element,$family:Function.convert("element").hide()},Element.mirror(function(t,e){Element.Prototype[t]=e})),Element.Constructors={};var IFrame=new Type("IFrame",function(){var t,e=Array.link(arguments,{properties:Type.isObject,iframe:function(t){return null!=t}}),n=e.properties||{};e.iframe&&(t=document.id(e.iframe));var r=n.onload||function(){};delete n.onload,n.id=n.name=[n.id,n.name,t?t.id||t.name:"IFrame_"+String.uniqueID()].pick(),t=new Element(t||"iframe",n);var i=function(){r.call(t.contentWindow)};return window.frames[n.id]?i():t.addListener("load",i),t}),Elements=this.Elements=function(t){if(t&&t.length)for(var e,n={},r=0;e=t[r++];){var i=Slick.uidOf(e);n[i]||(n[i]=!0,this.push(e))}};Elements.prototype={length:0},Elements.parent=Array,new Type("Elements",Elements).implement({filter:function(t,e){return t?new Elements(Array.filter(this,"string"==typeOf(t)?function(e){return e.match(t)}:t,e)):this}.protect(),push:function(){for(var t=this.length,e=0,n=arguments.length;n>e;e++){var r=document.id(arguments[e]);r&&(this[t++]=r)}return this.length=t}.protect(),unshift:function(){for(var t=[],e=0,n=arguments.length;n>e;e++){var r=document.id(arguments[e]);r&&t.push(r)}return Array.prototype.unshift.apply(this,t)}.protect(),concat:function(){for(var t=new Elements(this),e=0,n=arguments.length;n>e;e++){var r=arguments[e];Type.isEnumerable(r)?t.append(r):t.push(r)}return t}.protect(),append:function(t){for(var e=0,n=t.length;n>e;e++)this.push(t[e]);return this}.protect(),empty:function(){for(;this.length;)delete this[--this.length];return this}.protect()}),function(){var t=Array.prototype.splice,e={0:0,1:1,length:2};t.call(e,1,1),1==e[1]&&Elements.implement("splice",function(){for(var e=this.length,n=t.apply(this,arguments);e>=this.length;)delete this[e--];return n}.protect()),Array.forEachMethod(function(t,e){Elements.implement(e,t)}),Array.mirror(Elements);var n;try{n="x"==document.createElement("<input name=x>").name}catch(r){}var i=function(t){return(""+t).replace(/&/g,"&amp;").replace(/"/g,"&quot;")},s=function(){var t=document.createElement("style"),e=!1;try{t.innerHTML="#justTesing{margin: 0px;}",e=!!t.innerHTML}catch(n){}return e}();Document.implement({newElement:function(t,e){if(e){if(null!=e.checked&&(e.defaultChecked=e.checked),"checkbox"!=e.type&&"radio"!=e.type||null!=e.value||(e.value="on"),!s&&"style"==t){var r=document.createElement("style");return r.setAttribute("type","text/css"),e.type&&delete e.type,this.id(r).set(e)}n&&(t="<"+t,e.name&&(t+=' name="'+i(e.name)+'"'),e.type&&(t+=' type="'+i(e.type)+'"'),t+=">",delete e.name,delete e.type)}return this.id(this.createElement(t)).set(e)}})}(),function(){Slick.uidOf(window),Slick.uidOf(document),Document.implement({newTextNode:function(t){return this.createTextNode(t)},getDocument:function(){return this},getWindow:function(){return this.window},id:function(){var t={string:function(e,n,r){return e=Slick.find(r,"#"+e.replace(/(\W)/g,"\\$1")),e?t.element(e,n):null},element:function(t,e){if(Slick.uidOf(t),!e&&!t.$family&&!/^(?:object|embed)$/i.test(t.tagName)){var n=t.fireEvent;t._fireEvent=function(t,e){return n(t,e)},Object.append(t,Element.Prototype)}return t},object:function(e,n,r){return e.toElement?t.element(e.toElement(r),n):null}};return t.textnode=t.whitespace=t.window=t.document=function(t){return t},function(e,n,r){if(e&&e.$family&&e.uniqueNumber)return e;var i=typeOf(e);return t[i]?t[i](e,n,r||document):null}}()}),null==window.$&&Window.implement("$",function(t,e){return document.id(t,e,this.document)}),Window.implement({getDocument:function(){return this.document},getWindow:function(){return this}}),[Document,Element].invoke("implement",{getElements:function(t){return Slick.search(this,t,new Elements)},getElement:function(t){return document.id(Slick.find(this,t))}});var t={contains:function(t){return Slick.contains(this,t)}};document.contains||Document.implement(t),document.createElement("div").contains||Element.implement(t);var e=function(t,e){if(!t)return e;t=Object.clone(Slick.parse(t));for(var n=t.expressions,r=n.length;r--;)n[r][0].combinator=e;return t};Object.forEach({getNext:"~",getPrevious:"!~",getParent:"!"},function(t,n){Element.implement(n,function(n){return this.getElement(e(n,t))})}),Object.forEach({getAllNext:"~",getAllPrevious:"!~",getSiblings:"~~",getChildren:">",getParents:"!"},function(t,n){Element.implement(n,function(n){return this.getElements(e(n,t))})}),Element.implement({getFirst:function(t){return document.id(Slick.search(this,e(t,">"))[0])},getLast:function(t){return document.id(Slick.search(this,e(t,">")).getLast())},getWindow:function(){return this.ownerDocument.window},getDocument:function(){return this.ownerDocument},getElementById:function(t){return document.id(Slick.find(this,"#"+(""+t).replace(/(\W)/g,"\\$1")))},match:function(t){return!t||Slick.match(this,t)}}),null==window.$$&&Window.implement("$$",function(t){if(1==arguments.length){if("string"==typeof t)return Slick.search(this.document,t,new Elements);if(Type.isEnumerable(t))return new Elements(t)}return new Elements(arguments)});var n={before:function(t,e){var n=e.parentNode;n&&n.insertBefore(t,e)},after:function(t,e){var n=e.parentNode;n&&n.insertBefore(t,e.nextSibling)},bottom:function(t,e){e.appendChild(t)},top:function(t,e){e.insertBefore(t,e.firstChild)}};n.inside=n.bottom;var r={},i={},s={};Array.forEach(["type","value","defaultValue","accessKey","cellPadding","cellSpacing","colSpan","frameBorder","rowSpan","tabIndex","useMap"],function(t){s[t.toLowerCase()]=t}),s.html="innerHTML",s.text=null==document.createElement("div").textContent?"innerText":"textContent",Object.forEach(s,function(t,e){i[e]=function(e,n){e[t]=n},r[e]=function(e){return e[t]}}),i.text=function(){return function(t,e){"style"==t.get("tag")?t.set("html",e):t[s.text]=e}}(i.text),r.text=function(t){return function(e){return"style"==e.get("tag")?e.innerHTML:t(e)}}(r.text);var o=["compact","nowrap","ismap","declare","noshade","checked","disabled","readOnly","multiple","selected","noresize","defer","defaultChecked","autofocus","controls","autoplay","loop"],a={};Array.forEach(o,function(t){var e=t.toLowerCase();a[e]=t,i[e]=function(e,n){e[t]=!!n},r[e]=function(e){return!!e[t]}}),Object.append(i,{"class":function(t,e){"className"in t?t.className=e||"":t.setAttribute("class",e)},"for":function(t,e){"htmlFor"in t?t.htmlFor=e:t.setAttribute("for",e)},style:function(t,e){t.style?t.style.cssText=e:t.setAttribute("style",e)},value:function(t,e){t.value=null!=e?e:""}}),r["class"]=function(t){return"className"in t?t.className||null:t.getAttribute("class")};var u=document.createElement("button");try{u.type="button"}catch(c){}"button"!=u.type&&(i.type=function(t,e){t.setAttribute("type",e)}),u=null;var h,f,p=function(){var t=document.createElement("style"),e=!1;try{t.innerHTML="#justTesing{margin: 0px;}",e=!!t.innerHTML}catch(n){}return e}(),d=document.createElement("input");d.value="t",d.type="submit",h="t"!=d.value;try{d.value="",d.type="email",f="email"==d.type}catch(c){}d=null,(h||!f)&&(i.type=function(t,e){try{var n=t.value;t.type=e,t.value=n}catch(r){}});var m=function(t){return t.random="attribute","attribute"==t.getAttribute("random")}(document.createElement("div")),v=function(t){return t.innerHTML='<object><param name="should_fix" value="the unknown" /></object>',1!=t.cloneNode(!0).firstChild.childNodes.length}(document.createElement("div")),g=!!document.createElement("div").classList,y=function(t){var e=(t||"").clean().split(" "),n={};return e.filter(function(t){return""===t||n[t]?void 0:n[t]=t})},b=function(t){this.classList.add(t)},x=function(t){this.classList.remove(t)};Element.implement({setProperty:function(t,e){var n=i[t.toLowerCase()];if(n)n(this,e);else{var r;m&&(r=this.retrieve("$attributeWhiteList",{})),null==e?(this.removeAttribute(t),m&&delete r[t]):(this.setAttribute(t,""+e),m&&(r[t]=!0))}return this},setProperties:function(t){for(var e in t)this.setProperty(e,t[e]);return this},getProperty:function(t){var e=r[t.toLowerCase()];if(e)return e(this);if(m){var n=this.getAttributeNode(t),i=this.retrieve("$attributeWhiteList",{});if(!n)return null;if(n.expando&&!i[t]){var s=this.outerHTML;if(s.substr(0,s.search(/\/?['"]?>(?![^<]*<['"])/)).indexOf(t)<0)return null;i[t]=!0}}var o=Slick.getAttribute(this,t);return o||Slick.hasAttribute(this,t)?o:null},getProperties:function(){var t=Array.convert(arguments);return t.map(this.getProperty,this).associate(t)},removeProperty:function(t){return this.setProperty(t,null)},removeProperties:function(){return Array.each(arguments,this.removeProperty,this),this},set:function(t,e){var n=Element.Properties[t];n&&n.set?n.set.call(this,e):this.setProperty(t,e)}.overloadSetter(),get:function(t){var e=Element.Properties[t];return e&&e.get?e.get.apply(this):this.getProperty(t)}.overloadGetter(),erase:function(t){var e=Element.Properties[t];return e&&e.erase?e.erase.apply(this):this.removeProperty(t),this},hasClass:g?function(t){return this.classList.contains(t)}:function(t){return y(this.className).contains(t)},addClass:g?function(t){return y(t).forEach(b,this),this}:function(t){return this.className=y(t+" "+this.className).join(" "),this},removeClass:g?function(t){return y(t).forEach(x,this),this}:function(t){var e=y(this.className);return y(t).forEach(e.erase,e),this.className=e.join(" "),this},toggleClass:function(t,e){return null==e&&(e=!this.hasClass(t)),e?this.addClass(t):this.removeClass(t)},adopt:function(){var t,e=this,n=Array.flatten(arguments),r=n.length;r>1&&(e=t=document.createDocumentFragment());for(var i=0;r>i;i++){var s=document.id(n[i],!0);s&&e.appendChild(s)}return t&&this.appendChild(t),this},appendText:function(t,e){return this.grab(this.getDocument().newTextNode(t),e)},grab:function(t,e){return n[e||"bottom"](document.id(t,!0),this),this},inject:function(t,e){return n[e||"bottom"](this,document.id(t,!0)),this},replaces:function(t){return t=document.id(t,!0),t.parentNode.replaceChild(this,t),this},wraps:function(t,e){return t=document.id(t,!0),this.replaces(t).grab(t,e)},getSelected:function(){return this.selectedIndex,new Elements(Array.convert(this.options).filter(function(t){return t.selected}))},toQueryString:function(){var t=[];return this.getElements("input, select, textarea").each(function(e){var n=e.type;if(e.name&&!e.disabled&&"submit"!=n&&"reset"!=n&&"file"!=n&&"image"!=n){var r="select"==e.get("tag")?e.getSelected().map(function(t){return document.id(t).get("value")}):"radio"!=n&&"checkbox"!=n||e.checked?e.get("value"):null;Array.convert(r).each(function(n){"undefined"!=typeof n&&t.push(encodeURIComponent(e.name)+"="+encodeURIComponent(n))})}}),t.join("&")}});var E={before:"beforeBegin",after:"afterEnd",bottom:"beforeEnd",top:"afterBegin",inside:"beforeEnd"};Element.implement("appendHTML","insertAdjacentHTML"in document.createElement("div")?function(t,e){return this.insertAdjacentHTML(E[e||"bottom"],t),this}:function(t,e){var r=new Element("div",{html:t}),i=r.childNodes,s=r.firstChild;if(!s)return this;if(i.length>1){s=document.createDocumentFragment();for(var o=0,a=i.length;a>o;o++)s.appendChild(i[o])}return n[e||"bottom"](s,this),this});var S={},w={},k=function(t){return w[t]||(w[t]={})},T=function(t){var e=t.uniqueNumber;return t.removeEvents&&t.removeEvents(),t.clearAttributes&&t.clearAttributes(),null!=e&&(delete S[e],delete w[e]),t},C={input:"checked",option:"selected",textarea:"value"};if(Element.implement({destroy:function(){var t=T(this).getElementsByTagName("*");return Array.each(t,T),Element.dispose(this),null},empty:function(){return Array.convert(this.childNodes).each(Element.dispose),this},dispose:function(){return this.parentNode?this.parentNode.removeChild(this):this},clone:function(t,e){t=t!==!1;var n,r=this.cloneNode(t),i=[r],s=[this];for(t&&(i.append(Array.convert(r.getElementsByTagName("*"))),s.append(Array.convert(this.getElementsByTagName("*")))),n=i.length;n--;){var o=i[n],a=s[n];if(e||o.removeAttribute("id"),o.clearAttributes&&(o.clearAttributes(),o.mergeAttributes(a),o.removeAttribute("uniqueNumber"),o.options))for(var u=o.options,c=a.options,l=u.length;l--;)u[l].selected=c[l].selected;var h=C[a.tagName.toLowerCase()];h&&a[h]&&(o[h]=a[h])}if(v){var f=r.getElementsByTagName("object"),p=this.getElementsByTagName("object");for(n=f.length;n--;)f[n].outerHTML=p[n].outerHTML}return document.id(r)}}),[Element,Window,Document].invoke("implement",{addListener:function(t,e){return window.attachEvent&&!window.addEventListener&&(S[Slick.uidOf(this)]=this),this.addEventListener?this.addEventListener(t,e,!!arguments[2]):this.attachEvent("on"+t,e),this},removeListener:function(t,e){return this.removeEventListener?this.removeEventListener(t,e,!!arguments[2]):this.detachEvent("on"+t,e),this},retrieve:function(t,e){var n=k(Slick.uidOf(this)),r=n[t];return null!=e&&null==r&&(r=n[t]=e),null!=r?r:null},store:function(t,e){var n=k(Slick.uidOf(this));return n[t]=e,this},eliminate:function(t){var e=k(Slick.uidOf(this));return delete e[t],this}}),window.attachEvent&&!window.addEventListener){var N=function(){Object.each(S,T),window.CollectGarbage&&CollectGarbage(),window.removeListener("unload",N)};window.addListener("unload",N)}Element.Properties={},Element.Properties.style={set:function(t){this.style.cssText=t},get:function(){return this.style.cssText},erase:function(){this.style.cssText=""}},Element.Properties.tag={get:function(){return this.tagName.toLowerCase()}},Element.Properties.html={set:function(t){null==t?t="":"array"==typeOf(t)&&(t=t.join("")),this.styleSheet&&!p?this.styleSheet.cssText=t:this.innerHTML=t},erase:function(){this.set("html","")}};var O,A=!0,L=!0,M=!0,$=document.createElement("div");if($.innerHTML="<nav></nav>",A=1==$.childNodes.length,!A){var j="abbr article aside audio canvas datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video".split(" ");for(O=document.createDocumentFragment(),l=j.length;l--;)O.createElement(j[l])}$=null,L=Function.attempt(function(){var t=document.createElement("table");return t.innerHTML="<tr><td></td></tr>",!0});var D=document.createElement("tr"),P="<td></td>";D.innerHTML=P,M=D.innerHTML==P,D=null,L&&M&&A||(Element.Properties.html.set=function(t){var e={table:[1,"<table>","</table>"],select:[1,"<select>","</select>"],tbody:[2,"<table><tbody>","</tbody></table>"],tr:[3,"<table><tbody><tr>","</tr></tbody></table>"]};return e.thead=e.tfoot=e.tbody,function(n){if(this.styleSheet)return t.call(this,n);var r=e[this.get("tag")];if(r||A||(r=[0,"",""]),!r)return t.call(this,n);var i=r[0],s=document.createElement("div"),o=s;for(A||O.appendChild(s),s.innerHTML=[r[1],n,r[2]].flatten().join("");i--;)o=o.firstChild;this.empty().adopt(o.childNodes),A||O.removeChild(s),s=null}}(Element.Properties.html.set));var H=document.createElement("form");H.innerHTML="<select><option>s</option></select>","s"!=H.firstChild.value&&(Element.Properties.value={set:function(t){var e=this.get("tag");if("select"!=e)return this.setProperty("value",t);var n=this.getElements("option");t=String(t);for(var r=0;r<n.length;r++){var i=n[r],s=i.getAttributeNode("value"),o=s&&s.specified?i.value:i.get("text");if(o===t)return i.selected=!0}},get:function(){var t=this,e=t.get("tag");if("select"!=e&&"option"!=e)return this.getProperty("value");if("select"==e&&!(t=t.getSelected()[0]))return"";var n=t.getAttributeNode("value");return n&&n.specified?t.value:t.get("text")}}),H=null,document.createElement("div").getAttributeNode("id")&&(Element.Properties.id={set:function(t){this.id=this.getAttributeNode("id").value=t},get:function(){return this.id||null},erase:function(){this.id=this.getAttributeNode("id").value=""}})}(),function(){var t={},e=function(t){var e;if(t.wheelDelta)e=t.wheelDelta%120==0?t.wheelDelta/120:t.wheelDelta/12;else{var n=t.deltaY||t.detail||0;e=-(n%3==0?n/3:10*n)}return e},n=this.DOMEvent=new Type("DOMEvent",function(n,r){if(r||(r=window),n=n||r.event,n.$extended)return n;this.event=n,this.$extended=!0,this.shift=n.shiftKey,this.control=n.ctrlKey,this.alt=n.altKey,this.meta=n.metaKey;for(var i=this.type=n.type,s=n.target||n.srcElement;s&&3==s.nodeType;)s=s.parentNode;if(this.target=document.id(s),0==i.indexOf("key")){var o=this.code=n.which||n.keyCode;this.shift&&"keypress"==i||(this.key=t[o]),("keydown"==i||"keyup"==i)&&(o>111&&124>o?this.key="f"+(o-111):o>95&&106>o&&(this.key=o-96)),null==this.key&&(this.key=String.fromCharCode(o).toLowerCase())}else if("click"==i||"dblclick"==i||"contextmenu"==i||"wheel"==i||"DOMMouseScroll"==i||0==i.indexOf("mouse")){var a=r.document;if(a=a.compatMode&&"CSS1Compat"!=a.compatMode?a.body:a.html,this.page={x:null!=n.pageX?n.pageX:n.clientX+a.scrollLeft,y:null!=n.pageY?n.pageY:n.clientY+a.scrollTop},this.client={x:null!=n.pageX?n.pageX-r.pageXOffset:n.clientX,y:null!=n.pageY?n.pageY-r.pageYOffset:n.clientY},("DOMMouseScroll"==i||"wheel"==i||"mousewheel"==i)&&(this.wheel=e(n)),this.rightClick=3==n.which||2==n.button,"mouseover"==i||"mouseout"==i||"mouseenter"==i||"mouseleave"==i){for(var u="mouseover"==i||"mouseenter"==i,c=n.relatedTarget||n[(u?"from":"to")+"Element"];c&&3==c.nodeType;)c=c.parentNode;this.relatedTarget=document.id(c)}}else if(0==i.indexOf("touch")||0==i.indexOf("gesture")){this.rotation=n.rotation,this.scale=n.scale,this.targetTouches=n.targetTouches,this.changedTouches=n.changedTouches;var l=this.touches=n.touches;if(l&&l[0]){var h=l[0];this.page={x:h.pageX,y:h.pageY},this.client={x:h.clientX,y:h.clientY}}}this.client||(this.client={}),this.page||(this.page={})});n.implement({stop:function(){return this.preventDefault().stopPropagation()},stopPropagation:function(){return this.event.stopPropagation?this.event.stopPropagation():this.event.cancelBubble=!0,this},preventDefault:function(){return this.event.preventDefault?this.event.preventDefault():this.event.returnValue=!1,this}}),n.defineKey=function(e,n){return t[e]=n,this},n.defineKeys=n.defineKey.overloadSetter(!0),n.defineKeys({38:"up",40:"down",37:"left",39:"right",27:"esc",32:"space",8:"backspace",9:"tab",46:"delete",13:"enter"})}(),function(){Element.Properties.events={set:function(t){this.addEvents(t)}},[Element,Window,Document].invoke("implement",{addEvent:function(t,e){var n=this.retrieve("events",{});if(n[t]||(n[t]={keys:[],values:[]}),n[t].keys.contains(e))return this;n[t].keys.push(e);var r=t,i=Element.Events[t],s=e,o=this;i&&(i.onAdd&&i.onAdd.call(this,e,t),i.condition&&(s=function(n){return i.condition.call(this,n,t)?e.call(this,n):!0}),i.base&&(r=Function.convert(i.base).call(this,t)));var a=function(){return e.call(o)},u=Element.NativeEvents[r];return u&&(2==u&&(a=function(t){t=new DOMEvent(t,o.getWindow()),s.call(o,t)===!1&&t.stop()}),this.addListener(r,a,arguments[2])),n[t].values.push(a),this},removeEvent:function(t,e){var n=this.retrieve("events");if(!n||!n[t])return this;var r=n[t],i=r.keys.indexOf(e);if(-1==i)return this;var s=r.values[i];delete r.keys[i],delete r.values[i];var o=Element.Events[t];return o&&(o.onRemove&&o.onRemove.call(this,e,t),o.base&&(t=Function.convert(o.base).call(this,t))),Element.NativeEvents[t]?this.removeListener(t,s,arguments[2]):this},addEvents:function(t){for(var e in t)this.addEvent(e,t[e]);return this},removeEvents:function(t){var e;if("object"==typeOf(t)){for(e in t)this.removeEvent(e,t[e]);return this}var n=this.retrieve("events");if(!n)return this;if(t)n[t]&&(n[t].keys.each(function(e){this.removeEvent(t,e)},this),delete n[t]);else{for(e in n)this.removeEvents(e);this.eliminate("events")}return this},fireEvent:function(t,e,n){var r=this.retrieve("events");return r&&r[t]?(e=Array.convert(e),r[t].keys.each(function(t){n?t.delay(n,this,e):t.apply(this,e)},this),this):this},cloneEvents:function(t,e){t=document.id(t);var n=t.retrieve("events");if(!n)return this;if(e)n[e]&&n[e].keys.each(function(t){this.addEvent(e,t)},this);else for(var r in n)this.cloneEvents(t,r);return this}}),Element.NativeEvents={click:2,dblclick:2,mouseup:2,mousedown:2,contextmenu:2,wheel:2,mousewheel:2,DOMMouseScroll:2,mouseover:2,mouseout:2,mousemove:2,selectstart:2,selectend:2,keydown:2,keypress:2,keyup:2,orientationchange:2,touchstart:2,touchmove:2,touchend:2,touchcancel:2,gesturestart:2,gesturechange:2,gestureend:2,focus:2,blur:2,change:2,reset:2,select:2,submit:2,paste:2,input:2,load:2,unload:1,beforeunload:2,resize:1,move:1,DOMContentLoaded:1,readystatechange:1,hashchange:1,popstate:2,pageshow:2,pagehide:2,error:1,abort:1,scroll:1,message:2},Element.Events={mousewheel:{base:"onwheel"in document?"wheel":"onmousewheel"in document?"mousewheel":"DOMMouseScroll"}};var t=function(t){var e=t.relatedTarget;return null==e?!0:e?e!=this&&"xul"!=e.prefix&&"document"!=typeOf(this)&&!this.contains(e):!1};"onmouseenter"in document.documentElement?(Element.NativeEvents.mouseenter=Element.NativeEvents.mouseleave=2,Element.MouseenterCheck=t):(Element.Events.mouseenter={base:"mouseover",condition:t},Element.Events.mouseleave={base:"mouseout",condition:t}),window.addEventListener||(Element.NativeEvents.propertychange=2,Element.Events.change={base:function(){var t=this.type;return"input"!=this.get("tag")||"radio"!=t&&"checkbox"!=t?"change":"propertychange"},condition:function(t){return"propertychange"!=t.type||"checked"==t.event.propertyName}})}(),function(){var t=!!window.addEventListener;Element.NativeEvents.focusin=Element.NativeEvents.focusout=2;var e=function(t,e,n,r,i){for(;i&&i!=t;){if(e(i,r))return n.call(i,r,i);i=document.id(i.parentNode)}},n={mouseenter:{base:"mouseover",condition:Element.MouseenterCheck},mouseleave:{base:"mouseout",condition:Element.MouseenterCheck},focus:{base:"focus"+(t?"":"in"),capture:!0},blur:{base:t?"blur":"focusout",capture:!0}},r="$delegation:",i=function(t){return{base:"focusin",remove:function(e,n){var i=e.retrieve(r+t+"listeners",{})[n];if(i&&i.forms)for(var s=i.forms.length;s--;)i.forms[s].removeEvent&&i.forms[s].removeEvent(t,i.fns[s])},listen:function(n,i,s,o,a,u){var c="form"==a.get("tag")?a:o.target.getParent("form");if(c){var l=n.retrieve(r+t+"listeners",{}),h=l[u]||{forms:[],fns:[]},f=h.forms,p=h.fns;if(-1==f.indexOf(c)){f.push(c);var d=function(t){e(n,i,s,t,a)};c.addEvent(t,d),p.push(d),l[u]=h,n.store(r+t+"listeners",l)}}}}},s=function(t){return{base:"focusin",listen:function(n,r,i,s,o){var a={blur:function(){this.removeEvents(a)}};a[t]=function(t){e(n,r,i,t,o)},s.target.addEvents(a)}}};t||Object.append(n,{submit:i("submit"),reset:i("reset"),change:s("change"),select:s("select")});var o=Element.prototype,a=o.addEvent,u=o.removeEvent,c=function(t,e){return function(n,r,i){if(-1==n.indexOf(":relay"))return t.call(this,n,r,i);var s=Slick.parse(n).expressions[0][0];if("relay"!=s.pseudos[0].key)return t.call(this,n,r,i);var o=s.tag;return s.pseudos.slice(1).each(function(t){o+=":"+t.key+(t.value?"("+t.value+")":"")}),t.call(this,n,r),e.call(this,o,s.pseudos[0].value,r)}},l={addEvent:function(t,r,i){var s=this.retrieve("$delegates",{}),o=s[t];if(o)for(var u in o)if(o[u].fn==i&&o[u].match==r)return this;var c=t,l=r,h=i,f=n[t]||{};t=f.base||c,r=function(t){return Slick.match(t,l)};var p=Element.Events[c];if(f.condition||p&&p.condition){var d=r,m=f.condition||p.condition;r=function(e,n){return d(e,n)&&m.call(e,n,t)}}var v=this,g=String.uniqueID(),y=f.listen?function(t,e){!e&&t&&t.target&&(e=t.target),e&&f.listen(v,r,i,t,e,g)}:function(t,n){!n&&t&&t.target&&(n=t.target),n&&e(v,r,i,t,n)};return o||(o={}),o[g]={match:l,fn:h,delegator:y},s[c]=o,a.call(this,t,y,f.capture)},removeEvent:function(t,e,r,i){var s=this.retrieve("$delegates",{}),o=s[t];if(!o)return this;if(i){var a=t,c=o[i].delegator,h=n[t]||{};return t=h.base||a,h.remove&&h.remove(this,i),delete o[i],s[a]=o,u.call(this,t,c,h.capture)}var f,p;if(r){for(f in o)if(p=o[f],p.match==e&&p.fn==r)return l.removeEvent.call(this,t,e,r,f)}else for(f in o)p=o[f],p.match==e&&l.removeEvent.call(this,t,e,p.fn,f);return this}};[Element,Window,Document].invoke("implement",{addEvent:c(a,l.addEvent),removeEvent:c(u,l.removeEvent)})}(),function(){var t,e=document.html;t=document.createElement("div"),t.style.color="red",t.style.color=null;var n="red"==t.style.color,r="1px solid #123abc";t.style.border=r;var i=t.style.border!=r;t=null;var s=!!window.getComputedStyle,o=null!=document.createElement("div").style.borderRadius;Element.Properties.styles={set:function(t){this.setStyles(t)}};var a=null!=e.style.opacity,u=null!=e.style.filter,c=/alpha\(opacity=([\d.]+)\)/i,l=function(t,e){t.store("$opacity",e),t.style.visibility=e>0||null==e?"visible":"hidden"},h=function(t,e,n){var r=t.style,i=r.filter||t.getComputedStyle("filter")||"";r.filter=(e.test(i)?i.replace(e,n):i+" "+n).trim(),r.filter||r.removeAttribute("filter")},f=a?function(t,e){t.style.opacity=e}:u?function(t,e){t.currentStyle&&t.currentStyle.hasLayout||(t.style.zoom=1),null==e||1==e?(h(t,c,""),1==e&&1!=p(t)&&h(t,c,"alpha(opacity=100)")):h(t,c,"alpha(opacity="+(100*e).limit(0,100).round()+")")}:l,p=a?function(t){var e=t.style.opacity||t.getComputedStyle("opacity");return""==e?1:e.toFloat()}:u?function(t){var e,n=t.style.filter||t.getComputedStyle("filter");return n&&(e=n.match(c)),null==e||null==n?1:e[1]/100}:function(t){var e=t.retrieve("$opacity");return null==e&&(e="hidden"==t.style.visibility?0:1),e},d=null==e.style.cssFloat?"styleFloat":"cssFloat",m={left:"0%",top:"0%",center:"50%",right:"100%",bottom:"100%"},v=null!=e.style.backgroundPositionX,g=/^-(ms)-/,y=function(t){return t.replace(g,"$1-").camelCase()},b=function(t,e){"backgroundPosition"==e&&(t.removeAttribute(e+"X"),e+="Y"),t.removeAttribute(e)};Element.implement({getComputedStyle:function(t){if(!s&&this.currentStyle)return this.currentStyle[y(t)];var e=Element.getDocument(this).defaultView,n=e?e.getComputedStyle(this,null):null;return n?n.getPropertyValue(t==d?"float":t.hyphenate()):""},setStyle:function(t,e){if("opacity"==t)return null!=e&&(e=parseFloat(e)),f(this,e),this;if(t=y("float"==t?d:t),"string"!=typeOf(e)){var r=(Element.Styles[t]||"@").split(" ");e=Array.convert(e).map(function(t,e){return r[e]?"number"==typeOf(t)?r[e].replace("@",Math.round(t)):t:""}).join(" ")}else e==String(Number(e))&&(e=Math.round(e));return this.style[t]=e,(""==e||null==e)&&n&&this.style.removeAttribute&&b(this.style,t),
	this},getStyle:function(t){if("opacity"==t)return p(this);if(t=y("float"==t?d:t),o&&-1!=t.indexOf("borderRadius"))return["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"].map(function(t){return this.style[t]||"0px"},this).join(" ");var e=this.style[t];if(!e||"zIndex"==t){if(Element.ShortStyles.hasOwnProperty(t)){e=[];for(var n in Element.ShortStyles[t])e.push(this.getStyle(n));return e.join(" ")}e=this.getComputedStyle(t)}if(v&&/^backgroundPosition[XY]?$/.test(t))return e.replace(/(top|right|bottom|left)/g,function(t){return m[t]})||"0px";if(!e&&"backgroundPosition"==t)return"0px 0px";if(e){e=String(e);var r=e.match(/rgba?\([\d\s,]+\)/);r&&(e=e.replace(r[0],r[0].rgbToHex()))}if(!s&&!this.style[t]){if(/^(height|width)$/.test(t)&&!/px$/.test(e)){var a="width"==t?["left","right"]:["top","bottom"],u=0;return a.each(function(t){u+=this.getStyle("border-"+t+"-width").toInt()+this.getStyle("padding-"+t).toInt()},this),this["offset"+t.capitalize()]-u+"px"}if(/^border(.+)Width|margin|padding/.test(t)&&isNaN(parseFloat(e)))return"0px"}return i&&/^border(Top|Right|Bottom|Left)?$/.test(t)&&/^#/.test(e)?e.replace(/^(.+)\s(.+)\s(.+)$/,"$2 $3 $1"):e},setStyles:function(t){for(var e in t)this.setStyle(e,t[e]);return this},getStyles:function(){var t={};return Array.flatten(arguments).each(function(e){t[e]=this.getStyle(e)},this),t}}),Element.Styles={left:"@px",top:"@px",bottom:"@px",right:"@px",width:"@px",height:"@px",maxWidth:"@px",maxHeight:"@px",minWidth:"@px",minHeight:"@px",backgroundColor:"rgb(@, @, @)",backgroundSize:"@px",backgroundPosition:"@px @px",color:"rgb(@, @, @)",fontSize:"@px",letterSpacing:"@px",lineHeight:"@px",clip:"rect(@px @px @px @px)",margin:"@px @px @px @px",padding:"@px @px @px @px",border:"@px @ rgb(@, @, @) @px @ rgb(@, @, @) @px @ rgb(@, @, @)",borderWidth:"@px @px @px @px",borderStyle:"@ @ @ @",borderColor:"rgb(@, @, @) rgb(@, @, @) rgb(@, @, @) rgb(@, @, @)",zIndex:"@",zoom:"@",fontWeight:"@",textIndent:"@px",opacity:"@",borderRadius:"@px @px @px @px"},Element.ShortStyles={margin:{},padding:{},border:{},borderWidth:{},borderStyle:{},borderColor:{}},["Top","Right","Bottom","Left"].each(function(t){var e=Element.ShortStyles,n=Element.Styles;["margin","padding"].each(function(r){var i=r+t;e[r][i]=n[i]="@px"});var r="border"+t;e.border[r]=n[r]="@px @ rgb(@, @, @)";var i=r+"Width",s=r+"Style",o=r+"Color";e[r]={},e.borderWidth[i]=e[r][i]=n[i]="@px",e.borderStyle[s]=e[r][s]=n[s]="@",e.borderColor[o]=e[r][o]=n[o]="rgb(@, @, @)"}),v&&(Element.ShortStyles.backgroundPosition={backgroundPositionX:"@",backgroundPositionY:"@"})}(),function(){function t(t,e){return p(t,e).toInt()||0}function e(e){return t(e,"border-top-width")}function n(e){return t(e,"border-left-width")}function r(t){return/^(?:body|html)$/i.test(t.tagName)}function i(t){var e=t.getDocument();return e.compatMode&&"CSS1Compat"!=e.compatMode?e.body:e.html}var s=document.createElement("div"),o=document.createElement("div");s.style.height="0",s.appendChild(o);var a=o.offsetParent===s;s=o=null;var u=["height","paddingTop","paddingBottom","borderTopWidth","borderBottomWidth"],c=["width","paddingLeft","paddingRight","borderLeftWidth","borderRightWidth"],l=function(t){var e=window.getComputedStyle(t),n={x:0,y:0};return u.each(function(t){n.y+=parseFloat(e[t])}),c.each(function(t){n.x+=parseFloat(e[t])}),n},h=function(t){return"static"!=p(t,"position")||r(t)},f=function(t){return h(t)||/^(?:table|td|th)$/i.test(t.tagName)};Element.implement({scrollTo:function(t,e){return r(this)?this.getWindow().scrollTo(t,e):(this.scrollLeft=t,this.scrollTop=e),this},getSize:function(){if(r(this))return this.getWindow().getSize();if(!window.getComputedStyle)return{x:this.offsetWidth,y:this.offsetHeight};if("svg"==this.get("tag"))return l(this);try{var t=this.getBoundingClientRect();return{x:t.width,y:t.height}}catch(e){return{x:0,y:0}}},getScrollSize:function(){return r(this)?this.getWindow().getScrollSize():{x:this.scrollWidth,y:this.scrollHeight}},getScroll:function(){return r(this)?this.getWindow().getScroll():{x:this.scrollLeft,y:this.scrollTop}},getScrolls:function(){for(var t=this.parentNode,e={x:0,y:0};t&&!r(t);)e.x+=t.scrollLeft,e.y+=t.scrollTop,t=t.parentNode;return e},getOffsetParent:a?function(){var t=this;if(r(t)||"fixed"==p(t,"position"))return null;for(var e="static"==p(t,"position")?f:h;t=t.parentNode;)if(e(t))return t;return null}:function(){var t=this;if(r(t)||"fixed"==p(t,"position"))return null;try{return t.offsetParent}catch(e){}return null},getOffsets:function(){var t=this.getBoundingClientRect;if(t){var e=this.getBoundingClientRect(),n=document.id(this.getDocument().documentElement),i=n.getScroll(),s=this.getScrolls(),o="fixed"==p(this,"position");return{x:e.left.toFloat()+s.x+(o?0:i.x)-n.clientLeft,y:e.top.toFloat()+s.y+(o?0:i.y)-n.clientTop}}var a=this,u={x:0,y:0};if(r(this))return u;for(;a&&!r(a);)u.x+=a.offsetLeft,u.y+=a.offsetTop,a=a.offsetParent;return u},getPosition:function(t){var r=this.getOffsets(),i=this.getScrolls(),s={x:r.x-i.x,y:r.y-i.y};if(t&&(t=document.id(t))){var o=t.getPosition();return{x:s.x-o.x-n(t),y:s.y-o.y-e(t)}}return s},getCoordinates:function(t){if(r(this))return this.getWindow().getCoordinates();var e=this.getPosition(t),n=this.getSize(),i={left:e.x,top:e.y,width:n.x,height:n.y};return i.right=i.left+i.width,i.bottom=i.top+i.height,i},computePosition:function(e){return{left:e.x-t(this,"margin-left"),top:e.y-t(this,"margin-top")}},setPosition:function(t){return this.setStyles(this.computePosition(t))}}),[Document,Window].invoke("implement",{getSize:function(){var t=i(this);return{x:t.clientWidth,y:t.clientHeight}},getScroll:function(){var t=this.getWindow(),e=i(this);return{x:t.pageXOffset||e.scrollLeft,y:t.pageYOffset||e.scrollTop}},getScrollSize:function(){var t=i(this),e=this.getSize(),n=this.getDocument().body;return{x:Math.max(t.scrollWidth,n.scrollWidth,e.x),y:Math.max(t.scrollHeight,n.scrollHeight,e.y)}},getPosition:function(){return{x:0,y:0}},getCoordinates:function(){var t=this.getSize();return{top:0,left:0,bottom:t.y,right:t.x,height:t.y,width:t.x}}});var p=Element.getComputedStyle}(),Element.alias({position:"setPosition"}),[Window,Document,Element].invoke("implement",{getHeight:function(){return this.getSize().y},getWidth:function(){return this.getSize().x},getScrollTop:function(){return this.getScroll().y},getScrollLeft:function(){return this.getScroll().x},getScrollHeight:function(){return this.getScrollSize().y},getScrollWidth:function(){return this.getScrollSize().x},getTop:function(){return this.getPosition().y},getLeft:function(){return this.getPosition().x}}),function(){var t=this.Fx=new Class({Implements:[Chain,Events,Options,Class.Thenable],options:{fps:60,unit:!1,duration:500,frames:null,frameSkip:!0,link:"ignore"},initialize:function(t){this.subject=this.subject||this,this.setOptions(t)},getTransition:function(){return function(t){return-(Math.cos(Math.PI*t)-1)/2}},step:function(t){if(this.options.frameSkip){var e=null!=this.time?t-this.time:0,n=e/this.frameInterval;this.time=t,this.frame+=n}else this.frame++;if(this.frame<this.frames){var r=this.transition(this.frame/this.frames);this.set(this.compute(this.from,this.to,r))}else this.frame=this.frames,this.set(this.compute(this.from,this.to,1)),this.stop()},set:function(t){return t},compute:function(e,n,r){return t.compute(e,n,r)},check:function(){if(!this.isRunning())return!0;switch(this.options.link){case"cancel":return this.cancel(),!0;case"chain":return this.chain(this.caller.pass(arguments,this)),!1}return!1},start:function(e,n){if(!this.check(e,n))return this;this.from=e,this.to=n,this.frame=this.options.frameSkip?0:-1,this.time=null,this.transition=this.getTransition();var r=this.options.frames,s=this.options.fps,o=this.options.duration;return this.duration=t.Durations[o]||o.toInt(),this.frameInterval=1e3/s,this.frames=r||Math.round(this.duration/this.frameInterval),"pending"!==this.getThenableState()&&this.resetThenable(this.subject),this.fireEvent("start",this.subject),i.call(this,s),this},stop:function(){return this.isRunning()&&(this.time=null,s.call(this,this.options.fps),this.frames==this.frame?(this.fireEvent("complete",this.subject),this.callChain()||this.fireEvent("chainComplete",this.subject)):this.fireEvent("stop",this.subject),this.resolve(this.subject===this?null:this.subject)),this},cancel:function(){return this.isRunning()&&(this.time=null,s.call(this,this.options.fps),this.frame=this.frames,this.fireEvent("cancel",this.subject).clearChain(),this.reject(this.subject)),this},pause:function(){return this.isRunning()&&(this.time=null,s.call(this,this.options.fps)),this},resume:function(){return this.isPaused()&&i.call(this,this.options.fps),this},isRunning:function(){var t=e[this.options.fps];return t&&t.contains(this)},isPaused:function(){return this.frame<this.frames&&!this.isRunning()}});t.compute=function(t,e,n){return(e-t)*n+t},t.Durations={"short":250,normal:500,"long":1e3};var e={},n={},r=function(){for(var t=Date.now(),e=this.length;e--;){var n=this[e];n&&n.step(t)}},i=function(t){var i=e[t]||(e[t]=[]);i.push(this),n[t]||(n[t]=r.periodical(Math.round(1e3/t),i))},s=function(t){var r=e[t];r&&(r.erase(this),!r.length&&n[t]&&(delete e[t],n[t]=clearInterval(n[t])))}}(),Fx.CSS=new Class({Extends:Fx,prepare:function(t,e,n){n=Array.convert(n);var r=n[0],i=n[1];if(null==i){i=r,r=t.getStyle(e);var s=this.options.unit;if(s&&r&&"string"==typeof r&&r.slice(-s.length)!=s&&0!=parseFloat(r)){t.setStyle(e,i+s);var o=t.getComputedStyle(e);if(!/px$/.test(o)&&(o=t.style[("pixel-"+e).camelCase()],null==o)){var a=t.style.left;t.style.left=i+s,o=t.style.pixelLeft,t.style.left=a}r=(i||1)/(parseFloat(o)||1)*(parseFloat(r)||0),t.setStyle(e,r+s)}}return{from:this.parse(r),to:this.parse(i)}},parse:function(t){return t=Function.convert(t)(),t="string"==typeof t?t.split(" "):Array.convert(t),t.map(function(t){t=String(t);var e=!1;return Object.each(Fx.CSS.Parsers,function(n){if(!e){var r=n.parse(t);(r||0===r)&&(e={value:r,parser:n})}}),e=e||{value:t,parser:Fx.CSS.Parsers.String}})},compute:function(t,e,n){var r=[];return Math.min(t.length,e.length).times(function(i){r.push({value:t[i].parser.compute(t[i].value,e[i].value,n),parser:t[i].parser})}),r.$family=Function.convert("fx:css:value"),r},serve:function(t,e){"fx:css:value"!=typeOf(t)&&(t=this.parse(t));var n=[];return t.each(function(t){n=n.concat(t.parser.serve(t.value,e))}),n},render:function(t,e,n,r){t.setStyle(e,this.serve(n,r))},search:function(t){if(Fx.CSS.Cache[t])return Fx.CSS.Cache[t];var e={},n=new RegExp("^"+t.escapeRegExp()+"$"),r=function(t){Array.each(t,function(t){if(t.media)return void r(t.rules||t.cssRules);if(t.style){var i=t.selectorText?t.selectorText.replace(/^\w+/,function(t){return t.toLowerCase()}):null;i&&n.test(i)&&Object.each(Element.Styles,function(n,r){t.style[r]&&!Element.ShortStyles[r]&&(n=String(t.style[r]),e[r]=/^rgb/.test(n)?n.rgbToHex():n)})}})};return Array.each(document.styleSheets,function(t){var e=t.href;if(!(e&&e.indexOf("://")>-1&&-1==e.indexOf(document.domain))){var n=t.rules||t.cssRules;r(n)}}),Fx.CSS.Cache[t]=e}}),Fx.CSS.Cache={},Fx.CSS.Parsers={Color:{parse:function(t){return t.match(/^#[0-9a-f]{3,6}$/i)?t.hexToRgb(!0):(t=t.match(/(\d+),\s*(\d+),\s*(\d+)/))?[t[1],t[2],t[3]]:!1},compute:function(t,e,n){return t.map(function(r,i){return Math.round(Fx.compute(t[i],e[i],n))})},serve:function(t){return t.map(Number)}},Number:{parse:parseFloat,compute:Fx.compute,serve:function(t,e){return e?t+e:t}},String:{parse:Function.convert(!1),compute:function(t,e){return e},serve:function(t){return t}}},Fx.Morph=new Class({Extends:Fx.CSS,initialize:function(t,e){this.element=this.subject=document.id(t),this.parent(e)},set:function(t){"string"==typeof t&&(t=this.search(t));for(var e in t)this.render(this.element,e,t[e],this.options.unit);return this},compute:function(t,e,n){var r={};for(var i in t)r[i]=this.parent(t[i],e[i],n);return r},start:function(t){if(!this.check(t))return this;"string"==typeof t&&(t=this.search(t));var e={},n={};for(var r in t){var i=this.prepare(this.element,r,t[r]);e[r]=i.from,n[r]=i.to}return this.parent(e,n)}}),Element.Properties.morph={set:function(t){return this.get("morph").cancel().setOptions(t),this},get:function(){var t=this.retrieve("morph");return t||(t=new Fx.Morph(this,{link:"cancel"}),this.store("morph",t)),t}},Element.implement({morph:function(t){return this.get("morph").start(t),this}}),Fx.implement({getTransition:function(){var t=this.options.transition||Fx.Transitions.Sine.easeInOut;if("string"==typeof t){var e=t.split(":");t=Fx.Transitions,t=t[e[0]]||t[e[0].capitalize()],e[1]&&(t=t["ease"+e[1].capitalize()+(e[2]?e[2].capitalize():"")])}return t}}),Fx.Transition=function(t,e){e=Array.convert(e);var n=function(n){return t(n,e)};return Object.append(n,{easeIn:n,easeOut:function(n){return 1-t(1-n,e)},easeInOut:function(n){return(.5>=n?t(2*n,e):2-t(2*(1-n),e))/2}})},Fx.Transitions={linear:function(t){return t}},Fx.Transitions.extend=function(t){for(var e in t)Fx.Transitions[e]=new Fx.Transition(t[e])},Fx.Transitions.extend({Pow:function(t,e){return Math.pow(t,e&&e[0]||6)},Expo:function(t){return Math.pow(2,8*(t-1))},Circ:function(t){return 1-Math.sin(Math.acos(t))},Sine:function(t){return 1-Math.cos(t*Math.PI/2)},Back:function(t,e){return e=e&&e[0]||1.618,Math.pow(t,2)*((e+1)*t-e)},Bounce:function(t){for(var e,n=0,r=1;1;n+=r,r/=2)if(t>=(7-4*n)/11){e=r*r-Math.pow((11-6*n-11*t)/4,2);break}return e},Elastic:function(t,e){return Math.pow(2,10*--t)*Math.cos(20*t*Math.PI*(e&&e[0]||1)/3)}}),["Quad","Cubic","Quart","Quint"].each(function(t,e){Fx.Transitions[t]=new Fx.Transition(function(t){return Math.pow(t,e+2)})}),Fx.Tween=new Class({Extends:Fx.CSS,initialize:function(t,e){this.element=this.subject=document.id(t),this.parent(e)},set:function(t,e){return 1==arguments.length&&(e=t,t=this.property||this.options.property),this.render(this.element,t,e,this.options.unit),this},start:function(t,e,n){if(!this.check(t,e,n))return this;var r=Array.flatten(arguments);this.property=this.options.property||r.shift();var i=this.prepare(this.element,this.property,r);return this.parent(i.from,i.to)}}),Element.Properties.tween={set:function(t){return this.get("tween").cancel().setOptions(t),this},get:function(){var t=this.retrieve("tween");return t||(t=new Fx.Tween(this,{link:"cancel"}),this.store("tween",t)),t}},Element.implement({tween:function(t,e,n){return this.get("tween").start(t,e,n),this},fade:function(){var t,e,n=this.get("tween"),r=["opacity"].append(arguments);switch(null==r[1]&&(r[1]="toggle"),r[1]){case"in":t="start",r[1]=1;break;case"out":t="start",r[1]=0;break;case"show":t="set",r[1]=1;break;case"hide":t="set",r[1]=0;break;case"toggle":var i=this.retrieve("fade:flag",1==this.getStyle("opacity"));t="start",r[1]=i?0:1,this.store("fade:flag",!i),e=!0;break;default:t="start"}e||this.eliminate("fade:flag"),n[t].apply(n,r);var s=r[r.length-1];return"set"==t?this.setStyle("visibility",0==s?"hidden":"visible"):0!=s?n.$chain.length?n.chain(function(){this.element.setStyle("visibility","visible"),this.callChain()}):this.setStyle("visibility","visible"):n.chain(function(){this.element.getStyle("opacity")||(this.element.setStyle("visibility","hidden"),this.callChain())}),this},highlight:function(t,e){e||(e=this.retrieve("highlight:original",this.getStyle("background-color")),e="transparent"==e?"#fff":e);var n=this.get("tween");return n.start("background-color",t||"#ffff88",e).chain(function(){this.setStyle("background-color",this.retrieve("highlight:original")),n.callChain()}.bind(this)),this}}),function(){var t=function(){},e="onprogress"in new Browser.Request,n=this.Request=new Class({Implements:[Chain,Events,Options,Class.Thenable],options:{url:"",data:"",headers:{"X-Requested-With":"XMLHttpRequest",Accept:"text/javascript, text/html, application/xml, text/xml, */*"},async:!0,format:!1,method:"post",link:"ignore",isSuccess:null,emulation:!0,urlEncoded:!0,encoding:"utf-8",evalScripts:!1,evalResponse:!1,timeout:0,noCache:!1},initialize:function(t){this.xhr=new Browser.Request,this.setOptions(t),this.headers=this.options.headers},onStateChange:function(){var n=this.xhr;4==n.readyState&&this.running&&(this.running=!1,this.status=0,Function.attempt(function(){var t=n.status;this.status=1223==t?204:t}.bind(this)),n.onreadystatechange=t,e&&(n.onprogress=n.onloadstart=t),this.timer&&(clearTimeout(this.timer),delete this.timer),this.response={text:this.xhr.responseText||"",xml:this.xhr.responseXML},this.options.isSuccess.call(this,this.status)?this.success(this.response.text,this.response.xml):this.failure())},isSuccess:function(){var t=this.status;return t>=200&&300>t},isRunning:function(){return!!this.running},processScripts:function(t){return this.options.evalResponse||/(ecma|java)script/.test(this.getHeader("Content-type"))?Browser.exec(t):t.stripScripts(this.options.evalScripts)},success:function(t,e){this.onSuccess(this.processScripts(t),e),this.resolve({text:t,xml:e})},onSuccess:function(){this.fireEvent("complete",arguments).fireEvent("success",arguments).callChain()},failure:function(){this.onFailure(),this.reject({reason:"failure",xhr:this.xhr})},onFailure:function(){this.fireEvent("complete").fireEvent("failure",this.xhr)},loadstart:function(t){this.fireEvent("loadstart",[t,this.xhr])},progress:function(t){this.fireEvent("progress",[t,this.xhr])},timeout:function(){this.fireEvent("timeout",this.xhr),this.reject({reason:"timeout",xhr:this.xhr})},setHeader:function(t,e){return this.headers[t]=e,this},getHeader:function(t){return Function.attempt(function(){return this.xhr.getResponseHeader(t)}.bind(this))},check:function(){if(!this.running)return!0;switch(this.options.link){case"cancel":return this.cancel(),!0;case"chain":return this.chain(this.caller.pass(arguments,this)),!1}return!1},send:function(t){if(!this.check(t))return this;this.options.isSuccess=this.options.isSuccess||this.isSuccess,this.running=!0;var n=typeOf(t);("string"==n||"element"==n)&&(t={data:t});var r=this.options;t=Object.append({data:r.data,url:r.url,method:r.method},t);var i=t.data,s=String(t.url),o=t.method.toLowerCase();switch(typeOf(i)){case"element":i=document.id(i).toQueryString();break;case"object":case"hash":i=Object.toQueryString(i)}if(this.options.format){var a="format="+this.options.format;i=i?a+"&"+i:a}if(this.options.emulation&&!["get","post"].contains(o)){var u="_method="+o;i=i?u+"&"+i:u,o="post"}if(this.options.urlEncoded&&["post","put"].contains(o)){var c=this.options.encoding?"; charset="+this.options.encoding:"";this.headers["Content-type"]="application/x-www-form-urlencoded"+c}s||(s=document.location.pathname);var l=s.lastIndexOf("/");l>-1&&(l=s.indexOf("#"))>-1&&(s=s.substr(0,l)),this.options.noCache&&(s+=(s.indexOf("?")>-1?"&":"?")+String.uniqueID()),!i||"get"!=o&&"delete"!=o||(s+=(s.indexOf("?")>-1?"&":"?")+i,i=null);var h=this.xhr;return e&&(h.onloadstart=this.loadstart.bind(this),h.onprogress=this.progress.bind(this)),h.open(o.toUpperCase(),s,this.options.async,this.options.user,this.options.password),this.options.withCredentials&&"withCredentials"in h&&(h.withCredentials=!0),h.onreadystatechange=this.onStateChange.bind(this),Object.each(this.headers,function(t,e){try{h.setRequestHeader(e,t)}catch(n){this.fireEvent("exception",[e,t]),this.reject({reason:"exception",xhr:h,exception:n})}},this),"pending"!==this.getThenableState()&&this.resetThenable({reason:"send"}),this.fireEvent("request"),h.send(i),this.options.async?this.options.timeout&&(this.timer=this.timeout.delay(this.options.timeout,this)):this.onStateChange(),this},cancel:function(){if(!this.running)return this;this.running=!1;var n=this.xhr;return n.abort(),this.timer&&(clearTimeout(this.timer),delete this.timer),n.onreadystatechange=t,e&&(n.onprogress=n.onloadstart=t),this.xhr=new Browser.Request,this.fireEvent("cancel"),this.reject({reason:"cancel",xhr:n}),this}}),r={};["get","post","put","delete","patch","head","GET","POST","PUT","DELETE","PATCH","HEAD"].each(function(t){r[t]=function(e){var n={method:t};return null!=e&&(n.data=e),this.send(n)}}),n.implement(r),Element.Properties.send={set:function(t){var e=this.get("send").cancel();return e.setOptions(t),this},get:function(){var t=this.retrieve("send");return t||(t=new n({data:this,link:"cancel",method:this.get("method")||"post",url:this.get("action")}),this.store("send",t)),t}},Element.implement({send:function(t){var e=this.get("send");return e.send({data:this,url:t||e.options.url}),this}})}(),Request.HTML=new Class({Extends:Request,options:{update:!1,append:!1,evalScripts:!0,filter:!1,headers:{Accept:"text/html, application/xml, text/xml, */*"}},success:function(t){var e=this.options,n=this.response;n.html=t.stripScripts(function(t){n.javascript=t});var r=n.html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);r&&(n.html=r[1]);var i=new Element("div").set("html",n.html);if(n.tree=i.childNodes,n.elements=i.getElements(e.filter||"*"),e.filter&&(n.tree=n.elements),e.update){var s=document.id(e.update).empty();e.filter?s.adopt(n.elements):s.set("html",n.html)}else if(e.append){var o=document.id(e.append);e.filter?n.elements.reverse().inject(o):o.adopt(i.getChildren())}e.evalScripts&&Browser.exec(n.javascript),this.onSuccess(n.tree,n.elements,n.html,n.javascript),this.resolve({tree:n.tree,elements:n.elements,html:n.html,javascript:n.javascript})}}),Element.Properties.load={set:function(t){var e=this.get("load").cancel();return e.setOptions(t),this},get:function(){var t=this.retrieve("load");return t||(t=new Request.HTML({data:this,link:"cancel",update:this,method:"get"}),this.store("load",t)),t}},Element.implement({load:function(){return this.get("load").send(Array.link(arguments,{data:Type.isObject,url:Type.isString})),this}}),"undefined"==typeof JSON&&(this.JSON={}),function(){var special={"\b":"\\b","	":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},escape=function(t){return special[t]||"\\u"+("0000"+t.charCodeAt(0).toString(16)).slice(-4)};JSON.validate=function(t){return t=t.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""),/^[\],:{}\s]*$/.test(t)},JSON.encode=JSON.stringify?function(t){return JSON.stringify(t)}:function(t){switch(t&&t.toJSON&&(t=t.toJSON()),typeOf(t)){case"string":return'"'+t.replace(/[\x00-\x1f\\"]/g,escape)+'"';case"array":return"["+t.map(JSON.encode).clean()+"]";case"object":case"hash":var e=[];return Object.each(t,function(t,n){var r=JSON.encode(t);r&&e.push(JSON.encode(n)+":"+r)}),"{"+e+"}";case"number":case"boolean":return""+t;case"null":return"null"}return null},JSON.secure=!0,JSON.decode=function(string,secure){if(!string||"string"!=typeOf(string))return null;if(null==secure&&(secure=JSON.secure),secure){if(JSON.parse)return JSON.parse(string);if(!JSON.validate(string))throw new Error("JSON could not decode the input; security is enabled and the value is not secure.")}return eval("("+string+")")}}(),Request.JSON=new Class({Extends:Request,options:{secure:!0},initialize:function(t){this.parent(t),Object.append(this.headers,{Accept:"application/json","X-Request":"JSON"})},success:function(t){var e;try{e=this.response.json=JSON.decode(t,this.options.secure)}catch(n){return void this.fireEvent("error",[t,n])}null==e?this.failure():(this.onSuccess(e,t),this.resolve({json:e,text:t}))}});var Cookie=new Class({Implements:Options,options:{path:"/",domain:!1,duration:!1,secure:!1,document:document,encode:!0,httpOnly:!1},initialize:function(t,e){this.key=t,this.setOptions(e)},write:function(t){if(this.options.encode&&(t=encodeURIComponent(t)),this.options.domain&&(t+="; domain="+this.options.domain),this.options.path&&(t+="; path="+this.options.path),this.options.duration){var e=new Date;e.setTime(e.getTime()+24*this.options.duration*60*60*1e3),t+="; expires="+e.toGMTString()}return this.options.secure&&(t+="; secure"),this.options.httpOnly&&(t+="; HttpOnly"),this.options.document.cookie=this.key+"="+t,this},read:function(){var t=this.options.document.cookie.match("(?:^|;)\\s*"+this.key.escapeRegExp()+"=([^;]*)");return t?decodeURIComponent(t[1]):null},dispose:function(){return new Cookie(this.key,Object.merge({},this.options,{duration:-1})).write(""),this}});Cookie.write=function(t,e,n){return new Cookie(t,n).write(e)},Cookie.read=function(t){return new Cookie(t).read()},Cookie.dispose=function(t,e){return new Cookie(t,e).dispose()},function(t,e){var n,r,i,s,o=[],a=e.createElement("div"),u=function(){clearTimeout(s),n||(Browser.loaded=n=!0,e.removeListener("DOMContentLoaded",u).removeListener("readystatechange",c),e.fireEvent("domready"),t.fireEvent("domready")),e=t=a=null},c=function(){for(var t=o.length;t--;)if(o[t]())return u(),!0;return!1},l=function(){clearTimeout(s),c()||(s=setTimeout(l,10))};e.addListener("DOMContentLoaded",u);var h=function(){try{return a.doScroll(),!0}catch(t){}return!1};a.doScroll&&!h()&&(o.push(h),i=!0),e.readyState&&o.push(function(){var t=e.readyState;return"loaded"==t||"complete"==t}),"onreadystatechange"in e?e.addListener("readystatechange",c):i=!0,i&&l(),Element.Events.domready={onAdd:function(t){n&&t.call(this)}},Element.Events.load={base:"load",onAdd:function(e){r&&this==t&&e.call(this)},condition:function(){return this==t&&(u(),delete Element.Events.load),!0}},t.addEvent("load",function(){r=!0})}(window,document);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2), __webpack_require__(3).setImmediate))

/***/ },
/* 2 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }


	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }



	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var apply = Function.prototype.apply;

	// DOM APIs, for completeness

	exports.setTimeout = function() {
	  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
	};
	exports.setInterval = function() {
	  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
	};
	exports.clearTimeout =
	exports.clearInterval = function(timeout) {
	  if (timeout) {
	    timeout.close();
	  }
	};

	function Timeout(id, clearFn) {
	  this._id = id;
	  this._clearFn = clearFn;
	}
	Timeout.prototype.unref = Timeout.prototype.ref = function() {};
	Timeout.prototype.close = function() {
	  this._clearFn.call(window, this._id);
	};

	// Does not start the time, just sets up the members needed.
	exports.enroll = function(item, msecs) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = msecs;
	};

	exports.unenroll = function(item) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = -1;
	};

	exports._unrefActive = exports.active = function(item) {
	  clearTimeout(item._idleTimeoutId);

	  var msecs = item._idleTimeout;
	  if (msecs >= 0) {
	    item._idleTimeoutId = setTimeout(function onTimeout() {
	      if (item._onTimeout)
	        item._onTimeout();
	    }, msecs);
	  }
	};

	// setimmediate attaches itself to the global object
	__webpack_require__(4);
	exports.setImmediate = setImmediate;
	exports.clearImmediate = clearImmediate;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
	    "use strict";

	    if (global.setImmediate) {
	        return;
	    }

	    var nextHandle = 1; // Spec says greater than zero
	    var tasksByHandle = {};
	    var currentlyRunningATask = false;
	    var doc = global.document;
	    var registerImmediate;

	    function setImmediate(callback) {
	      // Callback can either be a function or a string
	      if (typeof callback !== "function") {
	        callback = new Function("" + callback);
	      }
	      // Copy function arguments
	      var args = new Array(arguments.length - 1);
	      for (var i = 0; i < args.length; i++) {
	          args[i] = arguments[i + 1];
	      }
	      // Store and register the task
	      var task = { callback: callback, args: args };
	      tasksByHandle[nextHandle] = task;
	      registerImmediate(nextHandle);
	      return nextHandle++;
	    }

	    function clearImmediate(handle) {
	        delete tasksByHandle[handle];
	    }

	    function run(task) {
	        var callback = task.callback;
	        var args = task.args;
	        switch (args.length) {
	        case 0:
	            callback();
	            break;
	        case 1:
	            callback(args[0]);
	            break;
	        case 2:
	            callback(args[0], args[1]);
	            break;
	        case 3:
	            callback(args[0], args[1], args[2]);
	            break;
	        default:
	            callback.apply(undefined, args);
	            break;
	        }
	    }

	    function runIfPresent(handle) {
	        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
	        // So if we're currently running a task, we'll need to delay this invocation.
	        if (currentlyRunningATask) {
	            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
	            // "too much recursion" error.
	            setTimeout(runIfPresent, 0, handle);
	        } else {
	            var task = tasksByHandle[handle];
	            if (task) {
	                currentlyRunningATask = true;
	                try {
	                    run(task);
	                } finally {
	                    clearImmediate(handle);
	                    currentlyRunningATask = false;
	                }
	            }
	        }
	    }

	    function installNextTickImplementation() {
	        registerImmediate = function(handle) {
	            process.nextTick(function () { runIfPresent(handle); });
	        };
	    }

	    function canUsePostMessage() {
	        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
	        // where `global.postMessage` means something completely different and can't be used for this purpose.
	        if (global.postMessage && !global.importScripts) {
	            var postMessageIsAsynchronous = true;
	            var oldOnMessage = global.onmessage;
	            global.onmessage = function() {
	                postMessageIsAsynchronous = false;
	            };
	            global.postMessage("", "*");
	            global.onmessage = oldOnMessage;
	            return postMessageIsAsynchronous;
	        }
	    }

	    function installPostMessageImplementation() {
	        // Installs an event handler on `global` for the `message` event: see
	        // * https://developer.mozilla.org/en/DOM/window.postMessage
	        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

	        var messagePrefix = "setImmediate$" + Math.random() + "$";
	        var onGlobalMessage = function(event) {
	            if (event.source === global &&
	                typeof event.data === "string" &&
	                event.data.indexOf(messagePrefix) === 0) {
	                runIfPresent(+event.data.slice(messagePrefix.length));
	            }
	        };

	        if (global.addEventListener) {
	            global.addEventListener("message", onGlobalMessage, false);
	        } else {
	            global.attachEvent("onmessage", onGlobalMessage);
	        }

	        registerImmediate = function(handle) {
	            global.postMessage(messagePrefix + handle, "*");
	        };
	    }

	    function installMessageChannelImplementation() {
	        var channel = new MessageChannel();
	        channel.port1.onmessage = function(event) {
	            var handle = event.data;
	            runIfPresent(handle);
	        };

	        registerImmediate = function(handle) {
	            channel.port2.postMessage(handle);
	        };
	    }

	    function installReadyStateChangeImplementation() {
	        var html = doc.documentElement;
	        registerImmediate = function(handle) {
	            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
	            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
	            var script = doc.createElement("script");
	            script.onreadystatechange = function () {
	                runIfPresent(handle);
	                script.onreadystatechange = null;
	                html.removeChild(script);
	                script = null;
	            };
	            html.appendChild(script);
	        };
	    }

	    function installSetTimeoutImplementation() {
	        registerImmediate = function(handle) {
	            setTimeout(runIfPresent, 0, handle);
	        };
	    }

	    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
	    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
	    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

	    // Don't get fooled by e.g. browserify environments.
	    if ({}.toString.call(global.process) === "[object process]") {
	        // For Node.js before 0.9
	        installNextTickImplementation();

	    } else if (canUsePostMessage()) {
	        // For non-IE10 modern browsers
	        installPostMessageImplementation();

	    } else if (global.MessageChannel) {
	        // For web workers, where supported
	        installMessageChannelImplementation();

	    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
	        // For IE 6–8
	        installReadyStateChangeImplementation();

	    } else {
	        // For older browsers
	        installSetTimeoutImplementation();
	    }

	    attachTo.setImmediate = setImmediate;
	    attachTo.clearImmediate = clearImmediate;
	}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(2)))

/***/ },
/* 5 */
/***/ function(module, exports) {

	/* MooTools: the javascript framework. license: MIT-style license. copyright: Copyright (c) 2006-2016 [Valerio Proietti](http://mad4milk.net/).*/ 
	/*!
	Web Build: http://mootools.net/more/builder/a3048f4bfdf603b22a69c141dbd0fca9
	*/
	/*
	---

	script: More.js

	name: More

	description: MooTools More

	license: MIT-style license

	authors:
	  - Guillermo Rauch
	  - Thomas Aylott
	  - Scott Kyle
	  - Arian Stolwijk
	  - Tim Wienk
	  - Christoph Pojer
	  - Aaron Newton
	  - Jacob Thornton

	requires:
	  - Core/MooTools

	provides: [MooTools.More]

	...
	*/

	MooTools.More = {
		version: '1.6.0',
		build: '45b71db70f879781a7e0b0d3fb3bb1307c2521eb'
	};

	/*
	---

	script: Chain.Wait.js

	name: Chain.Wait

	description: value, Adds a method to inject pauses between chained events.

	license: MIT-style license.

	authors:
	  - Aaron Newton

	requires:
	  - Core/Chain
	  - Core/Element
	  - Core/Fx
	  - MooTools.More

	provides: [Chain.Wait]

	...
	*/

	(function(){

	var wait = {
		wait: function(duration){
			return this.chain(function(){
				this.callChain.delay(duration == null ? 500 : duration, this);
				return this;
			}.bind(this));
		}
	};

	Chain.implement(wait);

	if (this.Fx) Fx.implement(wait);

	if (this.Element && Element.implement && this.Fx){
		Element.implement({

			chains: function(effects){
				Array.convert(effects || ['tween', 'morph', 'reveal']).each(function(effect){
					effect = this.get(effect);
					if (!effect) return;
					effect.setOptions({
						link:'chain'
					});
				}, this);
				return this;
			},

			pauseFx: function(duration, effect){
				this.chains(effect).get(effect || 'tween').wait(duration);
				return this;
			}

		});
	}

	})();

	/*
	---

	script: Class.Binds.js

	name: Class.Binds

	description: Automagically binds specified methods in a class to the instance of the class.

	license: MIT-style license

	authors:
	  - Aaron Newton

	requires:
	  - Core/Class
	  - MooTools.More

	provides: [Class.Binds]

	...
	*/

	Class.Mutators.Binds = function(binds){
		if (!this.prototype.initialize) this.implement('initialize', function(){});
		return Array.convert(binds).concat(this.prototype.Binds || []);
	};

	Class.Mutators.initialize = function(initialize){
		return function(){
			Array.convert(this.Binds).each(function(name){
				var original = this[name];
				if (original) this[name] = original.bind(this);
			}, this);
			return initialize.apply(this, arguments);
		};
	};

	/*
	---

	script: Class.Occlude.js

	name: Class.Occlude

	description: Prevents a class from being applied to a DOM element twice.

	license: MIT-style license.

	authors:
	  - Aaron Newton

	requires:
	  - Core/Class
	  - Core/Element
	  - MooTools.More

	provides: [Class.Occlude]

	...
	*/

	Class.Occlude = new Class({

		occlude: function(property, element){
			element = document.id(element || this.element);
			var instance = element.retrieve(property || this.property);
			if (instance && !this.occluded)
				return (this.occluded = instance);

			this.occluded = false;
			element.store(property || this.property, this);
			return this.occluded;
		}

	});

	/*
	---

	script: Class.Refactor.js

	name: Class.Refactor

	description: Extends a class onto itself with new property, preserving any items attached to the class's namespace.

	license: MIT-style license

	authors:
	  - Aaron Newton

	requires:
	  - Core/Class
	  - MooTools.More

	# Some modules declare themselves dependent on Class.Refactor
	provides: [Class.refactor, Class.Refactor]

	...
	*/

	Class.refactor = function(original, refactors){

		Object.each(refactors, function(item, name){
			var origin = original.prototype[name];
			origin = (origin && origin.$origin) || origin || function(){};
			original.implement(name, (typeof item == 'function') ? function(){
				var old = this.previous;
				this.previous = origin;
				var value = item.apply(this, arguments);
				this.previous = old;
				return value;
			} : item);
		});

		return original;

	};

	/*
	---

	script: Class.Singleton.js

	name: Class.Singleton

	description: Always provides a single instance of a class

	license: MIT-style license.

	authors:
	  - Hristo Chakarov

	requires:
	  - Core/Class

	provides: [Class.Singleton]

	...
	*/

	Class.Singleton = new Class({

		initialize : function(descriptor){
			// here we keep reference of the single instance
			var singleton;
			// create a regular Class
			var constructor = new Class(descriptor);
			// We return another constructor, because we need to make sure that we
			// always return the same one and only instance.
			return function(){
				if (singleton){
					return singleton;
				}
				// Obviously we instantiate that class for the first time.
				// Create brand new object & extend it with the prototype of the
				// original `constructor`.
				singleton = Object.append({}, constructor.prototype);
				singleton.constructor = constructor;
				// We also need to call the constructor as a function, passing the
				// arguments object.
				var returnValue = constructor.apply(singleton, arguments);
				// In case the `constructor` returns something other than `this` -
				// return that value; otherwise return the `singleton`.
				singleton = typeof returnValue == 'object' ? returnValue : singleton;
				return singleton;
			};
		}

	});

	/*
	---

	name: Events.Pseudos

	description: Adds the functionality to add pseudo events

	license: MIT-style license

	authors:
	  - Arian Stolwijk

	requires: [Core/Class.Extras, Core/Slick.Parser, MooTools.More]

	provides: [Events.Pseudos]

	...
	*/

	(function(){

	Events.Pseudos = function(pseudos, addEvent, removeEvent){

		var storeKey = '_monitorEvents:';

		var storageOf = function(object){
			return {
				store: object.store ? function(key, value){
					object.store(storeKey + key, value);
				} : function(key, value){
					(object._monitorEvents || (object._monitorEvents = {}))[key] = value;
				},
				retrieve: object.retrieve ? function(key, dflt){
					return object.retrieve(storeKey + key, dflt);
				} : function(key, dflt){
					if (!object._monitorEvents) return dflt;
					return object._monitorEvents[key] || dflt;
				}
			};
		};

		var splitType = function(type){
			if (type.indexOf(':') == -1 || !pseudos) return null;

			var parsed = Slick.parse(type).expressions[0][0],
				parsedPseudos = parsed.pseudos,
				l = parsedPseudos.length,
				splits = [];

			while (l--){
				var pseudo = parsedPseudos[l].key,
					listener = pseudos[pseudo];
				if (listener != null) splits.push({
					event: parsed.tag,
					value: parsedPseudos[l].value,
					pseudo: pseudo,
					original: type,
					listener: listener
				});
			}
			return splits.length ? splits : null;
		};

		return {

			addEvent: function(type, fn, internal){
				var split = splitType(type);
				if (!split) return addEvent.call(this, type, fn, internal);

				var storage = storageOf(this),
					events = storage.retrieve(type, []),
					eventType = split[0].event,
					args = Array.slice(arguments, 2),
					stack = fn,
					self = this;

				split.each(function(item){
					var listener = item.listener,
						stackFn = stack;
					if (listener == false) eventType += ':' + item.pseudo + '(' + item.value + ')';
					else stack = function(){
						listener.call(self, item, stackFn, arguments, stack);
					};
				});

				events.include({type: eventType, event: fn, monitor: stack});
				storage.store(type, events);

				if (type != eventType) addEvent.apply(this, [type, fn].concat(args));
				return addEvent.apply(this, [eventType, stack].concat(args));
			},

			removeEvent: function(type, fn){
				var split = splitType(type);
				if (!split) return removeEvent.call(this, type, fn);

				var storage = storageOf(this),
					events = storage.retrieve(type);
				if (!events) return this;

				var args = Array.slice(arguments, 2);

				removeEvent.apply(this, [type, fn].concat(args));
				events.each(function(monitor, i){
					if (!fn || monitor.event == fn) removeEvent.apply(this, [monitor.type, monitor.monitor].concat(args));
					delete events[i];
				}, this);

				storage.store(type, events);
				return this;
			}

		};

	};

	var pseudos = {

		once: function(split, fn, args, monitor){
			fn.apply(this, args);
			this.removeEvent(split.event, monitor)
				.removeEvent(split.original, fn);
		},

		throttle: function(split, fn, args){
			if (!fn._throttled){
				fn.apply(this, args);
				fn._throttled = setTimeout(function(){
					fn._throttled = false;
				}, split.value || 250);
			}
		},

		pause: function(split, fn, args){
			clearTimeout(fn._pause);
			fn._pause = fn.delay(split.value || 250, this, args);
		}

	};

	Events.definePseudo = function(key, listener){
		pseudos[key] = listener;
		return this;
	};

	Events.lookupPseudo = function(key){
		return pseudos[key];
	};

	var proto = Events.prototype;
	Events.implement(Events.Pseudos(pseudos, proto.addEvent, proto.removeEvent));

	['Request', 'Fx'].each(function(klass){
		if (this[klass]) this[klass].implement(Events.prototype);
	});

	})();

	/*
	---

	script: Drag.js

	name: Drag

	description: The base Drag Class. Can be used to drag and resize Elements using mouse events.

	license: MIT-style license

	authors:
	  - Valerio Proietti
	  - Tom Occhinno
	  - Jan Kassens

	requires:
	  - Core/Events
	  - Core/Options
	  - Core/Element.Event
	  - Core/Element.Style
	  - Core/Element.Dimensions
	  - MooTools.More

	provides: [Drag]
	...

	*/
	(function(){

	var Drag = this.Drag = new Class({

		Implements: [Events, Options],

		options: {/*
			onBeforeStart: function(thisElement){},
			onStart: function(thisElement, event){},
			onSnap: function(thisElement){},
			onDrag: function(thisElement, event){},
			onCancel: function(thisElement){},
			onComplete: function(thisElement, event){},*/
			snap: 6,
			unit: 'px',
			grid: false,
			style: true,
			limit: false,
			handle: false,
			invert: false,
			unDraggableTags: ['button', 'input', 'a', 'textarea', 'select', 'option'],
			preventDefault: false,
			stopPropagation: false,
			compensateScroll: false,
			modifiers: {x: 'left', y: 'top'}
		},

		initialize: function(){
			var params = Array.link(arguments, {
				'options': Type.isObject,
				'element': function(obj){
					return obj != null;
				}
			});

			this.element = document.id(params.element);
			this.document = this.element.getDocument();
			this.setOptions(params.options || {});
			var htype = typeOf(this.options.handle);
			this.handles = ((htype == 'array' || htype == 'collection') ? $$(this.options.handle) : document.id(this.options.handle)) || this.element;
			this.mouse = {'now': {}, 'pos': {}};
			this.value = {'start': {}, 'now': {}};
			this.offsetParent = (function(el){
				var offsetParent = el.getOffsetParent();
				var isBody = !offsetParent || (/^(?:body|html)$/i).test(offsetParent.tagName);
				return isBody ? window : document.id(offsetParent);
			})(this.element);
			this.selection = 'selectstart' in document ? 'selectstart' : 'mousedown';

			this.compensateScroll = {start: {}, diff: {}, last: {}};

			if ('ondragstart' in document && !('FileReader' in window) && !Drag.ondragstartFixed){
				document.ondragstart = Function.convert(false);
				Drag.ondragstartFixed = true;
			}

			this.bound = {
				start: this.start.bind(this),
				check: this.check.bind(this),
				drag: this.drag.bind(this),
				stop: this.stop.bind(this),
				cancel: this.cancel.bind(this),
				eventStop: Function.convert(false),
				scrollListener: this.scrollListener.bind(this)
			};
			this.attach();
		},

		attach: function(){
			this.handles.addEvent('mousedown', this.bound.start);
			this.handles.addEvent('touchstart', this.bound.start);
			if (this.options.compensateScroll) this.offsetParent.addEvent('scroll', this.bound.scrollListener);
			return this;
		},

		detach: function(){
			this.handles.removeEvent('mousedown', this.bound.start);
			this.handles.removeEvent('touchstart', this.bound.start);
			if (this.options.compensateScroll) this.offsetParent.removeEvent('scroll', this.bound.scrollListener);
			return this;
		},

		scrollListener: function(){

			if (!this.mouse.start) return;
			var newScrollValue = this.offsetParent.getScroll();

			if (this.element.getStyle('position') == 'absolute'){
				var scrollDiff = this.sumValues(newScrollValue, this.compensateScroll.last, -1);
				this.mouse.now = this.sumValues(this.mouse.now, scrollDiff, 1);
			} else {
				this.compensateScroll.diff = this.sumValues(newScrollValue, this.compensateScroll.start, -1);
			}
			if (this.offsetParent != window) this.compensateScroll.diff = this.sumValues(this.compensateScroll.start, newScrollValue, -1);
			this.compensateScroll.last = newScrollValue;
			this.render(this.options);
		},

		sumValues: function(alpha, beta, op){
			var sum = {}, options = this.options;
			for (var z in options.modifiers){
				if (!options.modifiers[z]) continue;
				sum[z] = alpha[z] + beta[z] * op;
			}
			return sum;
		},

		start: function(event){
			if (this.options.unDraggableTags.contains(event.target.get('tag'))) return;

			var options = this.options;

			if (event.rightClick) return;

			if (options.preventDefault) event.preventDefault();
			if (options.stopPropagation) event.stopPropagation();
			this.compensateScroll.start = this.compensateScroll.last = this.offsetParent.getScroll();
			this.compensateScroll.diff = {x: 0, y: 0};
			this.mouse.start = event.page;
			this.fireEvent('beforeStart', this.element);

			var limit = options.limit;
			this.limit = {x: [], y: []};

			var z, coordinates, offsetParent = this.offsetParent == window ? null : this.offsetParent;
			for (z in options.modifiers){
				if (!options.modifiers[z]) continue;

				var style = this.element.getStyle(options.modifiers[z]);

				// Some browsers (IE and Opera) don't always return pixels.
				if (style && !style.match(/px$/)){
					if (!coordinates) coordinates = this.element.getCoordinates(offsetParent);
					style = coordinates[options.modifiers[z]];
				}

				if (options.style) this.value.now[z] = (style || 0).toInt();
				else this.value.now[z] = this.element[options.modifiers[z]];

				if (options.invert) this.value.now[z] *= -1;

				this.mouse.pos[z] = event.page[z] - this.value.now[z];

				if (limit && limit[z]){
					var i = 2;
					while (i--){
						var limitZI = limit[z][i];
						if (limitZI || limitZI === 0) this.limit[z][i] = (typeof limitZI == 'function') ? limitZI() : limitZI;
					}
				}
			}

			if (typeOf(this.options.grid) == 'number') this.options.grid = {
				x: this.options.grid,
				y: this.options.grid
			};

			var events = {
				mousemove: this.bound.check,
				mouseup: this.bound.cancel,
				touchmove: this.bound.check,
				touchend: this.bound.cancel
			};
			events[this.selection] = this.bound.eventStop;
			this.document.addEvents(events);
		},

		check: function(event){
			if (this.options.preventDefault) event.preventDefault();
			var distance = Math.round(Math.sqrt(Math.pow(event.page.x - this.mouse.start.x, 2) + Math.pow(event.page.y - this.mouse.start.y, 2)));
			if (distance > this.options.snap){
				this.cancel();
				this.document.addEvents({
					mousemove: this.bound.drag,
					mouseup: this.bound.stop,
					touchmove: this.bound.drag,
					touchend: this.bound.stop
				});
				this.fireEvent('start', [this.element, event]).fireEvent('snap', this.element);
			}
		},

		drag: function(event){
			var options = this.options;
			if (options.preventDefault) event.preventDefault();
			this.mouse.now = this.sumValues(event.page, this.compensateScroll.diff, -1);

			this.render(options);
			this.fireEvent('drag', [this.element, event]);
		},

		render: function(options){
			for (var z in options.modifiers){
				if (!options.modifiers[z]) continue;
				this.value.now[z] = this.mouse.now[z] - this.mouse.pos[z];

				if (options.invert) this.value.now[z] *= -1;
				if (options.limit && this.limit[z]){
					if ((this.limit[z][1] || this.limit[z][1] === 0) && (this.value.now[z] > this.limit[z][1])){
						this.value.now[z] = this.limit[z][1];
					} else if ((this.limit[z][0] || this.limit[z][0] === 0) && (this.value.now[z] < this.limit[z][0])){
						this.value.now[z] = this.limit[z][0];
					}
				}
				if (options.grid[z]) this.value.now[z] -= ((this.value.now[z] - (this.limit[z][0]||0)) % options.grid[z]);
				if (options.style) this.element.setStyle(options.modifiers[z], this.value.now[z] + options.unit);
				else this.element[options.modifiers[z]] = this.value.now[z];
			}
		},

		cancel: function(event){
			this.document.removeEvents({
				mousemove: this.bound.check,
				mouseup: this.bound.cancel,
				touchmove: this.bound.check,
				touchend: this.bound.cancel
			});
			if (event){
				this.document.removeEvent(this.selection, this.bound.eventStop);
				this.fireEvent('cancel', this.element);
			}
		},

		stop: function(event){
			var events = {
				mousemove: this.bound.drag,
				mouseup: this.bound.stop,
				touchmove: this.bound.drag,
				touchend: this.bound.stop
			};
			events[this.selection] = this.bound.eventStop;
			this.document.removeEvents(events);
			this.mouse.start = null;
			if (event) this.fireEvent('complete', [this.element, event]);
		}

	});

	})();


	Element.implement({

		makeResizable: function(options){
			var drag = new Drag(this, Object.merge({
				modifiers: {
					x: 'width',
					y: 'height'
				}
			}, options));

			this.store('resizer', drag);
			return drag.addEvent('drag', function(){
				this.fireEvent('resize', drag);
			}.bind(this));
		}

	});

	/*
	---

	script: Drag.Move.js

	name: Drag.Move

	description: A Drag extension that provides support for the constraining of draggables to containers and droppables.

	license: MIT-style license

	authors:
	  - Valerio Proietti
	  - Tom Occhinno
	  - Jan Kassens
	  - Aaron Newton
	  - Scott Kyle

	requires:
	  - Core/Element.Dimensions
	  - Drag

	provides: [Drag.Move]

	...
	*/

	Drag.Move = new Class({

		Extends: Drag,

		options: {/*
			onEnter: function(thisElement, overed){},
			onLeave: function(thisElement, overed){},
			onDrop: function(thisElement, overed, event){},*/
			droppables: [],
			container: false,
			precalculate: false,
			includeMargins: true,
			checkDroppables: true
		},

		initialize: function(element, options){
			this.parent(element, options);
			element = this.element;

			this.droppables = $$(this.options.droppables);
			this.setContainer(this.options.container);

			if (this.options.style){
				if (this.options.modifiers.x == 'left' && this.options.modifiers.y == 'top'){
					var parent = element.getOffsetParent(),
						styles = element.getStyles('left', 'top');
					if (parent && (styles.left == 'auto' || styles.top == 'auto')){
						element.setPosition(element.getPosition(parent));
					}
				}

				if (element.getStyle('position') == 'static') element.setStyle('position', 'absolute');
			}

			this.addEvent('start', this.checkDroppables, true);
			this.overed = null;
		},

		setContainer: function(container){
			this.container = document.id(container);
			if (this.container && typeOf(this.container) != 'element'){
				this.container = document.id(this.container.getDocument().body);
			}
		},

		start: function(event){
			if (this.container) this.options.limit = this.calculateLimit();

			if (this.options.precalculate){
				this.positions = this.droppables.map(function(el){
					return el.getCoordinates();
				});
			}

			this.parent(event);
		},

		calculateLimit: function(){
			var element = this.element,
				container = this.container,

				offsetParent = document.id(element.getOffsetParent()) || document.body,
				containerCoordinates = container.getCoordinates(offsetParent),
				elementMargin = {},
				elementBorder = {},
				containerMargin = {},
				containerBorder = {},
				offsetParentPadding = {},
				offsetScroll = offsetParent.getScroll();

			['top', 'right', 'bottom', 'left'].each(function(pad){
				elementMargin[pad] = element.getStyle('margin-' + pad).toInt();
				elementBorder[pad] = element.getStyle('border-' + pad).toInt();
				containerMargin[pad] = container.getStyle('margin-' + pad).toInt();
				containerBorder[pad] = container.getStyle('border-' + pad).toInt();
				offsetParentPadding[pad] = offsetParent.getStyle('padding-' + pad).toInt();
			}, this);

			var width = element.offsetWidth + elementMargin.left + elementMargin.right,
				height = element.offsetHeight + elementMargin.top + elementMargin.bottom,
				left = 0 + offsetScroll.x,
				top = 0 + offsetScroll.y,
				right = containerCoordinates.right - containerBorder.right - width + offsetScroll.x,
				bottom = containerCoordinates.bottom - containerBorder.bottom - height + offsetScroll.y;

			if (this.options.includeMargins){
				left += elementMargin.left;
				top += elementMargin.top;
			} else {
				right += elementMargin.right;
				bottom += elementMargin.bottom;
			}

			if (element.getStyle('position') == 'relative'){
				var coords = element.getCoordinates(offsetParent);
				coords.left -= element.getStyle('left').toInt();
				coords.top -= element.getStyle('top').toInt();

				left -= coords.left;
				top -= coords.top;
				if (container.getStyle('position') != 'relative'){
					left += containerBorder.left;
					top += containerBorder.top;
				}
				right += elementMargin.left - coords.left;
				bottom += elementMargin.top - coords.top;

				if (container != offsetParent){
					left += containerMargin.left + offsetParentPadding.left;
					if (!offsetParentPadding.left && left < 0) left = 0;
					top += offsetParent == document.body ? 0 : containerMargin.top + offsetParentPadding.top;
					if (!offsetParentPadding.top && top < 0) top = 0;
				}
			} else {
				left -= elementMargin.left;
				top -= elementMargin.top;
				if (container != offsetParent){
					left += containerCoordinates.left + containerBorder.left;
					top += containerCoordinates.top + containerBorder.top;
				}
			}

			return {
				x: [left, right],
				y: [top, bottom]
			};
		},

		getDroppableCoordinates: function(element){
			var position = element.getCoordinates();
			if (element.getStyle('position') == 'fixed'){
				var scroll = window.getScroll();
				position.left += scroll.x;
				position.right += scroll.x;
				position.top += scroll.y;
				position.bottom += scroll.y;
			}
			return position;
		},

		checkDroppables: function(){
			var overed = this.droppables.filter(function(el, i){
				el = this.positions ? this.positions[i] : this.getDroppableCoordinates(el);
				var now = this.mouse.now;
				return (now.x > el.left && now.x < el.right && now.y < el.bottom && now.y > el.top);
			}, this).getLast();

			if (this.overed != overed){
				if (this.overed) this.fireEvent('leave', [this.element, this.overed]);
				if (overed) this.fireEvent('enter', [this.element, overed]);
				this.overed = overed;
			}
		},

		drag: function(event){
			this.parent(event);
			if (this.options.checkDroppables && this.droppables.length) this.checkDroppables();
		},

		stop: function(event){
			this.checkDroppables();
			this.fireEvent('drop', [this.element, this.overed, event]);
			this.overed = null;
			return this.parent(event);
		}

	});

	Element.implement({

		makeDraggable: function(options){
			var drag = new Drag.Move(this, options);
			this.store('dragger', drag);
			return drag;
		}

	});

	/*
	---

	script: Element.Measure.js

	name: Element.Measure

	description: Extends the Element native object to include methods useful in measuring dimensions.

	credits: "Element.measure / .expose methods by Daniel Steigerwald License: MIT-style license. Copyright: Copyright (c) 2008 Daniel Steigerwald, daniel.steigerwald.cz"

	license: MIT-style license

	authors:
	  - Aaron Newton

	requires:
	  - Core/Element.Style
	  - Core/Element.Dimensions
	  - MooTools.More

	provides: [Element.Measure]

	...
	*/

	(function(){

	var getStylesList = function(styles, planes){
		var list = [];
		Object.each(planes, function(directions){
			Object.each(directions, function(edge){
				styles.each(function(style){
					list.push(style + '-' + edge + (style == 'border' ? '-width' : ''));
				});
			});
		});
		return list;
	};

	var calculateEdgeSize = function(edge, styles){
		var total = 0;
		Object.each(styles, function(value, style){
			if (style.test(edge)) total = total + value.toInt();
		});
		return total;
	};

	var isVisible = function(el){
		return !!(!el || el.offsetHeight || el.offsetWidth);
	};


	Element.implement({

		measure: function(fn){
			if (isVisible(this)) return fn.call(this);
			var parent = this.getParent(),
				toMeasure = [];
			while (!isVisible(parent) && parent != document.body){
				toMeasure.push(parent.expose());
				parent = parent.getParent();
			}
			var restore = this.expose(),
				result = fn.call(this);
			restore();
			toMeasure.each(function(restore){
				restore();
			});
			return result;
		},

		expose: function(){
			if (this.getStyle('display') != 'none') return function(){};
			var before = this.style.cssText;
			this.setStyles({
				display: 'block',
				position: 'absolute',
				visibility: 'hidden'
			});
			return function(){
				this.style.cssText = before;
			}.bind(this);
		},

		getDimensions: function(options){
			options = Object.merge({computeSize: false}, options);
			var dim = {x: 0, y: 0};

			var getSize = function(el, options){
				return (options.computeSize) ? el.getComputedSize(options) : el.getSize();
			};

			var parent = this.getParent('body');

			if (parent && this.getStyle('display') == 'none'){
				dim = this.measure(function(){
					return getSize(this, options);
				});
			} else if (parent){
				try { //safari sometimes crashes here, so catch it
					dim = getSize(this, options);
				} catch (e){}
			}

			return Object.append(dim, (dim.x || dim.x === 0) ? {
				width: dim.x,
				height: dim.y
			} : {
				x: dim.width,
				y: dim.height
			});
		},

		getComputedSize: function(options){
			

			options = Object.merge({
				styles: ['padding','border'],
				planes: {
					height: ['top','bottom'],
					width: ['left','right']
				},
				mode: 'both'
			}, options);

			var styles = {},
				size = {width: 0, height: 0},
				dimensions;

			if (options.mode == 'vertical'){
				delete size.width;
				delete options.planes.width;
			} else if (options.mode == 'horizontal'){
				delete size.height;
				delete options.planes.height;
			}

			getStylesList(options.styles, options.planes).each(function(style){
				styles[style] = this.getStyle(style).toInt();
			}, this);

			Object.each(options.planes, function(edges, plane){

				var capitalized = plane.capitalize(),
					style = this.getStyle(plane);

				if (style == 'auto' && !dimensions) dimensions = this.getDimensions();

				style = styles[plane] = (style == 'auto') ? dimensions[plane] : style.toInt();
				size['total' + capitalized] = style;

				edges.each(function(edge){
					var edgesize = calculateEdgeSize(edge, styles);
					size['computed' + edge.capitalize()] = edgesize;
					size['total' + capitalized] += edgesize;
				});

			}, this);

			return Object.append(size, styles);
		}

	});

	})();

	/*
	---

	script: Slider.js

	name: Slider

	description: Class for creating horizontal and vertical slider controls.

	license: MIT-style license

	authors:
	  - Valerio Proietti

	requires:
	  - Core/Element.Dimensions
	  - Core/Number
	  - Class.Binds
	  - Drag
	  - Element.Measure

	provides: [Slider]

	...
	*/
	(function(){

	var Slider = this.Slider = new Class({

		Implements: [Events, Options],

		Binds: ['clickedElement', 'draggedKnob', 'scrolledElement'],

		options: {/*
			onTick: function(intPosition){},
			onMove: function(){},
			onChange: function(intStep){},
			onComplete: function(strStep){},*/
			onTick: function(position){
				this.setKnobPosition(position);
			},
			initialStep: 0,
			snap: false,
			offset: 0,
			range: false,
			wheel: false,
			steps: 100,
			mode: 'horizontal'
		},

		initialize: function(element, knob, options){
			this.setOptions(options);
			options = this.options;
			this.element = document.id(element);
			knob = this.knob = document.id(knob);
			this.previousChange = this.previousEnd = this.step = options.initialStep ? options.initialStep : options.range ? options.range[0] : 0;

			var limit = {},
				modifiers = {x: false, y: false};

			switch (options.mode){
				case 'vertical':
					this.axis = 'y';
					this.property = 'top';
					this.offset = 'offsetHeight';
					break;
				case 'horizontal':
					this.axis = 'x';
					this.property = 'left';
					this.offset = 'offsetWidth';
			}

			this.setSliderDimensions();
			this.setRange(options.range, null, true);

			if (knob.getStyle('position') == 'static') knob.setStyle('position', 'relative');
			knob.setStyle(this.property, -options.offset);
			modifiers[this.axis] = this.property;
			limit[this.axis] = [-options.offset, this.full - options.offset];

			var dragOptions = {
				snap: 0,
				limit: limit,
				modifiers: modifiers,
				onDrag: this.draggedKnob,
				onStart: this.draggedKnob,
				onBeforeStart: (function(){
					this.isDragging = true;
				}).bind(this),
				onCancel: function(){
					this.isDragging = false;
				}.bind(this),
				onComplete: function(){
					this.isDragging = false;
					this.draggedKnob();
					this.end();
				}.bind(this)
			};
			if (options.snap) this.setSnap(dragOptions);

			this.drag = new Drag(knob, dragOptions);
			if (options.initialStep != null) this.set(options.initialStep, true);
			this.attach();
		},

		attach: function(){
			this.element.addEvent('mousedown', this.clickedElement);
			if (this.options.wheel) this.element.addEvent('mousewheel', this.scrolledElement);
			this.drag.attach();
			return this;
		},

		detach: function(){
			this.element.removeEvent('mousedown', this.clickedElement)
				.removeEvent('mousewheel', this.scrolledElement);
			this.drag.detach();
			return this;
		},

		autosize: function(){
			this.setSliderDimensions()
				.setKnobPosition(this.toPosition(this.step));
			this.drag.options.limit[this.axis] = [-this.options.offset, this.full - this.options.offset];
			if (this.options.snap) this.setSnap();
			return this;
		},

		setSnap: function(options){
			if (!options) options = this.drag.options;
			options.grid = Math.ceil(this.stepWidth);
			options.limit[this.axis][1] = this.element[this.offset];
			return this;
		},

		setKnobPosition: function(position){
			if (this.options.snap) position = this.toPosition(this.step);
			this.knob.setStyle(this.property, position);
			return this;
		},

		setSliderDimensions: function(){
			this.full = this.element.measure(function(){
				this.half = this.knob[this.offset] / 2;
				return this.element[this.offset] - this.knob[this.offset] + (this.options.offset * 2);
			}.bind(this));
			return this;
		},

		set: function(step, silently){
			if (!((this.range > 0) ^ (step < this.min))) step = this.min;
			if (!((this.range > 0) ^ (step > this.max))) step = this.max;

			this.step = (step).round(this.modulus.decimalLength);
			if (silently) this.checkStep().setKnobPosition(this.toPosition(this.step));
			else this.checkStep().fireEvent('tick', this.toPosition(this.step)).fireEvent('move').end();
			return this;
		},

		setRange: function(range, pos, silently){
			this.min = Array.pick([range[0], 0]);
			this.max = Array.pick([range[1], this.options.steps]);
			this.range = this.max - this.min;
			this.steps = this.options.steps || this.full;
			var stepSize = this.stepSize = Math.abs(this.range) / this.steps;
			this.stepWidth = this.stepSize * this.full / Math.abs(this.range);
			this.setModulus();

			if (range) this.set(Array.pick([pos, this.step]).limit(this.min,this.max), silently);
			return this;
		},

		setModulus: function(){
			var decimals = ((this.stepSize + '').split('.')[1] || []).length,
				modulus = 1 + '';
			while (decimals--) modulus += '0';
			this.modulus = {multiplier: (modulus).toInt(10), decimalLength: modulus.length - 1};
		},

		clickedElement: function(event){
			if (this.isDragging || event.target == this.knob) return;

			var dir = this.range < 0 ? -1 : 1,
				position = event.page[this.axis] - this.element.getPosition()[this.axis] - this.half;

			position = position.limit(-this.options.offset, this.full - this.options.offset);

			this.step = (this.min + dir * this.toStep(position)).round(this.modulus.decimalLength);

			this.checkStep()
				.fireEvent('tick', position)
				.fireEvent('move')
				.end();
		},

		scrolledElement: function(event){
			var mode = (this.options.mode == 'horizontal') ? (event.wheel < 0) : (event.wheel > 0);
			this.set(this.step + (mode ? -1 : 1) * this.stepSize);
			event.stop();
		},

		draggedKnob: function(){
			var dir = this.range < 0 ? -1 : 1,
				position = this.drag.value.now[this.axis];

			position = position.limit(-this.options.offset, this.full -this.options.offset);

			this.step = (this.min + dir * this.toStep(position)).round(this.modulus.decimalLength);
			this.checkStep();
			this.fireEvent('move');
		},

		checkStep: function(){
			var step = this.step;
			if (this.previousChange != step){
				this.previousChange = step;
				this.fireEvent('change', step);
			}
			return this;
		},

		end: function(){
			var step = this.step;
			if (this.previousEnd !== step){
				this.previousEnd = step;
				this.fireEvent('complete', step + '');
			}
			return this;
		},

		toStep: function(position){
			var step = (position + this.options.offset) * this.stepSize / this.full * this.steps;
			return this.options.steps ? (step - (step * this.modulus.multiplier) % (this.stepSize * this.modulus.multiplier) / this.modulus.multiplier).round(this.modulus.decimalLength) : step;
		},

		toPosition: function(step){
			return (this.full * Math.abs(this.min - step)) / (this.steps * this.stepSize) - this.options.offset || 0;
		}

	});

	})();


	/*
	---

	script: Sortables.js

	name: Sortables

	description: Class for creating a drag and drop sorting interface for lists of items.

	license: MIT-style license

	authors:
	  - Tom Occhino

	requires:
	  - Core/Fx.Morph
	  - Drag.Move

	provides: [Sortables]

	...
	*/
	(function(){

	var Sortables = this.Sortables = new Class({

		Implements: [Events, Options],

		options: {/*
			onSort: function(element, clone){},
			onStart: function(element, clone){},
			onComplete: function(element){},*/
			opacity: 1,
			clone: false,
			revert: false,
			handle: false,
			dragOptions: {},
			unDraggableTags: ['button', 'input', 'a', 'textarea', 'select', 'option']
		},

		initialize: function(lists, options){
			this.setOptions(options);

			this.elements = [];
			this.lists = [];
			this.idle = true;

			this.addLists($$(document.id(lists) || lists));

			if (!this.options.clone) this.options.revert = false;
			if (this.options.revert) this.effect = new Fx.Morph(null, Object.merge({
				duration: 250,
				link: 'cancel'
			}, this.options.revert));
		},

		attach: function(){
			this.addLists(this.lists);
			return this;
		},

		detach: function(){
			this.lists = this.removeLists(this.lists);
			return this;
		},

		addItems: function(){
			Array.flatten(arguments).each(function(element){
				this.elements.push(element);
				var start = element.retrieve('sortables:start', function(event){
					this.start.call(this, event, element);
				}.bind(this));
				(this.options.handle ? element.getElement(this.options.handle) || element : element).addEvent('mousedown', start);
			}, this);
			return this;
		},

		addLists: function(){
			Array.flatten(arguments).each(function(list){
				this.lists.include(list);
				this.addItems(list.getChildren());
			}, this);
			return this;
		},

		removeItems: function(){
			return $$(Array.flatten(arguments).map(function(element){
				this.elements.erase(element);
				var start = element.retrieve('sortables:start');
				(this.options.handle ? element.getElement(this.options.handle) || element : element).removeEvent('mousedown', start);

				return element;
			}, this));
		},

		removeLists: function(){
			return $$(Array.flatten(arguments).map(function(list){
				this.lists.erase(list);
				this.removeItems(list.getChildren());

				return list;
			}, this));
		},

		getDroppableCoordinates: function(element){
			var offsetParent = element.getOffsetParent();
			var position = element.getPosition(offsetParent);
			var scroll = {
				w: window.getScroll(),
				offsetParent: offsetParent.getScroll()
			};
			position.x += scroll.offsetParent.x;
			position.y += scroll.offsetParent.y;

			if (offsetParent.getStyle('position') == 'fixed'){
				position.x -= scroll.w.x;
				position.y -= scroll.w.y;
			}

			return position;
		},

		getClone: function(event, element){
			if (!this.options.clone) return new Element(element.tagName).inject(document.body);
			if (typeOf(this.options.clone) == 'function') return this.options.clone.call(this, event, element, this.list);
			var clone = element.clone(true).setStyles({
				margin: 0,
				position: 'absolute',
				visibility: 'hidden',
				width: element.getStyle('width')
			}).addEvent('mousedown', function(event){
				element.fireEvent('mousedown', event);
			});
			//prevent the duplicated radio inputs from unchecking the real one
			if (clone.get('html').test('radio')){
				clone.getElements('input[type=radio]').each(function(input, i){
					input.set('name', 'clone_' + i);
					if (input.get('checked')) element.getElements('input[type=radio]')[i].set('checked', true);
				});
			}

			return clone.inject(this.list).setPosition(this.getDroppableCoordinates(this.element));
		},

		getDroppables: function(){
			var droppables = this.list.getChildren().erase(this.clone).erase(this.element);
			if (!this.options.constrain) droppables.append(this.lists).erase(this.list);
			return droppables;
		},

		insert: function(dragging, element){
			var where = 'inside';
			if (this.lists.contains(element)){
				this.list = element;
				this.drag.droppables = this.getDroppables();
			} else {
				where = this.element.getAllPrevious().contains(element) ? 'before' : 'after';
			}
			this.element.inject(element, where);
			this.fireEvent('sort', [this.element, this.clone]);
		},

		start: function(event, element){
			if (
				!this.idle ||
				event.rightClick ||
				(!this.options.handle && this.options.unDraggableTags.contains(event.target.get('tag')))
			) return;

			this.idle = false;
			this.element = element;
			this.opacity = element.getStyle('opacity');
			this.list = element.getParent();
			this.clone = this.getClone(event, element);

			this.drag = new Drag.Move(this.clone, Object.merge({
				
				droppables: this.getDroppables()
			}, this.options.dragOptions)).addEvents({
				onSnap: function(){
					event.stop();
					this.clone.setStyle('visibility', 'visible');
					this.element.setStyle('opacity', this.options.opacity || 0);
					this.fireEvent('start', [this.element, this.clone]);
				}.bind(this),
				onEnter: this.insert.bind(this),
				onCancel: this.end.bind(this),
				onComplete: this.end.bind(this)
			});

			this.clone.inject(this.element, 'before');
			this.drag.start(event);
		},

		end: function(){
			this.drag.detach();
			this.element.setStyle('opacity', this.opacity);
			var self = this;
			if (this.effect){
				var dim = this.element.getStyles('width', 'height'),
					clone = this.clone,
					pos = clone.computePosition(this.getDroppableCoordinates(clone));

				var destroy = function(){
					this.removeEvent('cancel', destroy);
					clone.destroy();
					self.reset();
				};

				this.effect.element = clone;
				this.effect.start({
					top: pos.top,
					left: pos.left,
					width: dim.width,
					height: dim.height,
					opacity: 0.25
				}).addEvent('cancel', destroy).chain(destroy);
			} else {
				this.clone.destroy();
				self.reset();
			}

		},

		reset: function(){
			this.idle = true;
			this.fireEvent('complete', this.element);
		},

		serialize: function(){
			var params = Array.link(arguments, {
				modifier: Type.isFunction,
				index: function(obj){
					return obj != null;
				}
			});
			var serial = this.lists.map(function(list){
				return list.getChildren().map(params.modifier || function(element){
					return element.get('id');
				}, this);
			}, this);

			var index = params.index;
			if (this.lists.length == 1) index = 0;
			return (index || index === 0) && index >= 0 && index < this.lists.length ? serial[index] : serial;
		}

	});

	})();

	/*
	---

	name: Element.Event.Pseudos

	description: Adds the functionality to add pseudo events for Elements

	license: MIT-style license

	authors:
	  - Arian Stolwijk

	requires: [Core/Element.Event, Core/Element.Delegation, Events.Pseudos]

	provides: [Element.Event.Pseudos, Element.Delegation.Pseudo]

	...
	*/

	(function(){

	var pseudos = {relay: false},
		copyFromEvents = ['once', 'throttle', 'pause'],
		count = copyFromEvents.length;

	while (count--) pseudos[copyFromEvents[count]] = Events.lookupPseudo(copyFromEvents[count]);

	DOMEvent.definePseudo = function(key, listener){
		pseudos[key] = listener;
		return this;
	};

	var proto = Element.prototype;
	[Element, Window, Document].invoke('implement', Events.Pseudos(pseudos, proto.addEvent, proto.removeEvent));

	})();

	/*
	---

	name: Element.Event.Pseudos.Keys

	description: Adds functionality fire events if certain keycombinations are pressed

	license: MIT-style license

	authors:
	  - Arian Stolwijk

	requires: [Element.Event.Pseudos]

	provides: [Element.Event.Pseudos.Keys]

	...
	*/

	(function(){

	var keysStoreKey = '$moo:keys-pressed',
		keysKeyupStoreKey = '$moo:keys-keyup';


	DOMEvent.definePseudo('keys', function(split, fn, args){

		var event = args[0],
			keys = [],
			pressed = this.retrieve(keysStoreKey, []),
			value = split.value;

		if (value != '+') keys.append(value.replace('++', function(){
			keys.push('+'); // shift++ and shift+++a
			return '';
		}).split('+'));
		else keys = ['+'];

		pressed.include(event.key);

		if (keys.every(function(key){
			return pressed.contains(key);
		})) fn.apply(this, args);

		this.store(keysStoreKey, pressed);

		if (!this.retrieve(keysKeyupStoreKey)){
			var keyup = function(event){
				(function(){
					pressed = this.retrieve(keysStoreKey, []).erase(event.key);
					this.store(keysStoreKey, pressed);
				}).delay(0, this); // Fix for IE
			};
			this.store(keysKeyupStoreKey, keyup).addEvent('keyup', keyup);
		}

	});

	DOMEvent.defineKeys({
		'16': 'shift',
		'17': 'control',
		'18': 'alt',
		'20': 'capslock',
		'33': 'pageup',
		'34': 'pagedown',
		'35': 'end',
		'36': 'home',
		'144': 'numlock',
		'145': 'scrolllock',
		'186': ';',
		'187': '=',
		'188': ',',
		'190': '.',
		'191': '/',
		'192': '`',
		'219': '[',
		'220': '\\',
		'221': ']',
		'222': "'",
		'107': '+',
		'109': '-', // subtract
		'189': '-'  // dash
	});

	})();

	/*
	---

	script: String.Extras.js

	name: String.Extras

	description: Extends the String native object to include methods useful in managing various kinds of strings (query strings, urls, html, etc).

	license: MIT-style license

	authors:
	  - Aaron Newton
	  - Guillermo Rauch
	  - Christopher Pitt

	requires:
	  - Core/String
	  - Core/Array
	  - MooTools.More

	provides: [String.Extras]

	...
	*/

	(function(){

	var special = {
			'a': /[àáâãäåăą]/g,
			'A': /[ÀÁÂÃÄÅĂĄ]/g,
			'c': /[ćčç]/g,
			'C': /[ĆČÇ]/g,
			'd': /[ďđ]/g,
			'D': /[ĎÐ]/g,
			'e': /[èéêëěę]/g,
			'E': /[ÈÉÊËĚĘ]/g,
			'g': /[ğ]/g,
			'G': /[Ğ]/g,
			'i': /[ìíîï]/g,
			'I': /[ÌÍÎÏ]/g,
			'l': /[ĺľł]/g,
			'L': /[ĹĽŁ]/g,
			'n': /[ñňń]/g,
			'N': /[ÑŇŃ]/g,
			'o': /[òóôõöøő]/g,
			'O': /[ÒÓÔÕÖØ]/g,
			'r': /[řŕ]/g,
			'R': /[ŘŔ]/g,
			's': /[ššş]/g,
			'S': /[ŠŞŚ]/g,
			't': /[ťţ]/g,
			'T': /[ŤŢ]/g,
			'u': /[ùúûůüµ]/g,
			'U': /[ÙÚÛŮÜ]/g,
			'y': /[ÿý]/g,
			'Y': /[ŸÝ]/g,
			'z': /[žźż]/g,
			'Z': /[ŽŹŻ]/g,
			'th': /[þ]/g,
			'TH': /[Þ]/g,
			'dh': /[ð]/g,
			'DH': /[Ð]/g,
			'ss': /[ß]/g,
			'oe': /[œ]/g,
			'OE': /[Œ]/g,
			'ae': /[æ]/g,
			'AE': /[Æ]/g
		},

		tidy = {
			' ': /[\xa0\u2002\u2003\u2009]/g,
			'*': /[\xb7]/g,
			'\'': /[\u2018\u2019]/g,
			'"': /[\u201c\u201d]/g,
			'...': /[\u2026]/g,
			'-': /[\u2013]/g,
		//	'--': /[\u2014]/g,
			'&raquo;': /[\uFFFD]/g
		},

		conversions = {
			ms: 1,
			s: 1000,
			m: 6e4,
			h: 36e5
		},

		findUnits = /(\d*.?\d+)([msh]+)/;

	var walk = function(string, replacements){
		var result = string, key;
		for (key in replacements) result = result.replace(replacements[key], key);
		return result;
	};

	var getRegexForTag = function(tag, contents){
		tag = tag || (contents ? '' : '\\w+');
		var regstr = contents ? '<' + tag + '(?!\\w)[^>]*>([\\s\\S]*?)<\/' + tag + '(?!\\w)>' : '<\/?' + tag + '\/?>|<' + tag + '[\\s|\/][^>]*>';
		return new RegExp(regstr, 'gi');
	};

	String.implement({

		standardize: function(){
			return walk(this, special);
		},

		repeat: function(times){
			return new Array(times + 1).join(this);
		},

		pad: function(length, str, direction){
			if (this.length >= length) return this;

			var pad = (str == null ? ' ' : '' + str)
				.repeat(length - this.length)
				.substr(0, length - this.length);

			if (!direction || direction == 'right') return this + pad;
			if (direction == 'left') return pad + this;

			return pad.substr(0, (pad.length / 2).floor()) + this + pad.substr(0, (pad.length / 2).ceil());
		},

		getTags: function(tag, contents){
			return this.match(getRegexForTag(tag, contents)) || [];
		},

		stripTags: function(tag, contents){
			return this.replace(getRegexForTag(tag, contents), '');
		},

		tidy: function(){
			return walk(this, tidy);
		},

		truncate: function(max, trail, atChar){
			var string = this;
			if (trail == null && arguments.length == 1) trail = '…';
			if (string.length > max){
				string = string.substring(0, max);
				if (atChar){
					var index = string.lastIndexOf(atChar);
					if (index != -1) string = string.substr(0, index);
				}
				if (trail) string += trail;
			}
			return string;
		},

		ms: function(){
			// "Borrowed" from https://gist.github.com/1503944
			var units = findUnits.exec(this);
			if (units == null) return Number(this);
			return Number(units[1]) * conversions[units[2]];
		}

	});

	})();

	/*
	---

	script: Element.Forms.js

	name: Element.Forms

	description: Extends the Element native object to include methods useful in managing inputs.

	license: MIT-style license

	authors:
	  - Aaron Newton

	requires:
	  - Core/Element
	  - String.Extras
	  - MooTools.More

	provides: [Element.Forms]

	...
	*/

	Element.implement({

		tidy: function(){
			this.set('value', this.get('value').tidy());
		},

		getTextInRange: function(start, end){
			return this.get('value').substring(start, end);
		},

		getSelectedText: function(){
			if (this.setSelectionRange) return this.getTextInRange(this.getSelectionStart(), this.getSelectionEnd());
			return document.selection.createRange().text;
		},

		getSelectedRange: function(){
			if (this.selectionStart != null){
				return {
					start: this.selectionStart,
					end: this.selectionEnd
				};
			}

			var pos = {
				start: 0,
				end: 0
			};
			var range = this.getDocument().selection.createRange();
			if (!range || range.parentElement() != this) return pos;
			var duplicate = range.duplicate();

			if (this.type == 'text'){
				pos.start = 0 - duplicate.moveStart('character', -100000);
				pos.end = pos.start + range.text.length;
			} else {
				var value = this.get('value');
				var offset = value.length;
				duplicate.moveToElementText(this);
				duplicate.setEndPoint('StartToEnd', range);
				if (duplicate.text.length) offset -= value.match(/[\n\r]*$/)[0].length;
				pos.end = offset - duplicate.text.length;
				duplicate.setEndPoint('StartToStart', range);
				pos.start = offset - duplicate.text.length;
			}
			return pos;
		},

		getSelectionStart: function(){
			return this.getSelectedRange().start;
		},

		getSelectionEnd: function(){
			return this.getSelectedRange().end;
		},

		setCaretPosition: function(pos){
			if (pos == 'end') pos = this.get('value').length;
			this.selectRange(pos, pos);
			return this;
		},

		getCaretPosition: function(){
			return this.getSelectedRange().start;
		},

		selectRange: function(start, end){
			if (this.setSelectionRange){
				this.focus();
				this.setSelectionRange(start, end);
			} else {
				var value = this.get('value');
				var diff = value.substr(start, end - start).replace(/\r/g, '').length;
				start = value.substr(0, start).replace(/\r/g, '').length;
				var range = this.createTextRange();
				range.collapse(true);
				range.moveEnd('character', start + diff);
				range.moveStart('character', start);
				range.select();
			}
			return this;
		},

		insertAtCursor: function(value, select){
			var pos = this.getSelectedRange();
			var text = this.get('value');
			this.set('value', text.substring(0, pos.start) + value + text.substring(pos.end, text.length));
			if (select !== false) this.selectRange(pos.start, pos.start + value.length);
			else this.setCaretPosition(pos.start + value.length);
			return this;
		},

		insertAroundCursor: function(options, select){
			options = Object.append({
				before: '',
				defaultMiddle: '',
				after: ''
			}, options);

			var value = this.getSelectedText() || options.defaultMiddle;
			var pos = this.getSelectedRange();
			var text = this.get('value');

			if (pos.start == pos.end){
				this.set('value', text.substring(0, pos.start) + options.before + value + options.after + text.substring(pos.end, text.length));
				this.selectRange(pos.start + options.before.length, pos.end + options.before.length + value.length);
			} else {
				var current = text.substring(pos.start, pos.end);
				this.set('value', text.substring(0, pos.start) + options.before + current + options.after + text.substring(pos.end, text.length));
				var selStart = pos.start + options.before.length;
				if (select !== false) this.selectRange(selStart, selStart + current.length);
				else this.setCaretPosition(selStart + text.length);
			}
			return this;
		}

	});

	/*
	---

	script: Element.Pin.js

	name: Element.Pin

	description: Extends the Element native object to include the pin method useful for fixed positioning for elements.

	license: MIT-style license

	authors:
	  - Aaron Newton

	requires:
	  - Core/Element.Event
	  - Core/Element.Dimensions
	  - Core/Element.Style
	  - MooTools.More

	provides: [Element.Pin]

	...
	*/

	(function(){
	var supportsPositionFixed = false,
		supportTested = false;

	var testPositionFixed = function(){
		var test = new Element('div').setStyles({
			position: 'fixed',
			top: 0,
			right: 0
		}).inject(document.body);
		supportsPositionFixed = (test.offsetTop === 0);
		test.dispose();
		supportTested = true;
	};

	Element.implement({

		pin: function(enable, forceScroll){
			if (!supportTested) testPositionFixed();
			if (this.getStyle('display') == 'none') return this;

			var pinnedPosition,
				scroll = window.getScroll(),
				parent,
				scrollFixer;

			if (enable !== false){
				pinnedPosition = this.getPosition();
				if (!this.retrieve('pin:_pinned')){
					var currentPosition = {
						top: pinnedPosition.y - scroll.y,
						left: pinnedPosition.x - scroll.x,
						margin: '0px',
						padding: '0px'
					};

					if (supportsPositionFixed && !forceScroll){
						this.setStyle('position', 'fixed').setStyles(currentPosition);
					} else {

						parent = this.getOffsetParent();
						var position = this.getPosition(parent),
							styles = this.getStyles('left', 'top');

						if (parent && styles.left == 'auto' || styles.top == 'auto') this.setPosition(position);
						if (this.getStyle('position') == 'static') this.setStyle('position', 'absolute');

						position = {
							x: styles.left.toInt() - scroll.x,
							y: styles.top.toInt() - scroll.y
						};

						scrollFixer = function(){
							if (!this.retrieve('pin:_pinned')) return;
							var scroll = window.getScroll();
							this.setStyles({
								left: position.x + scroll.x,
								top: position.y + scroll.y
							});
						}.bind(this);

						this.store('pin:_scrollFixer', scrollFixer);
						window.addEvent('scroll', scrollFixer);
					}
					this.store('pin:_pinned', true);
				}

			} else {
				if (!this.retrieve('pin:_pinned')) return this;

				parent = this.getParent();
				var offsetParent = (parent.getComputedStyle('position') != 'static' ? parent : parent.getOffsetParent());

				pinnedPosition = this.getPosition();

				this.store('pin:_pinned', false);
				scrollFixer = this.retrieve('pin:_scrollFixer');
				if (!scrollFixer){
					this.setStyles({
						position: 'absolute',
						top: pinnedPosition.y + scroll.y,
						left: pinnedPosition.x + scroll.x
					});
				} else {
					this.store('pin:_scrollFixer', null);
					window.removeEvent('scroll', scrollFixer);
				}
				this.removeClass('isPinned');
			}
			return this;
		},

		unpin: function(){
			return this.pin(false);
		},

		togglePin: function(){
			return this.pin(!this.retrieve('pin:_pinned'));
		}

	});



	})();

	/*
	---

	script: Element.Position.js

	name: Element.Position

	description: Extends the Element native object to include methods useful positioning elements relative to others.

	license: MIT-style license

	authors:
	  - Aaron Newton
	  - Jacob Thornton

	requires:
	  - Core/Options
	  - Core/Element.Dimensions
	  - Element.Measure

	provides: [Element.Position]

	...
	*/

	(function(original){

	var local = Element.Position = {

		options: {/*
			edge: false,
			returnPos: false,
			minimum: {x: 0, y: 0},
			maximum: {x: 0, y: 0},
			relFixedPosition: false,
			ignoreMargins: false,
			ignoreScroll: false,
			allowNegative: false,*/
			relativeTo: document.body,
			position: {
				x: 'center', //left, center, right
				y: 'center' //top, center, bottom
			},
			offset: {x: 0, y: 0}
		},

		getOptions: function(element, options){
			options = Object.merge({}, local.options, options);
			local.setPositionOption(options);
			local.setEdgeOption(options);
			local.setOffsetOption(element, options);
			local.setDimensionsOption(element, options);
			return options;
		},

		setPositionOption: function(options){
			options.position = local.getCoordinateFromValue(options.position);
		},

		setEdgeOption: function(options){
			var edgeOption = local.getCoordinateFromValue(options.edge);
			options.edge = edgeOption ? edgeOption :
				(options.position.x == 'center' && options.position.y == 'center') ? {x: 'center', y: 'center'} :
				{x: 'left', y: 'top'};
		},

		setOffsetOption: function(element, options){
			var parentOffset = {x: 0, y: 0};
			var parentScroll = {x: 0, y: 0};
			var offsetParent = element.measure(function(){
				return document.id(this.getOffsetParent());
			});

			if (!offsetParent || offsetParent == element.getDocument().body) return;

			parentScroll = offsetParent.getScroll();
			parentOffset = offsetParent.measure(function(){
				var position = this.getPosition();
				if (this.getStyle('position') == 'fixed'){
					var scroll = window.getScroll();
					position.x += scroll.x;
					position.y += scroll.y;
				}
				return position;
			});

			options.offset = {
				parentPositioned: offsetParent != document.id(options.relativeTo),
				x: options.offset.x - parentOffset.x + parentScroll.x,
				y: options.offset.y - parentOffset.y + parentScroll.y
			};
		},

		setDimensionsOption: function(element, options){
			options.dimensions = element.getDimensions({
				computeSize: true,
				styles: ['padding', 'border', 'margin']
			});
		},

		getPosition: function(element, options){
			var position = {};
			options = local.getOptions(element, options);
			var relativeTo = document.id(options.relativeTo) || document.body;

			local.setPositionCoordinates(options, position, relativeTo);
			if (options.edge) local.toEdge(position, options);

			var offset = options.offset;
			position.left = ((position.x >= 0 || offset.parentPositioned || options.allowNegative) ? position.x : 0).toInt();
			position.top = ((position.y >= 0 || offset.parentPositioned || options.allowNegative) ? position.y : 0).toInt();

			local.toMinMax(position, options);

			if (options.relFixedPosition || relativeTo.getStyle('position') == 'fixed') local.toRelFixedPosition(relativeTo, position);
			if (options.ignoreScroll) local.toIgnoreScroll(relativeTo, position);
			if (options.ignoreMargins) local.toIgnoreMargins(position, options);

			position.left = Math.ceil(position.left);
			position.top = Math.ceil(position.top);
			delete position.x;
			delete position.y;

			return position;
		},

		setPositionCoordinates: function(options, position, relativeTo){
			var offsetY = options.offset.y,
				offsetX = options.offset.x,
				calc = (relativeTo == document.body) ? window.getScroll() : relativeTo.getPosition(),
				top = calc.y,
				left = calc.x,
				winSize = window.getSize();

			switch (options.position.x){
				case 'left': position.x = left + offsetX; break;
				case 'right': position.x = left + offsetX + relativeTo.offsetWidth; break;
				default: position.x = left + ((relativeTo == document.body ? winSize.x : relativeTo.offsetWidth) / 2) + offsetX; break;
			}

			switch (options.position.y){
				case 'top': position.y = top + offsetY; break;
				case 'bottom': position.y = top + offsetY + relativeTo.offsetHeight; break;
				default: position.y = top + ((relativeTo == document.body ? winSize.y : relativeTo.offsetHeight) / 2) + offsetY; break;
			}
		},

		toMinMax: function(position, options){
			var xy = {left: 'x', top: 'y'}, value;
			['minimum', 'maximum'].each(function(minmax){
				['left', 'top'].each(function(lr){
					value = options[minmax] ? options[minmax][xy[lr]] : null;
					if (value != null && ((minmax == 'minimum') ? position[lr] < value : position[lr] > value)) position[lr] = value;
				});
			});
		},

		toRelFixedPosition: function(relativeTo, position){
			var winScroll = window.getScroll();
			position.top += winScroll.y;
			position.left += winScroll.x;
		},

		toIgnoreScroll: function(relativeTo, position){
			var relScroll = relativeTo.getScroll();
			position.top -= relScroll.y;
			position.left -= relScroll.x;
		},

		toIgnoreMargins: function(position, options){
			position.left += options.edge.x == 'right'
				? options.dimensions['margin-right']
				: (options.edge.x != 'center'
					? -options.dimensions['margin-left']
					: -options.dimensions['margin-left'] + ((options.dimensions['margin-right'] + options.dimensions['margin-left']) / 2));

			position.top += options.edge.y == 'bottom'
				? options.dimensions['margin-bottom']
				: (options.edge.y != 'center'
					? -options.dimensions['margin-top']
					: -options.dimensions['margin-top'] + ((options.dimensions['margin-bottom'] + options.dimensions['margin-top']) / 2));
		},

		toEdge: function(position, options){
			var edgeOffset = {},
				dimensions = options.dimensions,
				edge = options.edge;

			switch (edge.x){
				case 'left': edgeOffset.x = 0; break;
				case 'right': edgeOffset.x = -dimensions.x - dimensions.computedRight - dimensions.computedLeft; break;
				// center
				default: edgeOffset.x = -(Math.round(dimensions.totalWidth / 2)); break;
			}

			switch (edge.y){
				case 'top': edgeOffset.y = 0; break;
				case 'bottom': edgeOffset.y = -dimensions.y - dimensions.computedTop - dimensions.computedBottom; break;
				// center
				default: edgeOffset.y = -(Math.round(dimensions.totalHeight / 2)); break;
			}

			position.x += edgeOffset.x;
			position.y += edgeOffset.y;
		},

		getCoordinateFromValue: function(option){
			if (typeOf(option) != 'string') return option;
			option = option.toLowerCase();

			return {
				x: option.test('left') ? 'left'
					: (option.test('right') ? 'right' : 'center'),
				y: option.test(/upper|top/) ? 'top'
					: (option.test('bottom') ? 'bottom' : 'center')
			};
		}

	};

	Element.implement({

		position: function(options){
			if (options && (options.x != null || options.y != null)){
				return (original ? original.apply(this, arguments) : this);
			}
			var position = this.setStyle('position', 'absolute').calculatePosition(options);
			return (options && options.returnPos) ? position : this.setStyles(position);
		},

		calculatePosition: function(options){
			return local.getPosition(this, options);
		}

	});

	})(Element.prototype.position);

	/*
	---

	script: Element.Shortcuts.js

	name: Element.Shortcuts

	description: Extends the Element native object to include some shortcut methods.

	license: MIT-style license

	authors:
	  - Aaron Newton

	requires:
	  - Core/Element.Style
	  - MooTools.More

	provides: [Element.Shortcuts]

	...
	*/

	Element.implement({

		isDisplayed: function(){
			return this.getStyle('display') != 'none';
		},

		isVisible: function(){
			var w = this.offsetWidth,
				h = this.offsetHeight;
			return (w == 0 && h == 0) ? false : (w > 0 && h > 0) ? true : this.style.display != 'none';
		},

		toggle: function(){
			return this[this.isDisplayed() ? 'hide' : 'show']();
		},

		hide: function(){
			var d;
			try {
				//IE fails here if the element is not in the dom
				d = this.getStyle('display');
			} catch (e){}
			if (d == 'none') return this;
			return this.store('element:_originalDisplay', d || '').setStyle('display', 'none');
		},

		show: function(display){
			if (!display && this.isDisplayed()) return this;
			display = display || this.retrieve('element:_originalDisplay') || 'block';
			return this.setStyle('display', (display == 'none') ? 'block' : display);
		},

		swapClass: function(remove, add){
			return this.removeClass(remove).addClass(add);
		}

	});

	Document.implement({

		clearSelection: function(){
			if (window.getSelection){
				var selection = window.getSelection();
				if (selection && selection.removeAllRanges) selection.removeAllRanges();
			} else if (document.selection && document.selection.empty){
				try {
					//IE fails here if selected element is not in dom
					document.selection.empty();
				} catch (e){}
			}
		}

	});

	/*
	---

	script: Elements.From.js

	name: Elements.From

	description: Returns a collection of elements from a string of html.

	license: MIT-style license

	authors:
	  - Aaron Newton

	requires:
	  - Core/String
	  - Core/Element
	  - MooTools.More

	provides: [Elements.from, Elements.From]

	...
	*/

	Elements.from = function(text, excludeScripts){
		if (excludeScripts || excludeScripts == null) text = text.stripScripts();

		var container, match = text.match(/^\s*(?:<!--.*?-->\s*)*<(t[dhr]|tbody|tfoot|thead)/i);

		if (match){
			container = new Element('table');
			var tag = match[1].toLowerCase();
			if (['td', 'th', 'tr'].contains(tag)){
				container = new Element('tbody').inject(container);
				if (tag != 'tr') container = new Element('tr').inject(container);
			}
		}

		return (container || new Element('div')).set('html', text).getChildren();
	};

	/*
	---

	script: IframeShim.js

	name: IframeShim

	description: Defines IframeShim, a class for obscuring select lists and flash objects in IE.

	license: MIT-style license

	authors:
	  - Aaron Newton

	requires:
	  - Core/Element.Event
	  - Core/Element.Style
	  - Core/Options
	  - Core/Events
	  - Element.Position
	  - Class.Occlude

	provides: [IframeShim]

	...
	*/

	(function(){

	var browsers = false;


	var IframeShim = this.IframeShim = new Class({

		Implements: [Options, Events, Class.Occlude],

		options: {
			className: 'iframeShim',
			src: 'javascript:false;document.write("");',
			display: false,
			zIndex: null,
			margin: 0,
			offset: {x: 0, y: 0},
			browsers: browsers
		},

		property: 'IframeShim',

		initialize: function(element, options){
			this.element = document.id(element);
			if (this.occlude()) return this.occluded;
			this.setOptions(options);
			this.makeShim();
			return this;
		},

		makeShim: function(){
			if (this.options.browsers){
				var zIndex = this.element.getStyle('zIndex').toInt();

				if (!zIndex){
					zIndex = 1;
					var pos = this.element.getStyle('position');
					if (pos == 'static' || !pos) this.element.setStyle('position', 'relative');
					this.element.setStyle('zIndex', zIndex);
				}
				zIndex = ((this.options.zIndex != null || this.options.zIndex === 0) && zIndex > this.options.zIndex) ? this.options.zIndex : zIndex - 1;
				if (zIndex < 0) zIndex = 1;
				this.shim = new Element('iframe', {
					src: this.options.src,
					scrolling: 'no',
					frameborder: 0,
					styles: {
						zIndex: zIndex,
						position: 'absolute',
						border: 'none',
						filter: 'progid:DXImageTransform.Microsoft.Alpha(style=0,opacity=0)'
					},
					'class': this.options.className
				}).store('IframeShim', this);
				var inject = (function(){
					this.shim.inject(this.element, 'after');
					this[this.options.display ? 'show' : 'hide']();
					this.fireEvent('inject');
				}).bind(this);
				if (!IframeShim.ready) window.addEvent('load', inject);
				else inject();
			} else {
				this.position = this.hide = this.show = this.dispose = Function.convert(this);
			}
		},

		position: function(){
			if (!IframeShim.ready || !this.shim) return this;
			var size = this.element.measure(function(){
				return this.getSize();
			});
			if (this.options.margin != undefined){
				size.x = size.x - (this.options.margin * 2);
				size.y = size.y - (this.options.margin * 2);
				this.options.offset.x += this.options.margin;
				this.options.offset.y += this.options.margin;
			}
			this.shim.set({width: size.x, height: size.y}).position({
				relativeTo: this.element,
				offset: this.options.offset
			});
			return this;
		},

		hide: function(){
			if (this.shim) this.shim.setStyle('display', 'none');
			return this;
		},

		show: function(){
			if (this.shim) this.shim.setStyle('display', 'block');
			return this.position();
		},

		dispose: function(){
			if (this.shim) this.shim.dispose();
			return this;
		},

		destroy: function(){
			if (this.shim) this.shim.destroy();
			return this;
		}

	});

	})();

	window.addEvent('load', function(){
		IframeShim.ready = true;
	});

	/*
	---

	script: Mask.js

	name: Mask

	description: Creates a mask element to cover another.

	license: MIT-style license

	authors:
	  - Aaron Newton

	requires:
	  - Core/Options
	  - Core/Events
	  - Core/Element.Event
	  - Class.Binds
	  - Element.Position
	  - IframeShim

	provides: [Mask]

	...
	*/
	(function(){

	var Mask = this.Mask = new Class({

		Implements: [Options, Events],

		Binds: ['position'],

		options: {/*
			onShow: function(){},
			onHide: function(){},
			onDestroy: function(){},
			onClick: function(event){},
			inject: {
				where: 'after',
				target: null,
			},
			hideOnClick: false,
			id: null,
			destroyOnHide: false,*/
			style: {},
			'class': 'mask',
			maskMargins: false,
			useIframeShim: true,
			iframeShimOptions: {}
		},

		initialize: function(target, options){
			this.target = document.id(target) || document.id(document.body);
			this.target.store('mask', this);
			this.setOptions(options);
			this.render();
			this.inject();
		},

		render: function(){
			this.element = new Element('div', {
				'class': this.options['class'],
				id: this.options.id || 'mask-' + String.uniqueID(),
				styles: Object.merge({}, this.options.style, {
					display: 'none'
				}),
				events: {
					click: function(event){
						this.fireEvent('click', event);
						if (this.options.hideOnClick) this.hide();
					}.bind(this)
				}
			});

			this.hidden = true;
		},

		toElement: function(){
			return this.element;
		},

		inject: function(target, where){
			where = where || (this.options.inject ? this.options.inject.where : '') || (this.target == document.body ? 'inside' : 'after');
			target = target || (this.options.inject && this.options.inject.target) || this.target;

			this.element.inject(target, where);

			if (this.options.useIframeShim){
				this.shim = new IframeShim(this.element, this.options.iframeShimOptions);

				this.addEvents({
					show: this.shim.show.bind(this.shim),
					hide: this.shim.hide.bind(this.shim),
					destroy: this.shim.destroy.bind(this.shim)
				});
			}
		},

		position: function(){
			this.resize(this.options.width, this.options.height);

			this.element.position({
				relativeTo: this.target,
				position: 'topLeft',
				ignoreMargins: !this.options.maskMargins,
				ignoreScroll: this.target == document.body
			});

			return this;
		},

		resize: function(x, y){
			var opt = {
				styles: ['padding', 'border']
			};
			if (this.options.maskMargins) opt.styles.push('margin');

			var dim = this.target.getComputedSize(opt);
			if (this.target == document.body){
				this.element.setStyles({width: 0, height: 0});
				var win = window.getScrollSize();
				if (dim.totalHeight < win.y) dim.totalHeight = win.y;
				if (dim.totalWidth < win.x) dim.totalWidth = win.x;
			}
			this.element.setStyles({
				width: Array.pick([x, dim.totalWidth, dim.x]),
				height: Array.pick([y, dim.totalHeight, dim.y])
			});

			return this;
		},

		show: function(){
			if (!this.hidden) return this;

			window.addEvent('resize', this.position);
			this.position();
			this.showMask.apply(this, arguments);

			return this;
		},

		showMask: function(){
			this.element.setStyle('display', 'block');
			this.hidden = false;
			this.fireEvent('show');
		},

		hide: function(){
			if (this.hidden) return this;

			window.removeEvent('resize', this.position);
			this.hideMask.apply(this, arguments);
			if (this.options.destroyOnHide) return this.destroy();

			return this;
		},

		hideMask: function(){
			this.element.setStyle('display', 'none');
			this.hidden = true;
			this.fireEvent('hide');
		},

		toggle: function(){
			this[this.hidden ? 'show' : 'hide']();
		},

		destroy: function(){
			this.hide();
			this.element.destroy();
			this.fireEvent('destroy');
			this.target.eliminate('mask');
		}

	});

	})();


	Element.Properties.mask = {

		set: function(options){
			var mask = this.retrieve('mask');
			if (mask) mask.destroy();
			return this.eliminate('mask').store('mask:options', options);
		},

		get: function(){
			var mask = this.retrieve('mask');
			if (!mask){
				mask = new Mask(this, this.retrieve('mask:options'));
				this.store('mask', mask);
			}
			return mask;
		}

	};

	Element.implement({

		mask: function(options){
			if (options) this.set('mask', options);
			this.get('mask').show();
			return this;
		},

		unmask: function(){
			this.get('mask').hide();
			return this;
		}

	});

	/*
	---

	script: Spinner.js

	name: Spinner

	description: Adds a semi-transparent overlay over a dom element with a spinnin ajax icon.

	license: MIT-style license

	authors:
	  - Aaron Newton

	requires:
	  - Core/Fx.Tween
	  - Core/Request
	  - Class.refactor
	  - Mask

	provides: [Spinner]

	...
	*/
	(function(){

	var Spinner = this.Spinner = new Class({

		Extends: this.Mask,

		Implements: Chain,

		options: {/*
			message: false,*/
			'class': 'spinner',
			containerPosition: {},
			content: {
				'class': 'spinner-content'
			},
			messageContainer: {
				'class': 'spinner-msg'
			},
			img: {
				'class': 'spinner-img'
			},
			fxOptions: {
				link: 'chain'
			}
		},

		initialize: function(target, options){
			this.target = document.id(target) || document.id(document.body);
			this.target.store('spinner', this);
			this.setOptions(options);
			this.render();
			this.inject();

			// Add this to events for when noFx is true; parent methods handle hide/show.
			var deactivate = function(){ this.active = false; }.bind(this);
			this.addEvents({
				hide: deactivate,
				show: deactivate
			});
		},

		render: function(){
			this.parent();

			this.element.set('id', this.options.id || 'spinner-' + String.uniqueID());

			this.content = document.id(this.options.content) || new Element('div', this.options.content);
			this.content.inject(this.element);

			if (this.options.message){
				this.msg = document.id(this.options.message) || new Element('p', this.options.messageContainer).appendText(this.options.message);
				this.msg.inject(this.content);
			}

			if (this.options.img){
				this.img = document.id(this.options.img) || new Element('div', this.options.img);
				this.img.inject(this.content);
			}

			this.element.set('tween', this.options.fxOptions);
		},

		show: function(noFx){
			if (this.active) return this.chain(this.show.bind(this));
			if (!this.hidden){
				this.callChain.delay(20, this);
				return this;
			}

			this.target.set('aria-busy', 'true');
			this.active = true;

			return this.parent(noFx);
		},

		showMask: function(noFx){
			var pos = function(){
				this.content.position(Object.merge({
					relativeTo: this.element
				}, this.options.containerPosition));
			}.bind(this);

			if (noFx){
				this.parent();
				pos();
			} else {
				if (!this.options.style.opacity) this.options.style.opacity = this.element.getStyle('opacity').toFloat();
				this.element.setStyles({
					display: 'block',
					opacity: 0
				}).tween('opacity', this.options.style.opacity);
				pos();
				this.hidden = false;
				this.fireEvent('show');
				this.callChain();
			}
		},

		hide: function(noFx){
			if (this.active) return this.chain(this.hide.bind(this));
			if (this.hidden){
				this.callChain.delay(20, this);
				return this;
			}

			this.target.set('aria-busy', 'false');
			this.active = true;

			return this.parent(noFx);
		},

		hideMask: function(noFx){
			if (noFx) return this.parent();
			this.element.tween('opacity', 0).get('tween').chain(function(){
				this.element.setStyle('display', 'none');
				this.hidden = true;
				this.fireEvent('hide');
				this.callChain();
			}.bind(this));
		},

		destroy: function(){
			this.content.destroy();
			this.parent();
			this.target.eliminate('spinner');
		}

	});

	})();

	Request = Class.refactor(Request, {

		options: {
			useSpinner: false,
			spinnerOptions: {},
			spinnerTarget: false
		},

		initialize: function(options){
			this._send = this.send;
			this.send = function(options){
				var spinner = this.getSpinner();
				if (spinner) spinner.chain(this._send.pass(options, this)).show();
				else this._send(options);
				return this;
			};
			this.previous(options);
		},

		getSpinner: function(){
			if (!this.spinner){
				var update = document.id(this.options.spinnerTarget) || document.id(this.options.update);
				if (this.options.useSpinner && update){
					update.set('spinner', this.options.spinnerOptions);
					var spinner = this.spinner = update.get('spinner');
					['complete', 'exception', 'cancel'].each(function(event){
						this.addEvent(event, spinner.hide.bind(spinner));
					}, this);
				}
			}
			return this.spinner;
		}

	});

	Element.Properties.spinner = {

		set: function(options){
			var spinner = this.retrieve('spinner');
			if (spinner) spinner.destroy();
			return this.eliminate('spinner').store('spinner:options', options);
		},

		get: function(){
			var spinner = this.retrieve('spinner');
			if (!spinner){
				spinner = new Spinner(this, this.retrieve('spinner:options'));
				this.store('spinner', spinner);
			}
			return spinner;
		}

	};

	Element.implement({

		spin: function(options){
			if (options) this.set('spinner', options);
			this.get('spinner').show();
			return this;
		},

		unspin: function(){
			this.get('spinner').hide();
			return this;
		}

	});

	/*
	---

	script: String.QueryString.js

	name: String.QueryString

	description: Methods for dealing with URI query strings.

	license: MIT-style license

	authors:
	  - Sebastian Markbåge
	  - Aaron Newton
	  - Lennart Pilon
	  - Valerio Proietti

	requires:
	  - Core/Array
	  - Core/String
	  - MooTools.More

	provides: [String.QueryString]

	...
	*/

	(function(){

	/**
	 * decodeURIComponent doesn't do the correct thing with query parameter keys or
	 * values. Specifically, it leaves '+' as '+' when it should be converting them
	 * to spaces as that's the specification. When browsers submit HTML forms via
	 * GET, the values are encoded using 'application/x-www-form-urlencoded'
	 * which converts spaces to '+'.
	 *
	 * See: http://unixpapa.com/js/querystring.html for a description of the
	 * problem.
	 */
	var decodeComponent = function(str){
		return decodeURIComponent(str.replace(/\+/g, ' '));
	};

	String.implement({

		parseQueryString: function(decodeKeys, decodeValues){
			if (decodeKeys == null) decodeKeys = true;
			if (decodeValues == null) decodeValues = true;

			var vars = this.split(/[&;]/),
				object = {};
			if (!vars.length) return object;

			vars.each(function(val){
				var index = val.indexOf('=') + 1,
					value = index ? val.substr(index) : '',
					keys = index ? val.substr(0, index - 1).match(/([^\]\[]+|(\B)(?=\]))/g) : [val],
					obj = object;
				if (!keys) return;
				if (decodeValues) value = decodeComponent(value);
				keys.each(function(key, i){
					if (decodeKeys) key = decodeComponent(key);
					var current = obj[key];

					if (i < keys.length - 1) obj = obj[key] = current || {};
					else if (typeOf(current) == 'array') current.push(value);
					else obj[key] = current != null ? [current, value] : value;
				});
			});

			return object;
		},

		cleanQueryString: function(method){
			return this.split('&').filter(function(val){
				var index = val.indexOf('='),
					key = index < 0 ? '' : val.substr(0, index),
					value = val.substr(index + 1);

				return method ? method.call(null, key, value) : (value || value === 0);
			}).join('&');
		}

	});

	})();

	/*
	---

	script: Form.Request.js

	name: Form.Request

	description: Handles the basic functionality of submitting a form and updating a dom element with the result.

	license: MIT-style license

	authors:
	  - Aaron Newton

	requires:
	  - Core/Request.HTML
	  - Class.Binds
	  - Class.Occlude
	  - Spinner
	  - String.QueryString
	  - Element.Delegation.Pseudo

	provides: [Form.Request]

	...
	*/

	if (!window.Form) window.Form = {};

	(function(){

	Form.Request = new Class({

		Binds: ['onSubmit', 'onFormValidate'],

		Implements: [Options, Events, Class.Occlude],

		options: {/*
			onFailure: function(){},
			onSuccess: function(){}, // aliased to onComplete,
			onSend: function(){}*/
			requestOptions: {
				evalScripts: true,
				useSpinner: true,
				emulation: false,
				link: 'ignore'
			},
			sendButtonClicked: true,
			extraData: {},
			resetForm: true
		},

		property: 'form.request',

		initialize: function(form, target, options){
			this.element = document.id(form);
			if (this.occlude()) return this.occluded;
			this.setOptions(options)
				.setTarget(target)
				.attach();
		},

		setTarget: function(target){
			this.target = document.id(target);
			if (!this.request){
				this.makeRequest();
			} else {
				this.request.setOptions({
					update: this.target
				});
			}
			return this;
		},

		toElement: function(){
			return this.element;
		},

		makeRequest: function(){
			var self = this;
			this.request = new Request.HTML(Object.merge({
				update: this.target,
				emulation: false,
				spinnerTarget: this.element,
				method: this.element.get('method') || 'post'
			}, this.options.requestOptions)).addEvents({
				success: function(tree, elements, html, javascript){
					['complete', 'success'].each(function(evt){
						self.fireEvent(evt, [self.target, tree, elements, html, javascript]);
					});
				},
				failure: function(){
					self.fireEvent('complete', arguments).fireEvent('failure', arguments);
				},
				exception: function(){
					self.fireEvent('failure', arguments);
				}
			});
			return this.attachReset();
		},

		attachReset: function(){
			if (!this.options.resetForm) return this;
			this.request.addEvent('success', function(){
				Function.attempt(function(){
					this.element.reset();
				}.bind(this));
				if (window.OverText) OverText.update();
			}.bind(this));
			return this;
		},

		attach: function(attach){
			var method = (attach != false) ? 'addEvent' : 'removeEvent';
			this.element[method]('click:relay(button, input[type=submit])', this.saveClickedButton.bind(this));

			var fv = this.element.retrieve('validator');
			if (fv) fv[method]('onFormValidate', this.onFormValidate);
			else this.element[method]('submit', this.onSubmit);

			return this;
		},

		detach: function(){
			return this.attach(false);
		},

		//public method
		enable: function(){
			return this.attach();
		},

		//public method
		disable: function(){
			return this.detach();
		},

		onFormValidate: function(valid, form, event){
			//if there's no event, then this wasn't a submit event
			if (!event) return;
			var fv = this.element.retrieve('validator');
			if (valid || (fv && !fv.options.stopOnFailure)){
				event.stop();
				this.send();
			}
		},

		onSubmit: function(event){
			var fv = this.element.retrieve('validator');
			if (fv){
				//form validator was created after Form.Request
				this.element.removeEvent('submit', this.onSubmit);
				fv.addEvent('onFormValidate', this.onFormValidate);
				fv.validate(event);
				return;
			}
			if (event) event.stop();
			this.send();
		},

		saveClickedButton: function(event, target){
			var targetName = target.get('name');
			if (!targetName || !this.options.sendButtonClicked) return;
			this.options.extraData[targetName] = target.get('value') || true;
			this.clickedCleaner = function(){
				delete this.options.extraData[targetName];
				this.clickedCleaner = function(){};
			}.bind(this);
		},

		clickedCleaner: function(){},

		send: function(){
			var str = this.element.toQueryString().trim(),
				data = Object.toQueryString(this.options.extraData);

			if (str) str += '&' + data;
			else str = data;

			this.fireEvent('send', [this.element, str.parseQueryString()]);
			this.request.send({
				data: str,
				url: this.options.requestOptions.url || this.element.get('action')
			});
			this.clickedCleaner();
			return this;
		}

	});

	Element.implement('formUpdate', function(update, options){
		var fq = this.retrieve('form.request');
		if (!fq){
			fq = new Form.Request(this, update, options);
		} else {
			if (update) fq.setTarget(update);
			if (options) fq.setOptions(options).makeRequest();
		}
		fq.send();
		return this;
	});

	})();

	/*
	---

	script: Fx.Reveal.js

	name: Fx.Reveal

	description: Defines Fx.Reveal, a class that shows and hides elements with a transition.

	license: MIT-style license

	authors:
	  - Aaron Newton

	requires:
	  - Core/Fx.Morph
	  - Element.Shortcuts
	  - Element.Measure

	provides: [Fx.Reveal]

	...
	*/

	(function(){


	var hideTheseOf = function(object){
		var hideThese = object.options.hideInputs;
		if (window.OverText){
			var otClasses = [null];
			OverText.each(function(ot){
				otClasses.include('.' + ot.options.labelClass);
			});
			if (otClasses) hideThese += otClasses.join(', ');
		}
		return (hideThese) ? object.element.getElements(hideThese) : null;
	};


	Fx.Reveal = new Class({

		Extends: Fx.Morph,

		options: {/*
			onShow: function(thisElement){},
			onHide: function(thisElement){},
			onComplete: function(thisElement){},
			heightOverride: null,
			widthOverride: null,*/
			link: 'cancel',
			styles: ['padding', 'border', 'margin'],
			transitionOpacity: 'opacity' in document.documentElement,
			mode: 'vertical',
			display: function(){
				return this.element.get('tag') != 'tr' ? 'block' : 'table-row';
			},
			opacity: 1,
			hideInputs: !('opacity' in document.documentElement) ? 'select, input, textarea, object, embed' : null
		},

		dissolve: function(){
			if (!this.hiding && !this.showing){
				if (this.element.getStyle('display') != 'none'){
					this.hiding = true;
					this.showing = false;
					this.hidden = true;
					this.cssText = this.element.style.cssText;

					var startStyles = this.element.getComputedSize({
						styles: this.options.styles,
						mode: this.options.mode
					});
					if (this.options.transitionOpacity) startStyles.opacity = this.options.opacity;

					var zero = {};
					Object.each(startStyles, function(style, name){
						zero[name] = [style, 0];
					});

					this.element.setStyles({
						display: Function.convert(this.options.display).call(this),
						overflow: 'hidden'
					});

					var hideThese = hideTheseOf(this);
					if (hideThese) hideThese.setStyle('visibility', 'hidden');

					this.$chain.unshift(function(){
						if (this.hidden){
							this.hiding = false;
							this.element.style.cssText = this.cssText;
							this.element.setStyle('display', 'none');
							if (hideThese) hideThese.setStyle('visibility', 'visible');
						}
						this.fireEvent('hide', this.element);
						this.callChain();
					}.bind(this));

					this.start(zero);
				} else {
					this.callChain.delay(10, this);
					this.fireEvent('complete', this.element);
					this.fireEvent('hide', this.element);
				}
			} else if (this.options.link == 'chain'){
				this.chain(this.dissolve.bind(this));
			} else if (this.options.link == 'cancel' && !this.hiding){
				this.cancel();
				this.dissolve();
			}
			return this;
		},

		reveal: function(){
			if (!this.showing && !this.hiding){
				if (this.element.getStyle('display') == 'none'){
					this.hiding = false;
					this.showing = true;
					this.hidden = false;
					this.cssText = this.element.style.cssText;

					var startStyles;
					this.element.measure(function(){
						startStyles = this.element.getComputedSize({
							styles: this.options.styles,
							mode: this.options.mode
						});
					}.bind(this));
					if (this.options.heightOverride != null) startStyles.height = this.options.heightOverride.toInt();
					if (this.options.widthOverride != null) startStyles.width = this.options.widthOverride.toInt();
					if (this.options.transitionOpacity){
						this.element.setStyle('opacity', 0);
						startStyles.opacity = this.options.opacity;
					}

					var zero = {
						height: 0,
						display: Function.convert(this.options.display).call(this)
					};
					Object.each(startStyles, function(style, name){
						zero[name] = 0;
					});
					zero.overflow = 'hidden';

					this.element.setStyles(zero);

					var hideThese = hideTheseOf(this);
					if (hideThese) hideThese.setStyle('visibility', 'hidden');

					this.$chain.unshift(function(){
						this.element.style.cssText = this.cssText;
						this.element.setStyle('display', Function.convert(this.options.display).call(this));
						if (!this.hidden) this.showing = false;
						if (hideThese) hideThese.setStyle('visibility', 'visible');
						this.callChain();
						this.fireEvent('show', this.element);
					}.bind(this));

					this.start(startStyles);
				} else {
					this.callChain();
					this.fireEvent('complete', this.element);
					this.fireEvent('show', this.element);
				}
			} else if (this.options.link == 'chain'){
				this.chain(this.reveal.bind(this));
			} else if (this.options.link == 'cancel' && !this.showing){
				this.cancel();
				this.reveal();
			}
			return this;
		},

		toggle: function(){
			if (this.element.getStyle('display') == 'none'){
				this.reveal();
			} else {
				this.dissolve();
			}
			return this;
		},

		cancel: function(){
			this.parent.apply(this, arguments);
			if (this.cssText != null) this.element.style.cssText = this.cssText;
			this.hiding = false;
			this.showing = false;
			return this;
		}

	});

	Element.Properties.reveal = {

		set: function(options){
			this.get('reveal').cancel().setOptions(options);
			return this;
		},

		get: function(){
			var reveal = this.retrieve('reveal');
			if (!reveal){
				reveal = new Fx.Reveal(this);
				this.store('reveal', reveal);
			}
			return reveal;
		}

	};

	Element.Properties.dissolve = Element.Properties.reveal;

	Element.implement({

		reveal: function(options){
			this.get('reveal').setOptions(options).reveal();
			return this;
		},

		dissolve: function(options){
			this.get('reveal').setOptions(options).dissolve();
			return this;
		},

		nix: function(options){
			var params = Array.link(arguments, {destroy: Type.isBoolean, options: Type.isObject});
			this.get('reveal').setOptions(options).dissolve().chain(function(){
				this[params.destroy ? 'destroy' : 'dispose']();
			}.bind(this));
			return this;
		},

		wink: function(){
			var params = Array.link(arguments, {duration: Type.isNumber, options: Type.isObject});
			var reveal = this.get('reveal').setOptions(params.options);
			reveal.reveal().chain(function(){
				(function(){
					reveal.dissolve();
				}).delay(params.duration || 2000);
			});
		}

	});

	})();

	/*
	---

	script: Form.Request.Append.js

	name: Form.Request.Append

	description: Handles the basic functionality of submitting a form and updating a dom element with the result. The result is appended to the DOM element instead of replacing its contents.

	license: MIT-style license

	authors:
	  - Aaron Newton

	requires:
	  - Form.Request
	  - Fx.Reveal
	  - Elements.from

	provides: [Form.Request.Append]

	...
	*/

	Form.Request.Append = new Class({

		Extends: Form.Request,

		options: {
			//onBeforeEffect: function(){},
			useReveal: true,
			revealOptions: {},
			inject: 'bottom'
		},

		makeRequest: function(){
			this.request = new Request.HTML(Object.merge({
				url: this.element.get('action'),
				method: this.element.get('method') || 'post',
				spinnerTarget: this.element
			}, this.options.requestOptions, {
				evalScripts: false
			})).addEvents({
				success: function(tree, elements, html, javascript){
					var container;
					var kids = Elements.from(html);
					if (kids.length == 1){
						container = kids[0];
					} else {
						container = new Element('div', {
							styles: {
								display: 'none'
							}
						}).adopt(kids);
					}
					container.inject(this.target, this.options.inject);
					if (this.options.requestOptions.evalScripts) Browser.exec(javascript);
					this.fireEvent('beforeEffect', container);
					var finish = function(){
						this.fireEvent('success', [container, this.target, tree, elements, html, javascript]);
					}.bind(this);
					if (this.options.useReveal){
						container.set('reveal', this.options.revealOptions).get('reveal').chain(finish);
						container.reveal();
					} else {
						finish();
					}
				}.bind(this),
				failure: function(xhr){
					this.fireEvent('failure', xhr);
				}.bind(this)
			});
			this.attachReset();
		}

	});

	/*
	---

	script: Object.Extras.js

	name: Object.Extras

	description: Extra Object generics, like getFromPath which allows a path notation to child elements.

	license: MIT-style license

	authors:
	  - Aaron Newton

	requires:
	  - Core/Object
	  - MooTools.More

	provides: [Object.Extras]

	...
	*/

	(function(){

	var defined = function(value){
		return value != null;
	};

	var hasOwnProperty = Object.prototype.hasOwnProperty;

	Object.extend({

		getFromPath: function(source, parts){
			if (typeof parts == 'string') parts = parts.split('.');
			for (var i = 0, l = parts.length; i < l; i++){
				if (hasOwnProperty.call(source, parts[i])) source = source[parts[i]];
				else return null;
			}
			return source;
		},

		cleanValues: function(object, method){
			method = method || defined;
			for (var key in object) if (!method(object[key])){
				delete object[key];
			}
			return object;
		},

		erase: function(object, key){
			if (hasOwnProperty.call(object, key)) delete object[key];
			return object;
		},

		run: function(object){
			var args = Array.slice(arguments, 1);
			for (var key in object) if (object[key].apply){
				object[key].apply(object, args);
			}
			return object;
		}

	});

	})();

	/*
	---

	script: Locale.js

	name: Locale

	description: Provides methods for localization.

	license: MIT-style license

	authors:
	  - Aaron Newton
	  - Arian Stolwijk

	requires:
	  - Core/Events
	  - Object.Extras
	  - MooTools.More

	provides: [Locale, Lang]

	...
	*/

	(function(){

	var current = null,
		locales = {},
		inherits = {};

	var getSet = function(set){
		if (instanceOf(set, Locale.Set)) return set;
		else return locales[set];
	};

	var Locale = this.Locale = {

		define: function(locale, set, key, value){
			var name;
			if (instanceOf(locale, Locale.Set)){
				name = locale.name;
				if (name) locales[name] = locale;
			} else {
				name = locale;
				if (!locales[name]) locales[name] = new Locale.Set(name);
				locale = locales[name];
			}

			if (set) locale.define(set, key, value);

			

			if (!current) current = locale;

			return locale;
		},

		use: function(locale){
			locale = getSet(locale);

			if (locale){
				current = locale;

				this.fireEvent('change', locale);

				
			}

			return this;
		},

		getCurrent: function(){
			return current;
		},

		get: function(key, args){
			return (current) ? current.get(key, args) : '';
		},

		inherit: function(locale, inherits, set){
			locale = getSet(locale);

			if (locale) locale.inherit(inherits, set);
			return this;
		},

		list: function(){
			return Object.keys(locales);
		}

	};

	Object.append(Locale, new Events);

	Locale.Set = new Class({

		sets: {},

		inherits: {
			locales: [],
			sets: {}
		},

		initialize: function(name){
			this.name = name || '';
		},

		define: function(set, key, value){
			var defineData = this.sets[set];
			if (!defineData) defineData = {};

			if (key){
				if (typeOf(key) == 'object') defineData = Object.merge(defineData, key);
				else defineData[key] = value;
			}
			this.sets[set] = defineData;

			return this;
		},

		get: function(key, args, _base){
			var value = Object.getFromPath(this.sets, key);
			if (value != null){
				var type = typeOf(value);
				if (type == 'function') value = value.apply(null, Array.convert(args));
				else if (type == 'object') value = Object.clone(value);
				return value;
			}

			// get value of inherited locales
			var index = key.indexOf('.'),
				set = index < 0 ? key : key.substr(0, index),
				names = (this.inherits.sets[set] || []).combine(this.inherits.locales).include('en-US');
			if (!_base) _base = [];

			for (var i = 0, l = names.length; i < l; i++){
				if (_base.contains(names[i])) continue;
				_base.include(names[i]);

				var locale = locales[names[i]];
				if (!locale) continue;

				value = locale.get(key, args, _base);
				if (value != null) return value;
			}

			return '';
		},

		inherit: function(names, set){
			names = Array.convert(names);

			if (set && !this.inherits.sets[set]) this.inherits.sets[set] = [];

			var l = names.length;
			while (l--) (set ? this.inherits.sets[set] : this.inherits.locales).unshift(names[l]);

			return this;
		}

	});



	})();

	/*
	---

	name: Locale.en-US.Date

	description: Date messages for US English.

	license: MIT-style license

	authors:
	  - Aaron Newton

	requires:
	  - Locale

	provides: [Locale.en-US.Date]

	...
	*/

	Locale.define('en-US', 'Date', {

		months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
		months_abbr: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
		days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
		days_abbr: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],

		// Culture's date order: MM/DD/YYYY
		dateOrder: ['month', 'date', 'year'],
		shortDate: '%m/%d/%Y',
		shortTime: '%I:%M%p',
		AM: 'AM',
		PM: 'PM',
		firstDayOfWeek: 0,

		// Date.Extras
		ordinal: function(dayOfMonth){
			// 1st, 2nd, 3rd, etc.
			return (dayOfMonth > 3 && dayOfMonth < 21) ? 'th' : ['th', 'st', 'nd', 'rd', 'th'][Math.min(dayOfMonth % 10, 4)];
		},

		lessThanMinuteAgo: 'less than a minute ago',
		minuteAgo: 'about a minute ago',
		minutesAgo: '{delta} minutes ago',
		hourAgo: 'about an hour ago',
		hoursAgo: 'about {delta} hours ago',
		dayAgo: '1 day ago',
		daysAgo: '{delta} days ago',
		weekAgo: '1 week ago',
		weeksAgo: '{delta} weeks ago',
		monthAgo: '1 month ago',
		monthsAgo: '{delta} months ago',
		yearAgo: '1 year ago',
		yearsAgo: '{delta} years ago',

		lessThanMinuteUntil: 'less than a minute from now',
		minuteUntil: 'about a minute from now',
		minutesUntil: '{delta} minutes from now',
		hourUntil: 'about an hour from now',
		hoursUntil: 'about {delta} hours from now',
		dayUntil: '1 day from now',
		daysUntil: '{delta} days from now',
		weekUntil: '1 week from now',
		weeksUntil: '{delta} weeks from now',
		monthUntil: '1 month from now',
		monthsUntil: '{delta} months from now',
		yearUntil: '1 year from now',
		yearsUntil: '{delta} years from now'

	});

	/*
	---

	script: Date.js

	name: Date

	description: Extends the Date native object to include methods useful in managing dates.

	license: MIT-style license

	authors:
	  - Aaron Newton
	  - Nicholas Barthelemy - https://svn.nbarthelemy.com/date-js/
	  - Harald Kirshner - mail [at] digitarald.de; http://digitarald.de
	  - Scott Kyle - scott [at] appden.com; http://appden.com

	requires:
	  - Core/Array
	  - Core/String
	  - Core/Number
	  - MooTools.More
	  - Locale
	  - Locale.en-US.Date

	provides: [Date]

	...
	*/

	(function(){

	var Date = this.Date;

	var DateMethods = Date.Methods = {
		ms: 'Milliseconds',
		year: 'FullYear',
		min: 'Minutes',
		mo: 'Month',
		sec: 'Seconds',
		hr: 'Hours'
	};

	[
		'Date', 'Day', 'FullYear', 'Hours', 'Milliseconds', 'Minutes', 'Month', 'Seconds', 'Time', 'TimezoneOffset',
		'Week', 'Timezone', 'GMTOffset', 'DayOfYear', 'LastMonth', 'LastDayOfMonth', 'UTCDate', 'UTCDay', 'UTCFullYear',
		'AMPM', 'Ordinal', 'UTCHours', 'UTCMilliseconds', 'UTCMinutes', 'UTCMonth', 'UTCSeconds', 'UTCMilliseconds'
	].each(function(method){
		Date.Methods[method.toLowerCase()] = method;
	});

	var pad = function(n, digits, string){
		if (digits == 1) return n;
		return n < Math.pow(10, digits - 1) ? (string || '0') + pad(n, digits - 1, string) : n;
	};

	Date.implement({

		set: function(prop, value){
			prop = prop.toLowerCase();
			var method = DateMethods[prop] && 'set' + DateMethods[prop];
			if (method && this[method]) this[method](value);
			return this;
		}.overloadSetter(),

		get: function(prop){
			prop = prop.toLowerCase();
			var method = DateMethods[prop] && 'get' + DateMethods[prop];
			if (method && this[method]) return this[method]();
			return null;
		}.overloadGetter(),

		clone: function(){
			return new Date(this.get('time'));
		},

		increment: function(interval, times){
			interval = interval || 'day';
			times = times != null ? times : 1;

			switch (interval){
				case 'year':
					return this.increment('month', times * 12);
				case 'month':
					var d = this.get('date');
					this.set('date', 1).set('mo', this.get('mo') + times);
					return this.set('date', d.min(this.get('lastdayofmonth')));
				case 'week':
					return this.increment('day', times * 7);
				case 'day':
					return this.set('date', this.get('date') + times);
			}

			if (!Date.units[interval]) throw new Error(interval + ' is not a supported interval');

			return this.set('time', this.get('time') + times * Date.units[interval]());
		},

		decrement: function(interval, times){
			return this.increment(interval, -1 * (times != null ? times : 1));
		},

		isLeapYear: function(){
			return Date.isLeapYear(this.get('year'));
		},

		clearTime: function(){
			return this.set({hr: 0, min: 0, sec: 0, ms: 0});
		},

		diff: function(date, resolution){
			if (typeOf(date) == 'string') date = Date.parse(date);

			return ((date - this) / Date.units[resolution || 'day'](3, 3)).round(); // non-leap year, 30-day month
		},

		getLastDayOfMonth: function(){
			return Date.daysInMonth(this.get('mo'), this.get('year'));
		},

		getDayOfYear: function(){
			return (Date.UTC(this.get('year'), this.get('mo'), this.get('date') + 1)
				- Date.UTC(this.get('year'), 0, 1)) / Date.units.day();
		},

		setDay: function(day, firstDayOfWeek){
			if (firstDayOfWeek == null){
				firstDayOfWeek = Date.getMsg('firstDayOfWeek');
				if (firstDayOfWeek === '') firstDayOfWeek = 1;
			}

			day = (7 + Date.parseDay(day, true) - firstDayOfWeek) % 7;
			var currentDay = (7 + this.get('day') - firstDayOfWeek) % 7;

			return this.increment('day', day - currentDay);
		},

		getWeek: function(firstDayOfWeek){
			if (firstDayOfWeek == null){
				firstDayOfWeek = Date.getMsg('firstDayOfWeek');
				if (firstDayOfWeek === '') firstDayOfWeek = 1;
			}

			var date = this,
				dayOfWeek = (7 + date.get('day') - firstDayOfWeek) % 7,
				dividend = 0,
				firstDayOfYear;

			if (firstDayOfWeek == 1){
				// ISO-8601, week belongs to year that has the most days of the week (i.e. has the thursday of the week)
				var month = date.get('month'),
					startOfWeek = date.get('date') - dayOfWeek;

				if (month == 11 && startOfWeek > 28) return 1; // Week 1 of next year

				if (month == 0 && startOfWeek < -2){
					// Use a date from last year to determine the week
					date = new Date(date).decrement('day', dayOfWeek);
					dayOfWeek = 0;
				}

				firstDayOfYear = new Date(date.get('year'), 0, 1).get('day') || 7;
				if (firstDayOfYear > 4) dividend = -7; // First week of the year is not week 1
			} else {
				// In other cultures the first week of the year is always week 1 and the last week always 53 or 54.
				// Days in the same week can have a different weeknumber if the week spreads across two years.
				firstDayOfYear = new Date(date.get('year'), 0, 1).get('day');
			}

			dividend += date.get('dayofyear');
			dividend += 6 - dayOfWeek; // Add days so we calculate the current date's week as a full week
			dividend += (7 + firstDayOfYear - firstDayOfWeek) % 7; // Make up for first week of the year not being a full week

			return (dividend / 7);
		},

		getOrdinal: function(day){
			return Date.getMsg('ordinal', day || this.get('date'));
		},

		getTimezone: function(){
			return this.toString()
				.replace(/^.*? ([A-Z]{3}).[0-9]{4}.*$/, '$1')
				.replace(/^.*?\(([A-Z])[a-z]+ ([A-Z])[a-z]+ ([A-Z])[a-z]+\)$/, '$1$2$3');
		},

		getGMTOffset: function(){
			var off = this.get('timezoneOffset');
			return ((off > 0) ? '-' : '+') + pad((off.abs() / 60).floor(), 2) + pad(off % 60, 2);
		},

		setAMPM: function(ampm){
			ampm = ampm.toUpperCase();
			var hr = this.get('hr');
			if (hr > 11 && ampm == 'AM') return this.decrement('hour', 12);
			else if (hr < 12 && ampm == 'PM') return this.increment('hour', 12);
			return this;
		},

		getAMPM: function(){
			return (this.get('hr') < 12) ? 'AM' : 'PM';
		},

		parse: function(str){
			this.set('time', Date.parse(str));
			return this;
		},

		isValid: function(date){
			if (!date) date = this;
			return typeOf(date) == 'date' && !isNaN(date.valueOf());
		},

		format: function(format){
			if (!this.isValid()) return 'invalid date';

			if (!format) format = '%x %X';
			if (typeof format == 'string') format = formats[format.toLowerCase()] || format;
			if (typeof format == 'function') return format(this);

			var d = this;
			return format.replace(/%([a-z%])/gi,
				function($0, $1){
					switch ($1){
						case 'a': return Date.getMsg('days_abbr')[d.get('day')];
						case 'A': return Date.getMsg('days')[d.get('day')];
						case 'b': return Date.getMsg('months_abbr')[d.get('month')];
						case 'B': return Date.getMsg('months')[d.get('month')];
						case 'c': return d.format('%a %b %d %H:%M:%S %Y');
						case 'd': return pad(d.get('date'), 2);
						case 'e': return pad(d.get('date'), 2, ' ');
						case 'H': return pad(d.get('hr'), 2);
						case 'I': return pad((d.get('hr') % 12) || 12, 2);
						case 'j': return pad(d.get('dayofyear'), 3);
						case 'k': return pad(d.get('hr'), 2, ' ');
						case 'l': return pad((d.get('hr') % 12) || 12, 2, ' ');
						case 'L': return pad(d.get('ms'), 3);
						case 'm': return pad((d.get('mo') + 1), 2);
						case 'M': return pad(d.get('min'), 2);
						case 'o': return d.get('ordinal');
						case 'p': return Date.getMsg(d.get('ampm'));
						case 's': return Math.round(d / 1000);
						case 'S': return pad(d.get('seconds'), 2);
						case 'T': return d.format('%H:%M:%S');
						case 'U': return pad(d.get('week'), 2);
						case 'w': return d.get('day');
						case 'x': return d.format(Date.getMsg('shortDate'));
						case 'X': return d.format(Date.getMsg('shortTime'));
						case 'y': return d.get('year').toString().substr(2);
						case 'Y': return d.get('year');
						case 'z': return d.get('GMTOffset');
						case 'Z': return d.get('Timezone');
					}
					return $1;
				}
			);
		},

		toISOString: function(){
			return this.format('iso8601');
		}

	}).alias({
		toJSON: 'toISOString',
		compare: 'diff',
		strftime: 'format'
	});

	// The day and month abbreviations are standardized, so we cannot use simply %a and %b because they will get localized
	var rfcDayAbbr = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
		rfcMonthAbbr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

	var formats = {
		db: '%Y-%m-%d %H:%M:%S',
		compact: '%Y%m%dT%H%M%S',
		'short': '%d %b %H:%M',
		'long': '%B %d, %Y %H:%M',
		rfc822: function(date){
			return rfcDayAbbr[date.get('day')] + date.format(', %d ') + rfcMonthAbbr[date.get('month')] + date.format(' %Y %H:%M:%S %Z');
		},
		rfc2822: function(date){
			return rfcDayAbbr[date.get('day')] + date.format(', %d ') + rfcMonthAbbr[date.get('month')] + date.format(' %Y %H:%M:%S %z');
		},
		iso8601: function(date){
			return (
				date.getUTCFullYear() + '-' +
				pad(date.getUTCMonth() + 1, 2) + '-' +
				pad(date.getUTCDate(), 2) + 'T' +
				pad(date.getUTCHours(), 2) + ':' +
				pad(date.getUTCMinutes(), 2) + ':' +
				pad(date.getUTCSeconds(), 2) + '.' +
				pad(date.getUTCMilliseconds(), 3) + 'Z'
			);
		}
	};

	var parsePatterns = [],
		nativeParse = Date.parse;

	var parseWord = function(type, word, num){
		var ret = -1,
			translated = Date.getMsg(type + 's');
		switch (typeOf(word)){
			case 'object':
				ret = translated[word.get(type)];
				break;
			case 'number':
				ret = translated[word];
				if (!ret) throw new Error('Invalid ' + type + ' index: ' + word);
				break;
			case 'string':
				var match = translated.filter(function(name){
					return this.test(name);
				}, new RegExp('^' + word, 'i'));
				if (!match.length) throw new Error('Invalid ' + type + ' string');
				if (match.length > 1) throw new Error('Ambiguous ' + type);
				ret = match[0];
		}

		return (num) ? translated.indexOf(ret) : ret;
	};

	var startCentury = 1900,
		startYear = 70;

	Date.extend({

		getMsg: function(key, args){
			return Locale.get('Date.' + key, args);
		},

		units: {
			ms: Function.convert(1),
			second: Function.convert(1000),
			minute: Function.convert(60000),
			hour: Function.convert(3600000),
			day: Function.convert(86400000),
			week: Function.convert(608400000),
			month: function(month, year){
				var d = new Date;
				return Date.daysInMonth(month != null ? month : d.get('mo'), year != null ? year : d.get('year')) * 86400000;
			},
			year: function(year){
				year = year || new Date().get('year');
				return Date.isLeapYear(year) ? 31622400000 : 31536000000;
			}
		},

		daysInMonth: function(month, year){
			return [31, Date.isLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
		},

		isLeapYear: function(year){
			return ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);
		},

		parse: function(from){
			var t = typeOf(from);
			if (t == 'number') return new Date(from);
			if (t != 'string') return from;
			from = from.clean();
			if (!from.length) return null;

			var parsed;
			parsePatterns.some(function(pattern){
				var bits = pattern.re.exec(from);
				return (bits) ? (parsed = pattern.handler(bits)) : false;
			});

			if (!(parsed && parsed.isValid())){
				parsed = new Date(nativeParse(from));
				if (!(parsed && parsed.isValid())) parsed = new Date(from.toInt());
			}
			return parsed;
		},

		parseDay: function(day, num){
			return parseWord('day', day, num);
		},

		parseMonth: function(month, num){
			return parseWord('month', month, num);
		},

		parseUTC: function(value){
			var localDate = new Date(value);
			var utcSeconds = Date.UTC(
				localDate.get('year'),
				localDate.get('mo'),
				localDate.get('date'),
				localDate.get('hr'),
				localDate.get('min'),
				localDate.get('sec'),
				localDate.get('ms')
			);
			return new Date(utcSeconds);
		},

		orderIndex: function(unit){
			return Date.getMsg('dateOrder').indexOf(unit) + 1;
		},

		defineFormat: function(name, format){
			formats[name] = format;
			return this;
		},

		

		defineParser: function(pattern){
			parsePatterns.push((pattern.re && pattern.handler) ? pattern : build(pattern));
			return this;
		},

		defineParsers: function(){
			Array.flatten(arguments).each(Date.defineParser);
			return this;
		},

		define2DigitYearStart: function(year){
			startYear = year % 100;
			startCentury = year - startYear;
			return this;
		}

	}).extend({
		defineFormats: Date.defineFormat.overloadSetter()
	});

	var regexOf = function(type){
		return new RegExp('(?:' + Date.getMsg(type).map(function(name){
			return name.substr(0, 3);
		}).join('|') + ')[a-z]*');
	};

	var replacers = function(key){
		switch (key){
			case 'T':
				return '%H:%M:%S';
			case 'x': // iso8601 covers yyyy-mm-dd, so just check if month is first
				return ((Date.orderIndex('month') == 1) ? '%m[-./]%d' : '%d[-./]%m') + '([-./]%y)?';
			case 'X':
				return '%H([.:]%M)?([.:]%S([.:]%s)?)? ?%p? ?%z?';
		}
		return null;
	};

	var keys = {
		d: /[0-2]?[0-9]|3[01]/,
		H: /[01]?[0-9]|2[0-3]/,
		I: /0?[1-9]|1[0-2]/,
		M: /[0-5]?\d/,
		s: /\d+/,
		o: /[a-z]*/,
		p: /[ap]\.?m\.?/,
		y: /\d{2}|\d{4}/,
		Y: /\d{4}/,
		z: /Z|[+-]\d{2}(?::?\d{2})?/
	};

	keys.m = keys.I;
	keys.S = keys.M;

	var currentLanguage;

	var recompile = function(language){
		currentLanguage = language;

		keys.a = keys.A = regexOf('days');
		keys.b = keys.B = regexOf('months');

		parsePatterns.each(function(pattern, i){
			if (pattern.format) parsePatterns[i] = build(pattern.format);
		});
	};

	var build = function(format){
		if (!currentLanguage) return {format: format};

		var parsed = [];
		var re = (format.source || format) // allow format to be regex
		.replace(/%([a-z])/gi,
			function($0, $1){
				return replacers($1) || $0;
			}
		).replace(/\((?!\?)/g, '(?:') // make all groups non-capturing
		.replace(/ (?!\?|\*)/g, ',? ') // be forgiving with spaces and commas
		.replace(/%([a-z%])/gi,
			function($0, $1){
				var p = keys[$1];
				if (!p) return $1;
				parsed.push($1);
				return '(' + p.source + ')';
			}
		).replace(/\[a-z\]/gi, '[a-z\\u00c0-\\uffff;\&]'); // handle unicode words

		return {
			format: format,
			re: new RegExp('^' + re + '$', 'i'),
			handler: function(bits){
				bits = bits.slice(1).associate(parsed);
				var date = new Date().clearTime(),
					year = bits.y || bits.Y;

				if (year != null) handle.call(date, 'y', year); // need to start in the right year
				if ('d' in bits) handle.call(date, 'd', 1);
				if ('m' in bits || bits.b || bits.B) handle.call(date, 'm', 1);

				for (var key in bits) handle.call(date, key, bits[key]);
				return date;
			}
		};
	};

	var handle = function(key, value){
		if (!value) return this;

		switch (key){
			case 'a': case 'A': return this.set('day', Date.parseDay(value, true));
			case 'b': case 'B': return this.set('mo', Date.parseMonth(value, true));
			case 'd': return this.set('date', value);
			case 'H': case 'I': return this.set('hr', value);
			case 'm': return this.set('mo', value - 1);
			case 'M': return this.set('min', value);
			case 'p': return this.set('ampm', value.replace(/\./g, ''));
			case 'S': return this.set('sec', value);
			case 's': return this.set('ms', ('0.' + value) * 1000);
			case 'w': return this.set('day', value);
			case 'Y': return this.set('year', value);
			case 'y':
				value = +value;
				if (value < 100) value += startCentury + (value < startYear ? 100 : 0);
				return this.set('year', value);
			case 'z':
				if (value == 'Z') value = '+00';
				var offset = value.match(/([+-])(\d{2}):?(\d{2})?/);
				offset = (offset[1] + '1') * (offset[2] * 60 + (+offset[3] || 0)) + this.getTimezoneOffset();
				return this.set('time', this - offset * 60000);
		}

		return this;
	};

	Date.defineParsers(
		'%Y([-./]%m([-./]%d((T| )%X)?)?)?', // "1999-12-31", "1999-12-31 11:59pm", "1999-12-31 23:59:59", ISO8601
		'%Y%m%d(T%H(%M%S?)?)?', // "19991231", "19991231T1159", compact
		'%x( %X)?', // "12/31", "12.31.99", "12-31-1999", "12/31/2008 11:59 PM"
		'%d%o( %b( %Y)?)?( %X)?', // "31st", "31st December", "31 Dec 1999", "31 Dec 1999 11:59pm"
		'%b( %d%o)?( %Y)?( %X)?', // Same as above with month and day switched
		'%Y %b( %d%o( %X)?)?', // Same as above with year coming first
		'%o %b %d %X %z %Y', // "Thu Oct 22 08:11:23 +0000 2009"
		'%T', // %H:%M:%S
		'%H:%M( ?%p)?' // "11:05pm", "11:05 am" and "11:05"
	);

	Locale.addEvent('change', function(language){
		if (Locale.get('Date')) recompile(language);
	}).fireEvent('change', Locale.getCurrent());

	})();

	/*
	---

	name: Locale.en-US.Form.Validator

	description: Form Validator messages for English.

	license: MIT-style license

	authors:
	  - Aaron Newton

	requires:
	  - Locale

	provides: [Locale.en-US.Form.Validator]

	...
	*/

	Locale.define('en-US', 'FormValidator', {

		required: 'This field is required.',
		length: 'Please enter {length} characters (you entered {elLength} characters)',
		minLength: 'Please enter at least {minLength} characters (you entered {length} characters).',
		maxLength: 'Please enter no more than {maxLength} characters (you entered {length} characters).',
		integer: 'Please enter an integer in this field. Numbers with decimals (e.g. 1.25) are not permitted.',
		numeric: 'Please enter only numeric values in this field (i.e. "1" or "1.1" or "-1" or "-1.1").',
		digits: 'Please use numbers and punctuation only in this field (for example, a phone number with dashes or dots is permitted).',
		alpha: 'Please use only letters (a-z) within this field. No spaces or other characters are allowed.',
		alphanum: 'Please use only letters (a-z) or numbers (0-9) in this field. No spaces or other characters are allowed.',
		dateSuchAs: 'Please enter a valid date such as {date}',
		dateInFormatMDY: 'Please enter a valid date such as MM/DD/YYYY (i.e. "12/31/1999")',
		email: 'Please enter a valid email address. For example "fred@domain.com".',
		url: 'Please enter a valid URL such as http://www.example.com.',
		currencyDollar: 'Please enter a valid $ amount. For example $100.00 .',
		oneRequired: 'Please enter something for at least one of these inputs.',
		errorPrefix: 'Error: ',
		warningPrefix: 'Warning: ',

		// Form.Validator.Extras
		noSpace: 'There can be no spaces in this input.',
		reqChkByNode: 'No items are selected.',
		requiredChk: 'This field is required.',
		reqChkByName: 'Please select a {label}.',
		match: 'This field needs to match the {matchName} field',
		startDate: 'the start date',
		endDate: 'the end date',
		currentDate: 'the current date',
		afterDate: 'The date should be the same or after {label}.',
		beforeDate: 'The date should be the same or before {label}.',
		startMonth: 'Please select a start month',
		sameMonth: 'These two dates must be in the same month - you must change one or the other.',
		creditcard: 'The credit card number entered is invalid. Please check the number and try again. {length} digits entered.'

	});

	/*
	---

	script: Form.Validator.js

	name: Form.Validator

	description: A css-class based form validation system.

	license: MIT-style license

	authors:
	  - Aaron Newton

	requires:
	  - Core/Options
	  - Core/Events
	  - Core/Element.Delegation
	  - Core/Slick.Finder
	  - Core/Element.Event
	  - Core/Element.Style
	  - Core/JSON
	  - Locale
	  - Class.Binds
	  - Date
	  - Element.Forms
	  - Locale.en-US.Form.Validator
	  - Element.Shortcuts

	provides: [Form.Validator, InputValidator, FormValidator.BaseValidators]

	...
	*/
	if (!window.Form) window.Form = {};

	var InputValidator = this.InputValidator = new Class({

		Implements: [Options],

		options: {
			errorMsg: 'Validation failed.',
			test: Function.convert(true)
		},

		initialize: function(className, options){
			this.setOptions(options);
			this.className = className;
		},

		test: function(field, props){
			field = document.id(field);
			return (field) ? this.options.test(field, props || this.getProps(field)) : false;
		},

		getError: function(field, props){
			field = document.id(field);
			var err = this.options.errorMsg;
			if (typeOf(err) == 'function') err = err(field, props || this.getProps(field));
			return err;
		},

		getProps: function(field){
			field = document.id(field);
			return (field) ? field.get('validatorProps') : {};
		}

	});

	Element.Properties.validators = {

		get: function(){
			return (this.get('data-validators') || this.className).clean().replace(/'(\\.|[^'])*'|"(\\.|[^"])*"/g, function(match){
				return match.replace(' ', '\\x20');
			}).split(' ');
		}

	};

	Element.Properties.validatorProps = {

		set: function(props){
			return this.eliminate('$moo:validatorProps').store('$moo:validatorProps', props);
		},

		get: function(props){
			if (props) this.set(props);
			if (this.retrieve('$moo:validatorProps')) return this.retrieve('$moo:validatorProps');
			if (this.getProperty('data-validator-properties') || this.getProperty('validatorProps')){
				try {
					this.store('$moo:validatorProps', JSON.decode(this.getProperty('validatorProps') || this.getProperty('data-validator-properties'), false));
				} catch (e){
					return {};
				}
			} else {
				var vals = this.get('validators').filter(function(cls){
					return cls.test(':');
				});
				if (!vals.length){
					this.store('$moo:validatorProps', {});
				} else {
					props = {};
					vals.each(function(cls){
						var split = cls.split(':');
						if (split[1]){
							try {
								props[split[0]] = JSON.decode(split[1], false);
							} catch (e){}
						}
					});
					this.store('$moo:validatorProps', props);
				}
			}
			return this.retrieve('$moo:validatorProps');
		}

	};

	Form.Validator = new Class({

		Implements: [Options, Events],

		options: {/*
			onFormValidate: function(isValid, form, event){},
			onElementValidate: function(isValid, field, className, warn){},
			onElementPass: function(field){},
			onElementFail: function(field, validatorsFailed){}, */
			fieldSelectors: 'input, select, textarea',
			ignoreHidden: true,
			ignoreDisabled: true,
			useTitles: false,
			evaluateOnSubmit: true,
			evaluateFieldsOnBlur: true,
			evaluateFieldsOnChange: true,
			serial: true,
			stopOnFailure: true,
			warningPrefix: function(){
				return Form.Validator.getMsg('warningPrefix') || 'Warning: ';
			},
			errorPrefix: function(){
				return Form.Validator.getMsg('errorPrefix') || 'Error: ';
			}
		},

		initialize: function(form, options){
			this.setOptions(options);
			this.element = document.id(form);
			this.warningPrefix = Function.convert(this.options.warningPrefix)();
			this.errorPrefix = Function.convert(this.options.errorPrefix)();
			this._bound = {
				onSubmit: this.onSubmit.bind(this),
				blurOrChange: function(event, field){
					this.validationMonitor(field, true);
				}.bind(this)
			};
			this.enable();
		},

		toElement: function(){
			return this.element;
		},

		getFields: function(){
			return (this.fields = this.element.getElements(this.options.fieldSelectors));
		},

		enable: function(){
			this.element.store('validator', this);
			if (this.options.evaluateOnSubmit) this.element.addEvent('submit', this._bound.onSubmit);
			if (this.options.evaluateFieldsOnBlur){
				this.element.addEvent('blur:relay(input,select,textarea)', this._bound.blurOrChange);
			}
			if (this.options.evaluateFieldsOnChange){
				this.element.addEvent('change:relay(input,select,textarea)', this._bound.blurOrChange);
			}
		},

		disable: function(){
			this.element.eliminate('validator');
			this.element.removeEvents({
				submit: this._bound.onSubmit,
				'blur:relay(input,select,textarea)': this._bound.blurOrChange,
				'change:relay(input,select,textarea)': this._bound.blurOrChange
			});
		},

		validationMonitor: function(){
			clearTimeout(this.timer);
			this.timer = this.validateField.delay(50, this, arguments);
		},

		onSubmit: function(event){
			if (this.validate(event)) this.reset();
		},

		reset: function(){
			this.getFields().each(this.resetField, this);
			return this;
		},

		validate: function(event){
			var result = this.getFields().map(function(field){
				return this.validateField(field, true);
			}, this).every(function(v){
				return v;
			});
			this.fireEvent('formValidate', [result, this.element, event]);
			if (this.options.stopOnFailure && !result && event) event.preventDefault();
			return result;
		},

		validateField: function(field, force){
			if (this.paused) return true;
			field = document.id(field);
			var passed = !field.hasClass('validation-failed');
			var failed, warned;
			if (this.options.serial && !force){
				failed = this.element.getElement('.validation-failed');
				warned = this.element.getElement('.warning');
			}
			if (field && (!failed || force || field.hasClass('validation-failed') || (failed && !this.options.serial))){
				var validationTypes = field.get('validators');
				var validators = validationTypes.some(function(cn){
					return this.getValidator(cn);
				}, this);
				var validatorsFailed = [];
				validationTypes.each(function(className){
					if (className && !this.test(className, field)) validatorsFailed.include(className);
				}, this);
				passed = validatorsFailed.length === 0;
				if (validators && !this.hasValidator(field, 'warnOnly')){
					if (passed){
						field.addClass('validation-passed').removeClass('validation-failed');
						this.fireEvent('elementPass', [field]);
					} else {
						field.addClass('validation-failed').removeClass('validation-passed');
						this.fireEvent('elementFail', [field, validatorsFailed]);
					}
				}
				if (!warned){
					var warnings = validationTypes.some(function(cn){
						if (cn.test('^warn'))
							return this.getValidator(cn.replace(/^warn-/,''));
						else return null;
					}, this);
					field.removeClass('warning');
					var warnResult = validationTypes.map(function(cn){
						if (cn.test('^warn'))
							return this.test(cn.replace(/^warn-/,''), field, true);
						else return null;
					}, this);
				}
			}
			return passed;
		},

		test: function(className, field, warn){
			field = document.id(field);
			if ((this.options.ignoreHidden && !field.isVisible()) || (this.options.ignoreDisabled && field.get('disabled'))) return true;
			var validator = this.getValidator(className);
			if (warn != null) warn = false;
			if (this.hasValidator(field, 'warnOnly')) warn = true;
			var isValid = field.hasClass('ignoreValidation') || (validator ? validator.test(field) : true);
			if (validator) this.fireEvent('elementValidate', [isValid, field, className, warn]);
			if (warn) return true;
			return isValid;
		},

		hasValidator: function(field, value){
			return field.get('validators').contains(value);
		},

		resetField: function(field){
			field = document.id(field);
			if (field){
				field.get('validators').each(function(className){
					if (className.test('^warn-')) className = className.replace(/^warn-/, '');
					field.removeClass('validation-failed');
					field.removeClass('warning');
					field.removeClass('validation-passed');
				}, this);
			}
			return this;
		},

		stop: function(){
			this.paused = true;
			return this;
		},

		start: function(){
			this.paused = false;
			return this;
		},

		ignoreField: function(field, warn){
			field = document.id(field);
			if (field){
				this.enforceField(field);
				if (warn) field.addClass('warnOnly');
				else field.addClass('ignoreValidation');
			}
			return this;
		},

		enforceField: function(field){
			field = document.id(field);
			if (field) field.removeClass('warnOnly').removeClass('ignoreValidation');
			return this;
		}

	});

	Form.Validator.getMsg = function(key){
		return Locale.get('FormValidator.' + key);
	};

	Form.Validator.adders = {

		validators:{},

		add : function(className, options){
			this.validators[className] = new InputValidator(className, options);
			//if this is a class (this method is used by instances of Form.Validator and the Form.Validator namespace)
			//extend these validators into it
			//this allows validators to be global and/or per instance
			if (!this.initialize){
				this.implement({
					validators: this.validators
				});
			}
		},

		addAllThese : function(validators){
			Array.convert(validators).each(function(validator){
				this.add(validator[0], validator[1]);
			}, this);
		},

		getValidator: function(className){
			return this.validators[className.split(':')[0]];
		}

	};

	Object.append(Form.Validator, Form.Validator.adders);

	Form.Validator.implement(Form.Validator.adders);

	Form.Validator.add('IsEmpty', {

		errorMsg: false,
		test: function(element){
			if (element.type == 'select-one' || element.type == 'select')
				return !(element.selectedIndex >= 0 && element.options[element.selectedIndex].value != '');
			else
				return ((element.get('value') == null) || (element.get('value').length == 0));
		}

	});

	Form.Validator.addAllThese([

		['required', {
			errorMsg: function(){
				return Form.Validator.getMsg('required');
			},
			test: function(element){
				return !Form.Validator.getValidator('IsEmpty').test(element);
			}
		}],

		['length', {
			errorMsg: function(element, props){
				if (typeOf(props.length) != 'null')
					return Form.Validator.getMsg('length').substitute({length: props.length, elLength: element.get('value').length});
				else return '';
			},
			test: function(element, props){
				if (typeOf(props.length) != 'null') return (element.get('value').length == props.length || element.get('value').length == 0);
				else return true;
			}
		}],

		['minLength', {
			errorMsg: function(element, props){
				if (typeOf(props.minLength) != 'null')
					return Form.Validator.getMsg('minLength').substitute({minLength: props.minLength, length: element.get('value').length});
				else return '';
			},
			test: function(element, props){
				if (typeOf(props.minLength) != 'null') return (element.get('value').length >= (props.minLength || 0));
				else return true;
			}
		}],

		['maxLength', {
			errorMsg: function(element, props){
				//props is {maxLength:10}
				if (typeOf(props.maxLength) != 'null')
					return Form.Validator.getMsg('maxLength').substitute({maxLength: props.maxLength, length: element.get('value').length});
				else return '';
			},
			test: function(element, props){
				return element.get('value').length <= (props.maxLength || 10000);
			}
		}],

		['validate-integer', {
			errorMsg: Form.Validator.getMsg.pass('integer'),
			test: function(element){
				return Form.Validator.getValidator('IsEmpty').test(element) || (/^(-?[1-9]\d*|0)$/).test(element.get('value'));
			}
		}],

		['validate-numeric', {
			errorMsg: Form.Validator.getMsg.pass('numeric'),
			test: function(element){
				return Form.Validator.getValidator('IsEmpty').test(element) ||
					(/^-?(?:0$0(?=\d*\.)|[1-9]|0)\d*(\.\d+)?$/).test(element.get('value'));
			}
		}],

		['validate-digits', {
			errorMsg: Form.Validator.getMsg.pass('digits'),
			test: function(element){
				return Form.Validator.getValidator('IsEmpty').test(element) || (/^[\d() .:\-\+#]+$/.test(element.get('value')));
			}
		}],

		['validate-alpha', {
			errorMsg: Form.Validator.getMsg.pass('alpha'),
			test: function(element){
				return Form.Validator.getValidator('IsEmpty').test(element) || (/^[a-zA-Z]+$/).test(element.get('value'));
			}
		}],

		['validate-alphanum', {
			errorMsg: Form.Validator.getMsg.pass('alphanum'),
			test: function(element){
				return Form.Validator.getValidator('IsEmpty').test(element) || !(/\W/).test(element.get('value'));
			}
		}],

		['validate-date', {
			errorMsg: function(element, props){
				if (Date.parse){
					var format = props.dateFormat || '%x';
					return Form.Validator.getMsg('dateSuchAs').substitute({date: new Date().format(format)});
				} else {
					return Form.Validator.getMsg('dateInFormatMDY');
				}
			},
			test: function(element, props){
				if (Form.Validator.getValidator('IsEmpty').test(element)) return true;
				var dateLocale = Locale.get('Date'),
					dateNouns = new RegExp([dateLocale.days, dateLocale.days_abbr, dateLocale.months, dateLocale.months_abbr, dateLocale.AM, dateLocale.PM].flatten().join('|'), 'i'),
					value = element.get('value'),
					wordsInValue = value.match(/[a-z]+/gi);

				if (wordsInValue && !wordsInValue.every(dateNouns.exec, dateNouns)) return false;

				var date = Date.parse(value);
				if (!date) return false;

				var format = props.dateFormat || '%x',
					formatted = date.format(format);
				if (formatted != 'invalid date') element.set('value', formatted);
				return date.isValid();
			}
		}],

		['validate-email', {
			errorMsg: Form.Validator.getMsg.pass('email'),
			test: function(element){
				/*
				var chars = "[a-z0-9!#$%&'*+/=?^_`{|}~-]",
					local = '(?:' + chars + '\\.?){0,63}' + chars,

					label = '[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?',
					hostname = '(?:' + label + '\\.)*' + label;

					octet = '(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)',
					ipv4 = '\\[(?:' + octet + '\\.){3}' + octet + '\\]',

					domain = '(?:' + hostname + '|' + ipv4 + ')';

				var regex = new RegExp('^' + local + '@' + domain + '$', 'i');
				*/
				return Form.Validator.getValidator('IsEmpty').test(element) || (/^(?:[a-z0-9!#$%&'*+\/=?^_`{|}~-]\.?){0,63}[a-z0-9!#$%&'*+\/=?^_`{|}~-]@(?:(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)*[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\])$/i).test(element.get('value'));
			}
		}],

		['validate-url', {
			errorMsg: Form.Validator.getMsg.pass('url'),
			test: function(element){
				return Form.Validator.getValidator('IsEmpty').test(element) || (/^(https?|ftp|rmtp|mms):\/\/(([A-Z0-9][A-Z0-9_-]*)(\.[A-Z0-9][A-Z0-9_-]*)+)(:(\d+))?\/?/i).test(element.get('value'));
			}
		}],

		['validate-currency-dollar', {
			errorMsg: Form.Validator.getMsg.pass('currencyDollar'),
			test: function(element){
				return Form.Validator.getValidator('IsEmpty').test(element) || (/^\$?\-?([1-9]{1}[0-9]{0,2}(\,[0-9]{3})*(\.[0-9]{0,2})?|[1-9]{1}\d*(\.[0-9]{0,2})?|0(\.[0-9]{0,2})?|(\.[0-9]{1,2})?)$/).test(element.get('value'));
			}
		}],

		['validate-one-required', {
			errorMsg: Form.Validator.getMsg.pass('oneRequired'),
			test: function(element, props){
				var p = document.id(props['validate-one-required']) || element.getParent(props['validate-one-required']);
				return p.getElements('input').some(function(el){
					if (['checkbox', 'radio'].contains(el.get('type'))) return el.get('checked');
					return el.get('value');
				});
			}
		}]

	]);

	Element.Properties.validator = {

		set: function(options){
			this.get('validator').setOptions(options);
		},

		get: function(){
			var validator = this.retrieve('validator');
			if (!validator){
				validator = new Form.Validator(this);
				this.store('validator', validator);
			}
			return validator;
		}

	};

	Element.implement({

		validate: function(options){
			if (options) this.set('validator', options);
			return this.get('validator').validate();
		}

	});






	/*
	---

	script: Form.Validator.Extras.js

	name: Form.Validator.Extras

	description: Additional validators for the Form.Validator class.

	license: MIT-style license

	authors:
	  - Aaron Newton

	requires:
	  - Form.Validator

	provides: [Form.Validator.Extras]

	...
	*/

	(function(){

	function getItems(props, preference, children, cssSelector){
		if (preference && props[preference]) return props[preference];
		var el = document.id(props[children]);
		if (!el) return [];
		return el.getElements(cssSelector);
	}

	Form.Validator.addAllThese([

		['validate-enforce-oncheck', {
			test: function(element, props){
				var fv = element.getParent('form').retrieve('validator');
				if (!fv) return true;
				getItems(props, 'toEnforce', 'enforceChildrenOf', 'input, select, textarea').each(function(item){
					if (element.checked){
						fv.enforceField(item);
					} else {
						fv.ignoreField(item);
						fv.resetField(item);
					}
				});
				return true;
			}
		}],

		['validate-ignore-oncheck', {
			test: function(element, props){
				var fv = element.getParent('form').retrieve('validator');
				if (!fv) return true;
				getItems(props, 'toIgnore', 'ignoreChildrenOf', 'input, select, textarea').each(function(item){
					if (element.checked){
						fv.ignoreField(item);
						fv.resetField(item);
					} else {
						fv.enforceField(item);
					}
				});
				return true;
			}
		}],

		['validate-enforce-onselect-value', {
			test: function(element, props){
				if (!props.value) return true;
				var fv = element.getParent('form').retrieve('validator');
				if (!fv) return true;
				getItems(props, 'toEnforce', 'enforceChildrenOf', 'input, select, textarea').each(function(item){
					if (props.value == element.value){
						fv.enforceField(item);
					} else {
						fv.ignoreField(item);
						fv.resetField(item);
					}
				});
				return true;
			}
		}],

		['validate-nospace', {
			errorMsg: function(){
				return Form.Validator.getMsg('noSpace');
			},
			test: function(element, props){
				return !element.get('value').test(/\s/);
			}
		}],

		['validate-toggle-oncheck', {
			test: function(element, props){
				var fv = element.getParent('form').retrieve('validator');
				if (!fv) return true;
				var eleArr = getItems(props, 'toToggle', 'toToggleChildrenOf', 'input, select, textarea');
				if (!element.checked){
					eleArr.each(function(item){
						fv.ignoreField(item);
						fv.resetField(item);
					});
				} else {
					eleArr.each(function(item){
						fv.enforceField(item);
					});
				}
				return true;
			}
		}],

		['validate-reqchk-bynode', {
			errorMsg: function(){
				return Form.Validator.getMsg('reqChkByNode');
			},
			test: function(element, props){
				return getItems(props, false, 'nodeId', props.selector || 'input[type=checkbox], input[type=radio]').some(function(item){
					return item.checked;
				});
			}
		}],

		['validate-required-check', {
			errorMsg: function(element, props){
				return props.useTitle ? element.get('title') : Form.Validator.getMsg('requiredChk');
			},
			test: function(element, props){
				return !!element.checked;
			}
		}],

		['validate-reqchk-byname', {
			errorMsg: function(element, props){
				return Form.Validator.getMsg('reqChkByName').substitute({label: props.label || element.get('type')});
			},
			test: function(element, props){
				var grpName = props.groupName || element.get('name');
				var grpNameEls = $$('[name=' + grpName +']');
				var oneCheckedItem = grpNameEls.some(function(item, index){
					return item.checked;
				});
				var fv = element.getParent('form').retrieve('validator');
				if (oneCheckedItem && fv){
					grpNameEls.each(function(item, index){ fv.resetField(item); });
				}
				return oneCheckedItem;
			}
		}],

		['validate-match', {
			errorMsg: function(element, props){
				return Form.Validator.getMsg('match').substitute({matchName: decodeURIComponent((props.matchName+'').replace(/\+/g, '%20')) || document.id(props.matchInput).get('name')});
			},
			test: function(element, props){
				var eleVal = element.get('value');
				var matchVal = document.id(props.matchInput) && document.id(props.matchInput).get('value');
				return eleVal && matchVal ? eleVal == matchVal : true;
			}
		}],

		['validate-after-date', {
			errorMsg: function(element, props){
				return Form.Validator.getMsg('afterDate').substitute({
					label: props.afterLabel || (props.afterElement ? Form.Validator.getMsg('startDate') : Form.Validator.getMsg('currentDate'))
				});
			},
			test: function(element, props){
				var start = document.id(props.afterElement) ? Date.parse(document.id(props.afterElement).get('value')) : new Date();
				var end = Date.parse(element.get('value'));
				return end && start ? end >= start : true;
			}
		}],

		['validate-before-date', {
			errorMsg: function(element, props){
				return Form.Validator.getMsg('beforeDate').substitute({
					label: props.beforeLabel || (props.beforeElement ? Form.Validator.getMsg('endDate') : Form.Validator.getMsg('currentDate'))
				});
			},
			test: function(element, props){
				var start = Date.parse(element.get('value'));
				var end = document.id(props.beforeElement) ? Date.parse(document.id(props.beforeElement).get('value')) : new Date();
				return end && start ? end >= start : true;
			}
		}],

		['validate-custom-required', {
			errorMsg: function(){
				return Form.Validator.getMsg('required');
			},
			test: function(element, props){
				return element.get('value') != props.emptyValue;
			}
		}],

		['validate-same-month', {
			errorMsg: function(element, props){
				var startMo = document.id(props.sameMonthAs) && document.id(props.sameMonthAs).get('value');
				var eleVal = element.get('value');
				if (eleVal != '') return Form.Validator.getMsg(startMo ? 'sameMonth' : 'startMonth');
			},
			test: function(element, props){
				var d1 = Date.parse(element.get('value'));
				var d2 = Date.parse(document.id(props.sameMonthAs) && document.id(props.sameMonthAs).get('value'));
				return d1 && d2 ? d1.format('%B') == d2.format('%B') : true;
			}
		}],


		['validate-cc-num', {
			errorMsg: function(element){
				var ccNum = element.get('value').replace(/[^0-9]/g, '');
				return Form.Validator.getMsg('creditcard').substitute({length: ccNum.length});
			},
			test: function(element){
				// required is a different test
				if (Form.Validator.getValidator('IsEmpty').test(element)) return true;

				// Clean number value
				var ccNum = element.get('value');
				ccNum = ccNum.replace(/[^0-9]/g, '');

				var validType = false;

				if (ccNum.test(/^4[0-9]{12}([0-9]{3})?$/)) validType = 'Visa';
				else if (ccNum.test(/^5[1-5]([0-9]{14})$/)) validType = 'Master Card';
				else if (ccNum.test(/^3[47][0-9]{13}$/)) validType = 'American Express';
				else if (ccNum.test(/^6(?:011|5[0-9]{2})[0-9]{12}$/)) validType = 'Discover';
				else if (ccNum.test(/^3(?:0[0-5]|[68][0-9])[0-9]{11}$/)) validType = 'Diners Club';

				if (validType){
					var sum = 0;
					var cur = 0;

					for (var i=ccNum.length-1; i>=0; --i){
						cur = ccNum.charAt(i).toInt();
						if (cur == 0) continue;

						if ((ccNum.length-i) % 2 == 0) cur += cur;
						if (cur > 9){
							cur = cur.toString().charAt(0).toInt() + cur.toString().charAt(1).toInt();
						}

						sum += cur;
					}
					if ((sum % 10) == 0) return true;
				}

				var chunks = '';
				while (ccNum != ''){
					chunks += ' ' + ccNum.substr(0,4);
					ccNum = ccNum.substr(4);
				}

				element.getParent('form').retrieve('validator').ignoreField(element);
				element.set('value', chunks.clean());
				element.getParent('form').retrieve('validator').enforceField(element);
				return false;
			}
		}]

	]);

	})();

	/*
	---

	script: Form.Validator.Inline.js

	name: Form.Validator.Inline

	description: Extends Form.Validator to add inline messages.

	license: MIT-style license

	authors:
	  - Aaron Newton

	requires:
	  - Form.Validator

	provides: [Form.Validator.Inline]

	...
	*/

	Form.Validator.Inline = new Class({

		Extends: Form.Validator,

		options: {
			showError: function(errorElement){
				if (errorElement.reveal) errorElement.reveal();
				else errorElement.setStyle('display', 'block');
			},
			hideError: function(errorElement){
				if (errorElement.dissolve) errorElement.dissolve();
				else errorElement.setStyle('display', 'none');
			},
			scrollToErrorsOnSubmit: true,
			scrollToErrorsOnBlur: false,
			scrollToErrorsOnChange: false,
			scrollFxOptions: {
				transition: 'quad:out',
				offset: {
					y: -20
				}
			}
		},

		initialize: function(form, options){
			this.parent(form, options);
			this.addEvent('onElementValidate', function(isValid, field, className, warn){
				var validator = this.getValidator(className);
				if (!isValid && validator.getError(field)){
					if (warn) field.addClass('warning');
					var advice = this.makeAdvice(className, field, validator.getError(field), warn);
					this.insertAdvice(advice, field);
					this.showAdvice(className, field);
				} else {
					this.hideAdvice(className, field);
				}
			});
		},

		makeAdvice: function(className, field, error, warn){
			var errorMsg = (warn) ? this.warningPrefix : this.errorPrefix;
			errorMsg += (this.options.useTitles) ? field.title || error:error;
			var cssClass = (warn) ? 'warning-advice' : 'validation-advice';
			var advice = this.getAdvice(className, field);
			if (advice){
				advice = advice.set('html', errorMsg);
			} else {
				advice = new Element('div', {
					html: errorMsg,
					styles: { display: 'none' },
					id: 'advice-' + className.split(':')[0] + '-' + this.getFieldId(field)
				}).addClass(cssClass);
			}
			field.store('$moo:advice-' + className, advice);
			return advice;
		},

		getFieldId : function(field){
			return field.id ? field.id : field.id = 'input_' + field.name;
		},

		showAdvice: function(className, field){
			var advice = this.getAdvice(className, field);
			if (
				advice &&
				!field.retrieve('$moo:' + this.getPropName(className)) &&
				(
					advice.getStyle('display') == 'none' ||
					advice.getStyle('visibility') == 'hidden' ||
					advice.getStyle('opacity') == 0
				)
			){
				field.store('$moo:' + this.getPropName(className), true);
				this.options.showError(advice);
				this.fireEvent('showAdvice', [field, advice, className]);
			}
		},

		hideAdvice: function(className, field){
			var advice = this.getAdvice(className, field);
			if (advice && field.retrieve('$moo:' + this.getPropName(className))){
				field.store('$moo:' + this.getPropName(className), false);
				this.options.hideError(advice);
				this.fireEvent('hideAdvice', [field, advice, className]);
			}
		},

		getPropName: function(className){
			return 'advice' + className;
		},

		resetField: function(field){
			field = document.id(field);
			if (!field) return this;
			this.parent(field);
			field.get('validators').each(function(className){
				this.hideAdvice(className, field);
			}, this);
			return this;
		},

		getAllAdviceMessages: function(field, force){
			var advice = [];
			if (field.hasClass('ignoreValidation') && !force) return advice;
			var validators = field.get('validators').some(function(cn){
				var warner = cn.test('^warn-') || field.hasClass('warnOnly');
				if (warner) cn = cn.replace(/^warn-/, '');
				var validator = this.getValidator(cn);
				if (!validator) return;
				advice.push({
					message: validator.getError(field),
					warnOnly: warner,
					passed: validator.test(),
					validator: validator
				});
			}, this);
			return advice;
		},

		getAdvice: function(className, field){
			return field.retrieve('$moo:advice-' + className);
		},

		insertAdvice: function(advice, field){
			//Check for error position prop
			var props = field.get('validatorProps');
			//Build advice
			if (!props.msgPos || !document.id(props.msgPos)){
				if (field.type && field.type.toLowerCase() == 'radio') field.getParent().adopt(advice);
				else advice.inject(document.id(field), 'after');
			} else {
				document.id(props.msgPos).grab(advice);
			}
		},

		validateField: function(field, force, scroll){
			var result = this.parent(field, force);
			if (((this.options.scrollToErrorsOnSubmit && scroll == null) || scroll) && !result){
				var failed = document.id(this).getElement('.validation-failed');
				var par = document.id(this).getParent();
				while (par != document.body && par.getScrollSize().y == par.getSize().y){
					par = par.getParent();
				}
				var fx = par.retrieve('$moo:fvScroller');
				if (!fx && window.Fx && Fx.Scroll){
					fx = new Fx.Scroll(par, this.options.scrollFxOptions);
					par.store('$moo:fvScroller', fx);
				}
				if (failed){
					if (fx) fx.toElement(failed);
					else par.scrollTo(par.getScroll().x, failed.getPosition(par).y - 20);
				}
			}
			return result;
		},

		watchFields: function(fields){
			fields.each(function(el){
				if (this.options.evaluateFieldsOnBlur){
					el.addEvent('blur', this.validationMonitor.pass([el, false, this.options.scrollToErrorsOnBlur], this));
				}
				if (this.options.evaluateFieldsOnChange){
					el.addEvent('change', this.validationMonitor.pass([el, true, this.options.scrollToErrorsOnChange], this));
				}
			}, this);
		}

	});

	/*
	---

	script: OverText.js

	name: OverText

	description: Shows text over an input that disappears when the user clicks into it. The text remains hidden if the user adds a value.

	license: MIT-style license

	authors:
	  - Aaron Newton

	requires:
	  - Core/Options
	  - Core/Events
	  - Core/Element.Event
	  - Class.Binds
	  - Class.Occlude
	  - Element.Position
	  - Element.Shortcuts

	provides: [OverText]

	...
	*/
	(function(){

	var OverText = this.OverText = new Class({

		Implements: [Options, Events, Class.Occlude],

		Binds: ['reposition', 'assert', 'focus', 'hide'],

		options: {/*
			textOverride: null,
			onFocus: function(){},
			onTextHide: function(textEl, inputEl){},
			onTextShow: function(textEl, inputEl){}, */
			element: 'label',
			labelClass: 'overTxtLabel',
			positionOptions: {
				position: 'upperLeft',
				edge: 'upperLeft',
				offset: {
					x: 4,
					y: 2
				}
			},
			poll: false,
			pollInterval: 250,
			wrap: false
		},

		property: 'OverText',

		initialize: function(element, options){
			element = this.element = document.id(element);

			if (this.occlude()) return this.occluded;
			this.setOptions(options);

			this.attach(element);
			OverText.instances.push(this);

			if (this.options.poll) this.poll();
		},

		toElement: function(){
			return this.element;
		},

		attach: function(){
			var element = this.element,
				options = this.options,
				value = options.textOverride || element.get('alt') || element.get('title');

			if (!value) return this;

			var text = this.text = new Element(options.element, {
				'class': options.labelClass,
				styles: {
					lineHeight: 'normal',
					position: 'absolute',
					cursor: 'text'
				},
				html: value,
				events: {
					click: this.hide.pass(options.element == 'label', this)
				}
			}).inject(element, 'after');

			if (options.element == 'label'){
				if (!element.get('id')) element.set('id', 'input_' + String.uniqueID());
				text.set('for', element.get('id'));
			}

			if (options.wrap){
				this.textHolder = new Element('div.overTxtWrapper', {
					styles: {
						lineHeight: 'normal',
						position: 'relative'
					}
				}).grab(text).inject(element, 'before');
			}

			return this.enable();
		},

		destroy: function(){
			this.element.eliminate(this.property); // Class.Occlude storage
			this.disable();
			if (this.text) this.text.destroy();
			if (this.textHolder) this.textHolder.destroy();
			return this;
		},

		disable: function(){
			this.element.removeEvents({
				focus: this.focus,
				blur: this.assert,
				change: this.assert
			});
			window.removeEvent('resize', this.reposition);
			this.hide(true, true);
			return this;
		},

		enable: function(){
			this.element.addEvents({
				focus: this.focus,
				blur: this.assert,
				change: this.assert
			});
			window.addEvent('resize', this.reposition);
			this.reposition();
			return this;
		},

		wrap: function(){
			if (this.options.element == 'label'){
				if (!this.element.get('id')) this.element.set('id', 'input_' + String.uniqueID());
				this.text.set('for', this.element.get('id'));
			}
		},

		startPolling: function(){
			this.pollingPaused = false;
			return this.poll();
		},

		poll: function(stop){
			//start immediately
			//pause on focus
			//resumeon blur
			if (this.poller && !stop) return this;
			if (stop){
				clearInterval(this.poller);
			} else {
				this.poller = (function(){
					if (!this.pollingPaused) this.assert(true);
				}).periodical(this.options.pollInterval, this);
			}

			return this;
		},

		stopPolling: function(){
			this.pollingPaused = true;
			return this.poll(true);
		},

		focus: function(){
			if (this.text && (!this.text.isDisplayed() || this.element.get('disabled'))) return this;
			return this.hide();
		},

		hide: function(suppressFocus, force){
			if (this.text && (this.text.isDisplayed() && (!this.element.get('disabled') || force))){
				this.text.hide();
				this.fireEvent('textHide', [this.text, this.element]);
				this.pollingPaused = true;
				if (!suppressFocus){
					try {
						this.element.fireEvent('focus');
						this.element.focus();
					} catch (e){} //IE barfs if you call focus on hidden elements
				}
			}
			return this;
		},

		show: function(){
			if (document.id(this.text) && !this.text.isDisplayed()){
				this.text.show();
				this.reposition();
				this.fireEvent('textShow', [this.text, this.element]);
				this.pollingPaused = false;
			}
			return this;
		},

		test: function(){
			return !this.element.get('value');
		},

		assert: function(suppressFocus){
			return this[this.test() ? 'show' : 'hide'](suppressFocus);
		},

		reposition: function(){
			this.assert(true);
			if (!this.element.isVisible()) return this.stopPolling().hide();
			if (this.text && this.test()){
				this.text.position(Object.merge(this.options.positionOptions, {
					relativeTo: this.element
				}));
			}
			return this;
		}

	});

	})();

	OverText.instances = [];

	Object.append(OverText, {

		each: function(fn){
			return OverText.instances.each(function(ot, i){
				if (ot.element && ot.text) fn.call(OverText, ot, i);
			});
		},

		update: function(){

			return OverText.each(function(ot){
				return ot.reposition();
			});

		},

		hideAll: function(){

			return OverText.each(function(ot){
				return ot.hide(true, true);
			});

		},

		showAll: function(){
			return OverText.each(function(ot){
				return ot.show();
			});
		}

	});


	/*
	---

	script: Fx.Elements.js

	name: Fx.Elements

	description: Effect to change any number of CSS properties of any number of Elements.

	license: MIT-style license

	authors:
	  - Valerio Proietti

	requires:
	  - Core/Fx.CSS
	  - MooTools.More

	provides: [Fx.Elements]

	...
	*/

	Fx.Elements = new Class({

		Extends: Fx.CSS,

		initialize: function(elements, options){
			this.elements = this.subject = $$(elements);
			this.parent(options);
		},

		compute: function(from, to, delta){
			var now = {};

			for (var i in from){
				var iFrom = from[i], iTo = to[i], iNow = now[i] = {};
				for (var p in iFrom) iNow[p] = this.parent(iFrom[p], iTo[p], delta);
			}

			return now;
		},

		set: function(now){
			for (var i in now){
				if (!this.elements[i]) continue;

				var iNow = now[i];
				for (var p in iNow) this.render(this.elements[i], p, iNow[p], this.options.unit);
			}

			return this;
		},

		start: function(obj){
			if (!this.check(obj)) return this;
			var from = {}, to = {};

			for (var i in obj){
				if (!this.elements[i]) continue;

				var iProps = obj[i], iFrom = from[i] = {}, iTo = to[i] = {};

				for (var p in iProps){
					var parsed = this.prepare(this.elements[i], p, iProps[p]);
					iFrom[p] = parsed.from;
					iTo[p] = parsed.to;
				}
			}

			return this.parent(from, to);
		}

	});

	/*
	---

	script: Fx.Accordion.js

	name: Fx.Accordion

	description: An Fx.Elements extension which allows you to easily create accordion type controls.

	license: MIT-style license

	authors:
	  - Valerio Proietti

	requires:
	  - Core/Element.Event
	  - Fx.Elements

	provides: [Fx.Accordion]

	...
	*/

	Fx.Accordion = new Class({

		Extends: Fx.Elements,

		options: {/*
			onActive: function(toggler, section){},
			onBackground: function(toggler, section){},*/
			fixedHeight: false,
			fixedWidth: false,
			display: 0,
			show: false,
			height: true,
			width: false,
			opacity: true,
			alwaysHide: false,
			trigger: 'click',
			initialDisplayFx: true,
			resetHeight: true,
			keepOpen: false
		},

		initialize: function(){
			var defined = function(obj){
				return obj != null;
			};

			var params = Array.link(arguments, {
				'container': Type.isElement, //deprecated
				'options': Type.isObject,
				'togglers': defined,
				'elements': defined
			});
			this.parent(params.elements, params.options);

			var options = this.options,
				togglers = this.togglers = $$(params.togglers);

			this.previous = -1;
			this.internalChain = new Chain();

			if (options.alwaysHide) this.options.link = 'chain';

			if (options.show || this.options.show === 0){
				options.display = false;
				this.previous = options.show;
			}

			if (options.start){
				options.display = false;
				options.show = false;
			}

			var effects = this.effects = {};

			if (options.opacity) effects.opacity = 'fullOpacity';
			if (options.width) effects.width = options.fixedWidth ? 'fullWidth' : 'offsetWidth';
			if (options.height) effects.height = options.fixedHeight ? 'fullHeight' : 'scrollHeight';

			for (var i = 0, l = togglers.length; i < l; i++) this.addSection(togglers[i], this.elements[i]);

			this.elements.each(function(el, i){
				if (options.show === i){
					this.fireEvent('active', [togglers[i], el]);
				} else {
					for (var fx in effects) el.setStyle(fx, 0);
				}
			}, this);

			if (options.display || options.display === 0 || options.initialDisplayFx === false){
				this.display(options.display, options.initialDisplayFx);
			}

			if (options.fixedHeight !== false) options.resetHeight = false;
			this.addEvent('complete', this.internalChain.callChain.bind(this.internalChain));
		},

		addSection: function(toggler, element){
			toggler = document.id(toggler);
			element = document.id(element);
			this.togglers.include(toggler);
			this.elements.include(element);

			var togglers = this.togglers,
				options = this.options,
				test = togglers.contains(toggler),
				idx = togglers.indexOf(toggler),
				displayer = this.display.pass(idx, this);

			toggler.store('accordion:display', displayer)
				.addEvent(options.trigger, displayer);

			if (options.height) element.setStyles({'padding-top': 0, 'border-top': 'none', 'padding-bottom': 0, 'border-bottom': 'none'});
			if (options.width) element.setStyles({'padding-left': 0, 'border-left': 'none', 'padding-right': 0, 'border-right': 'none'});

			element.fullOpacity = 1;
			if (options.fixedWidth) element.fullWidth = options.fixedWidth;
			if (options.fixedHeight) element.fullHeight = options.fixedHeight;
			element.setStyle('overflow', 'hidden');

			if (!test) for (var fx in this.effects){
				element.setStyle(fx, 0);
			}
			return this;
		},

		removeSection: function(toggler, displayIndex){
			var togglers = this.togglers,
				idx = togglers.indexOf(toggler),
				element = this.elements[idx];

			var remover = function(){
				togglers.erase(toggler);
				this.elements.erase(element);
				this.detach(toggler);
			}.bind(this);

			if (this.now == idx || displayIndex != null){
				this.display(displayIndex != null ? displayIndex : (idx - 1 >= 0 ? idx - 1 : 0)).chain(remover);
			} else {
				remover();
			}
			return this;
		},

		detach: function(toggler){
			var remove = function(toggler){
				toggler.removeEvent(this.options.trigger, toggler.retrieve('accordion:display'));
			}.bind(this);

			if (!toggler) this.togglers.each(remove);
			else remove(toggler);
			return this;
		},

		display: function(index, useFx){
			if (!this.check(index, useFx)) return this;

			var obj = {},
				elements = this.elements,
				options = this.options,
				effects = this.effects,
				keepOpen = options.keepOpen,
				alwaysHide = options.alwaysHide;

			if (useFx == null) useFx = true;
			if (typeOf(index) == 'element') index = elements.indexOf(index);
			if (index == this.current && !alwaysHide && !keepOpen) return this;

			if (options.resetHeight){
				var prev = elements[this.current];
				if (prev && !this.selfHidden){
					for (var fx in effects) prev.setStyle(fx, prev[effects[fx]]);
				}
			}

			if (this.timer && options.link == 'chain') return this;

			if (this.current != null) this.previous = this.current;
			this.current = index;
			this.selfHidden = false;

			elements.each(function(el, i){
				obj[i] = {};
				var hide, isOpen;
				if (!keepOpen || i == index){
					if (i == index) isOpen = (el.offsetHeight > 0 && options.height) || (el.offsetWidth > 0 && options.width);

					if (i != index){
						hide = true;
					} else if ((alwaysHide || keepOpen) && isOpen){
						hide = true;
						this.selfHidden = true;
					}
					this.fireEvent(hide ? 'background' : 'active', [this.togglers[i], el]);
					for (var fx in effects) obj[i][fx] = hide ? 0 : el[effects[fx]];
					if (!useFx && !hide && options.resetHeight) obj[i].height = 'auto';
				}
			}, this);

			this.internalChain.clearChain();
			this.internalChain.chain(function(){
				if (options.resetHeight && !this.selfHidden){
					var el = elements[index];
					if (el) el.setStyle('height', 'auto');
				}
			}.bind(this));

			return useFx ? this.start(obj) : this.set(obj).internalChain.callChain();
		}

	});



	/*
	---

	script: Fx.Move.js

	name: Fx.Move

	description: Defines Fx.Move, a class that works with Element.Position.js to transition an element from one location to another.

	license: MIT-style license

	authors:
	  - Aaron Newton

	requires:
	  - Core/Fx.Morph
	  - Element.Position

	provides: [Fx.Move]

	...
	*/

	Fx.Move = new Class({

		Extends: Fx.Morph,

		options: {
			relativeTo: document.body,
			position: 'center',
			edge: false,
			offset: {x: 0, y: 0}
		},

		start: function(destination){
			var element = this.element,
				topLeft = element.getStyles('top', 'left');
			if (topLeft.top == 'auto' || topLeft.left == 'auto'){
				element.setPosition(element.getPosition(element.getOffsetParent()));
			}
			return this.parent(element.position(Object.merge({}, this.options, destination, {returnPos: true})));
		}

	});

	Element.Properties.move = {

		set: function(options){
			this.get('move').cancel().setOptions(options);
			return this;
		},

		get: function(){
			var move = this.retrieve('move');
			if (!move){
				move = new Fx.Move(this, {link: 'cancel'});
				this.store('move', move);
			}
			return move;
		}

	};

	Element.implement({

		move: function(options){
			this.get('move').start(options);
			return this;
		}

	});

	/*
	---

	script: Fx.Scroll.js

	name: Fx.Scroll

	description: Effect to smoothly scroll any element, including the window.

	license: MIT-style license

	authors:
	  - Valerio Proietti

	requires:
	  - Core/Fx
	  - Core/Element.Event
	  - Core/Element.Dimensions
	  - MooTools.More

	provides: [Fx.Scroll]

	...
	*/

	(function(){

	Fx.Scroll = new Class({

		Extends: Fx,

		options: {
			offset: {x: 0, y: 0},
			wheelStops: true
		},

		initialize: function(element, options){
			this.element = this.subject = document.id(element);
			this.parent(options);

			if (typeOf(this.element) != 'element') this.element = document.id(this.element.getDocument().body);

			if (this.options.wheelStops){
				var stopper = this.element,
					cancel = this.cancel.pass(false, this);
				this.addEvent('start', function(){
					stopper.addEvent('mousewheel', cancel);
				}, true);
				this.addEvent('complete', function(){
					stopper.removeEvent('mousewheel', cancel);
				}, true);
			}
		},

		set: function(){
			var now = Array.flatten(arguments);
			this.element.scrollTo(now[0], now[1]);
			return this;
		},

		compute: function(from, to, delta){
			return [0, 1].map(function(i){
				return Fx.compute(from[i], to[i], delta);
			});
		},

		start: function(x, y){
			if (!this.check(x, y)) return this;
			var scroll = this.element.getScroll();
			return this.parent([scroll.x, scroll.y], [x, y]);
		},

		calculateScroll: function(x, y){
			var element = this.element,
				scrollSize = element.getScrollSize(),
				scroll = element.getScroll(),
				size = element.getSize(),
				offset = this.options.offset,
				values = {x: x, y: y};

			for (var z in values){
				if (!values[z] && values[z] !== 0) values[z] = scroll[z];
				if (typeOf(values[z]) != 'number') values[z] = scrollSize[z] - size[z];
				values[z] += offset[z];
			}

			return [values.x, values.y];
		},

		toTop: function(){
			return this.start.apply(this, this.calculateScroll(false, 0));
		},

		toLeft: function(){
			return this.start.apply(this, this.calculateScroll(0, false));
		},

		toRight: function(){
			return this.start.apply(this, this.calculateScroll('right', false));
		},

		toBottom: function(){
			return this.start.apply(this, this.calculateScroll(false, 'bottom'));
		},

		toElement: function(el, axes){
			axes = axes ? Array.convert(axes) : ['x', 'y'];
			var scroll = isBody(this.element) ? {x: 0, y: 0} : this.element.getScroll();
			var position = Object.map(document.id(el).getPosition(this.element), function(value, axis){
				return axes.contains(axis) ? value + scroll[axis] : false;
			});
			return this.start.apply(this, this.calculateScroll(position.x, position.y));
		},

		toElementEdge: function(el, axes, offset){
			axes = axes ? Array.convert(axes) : ['x', 'y'];
			el = document.id(el);
			var to = {},
				position = el.getPosition(this.element),
				size = el.getSize(),
				scroll = this.element.getScroll(),
				containerSize = this.element.getSize(),
				edge = {
					x: position.x + size.x,
					y: position.y + size.y
				};

			['x', 'y'].each(function(axis){
				if (axes.contains(axis)){
					if (edge[axis] > scroll[axis] + containerSize[axis]) to[axis] = edge[axis] - containerSize[axis];
					if (position[axis] < scroll[axis]) to[axis] = position[axis];
				}
				if (to[axis] == null) to[axis] = scroll[axis];
				if (offset && offset[axis]) to[axis] = to[axis] + offset[axis];
			}, this);

			if (to.x != scroll.x || to.y != scroll.y) this.start(to.x, to.y);
			return this;
		},

		toElementCenter: function(el, axes, offset){
			axes = axes ? Array.convert(axes) : ['x', 'y'];
			el = document.id(el);
			var to = {},
				position = el.getPosition(this.element),
				size = el.getSize(),
				scroll = this.element.getScroll(),
				containerSize = this.element.getSize();

			['x', 'y'].each(function(axis){
				if (axes.contains(axis)){
					to[axis] = position[axis] - (containerSize[axis] - size[axis]) / 2;
				}
				if (to[axis] == null) to[axis] = scroll[axis];
				if (offset && offset[axis]) to[axis] = to[axis] + offset[axis];
			}, this);

			if (to.x != scroll.x || to.y != scroll.y) this.start(to.x, to.y);
			return this;
		}

	});



	function isBody(element){
		return (/^(?:body|html)$/i).test(element.tagName);
	}

	})();

	/*
	---

	script: Fx.Slide.js

	name: Fx.Slide

	description: Effect to slide an element in and out of view.

	license: MIT-style license

	authors:
	  - Valerio Proietti

	requires:
	  - Core/Fx
	  - Core/Element.Style
	  - MooTools.More

	provides: [Fx.Slide]

	...
	*/

	Fx.Slide = new Class({

		Extends: Fx,

		options: {
			mode: 'vertical',
			wrapper: false,
			hideOverflow: true,
			resetHeight: false
		},

		initialize: function(element, options){
			element = this.element = this.subject = document.id(element);
			this.parent(options);
			options = this.options;

			var wrapper = element.retrieve('wrapper'),
				styles = element.getStyles('margin', 'position', 'overflow');

			if (options.hideOverflow) styles = Object.append(styles, {overflow: 'hidden'});
			if (options.wrapper) wrapper = document.id(options.wrapper).setStyles(styles);

			if (!wrapper) wrapper = new Element('div', {
				styles: styles
			}).wraps(element);

			element.store('wrapper', wrapper).setStyle('margin', 0);
			if (element.getStyle('overflow') == 'visible') element.setStyle('overflow', 'hidden');

			this.now = [];
			this.open = true;
			this.wrapper = wrapper;

			this.addEvent('complete', function(){
				this.open = (wrapper['offset' + this.layout.capitalize()] != 0);
				if (this.open && this.options.resetHeight) wrapper.setStyle('height', '');
			}, true);
		},

		vertical: function(){
			this.margin = 'margin-top';
			this.layout = 'height';
			this.offset = this.element.offsetHeight;
		},

		horizontal: function(){
			this.margin = 'margin-left';
			this.layout = 'width';
			this.offset = this.element.offsetWidth;
		},

		set: function(now){
			this.element.setStyle(this.margin, now[0]);
			this.wrapper.setStyle(this.layout, now[1]);
			return this;
		},

		compute: function(from, to, delta){
			return [0, 1].map(function(i){
				return Fx.compute(from[i], to[i], delta);
			});
		},

		start: function(how, mode){
			if (!this.check(how, mode)) return this;
			this[mode || this.options.mode]();

			var margin = this.element.getStyle(this.margin).toInt(),
				layout = this.wrapper.getStyle(this.layout).toInt(),
				caseIn = [[margin, layout], [0, this.offset]],
				caseOut = [[margin, layout], [-this.offset, 0]],
				start;

			switch (how){
				case 'in': start = caseIn; break;
				case 'out': start = caseOut; break;
				case 'toggle': start = (layout == 0) ? caseIn : caseOut;
			}
			return this.parent(start[0], start[1]);
		},

		slideIn: function(mode){
			return this.start('in', mode);
		},

		slideOut: function(mode){
			return this.start('out', mode);
		},

		hide: function(mode){
			this[mode || this.options.mode]();
			this.open = false;
			return this.set([-this.offset, 0]);
		},

		show: function(mode){
			this[mode || this.options.mode]();
			this.open = true;
			return this.set([0, this.offset]);
		},

		toggle: function(mode){
			return this.start('toggle', mode);
		}

	});

	Element.Properties.slide = {

		set: function(options){
			this.get('slide').cancel().setOptions(options);
			return this;
		},

		get: function(){
			var slide = this.retrieve('slide');
			if (!slide){
				slide = new Fx.Slide(this, {link: 'cancel'});
				this.store('slide', slide);
			}
			return slide;
		}

	};

	Element.implement({

		slide: function(how, mode){
			how = how || 'toggle';
			var slide = this.get('slide'), toggle;
			switch (how){
				case 'hide': slide.hide(mode); break;
				case 'show': slide.show(mode); break;
				case 'toggle':
					var flag = this.retrieve('slide:flag', slide.open);
					slide[flag ? 'slideOut' : 'slideIn'](mode);
					this.store('slide:flag', !flag);
					toggle = true;
					break;
				default: slide.start(how, mode);
			}
			if (!toggle) this.eliminate('slide:flag');
			return this;
		}

	});

	/*
	---

	script: Fx.SmoothScroll.js

	name: Fx.SmoothScroll

	description: Class for creating a smooth scrolling effect to all internal links on the page.

	license: MIT-style license

	authors:
	  - Valerio Proietti

	requires:
	  - Core/Slick.Finder
	  - Fx.Scroll

	provides: [Fx.SmoothScroll]

	...
	*/

	Fx.SmoothScroll = new Class({

		Extends: Fx.Scroll,

		options: {
			axes: ['x', 'y']
		},

		initialize: function(options, context){
			context = context || document;
			this.doc = context.getDocument();
			this.parent(this.doc, options);

			var win = context.getWindow(),
				location = win.location.href.match(/^[^#]*/)[0] + '#',
				links = $$(this.options.links || this.doc.links);

			links.each(function(link){
				if (link.href.indexOf(location) != 0) return;
				var anchor = link.href.substr(location.length);
				if (anchor) this.useLink(link, anchor);
			}, this);

			this.addEvent('complete', function(){
				win.location.hash = this.anchor;
				this.element.scrollTo(this.to[0], this.to[1]);
			}, true);
		},

		useLink: function(link, anchor){

			link.addEvent('click', function(event){
				var el = document.id(anchor) || this.doc.getElement('a[name=' + anchor + ']');
				if (!el) return;

				event.preventDefault();
				this.toElement(el, this.options.axes).chain(function(){
					this.fireEvent('scrolledTo', [link, el]);
				}.bind(this));

				this.anchor = anchor;

			}.bind(this));

			return this;
		}
	});

	/*
	---

	script: Fx.Sort.js

	name: Fx.Sort

	description: Defines Fx.Sort, a class that reorders lists with a transition.

	license: MIT-style license

	authors:
	  - Aaron Newton

	requires:
	  - Core/Element.Dimensions
	  - Fx.Elements
	  - Element.Measure

	provides: [Fx.Sort]

	...
	*/

	Fx.Sort = new Class({

		Extends: Fx.Elements,

		options: {
			mode: 'vertical'
		},

		initialize: function(elements, options){
			this.parent(elements, options);
			this.elements.each(function(el){
				if (el.getStyle('position') == 'static') el.setStyle('position', 'relative');
			});
			this.setDefaultOrder();
		},

		setDefaultOrder: function(){
			this.currentOrder = this.elements.map(function(el, index){
				return index;
			});
		},

		sort: function(){
			if (!this.check(arguments)) return this;
			var newOrder = Array.flatten(arguments);

			var top = 0,
				left = 0,
				next = {},
				zero = {},
				vert = this.options.mode == 'vertical';

			var current = this.elements.map(function(el, index){
				var size = el.getComputedSize({styles: ['border', 'padding', 'margin']});
				var val;
				if (vert){
					val = {
						top: top,
						margin: size['margin-top'],
						height: size.totalHeight
					};
					top += val.height - size['margin-top'];
				} else {
					val = {
						left: left,
						margin: size['margin-left'],
						width: size.totalWidth
					};
					left += val.width;
				}
				var plane = vert ? 'top' : 'left';
				zero[index] = {};
				var start = el.getStyle(plane).toInt();
				zero[index][plane] = start || 0;
				return val;
			}, this);

			this.set(zero);
			newOrder = newOrder.map(function(i){ return i.toInt(); });
			if (newOrder.length != this.elements.length){
				this.currentOrder.each(function(index){
					if (!newOrder.contains(index)) newOrder.push(index);
				});
				if (newOrder.length > this.elements.length)
					newOrder.splice(this.elements.length-1, newOrder.length - this.elements.length);
			}
			var margin = 0;
			top = left = 0;
			newOrder.each(function(item){
				var newPos = {};
				if (vert){
					newPos.top = top - current[item].top - margin;
					top += current[item].height;
				} else {
					newPos.left = left - current[item].left;
					left += current[item].width;
				}
				margin = margin + current[item].margin;
				next[item]=newPos;
			}, this);
			var mapped = {};
			Array.clone(newOrder).sort().each(function(index){
				mapped[index] = next[index];
			});
			this.start(mapped);
			this.currentOrder = newOrder;

			return this;
		},

		rearrangeDOM: function(newOrder){
			newOrder = newOrder || this.currentOrder;
			var parent = this.elements[0].getParent();
			var rearranged = [];
			this.elements.setStyle('opacity', 0);
			//move each element and store the new default order
			newOrder.each(function(index){
				rearranged.push(this.elements[index].inject(parent).setStyles({
					top: 0,
					left: 0
				}));
			}, this);
			this.elements.setStyle('opacity', 1);
			this.elements = $$(rearranged);
			this.setDefaultOrder();
			return this;
		},

		getDefaultOrder: function(){
			return this.elements.map(function(el, index){
				return index;
			});
		},

		getCurrentOrder: function(){
			return this.currentOrder;
		},

		forward: function(){
			return this.sort(this.getDefaultOrder());
		},

		backward: function(){
			return this.sort(this.getDefaultOrder().reverse());
		},

		reverse: function(){
			return this.sort(this.currentOrder.reverse());
		},

		sortByElements: function(elements){
			return this.sort(elements.map(function(el){
				return this.elements.indexOf(el);
			}, this));
		},

		swap: function(one, two){
			if (typeOf(one) == 'element') one = this.elements.indexOf(one);
			if (typeOf(two) == 'element') two = this.elements.indexOf(two);

			var newOrder = Array.clone(this.currentOrder);
			newOrder[this.currentOrder.indexOf(one)] = two;
			newOrder[this.currentOrder.indexOf(two)] = one;

			return this.sort(newOrder);
		}

	});

	/*
	---

	script: Keyboard.js

	name: Keyboard

	description: KeyboardEvents used to intercept events on a class for keyboard and format modifiers in a specific order so as to make alt+shift+c the same as shift+alt+c.

	license: MIT-style license

	authors:
	  - Perrin Westrich
	  - Aaron Newton
	  - Scott Kyle

	requires:
	  - Core/Events
	  - Core/Options
	  - Core/Element.Event
	  - Element.Event.Pseudos.Keys

	provides: [Keyboard]

	...
	*/

	(function(){

	var Keyboard = this.Keyboard = new Class({

		Extends: Events,

		Implements: [Options],

		options: {/*
			onActivate: function(){},
			onDeactivate: function(){},*/
			defaultEventType: 'keydown',
			active: false,
			manager: null,
			events: {},
			nonParsedEvents: ['activate', 'deactivate', 'onactivate', 'ondeactivate', 'changed', 'onchanged']
		},

		initialize: function(options){
			if (options && options.manager){
				this._manager = options.manager;
				delete options.manager;
			}
			this.setOptions(options);
			this._setup();
		},

		addEvent: function(type, fn, internal){
			return this.parent(Keyboard.parse(type, this.options.defaultEventType, this.options.nonParsedEvents), fn, internal);
		},

		removeEvent: function(type, fn){
			return this.parent(Keyboard.parse(type, this.options.defaultEventType, this.options.nonParsedEvents), fn);
		},

		toggleActive: function(){
			return this[this.isActive() ? 'deactivate' : 'activate']();
		},

		activate: function(instance){
			if (instance){
				if (instance.isActive()) return this;
				//if we're stealing focus, store the last keyboard to have it so the relinquish command works
				if (this._activeKB && instance != this._activeKB){
					this.previous = this._activeKB;
					this.previous.fireEvent('deactivate');
				}
				//if we're enabling a child, assign it so that events are now passed to it
				this._activeKB = instance.fireEvent('activate');
				Keyboard.manager.fireEvent('changed');
			} else if (this._manager){
				//else we're enabling ourselves, we must ask our parent to do it for us
				this._manager.activate(this);
			}
			return this;
		},

		isActive: function(){
			return this._manager ? (this._manager._activeKB == this) : (Keyboard.manager == this);
		},

		deactivate: function(instance){
			if (instance){
				if (instance === this._activeKB){
					this._activeKB = null;
					instance.fireEvent('deactivate');
					Keyboard.manager.fireEvent('changed');
				}
			} else if (this._manager){
				this._manager.deactivate(this);
			}
			return this;
		},

		relinquish: function(){
			if (this.isActive() && this._manager && this._manager.previous) this._manager.activate(this._manager.previous);
			else this.deactivate();
			return this;
		},

		//management logic
		manage: function(instance){
			if (instance._manager) instance._manager.drop(instance);
			this._instances.push(instance);
			instance._manager = this;
			if (!this._activeKB) this.activate(instance);
			return this;
		},

		drop: function(instance){
			instance.relinquish();
			this._instances.erase(instance);
			if (this._activeKB == instance){
				if (this.previous && this._instances.contains(this.previous)) this.activate(this.previous);
				else this._activeKB = this._instances[0];
			}
			return this;
		},

		trace: function(){
			Keyboard.trace(this);
		},

		each: function(fn){
			Keyboard.each(this, fn);
		},

		/*
			PRIVATE METHODS
		*/

		_instances: [],

		_disable: function(instance){
			if (this._activeKB == instance) this._activeKB = null;
		},

		_setup: function(){
			this.addEvents(this.options.events);
			//if this is the root manager, nothing manages it
			if (Keyboard.manager && !this._manager) Keyboard.manager.manage(this);
			if (this.options.active) this.activate();
			else this.relinquish();
		},

		_handle: function(event, type){
			//Keyboard.stop(event) prevents key propagation
			if (event.preventKeyboardPropagation) return;

			var bubbles = !!this._manager;
			if (bubbles && this._activeKB){
				this._activeKB._handle(event, type);
				if (event.preventKeyboardPropagation) return;
			}
			this.fireEvent(type, event);

			if (!bubbles && this._activeKB) this._activeKB._handle(event, type);
		}

	});

	var parsed = {};
	var modifiers = ['shift', 'control', 'alt', 'meta'];
	var regex = /^(?:shift|control|ctrl|alt|meta)$/;

	Keyboard.parse = function(type, eventType, ignore){
		if (ignore && ignore.contains(type.toLowerCase())) return type;

		type = type.toLowerCase().replace(/^(keyup|keydown):/, function($0, $1){
			eventType = $1;
			return '';
		});

		if (!parsed[type]){
			if (type != '+'){
				var key, mods = {};
				type.split('+').each(function(part){
					if (regex.test(part)) mods[part] = true;
					else key = part;
				});

				mods.control = mods.control || mods.ctrl; // allow both control and ctrl

				var keys = [];
				modifiers.each(function(mod){
					if (mods[mod]) keys.push(mod);
				});

				if (key) keys.push(key);
				parsed[type] = keys.join('+');
			} else {
				parsed[type] = type;
			}
		}

		return eventType + ':keys(' + parsed[type] + ')';
	};

	Keyboard.each = function(keyboard, fn){
		var current = keyboard || Keyboard.manager;
		while (current){
			fn(current);
			current = current._activeKB;
		}
	};

	Keyboard.stop = function(event){
		event.preventKeyboardPropagation = true;
	};

	Keyboard.manager = new Keyboard({
		active: true
	});

	Keyboard.trace = function(keyboard){
		keyboard = keyboard || Keyboard.manager;
		var hasConsole = window.console && console.log;
		if (hasConsole) console.log('the following items have focus: ');
		Keyboard.each(keyboard, function(current){
			if (hasConsole) console.log(document.id(current.widget) || current.wiget || current);
		});
	};

	var handler = function(event){
		var keys = [];
		modifiers.each(function(mod){
			if (event[mod]) keys.push(mod);
		});

		if (!regex.test(event.key)) keys.push(event.key);
		Keyboard.manager._handle(event, event.type + ':keys(' + keys.join('+') + ')');
	};

	document.addEvents({
		'keyup': handler,
		'keydown': handler
	});

	})();

	/*
	---

	script: Keyboard.Extras.js

	name: Keyboard.Extras

	description: Enhances Keyboard by adding the ability to name and describe keyboard shortcuts, and the ability to grab shortcuts by name and bind the shortcut to different keys.

	license: MIT-style license

	authors:
	  - Perrin Westrich

	requires:
	  - Keyboard
	  - MooTools.More

	provides: [Keyboard.Extras]

	...
	*/
	Keyboard.prototype.options.nonParsedEvents.combine(['rebound', 'onrebound']);

	Keyboard.implement({

		/*
			shortcut should be in the format of:
			{
				'keys': 'shift+s', // the default to add as an event.
				'description': 'blah blah blah', // a brief description of the functionality.
				'handler': function(){} // the event handler to run when keys are pressed.
			}
		*/
		addShortcut: function(name, shortcut){
			this._shortcuts = this._shortcuts || [];
			this._shortcutIndex = this._shortcutIndex || {};

			shortcut.getKeyboard = Function.convert(this);
			shortcut.name = name;
			this._shortcutIndex[name] = shortcut;
			this._shortcuts.push(shortcut);
			if (shortcut.keys) this.addEvent(shortcut.keys, shortcut.handler);
			return this;
		},

		addShortcuts: function(obj){
			for (var name in obj) this.addShortcut(name, obj[name]);
			return this;
		},

		removeShortcut: function(name){
			var shortcut = this.getShortcut(name);
			if (shortcut && shortcut.keys){
				this.removeEvent(shortcut.keys, shortcut.handler);
				delete this._shortcutIndex[name];
				this._shortcuts.erase(shortcut);
			}
			return this;
		},

		removeShortcuts: function(names){
			names.each(this.removeShortcut, this);
			return this;
		},

		getShortcuts: function(){
			return this._shortcuts || [];
		},

		getShortcut: function(name){
			return (this._shortcutIndex || {})[name];
		}

	});

	Keyboard.rebind = function(newKeys, shortcuts){
		Array.convert(shortcuts).each(function(shortcut){
			shortcut.getKeyboard().removeEvent(shortcut.keys, shortcut.handler);
			shortcut.getKeyboard().addEvent(newKeys, shortcut.handler);
			shortcut.keys = newKeys;
			shortcut.getKeyboard().fireEvent('rebound');
		});
	};


	Keyboard.getActiveShortcuts = function(keyboard){
		var activeKBS = [], activeSCS = [];
		Keyboard.each(keyboard, [].push.bind(activeKBS));
		activeKBS.each(function(kb){ activeSCS.extend(kb.getShortcuts()); });
		return activeSCS;
	};

	Keyboard.getShortcut = function(name, keyboard, opts){
		opts = opts || {};
		var shortcuts = opts.many ? [] : null,
			set = opts.many ? function(kb){
				var shortcut = kb.getShortcut(name);
				if (shortcut) shortcuts.push(shortcut);
			} : function(kb){
				if (!shortcuts) shortcuts = kb.getShortcut(name);
			};
		Keyboard.each(keyboard, set);
		return shortcuts;
	};

	Keyboard.getShortcuts = function(name, keyboard){
		return Keyboard.getShortcut(name, keyboard, { many: true });
	};

	/*
	---

	script: HtmlTable.js

	name: HtmlTable

	description: Builds table elements with methods to add rows.

	license: MIT-style license

	authors:
	  - Aaron Newton

	requires:
	  - Core/Options
	  - Core/Events
	  - Class.Occlude

	provides: [HtmlTable]

	...
	*/
	(function(){

	var HtmlTable = this.HtmlTable = new Class({

		Implements: [Options, Events, Class.Occlude],

		options: {
			properties: {
				cellpadding: 0,
				cellspacing: 0,
				border: 0
			},
			rows: [],
			headers: [],
			footers: []
		},

		property: 'HtmlTable',

		initialize: function(){
			var params = Array.link(arguments, {options: Type.isObject, table: Type.isElement, id: Type.isString});
			this.setOptions(params.options);
			if (!params.table && params.id) params.table = document.id(params.id);
			this.element = params.table || new Element('table', this.options.properties);
			if (this.occlude()) return this.occluded;
			this.build();
		},

		build: function(){
			this.element.store('HtmlTable', this);

			this.body = document.id(this.element.tBodies[0]) || new Element('tbody').inject(this.element);
			$$(this.body.rows);

			if (this.options.headers.length) this.setHeaders(this.options.headers);
			else this.thead = document.id(this.element.tHead);

			if (this.thead) this.head = this.getHead();
			if (this.options.footers.length) this.setFooters(this.options.footers);

			this.tfoot = document.id(this.element.tFoot);
			if (this.tfoot) this.foot = document.id(this.tfoot.rows[0]);

			this.options.rows.each(function(row){
				this.push(row);
			}, this);
		},

		toElement: function(){
			return this.element;
		},

		empty: function(){
			this.body.empty();
			return this;
		},

		set: function(what, items){
			var target = (what == 'headers') ? 'tHead' : 'tFoot',
				lower = target.toLowerCase();

			this[lower] = (document.id(this.element[target]) || new Element(lower).inject(this.element, 'top')).empty();
			var data = this.push(items, {}, this[lower], what == 'headers' ? 'th' : 'td');

			if (what == 'headers') this.head = this.getHead();
			else this.foot = this.getHead();

			return data;
		},

		getHead: function(){
			var rows = this.thead.rows;
			return rows.length > 1 ? $$(rows) : rows.length ? document.id(rows[0]) : false;
		},

		setHeaders: function(headers){
			this.set('headers', headers);
			return this;
		},

		setFooters: function(footers){
			this.set('footers', footers);
			return this;
		},

		update: function(tr, row, tag){
			var tds = tr.getChildren(tag || 'td'), last = tds.length - 1;

			row.each(function(data, index){
				var td = tds[index] || new Element(tag || 'td').inject(tr),
					content = ((data && Object.prototype.hasOwnProperty.call(data, 'content')) ? data.content : '') || data,
					type = typeOf(content);

				if (data && Object.prototype.hasOwnProperty.call(data, 'properties')) td.set(data.properties);
				if (/(element(s?)|array|collection)/.test(type)) td.empty().adopt(content);
				else td.set('html', content);

				if (index > last) tds.push(td);
				else tds[index] = td;
			});

			return {
				tr: tr,
				tds: tds
			};
		},

		push: function(row, rowProperties, target, tag, where){
			if (typeOf(row) == 'element' && row.get('tag') == 'tr'){
				row.inject(target || this.body, where);
				return {
					tr: row,
					tds: row.getChildren('td')
				};
			}
			return this.update(new Element('tr', rowProperties).inject(target || this.body, where), row, tag);
		},

		pushMany: function(rows, rowProperties, target, tag, where){
			return rows.map(function(row){
				return this.push(row, rowProperties, target, tag, where);
			}, this);
		}

	});

	})();


	['adopt', 'inject', 'wraps', 'grab', 'replaces', 'dispose'].each(function(method){
		HtmlTable.implement(method, function(){
			this.element[method].apply(this.element, arguments);
			return this;
		});
	});



	/*
	---

	script: HtmlTable.Select.js

	name: HtmlTable.Select

	description: Builds a stripy, sortable table with methods to add rows. Rows can be selected with the mouse or keyboard navigation.

	license: MIT-style license

	authors:
	  - Harald Kirschner
	  - Aaron Newton

	requires:
	  - Keyboard
	  - Keyboard.Extras
	  - HtmlTable
	  - Class.refactor
	  - Element.Delegation.Pseudo
	  - Element.Shortcuts

	provides: [HtmlTable.Select]

	...
	*/

	HtmlTable = Class.refactor(HtmlTable, {

		options: {
			/*onRowFocus: function(){},
			onRowUnfocus: function(){},*/
			useKeyboard: true,
			classRowSelected: 'table-tr-selected',
			classRowHovered: 'table-tr-hovered',
			classSelectable: 'table-selectable',
			shiftForMultiSelect: true,
			allowMultiSelect: true,
			selectable: false,
			selectHiddenRows: false
		},

		initialize: function(){
			this.previous.apply(this, arguments);
			if (this.occluded) return this.occluded;

			this.selectedRows = new Elements();

			if (!this.bound) this.bound = {};
			this.bound.mouseleave = this.mouseleave.bind(this);
			this.bound.clickRow = this.clickRow.bind(this);
			this.bound.activateKeyboard = function(){
				if (this.keyboard && this.selectEnabled) this.keyboard.activate();
			}.bind(this);

			if (this.options.selectable) this.enableSelect();
		},

		empty: function(){
			if (this.body.rows.length) this.selectNone();
			return this.previous();
		},

		enableSelect: function(){
			this.selectEnabled = true;
			this.attachSelects();
			this.element.addClass(this.options.classSelectable);
			return this;
		},

		disableSelect: function(){
			this.selectEnabled = false;
			this.attachSelects(false);
			this.element.removeClass(this.options.classSelectable);
			return this;
		},

		push: function(){
			var ret = this.previous.apply(this, arguments);
			this.updateSelects();
			return ret;
		},

		toggleRow: function(row){
			return this[(this.isSelected(row) ? 'de' : '') + 'selectRow'](row);
		},

		selectRow: function(row, _nocheck){
			//private variable _nocheck: boolean whether or not to confirm the row is in the table body
			//added here for optimization when selecting ranges
			if (this.isSelected(row) || (!_nocheck && !this.body.getChildren().contains(row))) return;
			if (!this.options.allowMultiSelect) this.selectNone();

			if (!this.isSelected(row)){
				this.selectedRows.push(row);
				row.addClass(this.options.classRowSelected);
				this.fireEvent('rowFocus', [row, this.selectedRows]);
				this.fireEvent('stateChanged');
			}

			this.focused = row;
			document.clearSelection();

			return this;
		},

		isSelected: function(row){
			return this.selectedRows.contains(row);
		},

		getSelected: function(){
			return this.selectedRows;
		},

		serialize: function(){
			var previousSerialization = this.previous.apply(this, arguments) || {};
			if (this.options.selectable){
				previousSerialization.selectedRows = this.selectedRows.map(function(row){
					return Array.indexOf(this.body.rows, row);
				}.bind(this));
			}
			return previousSerialization;
		},

		restore: function(tableState){
			if (this.options.selectable && tableState.selectedRows){
				tableState.selectedRows.each(function(index){
					this.selectRow(this.body.rows[index]);
				}.bind(this));
			}
			this.previous.apply(this, arguments);
		},

		deselectRow: function(row, _nocheck){
			if (!this.isSelected(row) || (!_nocheck && !this.body.getChildren().contains(row))) return;

			this.selectedRows = new Elements(Array.convert(this.selectedRows).erase(row));
			row.removeClass(this.options.classRowSelected);
			this.fireEvent('rowUnfocus', [row, this.selectedRows]);
			this.fireEvent('stateChanged');
			return this;
		},

		selectAll: function(selectNone){
			if (!selectNone && !this.options.allowMultiSelect) return;
			this.selectRange(0, this.body.rows.length, selectNone);
			return this;
		},

		selectNone: function(){
			return this.selectAll(true);
		},

		selectRange: function(startRow, endRow, _deselect){
			if (!this.options.allowMultiSelect && !_deselect) return;
			var method = _deselect ? 'deselectRow' : 'selectRow',
				rows = Array.clone(this.body.rows);

			if (typeOf(startRow) == 'element') startRow = rows.indexOf(startRow);
			if (typeOf(endRow) == 'element') endRow = rows.indexOf(endRow);
			endRow = endRow < rows.length - 1 ? endRow : rows.length - 1;

			if (endRow < startRow){
				var tmp = startRow;
				startRow = endRow;
				endRow = tmp;
			}

			for (var i = startRow; i <= endRow; i++){
				if (this.options.selectHiddenRows || rows[i].isDisplayed()) this[method](rows[i], true);
			}

			return this;
		},

		deselectRange: function(startRow, endRow){
			this.selectRange(startRow, endRow, true);
		},

	/*
		Private methods:
	*/

		enterRow: function(row){
			if (this.hovered) this.hovered = this.leaveRow(this.hovered);
			this.hovered = row.addClass(this.options.classRowHovered);
		},

		leaveRow: function(row){
			row.removeClass(this.options.classRowHovered);
		},

		updateSelects: function(){
			Array.each(this.body.rows, function(row){
				var binders = row.retrieve('binders');
				if (!binders && !this.selectEnabled) return;
				if (!binders){
					binders = {
						mouseenter: this.enterRow.pass([row], this),
						mouseleave: this.leaveRow.pass([row], this)
					};
					row.store('binders', binders);
				}
				if (this.selectEnabled) row.addEvents(binders);
				else row.removeEvents(binders);
			}, this);
		},

		shiftFocus: function(offset, event){
			if (!this.focused) return this.selectRow(this.body.rows[0], event);
			var to = this.getRowByOffset(offset, this.options.selectHiddenRows);
			if (to === null || this.focused == this.body.rows[to]) return this;
			this.toggleRow(this.body.rows[to], event);
		},

		clickRow: function(event, row){
			var selecting = (event.shift || event.meta || event.control) && this.options.shiftForMultiSelect;
			if (!selecting && !(event.rightClick && this.isSelected(row) && this.options.allowMultiSelect)) this.selectNone();

			if (event.rightClick) this.selectRow(row);
			else this.toggleRow(row);

			if (event.shift){
				this.selectRange(this.rangeStart || this.body.rows[0], row, this.rangeStart ? !this.isSelected(row) : true);
				this.focused = row;
			}
			this.rangeStart = row;
		},

		getRowByOffset: function(offset, includeHiddenRows){
			if (!this.focused) return 0;
			var index = Array.indexOf(this.body.rows, this.focused);
			if ((index == 0 && offset < 0) || (index == this.body.rows.length -1 && offset > 0)) return null;
			if (includeHiddenRows){
				index += offset;
			} else {
				var limit = 0,
					count = 0;
				if (offset > 0){
					while (count < offset && index < this.body.rows.length -1){
						if (this.body.rows[++index].isDisplayed()) count++;
					}
				} else {
					while (count > offset && index > 0){
						if (this.body.rows[--index].isDisplayed()) count--;
					}
				}
			}
			return index;
		},

		attachSelects: function(attach){
			attach = attach != null ? attach : true;

			var method = attach ? 'addEvents' : 'removeEvents';
			this.element[method]({
				mouseleave: this.bound.mouseleave,
				click: this.bound.activateKeyboard
			});

			this.body[method]({
				'click:relay(tr)': this.bound.clickRow,
				'contextmenu:relay(tr)': this.bound.clickRow
			});

			if (this.options.useKeyboard || this.keyboard){
				if (!this.keyboard) this.keyboard = new Keyboard();
				if (!this.selectKeysDefined){
					this.selectKeysDefined = true;
					var timer, held;

					var move = function(offset){
						var mover = function(e){
							clearTimeout(timer);
							e.preventDefault();
							var to = this.body.rows[this.getRowByOffset(offset, this.options.selectHiddenRows)];
							if (e.shift && to && this.isSelected(to)){
								this.deselectRow(this.focused);
								this.focused = to;
							} else {
								if (to && (!this.options.allowMultiSelect || !e.shift)){
									this.selectNone();
								}
								this.shiftFocus(offset, e);
							}

							if (held){
								timer = mover.delay(100, this, e);
							} else {
								timer = (function(){
									held = true;
									mover(e);
								}).delay(400);
							}
						}.bind(this);
						return mover;
					}.bind(this);

					var clear = function(){
						clearTimeout(timer);
						held = false;
					};

					this.keyboard.addEvents({
						'keydown:shift+up': move(-1),
						'keydown:shift+down': move(1),
						'keyup:shift+up': clear,
						'keyup:shift+down': clear,
						'keyup:up': clear,
						'keyup:down': clear
					});

					var shiftHint = '';
					if (this.options.allowMultiSelect && this.options.shiftForMultiSelect && this.options.useKeyboard){
						shiftHint = ' (Shift multi-selects).';
					}

					this.keyboard.addShortcuts({
						'Select Previous Row': {
							keys: 'up',
							shortcut: 'up arrow',
							handler: move(-1),
							description: 'Select the previous row in the table.' + shiftHint
						},
						'Select Next Row': {
							keys: 'down',
							shortcut: 'down arrow',
							handler: move(1),
							description: 'Select the next row in the table.' + shiftHint
						}
					});

				}
				this.keyboard[attach ? 'activate' : 'deactivate']();
			}
			this.updateSelects();
		},

		mouseleave: function(){
			if (this.hovered) this.leaveRow(this.hovered);
		}

	});

	/*
	---

	script: HtmlTable.Sort.js

	name: HtmlTable.Sort

	description: Builds a stripy, sortable table with methods to add rows.

	license: MIT-style license

	authors:
	  - Harald Kirschner
	  - Aaron Newton
	  - Jacob Thornton

	requires:
	  - Core/Hash
	  - HtmlTable
	  - Class.refactor
	  - Element.Delegation.Pseudo
	  - String.Extras
	  - Date

	provides: [HtmlTable.Sort]

	...
	*/
	(function(){

	var readOnlyNess = document.createElement('table');
	try {
		readOnlyNess.innerHTML = '<tr><td></td></tr>';
		readOnlyNess = readOnlyNess.childNodes.length === 0;
	} catch (e){
		readOnlyNess = true;
	}

	HtmlTable = Class.refactor(HtmlTable, {

		options: {/*
			onSort: function(){}, */
			sortIndex: 0,
			sortReverse: false,
			parsers: [],
			defaultParser: 'string',
			classSortable: 'table-sortable',
			classHeadSort: 'table-th-sort',
			classHeadSortRev: 'table-th-sort-rev',
			classNoSort: 'table-th-nosort',
			classGroupHead: 'table-tr-group-head',
			classGroup: 'table-tr-group',
			classCellSort: 'table-td-sort',
			classSortSpan: 'table-th-sort-span',
			sortable: false,
			thSelector: 'th'
		},

		initialize: function(){
			this.previous.apply(this, arguments);
			if (this.occluded) return this.occluded;
			this.sorted = {index: null, dir: 1};
			if (!this.bound) this.bound = {};
			this.bound.headClick = this.headClick.bind(this);
			this.sortSpans = new Elements();
			if (this.options.sortable){
				this.enableSort();
				if (this.options.sortIndex != null) this.sort(this.options.sortIndex, this.options.sortReverse);
			}
		},

		attachSorts: function(attach){
			this.detachSorts();
			if (attach !== false) this.element.addEvent('click:relay(' + this.options.thSelector + ')', this.bound.headClick);
		},

		detachSorts: function(){
			this.element.removeEvents('click:relay(' + this.options.thSelector + ')');
		},

		setHeaders: function(){
			this.previous.apply(this, arguments);
			if (this.sortable) this.setParsers();
		},

		setParsers: function(){
			this.parsers = this.detectParsers();
		},

		detectParsers: function(){
			return this.head && this.head.getElements(this.options.thSelector).flatten().map(this.detectParser, this);
		},

		detectParser: function(cell, index){
			if (cell.hasClass(this.options.classNoSort) || cell.retrieve('htmltable-parser')) return cell.retrieve('htmltable-parser');
			var thDiv = new Element('div');
			thDiv.adopt(cell.childNodes).inject(cell);
			var sortSpan = new Element('span', {'class': this.options.classSortSpan}).inject(thDiv, 'top');
			this.sortSpans.push(sortSpan);
			var parser = this.options.parsers[index],
				rows = this.body.rows,
				cancel;
			switch (typeOf(parser)){
				case 'function': parser = {convert: parser}; cancel = true; break;
				case 'string': parser = parser; cancel = true; break;
			}
			if (!cancel){
				HtmlTable.ParserPriority.some(function(parserName){
					var current = HtmlTable.Parsers[parserName],
						match = current.match;
					if (!match) return false;
					for (var i = 0, j = rows.length; i < j; i++){
						var cell = document.id(rows[i].cells[index]),
							text = cell ? cell.get('html').clean() : '';
						if (text && match.test(text)){
							parser = current;
							return true;
						}
					}
				});
			}
			if (!parser) parser = this.options.defaultParser;
			cell.store('htmltable-parser', parser);
			return parser;
		},

		headClick: function(event, el){
			if (!this.head || el.hasClass(this.options.classNoSort)) return;
			return this.sort(Array.indexOf(this.head.getElements(this.options.thSelector).flatten(), el) % this.body.rows[0].cells.length);
		},

		serialize: function(){
			var previousSerialization = this.previous.apply(this, arguments) || {};
			if (this.options.sortable){
				previousSerialization.sortIndex = this.sorted.index;
				previousSerialization.sortReverse = this.sorted.reverse;
			}
			return previousSerialization;
		},

		restore: function(tableState){
			if (this.options.sortable && tableState.sortIndex){
				this.sort(tableState.sortIndex, tableState.sortReverse);
			}
			this.previous.apply(this, arguments);
		},

		setSortedState: function(index, reverse){
			if (reverse != null) this.sorted.reverse = reverse;
			else if (this.sorted.index == index) this.sorted.reverse = !this.sorted.reverse;
			else this.sorted.reverse = this.sorted.index == null;

			if (index != null) this.sorted.index = index;
		},

		setHeadSort: function(sorted){
			var head = $$(!this.head.length ? this.head.cells[this.sorted.index] : this.head.map(function(row){
				return row.getElements(this.options.thSelector)[this.sorted.index];
			}, this).clean());
			if (!head.length) return;
			if (sorted){
				head.addClass(this.options.classHeadSort);
				if (this.sorted.reverse) head.addClass(this.options.classHeadSortRev);
				else head.removeClass(this.options.classHeadSortRev);
			} else {
				head.removeClass(this.options.classHeadSort).removeClass(this.options.classHeadSortRev);
			}
		},

		setRowSort: function(data, pre){
			var count = data.length,
				body = this.body,
				group,
				rowIndex;

			while (count){
				var item = data[--count],
					position = item.position,
					row = body.rows[position];

				if (row.disabled) continue;
				if (!pre){
					group = this.setGroupSort(group, row, item);
					this.setRowStyle(row, count);
				}
				body.appendChild(row);

				for (rowIndex = 0; rowIndex < count; rowIndex++){
					if (data[rowIndex].position > position) data[rowIndex].position--;
				}
			}
		},

		setRowStyle: function(row, i){
			this.previous(row, i);
			row.cells[this.sorted.index].addClass(this.options.classCellSort);
		},

		setGroupSort: function(group, row, item){
			if (group == item.value) row.removeClass(this.options.classGroupHead).addClass(this.options.classGroup);
			else row.removeClass(this.options.classGroup).addClass(this.options.classGroupHead);
			return item.value;
		},

		getParser: function(){
			var parser = this.parsers[this.sorted.index];
			return typeOf(parser) == 'string' ? HtmlTable.Parsers[parser] : parser;
		},

		sort: function(index, reverse, pre, sortFunction){
			if (!this.head) return;

			if (!pre){
				this.clearSort();
				this.setSortedState(index, reverse);
				this.setHeadSort(true);
			}

			var parser = this.getParser();
			if (!parser) return;

			var rel;
			if (!readOnlyNess){
				rel = this.body.getParent();
				this.body.dispose();
			}

			var data = this.parseData(parser).sort(sortFunction ? sortFunction : function(a, b){
				if (a.value === b.value) return 0;
				return a.value > b.value ? 1 : -1;
			});

			var reversed = this.sorted.reverse == (parser == HtmlTable.Parsers['input-checked']);
			if (reversed) data.reverse(true);
			this.setRowSort(data, pre);

			if (rel) rel.grab(this.body);
			this.fireEvent('stateChanged');
			return this.fireEvent('sort', [this.body, this.sorted.index, reversed ? 'asc' : 'desc']);
		},

		parseData: function(parser){
			return Array.map(this.body.rows, function(row, i){
				var value = parser.convert.call(document.id(row.cells[this.sorted.index]));
				return {
					position: i,
					value: value
				};
			}, this);
		},

		clearSort: function(){
			this.setHeadSort(false);
			this.body.getElements('td').removeClass(this.options.classCellSort);
		},

		reSort: function(){
			if (this.sortable) this.sort.call(this, this.sorted.index, this.sorted.reverse);
			return this;
		},

		enableSort: function(){
			this.element.addClass(this.options.classSortable);
			this.attachSorts(true);
			this.setParsers();
			this.sortable = true;
			return this;
		},

		disableSort: function(){
			this.element.removeClass(this.options.classSortable);
			this.attachSorts(false);
			this.sortSpans.each(function(span){
				span.destroy();
			});
			this.sortSpans.empty();
			this.sortable = false;
			return this;
		}

	});

	HtmlTable.ParserPriority = ['date', 'input-checked', 'input-value', 'float', 'number'];

	HtmlTable.Parsers = {

		'date': {
			match: /^\d{2}[-\/ ]\d{2}[-\/ ]\d{2,4}$/,
			convert: function(){
				var d = Date.parse(this.get('text').stripTags());
				return (typeOf(d) == 'date') ? d.format('db') : '';
			},
			type: 'date'
		},
		'input-checked': {
			match: / type="(radio|checkbox)"/,
			convert: function(){
				return this.getElement('input').checked;
			}
		},
		'input-value': {
			match: /<input/,
			convert: function(){
				return this.getElement('input').value;
			}
		},
		'number': {
			match: /^\d+[^\d.,]*$/,
			convert: function(){
				return this.get('text').stripTags().toInt();
			},
			number: true
		},
		'numberLax': {
			match: /^[^\d]+\d+$/,
			convert: function(){
				return this.get('text').replace(/[^-?^0-9]/, '').stripTags().toInt();
			},
			number: true
		},
		'float': {
			match: /^[\d]+\.[\d]+/,
			convert: function(){
				return this.get('text').replace(/[^-?^\d.e]/, '').stripTags().toFloat();
			},
			number: true
		},
		'floatLax': {
			match: /^[^\d]+[\d]+\.[\d]+$/,
			convert: function(){
				return this.get('text').replace(/[^-?^\d.]/, '').stripTags().toFloat();
			},
			number: true
		},
		'string': {
			match: null,
			convert: function(){
				return this.get('text').stripTags().toLowerCase();
			}
		},
		'title': {
			match: null,
			convert: function(){
				return this.title;
			}
		}

	};



	HtmlTable.defineParsers = function(parsers){
		HtmlTable.Parsers = Object.append(HtmlTable.Parsers, parsers);
		for (var parser in parsers){
			HtmlTable.ParserPriority.unshift(parser);
		}
	};

	})();


	/*
	---

	script: HtmlTable.Zebra.js

	name: HtmlTable.Zebra

	description: Builds a stripy table with methods to add rows.

	license: MIT-style license

	authors:
	  - Harald Kirschner
	  - Aaron Newton

	requires:
	  - HtmlTable
	  - Element.Shortcuts
	  - Class.refactor

	provides: [HtmlTable.Zebra]

	...
	*/

	HtmlTable = Class.refactor(HtmlTable, {

		options: {
			classZebra: 'table-tr-odd',
			zebra: true,
			zebraOnlyVisibleRows: true
		},

		initialize: function(){
			this.previous.apply(this, arguments);
			if (this.occluded) return this.occluded;
			if (this.options.zebra) this.updateZebras();
		},

		updateZebras: function(){
			var index = 0;
			Array.each(this.body.rows, function(row){
				if (!this.options.zebraOnlyVisibleRows || row.isDisplayed()){
					this.zebra(row, index++);
				}
			}, this);
		},

		setRowStyle: function(row, i){
			if (this.previous) this.previous(row, i);
			this.zebra(row, i);
		},

		zebra: function(row, i){
			return row[((i % 2) ? 'remove' : 'add')+'Class'](this.options.classZebra);
		},

		push: function(){
			var pushed = this.previous.apply(this, arguments);
			if (this.options.zebra) this.updateZebras();
			return pushed;
		}

	});

	/*
	---

	script: Scroller.js

	name: Scroller

	description: Class which scrolls the contents of any Element (including the window) when the mouse reaches the Element's boundaries.

	license: MIT-style license

	authors:
	  - Valerio Proietti

	requires:
	  - Core/Events
	  - Core/Options
	  - Core/Element.Event
	  - Core/Element.Dimensions
	  - MooTools.More

	provides: [Scroller]

	...
	*/
	(function(){

	var Scroller = this.Scroller = new Class({

		Implements: [Events, Options],

		options: {
			area: 20,
			velocity: 1,
			onChange: function(x, y){
				this.element.scrollTo(x, y);
			},
			fps: 50
		},

		initialize: function(element, options){
			this.setOptions(options);
			this.element = document.id(element);
			this.docBody = document.id(this.element.getDocument().body);
			this.listener = (typeOf(this.element) != 'element') ? this.docBody : this.element;
			this.timer = null;
			this.bound = {
				attach: this.attach.bind(this),
				detach: this.detach.bind(this),
				getCoords: this.getCoords.bind(this)
			};
		},

		start: function(){
			this.listener.addEvents({
				mouseover: this.bound.attach,
				mouseleave: this.bound.detach
			});
			return this;
		},

		stop: function(){
			this.listener.removeEvents({
				mouseover: this.bound.attach,
				mouseleave: this.bound.detach
			});
			this.detach();
			this.timer = clearInterval(this.timer);
			return this;
		},

		attach: function(){
			this.listener.addEvent('mousemove', this.bound.getCoords);
		},

		detach: function(){
			this.listener.removeEvent('mousemove', this.bound.getCoords);
			this.timer = clearInterval(this.timer);
		},

		getCoords: function(event){
			this.page = (this.listener.get('tag') == 'body') ? event.client : event.page;
			if (!this.timer) this.timer = this.scroll.periodical(Math.round(1000 / this.options.fps), this);
		},

		scroll: function(){
			var size = this.element.getSize(),
				scroll = this.element.getScroll(),
				pos = ((this.element != this.docBody) && (this.element != window)) ? this.element.getOffsets() : {x: 0, y: 0},
				scrollSize = this.element.getScrollSize(),
				change = {x: 0, y: 0},
				top = this.options.area.top || this.options.area,
				bottom = this.options.area.bottom || this.options.area;
			for (var z in this.page){
				if (this.page[z] < (top + pos[z]) && scroll[z] != 0){
					change[z] = (this.page[z] - top - pos[z]) * this.options.velocity;
				} else if (this.page[z] + bottom > (size[z] + pos[z]) && scroll[z] + size[z] != scrollSize[z]){
					change[z] = (this.page[z] - size[z] + bottom - pos[z]) * this.options.velocity;
				}
				change[z] = change[z].round();
			}
			if (change.y || change.x) this.fireEvent('change', [scroll.x + change.x, scroll.y + change.y]);
		}

	});

	})();


	/*
	---

	script: Tips.js

	name: Tips

	description: Class for creating nice tips that follow the mouse cursor when hovering an element.

	license: MIT-style license

	authors:
	  - Valerio Proietti
	  - Christoph Pojer
	  - Luis Merino

	requires:
	  - Core/Options
	  - Core/Events
	  - Core/Element.Event
	  - Core/Element.Style
	  - Core/Element.Dimensions
	  - MooTools.More

	provides: [Tips]

	...
	*/

	(function(){

	var read = function(option, element){
		return (option) ? (typeOf(option) == 'function' ? option(element) : element.get(option)) : '';
	};

	var Tips = this.Tips = new Class({

		Implements: [Events, Options],

		options: {/*
			id: null,
			onAttach: function(element){},
			onDetach: function(element){},
			onBound: function(coords){},*/
			onShow: function(){
				this.tip.setStyle('display', 'block');
			},
			onHide: function(){
				this.tip.setStyle('display', 'none');
			},
			title: 'title',
			text: function(element){
				return element.get('rel') || element.get('href');
			},
			showDelay: 100,
			hideDelay: 100,
			className: 'tip-wrap',
			offset: {x: 16, y: 16},
			windowPadding: {x:0, y:0},
			fixed: false,
			waiAria: true,
			hideEmpty: false
		},

		initialize: function(){
			var params = Array.link(arguments, {
				options: Type.isObject,
				elements: function(obj){
					return obj != null;
				}
			});
			this.setOptions(params.options);
			if (params.elements) this.attach(params.elements);
			this.container = new Element('div', {'class': 'tip'});

			if (this.options.id){
				this.container.set('id', this.options.id);
				if (this.options.waiAria) this.attachWaiAria();
			}
		},

		toElement: function(){
			if (this.tip) return this.tip;

			this.tip = new Element('div', {
				'class': this.options.className,
				styles: {
					position: 'absolute',
					top: 0,
					left: 0,
					display: 'none'
				}
			}).adopt(
				new Element('div', {'class': 'tip-top'}),
				this.container,
				new Element('div', {'class': 'tip-bottom'})
			);

			return this.tip;
		},

		attachWaiAria: function(){
			var id = this.options.id;
			this.container.set('role', 'tooltip');

			if (!this.waiAria){
				this.waiAria = {
					show: function(element){
						if (id) element.set('aria-describedby', id);
						this.container.set('aria-hidden', 'false');
					},
					hide: function(element){
						if (id) element.erase('aria-describedby');
						this.container.set('aria-hidden', 'true');
					}
				};
			}
			this.addEvents(this.waiAria);
		},

		detachWaiAria: function(){
			if (this.waiAria){
				this.container.erase('role');
				this.container.erase('aria-hidden');
				this.removeEvents(this.waiAria);
			}
		},

		attach: function(elements){
			$$(elements).each(function(element){
				var title = read(this.options.title, element),
					text = read(this.options.text, element);

				element.set('title', '').store('tip:native', title).retrieve('tip:title', title);
				element.retrieve('tip:text', text);
				this.fireEvent('attach', [element]);

				var events = ['enter', 'leave'];
				if (!this.options.fixed) events.push('move');

				events.each(function(value){
					var event = element.retrieve('tip:' + value);
					if (!event) event = function(event){
						this['element' + value.capitalize()].apply(this, [event, element]);
					}.bind(this);

					element.store('tip:' + value, event).addEvent('mouse' + value, event);
				}, this);
			}, this);

			return this;
		},

		detach: function(elements){
			$$(elements).each(function(element){
				['enter', 'leave', 'move'].each(function(value){
					element.removeEvent('mouse' + value, element.retrieve('tip:' + value)).eliminate('tip:' + value);
				});

				this.fireEvent('detach', [element]);

				if (this.options.title == 'title'){ // This is necessary to check if we can revert the title
					var original = element.retrieve('tip:native');
					if (original) element.set('title', original);
				}
			}, this);

			return this;
		},

		elementEnter: function(event, element){
			clearTimeout(this.timer);
			this.timer = (function(){
				this.container.empty();
				var showTip = !this.options.hideEmpty;
				['title', 'text'].each(function(value){
					var content = element.retrieve('tip:' + value);
					var div = this['_' + value + 'Element'] = new Element('div', {
						'class': 'tip-' + value
					}).inject(this.container);
					if (content){
						this.fill(div, content);
						showTip = true;
					}
				}, this);
				if (showTip){
					this.show(element);
				} else {
					this.hide(element);
				}
				this.position((this.options.fixed) ? {page: element.getPosition()} : event);
			}).delay(this.options.showDelay, this);
		},

		elementLeave: function(event, element){
			clearTimeout(this.timer);
			this.timer = this.hide.delay(this.options.hideDelay, this, element);
			this.fireForParent(event, element);
		},

		setTitle: function(title){
			if (this._titleElement){
				this._titleElement.empty();
				this.fill(this._titleElement, title);
			}
			return this;
		},

		setText: function(text){
			if (this._textElement){
				this._textElement.empty();
				this.fill(this._textElement, text);
			}
			return this;
		},

		fireForParent: function(event, element){
			element = element.getParent();
			if (!element || element == document.body) return;
			if (element.retrieve('tip:enter')) element.fireEvent('mouseenter', event);
			else this.fireForParent(event, element);
		},

		elementMove: function(event, element){
			this.position(event);
		},

		position: function(event){
			if (!this.tip) document.id(this);

			var size = window.getSize(), scroll = window.getScroll(),
				tip = {x: this.tip.offsetWidth, y: this.tip.offsetHeight},
				props = {x: 'left', y: 'top'},
				bounds = {y: false, x2: false, y2: false, x: false},
				obj = {};

			for (var z in props){
				obj[props[z]] = event.page[z] + this.options.offset[z];
				if (obj[props[z]] < 0) bounds[z] = true;
				if ((obj[props[z]] + tip[z] - scroll[z]) > size[z] - this.options.windowPadding[z]){
					obj[props[z]] = event.page[z] - this.options.offset[z] - tip[z];
					bounds[z+'2'] = true;
				}
			}

			this.fireEvent('bound', bounds);
			this.tip.setStyles(obj);
		},

		fill: function(element, contents){
			if (typeof contents == 'string') element.set('html', contents);
			else element.adopt(contents);
		},

		show: function(element){
			if (!this.tip) document.id(this);
			if (!this.tip.getParent()) this.tip.inject(document.body);
			this.fireEvent('show', [this.tip, element]);
		},

		hide: function(element){
			if (!this.tip) document.id(this);
			this.fireEvent('hide', [this.tip, element]);
		}

	});

	})();

	/*
	---
	name: Locale.CH.Number
	description: Number messages for Switzerland.
	license: MIT-style license
	authors:
	  - Kim D. Jeker
	requires:
	  - Locale
	provides: [Locale.CH.Number]
	...
	*/

	Locale.define('CH', 'Number', {

		decimal: ',',
		group: '\'',

		currency: {
			decimal: '.',
			suffix: ' CHF'
		}

	});

	/*
	---

	name: Locale.EU.Number

	description: Number messages for Europe.

	license: MIT-style license

	authors:
	  - Arian Stolwijk

	requires:
	  - Locale

	provides: [Locale.EU.Number]

	...
	*/

	Locale.define('EU', 'Number', {

		decimal: ',',
		group: '.',

		currency: {
			prefix: '€ '
		}

	});

	/*
	---

	script: Locale.Set.From.js

	name: Locale.Set.From

	description: Provides an alternative way to create Locale.Set objects.

	license: MIT-style license

	authors:
	  - Tim Wienk

	requires:
	  - Core/JSON
	  - Locale

	provides: Locale.Set.From

	...
	*/

	(function(){

	var parsers = {
		'json': JSON.decode
	};

	Locale.Set.defineParser = function(name, fn){
		parsers[name] = fn;
	};

	Locale.Set.from = function(set, type){
		if (instanceOf(set, Locale.Set)) return set;

		if (!type && typeOf(set) == 'string') type = 'json';
		if (parsers[type]) set = parsers[type](set);

		var locale = new Locale.Set;

		locale.sets = set.sets || {};

		if (set.inherits){
			locale.inherits.locales = Array.convert(set.inherits.locales);
			locale.inherits.sets = set.inherits.sets || {};
		}

		return locale;
	};

	})();

	/*
	---

	name: Locale.ZA.Number

	description: Number messages for ZA.

	license: MIT-style license

	authors:
	  - Werner Mollentze

	requires:
	  - Locale

	provides: [Locale.ZA.Number]

	...
	*/

	Locale.define('ZA', 'Number', {

		decimal: '.',
		group: ',',

		currency: {
			prefix: 'R '
		}

	});



	/*
	---

	name: Locale.af-ZA.Date

	description: Date messages for ZA Afrikaans.

	license: MIT-style license

	authors:
	  - Werner Mollentze

	requires:
	  - Locale

	provides: [Locale.af-ZA.Date]

	...
	*/

	Locale.define('af-ZA', 'Date', {

		months: ['Januarie', 'Februarie', 'Maart', 'April', 'Mei', 'Junie', 'Julie', 'Augustus', 'September', 'Oktober', 'November', 'Desember'],
		months_abbr: ['Jan', 'Feb', 'Mrt', 'Apr', 'Mei', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Des'],
		days: ['Sondag', 'Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrydag', 'Saterdag'],
		days_abbr: ['Son', 'Maa', 'Din', 'Woe', 'Don', 'Vry', 'Sat'],

		// Culture's date order: MM/DD/YYYY
		dateOrder: ['date', 'month', 'year'],
		shortDate: '%d-%m-%Y',
		shortTime: '%H:%M',
		AM: 'VM',
		PM: 'NM',
		firstDayOfWeek: 1,

		// Date.Extras
		ordinal: function(dayOfMonth){
			return ((dayOfMonth > 1 && dayOfMonth < 20 && dayOfMonth != 8) || (dayOfMonth > 100 && dayOfMonth.toString().substr(-2, 1) == '1')) ? 'de' : 'ste';
		},

		lessThanMinuteAgo: 'minder as \'n minuut gelede',
		minuteAgo: 'ongeveer \'n minuut gelede',
		minutesAgo: '{delta} minute gelede',
		hourAgo: 'omtret \'n uur gelede',
		hoursAgo: 'ongeveer {delta} ure gelede',
		dayAgo: '1 dag gelede',
		daysAgo: '{delta} dae gelede',
		weekAgo: '1 week gelede',
		weeksAgo: '{delta} weke gelede',
		monthAgo: '1 maand gelede',
		monthsAgo: '{delta} maande gelede',
		yearAgo: '1 jaar gelede',
		yearsAgo: '{delta} jare gelede',

		lessThanMinuteUntil: 'oor minder as \'n minuut',
		minuteUntil: 'oor ongeveer \'n minuut',
		minutesUntil: 'oor {delta} minute',
		hourUntil: 'oor ongeveer \'n uur',
		hoursUntil: 'oor {delta} uur',
		dayUntil: 'oor ongeveer \'n dag',
		daysUntil: 'oor {delta} dae',
		weekUntil: 'oor \'n week',
		weeksUntil: 'oor {delta} weke',
		monthUntil: 'oor \'n maand',
		monthsUntil: 'oor {delta} maande',
		yearUntil: 'oor \'n jaar',
		yearsUntil: 'oor {delta} jaar'

	});

	/*
	---

	name: Locale.af-ZA.Form.Validator

	description: Form Validator messages for Afrikaans.

	license: MIT-style license

	authors:
	  - Werner Mollentze

	requires:
	  - Locale

	provides: [Locale.af-ZA.Form.Validator]

	...
	*/

	Locale.define('af-ZA', 'FormValidator', {

		required: 'Hierdie veld word vereis.',
		length: 'Voer asseblief {length} karakters in (u het {elLength} karakters ingevoer)',
		minLength: 'Voer asseblief ten minste {minLength} karakters in (u het {length} karakters ingevoer).',
		maxLength: 'Moet asseblief nie meer as {maxLength} karakters invoer nie (u het {length} karakters ingevoer).',
		integer: 'Voer asseblief \'n heelgetal in hierdie veld in. Getalle met desimale (bv. 1.25) word nie toegelaat nie.',
		numeric: 'Voer asseblief slegs numeriese waardes in hierdie veld in (bv. "1" of "1.1" of "-1" of "-1.1").',
		digits: 'Gebruik asseblief slegs nommers en punktuasie in hierdie veld. (by voorbeeld, \'n telefoon nommer wat koppeltekens en punte bevat is toelaatbaar).',
		alpha: 'Gebruik asseblief slegs letters (a-z) binne-in hierdie veld. Geen spasies of ander karakters word toegelaat nie.',
		alphanum: 'Gebruik asseblief slegs letters (a-z) en nommers (0-9) binne-in hierdie veld. Geen spasies of ander karakters word toegelaat nie.',
		dateSuchAs: 'Voer asseblief \'n geldige datum soos {date} in',
		dateInFormatMDY: 'Voer asseblief \'n geldige datum soos MM/DD/YYYY in (bv. "12/31/1999")',
		email: 'Voer asseblief \'n geldige e-pos adres in. Byvoorbeeld "fred@domain.com".',
		url: 'Voer asseblief \'n geldige bronadres (URL) soos http://www.example.com in.',
		currencyDollar: 'Voer asseblief \'n geldige $ bedrag in. Byvoorbeeld $100.00 .',
		oneRequired: 'Voer asseblief iets in vir ten minste een van hierdie velde.',
		errorPrefix: 'Fout: ',
		warningPrefix: 'Waarskuwing: ',

		// Form.Validator.Extras
		noSpace: 'Daar mag geen spasies in hierdie toevoer wees nie.',
		reqChkByNode: 'Geen items is gekies nie.',
		requiredChk: 'Hierdie veld word vereis.',
		reqChkByName: 'Kies asseblief \'n {label}.',
		match: 'Hierdie veld moet by die {matchName} veld pas',
		startDate: 'die begin datum',
		endDate: 'die eind datum',
		currentDate: 'die huidige datum',
		afterDate: 'Die datum moet dieselfde of na {label} wees.',
		beforeDate: 'Die datum moet dieselfde of voor {label} wees.',
		startMonth: 'Kies asseblief \'n begin maand',
		sameMonth: 'Hierdie twee datums moet in dieselfde maand wees - u moet een of beide verander.',
		creditcard: 'Die ingevoerde kredietkaart nommer is ongeldig. Bevestig asseblief die nommer en probeer weer. {length} syfers is ingevoer.'

	});

	/*
	---

	name: Locale.af-ZA.Number

	description: Number messages for ZA Afrikaans.

	license: MIT-style license

	authors:
	  - Werner Mollentze

	requires:
	  - Locale
	  - Locale.ZA.Number

	provides: [Locale.af-ZA.Number]

	...
	*/

	Locale.define('af-ZA').inherit('ZA', 'Number');

	/*
	---

	name: Locale.ar.Date

	description: Date messages for Arabic.

	license: MIT-style license

	authors:
	  - Chafik Barbar

	requires:
	  - Locale

	provides: [Locale.ar.Date]

	...
	*/

	Locale.define('ar', 'Date', {

		// Culture's date order: DD/MM/YYYY
		dateOrder: ['date', 'month', 'year'],
		shortDate: '%d/%m/%Y',
		shortTime: '%H:%M'

	});

	/*
	---

	name: Locale.ar.Form.Validator

	description: Form Validator messages for Arabic.

	license: MIT-style license

	authors:
	  - Chafik Barbar

	requires:
	  - Locale

	provides: [Locale.ar.Form.Validator]

	...
	*/

	Locale.define('ar', 'FormValidator', {

		required: 'هذا الحقل مطلوب.',
		minLength: 'رجاءً إدخال {minLength} أحرف على الأقل (تم إدخال {length} أحرف).',
		maxLength: 'الرجاء عدم إدخال أكثر من {maxLength} أحرف (تم إدخال {length} أحرف).',
		integer: 'الرجاء إدخال عدد صحيح في هذا الحقل. أي رقم ذو كسر عشري أو مئوي (مثال 1.25 ) غير مسموح.',
		numeric: 'الرجاء إدخال قيم رقمية في هذا الحقل (مثال "1" أو "1.1" أو "-1" أو "-1.1").',
		digits: 'الرجاء أستخدام قيم رقمية وعلامات ترقيمية فقط في هذا الحقل (مثال, رقم هاتف مع نقطة أو شحطة)',
		alpha: 'الرجاء أستخدام أحرف فقط (ا-ي) في هذا الحقل. أي فراغات أو علامات غير مسموحة.',
		alphanum: 'الرجاء أستخدام أحرف فقط (ا-ي) أو أرقام (0-9) فقط في هذا الحقل. أي فراغات أو علامات غير مسموحة.',
		dateSuchAs: 'الرجاء إدخال تاريخ صحيح كالتالي {date}',
		dateInFormatMDY: 'الرجاء إدخال تاريخ صحيح (مثال, 31-12-1999)',
		email: 'الرجاء إدخال بريد إلكتروني صحيح.',
		url: 'الرجاء إدخال عنوان إلكتروني صحيح مثل http://www.example.com',
		currencyDollar: 'الرجاء إدخال قيمة $ صحيحة. مثال, 100.00$',
		oneRequired: 'الرجاء إدخال قيمة في أحد هذه الحقول على الأقل.',
		errorPrefix: 'خطأ: ',
		warningPrefix: 'تحذير: '

	});

	/*
	---

	name: Locale.ca-CA.Date

	description: Date messages for Catalan.

	license: MIT-style license

	authors:
	  - Ãlfons Sanchez

	requires:
	  - Locale

	provides: [Locale.ca-CA.Date]

	...
	*/

	Locale.define('ca-CA', 'Date', {

		months: ['Gener', 'Febrer', 'Març', 'Abril', 'Maig', 'Juny', 'Juli', 'Agost', 'Setembre', 'Octubre', 'Novembre', 'Desembre'],
		months_abbr: ['gen.', 'febr.', 'març', 'abr.', 'maig', 'juny', 'jul.', 'ag.', 'set.', 'oct.', 'nov.', 'des.'],
		days: ['Diumenge', 'Dilluns', 'Dimarts', 'Dimecres', 'Dijous', 'Divendres', 'Dissabte'],
		days_abbr: ['dg', 'dl', 'dt', 'dc', 'dj', 'dv', 'ds'],

		// Culture's date order: DD/MM/YYYY
		dateOrder: ['date', 'month', 'year'],
		shortDate: '%d/%m/%Y',
		shortTime: '%H:%M',
		AM: 'AM',
		PM: 'PM',
		firstDayOfWeek: 0,

		// Date.Extras
		ordinal: '',

		lessThanMinuteAgo: 'fa menys d`un minut',
		minuteAgo: 'fa un minut',
		minutesAgo: 'fa {delta} minuts',
		hourAgo: 'fa un hora',
		hoursAgo: 'fa unes {delta} hores',
		dayAgo: 'fa un dia',
		daysAgo: 'fa {delta} dies',

		lessThanMinuteUntil: 'menys d`un minut des d`ara',
		minuteUntil: 'un minut des d`ara',
		minutesUntil: '{delta} minuts des d`ara',
		hourUntil: 'un hora des d`ara',
		hoursUntil: 'unes {delta} hores des d`ara',
		dayUntil: '1 dia des d`ara',
		daysUntil: '{delta} dies des d`ara'

	});

	/*
	---

	name: Locale.ca-CA.Form.Validator

	description: Form Validator messages for Catalan.

	license: MIT-style license

	authors:
	  - Miquel Hudin
	  - Ãlfons Sanchez

	requires:
	  - Locale

	provides: [Locale.ca-CA.Form.Validator]

	...
	*/

	Locale.define('ca-CA', 'FormValidator', {

		required: 'Aquest camp es obligatori.',
		minLength: 'Per favor introdueix al menys {minLength} caracters (has introduit {length} caracters).',
		maxLength: 'Per favor introdueix no mes de {maxLength} caracters (has introduit {length} caracters).',
		integer: 'Per favor introdueix un nombre enter en aquest camp. Nombres amb decimals (p.e. 1,25) no estan permesos.',
		numeric: 'Per favor introdueix sols valors numerics en aquest camp (p.e. "1" o "1,1" o "-1" o "-1,1").',
		digits: 'Per favor usa sols numeros i puntuacio en aquest camp (per exemple, un nombre de telefon amb guions i punts no esta permes).',
		alpha: 'Per favor utilitza lletres nomes (a-z) en aquest camp. No s´admiteixen espais ni altres caracters.',
		alphanum: 'Per favor, utilitza nomes lletres (a-z) o numeros (0-9) en aquest camp. No s´admiteixen espais ni altres caracters.',
		dateSuchAs: 'Per favor introdueix una data valida com {date}',
		dateInFormatMDY: 'Per favor introdueix una data valida com DD/MM/YYYY (p.e. "31/12/1999")',
		email: 'Per favor, introdueix una adreça de correu electronic valida. Per exemple, "fred@domain.com".',
		url: 'Per favor introdueix una URL valida com http://www.example.com.',
		currencyDollar: 'Per favor introdueix una quantitat valida de €. Per exemple €100,00 .',
		oneRequired: 'Per favor introdueix alguna cosa per al menys una d´aquestes entrades.',
		errorPrefix: 'Error: ',
		warningPrefix: 'Avis: ',

		// Form.Validator.Extras
		noSpace: 'No poden haver espais en aquesta entrada.',
		reqChkByNode: 'No hi han elements seleccionats.',
		requiredChk: 'Aquest camp es obligatori.',
		reqChkByName: 'Per favor selecciona una {label}.',
		match: 'Aquest camp necessita coincidir amb el camp {matchName}',
		startDate: 'la data de inici',
		endDate: 'la data de fi',
		currentDate: 'la data actual',
		afterDate: 'La data deu ser igual o posterior a {label}.',
		beforeDate: 'La data deu ser igual o anterior a {label}.',
		startMonth: 'Per favor selecciona un mes d´orige',
		sameMonth: 'Aquestes dos dates deuen estar dins del mateix mes - deus canviar una o altra.'

	});

	/*
	---

	name: Locale.cs-CZ.Date

	description: Date messages for Czech.

	license: MIT-style license

	authors:
	  - Jan Černý chemiX
	  - Christopher Zukowski

	requires:
	  - Locale

	provides: [Locale.cs-CZ.Date]

	...
	*/
	(function(){

	// Czech language pluralization rules, see http://unicode.org/repos/cldr-tmp/trunk/diff/supplemental/language_plural_rules.html
	// one -> n is 1;            1
	// few -> n in 2..4;         2-4
	// other -> everything else  0, 5-999, 1.31, 2.31, 5.31...
	var pluralize = function(n, one, few, other){
		if (n == 1) return one;
		else if (n == 2 || n == 3 || n == 4) return few;
		else return other;
	};

	Locale.define('cs-CZ', 'Date', {

		months: ['Leden', 'Únor', 'Březen', 'Duben', 'Květen', 'Červen', 'Červenec', 'Srpen', 'Září', 'Říjen', 'Listopad', 'Prosinec'],
		months_abbr: ['ledna', 'února', 'března', 'dubna', 'května', 'června', 'července', 'srpna', 'září', 'října', 'listopadu', 'prosince'],
		days: ['Neděle', 'Pondělí', 'Úterý', 'Středa', 'Čtvrtek', 'Pátek', 'Sobota'],
		days_abbr: ['ne', 'po', 'út', 'st', 'čt', 'pá', 'so'],

		// Culture's date order: DD.MM.YYYY
		dateOrder: ['date', 'month', 'year'],
		shortDate: '%d.%m.%Y',
		shortTime: '%H:%M',
		AM: 'dop.',
		PM: 'odp.',
		firstDayOfWeek: 1,

		// Date.Extras
		ordinal: '.',

		lessThanMinuteAgo: 'před chvílí',
		minuteAgo: 'přibližně před minutou',
		minutesAgo: function(delta){ return 'před {delta} ' + pluralize(delta, 'minutou', 'minutami', 'minutami'); },
		hourAgo: 'přibližně před hodinou',
		hoursAgo: function(delta){ return 'před {delta} ' + pluralize(delta, 'hodinou', 'hodinami', 'hodinami'); },
		dayAgo: 'před dnem',
		daysAgo: function(delta){ return 'před {delta} ' + pluralize(delta, 'dnem', 'dny', 'dny'); },
		weekAgo: 'před týdnem',
		weeksAgo: function(delta){ return 'před {delta} ' + pluralize(delta, 'týdnem', 'týdny', 'týdny'); },
		monthAgo: 'před měsícem',
		monthsAgo: function(delta){ return 'před {delta} ' + pluralize(delta, 'měsícem', 'měsíci', 'měsíci'); },
		yearAgo: 'před rokem',
		yearsAgo: function(delta){ return 'před {delta} ' + pluralize(delta, 'rokem', 'lety', 'lety'); },

		lessThanMinuteUntil: 'za chvíli',
		minuteUntil: 'přibližně za minutu',
		minutesUntil: function(delta){ return 'za {delta} ' + pluralize(delta, 'minutu', 'minuty', 'minut'); },
		hourUntil: 'přibližně za hodinu',
		hoursUntil: function(delta){ return 'za {delta} ' + pluralize(delta, 'hodinu', 'hodiny', 'hodin'); },
		dayUntil: 'za den',
		daysUntil: function(delta){ return 'za {delta} ' + pluralize(delta, 'den', 'dny', 'dnů'); },
		weekUntil: 'za týden',
		weeksUntil: function(delta){ return 'za {delta} ' + pluralize(delta, 'týden', 'týdny', 'týdnů'); },
		monthUntil: 'za měsíc',
		monthsUntil: function(delta){ return 'za {delta} ' + pluralize(delta, 'měsíc', 'měsíce', 'měsíců'); },
		yearUntil: 'za rok',
		yearsUntil: function(delta){ return 'za {delta} ' + pluralize(delta, 'rok', 'roky', 'let'); }
	});

	})();

	/*
	---

	name: Locale.cs-CZ.Form.Validator

	description: Form Validator messages for Czech.

	license: MIT-style license

	authors:
	  - Jan Černý chemiX

	requires:
	  - Locale

	provides: [Locale.cs-CZ.Form.Validator]

	...
	*/

	Locale.define('cs-CZ', 'FormValidator', {

		required: 'Tato položka je povinná.',
		minLength: 'Zadejte prosím alespoň {minLength} znaků (napsáno {length} znaků).',
		maxLength: 'Zadejte prosím méně než {maxLength} znaků (nápsáno {length} znaků).',
		integer: 'Zadejte prosím celé číslo. Desetinná čísla (např. 1.25) nejsou povolena.',
		numeric: 'Zadejte jen číselné hodnoty (tj. "1" nebo "1.1" nebo "-1" nebo "-1.1").',
		digits: 'Zadejte prosím pouze čísla a interpunkční znaménka(například telefonní číslo s pomlčkami nebo tečkami je povoleno).',
		alpha: 'Zadejte prosím pouze písmena (a-z). Mezery nebo jiné znaky nejsou povoleny.',
		alphanum: 'Zadejte prosím pouze písmena (a-z) nebo číslice (0-9). Mezery nebo jiné znaky nejsou povoleny.',
		dateSuchAs: 'Zadejte prosím platné datum jako {date}',
		dateInFormatMDY: 'Zadejte prosím platné datum jako MM / DD / RRRR (tj. "12/31/1999")',
		email: 'Zadejte prosím platnou e-mailovou adresu. Například "fred@domain.com".',
		url: 'Zadejte prosím platnou URL adresu jako http://www.example.com.',
		currencyDollar: 'Zadejte prosím platnou částku. Například $100.00.',
		oneRequired: 'Zadejte prosím alespoň jednu hodnotu pro tyto položky.',
		errorPrefix: 'Chyba: ',
		warningPrefix: 'Upozornění: ',

		// Form.Validator.Extras
		noSpace: 'V této položce nejsou povoleny mezery',
		reqChkByNode: 'Nejsou vybrány žádné položky.',
		requiredChk: 'Tato položka je vyžadována.',
		reqChkByName: 'Prosím vyberte {label}.',
		match: 'Tato položka se musí shodovat s položkou {matchName}',
		startDate: 'datum zahájení',
		endDate: 'datum ukončení',
		currentDate: 'aktuální datum',
		afterDate: 'Datum by mělo být stejné nebo větší než {label}.',
		beforeDate: 'Datum by mělo být stejné nebo menší než {label}.',
		startMonth: 'Vyberte počáteční měsíc.',
		sameMonth: 'Tyto dva datumy musí být ve stejném měsíci - změňte jeden z nich.',
		creditcard: 'Zadané číslo kreditní karty je neplatné. Prosím opravte ho. Bylo zadáno {length} čísel.'

	});

	/*
	---

	name: Locale.da-DK.Date

	description: Date messages for Danish.

	license: MIT-style license

	authors:
	  - Martin Overgaard
	  - Henrik Hansen

	requires:
	  - Locale

	provides: [Locale.da-DK.Date]

	...
	*/

	Locale.define('da-DK', 'Date', {

		months: ['Januar', 'Februar', 'Marts', 'April', 'Maj', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'December'],
		months_abbr: ['jan.', 'feb.', 'mar.', 'apr.', 'maj.', 'jun.', 'jul.', 'aug.', 'sep.', 'okt.', 'nov.', 'dec.'],
		days: ['Søndag', 'Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lørdag'],
		days_abbr: ['søn', 'man', 'tir', 'ons', 'tor', 'fre', 'lør'],

		// Culture's date order: DD-MM-YYYY
		dateOrder: ['date', 'month', 'year'],
		shortDate: '%d-%m-%Y',
		shortTime: '%H:%M',
		AM: 'AM',
		PM: 'PM',
		firstDayOfWeek: 1,

		// Date.Extras
		ordinal: '.',

		lessThanMinuteAgo: 'mindre end et minut siden',
		minuteAgo: 'omkring et minut siden',
		minutesAgo: '{delta} minutter siden',
		hourAgo: 'omkring en time siden',
		hoursAgo: 'omkring {delta} timer siden',
		dayAgo: '1 dag siden',
		daysAgo: '{delta} dage siden',
		weekAgo: '1 uge siden',
		weeksAgo: '{delta} uger siden',
		monthAgo: '1 måned siden',
		monthsAgo: '{delta} måneder siden',
		yearAgo: '1 år siden',
		yearsAgo: '{delta} år siden',

		lessThanMinuteUntil: 'mindre end et minut fra nu',
		minuteUntil: 'omkring et minut fra nu',
		minutesUntil: '{delta} minutter fra nu',
		hourUntil: 'omkring en time fra nu',
		hoursUntil: 'omkring {delta} timer fra nu',
		dayUntil: '1 dag fra nu',
		daysUntil: '{delta} dage fra nu',
		weekUntil: '1 uge fra nu',
		weeksUntil: '{delta} uger fra nu',
		monthUntil: '1 måned fra nu',
		monthsUntil: '{delta} måneder fra nu',
		yearUntil: '1 år fra nu',
		yearsUntil: '{delta} år fra nu'

	});

	/*
	---

	name: Locale.da-DK.Form.Validator

	description: Form Validator messages for Danish.

	license: MIT-style license

	authors:
	  - Martin Overgaard

	requires:
	  - Locale

	provides: [Locale.da-DK.Form.Validator]

	...
	*/

	Locale.define('da-DK', 'FormValidator', {

		required: 'Feltet skal udfyldes.',
		minLength: 'Skriv mindst {minLength} tegn (du skrev {length} tegn).',
		maxLength: 'Skriv maksimalt {maxLength} tegn (du skrev {length} tegn).',
		integer: 'Skriv et tal i dette felt. Decimal tal (f.eks. 1.25) er ikke tilladt.',
		numeric: 'Skriv kun tal i dette felt (i.e. "1" eller "1.1" eller "-1" eller "-1.1").',
		digits: 'Skriv kun tal og tegnsætning i dette felt (eksempel, et telefon nummer med bindestreg eller punktum er tilladt).',
		alpha: 'Skriv kun bogstaver (a-z) i dette felt. Mellemrum og andre tegn er ikke tilladt.',
		alphanum: 'Skriv kun bogstaver (a-z) eller tal (0-9) i dette felt. Mellemrum og andre tegn er ikke tilladt.',
		dateSuchAs: 'Skriv en gyldig dato som {date}',
		dateInFormatMDY: 'Skriv dato i formatet DD-MM-YYYY (f.eks. "31-12-1999")',
		email: 'Skriv en gyldig e-mail adresse. F.eks "fred@domain.com".',
		url: 'Skriv en gyldig URL adresse. F.eks "http://www.example.com".',
		currencyDollar: 'Skriv et gldigt beløb. F.eks Kr.100.00 .',
		oneRequired: 'Et eller flere af felterne i denne formular skal udfyldes.',
		errorPrefix: 'Fejl: ',
		warningPrefix: 'Advarsel: ',

		// Form.Validator.Extras
		noSpace: 'Der må ikke benyttes mellemrum i dette felt.',
		reqChkByNode: 'Foretag et valg.',
		requiredChk: 'Dette felt skal udfyldes.',
		reqChkByName: 'Vælg en {label}.',
		match: 'Dette felt skal matche {matchName} feltet',
		startDate: 'start dato',
		endDate: 'slut dato',
		currentDate: 'dags dato',
		afterDate: 'Datoen skal være større end eller lig med {label}.',
		beforeDate: 'Datoen skal være mindre end eller lig med {label}.',
		startMonth: 'Vælg en start måned',
		sameMonth: 'De valgte datoer skal være i samme måned - skift en af dem.'

	});

	/*
	---

	name: Locale.de-DE.Date

	description: Date messages for German.

	license: MIT-style license

	authors:
	  - Christoph Pojer
	  - Frank Rossi
	  - Ulrich Petri
	  - Fabian Beiner

	requires:
	  - Locale

	provides: [Locale.de-DE.Date]

	...
	*/

	Locale.define('de-DE', 'Date', {

		months: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
		months_abbr: ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'],
		days: ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'],
		days_abbr: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'],

		// Culture's date order: DD.MM.YYYY
		dateOrder: ['date', 'month', 'year'],
		shortDate: '%d.%m.%Y',
		shortTime: '%H:%M',
		AM: 'vormittags',
		PM: 'nachmittags',
		firstDayOfWeek: 1,

		// Date.Extras
		ordinal: '.',

		lessThanMinuteAgo: 'vor weniger als einer Minute',
		minuteAgo: 'vor einer Minute',
		minutesAgo: 'vor {delta} Minuten',
		hourAgo: 'vor einer Stunde',
		hoursAgo: 'vor {delta} Stunden',
		dayAgo: 'vor einem Tag',
		daysAgo: 'vor {delta} Tagen',
		weekAgo: 'vor einer Woche',
		weeksAgo: 'vor {delta} Wochen',
		monthAgo: 'vor einem Monat',
		monthsAgo: 'vor {delta} Monaten',
		yearAgo: 'vor einem Jahr',
		yearsAgo: 'vor {delta} Jahren',

		lessThanMinuteUntil: 'in weniger als einer Minute',
		minuteUntil: 'in einer Minute',
		minutesUntil: 'in {delta} Minuten',
		hourUntil: 'in ca. einer Stunde',
		hoursUntil: 'in ca. {delta} Stunden',
		dayUntil: 'in einem Tag',
		daysUntil: 'in {delta} Tagen',
		weekUntil: 'in einer Woche',
		weeksUntil: 'in {delta} Wochen',
		monthUntil: 'in einem Monat',
		monthsUntil: 'in {delta} Monaten',
		yearUntil: 'in einem Jahr',
		yearsUntil: 'in {delta} Jahren'

	});

	/*
	---

	name: Locale.de-CH.Date

	description: Date messages for German (Switzerland).

	license: MIT-style license

	authors:
	  - Michael van der Weg

	requires:
	  - Locale
	  - Locale.de-DE.Date

	provides: [Locale.de-CH.Date]

	...
	*/

	Locale.define('de-CH').inherit('de-DE', 'Date');

	/*
	---

	name: Locale.de-CH.Form.Validator

	description: Form Validator messages for German (Switzerland).

	license: MIT-style license

	authors:
	  - Michael van der Weg

	requires:
	  - Locale

	provides: [Locale.de-CH.Form.Validator]

	...
	*/

	Locale.define('de-CH', 'FormValidator', {

		required: 'Dieses Feld ist obligatorisch.',
		minLength: 'Geben Sie bitte mindestens {minLength} Zeichen ein (Sie haben {length} Zeichen eingegeben).',
		maxLength: 'Bitte geben Sie nicht mehr als {maxLength} Zeichen ein (Sie haben {length} Zeichen eingegeben).',
		integer: 'Geben Sie bitte eine ganze Zahl ein. Dezimalzahlen (z.B. 1.25) sind nicht erlaubt.',
		numeric: 'Geben Sie bitte nur Zahlenwerte in dieses Eingabefeld ein (z.B. &quot;1&quot;, &quot;1.1&quot;, &quot;-1&quot; oder &quot;-1.1&quot;).',
		digits: 'Benutzen Sie bitte nur Zahlen und Satzzeichen in diesem Eingabefeld (erlaubt ist z.B. eine Telefonnummer mit Bindestrichen und Punkten).',
		alpha: 'Benutzen Sie bitte nur Buchstaben (a-z) in diesem Feld. Leerzeichen und andere Zeichen sind nicht erlaubt.',
		alphanum: 'Benutzen Sie bitte nur Buchstaben (a-z) und Zahlen (0-9) in diesem Eingabefeld. Leerzeichen und andere Zeichen sind nicht erlaubt.',
		dateSuchAs: 'Geben Sie bitte ein g&uuml;ltiges Datum ein. Wie zum Beispiel {date}',
		dateInFormatMDY: 'Geben Sie bitte ein g&uuml;ltiges Datum ein. Wie zum Beispiel TT.MM.JJJJ (z.B. &quot;31.12.1999&quot;)',
		email: 'Geben Sie bitte eine g&uuml;ltige E-Mail Adresse ein. Wie zum Beispiel &quot;maria@bernasconi.ch&quot;.',
		url: 'Geben Sie bitte eine g&uuml;ltige URL ein. Wie zum Beispiel http://www.example.com.',
		currencyDollar: 'Geben Sie bitte einen g&uuml;ltigen Betrag in Schweizer Franken ein. Wie zum Beispiel 100.00 CHF .',
		oneRequired: 'Machen Sie f&uuml;r mindestens eines der Eingabefelder einen Eintrag.',
		errorPrefix: 'Fehler: ',
		warningPrefix: 'Warnung: ',

		// Form.Validator.Extras
		noSpace: 'In diesem Eingabefeld darf kein Leerzeichen sein.',
		reqChkByNode: 'Es wurden keine Elemente gew&auml;hlt.',
		requiredChk: 'Dieses Feld ist obligatorisch.',
		reqChkByName: 'Bitte w&auml;hlen Sie ein {label}.',
		match: 'Dieses Eingabefeld muss mit dem Feld {matchName} &uuml;bereinstimmen.',
		startDate: 'Das Anfangsdatum',
		endDate: 'Das Enddatum',
		currentDate: 'Das aktuelle Datum',
		afterDate: 'Das Datum sollte zur gleichen Zeit oder sp&auml;ter sein {label}.',
		beforeDate: 'Das Datum sollte zur gleichen Zeit oder fr&uuml;her sein {label}.',
		startMonth: 'W&auml;hlen Sie bitte einen Anfangsmonat',
		sameMonth: 'Diese zwei Datumsangaben m&uuml;ssen im selben Monat sein - Sie m&uuml;ssen eine von beiden ver&auml;ndern.',
		creditcard: 'Die eingegebene Kreditkartennummer ist ung&uuml;ltig. Bitte &uuml;berpr&uuml;fen Sie diese und versuchen Sie es erneut. {length} Zahlen eingegeben.'

	});

	/*
	---
	name: Locale.de-CH.Number
	description: Number messages for Switzerland.
	license: MIT-style license
	authors:
	  - Kim D. Jeker
	requires:
	  - Locale
	  - Locale.CH.Number
	provides: [Locale.de-CH.Number]
	...
	*/

	Locale.define('de-CH').inherit('CH', 'Number');

	/*
	---

	name: Locale.de-DE.Form.Validator

	description: Form Validator messages for German.

	license: MIT-style license

	authors:
	  - Frank Rossi
	  - Ulrich Petri
	  - Fabian Beiner

	requires:
	  - Locale

	provides: [Locale.de-DE.Form.Validator]

	...
	*/

	Locale.define('de-DE', 'FormValidator', {

		required: 'Dieses Eingabefeld muss ausgefüllt werden.',
		minLength: 'Geben Sie bitte mindestens {minLength} Zeichen ein (Sie haben nur {length} Zeichen eingegeben).',
		maxLength: 'Geben Sie bitte nicht mehr als {maxLength} Zeichen ein (Sie haben {length} Zeichen eingegeben).',
		integer: 'Geben Sie in diesem Eingabefeld bitte eine ganze Zahl ein. Dezimalzahlen (z.B. "1.25") sind nicht erlaubt.',
		numeric: 'Geben Sie in diesem Eingabefeld bitte nur Zahlenwerte (z.B. "1", "1.1", "-1" oder "-1.1") ein.',
		digits: 'Geben Sie in diesem Eingabefeld bitte nur Zahlen und Satzzeichen ein (z.B. eine Telefonnummer mit Bindestrichen und Punkten ist erlaubt).',
		alpha: 'Geben Sie in diesem Eingabefeld bitte nur Buchstaben (a-z) ein. Leerzeichen und andere Zeichen sind nicht erlaubt.',
		alphanum: 'Geben Sie in diesem Eingabefeld bitte nur Buchstaben (a-z) und Zahlen (0-9) ein. Leerzeichen oder andere Zeichen sind nicht erlaubt.',
		dateSuchAs: 'Geben Sie bitte ein gültiges Datum ein (z.B. "{date}").',
		dateInFormatMDY: 'Geben Sie bitte ein gültiges Datum im Format TT.MM.JJJJ ein (z.B. "31.12.1999").',
		email: 'Geben Sie bitte eine gültige E-Mail-Adresse ein (z.B. "max@mustermann.de").',
		url: 'Geben Sie bitte eine gültige URL ein (z.B. "http://www.example.com").',
		currencyDollar: 'Geben Sie bitte einen gültigen Betrag in EURO ein (z.B. 100.00€).',
		oneRequired: 'Bitte füllen Sie mindestens ein Eingabefeld aus.',
		errorPrefix: 'Fehler: ',
		warningPrefix: 'Warnung: ',

		// Form.Validator.Extras
		noSpace: 'Es darf kein Leerzeichen in diesem Eingabefeld sein.',
		reqChkByNode: 'Es wurden keine Elemente gewählt.',
		requiredChk: 'Dieses Feld muss ausgefüllt werden.',
		reqChkByName: 'Bitte wählen Sie ein {label}.',
		match: 'Dieses Eingabefeld muss mit dem {matchName} Eingabefeld übereinstimmen.',
		startDate: 'Das Anfangsdatum',
		endDate: 'Das Enddatum',
		currentDate: 'Das aktuelle Datum',
		afterDate: 'Das Datum sollte zur gleichen Zeit oder später sein als {label}.',
		beforeDate: 'Das Datum sollte zur gleichen Zeit oder früher sein als {label}.',
		startMonth: 'Wählen Sie bitte einen Anfangsmonat',
		sameMonth: 'Diese zwei Datumsangaben müssen im selben Monat sein - Sie müssen eines von beiden verändern.',
		creditcard: 'Die eingegebene Kreditkartennummer ist ungültig. Bitte überprüfen Sie diese und versuchen Sie es erneut. {length} Zahlen eingegeben.'

	});

	/*
	---

	name: Locale.de-DE.Number

	description: Number messages for German.

	license: MIT-style license

	authors:
	  - Christoph Pojer

	requires:
	  - Locale
	  - Locale.EU.Number

	provides: [Locale.de-DE.Number]

	...
	*/

	Locale.define('de-DE').inherit('EU', 'Number');

	/*
	---

	name: Locale.el-GR.Date

	description: Date messages for Greek language.

	license: MIT-style license

	authors:
	  - Periklis Argiriadis

	requires:
	  - Locale

	provides: [Locale.el-GR.Date]

	...
	*/

	Locale.define('el-GR', 'Date', {

		months: ['Ιανουάριος', 'Φεβρουάριος', 'Μάρτιος', 'Απρίλιος', 'Μάιος', 'Ιούνιος', 'Ιούλιος', 'Αύγουστος', 'Σεπτέμβριος', 'Οκτώβριος', 'Νοέμβριος', 'Δεκέμβριος'],
		months_abbr: ['Ιαν', 'Φεβ', 'Μαρ', 'Απρ', 'Μάι', 'Ιουν', 'Ιουλ', 'Αυγ', 'Σεπ', 'Οκτ', 'Νοε', 'Δεκ'],
		days: ['Κυριακή', 'Δευτέρα', 'Τρίτη', 'Τετάρτη', 'Πέμπτη', 'Παρασκευή', 'Σάββατο'],
		days_abbr: ['Κυρ', 'Δευ', 'Τρι', 'Τετ', 'Πεμ', 'Παρ', 'Σαβ'],

		// Culture's date order: DD/MM/YYYY
		dateOrder: ['date', 'month', 'year'],
		shortDate: '%d/%m/%Y',
		shortTime: '%I:%M%p',
		AM: 'πμ',
		PM: 'μμ',
		firstDayOfWeek: 1,

		// Date.Extras
		ordinal: function(dayOfMonth){
			// 1st, 2nd, 3rd, etc.
			return (dayOfMonth > 3 && dayOfMonth < 21) ? 'ος' : ['ος'][Math.min(dayOfMonth % 10, 4)];
		},

		lessThanMinuteAgo: 'λιγότερο από ένα λεπτό πριν',
		minuteAgo: 'περίπου ένα λεπτό πριν',
		minutesAgo: '{delta} λεπτά πριν',
		hourAgo: 'περίπου μια ώρα πριν',
		hoursAgo: 'περίπου {delta} ώρες πριν',
		dayAgo: '1 ημέρα πριν',
		daysAgo: '{delta} ημέρες πριν',
		weekAgo: '1 εβδομάδα πριν',
		weeksAgo: '{delta} εβδομάδες πριν',
		monthAgo: '1 μήνα πριν',
		monthsAgo: '{delta} μήνες πριν',
		yearAgo: '1 χρόνο πριν',
		yearsAgo: '{delta} χρόνια πριν',

		lessThanMinuteUntil: 'λιγότερο από λεπτό από τώρα',
		minuteUntil: 'περίπου ένα λεπτό από τώρα',
		minutesUntil: '{delta} λεπτά από τώρα',
		hourUntil: 'περίπου μια ώρα από τώρα',
		hoursUntil: 'περίπου {delta} ώρες από τώρα',
		dayUntil: '1 ημέρα από τώρα',
		daysUntil: '{delta} ημέρες από τώρα',
		weekUntil: '1 εβδομάδα από τώρα',
		weeksUntil: '{delta} εβδομάδες από τώρα',
		monthUntil: '1 μήνας από τώρα',
		monthsUntil: '{delta} μήνες από τώρα',
		yearUntil: '1 χρόνος από τώρα',
		yearsUntil: '{delta} χρόνια από τώρα'

	});

	/*
	---

	name: Locale.el-GR.Form.Validator

	description: Form Validator messages for Greek language.

	license: MIT-style license

	authors:
	  - Dimitris Tsironis

	requires:
	  - Locale

	provides: [Locale.el-GR.Form.Validator]

	...
	*/

	Locale.define('el-GR', 'FormValidator', {

		required: 'Αυτό το πεδίο είναι απαραίτητο.',
		length: 'Παρακαλούμε, εισάγετε {length} χαρακτήρες (έχετε ήδη εισάγει {elLength} χαρακτήρες).',
		minLength: 'Παρακαλούμε, εισάγετε τουλάχιστον {minLength} χαρακτήρες (έχετε ήδη εισάγε {length} χαρακτήρες).',
		maxlength: 'Παρακαλούμε, εισάγετε εώς {maxlength} χαρακτήρες (έχετε ήδη εισάγε {length} χαρακτήρες).',
		integer: 'Παρακαλούμε, εισάγετε έναν ακέραιο αριθμό σε αυτό το πεδίο. Οι αριθμοί με δεκαδικά ψηφία (π.χ. 1.25) δεν επιτρέπονται.',
		numeric: 'Παρακαλούμε, εισάγετε μόνο αριθμητικές τιμές σε αυτό το πεδίο (π.χ." 1 " ή " 1.1 " ή " -1 " ή " -1.1 " ).',
		digits: 'Παρακαλούμε, χρησιμοποιήστε μόνο αριθμούς και σημεία στίξης σε αυτόν τον τομέα (π.χ. επιτρέπεται αριθμός τηλεφώνου με παύλες ή τελείες).',
		alpha: 'Παρακαλούμε, χρησιμοποιήστε μόνο γράμματα (a-z) σε αυτό το πεδίο. Δεν επιτρέπονται κενά ή άλλοι χαρακτήρες.',
		alphanum: 'Παρακαλούμε, χρησιμοποιήστε μόνο γράμματα (a-z) ή αριθμούς (0-9) σε αυτόν τον τομέα. Δεν επιτρέπονται κενά ή άλλοι χαρακτήρες.',
		dateSuchAs: 'Παρακαλούμε, εισάγετε μια έγκυρη ημερομηνία, όπως {date}',
		dateInFormatMDY: 'Παρακαλώ εισάγετε μια έγκυρη ημερομηνία, όπως ΜΜ/ΗΗ/ΕΕΕΕ (π.χ. "12/31/1999").',
		email: 'Παρακαλούμε, εισάγετε μια έγκυρη διεύθυνση ηλεκτρονικού ταχυδρομείου (π.χ. "fred@domain.com").',
		url: 'Παρακαλούμε, εισάγετε μια έγκυρη URL διεύθυνση, όπως http://www.example.com',
		currencyDollar: 'Παρακαλούμε, εισάγετε ένα έγκυρο ποσό σε δολλάρια (π.χ. $100.00).',
		oneRequired: 'Παρακαλούμε, εισάγετε κάτι για τουλάχιστον ένα από αυτά τα πεδία.',
		errorPrefix: 'Σφάλμα: ',
		warningPrefix: 'Προσοχή: ',

		// Form.Validator.Extras
		noSpace: 'Δεν επιτρέπονται τα κενά σε αυτό το πεδίο.',
		reqChkByNode: 'Δεν έχει επιλεγεί κάποιο αντικείμενο',
		requiredChk: 'Αυτό το πεδίο είναι απαραίτητο.',
		reqChkByName: 'Παρακαλούμε, επιλέξτε μια ετικέτα {label}.',
		match: 'Αυτό το πεδίο πρέπει να ταιριάζει με το πεδίο {matchName}.',
		startDate: 'η ημερομηνία έναρξης',
		endDate: 'η ημερομηνία λήξης',
		currentDate: 'η τρέχουσα ημερομηνία',
		afterDate: 'Η ημερομηνία πρέπει να είναι η ίδια ή μετά από την {label}.',
		beforeDate: 'Η ημερομηνία πρέπει να είναι η ίδια ή πριν από την {label}.',
		startMonth: 'Παρακαλώ επιλέξτε ένα μήνα αρχής.',
		sameMonth: 'Αυτές οι δύο ημερομηνίες πρέπει να έχουν τον ίδιο μήνα - θα πρέπει να αλλάξετε ή το ένα ή το άλλο',
		creditcard: 'Ο αριθμός της πιστωτικής κάρτας δεν είναι έγκυρος. Παρακαλούμε ελέγξτε τον αριθμό και δοκιμάστε ξανά. {length} μήκος ψηφίων.'

	});

	/*
	---

	name: Locale.en-GB.Date

	description: Date messages for British English.

	license: MIT-style license

	authors:
	  - Aaron Newton

	requires:
	  - Locale
	  - Locale.en-US.Date

	provides: [Locale.en-GB.Date]

	...
	*/

	Locale.define('en-GB', 'Date', {

		// Culture's date order: DD/MM/YYYY
		dateOrder: ['date', 'month', 'year'],
		shortDate: '%d/%m/%Y',
		shortTime: '%H:%M'

	}).inherit('en-US', 'Date');

	/*
	---

	name: Locale.en-US.Number

	description: Number messages for US English.

	license: MIT-style license

	authors:
	  - Arian Stolwijk

	requires:
	  - Locale

	provides: [Locale.en-US.Number]

	...
	*/

	Locale.define('en-US', 'Number', {

		decimal: '.',
		group: ',',

	/* 	Commented properties are the defaults for Number.format
		decimals: 0,
		precision: 0,
		scientific: null,

		prefix: null,
		suffic: null,

		// Negative/Currency/percentage will mixin Number
		negative: {
			prefix: '-'
		},*/

		currency: {
	//		decimals: 2,
			prefix: '$ '
		}/*,

		percentage: {
			decimals: 2,
			suffix: '%'
		}*/

	});



	/*
	---

	name: Locale.es-ES.Date

	description: Date messages for Spanish.

	license: MIT-style license

	authors:
	  - Ãlfons Sanchez

	requires:
	  - Locale

	provides: [Locale.es-ES.Date]

	...
	*/

	Locale.define('es-ES', 'Date', {

		months: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
		months_abbr: ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'],
		days: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
		days_abbr: ['dom', 'lun', 'mar', 'mié', 'juv', 'vie', 'sáb'],

		// Culture's date order: DD/MM/YYYY
		dateOrder: ['date', 'month', 'year'],
		shortDate: '%d/%m/%Y',
		shortTime: '%H:%M',
		AM: 'AM',
		PM: 'PM',
		firstDayOfWeek: 1,

		// Date.Extras
		ordinal: '',

		lessThanMinuteAgo: 'hace menos de un minuto',
		minuteAgo: 'hace un minuto',
		minutesAgo: 'hace {delta} minutos',
		hourAgo: 'hace una hora',
		hoursAgo: 'hace unas {delta} horas',
		dayAgo: 'hace un día',
		daysAgo: 'hace {delta} días',
		weekAgo: 'hace una semana',
		weeksAgo: 'hace unas {delta} semanas',
		monthAgo: 'hace un mes',
		monthsAgo: 'hace {delta} meses',
		yearAgo: 'hace un año',
		yearsAgo: 'hace {delta} años',

		lessThanMinuteUntil: 'menos de un minuto desde ahora',
		minuteUntil: 'un minuto desde ahora',
		minutesUntil: '{delta} minutos desde ahora',
		hourUntil: 'una hora desde ahora',
		hoursUntil: 'unas {delta} horas desde ahora',
		dayUntil: 'un día desde ahora',
		daysUntil: '{delta} días desde ahora',
		weekUntil: 'una semana desde ahora',
		weeksUntil: 'unas {delta} semanas desde ahora',
		monthUntil: 'un mes desde ahora',
		monthsUntil: '{delta} meses desde ahora',
		yearUntil: 'un año desde ahora',
		yearsUntil: '{delta} años desde ahora'

	});

	/*
	---

	name: Locale.es-AR.Date

	description: Date messages for Spanish (Argentina).

	license: MIT-style license

	authors:
	  - Ãlfons Sanchez
	  - Diego Massanti

	requires:
	  - Locale
	  - Locale.es-ES.Date

	provides: [Locale.es-AR.Date]

	...
	*/

	Locale.define('es-AR').inherit('es-ES', 'Date');

	/*
	---

	name: Locale.es-AR.Form.Validator

	description: Form Validator messages for Spanish (Argentina).

	license: MIT-style license

	authors:
	  - Diego Massanti

	requires:
	  - Locale

	provides: [Locale.es-AR.Form.Validator]

	...
	*/

	Locale.define('es-AR', 'FormValidator', {

		required: 'Este campo es obligatorio.',
		minLength: 'Por favor ingrese al menos {minLength} caracteres (ha ingresado {length} caracteres).',
		maxLength: 'Por favor no ingrese más de {maxLength} caracteres (ha ingresado {length} caracteres).',
		integer: 'Por favor ingrese un número entero en este campo. Números con decimales (p.e. 1,25) no se permiten.',
		numeric: 'Por favor ingrese solo valores numéricos en este campo (p.e. "1" o "1,1" o "-1" o "-1,1").',
		digits: 'Por favor use sólo números y puntuación en este campo (por ejemplo, un número de teléfono con guiones y/o puntos no está permitido).',
		alpha: 'Por favor use sólo letras (a-z) en este campo. No se permiten espacios ni otros caracteres.',
		alphanum: 'Por favor, usa sólo letras (a-z) o números (0-9) en este campo. No se permiten espacios u otros caracteres.',
		dateSuchAs: 'Por favor ingrese una fecha válida como {date}',
		dateInFormatMDY: 'Por favor ingrese una fecha válida, utulizando el formato DD/MM/YYYY (p.e. "31/12/1999")',
		email: 'Por favor, ingrese una dirección de e-mail válida. Por ejemplo, "fred@dominio.com".',
		url: 'Por favor ingrese una URL válida como http://www.example.com.',
		currencyDollar: 'Por favor ingrese una cantidad válida de pesos. Por ejemplo $100,00 .',
		oneRequired: 'Por favor ingrese algo para por lo menos una de estas entradas.',
		errorPrefix: 'Error: ',
		warningPrefix: 'Advertencia: ',

		// Form.Validator.Extras
		noSpace: 'No se permiten espacios en este campo.',
		reqChkByNode: 'No hay elementos seleccionados.',
		requiredChk: 'Este campo es obligatorio.',
		reqChkByName: 'Por favor selecciona una {label}.',
		match: 'Este campo necesita coincidir con el campo {matchName}',
		startDate: 'la fecha de inicio',
		endDate: 'la fecha de fin',
		currentDate: 'la fecha actual',
		afterDate: 'La fecha debe ser igual o posterior a {label}.',
		beforeDate: 'La fecha debe ser igual o anterior a {label}.',
		startMonth: 'Por favor selecciona un mes de origen',
		sameMonth: 'Estas dos fechas deben estar en el mismo mes - debes cambiar una u otra.'

	});

	/*
	---

	name: Locale.es-AR.Number

	description: Number messages for es Argentina.

	license: MIT-style license

	authors:
	  - Oscar Kuchuk

	requires:
	  - Locale

	provides: [Locale.es-AR.Number]

	...
	*/

	Locale.define('es-AR', 'Number', {

		decimal: ',',
		group: '.',

	/* 	Commented properties are the defaults for Number.format
		decimals: 0,
		precision: 0,
		scientific: null,

		prefix: null,
		suffic: null,

		// Negative/Currency/percentage will mixin Number
		negative: {
			prefix: '-'
		},*/

		currency: {
			decimals: 2,
			prefix: '$ '
		}/*,

		percentage: {
			decimals: 2,
			suffix: '%'
		}*/

	});


	/*
	---

	name: Locale.es-ES.Form.Validator

	description: Form Validator messages for Spanish.

	license: MIT-style license

	authors:
	  - Ãlfons Sanchez

	requires:
	  - Locale

	provides: [Locale.es-ES.Form.Validator]

	...
	*/

	Locale.define('es-ES', 'FormValidator', {

		required: 'Este campo es obligatorio.',
		minLength: 'Por favor introduce al menos {minLength} caracteres (has introducido {length} caracteres).',
		maxLength: 'Por favor introduce no m&aacute;s de {maxLength} caracteres (has introducido {length} caracteres).',
		integer: 'Por favor introduce un n&uacute;mero entero en este campo. N&uacute;meros con decimales (p.e. 1,25) no se permiten.',
		numeric: 'Por favor introduce solo valores num&eacute;ricos en este campo (p.e. "1" o "1,1" o "-1" o "-1,1").',
		digits: 'Por favor usa solo n&uacute;meros y puntuaci&oacute;n en este campo (por ejemplo, un n&uacute;mero de tel&eacute;fono con guiones y puntos no esta permitido).',
		alpha: 'Por favor usa letras solo (a-z) en este campo. No se admiten espacios ni otros caracteres.',
		alphanum: 'Por favor, usa solo letras (a-z) o n&uacute;meros (0-9) en este campo. No se admiten espacios ni otros caracteres.',
		dateSuchAs: 'Por favor introduce una fecha v&aacute;lida como {date}',
		dateInFormatMDY: 'Por favor introduce una fecha v&aacute;lida como DD/MM/YYYY (p.e. "31/12/1999")',
		email: 'Por favor, introduce una direcci&oacute;n de email v&aacute;lida. Por ejemplo, "fred@domain.com".',
		url: 'Por favor introduce una URL v&aacute;lida como http://www.example.com.',
		currencyDollar: 'Por favor introduce una cantidad v&aacute;lida de €. Por ejemplo €100,00 .',
		oneRequired: 'Por favor introduce algo para por lo menos una de estas entradas.',
		errorPrefix: 'Error: ',
		warningPrefix: 'Aviso: ',

		// Form.Validator.Extras
		noSpace: 'No pueden haber espacios en esta entrada.',
		reqChkByNode: 'No hay elementos seleccionados.',
		requiredChk: 'Este campo es obligatorio.',
		reqChkByName: 'Por favor selecciona una {label}.',
		match: 'Este campo necesita coincidir con el campo {matchName}',
		startDate: 'la fecha de inicio',
		endDate: 'la fecha de fin',
		currentDate: 'la fecha actual',
		afterDate: 'La fecha debe ser igual o posterior a {label}.',
		beforeDate: 'La fecha debe ser igual o anterior a {label}.',
		startMonth: 'Por favor selecciona un mes de origen',
		sameMonth: 'Estas dos fechas deben estar en el mismo mes - debes cambiar una u otra.'

	});

	/*
	---

	name: Locale.es-VE.Date

	description: Date messages for Spanish (Venezuela).

	license: MIT-style license

	authors:
	  - Daniel Barreto

	requires:
	  - Locale
	  - Locale.es-ES.Date

	provides: [Locale.es-VE.Date]

	...
	*/

	Locale.define('es-VE').inherit('es-ES', 'Date');

	/*
	---

	name: Locale.es-VE.Form.Validator

	description: Form Validator messages for Spanish (Venezuela).

	license: MIT-style license

	authors:
	  - Daniel Barreto

	requires:
	  - Locale
	  - Locale.es-ES.Form.Validator

	provides: [Locale.es-VE.Form.Validator]

	...
	*/

	Locale.define('es-VE', 'FormValidator', {

		digits: 'Por favor usa solo n&uacute;meros y puntuaci&oacute;n en este campo. Por ejemplo, un n&uacute;mero de tel&eacute;fono con guiones y puntos no esta permitido.',
		alpha: 'Por favor usa solo letras (a-z) en este campo. No se admiten espacios ni otros caracteres.',
		currencyDollar: 'Por favor introduce una cantidad v&aacute;lida de Bs. Por ejemplo Bs. 100,00 .',
		oneRequired: 'Por favor introduce un valor para por lo menos una de estas entradas.',

		// Form.Validator.Extras
		startDate: 'La fecha de inicio',
		endDate: 'La fecha de fin',
		currentDate: 'La fecha actual'

	}).inherit('es-ES', 'FormValidator');

	/*
	---

	name: Locale.es-VE.Number

	description: Number messages for Spanish (Venezuela).

	license: MIT-style license

	authors:
	  - Daniel Barreto

	requires:
	  - Locale

	provides: [Locale.es-VE.Number]

	...
	*/

	Locale.define('es-VE', 'Number', {

		decimal: ',',
		group: '.',
	/*
		decimals: 0,
		precision: 0,
	*/
		// Negative/Currency/percentage will mixin Number
		negative: {
			prefix: '-'
		},

		currency: {
			decimals: 2,
			prefix: 'Bs. '
		},

		percentage: {
			decimals: 2,
			suffix: '%'
		}

	});

	/*
	---

	name: Locale.et-EE.Date

	description: Date messages for Estonian.

	license: MIT-style license

	authors:
	  - Kevin Valdek

	requires:
	  - Locale

	provides: [Locale.et-EE.Date]

	...
	*/

	Locale.define('et-EE', 'Date', {

		months: ['jaanuar', 'veebruar', 'märts', 'aprill', 'mai', 'juuni', 'juuli', 'august', 'september', 'oktoober', 'november', 'detsember'],
		months_abbr: ['jaan', 'veebr', 'märts', 'apr', 'mai', 'juuni', 'juuli', 'aug', 'sept', 'okt', 'nov', 'dets'],
		days: ['pühapäev', 'esmaspäev', 'teisipäev', 'kolmapäev', 'neljapäev', 'reede', 'laupäev'],
		days_abbr: ['pühap', 'esmasp', 'teisip', 'kolmap', 'neljap', 'reede', 'laup'],

		// Culture's date order: MM.DD.YYYY
		dateOrder: ['month', 'date', 'year'],
		shortDate: '%m.%d.%Y',
		shortTime: '%H:%M',
		AM: 'AM',
		PM: 'PM',
		firstDayOfWeek: 1,

		// Date.Extras
		ordinal: '',

		lessThanMinuteAgo: 'vähem kui minut aega tagasi',
		minuteAgo: 'umbes minut aega tagasi',
		minutesAgo: '{delta} minutit tagasi',
		hourAgo: 'umbes tund aega tagasi',
		hoursAgo: 'umbes {delta} tundi tagasi',
		dayAgo: '1 päev tagasi',
		daysAgo: '{delta} päeva tagasi',
		weekAgo: '1 nädal tagasi',
		weeksAgo: '{delta} nädalat tagasi',
		monthAgo: '1 kuu tagasi',
		monthsAgo: '{delta} kuud tagasi',
		yearAgo: '1 aasta tagasi',
		yearsAgo: '{delta} aastat tagasi',

		lessThanMinuteUntil: 'vähem kui minuti aja pärast',
		minuteUntil: 'umbes minuti aja pärast',
		minutesUntil: '{delta} minuti pärast',
		hourUntil: 'umbes tunni aja pärast',
		hoursUntil: 'umbes {delta} tunni pärast',
		dayUntil: '1 päeva pärast',
		daysUntil: '{delta} päeva pärast',
		weekUntil: '1 nädala pärast',
		weeksUntil: '{delta} nädala pärast',
		monthUntil: '1 kuu pärast',
		monthsUntil: '{delta} kuu pärast',
		yearUntil: '1 aasta pärast',
		yearsUntil: '{delta} aasta pärast'

	});

	/*
	---

	name: Locale.et-EE.Form.Validator

	description: Form Validator messages for Estonian.

	license: MIT-style license

	authors:
	  - Kevin Valdek

	requires:
	  - Locale

	provides: [Locale.et-EE.Form.Validator]

	...
	*/

	Locale.define('et-EE', 'FormValidator', {

		required: 'Väli peab olema täidetud.',
		minLength: 'Palun sisestage vähemalt {minLength} tähte (te sisestasite {length} tähte).',
		maxLength: 'Palun ärge sisestage rohkem kui {maxLength} tähte (te sisestasite {length} tähte).',
		integer: 'Palun sisestage väljale täisarv. Kümnendarvud (näiteks 1.25) ei ole lubatud.',
		numeric: 'Palun sisestage ainult numbreid väljale (näiteks "1", "1.1", "-1" või "-1.1").',
		digits: 'Palun kasutage ainult numbreid ja kirjavahemärke (telefoninumbri sisestamisel on lubatud kasutada kriipse ja punkte).',
		alpha: 'Palun kasutage ainult tähti (a-z). Tühikud ja teised sümbolid on keelatud.',
		alphanum: 'Palun kasutage ainult tähti (a-z) või numbreid (0-9). Tühikud ja teised sümbolid on keelatud.',
		dateSuchAs: 'Palun sisestage kehtiv kuupäev kujul {date}',
		dateInFormatMDY: 'Palun sisestage kehtiv kuupäev kujul MM.DD.YYYY (näiteks: "12.31.1999").',
		email: 'Palun sisestage kehtiv e-maili aadress (näiteks: "fred@domain.com").',
		url: 'Palun sisestage kehtiv URL (näiteks: http://www.example.com).',
		currencyDollar: 'Palun sisestage kehtiv $ summa (näiteks: $100.00).',
		oneRequired: 'Palun sisestage midagi vähemalt ühele antud väljadest.',
		errorPrefix: 'Viga: ',
		warningPrefix: 'Hoiatus: ',

		// Form.Validator.Extras
		noSpace: 'Väli ei tohi sisaldada tühikuid.',
		reqChkByNode: 'Ükski väljadest pole valitud.',
		requiredChk: 'Välja täitmine on vajalik.',
		reqChkByName: 'Palun valige üks {label}.',
		match: 'Väli peab sobima {matchName} väljaga',
		startDate: 'algkuupäev',
		endDate: 'lõppkuupäev',
		currentDate: 'praegune kuupäev',
		afterDate: 'Kuupäev peab olema võrdne või pärast {label}.',
		beforeDate: 'Kuupäev peab olema võrdne või enne {label}.',
		startMonth: 'Palun valige algkuupäev.',
		sameMonth: 'Antud kaks kuupäeva peavad olema samas kuus - peate muutma ühte kuupäeva.'

	});

	/*
	---

	name: Locale.fa.Date

	description: Date messages for Persian.

	license: MIT-style license

	authors:
	  - Amir Hossein Hodjaty Pour

	requires:
	  - Locale

	provides: [Locale.fa.Date]

	...
	*/

	Locale.define('fa', 'Date', {

		months: ['ژانویه', 'فوریه', 'مارس', 'آپریل', 'مه', 'ژوئن', 'ژوئیه', 'آگوست', 'سپتامبر', 'اکتبر', 'نوامبر', 'دسامبر'],
		months_abbr: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
		days: ['یکشنبه', 'دوشنبه', 'سه شنبه', 'چهارشنبه', 'پنجشنبه', 'جمعه', 'شنبه'],
		days_abbr: ['ي', 'د', 'س', 'چ', 'پ', 'ج', 'ش'],

		// Culture's date order: MM/DD/YYYY
		dateOrder: ['month', 'date', 'year'],
		shortDate: '%m/%d/%Y',
		shortTime: '%I:%M%p',
		AM: 'ق.ظ',
		PM: 'ب.ظ',

		// Date.Extras
		ordinal: 'ام',

		lessThanMinuteAgo: 'کمتر از یک دقیقه پیش',
		minuteAgo: 'حدود یک دقیقه پیش',
		minutesAgo: '{delta} دقیقه پیش',
		hourAgo: 'حدود یک ساعت پیش',
		hoursAgo: 'حدود {delta} ساعت پیش',
		dayAgo: '1 روز پیش',
		daysAgo: '{delta} روز پیش',
		weekAgo: '1 هفته پیش',
		weeksAgo: '{delta} هفته پیش',
		monthAgo: '1 ماه پیش',
		monthsAgo: '{delta} ماه پیش',
		yearAgo: '1 سال پیش',
		yearsAgo: '{delta} سال پیش',

		lessThanMinuteUntil: 'کمتر از یک دقیقه از حالا',
		minuteUntil: 'حدود یک دقیقه از حالا',
		minutesUntil: '{delta} دقیقه از حالا',
		hourUntil: 'حدود یک ساعت از حالا',
		hoursUntil: 'حدود {delta} ساعت از حالا',
		dayUntil: '1 روز از حالا',
		daysUntil: '{delta} روز از حالا',
		weekUntil: '1 هفته از حالا',
		weeksUntil: '{delta} هفته از حالا',
		monthUntil: '1 ماه از حالا',
		monthsUntil: '{delta} ماه از حالا',
		yearUntil: '1 سال از حالا',
		yearsUntil: '{delta} سال از حالا'

	});

	/*
	---

	name: Locale.fa.Form.Validator

	description: Form Validator messages for Persian.

	license: MIT-style license

	authors:
	  - Amir Hossein Hodjaty Pour

	requires:
	  - Locale

	provides: [Locale.fa.Form.Validator]

	...
	*/

	Locale.define('fa', 'FormValidator', {

		required: 'این فیلد الزامی است.',
		minLength: 'شما باید حداقل {minLength} حرف وارد کنید ({length} حرف وارد کرده اید).',
		maxLength: 'لطفا حداکثر {maxLength} حرف وارد کنید (شما {length} حرف وارد کرده اید).',
		integer: 'لطفا از عدد صحیح استفاده کنید. اعداد اعشاری (مانند 1.25) مجاز نیستند.',
		numeric: 'لطفا فقط داده عددی وارد کنید (مانند "1" یا "1.1" یا "1-" یا "1.1-").',
		digits: 'لطفا فقط از اعداد و علامتها در این فیلد استفاده کنید (برای مثال شماره تلفن با خط تیره و نقطه قابل قبول است).',
		alpha: 'لطفا فقط از حروف الفباء برای این بخش استفاده کنید. کاراکترهای دیگر و فاصله مجاز نیستند.',
		alphanum: 'لطفا فقط از حروف الفباء و اعداد در این بخش استفاده کنید. کاراکترهای دیگر و فاصله مجاز نیستند.',
		dateSuchAs: 'لطفا یک تاریخ معتبر مانند {date} وارد کنید.',
		dateInFormatMDY: 'لطفا یک تاریخ معتبر به شکل MM/DD/YYYY وارد کنید (مانند "12/31/1999").',
		email: 'لطفا یک آدرس ایمیل معتبر وارد کنید. برای مثال "fred@domain.com".',
		url: 'لطفا یک URL معتبر مانند http://www.example.com وارد کنید.',
		currencyDollar: 'لطفا یک محدوده معتبر برای این بخش وارد کنید مانند 100.00$ .',
		oneRequired: 'لطفا حداقل یکی از فیلدها را پر کنید.',
		errorPrefix: 'خطا: ',
		warningPrefix: 'هشدار: ',

		// Form.Validator.Extras
		noSpace: 'استفاده از فاصله در این بخش مجاز نیست.',
		reqChkByNode: 'موردی انتخاب نشده است.',
		requiredChk: 'این فیلد الزامی است.',
		reqChkByName: 'لطفا یک {label} را انتخاب کنید.',
		match: 'این فیلد باید با فیلد {matchName} مطابقت داشته باشد.',
		startDate: 'تاریخ شروع',
		endDate: 'تاریخ پایان',
		currentDate: 'تاریخ کنونی',
		afterDate: 'تاریخ میبایست برابر یا بعد از {label} باشد',
		beforeDate: 'تاریخ میبایست برابر یا قبل از {label} باشد',
		startMonth: 'لطفا ماه شروع را انتخاب کنید',
		sameMonth: 'این دو تاریخ باید در یک ماه باشند - شما باید یکی یا هر دو را تغییر دهید.',
		creditcard: 'شماره کارت اعتباری که وارد کرده اید معتبر نیست. لطفا شماره را بررسی کنید و مجددا تلاش کنید. {length} رقم وارد شده است.'

	});

	/*
	---

	name: Locale.fi-FI.Date

	description: Date messages for Finnish.

	license: MIT-style license

	authors:
	  - ksel

	requires:
	  - Locale

	provides: [Locale.fi-FI.Date]

	...
	*/

	Locale.define('fi-FI', 'Date', {

		// NOTE: months and days are not capitalized in finnish
		months: ['tammikuu', 'helmikuu', 'maaliskuu', 'huhtikuu', 'toukokuu', 'kesäkuu', 'heinäkuu', 'elokuu', 'syyskuu', 'lokakuu', 'marraskuu', 'joulukuu'],

		// these abbreviations are really not much used in finnish because they obviously won't abbreviate very much. ;)
		// NOTE: sometimes one can see forms such as "tammi", "helmi", etc. but that is not proper finnish.
		months_abbr: ['tammik.', 'helmik.', 'maalisk.', 'huhtik.', 'toukok.', 'kesäk.', 'heinäk.', 'elok.', 'syysk.', 'lokak.', 'marrask.', 'jouluk.'],

		days: ['sunnuntai', 'maanantai', 'tiistai', 'keskiviikko', 'torstai', 'perjantai', 'lauantai'],
		days_abbr: ['su', 'ma', 'ti', 'ke', 'to', 'pe', 'la'],

		// Culture's date order: DD/MM/YYYY
		dateOrder: ['date', 'month', 'year'],
		shortDate: '%d.%m.%Y',
		shortTime: '%H:%M',
		AM: 'AM',
		PM: 'PM',
		firstDayOfWeek: 1,

		// Date.Extras
		ordinal: '.',

		lessThanMinuteAgo: 'vajaa minuutti sitten',
		minuteAgo: 'noin minuutti sitten',
		minutesAgo: '{delta} minuuttia sitten',
		hourAgo: 'noin tunti sitten',
		hoursAgo: 'noin {delta} tuntia sitten',
		dayAgo: 'päivä sitten',
		daysAgo: '{delta} päivää sitten',
		weekAgo: 'viikko sitten',
		weeksAgo: '{delta} viikkoa sitten',
		monthAgo: 'kuukausi sitten',
		monthsAgo: '{delta} kuukautta sitten',
		yearAgo: 'vuosi sitten',
		yearsAgo: '{delta} vuotta sitten',

		lessThanMinuteUntil: 'vajaan minuutin kuluttua',
		minuteUntil: 'noin minuutin kuluttua',
		minutesUntil: '{delta} minuutin kuluttua',
		hourUntil: 'noin tunnin kuluttua',
		hoursUntil: 'noin {delta} tunnin kuluttua',
		dayUntil: 'päivän kuluttua',
		daysUntil: '{delta} päivän kuluttua',
		weekUntil: 'viikon kuluttua',
		weeksUntil: '{delta} viikon kuluttua',
		monthUntil: 'kuukauden kuluttua',
		monthsUntil: '{delta} kuukauden kuluttua',
		yearUntil: 'vuoden kuluttua',
		yearsUntil: '{delta} vuoden kuluttua'

	});

	/*
	---

	name: Locale.fi-FI.Form.Validator

	description: Form Validator messages for Finnish.

	license: MIT-style license

	authors:
	  - ksel

	requires:
	  - Locale

	provides: [Locale.fi-FI.Form.Validator]

	...
	*/

	Locale.define('fi-FI', 'FormValidator', {

		required: 'Tämä kenttä on pakollinen.',
		minLength: 'Ole hyvä ja anna vähintään {minLength} merkkiä (annoit {length} merkkiä).',
		maxLength: 'Älä anna enempää kuin {maxLength} merkkiä (annoit {length} merkkiä).',
		integer: 'Ole hyvä ja anna kokonaisluku. Luvut, joissa on desimaaleja (esim. 1.25) eivät ole sallittuja.',
		numeric: 'Anna tähän kenttään lukuarvo (kuten "1" tai "1.1" tai "-1" tai "-1.1").',
		digits: 'Käytä pelkästään numeroita ja välimerkkejä tässä kentässä (syötteet, kuten esim. puhelinnumero, jossa on väliviivoja, pilkkuja tai pisteitä, kelpaa).',
		alpha: 'Anna tähän kenttään vain kirjaimia (a-z). Välilyönnit tai muut merkit eivät ole sallittuja.',
		alphanum: 'Anna tähän kenttään vain kirjaimia (a-z) tai numeroita (0-9). Välilyönnit tai muut merkit eivät ole sallittuja.',
		dateSuchAs: 'Ole hyvä ja anna kelvollinen päivmäärä, kuten esimerkiksi {date}',
		dateInFormatMDY: 'Ole hyvä ja anna kelvollinen päivämäärä muodossa pp/kk/vvvv (kuten "12/31/1999")',
		email: 'Ole hyvä ja anna kelvollinen sähköpostiosoite (kuten esimerkiksi "matti@meikalainen.com").',
		url: 'Ole hyvä ja anna kelvollinen URL, kuten esimerkiksi http://www.example.com.',
		currencyDollar: 'Ole hyvä ja anna kelvollinen eurosumma (kuten esimerkiksi 100,00 EUR) .',
		oneRequired: 'Ole hyvä ja syötä jotakin ainakin johonkin näistä kentistä.',
		errorPrefix: 'Virhe: ',
		warningPrefix: 'Varoitus: ',

		// Form.Validator.Extras
		noSpace: 'Tässä syötteessä ei voi olla välilyöntejä',
		reqChkByNode: 'Ei valintoja.',
		requiredChk: 'Tämä kenttä on pakollinen.',
		reqChkByName: 'Ole hyvä ja valitse {label}.',
		match: 'Tämän kentän tulee vastata kenttää {matchName}',
		startDate: 'alkupäivämäärä',
		endDate: 'loppupäivämäärä',
		currentDate: 'nykyinen päivämäärä',
		afterDate: 'Päivämäärän tulisi olla sama tai myöhäisempi ajankohta kuin {label}.',
		beforeDate: 'Päivämäärän tulisi olla sama tai aikaisempi ajankohta kuin {label}.',
		startMonth: 'Ole hyvä ja valitse aloituskuukausi',
		sameMonth: 'Näiden kahden päivämäärän tulee olla saman kuun sisällä -- sinun pitää muuttaa jompaa kumpaa.',
		creditcard: 'Annettu luottokortin numero ei kelpaa. Ole hyvä ja tarkista numero sekä yritä uudelleen. {length} numeroa syötetty.'

	});

	/*
	---

	name: Locale.fi-FI.Number

	description: Finnish number messages

	license: MIT-style license

	authors:
	  - ksel

	requires:
	  - Locale
	  - Locale.EU.Number

	provides: [Locale.fi-FI.Number]

	...
	*/

	Locale.define('fi-FI', 'Number', {

		group: ' ' // grouped by space

	}).inherit('EU', 'Number');

	/*
	---

	name: Locale.fr-FR.Date

	description: Date messages for French.

	license: MIT-style license

	authors:
	  - Nicolas Sorosac
	  - Antoine Abt

	requires:
	  - Locale

	provides: [Locale.fr-FR.Date]

	...
	*/

	Locale.define('fr-FR', 'Date', {

		months: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
		months_abbr: ['janv.', 'févr.', 'mars', 'avr.', 'mai', 'juin', 'juil.', 'août', 'sept.', 'oct.', 'nov.', 'déc.'],
		days: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
		days_abbr: ['dim.', 'lun.', 'mar.', 'mer.', 'jeu.', 'ven.', 'sam.'],

		// Culture's date order: DD/MM/YYYY
		dateOrder: ['date', 'month', 'year'],
		shortDate: '%d/%m/%Y',
		shortTime: '%H:%M',
		AM: 'AM',
		PM: 'PM',
		firstDayOfWeek: 1,

		// Date.Extras
		ordinal: function(dayOfMonth){
			return (dayOfMonth > 1) ? '' : 'er';
		},

		lessThanMinuteAgo: "il y a moins d'une minute",
		minuteAgo: 'il y a une minute',
		minutesAgo: 'il y a {delta} minutes',
		hourAgo: 'il y a une heure',
		hoursAgo: 'il y a {delta} heures',
		dayAgo: 'il y a un jour',
		daysAgo: 'il y a {delta} jours',
		weekAgo: 'il y a une semaine',
		weeksAgo: 'il y a {delta} semaines',
		monthAgo: 'il y a 1 mois',
		monthsAgo: 'il y a {delta} mois',
		yearthAgo: 'il y a 1 an',
		yearsAgo: 'il y a {delta} ans',

		lessThanMinuteUntil: "dans moins d'une minute",
		minuteUntil: 'dans une minute',
		minutesUntil: 'dans {delta} minutes',
		hourUntil: 'dans une heure',
		hoursUntil: 'dans {delta} heures',
		dayUntil: 'dans un jour',
		daysUntil: 'dans {delta} jours',
		weekUntil: 'dans 1 semaine',
		weeksUntil: 'dans {delta} semaines',
		monthUntil: 'dans 1 mois',
		monthsUntil: 'dans {delta} mois',
		yearUntil: 'dans 1 an',
		yearsUntil: 'dans {delta} ans'

	});

	/*
	---

	name: Locale.fr-FR.Form.Validator

	description: Form Validator messages for French.

	license: MIT-style license

	authors:
	  - Miquel Hudin
	  - Nicolas Sorosac

	requires:
	  - Locale

	provides: [Locale.fr-FR.Form.Validator]

	...
	*/

	/*eslint mootools-whitespace:0*/

	Locale.define('fr-FR', 'FormValidator', {

		required: 'Ce champ est obligatoire.',
		length: 'Veuillez saisir {length} caract&egrave;re(s) (vous avez saisi {elLength} caract&egrave;re(s)',
		minLength: 'Veuillez saisir un minimum de {minLength} caract&egrave;re(s) (vous avez saisi {length} caract&egrave;re(s)).',
		maxLength: 'Veuillez saisir un maximum de {maxLength} caract&egrave;re(s) (vous avez saisi {length} caract&egrave;re(s)).',
		integer: 'Veuillez saisir un nombre entier dans ce champ. Les nombres d&eacute;cimaux (ex : "1,25") ne sont pas autoris&eacute;s.',
		numeric: 'Veuillez saisir uniquement des chiffres dans ce champ (ex : "1" ou "1,1" ou "-1" ou "-1,1").',
		digits: "Veuillez saisir uniquement des chiffres et des signes de ponctuation dans ce champ (ex : un num&eacute;ro de t&eacute;l&eacute;phone avec des traits d'union est autoris&eacute;).",
		alpha: 'Veuillez saisir uniquement des lettres (a-z) dans ce champ. Les espaces ou autres caract&egrave;res ne sont pas autoris&eacute;s.',
		alphanum: 'Veuillez saisir uniquement des lettres (a-z) ou des chiffres (0-9) dans ce champ. Les espaces ou autres caract&egrave;res ne sont pas autoris&eacute;s.',
		dateSuchAs: 'Veuillez saisir une date correcte comme {date}',
		dateInFormatMDY: 'Veuillez saisir une date correcte, au format JJ/MM/AAAA (ex : "31/11/1999").',
		email: 'Veuillez saisir une adresse de courrier &eacute;lectronique. Par exemple "fred@domaine.com".',
		url: 'Veuillez saisir une URL, comme http://www.exemple.com.',
		currencyDollar: 'Veuillez saisir une quantit&eacute; correcte. Par exemple 100,00&euro;.',
		oneRequired: 'Veuillez s&eacute;lectionner au moins une de ces options.',
		errorPrefix: 'Erreur : ',
		warningPrefix: 'Attention : ',

		// Form.Validator.Extras
		noSpace: "Ce champ n'accepte pas les espaces.",
		reqChkByNode: "Aucun &eacute;l&eacute;ment n'est s&eacute;lectionn&eacute;.",
		requiredChk: 'Ce champ est obligatoire.',
		reqChkByName: 'Veuillez s&eacute;lectionner un(e) {label}.',
		match: 'Ce champ doit correspondre avec le champ {matchName}.',
		startDate: 'date de d&eacute;but',
		endDate: 'date de fin',
		currentDate: 'date actuelle',
		afterDate: 'La date doit &ecirc;tre identique ou post&eacute;rieure &agrave; {label}.',
		beforeDate: 'La date doit &ecirc;tre identique ou ant&eacute;rieure &agrave; {label}.',
		startMonth: 'Veuillez s&eacute;lectionner un mois de d&eacute;but.',
		sameMonth: 'Ces deux dates doivent &ecirc;tre dans le m&ecirc;me mois - vous devez en modifier une.',
		creditcard: 'Le num&eacute;ro de carte de cr&eacute;dit est invalide. Merci de v&eacute;rifier le num&eacute;ro et de r&eacute;essayer. Vous avez entr&eacute; {length} chiffre(s).'

	});

	/*
	---

	name: Locale.fr-FR.Number

	description: Number messages for French.

	license: MIT-style license

	authors:
	  - Arian Stolwijk
	  - sv1l

	requires:
	  - Locale
	  - Locale.EU.Number

	provides: [Locale.fr-FR.Number]

	...
	*/

	Locale.define('fr-FR', 'Number', {

		group: ' ' // In fr-FR localization, group character is a blank space

	}).inherit('EU', 'Number');

	/*
	---

	name: Locale.he-IL.Date

	description: Date messages for Hebrew.

	license: MIT-style license

	authors:
	  - Elad Ossadon

	requires:
	  - Locale

	provides: [Locale.he-IL.Date]

	...
	*/

	Locale.define('he-IL', 'Date', {

		months: ['ינואר', 'פברואר', 'מרץ', 'אפריל', 'מאי', 'יוני', 'יולי', 'אוגוסט', 'ספטמבר', 'אוקטובר', 'נובמבר', 'דצמבר'],
		months_abbr: ['ינואר', 'פברואר', 'מרץ', 'אפריל', 'מאי', 'יוני', 'יולי', 'אוגוסט', 'ספטמבר', 'אוקטובר', 'נובמבר', 'דצמבר'],
		days: ['ראשון', 'שני', 'שלישי', 'רביעי', 'חמישי', 'שישי', 'שבת'],
		days_abbr: ['ראשון', 'שני', 'שלישי', 'רביעי', 'חמישי', 'שישי', 'שבת'],

		// Culture's date order: MM/DD/YYYY
		dateOrder: ['date', 'month', 'year'],
		shortDate: '%d/%m/%Y',
		shortTime: '%H:%M',
		AM: 'AM',
		PM: 'PM',
		firstDayOfWeek: 0,

		// Date.Extras
		ordinal: '',

		lessThanMinuteAgo: 'לפני פחות מדקה',
		minuteAgo: 'לפני כדקה',
		minutesAgo: 'לפני {delta} דקות',
		hourAgo: 'לפני כשעה',
		hoursAgo: 'לפני {delta} שעות',
		dayAgo: 'לפני יום',
		daysAgo: 'לפני {delta} ימים',
		weekAgo: 'לפני שבוע',
		weeksAgo: 'לפני {delta} שבועות',
		monthAgo: 'לפני חודש',
		monthsAgo: 'לפני {delta} חודשים',
		yearAgo: 'לפני שנה',
		yearsAgo: 'לפני {delta} שנים',

		lessThanMinuteUntil: 'בעוד פחות מדקה',
		minuteUntil: 'בעוד כדקה',
		minutesUntil: 'בעוד {delta} דקות',
		hourUntil: 'בעוד כשעה',
		hoursUntil: 'בעוד {delta} שעות',
		dayUntil: 'בעוד יום',
		daysUntil: 'בעוד {delta} ימים',
		weekUntil: 'בעוד שבוע',
		weeksUntil: 'בעוד {delta} שבועות',
		monthUntil: 'בעוד חודש',
		monthsUntil: 'בעוד {delta} חודשים',
		yearUntil: 'בעוד שנה',
		yearsUntil: 'בעוד {delta} שנים'

	});

	/*
	---

	name: Locale.he-IL.Form.Validator

	description: Form Validator messages for Hebrew.

	license: MIT-style license

	authors:
	  - Elad Ossadon

	requires:
	  - Locale

	provides: [Locale.he-IL.Form.Validator]

	...
	*/

	Locale.define('he-IL', 'FormValidator', {

		required: 'נא למלא שדה זה.',
		minLength: 'נא להזין לפחות {minLength} תווים (הזנת {length} תווים).',
		maxLength: 'נא להזין עד {maxLength} תווים (הזנת {length} תווים).',
		integer: 'נא להזין מספר שלם לשדה זה. מספרים עשרוניים (כמו 1.25) אינם חוקיים.',
		numeric: 'נא להזין ערך מספרי בלבד בשדה זה (כמו "1", "1.1", "-1" או "-1.1").',
		digits: 'נא להזין רק ספרות וסימני הפרדה בשדה זה (למשל, מספר טלפון עם מקפים או נקודות הוא חוקי).',
		alpha: 'נא להזין רק אותיות באנגלית (a-z) בשדה זה. רווחים או תווים אחרים אינם חוקיים.',
		alphanum: 'נא להזין רק אותריות באנגלית (a-z) או ספרות (0-9) בשדה זה. אווחרים או תווים אחרים אינם חוקיים.',
		dateSuchAs: 'נא להזין תאריך חוקי, כמו {date}',
		dateInFormatMDY: 'נא להזין תאריך חוקי בפורמט MM/DD/YYYY (כמו "12/31/1999")',
		email: 'נא להזין כתובת אימייל חוקית. לדוגמה: "fred@domain.com".',
		url: 'נא להזין כתובת אתר חוקית, כמו http://www.example.com.',
		currencyDollar: 'נא להזין סכום דולרי חוקי. לדוגמה $100.00.',
		oneRequired: 'נא לבחור לפחות בשדה אחד.',
		errorPrefix: 'שגיאה: ',
		warningPrefix: 'אזהרה: ',

		// Form.Validator.Extras
		noSpace: 'אין להזין רווחים בשדה זה.',
		reqChkByNode: 'נא לבחור אחת מהאפשרויות.',
		requiredChk: 'שדה זה נדרש.',
		reqChkByName: 'נא לבחור {label}.',
		match: 'שדה זה צריך להתאים לשדה {matchName}',
		startDate: 'תאריך ההתחלה',
		endDate: 'תאריך הסיום',
		currentDate: 'התאריך הנוכחי',
		afterDate: 'התאריך צריך להיות זהה או אחרי {label}.',
		beforeDate: 'התאריך צריך להיות זהה או לפני {label}.',
		startMonth: 'נא לבחור חודש התחלה',
		sameMonth: 'שני תאריכים אלה צריכים להיות באותו חודש - נא לשנות אחד התאריכים.',
		creditcard: 'מספר כרטיס האשראי שהוזן אינו חוקי. נא לבדוק שנית. הוזנו {length} ספרות.'

	});

	/*
	---

	name: Locale.he-IL.Number

	description: Number messages for Hebrew.

	license: MIT-style license

	authors:
	  - Elad Ossadon

	requires:
	  - Locale

	provides: [Locale.he-IL.Number]

	...
	*/

	Locale.define('he-IL', 'Number', {

		decimal: '.',
		group: ',',

		currency: {
			suffix: ' ₪'
		}

	});

	/*
	---

	name: Locale.hu-HU.Date

	description: Date messages for Hungarian.

	license: MIT-style license

	authors:
	  - Zsolt Szegheő

	requires:
	  - Locale

	provides: [Locale.hu-HU.Date]

	...
	*/

	Locale.define('hu-HU', 'Date', {

		months: ['Január', 'Február', 'Március', 'Április', 'Május', 'Június', 'Július', 'Augusztus', 'Szeptember', 'Október', 'November', 'December'],
		months_abbr: ['jan.', 'febr.', 'márc.', 'ápr.', 'máj.', 'jún.', 'júl.', 'aug.', 'szept.', 'okt.', 'nov.', 'dec.'],
		days: ['Vasárnap', 'Hétfő', 'Kedd', 'Szerda', 'Csütörtök', 'Péntek', 'Szombat'],
		days_abbr: ['V', 'H', 'K', 'Sze', 'Cs', 'P', 'Szo'],

		// Culture's date order: YYYY.MM.DD.
		dateOrder: ['year', 'month', 'date'],
		shortDate: '%Y.%m.%d.',
		shortTime: '%I:%M',
		AM: 'de.',
		PM: 'du.',
		firstDayOfWeek: 1,

		// Date.Extras
		ordinal: '.',

		lessThanMinuteAgo: 'alig egy perce',
		minuteAgo: 'egy perce',
		minutesAgo: '{delta} perce',
		hourAgo: 'egy órája',
		hoursAgo: '{delta} órája',
		dayAgo: '1 napja',
		daysAgo: '{delta} napja',
		weekAgo: '1 hete',
		weeksAgo: '{delta} hete',
		monthAgo: '1 hónapja',
		monthsAgo: '{delta} hónapja',
		yearAgo: '1 éve',
		yearsAgo: '{delta} éve',

		lessThanMinuteUntil: 'alig egy perc múlva',
		minuteUntil: 'egy perc múlva',
		minutesUntil: '{delta} perc múlva',
		hourUntil: 'egy óra múlva',
		hoursUntil: '{delta} óra múlva',
		dayUntil: '1 nap múlva',
		daysUntil: '{delta} nap múlva',
		weekUntil: '1 hét múlva',
		weeksUntil: '{delta} hét múlva',
		monthUntil: '1 hónap múlva',
		monthsUntil: '{delta} hónap múlva',
		yearUntil: '1 év múlva',
		yearsUntil: '{delta} év múlva'

	});

	/*
	---

	name: Locale.hu-HU.Form.Validator

	description: Form Validator messages for Hungarian.

	license: MIT-style license

	authors:
	  - Zsolt Szegheő

	requires:
	  - Locale

	provides: [Locale.hu-HU.Form.Validator]

	...
	*/

	/*eslint mootools-whitespace:0*/

	Locale.define('hu-HU', 'FormValidator', {

		required: 'A mező kitöltése kötelező.',
		minLength: 'Legalább {minLength} karakter megadása szükséges (megadva {length} karakter).',
		maxLength: 'Legfeljebb {maxLength} karakter megadása lehetséges (megadva {length} karakter).',
		integer: 'Egész szám megadása szükséges. A tizedesjegyek (pl. 1.25) nem engedélyezettek.',
		numeric: 'Szám megadása szükséges (pl. "1" vagy "1.1" vagy "-1" vagy "-1.1").',
		digits: 'Csak számok és írásjelek megadása lehetséges (pl. telefonszám kötőjelek és/vagy perjelekkel).',
		alpha: 'Csak betűk (a-z) megadása lehetséges. Szóköz és egyéb karakterek nem engedélyezettek.',
		alphanum: 'Csak betűk (a-z) vagy számok (0-9) megadása lehetséges. Szóköz és egyéb karakterek nem engedélyezettek.',
		dateSuchAs: 'Valós dátum megadása szükséges (pl. {date}).',
		dateInFormatMDY: 'Valós dátum megadása szükséges ÉÉÉÉ.HH.NN. formában. (pl. "1999.12.31.")',
		email: 'Valós e-mail cím megadása szükséges (pl. "fred@domain.hu").',
		url: 'Valós URL megadása szükséges (pl. http://www.example.com).',
		currencyDollar: 'Valós pénzösszeg megadása szükséges (pl. 100.00 Ft.).',
		oneRequired: 'Az alábbi mezők legalább egyikének kitöltése kötelező.',
		errorPrefix: 'Hiba: ',
		warningPrefix: 'Figyelem: ',

		// Form.Validator.Extras
		noSpace: 'A mező nem tartalmazhat szóközöket.',
		reqChkByNode: 'Nincs egyetlen kijelölt elem sem.',
		requiredChk: 'A mező kitöltése kötelező.',
		reqChkByName: 'Egy {label} kiválasztása szükséges.',
		match: 'A mezőnek egyeznie kell a(z) {matchName} mezővel.',
		startDate: 'a kezdet dátuma',
		endDate: 'a vég dátuma',
		currentDate: 'jelenlegi dátum',
		afterDate: 'A dátum nem lehet kisebb, mint {label}.',
		beforeDate: 'A dátum nem lehet nagyobb, mint {label}.',
		startMonth: 'Kezdeti hónap megadása szükséges.',
		sameMonth: 'A két dátumnak ugyanazon hónapban kell lennie.',
		creditcard: 'A megadott bankkártyaszám nem valódi (megadva {length} számjegy).'

	});

	/*
	---

	name: Locale.it-IT.Date

	description: Date messages for Italian.

	license: MIT-style license.

	authors:
	  - Andrea Novero
	  - Valerio Proietti

	requires:
	  - Locale

	provides: [Locale.it-IT.Date]

	...
	*/

	Locale.define('it-IT', 'Date', {

		months: ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'],
		months_abbr: ['gen', 'feb', 'mar', 'apr', 'mag', 'giu', 'lug', 'ago', 'set', 'ott', 'nov', 'dic'],
		days: ['Domenica', 'Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato'],
		days_abbr: ['dom', 'lun', 'mar', 'mer', 'gio', 'ven', 'sab'],

		// Culture's date order: DD/MM/YYYY
		dateOrder: ['date', 'month', 'year'],
		shortDate: '%d/%m/%Y',
		shortTime: '%H.%M',
		AM: 'AM',
		PM: 'PM',
		firstDayOfWeek: 1,

		// Date.Extras
		ordinal: 'º',

		lessThanMinuteAgo: 'meno di un minuto fa',
		minuteAgo: 'circa un minuto fa',
		minutesAgo: 'circa {delta} minuti fa',
		hourAgo: "circa un'ora fa",
		hoursAgo: 'circa {delta} ore fa',
		dayAgo: 'circa 1 giorno fa',
		daysAgo: 'circa {delta} giorni fa',
		weekAgo: 'una settimana fa',
		weeksAgo: '{delta} settimane fa',
		monthAgo: 'un mese fa',
		monthsAgo: '{delta} mesi fa',
		yearAgo: 'un anno fa',
		yearsAgo: '{delta} anni fa',

		lessThanMinuteUntil: 'tra meno di un minuto',
		minuteUntil: 'tra circa un minuto',
		minutesUntil: 'tra circa {delta} minuti',
		hourUntil: "tra circa un'ora",
		hoursUntil: 'tra circa {delta} ore',
		dayUntil: 'tra circa un giorno',
		daysUntil: 'tra circa {delta} giorni',
		weekUntil: 'tra una settimana',
		weeksUntil: 'tra {delta} settimane',
		monthUntil: 'tra un mese',
		monthsUntil: 'tra {delta} mesi',
		yearUntil: 'tra un anno',
		yearsUntil: 'tra {delta} anni'

	});

	/*
	---

	name: Locale.it-IT.Form.Validator

	description: Form Validator messages for Italian.

	license: MIT-style license

	authors:
	  - Leonardo Laureti
	  - Andrea Novero

	requires:
	  - Locale

	provides: [Locale.it-IT.Form.Validator]

	...
	*/

	/*eslint mootools-whitespace:0*/

	Locale.define('it-IT', 'FormValidator', {

		required: 'Il campo &egrave; obbligatorio.',
		minLength: 'Inserire almeno {minLength} caratteri (ne sono stati inseriti {length}).',
		maxLength: 'Inserire al massimo {maxLength} caratteri (ne sono stati inseriti {length}).',
		integer: 'Inserire un numero intero. Non sono consentiti decimali (es.: 1.25).',
		numeric: 'Inserire solo valori numerici (es.: "1" oppure "1.1" oppure "-1" oppure "-1.1").',
		digits: 'Inserire solo numeri e caratteri di punteggiatura. Per esempio &egrave; consentito un numero telefonico con trattini o punti.',
		alpha: 'Inserire solo lettere (a-z). Non sono consentiti spazi o altri caratteri.',
		alphanum: 'Inserire solo lettere (a-z) o numeri (0-9). Non sono consentiti spazi o altri caratteri.',
		dateSuchAs: 'Inserire una data valida del tipo {date}',
		dateInFormatMDY: 'Inserire una data valida nel formato MM/GG/AAAA (es.: "12/31/1999")',
		email: 'Inserire un indirizzo email valido. Per esempio "nome@dominio.com".',
		url: 'Inserire un indirizzo valido. Per esempio "http://www.example.com".',
		currencyDollar: 'Inserire un importo valido. Per esempio "$100.00".',
		oneRequired: 'Completare almeno uno dei campi richiesti.',
		errorPrefix: 'Errore: ',
		warningPrefix: 'Attenzione: ',

		// Form.Validator.Extras
		noSpace: 'Non sono consentiti spazi.',
		reqChkByNode: 'Nessuna voce selezionata.',
		requiredChk: 'Il campo &egrave; obbligatorio.',
		reqChkByName: 'Selezionare un(a) {label}.',
		match: 'Il valore deve corrispondere al campo {matchName}',
		startDate: "data d'inizio",
		endDate: 'data di fine',
		currentDate: 'data attuale',
		afterDate: 'La data deve corrispondere o essere successiva al {label}.',
		beforeDate: 'La data deve corrispondere o essere precedente al {label}.',
		startMonth: "Selezionare un mese d'inizio",
		sameMonth: 'Le due date devono essere dello stesso mese - occorre modificarne una.'

	});

	/*
	---

	name: Locale.ja-JP.Date

	description: Date messages for Japanese.

	license: MIT-style license

	authors:
	  - Noritaka Horio

	requires:
	  - Locale

	provides: [Locale.ja-JP.Date]

	...
	*/

	Locale.define('ja-JP', 'Date', {

		months: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
		months_abbr: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
		days: ['日曜日', '月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日'],
		days_abbr: ['日', '月', '火', '水', '木', '金', '土'],

		// Culture's date order: YYYY/MM/DD
		dateOrder: ['year', 'month', 'date'],
		shortDate: '%Y/%m/%d',
		shortTime: '%H:%M',
		AM: '午前',
		PM: '午後',
		firstDayOfWeek: 0,

		// Date.Extras
		ordinal: '',

		lessThanMinuteAgo: '1分以内前',
		minuteAgo: '約1分前',
		minutesAgo: '約{delta}分前',
		hourAgo: '約1時間前',
		hoursAgo: '約{delta}時間前',
		dayAgo: '1日前',
		daysAgo: '{delta}日前',
		weekAgo: '1週間前',
		weeksAgo: '{delta}週間前',
		monthAgo: '1ヶ月前',
		monthsAgo: '{delta}ヶ月前',
		yearAgo: '1年前',
		yearsAgo: '{delta}年前',

		lessThanMinuteUntil: '今から約1分以内',
		minuteUntil: '今から約1分',
		minutesUntil: '今から約{delta}分',
		hourUntil: '今から約1時間',
		hoursUntil: '今から約{delta}時間',
		dayUntil: '今から1日間',
		daysUntil: '今から{delta}日間',
		weekUntil: '今から1週間',
		weeksUntil: '今から{delta}週間',
		monthUntil: '今から1ヶ月',
		monthsUntil: '今から{delta}ヶ月',
		yearUntil: '今から1年',
		yearsUntil: '今から{delta}年'

	});

	/*
	---

	name: Locale.ja-JP.Form.Validator

	description: Form Validator messages for Japanese.

	license: MIT-style license

	authors:
	  - Noritaka Horio

	requires:
	  - Locale

	provides: [Locale.ja-JP.Form.Validator]

	...
	*/

	Locale.define('ja-JP', 'FormValidator', {

		required: '入力は必須です。',
		minLength: '入力文字数は{minLength}以上にしてください。({length}文字)',
		maxLength: '入力文字数は{maxLength}以下にしてください。({length}文字)',
		integer: '整数を入力してください。',
		numeric: '入力できるのは数値だけです。(例: "1", "1.1", "-1", "-1.1"....)',
		digits: '入力できるのは数値と句読記号です。 (例: -や+を含む電話番号など).',
		alpha: '入力できるのは半角英字だけです。それ以外の文字は入力できません。',
		alphanum: '入力できるのは半角英数字だけです。それ以外の文字は入力できません。',
		dateSuchAs: '有効な日付を入力してください。{date}',
		dateInFormatMDY: '日付の書式に誤りがあります。YYYY/MM/DD (i.e. "1999/12/31")',
		email: 'メールアドレスに誤りがあります。',
		url: 'URLアドレスに誤りがあります。',
		currencyDollar: '金額に誤りがあります。',
		oneRequired: 'ひとつ以上入力してください。',
		errorPrefix: 'エラー: ',
		warningPrefix: '警告: ',

		// FormValidator.Extras
		noSpace: 'スペースは入力できません。',
		reqChkByNode: '選択されていません。',
		requiredChk: 'この項目は必須です。',
		reqChkByName: '{label}を選択してください。',
		match: '{matchName}が入力されている場合必須です。',
		startDate: '開始日',
		endDate: '終了日',
		currentDate: '今日',
		afterDate: '{label}以降の日付にしてください。',
		beforeDate: '{label}以前の日付にしてください。',
		startMonth: '開始月を選択してください。',
		sameMonth: '日付が同一です。どちらかを変更してください。'

	});

	/*
	---

	name: Locale.ja-JP.Number

	description: Number messages for Japanese.

	license: MIT-style license

	authors:
	  - Noritaka Horio

	requires:
	  - Locale

	provides: [Locale.ja-JP.Number]

	...
	*/

	Locale.define('ja-JP', 'Number', {

		decimal: '.',
		group: ',',

		currency: {
			decimals: 0,
			prefix: '\\'
		}

	});

	/*
	---

	name: Locale.nl-NL.Date

	description: Date messages for Dutch.

	license: MIT-style license

	authors:
	  - Lennart Pilon
	  - Tim Wienk

	requires:
	  - Locale

	provides: [Locale.nl-NL.Date]

	...
	*/

	Locale.define('nl-NL', 'Date', {

		months: ['januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december'],
		months_abbr: ['jan', 'feb', 'mrt', 'apr', 'mei', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec'],
		days: ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'],
		days_abbr: ['zo', 'ma', 'di', 'wo', 'do', 'vr', 'za'],

		// Culture's date order: DD-MM-YYYY
		dateOrder: ['date', 'month', 'year'],
		shortDate: '%d-%m-%Y',
		shortTime: '%H:%M',
		AM: 'AM',
		PM: 'PM',
		firstDayOfWeek: 1,

		// Date.Extras
		ordinal: 'e',

		lessThanMinuteAgo: 'minder dan een minuut geleden',
		minuteAgo: 'ongeveer een minuut geleden',
		minutesAgo: '{delta} minuten geleden',
		hourAgo: 'ongeveer een uur geleden',
		hoursAgo: 'ongeveer {delta} uur geleden',
		dayAgo: 'een dag geleden',
		daysAgo: '{delta} dagen geleden',
		weekAgo: 'een week geleden',
		weeksAgo: '{delta} weken geleden',
		monthAgo: 'een maand geleden',
		monthsAgo: '{delta} maanden geleden',
		yearAgo: 'een jaar geleden',
		yearsAgo: '{delta} jaar geleden',

		lessThanMinuteUntil: 'over minder dan een minuut',
		minuteUntil: 'over ongeveer een minuut',
		minutesUntil: 'over {delta} minuten',
		hourUntil: 'over ongeveer een uur',
		hoursUntil: 'over {delta} uur',
		dayUntil: 'over ongeveer een dag',
		daysUntil: 'over {delta} dagen',
		weekUntil: 'over een week',
		weeksUntil: 'over {delta} weken',
		monthUntil: 'over een maand',
		monthsUntil: 'over {delta} maanden',
		yearUntil: 'over een jaar',
		yearsUntil: 'over {delta} jaar'

	});

	/*
	---

	name: Locale.nl-NL.Form.Validator

	description: Form Validator messages for Dutch.

	license: MIT-style license

	authors:
	  - Lennart Pilon
	  - Arian Stolwijk
	  - Tim Wienk

	requires:
	  - Locale

	provides: [Locale.nl-NL.Form.Validator]

	...
	*/

	Locale.define('nl-NL', 'FormValidator', {

		required: 'Dit veld is verplicht.',
		length: 'Vul precies {length} karakters in (je hebt {elLength} karakters ingevoerd).',
		minLength: 'Vul minimaal {minLength} karakters in (je hebt {length} karakters ingevoerd).',
		maxLength: 'Vul niet meer dan {maxLength} karakters in (je hebt {length} karakters ingevoerd).',
		integer: 'Vul een getal in. Getallen met decimalen (bijvoorbeeld 1.25) zijn niet toegestaan.',
		numeric: 'Vul alleen numerieke waarden in (bijvoorbeeld "1" of "1.1" of "-1" of "-1.1").',
		digits: 'Vul alleen nummers en leestekens in (bijvoorbeeld een telefoonnummer met streepjes is toegestaan).',
		alpha: 'Vul alleen letters in (a-z). Spaties en andere karakters zijn niet toegestaan.',
		alphanum: 'Vul alleen letters (a-z) of nummers (0-9) in. Spaties en andere karakters zijn niet toegestaan.',
		dateSuchAs: 'Vul een geldige datum in, zoals {date}',
		dateInFormatMDY: 'Vul een geldige datum, in het formaat MM/DD/YYYY (bijvoorbeeld "12/31/1999")',
		email: 'Vul een geldig e-mailadres in. Bijvoorbeeld "fred@domein.nl".',
		url: 'Vul een geldige URL in, zoals http://www.example.com.',
		currencyDollar: 'Vul een geldig $ bedrag in. Bijvoorbeeld $100.00 .',
		oneRequired: 'Vul iets in bij in ieder geval een van deze velden.',
		warningPrefix: 'Waarschuwing: ',
		errorPrefix: 'Fout: ',

		// Form.Validator.Extras
		noSpace: 'Spaties zijn niet toegestaan in dit veld.',
		reqChkByNode: 'Er zijn geen items geselecteerd.',
		requiredChk: 'Dit veld is verplicht.',
		reqChkByName: 'Selecteer een {label}.',
		match: 'Dit veld moet overeen komen met het {matchName} veld',
		startDate: 'de begin datum',
		endDate: 'de eind datum',
		currentDate: 'de huidige datum',
		afterDate: 'De datum moet hetzelfde of na {label} zijn.',
		beforeDate: 'De datum moet hetzelfde of voor {label} zijn.',
		startMonth: 'Selecteer een begin maand',
		sameMonth: 'Deze twee data moeten in dezelfde maand zijn - u moet een van beide aanpassen.',
		creditcard: 'Het ingevulde creditcardnummer is niet geldig. Controleer het nummer en probeer opnieuw. {length} getallen ingevuld.'

	});

	/*
	---

	name: Locale.nl-NL.Number

	description: Number messages for Dutch.

	license: MIT-style license

	authors:
	  - Arian Stolwijk

	requires:
	  - Locale
	  - Locale.EU.Number

	provides: [Locale.nl-NL.Number]

	...
	*/

	Locale.define('nl-NL').inherit('EU', 'Number');




	/*
	---

	name: Locale.no-NO.Date

	description: Date messages for Norwegian.

	license: MIT-style license

	authors:
	  - Espen 'Rexxars' Hovlandsdal
	  - Ole Tøsse Kolvik
	requires:
	  - Locale

	provides: [Locale.no-NO.Date]

	...
	*/

	Locale.define('no-NO', 'Date', {
		months: ['Januar', 'Februar', 'Mars', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Desember'],
		months_abbr: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Des'],
		days: ['Søndag', 'Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lørdag'],
		days_abbr: ['Søn', 'Man', 'Tir', 'Ons', 'Tor', 'Fre', 'Lør'],

		// Culture's date order: DD.MM.YYYY
		dateOrder: ['date', 'month', 'year'],
		shortDate: '%d.%m.%Y',
		shortTime: '%H:%M',
		AM: 'AM',
		PM: 'PM',
		firstDayOfWeek: 1,

		lessThanMinuteAgo: 'mindre enn et minutt siden',
		minuteAgo: 'omtrent et minutt siden',
		minutesAgo: '{delta} minutter siden',
		hourAgo: 'omtrent en time siden',
		hoursAgo: 'omtrent {delta} timer siden',
		dayAgo: '{delta} dag siden',
		daysAgo: '{delta} dager siden',
		weekAgo: 'en uke siden',
		weeksAgo: '{delta} uker siden',
		monthAgo: 'en måned siden',
		monthsAgo: '{delta} måneder siden',
		yearAgo: 'ett år siden',
		yearsAgo: '{delta} år siden',

		lessThanMinuteUntil: 'mindre enn et minutt til',
		minuteUntil: 'omtrent et minutt til',
		minutesUntil: '{delta} minutter til',
		hourUntil: 'omtrent en time til',
		hoursUntil: 'omtrent {delta} timer til',
		dayUntil: 'en dag til',
		daysUntil: '{delta} dager til',
		weekUntil: 'en uke til',
		weeksUntil: '{delta} uker til',
		monthUntil: 'en måned til',
		monthsUntil: '{delta} måneder til',
		yearUntil: 'et år til',
		yearsUntil: '{delta} år til'
	});

	/*
	---

	name: Locale.no-NO.Form.Validator

	description: Form Validator messages for Norwegian.

	license: MIT-style license

	authors:
	  - Aaron Newton
	  - Espen 'Rexxars' Hovlandsdal
	  - Ole Tøsse Kolvik

	requires:
	  - Locale

	provides: [Locale.no-NO.Form.Validator]

	...
	*/

	Locale.define('no-NO', 'FormValidator', {

		required: 'Dette feltet er påkrevd.',
		length: 'Skriv inn {length} tegn (du skrev {elLength} tegn)',
		minLength: 'Skriv inn minst {minLength} tegn (du skrev {length} tegn).',
		maxLength: 'Ikke skriv mer enn {maxLength} tegn (du skrev {length} tegn).',
		integer: 'Skriv inn et tall i dette feltet. Tall med desimaler (f.eks. 1,25) er ikke tillat.',
		numeric: 'Skriv kun inn numeriske verdier i dette feltet (f.eks. "1", "1.1", "-1" eller "-1.1").',
		digits: 'Skriv kun nummer og skilletegn i dette feltet.',
		alpha: 'Skriv kun bokstaver (a-å) i dette feltet. Ingen mellomrom eller andre tegn er tillat.',
		alphanum: 'Skriv kun bokstaver (a-å) eller nummer (0-9) i dette feltet. Ingen mellomrom eller andre tegn er tillat.',
		dateSuchAs: 'Skriv inn en gyldig dato, som f.eks. {date}',
		dateInFormatMDY: 'Skriv inn en gyldig dato, f.eks. DD/MM/YYYY ("31/12/1999")',
		email: 'Skriv inn en gyldig epost-adresse. F.eks. "ola.nordmann@example.com".',
		url: 'Skriv inn en gyldig URL, f.eks. http://www.example.com.',
		currencyDollar: 'Skriv inn et gyldig beløp. F.eks. 100,00.',
		oneRequired: 'Minst ett av disse feltene må fylles ut.',
		errorPrefix: 'Feil: ',
		warningPrefix: 'Advarsel: ',

		// Form.Validator.Extras
		noSpace: 'Mellomrom er ikke tillatt i dette feltet.',
		reqChkByNode: 'Ingen objekter er valgt.',
		requiredChk: 'Dette feltet er påkrevd.',
		reqChkByName: 'Velg en {label}.',
		match: 'Dette feltet må være lik {matchName}',
		startDate: 'startdato',
		endDate: 'sluttdato',
		currentDate: 'dagens dato',
		afterDate: 'Datoen må være den samme som eller etter {label}.',
		beforeDate: 'Datoen må være den samme som eller før {label}.',
		startMonth: 'Velg en startmåned',
		sameMonth: 'Datoene må være i den samme måneden - velg den ene eller den andre.',
		creditcard: 'Kortnummeret du skrev inn er ikke gyldig. Prøv igjen. Du skrev {length} siffer.'

	});

	/*
	---

	name: Locale.no-NO.Number

	description: Number messages for Norwegian.

	license: MIT-style license

	authors:
	  - Arian Stolwijk
	  - Martin Lundgren
	  - Ole T�sse Kolvik

	requires:
	  - Locale
	  - Locale.EU.Number

	provides: [Locale.no-NO.Number]

	...
	*/

	Locale.define('no-NO', 'Number', {

		currency: {
			prefix: 'NOK '
		}

	}).inherit('EU', 'Number');

	/*
	---

	name: Locale.pl-PL.Date

	description: Date messages for Polish.

	license: MIT-style license

	authors:
	  - Oskar Krawczyk

	requires:
	  - Locale

	provides: [Locale.pl-PL.Date]

	...
	*/

	Locale.define('pl-PL', 'Date', {

		months: ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień'],
		months_abbr: ['sty', 'lut', 'mar', 'kwi', 'maj', 'cze', 'lip', 'sie', 'wrz', 'paź', 'lis', 'gru'],
		days: ['Niedziela', 'Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota'],
		days_abbr: ['niedz.', 'pon.', 'wt.', 'śr.', 'czw.', 'pt.', 'sob.'],

		// Culture's date order: YYYY-MM-DD
		dateOrder: ['year', 'month', 'date'],
		shortDate: '%Y-%m-%d',
		shortTime: '%H:%M',
		AM: 'nad ranem',
		PM: 'po południu',
		firstDayOfWeek: 1,

		// Date.Extras
		ordinal: function(dayOfMonth){
			return (dayOfMonth > 3 && dayOfMonth < 21) ? 'ty' : ['ty', 'szy', 'gi', 'ci', 'ty'][Math.min(dayOfMonth % 10, 4)];
		},

		lessThanMinuteAgo: 'mniej niż minute temu',
		minuteAgo: 'około minutę temu',
		minutesAgo: '{delta} minut temu',
		hourAgo: 'około godzinę temu',
		hoursAgo: 'około {delta} godzin temu',
		dayAgo: 'Wczoraj',
		daysAgo: '{delta} dni temu',

		lessThanMinuteUntil: 'za niecałą minutę',
		minuteUntil: 'za około minutę',
		minutesUntil: 'za {delta} minut',
		hourUntil: 'za około godzinę',
		hoursUntil: 'za około {delta} godzin',
		dayUntil: 'za 1 dzień',
		daysUntil: 'za {delta} dni'

	});

	/*
	---

	name: Locale.pl-PL.Form.Validator

	description: Form Validator messages for Polish.

	license: MIT-style license

	authors:
	  - Oskar Krawczyk

	requires:
	  - Locale

	provides: [Locale.pl-PL.Form.Validator]

	...
	*/

	Locale.define('pl-PL', 'FormValidator', {

		required: 'To pole jest wymagane.',
		minLength: 'Wymagane jest przynajmniej {minLength} znaków (wpisanych zostało tylko {length}).',
		maxLength: 'Dozwolone jest nie więcej niż {maxLength} znaków (wpisanych zostało {length})',
		integer: 'To pole wymaga liczb całych. Liczby dziesiętne (np. 1.25) są niedozwolone.',
		numeric: 'Prosimy używać tylko numerycznych wartości w tym polu (np. "1", "1.1", "-1" lub "-1.1").',
		digits: 'Prosimy używać liczb oraz zankow punktuacyjnych w typ polu (dla przykładu, przy numerze telefonu myślniki i kropki są dozwolone).',
		alpha: 'Prosimy używać tylko liter (a-z) w tym polu. Spacje oraz inne znaki są niedozwolone.',
		alphanum: 'Prosimy używać tylko liter (a-z) lub liczb (0-9) w tym polu. Spacje oraz inne znaki są niedozwolone.',
		dateSuchAs: 'Prosimy podać prawidłową datę w formacie: {date}',
		dateInFormatMDY: 'Prosimy podać poprawną date w formacie DD.MM.RRRR (i.e. "12.01.2009")',
		email: 'Prosimy podać prawidłowy adres e-mail, np. "jan@domena.pl".',
		url: 'Prosimy podać prawidłowy adres URL, np. http://www.example.com.',
		currencyDollar: 'Prosimy podać prawidłową sumę w PLN. Dla przykładu: 100.00 PLN.',
		oneRequired: 'Prosimy wypełnić chociaż jedno z pól.',
		errorPrefix: 'Błąd: ',
		warningPrefix: 'Uwaga: ',

		// Form.Validator.Extras
		noSpace: 'W tym polu nie mogą znajdować się spacje.',
		reqChkByNode: 'Brak zaznaczonych elementów.',
		requiredChk: 'To pole jest wymagane.',
		reqChkByName: 'Prosimy wybrać z {label}.',
		match: 'To pole musi być takie samo jak {matchName}',
		startDate: 'data początkowa',
		endDate: 'data końcowa',
		currentDate: 'aktualna data',
		afterDate: 'Podana data poinna być taka sama lub po {label}.',
		beforeDate: 'Podana data poinna być taka sama lub przed {label}.',
		startMonth: 'Prosimy wybrać początkowy miesiąc.',
		sameMonth: 'Te dwie daty muszą być w zakresie tego samego miesiąca - wymagana jest zmiana któregoś z pól.'

	});

	/*
	---

	name: Locale.pt-PT.Date

	description: Date messages for Portuguese.

	license: MIT-style license

	authors:
	  - Fabio Miranda Costa

	requires:
	  - Locale

	provides: [Locale.pt-PT.Date]

	...
	*/

	Locale.define('pt-PT', 'Date', {

		months: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
		months_abbr: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
		days: ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'],
		days_abbr: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],

		// Culture's date order: DD-MM-YYYY
		dateOrder: ['date', 'month', 'year'],
		shortDate: '%d-%m-%Y',
		shortTime: '%H:%M',
		AM: 'AM',
		PM: 'PM',
		firstDayOfWeek: 1,

		// Date.Extras
		ordinal: 'º',

		lessThanMinuteAgo: 'há menos de um minuto',
		minuteAgo: 'há cerca de um minuto',
		minutesAgo: 'há {delta} minutos',
		hourAgo: 'há cerca de uma hora',
		hoursAgo: 'há cerca de {delta} horas',
		dayAgo: 'há um dia',
		daysAgo: 'há {delta} dias',
		weekAgo: 'há uma semana',
		weeksAgo: 'há {delta} semanas',
		monthAgo: 'há um mês',
		monthsAgo: 'há {delta} meses',
		yearAgo: 'há um ano',
		yearsAgo: 'há {delta} anos',

		lessThanMinuteUntil: 'em menos de um minuto',
		minuteUntil: 'em um minuto',
		minutesUntil: 'em {delta} minutos',
		hourUntil: 'em uma hora',
		hoursUntil: 'em {delta} horas',
		dayUntil: 'em um dia',
		daysUntil: 'em {delta} dias',
		weekUntil: 'em uma semana',
		weeksUntil: 'em {delta} semanas',
		monthUntil: 'em um mês',
		monthsUntil: 'em {delta} meses',
		yearUntil: 'em um ano',
		yearsUntil: 'em {delta} anos'

	});

	/*
	---

	name: Locale.pt-BR.Date

	description: Date messages for Portuguese (Brazil).

	license: MIT-style license

	authors:
	  - Fabio Miranda Costa

	requires:
	  - Locale
	  - Locale.pt-PT.Date

	provides: [Locale.pt-BR.Date]

	...
	*/

	Locale.define('pt-BR', 'Date', {

		// Culture's date order: DD/MM/YYYY
		shortDate: '%d/%m/%Y'

	}).inherit('pt-PT', 'Date');

	/*
	---

	name: Locale.pt-BR.Form.Validator

	description: Form Validator messages for Portuguese (Brazil).

	license: MIT-style license

	authors:
	  - Fábio Miranda Costa

	requires:
	  - Locale

	provides: [Locale.pt-BR.Form.Validator]

	...
	*/

	Locale.define('pt-BR', 'FormValidator', {

		required: 'Este campo é obrigatório.',
		minLength: 'Digite pelo menos {minLength} caracteres (tamanho atual: {length}).',
		maxLength: 'Não digite mais de {maxLength} caracteres (tamanho atual: {length}).',
		integer: 'Por favor digite apenas um número inteiro neste campo. Não são permitidos números decimais (por exemplo, 1,25).',
		numeric: 'Por favor digite apenas valores numéricos neste campo (por exemplo, "1" ou "1.1" ou "-1" ou "-1,1").',
		digits: 'Por favor use apenas números e pontuação neste campo (por exemplo, um número de telefone com traços ou pontos é permitido).',
		alpha: 'Por favor use somente letras (a-z). Espaço e outros caracteres não são permitidos.',
		alphanum: 'Use somente letras (a-z) ou números (0-9) neste campo. Espaço e outros caracteres não são permitidos.',
		dateSuchAs: 'Digite uma data válida, como {date}',
		dateInFormatMDY: 'Digite uma data válida, como DD/MM/YYYY (por exemplo, "31/12/1999")',
		email: 'Digite um endereço de email válido. Por exemplo "nome@dominio.com".',
		url: 'Digite uma URL válida. Exemplo: http://www.example.com.',
		currencyDollar: 'Digite um valor em dinheiro válido. Exemplo: R$100,00 .',
		oneRequired: 'Digite algo para pelo menos um desses campos.',
		errorPrefix: 'Erro: ',
		warningPrefix: 'Aviso: ',

		// Form.Validator.Extras
		noSpace: 'Não é possível digitar espaços neste campo.',
		reqChkByNode: 'Não foi selecionado nenhum item.',
		requiredChk: 'Este campo é obrigatório.',
		reqChkByName: 'Por favor digite um {label}.',
		match: 'Este campo deve ser igual ao campo {matchName}.',
		startDate: 'a data inicial',
		endDate: 'a data final',
		currentDate: 'a data atual',
		afterDate: 'A data deve ser igual ou posterior a {label}.',
		beforeDate: 'A data deve ser igual ou anterior a {label}.',
		startMonth: 'Por favor selecione uma data inicial.',
		sameMonth: 'Estas duas datas devem ter o mesmo mês - você deve modificar uma das duas.',
		creditcard: 'O número do cartão de crédito informado é inválido. Por favor verifique o valor e tente novamente. {length} números informados.'

	});

	/*
	---

	name: Locale.pt-BR.Number

	description: Number messages for PT Brazilian.

	license: MIT-style license

	authors:
	  - Arian Stolwijk
	  - Danillo César

	requires:
	  - Locale

	provides: [Locale.pt-BR.Number]

	...
	*/

	Locale.define('pt-BR', 'Number', {

		decimal: ',',
		group: '.',

		currency: {
			prefix: 'R$ '
		}

	});



	/*
	---

	name: Locale.pt-PT.Form.Validator

	description: Form Validator messages for Portuguese.

	license: MIT-style license

	authors:
	  - Miquel Hudin

	requires:
	  - Locale

	provides: [Locale.pt-PT.Form.Validator]

	...
	*/

	Locale.define('pt-PT', 'FormValidator', {

		required: 'Este campo é necessário.',
		minLength: 'Digite pelo menos{minLength} caracteres (comprimento {length} caracteres).',
		maxLength: 'Não insira mais de {maxLength} caracteres (comprimento {length} caracteres).',
		integer: 'Digite um número inteiro neste domínio. Com números decimais (por exemplo, 1,25), não são permitidas.',
		numeric: 'Digite apenas valores numéricos neste domínio (p.ex., "1" ou "1.1" ou "-1" ou "-1,1").',
		digits: 'Por favor, use números e pontuação apenas neste campo (p.ex., um número de telefone com traços ou pontos é permitida).',
		alpha: 'Por favor use somente letras (a-z), com nesta área. Não utilize espaços nem outros caracteres são permitidos.',
		alphanum: 'Use somente letras (a-z) ou números (0-9) neste campo. Não utilize espaços nem outros caracteres são permitidos.',
		dateSuchAs: 'Digite uma data válida, como {date}',
		dateInFormatMDY: 'Digite uma data válida, como DD/MM/YYYY (p.ex. "31/12/1999")',
		email: 'Digite um endereço de email válido. Por exemplo "fred@domain.com".',
		url: 'Digite uma URL válida, como http://www.example.com.',
		currencyDollar: 'Digite um valor válido $. Por exemplo $ 100,00. ',
		oneRequired: 'Digite algo para pelo menos um desses insumos.',
		errorPrefix: 'Erro: ',
		warningPrefix: 'Aviso: '

	});

	/*
	---

	name: Locale.ru-RU-unicode.Date

	description: Date messages for Russian (utf-8).

	license: MIT-style license

	authors:
	  - Evstigneev Pavel
	  - Kuryanovich Egor

	requires:
	  - Locale

	provides: [Locale.ru-RU.Date]

	...
	*/

	(function(){

	// Russian language pluralization rules, taken from CLDR project, http://unicode.org/cldr/
	// one -> n mod 10 is 1 and n mod 100 is not 11;
	// few -> n mod 10 in 2..4 and n mod 100 not in 12..14;
	// many -> n mod 10 is 0 or n mod 10 in 5..9 or n mod 100 in 11..14;
	// other -> everything else (example 3.14)
	var pluralize = function(n, one, few, many, other){
		var modulo10 = n % 10,
			modulo100 = n % 100;

		if (modulo10 == 1 && modulo100 != 11){
			return one;
		} else if ((modulo10 == 2 || modulo10 == 3 || modulo10 == 4) && !(modulo100 == 12 || modulo100 == 13 || modulo100 == 14)){
			return few;
		} else if (modulo10 == 0 || (modulo10 == 5 || modulo10 == 6 || modulo10 == 7 || modulo10 == 8 || modulo10 == 9) || (modulo100 == 11 || modulo100 == 12 || modulo100 == 13 || modulo100 == 14)){
			return many;
		} else {
			return other;
		}
	};

	Locale.define('ru-RU', 'Date', {

		months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
		months_abbr: ['янв', 'февр', 'март', 'апр', 'май','июнь','июль','авг','сент','окт','нояб','дек'],
		days: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
		days_abbr: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],

		// Culture's date order: DD.MM.YYYY
		dateOrder: ['date', 'month', 'year'],
		shortDate: '%d.%m.%Y',
		shortTime: '%H:%M',
		AM: 'AM',
		PM: 'PM',
		firstDayOfWeek: 1,

		// Date.Extras
		ordinal: '',

		lessThanMinuteAgo: 'меньше минуты назад',
		minuteAgo: 'минуту назад',
		minutesAgo: function(delta){ return '{delta} ' + pluralize(delta, 'минуту', 'минуты', 'минут') + ' назад'; },
		hourAgo: 'час назад',
		hoursAgo: function(delta){ return '{delta} ' + pluralize(delta, 'час', 'часа', 'часов') + ' назад'; },
		dayAgo: 'вчера',
		daysAgo: function(delta){ return '{delta} ' + pluralize(delta, 'день', 'дня', 'дней') + ' назад'; },
		weekAgo: 'неделю назад',
		weeksAgo: function(delta){ return '{delta} ' + pluralize(delta, 'неделя', 'недели', 'недель') + ' назад'; },
		monthAgo: 'месяц назад',
		monthsAgo: function(delta){ return '{delta} ' + pluralize(delta, 'месяц', 'месяца', 'месяцев') + ' назад'; },
		yearAgo: 'год назад',
		yearsAgo: function(delta){ return '{delta} ' + pluralize(delta, 'год', 'года', 'лет') + ' назад'; },

		lessThanMinuteUntil: 'меньше чем через минуту',
		minuteUntil: 'через минуту',
		minutesUntil: function(delta){ return 'через {delta} ' + pluralize(delta, 'минуту', 'минуты', 'минут') + ''; },
		hourUntil: 'через час',
		hoursUntil: function(delta){ return 'через {delta} ' + pluralize(delta, 'час', 'часа', 'часов') + ''; },
		dayUntil: 'завтра',
		daysUntil: function(delta){ return 'через {delta} ' + pluralize(delta, 'день', 'дня', 'дней') + ''; },
		weekUntil: 'через неделю',
		weeksUntil: function(delta){ return 'через {delta} ' + pluralize(delta, 'неделю', 'недели', 'недель') + ''; },
		monthUntil: 'через месяц',
		monthsUntil: function(delta){ return 'через {delta} ' + pluralize(delta, 'месяц', 'месяца', 'месяцев') + ''; },
		yearUntil: 'через',
		yearsUntil: function(delta){ return 'через {delta} ' + pluralize(delta, 'год', 'года', 'лет') + ''; }

	});



	})();

	/*
	---

	name: Locale.ru-RU-unicode.Form.Validator

	description: Form Validator messages for Russian (utf-8).

	license: MIT-style license

	authors:
	  - Chernodarov Egor

	requires:
	  - Locale

	provides: [Locale.ru-RU.Form.Validator]

	...
	*/

	Locale.define('ru-RU', 'FormValidator', {

		required: 'Это поле обязательно к заполнению.',
		minLength: 'Пожалуйста, введите хотя бы {minLength} символов (Вы ввели {length}).',
		maxLength: 'Пожалуйста, введите не больше {maxLength} символов (Вы ввели {length}).',
		integer: 'Пожалуйста, введите в это поле число. Дробные числа (например 1.25) тут не разрешены.',
		numeric: 'Пожалуйста, введите в это поле число (например "1" или "1.1", или "-1", или "-1.1").',
		digits: 'В этом поле Вы можете использовать только цифры и знаки пунктуации (например, телефонный номер со знаками дефиса или с точками).',
		alpha: 'В этом поле можно использовать только латинские буквы (a-z). Пробелы и другие символы запрещены.',
		alphanum: 'В этом поле можно использовать только латинские буквы (a-z) и цифры (0-9). Пробелы и другие символы запрещены.',
		dateSuchAs: 'Пожалуйста, введите корректную дату {date}',
		dateInFormatMDY: 'Пожалуйста, введите дату в формате ММ/ДД/ГГГГ (например "12/31/1999")',
		email: 'Пожалуйста, введите корректный емейл-адрес. Для примера "fred@domain.com".',
		url: 'Пожалуйста, введите правильную ссылку вида http://www.example.com.',
		currencyDollar: 'Пожалуйста, введите сумму в долларах. Например: $100.00 .',
		oneRequired: 'Пожалуйста, выберите хоть что-нибудь в одном из этих полей.',
		errorPrefix: 'Ошибка: ',
		warningPrefix: 'Внимание: '

	});



	/*
	---

	name: Locale.sk-SK.Date

	description: Date messages for Slovak.

	license: MIT-style license

	authors:
	  - Ivan Masár

	requires:
	  - Locale

	provides: [Locale.sk-SK.Date]

	...
	*/
	(function(){

	// Slovak language pluralization rules, see http://unicode.org/repos/cldr-tmp/trunk/diff/supplemental/language_plural_rules.html
	// one -> n is 1;            1
	// few -> n in 2..4;         2-4
	// other -> everything else  0, 5-999, 1.31, 2.31, 5.31...
	var pluralize = function(n, one, few, other){
		if (n == 1) return one;
		else if (n == 2 || n == 3 || n == 4) return few;
		else return other;
	};

	Locale.define('sk-SK', 'Date', {

		months: ['Január', 'Február', 'Marec', 'Apríl', 'Máj', 'Jún', 'Júl', 'August', 'September', 'Október', 'November', 'December'],
		months_abbr: ['januára', 'februára', 'marca', 'apríla', 'mája', 'júna', 'júla', 'augusta', 'septembra', 'októbra', 'novembra', 'decembra'],
		days: ['Nedele', 'Pondelí', 'Úterý', 'Streda', 'Čtvrtek', 'Pátek', 'Sobota'],
		days_abbr: ['ne', 'po', 'ut', 'st', 'št', 'pi', 'so'],

		// Culture's date order: DD.MM.YYYY
		dateOrder: ['date', 'month', 'year'],
		shortDate: '%d.%m.%Y',
		shortTime: '%H:%M',
		AM: 'dop.',
		PM: 'pop.',
		firstDayOfWeek: 1,

		// Date.Extras
		ordinal: '.',

		lessThanMinuteAgo: 'pred chvíľou',
		minuteAgo: 'približne pred minútou',
		minutesAgo: function(delta){ return 'pred {delta} ' + pluralize(delta, 'minútou', 'minútami', 'minútami'); },
		hourAgo: 'približne pred hodinou',
		hoursAgo: function(delta){ return 'pred {delta} ' + pluralize(delta, 'hodinou', 'hodinami', 'hodinami'); },
		dayAgo: 'pred dňom',
		daysAgo: function(delta){ return 'pred {delta} ' + pluralize(delta, 'dňom', 'dňami', 'dňami'); },
		weekAgo: 'pred týždňom',
		weeksAgo: function(delta){ return 'pred {delta} ' + pluralize(delta, 'týždňom', 'týždňami', 'týždňami'); },
		monthAgo: 'pred mesiacom',
		monthsAgo: function(delta){ return 'pred {delta} ' + pluralize(delta, 'mesiacom', 'mesiacmi', 'mesiacmi'); },
		yearAgo: 'pred rokom',
		yearsAgo: function(delta){ return 'pred {delta} ' + pluralize(delta, 'rokom', 'rokmi', 'rokmi'); },

		lessThanMinuteUntil: 'o chvíľu',
		minuteUntil: 'približne o minútu',
		minutesUntil: function(delta){ return 'o {delta} ' + pluralize(delta, 'minútu', 'minúty', 'minúty'); },
		hourUntil: 'približne o hodinu',
		hoursUntil: function(delta){ return 'o {delta} ' + pluralize(delta, 'hodinu', 'hodiny', 'hodín'); },
		dayUntil: 'o deň',
		daysUntil: function(delta){ return 'o {delta} ' + pluralize(delta, 'deň', 'dni', 'dní'); },
		weekUntil: 'o týždeň',
		weeksUntil: function(delta){ return 'o {delta} ' + pluralize(delta, 'týždeň', 'týždne', 'týždňov'); },
		monthUntil: 'o mesiac',
		monthsUntil: function(delta){ return 'o {delta} ' + pluralize(delta, 'mesiac', 'mesiace', 'mesiacov'); },
		yearUntil: 'o rok',
		yearsUntil: function(delta){ return 'o {delta} ' + pluralize(delta, 'rok', 'roky', 'rokov'); }
	});

	})();

	/*
	---

	name: Locale.sk-SK.Form.Validator

	description: Form Validator messages for Czech.

	license: MIT-style license

	authors:
	  - Ivan Masár

	requires:
	  - Locale

	provides: [Locale.sk-SK.Form.Validator]

	...
	*/

	Locale.define('sk-SK', 'FormValidator', {

		required: 'Táto položka je povinná.',
		minLength: 'Zadajte prosím aspoň {minLength} znakov (momentálne {length} znakov).',
		maxLength: 'Zadajte prosím menej ako {maxLength} znakov (momentálne {length} znakov).',
		integer: 'Zadajte prosím celé číslo. Desetinné čísla (napr. 1.25) nie sú povolené.',
		numeric: 'Zadajte len číselné hodnoty (t.j. „1“ alebo „1.1“ alebo „-1“ alebo „-1.1“).',
		digits: 'Zadajte prosím len čísla a interpunkčné znamienka (napríklad telefónne číslo s pomlčkami albo bodkami je povolené).',
		alpha: 'Zadajte prosím len písmená (a-z). Medzery alebo iné znaky nie sú povolené.',
		alphanum: 'Zadajte prosím len písmená (a-z) alebo číslice (0-9). Medzery alebo iné znaky nie sú povolené.',
		dateSuchAs: 'Zadajte prosím platný dátum v tvare {date}',
		dateInFormatMDY: 'Zadajte prosím platný datum v tvare MM / DD / RRRR (t.j. „12/31/1999“)',
		email: 'Zadajte prosím platnú emailovú adresu. Napríklad „fred@domain.com“.',
		url: 'Zadajte prosím platnoú adresu URL v tvare http://www.example.com.',
		currencyDollar: 'Zadajte prosím platnú čiastku. Napríklad $100.00.',
		oneRequired: 'Zadajte prosím aspoň jednu hodnotu z týchto položiek.',
		errorPrefix: 'Chyba: ',
		warningPrefix: 'Upozornenie: ',

		// Form.Validator.Extras
		noSpace: 'V tejto položle nie sú povolené medzery',
		reqChkByNode: 'Nie sú vybrané žiadne položky.',
		requiredChk: 'Táto položka je povinná.',
		reqChkByName: 'Prosím vyberte {label}.',
		match: 'Táto položka sa musí zhodovať s položkou {matchName}',
		startDate: 'dátum začiatku',
		endDate: 'dátum ukončenia',
		currendDate: 'aktuálny dátum',
		afterDate: 'Dátum by mal býť rovnaký alebo väčší ako {label}.',
		beforeDate: 'Dátum by mal byť rovnaký alebo menší ako {label}.',
		startMonth: 'Vyberte počiatočný mesiac.',
		sameMonth: 'Tieto dva dátumy musia býť v rovnakom mesiaci - zmeňte jeden z nich.',
		creditcard: 'Zadané číslo kreditnej karty je neplatné. Prosím, opravte ho. Bolo zadaných {length} číslic.'

	});

	/*
	---

	name: Locale.si-SI.Date

	description: Date messages for Slovenian.

	license: MIT-style license

	authors:
	  - Radovan Lozej

	requires:
	  - Locale

	provides: [Locale.si-SI.Date]

	...
	*/

	(function(){

	var pluralize = function(n, one, two, three, other){
		return (n >= 1 && n <= 3) ? arguments[n] : other;
	};

	Locale.define('sl-SI', 'Date', {

		months: ['januar', 'februar', 'marec', 'april', 'maj', 'junij', 'julij', 'avgust', 'september', 'oktober', 'november', 'december'],
		months_abbr: ['jan', 'feb', 'mar', 'apr', 'maj', 'jun', 'jul', 'avg', 'sep', 'okt', 'nov', 'dec'],
		days: ['nedelja', 'ponedeljek', 'torek', 'sreda', 'četrtek', 'petek', 'sobota'],
		days_abbr: ['ned', 'pon', 'tor', 'sre', 'čet', 'pet', 'sob'],

		// Culture's date order: DD.MM.YYYY
		dateOrder: ['date', 'month', 'year'],
		shortDate: '%d.%m.%Y',
		shortTime: '%H.%M',
		AM: 'AM',
		PM: 'PM',
		firstDayOfWeek: 1,

		// Date.Extras
		ordinal: '.',

		lessThanMinuteAgo: 'manj kot minuto nazaj',
		minuteAgo: 'minuto nazaj',
		minutesAgo: function(delta){ return '{delta} ' + pluralize(delta, 'minuto', 'minuti', 'minute', 'minut') + ' nazaj'; },
		hourAgo: 'uro nazaj',
		hoursAgo: function(delta){ return '{delta} ' + pluralize(delta, 'uro', 'uri', 'ure', 'ur') + ' nazaj'; },
		dayAgo: 'dan nazaj',
		daysAgo: function(delta){ return '{delta} ' + pluralize(delta, 'dan', 'dneva', 'dni', 'dni') + ' nazaj'; },
		weekAgo: 'teden nazaj',
		weeksAgo: function(delta){ return '{delta} ' + pluralize(delta, 'teden', 'tedna', 'tedne', 'tednov') + ' nazaj'; },
		monthAgo: 'mesec nazaj',
		monthsAgo: function(delta){ return '{delta} ' + pluralize(delta, 'mesec', 'meseca', 'mesece', 'mesecov') + ' nazaj'; },
		yearthAgo: 'leto nazaj',
		yearsAgo: function(delta){ return '{delta} ' + pluralize(delta, 'leto', 'leti', 'leta', 'let') + ' nazaj'; },

		lessThanMinuteUntil: 'še manj kot minuto',
		minuteUntil: 'še minuta',
		minutesUntil: function(delta){ return 'še {delta} ' + pluralize(delta, 'minuta', 'minuti', 'minute', 'minut'); },
		hourUntil: 'še ura',
		hoursUntil: function(delta){ return 'še {delta} ' + pluralize(delta, 'ura', 'uri', 'ure', 'ur'); },
		dayUntil: 'še dan',
		daysUntil: function(delta){ return 'še {delta} ' + pluralize(delta, 'dan', 'dneva', 'dnevi', 'dni'); },
		weekUntil: 'še tedn',
		weeksUntil: function(delta){ return 'še {delta} ' + pluralize(delta, 'teden', 'tedna', 'tedni', 'tednov'); },
		monthUntil: 'še mesec',
		monthsUntil: function(delta){ return 'še {delta} ' + pluralize(delta, 'mesec', 'meseca', 'meseci', 'mesecov'); },
		yearUntil: 'še leto',
		yearsUntil: function(delta){ return 'še {delta} ' + pluralize(delta, 'leto', 'leti', 'leta', 'let'); }

	});

	})();

	/*
	---

	name: Locale.si-SI.Form.Validator

	description: Form Validator messages for Slovenian.

	license: MIT-style license

	authors:
	  - Radovan Lozej

	requires:
	  - Locale

	provides: [Locale.si-SI.Form.Validator]

	...
	*/

	Locale.define('sl-SI', 'FormValidator', {

		required: 'To polje je obvezno',
		minLength: 'Prosim, vnesite vsaj {minLength} znakov (vnesli ste {length} znakov).',
		maxLength: 'Prosim, ne vnesite več kot {maxLength} znakov (vnesli ste {length} znakov).',
		integer: 'Prosim, vnesite celo število. Decimalna števila (kot 1,25) niso dovoljena.',
		numeric: 'Prosim, vnesite samo numerične vrednosti (kot "1" ali "1.1" ali "-1" ali "-1.1").',
		digits: 'Prosim, uporabite številke in ločila le na tem polju (na primer, dovoljena je telefonska številka z pomišlaji ali pikami).',
		alpha: 'Prosim, uporabite le črke v tem plju. Presledki in drugi znaki niso dovoljeni.',
		alphanum: 'Prosim, uporabite samo črke ali številke v tem polju. Presledki in drugi znaki niso dovoljeni.',
		dateSuchAs: 'Prosim, vnesite pravilen datum kot {date}',
		dateInFormatMDY: 'Prosim, vnesite pravilen datum kot MM.DD.YYYY (primer "12.31.1999")',
		email: 'Prosim, vnesite pravilen email naslov. Na primer "fred@domain.com".',
		url: 'Prosim, vnesite pravilen URL kot http://www.example.com.',
		currencyDollar: 'Prosim, vnesit epravilno vrednost €. Primer 100,00€ .',
		oneRequired: 'Prosimo, vnesite nekaj za vsaj eno izmed teh polj.',
		errorPrefix: 'Napaka: ',
		warningPrefix: 'Opozorilo: ',

		// Form.Validator.Extras
		noSpace: 'To vnosno polje ne dopušča presledkov.',
		reqChkByNode: 'Nič niste izbrali.',
		requiredChk: 'To polje je obvezno',
		reqChkByName: 'Prosim, izberite {label}.',
		match: 'To polje se mora ujemati z poljem {matchName}',
		startDate: 'datum začetka',
		endDate: 'datum konca',
		currentDate: 'trenuten datum',
		afterDate: 'Datum bi moral biti isti ali po {label}.',
		beforeDate: 'Datum bi moral biti isti ali pred {label}.',
		startMonth: 'Prosim, vnesite začetni datum',
		sameMonth: 'Ta dva datuma morata biti v istem mesecu - premeniti morate eno ali drugo.',
		creditcard: 'Številka kreditne kartice ni pravilna. Preverite številko ali poskusite še enkrat. Vnešenih {length} znakov.'

	});

	/*
	---

	name: Locale.sv-SE.Date

	description: Date messages for Swedish.

	license: MIT-style license

	authors:
	  - Martin Lundgren

	requires:
	  - Locale

	provides: [Locale.sv-SE.Date]

	...
	*/

	Locale.define('sv-SE', 'Date', {

		months: ['januari', 'februari', 'mars', 'april', 'maj', 'juni', 'juli', 'augusti', 'september', 'oktober', 'november', 'december'],
		months_abbr: ['jan', 'feb', 'mar', 'apr', 'maj', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec'],
		days: ['söndag', 'måndag', 'tisdag', 'onsdag', 'torsdag', 'fredag', 'lördag'],
		days_abbr: ['sön', 'mån', 'tis', 'ons', 'tor', 'fre', 'lör'],

		// Culture's date order: YYYY-MM-DD
		dateOrder: ['year', 'month', 'date'],
		shortDate: '%Y-%m-%d',
		shortTime: '%H:%M',
		AM: '',
		PM: '',
		firstDayOfWeek: 1,

		// Date.Extras
		ordinal: '',

		lessThanMinuteAgo: 'mindre än en minut sedan',
		minuteAgo: 'ungefär en minut sedan',
		minutesAgo: '{delta} minuter sedan',
		hourAgo: 'ungefär en timme sedan',
		hoursAgo: 'ungefär {delta} timmar sedan',
		dayAgo: '1 dag sedan',
		daysAgo: '{delta} dagar sedan',

		lessThanMinuteUntil: 'mindre än en minut sedan',
		minuteUntil: 'ungefär en minut sedan',
		minutesUntil: '{delta} minuter sedan',
		hourUntil: 'ungefär en timme sedan',
		hoursUntil: 'ungefär {delta} timmar sedan',
		dayUntil: '1 dag sedan',
		daysUntil: '{delta} dagar sedan'

	});

	/*
	---

	name: Locale.sv-SE.Form.Validator

	description: Form Validator messages for Swedish.

	license: MIT-style license

	authors:
	  - Martin Lundgren

	requires:
	  - Locale

	provides: [Locale.sv-SE.Form.Validator]

	...
	*/

	Locale.define('sv-SE', 'FormValidator', {

		required: 'Fältet är obligatoriskt.',
		minLength: 'Ange minst {minLength} tecken (du angav {length} tecken).',
		maxLength: 'Ange högst {maxLength} tecken (du angav {length} tecken). ',
		integer: 'Ange ett heltal i fältet. Tal med decimaler (t.ex. 1,25) är inte tillåtna.',
		numeric: 'Ange endast numeriska värden i detta fält (t.ex. "1" eller "1.1" eller "-1" eller "-1,1").',
		digits: 'Använd endast siffror och skiljetecken i detta fält (till exempel ett telefonnummer med bindestreck tillåtet).',
		alpha: 'Använd endast bokstäver (a-ö) i detta fält. Inga mellanslag eller andra tecken är tillåtna.',
		alphanum: 'Använd endast bokstäver (a-ö) och siffror (0-9) i detta fält. Inga mellanslag eller andra tecken är tillåtna.',
		dateSuchAs: 'Ange ett giltigt datum som t.ex. {date}',
		dateInFormatMDY: 'Ange ett giltigt datum som t.ex. YYYY-MM-DD (i.e. "1999-12-31")',
		email: 'Ange en giltig e-postadress. Till exempel "erik@domain.com".',
		url: 'Ange en giltig webbadress som http://www.example.com.',
		currencyDollar: 'Ange en giltig belopp. Exempelvis 100,00.',
		oneRequired: 'Vänligen ange minst ett av dessa alternativ.',
		errorPrefix: 'Fel: ',
		warningPrefix: 'Varning: ',

		// Form.Validator.Extras
		noSpace: 'Det får inte finnas några mellanslag i detta fält.',
		reqChkByNode: 'Inga objekt är valda.',
		requiredChk: 'Detta är ett obligatoriskt fält.',
		reqChkByName: 'Välj en {label}.',
		match: 'Detta fält måste matcha {matchName}',
		startDate: 'startdatumet',
		endDate: 'slutdatum',
		currentDate: 'dagens datum',
		afterDate: 'Datumet bör vara samma eller senare än {label}.',
		beforeDate: 'Datumet bör vara samma eller tidigare än {label}.',
		startMonth: 'Välj en start månad',
		sameMonth: 'Dessa två datum måste vara i samma månad - du måste ändra det ena eller det andra.'

	});

	/*
	---

	name: Locale.sv-SE.Number

	description: Number messages for Swedish.

	license: MIT-style license

	authors:
	  - Arian Stolwijk
	  - Martin Lundgren

	requires:
	  - Locale
	  - Locale.EU.Number

	provides: [Locale.sv-SE.Number]

	...
	*/

	Locale.define('sv-SE', 'Number', {

		currency: {
			prefix: 'SEK '
		}

	}).inherit('EU', 'Number');

	/*
	---

	name: Locale.tr-TR.Date

	description: Date messages for Turkish.

	license: MIT-style license

	authors:
	  - Faruk Can Bilir

	requires:
	  - Locale

	provides: [Locale.tr-TR.Date]

	...
	*/

	Locale.define('tr-TR', 'Date', {

		months: ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'],
		months_abbr: ['Oca', 'Şub', 'Mar', 'Nis', 'May', 'Haz', 'Tem', 'Ağu', 'Eyl', 'Eki', 'Kas', 'Ara'],
		days: ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'],
		days_abbr: ['Pa', 'Pzt', 'Sa', 'Ça', 'Pe', 'Cu', 'Cmt'],

		// Culture's date order: MM/DD/YYYY
		dateOrder: ['date', 'month', 'year'],
		shortDate: '%d/%m/%Y',
		shortTime: '%H.%M',
		AM: 'AM',
		PM: 'PM',
		firstDayOfWeek: 1,

		// Date.Extras
		ordinal: '',

		lessThanMinuteAgo: 'bir dakikadan önce',
		minuteAgo: 'yaklaşık bir dakika önce',
		minutesAgo: '{delta} dakika önce',
		hourAgo: 'bir saat kadar önce',
		hoursAgo: '{delta} saat kadar önce',
		dayAgo: 'bir gün önce',
		daysAgo: '{delta} gün önce',
		weekAgo: 'bir hafta önce',
		weeksAgo: '{delta} hafta önce',
		monthAgo: 'bir ay önce',
		monthsAgo: '{delta} ay önce',
		yearAgo: 'bir yıl önce',
		yearsAgo: '{delta} yıl önce',

		lessThanMinuteUntil: 'bir dakikadan az sonra',
		minuteUntil: 'bir dakika kadar sonra',
		minutesUntil: '{delta} dakika sonra',
		hourUntil: 'bir saat kadar sonra',
		hoursUntil: '{delta} saat kadar sonra',
		dayUntil: 'bir gün sonra',
		daysUntil: '{delta} gün sonra',
		weekUntil: 'bir hafta sonra',
		weeksUntil: '{delta} hafta sonra',
		monthUntil: 'bir ay sonra',
		monthsUntil: '{delta} ay sonra',
		yearUntil: 'bir yıl sonra',
		yearsUntil: '{delta} yıl sonra'

	});

	/*
	---

	name: Locale.tr-TR.Form.Validator

	description: Form Validator messages for Turkish.

	license: MIT-style license

	authors:
	  - Faruk Can Bilir

	requires:
	  - Locale

	provides: [Locale.tr-TR.Form.Validator]

	...
	*/

	Locale.define('tr-TR', 'FormValidator', {

		required: 'Bu alan zorunlu.',
		minLength: 'Lütfen en az {minLength} karakter girin (siz {length} karakter girdiniz).',
		maxLength: 'Lütfen en fazla {maxLength} karakter girin (siz {length} karakter girdiniz).',
		integer: 'Lütfen bu alana sadece tamsayı girin. Ondalıklı sayılar (ör: 1.25) kullanılamaz.',
		numeric: 'Lütfen bu alana sadece sayısal değer girin (ör: "1", "1.1", "-1" ya da "-1.1").',
		digits: 'Lütfen bu alana sadece sayısal değer ve noktalama işareti girin (örneğin, nokta ve tire içeren bir telefon numarası kullanılabilir).',
		alpha: 'Lütfen bu alanda yalnızca harf kullanın. Boşluk ve diğer karakterler kullanılamaz.',
		alphanum: 'Lütfen bu alanda sadece harf ve rakam kullanın. Boşluk ve diğer karakterler kullanılamaz.',
		dateSuchAs: 'Lütfen geçerli bir tarih girin (Ör: {date})',
		dateInFormatMDY: 'Lütfen geçerli bir tarih girin (GG/AA/YYYY, ör: "31/12/1999")',
		email: 'Lütfen geçerli bir email adresi girin. Ör: "kemal@etikan.com".',
		url: 'Lütfen geçerli bir URL girin. Ör: http://www.example.com.',
		currencyDollar: 'Lütfen geçerli bir TL miktarı girin. Ör: 100,00 TL .',
		oneRequired: 'Lütfen en az bir tanesini doldurun.',
		errorPrefix: 'Hata: ',
		warningPrefix: 'Uyarı: ',

		// Form.Validator.Extras
		noSpace: 'Bu alanda boşluk kullanılamaz.',
		reqChkByNode: 'Hiçbir öğe seçilmemiş.',
		requiredChk: 'Bu alan zorunlu.',
		reqChkByName: 'Lütfen bir {label} girin.',
		match: 'Bu alan, {matchName} alanıyla uyuşmalı',
		startDate: 'başlangıç tarihi',
		endDate: 'bitiş tarihi',
		currentDate: 'bugünün tarihi',
		afterDate: 'Tarih, {label} tarihiyle aynı gün ya da ondan sonra olmalıdır.',
		beforeDate: 'Tarih, {label} tarihiyle aynı gün ya da ondan önce olmalıdır.',
		startMonth: 'Lütfen bir başlangıç ayı seçin',
		sameMonth: 'Bu iki tarih aynı ayda olmalı - bir tanesini değiştirmeniz gerekiyor.',
		creditcard: 'Girdiğiniz kredi kartı numarası geçersiz. Lütfen kontrol edip tekrar deneyin. {length} hane girildi.'

	});

	/*
	---

	name: Locale.tr-TR.Number

	description: Number messages for Turkish.

	license: MIT-style license

	authors:
	  - Faruk Can Bilir

	requires:
	  - Locale
	  - Locale.EU.Number

	provides: [Locale.tr-TR.Number]

	...
	*/

	Locale.define('tr-TR', 'Number', {

		currency: {
			decimals: 0,
			suffix: ' TL'
		}

	}).inherit('EU', 'Number');

	/*
	---

	name: Locale.uk-UA.Date

	description: Date messages for Ukrainian (utf-8).

	license: MIT-style license

	authors:
	  - Slik

	requires:
	  - Locale

	provides: [Locale.uk-UA.Date]

	...
	*/

	(function(){

	var pluralize = function(n, one, few, many, other){
		var d = (n / 10).toInt(),
			z = n % 10,
			s = (n / 100).toInt();

		if (d == 1 && n > 10) return many;
		if (z == 1) return one;
		if (z > 0 && z < 5) return few;
		return many;
	};

	Locale.define('uk-UA', 'Date', {

		months: ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'],
		months_abbr: ['Січ', 'Лют', 'Бер', 'Квіт', 'Трав', 'Черв', 'Лип', 'Серп', 'Вер', 'Жовт', 'Лист', 'Груд' ],
		days: ['Неділя', 'Понеділок', 'Вівторок', 'Середа', 'Четвер', "П'ятниця", 'Субота'],
		days_abbr: ['Нд', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],

		// Culture's date order: DD/MM/YYYY
		dateOrder: ['date', 'month', 'year'],
		shortDate: '%d/%m/%Y',
		shortTime: '%H:%M',
		AM: 'до полудня',
		PM: 'по полудню',
		firstDayOfWeek: 1,

		// Date.Extras
		ordinal: '',

		lessThanMinuteAgo: 'меньше хвилини тому',
		minuteAgo: 'хвилину тому',
		minutesAgo: function(delta){ return '{delta} ' + pluralize(delta, 'хвилину', 'хвилини', 'хвилин') + ' тому'; },
		hourAgo: 'годину тому',
		hoursAgo: function(delta){ return '{delta} ' + pluralize(delta, 'годину', 'години', 'годин') + ' тому'; },
		dayAgo: 'вчора',
		daysAgo: function(delta){ return '{delta} ' + pluralize(delta, 'день', 'дня', 'днів') + ' тому'; },
		weekAgo: 'тиждень тому',
		weeksAgo: function(delta){ return '{delta} ' + pluralize(delta, 'тиждень', 'тижні', 'тижнів') + ' тому'; },
		monthAgo: 'місяць тому',
		monthsAgo: function(delta){ return '{delta} ' + pluralize(delta, 'місяць', 'місяці', 'місяців') + ' тому'; },
		yearAgo: 'рік тому',
		yearsAgo: function(delta){ return '{delta} ' + pluralize(delta, 'рік', 'роки', 'років') + ' тому'; },

		lessThanMinuteUntil: 'за мить',
		minuteUntil: 'через хвилину',
		minutesUntil: function(delta){ return 'через {delta} ' + pluralize(delta, 'хвилину', 'хвилини', 'хвилин'); },
		hourUntil: 'через годину',
		hoursUntil: function(delta){ return 'через {delta} ' + pluralize(delta, 'годину', 'години', 'годин'); },
		dayUntil: 'завтра',
		daysUntil: function(delta){ return 'через {delta} ' + pluralize(delta, 'день', 'дня', 'днів'); },
		weekUntil: 'через тиждень',
		weeksUntil: function(delta){ return 'через {delta} ' + pluralize(delta, 'тиждень', 'тижні', 'тижнів'); },
		monthUntil: 'через місяць',
		monthesUntil: function(delta){ return 'через {delta} ' + pluralize(delta, 'місяць', 'місяці', 'місяців'); },
		yearUntil: 'через рік',
		yearsUntil: function(delta){ return 'через {delta} ' + pluralize(delta, 'рік', 'роки', 'років'); }

	});

	})();

	/*
	---

	name: Locale.uk-UA.Form.Validator

	description: Form Validator messages for Ukrainian (utf-8).

	license: MIT-style license

	authors:
	  - Slik

	requires:
	  - Locale

	provides: [Locale.uk-UA.Form.Validator]

	...
	*/

	Locale.define('uk-UA', 'FormValidator', {

		required: 'Це поле повинне бути заповненим.',
		minLength: 'Введіть хоча б {minLength} символів (Ви ввели {length}).',
		maxLength: 'Кількість символів не може бути більше {maxLength} (Ви ввели {length}).',
		integer: 'Введіть в це поле число. Дробові числа (наприклад 1.25) не дозволені.',
		numeric: 'Введіть в це поле число (наприклад "1" або "1.1", або "-1", або "-1.1").',
		digits: 'В цьому полі ви можете використовувати лише цифри і знаки пунктіації (наприклад, телефонний номер з знаками дефізу або з крапками).',
		alpha: 'В цьому полі можна використовувати лише латинські літери (a-z). Пробіли і інші символи заборонені.',
		alphanum: 'В цьому полі можна використовувати лише латинські літери (a-z) і цифри (0-9). Пробіли і інші символи заборонені.',
		dateSuchAs: 'Введіть коректну дату {date}.',
		dateInFormatMDY: 'Введіть дату в форматі ММ/ДД/РРРР (наприклад "12/31/2009").',
		email: 'Введіть коректну адресу електронної пошти (наприклад "name@domain.com").',
		url: 'Введіть коректне інтернет-посилання (наприклад http://www.example.com).',
		currencyDollar: 'Введіть суму в доларах (наприклад "$100.00").',
		oneRequired: 'Заповніть одне з полів.',
		errorPrefix: 'Помилка: ',
		warningPrefix: 'Увага: ',

		noSpace: 'Пробіли заборонені.',
		reqChkByNode: 'Не відмічено жодного варіанту.',
		requiredChk: 'Це поле повинне бути віміченим.',
		reqChkByName: 'Будь ласка, відмітьте {label}.',
		match: 'Це поле повинно відповідати {matchName}',
		startDate: 'початкова дата',
		endDate: 'кінцева дата',
		currentDate: 'сьогоднішня дата',
		afterDate: 'Ця дата повинна бути такою ж, або пізнішою за {label}.',
		beforeDate: 'Ця дата повинна бути такою ж, або ранішою за {label}.',
		startMonth: 'Будь ласка, виберіть початковий місяць',
		sameMonth: 'Ці дати повинні відноситись одного і того ж місяця. Будь ласка, змініть одну з них.',
		creditcard: 'Номер кредитної карти введений неправильно. Будь ласка, перевірте його. Введено {length} символів.'

	});

	/*
	---

	name: Locale.zh-CH.Date

	description: Date messages for Chinese (simplified and traditional).

	license: MIT-style license

	authors:
	  - YMind Chan

	requires:
	  - Locale

	provides: [Locale.zh-CH.Date]

	...
	*/

	// Simplified Chinese
	Locale.define('zh-CHS', 'Date', {

		months: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
		months_abbr: ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'],
		days: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
		days_abbr: ['日', '一', '二', '三', '四', '五', '六'],

		// Culture's date order: YYYY-MM-DD
		dateOrder: ['year', 'month', 'date'],
		shortDate: '%Y-%m-%d',
		shortTime: '%I:%M%p',
		AM: 'AM',
		PM: 'PM',
		firstDayOfWeek: 1,

		// Date.Extras
		ordinal: '',

		lessThanMinuteAgo: '不到1分钟前',
		minuteAgo: '大约1分钟前',
		minutesAgo: '{delta}分钟之前',
		hourAgo: '大约1小时前',
		hoursAgo: '大约{delta}小时前',
		dayAgo: '1天前',
		daysAgo: '{delta}天前',
		weekAgo: '1星期前',
		weeksAgo: '{delta}星期前',
		monthAgo: '1个月前',
		monthsAgo: '{delta}个月前',
		yearAgo: '1年前',
		yearsAgo: '{delta}年前',

		lessThanMinuteUntil: '从现在开始不到1分钟',
		minuteUntil: '从现在开始約1分钟',
		minutesUntil: '从现在开始约{delta}分钟',
		hourUntil: '从现在开始1小时',
		hoursUntil: '从现在开始约{delta}小时',
		dayUntil: '从现在开始1天',
		daysUntil: '从现在开始{delta}天',
		weekUntil: '从现在开始1星期',
		weeksUntil: '从现在开始{delta}星期',
		monthUntil: '从现在开始一个月',
		monthsUntil: '从现在开始{delta}个月',
		yearUntil: '从现在开始1年',
		yearsUntil: '从现在开始{delta}年'

	});

	// Traditional Chinese
	Locale.define('zh-CHT', 'Date', {

		months: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
		months_abbr: ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'],
		days: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
		days_abbr: ['日', '一', '二', '三', '四', '五', '六'],

		// Culture's date order: YYYY-MM-DD
		dateOrder: ['year', 'month', 'date'],
		shortDate: '%Y-%m-%d',
		shortTime: '%I:%M%p',
		AM: 'AM',
		PM: 'PM',
		firstDayOfWeek: 1,

		// Date.Extras
		ordinal: '',

		lessThanMinuteAgo: '不到1分鐘前',
		minuteAgo: '大約1分鐘前',
		minutesAgo: '{delta}分鐘之前',
		hourAgo: '大約1小時前',
		hoursAgo: '大約{delta}小時前',
		dayAgo: '1天前',
		daysAgo: '{delta}天前',
		weekAgo: '1星期前',
		weeksAgo: '{delta}星期前',
		monthAgo: '1个月前',
		monthsAgo: '{delta}个月前',
		yearAgo: '1年前',
		yearsAgo: '{delta}年前',

		lessThanMinuteUntil: '從現在開始不到1分鐘',
		minuteUntil: '從現在開始約1分鐘',
		minutesUntil: '從現在開始約{delta}分鐘',
		hourUntil: '從現在開始1小時',
		hoursUntil: '從現在開始約{delta}小時',
		dayUntil: '從現在開始1天',
		daysUntil: '從現在開始{delta}天',
		weekUntil: '從現在開始1星期',
		weeksUntil: '從現在開始{delta}星期',
		monthUntil: '從現在開始一個月',
		monthsUntil: '從現在開始{delta}個月',
		yearUntil: '從現在開始1年',
		yearsUntil: '從現在開始{delta}年'

	});

	/*
	---

	name: Locale.zh-CH.Form.Validator

	description: Form Validator messages for Chinese (simplified and traditional).

	license: MIT-style license

	authors:
	  - YMind Chan

	requires:
	  - Locale
	  - Form.Validator

	provides: [Form.zh-CH.Form.Validator, Form.Validator.CurrencyYuanValidator]

	...
	*/

	// Simplified Chinese
	Locale.define('zh-CHS', 'FormValidator', {

		required: '此项必填。',
		minLength: '请至少输入 {minLength} 个字符 (已输入 {length} 个)。',
		maxLength: '最多只能输入 {maxLength} 个字符 (已输入 {length} 个)。',
		integer: '请输入一个整数，不能包含小数点。例如："1", "200"。',
		numeric: '请输入一个数字，例如："1", "1.1", "-1", "-1.1"。',
		digits: '请输入由数字和标点符号组成的内容。例如电话号码。',
		alpha: '请输入 A-Z 的 26 个字母，不能包含空格或任何其他字符。',
		alphanum: '请输入 A-Z 的 26 个字母或 0-9 的 10 个数字，不能包含空格或任何其他字符。',
		dateSuchAs: '请输入合法的日期格式，如：{date}。',
		dateInFormatMDY: '请输入合法的日期格式，例如：YYYY-MM-DD ("2010-12-31")。',
		email: '请输入合法的电子信箱地址，例如："fred@domain.com"。',
		url: '请输入合法的 Url 地址，例如：http://www.example.com。',
		currencyDollar: '请输入合法的货币符号，例如：￥100.0',
		oneRequired: '请至少选择一项。',
		errorPrefix: '错误：',
		warningPrefix: '警告：',

		// Form.Validator.Extras
		noSpace: '不能包含空格。',
		reqChkByNode: '未选择任何内容。',
		requiredChk: '此项必填。',
		reqChkByName: '请选择 {label}.',
		match: '必须与{matchName}相匹配',
		startDate: '起始日期',
		endDate: '结束日期',
		currentDate: '当前日期',
		afterDate: '日期必须等于或晚于 {label}.',
		beforeDate: '日期必须早于或等于 {label}.',
		startMonth: '请选择起始月份',
		sameMonth: '您必须修改两个日期中的一个，以确保它们在同一月份。',
		creditcard: '您输入的信用卡号码不正确。当前已输入{length}个字符。'

	});

	// Traditional Chinese
	Locale.define('zh-CHT', 'FormValidator', {

		required: '此項必填。 ',
		minLength: '請至少輸入{minLength} 個字符(已輸入{length} 個)。 ',
		maxLength: '最多只能輸入{maxLength} 個字符(已輸入{length} 個)。 ',
		integer: '請輸入一個整數，不能包含小數點。例如："1", "200"。 ',
		numeric: '請輸入一個數字，例如："1", "1.1", "-1", "-1.1"。 ',
		digits: '請輸入由數字和標點符號組成的內容。例如電話號碼。 ',
		alpha: '請輸入AZ 的26 個字母，不能包含空格或任何其他字符。 ',
		alphanum: '請輸入AZ 的26 個字母或0-9 的10 個數字，不能包含空格或任何其他字符。 ',
		dateSuchAs: '請輸入合法的日期格式，如：{date}。 ',
		dateInFormatMDY: '請輸入合法的日期格式，例如：YYYY-MM-DD ("2010-12-31")。 ',
		email: '請輸入合法的電子信箱地址，例如："fred@domain.com"。 ',
		url: '請輸入合法的Url 地址，例如：http://www.example.com。 ',
		currencyDollar: '請輸入合法的貨幣符號，例如：￥100.0',
		oneRequired: '請至少選擇一項。 ',
		errorPrefix: '錯誤：',
		warningPrefix: '警告：',

		// Form.Validator.Extras
		noSpace: '不能包含空格。 ',
		reqChkByNode: '未選擇任何內容。 ',
		requiredChk: '此項必填。 ',
		reqChkByName: '請選擇 {label}.',
		match: '必須與{matchName}相匹配',
		startDate: '起始日期',
		endDate: '結束日期',
		currentDate: '當前日期',
		afterDate: '日期必須等於或晚於{label}.',
		beforeDate: '日期必須早於或等於{label}.',
		startMonth: '請選擇起始月份',
		sameMonth: '您必須修改兩個日期中的一個，以確保它們在同一月份。 ',
		creditcard: '您輸入的信用卡號碼不正確。當前已輸入{length}個字符。 '

	});

	Form.Validator.add('validate-currency-yuan', {

		errorMsg: function(){
			return Form.Validator.getMsg('currencyYuan');
		},

		test: function(element){
			// [￥]1[##][,###]+[.##]
			// [￥]1###+[.##]
			// [￥]0.##
			// [￥].##
			return Form.Validator.getValidator('IsEmpty').test(element) || (/^￥?\-?([1-9]{1}[0-9]{0,2}(\,[0-9]{3})*(\.[0-9]{0,2})?|[1-9]{1}\d*(\.[0-9]{0,2})?|0(\.[0-9]{0,2})?|(\.[0-9]{1,2})?)$/).test(element.get('value'));
		}

	});

	/*
	---

	name: Locale.zh-CH.Number

	description: Number messages for for Chinese (simplified and traditional).

	license: MIT-style license

	authors:
	  - YMind Chan

	requires:
	  - Locale
	  - Locale.en-US.Number

	provides: [Locale.zh-CH.Number]

	...
	*/

	// Simplified Chinese
	Locale.define('zh-CHS', 'Number', {

		currency: {
			prefix: '￥ '
		}

	}).inherit('en-US', 'Number');

	// Traditional Chinese
	Locale.define('zh-CHT').inherit('zh-CHS', 'Number');

	/*
	---

	script: Request.JSONP.js

	name: Request.JSONP

	description: Defines Request.JSONP, a class for cross domain javascript via script injection.

	license: MIT-style license

	authors:
	  - Aaron Newton
	  - Guillermo Rauch
	  - Arian Stolwijk

	requires:
	  - Core/Element
	  - Core/Request
	  - MooTools.More

	provides: [Request.JSONP]

	...
	*/

	Request.JSONP = new Class({

		Implements: [Chain, Events, Options],

		options: {/*
			onRequest: function(src, scriptElement){},
			onComplete: function(data){},
			onSuccess: function(data){},
			onCancel: function(){},
			onTimeout: function(){},
			onError: function(){}, */
			onRequest: function(src){
				if (this.options.log && window.console && console.log){
					console.log('JSONP retrieving script with url:' + src);
				}
			},
			onError: function(src){
				if (this.options.log && window.console && console.warn){
					console.warn('JSONP '+ src +' will fail in Internet Explorer, which enforces a 2083 bytes length limit on URIs');
				}
			},
			url: '',
			callbackKey: 'callback',
			injectScript: document.head,
			data: '',
			link: 'ignore',
			timeout: 0,
			log: false
		},

		initialize: function(options){
			this.setOptions(options);
		},

		send: function(options){
			if (!Request.prototype.check.call(this, options)) return this;
			this.running = true;

			var type = typeOf(options);
			if (type == 'string' || type == 'element') options = {data: options};
			options = Object.merge(this.options, options || {});

			var data = options.data;
			switch (typeOf(data)){
				case 'element': data = document.id(data).toQueryString(); break;
				case 'object': case 'hash': data = Object.toQueryString(data);
			}

			var index = this.index = Request.JSONP.counter++,
				key = 'request_' + index;

			var src = options.url +
				(options.url.test('\\?') ? '&' :'?') +
				(options.callbackKey) +
				'=Request.JSONP.request_map.request_'+ index +
				(data ? '&' + data : '');

			if (src.length > 2083) this.fireEvent('error', src);

			Request.JSONP.request_map[key] = function(){
				delete Request.JSONP.request_map[key];
				this.success(arguments, index);
			}.bind(this);

			var script = this.getScript(src).inject(options.injectScript);
			this.fireEvent('request', [src, script]);

			if (options.timeout) this.timeout.delay(options.timeout, this);

			return this;
		},

		getScript: function(src){
			if (!this.script) this.script = new Element('script', {
				type: 'text/javascript',
				async: true,
				src: src
			});
			return this.script;
		},

		success: function(args){
			if (!this.running) return;
			this.clear()
				.fireEvent('complete', args).fireEvent('success', args)
				.callChain();
		},

		cancel: function(){
			if (this.running) this.clear().fireEvent('cancel');
			return this;
		},

		isRunning: function(){
			return !!this.running;
		},

		clear: function(){
			this.running = false;
			if (this.script){
				this.script.destroy();
				this.script = null;
			}
			return this;
		},

		timeout: function(){
			if (this.running){
				this.running = false;
				this.fireEvent('timeout', [this.script.get('src'), this.script]).fireEvent('failure').cancel();
			}
			return this;
		}

	});

	Request.JSONP.counter = 0;
	Request.JSONP.request_map = {};

	/*
	---

	script: Request.Periodical.js

	name: Request.Periodical

	description: Requests the same URL to pull data from a server but increases the intervals if no data is returned to reduce the load

	license: MIT-style license

	authors:
	  - Christoph Pojer

	requires:
	  - Core/Request
	  - MooTools.More

	provides: [Request.Periodical]

	...
	*/

	Request.implement({

		options: {
			initialDelay: 5000,
			delay: 5000,
			limit: 60000
		},

		startTimer: function(data){
			var fn = function(){
				if (!this.running) this.send({data: data});
			};
			this.lastDelay = this.options.initialDelay;
			this.timer = fn.delay(this.lastDelay, this);
			this.completeCheck = function(response){
				clearTimeout(this.timer);
				this.lastDelay = (response) ? this.options.delay : (this.lastDelay + this.options.delay).min(this.options.limit);
				this.timer = fn.delay(this.lastDelay, this);
			};
			return this.addEvent('complete', this.completeCheck);
		},

		stopTimer: function(){
			clearTimeout(this.timer);
			return this.removeEvent('complete', this.completeCheck);
		}

	});

	/*
	---

	script: Request.Queue.js

	name: Request.Queue

	description: Controls several instances of Request and its variants to run only one request at a time.

	license: MIT-style license

	authors:
	  - Aaron Newton

	requires:
	  - Core/Element
	  - Core/Request
	  - Class.Binds

	provides: [Request.Queue]

	...
	*/

	Request.Queue = new Class({

		Implements: [Options, Events],

		Binds: ['attach', 'request', 'complete', 'cancel', 'success', 'failure', 'exception'],

		options: {/*
			onRequest: function(argsPassedToOnRequest){},
			onSuccess: function(argsPassedToOnSuccess){},
			onComplete: function(argsPassedToOnComplete){},
			onCancel: function(argsPassedToOnCancel){},
			onException: function(argsPassedToOnException){},
			onFailure: function(argsPassedToOnFailure){},
			onEnd: function(){},
			*/
			stopOnFailure: true,
			autoAdvance: true,
			concurrent: 1,
			requests: {}
		},

		initialize: function(options){
			var requests;
			if (options){
				requests = options.requests;
				delete options.requests;
			}
			this.setOptions(options);
			this.requests = {};
			this.queue = [];
			this.reqBinders = {};

			if (requests) this.addRequests(requests);
		},

		addRequest: function(name, request){
			this.requests[name] = request;
			this.attach(name, request);
			return this;
		},

		addRequests: function(obj){
			Object.each(obj, function(req, name){
				this.addRequest(name, req);
			}, this);
			return this;
		},

		getName: function(req){
			return Object.keyOf(this.requests, req);
		},

		attach: function(name, req){
			if (req._groupSend) return this;
			['request', 'complete', 'cancel', 'success', 'failure', 'exception'].each(function(evt){
				if (!this.reqBinders[name]) this.reqBinders[name] = {};
				this.reqBinders[name][evt] = function(){
					this['on' + evt.capitalize()].apply(this, [name, req].append(arguments));
				}.bind(this);
				req.addEvent(evt, this.reqBinders[name][evt]);
			}, this);
			req._groupSend = req.send;
			req.send = function(options){
				this.send(name, options);
				return req;
			}.bind(this);
			return this;
		},

		removeRequest: function(req){
			var name = typeOf(req) == 'object' ? this.getName(req) : req;
			if (!name && typeOf(name) != 'string') return this;
			req = this.requests[name];
			if (!req) return this;
			['request', 'complete', 'cancel', 'success', 'failure', 'exception'].each(function(evt){
				req.removeEvent(evt, this.reqBinders[name][evt]);
			}, this);
			req.send = req._groupSend;
			delete req._groupSend;
			return this;
		},

		getRunning: function(){
			return Object.filter(this.requests, function(r){
				return r.running;
			});
		},

		isRunning: function(){
			return !!(Object.keys(this.getRunning()).length);
		},

		send: function(name, options){
			var q = function(){
				this.requests[name]._groupSend(options);
				this.queue.erase(q);
			}.bind(this);

			q.name = name;
			if (Object.keys(this.getRunning()).length >= this.options.concurrent || (this.error && this.options.stopOnFailure)) this.queue.push(q);
			else q();
			return this;
		},

		hasNext: function(name){
			return (!name) ? !!this.queue.length : !!this.queue.filter(function(q){ return q.name == name; }).length;
		},

		resume: function(){
			this.error = false;
			(this.options.concurrent - Object.keys(this.getRunning()).length).times(this.runNext, this);
			return this;
		},

		runNext: function(name){
			if (!this.queue.length) return this;
			if (!name){
				this.queue[0]();
			} else {
				var found;
				this.queue.each(function(q){
					if (!found && q.name == name){
						found = true;
						q();
					}
				});
			}
			return this;
		},

		runAll: function(){
			this.queue.each(function(q){
				q();
			});
			return this;
		},

		clear: function(name){
			if (!name){
				this.queue.empty();
			} else {
				this.queue = this.queue.map(function(q){
					if (q.name != name) return q;
					else return false;
				}).filter(function(q){
					return q;
				});
			}
			return this;
		},

		cancel: function(name){
			this.requests[name].cancel();
			return this;
		},

		onRequest: function(){
			this.fireEvent('request', arguments);
		},

		onComplete: function(){
			this.fireEvent('complete', arguments);
			if (!this.queue.length) this.fireEvent('end');
		},

		onCancel: function(){
			if (this.options.autoAdvance && !this.error) this.runNext();
			this.fireEvent('cancel', arguments);
		},

		onSuccess: function(){
			if (this.options.autoAdvance && !this.error) this.runNext();
			this.fireEvent('success', arguments);
		},

		onFailure: function(){
			this.error = true;
			if (!this.options.stopOnFailure && this.options.autoAdvance) this.runNext();
			this.fireEvent('failure', arguments);
		},

		onException: function(){
			this.error = true;
			if (!this.options.stopOnFailure && this.options.autoAdvance) this.runNext();
			this.fireEvent('exception', arguments);
		}

	});

	/*
	---

	script: Array.Extras.js

	name: Array.Extras

	description: Extends the Array native object to include useful methods to work with arrays.

	license: MIT-style license

	authors:
	  - Christoph Pojer
	  - Sebastian Markbåge

	requires:
	  - Core/Array
	  - MooTools.More

	provides: [Array.Extras]

	...
	*/

	(function(nil){

	Array.implement({

		min: function(){
			return Math.min.apply(null, this);
		},

		max: function(){
			return Math.max.apply(null, this);
		},

		average: function(){
			return this.length ? this.sum() / this.length : 0;
		},

		sum: function(){
			var result = 0, l = this.length;
			if (l){
				while (l--){
					if (this[l] != null) result += parseFloat(this[l]);
				}
			}
			return result;
		},

		unique: function(){
			return [].combine(this);
		},

		shuffle: function(){
			for (var i = this.length; i && --i;){
				var temp = this[i], r = Math.floor(Math.random() * ( i + 1 ));
				this[i] = this[r];
				this[r] = temp;
			}
			return this;
		},

		reduce: function(fn, value){
			for (var i = 0, l = this.length; i < l; i++){
				if (i in this) value = value === nil ? this[i] : fn.call(null, value, this[i], i, this);
			}
			return value;
		},

		reduceRight: function(fn, value){
			var i = this.length;
			while (i--){
				if (i in this) value = value === nil ? this[i] : fn.call(null, value, this[i], i, this);
			}
			return value;
		},

		pluck: function(prop){
			return this.map(function(item){
				return item[prop];
			});
		}

	});

	})();

	/*
	---

	script: Date.Extras.js

	name: Date.Extras

	description: Extends the Date native object to include extra methods (on top of those in Date.js).

	license: MIT-style license

	authors:
	  - Aaron Newton
	  - Scott Kyle

	requires:
	  - Date

	provides: [Date.Extras]

	...
	*/

	Date.implement({

		timeDiffInWords: function(to){
			return Date.distanceOfTimeInWords(this, to || new Date);
		},

		timeDiff: function(to, separator){
			if (to == null) to = new Date;
			var delta = ((to - this) / 1000).floor().abs();

			var vals = [],
				durations = [60, 60, 24, 365, 0],
				names = ['s', 'm', 'h', 'd', 'y'],
				value, duration;

			for (var item = 0; item < durations.length; item++){
				if (item && !delta) break;
				value = delta;
				if ((duration = durations[item])){
					value = (delta % duration);
					delta = (delta / duration).floor();
				}
				vals.unshift(value + (names[item] || ''));
			}

			return vals.join(separator || ':');
		}

	}).extend({

		distanceOfTimeInWords: function(from, to){
			return Date.getTimePhrase(((to - from) / 1000).toInt());
		},

		getTimePhrase: function(delta){
			var suffix = (delta < 0) ? 'Until' : 'Ago';
			if (delta < 0) delta *= -1;

			var units = {
				minute: 60,
				hour: 60,
				day: 24,
				week: 7,
				month: 52 / 12,
				year: 12,
				eon: Infinity
			};

			var msg = 'lessThanMinute';

			for (var unit in units){
				var interval = units[unit];
				if (delta < 1.5 * interval){
					if (delta > 0.75 * interval) msg = unit;
					break;
				}
				delta /= interval;
				msg = unit + 's';
			}

			delta = delta.round();
			return Date.getMsg(msg + suffix, delta).substitute({delta: delta});
		}

	}).defineParsers(

		{
			// "today", "tomorrow", "yesterday"
			re: /^(?:tod|tom|yes)/i,
			handler: function(bits){
				var d = new Date().clearTime();
				switch (bits[0]){
					case 'tom': return d.increment();
					case 'yes': return d.decrement();
					default: return d;
				}
			}
		},

		{
			// "next Wednesday", "last Thursday"
			re: /^(next|last) ([a-z]+)$/i,
			handler: function(bits){
				var d = new Date().clearTime();
				var day = d.getDay();
				var newDay = Date.parseDay(bits[2], true);
				var addDays = newDay - day;
				if (newDay <= day) addDays += 7;
				if (bits[1] == 'last') addDays -= 7;
				return d.set('date', d.getDate() + addDays);
			}
		}

	).alias('timeAgoInWords', 'timeDiffInWords');

	/*
	---

	name: Hash

	description: Contains Hash Prototypes. Provides a means for overcoming the JavaScript practical impossibility of extending native Objects.

	license: MIT-style license.

	requires:
	  - Core/Object
	  - MooTools.More

	provides: [Hash]

	...
	*/

	(function(){

	if (this.Hash) return;

	var Hash = this.Hash = new Type('Hash', function(object){
		if (typeOf(object) == 'hash') object = Object.clone(object.getClean());
		for (var key in object) this[key] = object[key];
		return this;
	});

	this.$H = function(object){
		return new Hash(object);
	};

	Hash.implement({

		forEach: function(fn, bind){
			Object.forEach(this, fn, bind);
		},

		getClean: function(){
			var clean = {};
			for (var key in this){
				if (this.hasOwnProperty(key)) clean[key] = this[key];
			}
			return clean;
		},

		getLength: function(){
			var length = 0;
			for (var key in this){
				if (this.hasOwnProperty(key)) length++;
			}
			return length;
		}

	});

	Hash.alias('each', 'forEach');

	Hash.implement({

		has: Object.prototype.hasOwnProperty,

		keyOf: function(value){
			return Object.keyOf(this, value);
		},

		hasValue: function(value){
			return Object.contains(this, value);
		},

		extend: function(properties){
			Hash.each(properties || {}, function(value, key){
				Hash.set(this, key, value);
			}, this);
			return this;
		},

		combine: function(properties){
			Hash.each(properties || {}, function(value, key){
				Hash.include(this, key, value);
			}, this);
			return this;
		},

		erase: function(key){
			if (this.hasOwnProperty(key)) delete this[key];
			return this;
		},

		get: function(key){
			return (this.hasOwnProperty(key)) ? this[key] : null;
		},

		set: function(key, value){
			if (!this[key] || this.hasOwnProperty(key)) this[key] = value;
			return this;
		},

		empty: function(){
			Hash.each(this, function(value, key){
				delete this[key];
			}, this);
			return this;
		},

		include: function(key, value){
			if (this[key] == undefined) this[key] = value;
			return this;
		},

		map: function(fn, bind){
			return new Hash(Object.map(this, fn, bind));
		},

		filter: function(fn, bind){
			return new Hash(Object.filter(this, fn, bind));
		},

		every: function(fn, bind){
			return Object.every(this, fn, bind);
		},

		some: function(fn, bind){
			return Object.some(this, fn, bind);
		},

		getKeys: function(){
			return Object.keys(this);
		},

		getValues: function(){
			return Object.values(this);
		},

		toQueryString: function(base){
			return Object.toQueryString(this, base);
		}

	});

	Hash.alias({indexOf: 'keyOf', contains: 'hasValue'});


	})();


	/*
	---

	script: Hash.Extras.js

	name: Hash.Extras

	description: Extends the Hash Type to include getFromPath which allows a path notation to child elements.

	license: MIT-style license

	authors:
	  - Aaron Newton

	requires:
	  - Hash
	  - Object.Extras

	provides: [Hash.Extras]

	...
	*/

	Hash.implement({

		getFromPath: function(notation){
			return Object.getFromPath(this, notation);
		},

		cleanValues: function(method){
			return new Hash(Object.cleanValues(this, method));
		},

		run: function(){
			Object.run(arguments);
		}

	});

	/*
	---
	name: Number.Format
	description: Extends the Number Type object to include a number formatting method.
	license: MIT-style license
	authors: [Arian Stolwijk]
	requires: [Core/Number, Locale.en-US.Number]
	# Number.Extras is for compatibility
	provides: [Number.Format, Number.Extras]
	...
	*/


	Number.implement({

		format: function(options){
			// Thanks dojo and YUI for some inspiration
			var value = this;
			options = options ? Object.clone(options) : {};
			var getOption = function(key){
				if (options[key] != null) return options[key];
				return Locale.get('Number.' + key);
			};

			var negative = value < 0,
				decimal = getOption('decimal'),
				precision = getOption('precision'),
				group = getOption('group'),
				decimals = getOption('decimals');

			if (negative){
				var negativeLocale = getOption('negative') || {};
				if (negativeLocale.prefix == null && negativeLocale.suffix == null) negativeLocale.prefix = '-';
				['prefix', 'suffix'].each(function(key){
					if (negativeLocale[key]) options[key] = getOption(key) + negativeLocale[key];
				});

				value = -value;
			}

			var prefix = getOption('prefix'),
				suffix = getOption('suffix');

			if (decimals !== '' && decimals >= 0 && decimals <= 20) value = value.toFixed(decimals);
			if (precision >= 1 && precision <= 21) value = (+value).toPrecision(precision);

			value += '';
			var index;
			if (getOption('scientific') === false && value.indexOf('e') > -1){
				var match = value.split('e'),
					zeros = +match[1];
				value = match[0].replace('.', '');

				if (zeros < 0){
					zeros = -zeros - 1;
					index = match[0].indexOf('.');
					if (index > -1) zeros -= index - 1;
					while (zeros--) value = '0' + value;
					value = '0.' + value;
				} else {
					index = match[0].lastIndexOf('.');
					if (index > -1) zeros -= match[0].length - index - 1;
					while (zeros--) value += '0';
				}
			}

			if (decimal != '.') value = value.replace('.', decimal);

			if (group){
				index = value.lastIndexOf(decimal);
				index = (index > -1) ? index : value.length;
				var newOutput = value.substring(index),
					i = index;

				while (i--){
					if ((index - i - 1) % 3 == 0 && i != (index - 1)) newOutput = group + newOutput;
					newOutput = value.charAt(i) + newOutput;
				}

				value = newOutput;
			}

			if (prefix) value = prefix + value;
			if (suffix) value += suffix;

			return value;
		},

		formatCurrency: function(decimals){
			var locale = Locale.get('Number.currency') || {};
			if (locale.scientific == null) locale.scientific = false;
			locale.decimals = decimals != null ? decimals
				: (locale.decimals == null ? 2 : locale.decimals);

			return this.format(locale);
		},

		formatPercentage: function(decimals){
			var locale = Locale.get('Number.percentage') || {};
			if (locale.suffix == null) locale.suffix = '%';
			locale.decimals = decimals != null ? decimals
				: (locale.decimals == null ? 2 : locale.decimals);

			return this.format(locale);
		}

	});

	/*
	---

	script: URI.js

	name: URI

	description: Provides methods useful in managing the window location and uris.

	license: MIT-style license

	authors:
	  - Sebastian Markbåge
	  - Aaron Newton

	requires:
	  - Core/Object
	  - Core/Class
	  - Core/Class.Extras
	  - Core/Element
	  - String.QueryString

	provides: [URI]

	...
	*/

	(function(){

	var toString = function(){
		return this.get('value');
	};

	var URI = this.URI = new Class({

		Implements: Options,

		options: {
			/*base: false*/
		},

		regex: /^(?:(\w+):)?(?:\/\/(?:(?:([^:@\/]*):?([^:@\/]*))?@)?(\[[A-Fa-f0-9:]+\]|[^:\/?#]*)(?::(\d*))?)?(\.\.?$|(?:[^?#\/]*\/)*)([^?#]*)(?:\?([^#]*))?(?:#(.*))?/,
		parts: ['scheme', 'user', 'password', 'host', 'port', 'directory', 'file', 'query', 'fragment'],
		schemes: {http: 80, https: 443, ftp: 21, rtsp: 554, mms: 1755, file: 0},

		initialize: function(uri, options){
			this.setOptions(options);
			var base = this.options.base || URI.base;
			if (!uri) uri = base;

			if (uri && uri.parsed) this.parsed = Object.clone(uri.parsed);
			else this.set('value', uri.href || uri.toString(), base ? new URI(base) : false);
		},

		parse: function(value, base){
			var bits = value.match(this.regex);
			if (!bits) return false;
			bits.shift();
			return this.merge(bits.associate(this.parts), base);
		},

		merge: function(bits, base){
			if ((!bits || !bits.scheme) && (!base || !base.scheme)) return false;
			if (base){
				this.parts.every(function(part){
					if (bits[part]) return false;
					bits[part] = base[part] || '';
					return true;
				});
			}
			bits.port = bits.port || this.schemes[bits.scheme.toLowerCase()];
			bits.directory = bits.directory ? this.parseDirectory(bits.directory, base ? base.directory : '') : '/';
			return bits;
		},

		parseDirectory: function(directory, baseDirectory){
			directory = (directory.substr(0, 1) == '/' ? '' : (baseDirectory || '/')) + directory;
			if (!directory.test(URI.regs.directoryDot)) return directory;
			var result = [];
			directory.replace(URI.regs.endSlash, '').split('/').each(function(dir){
				if (dir == '..' && result.length > 0) result.pop();
				else if (dir != '.') result.push(dir);
			});
			return result.join('/') + '/';
		},

		combine: function(bits){
			return bits.value || bits.scheme + '://' +
				(bits.user ? bits.user + (bits.password ? ':' + bits.password : '') + '@' : '') +
				(bits.host || '') + (bits.port && bits.port != this.schemes[bits.scheme] ? ':' + bits.port : '') +
				(bits.directory || '/') + (bits.file || '') +
				(bits.query ? '?' + bits.query : '') +
				(bits.fragment ? '#' + bits.fragment : '');
		},

		set: function(part, value, base){
			if (part == 'value'){
				var scheme = value.match(URI.regs.scheme);
				if (scheme) scheme = scheme[1];
				if (scheme && this.schemes[scheme.toLowerCase()] == null) this.parsed = { scheme: scheme, value: value };
				else this.parsed = this.parse(value, (base || this).parsed) || (scheme ? { scheme: scheme, value: value } : { value: value });
			} else if (part == 'data'){
				this.setData(value);
			} else {
				this.parsed[part] = value;
			}
			return this;
		},

		get: function(part, base){
			switch (part){
				case 'value': return this.combine(this.parsed, base ? base.parsed : false);
				case 'data' : return this.getData();
			}
			return this.parsed[part] || '';
		},

		go: function(){
			document.location.href = this.toString();
		},

		toURI: function(){
			return this;
		},

		getData: function(key, part){
			var qs = this.get(part || 'query');
			if (!(qs || qs === 0)) return key ? null : {};
			var obj = qs.parseQueryString();
			return key ? obj[key] : obj;
		},

		setData: function(values, merge, part){
			if (typeof values == 'string'){
				var data = this.getData();
				data[arguments[0]] = arguments[1];
				values = data;
			} else if (merge){
				values = Object.merge(this.getData(null, part), values);
			}
			return this.set(part || 'query', Object.toQueryString(values));
		},

		clearData: function(part){
			return this.set(part || 'query', '');
		},

		toString: toString,
		valueOf: toString

	});

	URI.regs = {
		endSlash: /\/$/,
		scheme: /^(\w+):/,
		directoryDot: /\.\/|\.$/
	};

	URI.base = new URI(Array.convert(document.getElements('base[href]', true)).getLast(), {base: document.location});

	String.implement({

		toURI: function(options){
			return new URI(this, options);
		}

	});

	})();

	/*
	---

	script: URI.Relative.js

	name: URI.Relative

	description: Extends the URI class to add methods for computing relative and absolute urls.

	license: MIT-style license

	authors:
	  - Sebastian Markbåge


	requires:
	  - Class.refactor
	  - URI

	provides: [URI.Relative]

	...
	*/

	URI = Class.refactor(URI, {

		combine: function(bits, base){
			if (!base || bits.scheme != base.scheme || bits.host != base.host || bits.port != base.port)
				return this.previous.apply(this, arguments);
			var end = bits.file + (bits.query ? '?' + bits.query : '') + (bits.fragment ? '#' + bits.fragment : '');

			if (!base.directory) return (bits.directory || (bits.file ? '' : './')) + end;

			var baseDir = base.directory.split('/'),
				relDir = bits.directory.split('/'),
				path = '',
				offset;

			var i = 0;
			for (offset = 0; offset < baseDir.length && offset < relDir.length && baseDir[offset] == relDir[offset]; offset++);
			for (i = 0; i < baseDir.length - offset - 1; i++) path += '../';
			for (i = offset; i < relDir.length - 1; i++) path += relDir[i] + '/';

			return (path || (bits.file ? '' : './')) + end;
		},

		toAbsolute: function(base){
			base = new URI(base);
			if (base) base.set('directory', '').set('file', '');
			return this.toRelative(base);
		},

		toRelative: function(base){
			return this.get('value', new URI(base));
		}

	});

	/*
	---

	script: Assets.js

	name: Assets

	description: Provides methods to dynamically load JavaScript, CSS, and Image files into the document.

	license: MIT-style license

	authors:
	  - Valerio Proietti

	requires:
	  - Core/Element.Event
	  - MooTools.More

	provides: [Assets, Asset.javascript, Asset.css, Asset.image, Asset.images]

	...
	*/
	;(function(){

	var Asset = this.Asset = {

		javascript: function(source, properties){
			if (!properties) properties = {};

			var script = new Element('script', {src: source, type: 'text/javascript'}),
				doc = properties.document || document,
				load = properties.onload || properties.onLoad;

			delete properties.onload;
			delete properties.onLoad;
			delete properties.document;

			if (load){
				if (!script.addEventListener){
					script.addEvent('readystatechange', function(){
						if (['loaded', 'complete'].contains(this.readyState)) load.call(this);
					});
				} else {
					script.addEvent('load', load);
				}
			}

			return script.set(properties).inject(doc.head);
		},

		css: function(source, properties){
			if (!properties) properties = {};

			var load = properties.onload || properties.onLoad,
				doc = properties.document || document,
				timeout = properties.timeout || 3000;

			['onload', 'onLoad', 'document'].each(function(prop){
				delete properties[prop];
			});

			var link = new Element('link', {
				type: 'text/css',
				rel: 'stylesheet',
				media: 'screen',
				href: source
			}).setProperties(properties).inject(doc.head);

			if (load){
				// based on article at http://www.yearofmoo.com/2011/03/cross-browser-stylesheet-preloading.html
				var loaded = false, retries = 0;
				var check = function(){
					var stylesheets = document.styleSheets;
					for (var i = 0; i < stylesheets.length; i++){
						var file = stylesheets[i];
						var owner = file.ownerNode ? file.ownerNode : file.owningElement;
						if (owner && owner == link){
							loaded = true;
							return load.call(link);
						}
					}
					retries++;
					if (!loaded && retries < timeout / 50) return setTimeout(check, 50);
				};
				setTimeout(check, 0);
			}
			return link;
		},

		image: function(source, properties){
			if (!properties) properties = {};

			var image = new Image(),
				element = document.id(image) || new Element('img');

			['load', 'abort', 'error'].each(function(name){
				var type = 'on' + name,
					cap = 'on' + name.capitalize(),
					event = properties[type] || properties[cap] || function(){};

				delete properties[cap];
				delete properties[type];

				image[type] = function(){
					if (!image) return;
					if (!element.parentNode){
						element.width = image.width;
						element.height = image.height;
					}
					image = image.onload = image.onabort = image.onerror = null;
					event.delay(1, element, element);
					element.fireEvent(name, element, 1);
				};
			});

			image.src = element.src = source;
			if (image && image.complete) image.onload.delay(1);
			return element.set(properties);
		},

		images: function(sources, options){
			sources = Array.convert(sources);

			var fn = function(){},
				counter = 0;

			options = Object.merge({
				onComplete: fn,
				onProgress: fn,
				onError: fn,
				properties: {}
			}, options);

			return new Elements(sources.map(function(source, index){
				return Asset.image(source, Object.append(options.properties, {
					onload: function(){
						counter++;
						options.onProgress.call(this, counter, index, source);
						if (counter == sources.length) options.onComplete();
					},
					onerror: function(){
						counter++;
						options.onError.call(this, counter, index, source);
						if (counter == sources.length) options.onComplete();
					}
				}));
			}));
		}

	};

	})();

	/*
	---

	script: Color.js

	name: Color

	description: Class for creating and manipulating colors in JavaScript. Supports HSB -> RGB Conversions and vice versa.

	license: MIT-style license

	authors:
	  - Valerio Proietti

	requires:
	  - Core/Array
	  - Core/String
	  - Core/Number
	  - Core/Hash
	  - Core/Function
	  - MooTools.More

	provides: [Color]

	...
	*/

	(function(){

	var Color = this.Color = new Type('Color', function(color, type){
		if (arguments.length >= 3){
			type = 'rgb'; color = Array.slice(arguments, 0, 3);
		} else if (typeof color == 'string'){
			if (color.match(/rgb/)) color = color.rgbToHex().hexToRgb(true);
			else if (color.match(/hsb/)) color = color.hsbToRgb();
			else color = color.hexToRgb(true);
		}
		type = type || 'rgb';
		switch (type){
			case 'hsb':
				var old = color;
				color = color.hsbToRgb();
				color.hsb = old;
				break;
			case 'hex': color = color.hexToRgb(true); break;
		}
		color.rgb = color.slice(0, 3);
		color.hsb = color.hsb || color.rgbToHsb();
		color.hex = color.rgbToHex();
		return Object.append(color, this);
	});

	Color.implement({

		mix: function(){
			var colors = Array.slice(arguments);
			var alpha = (typeOf(colors.getLast()) == 'number') ? colors.pop() : 50;
			var rgb = this.slice();
			colors.each(function(color){
				color = new Color(color);
				for (var i = 0; i < 3; i++) rgb[i] = Math.round((rgb[i] / 100 * (100 - alpha)) + (color[i] / 100 * alpha));
			});
			return new Color(rgb, 'rgb');
		},

		invert: function(){
			return new Color(this.map(function(value){
				return 255 - value;
			}));
		},

		setHue: function(value){
			return new Color([value, this.hsb[1], this.hsb[2]], 'hsb');
		},

		setSaturation: function(percent){
			return new Color([this.hsb[0], percent, this.hsb[2]], 'hsb');
		},

		setBrightness: function(percent){
			return new Color([this.hsb[0], this.hsb[1], percent], 'hsb');
		}

	});

	this.$RGB = function(r, g, b){
		return new Color([r, g, b], 'rgb');
	};

	this.$HSB = function(h, s, b){
		return new Color([h, s, b], 'hsb');
	};

	this.$HEX = function(hex){
		return new Color(hex, 'hex');
	};

	Array.implement({

		rgbToHsb: function(){
			var red = this[0],
				green = this[1],
				blue = this[2],
				hue = 0,
				max = Math.max(red, green, blue),
				min = Math.min(red, green, blue),
				delta = max - min,
				brightness = max / 255,
				saturation = (max != 0) ? delta / max : 0;

			if (saturation != 0){
				var rr = (max - red) / delta;
				var gr = (max - green) / delta;
				var br = (max - blue) / delta;
				if (red == max) hue = br - gr;
				else if (green == max) hue = 2 + rr - br;
				else hue = 4 + gr - rr;
				hue /= 6;
				if (hue < 0) hue++;
			}
			return [Math.round(hue * 360), Math.round(saturation * 100), Math.round(brightness * 100)];
		},

		hsbToRgb: function(){
			var br = Math.round(this[2] / 100 * 255);
			if (this[1] == 0){
				return [br, br, br];
			} else {
				var hue = this[0] % 360;
				var f = hue % 60;
				var p = Math.round((this[2] * (100 - this[1])) / 10000 * 255);
				var q = Math.round((this[2] * (6000 - this[1] * f)) / 600000 * 255);
				var t = Math.round((this[2] * (6000 - this[1] * (60 - f))) / 600000 * 255);
				switch (Math.floor(hue / 60)){
					case 0: return [br, t, p];
					case 1: return [q, br, p];
					case 2: return [p, br, t];
					case 3: return [p, q, br];
					case 4: return [t, p, br];
					case 5: return [br, p, q];
				}
			}
			return false;
		}

	});

	String.implement({

		rgbToHsb: function(){
			var rgb = this.match(/\d{1,3}/g);
			return (rgb) ? rgb.rgbToHsb() : null;
		},

		hsbToRgb: function(){
			var hsb = this.match(/\d{1,3}/g);
			return (hsb) ? hsb.hsbToRgb() : null;
		}

	});

	})();


	/*
	---

	script: Group.js

	name: Group

	description: Class for monitoring collections of events

	license: MIT-style license

	authors:
	  - Valerio Proietti

	requires:
	  - Core/Events
	  - MooTools.More

	provides: [Group]

	...
	*/

	(function(){

	var Group = this.Group = new Class({

		initialize: function(){
			this.instances = Array.flatten(arguments);
		},

		addEvent: function(type, fn){
			var instances = this.instances,
				len = instances.length,
				togo = len,
				args = new Array(len),
				self = this;

			instances.each(function(instance, i){
				instance.addEvent(type, function(){
					if (!args[i]) togo--;
					args[i] = arguments;
					if (!togo){
						fn.call(self, instances, instance, args);
						togo = len;
						args = new Array(len);
					}
				});
			});
		}

	});

	})();

	/*
	---

	script: Hash.Cookie.js

	name: Hash.Cookie

	description: Class for creating, reading, and deleting Cookies in JSON format.

	license: MIT-style license

	authors:
	  - Valerio Proietti
	  - Aaron Newton

	requires:
	  - Core/Cookie
	  - Core/JSON
	  - MooTools.More
	  - Hash

	provides: [Hash.Cookie]

	...
	*/

	Hash.Cookie = new Class({

		Extends: Cookie,

		options: {
			autoSave: true
		},

		initialize: function(name, options){
			this.parent(name, options);
			this.load();
		},

		save: function(){
			var value = JSON.encode(this.hash);
			if (!value || value.length > 4096) return false; //cookie would be truncated!
			if (value == '{}') this.dispose();
			else this.write(value);
			return true;
		},

		load: function(){
			this.hash = new Hash(JSON.decode(this.read(), true));
			return this;
		}

	});

	Hash.each(Hash.prototype, function(method, name){
		if (typeof method == 'function') Hash.Cookie.implement(name, function(){
			var value = method.apply(this.hash, arguments);
			if (this.options.autoSave) this.save();
			return value;
		});
	});

	/*
	---

	name: Swiff

	description: Wrapper for embedding SWF movies. Supports External Interface Communication.

	license: MIT-style license.

	credits:
	  - Flash detection & Internet Explorer + Flash Player 9 fix inspired by SWFObject.

	requires: [Core/Options, Core/Object, Core/Element]

	provides: Swiff

	...
	*/

	(function(){

	var Swiff = this.Swiff = new Class({

		Implements: Options,

		options: {
			id: null,
			height: 1,
			width: 1,
			container: null,
			properties: {},
			params: {
				quality: 'high',
				allowScriptAccess: 'always',
				wMode: 'window',
				swLiveConnect: true
			},
			callBacks: {},
			vars: {}
		},

		toElement: function(){
			return this.object;
		},

		initialize: function(path, options){
			this.instance = 'Swiff_' + String.uniqueID();

			this.setOptions(options);
			options = this.options;
			var id = this.id = options.id || this.instance;
			var container = document.id(options.container);

			Swiff.CallBacks[this.instance] = {};

			var params = options.params, vars = options.vars, callBacks = options.callBacks;
			var properties = Object.append({height: options.height, width: options.width}, options.properties);

			var self = this;

			for (var callBack in callBacks){
				Swiff.CallBacks[this.instance][callBack] = (function(option){
					return function(){
						return option.apply(self.object, arguments);
					};
				})(callBacks[callBack]);
				vars[callBack] = 'Swiff.CallBacks.' + this.instance + '.' + callBack;
			}

			params.flashVars = Object.toQueryString(vars);
			if ('ActiveXObject' in window){
				properties.classid = 'clsid:D27CDB6E-AE6D-11cf-96B8-444553540000';
				params.movie = path;
			} else {
				properties.type = 'application/x-shockwave-flash';
			}
			properties.data = path;

			var build = '<object id="' + id + '"';
			for (var property in properties) build += ' ' + property + '="' + properties[property] + '"';
			build += '>';
			for (var param in params){
				if (params[param]) build += '<param name="' + param + '" value="' + params[param] + '" />';
			}
			build += '</object>';
			this.object = ((container) ? container.empty() : new Element('div')).set('html', build).firstChild;
		},

		replaces: function(element){
			element = document.id(element, true);
			element.parentNode.replaceChild(this.toElement(), element);
			return this;
		},

		inject: function(element){
			document.id(element, true).appendChild(this.toElement());
			return this;
		},

		remote: function(){
			return Swiff.remote.apply(Swiff, [this.toElement()].append(arguments));
		}

	});

	Swiff.CallBacks = {};

	Swiff.remote = function(obj, fn){
		var rs = obj.CallFunction('<invoke name="' + fn + '" returntype="javascript">' + __flash__argumentsToXML(arguments, 2) + '</invoke>');
		return eval(rs);
	};

	})();

	/*
	---
	name: Table
	description: LUA-Style table implementation.
	license: MIT-style license
	authors:
	  - Valerio Proietti
	requires: [Core/Array]
	provides: [Table]
	...
	*/

	(function(){

	var Table = this.Table = function(){

		this.length = 0;
		var keys = [],
			values = [];

		this.set = function(key, value){
			var index = keys.indexOf(key);
			if (index == -1){
				var length = keys.length;
				keys[length] = key;
				values[length] = value;
				this.length++;
			} else {
				values[index] = value;
			}
			return this;
		};

		this.get = function(key){
			var index = keys.indexOf(key);
			return (index == -1) ? null : values[index];
		};

		this.erase = function(key){
			var index = keys.indexOf(key);
			if (index != -1){
				this.length--;
				keys.splice(index, 1);
				return values.splice(index, 1)[0];
			}
			return null;
		};

		this.each = this.forEach = function(fn, bind){
			for (var i = 0, l = this.length; i < l; i++) fn.call(bind, keys[i], values[i], this);
		};

	};

	if (this.Type) new Type('Table', Table);

	})();


/***/ },
/* 6 */
/***/ function(module, exports) {

	Ngn = {};
	Ngn.LocalStorage = {};

	Ngn.LocalStorage = {

	  clean: function() {
	    if (!localStorage) return;
	    try {
	      for (var k in localStorage) {
	        localStorage.removeItem(k);
	      }
	    } catch (e) {
	      for (var i = 0; i < localStorage.length; i++)
	        localStorage.removeItem(localStorage[i]);
	    }
	  },

	  remove: function(key) {
	    if (!localStorage) return false;
	    localStorage.removeItem(key);
	  }

	};

	Ngn.LocalStorage.json = {

	  get: function(key) {
	    if (!localStorage) return false;
	    return JSON.parse(localStorage.getItem(key));
	  },

	  set: function(key, data) {
	    localStorage.setItem(key, JSON.stringify(data));
	  }

	};


/***/ },
/* 7 */
/***/ function(module, exports) {

	

/***/ },
/* 8 */
/***/ function(module, exports) {

	// Generated by CoffeeScript 1.12.0
	(function() {
	  var ChatApiBasic;

	  ChatApiBasic = (function() {
	    function ChatApiBasic(config) {
	      this.config = config;
	    }

	    ChatApiBasic.prototype.request = function(path, request, onComplete) {
	      return new Request({
	        url: this.config.baseUrl + '/api/v1/' + path,
	        onComplete: (function(data) {
	          data = JSON.parse(data);
	          if (data.error) {
	            throw new Error(data.error);
	          }
	          return onComplete(data);
	        }).bind(this)
	      }).get(request);
	    };

	    ChatApiBasic.prototype.startSocket = function(token) {
	      var socket;
	      this.token = token;
	      if (this.config.baseUrl) {
	        socket = io.connect(this.config.baseUrl);
	      } else {
	        socket = io.connect();
	      }
	      this.socket = socket;
	      return socket.on('connect', (function() {
	        return socket.emit('authenticate', {
	          token: token
	        });
	      }).bind(this)).on('event', (function(data) {
	        console.log(data);
	        return this.trigger(data.type, data);
	      }).bind(this)).on('unauthorized', function(msg) {
	        msg.data.token = token;
	        return console.error(msg.data);
	      });
	    };

	    return ChatApiBasic;

	  })();

	  window.ChatApiBasic = ChatApiBasic;

	}).call(this);

	//# sourceMappingURL=ChatApiBasic.js.map


/***/ },
/* 9 */
/***/ function(module, exports) {

	// Generated by CoffeeScript 1.12.0
	(function() {
	  var ChatApi,
	    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
	    hasProp = {}.hasOwnProperty;

	  ChatApi = (function(superClass) {
	    extend(ChatApi, superClass);

	    function ChatApi(token, config) {
	      this.token = token;
	      this.config = config;
	      MicroEvent.mixin(this);
	      this.initDeliveredLogic();
	    }

	    ChatApi.prototype.restart = function() {
	      this.socket.disconnect();
	      return this.socket.connect();
	    };

	    ChatApi.prototype.login = function(onComplete) {
	      throw new Error('login is not supported');
	    };

	    ChatApi.prototype.start = function() {
	      throw new Error('abstract');
	    };

	    ChatApi.prototype.initDeliveredLogic = function(chatId) {
	      return this.bind('newUserMessages', (function(data) {
	        return this.markAsDelivered(data.messages);
	      }).bind(this));
	    };

	    ChatApi.prototype.loadHistory = function() {
	      return new Request({
	        url: this.config.baseUrl + '/api/v1/message/list',
	        onComplete: (function(messages) {
	          messages = JSON.parse(messages);
	          if (messages.length === 0) {
	            return;
	          }
	          this.markAsDelivered(messages);
	          return this.trigger('historyLoaded', messages);
	        }).bind(this)
	      }).get({
	        token: this.token,
	        chatId: this.chatId
	      });
	    };

	    ChatApi.prototype.sendMessage = function(message, onComplete) {
	      if (!this.chatId) {
	        throw new Error('Chat has not started');
	      }
	      return new Request({
	        url: this.config.baseUrl + '/api/v1/message/send',
	        onComplete: onComplete
	      }).get({
	        token: this.token,
	        chatId: this.chatId,
	        message: message
	      });
	    };

	    ChatApi.prototype.sendUserMessage = function(message, userId, onComplete) {
	      if (!this.chatId) {
	        throw new Error('Chat has not started');
	      }
	      return new Request({
	        url: this.config.baseUrl + '/api/v1/message/userSend',
	        onComplete: onComplete
	      }).get({
	        token: this.token,
	        userId: userId,
	        chatId: this.chatId,
	        message: message
	      });
	    };

	    ChatApi.prototype.loadUserInfo = function(phoneOrId, onComplete) {
	      if (phoneOrId.length === 11) {
	        return new Request({
	          url: this.config.baseUrl + '/api/v1/user/info',
	          onComplete: (function(userInfo) {
	            userInfo = JSON.parse(userInfo);
	            return onComplete(userInfo);
	          })
	        }).get({
	          phone: phoneOrId
	        });
	      } else {
	        return new Request({
	          url: this.config.baseUrl + '/api/v1/user/info',
	          onComplete: (function(userInfo) {
	            userInfo = JSON.parse(userInfo);
	            return onComplete(userInfo);
	          })
	        }).get({
	          id: phoneOrId
	        });
	      }
	    };

	    ChatApi.prototype.markAsDelivered = function(messages) {
	      return this.markAs('delivered', messages);
	    };

	    ChatApi.prototype.markAsViewed = function(messages) {
	      return this.markAs('viewed', messages);
	    };

	    ChatApi.prototype.ucFirst = function(str) {
	      var f;
	      f = str.charAt(0).toUpperCase();
	      return f + str.substr(1, str.length - 1);
	    };

	    ChatApi.prototype.markAs = function(keyword, messages) {
	      var arrangedMessages, chatId, eventType, i, len, message, messageIds, results;
	      messages = messages.filter((function(message) {
	        return message.userId !== this.user._id;
	      }).bind(this));
	      messages = messages.filter(function(message) {
	        return !message[keyword];
	      });
	      if (messages.length === 0) {
	        return;
	      }
	      arrangedMessages = {};
	      for (i = 0, len = messages.length; i < len; i++) {
	        message = messages[i];
	        if (!message.chatId) {
	          throw new Error('message.chatId is required');
	        }
	        if (!arrangedMessages[message.chatId]) {
	          arrangedMessages[message.chatId] = [];
	        }
	        arrangedMessages[message.chatId].push(message);
	      }
	      eventType = 'markAs' + this.ucFirst(keyword);
	      console.log(eventType);
	      results = [];
	      for (chatId in arrangedMessages) {
	        messages = arrangedMessages[chatId];
	        messageIds = messages.map(function(message) {
	          return message._id;
	        });
	        results.push(this.socket.emit(eventType, {
	          messageIds: messageIds.join(','),
	          chatId: chatId
	        }));
	      }
	      return results;
	    };

	    return ChatApi;

	  })(ChatApiBasic);

	  ChatApi.tts = function(timestamp) {
	    var date, formattedTime, hours, minutes, monthNames;
	    date = new Date(timestamp);
	    hours = date.getHours();
	    monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	    minutes = "0" + date.getMinutes();
	    formattedTime = date.getDate() + ' ' + monthNames[date.getMonth()] + ' ' + hours + ':' + minutes.substr(-2);
	    return formattedTime;
	  };

	  window.ChatApi = ChatApi;

	}).call(this);

	//# sourceMappingURL=ChatApi.js.map


/***/ },
/* 10 */
/***/ function(module, exports) {

	// Generated by CoffeeScript 1.12.0
	(function() {
	  var ChatApiStandby,
	    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
	    hasProp = {}.hasOwnProperty;

	  ChatApiStandby = (function(superClass) {
	    extend(ChatApiStandby, superClass);

	    function ChatApiStandby(user, config) {
	      if (!user.token) {
	        console.error(user);
	        throw new Error('user object must have token param');
	      }
	      ChatApiStandby.__super__.constructor.call(this, user.token, config);
	    }

	    ChatApiStandby.prototype.start = function(onStart) {
	      return this.startSocket(this.token, onStart);
	    };

	    ChatApiStandby.prototype.startSocket = function(token, onAuthenticated) {
	      var socket;
	      socket = ChatApiStandby.__super__.startSocket.call(this, token);
	      return socket.on('authenticated', function() {
	        return onAuthenticated();
	      });
	    };

	    return ChatApiStandby;

	  })(ChatApi);

	  window.ChatApiStandby = ChatApiStandby;

	}).call(this);

	//# sourceMappingURL=ChatApiStandby.js.map


/***/ },
/* 11 */
/***/ function(module, exports) {

	// Generated by CoffeeScript 1.12.0
	(function() {
	  var ChatApiJoined,
	    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
	    hasProp = {}.hasOwnProperty;

	  ChatApiJoined = (function(superClass) {
	    extend(ChatApiJoined, superClass);

	    function ChatApiJoined() {
	      return ChatApiJoined.__super__.constructor.apply(this, arguments);
	    }

	    ChatApiJoined.prototype.startSocket = function(token, chatId, onJoined) {
	      var called, socket;
	      socket = ChatApiJoined.__super__.startSocket.call(this, token);
	      this.chatId = chatId;
	      called = false;
	      socket.on('authenticated', (function() {
	        this.chatId = chatId;
	        socket.emit('join', {
	          chatId: chatId
	        });
	        if (called) {
	          return;
	        }
	        called = true;
	        return onJoined();
	      }).bind(this));
	      return socket;
	    };

	    ChatApiJoined.prototype.startChatWithUser = function(toUser, onComplete) {
	      return new Request({
	        url: this.config.baseUrl + '/api/v1/chat/getOrCreateByTwoUsers',
	        onComplete: (function(chat) {
	          if (!chat) {
	            return;
	          }
	          chat = JSON.parse(chat);
	          if (chat.error) {
	            throw new Error(chat.error);
	          }
	          this.data = chat;
	          return this.startSocket(this.token, chat.chatId, onComplete);
	        }).bind(this)
	      }).get({
	        token: this.token,
	        userId: toUser._id
	      });
	    };

	    return ChatApiJoined;

	  })(ChatApi);

	  window.ChatApiJoined = ChatApiJoined;

	}).call(this);

	//# sourceMappingURL=ChatApiJoined.js.map


/***/ },
/* 12 */
/***/ function(module, exports) {

	// Generated by CoffeeScript 1.12.0
	(function() {
	  var ChatApiByPhone,
	    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
	    hasProp = {}.hasOwnProperty;

	  ChatApiByPhone = (function(superClass) {
	    extend(ChatApiByPhone, superClass);

	    function ChatApiByPhone(user, phone, config) {
	      this.user = user;
	      this.phone = phone;
	      ChatApiByPhone.__super__.constructor.call(this, this.user.token, config);
	    }

	    ChatApiByPhone.prototype.start = function(onStart) {
	      return this.loadUserInfo(this.phone, (function(toUser) {
	        return this.startChatWithUser(toUser, (function() {
	          this.toUser = toUser;
	          this.started = true;
	          return onStart(toUser);
	        }).bind(this));
	      }).bind(this));
	    };

	    return ChatApiByPhone;

	  })(ChatApiJoined);

	  window.ChatApiByPhone = ChatApiByPhone;

	}).call(this);

	//# sourceMappingURL=ChatApiByPhone.js.map


/***/ },
/* 13 */
/***/ function(module, exports) {

	// Generated by CoffeeScript 1.12.0
	(function() {
	  var LoginBox;

	  LoginBox = (function() {
	    function LoginBox(parent) {
	      this.parent = parent;
	      this.container = new Element('div.loginBox').inject(this.parent);
	      this.createPhoneBox();
	      this.createCodeBox();
	      this.codeBox.setStyle('display', 'none');
	    }

	    LoginBox.prototype.createPhoneBox = function() {
	      this.phoneBox = new Element('div.phoneBox').inject(this.container);
	      this.phoneInput = new Element('input', {
	        placeholder: 'Phone Number',
	        name: 'phone',
	        type: 'number',
	        maxlength: 11
	      }).inject(this.phoneBox);
	      this.sendCodeButton = new Element('button', {
	        html: 'Send code to sms'
	      }).inject(this.phoneBox);
	      return new Element('a', {
	        href: '#',
	        html: '<p>I already have the code</p>'
	      }).addEvent('click', (function(e) {
	        e.preventDefault();
	        return this.switchToCodeBox();
	      }).bind(this)).inject(this.phoneBox);
	    };

	    LoginBox.prototype.createCodeBox = function() {
	      this.codeBox = new Element('div.codeBox').inject(this.container);
	      new Element('p', {
	        html: 'Input code has sent to you by SMS in field below:'
	      }).inject(this.codeBox);
	      this.codeInput = new Element('input', {
	        placeholder: 'Code',
	        name: 'code',
	        type: 'number',
	        maxlength: 4
	      }).inject(this.codeBox);
	      this.loginButton = new Element('button', {
	        html: 'Login'
	      }).inject(this.codeBox);
	      return new Element('a', {
	        href: '#',
	        html: '<p>Go back to phone input</p>'
	      }).addEvent('click', (function() {
	        return this.switchToLoginBox();
	      }).bind(this)).inject(this.codeBox);
	    };

	    LoginBox.prototype.getPhone = function() {
	      return this.phoneInput.get('value');
	    };

	    LoginBox.prototype.getCode = function() {
	      return this.codeInput.get('value');
	    };

	    LoginBox.prototype.switchToCodeBox = function() {
	      if (!this.phoneInput.get('value')) {
	        alert('Phone is required');
	        return;
	      }
	      this.phoneBox.setStyle('display', 'none');
	      return this.codeBox.setStyle('display', 'block');
	    };

	    LoginBox.prototype.switchToLoginBox = function() {
	      this.phoneBox.setStyle('display', 'block');
	      return this.codeBox.setStyle('display', 'none');
	    };

	    return LoginBox;

	  })();

	  window.LoginBox = LoginBox;

	}).call(this);

	//# sourceMappingURL=LoginBox.js.map


/***/ },
/* 14 */
/***/ function(module, exports) {

	// Generated by CoffeeScript 1.12.0
	(function() {
	  var LoginBoxConnect;

	  LoginBoxConnect = (function() {
	    function LoginBoxConnect(chatApi, loginBox) {
	      this.chatApi = chatApi;
	      this.loginBox = loginBox;
	      this.initPhoneBox();
	      this.initLoginBox();
	    }

	    LoginBoxConnect.prototype.initPhoneBox = function() {
	      return this.loginBox.sendCodeButton.addEvent('click', (function() {
	        return this.chatApi.request('sendCode', {
	          phone: this.loginBox.getPhone()
	        }, (function(data) {
	          if (data.success) {
	            return this.loginBox.switchToCodeBox();
	          } else {
	            return alert(data.error);
	          }
	        }).bind(this));
	      }).bind(this));
	    };

	    LoginBoxConnect.prototype.initLoginBox = function() {
	      return this.loginBox.loginButton.addEvent('click', (function() {
	        return this.chatApi.request('login', {
	          phone: this.loginBox.getPhone(),
	          code: this.loginBox.getCode(),
	          device: 'android'
	        }, (function(user) {
	          Ngn.LocalStorage.json.set('user', user);
	          return window.location.reload(true);
	        }).bind(this));
	      }).bind(this));
	    };

	    return LoginBoxConnect;

	  })();

	  window.LoginBoxConnect = LoginBoxConnect;

	}).call(this);

	//# sourceMappingURL=LoginBoxConnect.js.map


/***/ },
/* 15 */
/***/ function(module, exports) {

	// Generated by CoffeeScript 1.12.0
	(function() {
	  var ChatBox;

	  ChatBox = (function() {
	    function ChatBox(parent) {
	      this.container = new Element('div.chatBox').inject(parent);
	    }

	    ChatBox.prototype.build = function(user, toUser, chatTitle) {
	      var loginText, title;
	      this.userInfo = user;
	      title = new Element('div.titleBox').inject(this.container);
	      if (chatTitle) {
	        chatTitle = '<span class="chatTitle">' + chatTitle + '</span>';
	      } else {
	        chatTitle = '';
	      }
	      if (toUser.login) {
	        loginText = '<span>' + toUser.login + '</span> ';
	      } else {
	        loginText = '';
	      }
	      title.set('html', 'Chat with <b>' + loginText + '+' + toUser.phone + '</b>');
	      this.chatMessagesBox = new ChatMessagesBox(this);
	      this.answerBox = new Element('div.answerBox').inject(this.container);
	      new Element('div.authUser', {
	        html: user.login
	      }).inject(this.answerBox);
	      this.messageInputBox = new MessageInputBox(this);
	      return this.sendMessageButton = new SendMessageButton(this);
	    };

	    return ChatBox;

	  })();

	  window.ChatBox = ChatBox;

	}).call(this);

	//# sourceMappingURL=ChatBox.js.map


/***/ },
/* 16 */
/***/ function(module, exports) {

	// Generated by CoffeeScript 1.11.1
	(function() {
	  var ChatMessagesBox;

	  ChatMessagesBox = (function() {
	    function ChatMessagesBox(chatBox) {
	      this.chatBox = chatBox;
	      this.container = new Element('div.messagesBox').inject(this.chatBox.container);
	      this.messageBoxes = {};
	    }

	    ChatMessagesBox.prototype.addMessage = function(userInfo, message) {
	      this._addMessage(userInfo, message);
	      return this.scrollBottom();
	    };

	    ChatMessagesBox.prototype._addMessage = function(userInfo, message) {
	      var mine;
	      mine = this.chatBox.userInfo._id === userInfo._id;
	      return this.messageBoxes[message._id] = new MessageBox(this, mine, userInfo, message);
	    };

	    ChatMessagesBox.prototype.scrollBottom = function() {
	      return this.container.scrollTop = this.container.scrollHeight;
	    };

	    return ChatMessagesBox;

	  })();

	  window.ChatMessagesBox = ChatMessagesBox;

	}).call(this);

	//# sourceMappingURL=ChatMessagesBox.js.map


/***/ },
/* 17 */
/***/ function(module, exports) {

	// Generated by CoffeeScript 1.11.1
	(function() {
	  var MessageBox;

	  MessageBox = (function() {
	    function MessageBox(chatMessageBox, mine, userInfo, message) {
	      var eText;
	      this.chatMessageBox = chatMessageBox;
	      this.message = message;
	      this.container = new Element('div.messageBox').inject(this.chatMessageBox.container, 'bottom');
	      new Element('div.time', {
	        html: ChatApi.tts(this.message.createTime)
	      }).inject(this.container);
	      this.mark = new Element('div.mark').inject(this.container);
	      eText = new Element('div.text', {
	        html: this.message.message
	      }).inject(this.container);
	      if (mine) {
	        this.container.addClass('mine');
	        new Element('div.arrow.right').inject(eText);
	      } else {
	        new Element('div.arrow.left').inject(eText);
	      }
	      if (this.message.delivered) {
	        this.markAsDelivered();
	      }
	    }

	    MessageBox.prototype.markAsDelivered = function() {
	      this.mark.set('title', 'Delivered');
	      return this.mark.set('html', '&#10004;');
	    };

	    MessageBox.prototype.markAsViewed = function() {
	      this.mark.set('title', 'Viewed');
	      return this.mark.set('html', '&#128065;');
	    };

	    return MessageBox;

	  })();

	  window.MessageBox = MessageBox;

	}).call(this);

	//# sourceMappingURL=MessageBox.js.map


/***/ },
/* 18 */
/***/ function(module, exports) {

	// Generated by CoffeeScript 1.11.1
	(function() {
	  var MessageInputBox;

	  MessageInputBox = (function() {
	    function MessageInputBox(chatBox) {
	      this.chatBox = chatBox;
	      this.container = new Element('div.messageInputBox').inject(this.chatBox.answerBox);
	      this.input = new Element('textarea', {
	        placeholder: 'Type text here...'
	      }).inject(this.container);
	    }

	    MessageInputBox.prototype.disable = function() {
	      return this.input.set('disabled', true);
	    };

	    MessageInputBox.prototype.enable = function() {
	      return this.input.set('disabled', false);
	    };

	    MessageInputBox.prototype.cleanup = function() {
	      return this.input.set('value', '');
	    };

	    return MessageInputBox;

	  })();

	  window.MessageInputBox = MessageInputBox;

	}).call(this);

	//# sourceMappingURL=MessageInputBox.js.map


/***/ },
/* 19 */
/***/ function(module, exports) {

	// Generated by CoffeeScript 1.11.1
	(function() {
	  var SendMessageButton;

	  SendMessageButton = (function() {
	    function SendMessageButton(chatBox) {
	      this.chatBox = chatBox;
	      this.button = new Element('button.sendMessage').inject(this.chatBox.answerBox);
	      this.button.set('html', 'Send');
	    }

	    SendMessageButton.prototype.disable = function() {
	      return this.button.set('disabled', true);
	    };

	    SendMessageButton.prototype.enable = function() {
	      return this.button.set('disabled', false);
	    };

	    return SendMessageButton;

	  })();

	  window.SendMessageButton = SendMessageButton;

	}).call(this);

	//# sourceMappingURL=SendMessageButton.js.map


/***/ },
/* 20 */
/***/ function(module, exports) {

	// Generated by CoffeeScript 1.11.1
	(function() {
	  var ChatBoxConnect;

	  ChatBoxConnect = (function() {
	    function ChatBoxConnect(chatApi, chatBox, usersListBox) {
	      this.chatApi = chatApi;
	      this.chatBox = chatBox;
	      this.usersListBox = usersListBox;
	    }

	    ChatBoxConnect.prototype.start = function(onStart) {
	      return this.chatApi.start((function(toUser) {
	        this.toUser = toUser;
	        this.initUsers();
	        this.chatBox.build(this.chatApi.user, toUser, this.chatApi.chatId);
	        this.chatApi.loadHistory();
	        this.bindHistoryEvent();
	        this.bindNewMessageEvent();
	        this.bindSendButton();
	        this.bindMessageDeliveredStatusChange();
	        this.bindMessageViewedStatusChange();
	        if (onStart) {
	          return onStart();
	        }
	      }).bind(this));
	    };

	    ChatBoxConnect.prototype.initUsers = function() {
	      this.users = {};
	      this.addUser(this.chatApi.user);
	      return this.addUser(this.toUser);
	    };

	    ChatBoxConnect.prototype.addUser = function(user) {
	      return this.users[user._id] = user;
	    };

	    ChatBoxConnect.prototype.bindNewUserMessagesEvent = function() {};

	    ChatBoxConnect.prototype.bindNewMessageEvent = function() {
	      return this.chatApi.bind('newMessage', (function(data) {
	        return this.addMessage(data.message);
	      }).bind(this));
	    };

	    ChatBoxConnect.prototype._addMessage = function(message) {
	      return this.chatBox.chatMessagesBox._addMessage(this.users[message.userId], message);
	    };

	    ChatBoxConnect.prototype.messages = [];

	    ChatBoxConnect.prototype.addMessage = function(message) {
	      this.messages.push(message);
	      this._addMessage(message);
	      this.chatBox.chatMessagesBox.scrollBottom();
	      return this.markAsViewedRemitted();
	    };

	    ChatBoxConnect.prototype.markAsViewedRemitted = function() {
	      if (this.viewedTimeoutId) {
	        clearTimeout(this.viewedTimeoutId);
	      }
	      return this.viewedTimeoutId = setTimeout((function() {
	        this.chatApi.markAsViewed(this.messages);
	        return this.messages = [];
	      }).bind(this), 100);
	    };

	    ChatBoxConnect.prototype.bindHistoryEvent = function() {
	      return this.chatApi.bind('historyLoaded', (function(messages) {
	        var i, j, ref;
	        for (i = j = ref = messages.length - 1; j >= 0; i = j += -1) {
	          this.addMessage(messages[i]);
	        }
	        return setTimeout((function() {
	          return this.chatBox.chatMessagesBox.scrollBottom();
	        }).bind(this), 1000);
	      }).bind(this));
	    };

	    ChatBoxConnect.prototype.bindSendButton = function() {
	      this.chatBox.messageInputBox.input.addEvent('keypress', (function(e) {
	        if (e.code === 10 && e.control) {
	          return this.sendMessage();
	        }
	      }).bind(this));
	      return this.chatBox.sendMessageButton.button.addEvent('click', (function() {
	        return this.sendMessage();
	      }).bind(this));
	    };

	    ChatBoxConnect.prototype.sendMessage = function() {
	      var message;
	      message = this.chatBox.messageInputBox.input.get('value');
	      if (!message) {
	        return;
	      }
	      this.chatBox.messageInputBox.disable();
	      this.chatBox.sendMessageButton.disable();
	      return this.chatApi.sendUserMessage(message, this.toUser._id, (function() {
	        this.chatBox.messageInputBox.cleanup();
	        this.chatBox.messageInputBox.enable();
	        return this.chatBox.sendMessageButton.enable();
	      }).bind(this));
	    };

	    ChatBoxConnect.prototype.bindMessageDeliveredStatusChange = function() {
	      return this.chatApi.bind('delivered', (function(data) {
	        var id, j, len, ref, results;
	        ref = data.messageIds;
	        results = [];
	        for (j = 0, len = ref.length; j < len; j++) {
	          id = ref[j];
	          results.push(this.chatBox.chatMessagesBox.messageBoxes[id].markAsDelivered());
	        }
	        return results;
	      }).bind(this));
	    };

	    ChatBoxConnect.prototype.bindMessageViewedStatusChange = function() {
	      return this.chatApi.bind('viewed', (function(data) {
	        var id, j, len, ref, results;
	        ref = data.messageIds;
	        results = [];
	        for (j = 0, len = ref.length; j < len; j++) {
	          id = ref[j];
	          results.push(this.chatBox.chatMessagesBox.messageBoxes[id].markAsViewed());
	        }
	        return results;
	      }).bind(this));
	    };

	    return ChatBoxConnect;

	  })();

	  window.ChatBoxConnect = ChatBoxConnect;

	}).call(this);

	//# sourceMappingURL=ChatBoxConnect.js.map


/***/ },
/* 21 */
/***/ function(module, exports) {

	// Generated by CoffeeScript 1.12.0
	(function() {
	  var UsersListBox;

	  UsersListBox = (function() {
	    function UsersListBox(user1, isHomePage, parent) {
	      this.user = user1;
	      this.isHomePage = isHomePage;
	      this.container = new Element('div.usersList').inject(parent);
	      this.initHomeButton();
	      new Element('div.title', {
	        html: 'Contacts'
	      }).inject(this.container);
	      this.contacts = new Element('div.contacts').inject(this.container);
	      new Element('div.title', {
	        html: 'New Users'
	      }).inject(this.container);
	      this.newUsers = new Element('div.newUsers').inject(this.container);
	      this.initLogoutButton();
	      this.users = {};
	    }

	    UsersListBox.prototype.initLogoutButton = function() {
	      var logoutBtn;
	      logoutBtn = new Element('div.title.btn', {
	        html: 'Logout'
	      }).inject(this.container);
	      return logoutBtn.addEvent('click', function(e) {
	        e.preventDefault();
	        Ngn.LocalStorage.remove('user');
	        window.location = './';
	        return window.location.reload(true);
	      });
	    };

	    UsersListBox.prototype.initHomeButton = function() {
	      if (!this.isHomePage) {
	        this.homePageBtn = new Element('div.title.btn', {
	          html: '« Go home'
	        }).inject(this.container);
	        return this.homePageBtn.addEvent('click', function() {
	          window.location.hash = '';
	          return window.location.reload(true);
	        });
	      }
	    };

	    UsersListBox.prototype._addUser = function(user, messagesCount, isNew) {
	      var container, countTag;
	      if (this.users[user._id]) {
	        return false;
	      }
	      if (isNew) {
	        container = this.newUsers;
	      } else {
	        container = this.contacts;
	      }
	      this.users[user._id] = user;
	      this.users[user._id].messageCount = messagesCount;
	      if (this.users[user._id].messageCount) {
	        countTag = '<span>' + this.users[user._id].messageCount + '</span>';
	      } else {
	        countTag = '';
	      }
	      this.users[user._id].el = new Element('div.user', {
	        html: (user.login || user.phone) + countTag
	      }).inject(container);
	      if (user.selected) {
	        this.users[user._id].el.addClass('selected');
	      }
	      this.users[user._id].el.addEvent('click', (function() {
	        return this.openChat(user.phone);
	      }).bind(this));
	      return true;
	    };

	    UsersListBox.prototype.addUser = function(user, messagesCount) {
	      if (this._addUser(user, messagesCount) === true) {
	        return;
	      }
	      this.users[user._id].messageCount += messagesCount;
	      return this.users[user._id].el.getElement('span').set('html', this.users[user._id].messageCount);
	    };

	    UsersListBox.prototype.openChat = function(phone) {
	      window.location.hash = '#' + phone;
	      return window.location.reload(true);
	    };

	    UsersListBox.prototype.addNotice = function(userId, notice) {};

	    return UsersListBox;

	  })();

	  window.UsersListBox = UsersListBox;

	}).call(this);

	//# sourceMappingURL=UsersListBox.js.map


/***/ },
/* 22 */
/***/ function(module, exports) {

	// Generated by CoffeeScript 1.12.0
	(function() {
	  var UsersListConnect;

	  UsersListConnect = (function() {
	    function UsersListConnect(chatApi, usersListBox) {
	      this.chatApi = chatApi;
	      this.usersListBox = usersListBox;
	    }

	    UsersListConnect.prototype.start = function() {
	      return this.chatApi.start((function(toUser) {
	        return this.onStart();
	      }).bind(this));
	    };

	    UsersListConnect.prototype.onStart = function() {
	      this.loadContactsFromMessages();
	      return this.waitForNewUserMessages();
	    };

	    UsersListConnect.prototype.loadContactsFromMessages = function() {
	      return this.chatApi.request('contacts/getFromMessages', {
	        token: this.chatApi.token
	      }, (function(userIds) {
	        var i, len, results, userId;
	        results = [];
	        for (i = 0, len = userIds.length; i < len; i++) {
	          userId = userIds[i];
	          results.push(this.addToNewUsersList(userId, 0));
	        }
	        return results;
	      }).bind(this));
	    };

	    UsersListConnect.prototype.waitForNewUserMessages = function() {
	      return this.chatApi.bind('newUserMessages', (function(data) {
	        var counts, i, len, message, ref, results, userId;
	        counts = {};
	        ref = data.messages;
	        for (i = 0, len = ref.length; i < len; i++) {
	          message = ref[i];
	          if (!counts[message.userId]) {
	            counts[message.userId] = 0;
	          }
	          counts[message.userId]++;
	        }
	        results = [];
	        for (userId in counts) {
	          results.push(this.addToNewUsersList(userId, counts[userId]));
	        }
	        return results;
	      }).bind(this));
	    };

	    UsersListConnect.prototype.addToNewUsersList = function(userId, messagesCount) {
	      return this.chatApi.loadUserInfo(userId, (function(user) {
	        if (this.chatApi.toUser && this.chatApi.toUser._id === user._id) {
	          user.selected = true;
	        }
	        return this.usersListBox.addUser(user, messagesCount);
	      }).bind(this));
	    };

	    return UsersListConnect;

	  })();

	  window.UsersListConnect = UsersListConnect;

	}).call(this);

	//# sourceMappingURL=UsersListConnect.js.map


/***/ },
/* 23 */
/***/ function(module, exports) {

	// Generated by CoffeeScript 1.11.1
	(function() {
	  var UsersListByPhoneConnect,
	    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
	    hasProp = {}.hasOwnProperty;

	  UsersListByPhoneConnect = (function(superClass) {
	    extend(UsersListByPhoneConnect, superClass);

	    function UsersListByPhoneConnect() {
	      return UsersListByPhoneConnect.__super__.constructor.apply(this, arguments);
	    }

	    return UsersListByPhoneConnect;

	  })(UsersListConnect);

	  window.UsersListByPhoneConnect = UsersListConnect;

	}).call(this);

	//# sourceMappingURL=UsersListByPhoneConnect.js.map


/***/ },
/* 24 */
/***/ function(module, exports) {

	var config = {
	  baseUrl: 'http://185.98.87.28:8080'
	};

/***/ }
/******/ ]);