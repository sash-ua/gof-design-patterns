(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{VNld:function(n,t,l){"use strict";l.r(t);var i=l("CcnG"),u=function(){},a=l("pMnS"),e=l("ni4H"),o=l("ashd"),r=l("ZYjt"),c=l("Ip0R"),p=l("rKjR"),s=l("Kvgl"),f=l("mrSG"),h=function(n){function t(){return null!==n&&n.apply(this,arguments)||this}return Object(f.b)(t,n),t.prototype.send=function(n,t){this.c1===t?this.c2.notify(n):this.c1.notify(n)},t}(function(){}),d=function(n){this.mediator=n},m=function(n){function t(){return null!==n&&n.apply(this,arguments)||this}return Object(f.b)(t,n),t.prototype.send=function(n){this.mediator.send(n,this)},t.prototype.notify=function(n){console.log("Colleague1",n)},t}(d),b=function(n){function t(){return null!==n&&n.apply(this,arguments)||this}return Object(f.b)(t,n),t.prototype.send=function(n){this.mediator.send(n,this)},t.prototype.notify=function(n){console.log("Colleague2",n)},t}(d),k=function(){function n(){}return n.prototype.mediator=function(){var n,t,l;n=new h,t=new m(n),l=new b(n),n.c1=t,n.c2=l},n.ngInjectableDef=i.P({factory:function(){return new n},token:n,providedIn:"root"}),n}(),y=l("67Y/"),g=l("y2Yq"),w=function(){function n(n,t){this.mediator=n,this.http=t,this.gitLink=s.a.behavioral.mediator.gitApiLink,this.wikiLink=s.a.behavioral.mediator.wikiLink,this.sampleLink=s.a.behavioral.mediator.sampleLink,this.linkName=p.a.linkToSampleName,this.sample=p.a.sampleTitle,this.mediator.mediator()}return n.prototype.ngAfterViewInit=function(){this.content$=this.http.getData(this.gitLink).pipe(Object(y.a)(function(n){return n?atob(n.content):null}))},n}(),v=i.Ia({encapsulation:0,styles:[[""]],data:{}});function j(n){return i.Xa(0,[(n()(),i.Ka(0,0,null,null,1,"app-embedded-container",[],null,null,null,e.b,e.a)),i.Ja(1,114688,null,0,o.a,[r.b],{queryString:[0,"queryString"]},null),(n()(),i.Ka(2,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),i.Va(3,null,["",""])),(n()(),i.Ka(4,0,null,null,2,"pre",[["class","github-content"]],null,null,null,null,null)),(n()(),i.Va(5,null,["",""])),i.Sa(131072,c.b,[i.h]),(n()(),i.Ka(7,0,null,null,2,"h3",[],null,null,null,null,null)),(n()(),i.Ka(8,0,null,null,1,"a",[["rel","noopener"],["target","_blank"]],[[8,"href",4]],null,null,null,null)),(n()(),i.Va(9,null,["",""]))],function(n,t){n(t,1,0,t.component.wikiLink)},function(n,t){var l=t.component;n(t,3,0,l.sample),n(t,5,0,i.Wa(t,5,0,i.Ra(t,6).transform(l.content$))),n(t,8,0,l.sampleLink),n(t,9,0,l.linkName)})}var L=i.Ga("app-mediator",w,function(n){return i.Xa(0,[(n()(),i.Ka(0,0,null,null,1,"app-mediator",[],null,null,null,j,v)),i.Ja(1,4243456,null,0,w,[k,g.a],null,null)],null,null)},{},{},[]),K=l("ZYCi"),Q=function(){},S=l("FpXt");l.d(t,"MediatorModuleNgFactory",function(){return I});var I=i.Ha(u,[],function(n){return i.Pa([i.Qa(512,i.j,i.X,[[8,[a.a,L]],[3,i.j],i.v]),i.Qa(4608,c.j,c.i,[i.s,[2,c.p]]),i.Qa(1073742336,c.c,c.c,[]),i.Qa(1073742336,K.n,K.n,[[2,K.t],[2,K.k]]),i.Qa(1073742336,Q,Q,[]),i.Qa(1073742336,S.a,S.a,[]),i.Qa(1073742336,u,u,[]),i.Qa(1024,K.i,function(){return[[{path:"",component:w}]]},[])])})}}]);