(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{HzmL:function(t,n,o){"use strict";o.r(n),o.d(n,"FactoryMethodModule",(function(){return g}));var e,r=o("ofXK"),i=o("tyNb"),a=(e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])})(t,n)},function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)});function c(t){switch(t){case"Mustang ":return(new d).createProduct();case"Mustang turbo":return(new d).createProduct(!0);case"Focus":return(new l).createProduct();default:return"You should create a relevant Factory"}}var u=function(){function t(){}return t.prototype.start=function(){return!0},t}(),p=function(t){function n(){var n=t.call(this)||this;return n.name="Fiesta",n.speedLimit=200,n}return a(n,t),n.prototype.speedUp=function(t){return t<=this.speedLimit},n}(u),s=function(t){function n(n){var o=t.call(this)||this;return o.turboVersion=n,o.name="Mustang",o.speedLimit=n?280:250,o}return a(n,t),n.prototype.speedUp=function(t){return t<=this.speedLimit},n}(u),f=function(){return function(){}}(),l=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return a(n,t),n.prototype.createProduct=function(){return new p},n}(f),d=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return a(n,t),n.prototype.createProduct=function(t){return new s(t)},n}(f),y=o("fXoL"),h=function(){function t(){}return t.prototype.factoryMethod=function(){var t,n,o;t=c("Mustang"),n=c("Mustang turbo"),o=c("Focus"),console.log(t),console.log(n),console.log(o)},t.\u0275prov=y.zb({token:t,factory:t.\u0275fac=function(n){return new(n||t)},providedIn:"root"}),t}(),m=o("wfLb"),w=o("YvLn"),b=o("0v2V"),L=o("sCOJ"),M=[{path:"",component:function(){function t(t,n){this.factoryMethod=t,this.di=n,this.patternCompData={gitLink:m.a.creational.factoryMethod.gitApiLink,wikiLink:m.a.creational.factoryMethod.wikiLink,sampleLink:m.a.creational.factoryMethod.sampleLink,linkName:w.a.linkToSampleName,sample:w.a.sampleTitle}}return t.prototype.ngOnInit=function(){this.factoryMethod.factoryMethod(),this.patternCompData=this.di.getContent(this.patternCompData)},t.\u0275fac=function(n){return new(n||t)(y.Db(h),y.Db(b.a))},t.\u0275cmp=y.xb({type:t,selectors:[["app-factory-method"]],decls:1,vars:1,consts:[[3,"patternCompData"]],template:function(t,n){1&t&&y.Eb(0,"app-pattern",0),2&t&&y.Pb("patternCompData",n.patternCompData)},directives:[L.a],styles:[""]}),t}()}],k=function(){function t(){}return t.\u0275mod=y.Bb({type:t}),t.\u0275inj=y.Ab({factory:function(n){return new(n||t)},imports:[[i.d.forChild(M)],i.d]}),t}(),v=o("FpXt"),g=function(){function t(){}return t.\u0275mod=y.Bb({type:t}),t.\u0275inj=y.Ab({factory:function(n){return new(n||t)},imports:[[r.c,k,v.a]]}),t}()}}]);