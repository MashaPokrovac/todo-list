(function(t){function e(e){for(var i,r,d=e[0],l=e[1],u=e[2],a=0,p=[];a<d.length;a++)r=d[a],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&p.push(o[r][0]),o[r]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);s&&s(e);while(p.length)p.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],i=!0,d=1;d<n.length;d++){var l=n[d];0!==o[l]&&(i=!1)}i&&(c.splice(e--,1),t=r(r.s=n[0]))}return t}var i={},o={app:0},c=[];function r(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=i,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/todo-list/";var d=window["webpackJsonp"]=window["webpackJsonp"]||[],l=d.push.bind(d);d.push=e,d=d.slice();for(var u=0;u<d.length;u++)e(d[u]);var s=l;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"25d6":function(t,e,n){"use strict";n("52f2")},3923:function(t,e,n){"use strict";n("d62f")},"4be8":function(t,e,n){},"52f2":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("7a23"),o=Object(i["d"])("h2",null,"Todos",-1);function c(t,e,n,c,r,d){var l=Object(i["k"])("input-area"),u=Object(i["k"])("todo-list");return Object(i["g"])(),Object(i["c"])("div",null,[Object(i["d"])("header",null,[Object(i["d"])("h3",{ref:"summary",tabindex:"-1"},"Completed:"+Object(i["l"])(d.completedItems)+"/"+Object(i["l"])(r.items.length),513),o]),Object(i["e"])(l,{onAddItem:d.addItem},null,8,["onAddItem"]),Object(i["e"])(u)])}n("4de4"),n("d3b7"),n("7db0");function r(t,e,n,o,c,r){var d=Object(i["k"])("list-item");return Object(i["g"])(),Object(i["c"])("ul",null,[(Object(i["g"])(!0),Object(i["c"])(i["a"],null,Object(i["j"])(r.items,(function(t){return Object(i["g"])(),Object(i["c"])("li",{key:t.id},[Object(i["e"])(d,{title:t.title,text:t.text,id:t.id,completed:t.completed},null,8,["title","text","id","completed"])])})),128))])}var d={class:"btn-wrapper"},l=["disabled"],u={key:1,class:"container"},s={class:"btn-wrapper"};function a(t,e,n,o,c,r){return c.toggleFlag?(Object(i["g"])(),Object(i["c"])("div",{key:0,class:Object(i["f"])(["container",r.isCompleted])},[Object(i["d"])("div",null,[Object(i["d"])("h2",null,Object(i["l"])(n.title),1),Object(i["d"])("p",null,Object(i["l"])(n.text),1)]),Object(i["d"])("div",d,[Object(i["d"])("button",{onClick:e[0]||(e[0]=function(t){return r.providedDeleteItem(n.id)})},"Delete"),Object(i["d"])("button",{ref:n.id,onClick:e[1]||(e[1]=function(){return r.itemEdited&&r.itemEdited.apply(r,arguments)}),disabled:n.completed},"Edit",8,l),Object(i["d"])("button",{onClick:e[2]||(e[2]=function(t){return r.providedToggleCompletedItem(n.id)})},"Done")])],2)):(Object(i["g"])(),Object(i["c"])("div",u,[Object(i["d"])("div",null,[Object(i["n"])(Object(i["d"])("input",{"onUpdate:modelValue":e[3]||(e[3]=function(t){return c.newTitle=t}),ref:n.id},null,512),[[i["m"],c.newTitle,void 0,{lazy:!0,trim:!0}]]),Object(i["n"])(Object(i["d"])("textarea",{"onUpdate:modelValue":e[4]||(e[4]=function(t){return c.newText=t})},null,512),[[i["m"],c.newText,void 0,{lazy:!0,trim:!0}]])]),Object(i["d"])("div",s,[Object(i["d"])("button",{onClick:e[5]||(e[5]=function(){return r.itemCanceled&&r.itemCanceled.apply(r,arguments)})},"Cancel"),Object(i["d"])("button",{onClick:e[6]||(e[6]=function(){return r.saveNewItem&&r.saveNewItem.apply(r,arguments)})},"Save")])]))}var p={inject:["providedDeleteItem","providedSaveItem","providedToggleCompletedItem"],props:["title","text","id","completed"],data:function(){return{toggleFlag:!0,newTitle:this.title,newText:this.text}},computed:{isCompleted:function(){return this.completed&&"completed"}},methods:{inputFocus:function(){var t=this;this.$nextTick((function(){var e=t.$refs[t.id];e.focus()}))},editFocus:function(){var t=this;this.$nextTick((function(){var e=t.$refs[t.id];e.focus()}))},toggleState:function(){this.toggleFlag=!this.toggleFlag},saveNewItem:function(){this.newTitle===this.title&&this.newText===this.text||this.providedSaveItem(this.id,this.newTitle,this.newText),this.toggleState(),this.editFocus()},itemCanceled:function(){this.toggleState(),this.editFocus()},itemEdited:function(){this.toggleState(),this.inputFocus()}}},m=(n("3923"),n("6b0d")),f=n.n(m);const b=f()(p,[["render",a],["__scopeId","data-v-1ef9a852"]]);var v=b,h={components:{ListItem:v},inject:["providedItems"],computed:{items:function(){return this.providedItems()}}};n("25d6");const O=f()(h,[["render",r],["__scopeId","data-v-255c38e4"]]);var j=O,g=n("f5cb"),I=n.n(g),y={components:{TodoList:j},data:function(){return{items:[]}},provide:function(){var t=this;return{providedItems:function(){return t.items},providedDeleteItem:this.deleteItem,providedSaveItem:this.saveItem,providedToggleCompletedItem:this.toggleCompletedItem}},computed:{completedItems:function(){for(var t=0,e=0;e<this.items.length;e++)!0===this.items[e].completed&&t++;return t}},methods:{addItem:function(t,e){this.items.push({title:t,text:e,id:I()("todo-"),completed:!1})},deleteItem:function(t){this.items=this.items.filter((function(e){return e.id!==t})),this.$refs.summary.focus()},saveItem:function(t,e,n){var i=this.items.find((function(e){return e.id===t}));i.title=e,i.text=n},toggleCompletedItem:function(t){var e=this.items.find((function(e){return e.id===t}));e.completed=!e.completed}}};n("acb4");const x=f()(y,[["render",c]]);var w=x,k={class:"input-area"},T={key:0},C={key:1};function S(t,e,n,o,c,r){return Object(i["g"])(),Object(i["c"])("div",k,[c.stateOfInputArea?(Object(i["g"])(),Object(i["c"])("div",T,[Object(i["d"])("div",null,[Object(i["n"])(Object(i["d"])("input",{type:"text",placeholder:"Title...","onUpdate:modelValue":e[0]||(e[0]=function(t){return c.title=t})},null,512),[[i["m"],c.title,void 0,{lazy:!0,trim:!0}]])]),Object(i["d"])("div",null,[Object(i["n"])(Object(i["d"])("textarea",{rows:"4",placeholder:"Add new todo...","onUpdate:modelValue":e[1]||(e[1]=function(t){return c.text=t})},null,512),[[i["m"],c.text,void 0,{lazy:!0,trim:!0}]])]),Object(i["d"])("button",{onClick:e[2]||(e[2]=function(){return r.onSubmit&&r.onSubmit.apply(r,arguments)})},"Add")])):(Object(i["g"])(),Object(i["c"])("div",C,[Object(i["d"])("button",{class:"addBtn",onClick:e[3]||(e[3]=function(){return r.visibilityInputArea&&r.visibilityInputArea.apply(r,arguments)})},"Add new task")]))])}var A={emits:["add-item"],data:function(){return{title:"",text:"",stateOfInputArea:!1}},methods:{visibilityInputArea:function(){this.stateOfInputArea=!this.stateOfInputArea},onSubmit:function(){""===this.title&&""===this.text||(this.$emit("add-item",this.title,this.text),this.title=this.text="",this.visibilityInputArea())}}};n("7ec0");const _=f()(A,[["render",S],["__scopeId","data-v-558ae4a5"]]);var F=_,P=Object(i["b"])(w);P.component("input-area",F),P.component("todo-list",j),P.component("list-item",v),P.mount("#app")},"7ec0":function(t,e,n){"use strict";n("a685")},a685:function(t,e,n){},acb4:function(t,e,n){"use strict";n("4be8")},d62f:function(t,e,n){}});
//# sourceMappingURL=app.3b646462.js.map