(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{JZ3L:function(t,n,a){"use strict";a.r(n);var e=a("CcnG"),r=function(){},o=a("pMnS"),u=a("C6Wc"),i=a("sCOJ"),c=a("mrSG");function p(t){switch(t){case"Mustang ":return(new m).createProduct();case"Mustang turbo":return(new m).createProduct(!0);case"Focus":return(new d).createProduct();default:return"You should create a relevant Factory"}}var l=function(){function t(){}return t.prototype.start=function(){return!0},t}(),s=function(t){function n(){var n=t.call(this)||this;return n.name="Fiesta",n.speedLimit=200,n}return Object(c.c)(n,t),n.prototype.speedUp=function(t){return t<=this.speedLimit},n}(l),f=function(t){function n(n){var a=t.call(this)||this;return a.turboVersion=n,a.name="Mustang",a.speedLimit=n?280:250,a}return Object(c.c)(n,t),n.prototype.speedUp=function(t){return t<=this.speedLimit},n}(l),h=function(){},d=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return Object(c.c)(n,t),n.prototype.createProduct=function(){return new s},n}(h),m=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return Object(c.c)(n,t),n.prototype.createProduct=function(t){return new f(t)},n}(h),y=function(){function t(){}return t.prototype.factoryMethod=function(){p("Mustang"),p("Mustang turbo"),p("Focus")},t.ngInjectableDef=e.P({factory:function(){return new t},token:t,providedIn:"root"}),t}(),k=a("Kvgl"),w=a("rKjR"),M=a("67Y/"),b=a("y2Yq"),g=function(){return function(t,n){this.factoryMethod=t,this.http=n,this.patternCompData={gitLink:k.a.creational.factoryMethod.gitApiLink,wikiLink:k.a.creational.factoryMethod.wikiLink,sampleLink:k.a.creational.factoryMethod.sampleLink,linkName:w.a.linkToSampleName,sample:w.a.sampleTitle},this.factoryMethod.factoryMethod();var a=this.http.getData(this.patternCompData.gitLink).pipe(Object(M.a)(function(t){return t?atob(t.content):null}));this.patternCompData=Object.assign(this.patternCompData,{content$:a})}}(),L=e.Ia({encapsulation:0,styles:[[""]],data:{}});function j(t){return e.Xa(0,[(t()(),e.Ka(0,0,null,null,1,"app-pattern",[],null,null,null,u.b,u.a)),e.Ja(1,114688,null,0,i.a,[],{patternCompData:[0,"patternCompData"]},null)],function(t,n){t(n,1,0,n.component.patternCompData)},null)}var v=e.Ga("app-factory-method",g,function(t){return e.Xa(0,[(t()(),e.Ka(0,0,null,null,1,"app-factory-method",[],null,null,null,j,L)),e.Ja(1,49152,null,0,g,[y,b.a],null,null)],null,null)},{},{},[]),C=a("Ip0R"),D=a("ZYCi"),Q=function(){},F=a("FpXt");a.d(n,"FactoryMethodModuleNgFactory",function(){return O});var O=e.Ha(r,[],function(t){return e.Pa([e.Qa(512,e.j,e.X,[[8,[o.a,v]],[3,e.j],e.v]),e.Qa(4608,C.j,C.i,[e.s,[2,C.p]]),e.Qa(1073742336,C.c,C.c,[]),e.Qa(1073742336,D.n,D.n,[[2,D.t],[2,D.k]]),e.Qa(1073742336,Q,Q,[]),e.Qa(1073742336,F.a,F.a,[]),e.Qa(1073742336,r,r,[]),e.Qa(1024,D.i,function(){return[[{path:"",component:g}]]},[])])})}}]);