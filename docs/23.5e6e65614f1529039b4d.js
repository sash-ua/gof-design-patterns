(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{kKon:function(t,e,n){"use strict";n.r(e);var r=n("CcnG"),o=function(){return function(){}}(),a=n("pMnS"),i=n("C6Wc"),s=n("sCOJ"),u=n("rKjR"),l=n("Kvgl"),p=n("mrSG"),c=function(t){function e(e){var n=t.call(this)||this;return n.state.name=Symbol(e),n.state.msg="Element "+e+" rendered",n.state.rawName=e,n.drawEl(),n}return Object(p.c)(e,t),e.prototype.drawEl=function(){this.state.renderer.push(this.state.msg)},e}(function(){function t(){this._state={rawName:"",name:Symbol(),msg:"",errMsg:"No such method",renderer:[]}}return Object.defineProperty(t.prototype,"state",{get:function(){return this._state},enumerable:!0,configurable:!0}),t.prototype.addElement=function(t){return new Error(this.state.errMsg)},t.prototype.getChild=function(t){return new Error(this.state.errMsg)},t.prototype.getChildren=function(){return new Error(this.state.errMsg)},t.prototype.removeEl=function(){return new Error(this.state.errMsg)},t}()),m=function(){function t(t){this._state={rawName:"",name:Symbol(),msg:"",errMsg:"No such method",renderer:[]},this.nodes=new Map,this.state.name=Symbol(t),this.state.msg="Complex element "+t+" rendered",this.drawEl(),this.state.rawName=t}return Object.defineProperty(t.prototype,"state",{get:function(){return this._state},enumerable:!0,configurable:!0}),t.prototype.drawEl=function(){this.state.renderer.push(this.state.msg)},t.prototype.addElement=function(t){this.nodes.set(t.state.name,t)},t.prototype.getChild=function(t){var e=t.state;return this.nodes.has(e.name)?this.nodes.get(e.name):new Error("Element '"+e.rawName+"' does not exists!")},t.prototype.getChildren=function(){return this.nodes},t.prototype.removeEl=function(){this.nodes.delete(this.state.name)},t}(),h=function(){function t(){}return t.prototype.composite=function(){var t,e,n,r,o;t=new m("Root"),e=new c("line"),n=new c("circle"),r=new m("canvas1"),o=new c("line"),new c("out"),r.addElement(o),t.addElement(e),t.addElement(n),t.addElement(r)},t.ngInjectableDef=r.R({factory:function(){return new t},token:t,providedIn:"root"}),t}(),d=n("y2Yq"),f=n("67Y/"),b=n("m42V"),w=function(){return function(t,e,n){var r=this;this.comp=t,this.http=e,this.interpreter=n,this.patternCompData={gitLink:l.a.structural.composite.gitApiLink,wikiLink:l.a.structural.composite.wikiLink,sampleLink:l.a.structural.composite.sampleLink,linkName:u.a.linkToSampleName,sample:u.a.sampleTitle},this.comp.composite();var o=this.http.getData(this.patternCompData.gitLink).pipe(Object(f.a)(function(t){return t?r.interpreter.interpreter(atob(t.content)):null}));this.patternCompData=Object.assign(this.patternCompData,{content$:o})}}(),g=r.kb({encapsulation:0,styles:[[""]],data:{}});function y(t){return r.Ab(0,[(t()(),r.mb(0,0,null,null,1,"app-pattern",[],null,null,null,i.b,i.a)),r.lb(1,114688,null,0,s.a,[],{patternCompData:[0,"patternCompData"]},null)],function(t,e){t(e,1,0,e.component.patternCompData)},null)}function E(t){return r.Ab(0,[(t()(),r.mb(0,0,null,null,1,"app-composite",[],null,null,null,y,g)),r.lb(1,49152,null,0,w,[h,d.a,b.a],null,null)],null,null)}var k=r.ib("app-composite",w,E,{},{},[]),C=n("Ip0R"),v=n("ZYCi"),j=function(){return function(){}}(),N=n("FpXt");n.d(e,"CompositeModuleNgFactory",function(){return D});var D=r.jb(o,[],function(t){return r.rb([r.sb(512,r.j,r.Z,[[8,[a.a,k]],[3,r.j],r.x]),r.sb(4608,C.j,C.i,[r.u,[2,C.p]]),r.sb(1073742336,C.c,C.c,[]),r.sb(1073742336,v.n,v.n,[[2,v.t],[2,v.k]]),r.sb(1073742336,j,j,[]),r.sb(1073742336,N.a,N.a,[]),r.sb(1073742336,o,o,[]),r.sb(1024,v.i,function(){return[[{path:"",component:w}]]},[])])})}}]);