(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{qyBv:function(n,t,o){"use strict";o.r(t);var a=o("CcnG"),e=function(){},i=o("pMnS"),u=o("C6Wc"),r=o("sCOJ"),p=o("rKjR"),c=o("Kvgl"),l=function(){function n(){this.subSysA=new s,this.subSysB=new f,this.subSysC=new y,this.subSysD=new h}return n.prototype.operationAB=function(){console.log("Do "+this.subSysA.operationA()+" and "+this.subSysB.operationB())},n.prototype.operationCD=function(){console.log("Do "+this.subSysC.operationC()+" and "+this.subSysD.operationD())},n.prototype.operationAD=function(){console.log("Do "+this.subSysA.operationA()+" and "+this.subSysD.operationD())},n}(),s=function(){function n(){}return n.prototype.operationA=function(){return"operation A"},n}(),f=function(){function n(){}return n.prototype.operationB=function(){return"operation B"},n}(),y=function(){function n(){}return n.prototype.operationC=function(){return"operation C"},n}(),h=function(){function n(){}return n.prototype.operationD=function(){return"operation D"},n}(),D=function(){function n(){}return n.prototype.facade=function(){new l},n.ngInjectableDef=a.P({factory:function(){return new n},token:n,providedIn:"root"}),n}(),d=o("67Y/"),b=o("y2Yq"),C=function(){return function(n,t){this.f=n,this.http=t,this.patternCompData={gitLink:c.a.structural.facade.gitApiLink,wikiLink:c.a.structural.facade.wikiLink,sampleLink:c.a.structural.facade.sampleLink,linkName:p.a.linkToSampleName,sample:p.a.sampleTitle},n.facade();var o=this.http.getData(this.patternCompData.gitLink).pipe(Object(d.a)(function(n){return n?atob(n.content):null}));this.patternCompData=Object.assign(this.patternCompData,{content$:o})}}(),m=a.Ia({encapsulation:0,styles:[[""]],data:{}});function k(n){return a.Xa(0,[(n()(),a.Ka(0,0,null,null,1,"app-pattern",[],null,null,null,u.b,u.a)),a.Ja(1,114688,null,0,r.a,[],{patternCompData:[0,"patternCompData"]},null)],function(n,t){n(t,1,0,t.component.patternCompData)},null)}var w=a.Ga("app-facade",C,function(n){return a.Xa(0,[(n()(),a.Ka(0,0,null,null,1,"app-facade",[],null,null,null,k,m)),a.Ja(1,49152,null,0,C,[D,b.a],null,null)],null,null)},{},{},[]),S=o("Ip0R"),g=o("ZYCi"),A=function(){},v=o("FpXt");o.d(t,"FacadeModuleNgFactory",function(){return Q});var Q=a.Ha(e,[],function(n){return a.Pa([a.Qa(512,a.j,a.X,[[8,[i.a,w]],[3,a.j],a.v]),a.Qa(4608,S.j,S.i,[a.s,[2,S.p]]),a.Qa(1073742336,S.c,S.c,[]),a.Qa(1073742336,g.n,g.n,[[2,g.t],[2,g.k]]),a.Qa(1073742336,A,A,[]),a.Qa(1073742336,v.a,v.a,[]),a.Qa(1073742336,e,e,[]),a.Qa(1024,g.i,function(){return[[{path:"",component:C}]]},[])])})}}]);