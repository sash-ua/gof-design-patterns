(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{jlHL:function(n,t,e){"use strict";e.r(t);var l=e("CcnG"),i=function(){},u=e("pMnS"),r=e("ni4H"),a=e("ashd"),o=e("ZYjt"),c=e("Ip0R"),p=e("rKjR"),s=e("Kvgl"),f=e("mrSG"),h=function(n){function t(t){var e=n.call(this,t)||this;return e.car=t,e}return Object(f.b)(t,n),t.prototype.name=function(){return this.car.name},t.prototype.start=function(){this.car.start()},t.prototype.speedUp=function(n){this.car.speedUp(n)},t.prototype.currSpeed=function(){return this.car.currSpeed()},t}(function(n){this.car=n}),d=function(){function n(){}return n.prototype.start=function(){0===this.speed&&(this.speed=1)},n.prototype.speedUp=function(n){this.speed=n<=this.speedLimit?n:this.speedLimit},n.prototype.currSpeed=function(){return this.speed},n}(),b=function(n){function t(){var t=n.call(this)||this;return t.name="Fiesta",t.speed=0,t.speedLimit=220,t}return Object(f.b)(t,n),t}(d),m=function(n){function t(){var t=n.call(this)||this;return t.name="Mustang",t.speed=0,t.speedLimit=280,t}return Object(f.b)(t,n),t}(d),g=function(){function n(){}return n.prototype.bridge=function(){new h(new b),new h(new m)},n.ngInjectableDef=l.P({factory:function(){return new n},token:n,providedIn:"root"}),n}(),k=e("67Y/"),w=e("y2Yq"),y=function(){function n(n,t){this.bridge=n,this.http=t,this.gitLink=s.a.structural.bridge.gitApiLink,this.wikiLink=s.a.structural.bridge.wikiLink,this.sampleLink=s.a.structural.bridge.sampleLink,this.linkName=p.a.linkToSampleName,this.sample=p.a.sampleTitle,n.bridge()}return n.prototype.ngAfterViewInit=function(){this.content$=this.http.getData(this.gitLink).pipe(Object(k.a)(function(n){return n?atob(n.content):null}))},n}(),L=l.Ia({encapsulation:0,styles:[[""]],data:{}});function j(n){return l.Xa(0,[(n()(),l.Ka(0,0,null,null,1,"app-embedded-container",[],null,null,null,r.b,r.a)),l.Ja(1,114688,null,0,a.a,[o.b],{queryString:[0,"queryString"]},null),(n()(),l.Ka(2,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),l.Va(3,null,["",""])),(n()(),l.Ka(4,0,null,null,2,"pre",[["class","github-content"]],null,null,null,null,null)),(n()(),l.Va(5,null,["",""])),l.Sa(131072,c.b,[l.h]),(n()(),l.Ka(7,0,null,null,2,"h3",[],null,null,null,null,null)),(n()(),l.Ka(8,0,null,null,1,"a",[["rel","noopener"],["target","_blank"]],[[8,"href",4]],null,null,null,null)),(n()(),l.Va(9,null,["",""]))],function(n,t){n(t,1,0,t.component.wikiLink)},function(n,t){var e=t.component;n(t,3,0,e.sample),n(t,5,0,l.Wa(t,5,0,l.Ra(t,6).transform(e.content$))),n(t,8,0,e.sampleLink),n(t,9,0,e.linkName)})}var v=l.Ga("app-bridge",y,function(n){return l.Xa(0,[(n()(),l.Ka(0,0,null,null,1,"app-bridge",[],null,null,null,j,L)),l.Ja(1,4243456,null,0,y,[g,w.a],null,null)],null,null)},{},{},[]),S=e("ZYCi"),K=function(){},Q=e("FpXt");e.d(t,"BridgeModuleNgFactory",function(){return I});var I=l.Ha(i,[],function(n){return l.Pa([l.Qa(512,l.j,l.X,[[8,[u.a,v]],[3,l.j],l.v]),l.Qa(4608,c.j,c.i,[l.s,[2,c.p]]),l.Qa(1073742336,c.c,c.c,[]),l.Qa(1073742336,S.n,S.n,[[2,S.t],[2,S.k]]),l.Qa(1073742336,K,K,[]),l.Qa(1073742336,Q.a,Q.a,[]),l.Qa(1073742336,i,i,[]),l.Qa(1024,S.i,function(){return[[{path:"",component:y}]]},[])])})}}]);