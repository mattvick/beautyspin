// pdGet + Equal Heights
$.fn.pdGet=function(e,t,n){if(!this.length){return this}var r;var i=Math[e];this.each(function(e){var n=$(this)[t]();r=e?i(r,n):n});if(typeof n=="function"){n.call(this,r);return this}return r}
function eq(e,t,n){$(t,e).css("height","");e.each(function(){var e=$(this).find(t);var r=e.length;if(n){for(var i=0;i<r;i=i+n){e.slice(i,i+n).pdGet("max","height",function(e){this.height(e)})}}else{e.pdGet("max","height",function(e){this.height(e)})}})}

/*! modernizr 3.3.1 (Custom Build) | MIT *
 * http://modernizr.com/download/?-backgroundsize-csstransforms3d-csstransitions-fontface-touchevents-domprefixes-prefixes-setclasses-testallprops-testprop-teststyles !*/
!function(e,t,n){function s(e,t){return typeof e===t}function r(){var e,t,n,r,o,i,a;for(var f in w)if(w.hasOwnProperty(f)){if(e=[],t=w[f],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(r=s(t.fn,"function")?t.fn():t.fn,o=0;o<e.length;o++)i=e[o],a=i.split("."),1===a.length?Modernizr[a[0]]=r:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=r),y.push((r?"":"no-")+a.join("-"))}}function o(e){var t=S.className,n=Modernizr._config.classPrefix||"";if(b&&(t=t.baseVal),Modernizr._config.enableJSClass){var s=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(s,"$1"+n+"js$2")}Modernizr._config.enableClasses&&(t+=" "+n+e.join(" "+n),b?S.className.baseVal=t:S.className=t)}function i(e,t){return!!~(""+e).indexOf(t)}function a(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):b?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function f(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function u(){var e=t.body;return e||(e=a(b?"svg":"body"),e.fake=!0),e}function l(e,n,s,r){var o,i,f,l,c="modernizr",d=a("div"),p=u();if(parseInt(s,10))for(;s--;)f=a("div"),f.id=r?r[s]:c+(s+1),d.appendChild(f);return o=a("style"),o.type="text/css",o.id="s"+c,(p.fake?p:d).appendChild(o),p.appendChild(d),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(t.createTextNode(e)),d.id=c,p.fake&&(p.style.background="",p.style.overflow="hidden",l=S.style.overflow,S.style.overflow="hidden",S.appendChild(p)),i=n(d,e),p.fake?(p.parentNode.removeChild(p),S.style.overflow=l,S.offsetHeight):d.parentNode.removeChild(d),!!i}function c(e,t){return function(){return e.apply(t,arguments)}}function d(e,t,n){var r;for(var o in e)if(e[o]in t)return n===!1?e[o]:(r=t[e[o]],s(r,"function")?c(r,n||t):r);return!1}function p(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function m(t,s){var r=t.length;if("CSS"in e&&"supports"in e.CSS){for(;r--;)if(e.CSS.supports(p(t[r]),s))return!0;return!1}if("CSSSupportsRule"in e){for(var o=[];r--;)o.push("("+p(t[r])+":"+s+")");return o=o.join(" or "),l("@supports ("+o+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return n}function h(e,t,r,o){function u(){c&&(delete R.style,delete R.modElem)}if(o=s(o,"undefined")?!1:o,!s(r,"undefined")){var l=m(e,r);if(!s(l,"undefined"))return l}for(var c,d,p,h,g,v=["modernizr","tspan"];!R.style;)c=!0,R.modElem=a(v.shift()),R.style=R.modElem.style;for(p=e.length,d=0;p>d;d++)if(h=e[d],g=R.style[h],i(h,"-")&&(h=f(h)),R.style[h]!==n){if(o||s(r,"undefined"))return u(),"pfx"==t?h:!0;try{R.style[h]=r}catch(y){}if(R.style[h]!=g)return u(),"pfx"==t?h:!0}return u(),!1}function g(e,t,n,r,o){var i=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+E.join(i+" ")+i).split(" ");return s(t,"string")||s(t,"undefined")?h(a,t,r,o):(a=(e+" "+T.join(i+" ")+i).split(" "),d(a,t,n))}function v(e,t,s){return g(e,n,n,t,s)}var y=[],w=[],x={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){w.push({name:e,fn:t,options:n})},addAsyncTest:function(e){w.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=x,Modernizr=new Modernizr;var C=x._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):[];x._prefixes=C;var S=t.documentElement,b="svg"===S.nodeName.toLowerCase(),_="Moz O ms Webkit",T=x._config.usePrefixes?_.toLowerCase().split(" "):[];x._domPrefixes=T;var z="CSS"in e&&"supports"in e.CSS,P="supportsCSS"in e;Modernizr.addTest("supports",z||P);var E=x._config.usePrefixes?_.split(" "):[];x._cssomPrefixes=E;var k=x.testStyles=l;Modernizr.addTest("touchevents",function(){var n;if("ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch)n=!0;else{var s=["@media (",C.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");k(s,function(e){n=9===e.offsetTop})}return n});var j=function(){var e=navigator.userAgent,t=e.match(/applewebkit\/([0-9]+)/gi)&&parseFloat(RegExp.$1),n=e.match(/w(eb)?osbrowser/gi),s=e.match(/windows phone/gi)&&e.match(/iemobile\/([0-9])+/gi)&&parseFloat(RegExp.$1)>=9,r=533>t&&e.match(/android/gi);return n||r||s}();j?Modernizr.addTest("fontface",!1):k('@font-face {font-family:"font";src:url("https://")}',function(e,n){var s=t.getElementById("smodernizr"),r=s.sheet||s.styleSheet,o=r?r.cssRules&&r.cssRules[0]?r.cssRules[0].cssText:r.cssText||"":"",i=/src/i.test(o)&&0===o.indexOf(n.split(" ")[0]);Modernizr.addTest("fontface",i)});var N={elem:a("modernizr")};Modernizr._q.push(function(){delete N.elem});var R={style:N.elem.style};Modernizr._q.unshift(function(){delete R.style});x.testProp=function(e,t,s){return h([e],n,t,s)};x.testAllProps=g,x.testAllProps=v,Modernizr.addTest("backgroundsize",v("backgroundSize","100%",!0)),Modernizr.addTest("csstransitions",v("transition","all",!0)),Modernizr.addTest("csstransforms3d",function(){var e=!!v("perspective","1px",!0),t=Modernizr._config.usePrefixes;if(e&&(!t||"webkitPerspective"in S.style)){var n,s="#modernizr{width:0;height:0}";Modernizr.supports?n="@supports (perspective: 1px)":(n="@media (transform-3d)",t&&(n+=",(-webkit-transform-3d)")),n+="{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}",k(s+n,function(t){e=7===t.offsetWidth&&18===t.offsetHeight})}return e}),r(),o(y),delete x.addTest,delete x.addAsyncTest;for(var A=0;A<Modernizr._q.length;A++)Modernizr._q[A]();e.Modernizr=Modernizr}(window,document);

// Get viewport dimension including scrollbar, therefore same as using css media queries
function getViewport(){var e;var t;if(typeof window.innerWidth!="undefined"){e=window.innerWidth,t=window.innerHeight}else if(typeof document.documentElement!="undefined"&&typeof document.documentElement.clientWidth!="undefined"&&document.documentElement.clientWidth!=0){e=document.documentElement.clientWidth,t=document.documentElement.clientHeight}else{e=document.getElementsByTagName("body")[0].clientWidth,t=document.getElementsByTagName("body")[0].clientHeight}return[e,t]}

// countdown - https://github.com/rendro/countdown
!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n;"undefined"!=typeof window?n=window:"undefined"!=typeof global?n=global:"undefined"!=typeof self&&(n=self),n.Countdown=e()}}(function(){var define,module,exports;return function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}({1:[function(require,module,exports){var defaultOptions={date:"June 7, 2087 15:03:25",refresh:1e3,offset:0,onEnd:function(){return},render:function(date){this.el.innerHTML=date.years+" years, "+date.days+" days, "+this.leadingZeros(date.hours)+" hours, "+this.leadingZeros(date.min)+" min and "+this.leadingZeros(date.sec)+" sec"}};var Countdown=function(el,options){this.el=el;this.options={};this.interval=false;for(var i in defaultOptions){if(defaultOptions.hasOwnProperty(i)){this.options[i]=typeof options[i]!=="undefined"?options[i]:defaultOptions[i];if(i==="date"&&typeof this.options.date!=="object"){this.options.date=new Date(this.options.date)}if(typeof this.options[i]==="function"){this.options[i]=this.options[i].bind(this)}}}this.getDiffDate=function(){var diff=(this.options.date.getTime()-Date.now()+this.options.offset)/1e3;var dateData={years:0,days:0,hours:0,min:0,sec:0,millisec:0};if(diff<=0){if(this.interval){this.stop();this.options.onEnd()}return dateData}if(diff>=365.25*86400){dateData.years=Math.floor(diff/(365.25*86400));diff-=dateData.years*365.25*86400}if(diff>=86400){dateData.days=Math.floor(diff/86400);diff-=dateData.days*86400}if(diff>=3600){dateData.hours=Math.floor(diff/3600);diff-=dateData.hours*3600}if(diff>=60){dateData.min=Math.floor(diff/60);diff-=dateData.min*60}dateData.sec=Math.round(diff);dateData.millisec=diff%1*1e3;return dateData}.bind(this);this.leadingZeros=function(num,length){length=length||2;num=String(num);if(num.length>length){return num}return(Array(length+1).join("0")+num).substr(-length)};this.update=function(newDate){if(typeof newDate!=="object"){newDate=new Date(newDate)}this.options.date=newDate;this.render();return this}.bind(this);this.stop=function(){if(this.interval){clearInterval(this.interval);this.interval=false}return this}.bind(this);this.render=function(){this.options.render(this.getDiffDate());return this}.bind(this);this.start=function(){if(this.interval){return}this.render();if(this.options.refresh){this.interval=setInterval(this.render,this.options.refresh)}return this}.bind(this);this.updateOffset=function(offset){this.options.offset=offset;return this}.bind(this);this.start()};module.exports=Countdown},{}],2:[function(require,module,exports){var Countdown=require("./countdown.js");var NAME="countdown";var DATA_ATTR="date";jQuery.fn.countdown=function(options){return $.each(this,function(i,el){var $el=$(el);if(!$el.data(NAME)){if($el.data(DATA_ATTR)){options.date=$el.data(DATA_ATTR)}$el.data(NAME,new Countdown(el,options))}})};module.exports=Countdown},{"./countdown.js":1}]},{},[2])(2)});

// Latinise, odstranění diakritiky, http://semplicewebsites.com/removing-accents-javascript
var Latinise={};Latinise.latin_map={"Á":"A","Ă":"A","Ắ":"A","Ặ":"A","Ằ":"A","Ẳ":"A","Ẵ":"A","Ǎ":"A","Â":"A","Ấ":"A","Ậ":"A","Ầ":"A","Ẩ":"A","Ẫ":"A","Ä":"A","Ǟ":"A","Ȧ":"A","Ǡ":"A","Ạ":"A","Ȁ":"A","À":"A","Ả":"A","Ȃ":"A","Ā":"A","Ą":"A","Å":"A","Ǻ":"A","Ḁ":"A","Ⱥ":"A","Ã":"A","Ꜳ":"AA","Æ":"AE","Ǽ":"AE","Ǣ":"AE","Ꜵ":"AO","Ꜷ":"AU","Ꜹ":"AV","Ꜻ":"AV","Ꜽ":"AY","Ḃ":"B","Ḅ":"B","Ɓ":"B","Ḇ":"B","Ƀ":"B","Ƃ":"B","Ć":"C","Č":"C","Ç":"C","Ḉ":"C","Ĉ":"C","Ċ":"C","Ƈ":"C","Ȼ":"C","Ď":"D","Ḑ":"D","Ḓ":"D","Ḋ":"D","Ḍ":"D","Ɗ":"D","Ḏ":"D","ǲ":"D","ǅ":"D","Đ":"D","Ƌ":"D","Ǳ":"DZ","Ǆ":"DZ","É":"E","Ĕ":"E","Ě":"E","Ȩ":"E","Ḝ":"E","Ê":"E","Ế":"E","Ệ":"E","Ề":"E","Ể":"E","Ễ":"E","Ḙ":"E","Ë":"E","Ė":"E","Ẹ":"E","Ȅ":"E","È":"E","Ẻ":"E","Ȇ":"E","Ē":"E","Ḗ":"E","Ḕ":"E","Ę":"E","Ɇ":"E","Ẽ":"E","Ḛ":"E","Ꝫ":"ET","Ḟ":"F","Ƒ":"F","Ǵ":"G","Ğ":"G","Ǧ":"G","Ģ":"G","Ĝ":"G","Ġ":"G","Ɠ":"G","Ḡ":"G","Ǥ":"G","Ḫ":"H","Ȟ":"H","Ḩ":"H","Ĥ":"H","Ⱨ":"H","Ḧ":"H","Ḣ":"H","Ḥ":"H","Ħ":"H","Í":"I","Ĭ":"I","Ǐ":"I","Î":"I","Ï":"I","Ḯ":"I","İ":"I","Ị":"I","Ȉ":"I","Ì":"I","Ỉ":"I","Ȋ":"I","Ī":"I","Į":"I","Ɨ":"I","Ĩ":"I","Ḭ":"I","Ꝺ":"D","Ꝼ":"F","Ᵹ":"G","Ꞃ":"R","Ꞅ":"S","Ꞇ":"T","Ꝭ":"IS","Ĵ":"J","Ɉ":"J","Ḱ":"K","Ǩ":"K","Ķ":"K","Ⱪ":"K","Ꝃ":"K","Ḳ":"K","Ƙ":"K","Ḵ":"K","Ꝁ":"K","Ꝅ":"K","Ĺ":"L","Ƚ":"L","Ľ":"L","Ļ":"L","Ḽ":"L","Ḷ":"L","Ḹ":"L","Ⱡ":"L","Ꝉ":"L","Ḻ":"L","Ŀ":"L","Ɫ":"L","ǈ":"L","Ł":"L","Ǉ":"LJ","Ḿ":"M","Ṁ":"M","Ṃ":"M","Ɱ":"M","Ń":"N","Ň":"N","Ņ":"N","Ṋ":"N","Ṅ":"N","Ṇ":"N","Ǹ":"N","Ɲ":"N","Ṉ":"N","Ƞ":"N","ǋ":"N","Ñ":"N","Ǌ":"NJ","Ó":"O","Ŏ":"O","Ǒ":"O","Ô":"O","Ố":"O","Ộ":"O","Ồ":"O","Ổ":"O","Ỗ":"O","Ö":"O","Ȫ":"O","Ȯ":"O","Ȱ":"O","Ọ":"O","Ő":"O","Ȍ":"O","Ò":"O","Ỏ":"O","Ơ":"O","Ớ":"O","Ợ":"O","Ờ":"O","Ở":"O","Ỡ":"O","Ȏ":"O","Ꝋ":"O","Ꝍ":"O","Ō":"O","Ṓ":"O","Ṑ":"O","Ɵ":"O","Ǫ":"O","Ǭ":"O","Ø":"O","Ǿ":"O","Õ":"O","Ṍ":"O","Ṏ":"O","Ȭ":"O","Ƣ":"OI","Ꝏ":"OO","Ɛ":"E","Ɔ":"O","Ȣ":"OU","Ṕ":"P","Ṗ":"P","Ꝓ":"P","Ƥ":"P","Ꝕ":"P","Ᵽ":"P","Ꝑ":"P","Ꝙ":"Q","Ꝗ":"Q","Ŕ":"R","Ř":"R","Ŗ":"R","Ṙ":"R","Ṛ":"R","Ṝ":"R","Ȑ":"R","Ȓ":"R","Ṟ":"R","Ɍ":"R","Ɽ":"R","Ꜿ":"C","Ǝ":"E","Ś":"S","Ṥ":"S","Š":"S","Ṧ":"S","Ş":"S","Ŝ":"S","Ș":"S","Ṡ":"S","Ṣ":"S","Ṩ":"S","ẞ":"SS","Ť":"T","Ţ":"T","Ṱ":"T","Ț":"T","Ⱦ":"T","Ṫ":"T","Ṭ":"T","Ƭ":"T","Ṯ":"T","Ʈ":"T","Ŧ":"T","Ɐ":"A","Ꞁ":"L","Ɯ":"M","Ʌ":"V","Ꜩ":"TZ","Ú":"U","Ŭ":"U","Ǔ":"U","Û":"U","Ṷ":"U","Ü":"U","Ǘ":"U","Ǚ":"U","Ǜ":"U","Ǖ":"U","Ṳ":"U","Ụ":"U","Ű":"U","Ȕ":"U","Ù":"U","Ủ":"U","Ư":"U","Ứ":"U","Ự":"U","Ừ":"U","Ử":"U","Ữ":"U","Ȗ":"U","Ū":"U","Ṻ":"U","Ų":"U","Ů":"U","Ũ":"U","Ṹ":"U","Ṵ":"U","Ꝟ":"V","Ṿ":"V","Ʋ":"V","Ṽ":"V","Ꝡ":"VY","Ẃ":"W","Ŵ":"W","Ẅ":"W","Ẇ":"W","Ẉ":"W","Ẁ":"W","Ⱳ":"W","Ẍ":"X","Ẋ":"X","Ý":"Y","Ŷ":"Y","Ÿ":"Y","Ẏ":"Y","Ỵ":"Y","Ỳ":"Y","Ƴ":"Y","Ỷ":"Y","Ỿ":"Y","Ȳ":"Y","Ɏ":"Y","Ỹ":"Y","Ź":"Z","Ž":"Z","Ẑ":"Z","Ⱬ":"Z","Ż":"Z","Ẓ":"Z","Ȥ":"Z","Ẕ":"Z","Ƶ":"Z","Ĳ":"IJ","Œ":"OE","ᴀ":"A","ᴁ":"AE","ʙ":"B","ᴃ":"B","ᴄ":"C","ᴅ":"D","ᴇ":"E","ꜰ":"F","ɢ":"G","ʛ":"G","ʜ":"H","ɪ":"I","ʁ":"R","ᴊ":"J","ᴋ":"K","ʟ":"L","ᴌ":"L","ᴍ":"M","ɴ":"N","ᴏ":"O","ɶ":"OE","ᴐ":"O","ᴕ":"OU","ᴘ":"P","ʀ":"R","ᴎ":"N","ᴙ":"R","ꜱ":"S","ᴛ":"T","ⱻ":"E","ᴚ":"R","ᴜ":"U","ᴠ":"V","ᴡ":"W","ʏ":"Y","ᴢ":"Z","á":"a","ă":"a","ắ":"a","ặ":"a","ằ":"a","ẳ":"a","ẵ":"a","ǎ":"a","â":"a","ấ":"a","ậ":"a","ầ":"a","ẩ":"a","ẫ":"a","ä":"a","ǟ":"a","ȧ":"a","ǡ":"a","ạ":"a","ȁ":"a","à":"a","ả":"a","ȃ":"a","ā":"a","ą":"a","ᶏ":"a","ẚ":"a","å":"a","ǻ":"a","ḁ":"a","ⱥ":"a","ã":"a","ꜳ":"aa","æ":"ae","ǽ":"ae","ǣ":"ae","ꜵ":"ao","ꜷ":"au","ꜹ":"av","ꜻ":"av","ꜽ":"ay","ḃ":"b","ḅ":"b","ɓ":"b","ḇ":"b","ᵬ":"b","ᶀ":"b","ƀ":"b","ƃ":"b","ɵ":"o","ć":"c","č":"c","ç":"c","ḉ":"c","ĉ":"c","ɕ":"c","ċ":"c","ƈ":"c","ȼ":"c","ď":"d","ḑ":"d","ḓ":"d","ȡ":"d","ḋ":"d","ḍ":"d","ɗ":"d","ᶑ":"d","ḏ":"d","ᵭ":"d","ᶁ":"d","đ":"d","ɖ":"d","ƌ":"d","ı":"i","ȷ":"j","ɟ":"j","ʄ":"j","ǳ":"dz","ǆ":"dz","é":"e","ĕ":"e","ě":"e","ȩ":"e","ḝ":"e","ê":"e","ế":"e","ệ":"e","ề":"e","ể":"e","ễ":"e","ḙ":"e","ë":"e","ė":"e","ẹ":"e","ȅ":"e","è":"e","ẻ":"e","ȇ":"e","ē":"e","ḗ":"e","ḕ":"e","ⱸ":"e","ę":"e","ᶒ":"e","ɇ":"e","ẽ":"e","ḛ":"e","ꝫ":"et","ḟ":"f","ƒ":"f","ᵮ":"f","ᶂ":"f","ǵ":"g","ğ":"g","ǧ":"g","ģ":"g","ĝ":"g","ġ":"g","ɠ":"g","ḡ":"g","ᶃ":"g","ǥ":"g","ḫ":"h","ȟ":"h","ḩ":"h","ĥ":"h","ⱨ":"h","ḧ":"h","ḣ":"h","ḥ":"h","ɦ":"h","ẖ":"h","ħ":"h","ƕ":"hv","í":"i","ĭ":"i","ǐ":"i","î":"i","ï":"i","ḯ":"i","ị":"i","ȉ":"i","ì":"i","ỉ":"i","ȋ":"i","ī":"i","į":"i","ᶖ":"i","ɨ":"i","ĩ":"i","ḭ":"i","ꝺ":"d","ꝼ":"f","ᵹ":"g","ꞃ":"r","ꞅ":"s","ꞇ":"t","ꝭ":"is","ǰ":"j","ĵ":"j","ʝ":"j","ɉ":"j","ḱ":"k","ǩ":"k","ķ":"k","ⱪ":"k","ꝃ":"k","ḳ":"k","ƙ":"k","ḵ":"k","ᶄ":"k","ꝁ":"k","ꝅ":"k","ĺ":"l","ƚ":"l","ɬ":"l","ľ":"l","ļ":"l","ḽ":"l","ȴ":"l","ḷ":"l","ḹ":"l","ⱡ":"l","ꝉ":"l","ḻ":"l","ŀ":"l","ɫ":"l","ᶅ":"l","ɭ":"l","ł":"l","ǉ":"lj","ſ":"s","ẜ":"s","ẛ":"s","ẝ":"s","ḿ":"m","ṁ":"m","ṃ":"m","ɱ":"m","ᵯ":"m","ᶆ":"m","ń":"n","ň":"n","ņ":"n","ṋ":"n","ȵ":"n","ṅ":"n","ṇ":"n","ǹ":"n","ɲ":"n","ṉ":"n","ƞ":"n","ᵰ":"n","ᶇ":"n","ɳ":"n","ñ":"n","ǌ":"nj","ó":"o","ŏ":"o","ǒ":"o","ô":"o","ố":"o","ộ":"o","ồ":"o","ổ":"o","ỗ":"o","ö":"o","ȫ":"o","ȯ":"o","ȱ":"o","ọ":"o","ő":"o","ȍ":"o","ò":"o","ỏ":"o","ơ":"o","ớ":"o","ợ":"o","ờ":"o","ở":"o","ỡ":"o","ȏ":"o","ꝋ":"o","ꝍ":"o","ⱺ":"o","ō":"o","ṓ":"o","ṑ":"o","ǫ":"o","ǭ":"o","ø":"o","ǿ":"o","õ":"o","ṍ":"o","ṏ":"o","ȭ":"o","ƣ":"oi","ꝏ":"oo","ɛ":"e","ᶓ":"e","ɔ":"o","ᶗ":"o","ȣ":"ou","ṕ":"p","ṗ":"p","ꝓ":"p","ƥ":"p","ᵱ":"p","ᶈ":"p","ꝕ":"p","ᵽ":"p","ꝑ":"p","ꝙ":"q","ʠ":"q","ɋ":"q","ꝗ":"q","ŕ":"r","ř":"r","ŗ":"r","ṙ":"r","ṛ":"r","ṝ":"r","ȑ":"r","ɾ":"r","ᵳ":"r","ȓ":"r","ṟ":"r","ɼ":"r","ᵲ":"r","ᶉ":"r","ɍ":"r","ɽ":"r","ↄ":"c","ꜿ":"c","ɘ":"e","ɿ":"r","ś":"s","ṥ":"s","š":"s","ṧ":"s","ş":"s","ŝ":"s","ș":"s","ṡ":"s","ṣ":"s","ṩ":"s","ʂ":"s","ᵴ":"s","ᶊ":"s","ȿ":"s","ɡ":"g","ß":"ss","ᴑ":"o","ᴓ":"o","ᴝ":"u","ť":"t","ţ":"t","ṱ":"t","ț":"t","ȶ":"t","ẗ":"t","ⱦ":"t","ṫ":"t","ṭ":"t","ƭ":"t","ṯ":"t","ᵵ":"t","ƫ":"t","ʈ":"t","ŧ":"t","ᵺ":"th","ɐ":"a","ᴂ":"ae","ǝ":"e","ᵷ":"g","ɥ":"h","ʮ":"h","ʯ":"h","ᴉ":"i","ʞ":"k","ꞁ":"l","ɯ":"m","ɰ":"m","ᴔ":"oe","ɹ":"r","ɻ":"r","ɺ":"r","ⱹ":"r","ʇ":"t","ʌ":"v","ʍ":"w","ʎ":"y","ꜩ":"tz","ú":"u","ŭ":"u","ǔ":"u","û":"u","ṷ":"u","ü":"u","ǘ":"u","ǚ":"u","ǜ":"u","ǖ":"u","ṳ":"u","ụ":"u","ű":"u","ȕ":"u","ù":"u","ủ":"u","ư":"u","ứ":"u","ự":"u","ừ":"u","ử":"u","ữ":"u","ȗ":"u","ū":"u","ṻ":"u","ų":"u","ᶙ":"u","ů":"u","ũ":"u","ṹ":"u","ṵ":"u","ᵫ":"ue","ꝸ":"um","ⱴ":"v","ꝟ":"v","ṿ":"v","ʋ":"v","ᶌ":"v","ⱱ":"v","ṽ":"v","ꝡ":"vy","ẃ":"w","ŵ":"w","ẅ":"w","ẇ":"w","ẉ":"w","ẁ":"w","ⱳ":"w","ẘ":"w","ẍ":"x","ẋ":"x","ᶍ":"x","ý":"y","ŷ":"y","ÿ":"y","ẏ":"y","ỵ":"y","ỳ":"y","ƴ":"y","ỷ":"y","ỿ":"y","ȳ":"y","ẙ":"y","ɏ":"y","ỹ":"y","ź":"z","ž":"z","ẑ":"z","ʑ":"z","ⱬ":"z","ż":"z","ẓ":"z","ȥ":"z","ẕ":"z","ᵶ":"z","ᶎ":"z","ʐ":"z","ƶ":"z","ɀ":"z","ﬀ":"ff","ﬃ":"ffi","ﬄ":"ffl","ﬁ":"fi","ﬂ":"fl","ĳ":"ij","œ":"oe","ﬆ":"st","ₐ":"a","ₑ":"e","ᵢ":"i","ⱼ":"j","ₒ":"o","ᵣ":"r","ᵤ":"u","ᵥ":"v","ₓ":"x"};String.prototype.latinise=function(){return this.replace(/[^A-Za-z0-9\[\] ]/g,function(a){return Latinise.latin_map[a]||a})};String.prototype.latinize=String.prototype.latinise;String.prototype.isLatin=function(){return this==this.latinise()}

// same as Array.prototype.indexOf, but may be only substr
Array.prototype.indexOfSubstr=function(s){var l=this.length;for(var i=0;i<l;i++){if(this[i].indexOf(s)>-1)return i;}return -1;}

// Format number
//function formatNumber(e,t){e+="";var n=/(\d+)(\d{3})/;while(n.test(e))e=e.replace(n,"$1"+t+"$2");return e}

function formatNumber(number, decimals, dec_point, thousands_sep) {
	var isInt = (number == Math.round(number));

	var n = !isFinite(+number) ? 0 : +number,
		prec = !isFinite(+decimals) ? (decimals == 'auto' && isInt ? 0 : 2) : Math.abs(decimals),
		sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
		dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
		toFixedFix = function (n, prec) {
			// Fix for IE parseFloat(0.55).toFixed(0) = 0;
			var k = Math.pow(10, prec);
			return Math.round(n * k) / k;
		},
		s = (prec ? toFixedFix(n, prec) : Math.round(n)).toString().split('.');
	if (s[0].length > 3) {
		s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
	}
	if ((s[1] || '').length < prec) {
		s[1] = s[1] || '';
		s[1] += new Array(prec - s[1].length + 1).join('0');
	}
	return s.join(dec);
}

// Parse Number
function parseNumber(n, decPoint, thousandsSep) {
	n = n.replace(thousandsSep, '');
	n = n.replace(decPoint, '.');

	return parseFloat(n);
}

/*!
 * jQuery UI Touch Punch 0.2.3
 *
 * Copyright 2011–2014, Dave Furfero
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * Depends:
 *  jquery.ui.widget.js
 *  jquery.ui.mouse.js
 */
!function(a){function f(a,b){if(!(a.originalEvent.touches.length>1)){a.preventDefault();var c=a.originalEvent.changedTouches[0],d=document.createEvent("MouseEvents");d.initMouseEvent(b,!0,!0,window,1,c.screenX,c.screenY,c.clientX,c.clientY,!1,!1,!1,!1,0,null),a.target.dispatchEvent(d)}}if(a.support.touch="ontouchend"in document,a.support.touch){var e,b=a.ui.mouse.prototype,c=b._mouseInit,d=b._mouseDestroy;b._touchStart=function(a){var b=this;!e&&b._mouseCapture(a.originalEvent.changedTouches[0])&&(e=!0,b._touchMoved=!1,f(a,"mouseover"),f(a,"mousemove"),f(a,"mousedown"))},b._touchMove=function(a){e&&(this._touchMoved=!0,f(a,"mousemove"))},b._touchEnd=function(a){e&&(f(a,"mouseup"),f(a,"mouseout"),this._touchMoved||f(a,"click"),e=!1)},b._mouseInit=function(){var b=this;b.element.bind({touchstart:a.proxy(b,"_touchStart"),touchmove:a.proxy(b,"_touchMove"),touchend:a.proxy(b,"_touchEnd")}),c.call(b)},b._mouseDestroy=function(){var b=this;b.element.unbind({touchstart:a.proxy(b,"_touchStart"),touchmove:a.proxy(b,"_touchMove"),touchend:a.proxy(b,"_touchEnd")}),d.call(b)}}}(jQuery);

/*! Lazy Load 1.9.3 - MIT license - Copyright 2010-2013 Mika Tuupola */
/*! - pridana class "preloaded" (obrázek je načtený, ještě nezobrazený) a "loaded" (zobrazený) */
/*! - opraveno okamžité načítání obrázků s vlastní definovanou event (což prý není bug) https://github.com/tuupola/jquery_lazyload/issues/220 */
!function(a,b,c,d){var e=a(b);a.fn.lazyload=function(f){function g(){var b=0;i.each(function(){var c=a(this);if(!j.skip_invisible||c.is(":visible"))if(a.abovethetop(this,j)||a.leftofbegin(this,j));else if(a.belowthefold(this,j)||a.rightoffold(this,j)){if(++b>j.failure_limit)return!1}else c.trigger("appear"),b=0})}var h,i=this,j={threshold:0,failure_limit:0,event:"scroll",custom_event_immediate_load:!0,effect:"show",container:b,data_attribute:"original",skip_invisible:!0,appear:null,load:null,placeholder:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"};return f&&(d!==f.failurelimit&&(f.failure_limit=f.failurelimit,delete f.failurelimit),d!==f.effectspeed&&(f.effect_speed=f.effectspeed,delete f.effectspeed),a.extend(j,f)),h=j.container===d||j.container===b?e:a(j.container),0===j.event.indexOf("scroll")&&h.bind(j.event,function(){return g()}),this.each(function(){var b=this,c=a(b);b.loaded=!1,(c.attr("src")===d||c.attr("src")===!1)&&c.attr("src",j.placeholder),c.one("appear",function(){if(!this.loaded){if(j.appear){var d=i.length;j.appear.call(b,d,j)}a("<img />").bind("load",function(){c.addClass("preloaded");var d=c.attr("data-"+j.data_attribute);c.hide(),c.is("img")?c.attr("src",d):c.css("background-image","url('"+d+"')"),c[j.effect](j.effect_speed),b.loaded=!0,c.removeClass("preloaded").addClass("loaded");var e=a.grep(i,function(a){return!a.loaded});if(i=a(e),j.load){var f=i.length;j.load.call(b,f,j)}}).attr("src",c.attr("data-"+j.data_attribute))}}),0!==j.event.indexOf("scroll")&&c.bind(j.event,function(){b.loaded||c.trigger("appear")})}),e.bind("resize",function(){(j.custom_event_immediate_load||0===j.event.indexOf("scroll"))&&g()}),/(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion)&&e.bind("pageshow",function(b){b.originalEvent&&b.originalEvent.persisted&&i.each(function(){a(this).trigger("appear")})}),a(c).ready(function(){(j.custom_event_immediate_load||0===j.event.indexOf("scroll"))&&g()}),this},a.belowthefold=function(c,f){var g;return g=f.container===d||f.container===b?(b.innerHeight?b.innerHeight:e.height())+e.scrollTop():a(f.container).offset().top+a(f.container).height(),g<=a(c).offset().top-f.threshold},a.rightoffold=function(c,f){var g;return g=f.container===d||f.container===b?e.width()+e.scrollLeft():a(f.container).offset().left+a(f.container).width(),g<=a(c).offset().left-f.threshold},a.abovethetop=function(c,f){var g;return g=f.container===d||f.container===b?e.scrollTop():a(f.container).offset().top,g>=a(c).offset().top+f.threshold+a(c).height()},a.leftofbegin=function(c,f){var g;return g=f.container===d||f.container===b?e.scrollLeft():a(f.container).offset().left,g>=a(c).offset().left+f.threshold+a(c).width()},a.inviewport=function(b,c){return!(a.rightoffold(b,c)||a.leftofbegin(b,c)||a.belowthefold(b,c)||a.abovethetop(b,c))},a.extend(a.expr[":"],{"below-the-fold":function(b){return a.belowthefold(b,{threshold:0})},"above-the-top":function(b){return!a.belowthefold(b,{threshold:0})},"right-of-screen":function(b){return a.rightoffold(b,{threshold:0})},"left-of-screen":function(b){return!a.rightoffold(b,{threshold:0})},"in-viewport":function(b){return a.inviewport(b,{threshold:0})},"above-the-fold":function(b){return!a.belowthefold(b,{threshold:0})},"right-of-fold":function(b){return a.rightoffold(b,{threshold:0})},"left-of-fold":function(b){return!a.rightoffold(b,{threshold:0})}})}(jQuery,window,document);

/** smooth-scroll v5.1.1, by Chris Ferdinandi | http://github.com/cferdinandi/smooth-scroll | Licensed under MIT: http://gomakethings.com/mit/ */
Function.prototype.bind||(Function.prototype.bind=function(t){if("function"!=typeof this)throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");var o=Array.prototype.slice.call(arguments,1),n=this;return fNOP=function(){},fBound=function(){return n.apply(this instanceof fNOP&&t?this:t,o.concat(Array.prototype.slice.call(arguments)))},fNOP.prototype=this.prototype,fBound.prototype=new fNOP,fBound});
!function(t,e){"function"==typeof define&&define.amd?define("smoothScroll",e(t)):"object"==typeof exports?module.exports=e(t):t.smoothScroll=e(t)}(this,function(t){"use strict";var e,n={},o=!!document.querySelector&&!!t.addEventListener,r={speed:500,easing:"easeInOutCubic",offset:0,updateURL:!0,callbackBefore:function(){},callbackAfter:function(){}},a=function(t,e,n){if("[object Object]"===Object.prototype.toString.call(t))for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.call(n,t[o],o,t);else for(var r=0,a=t.length;a>r;r++)e.call(n,t[r],r,t)},c=function(t,e){var n={};return a(t,function(e,o){n[o]=t[o]}),a(e,function(t,o){n[o]=e[o]}),n},u=function(t,e){for(var n=e.charAt(0);t&&t!==document;t=t.parentNode)if("."===n){if(t.classList.contains(e.substr(1)))return t}else if("#"===n){if(t.id===e.substr(1))return t}else if("["===n&&t.hasAttribute(e.substr(1,e.length-2)))return t;return!1},i=function(t){for(var e,n=String(t),o=n.length,r=-1,a="",c=n.charCodeAt(0);++r<o;){if(e=n.charCodeAt(r),0===e)throw new InvalidCharacterError("Invalid character: the input contains U+0000.");a+=e>=1&&31>=e||127==e||0===r&&e>=48&&57>=e||1===r&&e>=48&&57>=e&&45===c?"\\"+e.toString(16)+" ":e>=128||45===e||95===e||e>=48&&57>=e||e>=65&&90>=e||e>=97&&122>=e?n.charAt(r):"\\"+n.charAt(r)}return a},s=function(t,e){var n;return"easeInQuad"===t&&(n=e*e),"easeOutQuad"===t&&(n=e*(2-e)),"easeInOutQuad"===t&&(n=.5>e?2*e*e:-1+(4-2*e)*e),"easeInCubic"===t&&(n=e*e*e),"easeOutCubic"===t&&(n=--e*e*e+1),"easeInOutCubic"===t&&(n=.5>e?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1),"easeInQuart"===t&&(n=e*e*e*e),"easeOutQuart"===t&&(n=1- --e*e*e*e),"easeInOutQuart"===t&&(n=.5>e?8*e*e*e*e:1-8*--e*e*e*e),"easeInQuint"===t&&(n=e*e*e*e*e),"easeOutQuint"===t&&(n=1+--e*e*e*e*e),"easeInOutQuint"===t&&(n=.5>e?16*e*e*e*e*e:1+16*--e*e*e*e*e),n||e},f=function(t,e,n){var o=0;if(t.offsetParent)do o+=t.offsetTop,t=t.offsetParent;while(t);return o=o-e-n,o>=0?o:0},l=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},d=function(t){return t&&"object"==typeof JSON&&"function"==typeof JSON.parse?JSON.parse(t):{}},h=function(t,e){history.pushState&&(e||"true"===e)&&history.pushState({pos:t.id},"",window.location.pathname+t)};n.animateScroll=function(e,n,o){var a=c(a||r,o||{}),u=d(e?e.getAttribute("data-options"):null);a=c(a,u),n="#"+i(n.substr(1));var p,m,b,v=document.querySelector("[data-scroll-header]"),g=null===v?0:v.offsetHeight+v.offsetTop,O=t.pageYOffset,y=f(document.querySelector(n),g,parseInt(a.offset,10)),I=y-O,S=l(),A=0;h(n,a.updateURL);var Q=function(o,r,c){var u=t.pageYOffset;(o==r||u==r||t.innerHeight+u>=S)&&(clearInterval(c),a.callbackAfter(e,n))},C=function(){A+=16,m=A/parseInt(a.speed,10),m=m>1?1:m,b=O+I*s(a.easing,m),t.scrollTo(0,Math.floor(b)),Q(b,y,p)},H=function(){a.callbackBefore(e,n),p=setInterval(C,16)};0===t.pageYOffset&&t.scrollTo(0,0),H()};var p=function(t){var o=u(t.target,"[data-scroll]");o&&"a"===o.tagName.toLowerCase()&&(t.preventDefault(),n.animateScroll(o,o.hash,e,t))};return n.destroy=function(){e&&(document.removeEventListener("click",p,!1),e=null)},n.init=function(t){o&&(n.destroy(),e=c(r,t||{}),document.addEventListener("click",p,!1))},n});

function productListInit(cssWidth) {
	cssWidth = cssWidth || getViewport()[0];

	var $productList = $('.product-list:not(.product-list-comments, .product-list-compact)');
	var $productListCompact = $('.product-list-compact:not(.product-list-gifts)');
	var $productListDailyDeals = $('.product-list-daily-deals');
	var $productListLastVisited;


	switch(true) {
		case cssWidth >= 0 && cssWidth < 590:
			eq($productList, '.title', 2);
			eq($productListDailyDeals, '.price', 2);
			eq($productListDailyDeals, '.countdown', 2);
			eq($productList, '.item > .spc', 2);
			eq($productListCompact, '.name', 2);
			break;

		case cssWidth >= 590 && cssWidth < 768:
			eq($productList, '.title', 3);
			eq($productListDailyDeals, '.price', 3);
			eq($productListDailyDeals, '.countdown', 3);
			eq($productList, '.item > .spc', 3);
			break;

		case cssWidth >= 768 && cssWidth < 960:
			$productListLastVisited = $('.product-list-last-visited');
			$productList = $productList.not($productListLastVisited);

			eq($productList, '.title', 3);
			eq($productListDailyDeals, '.price', 3);
			eq($productListDailyDeals, '.countdown', 3);
			eq($productList, '.item > .spc', 3);

			eq($productListLastVisited, '.title', 4);
			eq($productListLastVisited.add('.product-list-compact'), '.item > .spc', 4);
			break;

		case cssWidth >= 960:
			$productListLastVisited = $('.product-list-last-visited');
			$productList = $productList.not($productListLastVisited).not($productListDailyDeals);

			eq($productList, '.title', 3);
			eq($productList, '.item > .spc', 3);

			eq($productListDailyDeals, '.title', 4);
			eq($productListDailyDeals, '.countdown', 3);
			eq($productListDailyDeals, '.price', 4);
			eq($productListDailyDeals, '.item > .spc', 4);

			eq($productListLastVisited, '.title', 5);
			eq($productListLastVisited.add('.product-list-compact'), '.item > .spc', 5);
			break;

		default:
			break;
	}
}

$(document).ready(function(){

	var $w = $(window);
	var cssWidth = 0;
	var viewportWidth = 0;
	var oldWidth = 0;

	var carouselMobileHeight = Math.ceil((140 / 320) * 100) + '%';
	var carouselDesktopHeight = Math.ceil((340 / 1035) * 100) + '%';

	(function(){
		cssWidth = getViewport()[0];
		viewportWidth = $w.width();

		var timer = null,
			levels = [
				{
					from: 0,
					to: 589,
					callback: function(){
						$("#hpCarousel ul.reset").trigger("configuration", ["items.height", carouselMobileHeight]).trigger("updateSizes");

						eq($('.crossroad-articles'), '.name', 2);
						eq($('.crossroad-articles'), '.spc', 2);

						eq($('.holidays'), '.spc', 2);

						if (cssWidth >= 480)
							eq($('.crossroad-icon-box'), 'li', 2);

						$('.product-list-banner img.mobile').trigger('imgProductListLazy');
					}
				},
				{
					from: 590,
					to: 767,
					callback: function(){
						$("#hpCarousel ul.reset").trigger("configuration", ["items.height", carouselMobileHeight]).trigger("updateSizes");

						eq($('.crossroad-articles'), '.name', 3);
						eq($('.crossroad-articles'), '.spc', 3);
						eq($('.crossroad-stores'), '.spc', 2);
						eq($('.crossroad-icon-box'), 'li', 2);

						eq($('#footer-banners'), '.text-wrap:first-child', 2);
						eq($('#footer-banners'), '.text-wrap:not(:first-child)', 2);

						eq($('.holidays'), '.spc', 3);

						$('.product-list-banner img.mobile').trigger('imgProductListLazy');
					}
				},
				{
					from: 768,
					to: 959,
					callback: function(){
						$("#hpCarousel ul.reset").trigger("configuration", ["items.height", carouselDesktopHeight]).trigger("updateSizes");

						eq($('.crossroad-articles'), '.name', 3);
						eq($('.crossroad-articles'), '.spc', 3);
						eq($('.crossroad-stores'), '.spc', 3);
						eq($('.crossroad-icon-box'), 'li', 3);

						eq($('#footer-banners'), '.text-wrap:first-child', 2);
						eq($('#footer-banners'), '.text-wrap:not(:first-child)', 2);

						eq($('.holidays'), '.spc', 4);

						$('.product-list-banner img.desktop').trigger('imgProductListLazy');
					}
				},
				{
					// >= 960
					callback: function(){
						$("#hpCarousel ul.reset").trigger("configuration", ["items.height", carouselDesktopHeight]).trigger("updateSizes");

						eq($('.crossroad-articles'), '.name', 3);
						eq($('.crossroad-articles'), '.spc', 3);
						eq($('.crossroad-stores'), '.spc', 3);
						eq($('.crossroad-icon-box:not(.two-cols .crossroad-icon-box)'), 'li', 4);
						eq($('.two-cols .crossroad-icon-box'), 'li', 3);

						eq($('#footer-banners'), '.text-wrap:first-child', 4);
						eq($('#footer-banners'), '.text-wrap:not(:first-child)', 4);

						eq($('.holidays'), '.spc', 4);

						$('.product-list-banner img.desktop').trigger('imgProductListLazy');
					}
				}
			];

		$(window).bind('resize firstcall', function(e) {
			timer = clearTimeout(timer);
			timer = setTimeout(function() {
				cssWidth = getViewport()[0];
				viewportWidth = $w.width();

				if(oldWidth != cssWidth) {
					$('.product-list .name, .product-list .item > .spc, .crossroad-stores .spc, .crossroad-icon-box li, .crossroad-articles .name, .crossroad-articles .spc, #footer-banners .text-wrap').css('height', '');

					productListInit(cssWidth);

					// Přechod tablet <-> desktop
					if(oldWidth < 960 && cssWidth >= 960) {
						headerBoxesDestroy();
						smoothScroll.init();

						$('#menu-wrap li.hasSub').collapsable('destroy');

						// sticky
						if (($sticky = $('.order-summary-sticky')).length > 0) {
							$sticky.trigger('sticky_kit:detach');
							$sticky.stick_in_parent();
						}

						// lišta na mobilu
						$(window, document).unbind('scroll', navFix);
					}
					else if (oldWidth == 0 || (oldWidth >= 960 && cssWidth < 960)) {
						headerBoxesInit();
						smoothScroll.init({
							offset:50
						});

						$('#menu-wrap li.hasSub').collapsable({
							grouped: true,
							control: '.root',
							box: '.sub'
						});

						// sticky
						if (($sticky = $('.order-summary-sticky')).length > 0) {
							$sticky.trigger('sticky_kit:detach');
							if (cssWidth >= 768) {
								$sticky.stick_in_parent({
									offset_top: 65
								});
							}
						}

						// lišta na mobilu
						$(window, document).bind('scroll', navFix);
					}

					for(var i = 0, l = levels.length; i < l; i++ ) {
						if( i === l-1 || levels[i].from <= cssWidth && cssWidth <= levels[i].to ) {
							levels[i].callback();
							break;
						}
					}

					// zobrazení lazyload obrázku při změně velikosti okna
					carouselImageShow($("#hpCarousel ul.reset").triggerHandler('currentVisible'));

					oldWidth = cssWidth;
				}
			}, 200);
		})
		.triggerHandler('firstcall');
	})(); // end width check

	// Lazy load
	// fade in přes css (preloaded a loaded classy)
	$('img.lazy:not(.carousel img, .product-list-banner img, #main-menu img)').lazyload({
		failure_limit: 100,
		threshold: 250
	});

	// hp carousel - dvě verze bannerů dle rozlišení
	$('#hpCarousel img.desktop.lazy').lazyload({
		event: 'imgLazyDesktop',
		custom_event_immediate_load: false,
		threshold: 250
	});
	$('#hpCarousel img.mobile.lazy').lazyload({
		event: 'imgLazyMobile',
		custom_event_immediate_load: false,
		threshold: 250
	});

	// carousel obecně, pouze jeden obrázek
	$('.carousel:not(#hpCarousel) img.lazy').lazyload({
		event: 'carousel',
		custom_event_immediate_load: false,
		threshold: 250
	});

	// banner pod výpisem produktů
	$('.product-list-banner img.lazy').lazyload({
		event: 'imgProductListLazy',
		custom_event_immediate_load: false,
		threshold: 250
	});

	// obrázky v menu
	$('#main-menu img.lazy').lazyload({
		event: 'imgMainMenu',
		custom_event_immediate_load: false,
		threshold: 250
	});

	// Ukotvení lišty na mobilu
	var $body = $('body');
	var limitNav = 45; // $('#header').outerHeight();
	var navFix = function() {
		var x = (window.pageYOffset !== undefined) ? window.pageYOffset : document.documentElement.scrollTop;
		if(x > limitNav)
			$body.addClass('fixed-nav');
		else
			$body.removeClass('fixed-nav');
	};

	// Offcanvas menu
	var $html = $('html');
	var $menu = $('#main-menu');
	var $headerBoxes = $('.header-box');
	var $offCanvasMenu = $('#menu-wrap');
	var scroll = null;
	var menuHover = null;
	var $menuExt = $('.ca-ext-menu a');

	$offCanvasMenu.collapsable({
		extLinks: '.ca-ext-menu a',
		extLinksPreventDefault: true,
		onExpand: fixContent,
		onCollapse: releaseContent
	});

	function fixContent() {
		$headerBoxes.removeClass('opened');

		scroll = $(window).scrollTop(); // puvodni pozice v dokumentu
		$('html, body').scrollTop(0); // nascrollujeme nahoru (aby menu zacinalo nahore)

		$body.addClass('menu-opened');
		$body.append('<div id="ca-overlay"></div>');
		$('#ca-overlay').on('click', function() {
			$offCanvasMenu.collapsable('collapseAll');
			$menuExt.removeClass('ca-ext-active');
		});
	}
	function releaseContent() {
		$body.removeClass('menu-opened');

		// navrat scrollu na puvodni pozici
		if(scroll !== null) {
			$('html, body').scrollTop(0); // nascrollujeme nahoru (protože obsah má být aktuálně na 0)

			if($html.hasClass('csstransforms3d') && $html.hasClass('csstransitions')) // pokud animujeme menu, musime pockat
				setTimeout(function() {
					$('html, body').stop().animate({
						scrollTop: scroll
					}, 400);
				}, 400);
			else
				$('html, body').stop().animate({
					scrollTop: scroll
				}, 400);
		}

		$('#ca-overlay').remove(); // dynamicky tvoreny, nelze ulozit predem
	}

	if($html.hasClass('touchevents')) {
		$menu.find('touchHover').removeClass('touchHover');
		$menu.find('.hasSub a.root').bind('touchstart', function(e) {
			if(cssWidth >= 768) {
				e.preventDefault();
				e.stopPropagation();

				if(!$(this).closest('li').hasClass('touchHover')) {
					$menu.find('li.touchHover').removeClass('touchHover');
					$(this).closest('li')
						.addClass('touchHover')
						.find('img.lazy').trigger('imgMainMenu');

					$headerBoxes.removeClass('opened');
				}

				else {
					var href = $(this).attr('href');
					if(typeof href != 'undefined') {
						window.location = href;
					}
					else {
						$(this).closest('li').removeClass('touchHover');
					}
				}

				return false;
			}
		});
		$menu.bind('click touchstart', function(e) {
			e.stopPropagation();
		})
	}

	$menu.find('.hasSub').hover(function() {
		$(this).find('img.lazy').trigger('imgMainMenu');
	});

	$menu.hover(
		function() {
			menuHover = setTimeout(function() { $('#main-menu').addClass('hover'); }, 500); // 100 zpoždění + 300 délka trvání efektu + nějaká rezerva
		},
		function() {
			clearTimeout(menuHover);
			$(this).removeClass('hover');
		}
	);

	// COLLAPSABLE
	function headerBoxesInit() {
		$headerBoxes.collapsable({
			grouped: true,
			classNames: {
				expanded:  'opened',
				collapsed: ''
			},
			onExpanded: function() {
				if($(this).attr('id') == "search-box") {
					$('#q').focus();
				}
			},
			onCollapse: function() {
				if($(this).attr('id') == "search-box")
					$('#q').blur();
			}
		});
	}
	function headerBoxesDestroy() {
		$headerBoxes.collapsable('destroy');
	}

	$('#q').focus(function() {
		$('#search-box').addClass('focus');
	});
	$('#q').blur(function() {
		$('#search-box').removeClass('focus');
	});

	$html.bind('click touchstart', function(e) {
		if (e.originalEvent) {
			// header boxy
			var $target = $(e.originalEvent.target).closest('.header-box');

			if (! $target.length) // mělo by stačit takto, protože o případné zavření se postará grouped parametr collapsable
				$headerBoxes.removeClass('opened');
		}

		$menu.find('li.touchHover').removeClass('touchHover');
	});

	$('.collapsable:not(#param-filter)').collapsable({
		extLinks: '.ca-ext'
	});

	// OPEN BOX
	var openBoxCheckoutCallback = function(collapse) {
		var $el = $(this).closest('form').find('[data-text-register]');

		if (collapse) {
			$el.each(function() {
				$(this).text($(this).data('text-default'));
			});
		}
		else {
			$el.each(function() {
				$(this).text($(this).data('text-register'));
			});
		}
	};
	window.openBoxCheckoutCallback = openBoxCheckoutCallback;

	$('.open-box').each(function(){
		var $this = $(this);
		var $chck = $('.heading input', this);
		var $box = $('.box', $this);
		var boxHeight = $box.height();
		var attr = $chck.is(':checked');
		var size = 0;
		$('.box :input', $this).each(function(){
			if ($(this).is(':text') && $(this).val() != '') {
				size++;
			}
			else if ($(this).attr('checked')) {
				if($(this).val()!=0) {
					size++;
				}
			}
		});

		if (attr || (size != 0 && !$this.hasClass('notAutoOpen'))) {
			$chck.prop('checked', true);
			$this.data('status', true);
			$('.heading', $this).addClass('open');

			if ($this.data('callback') && $this.data('callback') in window)
				window[$this.data('callback')].call($this, false);
		}
		else {
			$box.hide();
			$this.data('status', false);
			$('.heading', $this).removeClass('open');
		}

		$chck.click(function() {
			if ($this.data('callback') && $this.data('callback') in window)
				window[$this.data('callback')].call($this, $this.data('status'));


			if($this.data('status')) {
				$chck.prop('checked', false);
				$box.slideUp('fast', function() {
					$(document.body).trigger("sticky_kit:recalc");
				});
				$this.data('status', false);
				$('.heading', $this).removeClass('open');
			}
			else {
				$chck.prop('checked', true);
				$box.slideDown('fast', function() {
					$(document.body).trigger("sticky_kit:recalc");
				});
				$this.data('status', true);
				$('.heading', $this).addClass('open');
			}
		});
	});


	// carousel
	function carouselImageShow(visible) {
		if(visible) {
			if (cssWidth > 768)
				visible.find('img').trigger('imgLazyDesktop');
			else
				visible.find('img').trigger('imgLazyMobile');
		}
	}

	$('#hpCarousel').each(function() {
		var $this = $(this);
		var $carousel = $this.find('> ul.reset');

		var $paging = $('<p class="pager"></p><a href="#" class="prev">Předchozí</a> <a href="#" class="next">Následující</a>');

		var height = (cssWidth > 768) ? carouselDesktopHeight : carouselMobileHeight;

		$this.append($paging);

		$carousel.carouFredSel({
			circular: true,
			infinite: true,
			responsive: true,
			items: {
				visible: {
					min:1,
					max:1
				},
				width: 1035,
				height: height
			},
			scroll: {
				pauseOnHover: true,
				onBefore: function(data) {
					carouselImageShow(data.items.visible);
				}
			},
			auto: 5000,
			prev: {
				button: $paging.filter('.prev'),
				key: 'left'
			},
			next: {
				button: $paging.filter('.next'),
				key: 'right'
			},
			pagination: $paging.filter('.pager')
		});
	});

	$('.carousel:not(#hpCarousel)').each(function() {
		var $this = $(this);
		var $carousel = $this.find('> ul.reset');

		var $paging = $('<p class="pager"></p><a href="#" class="prev">Předchozí</a> <a href="#" class="next">Následující</a>');
		var width = $this.data('carousel-width') || 790;
		var height = $this.data('carousel-height') || 360;

		$this.append($paging);

		$carousel.carouFredSel({
			circular: false,
			infinite: false,
			responsive: true,
			items: {
				visible: {
					min:1,
					max:1
				},
				width: width,
				height: Math.ceil((height / width) * 100) + '%'
			},
			scroll: {
				pauseOnHover: true,
				onBefore: function(data) {
					data.items.visible.find('img').trigger('carousel');
				}
			},
			auto: false,
			prev: {
				button: $paging.filter('.prev'),
				key: 'left'
			},
			next: {
				button: $paging.filter('.next'),
				key: 'right'
			},
			pagination: $paging.filter('.pager')
		});
	});

	// STEPS LIST
	$('#step-list').each(function(){
		var $prev = $(this).find('li.prev');
		var $next = $(this).find('li.next');
		var $step0 = $(this).find('li#step0:not(.prev)');

		var $btnNext = $('.buttons .btn.next-step');
		var $btnPrev = $('.buttons .btn.prev-step');
		var $btnCart = $('#basket-box a');

		$next.click(function(){
			$btnNext.trigger('click');
		});
		$prev.click(function(){
			window.location = $btnPrev.attr('href');
		});
		$step0.click(function(){
			window.location = $btnCart.attr('href');
		});
	});

	// zrcadlení hodnoty
	$('[data-copy-value]')
		.bind('change keyup', function() {
			$( $(this).data('copy-value')).val( $(this).val() );
		})
		.triggerHandler('change');

	// řazení
	$('#sort').change(function() {
		var id = $(this).val();
		var href = $('#' + id).attr('href');
		if(typeof href != 'undefined')
			window.location = href;
	});

	$('#param-filter').each(function() {
		var $nicescroll = $(this).find('.nicescroll');

		var nicescrollResize = function() {
			$nicescroll.getNiceScroll().resize();
		}

		$(this).collapsable({
			onExpanded: nicescrollResize,
			onCollapse: nicescrollResize
		});

		$(this).find('.item:not(.filter-selected)').collapsable({
			control: 'h3',
			box: 'ul, .box',
			onExpanded: nicescrollResize,
			onCollapse: nicescrollResize
		});

		// nicescroll
		$nicescroll.niceScroll({
			autohidemode: false,
			bouncescroll: false,

			cursorcolor: '#c8c5c6',
			cursorwidth: 10,
			cursorborder: 0,
			cursorborderradius: 0,
			cursorfixedheight: 25,

			background: '#eeedee'
		});

		// zobrazení až po inicializaci, zabraňuje probliknutí špatně napozicovaného scrollbaru
		setTimeout(function() {
			$nicescroll.getNiceScroll().show();
		}, 200);

		$('.js-filter').each(function() {
			var $ul = $(this).find('.js-filter-list');
			var $liText = $(this).find('li .js-filter-text');
			var $input = $(this).find('input.js-filter-input');
			var $visible = $([]);
			var $notFound = $('<li class="noresults">' + $(this).data('js-filter-noresults') + '</li>');

			var data = [];
			var text;
			$liText.each(function(i) {
				text = $(this).data('text');
				if (text) {
					data[i] = String(text).toUpperCase().split('|');
				} else {
					data[i] = [];
				}

			});

			var filter = '';

			$input.focus(function() {
				if(getViewport()[1] < 768)
					$('html, body').stop().animate({
						scrollTop: Math.round($input.offset().top) - 47 // - 47 výška fixované hlavičky (45) a nějaká rezerva (2)
					}, 400);
			});
			$input.keyup(function() {
				filter = $(this).val().toUpperCase();

				// odstranění filtrovaných znaků, přebytečných mezer a nahrazení veškeré diakritiky
				filter = filter.replace(/[\.'´!\*\(\):&\|"]/g, '');
				filter = filter.replace(/[ ]{2,}/g, ' ');
				filter = filter.latinise();

				if (filter == '') {
					$liText.closest('li').show();
				}
				else {
					$liText.closest('li').hide();
					$visible = $liText.filter(function(i) {
						return data[i].indexOfSubstr(filter) > -1;
					}).closest('li');

					if ($visible.length == 0) {
						$ul.append($notFound);
					}
					else {
						$notFound.remove();
					}

					$visible.show();
				}

				$ul.getNiceScroll().resize();

			}).triggerHandler('keyup');

		});

	});

	function removeURLParameter(url, parameter) {
		//prefer to use l.search if you have a location/link object
		var urlparts= url.split('?');
		if (urlparts.length>=2) {

			var prefix= encodeURIComponent(parameter)+'=';
			var pars= urlparts[1].split(/[&;]/g);

			//reverse iteration as may be destructive
			for (var i= pars.length; i-- > 0;) {
				//idiom for string.startsWith
				if (pars[i].lastIndexOf(prefix, 0) !== -1) {
					pars.splice(i, 1);
				}
			}

			url= urlparts[0]+'?'+pars.join('&');
			return url;
		} else {
			return url;
		}
	}

	$('#param-filter .slider').each(function(){
		var $slider = $(this);
		var $form = $slider.closest('form');
		var sliderMin = $slider.data('min');
		var sliderMax = $slider.data('max');
		var sliderStep = $slider.data('step');
		var sliderDiff = $slider.data('min-diff') || sliderStep;

		var priceThousandSep = $slider.data('thousand-sep') || ' ';
		var priceDecimalSep = $slider.data('decimal-sep') || ',';
		var priceDecimals = $slider.data('decimals') || 0;

		// formulářové prvky pro hodnoty
		var $from = $slider.find('.slider-input-min');
		var $to   = $slider.find('.slider-input-max');

		// placeholder pro mobil
		var $fromSpan = $slider.find('.value-min');
		var $toSpan   = $slider.find('.value-max');

		//startovni hodnoty slideru
		var initMinVal = parseNumber($from.val(), priceDecimalSep, priceThousandSep);
		var initMaxVal = parseNumber($to.val(), priceDecimalSep, priceThousandSep);

		function updateSliderUrl(sMin, sMax) {
			var url = window.location.href;
			var params = '';
			url = removeURLParameter(url,$from.attr('name'));
			url = removeURLParameter(url,$to.attr('name'));
			url = url.split('?');

			if (sMin != sliderMin) {
				params += $from.attr('name') + '=' + String(sMin);
			}
			if (sMax != sliderMax) {
				params += ((sMin != sliderMin) ? '&' : '') + $to.attr('name') + '=' + String(sMax);
			}

			window.location.href = String(url[0] + (params || url[1] ? '?' : '') + (url[1] ? url[1] : '') + (params && url[1] ? '&' : '') + params);
		}

		$form.on('submit', function(e) {
			if ((initMinVal != parseNumber($from.val(), priceDecimalSep, priceThousandSep)) || (initMaxVal != parseNumber($to.val(), priceDecimalSep, priceThousandSep)))
				updateSliderUrl(parseNumber($from.val(), priceDecimalSep, priceThousandSep), parseNumber($to.val(), priceDecimalSep, priceThousandSep));
			e.preventDefault();
		});

		var slider = $slider.find('.slider-area').slider({
			range: true,
			min: sliderMin,
			max: sliderMax,
			step: sliderStep,
			values: [
				parseNumber($from.val(), priceDecimalSep, priceThousandSep),
				parseNumber($to.val(), priceDecimalSep, priceThousandSep)
			],
			animate: true,
			slide: function(e, ui) {
				if(ui.values[1] - ui.values[0] < sliderDiff){
					return false;
				}
				else {
					var from = formatNumber(ui.values[0], priceDecimals, priceDecimalSep, priceThousandSep);
					var to   = formatNumber(ui.values[1], priceDecimals, priceDecimalSep, priceThousandSep);

					$from.val(from);
					$to.val(to);

					$fromSpan.html(from);
					$toSpan.html(to);
				}
			},
			start: function(e, ui) {
				initMinVal = ui.values[0];
				initMaxVal = ui.values[1];
			},
			stop: function(e, ui) {
				if ((initMinVal != ui.values[0]) || (initMaxVal != ui.values[1]))
					updateSliderUrl(ui.values[0], ui.values[1]);
			}
		});

		var timer = null;
		var priceFocus = false;
		var priceChange = false;
		$slider.find('.slider-input-min, .slider-input-max')
			.focus(function() {
				priceFocus = true;
				clearTimeout(timer);
			})
			.blur(function() {
				priceFocus = false;

				if (priceChange) {
					timer = setTimeout(function() {
						if ( ! priceFocus) {
							$form.submit();
						}
					}, 42);
				}
			})
			.change(function() {
				var from = parseNumber($from.val(), priceDecimalSep, priceThousandSep);
				var to = parseNumber($to.val(), priceDecimalSep, priceThousandSep);

				if (from < sliderMin || ! isFinite(from)) from = sliderMin;
				if (to   > sliderMax || ! isFinite(to))   to   = sliderMax;

				if (from <= to) {
					slider.slider('values', [from, to]);

					$from.val( formatNumber(from, priceDecimals, priceDecimalSep, priceThousandSep) );
					$to.val( formatNumber(to, priceDecimals, priceDecimalSep, priceThousandSep) );
				}
				else {
					slider.slider('values', [to, from]);

					$from.val( formatNumber(to, priceDecimals, priceDecimalSep, priceThousandSep) );
					$to.val( formatNumber(from, priceDecimals, priceDecimalSep, priceThousandSep) );
				}

				priceChange = true;

			}).triggerHandler('change');

		$slider.find('.slider-placeholder').show();
	});

	// star rating
	$('.js-star-rating').each(function() {
		var $stars = $(this).find('a');
		var $rating = $(this).find('.rating');
		var $rate = $(this).find('.rating-input');

		$rate.hide();
		$rating.width(parseInt($rate.find('input').val())*20 + '%');

		$(this)
			.off('click', 'a')
			.find('.star-rating')
			.css('display', 'inline-block')
			.on('click', 'a', function(){
				var i = $stars.index($(this)) + 1;
				$rating.width(i*20+'%');
				$('input', $rate).val(i);
				return false;
			});
	});


	// number
	$('.inp-number').each(function() {
		var $fix = $(this);
		var $input = $fix.find('input');

		var $inc = $('<a href="#" class="inp-number-btn inc">+</a>');
		var $dec = $('<a href="#" class="inp-number-btn dec">&minus;</a>');

		var min = $input.attr('min') || 0;
		var max = $input.attr('max') || Number.MAX_VALUE;

		$fix.prepend($dec).append($inc);

		$inc.add($dec).bind('click', function(e) {
			var value = parseInt($input.val()) || 0;

			if ($(this).is('.inc'))
				value++;
			else
				value--;

			$input.val( value < min ? min : (value > max ? max : value) );

			e.preventDefault();
		});
	});

	// date
	// každá lokalizace může odesílat datum v jiném formátu (pořadí, oddělovače, ...) - lze řešit pomocí parametrů altField a altFormat, viz jQuery UI API
	$('.inp-date input').each(function() {
		var minDate = $(this).data('min-date') || null;
		var maxDate = $(this).data('max-date') || null;

		$('.inp-date input').datepicker({
			minDate: minDate,
			maxDate: maxDate
		});

	});
	$('.inp-date a').click(function(e) {
		e.preventDefault();

		$(this).closest('.inp-date').find('input').focus();
	});

	// taby s jednoduchou historií; neřešen deepLinking (zanoření tabů) ani více tabů na jedné stránce
	var historySupported =  (window.history && history.pushState && window.history.replaceState && !navigator.userAgent.match(/((iPod|iPhone|iPad).+\bOS\s+[1-4]|WebApps\/.+CFNetwork)/))

	if ($.ui && $.ui.tabs) {
		$('.js-tabs').tabs({
			create: function(e, ui) {
				if (historySupported) {
					var href = window.location.href;

					window.history.replaceState({
						jQueryUITabs: true,
						tabId: ui.panel.attr('id')
					}, document.title, href);
				}
			},
			activate: function(e, ui) {
				// pokud je podporovaná historie && pokud existuje originalEvent (click, v opačném případě šlo o přepnutí tabu na popstate)
				if (historySupported && e.originalEvent && e.originalEvent.type === 'click') {
					var href = window.location.href;

					if ((i = href.search(/#/)) != -1)
						href = href.substring(0, i);

					href = href + '#' + ui.newPanel.attr('id');

					window.history.pushState({
						jQueryUITabs: true,
						tabId: ui.newPanel.attr('id')
					}, document.title, href);
				}
			}
		});
		$(window).on('popstate', function(e) {
			var state = e.originalEvent.state || this.initialState;

			if (state && state.jQueryUITabs && ($tab = $('#' + state.tabId)).length) {
				var $tabs = $tab.closest('.js-tabs');
				var index = $tabs.find('a[href="#' + state.tabId + '"]').closest('li').index();

				$tabs.tabs('option', 'active', index);
			}

		});
	}


	// pročištění ui class na nezbytné minimum (pro odstranění dědění stylů dovnitř tabů
	$('.js-tabs, .js-tabs *').removeClass(function(index, cssclass) {
		var cssclass = cssclass.replace(/ui-tabs|ui-tabs-nav|ui-state-active|ui-tabs-hide|ui-tabs-panel/,'');
		var matches = cssclass.match(/ui-\S+/g) || [];
		return (matches.join(' '));
	});

	/* našeptávač vyhledávání
	 *   - skrývání a zobrazování by mělo být na základě přijatých dat z ajaxu
	 *   - při čekání na odpověď lze inputu #q přidat class 'loading' pro zobrazení spinneru na pozadí
	 **/
	$('#q').focus(function() {
		$('#search-box .suggest-box').addClass('show');
	});
	$('#q').blur(function() {
		$('#search-box .suggest-box').removeClass('show');

		$(this).removeClass('loading');
		$('#search-box .suggest-box a.active').removeClass('active');
	});
	$('#q').keydown(function(e) {
		switch (e.keyCode) {
			case 40: // Down
			case 38: // Up
				var $a = $('#search-box .suggest-box a');
				var $active = $a.filter('.active');
				var i = $a.index($active);

				$a.eq(i).removeClass('active');
				if (i === -1) { // není nic active, vybereme první/poslední
					if (e.keyCode === 40)
						$a.first().addClass('active');
					else
						$a.last().addClass('active');
				}
				else if (i === 0 && e.keyCode === 38) {} // NOP, aktivní je první + šipka nahoru => nic není aktivní
				else {
					if (e.keyCode === 40)
						$a.eq(i+1).addClass('active');
					else
						$a.eq(i-1).addClass('active');
				}

				break;

			case 13: // Enter
				var $a = $('#search-box .suggest-box a.active');
				if ($a.length) {
					location.href = $a.attr('href');

					e.preventDefault();
				}

				break;

			default:
				$(this).addClass('loading');
				break;
		}
	});
	$('#search-box').on('mouseenter', 'a', function() {
		$('#search-box .suggest-box a.active').removeClass('active');
		$(this).addClass('active');
	});

	//
	$('.color-preview').bind('click', function() {
		$(this).addClass('jsPreview');
	});
	$('.color-preview').bind('mouseout', function() {
		$(this).removeClass('jsPreview');
	});

	// thickbox
	box = new $.pdBox();
	box.control($('.thickbox'));
	box.width = 900;

	// thickbox
	box = new $.pdBox();
	box.control($('.thickbox-1035'));
	box.width = 1035;

	// thickbox 500 ("doporučit známému", "hlídat dostupnost")
	box500 = new $.pdBox();
	box500.control($('.thickbox-500'));
	box500.width = 500;

	// thickbox 750 ("chci kupón")
	box750 = new $.pdBox();
	box750.control($('.thickbox-750'));
	box750.width = 750;

	// thickbox prebasket
	var boxPrebasket = new $.pdBox();
	boxPrebasket.width = 500;
	boxPrebasket.className = "pd-box-prebasket";
	$('.ajax-prebasket')
		.pdAjaxForm({
			beforeSend: function($box, $form, data, option){
				// pokud je potřeba přidat do dat další parametr
				//option.data = data + '&neco';
				var $html = $('<div class="ajax-loader"></div>');
				boxPrebasket.openHtml($html);
			},
			success: function(response){
				boxPrebasket.openHtml(response);
			}
		});

	// thickbox alert
	boxAlert = new $.pdBox();
	boxAlert.control($('.thickbox-alert'));
	boxAlert.width = 500;
	boxAlert.onLoad = function() {
		var that = this;
		var scroll = that.$html.scrollTop() || that.$body.scrollTop();

		var bodyWidth = that.$body.width();
		var viewportHeight = getViewport()[1];

		var boxHeight = this.window.content.outerHeight(false);
		var top = 5;

		if (boxHeight < viewportHeight - 2*that.margin) {
			top = scroll + (viewportHeight - boxHeight - 2*that.margin) * 0.4 + that.margin;
		}
		else {
			top = bodyWidth > 850 ? 35 : 5;
		}

		this.window.content.find('.pd-box-close').focus();

		that.window.elem.css({top: top+"px"});
	};

	/**
	 * Hezčí (a chytřejší) "náhrada" za alert
	 * @param overlay      boolean hodnota, zda lze box zavřít pomocí kliknutí na šedou oblast okolo
	 * @param scrollToEl   selektor elementu, na který se zascrolluje po zavření okna
	 * @param title        nadpis v thickboxu
	 * @param msg          zpráva v thickboxu
	 * @param btn          text tlačítka pro zavření, defaultní hodnota je "Ok"
	 */
	window.tbAlert = function(overlay, scrollToEl, title, msg, btn) {
		btn = btn || 'Ok';

		var html = '<h2 class="center">' + title + '</h2>';
		html += '<p class="center">' + msg + '</p>';
		html += '<p class="center"><a href="#pd-box-close" class="btn pd-box-close"><span>' + btn + '</span></a></p>';

		boxAlert.openHtml(html);

		if (! overlay) {
			boxAlert.overlay.off();
		}

		if (scrollToEl && $(scrollToEl).length) {
			boxAlert.onClose = function() {
				smoothScroll.animateScroll(null, scrollToEl);
			};
		}
		else {
			boxAlert.onClose = null;
		}
	};
	// Vzorové použití
	//if (typeof tbAlert == 'function') {
	//	tbAlert(false, '#conditions', 'Upozornění', 'Před dokončením objednávky je potřeba odsouhlasit obchodní podmínky.');
	//}
	//else {
	//	alert('Před dokončením objednávky je potřeba odsouhlasit obchodní podmínky.');
	//}


	$(document).on('click', '#pd-box-window .pd-box-close', function(e) {
		e.preventDefault();
		$('#pd-box-close').trigger('click');
	});

	// thickbox pro foto
	if ($.prettyPhoto) {
		$("a[data-pp]").prettyPhoto({
			hook: 'data-pp',
			theme: 'pp_parfums',
			animation_speed: 'fast',
			allow_expand: false,
			show_title: false,
			social_tools: false,
			deeplinking: false,
			default_height: 380
		});
	}

	// masonry pro nové komentáře

	if ($().masonry) {
		$('.product-list-comments').masonry({
			itemSelector: '.item',
			columnWidth: '.item',
			percentPosition: true
		});
	}

	// countdown
	$('.product-list-countdown').each(function() {
		var $this = $(this);
		var texts = {
			hours:       $this.data('countdown-hours'),
			minutes:     $this.data('countdown-minutes'),
			offerEnded:  $this.data('countdown-offer-ended'),
			lessThanMin: $this.data('countdown-less-than-minute')
		};

		$(this).find('.item').each(function() {
			var $item = $(this);
			var $countdown = $item.find('.countdown');
			var diff = $item.data('countdown-value');
			var time = new Date();
			time = new Date(time.getTime() + diff * 60*1000 - 1000); // oprava problému, kdy občas byl odpočet z 2m 0s vs 1m 60s

			if (! diff)
				return true;

			$item.find('.countdown-value').countdown({
				date: time,
				render: function(date) {
					if (date.hours === 0) {
						$countdown.addClass('less-than-hour');
					}

					if (date.hours === 0 && date.min === 0) {
						this.el.innerHTML = texts.lessThanMin;
					}
					else {
						this.el.innerHTML = date.hours + ' ' + texts.hours + ' ' + date.min + ' ' + texts.minutes;
					}

					productListInit();
				},
				refresh: 60*1000,
				onEnd: function() {
					$item.addClass('disabled');
					$item.find('.btn')
						.prop('disabled', true)
						.addClass('disabled');
					$countdown.html(texts.offerEnded);
				}
			});
		});


	});

	// sdílení
	$('#sharrre').each(function() {
		var renderButton = function(api, options) {
			if (options.total) {
				$(api.element).html('<a href="#" class="btn btn-s btn-grey ' + $(api.element).data('ico') + '"><span class="out">' + $(api.element).data('text') + '</span> ' + api.shorterTotal(options.total) + '&times;</a>');
			}
			else {
				$(api.element).html('<a href="#" class="btn btn-s btn-grey  ' + $(api.element).data('ico') + '"><span class="out">' + $(api.element).data('text') + '</span></a>');
			}
		}

		$('#sharrre-fb').sharrre({
			share: {
				facebook: true
			},
			template: ' ',
			render: renderButton,
			enableHover: false,
			click: function(api, options){
				api.simulateClick();
				api.openPopup('facebook');
			}
		});
		$('#sharrre-pt').sharrre({
			share: {
				pinterest: true
			},
			url: 'http://www.parfums.cz/',
			template: ' ',
			render: renderButton,
			enableHover: false,
			buttons: {
				pinterest: {
					media: $('#sharrre-pt').data('media'),
					description: $('#sharrre-pt').data('description')
				}
			},
			click: function(api, options){
				api.simulateClick();
				api.openPopup('pinterest');
			}
		});
		$('#sharrre-tw').sharrre({
			share: {
				twitter: true
			},
			template: ' ',
			render: renderButton,
			enableHover: false,
			buttons: { twitter: { via: $('#sharrre-tw').data('via') }},
			click: function(api, options){
				api.simulateClick();
				api.openPopup('twitter');
			}
		});
		$('#sharrre-gp').sharrre({
			share: {
				googlePlus: true
			},
			urlCurl: '',
			template: ' ',
			render: renderButton,
			enableHover: false,
			click: function(api, options){
				api.simulateClick();
				api.openPopup('googlePlus');
			}
		});
	});

	// varianty na detailu produktu US
	$('.available-variants').each(function() {
		var $radio = $(this).find(':radio');
		var $variants = $(this).find('.variant');

		var priceThousandSep = $(this).data('thousand-sep');
		var priceDecimalSep = $(this).data('decimal-sep');

		var $priceVoucher = $('#variant-voucher-price');
		var $price = $('#variant-price');

		$radio.change(function() {
			var $variant = $(this).closest('.variant');
			var priceVoucher = $variant.data('price-voucher');
			var price = $variant.data('price');

			$variants.removeClass('active');
			$variant.addClass('active');

			$priceVoucher.html(formatNumber(priceVoucher, 'auto', priceDecimalSep, priceThousandSep));
			$price.html(formatNumber(price, 'auto', priceDecimalSep, priceThousandSep));
		});

		$radio.filter(':checked').triggerHandler('change');
	});


	// doprava a platba
	$(function () {
		var productsPrice = $('#order-price').data('price-products');
		var priceThousandSep = $('#order-price').data('thousand-sep');
		var priceDecimalSep = $('#order-price').data('decimal-sep');
		var $priceDelivery = $('#price-delivery');
		var $pricePayment = $('#price-payment');
		var $priceTotal = $('#price-total');

		var deliveryFee = 0;
		var paymentFee = 0;

		function orderPriceCalc() {
			deliveryFee ? $('.price-delivery-wrap').show() : $('.price-delivery-wrap').hide();
			paymentFee  ? $('.price-payment-wrap').show()  : $('.price-payment-wrap').hide();

			var price = productsPrice + deliveryFee + paymentFee;

			$priceDelivery.html(formatNumber(deliveryFee, 'auto', priceDecimalSep, priceThousandSep));
			$pricePayment.html(formatNumber(paymentFee, 'auto', priceDecimalSep, priceThousandSep));
			$priceTotal.html(formatNumber(price, 'auto', priceDecimalSep, priceThousandSep));
		}

		var $deliveryMethodsLevel2 = $('.delivery-methods .child-methods .method');
		var $deliveryRadios = $('.delivery-methods :radio');

		var $paymentMethods = $('.payment-methods').find('> .method');
		var $paymentRadios = $paymentMethods.find('> .title :radio');
		$('.payment-methods').each(function() {
			var $paymentMethods = $(this).find('> .method');
			var $paymentRadios = $paymentMethods.find('> .title :radio');
			$paymentRadios.change(function() {
				var $oldMethod = $paymentMethods.filter('.active').removeClass('active');
				var $method = $paymentMethods.has(this).addClass('active');

				// slideUp / slideDown
				$oldMethod.find('> .method-expand').slideUp();
				$method.find('> .method-expand').slideDown();

				// přepočet ceny
				if ((paymentFee = $(this).data('fee')) !== undefined)
					orderPriceCalc();
			});
			$paymentRadios.filter(':checked').triggerHandler('change');
		});


		$('.delivery-methods, .delivery-methods .child-methods').each(function() {
			var $levelMethods = $(this).find('> .method');
			var $levelRadios = $levelMethods.find('> .title :radio');

			$levelRadios.bind('change init', function(e) {
				var $oldMethod = $levelMethods.filter('.active').removeClass('active');
				var $method = $levelMethods.has(this).addClass('active');

				// slideUp / slideDown
				$oldMethod.find('> .method-expand').slideUp(function() {
					// skrytí nižších úrovní než aktuální
					$oldMethod.find('.method-expand').hide();
				});
				$method.find('> .method-expand').slideDown();

				// odznačení druhé úrovně při změně první
				if (e.type != 'init' && $method.hasClass('level-1')) {
					$deliveryMethodsLevel2.removeClass('active');
					$deliveryMethodsLevel2.find(':radio').prop('checked', false);
				}

				// filtrování povolených plateb
				var allowedPayments = $(this).data('payments').split(',');
				var $disabledPayments = $paymentRadios.filter(function() {
						return ($.inArray($(this).val(), allowedPayments) === -1);
					});
				$paymentRadios.prop('disabled', false);
				$paymentMethods.removeClass('disabled');

				$disabledPayments.prop('disabled', true);
				$disabledPayments.each(function() {
					var $disabledMethod = $(this).closest('.method');

					$disabledMethod.addClass('disabled').removeClass('active');
					$disabledMethod.find('> .method-expand').slideUp();
				});

				// výchozí platba pro dopravu
				var defaultPayment = $(this).data('default-payment');

				// zrušíme výběr případné zakázané dopravě
				$paymentRadios.filter(':disabled').prop('checked', false);

				// pokud máme výchozí dopravu a není žádná vybraná, vybereme nějakou
				if (defaultPayment && $paymentRadios.filter(':checked').length == 0)
					$paymentRadios.filter('[value=' + defaultPayment + ']')
						.prop('checked', true)
						.triggerHandler('change');

				// přepočet ceny
				if ((deliveryFee = $(this).data('fee')) !== undefined)
					orderPriceCalc();
			});

			$levelRadios.filter(':checked').triggerHandler('init');
		});
	});

	// cookie compliance -- pouze pro smazání, elementu, nic jiného nedělá, je třeba konzultovat a dodělat!
	$('#cookie-compliance').find('a').click(function(e) {
		e.preventDefault();

		$('#cookie-compliance').remove();
		$('body').removeClass('cookie-compliance-opened');
	});

	// popup
	// pravděpodobně bude potřeba doplnit uložení nějaké cookie, aby se nezobrazil znovu; např. přes jQuery Cookie (nyní není includován) viz zakomentovaný kód
	// pokud cookie je, vůbec pak nedávat do kódu div popupu na straně serveru
	$('.popup').each(function() {
		var $popup = $(this);

		if (cssWidth >= 768)
			$popup.find('.lazy').trigger('appear');

		setTimeout(function() {
			$popup.removeClass('js-hide').addClass('slideInUp');
		}, 1000);

		$popup.find('.close a, .alt-close a').click(function(e) {
			e.preventDefault();

			$popup.removeClass('slideInUp').addClass('slideOutDown');
			//$.cookie('popupHide', '1', {expires:900});
		});
	});


	$('#balikomat').each(function() {
		var $balikomat = $('#balikomat');
		var $colR = $balikomat.find('.col-h-r');

		var $placeholder = $('#balikomat-city-placeholder');
		var $select = $balikomat.find('select');
		var $selectClone = $select.clone();

		$(document).on('click', '#balikomat-city a', function() {
			$colR.show();

			var id = $(this).attr('href');
			$placeholder.text( $(this).text() );

			$select.empty();
			$select.append( $selectClone.find(id).html() );
			$select.find('option').first().prop('selected', true);

			$('#pd-box-close').trigger('click');

			return false;
		});

		if ($balikomat.data('selected')) {
			var $option = $select.find('option[value="' + $balikomat.data('selected') + '"]');

			$colR.show();
			$option.prop('selected', true);
			$placeholder.text( $option.closest('optgroup').attr('label') );
		}
	});

});


$(window).load(function() {
	$('img.print-only').each(function() {
		$(this).attr('src', $(this).data('original'));
	});
});
