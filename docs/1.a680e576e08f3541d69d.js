(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{RJ92:function(t,n,e){"use strict";e.r(n);var i=e("CcnG"),a=function(){},o=e("pMnS"),r=e("C6Wc"),u=e("sCOJ"),l=e("rKjR"),p=e("Kvgl"),c=e("mrSG"),s=function(){},f=function(t){function n(){var n=null!==t&&t.apply(this,arguments)||this;return n._name="Element A",n}return Object(c.c)(n,t),Object.defineProperty(n.prototype,"name",{get:function(){return this._name},enumerable:!0,configurable:!0}),n.prototype.accept=function(t){t.visitElementA(this)},n.prototype.runA=function(t){console.log(this._name+" executed by "+t)},n}(s),m=function(t){function n(){var n=null!==t&&t.apply(this,arguments)||this;return n._name="Element B",n}return Object(c.c)(n,t),Object.defineProperty(n.prototype,"name",{get:function(){return this._name},enumerable:!0,configurable:!0}),n.prototype.accept=function(t){t.visitElementB(this)},n.prototype.runB=function(t){console.log(this._name+" executed by "+t)},n}(s),h=function(){function t(){this.elements=new Map}return t.prototype.add=function(t){this.elements.set(t.name,t)},t.prototype.remove=function(t){this.elements.delete(t.name)},t.prototype.accept=function(t){this.elements.forEach(function(n){return n.accept(t)})},t}(),v=function(){function t(){}return t.prototype.visitior=function(){var t;(t=new h).add(new f),t.add(new m)},t.ngInjectableDef=i.P({factory:function(){return new t},token:t,providedIn:"root"}),t}(),b=e("67Y/"),y=e("y2Yq"),d=function(){return function(t,n){this.visitor=t,this.http=n,this.patternCompData={gitLink:p.a.behavioral.visitor.gitApiLink,wikiLink:p.a.behavioral.visitor.wikiLink,sampleLink:p.a.behavioral.visitor.sampleLink,linkName:l.a.linkToSampleName,sample:l.a.sampleTitle},this.visitor.visitior();var e=this.http.getData(this.patternCompData.gitLink).pipe(Object(b.a)(function(t){return t?atob(t.content):null}));this.patternCompData=Object.assign(this.patternCompData,{content$:e})}}(),k=i.Ia({encapsulation:0,styles:[[""]],data:{}});function g(t){return i.Xa(0,[(t()(),i.Ka(0,0,null,null,1,"app-pattern",[],null,null,null,r.b,r.a)),i.Ja(1,114688,null,0,u.a,[],{patternCompData:[0,"patternCompData"]},null)],function(t,n){t(n,1,0,n.component.patternCompData)},null)}var w=i.Ga("app-visitor",d,function(t){return i.Xa(0,[(t()(),i.Ka(0,0,null,null,1,"app-visitor",[],null,null,null,g,k)),i.Ja(1,49152,null,0,d,[v,y.a],null,null)],null,null)},{},{},[]),j=e("Ip0R"),C=e("ZYCi"),D=function(){},Q=e("FpXt");e.d(n,"VisitorModuleNgFactory",function(){return L});var L=i.Ha(a,[],function(t){return i.Pa([i.Qa(512,i.j,i.X,[[8,[o.a,w]],[3,i.j],i.v]),i.Qa(4608,j.j,j.i,[i.s,[2,j.p]]),i.Qa(1073742336,j.c,j.c,[]),i.Qa(1073742336,C.n,C.n,[[2,C.t],[2,C.k]]),i.Qa(1073742336,D,D,[]),i.Qa(1073742336,Q.a,Q.a,[]),i.Qa(1073742336,a,a,[]),i.Qa(1024,C.i,function(){return[[{path:"",component:d}]]},[])])})}}]);