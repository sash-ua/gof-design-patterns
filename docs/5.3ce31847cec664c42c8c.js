(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{gx0B:function(t,n,e){"use strict";e.r(n);var r=e("CcnG"),o=function(){},u=e("pMnS"),i=e("ni4H"),a=e("ashd"),l=e("ZYjt"),s=e("Ip0R"),c=e("rKjR"),p=e("Kvgl"),b=e("mrSG"),h=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return Object(b.b)(n,t),Object.defineProperty(n.prototype,"state",{get:function(){return this.subState},set:function(t){this.subState=t},enumerable:!0,configurable:!0}),n}(function(){function t(){this.observersList=new Map}return t.prototype.attach=function(t){this.observersList.set(t.name,t)},t.prototype.detach=function(t){this.observersList.delete(t.name)},t.prototype.notify=function(){this.observersList.forEach(function(t){return t.update()})},t}()),f=function(){},v=function(t){function n(n){var e=t.call(this)||this;return e.subject=n,e.name="Observer 1",e}return Object(b.b)(n,t),n.prototype.update=function(){this.obsState=this.subject.state,console.log("Observer 1",this.obsState)},n}(f),m=function(t){function n(n){var e=t.call(this)||this;return e.subject=n,e.name="Observer 2",e}return Object(b.b)(n,t),n.prototype.update=function(){this.obsState=this.subject.state,console.log("Observer 2",this.obsState)},n}(f),y=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return Object(b.b)(n,t),Object.defineProperty(n.prototype,"state",{get:function(){return this.subjectState},set:function(t){this.subjectState=t},enumerable:!0,configurable:!0}),n.prototype.notify=function(){var t=this;this.observersList.forEach(function(n){return n.update(t.state)})},n}(function(){function t(){this.observersList=new Map}return t.prototype.attach=function(t){this.observersList.set(t.name,t)},t.prototype.detach=function(t){this.observersList.delete(t.name)},t}()),d=function(){function t(){this.name="Observer 1"}return t.prototype.update=function(t){this.observerState=t,console.log("Observer 1",this.observerState)},t}(),g=function(){function t(){this.name="Observer 2"}return t.prototype.update=function(t){this.observerState=t,console.log("Observer 2",this.observerState)},t}(),k=function(){function t(){}return t.prototype.pullObserver=function(){var t=new h;t.attach(new v(t)),t.attach(new m(t)),t.state="Some state..."},t.prototype.pushObserver=function(){var t=new y;t.attach(new d),t.attach(new g),t.state="Some state for push example"},t.ngInjectableDef=r.P({factory:function(){return new t},token:t,providedIn:"root"}),t}(),O=e("y2Yq"),S=e("67Y/"),j=function(){function t(t,n){this.obs=t,this.http=n,this.gitLink=p.a.behavioral.observer.gitApiLink,this.wikiLink=p.a.behavioral.observer.wikiLink,this.sampleLink=p.a.behavioral.observer.sampleLink,this.linkName=c.a.linkToSampleName,this.sample=c.a.sampleTitle,this.obs.pullObserver(),this.obs.pushObserver()}return t.prototype.ngAfterViewInit=function(){this.content$=this.http.getData(this.gitLink).pipe(Object(S.a)(function(t){return t?atob(t.content):null}))},t}(),w=r.Ia({encapsulation:0,styles:[[""]],data:{}});function L(t){return r.Xa(0,[(t()(),r.Ka(0,0,null,null,1,"app-embedded-container",[],null,null,null,i.b,i.a)),r.Ja(1,114688,null,0,a.a,[l.b],{queryString:[0,"queryString"]},null),(t()(),r.Ka(2,0,null,null,1,"h3",[],null,null,null,null,null)),(t()(),r.Va(3,null,["",""])),(t()(),r.Ka(4,0,null,null,2,"pre",[["class","github-content"]],null,null,null,null,null)),(t()(),r.Va(5,null,["",""])),r.Sa(131072,s.b,[r.h]),(t()(),r.Ka(7,0,null,null,2,"h3",[],null,null,null,null,null)),(t()(),r.Ka(8,0,null,null,1,"a",[["rel","noopener"],["target","_blank"]],[[8,"href",4]],null,null,null,null)),(t()(),r.Va(9,null,["",""]))],function(t,n){t(n,1,0,n.component.wikiLink)},function(t,n){var e=n.component;t(n,3,0,e.sample),t(n,5,0,r.Wa(n,5,0,r.Ra(n,6).transform(e.content$))),t(n,8,0,e.sampleLink),t(n,9,0,e.linkName)})}var K=r.Ga("app-observer",j,function(t){return r.Xa(0,[(t()(),r.Ka(0,0,null,null,1,"app-observer",[],null,null,null,L,w)),r.Ja(1,4243456,null,0,j,[k,O.a],null,null)],null,null)},{},{},[]),Q=e("ZYCi"),I=function(){},J=e("FpXt");e.d(n,"ObserverModuleNgFactory",function(){return M});var M=r.Ha(o,[],function(t){return r.Pa([r.Qa(512,r.j,r.X,[[8,[u.a,K]],[3,r.j],r.v]),r.Qa(4608,s.j,s.i,[r.s,[2,s.p]]),r.Qa(1073742336,s.c,s.c,[]),r.Qa(1073742336,Q.n,Q.n,[[2,Q.t],[2,Q.k]]),r.Qa(1073742336,I,I,[]),r.Qa(1073742336,J.a,J.a,[]),r.Qa(1073742336,o,o,[]),r.Qa(1024,Q.i,function(){return[[{path:"",component:j}]]},[])])})}}]);