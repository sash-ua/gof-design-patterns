(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{t0dc:function(t,n,r){"use strict";r.r(n);var e=r("CcnG"),o=function(){return function(){}}(),i=r("pMnS"),u=r("C6Wc"),c=r("sCOJ"),a=r("rKjR"),s=r("Kvgl"),l=r("mrSG"),p=function(){function t(){this.calc=new g,this.controller=new f}return t.prototype.run=function(t){return this.controller.execCommand(t)},t.prototype.undo=function(){this.controller.before()},t.prototype.redo=function(){this.controller.after()},t.prototype.clear=function(){this.controller.clear()},t.prototype.cashedResult=function(t){console.log(this.controller.cashedResult(t))},t.prototype.add=function(t){console.log(this.run(new d(this.calc,t)))},t.prototype.sub=function(t){console.log(this.run(new b(this.calc,t)))},t.prototype.div=function(t){console.log(this.run(new m(this.calc,t)))},t.prototype.mult=function(t){console.log(this.run(new y(this.calc,t)))},t}(),f=function(){function t(){this.indx=0,this.stack=new Map}return t.prototype.saveToStack=function(t){this.stack.set(this.indx,t)},t.prototype.execCommand=function(t){return this.saveToStack(t),this.stack.get(this.indx++).execute()},t.prototype.cashedResult=function(t){return this.stack.has(t)?this.stack.get(t).result:"No check by the ID"},t.prototype.before=function(){this.indx=this.indx>0?--this.indx:0},t.prototype.after=function(){var t=this.stack.size-1;this.indx=this.indx<t?++this.indx:t},t.prototype.clear=function(){this.stack=new Map},t}(),h=function(){function t(){}return Object.defineProperty(t.prototype,"result",{get:function(){return this._result},set:function(t){this._result=t},enumerable:!0,configurable:!0}),t}(),d=function(t){function n(n,r){var e=t.call(this)||this;return e.arf=n,e.args=r,e}return Object(l.c)(n,t),n.prototype.execute=function(){return this.result=this.arf.run(function(t){return t[0]+t[1]},this.args),this.result},n}(h),b=function(t){function n(n,r){var e=t.call(this)||this;return e.arf=n,e.args=r,e}return Object(l.c)(n,t),n.prototype.execute=function(){return this.result=this.arf.run(function(t){return t[0]-t[1]},this.args),this.result},n}(h),m=function(t){function n(n,r){var e=t.call(this)||this;return e.arf=n,e.args=r,e}return Object(l.c)(n,t),n.prototype.execute=function(){return this.result=this.arf.run(function(t){return 0!==t[1]?t[0]/t[1]:"Cannot divide by zero"},this.args),this.result},n}(h),y=function(t){function n(n,r){var e=t.call(this)||this;return e.arf=n,e.args=r,e}return Object(l.c)(n,t),n.prototype.execute=function(){return this.result=this.arf.run(function(t){return t[0]*t[1]},this.args),this.result},n}(h),g=function(){function t(){}return t.prototype.run=function(t){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];return t.apply(void 0,n)},t}(),k=function(){function t(){}return t.prototype.calculator=function(){new p},t.ngInjectableDef=e.R({factory:function(){return new t},token:t,providedIn:"root"}),t}(),v=r("0v2V"),w=function(){function t(t,n){this.calc=t,this.di=n,this.patternCompData={gitLink:s.a.behavioral.command.gitApiLink,wikiLink:s.a.behavioral.command.wikiLink,sampleLink:s.a.behavioral.command.sampleLink,linkName:a.a.linkToSampleName,sample:a.a.sampleTitle}}return t.prototype.ngOnInit=function(){this.calc.calculator(),this.patternCompData=this.di.getContent(this.patternCompData)},t}(),x=e.kb({encapsulation:0,styles:[[""]],data:{}});function C(t){return e.Ab(0,[(t()(),e.mb(0,0,null,null,1,"app-pattern",[],null,null,null,u.b,u.a)),e.lb(1,114688,null,0,c.a,[],{patternCompData:[0,"patternCompData"]},null)],function(t,n){t(n,1,0,n.component.patternCompData)},null)}function j(t){return e.Ab(0,[(t()(),e.mb(0,0,null,null,1,"app-command",[],null,null,null,C,x)),e.lb(1,114688,null,0,w,[k,v.a],null,null)],function(t,n){t(n,1,0)},null)}var D=e.ib("app-command",w,j,{},{},[]),O=r("Ip0R"),L=r("ZYCi"),R=function(){return function(){}}(),I=r("FpXt");r.d(n,"CommandModuleNgFactory",function(){return S});var S=e.jb(o,[],function(t){return e.rb([e.sb(512,e.j,e.Z,[[8,[i.a,D]],[3,e.j],e.x]),e.sb(4608,O.j,O.i,[e.u,[2,O.p]]),e.sb(1073742336,O.c,O.c,[]),e.sb(1073742336,L.n,L.n,[[2,L.t],[2,L.k]]),e.sb(1073742336,R,R,[]),e.sb(1073742336,I.a,I.a,[]),e.sb(1073742336,o,o,[]),e.sb(1024,L.i,function(){return[[{path:"",component:w}]]},[])])})}}]);