!function(e){function t(r){if(n[r])return n[r].exports;var c=n[r]={i:r,l:!1,exports:{}};return e[r].call(c.exports,c,c.exports,t),c.l=!0,c.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=3)}([function(e,t,n){"use strict";n.d(t,"a",function(){return c});var r=document.createElement("textarea");r.classList.add("scb-HiddenInput"),document.body.prepend(r);var c=function(e,t){r.value=t,r.focus(),r.select();try{!0===document.execCommand("copy")&&e.dispatchEvent(new Event("success"))}catch(e){console.error("Could not copy text")}}},function(e,t,n){"use strict";n.d(t,"b",function(){return o}),n.d(t,"a",function(){return i});var r=n(6),c=n.n(r),o="scb-Link",a=o+"--active",i=function(e){var t=document.createElement("a");return t.innerHTML=c.a,t.classList.add(o),t.addEventListener("success",function(e){t.classList.add(a),setTimeout(function(e){t.classList.remove(a)},500)}),t}},function(e,t,n){"use strict";function r(e){var t=new MutationObserver(function(n){n.forEach(function(n){var r=Array.from(n.addedNodes),c=!0,a=!1,i=void 0;try{for(var u,s=r[Symbol.iterator]();!(c=(u=s.next()).done);c=!0){var l=u.value;if(l.matches&&(l.matches(e)||l.querySelector(e)))return t.disconnect(),void o.get(e).forEach(function(e){e()})}}catch(e){a=!0,i=e}finally{try{!c&&s.return&&s.return()}finally{if(a)throw i}}})});t.observe(document.documentElement,{childList:!0,subtree:!0})}function c(e,t){if(null!==document.querySelector(e))return void t();var n=[];!0===o.has(e)?n=o.get(e):a.set(e,r(e)),n.push(t),o.set(e,n)}t.a=c;var o=new Map,a=new Map},function(e,t,n){var r=n(4);r.keys().forEach(function(e){r(e)})},function(e,t,n){function r(e){return n(c(e))}function c(e){var t=o[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}var o={"./after-branch-dropdown.js":5,"./branch-name.js":7,"./breadcrumb-bar.js":8,"./commit-file-content.js":9,"./tree-filename.js":10};r.keys=function(){return Object.keys(o)},r.resolve=c,e.exports=r,r.id=4},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),c=n(1),o=document.querySelector("#repository-layout-revision-selector"),a=document.querySelector("#branch-actions");if(null!==o&&null!==a){var i=Object(c.a)();i.classList.add(c.b+"--baseline"),a.after(i),i.addEventListener("click",function(e){Object(r.a)(i,"git fetch && git checkout "+o.title+" && git pull")})}},function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">\n\t<path fill="currentColor" d="M235.7 116a16 16 0 0 0-2.3 0H92a16 16 0 0 0-16 16v328a16 16 0 0 0 16 16h248a16 16 0 0 0 16-16V238.8a16 16 0 0 0-6-15.2L248.4 122a16 16 0 0 0-12.8-6zM108 148h112v85.6a16 16 0 0 0 4.5 14 16 16 0 0 0 .4.3 16 16 0 0 0 13 4h86v192H108V148zm144 23l49.3 49.3H252V171z"/>\n\t<path fill="currentColor" opacity="0.75" d="M315.7 36H172c-4.3 0-8.5 2-11.4 4.8-3 3-4.7 7-4.7 11.3v44h32V68h112v65.5l38 38.5h66v192h-28v32h44c4 0 8-1.2 11-4.2s4.6-7 4.6-11.3V158.8c.3-5.7-2-11.8-6-15.3L328 42c-3-3.8-8-6.2-12.8-6zM332 90.7l49.3 49.3H332z"/>\n</svg>'},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),c=n(1),o=n(2);Object(o.a)(".pull-request-header-bar",function(){document.querySelectorAll(".ref-lozenge-content").forEach(function(e){var t=Object(c.a)();t.classList.add(c.b+"--baseline"),e.after(t),t.addEventListener("click",function(n){Object(r.a)(t,"git fetch && git checkout "+e.textContent+" && git pull")})})})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),c=n(1),o=n(2);Object(o.a)(".change-header",function(){document.querySelectorAll(".file-breadcrumbs").forEach(function(e){var t=Object(c.a)();t.classList.add(c.b+"--baseline"),e.prepend(t),t.addEventListener("click",function(){Object(r.a)(t,e.innerText)})})})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),c=n(1);window.setInterval(function(e){var t=document.querySelector("#devstatus-branch-detail-dialog");null!==t&&null===t.querySelector("."+c.b)&&document.querySelectorAll("#devstatus-branch-detail-dialog .branch-link").forEach(function(e){var t=Object(c.a)();t.classList.add(c.b+"--baseline"),e.before(t),t.addEventListener("click",function(n){Object(r.a)(t,"git fetch && git checkout "+e.innerText+" && git pull")})})},500)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),c=n(1),o=n(2);Object(o.a)(".changes-tree .root-directory",function(){document.querySelectorAll(".files .file > a").forEach(function(e){var t=Object(c.a)();t.classList.add(c.b+"--baseline"),e.parentNode.prepend(t),t.addEventListener("click",function(n){Object(r.a)(t,e.getAttribute("href").substring(1))})})})}]);