(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{QmhH:function(t,n,o){"use strict";o.r(n),o.d(n,"MediatorModule",(function(){return v}));var i,e=o("ofXK"),r=o("tyNb"),a=o("YvLn"),p=o("wfLb"),c=(i=function(t,n){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])})(t,n)},function(t,n){function o(){this.constructor=t}i(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}),u=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return c(n,t),n.prototype.send=function(t,n){this.c1===n?this.c2.notify(t):this.c1.notify(t)},n}(function(){return function(){}}()),s=function(){return function(t){this.mediator=t}}(),f=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return c(n,t),n.prototype.send=function(t){this.mediator.send(t,this)},n.prototype.notify=function(t){console.log("Colleague1",t)},n}(s),l=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return c(n,t),n.prototype.send=function(t){this.mediator.send(t,this)},n.prototype.notify=function(t){console.log("Colleague2",t)},n}(s),m=o("fXoL"),d=function(){function t(){}return t.prototype.mediator=function(){var t,n,o;t=new u,n=new f(t),o=new l(t),t.c1=n,t.c2=o,n.send("msg from 1"),o.send("msg from 2")},t.\u0275prov=m.zb({token:t,factory:t.\u0275fac=function(n){return new(n||t)},providedIn:"root"}),t}(),h=o("0v2V"),y=o("sCOJ"),b=[{path:"",component:function(){function t(t,n){this.mediator=t,this.di=n,this.patternCompData={gitLink:p.a.behavioral.mediator.gitApiLink,wikiLink:p.a.behavioral.mediator.wikiLink,sampleLink:p.a.behavioral.mediator.sampleLink,linkName:a.a.linkToSampleName,sample:a.a.sampleTitle}}return t.prototype.ngOnInit=function(){this.mediator.mediator(),this.patternCompData=this.di.getContent(this.patternCompData)},t.\u0275fac=function(n){return new(n||t)(m.Db(d),m.Db(h.a))},t.\u0275cmp=m.xb({type:t,selectors:[["app-mediator"]],decls:1,vars:1,consts:[[3,"patternCompData"]],template:function(t,n){1&t&&m.Eb(0,"app-pattern",0),2&t&&m.Pb("patternCompData",n.patternCompData)},directives:[y.a],styles:[""]}),t}()}],w=function(){function t(){}return t.\u0275mod=m.Bb({type:t}),t.\u0275inj=m.Ab({factory:function(n){return new(n||t)},imports:[[r.d.forChild(b)],r.d]}),t}(),k=o("FpXt"),v=function(){function t(){}return t.\u0275mod=m.Bb({type:t}),t.\u0275inj=m.Ab({factory:function(n){return new(n||t)},imports:[[e.c,w,k.a]]}),t}()}}]);