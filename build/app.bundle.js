!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=[{id:1,firstName:"Amy",lastName:"Taylor",phone:"617-564-3254",picture:"https://s3-us-west-1.amazonaws.com/sfdc-demo/people/amy_taylor.jpg"},{id:2,firstName:"Anup",lastName:"Gupta",phone:"617-564-1258",picture:"https://s3-us-west-1.amazonaws.com/sfdc-demo/people/anup_gupta.jpg"}];t.findAll=function(){return new Promise(function(e){return e(r)})}},function(e,t,n){"use strict";(function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t})(n(0)).findAll().then(function(e){var t="";e.forEach(function(e){t+="<div>\n                  <img src='"+e.picture+"'/>\n                  <div>\n                    "+e.firstName+" "+e.lastName+"\n                    <p>"+e.phone+"</p>\n                  </div>\n               </div>"}),document.getElementById("list").innerHTML=t}).catch(function(e){return console.log(e)})}]);
//# sourceMappingURL=app.bundle.js.map