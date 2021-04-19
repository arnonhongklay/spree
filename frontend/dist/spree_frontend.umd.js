!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("stimulus")):"function"==typeof define&&define.amd?define(["stimulus"],t):(e||self).frontend=t(e.stimulus)}(this,function(e){function t(e,r){return(t=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,r)}var r=function(e){var r,o;function n(){return e.apply(this,arguments)||this}o=e,(r=n).prototype=Object.create(o.prototype),r.prototype.constructor=r,t(r,o);var i,s=n.prototype;return s.initialize=function(){},s.apply=function(){var e=this;this.code&&window.SpreeAPI.Storefront.applyCouponCode(this.code,function(){return e.handleSuccess()},function(t){return e.handleError(t)})},s.remove=function(){var e=this;window.SpreeAPI.Storefront.removeCouponCode(this.code,function(){return e.handleSuccess()},function(t){return e.handleError(t)})},s.handleError=function(e){this.code=null,this.element.classList.add("error"),this.resultTextTarget.classList.add("alert-error"),this.resultTextTarget.innerHTML=e,this.resultIconTarget.src=Spree.translations.coupon_code_error_icon},s.handleSuccess=function(){this.code=null,this.element.classList.remove("error"),this.resultTextTarget.classList.remove("alert-error"),this.resultIconTarget.remove(),this.resultTextTarget.classList.add("alert-success"),this.resultTextTarget.innerHTML=Spree.translations.coupon_code_applied,window.location.reload()},(i=[{key:"code",get:function(){return this.codeTarget.value.trim()},set:function(e){this.codeTarget.value=e}}])&&function(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}(n.prototype,i),n}(e.Controller);return r.targets=["code","resultText","resultIcon"],e.Application.start().register("coupon-code",r),{start:function(){console.log("Spree Frontend initialized")}}});
//# sourceMappingURL=spree_frontend.umd.js.map