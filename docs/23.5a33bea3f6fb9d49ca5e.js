(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{JZ3L:function(n,t,e){"use strict";e.r(t);var u=e("CcnG"),l=function(){},a=e("pMnS"),r=e("ni4H"),o=e("ashd"),i=e("ZYjt"),c=e("Ip0R"),p=e("mrSG");function s(n){switch(n){case"Mustang ":return(new b).createProduct();case"Mustang turbo":return(new b).createProduct(!0);case"Focus":return(new m).createProduct();default:return"You should create a relevant Factory"}}var f=function(){function n(){}return n.prototype.start=function(){return!0},n}(),h=function(n){function t(){var t=n.call(this)||this;return t.name="Fiesta",t.speedLimit=200,t}return Object(p.b)(t,n),t.prototype.speedUp=function(n){return n<=this.speedLimit},t}(f),d=function(n){function t(t){var e=n.call(this)||this;return e.turboVersion=t,e.name="Mustang",e.speedLimit=t?280:250,e}return Object(p.b)(t,n),t.prototype.speedUp=function(n){return n<=this.speedLimit},t}(f),y=function(){},m=function(n){function t(){return null!==n&&n.apply(this,arguments)||this}return Object(p.b)(t,n),t.prototype.createProduct=function(){return new h},t}(y),b=function(n){function t(){return null!==n&&n.apply(this,arguments)||this}return Object(p.b)(t,n),t.prototype.createProduct=function(n){return new d(n)},t}(y),k=function(){function n(){}return n.prototype.factoryMethod=function(){s("Mustang"),s("Mustang turbo"),s("Focus")},n.ngInjectableDef=u.P({factory:function(){return new n},token:n,providedIn:"root"}),n}(),g=e("Kvgl"),w=e("rKjR"),M=e("67Y/"),L=e("y2Yq"),j=function(){function n(n,t){this.factoryMethod=n,this.http=t,this.gitLink=g.a.creational.factoryMethod.gitApiLink,this.wikiLink=g.a.creational.factoryMethod.wikiLink,this.sampleLink=g.a.creational.factoryMethod.sampleLink,this.linkName=w.a.linkToSampleName,this.sample=w.a.sampleTitle,this.factoryMethod.factoryMethod()}return n.prototype.ngAfterViewInit=function(){this.content$=this.http.getData(this.gitLink).pipe(Object(M.a)(function(n){return n?atob(n.content):null}))},n}(),v=u.Ia({encapsulation:0,styles:[[""]],data:{}});function K(n){return u.Xa(0,[(n()(),u.Ka(0,0,null,null,1,"app-embedded-container",[],null,null,null,r.b,r.a)),u.Ja(1,114688,null,0,o.a,[i.b],{queryString:[0,"queryString"]},null),(n()(),u.Ka(2,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),u.Va(3,null,["",""])),(n()(),u.Ka(4,0,null,null,2,"pre",[["class","github-content"]],null,null,null,null,null)),(n()(),u.Va(5,null,["",""])),u.Sa(131072,c.b,[u.h]),(n()(),u.Ka(7,0,null,null,2,"h3",[],null,null,null,null,null)),(n()(),u.Ka(8,0,null,null,1,"a",[["rel","noopener"],["target","_blank"]],[[8,"href",4]],null,null,null,null)),(n()(),u.Va(9,null,["",""]))],function(n,t){n(t,1,0,t.component.wikiLink)},function(n,t){var e=t.component;n(t,3,0,e.sample),n(t,5,0,u.Wa(t,5,0,u.Ra(t,6).transform(e.content$))),n(t,8,0,e.sampleLink),n(t,9,0,e.linkName)})}var Q=u.Ga("app-factory-method",j,function(n){return u.Xa(0,[(n()(),u.Ka(0,0,null,null,1,"app-factory-method",[],null,null,null,K,v)),u.Ja(1,4243456,null,0,j,[k,L.a],null,null)],null,null)},{},{},[]),F=e("ZYCi"),P=function(){},S=e("FpXt");e.d(t,"FactoryMethodModuleNgFactory",function(){return I});var I=u.Ha(l,[],function(n){return u.Pa([u.Qa(512,u.j,u.X,[[8,[a.a,Q]],[3,u.j],u.v]),u.Qa(4608,c.j,c.i,[u.s,[2,c.p]]),u.Qa(1073742336,c.c,c.c,[]),u.Qa(1073742336,F.n,F.n,[[2,F.t],[2,F.k]]),u.Qa(1073742336,P,P,[]),u.Qa(1073742336,S.a,S.a,[]),u.Qa(1073742336,l,l,[]),u.Qa(1024,F.i,function(){return[[{path:"",component:j}]]},[])])})}}]);