(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"/yyw":function(n,t,i){"use strict";i.r(t);var e=i("CcnG"),o=function(){return function(){}}(),s=i("pMnS"),l=i("C6Wc"),u=i("sCOJ"),a=i("rKjR"),c=i("Kvgl"),r=i("mrSG"),p=function(){function n(){}return Object.defineProperty(n.prototype,"successor",{get:function(){return this._successor},set:function(n){this._successor=n},enumerable:!0,configurable:!0}),n}(),f=function(n){function t(){return null!==n&&n.apply(this,arguments)||this}return Object(r.c)(t,n),t.prototype.handleHelp=function(n){console.log("This is help app!")},t}(p),h=function(n){function t(){return null!==n&&n.apply(this,arguments)||this}return Object(r.c)(t,n),t.prototype.handleHelp=function(n){"dialog"===n.name?console.log("This is help dialog!"):this.successor&&this.successor.handleHelp(n)},t}(p),b=function(n){function t(){return null!==n&&n.apply(this,arguments)||this}return Object(r.c)(t,n),t.prototype.handleHelp=function(n){"button"===n.name?console.log("This is help button!"):this.successor&&this.successor.handleHelp(n)},t}(p),y=function(){function n(){}return n.prototype.chainOfResponsibility=function(){var n,t,i;n=new f,t=new h,(i=new b).successor=n,t.successor=i},n.ngInjectableDef=e.R({factory:function(){return new n},token:n,providedIn:"root"}),n}(),m=i("0v2V"),d=function(){function n(n,t){this.cOfR=n,this.di=t,this.patternCompData={gitLink:c.a.behavioral.chainOfResponsibility.gitApiLink,wikiLink:c.a.behavioral.chainOfResponsibility.wikiLink,sampleLink:c.a.behavioral.chainOfResponsibility.sampleLink,linkName:a.a.linkToSampleName,sample:a.a.sampleTitle}}return n.prototype.ngOnInit=function(){this.cOfR.chainOfResponsibility(),this.patternCompData=this.di.getContent(this.patternCompData)},n}(),k=e.kb({encapsulation:0,styles:[[""]],data:{}});function g(n){return e.Ab(0,[(n()(),e.mb(0,0,null,null,1,"app-pattern",[],null,null,null,l.b,l.a)),e.lb(1,114688,null,0,u.a,[],{patternCompData:[0,"patternCompData"]},null)],function(n,t){n(t,1,0,t.component.patternCompData)},null)}function O(n){return e.Ab(0,[(n()(),e.mb(0,0,null,null,1,"app-chain-of-responsibility",[],null,null,null,g,k)),e.lb(1,114688,null,0,d,[y,m.a],null,null)],function(n,t){n(t,1,0)},null)}var w=e.ib("app-chain-of-responsibility",d,O,{},{},[]),C=i("Ip0R"),R=i("ZYCi"),j=function(){return function(){}}(),v=i("FpXt");i.d(t,"ChainOfResponsibilityModuleNgFactory",function(){return D});var D=e.jb(o,[],function(n){return e.rb([e.sb(512,e.j,e.Z,[[8,[s.a,w]],[3,e.j],e.x]),e.sb(4608,C.j,C.i,[e.u,[2,C.p]]),e.sb(1073742336,C.c,C.c,[]),e.sb(1073742336,R.n,R.n,[[2,R.t],[2,R.k]]),e.sb(1073742336,j,j,[]),e.sb(1073742336,v.a,v.a,[]),e.sb(1073742336,o,o,[]),e.sb(1024,R.i,function(){return[[{path:"",component:d}]]},[])])})}}]);