(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{JZ3L:function(t,n,e){"use strict";e.r(n);var r=e("CcnG"),o=function(){return function(){}}(),u=e("pMnS"),a=e("C6Wc"),i=e("sCOJ"),c=e("mrSG");function l(t){switch(t){case"Mustang ":return(new b).createProduct();case"Mustang turbo":return(new b).createProduct(!0);case"Focus":return(new h).createProduct();default:return"You should create a relevant Factory"}}var p=function(){function t(){}return t.prototype.start=function(){return!0},t}(),s=function(t){function n(){var n=t.call(this)||this;return n.name="Fiesta",n.speedLimit=200,n}return Object(c.c)(n,t),n.prototype.speedUp=function(t){return t<=this.speedLimit},n}(p),f=function(t){function n(n){var e=t.call(this)||this;return e.turboVersion=n,e.name="Mustang",e.speedLimit=n?280:250,e}return Object(c.c)(n,t),n.prototype.speedUp=function(t){return t<=this.speedLimit},n}(p),d=function(){return function(){}}(),h=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return Object(c.c)(n,t),n.prototype.createProduct=function(){return new s},n}(d),b=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return Object(c.c)(n,t),n.prototype.createProduct=function(t){return new f(t)},n}(d),m=function(){function t(){}return t.prototype.factoryMethod=function(){l("Mustang"),l("Mustang turbo"),l("Focus")},t.ngInjectableDef=r.R({factory:function(){return new t},token:t,providedIn:"root"}),t}(),y=e("Kvgl"),k=e("rKjR"),w=e("0v2V"),M=function(){function t(t,n){this.factoryMethod=t,this.di=n,this.patternCompData={gitLink:y.a.creational.factoryMethod.gitApiLink,wikiLink:y.a.creational.factoryMethod.wikiLink,sampleLink:y.a.creational.factoryMethod.sampleLink,linkName:k.a.linkToSampleName,sample:k.a.sampleTitle}}return t.prototype.ngOnInit=function(){this.factoryMethod.factoryMethod(),this.patternCompData=this.di.getContent(this.patternCompData)},t}(),g=r.kb({encapsulation:0,styles:[[""]],data:{}});function C(t){return r.Ab(0,[(t()(),r.mb(0,0,null,null,1,"app-pattern",[],null,null,null,a.b,a.a)),r.lb(1,114688,null,0,i.a,[],{patternCompData:[0,"patternCompData"]},null)],function(t,n){t(n,1,0,n.component.patternCompData)},null)}function L(t){return r.Ab(0,[(t()(),r.mb(0,0,null,null,1,"app-factory-method",[],null,null,null,C,g)),r.lb(1,114688,null,0,M,[m,w.a],null,null)],function(t,n){t(n,1,0)},null)}var j=r.ib("app-factory-method",M,L,{},{},[]),v=e("Ip0R"),D=e("ZYCi"),F=function(){return function(){}}(),O=e("FpXt");e.d(n,"FactoryMethodModuleNgFactory",function(){return P});var P=r.jb(o,[],function(t){return r.rb([r.sb(512,r.j,r.Z,[[8,[u.a,j]],[3,r.j],r.x]),r.sb(4608,v.j,v.i,[r.u,[2,v.p]]),r.sb(1073742336,v.c,v.c,[]),r.sb(1073742336,D.n,D.n,[[2,D.t],[2,D.k]]),r.sb(1073742336,F,F,[]),r.sb(1073742336,O.a,O.a,[]),r.sb(1073742336,o,o,[]),r.sb(1024,D.i,function(){return[[{path:"",component:M}]]},[])])})}}]);