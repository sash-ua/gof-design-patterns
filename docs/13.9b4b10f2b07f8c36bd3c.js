(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{ueO6:function(t,n,a){"use strict";a.r(n);var e=a("CcnG"),i=function(){},o=a("pMnS"),l=a("C6Wc"),r=a("sCOJ"),u=a("rKjR"),p=a("Kvgl"),c=function(){function t(){this.pool=new Map}return t.prototype.set=function(t){this.pool.set(t,new s)},t.prototype.get=function(t){return this.pool.has(t)||this.set(t),this.pool.get(t)},t.prototype.remove=function(t){this.pool.delete(t)},t}(),s=function(){function t(){this.state={value:"",font:"Times New Roman",color:"black"}}return t.prototype.config=function(t){this.state=Object.assign(this.state,t)},t.prototype.draw=function(){return this.state.value},t}(),f=function(){function t(){}return t.prototype.flyweight=function(){var t;(t=new c).get("a").config({value:"a"}),t.get("b").config({value:"b"}),t.remove("a")},t.ngInjectableDef=e.P({factory:function(){return new t},token:t,providedIn:"root"}),t}(),h=a("y2Yq"),g=a("67Y/"),w=a("m42V"),m=function(){return function(t,n,a){var e=this;this.fl=t,this.http=n,this.interpreter=a,this.patternCompData={gitLink:p.a.structural.flyweight.gitApiLink,wikiLink:p.a.structural.flyweight.wikiLink,sampleLink:p.a.structural.flyweight.sampleLink,linkName:u.a.linkToSampleName,sample:u.a.sampleTitle},t.flyweight();var i=this.http.getData(this.patternCompData.gitLink).pipe(Object(g.a)(function(t){return t?e.interpreter.interpreter(atob(t.content)):null}));this.patternCompData=Object.assign(this.patternCompData,{content$:i})}}(),y=e.Ia({encapsulation:0,styles:[[""]],data:{}});function k(t){return e.Ya(0,[(t()(),e.Ka(0,0,null,null,1,"app-pattern",[],null,null,null,l.b,l.a)),e.Ja(1,114688,null,0,r.a,[],{patternCompData:[0,"patternCompData"]},null)],function(t,n){t(n,1,0,n.component.patternCompData)},null)}var v=e.Ga("app-flyweight",m,function(t){return e.Ya(0,[(t()(),e.Ka(0,0,null,null,1,"app-flyweight",[],null,null,null,k,y)),e.Ja(1,49152,null,0,m,[f,h.a,w.a],null,null)],null,null)},{},{},[]),b=a("Ip0R"),C=a("ZYCi"),d=function(){},D=a("FpXt");a.d(n,"FlyweightModuleNgFactory",function(){return j});var j=e.Ha(i,[],function(t){return e.Pa([e.Qa(512,e.j,e.X,[[8,[o.a,v]],[3,e.j],e.v]),e.Qa(4608,b.j,b.i,[e.s,[2,b.p]]),e.Qa(1073742336,b.c,b.c,[]),e.Qa(1073742336,C.n,C.n,[[2,C.t],[2,C.k]]),e.Qa(1073742336,d,d,[]),e.Qa(1073742336,D.a,D.a,[]),e.Qa(1073742336,i,i,[]),e.Qa(1024,C.i,function(){return[[{path:"",component:m}]]},[])])})}}]);