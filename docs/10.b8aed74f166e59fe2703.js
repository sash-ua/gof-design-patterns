(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{t0dc:function(t,n,e){"use strict";e.r(n);var r=e("CcnG"),o=function(){},i=e("pMnS"),a=e("C6Wc"),u=e("sCOJ"),c=e("rKjR"),s=e("Kvgl"),l=e("mrSG"),p=function(){function t(){this.calc=new k,this.controller=new h}return t.prototype.run=function(t){return this.controller.execCommand(t)},t.prototype.undo=function(){this.controller.before()},t.prototype.redo=function(){this.controller.after()},t.prototype.clear=function(){this.controller.clear()},t.prototype.cashedResult=function(t){console.log(this.controller.cashedResult(t))},t.prototype.add=function(t){console.log(this.run(new d(this.calc,t)))},t.prototype.sub=function(t){console.log(this.run(new m(this.calc,t)))},t.prototype.div=function(t){console.log(this.run(new y(this.calc,t)))},t.prototype.mult=function(t){console.log(this.run(new g(this.calc,t)))},t}(),h=function(){function t(){this.indx=0,this.stack=new Map}return t.prototype.saveToStack=function(t){this.stack.set(this.indx,t)},t.prototype.execCommand=function(t){return this.saveToStack(t),this.stack.get(this.indx++).execute()},t.prototype.cashedResult=function(t){return this.stack.has(t)?this.stack.get(t).result:"No result by the ID"},t.prototype.before=function(){this.indx=this.indx>0?--this.indx:0},t.prototype.after=function(){var t=this.stack.size-1;this.indx=this.indx<t?++this.indx:t},t.prototype.clear=function(){this.stack=new Map},t}(),f=function(){function t(){}return Object.defineProperty(t.prototype,"result",{get:function(){return this._result},set:function(t){this._result=t},enumerable:!0,configurable:!0}),t}(),d=function(t){function n(n,e){var r=t.call(this)||this;return r.arf=n,r.args=e,r}return Object(l.c)(n,t),n.prototype.execute=function(){return this.result=this.arf.run(function(t){return t[0]+t[1]},this.args),this.result},n}(f),m=function(t){function n(n,e){var r=t.call(this)||this;return r.arf=n,r.args=e,r}return Object(l.c)(n,t),n.prototype.execute=function(){return this.result=this.arf.run(function(t){return t[0]-t[1]},this.args),this.result},n}(f),y=function(t){function n(n,e){var r=t.call(this)||this;return r.arf=n,r.args=e,r}return Object(l.c)(n,t),n.prototype.execute=function(){return this.result=this.arf.run(function(t){return 0!==t[1]?t[0]/t[1]:"Cannot divide by zero"},this.args),this.result},n}(f),g=function(t){function n(n,e){var r=t.call(this)||this;return r.arf=n,r.args=e,r}return Object(l.c)(n,t),n.prototype.execute=function(){return this.result=this.arf.run(function(t){return t[0]*t[1]},this.args),this.result},n}(f),k=function(){function t(){}return t.prototype.run=function(t){for(var n=[],e=1;e<arguments.length;e++)n[e-1]=arguments[e];return t.apply(void 0,n)},t}(),b=function(){function t(){}return t.prototype.calculator=function(){new p},t.ngInjectableDef=r.P({factory:function(){return new t},token:t,providedIn:"root"}),t}(),v=e("67Y/"),w=e("y2Yq"),x=function(){return function(t,n){this.calc=t,this.http=n,this.patternCompData={gitLink:s.a.behavioral.command.gitApiLink,wikiLink:s.a.behavioral.command.wikiLink,sampleLink:s.a.behavioral.command.sampleLink,linkName:c.a.linkToSampleName,sample:c.a.sampleTitle},this.calc.calculator();var e=this.http.getData(this.patternCompData.gitLink).pipe(Object(v.a)(function(t){return t?atob(t.content):null}));this.patternCompData=Object.assign(this.patternCompData,{content$:e})}}(),C=r.Ia({encapsulation:0,styles:[[""]],data:{}});function j(t){return r.Xa(0,[(t()(),r.Ka(0,0,null,null,1,"app-pattern",[],null,null,null,a.b,a.a)),r.Ja(1,114688,null,0,u.a,[],{patternCompData:[0,"patternCompData"]},null)],function(t,n){t(n,1,0,n.component.patternCompData)},null)}var D=r.Ga("app-command",x,function(t){return r.Xa(0,[(t()(),r.Ka(0,0,null,null,1,"app-command",[],null,null,null,j,C)),r.Ja(1,49152,null,0,x,[b,w.a],null,null)],null,null)},{},{},[]),O=e("Ip0R"),Q=e("ZYCi"),L=function(){},I=e("FpXt");e.d(n,"CommandModuleNgFactory",function(){return J});var J=r.Ha(o,[],function(t){return r.Pa([r.Qa(512,r.j,r.X,[[8,[i.a,D]],[3,r.j],r.v]),r.Qa(4608,O.j,O.i,[r.s,[2,O.p]]),r.Qa(1073742336,O.c,O.c,[]),r.Qa(1073742336,Q.n,Q.n,[[2,Q.t],[2,Q.k]]),r.Qa(1073742336,L,L,[]),r.Qa(1073742336,I.a,I.a,[]),r.Qa(1073742336,o,o,[]),r.Qa(1024,Q.i,function(){return[[{path:"",component:x}]]},[])])})}}]);