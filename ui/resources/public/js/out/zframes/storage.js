// Compiled by ClojureScript 1.10.520 {}
goog.provide('zframes.storage');
goog.require('cljs.core');
goog.require('re_frame.core');
zframes.storage.keywordize = (function zframes$storage$keywordize(x){
return cljs.core.js__GT_clj.call(null,x,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
});
zframes.storage.remove_item = (function zframes$storage$remove_item(key){
return window.localStorage.removeItem(key);
});
zframes.storage.set_item = (function zframes$storage$set_item(key,val){
return window.localStorage.setItem(cljs.core.name.call(null,key),encodeURIComponent(JSON.stringify(cljs.core.clj__GT_js.call(null,val))));
});
zframes.storage.get_item = (function zframes$storage$get_item(key){
try{return zframes.storage.keywordize.call(null,JSON.parse(decodeURIComponent(window.localStorage.getItem(cljs.core.name.call(null,key)))));
}catch (e23117){if((e23117 instanceof Object)){
var e = e23117;
zframes.storage.remove_item.call(null,key);

return null;
} else {
throw e23117;

}
}});
re_frame.core.reg_cofx.call(null,new cljs.core.Keyword("storage","get","storage/get",-729607478),(function (coeffects,keys){
return cljs.core.reduce.call(null,(function (coef,k){
return cljs.core.assoc_in.call(null,coef,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"storage","storage",1867247511),k], null),zframes.storage.get_item.call(null,k));
}),coeffects,keys);
}));
re_frame.core.reg_fx.call(null,new cljs.core.Keyword("storage","set","storage/set",-2122866619),(function (items){
var seq__23118 = cljs.core.seq.call(null,items);
var chunk__23119 = null;
var count__23120 = (0);
var i__23121 = (0);
while(true){
if((i__23121 < count__23120)){
var vec__23128 = cljs.core._nth.call(null,chunk__23119,i__23121);
var k = cljs.core.nth.call(null,vec__23128,(0),null);
var v = cljs.core.nth.call(null,vec__23128,(1),null);
zframes.storage.set_item.call(null,k,v);


var G__23134 = seq__23118;
var G__23135 = chunk__23119;
var G__23136 = count__23120;
var G__23137 = (i__23121 + (1));
seq__23118 = G__23134;
chunk__23119 = G__23135;
count__23120 = G__23136;
i__23121 = G__23137;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__23118);
if(temp__5720__auto__){
var seq__23118__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23118__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__23118__$1);
var G__23138 = cljs.core.chunk_rest.call(null,seq__23118__$1);
var G__23139 = c__4550__auto__;
var G__23140 = cljs.core.count.call(null,c__4550__auto__);
var G__23141 = (0);
seq__23118 = G__23138;
chunk__23119 = G__23139;
count__23120 = G__23140;
i__23121 = G__23141;
continue;
} else {
var vec__23131 = cljs.core.first.call(null,seq__23118__$1);
var k = cljs.core.nth.call(null,vec__23131,(0),null);
var v = cljs.core.nth.call(null,vec__23131,(1),null);
zframes.storage.set_item.call(null,k,v);


var G__23142 = cljs.core.next.call(null,seq__23118__$1);
var G__23143 = null;
var G__23144 = (0);
var G__23145 = (0);
seq__23118 = G__23142;
chunk__23119 = G__23143;
count__23120 = G__23144;
i__23121 = G__23145;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.core.reg_fx.call(null,new cljs.core.Keyword("storage","remove","storage/remove",1735937899),(function (keys){
var seq__23146 = cljs.core.seq.call(null,keys);
var chunk__23147 = null;
var count__23148 = (0);
var i__23149 = (0);
while(true){
if((i__23149 < count__23148)){
var k = cljs.core._nth.call(null,chunk__23147,i__23149);
zframes.storage.remove_item.call(null,cljs.core.name.call(null,k));


var G__23150 = seq__23146;
var G__23151 = chunk__23147;
var G__23152 = count__23148;
var G__23153 = (i__23149 + (1));
seq__23146 = G__23150;
chunk__23147 = G__23151;
count__23148 = G__23152;
i__23149 = G__23153;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__23146);
if(temp__5720__auto__){
var seq__23146__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23146__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__23146__$1);
var G__23154 = cljs.core.chunk_rest.call(null,seq__23146__$1);
var G__23155 = c__4550__auto__;
var G__23156 = cljs.core.count.call(null,c__4550__auto__);
var G__23157 = (0);
seq__23146 = G__23154;
chunk__23147 = G__23155;
count__23148 = G__23156;
i__23149 = G__23157;
continue;
} else {
var k = cljs.core.first.call(null,seq__23146__$1);
zframes.storage.remove_item.call(null,cljs.core.name.call(null,k));


var G__23158 = cljs.core.next.call(null,seq__23146__$1);
var G__23159 = null;
var G__23160 = (0);
var G__23161 = (0);
seq__23146 = G__23158;
chunk__23147 = G__23159;
count__23148 = G__23160;
i__23149 = G__23161;
continue;
}
} else {
return null;
}
}
break;
}
}));

//# sourceMappingURL=storage.js.map
