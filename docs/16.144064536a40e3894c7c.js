(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{kKon:function(n,t,e){"use strict";e.r(t);var r=e("CcnG"),o=function(){},a=e("pMnS"),l=e("zBzZ"),i=e("dcwU"),s=e("ZYjt"),u=e("Bzs4"),c=e("rKjR"),p=e("L5ZQ"),m=e("mrSG"),d=function(n){function t(t){var e=n.call(this)||this;return e.state.name=Symbol(t),e.state.msg="Element "+t+" rendered",e.state.rawName=t,e.drawEl(),e}return Object(m.b)(t,n),t.prototype.drawEl=function(){this.state.renderer.push(this.state.msg)},t}(function(){function n(){this.state={rawName:"",name:Symbol(),msg:"",errMsg:"No such method",renderer:[]}}return n.prototype.addElement=function(n){return new Error(this.state.errMsg)},n.prototype.getChild=function(n){return new Error(this.state.errMsg)},n.prototype.getChildren=function(){return new Error(this.state.errMsg)},n.prototype.removeEl=function(){return new Error(this.state.errMsg)},n}()),h=function(){function n(n){this.state={rawName:"",name:Symbol(),msg:"",errMsg:"No such method",renderer:[]},this.nodes=new Map,this.state.name=Symbol(n),this.state.msg="Complex element "+n+" rendered",this.drawEl(),this.state.rawName=n}return n.prototype.drawEl=function(){this.state.renderer.push(this.state.msg)},n.prototype.addElement=function(n){this.nodes.set(n.state.name,n)},n.prototype.getChild=function(n){var t=n.state;return this.nodes.has(t.name)?this.nodes.get(t.name):new Error("Element '"+t.rawName+"' does not exists!")},n.prototype.getChildren=function(){return this.nodes},n.prototype.removeEl=function(){this.nodes.delete(this.state.name)},n}(),f=function(){function n(){}return n.prototype.composite=function(){var n=new h("Root"),t=new d("line"),e=new d("circle"),r=new h("canvas1"),o=new d("line");new d("out"),r.addElement(o),n.addElement(t),n.addElement(e),n.addElement(r)},n.ngInjectableDef=r.P({factory:function(){return new n},token:n,providedIn:"root"}),n}(),w=function(){function n(n){this.comp=n,this.wikiLink=u.a.structural.composite,this.sampleLink=p.a.structural.composite,this.linkName=c.a.linkToSampleName,this.comp.composite()}return n.prototype.ngOnInit=function(){},n}(),g=r.Ha({encapsulation:0,styles:[[""]],data:{}});function y(n){return r.Ua(0,[(n()(),r.Ja(0,0,null,null,1,"app-wiki-pattern-description",[],null,null,null,l.b,l.a)),r.Ia(1,114688,null,0,i.a,[s.b],{queryString:[0,"queryString"]},null),(n()(),r.Ja(2,0,null,null,2,"h3",[],null,null,null,null,null)),(n()(),r.Ja(3,0,null,null,1,"a",[["rel","noopener"],["target","_blank"]],[[8,"href",4]],null,null,null,null)),(n()(),r.Ta(4,null,["",""]))],function(n,t){n(t,1,0,t.component.wikiLink)},function(n,t){var e=t.component;n(t,3,0,e.sampleLink),n(t,4,0,e.linkName)})}var E=r.Fa("app-composite",w,function(n){return r.Ua(0,[(n()(),r.Ja(0,0,null,null,1,"app-composite",[],null,null,null,y,g)),r.Ia(1,114688,null,0,w,[f],null,null)],function(n,t){n(t,1,0)},null)},{},{},[]),k=e("Ip0R"),b=e("ZYCi"),v=function(){},N=e("FpXt");e.d(t,"CompositeModuleNgFactory",function(){return M});var M=r.Ga(o,[],function(n){return r.Oa([r.Pa(512,r.j,r.W,[[8,[a.a,E]],[3,r.j],r.v]),r.Pa(4608,k.i,k.h,[r.s,[2,k.n]]),r.Pa(1073742336,k.b,k.b,[]),r.Pa(1073742336,b.n,b.n,[[2,b.t],[2,b.k]]),r.Pa(1073742336,v,v,[]),r.Pa(1073742336,N.a,N.a,[]),r.Pa(1073742336,o,o,[]),r.Pa(1024,b.i,function(){return[[{path:"",component:w}]]},[])])})}}]);