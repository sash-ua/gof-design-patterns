(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{isMB:function(t,n,e){"use strict";e.r(n);var a=e("CcnG"),o=function(){},i=e("pMnS"),r=e("C6Wc"),u=e("sCOJ"),l=e("rKjR"),p=e("Kvgl"),c=function(){function t(){}return Object.defineProperty(t.prototype,"state",{get:function(){return this._state},set:function(t){this._state=t},enumerable:!0,configurable:!0}),t.prototype.setMemento=function(t){this._state=t.state},t.prototype.createMemento=function(){return new s(this.state)},t}(),s=function(){function t(t){this.originState=t,this.stateVault=this.originState}return Object.defineProperty(t.prototype,"state",{get:function(){return this.stateVault},enumerable:!0,configurable:!0}),t}(),m=function(){function t(){}return Object.defineProperty(t.prototype,"memento",{get:function(){return this.state},set:function(t){this.state=t},enumerable:!0,configurable:!0}),t}(),f=function(){function t(){}return t.prototype.memento=function(){!function(){var t=new c;t.state="ONE STATE";var n=new m;n.memento=t.createMemento(),t.state="another state",t.setMemento(n.memento)}()},t.ngInjectableDef=a.P({factory:function(){return new t},token:t,providedIn:"root"}),t}(),h=e("y2Yq"),b=e("67Y/"),g=function(){return function(t,n){this.memento=t,this.http=n,this.patternCompData={gitLink:p.a.behavioral.memento.gitApiLink,wikiLink:p.a.behavioral.memento.wikiLink,sampleLink:p.a.behavioral.memento.sampleLink,linkName:l.a.linkToSampleName,sample:l.a.sampleTitle},this.memento.memento();var e=this.http.getData(this.patternCompData.gitLink).pipe(Object(b.a)(function(t){return t?atob(t.content):null}));this.patternCompData=Object.assign(this.patternCompData,{content$:e})}}(),k=a.Ia({encapsulation:0,styles:[[""]],data:{}});function y(t){return a.Xa(0,[(t()(),a.Ka(0,0,null,null,1,"app-pattern",[],null,null,null,r.b,r.a)),a.Ja(1,114688,null,0,u.a,[],{patternCompData:[0,"patternCompData"]},null)],function(t,n){t(n,1,0,n.component.patternCompData)},null)}var v=a.Ga("app-memento",g,function(t){return a.Xa(0,[(t()(),a.Ka(0,0,null,null,1,"app-memento",[],null,null,null,y,k)),a.Ja(1,49152,null,0,g,[f,h.a],null,null)],null,null)},{},{},[]),w=e("Ip0R"),C=e("ZYCi"),d=function(){},j=e("FpXt");e.d(n,"MementoModuleNgFactory",function(){return D});var D=a.Ha(o,[],function(t){return a.Pa([a.Qa(512,a.j,a.X,[[8,[i.a,v]],[3,a.j],a.v]),a.Qa(4608,w.j,w.i,[a.s,[2,w.p]]),a.Qa(1073742336,w.c,w.c,[]),a.Qa(1073742336,C.n,C.n,[[2,C.t],[2,C.k]]),a.Qa(1073742336,d,d,[]),a.Qa(1073742336,j.a,j.a,[]),a.Qa(1073742336,o,o,[]),a.Qa(1024,C.i,function(){return[[{path:"",component:g}]]},[])])})}}]);