(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{WBz2:function(n,t,a){"use strict";a.r(t);var i,l=a("CcnG"),o=function(){},e=a("pMnS"),u=a("C6Wc"),p=a("sCOJ"),r=a("rKjR"),c=a("Kvgl");!function(n){var t=function(){function n(){this.luminosity=0}return n.prototype.shining=function(){return this.luminosity++},n}();n.SunInstance=new t}(i||(i={}));var s=function(){function n(){}return n.prototype.singleton=function(){},n.ngInjectableDef=l.P({factory:function(){return new n},token:n,providedIn:"root"}),n}(),f=a("67Y/"),g=a("y2Yq"),m=function(){return function(n,t){this.singleton=n,this.http=t,this.patternCompData={gitLink:c.a.creational.singleton.gitApiLink,wikiLink:c.a.creational.singleton.wikiLink,sampleLink:c.a.creational.singleton.sampleLink,linkName:r.a.linkToSampleName,sample:r.a.sampleTitle},this.singleton.singleton();var a=this.http.getData(this.patternCompData.gitLink).pipe(Object(f.a)(function(n){return n?atob(n.content):null}));this.patternCompData=Object.assign(this.patternCompData,{content$:a})}}(),h=l.Ia({encapsulation:0,styles:[[""]],data:{}});function k(n){return l.Xa(0,[(n()(),l.Ka(0,0,null,null,1,"app-pattern",[],null,null,null,u.b,u.a)),l.Ja(1,114688,null,0,p.a,[],{patternCompData:[0,"patternCompData"]},null)],function(n,t){n(t,1,0,t.component.patternCompData)},null)}var C=l.Ga("app-singleton",m,function(n){return l.Xa(0,[(n()(),l.Ka(0,0,null,null,1,"app-singleton",[],null,null,null,k,h)),l.Ja(1,49152,null,0,m,[s,g.a],null,null)],null,null)},{},{},[]),w=a("Ip0R"),v=a("ZYCi"),D=function(){},y=a("FpXt");a.d(t,"SingletonModuleNgFactory",function(){return Q});var Q=l.Ha(o,[],function(n){return l.Pa([l.Qa(512,l.j,l.X,[[8,[e.a,C]],[3,l.j],l.v]),l.Qa(4608,w.j,w.i,[l.s,[2,w.p]]),l.Qa(1073742336,w.c,w.c,[]),l.Qa(1073742336,v.n,v.n,[[2,v.t],[2,v.k]]),l.Qa(1073742336,D,D,[]),l.Qa(1073742336,y.a,y.a,[]),l.Qa(1073742336,o,o,[]),l.Qa(1024,v.i,function(){return[[{path:"",component:m}]]},[])])})}}]);