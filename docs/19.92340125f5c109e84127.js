(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{WBz2:function(n,l,t){"use strict";t.r(l);var i,u=t("CcnG"),a=function(){},e=t("pMnS"),o=t("ni4H"),r=t("ashd"),c=t("ZYjt"),s=t("Ip0R"),p=t("rKjR"),f=t("Kvgl");!function(n){var l=function(){function n(){this.luminosity=0}return n.prototype.shining=function(){return this.luminosity++},n}();n.SunInstance=new l}(i||(i={}));var h=function(){function n(){}return n.prototype.singleton=function(){},n.ngInjectableDef=u.P({factory:function(){return new n},token:n,providedIn:"root"}),n}(),g=t("67Y/"),k=t("y2Yq"),m=function(){return function(n,l){this.singleton=n,this.http=l,this.gitLink=f.a.creational.singleton.gitApiLink,this.wikiLink=f.a.creational.singleton.wikiLink,this.sampleLink=f.a.creational.singleton.sampleLink,this.linkName=p.a.linkToSampleName,this.sample=p.a.sampleTitle,this.singleton.singleton(),this.content$=this.http.getData(this.gitLink).pipe(Object(g.a)(function(n){return n?atob(n.content):null}))}}(),b=u.Ia({encapsulation:0,styles:[[""]],data:{}});function d(n){return u.Xa(0,[(n()(),u.Ka(0,0,null,null,1,"app-embedded-container",[],null,null,null,o.b,o.a)),u.Ja(1,114688,null,0,r.a,[c.b],{queryString:[0,"queryString"]},null),(n()(),u.Ka(2,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),u.Va(3,null,["",""])),(n()(),u.Ka(4,0,null,null,2,"pre",[["class","github-content"]],null,null,null,null,null)),(n()(),u.Va(5,null,["",""])),u.Sa(131072,s.b,[u.h]),(n()(),u.Ka(7,0,null,null,2,"h3",[],null,null,null,null,null)),(n()(),u.Ka(8,0,null,null,1,"a",[["rel","noopener"],["target","_blank"]],[[8,"href",4]],null,null,null,null)),(n()(),u.Va(9,null,["",""]))],function(n,l){n(l,1,0,l.component.wikiLink)},function(n,l){var t=l.component;n(l,3,0,t.sample),n(l,5,0,u.Wa(l,5,0,u.Ra(l,6).transform(t.content$))),n(l,8,0,t.sampleLink),n(l,9,0,t.linkName)})}var w=u.Ga("app-singleton",m,function(n){return u.Xa(0,[(n()(),u.Ka(0,0,null,null,1,"app-singleton",[],null,null,null,d,b)),u.Ja(1,49152,null,0,m,[h,k.a],null,null)],null,null)},{},{},[]),y=t("ZYCi"),v=function(){},L=t("FpXt");t.d(l,"SingletonModuleNgFactory",function(){return K});var K=u.Ha(a,[],function(n){return u.Pa([u.Qa(512,u.j,u.X,[[8,[e.a,w]],[3,u.j],u.v]),u.Qa(4608,s.j,s.i,[u.s,[2,s.p]]),u.Qa(1073742336,s.c,s.c,[]),u.Qa(1073742336,y.n,y.n,[[2,y.t],[2,y.k]]),u.Qa(1073742336,v,v,[]),u.Qa(1073742336,L.a,L.a,[]),u.Qa(1073742336,a,a,[]),u.Qa(1024,y.i,function(){return[[{path:"",component:m}]]},[])])})}}]);