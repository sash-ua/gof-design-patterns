(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{kKon:function(n,t,e){"use strict";e.r(t);var l=e("CcnG"),r=function(){},a=e("pMnS"),o=e("ni4H"),i=e("ashd"),u=e("ZYjt"),s=e("Ip0R"),c=e("rKjR"),p=e("Kvgl"),m=e("mrSG"),h=function(n){function t(t){var e=n.call(this)||this;return e.state.name=Symbol(t),e.state.msg="Element "+t+" rendered",e.state.rawName=t,e.drawEl(),e}return Object(m.b)(t,n),t.prototype.drawEl=function(){this.state.renderer.push(this.state.msg)},t}(function(){function n(){this.state={rawName:"",name:Symbol(),msg:"",errMsg:"No such method",renderer:[]}}return n.prototype.addElement=function(n){return new Error(this.state.errMsg)},n.prototype.getChild=function(n){return new Error(this.state.errMsg)},n.prototype.getChildren=function(){return new Error(this.state.errMsg)},n.prototype.removeEl=function(){return new Error(this.state.errMsg)},n}()),d=function(){function n(n){this.state={rawName:"",name:Symbol(),msg:"",errMsg:"No such method",renderer:[]},this.nodes=new Map,this.state.name=Symbol(n),this.state.msg="Complex element "+n+" rendered",this.drawEl(),this.state.rawName=n}return n.prototype.drawEl=function(){this.state.renderer.push(this.state.msg)},n.prototype.addElement=function(n){this.nodes.set(n.state.name,n)},n.prototype.getChild=function(n){var t=n.state;return this.nodes.has(t.name)?this.nodes.get(t.name):new Error("Element '"+t.rawName+"' does not exists!")},n.prototype.getChildren=function(){return this.nodes},n.prototype.removeEl=function(){this.nodes.delete(this.state.name)},n}(),f=function(){function n(){}return n.prototype.composite=function(){var n=new d("Root"),t=new h("line"),e=new h("circle"),l=new d("canvas1"),r=new h("line");new h("out"),l.addElement(r),n.addElement(t),n.addElement(e),n.addElement(l)},n.ngInjectableDef=l.P({factory:function(){return new n},token:n,providedIn:"root"}),n}(),w=e("y2Yq"),g=e("67Y/"),y=function(){function n(n,t){this.comp=n,this.http=t,this.gitLink=p.a.structural.composite.gitApiLink,this.wikiLink=p.a.structural.composite.wikiLink,this.sampleLink=p.a.structural.composite.sampleLink,this.linkName=c.a.linkToSampleName,this.sample=c.a.sampleTitle,this.comp.composite()}return n.prototype.ngAfterViewInit=function(){this.content$=this.http.getData(this.gitLink).pipe(Object(g.a)(function(n){return n?atob(n.content):null}))},n}(),k=l.Ia({encapsulation:0,styles:[[""]],data:{}});function E(n){return l.Xa(0,[(n()(),l.Ka(0,0,null,null,1,"app-embedded-container",[],null,null,null,o.b,o.a)),l.Ja(1,114688,null,0,i.a,[u.b],{queryString:[0,"queryString"]},null),(n()(),l.Ka(2,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),l.Va(3,null,["",""])),(n()(),l.Ka(4,0,null,null,2,"pre",[["class","github-content"]],null,null,null,null,null)),(n()(),l.Va(5,null,["",""])),l.Sa(131072,s.b,[l.h]),(n()(),l.Ka(7,0,null,null,2,"h3",[],null,null,null,null,null)),(n()(),l.Ka(8,0,null,null,1,"a",[["rel","noopener"],["target","_blank"]],[[8,"href",4]],null,null,null,null)),(n()(),l.Va(9,null,["",""]))],function(n,t){n(t,1,0,t.component.wikiLink)},function(n,t){var e=t.component;n(t,3,0,e.sample),n(t,5,0,l.Wa(t,5,0,l.Ra(t,6).transform(e.content$))),n(t,8,0,e.sampleLink),n(t,9,0,e.linkName)})}var b=l.Ga("app-composite",y,function(n){return l.Xa(0,[(n()(),l.Ka(0,0,null,null,1,"app-composite",[],null,null,null,E,k)),l.Ja(1,4243456,null,0,y,[f,w.a],null,null)],null,null)},{},{},[]),v=e("ZYCi"),N=function(){},S=e("FpXt");e.d(t,"CompositeModuleNgFactory",function(){return K});var K=l.Ha(r,[],function(n){return l.Pa([l.Qa(512,l.j,l.X,[[8,[a.a,b]],[3,l.j],l.v]),l.Qa(4608,s.j,s.i,[l.s,[2,s.p]]),l.Qa(1073742336,s.c,s.c,[]),l.Qa(1073742336,v.n,v.n,[[2,v.t],[2,v.k]]),l.Qa(1073742336,N,N,[]),l.Qa(1073742336,S.a,S.a,[]),l.Qa(1073742336,r,r,[]),l.Qa(1024,v.i,function(){return[[{path:"",component:y}]]},[])])})}}]);