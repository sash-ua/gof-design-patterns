(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{JZ3L:function(n,t,e){"use strict";e.r(t);var r=e("CcnG"),u=function(){},o=e("pMnS"),a=e("zBzZ"),c=e("dcwU"),i=e("ZYjt"),l=e("Bzs4"),p=e("mrSG"),s=function(){function n(){}return n.prototype.start=function(){return!0},n}(),f=function(n){function t(){var t=n.call(this)||this;return t.name="Fiesta",t.speedLimit=200,t}return Object(p.b)(t,n),t.prototype.speedUp=function(n){return n<=this.speedLimit},t}(s),d=function(n){function t(t){var e=n.call(this)||this;return e.turboVersion=t,e.name="Mustang",e.speedLimit=t?280:250,e}return Object(p.b)(t,n),t.prototype.speedUp=function(n){return n<=this.speedLimit},t}(s),h=function(){},y=function(n){function t(){return null!==n&&n.apply(this,arguments)||this}return Object(p.b)(t,n),t.prototype.createProduct=function(){return new f},t}(h),b=function(n){function t(){return null!==n&&n.apply(this,arguments)||this}return Object(p.b)(t,n),t.prototype.createProduct=function(n){return new d(n)},t}(h),m=function(){function n(){}return n.prototype.createProduct=function(n){switch(n){case"Mustang ":return(new b).createProduct();case"Mustang turbo":return(new b).createProduct(!0);case"Focus":return(new y).createProduct();default:return"You should create a relevant Factory"}},n.prototype.factoryMethod=function(){this.createProduct("Mustang"),this.createProduct("Mustang turbo"),this.createProduct("Focus")},n.ngInjectableDef=r.P({factory:function(){return new n},token:n,providedIn:"root"}),n}(),P=e("L5ZQ"),w=e("rKjR"),k=function(){return function(n){this.factoryMethod=n,this.wikiLink=l.a.creational.factoryMethod,this.sampleLink=P.a.creational.factoryMethod,this.linkName=w.a.linkToSampleName,this.factoryMethod.factoryMethod()}}(),M=r.Ha({encapsulation:0,styles:[[""]],data:{}});function g(n){return r.Ua(0,[(n()(),r.Ja(0,0,null,null,1,"app-wiki-pattern-description",[],null,null,null,a.b,a.a)),r.Ia(1,114688,null,0,c.a,[i.b],{queryString:[0,"queryString"]},null),(n()(),r.Ja(2,0,null,null,2,"h3",[],null,null,null,null,null)),(n()(),r.Ja(3,0,null,null,1,"a",[["rel","noopener"],["target","_blank"]],[[8,"href",4]],null,null,null,null)),(n()(),r.Ta(4,null,["",""]))],function(n,t){n(t,1,0,t.component.wikiLink)},function(n,t){var e=t.component;n(t,3,0,e.sampleLink),n(t,4,0,e.linkName)})}var L=r.Fa("app-factory-method",k,function(n){return r.Ua(0,[(n()(),r.Ja(0,0,null,null,1,"app-factory-method",[],null,null,null,g,M)),r.Ia(1,49152,null,0,k,[m],null,null)],null,null)},{},{},[]),j=e("Ip0R"),v=e("ZYCi"),F=function(){},J=e("FpXt");e.d(t,"FactoryMethodModuleNgFactory",function(){return I});var I=r.Ga(u,[],function(n){return r.Oa([r.Pa(512,r.j,r.W,[[8,[o.a,L]],[3,r.j],r.v]),r.Pa(4608,j.i,j.h,[r.s,[2,j.n]]),r.Pa(1073742336,j.b,j.b,[]),r.Pa(1073742336,v.n,v.n,[[2,v.t],[2,v.k]]),r.Pa(1073742336,F,F,[]),r.Pa(1073742336,J.a,J.a,[]),r.Pa(1073742336,u,u,[]),r.Pa(1024,v.i,function(){return[[{path:"",component:k}]]},[])])})}}]);