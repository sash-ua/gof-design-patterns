(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{JZ3L:function(n,t,e){"use strict";e.r(t);var u=e("CcnG"),l=function(){},r=e("pMnS"),a=e("ni4H"),o=e("ashd"),i=e("ZYjt"),c=e("Ip0R"),s=e("mrSG"),p=function(){function n(){}return n.prototype.start=function(){return!0},n}(),f=function(n){function t(){var t=n.call(this)||this;return t.name="Fiesta",t.speedLimit=200,t}return Object(s.b)(t,n),t.prototype.speedUp=function(n){return n<=this.speedLimit},t}(p),h=function(n){function t(t){var e=n.call(this)||this;return e.turboVersion=t,e.name="Mustang",e.speedLimit=t?280:250,e}return Object(s.b)(t,n),t.prototype.speedUp=function(n){return n<=this.speedLimit},t}(p),d=function(){},y=function(n){function t(){return null!==n&&n.apply(this,arguments)||this}return Object(s.b)(t,n),t.prototype.createProduct=function(){return new f},t}(d),m=function(n){function t(){return null!==n&&n.apply(this,arguments)||this}return Object(s.b)(t,n),t.prototype.createProduct=function(n){return new h(n)},t}(d),b=function(){function n(){}return n.prototype.createProduct=function(n){switch(n){case"Mustang ":return(new m).createProduct();case"Mustang turbo":return(new m).createProduct(!0);case"Focus":return(new y).createProduct();default:return"You should create a relevant Factory"}},n.prototype.factoryMethod=function(){this.createProduct("Mustang"),this.createProduct("Mustang turbo"),this.createProduct("Focus")},n.ngInjectableDef=u.P({factory:function(){return new n},token:n,providedIn:"root"}),n}(),k=e("Kvgl"),g=e("rKjR"),w=e("67Y/"),M=e("y2Yq"),L=function(){function n(n,t){this.factoryMethod=n,this.http=t,this.gitLink=k.a.creational.factoryMethod.gitApiLink,this.wikiLink=k.a.creational.factoryMethod.wikiLink,this.sampleLink=k.a.creational.factoryMethod.sampleLink,this.linkName=g.a.linkToSampleName,this.sample=g.a.sampleTitle,this.factoryMethod.factoryMethod()}return n.prototype.ngAfterViewInit=function(){this.content$=this.http.getData(this.gitLink).pipe(Object(w.a)(function(n){return n?atob(n.content):null}))},n}(),j=u.Ia({encapsulation:0,styles:[[""]],data:{}});function P(n){return u.Xa(0,[(n()(),u.Ka(0,0,null,null,1,"app-embedded-container",[],null,null,null,a.b,a.a)),u.Ja(1,114688,null,0,o.a,[i.b],{queryString:[0,"queryString"]},null),(n()(),u.Ka(2,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),u.Va(3,null,["",""])),(n()(),u.Ka(4,0,null,null,2,"pre",[["class","github-content"]],null,null,null,null,null)),(n()(),u.Va(5,null,["",""])),u.Sa(131072,c.b,[u.h]),(n()(),u.Ka(7,0,null,null,2,"h3",[],null,null,null,null,null)),(n()(),u.Ka(8,0,null,null,1,"a",[["rel","noopener"],["target","_blank"]],[[8,"href",4]],null,null,null,null)),(n()(),u.Va(9,null,["",""]))],function(n,t){n(t,1,0,t.component.wikiLink)},function(n,t){var e=t.component;n(t,3,0,e.sample),n(t,5,0,u.Wa(t,5,0,u.Ra(t,6).transform(e.content$))),n(t,8,0,e.sampleLink),n(t,9,0,e.linkName)})}var v=u.Ga("app-factory-method",L,function(n){return u.Xa(0,[(n()(),u.Ka(0,0,null,null,1,"app-factory-method",[],null,null,null,P,j)),u.Ja(1,4243456,null,0,L,[b,M.a],null,null)],null,null)},{},{},[]),K=e("ZYCi"),Q=function(){},F=e("FpXt");e.d(t,"FactoryMethodModuleNgFactory",function(){return S});var S=u.Ha(l,[],function(n){return u.Pa([u.Qa(512,u.j,u.X,[[8,[r.a,v]],[3,u.j],u.v]),u.Qa(4608,c.j,c.i,[u.s,[2,c.p]]),u.Qa(1073742336,c.c,c.c,[]),u.Qa(1073742336,K.n,K.n,[[2,K.t],[2,K.k]]),u.Qa(1073742336,Q,Q,[]),u.Qa(1073742336,F.a,F.a,[]),u.Qa(1073742336,l,l,[]),u.Qa(1024,K.i,function(){return[[{path:"",component:L}]]},[])])})}}]);