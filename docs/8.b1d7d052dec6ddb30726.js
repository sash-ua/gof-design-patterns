(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{JD5A:function(t,e,n){"use strict";n.r(e);var r=n("CcnG"),o=function(){},i=n("pMnS"),l=n("zBzZ"),u=n("dcwU"),a=n("ZYjt"),s=n("Bzs4"),c=n("rKjR"),p=n("L5ZQ"),h=n("mrSG"),f=function(t){function e(){return t.call(this)||this}return Object(h.b)(e,t),e.prototype.createKeyIterator=function(){return new y(this)},e.prototype.createValIterator=function(){return new m(this)},Object.defineProperty(e.prototype,"size",{get:function(){return this.keyVault.length},enumerable:!0,configurable:!0}),e.prototype.has=function(t){return this.keyVault.includes(t)},e.prototype.set=function(t,e){var n;return this.has(t)?n=new Error("Key has been existing!"):(this.keyVault.push(t),this.valueVault.push(e),n=this.get(t)===e),n},e.prototype.get=function(t){var e=this.getInd(t);return-1!==e&&this.valueVault[e]},e.prototype.delete=function(t){var e=this.getInd(t);return-1!==e&&(this.keyVault.splice(e,1),this.valueVault.splice(e,1)),this.has(t)},e.prototype.getInd=function(t){return this.keyVault.indexOf(t)},e}(function(){this.keyVault=[],this.valueVault=[]}),g=function(){function t(t){this.iterable=t}return t.prototype.first=function(){return this.getItem(0)},t.prototype.currentItem=function(){return this.getItem(this.current)},t.prototype.next=function(){return this.current++<this.iterable.size-1?this.getItem(this.current):null},t.prototype.isDone=function(){return!(this.current<this.iterable.size||(this.current=0,0))},t}(),y=function(t){function e(e){var n=t.call(this,e)||this;return n.iterable=e,n.current=0,n}return Object(h.b)(e,t),e.prototype.getItem=function(t){return this.iterable.keyVault[t]},e}(g),m=function(t){function e(e){var n=t.call(this,e)||this;return n.iterable=e,n.current=0,n}return Object(h.b)(e,t),e.prototype.getItem=function(t){return this.iterable.valueVault[t]},e}(g),b=function(){function t(){}return t.prototype.iterator=function(){var t=new f;console.log("map.size",t.size),console.log("map.set('first', 1)",t.set("first",1)),console.log("map.set('second', 1)",t.set("second",2)),console.log("map.size",t.size),console.log("map.set('third', 1)",t.set("third",3)),console.log("map.set('third', 1)",t.set("third",55)),console.log("map.size",t.size),console.log("map.set('forth', 1)",t.set("forth",4)),console.log("map.size",t.size),console.log("map.get('first')",t.get("first")),console.log("map.get('none')",t.get("none")),t.delete("none"),t.delete("first"),console.log("map",t);for(var e=t.createKeyIterator(),n=e.first();!e.isDone();n=e.next())console.log(n);var r=t.createValIterator();for(n=r.first();!r.isDone();n=r.next())console.log(n)},t.ngInjectableDef=r.P({factory:function(){return new t},token:t,providedIn:"root"}),t}(),d=function(){return function(t){this.iterator=t,this.wikiLink=s.a.behavioral.iterator,this.sampleLink=p.a.behavioral.iterator,this.linkName=c.a.linkToSampleName,this.iterator.iterator()}}(),k=r.Ha({encapsulation:0,styles:[[""]],data:{}});function v(t){return r.Ua(0,[(t()(),r.Ja(0,0,null,null,1,"app-wiki-pattern-description",[],null,null,null,l.b,l.a)),r.Ia(1,114688,null,0,u.a,[a.b],{queryString:[0,"queryString"]},null),(t()(),r.Ja(2,0,null,null,2,"h3",[],null,null,null,null,null)),(t()(),r.Ja(3,0,null,null,1,"a",[["rel","noopener"],["target","_blank"]],[[8,"href",4]],null,null,null,null)),(t()(),r.Ta(4,null,["",""]))],function(t,e){t(e,1,0,e.component.wikiLink)},function(t,e){var n=e.component;t(e,3,0,n.sampleLink),t(e,4,0,n.linkName)})}var I=r.Fa("app-iterator",d,function(t){return r.Ua(0,[(t()(),r.Ja(0,0,null,null,1,"app-iterator",[],null,null,null,v,k)),r.Ia(1,49152,null,0,d,[b],null,null)],null,null)},{},{},[]),w=n("Ip0R"),z=n("ZYCi"),V=function(){},P=n("FpXt");n.d(e,"IteratorModuleNgFactory",function(){return j});var j=r.Ga(o,[],function(t){return r.Oa([r.Pa(512,r.j,r.W,[[8,[i.a,I]],[3,r.j],r.v]),r.Pa(4608,w.i,w.h,[r.s,[2,w.n]]),r.Pa(1073742336,w.b,w.b,[]),r.Pa(1073742336,z.n,z.n,[[2,z.t],[2,z.k]]),r.Pa(1073742336,V,V,[]),r.Pa(1073742336,P.a,P.a,[]),r.Pa(1073742336,o,o,[]),r.Pa(1024,z.i,function(){return[[{path:"",component:d}]]},[])])})}}]);