(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{gx0B:function(t,e,n){"use strict";n.r(e);var r=n("CcnG"),o=function(){return function(){}}(),s=n("pMnS"),i=n("C6Wc"),a=n("sCOJ"),u=n("rKjR"),c=n("Kvgl"),p=n("mrSG"),l=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(p.c)(e,t),Object.defineProperty(e.prototype,"state",{get:function(){return this._state},set:function(t){this._state=t},enumerable:!0,configurable:!0}),e}(function(){function t(){this.observersList=new Map}return t.prototype.attach=function(t){this.observersList.set(t.name,t)},t.prototype.detach=function(t){this.observersList.delete(t.name)},t.prototype.notify=function(){this.observersList.forEach(function(t){return t.update()})},t}()),b=function(){function t(){}return Object.defineProperty(t.prototype,"state",{get:function(){return this._state},set:function(t){this._state=t},enumerable:!0,configurable:!0}),t}(),f=function(t){function e(e){var n=t.call(this)||this;return n.subject=e,n.name="Observer 1",n}return Object(p.c)(e,t),e.prototype.update=function(){this.state=this.subject.state,console.log("Observer 1",this.state)},e}(b),h=function(t){function e(e){var n=t.call(this)||this;return n.subject=e,n.name="Observer 2",n}return Object(p.c)(e,t),e.prototype.update=function(){this.state=this.subject.state,console.log("Observer 2",this.state)},e}(b),v=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(p.c)(e,t),Object.defineProperty(e.prototype,"state",{get:function(){return this._state},set:function(t){this._state=t},enumerable:!0,configurable:!0}),e.prototype.notify=function(){var t=this;this.observersList.forEach(function(e){return e.update(t.state)})},e}(function(){function t(){this.observersList=new Map}return t.prototype.attach=function(t){this.observersList.set(t.name,t)},t.prototype.detach=function(t){this.observersList.delete(t.name)},t}()),m=function(){function t(){this.name="Observer 1"}return t.prototype.update=function(t){this.observerState=t,console.log("Observer 1",this.observerState)},t}(),y=function(){function t(){this.name="Observer 2"}return t.prototype.update=function(t){this.observerState=t,console.log("Observer 2",this.observerState)},t}(),d=function(){function t(){}return t.prototype.pullObserver=function(){var t;(t=new l).attach(new f(t)),t.attach(new h(t)),t.state="Some state..."},t.prototype.pushObserver=function(){var t;(t=new v).attach(new m),t.attach(new y),t.state="Some state for push example"},t.ngInjectableDef=r.R({factory:function(){return new t},token:t,providedIn:"root"}),t}(),O=n("0v2V"),g=function(){function t(t,e){this.obs=t,this.di=e,this.patternCompData={gitLink:c.a.behavioral.observer.gitApiLink,wikiLink:c.a.behavioral.observer.wikiLink,sampleLink:c.a.behavioral.observer.sampleLink,linkName:u.a.linkToSampleName,sample:u.a.sampleTitle}}return t.prototype.ngOnInit=function(){this.obs.pullObserver(),this.obs.pushObserver(),this.patternCompData=this.di.getContent(this.patternCompData)},t}(),j=r.kb({encapsulation:0,styles:[[""]],data:{}});function w(t){return r.Ab(0,[(t()(),r.mb(0,0,null,null,1,"app-pattern",[],null,null,null,i.b,i.a)),r.lb(1,114688,null,0,a.a,[],{patternCompData:[0,"patternCompData"]},null)],function(t,e){t(e,1,0,e.component.patternCompData)},null)}function k(t){return r.Ab(0,[(t()(),r.mb(0,0,null,null,1,"app-observer",[],null,null,null,w,j)),r.lb(1,114688,null,0,g,[d,O.a],null,null)],function(t,e){t(e,1,0)},null)}var L=r.ib("app-observer",g,k,{},{},[]),C=n("Ip0R"),S=n("ZYCi"),D=function(){return function(){}}(),_=n("FpXt");n.d(e,"ObserverModuleNgFactory",function(){return I});var I=r.jb(o,[],function(t){return r.rb([r.sb(512,r.j,r.Z,[[8,[s.a,L]],[3,r.j],r.x]),r.sb(4608,C.j,C.i,[r.u,[2,C.p]]),r.sb(1073742336,C.c,C.c,[]),r.sb(1073742336,S.n,S.n,[[2,S.t],[2,S.k]]),r.sb(1073742336,D,D,[]),r.sb(1073742336,_.a,_.a,[]),r.sb(1073742336,o,o,[]),r.sb(1024,S.i,function(){return[[{path:"",component:g}]]},[])])})}}]);